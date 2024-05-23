"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[3623],{8486:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var o=e(74848),s=e(28453);const a={sidebar_position:3,description:"Learn about the contract proxy class in Unity.",tags:["Unity SDK"]},r="Contract proxy class",c={id:"how-to/use-sdk/gaming/unity/smart-contracts/contract-proxy-class",title:"Contract proxy class",description:"Learn about the contract proxy class in Unity.",source:"@site/wallet/how-to/use-sdk/gaming/unity/smart-contracts/contract-proxy-class.md",sourceDirName:"how-to/use-sdk/gaming/unity/smart-contracts",slug:"/how-to/use-sdk/gaming/unity/smart-contracts/contract-proxy-class",permalink:"/wallet/how-to/use-sdk/gaming/unity/smart-contracts/contract-proxy-class",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/use-sdk/gaming/unity/smart-contracts/contract-proxy-class.md",tags:[{label:"Unity SDK",permalink:"/wallet/tags/unity-sdk"}],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"Learn about the contract proxy class in Unity.",tags:["Unity SDK"]},sidebar:"walletSidebar",previous:{title:"Contract factory",permalink:"/wallet/how-to/use-sdk/gaming/unity/smart-contracts/contract-factory"},next:{title:"Contract provider",permalink:"/wallet/how-to/use-sdk/gaming/unity/smart-contracts/contract-provider"}},i={},l=[];function d(t){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",li:"li",p:"p",ul:"ul",...(0,s.R)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"contract-proxy-class",children:"Contract proxy class"}),"\n",(0,o.jsxs)(n.p,{children:["When ",(0,o.jsx)(n.a,{href:"/wallet/how-to/use-sdk/gaming/unity/smart-contracts/",children:"interacting with smart contracts in Unity"}),", the contract proxy class is responsible\nfor performing:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Transaction serialization"}),"\n",(0,o.jsx)(n.li,{children:"Transaction execution"}),"\n",(0,o.jsx)(n.li,{children:"Transaction result deserialization"}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["The contract proxy class is also responsible for invoking the ",(0,o.jsx)(n.a,{href:"/wallet/how-to/use-sdk/gaming/unity/smart-contracts/contract-provider",children:"provider"})," and attempts\nto support both asynchronous and synchronous provider objects."]}),"\n",(0,o.jsx)(n.p,{children:"Since the proxy class is responsible for a lot, some parts of the class may be decoupled into their\nown components.\nFor example, transaction serialization and deserialization is not very customizable and will likely\nbe moved into its own component to allow more extendability."}),"\n",(0,o.jsxs)(n.admonition,{title:"important",type:"caution",children:[(0,o.jsxs)(n.p,{children:["The contract proxy class should be considered an internal and unstable API.\nYou should never need to inherit the ",(0,o.jsx)(n.code,{children:"Contract"})," class, unless you're using the\n",(0,o.jsx)(n.a,{href:"/wallet/how-to/use-sdk/gaming/unity/smart-contracts/contract-factory#backed-type-contract-factory",children:"backed type contract factory"}),".\nHowever, the ",(0,o.jsx)(n.a,{href:"/wallet/how-to/use-sdk/gaming/unity/smart-contracts/#generate-contract-code",children:"contract code generator"})," already generates these\nclasses for you."]}),(0,o.jsxs)(n.p,{children:["You only  need to use ",(0,o.jsx)(n.code,{children:"Contract.Attach<T>(string address, IProvider provider)"}),"."]})]})]})}function u(t={}){const{wrapper:n}={...(0,s.R)(),...t.components};return n?(0,o.jsx)(n,{...t,children:(0,o.jsx)(d,{...t})}):d(t)}},28453:(t,n,e)=>{e.d(n,{R:()=>r,x:()=>c});var o=e(96540);const s={},a=o.createContext(s);function r(t){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function c(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:r(t.components),o.createElement(a.Provider,{value:n},t.children)}}}]);