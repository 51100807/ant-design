(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["e1310e5b"],{e1310e5b:function(e,l,s){"use strict";s.d(l,"__esModule",{value:!0}),s.d(l,"default",{enumerable:!0,get:function(){return t;}});var n=s("f19d2b93");s("7b3b6b05");var d=s("e22febe0"),a=s("a9d1a279");let i="https://ant.design",r=e=>{var l,s,i;switch(e.status){case"expired":return(0,n.jsxs)("div",{children:[(0,n.jsx)(d.CloseCircleFilled,{style:{color:"red"}})," ",null===(l=e.locale)||void 0===l?void 0:l.expired,(0,n.jsx)("p",{children:(0,n.jsxs)(a.Button,{type:"link",onClick:e.onRefresh,children:[(0,n.jsx)(d.ReloadOutlined,{})," ",null===(s=e.locale)||void 0===s?void 0:s.refresh]})})]});case"loading":return(0,n.jsxs)(a.Space,{direction:"vertical",children:[(0,n.jsx)(a.Spin,{}),(0,n.jsx)("p",{children:"Loading..."})]});case"scanned":return(0,n.jsxs)("div",{children:[(0,n.jsx)(d.CheckCircleFilled,{style:{color:"green"}})," ",null===(i=e.locale)||void 0===i?void 0:i.scanned]});default:return null;}};var t=()=>(0,n.jsxs)(a.Flex,{gap:"middle",wrap:!0,children:[(0,n.jsx)(a.QRCode,{value:i,status:"loading",statusRender:r}),(0,n.jsx)(a.QRCode,{value:i,status:"expired",onRefresh:()=>console.log("refresh"),statusRender:r}),(0,n.jsx)(a.QRCode,{value:i,status:"scanned",statusRender:r})]});}}]);