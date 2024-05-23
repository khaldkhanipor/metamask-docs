"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[242],{68277:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>c,metadata:()=>r,toc:()=>p});var t=a(74848),s=a(28453);const c={description:"Call Keyring API methods from your companion dapp.",sidebar_position:2,sidebar_label:"Create a companion dapp",tags:["Keyring API"]},i="Create an account management companion dapp",r={id:"features/custom-evm-accounts/create-companion-dapp",title:"Create an account management companion dapp",description:"Call Keyring API methods from your companion dapp.",source:"@site/snaps/features/custom-evm-accounts/create-companion-dapp.md",sourceDirName:"features/custom-evm-accounts",slug:"/features/custom-evm-accounts/create-companion-dapp",permalink:"/snaps/features/custom-evm-accounts/create-companion-dapp",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/features/custom-evm-accounts/create-companion-dapp.md",tags:[{label:"Keyring API",permalink:"/snaps/tags/keyring-api"}],version:"current",sidebarPosition:2,frontMatter:{description:"Call Keyring API methods from your companion dapp.",sidebar_position:2,sidebar_label:"Create a companion dapp",tags:["Keyring API"]},sidebar:"snapsSidebar",previous:{title:"Create an account management Snap",permalink:"/snaps/features/custom-evm-accounts/create-account-snap"},next:{title:"Security guidelines",permalink:"/snaps/features/custom-evm-accounts/security"}},o={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Install the Keyring API",id:"1-install-the-keyring-api",level:3},{value:"2. Create a KeyringSnapRpcClient",id:"2-create-a-keyringsnaprpcclient",level:3},{value:"3. Call Account Management API methods",id:"3-call-account-management-api-methods",level:3},{value:"Example",id:"example",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"create-an-account-management-companion-dapp",children:"Create an account management companion dapp"}),"\n",(0,t.jsx)(n.p,{children:"Create a companion dapp to provide a user interface for your account management Snap.\nCall Keyring API methods from your companion dapp, enabling users to create and interact with custom\nEVM accounts."}),"\n",(0,t.jsx)(n.admonition,{title:"see also",type:"tip",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/snaps/features/custom-evm-accounts/",children:"Custom EVM accounts"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/snaps/features/custom-evm-accounts/create-account-snap",children:"Create an account management Snap"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/snaps/reference/keyring-api/",children:"Keyring API reference"})}),"\n"]})}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.p,{children:["An ",(0,t.jsx)(n.a,{href:"/snaps/features/custom-evm-accounts/create-account-snap",children:"account management Snap"})," set up."]}),"\n",(0,t.jsx)(n.h2,{id:"steps",children:"Steps"}),"\n",(0,t.jsx)(n.h3,{id:"1-install-the-keyring-api",children:"1. Install the Keyring API"}),"\n",(0,t.jsxs)(n.p,{children:["Install the ",(0,t.jsx)(n.a,{href:"https://github.com/MetaMask/keyring-api",children:(0,t.jsx)(n.code,{children:"@metamask/keyring-api"})})," module in your\nproject directory using Yarn or npm:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn add @metamask/keyring-api\n"})}),"\n",(0,t.jsx)(n.p,{children:"or"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install @metamask/keyring-api\n"})}),"\n",(0,t.jsx)(n.h3,{id:"2-create-a-keyringsnaprpcclient",children:"2. Create a KeyringSnapRpcClient"}),"\n",(0,t.jsxs)(n.p,{children:["Create a ",(0,t.jsx)(n.code,{children:"KeyringSnapRpcClient"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'import { KeyringSnapRpcClient } from "@metamask/keyring-api";\nimport { defaultSnapOrigin as snapId } from "../config";\n\nlet client = new KeyringSnapRpcClient(snapId, window.ethereum);\n'})}),"\n",(0,t.jsx)(n.h3,{id:"3-call-account-management-api-methods",children:"3. Call Account Management API methods"}),"\n",(0,t.jsxs)(n.p,{children:["You can now use the ",(0,t.jsx)(n.code,{children:"KeyringSnapRpcClient"})," to invoke\n",(0,t.jsx)(n.a,{href:"/snaps/reference/keyring-api/account-management/",children:"Account Management API"})," methods on your Snap."]}),"\n",(0,t.jsxs)(n.p,{children:["For example, to call ",(0,t.jsx)(n.a,{href:"/snaps/reference/keyring-api/account-management/#keyringlist_accounts",children:(0,t.jsx)(n.code,{children:"keyring_listAccounts"})}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"const accounts = await client.listAccounts();\n"})}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(n.p,{children:["See the ",(0,t.jsx)(n.a,{href:"https://github.com/MetaMask/snap-simple-keyring/tree/main/packages/site",children:"example companion dapp source code"}),"\nfor more information."]})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>r});var t=a(96540);const s={},c=t.createContext(s);function i(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);