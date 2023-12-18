"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[6570],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),o=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=o(e.components);return r.createElement(d.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),c=o(n),k=a,g=c["".concat(d,".").concat(k)]||c[k]||m[k]||i;return n?r.createElement(g,s(s({ref:t},l),{},{components:n})):r.createElement(g,s({ref:t},l))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=k;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p[c]="string"==typeof e?e:a,s[1]=p;for(var o=2;o<i;o++)s[o]=n[o];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},17938:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>o});var r=n(87462),a=(n(67294),n(3905));const i={},s="Class: SnapRpcSender",p={unversionedId:"reference/keyring-api/classes/SnapRpcSender",id:"reference/keyring-api/classes/SnapRpcSender",title:"Class: SnapRpcSender",description:"Implementation of the Sender interface that can be used to send requests",source:"@site/snaps/reference/keyring-api/classes/SnapRpcSender.md",sourceDirName:"reference/keyring-api/classes",slug:"/reference/keyring-api/classes/SnapRpcSender",permalink:"/redirect-install-snaps-page/snaps/reference/keyring-api/classes/SnapRpcSender",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/reference/keyring-api/classes/SnapRpcSender.md",tags:[],version:"current",frontMatter:{},sidebar:"snapsSidebar",previous:{title:"Class: MethodNotSupportedError",permalink:"/redirect-install-snaps-page/snaps/reference/keyring-api/classes/MethodNotSupportedError"},next:{title:"Type alias: Keyring",permalink:"/redirect-install-snaps-page/snaps/reference/keyring-api/type-aliases/Keyring"}},d={},o=[{value:"Implements",id:"implements",level:2},{value:"Constructors",id:"constructors",level:2},{value:"new SnapRpcSender(origin, provider)",id:"new-snaprpcsenderorigin-provider",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Source",id:"source",level:4},{value:"Properties",id:"properties",level:2},{value:"#origin",id:"origin",level:3},{value:"Source",id:"source-1",level:4},{value:"#provider",id:"provider",level:3},{value:"Source",id:"source-2",level:4},{value:"Methods",id:"methods",level:2},{value:"send()",id:"send",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns",level:4},{value:"Implementation of",id:"implementation-of",level:4},{value:"Source",id:"source-3",level:4}],l={toc:o},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"class-snaprpcsender"},"Class: SnapRpcSender"),(0,a.kt)("p",null,"Implementation of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Sender")," interface that can be used to send requests\nto a snap through the snap JSON-RPC API."),(0,a.kt)("h2",{id:"implements"},"Implements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/redirect-install-snaps-page/snaps/reference/keyring-api/type-aliases/Sender"},(0,a.kt)("inlineCode",{parentName:"a"},"Sender")))),(0,a.kt)("h2",{id:"constructors"},"Constructors"),(0,a.kt)("h3",{id:"new-snaprpcsenderorigin-provider"},"new SnapRpcSender(origin, provider)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"new SnapRpcSender(origin, provider): SnapRpcSender\n")),(0,a.kt)("p",null,"Create a new instance of ",(0,a.kt)("inlineCode",{parentName:"p"},"SnapRpcSender"),"."),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"origin")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The caller's origin.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"provider")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"MetaMaskInpageProvider")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The ",(0,a.kt)("inlineCode",{parentName:"td"},"MetaMaskInpageProvider")," instance to use.")))),(0,a.kt)("h4",{id:"source"},"Source"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/keyring-api/blob/1c8eeb9/src/keyring-snap-rpc-client.ts#L26"},"external/keyring-api/src/keyring-snap-rpc-client.ts:26")),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"origin"},"#origin"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"private #origin: string;\n")),(0,a.kt)("h4",{id:"source-1"},"Source"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/keyring-api/blob/1c8eeb9/src/keyring-snap-rpc-client.ts#L16"},"external/keyring-api/src/keyring-snap-rpc-client.ts:16")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"provider"},"#provider"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"private #provider: MetaMaskInpageProvider;\n")),(0,a.kt)("h4",{id:"source-2"},"Source"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/keyring-api/blob/1c8eeb9/src/keyring-snap-rpc-client.ts#L18"},"external/keyring-api/src/keyring-snap-rpc-client.ts:18")),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"send"},"send()"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'send(request): Promise<\n  | null\n  | string[]\n  | {\n  address: string;\n  id: string;\n  name: string;\n  options: null | Record<string, Json>;\n  supportedMethods: (\n     | "personal_sign"\n     | "eth_sendTransaction"\n     | "eth_sign"\n     | "eth_signTransaction"\n     | "eth_signTypedData"\n     | "eth_signTypedData_v1"\n     | "eth_signTypedData_v2"\n     | "eth_signTypedData_v3"\n     | "eth_signTypedData_v4")[];\n  type: "eip155:eoa" | "eip155:erc4337";\n  }\n  | {\n  account: string;\n  request: { id: string; jsonrpc: "2.0"; method: string; } | { id: string; jsonrpc: "2.0"; method: string; params: Record<string, Json> | Json[]; };\n  scope: string;\n  }\n  | {\n  pending: true;\n  }\n  | {\n  pending: false;\n  result: Json;\n  }\n  | {\n  address: string;\n  id: string;\n  name: string;\n  options: null | Record<string, Json>;\n  supportedMethods: (\n     | "personal_sign"\n     | "eth_sendTransaction"\n     | "eth_sign"\n     | "eth_signTransaction"\n     | "eth_signTypedData"\n     | "eth_signTypedData_v1"\n     | "eth_signTypedData_v2"\n     | "eth_signTypedData_v3"\n     | "eth_signTypedData_v4")[];\n  type: "eip155:eoa" | "eip155:erc4337";\n  }[]\n  | {\n  account: string;\n  request: { id: string; jsonrpc: "2.0"; method: string; } | { id: string; jsonrpc: "2.0"; method: string; params: Record<string, Json> | Json[]; };\n  scope: string;\n}[]>\n')),(0,a.kt)("p",null,"Send a request to the snap and return the response."),(0,a.kt)("h4",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"request")),(0,a.kt)("td",{parentName:"tr",align:"left"},"|"," ","{","   ",(0,a.kt)("inlineCode",{parentName:"td"},"id"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"string"),";   ",(0,a.kt)("inlineCode",{parentName:"td"},"jsonrpc"),": ",(0,a.kt)("inlineCode",{parentName:"td"},'"2.0"'),";   ",(0,a.kt)("inlineCode",{parentName:"td"},"method"),": ",(0,a.kt)("inlineCode",{parentName:"td"},'"keyring_listAccounts"'),";   }   ","|"," ","{","   ",(0,a.kt)("inlineCode",{parentName:"td"},"id"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"string"),";   ",(0,a.kt)("inlineCode",{parentName:"td"},"jsonrpc"),": ",(0,a.kt)("inlineCode",{parentName:"td"},'"2.0"'),";   ",(0,a.kt)("inlineCode",{parentName:"td"},"method"),": ",(0,a.kt)("inlineCode",{parentName:"td"},'"keyring_getAccount"'),";   ",(0,a.kt)("inlineCode",{parentName:"td"},"params"),": ","{"," id: string; };   }   ","|"," ","{","   ",(0,a.kt)("inlineCode",{parentName:"td"},"id"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"string"),";   ",(0,a.kt)("inlineCode",{parentName:"td"},"jsonrpc"),": ",(0,a.kt)("inlineCode",{parentName:"td"},'"2.0"'),";   ",(0,a.kt)("inlineCode",{parentName:"td"},"method"),": ",(0,a.kt)("inlineCode",{parentName:"td"},'"keyring_createAccount"'),";   ",(0,a.kt)("inlineCode",{parentName:"td"},"params"),": ","{"," name: string; options: Record<string, Json",">"," ","|"," null; };   }   ","|"," ","{","   ",(0,a.kt)("inlineCode",{parentName:"td"},"id"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"string"),";   ",(0,a.kt)("inlineCode",{parentName:"td"},"jsonrpc"),": ",(0,a.kt)("inlineCode",{parentName:"td"},'"2.0"'),";   ",(0,a.kt)("inlineCode",{parentName:"td"},"method"),": ",(0,a.kt)("inlineCode",{parentName:"td"},'"keyring_filterAccountChains"'),";   ",(0,a.kt)("inlineCode",{parentName:"td"},"params"),": ","{"," id: string; chains: string[]; };   }   ","|"," ","{","   ",(0,a.kt)("inlineCode",{parentName:"td"},"id"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"string"),";   ",(0,a.kt)("inlineCode",{parentName:"td"},"jsonrpc"),": ",(0,a.kt)("inlineCode",{parentName:"td"},'"2.0"'),";   ",(0,a.kt)("inlineCode",{parentName:"td"},"method"),": ",(0,a.kt)("inlineCode",{parentName:"td"},'"keyring_updateAccount"'),";   ",(0,a.kt)("inlineCode",{parentName:"td"},"params"),": ","{"," account: ","{"," id: string; name: string; address: string; options: Record<string, Json",">"," ","|",' null; supportedMethods: ("personal',"_",'sign" ',"|",' "eth',"_",'sendTransaction" ',"|",' "eth',"_",'sign" ',"|",' "eth',"_",'signTransaction" ',"|",' "eth',"_",'signTypedData" ',"|",' "eth',"_","signTypedData","_",'v1" ',"|",' "eth',"_","signTypedData","_",'v2" ',"|",' "eth',"_","signTypedData","_",'v3" ',"|",' "eth',"_","signTypedData","_",'v4")[]; type: "eip155:eoa" ',"|",' "eip155:erc4337"; }; };   }   ',"|"," ","{","   ",(0,a.kt)("inlineCode",{parentName:"td"},"id"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"string"),";   ",(0,a.kt)("inlineCode",{parentName:"td"},"jsonrpc"),": ",(0,a.kt)("inlineCode",{parentName:"td"},'"2.0"'),";   ",(0,a.kt)("inlineCode",{parentName:"td"},"method"),": ",(0,a.kt)("inlineCode",{parentName:"td"},'"keyring_deleteAccount"'),";   ",(0,a.kt)("inlineCode",{parentName:"td"},"params"),": ","{"," id: string; };   }   ","|"," ","{","   ",(0,a.kt)("inlineCode",{parentName:"td"},"id"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"string"),";   ",(0,a.kt)("inlineCode",{parentName:"td"},"jsonrpc"),": ",(0,a.kt)("inlineCode",{parentName:"td"},'"2.0"'),";   ",(0,a.kt)("inlineCode",{parentName:"td"},"method"),": ",(0,a.kt)("inlineCode",{parentName:"td"},'"keyring_listRequests"'),";   }   ","|"," ","{","   ",(0,a.kt)("inlineCode",{parentName:"td"},"id"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"string"),";   ",(0,a.kt)("inlineCode",{parentName:"td"},"jsonrpc"),": ",(0,a.kt)("inlineCode",{parentName:"td"},'"2.0"'),";   ",(0,a.kt)("inlineCode",{parentName:"td"},"method"),": ",(0,a.kt)("inlineCode",{parentName:"td"},'"keyring_getRequest"'),";   ",(0,a.kt)("inlineCode",{parentName:"td"},"params"),": ","{"," id: string; };   }   ","|"," ","{","   ",(0,a.kt)("inlineCode",{parentName:"td"},"id"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"string"),";   ",(0,a.kt)("inlineCode",{parentName:"td"},"jsonrpc"),": ",(0,a.kt)("inlineCode",{parentName:"td"},'"2.0"'),";   ",(0,a.kt)("inlineCode",{parentName:"td"},"method"),": ",(0,a.kt)("inlineCode",{parentName:"td"},'"keyring_submitRequest"'),";   ",(0,a.kt)("inlineCode",{parentName:"td"},"params"),": ","{"," account: string; scope: string; request: ","{",' id: string; jsonrpc: "2.0"; method: string; } ',"|"," ","{",' id: string; jsonrpc: "2.0"; method: string; params: Record<string, Json',">"," ","|"," Json[]; }; };   }   ","|"," ","{","   ",(0,a.kt)("inlineCode",{parentName:"td"},"id"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"string"),";   ",(0,a.kt)("inlineCode",{parentName:"td"},"jsonrpc"),": ",(0,a.kt)("inlineCode",{parentName:"td"},'"2.0"'),";   ",(0,a.kt)("inlineCode",{parentName:"td"},"method"),": ",(0,a.kt)("inlineCode",{parentName:"td"},'"keyring_approveRequest"'),";   ",(0,a.kt)("inlineCode",{parentName:"td"},"params"),": ","{"," id: string; };   }   ","|"," ","{","   ",(0,a.kt)("inlineCode",{parentName:"td"},"id"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"string"),";   ",(0,a.kt)("inlineCode",{parentName:"td"},"jsonrpc"),": ",(0,a.kt)("inlineCode",{parentName:"td"},'"2.0"'),";   ",(0,a.kt)("inlineCode",{parentName:"td"},"method"),": ",(0,a.kt)("inlineCode",{parentName:"td"},'"keyring_rejectRequest"'),";   ",(0,a.kt)("inlineCode",{parentName:"td"},"params"),": ","{"," id: string; };   }"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The JSON-RPC request to send to the snap.")))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,"A promise that resolves to the response of the request."),(0,a.kt)("h4",{id:"implementation-of"},"Implementation of"),(0,a.kt)("p",null,"Sender.send"),(0,a.kt)("h4",{id:"source-3"},"Source"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/keyring-api/blob/1c8eeb9/src/keyring-snap-rpc-client.ts#L37"},"external/keyring-api/src/keyring-snap-rpc-client.ts:37")))}m.isMDXComponent=!0}}]);