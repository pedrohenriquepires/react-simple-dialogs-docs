"use strict";(self.webpackChunkreact_simple_dialogs_github_io=self.webpackChunkreact_simple_dialogs_github_io||[]).push([[74],{5656:(e,t,o)=>{o.d(t,{Z:()=>a});var n=o(5929),i=o(7294);const a=e=>{let{message:t,options:o}=e;return i.createElement(i.Fragment,null,i.createElement("button",{onClick:async()=>{await(0,n.z7)({message:t,...o})?console.log("Confirmed! \ud83d\ude04"):console.log("Not confirmed. \ud83e\udd72")},className:"button"},"See Working"))}},762:(e,t,o)=>{o.d(t,{Z:()=>a});var n=o(7294),i=o(5929);const a=e=>{let{message:t,options:o}=e;return n.createElement(n.Fragment,null,n.createElement("button",{onClick:async()=>{const e=await(0,i._B)({message:t,...o});console.log(`User name is ${e||"a mistery"}`)},className:"button"},"See Working"))}},4132:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>g,contentTitle:()=>d,default:()=>f,frontMatter:()=>m,metadata:()=>c,toc:()=>p});var n=o(7462),i=(o(7294),o(3905)),a=o(8813),s=o(5656),l=o(762),r=o(6291);const m={sidebar_position:2},d=void 0,c={unversionedId:"getting-started/Simple Usage",id:"getting-started/Simple Usage",title:"Simple Usage",description:"Use the dialogs is almost like use the dialogs native function (alert, confirm and prompt).",source:"@site/docs/getting-started/Simple Usage.mdx",sourceDirName:"getting-started",slug:"/getting-started/Simple Usage",permalink:"/react-simple-dialogs-docs/docs/getting-started/Simple Usage",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/react-simple-dialogs-docs/docs/getting-started/Introduction"},next:{title:"Aditional Settings",permalink:"/react-simple-dialogs-docs/docs/getting-started/Aditional Settings"}},g={},p=[{value:"Alert Dialog",id:"alert-dialog",level:2},{value:"Confirm Dialog",id:"confirm-dialog",level:2},{value:"Prompt Dialog",id:"prompt-dialog",level:2}],u={toc:p},k="wrapper";function f(e){let{components:t,...o}=e;return(0,i.kt)(k,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(r.Z,{mdxType:"Container"}),(0,i.kt)("p",null,"Use the dialogs is almost like use the dialogs native function (",(0,i.kt)("inlineCode",{parentName:"p"},"alert"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"confirm")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"prompt"),")."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"All dialog function will return an ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise")," that only resolves when the user interacts with the dialog, so you can wait for the user interaction to continue your code execution.")),(0,i.kt)("h2",{id:"alert-dialog"},"Alert Dialog"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { simpleAlert } from 'react-simple-dialogs'\n\nconst showAlert = async () => {\n  await simpleAlert(\"You can't do this right now.\")\n\n  console.log('Alert closed')\n}\n")),(0,i.kt)(a.Z,{message:"You can't do this right now.",mdxType:"ShowAlertBtn"}),(0,i.kt)("h2",{id:"confirm-dialog"},"Confirm Dialog"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { simpleConfirm } from 'react-simple-dialogs'\n\nconst showConfirmation = async () => {\n  if (await simpleConfirm('Please confirm something')) {\n    console.log('Confirmed! \ud83d\ude04')\n  } else {\n    console.log('Not confirmed. \ud83e\udd72')\n  }\n}\n")),(0,i.kt)(s.Z,{message:"Please confirm something",mdxType:"ShowConfirmBtn"}),(0,i.kt)("h2",{id:"prompt-dialog"},"Prompt Dialog"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { simplePrompt } from 'react-simple-dialogs'\n\nconst showPrompt = async () => {\n  const name = await simplePrompt('Please inform your name')\n\n  console.log(`User name is ${name || 'a mistery'}`)\n}\n")),(0,i.kt)(l.Z,{message:"Please inform your name",mdxType:"ShowPromptBtn"}))}f.isMDXComponent=!0}}]);