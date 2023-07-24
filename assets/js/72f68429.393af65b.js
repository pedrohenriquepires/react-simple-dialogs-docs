"use strict";(self.webpackChunkreact_simple_dialogs_github_io=self.webpackChunkreact_simple_dialogs_github_io||[]).push([[74],{6291:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(7294),a=n(6444);const i=()=>o.createElement(a.qR,null)},8813:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(6444),a=n(7294);const i=e=>{let{message:t}=e;return a.createElement(a.Fragment,null,a.createElement("button",{onClick:async()=>{await(0,o.Gh)(t),console.log("Alert closed")},className:"button"},"See Working"))}},7399:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>w,frontMatter:()=>g,metadata:()=>p,toc:()=>k});var o=n(7462),a=n(7294),i=n(3905),l=n(8813),s=n(6444);const r=e=>{let{message:t}=e;return a.createElement(a.Fragment,null,a.createElement("button",{onClick:async()=>{await(0,s.z7)(t)?console.log("Confirmed! \ud83d\ude04"):console.log("Not confirmed. \ud83e\udd72")},className:"button"},"See Working"))},m=e=>{let{message:t}=e;return a.createElement(a.Fragment,null,a.createElement("button",{onClick:async()=>{const e=await(0,s._B)(t);console.log(`User name is ${e||"a mistery"}`)},className:"button"},"See Working"))};var c=n(6291);const g={},d=void 0,p={unversionedId:"getting-started/Simple Usage",id:"getting-started/Simple Usage",title:"Simple Usage",description:"Use the dialogs is almost like use the dialogs native function (alert, confirm and prompt).",source:"@site/docs/getting-started/Simple Usage.mdx",sourceDirName:"getting-started",slug:"/getting-started/Simple Usage",permalink:"/react-simple-dialogs-docs/docs/getting-started/Simple Usage",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/react-simple-dialogs-docs/docs/getting-started/Introduction"}},u={},k=[{value:"Alert Dialog",id:"alert-dialog",level:2},{value:"Confirm Dialog",id:"confirm-dialog",level:2},{value:"Prompt Dialog",id:"prompt-dialog",level:2}],f={toc:k},h="wrapper";function w(e){let{components:t,...n}=e;return(0,i.kt)(h,(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(c.Z,{mdxType:"Container"}),(0,i.kt)("p",null,"Use the dialogs is almost like use the dialogs native function (",(0,i.kt)("inlineCode",{parentName:"p"},"alert"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"confirm")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"prompt"),")."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"All dialog function will return an ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise")," that only resolves when the user interacts with the dialog, so you can wait for the user interaction to continue your code execution.")),(0,i.kt)("h2",{id:"alert-dialog"},"Alert Dialog"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { simpleAlert } from 'react-simple-dialogs'\n\nconst showAlert = async () => {\n  await simpleAlert(\"You can't do this right now.\")\n\n  console.log('Alert closed')\n}\n")),(0,i.kt)(l.Z,{message:"You can't do this right now.",mdxType:"ShowAlertBtn"}),(0,i.kt)("h2",{id:"confirm-dialog"},"Confirm Dialog"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { simpleConfirm } from 'react-simple-dialogs'\n\nconst showConfirmation = async () => {\n  if (await simpleConfirm('Please confirm something')) {\n    console.log('Confirmed! \ud83d\ude04')\n  } else {\n    console.log('Not confirmed. \ud83e\udd72')\n  }\n}\n")),(0,i.kt)(r,{message:"Please confirm something",mdxType:"ShowConfirmBtn"}),(0,i.kt)("h2",{id:"prompt-dialog"},"Prompt Dialog"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { simplePrompt } from 'react-simple-dialogs'\n\nconst showPrompt = async () => {\n  const name = await simplePrompt('Please inform your name')\n\n  console.log(`User name is ${name || 'a mistery'}`)\n}\n")),(0,i.kt)(m,{message:"Please inform your name",mdxType:"ShowPromptBtn"}))}w.isMDXComponent=!0}}]);