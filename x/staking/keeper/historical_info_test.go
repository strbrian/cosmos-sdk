package keeper_test

import (
	cmtproto "github.com/cometbft/cometbft/proto/tendermint/types"

	"cosmossdk.io/collections"
	"cosmossdk.io/math"

	"github.com/cosmos/cosmos-sdk/x/staking/testutil"
	stakingtypes "github.com/cosmos/cosmos-sdk/x/staking/types"
)

// IsValSetSorted reports whether valset is sorted.
func IsValSetSorted(data []stakingtypes.Validator, powerReduction math.Int) bool {
	n := len(data)
	for i := n - 1; i > 0; i-- {
		if stakingtypes.ValidatorsByVotingPower(data).Less(i, i-1, powerReduction) {
			return false
		}
	}
	return true
}

func (s *KeeperTestSuite) TestHistoricalInfo() {
	ctx, keeper := s.ctx, s.stakingKeeper
	require := s.Require()

	_, addrVals := createValAddrs(50)

	validators := make([]stakingtypes.Validator, len(addrVals))

	for i, valAddr := range addrVals {
		validators[i] = testutil.NewValidator(s.T(), valAddr, PKs[i])
	}

	hi := stakingtypes.NewHistoricalInfo(ctx.BlockHeader(), validators, keeper.PowerReduction(ctx))
	require.NoError(keeper.HistoricalInfo.Set(ctx, stakingtypes.GetHistoricalInfoKeyWithoutPrefix(2), hi))

	recv, err := keeper.HistoricalInfo.Get(ctx, stakingtypes.GetHistoricalInfoKeyWithoutPrefix(2))
	require.NoError(err, "HistoricalInfo found after set")
	require.Equal(hi, recv, "HistoricalInfo not equal")
	require.True(IsValSetSorted(recv.Valset, keeper.PowerReduction(ctx)), "HistoricalInfo validators is not sorted")

	require.NoError(keeper.HistoricalInfo.Remove(ctx, stakingtypes.GetHistoricalInfoKeyWithoutPrefix(2)))

	recv, err = keeper.HistoricalInfo.Get(ctx, stakingtypes.GetHistoricalInfoKeyWithoutPrefix(2))
	require.ErrorIs(err, collections.ErrNotFound, "HistoricalInfo not found after delete")
	require.Equal(stakingtypes.HistoricalInfo{}, recv, "HistoricalInfo is not empty")
}

