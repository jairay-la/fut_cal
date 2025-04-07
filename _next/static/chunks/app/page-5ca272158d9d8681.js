(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{376:(e,s,l)=>{"use strict";l.r(s),l.d(s,{default:()=>r});var a=l(5155),t=l(2115);let n={E:{value:50,name:"S&P 500 E-mini (ES)"},R:{value:50,name:"Russell 2000 (RTY)"},N:{value:20,name:"Nasdaq 100 E-mini (NQ)"},C:{value:1e3,name:"Crude Oil (CL)"},G:{value:100,name:"Gold (GC)"}};function r(){let[e,s]=(0,t.useState)(""),[l,r]=(0,t.useState)("E"),[i,o]=(0,t.useState)(""),[c,u]=(0,t.useState)("2"),[d,m]=(0,t.useState)(null);return(0,a.jsx)("main",{className:"min-h-screen p-8",children:(0,a.jsxs)("div",{className:"max-w-2xl mx-auto space-y-6",children:[(0,a.jsx)("h1",{className:"text-3xl font-bold",children:"Futures Position Calculator"}),(0,a.jsxs)("div",{className:"space-y-4",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block text-sm font-medium mb-1",children:"Total Equity"}),(0,a.jsx)("input",{type:"number",value:e,onChange:e=>s(e.target.value),placeholder:"Enter your total equity (in thousands)",className:"w-full p-2 border rounded",min:"1"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block text-sm font-medium mb-1",children:"Symbol"}),(0,a.jsx)("select",{value:l,onChange:e=>r(e.target.value),className:"w-full p-2 border rounded",children:Object.entries(n).map(e=>{let[s,{name:l}]=e;return(0,a.jsxs)("option",{value:s,children:[s," - ",l]},s)})})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block text-sm font-medium mb-1",children:"Points at Risk"}),(0,a.jsx)("input",{type:"number",value:i,onChange:e=>o(e.target.value),placeholder:"Enter points at risk",className:"w-full p-2 border rounded",min:"0.1",step:"0.1"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block text-sm font-medium mb-1",children:"Risk Percentage"}),(0,a.jsx)("input",{type:"number",value:c,onChange:e=>u(e.target.value),placeholder:"Enter risk percentage",className:"w-full p-2 border rounded",min:"0.1",max:"100",step:"0.1"})]}),(0,a.jsx)("button",{onClick:()=>{let s=1e3*parseFloat(e),a=n[l].value,t=parseFloat(i),r=parseFloat(c)/100,o=t*a,u=s*r,d=Math.floor(u/o);m({totalEquity:s,symbol:l,pointsAtRisk:t,riskPerContract:o,riskPercentage:parseFloat(c),totalRisk:u,numContracts:d})},className:"w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600",children:"Calculate"})]}),d&&(0,a.jsxs)("div",{className:"mt-8 p-4 border rounded bg-gray-50",children:[(0,a.jsx)("h2",{className:"text-xl font-semibold mb-4",children:"Risk Calculation Results"}),(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsxs)("p",{children:["Total Equity: $",d.totalEquity.toLocaleString()]}),(0,a.jsxs)("p",{children:["Symbol: ",d.symbol]}),(0,a.jsxs)("p",{children:["Points at Risk: ",d.pointsAtRisk]}),(0,a.jsxs)("p",{children:["Risk Per Contract: $",d.riskPerContract.toLocaleString()]}),(0,a.jsxs)("p",{children:["At ",d.riskPercentage,"% Risk:"]}),(0,a.jsxs)("p",{children:["Total Allowable Risk: $",d.totalRisk.toLocaleString()]}),(0,a.jsxs)("p",{children:["Number of Contracts to Trade: ",d.numContracts]})]})]})]})})}},3003:(e,s,l)=>{Promise.resolve().then(l.bind(l,376))}},e=>{var s=s=>e(e.s=s);e.O(0,[441,684,358],()=>s(3003)),_N_E=e.O()}]);