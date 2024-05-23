"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[3235],{882:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var a=t(74848),r=t(28453),s=t(11470),o=t(19365);const c={sidebar_label:"React",sidebar_position:1,description:"Set up the SDK in your React dapp.",tags:["JavaScript SDK"]},i="Use MetaMask SDK with React",l={id:"how-to/use-sdk/javascript/react/index",title:"Use MetaMask SDK with React",description:"Set up the SDK in your React dapp.",source:"@site/wallet/how-to/use-sdk/javascript/react/index.md",sourceDirName:"how-to/use-sdk/javascript/react",slug:"/how-to/use-sdk/javascript/react/",permalink:"/wallet/how-to/use-sdk/javascript/react/",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/use-sdk/javascript/react/index.md",tags:[{label:"JavaScript SDK",permalink:"/wallet/tags/java-script-sdk"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"React",sidebar_position:1,description:"Set up the SDK in your React dapp.",tags:["JavaScript SDK"]},sidebar:"walletSidebar",previous:{title:"JavaScript",permalink:"/wallet/how-to/use-sdk/javascript/"},next:{title:"React UI",permalink:"/wallet/how-to/use-sdk/javascript/react/react-ui"}},d={},u=[{value:"Steps",id:"steps",level:2},{value:"1. Install the SDK",id:"1-install-the-sdk",level:3},{value:"2. Import the SDK",id:"2-import-the-sdk",level:3},{value:"3. Wrap your project with <code>MetaMaskProvider</code>",id:"3-wrap-your-project-with-metamaskprovider",level:3},{value:"4. Use the SDK",id:"4-use-the-sdk",level:3},{value:"Example",id:"example",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"use-metamask-sdk-with-react",children:"Use MetaMask SDK with React"}),"\n",(0,a.jsxs)(n.p,{children:["Import ",(0,a.jsx)(n.a,{href:"/wallet/concepts/sdk/",children:"MetaMask SDK"})," into your React dapp to enable your users to\neasily connect to the MetaMask browser extension and MetaMask Mobile.\nThe SDK for React has the ",(0,a.jsx)(n.a,{href:"/wallet/how-to/use-sdk/javascript/#prerequisites",children:"same prerequisites"})," as for standard JavaScript."]}),"\n",(0,a.jsx)(n.admonition,{title:"React UI",type:"info",children:(0,a.jsxs)(n.p,{children:["This page provides instructions for using the standard ",(0,a.jsx)(n.code,{children:"@metamask/sdk-react"})," package.\nAlternatively, you can use the ",(0,a.jsx)(n.a,{href:"/wallet/how-to/use-sdk/javascript/react/react-ui",children:(0,a.jsx)(n.code,{children:"@metamask/sdk-react-ui"})})," package to easily use\n",(0,a.jsx)(n.a,{href:"https://wagmi.sh/",children:"wagmi"})," hooks and a pre-styled UI button component for connecting to MetaMask."]})}),"\n",(0,a.jsx)(n.h2,{id:"steps",children:"Steps"}),"\n",(0,a.jsx)(n.h3,{id:"1-install-the-sdk",children:"1. Install the SDK"}),"\n",(0,a.jsx)(n.p,{children:"In your project directory, install the SDK using Yarn or npm:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"yarn add @metamask/sdk-react\n"})}),"\n",(0,a.jsx)(n.p,{children:"or"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm i @metamask/sdk-react\n"})}),"\n",(0,a.jsx)(n.h3,{id:"2-import-the-sdk",children:"2. Import the SDK"}),"\n",(0,a.jsx)(n.p,{children:"In your project script, add the following to import the SDK:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",metastring:'title="index.tsx"',children:'import { MetaMaskProvider } from "@metamask/sdk-react";\n'})}),"\n",(0,a.jsxs)(n.h3,{id:"3-wrap-your-project-with-metamaskprovider",children:["3. Wrap your project with ",(0,a.jsx)(n.code,{children:"MetaMaskProvider"})]}),"\n",(0,a.jsxs)(n.p,{children:["Wrap your root component in a ",(0,a.jsx)(n.code,{children:"MetaMaskProvider"}),".\nFor example:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",metastring:'title="index.tsx"',children:'import React from "react";\nimport ReactDOM from "react-dom/client";\nimport App from "./App";\nimport { MetaMaskProvider } from "@metamask/sdk-react";\n\nconst root = ReactDOM.createRoot(\n  document.getElementById("root") as HTMLElement\n);\n\nroot.render(\n  <React.StrictMode>\n    <MetaMaskProvider\n      debug={false}\n      sdkOptions={{\n        dappMetadata: {\n          name: "Example React Dapp",\n          url: window.location.href,\n        },\n        infuraAPIKey: process.env.INFURA_API_KEY,\n        // Other options.\n      }}\n    >\n      <App />\n    </MetaMaskProvider>\n  </React.StrictMode>\n);\n'})}),"\n",(0,a.jsxs)(n.p,{children:["When initializing ",(0,a.jsx)(n.code,{children:"MetaMaskProvider"}),", set ",(0,a.jsx)(n.code,{children:"debug"})," to ",(0,a.jsx)(n.code,{children:"true"})," to activate debug mode.\nFor the full list of options you can set for ",(0,a.jsx)(n.code,{children:"sdkOptions"}),", see the\n",(0,a.jsx)(n.a,{href:"/wallet/reference/sdk-js-options",children:"JavaScript SDK options reference"}),".\nImportant options include:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/wallet/reference/sdk-js-options#dappmetadata",children:(0,a.jsx)(n.code,{children:"dappMetadata"})})," - Use this to display information\nabout your dapp in the MetaMask connection modal."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/wallet/reference/sdk-js-options#infuraapikey",children:(0,a.jsx)(n.code,{children:"infuraAPIKey"})})," - Use this to\n",(0,a.jsx)(n.a,{href:"/wallet/how-to/use-sdk/javascript/make-read-only-requests",children:"make read-only RPC requests"})," from your dapp."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/wallet/reference/sdk-js-options#modals",children:(0,a.jsx)(n.code,{children:"modals"})})," - Use this to ",(0,a.jsx)(n.a,{href:"../display-custom-modals.md",children:"customize the logic and UI of\nthe displayed modals"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"4-use-the-sdk",children:"4. Use the SDK"}),"\n",(0,a.jsxs)(n.p,{children:["Use the SDK by using the ",(0,a.jsx)(n.code,{children:"useSDK"})," hook in your React components.\nFor example:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",metastring:'title="App.tsx"',children:'import { useSDK } from "@metamask/sdk-react";\nimport React, { useState } from "react";\n\nexport const App = () => {\n  const [account, setAccount] = useState<string>();\n  const { sdk, connected, connecting, provider, chainId } = useSDK();\n\n  const connect = async () => {\n    try {\n      const accounts = await sdk?.connect();\n      setAccount(accounts?.[0]);\n    } catch (err) {\n      console.warn("failed to connect..", err);\n    }\n  };\n\n  return (\n    <div className="App">\n      <button style={{ padding: 10, margin: 10 }} onClick={connect}>\n        Connect\n      </button>\n      {connected && (\n        <div>\n          <>\n            {chainId && `Connected chain: ${chainId}`}\n            <p></p>\n            {account && `Connected account: ${account}`}\n          </>\n        </div>\n      )}\n    </div>\n  );\n};\n'})}),"\n",(0,a.jsxs)(t,{children:[(0,a.jsx)("summary",{children:"useSDK return values"}),(0,a.jsx)("p",{children:(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"sdk"}),": Main SDK object that facilitates connection and actions related to MetaMask."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"connected"}),": Boolean value indicating if the dapp is connected to MetaMask."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"connecting"}),": Boolean value indicating if a connection is in process."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"provider"}),": The provider object which can be used for lower-level interactions with the Ethereum blockchain."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"chainId"}),": Currently connected blockchain's chain ID."]}),"\n"]})})]}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"connect"})," method initiates a connection to MetaMask and returns an array of connected accounts."]}),"\n",(0,a.jsxs)(n.p,{children:["You can also ",(0,a.jsxs)(n.a,{href:"/wallet/how-to/use-sdk/javascript/connect-and-sign",children:["use the ",(0,a.jsx)(n.code,{children:"connectAndSign"})," method"]})," to\nconnect to MetaMask and sign data in a single interaction:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'const connectAndSign = async () => {\n  try {\n    const signResult = await sdk?.connectAndSign({\n      msg: "Connect + Sign message",\n    });\n    setResponse(signResult);\n  } catch (err) {\n    console.warn("failed to connect..", err);\n  }\n};\n'})}),"\n",(0,a.jsxs)(n.p,{children:["You can also ",(0,a.jsx)(n.a,{href:"/wallet/how-to/use-sdk/javascript/batch-json-rpc-requests",children:"batch multiple JSON-RPC requests"})," using the\n",(0,a.jsx)(n.code,{children:"metamask_batch"})," method."]}),"\n",(0,a.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)(n.p,{children:"You can copy the full React example to get started:"}),"\n",(0,a.jsxs)(s.A,{children:[(0,a.jsx)(o.A,{value:"Root component",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",metastring:'title="index.tsx"',children:'import React from "react";\nimport ReactDOM from "react-dom/client";\nimport App from "./App";\nimport { MetaMaskProvider } from "@metamask/sdk-react";\n\nconst root = ReactDOM.createRoot(\n  document.getElementById("root") as HTMLElement\n);\n\nroot.render(\n  <React.StrictMode>\n    <MetaMaskProvider\n      debug={false}\n      sdkOptions={{\n        dappMetadata: {\n          name: "Example React Dapp",\n          url: window.location.href,\n        },\n        infuraAPIKey: process.env.INFURA_API_KEY,\n        // Other options\n      }}\n    >\n      <App />\n    </MetaMaskProvider>\n  </React.StrictMode>\n);\n'})})}),(0,a.jsx)(o.A,{value:"React component",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",metastring:'title="App.tsx"',children:'import { useSDK } from "@metamask/sdk-react";\nimport React from "react";\n\nexport const App = () => {\n  const [account, setAccount] = useState<string>();\n  const { sdk, connected, connecting, provider, chainId } = useSDK();\n\n  const connect = async () => {\n    try {\n      const accounts = await sdk?.connect();\n      setAccount(accounts?.[0]);\n    } catch (err) {\n      console.warn("failed to connect..", err);\n    }\n  };\n\n  return (\n    <div className="App">\n      <button style={{ padding: 10, margin: 10 }} onClick={connect}>\n        Connect\n      </button>\n      {connected && (\n        <div>\n          <>\n            {chainId && "Connected chain: ${chainId}"}\n            <p></p>\n            {account && "Connected account: ${account}"}\n          </>\n        </div>\n      )}\n    </div>\n  );\n};\n'})})})]}),"\n",(0,a.jsxs)(n.p,{children:["See the ",(0,a.jsx)(n.a,{href:"https://github.com/MetaMask/metamask-sdk/tree/main/packages/examples/create-react-app",children:"example React dapp"}),"\nin the JavaScript SDK GitHub repository for more information."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var a=t(18215);const r={tabItem:"tabItem_Ymn6"};var s=t(74848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,o),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>w});var a=t(96540),r=t(18215),s=t(23104),o=t(56347),c=t(205),i=t(57485),l=t(31682),d=t(89466);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,l.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const r=(0,o.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=p(e),[o,i]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[l,u]=m({queryString:t,groupId:r}),[f,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,d.Dv)(t);return[r,(0,a.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),j=(()=>{const e=l??f;return h({value:e,tabValues:s})?e:null})();(0,c.A)((()=>{j&&i(j)}),[j]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),x(e)}),[u,x,s]),tabValues:s}}var x=t(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var k=t(74848);function v(e){let{className:n,block:t,selectedValue:a,selectValue:o,tabValues:c}=e;const i=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.a_)(),d=e=>{const n=e.currentTarget,t=i.indexOf(n),r=c[t].value;r!==a&&(l(n),o(r))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,k.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:c.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,k.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>i.push(e),onKeyDown:u,onClick:d,...s,className:(0,r.A)("tabs__item",j.tabItem,s?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function b(e){let{lazy:n,children:t,selectedValue:r}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,k.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function g(e){const n=f(e);return(0,k.jsxs)("div",{className:(0,r.A)("tabs-container",j.tabList),children:[(0,k.jsx)(v,{...n,...e}),(0,k.jsx)(b,{...n,...e})]})}function w(e){const n=(0,x.A)();return(0,k.jsx)(g,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var a=t(96540);const r={},s=a.createContext(r);function o(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);