func (s *KeeperTestSuite) TestTrackHistoricalInfo() {
	ctx, keeper := s.ctx, s.stakingKeeper
	require := s.Require()

	_, addrVals := createValAddrs(50)

	// set historical entries in params to 5
	params := stakingtypes.DefaultParams()
	params.HistoricalEntries = 5
	require.NoError(keeper.SetParams(ctx, params))

	// set historical info at 5, 4 which should be pruned
	// and check that it has been stored
	h4 := cmtproto.Header{
		ChainID: "HelloChain",
		Height:  4,
	}
	h5 := cmtproto.Header{
		ChainID: "HelloChain",
		Height:  5,
	}
	valSet := []stakingtypes.Validator{
		testutil.NewValidator(s.T(), addrVals[0], PKs[0]),
		testutil.NewValidator(s.T(), addrVals[1], PKs[1]),
	}
	hi4 := stakingtypes.NewHistoricalInfo(h4, valSet, keeper.PowerReduction(ctx))
	hi5 := stakingtypes.NewHistoricalInfo(h5, valSet, keeper.PowerReduction(ctx))
	require.NoError(keeper.HistoricalInfo.Set(ctx, stakingtypes.GetHistoricalInfoKeyWithoutPrefix(4), hi4))
	require.NoError(keeper.HistoricalInfo.Set(ctx, stakingtypes.GetHistoricalInfoKeyWithoutPrefix(5), hi5))
	recv, err := keeper.HistoricalInfo.Get(ctx, stakingtypes.GetHistoricalInfoKeyWithoutPrefix(4))
	require.NoError(err)
	require.Equal(hi4, recv)
	recv, err = keeper.HistoricalInfo.Get(ctx, stakingtypes.GetHistoricalInfoKeyWithoutPrefix(5))
	require.NoError(err)
	require.Equal(hi5, recv)

	// Set bonded validators in keeper
	val1 := testutil.NewValidator(s.T(), addrVals[2], PKs[2])
	val1.Status = stakingtypes.Bonded // when not bonded, consensus power is Zero
	val1.Tokens = keeper.TokensFromConsensusPower(ctx, 10)
	require.NoError(keeper.SetValidator(ctx, val1))
	require.NoError(keeper.SetLastValidatorPower(ctx, val1.GetOperator(), 10))
	val2 := testutil.NewValidator(s.T(), addrVals[3], PKs[3])
	val1.Status = stakingtypes.Bonded
	val2.Tokens = keeper.TokensFromConsensusPower(ctx, 80)
	require.NoError(keeper.SetValidator(ctx, val2))
	require.NoError(keeper.SetLastValidatorPower(ctx, val2.GetOperator(), 80))

	vals := []stakingtypes.Validator{val1, val2}
	require.True(IsValSetSorted(vals, keeper.PowerReduction(ctx)))

	// Set Header for BeginBlock context
	header := cmtproto.Header{
		ChainID: "HelloChain",
		Height:  10,
	}
	ctx = ctx.WithBlockHeader(header)

	require.NoError(keeper.TrackHistoricalInfo(ctx))

	// Check HistoricalInfo at height 10 is persisted
	expected := stakingtypes.HistoricalInfo{
		Header: header,
		Valset: vals,
	}
	recv, err = keeper.HistoricalInfo.Get(ctx, stakingtypes.GetHistoricalInfoKeyWithoutPrefix(10))
	require.NoError(err, "GetHistoricalInfo failed after BeginBlock")
	require.Equal(expected, recv, "GetHistoricalInfo returned unexpected result")

	// Check HistoricalInfo at height 5, 4 is pruned
	recv, err = keeper.HistoricalInfo.Get(ctx, stakingtypes.GetHistoricalInfoKeyWithoutPrefix(4))
	require.ErrorIs(err, collections.ErrNotFound, "GetHistoricalInfo did not prune earlier height")
	require.Equal(stakingtypes.HistoricalInfo{}, recv, "GetHistoricalInfo at height 4 is not empty after prune")
	recv, err = keeper.HistoricalInfo.Get(ctx, stakingtypes.GetHistoricalInfoKeyWithoutPrefix(5))
	require.ErrorIs(err, collections.ErrNotFound, "GetHistoricalInfo did not prune first prune height")
	require.Equal(stakingtypes.HistoricalInfo{}, recv, "GetHistoricalInfo at height 5 is not empty after prune")
}

func (s *KeeperTestSuite) TestGetAllHistoricalInfo() {
	ctx, keeper := s.ctx, s.stakingKeeper
	require := s.Require()

	_, addrVals := createValAddrs(50)

	valSet := []stakingtypes.Validator{
		testutil.NewValidator(s.T(), addrVals[0], PKs[0]),
		testutil.NewValidator(s.T(), addrVals[1], PKs[1]),
	}

	header1 := cmtproto.Header{ChainID: "HelloChain", Height: 9}
	header2 := cmtproto.Header{ChainID: "HelloChain", Height: 10}
	header3 := cmtproto.Header{ChainID: "HelloChain", Height: 11}

	hist1 := stakingtypes.HistoricalInfo{Header: header1, Valset: valSet}
	hist2 := stakingtypes.HistoricalInfo{Header: header2, Valset: valSet}
	hist3 := stakingtypes.HistoricalInfo{Header: header3, Valset: valSet}

	expHistInfos := []stakingtypes.HistoricalInfo{hist1, hist2, hist3}

	for i, hi := range expHistInfos {
		require.NoError(keeper.HistoricalInfo.Set(ctx, stakingtypes.GetHistoricalInfoKeyWithoutPrefix(int64(9+i)), hi))
	}

	infos, err := keeper.GetAllHistoricalInfo(ctx)
	require.NoError(err)
	require.Equal(expHistInfos, infos)
}
