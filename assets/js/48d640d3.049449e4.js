"use strict";(self.webpackChunkreact_simple_dialogs_github_io=self.webpackChunkreact_simple_dialogs_github_io||[]).push([[942],{5656:(t,e,n)=>{n.d(e,{Z:()=>r});var a=n(5929),l=n(7294);const r=t=>{let{message:e,options:n}=t;return l.createElement(l.Fragment,null,l.createElement("button",{onClick:async()=>{await(0,a.z7)({message:e,...n})?console.log("Confirmed! \ud83d\ude04"):console.log("Not confirmed. \ud83e\udd72")},className:"button"},"See Working"))}},762:(t,e,n)=>{n.d(e,{Z:()=>r});var a=n(7294),l=n(5929);const r=t=>{let{message:e,options:n}=t;return a.createElement(a.Fragment,null,a.createElement("button",{onClick:async()=>{const t=await(0,l._B)({message:e,...n});console.log(`User name is ${t||"a mistery"}`)},className:"button"},"See Working"))}},9500:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>g,contentTitle:()=>d,default:()=>c,frontMatter:()=>p,metadata:()=>s,toc:()=>k});var a=n(7462),l=(n(7294),n(3905)),r=n(8813),i=n(5656),o=n(762),m=n(6291);const p={sidebar_position:3},d=void 0,s={unversionedId:"getting-started/Aditional Settings",id:"getting-started/Aditional Settings",title:"Aditional Settings",description:"In order to customize your dialog you can easily change some properties if needed.",source:"@site/docs/getting-started/Aditional Settings.mdx",sourceDirName:"getting-started",slug:"/getting-started/Aditional Settings",permalink:"/react-simple-dialogs-docs/docs/getting-started/Aditional Settings",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Simple Usage",permalink:"/react-simple-dialogs-docs/docs/getting-started/Simple Usage"}},g={},k=[{value:"Simple Dialog Container",id:"simple-dialog-container",level:2},{value:"Properties",id:"properties",level:3},{value:"Example",id:"example",level:3},{value:"Alert Dialog",id:"alert-dialog",level:2},{value:"Properties",id:"properties-1",level:3},{value:"Example",id:"example-1",level:3},{value:"Confirm Dialog",id:"confirm-dialog",level:2},{value:"Properties",id:"properties-2",level:3},{value:"Example",id:"example-2",level:3},{value:"Prompt Dialog",id:"prompt-dialog",level:2},{value:"Properties",id:"properties-3",level:3},{value:"Example",id:"example-3",level:3}],u={toc:k},N="wrapper";function c(t){let{components:e,...n}=t;return(0,l.kt)(N,(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)(m.Z,{primaryColor:"#d1691c",primaryHoverColor:"#b56429",mdxType:"Container"}),(0,l.kt)("p",null,"In order to customize your dialog you can easily change some properties if needed."),(0,l.kt)("h2",{id:"simple-dialog-container"},"Simple Dialog Container"),(0,l.kt)("h3",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"What it does"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"primaryColor"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"rgb(3 105 161)")),(0,l.kt)("td",{parentName:"tr",align:null},"The primary color (use only for button)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"primaryHoverColor"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"rgb(2 132 199)")),(0,l.kt)("td",{parentName:"tr",align:null},"Ths primary hover color")))),(0,l.kt)("h3",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'import { SimpleDialogContainer } from \'react-simple-dialogs\'\n\nfunction App() {\n  return (\n    <SimpleDialogContainer primaryColor="#d1691c" primaryHoverColor="#b56429" />\n  )\n}\n')),(0,l.kt)(r.Z,{options:{message:"The primary color now is #d1691c"},mdxType:"ShowAlertBtn"}),(0,l.kt)("h2",{id:"alert-dialog"},"Alert Dialog"),(0,l.kt)("h3",{id:"properties-1"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"What it does"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"message"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The alert message")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"title"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Attention")),(0,l.kt)("td",{parentName:"tr",align:null},"Change the dialog title")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"closeLabel"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Close")),(0,l.kt)("td",{parentName:"tr",align:null},"Change the close buttom text")))),(0,l.kt)("h3",{id:"example-1"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"import { simpleAlert } from 'react-simple-dialogs'\n\nconst showAlert = async () => {\n  await simpleAlert({\n    message: \"You can't do this right now.\",\n    closeLabel: 'Ok, now close this',\n    title: \"Oops...\"\n  })\n\n  console.log('Alert closed')\n}\n")),(0,l.kt)(r.Z,{options:{message:"You can't do this right now.",closeLabel:"Ok, now close this",title:"Oops..."},mdxType:"ShowAlertBtn"}),(0,l.kt)("h2",{id:"confirm-dialog"},"Confirm Dialog"),(0,l.kt)("h3",{id:"properties-2"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"What it does"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"message"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The alert message")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"title"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Attention")),(0,l.kt)("td",{parentName:"tr",align:null},"Change the dialog title")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cancelLabel"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Cancel")),(0,l.kt)("td",{parentName:"tr",align:null},"Change the cancel buttom text")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"confirmLabel"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Confirm")),(0,l.kt)("td",{parentName:"tr",align:null},"Change the confirm buttom text")))),(0,l.kt)("h3",{id:"example-2"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"import { simpleConfirm } from 'react-simple-dialogs'\n\nconst showConfirmation = async () => {\n  if (\n    await simpleConfirm({\n      title: \"Hey!\",\n      message: \"You must accept before continue\",\n      confirmLabel: 'Ok, I accept.',\n      cancelLabel: 'No, cancel this'\n    })\n  ) {\n    console.log('Confirmed! \ud83d\ude04')\n  } else {\n    console.log('Not confirmed. \ud83e\udd72')\n  }\n}\n")),(0,l.kt)(i.Z,{options:{title:"Hey!",message:"You must accept before continue",confirmLabel:"Ok, I accept.",cancelLabel:"No, cancel this"},mdxType:"ShowConfirmBtn"}),(0,l.kt)("h2",{id:"prompt-dialog"},"Prompt Dialog"),(0,l.kt)("h3",{id:"properties-3"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"What it does"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"message"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The alert message")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"title"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Attention")),(0,l.kt)("td",{parentName:"tr",align:null},"Change the dialog title")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cancelLabel"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Cancel")),(0,l.kt)("td",{parentName:"tr",align:null},"Change the cancel buttom text")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"confirmLabel"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Confirm")),(0,l.kt)("td",{parentName:"tr",align:null},"Change the confirm buttom text")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"inputLabel"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Value")),(0,l.kt)("td",{parentName:"tr",align:null},"Change the dialog input label")))),(0,l.kt)("h3",{id:"example-3"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"import { simplePrompt } from 'react-simple-dialogs'\n\nconst showConfirmation = async () => {\n  if (\n    await simplePrompt({\n      title: \"We need something\",\n      message: \"You must enter your name in order to continue\",\n      confirmLabel: \"That's my name!\",\n      cancelLabel: 'No, cancel this',\n      inputLabel: 'Your Name'\n    })\n  ) {\n    console.log('Confirmed! \ud83d\ude04')\n  } else {\n    console.log('Not confirmed. \ud83e\udd72')\n  }\n}\n")),(0,l.kt)(o.Z,{options:{title:"We need something",message:"You must enter your name in order to continue",confirmLabel:"That's my name!",cancelLabel:"No, cancel this",inputLabel:"Your Name"},mdxType:"ShowPromptBtn"}))}c.isMDXComponent=!0}}]);