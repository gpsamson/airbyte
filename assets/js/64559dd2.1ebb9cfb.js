"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[8298],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),u=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),h=n,y=d["".concat(l,".").concat(h)]||d[h]||p[h]||a;return r?o.createElement(y,i(i({ref:t},c),{},{components:r})):o.createElement(y,i({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},11171:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var o=r(87462),n=(r(67294),r(3905));const a={},i="Deploying and Reverting Docs",s={unversionedId:"docusaurus/deploying_and_reverting_docs",id:"docusaurus/deploying_and_reverting_docs",title:"Deploying and Reverting Docs",description:"docs are fun",source:"@site/../docs/docusaurus/deploying_and_reverting_docs.md",sourceDirName:"docusaurus",slug:"/docusaurus/deploying_and_reverting_docs",permalink:"/docusaurus/deploying_and_reverting_docs",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/docusaurus/deploying_and_reverting_docs.md",tags:[],version:"current",frontMatter:{}},l={},u=[],c={toc:u};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"deploying-and-reverting-docs"},"Deploying and Reverting Docs"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"docs are fun",src:r(79302).Z,width:"715",height:"288"})),(0,n.kt)("p",null,"We use Github Pages for hosting this docs website, and Docusaurus as the docs framework. Docusaurus has a strange deployment pattern.  Luckily that pattern is abstracted away from you."),(0,n.kt)("p",null,"The source code for the docs lives in the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/tree/master/docs"},"airbyte monorepo's ",(0,n.kt)("inlineCode",{parentName:"a"},"docs/")," directory"),". To publish the updated docs on this website after you've committed a change to the ",(0,n.kt)("inlineCode",{parentName:"p"},"docs/")," markdown files, it is required to locally run a manual publish flow. "),(0,n.kt)("p",null,"Docs will deploy from whatever branch you are in. You will probably want to deploy from master, but that is at your discretion."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/blob/master/tools/bin/deploy_docusaurus"},"This is the deployment tool"),"\nYou will need a github ssh key, the tool will properly tell you if you don't have one though"),(0,n.kt)("p",null,"At it's simplest just open the airbyte repo and run ",(0,n.kt)("inlineCode",{parentName:"p"},"./tools/bin/deploy_docusaurus")),(0,n.kt)("p",null,"A typical deployment will look like this"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd airbyte\n# or cd airbyte-cloud  \ngit checkout master\ngit pull\n./tools/bin/deploy_docusaurus\n")),(0,n.kt)("p",null,"If docs has a problem this procedure will work the same on older branches.\nThe push to production is a force push so collisions are unlikely"),(0,n.kt)("p",null,"If you want to revert/rollback it will look something like this"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd airbyte\ngit checkout $SOME_OLDER_BRANCH\n./tools/bin/deploy_docusaurus\n")),(0,n.kt)("p",null,"Automating this process via CI is currently not easy because we push to a ",(0,n.kt)("a",{parentName:"p",href:"https://airbytehq.github.io"},"dedicated repo hosting the Github pages")," from the ",(0,n.kt)("inlineCode",{parentName:"p"},"airbyte")," monorepo, which is hard to do in CI. This is not intended to be the end state (we will need to publish these docs via CI eventually), but as of May 2022 have decided the juice isn't worth the squeeze just yet."))}p.isMDXComponent=!0},79302:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/docs-45c35d4e949ea4f204954241e40edab2.jpg"}}]);