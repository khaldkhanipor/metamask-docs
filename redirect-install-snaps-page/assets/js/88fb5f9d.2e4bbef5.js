"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[2124],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),c=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),k=n,f=d["".concat(o,".").concat(k)]||d[k]||u[k]||i;return a?r.createElement(f,l(l({ref:t},p),{},{components:a})):r.createElement(f,l({ref:t},p))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=k;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:n,l[1]=s;for(var c=2;c<i;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},45306:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const i={sidebar_position:1,description:"Get started by setting up the SDK in your dapp.",tags:["JavaScript SDK","iOS SDK","Android SDK","Unity SDK"]},l="Set up MetaMask SDK",s={unversionedId:"how-to/connect/set-up-sdk/index",id:"how-to/connect/set-up-sdk/index",title:"Set up MetaMask SDK",description:"Get started by setting up the SDK in your dapp.",source:"@site/wallet/how-to/connect/set-up-sdk/index.md",sourceDirName:"how-to/connect/set-up-sdk",slug:"/how-to/connect/set-up-sdk/",permalink:"/redirect-install-snaps-page/wallet/how-to/connect/set-up-sdk/",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/connect/set-up-sdk/index.md",tags:[{label:"JavaScript SDK",permalink:"/redirect-install-snaps-page/wallet/tags/java-script-sdk"},{label:"iOS SDK",permalink:"/redirect-install-snaps-page/wallet/tags/i-os-sdk"},{label:"Android SDK",permalink:"/redirect-install-snaps-page/wallet/tags/android-sdk"},{label:"Unity SDK",permalink:"/redirect-install-snaps-page/wallet/tags/unity-sdk"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Get started by setting up the SDK in your dapp.",tags:["JavaScript SDK","iOS SDK","Android SDK","Unity SDK"]},sidebar:"walletSidebar",previous:{title:"Connect to MetaMask",permalink:"/redirect-install-snaps-page/wallet/how-to/connect"},next:{title:"JavaScript",permalink:"/redirect-install-snaps-page/wallet/how-to/connect/set-up-sdk/javascript/"}},o={},c=[],p={toc:c},d="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"set-up-metamask-sdk"},"Set up MetaMask SDK"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/redirect-install-snaps-page/wallet/concepts/sdk/"},"MetaMask SDK")," is a library that provides a reliable, secure, and seamless\nconnection from your dapp to the MetaMask browser extension and MetaMask Mobile.\nIt supports the following dapp platforms:"),(0,n.kt)("div",{class:"cards"},(0,n.kt)("div",{class:"card"},(0,n.kt)("div",{class:"card__header"},(0,n.kt)("h3",null,"\ud83d\udcbb ",(0,n.kt)("a",{href:"javascript"},"JavaScript"))),(0,n.kt)("div",{class:"card__body"},(0,n.kt)("ul",null,(0,n.kt)("li",null,(0,n.kt)("a",{href:"javascript/react"},"React")),(0,n.kt)("li",null,(0,n.kt)("a",{href:"javascript/pure-js"},"Pure JavaScript")),(0,n.kt)("li",null,(0,n.kt)("a",{href:"javascript/other-web-frameworks"},"Other web frameworks")),(0,n.kt)("li",null,(0,n.kt)("a",{href:"javascript/react-native"},"React Native")),(0,n.kt)("li",null,(0,n.kt)("a",{href:"javascript/nodejs"},"Node.js")),(0,n.kt)("li",null,(0,n.kt)("a",{href:"javascript/electron"},"Electron"))))),(0,n.kt)("div",{class:"card"},(0,n.kt)("div",{class:"card__header"},(0,n.kt)("h3",null,"\ud83d\udcf1 ",(0,n.kt)("a",{href:"mobile"},"Mobile"))),(0,n.kt)("div",{class:"card__body"},(0,n.kt)("ul",null,(0,n.kt)("li",null,(0,n.kt)("a",{href:"javascript/react-native"},"React Native")),(0,n.kt)("li",null,(0,n.kt)("a",{href:"mobile/ios"},"iOS")),(0,n.kt)("li",null,(0,n.kt)("a",{href:"mobile/android"},"Android"))))),(0,n.kt)("div",{class:"card"},(0,n.kt)("div",{class:"card__header"},(0,n.kt)("h3",null,"\ud83c\udfae ",(0,n.kt)("a",{href:"gaming"},"Gaming"))),(0,n.kt)("div",{class:"card__body"},(0,n.kt)("ul",null,(0,n.kt)("li",null,(0,n.kt)("a",{href:"gaming/unity"},"Unity")),(0,n.kt)("li",null,(0,n.kt)("a",{href:"gaming/unreal-engine"},"Unreal Engine")," (coming soon)"))))),(0,n.kt)("div",{class:"card margin-bottom--lg"},(0,n.kt)("div",{class:"card__header"},(0,n.kt)("h3",null,"\u2194\ufe0f ",(0,n.kt)("a",{href:"../../use-3rd-party-integrations"},"Third-party integrations"))),(0,n.kt)("div",{class:"card__body"},(0,n.kt)("ul",null,(0,n.kt)("li",null,(0,n.kt)("a",{href:"../../use-3rd-party-integrations/web3-onboard"},"Web3-Onboard")),(0,n.kt)("li",null,"Wagmi (coming soon)")))))}u.isMDXComponent=!0}}]);