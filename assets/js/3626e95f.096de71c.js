"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[8469],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var s=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},i=Object.keys(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=s.createContext({}),p=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return s.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},c=s.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||i;return n?s.createElement(h,r(r({ref:t},u),{},{components:n})):s.createElement(h,r({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var p=2;p<i;p++)r[p]=n[p];return s.createElement.apply(null,r)}return s.createElement.apply(null,n)}c.displayName="MDXCreateElement"},31978:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var s=n(87462),a=(n(67294),n(3905));const i={},r="ADR 43: NFT Module",o={unversionedId:"architecture/adr-043-nft-module",id:"architecture/adr-043-nft-module",title:"ADR 43: NFT Module",description:"Changelog",source:"@site/docs/architecture/adr-043-nft-module.md",sourceDirName:"architecture",slug:"/architecture/adr-043-nft-module",permalink:"/main/architecture/adr-043-nft-module",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ADR 042: Group Module",permalink:"/main/architecture/adr-042-group-module"},next:{title:"ADR 044: Guidelines for Updating Protobuf Definitions",permalink:"/main/architecture/adr-044-protobuf-updates-guidelines"}},l={},p=[{value:"Changelog",id:"changelog",level:2},{value:"Status",id:"status",level:2},{value:"Abstract",id:"abstract",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Types",id:"types",level:3},{value:"Class",id:"class",level:4},{value:"NFT",id:"nft",level:4},{value:"<code>Keeper</code> Interface",id:"keeper-interface",level:3},{value:"<code>Msg</code> Service",id:"msg-service",level:3},{value:"Interoperability",id:"interoperability",level:3},{value:"Consequences",id:"consequences",level:2},{value:"Backward Compatibility",id:"backward-compatibility",level:3},{value:"Forward Compatibility",id:"forward-compatibility",level:3},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Neutral",id:"neutral",level:3},{value:"Further Discussions",id:"further-discussions",level:2},{value:"References",id:"references",level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,s.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"adr-43-nft-module"},"ADR 43: NFT Module"),(0,a.kt)("h2",{id:"changelog"},"Changelog"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"2021-05-01: Initial Draft"),(0,a.kt)("li",{parentName:"ul"},"2021-07-02: Review updates"),(0,a.kt)("li",{parentName:"ul"},"2022-06-15: Add batch operation"),(0,a.kt)("li",{parentName:"ul"},"2022-11-11: Remove strict validation of classID and tokenID")),(0,a.kt)("h2",{id:"status"},"Status"),(0,a.kt)("p",null,"PROPOSED"),(0,a.kt)("h2",{id:"abstract"},"Abstract"),(0,a.kt)("p",null,"This ADR defines the ",(0,a.kt)("inlineCode",{parentName:"p"},"x/nft"),' module which is a generic implementation of NFTs, roughly "compatible" with ERC721. ',(0,a.kt)("strong",{parentName:"p"},"Applications using the ",(0,a.kt)("inlineCode",{parentName:"strong"},"x/nft")," module must implement the following functions"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"MsgNewClass")," - Receive the user's request to create a class, and call the ",(0,a.kt)("inlineCode",{parentName:"li"},"NewClass")," of the ",(0,a.kt)("inlineCode",{parentName:"li"},"x/nft")," module."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"MsgUpdateClass")," - Receive the user's request to update a class, and call the ",(0,a.kt)("inlineCode",{parentName:"li"},"UpdateClass")," of the ",(0,a.kt)("inlineCode",{parentName:"li"},"x/nft")," module."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"MsgMintNFT")," - Receive the user's request to mint a nft, and call the ",(0,a.kt)("inlineCode",{parentName:"li"},"MintNFT")," of the ",(0,a.kt)("inlineCode",{parentName:"li"},"x/nft")," module."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"BurnNFT")," - Receive the user's request to burn a nft, and call the ",(0,a.kt)("inlineCode",{parentName:"li"},"BurnNFT")," of the ",(0,a.kt)("inlineCode",{parentName:"li"},"x/nft")," module."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"UpdateNFT")," - Receive the user's request to update a nft, and call the ",(0,a.kt)("inlineCode",{parentName:"li"},"UpdateNFT")," of the ",(0,a.kt)("inlineCode",{parentName:"li"},"x/nft")," module.")),(0,a.kt)("h2",{id:"context"},"Context"),(0,a.kt)("p",null,"NFTs are more than just crypto art, which is very helpful for accruing value to the Cosmos ecosystem. As a result, Cosmos Hub should implement NFT functions and enable a unified mechanism for storing and sending the ownership representative of NFTs as discussed in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/discussions/9065"},"https://github.com/cosmos/cosmos-sdk/discussions/9065"),"."),(0,a.kt)("p",null,"As discussed in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/discussions/9065"},"#9065"),", several potential solutions can be considered:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"irismod/nft and modules/incubator/nft"),(0,a.kt)("li",{parentName:"ul"},"CW721"),(0,a.kt)("li",{parentName:"ul"},"DID NFTs"),(0,a.kt)("li",{parentName:"ul"},"interNFT")),(0,a.kt)("p",null,"Since functions/use cases of NFTs are tightly connected with their logic, it is almost impossible to support all the NFTs' use cases in one Cosmos SDK module by defining and implementing different transaction types."),(0,a.kt)("p",null,"Considering generic usage and compatibility of interchain protocols including IBC and Gravity Bridge, it is preferred to have a generic NFT module design which handles the generic NFTs logic.\nThis design idea can enable composability that application-specific functions should be managed by other modules on Cosmos Hub or on other Zones by importing the NFT module."),(0,a.kt)("p",null,"The current design is based on the work done by ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/irisnet/irismod/tree/master/modules/nft"},"IRISnet team")," and an older implementation in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cosmos/modules/tree/master/incubator/nft"},"Cosmos repository"),"."),(0,a.kt)("h2",{id:"decision"},"Decision"),(0,a.kt)("p",null,"We create a ",(0,a.kt)("inlineCode",{parentName:"p"},"x/nft")," module, which contains the following functionality:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Store NFTs and track their ownership."),(0,a.kt)("li",{parentName:"ul"},"Expose ",(0,a.kt)("inlineCode",{parentName:"li"},"Keeper")," interface for composing modules to transfer, mint and burn NFTs."),(0,a.kt)("li",{parentName:"ul"},"Expose external ",(0,a.kt)("inlineCode",{parentName:"li"},"Message")," interface for users to transfer ownership of their NFTs."),(0,a.kt)("li",{parentName:"ul"},"Query NFTs and their supply information.")),(0,a.kt)("p",null,"The proposed module is a base module for NFT app logic. It's goal it to provide a common layer for storage, basic transfer functionality and IBC. The module should not be used as a standalone.\nInstead an app should create a specialized module to handle app specific logic (eg: NFT ID construction, royalty), user level minting and burning. Moreover an app specialized module should handle auxiliary data to support the app logic (eg indexes, ORM, business data)."),(0,a.kt)("p",null,"All data carried over IBC must be part of the ",(0,a.kt)("inlineCode",{parentName:"p"},"NFT")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"Class")," type described below. The app specific NFT data should be encoded in ",(0,a.kt)("inlineCode",{parentName:"p"},"NFT.data")," for cross-chain integrity. Other objects related to NFT, which are not important for integrity can be part of the app specific module."),(0,a.kt)("h3",{id:"types"},"Types"),(0,a.kt)("p",null,"We propose two main types:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Class")," -- describes NFT class. We can think about it as a smart contract address."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NFT")," -- object representing unique, non fungible asset. Each NFT is associated with a Class.")),(0,a.kt)("h4",{id:"class"},"Class"),(0,a.kt)("p",null,"NFT ",(0,a.kt)("strong",{parentName:"p"},"Class")," is comparable to an ERC-721 smart contract (provides description of a smart contract), under which a collection of NFTs can be created and managed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},"message Class {\n  string id          = 1;\n  string name        = 2;\n  string symbol      = 3;\n  string description = 4;\n  string uri         = 5;\n  string uri_hash    = 6;\n  google.protobuf.Any data = 7;\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"id")," is used as the primary index for storing the class; ",(0,a.kt)("em",{parentName:"li"},"required")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"name")," is a descriptive name of the NFT class; ",(0,a.kt)("em",{parentName:"li"},"optional")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"symbol")," is the symbol usually shown on exchanges for the NFT class; ",(0,a.kt)("em",{parentName:"li"},"optional")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"description")," is a detailed description of the NFT class; ",(0,a.kt)("em",{parentName:"li"},"optional")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"uri")," is a URI for the class metadata stored off chain. It should be a JSON file that contains metadata about the NFT class and NFT data schema (",(0,a.kt)("a",{parentName:"li",href:"https://docs.opensea.io/docs/contract-level-metadata"},"OpenSea example"),"); ",(0,a.kt)("em",{parentName:"li"},"optional")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"uri_hash")," is a hash of the document pointed by uri; ",(0,a.kt)("em",{parentName:"li"},"optional")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"data")," is app specific metadata of the class; ",(0,a.kt)("em",{parentName:"li"},"optional"))),(0,a.kt)("h4",{id:"nft"},"NFT"),(0,a.kt)("p",null,"We define a general model for ",(0,a.kt)("inlineCode",{parentName:"p"},"NFT")," as follows."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},"message NFT {\n  string class_id           = 1;\n  string id                 = 2;\n  string uri                = 3;\n  string uri_hash           = 4;\n  google.protobuf.Any data  = 10;\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"class_id")," is the identifier of the NFT class where the NFT belongs; ",(0,a.kt)("em",{parentName:"p"},"required"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"id")," is an identifier of the NFT, unique within the scope of its class. It is specified by the creator of the NFT and may be expanded to use DID in the future. ",(0,a.kt)("inlineCode",{parentName:"p"},"class_id")," combined with ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," uniquely identifies an NFT and is used as the primary index for storing the NFT; ",(0,a.kt)("em",{parentName:"p"},"required")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-text"},"{class_id}/{id} --\x3e NFT (bytes)\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"uri")," is a URI for the NFT metadata stored off chain. Should point to a JSON file that contains metadata about this NFT (Ref: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.opensea.io/docs/metadata-standards"},"ERC721 standard and OpenSea extension"),"); ",(0,a.kt)("em",{parentName:"p"},"required"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"uri_hash")," is a hash of the document pointed by uri; ",(0,a.kt)("em",{parentName:"p"},"optional"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"data")," is an app specific data of the NFT. CAN be used by composing modules to specify additional properties of the NFT; ",(0,a.kt)("em",{parentName:"p"},"optional")))),(0,a.kt)("p",null,"This ADR doesn't specify values that ",(0,a.kt)("inlineCode",{parentName:"p"},"data")," can take; however, best practices recommend upper-level NFT modules clearly specify their contents.  Although the value of this field doesn't provide the additional context required to manage NFT records, which means that the field can technically be removed from the specification, the field's existence allows basic informational/UI functionality."),(0,a.kt)("h3",{id:"keeper-interface"},(0,a.kt)("inlineCode",{parentName:"h3"},"Keeper")," Interface"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"type Keeper interface {\n  NewClass(ctx sdk.Context,class Class)\n  UpdateClass(ctx sdk.Context,class Class)\n\n  Mint(ctx sdk.Context,nft NFT\uff0creceiver sdk.AccAddress)   // updates totalSupply\n  BatchMint(ctx sdk.Context, tokens []NFT,receiver sdk.AccAddress) error\n\n  Burn(ctx sdk.Context, classId string, nftId string)    // updates totalSupply\n  BatchBurn(ctx sdk.Context, classID string, nftIDs []string) error\n\n  Update(ctx sdk.Context, nft NFT)\n  BatchUpdate(ctx sdk.Context, tokens []NFT) error\n\n  Transfer(ctx sdk.Context, classId string, nftId string, receiver sdk.AccAddress)\n  BatchTransfer(ctx sdk.Context, classID string, nftIDs []string, receiver sdk.AccAddress) error\n\n  GetClass(ctx sdk.Context, classId string) Class\n  GetClasses(ctx sdk.Context) []Class\n\n  GetNFT(ctx sdk.Context, classId string, nftId string) NFT\n  GetNFTsOfClassByOwner(ctx sdk.Context, classId string, owner sdk.AccAddress) []NFT\n  GetNFTsOfClass(ctx sdk.Context, classId string) []NFT\n\n  GetOwner(ctx sdk.Context, classId string, nftId string) sdk.AccAddress\n  GetBalance(ctx sdk.Context, classId string, owner sdk.AccAddress) uint64\n  GetTotalSupply(ctx sdk.Context, classId string) uint64\n}\n")),(0,a.kt)("p",null,"Other business logic implementations should be defined in composing modules that import ",(0,a.kt)("inlineCode",{parentName:"p"},"x/nft")," and use its ",(0,a.kt)("inlineCode",{parentName:"p"},"Keeper"),"."),(0,a.kt)("h3",{id:"msg-service"},(0,a.kt)("inlineCode",{parentName:"h3"},"Msg")," Service"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},"service Msg {\n  rpc Send(MsgSend)         returns (MsgSendResponse);\n}\n\nmessage MsgSend {\n  string class_id = 1;\n  string id       = 2;\n  string sender   = 3;\n  string reveiver = 4;\n}\nmessage MsgSendResponse {}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"MsgSend")," can be used to transfer the ownership of an NFT to another address."),(0,a.kt)("p",null,"The implementation outline of the server is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"type msgServer struct{\n  k Keeper\n}\n\nfunc (m msgServer) Send(ctx context.Context, msg *types.MsgSend) (*types.MsgSendResponse, error) {\n  // check current ownership\n  assertEqual(msg.Sender, m.k.GetOwner(msg.ClassId, msg.Id))\n\n  // transfer ownership\n  m.k.Transfer(msg.ClassId, msg.Id, msg.Receiver)\n\n  return &types.MsgSendResponse{}, nil\n}\n")),(0,a.kt)("p",null,"The query service methods for the ",(0,a.kt)("inlineCode",{parentName:"p"},"x/nft")," module are:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},'service Query {\n  // Balance queries the number of NFTs of a given class owned by the owner, same as balanceOf in ERC721\n  rpc Balance(QueryBalanceRequest) returns (QueryBalanceResponse) {\n    option (google.api.http).get = "/cosmos/nft/v1beta1/balance/{owner}/{class_id}";\n  }\n\n  // Owner queries the owner of the NFT based on its class and id, same as ownerOf in ERC721\n  rpc Owner(QueryOwnerRequest) returns (QueryOwnerResponse) {\n    option (google.api.http).get = "/cosmos/nft/v1beta1/owner/{class_id}/{id}";\n  }\n\n  // Supply queries the number of NFTs from the given class, same as totalSupply of ERC721.\n  rpc Supply(QuerySupplyRequest) returns (QuerySupplyResponse) {\n    option (google.api.http).get = "/cosmos/nft/v1beta1/supply/{class_id}";\n  }\n\n  // NFTs queries all NFTs of a given class or owner,choose at least one of the two, similar to tokenByIndex in ERC721Enumerable\n  rpc NFTs(QueryNFTsRequest) returns (QueryNFTsResponse) {\n    option (google.api.http).get = "/cosmos/nft/v1beta1/nfts";\n  }\n\n  // NFT queries an NFT based on its class and id.\n  rpc NFT(QueryNFTRequest) returns (QueryNFTResponse) {\n    option (google.api.http).get = "/cosmos/nft/v1beta1/nfts/{class_id}/{id}";\n  }\n\n  // Class queries an NFT class based on its id\n  rpc Class(QueryClassRequest) returns (QueryClassResponse) {\n    option (google.api.http).get = "/cosmos/nft/v1beta1/classes/{class_id}";\n  }\n\n  // Classes queries all NFT classes\n  rpc Classes(QueryClassesRequest) returns (QueryClassesResponse) {\n    option (google.api.http).get = "/cosmos/nft/v1beta1/classes";\n  }\n}\n\n// QueryBalanceRequest is the request type for the Query/Balance RPC method\nmessage QueryBalanceRequest {\n  string class_id = 1;\n  string owner    = 2;\n}\n\n// QueryBalanceResponse is the response type for the Query/Balance RPC method\nmessage QueryBalanceResponse {\n  uint64 amount = 1;\n}\n\n// QueryOwnerRequest is the request type for the Query/Owner RPC method\nmessage QueryOwnerRequest {\n  string class_id = 1;\n  string id       = 2;\n}\n\n// QueryOwnerResponse is the response type for the Query/Owner RPC method\nmessage QueryOwnerResponse {\n  string owner = 1;\n}\n\n// QuerySupplyRequest is the request type for the Query/Supply RPC method\nmessage QuerySupplyRequest {\n  string class_id = 1;\n}\n\n// QuerySupplyResponse is the response type for the Query/Supply RPC method\nmessage QuerySupplyResponse {\n  uint64 amount = 1;\n}\n\n// QueryNFTstRequest is the request type for the Query/NFTs RPC method\nmessage QueryNFTsRequest {\n  string                                class_id   = 1;\n  string                                owner      = 2;\n  cosmos.base.query.v1beta1.PageRequest pagination = 3;\n}\n\n// QueryNFTsResponse is the response type for the Query/NFTs RPC methods\nmessage QueryNFTsResponse {\n  repeated cosmos.nft.v1beta1.NFT        nfts       = 1;\n  cosmos.base.query.v1beta1.PageResponse pagination = 2;\n}\n\n// QueryNFTRequest is the request type for the Query/NFT RPC method\nmessage QueryNFTRequest {\n  string class_id = 1;\n  string id       = 2;\n}\n\n// QueryNFTResponse is the response type for the Query/NFT RPC method\nmessage QueryNFTResponse {\n  cosmos.nft.v1beta1.NFT nft = 1;\n}\n\n// QueryClassRequest is the request type for the Query/Class RPC method\nmessage QueryClassRequest {\n  string class_id = 1;\n}\n\n// QueryClassResponse is the response type for the Query/Class RPC method\nmessage QueryClassResponse {\n  cosmos.nft.v1beta1.Class class = 1;\n}\n\n// QueryClassesRequest is the request type for the Query/Classes RPC method\nmessage QueryClassesRequest {\n  // pagination defines an optional pagination for the request.\n  cosmos.base.query.v1beta1.PageRequest pagination = 1;\n}\n\n// QueryClassesResponse is the response type for the Query/Classes RPC method\nmessage QueryClassesResponse {\n  repeated cosmos.nft.v1beta1.Class      classes    = 1;\n  cosmos.base.query.v1beta1.PageResponse pagination = 2;\n}\n')),(0,a.kt)("h3",{id:"interoperability"},"Interoperability"),(0,a.kt)("p",null,"Interoperability is all about reusing assets between modules and chains. The former one is achieved by ADR-33: Protobuf client - server communication. At the time of writing ADR-33 is not finalized. The latter is achieved by IBC. Here we will focus on the IBC side.\nIBC is implemented per module. Here, we aligned that NFTs will be recorded and managed in the x/nft. This requires creation of a new IBC standard and implementation of it."),(0,a.kt)("p",null,"For IBC interoperability, NFT custom modules MUST use the NFT object type understood by the IBC client. So, for x/nft interoperability, custom NFT implementations (example: x/cryptokitty) should use the canonical x/nft module and proxy all NFT balance keeping functionality to x/nft or else re-implement all functionality using the NFT object type understood by the IBC client. In other words: x/nft becomes the standard NFT registry for all Cosmos NFTs (example: x/cryptokitty will register a kitty NFT in x/nft and use x/nft for book keeping). This was ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/discussions/9065#discussioncomment-873206"},"discussed")," in the context of using x/bank as a general asset balance book. Not using x/nft will require implementing another module for IBC."),(0,a.kt)("h2",{id:"consequences"},"Consequences"),(0,a.kt)("h3",{id:"backward-compatibility"},"Backward Compatibility"),(0,a.kt)("p",null,"No backward incompatibilities."),(0,a.kt)("h3",{id:"forward-compatibility"},"Forward Compatibility"),(0,a.kt)("p",null,"This specification conforms to the ERC-721 smart contract specification for NFT identifiers. Note that ERC-721 defines uniqueness based on (contract address, uint256 tokenId), and we conform to this implicitly because a single module is currently aimed to track NFT identifiers. Note: use of the (mutable) data field to determine uniqueness is not safe.s"),(0,a.kt)("h3",{id:"positive"},"Positive"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"NFT identifiers available on Cosmos Hub."),(0,a.kt)("li",{parentName:"ul"},"Ability to build different NFT modules for the Cosmos Hub, e.g., ERC-721."),(0,a.kt)("li",{parentName:"ul"},"NFT module which supports interoperability with IBC and other cross-chain infrastructures like Gravity Bridge")),(0,a.kt)("h3",{id:"negative"},"Negative"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"New IBC app is required for x/nft"),(0,a.kt)("li",{parentName:"ul"},"CW721 adapter is required")),(0,a.kt)("h3",{id:"neutral"},"Neutral"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Other functions need more modules. For example, a custody module is needed for NFT trading function, a collectible module is needed for defining NFT properties.")),(0,a.kt)("h2",{id:"further-discussions"},"Further Discussions"),(0,a.kt)("p",null,"For other kinds of applications on the Hub, more app-specific modules can be developed in the future:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"x/nft/custody"),": custody of NFTs to support trading functionality."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"x/nft/marketplace"),": selling and buying NFTs using sdk.Coins."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"x/fractional"),": a module to split an ownership of an asset (NFT or other assets) for multiple stakeholder. ",(0,a.kt)("inlineCode",{parentName:"li"},"x/group"),"  should work for most of the cases.")),(0,a.kt)("p",null,"Other networks in the Cosmos ecosystem could design and implement their own NFT modules for specific NFT applications and use cases."),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Initial discussion: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/discussions/9065"},"https://github.com/cosmos/cosmos-sdk/discussions/9065")),(0,a.kt)("li",{parentName:"ul"},"x/nft: initialize module: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/pull/9174"},"https://github.com/cosmos/cosmos-sdk/pull/9174")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/blob/main/docs/architecture/adr-033-protobuf-inter-module-comm.md"},"ADR 033"))))}d.isMDXComponent=!0}}]);