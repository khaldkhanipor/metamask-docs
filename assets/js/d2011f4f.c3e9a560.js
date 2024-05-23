"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[9175],{3576:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>l,frontMatter:()=>a,metadata:()=>r,toc:()=>h});var s=i(74848),t=i(28453);const a={description:"Learn about the RPC methods for signing transactions in MetaMask.",sidebar_position:5},d="Signing methods",r={id:"concepts/signing-methods",title:"Signing methods",description:"Learn about the RPC methods for signing transactions in MetaMask.",source:"@site/wallet/concepts/signing-methods.md",sourceDirName:"concepts",slug:"/concepts/signing-methods",permalink:"/wallet/concepts/signing-methods",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/concepts/signing-methods.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{description:"Learn about the RPC methods for signing transactions in MetaMask.",sidebar_position:5},sidebar:"walletSidebar",previous:{title:"Convenience libraries",permalink:"/wallet/concepts/convenience-libraries"},next:{title:"Wallet interoperability",permalink:"/wallet/concepts/wallet-interoperability"}},o={},h=[{value:"<code>eth_signTypedData_v4</code>",id:"eth_signtypeddata_v4",level:3},{value:"<code>personal_sign</code>",id:"personal_sign",level:3},{value:"Deprecated signing methods",id:"deprecated-signing-methods",level:2},{value:"<code>eth_sign</code>",id:"eth_sign",level:3},{value:"<code>eth_signTypedData_v1</code> and <code>eth_signTypedData_v3</code>",id:"eth_signtypeddata_v1-and-eth_signtypeddata_v3",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"signing-methods",children:"Signing methods"}),"\n",(0,s.jsxs)(n.p,{children:["This page describes the signing RPC methods in MetaMask.\nLearn how to ",(0,s.jsx)(n.a,{href:"/wallet/how-to/sign-data/",children:"use the recommended signing methods"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"eth_signtypeddata_v4",children:(0,s.jsx)(n.code,{children:"eth_signTypedData_v4"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/wallet/reference/eth_signtypeddata_v4",children:(0,s.jsx)(n.code,{children:"eth_signTypedData_v4"})}),"\nis:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Cheap to verify on chain."}),"\n",(0,s.jsx)(n.li,{children:"Human-readable."}),"\n",(0,s.jsx)(n.li,{children:"Protected against phishing signatures."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["If onchain verifiability cost is a high priority,\n",(0,s.jsxs)(n.a,{href:"/wallet/how-to/sign-data/#use-eth_signtypeddata_v4",children:["use ",(0,s.jsx)(n.code,{children:"eth_signTypedData_v4"})]}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"personal_sign",children:(0,s.jsx)(n.code,{children:"personal_sign"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/wallet/reference/personal_sign",children:(0,s.jsx)(n.code,{children:"personal_sign"})}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Displays human-readable text when UTF-8 encoded, making it a popular choice for site logins\n(for example, ",(0,s.jsx)(n.a,{href:"/wallet/how-to/sign-data/siwe",children:"Sign-In with Ethereum"}),")."]}),"\n",(0,s.jsx)(n.li,{children:"Is protected against phishing signatures."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The text prefix of ",(0,s.jsx)(n.code,{children:"personal_sign"})," makes signatures expensive to verify on-chain.\nIf onchain verifiability cost is not a priority, you can\n",(0,s.jsxs)(n.a,{href:"/wallet/how-to/sign-data/#use-personal_sign",children:["use ",(0,s.jsx)(n.code,{children:"personal_sign"})]}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"deprecated-signing-methods",children:"Deprecated signing methods"}),"\n",(0,s.jsx)(n.admonition,{title:"important",type:"caution",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"eth_sign"}),", ",(0,s.jsx)(n.code,{children:"eth_signTypedData_v1"}),", and ",(0,s.jsx)(n.code,{children:"eth_signTypedData_v3"})," are deprecated.\nUse ",(0,s.jsx)(n.code,{children:"eth_signTypedData_v4"})," or ",(0,s.jsx)(n.code,{children:"personal_sign"}),"."]})}),"\n",(0,s.jsx)(n.h3,{id:"eth_sign",children:(0,s.jsx)(n.code,{children:"eth_sign"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"eth_sign"})," allows signing an arbitrary hash, which means it can be used to sign transactions, or any other\ndata. Using ",(0,s.jsx)(n.code,{children:"eth_sign"})," is a dangerous phishing risk."]}),"\n",(0,s.jsxs)(n.p,{children:["MetaMask disables ",(0,s.jsx)(n.code,{children:"eth_sign"})," by default and does not recommend using ",(0,s.jsx)(n.code,{children:"eth_sign"})," in production.\nSome applications (usually internal administrator panels) use ",(0,s.jsx)(n.code,{children:"eth_sign"})," for ease of\nuse, or due to an inability to change the associated dapp.\nIf a wallet user must interact with a dapp that uses ",(0,s.jsx)(n.code,{children:"eth_sign"})," and accepts the risks,\nthe wallet user can re-enable ",(0,s.jsx)(n.code,{children:"eth_sign"})," through advanced settings."]}),"\n",(0,s.jsxs)(n.h3,{id:"eth_signtypeddata_v1-and-eth_signtypeddata_v3",children:[(0,s.jsx)(n.code,{children:"eth_signTypedData_v1"})," and ",(0,s.jsx)(n.code,{children:"eth_signTypedData_v3"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"eth_signTypedData"})," was introduced by ",(0,s.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-712",children:"EIP-712"}),".\nThe EIP-712 specification changed several times resulting in multiple versions\nof ",(0,s.jsx)(n.code,{children:"eth_signTypedData"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"The earlier versions are:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"eth_signTypedData_v1"})," \u2013 The same as ",(0,s.jsx)(n.code,{children:"eth_signTypedData"}),".\nRead the\n",(0,s.jsx)(n.a,{href:"https://medium.com/metamask/scaling-web3-with-signtypeddata-91d6efc8b290",children:"introductory blog post to this method"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"eth_signTypedData_v3"})," \u2013 A highly used version of the EIP-712 specification.\nRead the\n",(0,s.jsx)(n.a,{href:"https://medium.com/metamask/eip712-is-coming-what-to-expect-and-how-to-use-it-bb92fd1a7a26",children:"introductory blog post to this method"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The missing ",(0,s.jsx)(n.code,{children:"v2"})," represents an intermediary design that the Cipher browser implemented."]}),"\n",(0,s.jsxs)(n.p,{children:["All early versions of this method lack later security improvements.\nUse the latest version, ",(0,s.jsx)(n.a,{href:"#eth_signtypeddata_v4",children:(0,s.jsx)(n.code,{children:"eth_signTypedData_v4"})}),"."]})]})}function l(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>r});var s=i(96540);const t={},a=s.createContext(t);function d(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);