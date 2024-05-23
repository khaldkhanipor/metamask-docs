"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[8638],{45888:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var t=s(74848),a=s(28453);const i={description:"Create a Snap that estimates gas fees.",sidebar_position:1},r="Create a Snap to estimate gas fees",o={id:"learn/tutorials/gas-estimation",title:"Create a Snap to estimate gas fees",description:"Create a Snap that estimates gas fees.",source:"@site/snaps/learn/tutorials/gas-estimation.md",sourceDirName:"learn/tutorials",slug:"/learn/tutorials/gas-estimation",permalink:"/snaps/learn/tutorials/gas-estimation",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/learn/tutorials/gas-estimation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Create a Snap that estimates gas fees.",sidebar_position:1},sidebar:"snapsSidebar",previous:{title:"Tutorials",permalink:"/snaps/learn/tutorials"},next:{title:"Create a Snap to calculate gas fee percentages",permalink:"/snaps/learn/tutorials/transaction-insights"}},c={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Set up the project",id:"1-set-up-the-project",level:3},{value:"2. Add a custom icon",id:"2-add-a-custom-icon",level:3},{value:"3. Enable network access",id:"3-enable-network-access",level:3},{value:"4. Fetch gas fee estimates",id:"4-fetch-gas-fee-estimates",level:3},{value:"5. Build and test the Snap",id:"5-build-and-test-the-snap",level:3},{value:"6. Next steps",id:"6-next-steps",level:3}];function d(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"create-a-snap-to-estimate-gas-fees",children:"Create a Snap to estimate gas fees"}),"\n",(0,t.jsxs)(n.p,{children:["This tutorial walks you through creating a Snap that estimates gas fees.\nThe Snap uses the ",(0,t.jsx)(n.code,{children:"fetch"})," API to request information from the internet, and displays custom\ninformation in an alert dialog."]}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/snaps/get-started/install-flask",children:"MetaMask Flask installed"})}),"\n",(0,t.jsxs)(n.li,{children:["A text editor (for example, ",(0,t.jsx)(n.a,{href:"https://code.visualstudio.com/",children:"VS Code"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm",children:"Node"})," version 20.11 or later"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://yarnpkg.com/",children:"Yarn"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"steps",children:"Steps"}),"\n",(0,t.jsx)(n.h3,{id:"1-set-up-the-project",children:"1. Set up the project"}),"\n",(0,t.jsxs)(n.p,{children:["Create a new Snap project using the\n",(0,t.jsx)(n.a,{href:"https://github.com/MetaMask/snaps/tree/main/packages/create-snap",children:(0,t.jsx)(n.code,{children:"@metamask/create-snap"})}),"\nstarter kit by running:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn create @metamask/snap gas-estimation-snap\n"})}),"\n",(0,t.jsx)(n.p,{children:"or"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npx @metamask/create-snap gas-estimation-snap\n"})}),"\n",(0,t.jsx)(n.p,{children:"or"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm create @metamask/snap gas-estimation-snap\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Next, ",(0,t.jsx)(n.code,{children:"cd"})," into the ",(0,t.jsx)(n.code,{children:"gas-estimation-snap"})," project directory and run:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn install\n"})}),"\n",(0,t.jsx)(n.p,{children:"This initializes your development environment with the required dependencies.\nYou may get a warning similar to the following:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'@lavamoat/allow-scripts has detected dependencies without configuration. explicit configuration required.\nrun "allow-scripts auto" to automatically populate the configuration.\n'})}),"\n",(0,t.jsx)(n.p,{children:"You can resolve this error by running the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn run allow-scripts auto\n"})}),"\n",(0,t.jsx)(n.h3,{id:"2-add-a-custom-icon",children:"2. Add a custom icon"}),"\n",(0,t.jsxs)(n.p,{children:["Your Snap must ",(0,t.jsx)(n.a,{href:"/snaps/learn/best-practices/design-guidelines#optimize-your-metadata",children:"display an icon"})," in MetaMask.\nTo add an icon, create a new folder ",(0,t.jsx)(n.code,{children:"images"})," in the Snap package ",(0,t.jsx)(n.code,{children:"packages/snap/"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"mkdir packages/snap/images\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Download\n",(0,t.jsxs)(n.a,{href:"https://raw.githubusercontent.com/Montoya/gas-fee-snap/main/packages/snap/images/gas.svg",children:["this ",(0,t.jsx)(n.code,{children:"gas.svg"})," icon file"]}),"\ninto the ",(0,t.jsx)(n.code,{children:"\xecmages"})," folder you just created.",(0,t.jsx)(n.br,{}),"\n",'This is a free icon, "Gas" by Mello from\n',(0,t.jsx)(n.a,{href:"https://thenounproject.com/browse/icons/term/gas/",children:"Noun Project"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Your file structure should look like this:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"gas-estimation-snap/\n\u251c\u2500 packages/\n\u2502  \u251c\u2500 site/\n|  |  |- src/\n|  |  |  |- App.tsx\n|  |  \u251c\u2500 package.json\n|  |  |- ...(react app content)\n|  |\n\u2502  \u251c\u2500 snap/\n|  |  \u251c\u2500 images/\n|  |  |  |- gas.svg\n|  |  \u251c\u2500 src/\n|  |  |  |- index.test.ts\n|  |  |  |- index.ts\n|  |  \u251c\u2500 snap.manifest.json\n|  |  \u251c\u2500 package.json\n|  |  |- ... (Snap content)\n\u251c\u2500 package.json\n\u251c\u2500 ... (other stuff)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Open ",(0,t.jsx)(n.code,{children:"packages/snap/snap.manifest.json"})," in a text editor.\nThis file contains the main configuration details for your Snap.\nEdit the ",(0,t.jsx)(n.code,{children:"npm"})," object, within the ",(0,t.jsx)(n.code,{children:"location"})," object,\nand add ",(0,t.jsx)(n.code,{children:"iconPath"})," with the value ",(0,t.jsx)(n.code,{children:'"images/gas.svg"'})," to point to your new icon:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="snap.manifest.json"',children:'"location": {\n  "npm": {\n    "filePath": "dist/bundle.js",\n    "iconPath": "images/gas.svg",\n    "packageName": "snap",\n    "registry": "https://registry.npmjs.org/"\n  }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Open ",(0,t.jsx)(n.code,{children:"packages/snap/package.json"})," in a text editor.\nEdit the ",(0,t.jsx)(n.code,{children:"files"})," array and add the ",(0,t.jsx)(n.code,{children:"images/"})," folder:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="package.json"',children:'"files": [\n  "dist/",\n  "images/",\n  "snap.manifest.json"\n],\n'})}),"\n",(0,t.jsx)(n.h3,{id:"3-enable-network-access",children:"3. Enable network access"}),"\n",(0,t.jsxs)(n.p,{children:["To enable your Snap to ",(0,t.jsxs)(n.a,{href:"/snaps/features/network-access",children:["access the internet using the ",(0,t.jsx)(n.code,{children:"fetch"})," API"]}),",\nrequest the ",(0,t.jsx)(n.a,{href:"/snaps/reference/permissions#endowmentnetwork-access",children:(0,t.jsx)(n.code,{children:"endowment:network-access"})}),"\npermission in ",(0,t.jsx)(n.code,{children:"packages/snap/snap.manifest.json"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="snap.manifest.json"',children:'"initialPermissions": {\n  "snap_dialog": {},\n  "endowment:rpc": {\n    "dapps": true,\n    "snaps": false\n  }, \n  "endowment:network-access": {}\n},\n"manifestVersion": "0.1"\n'})}),"\n",(0,t.jsx)(n.h3,{id:"4-fetch-gas-fee-estimates",children:"4. Fetch gas fee estimates"}),"\n",(0,t.jsxs)(n.p,{children:["Open ",(0,t.jsx)(n.code,{children:"packages/snap/src/index.ts"}),".\nThis is the main code file for your Snap.\nTo get a gas fee estimate, use the public API endpoint provided by\n",(0,t.jsx)(n.a,{href:"https://beaconcha.in/",children:"Open Source Ethereum Explorer"}),".\nAdd the following ",(0,t.jsx)(n.code,{children:"getFees()"})," function to the beginning of the ",(0,t.jsx)(n.code,{children:"/packages/snap/src/index.ts"})," file:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",metastring:'title="index.ts"',children:'import type { OnRpcRequestHandler } from "@metamask/snaps-sdk";\nimport { panel, text } from "@metamask/snaps-sdk";\n\nasync function getFees() {\n  const response = await fetch("https://beaconcha.in/api/v1/execution/gasnow"); \n  return response.text();\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Next, add the ",(0,t.jsx)(n.code,{children:"copyable"})," component to the second import of the file:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",metastring:'title="index.ts"',children:'import type { OnRpcRequestHandler } from "@metamask/snaps-sdk";\nimport { panel, text, copyable } from "@metamask/snaps-sdk";\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Modify the Snap RPC message handler that displays the dialog.\nThis handler uses a switch statement to handle various request methods, but in this instance there is\nonly one method, ",(0,t.jsx)(n.code,{children:"hello"}),".\nFor the ",(0,t.jsx)(n.code,{children:"hello"})," method, the handler returns a call to MetaMask with the parameters to display a\ndialog, and passes some static strings."]}),"\n",(0,t.jsxs)(n.p,{children:["Since ",(0,t.jsx)(n.code,{children:"getFees()"})," returns a promise, you must use ",(0,t.jsx)(n.code,{children:"then()"})," to resolve it in your ",(0,t.jsx)(n.code,{children:"hello"})," method.\nUpdate the ",(0,t.jsx)(n.code,{children:"hello"})," method with the following code:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",metastring:'title="index.ts"',children:'case "hello":\n  return getFees().then(fees => {\n    return snap.request({\n      method: \'snap_dialog\',\n      params: {\n        type: "alert",\n        content: panel([\n          text(`Hello, **${origin}**!`),\n          text("Current gas fee estimates:"),\n          copyable(fees),\n        ]),\n      }\n    });\n  });\n'})}),"\n",(0,t.jsx)(n.h3,{id:"5-build-and-test-the-snap",children:"5. Build and test the Snap"}),"\n",(0,t.jsx)(n.p,{children:"To build and test your Snap:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Open ",(0,t.jsx)(n.code,{children:"package.json"})," in the root directory of the project, and increment the ",(0,t.jsx)(n.code,{children:'"version"'})," (if the ",(0,t.jsx)(n.code,{children:'"version"'})," is\n",(0,t.jsx)(n.code,{children:"0.1.0"}),", increase it to ",(0,t.jsx)(n.code,{children:"0.2.0"}),")."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["From the command line, run ",(0,t.jsx)(n.code,{children:"yarn start"}),".\nIn the terminal, at the bottom of the message log, you see the browser URL:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"You can now view site in the browser.\n\n  http://localhost:8000/\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Open ",(0,t.jsx)(n.a,{href:"http://localhost:8000/",children:(0,t.jsx)(n.code,{children:"localhost:8000"})})," in your browser (with MetaMask Flask installed).\nA page like the following displays:"]}),"\n",(0,t.jsx)("img",{src:s(91166).A,alt:"Test dapp with template Snap",style:{border:"1px solid #DCDCDC"}}),"\n",(0,t.jsx)(n.p,{children:"This is a boilerplate test dapp for installing and testing your Snap."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Select ",(0,t.jsx)(n.strong,{children:"Connect"})," to connect Flask to the dapp.\nAfter connecting, you're prompted to install the Snap with the following permissions:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Allow dapps to communicate directly with this Snap."})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Access the internet."})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Display dialog windows in MetaMask."})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Select ",(0,t.jsx)(n.strong,{children:"Approve"})," > ",(0,t.jsx)(n.strong,{children:"Install"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["After installing, the ",(0,t.jsx)(n.strong,{children:"Send message"})," button on the page is enabled. Select this button. A dialog prompt displays with the response from the gas fee API:"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)("p",{align:"center",children:(0,t.jsx)("img",{src:s(30332).A,alt:"Gas estimation dialog",width:"400px",style:{border:"1px solid #DCDCDC"}})}),"\n",(0,t.jsx)(n.p,{children:"You have integrated a public API into MetaMask and displayed real-time gas fee estimates."}),"\n",(0,t.jsx)(n.h3,{id:"6-next-steps",children:"6. Next steps"}),"\n",(0,t.jsx)(n.p,{children:"Next, you can try:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Parsing the JSON response from the remote API."}),"\n",(0,t.jsx)(n.li,{children:"Displaying the fees in a nicely formatted way."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["You can also update the fields in ",(0,t.jsx)(n.code,{children:"snap.manifest.json"})," to match your custom Snap:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"proposedName"})," - The name of your Snap."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"description"})," - The description of your Snap."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"source"})," - The ",(0,t.jsx)(n.code,{children:"shasum"})," is set automatically when you build from the command line.\nIf you decided to publish your Snap to ",(0,t.jsx)(n.code,{children:"npm"}),", update the ",(0,t.jsx)(n.code,{children:"location"})," to its published location."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Similarly, you should update the ",(0,t.jsx)(n.code,{children:"name"}),", ",(0,t.jsx)(n.code,{children:"version"}),", ",(0,t.jsx)(n.code,{children:"description"}),", and ",(0,t.jsx)(n.code,{children:"repository"})," fields of\n",(0,t.jsx)(n.code,{children:"/packages/snap/package.json"})," even if you do not plan to publish your Snap to npm."]}),"\n",(0,t.jsx)(n.admonition,{title:"important",type:"caution",children:(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"version"})," and ",(0,t.jsx)(n.code,{children:"repository"})," fields in ",(0,t.jsx)(n.code,{children:"snap.manifest.json"})," inherit the values from\n",(0,t.jsx)(n.code,{children:"package.json"})," and overwrite them in ",(0,t.jsx)(n.code,{children:"snap.manifest.json"}),".\nWe recommend updating ",(0,t.jsx)(n.code,{children:"version"})," and ",(0,t.jsx)(n.code,{children:"repository"})," in ",(0,t.jsx)(n.code,{children:"package.json"})," first, then building the Snap project."]})}),"\n",(0,t.jsxs)(n.p,{children:["You can update the content of ",(0,t.jsx)(n.code,{children:"/packages/site/src/pages/index.tsx"})," by changing the\nname of the method for showing gas fee estimates.\nIf you change the method name in ",(0,t.jsx)(n.code,{children:"/packages/site/src/pages/index.tsx"}),", ensure you change the method name in ",(0,t.jsx)(n.code,{children:"/packages/snap/src/index.ts"})," to match."]}),"\n",(0,t.jsxs)(n.p,{children:["After you have made all necessary changes, you can\n",(0,t.jsx)(n.a,{href:"/snaps/how-to/publish-a-snap",children:"publish your Snap to npm"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},30332:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/gas-estimation-0a5ae2f873be0b8fd6226aff0fb3f531.png"},91166:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/template-snap-71dab3e1010b6cdcd69aefc5739bbcdd.png"},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>o});var t=s(96540);const a={},i=t.createContext(a);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);