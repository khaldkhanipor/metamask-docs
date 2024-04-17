"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[5586],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>m});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),u=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(l.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},b=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(t),b=r,m=d["".concat(l,".").concat(b)]||d[b]||p[b]||o;return t?a.createElement(m,s(s({ref:n},c),{},{components:t})):a.createElement(m,s({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=b;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var u=2;u<o;u++)s[u]=t[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},19365:(e,n,t)=>{t.d(n,{A:()=>s});var a=t(96540),r=t(20053);const o={tabItem:"tabItem_Ymn6"};function s(e){let{children:n,hidden:t,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,s),hidden:t},n)}},4865:(e,n,t)=>{t.d(n,{A:()=>b});var a=t(58168),r=t(96540),o=t(20053),s=t(23104),i=t(47751),l=t(92303);const u={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function c(e){let{className:n,block:t,selectedValue:i,selectValue:l,tabValues:c}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.a_)(),b=e=>{const n=e.currentTarget,t=d.indexOf(n),a=c[t].value;a!==i&&(p(n),l(a))},m=e=>{let n=null;switch(e.key){case"Enter":b(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;n=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;n=d[t]??d[d.length-1];break}}n?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},n)},c.map((e=>{let{value:n,label:t,attributes:s}=e;return r.createElement("li",(0,a.A)({role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,key:n,ref:e=>d.push(e),onKeyDown:m,onClick:b},s,{className:(0,o.A)("tabs__item",u.tabItem,s?.className,{"tabs__item--active":i===n})}),t??n)})))}function d(e){let{lazy:n,children:t,selectedValue:a}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function p(e){const n=(0,i.u)(e);return r.createElement("div",{className:(0,o.A)("tabs-container",u.tabList)},r.createElement(c,(0,a.A)({},e,n)),r.createElement(d,(0,a.A)({},e,n)))}function b(e){const n=(0,l.A)();return r.createElement(p,(0,a.A)({key:String(n)},e))}},47751:(e,n,t)=>{t.d(n,{u:()=>p});var a=t(96540),r=t(56347),o=t(57485),s=t(31682),i=t(89466);function l(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}function u(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??l(t);return function(e){const n=(0,s.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function c(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function d(e){let{queryString:n=!1,groupId:t}=e;const s=(0,r.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(i),(0,a.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(s.location.search);n.set(i,e),s.replace({...s.location,search:n.toString()})}),[i,s])]}function p(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,o=u(e),[s,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!c({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:o}))),[p,b]=d({queryString:t,groupId:r}),[m,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,o]=(0,i.Dv)(t);return[r,(0,a.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:r}),f=(()=>{const e=p??m;return c({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!c({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),b(e),g(e)}),[b,g,o]),tabValues:o}}},8531:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var a=t(58168),r=(t(96540),t(15680)),o=t(4865),s=t(19365);const i={sidebar_label:"Onboard users",description:"Simplify the MetaMask onboarding experience for your users.",sidebar_position:8},l="Use the MetaMask onboarding library",u={unversionedId:"how-to/onboard-users",id:"how-to/onboard-users",title:"Use the MetaMask onboarding library",description:"Simplify the MetaMask onboarding experience for your users.",source:"@site/wallet/how-to/onboard-users.md",sourceDirName:"how-to",slug:"/how-to/onboard-users",permalink:"/update-allowed-origins/wallet/how-to/onboard-users",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/onboard-users.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_label:"Onboard users",description:"Simplify the MetaMask onboarding experience for your users.",sidebar_position:8},sidebar:"walletSidebar",previous:{title:"Wagmi",permalink:"/update-allowed-origins/wallet/how-to/use-sdk/3rd-party-libraries/wagmi"},next:{title:"Run a development network",permalink:"/update-allowed-origins/wallet/how-to/run-devnet"}},c={},d=[{value:"Steps",id:"steps",level:2},{value:"Example",id:"example",level:2}],p={toc:d},b="wrapper";function m(e){let{components:n,...t}=e;return(0,r.yg)(b,(0,a.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"use-the-metamask-onboarding-library"},"Use the MetaMask onboarding library"),(0,r.yg)("p",null,"Sending users away from your dapp to install MetaMask presents challenges.\nYou must inform the user to return to your dapp and refresh their browser after the installation.\nYour dapp detects the user's newly installed MetaMask extension only after that refresh."),(0,r.yg)("p",null,"You can use MetaMask's ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/MetaMask/metamask-onboarding"},"onboarding library")," to\nimprove and simplify the onboarding experience.\nThe library exposes an API to initiate the onboarding process."),(0,r.yg)("p",null,"During the onboarding process, the library registers your dapp as the origin of the onboarding request.\nMetaMask checks for this origin after the user completes the onboarding flow.\nIf it finds an origin, the final confirmation button of the MetaMask onboarding flow indicates that\nthe user will be redirected back to your dapp."),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},(0,r.yg)("a",{parentName:"p",href:"/update-allowed-origins/wallet/concepts/sdk/"},"MetaMask SDK")," incorporates the functionality of the MetaMask onboarding library.\nYou don't need to set up the onboarding library if you use the SDK.")),(0,r.yg)("h2",{id:"steps"},"Steps"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Install ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/MetaMask/metamask-onboarding"},"@metamask/onboarding"),".")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Import the library or include it in your page:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-javascript"},'// As an ES6 module\nimport MetaMaskOnboarding from "@metamask/onboarding";\n// Or as an ES5 module\nconst MetaMaskOnboarding = require("@metamask/onboarding");\n')),(0,r.yg)("p",{parentName:"li"},"Alternatively, you can include the prebuilt ES5 bundle that ships with the library:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-html"},'<script src="./metamask-onboarding.bundle.js"><\/script>\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Create a new instance of the onboarding library:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-javascript"},"const onboarding = new MetaMaskOnboarding();\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Start the onboarding process in response to a user event (for example, a button click):"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-javascript"},"onboarding.startOnboarding();\n")))),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)("p",null,"The following are example ways to use the onboarding library in various frameworks:"),(0,r.yg)(o.A,{mdxType:"Tabs"},(0,r.yg)(s.A,{value:"React",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-jsx"},'import MetaMaskOnboarding from "@metamask/onboarding";\nimport React from "react";\n\nconst ONBOARD_TEXT = "Click here to install MetaMask!";\nconst CONNECT_TEXT = "Connect";\nconst CONNECTED_TEXT = "Connected";\n\nexport function OnboardingButton() {\n    const [buttonText, setButtonText] = React.useState(ONBOARD_TEXT);\n    const [isDisabled, setDisabled] = React.useState(false);\n    const [accounts, setAccounts] = React.useState([]);\n    const onboarding = React.useRef();\n\n    React.useEffect(() => {\n        if (!onboarding.current) {\n            onboarding.current = new MetaMaskOnboarding();\n        }\n    }, []);\n\n    React.useEffect(() => {\n        if (MetaMaskOnboarding.isMetaMaskInstalled()) {\n            if (accounts.length > 0) {\n                setButtonText(CONNECTED_TEXT);\n                setDisabled(true);\n                onboarding.current.stopOnboarding();\n            } else {\n                setButtonText(CONNECT_TEXT);\n                setDisabled(false);\n            }\n        }\n    }, [accounts]);\n\n    React.useEffect(() => {\n        function handleNewAccounts(newAccounts) {\n            setAccounts(newAccounts);\n        }\n        if (MetaMaskOnboarding.isMetaMaskInstalled()) {\n            provider // Or window.ethereum if you don\'t support EIP-6963.\n                .request({ method: "eth_requestAccounts" })\n                .then(handleNewAccounts);\n            provider // Or window.ethereum if you don\'t support EIP-6963.\n                .on("accountsChanged", handleNewAccounts);\n            return () => {\n                provider // Or window.ethereum if you don\'t support EIP-6963.\n                    .removeListener(\n                        "accountsChanged",\n                        handleNewAccounts\n                    );\n            };\n        }\n    }, []);\n\n    const onClick = () => {\n        if (MetaMaskOnboarding.isMetaMaskInstalled()) {\n            provider // Or window.ethereum if you don\'t support EIP-6963.\n                .request({ method: "eth_requestAccounts" })\n                .then((newAccounts) => setAccounts(newAccounts));\n        } else {\n            onboarding.current.startOnboarding();\n        }\n    };\n    return (\n        <button disabled={isDisabled} onClick={onClick}>\n            {buttonText}\n        </button>\n    );\n}\n'))),(0,r.yg)(s.A,{value:"TypeScript",mdxType:"TabItem"},(0,r.yg)("p",null,"The onboarding library ships with MetaMask's TypeScript types.\nModify the React example as follows to get type safety:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-jsx"},"-const onboarding = React.useRef();\n+const onboarding = React.useRef<MetaMaskOnboarding>();\n")),(0,r.yg)("p",null,"This gives you editor auto-completion for the methods exposed by the library, and\nhelpful documentation:"),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/4448075/85584481-ccc7ec00-b604-11ea-9b74-49c76ee0bf22.png",alt:"Editor Highlighting"}))),(0,r.yg)(s.A,{value:"Vanilla JavaScript and HTML",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-html"},'<!doctype html>\n<html lang="en-CA">\n    <head>\n        <title>MetaMask Onboarding Example</title>\n        <meta charset="UTF-8" />\n    </head>\n    <body>\n        <h1>Sample Dapp</h1>\n        <button id="onboard">Loading...</button>\n        <script src="./metamask-onboarding.bundle.js"><\/script>\n        <script>\n            window.addEventListener("DOMContentLoaded", () => {\n                const onboarding = new MetaMaskOnboarding();\n                const onboardButton = document.getElementById("onboard");\n                let accounts;\n\n                const updateButton = () => {\n                    if (!MetaMaskOnboarding.isMetaMaskInstalled()) {\n                        onboardButton.innerText =\n                            "Click here to install MetaMask!";\n                        onboardButton.onclick = () => {\n                            onboardButton.innerText = "Onboarding in progress";\n                            onboardButton.disabled = true;\n                            onboarding.startOnboarding();\n                        };\n                    } else if (accounts && accounts.length > 0) {\n                        onboardButton.innerText = "Connected";\n                        onboardButton.disabled = true;\n                        onboarding.stopOnboarding();\n                    } else {\n                        onboardButton.innerText = "Connect";\n                        onboardButton.onclick = async () => {\n                            await provider // Or window.ethereum if you don\'t support EIP-6963.\n                                .request({\n                                    method: "eth_requestAccounts",\n                                });\n                        };\n                    }\n                };\n\n                updateButton();\n                if (MetaMaskOnboarding.isMetaMaskInstalled()) {\n                    provider // Or window.ethereum if you don\'t support EIP-6963.\n                        .on("accountsChanged", (newAccounts) => {\n                            accounts = newAccounts;\n                            updateButton();\n                        });\n                }\n            });\n        <\/script>\n    </body>\n</html>\n')))))}m.isMDXComponent=!0}}]);