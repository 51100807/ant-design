(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["385a10ac"],{"0bb7d676":function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return r;}});var o=n("f19d2b93");n("0819c524");var l=n("a9d1a279");let{_InternalPanelDoNotUseOrYouWillBeFired:a}=l.Modal;var r=()=>(0,o.jsx)(l.ConfigProvider,{theme:{components:{Modal:{footerBg:"#f6ffed",contentBg:"#e6fffb",headerBg:"#f9f0ff",titleLineHeight:3,titleFontSize:12,titleColor:"#1d39c4"}}},children:(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column",rowGap:16},children:[(0,o.jsx)(a,{title:"Hello World!",style:{width:"100%"},children:"Hello World?!"}),(0,o.jsx)(l.ConfigProvider,{theme:{token:{wireframe:!0}},children:(0,o.jsx)(a,{title:"Hello World!",style:{width:"100%"},children:"Hello World?!"})}),(0,o.jsx)(a,{type:"success",style:{width:200},children:"A good news!"}),(0,o.jsx)(a,{title:"Confirm This?",type:"confirm",style:{width:300},children:"Some descriptions."})]})});},"1ab781b6":function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return i;}});var o=n("f19d2b93");n("3ff550fd");var l=n("a9d1a279");let a=()=>{l.Modal.info({title:"This is a notification message",content:(0,o.jsxs)("div",{children:[(0,o.jsx)("p",{children:"some messages...some messages..."}),(0,o.jsx)("p",{children:"some messages...some messages..."})]}),onOk(){}});},r=()=>{l.Modal.success({content:"some messages...some messages..."});},s=()=>{l.Modal.error({title:"This is an error message",content:"some messages...some messages..."});},d=()=>{l.Modal.warning({title:"This is a warning message",content:"some messages...some messages..."});};var i=()=>(0,o.jsxs)(l.Space,{wrap:!0,children:[(0,o.jsx)(l.Button,{onClick:a,children:"Info"}),(0,o.jsx)(l.Button,{onClick:r,children:"Success"}),(0,o.jsx)(l.Button,{onClick:s,children:"Error"}),(0,o.jsx)(l.Button,{onClick:d,children:"Warning"})]});},"3bfc09c4":function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return s;}});var o=n("777fffbe"),l=n("f19d2b93");n("b72386f7");var a=o._(n("5b220c3d")),r=n("a9d1a279"),s=()=>{let[e,t]=a.default.useState(!1),[n,o]=a.default.useState(!0),s=()=>{t(!0),o(!0),setTimeout(()=>{o(!1);},2e3);};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.Button,{type:"primary",onClick:s,children:"Open Modal"}),(0,l.jsxs)(r.Modal,{title:(0,l.jsx)("p",{children:"Loading Modal"}),footer:(0,l.jsx)(r.Button,{type:"primary",onClick:s,children:"Reload"}),loading:n,open:e,onCancel:()=>t(!1),children:[(0,l.jsx)("p",{children:"Some contents..."}),(0,l.jsx)("p",{children:"Some contents..."}),(0,l.jsx)("p",{children:"Some contents..."})]})]});};},73711903:function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return r;}});var o=n("f19d2b93");n("6c99ae93");var l=n("a9d1a279");let{_InternalPanelDoNotUseOrYouWillBeFired:a}=l.Modal;var r=()=>(0,o.jsx)(l.ConfigProvider,{theme:{token:{wireframe:!0}},children:(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column",rowGap:16},children:[(0,o.jsx)(a,{title:"Hello World!",style:{width:"100%"},children:"Hello World?!"}),(0,o.jsx)(a,{type:"success",style:{width:200},children:"A good news!"}),(0,o.jsx)(a,{title:"Confirm This?",type:"confirm",style:{width:300},children:"Some descriptions."})]})});},"74b74ffc":function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return s;}});var o=n("f19d2b93");n("0450981e");var l=n("a9d1a279");let{_InternalPanelDoNotUseOrYouWillBeFired:a}=l.Modal,r=(e,{OkBtn:t,CancelBtn:n})=>(0,o.jsxs)(l.Space,{direction:"vertical",children:[(0,o.jsx)(l.Space,{children:e}),(0,o.jsxs)(l.Space,{children:[(0,o.jsx)(n,{}),(0,o.jsx)(l.Button,{danger:!0,type:"primary",children:"Custom"}),(0,o.jsx)(t,{})]})]});var s=()=>(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column",rowGap:16},children:[(0,o.jsx)(a,{title:"Hello World!",style:{width:"100%",height:200},children:"Hello World?!"}),(0,o.jsx)(a,{type:"success",style:{width:200,height:150},children:"A good news!"}),(0,o.jsx)(a,{title:"Confirm This?",type:"confirm",style:{width:300,height:200},children:"Some descriptions."}),(0,o.jsx)(a,{title:"Custom Footer Render",style:{width:380,height:200},footer:r,children:(0,o.jsx)(l.Typography.Paragraph,{children:(0,o.jsx)(l.Typography.Link,{href:"https://github.com/ant-design/ant-design/pull/44318",children:"Feature #44318"})})})]});},"76a0f066":function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return u;}});var o=n("777fffbe"),l=n("f19d2b93");n("7c37d539");var a=o._(n("5b220c3d")),r=n("a9d1a279"),s=o._(n("1164364c")),d=o._(n("23546486"));let i={cn:{mask:"\u906E\u7F69\u5C42\u5143\u7D20",wrapper:"\u5305\u88F9\u5C42\u5143\u7D20\uFF0C\u4E00\u822C\u7528\u4E8E\u52A8\u753B\u5BB9\u5668",content:"Modal \u5BB9\u5668\u5143\u7D20",header:"\u5934\u90E8\u5143\u7D20",body:"\u5185\u5BB9\u5143\u7D20",footer:"\u5E95\u90E8\u5143\u7D20"},en:{mask:"Mask element",wrapper:"Wrapper element. Used for motion container",content:"Modal container element",header:"Header element",body:"Body element",footer:"Footer element"}},c=e=>{let t=a.default.useRef(null);return(0,l.jsx)("div",{ref:t,style:{position:"absolute",inset:0},children:(0,l.jsx)(r.Modal,{getContainer:()=>t.current,...e,styles:{mask:{position:"absolute"},wrapper:{position:"absolute"}},style:{top:"50%",transform:"translateY(-50%)",marginBottom:0,paddingBottom:0}})});};var u=()=>{let[e]=(0,d.default)(i);return(0,l.jsx)(s.default,{semantics:[{name:"mask",desc:e.mask,version:"5.13.0"},{name:"content",desc:e.content,version:"5.13.0"},{name:"wrapper",desc:e.wrapper,version:"5.13.0"},{name:"header",desc:e.header,version:"5.13.0"},{name:"body",desc:e.body,version:"5.13.0"},{name:"footer",desc:e.footer,version:"5.13.0"}],children:(0,l.jsx)(c,{title:"Title",closable:!1,open:!0,getContainer:!1,width:400,children:(0,l.jsx)("p",{children:"Some contents..."})})});};},"7a6e5b3d":function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return r;}});var o=n("f19d2b93");n("3fa0aba1");var l=n("5b220c3d"),a=n("a9d1a279"),r=()=>{let[e,t]=(0,l.useState)(!1);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.Button,{type:"primary",onClick:()=>t(!0),children:"Open Modal of 1000px width"}),(0,o.jsxs)(a.Modal,{title:"Modal 1000px width",centered:!0,open:e,onOk:()=>t(!1),onCancel:()=>t(!1),width:1e3,children:[(0,o.jsx)("p",{children:"some contents..."}),(0,o.jsx)("p",{children:"some contents..."}),(0,o.jsx)("p",{children:"some contents..."})]})]});};},"7f468ce4":function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return d;}});var o=n("f19d2b93");n("c6dd677d");var l=n("5b220c3d"),a=n("e22febe0"),r=n("a9d1a279");let s=()=>{let[e,t]=(0,l.useState)(!1),n=()=>{t(!1);};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.Button,{type:"primary",onClick:()=>{t(!0);},children:"Modal"}),(0,o.jsxs)(r.Modal,{title:"Modal",open:e,onOk:n,onCancel:n,okText:"\u786E\u8BA4",cancelText:"\u53D6\u6D88",children:[(0,o.jsx)("p",{children:"Bla bla ..."}),(0,o.jsx)("p",{children:"Bla bla ..."}),(0,o.jsx)("p",{children:"Bla bla ..."})]})]});};var d=()=>{let[e,t]=r.Modal.useModal();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.Space,{children:[(0,o.jsx)(s,{}),(0,o.jsx)(r.Button,{onClick:()=>{e.confirm({title:"Confirm",icon:(0,o.jsx)(a.ExclamationCircleOutlined,{}),content:"Bla bla ...",okText:"\u786E\u8BA4",cancelText:"\u53D6\u6D88"});},children:"Confirm"})]}),t]});};},"8e1eb8ad":function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return r;}});var o=n("f19d2b93");n("3dab6cb1");var l=n("5b220c3d"),a=n("a9d1a279"),r=()=>{let[e,t]=(0,l.useState)(!1);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.Button,{type:"primary",onClick:()=>{t(!0);},children:"Open Modal"}),(0,o.jsxs)(a.Modal,{title:"Basic Modal",open:e,onOk:()=>{t(!1);},onCancel:()=>{t(!1);},mousePosition:{x:300,y:300},children:[(0,o.jsx)("p",{children:"Some contents..."}),(0,o.jsx)("p",{children:"Some contents..."}),(0,o.jsx)("p",{children:"Some contents..."})]})]});};},"8f2ae3d2":function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return r;}});var o=n("f19d2b93");n("e7640705");var l=n("5b220c3d"),a=n("a9d1a279"),r=()=>{let[e,t]=(0,l.useState)(!1),[n,r]=(0,l.useState)(!1),s=()=>{t(!0),setTimeout(()=>{t(!1),r(!1);},3e3);},d=()=>{r(!1);};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.Button,{type:"primary",onClick:()=>{r(!0);},children:"Open Modal with customized footer"}),(0,o.jsxs)(a.Modal,{open:n,title:"Title",onOk:s,onCancel:d,footer:[(0,o.jsx)(a.Button,{onClick:d,children:"Return"},"back"),(0,o.jsx)(a.Button,{type:"primary",loading:e,onClick:s,children:"Submit"},"submit"),(0,o.jsx)(a.Button,{href:"https://google.com",target:"_blank",type:"primary",loading:e,onClick:s,children:"Search on Google"},"link")],children:[(0,o.jsx)("p",{children:"Some contents..."}),(0,o.jsx)("p",{children:"Some contents..."}),(0,o.jsx)("p",{children:"Some contents..."}),(0,o.jsx)("p",{children:"Some contents..."}),(0,o.jsx)("p",{children:"Some contents..."})]})]});};},"9f016927":function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return r;}});var o=n("f19d2b93");n("eaab550b");var l=n("5b220c3d"),a=n("a9d1a279"),r=()=>{let[e,t]=(0,l.useState)(!1);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.Button,{type:"primary",onClick:()=>{t(!0);},children:"Open Modal"}),(0,o.jsxs)(a.Modal,{title:"Basic Modal",open:e,onOk:()=>{t(!1);},onCancel:()=>{t(!1);},children:[(0,o.jsx)("p",{children:"Some contents..."}),(0,o.jsx)("p",{children:"Some contents..."}),(0,o.jsx)("p",{children:"Some contents..."})]})]});};},a9ad80a7:function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return r;}});var o=n("f19d2b93");n("7abf516c");var l=n("5b220c3d"),a=n("a9d1a279"),r=()=>{let[e,t]=(0,l.useState)(!1);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.Button,{type:"primary",onClick:()=>{t(!0);},children:"Open Modal with customized button props"}),(0,o.jsxs)(a.Modal,{title:"Basic Modal",open:e,onOk:e=>{console.log(e),t(!1);},onCancel:e=>{console.log(e),t(!1);},okButtonProps:{disabled:!0},cancelButtonProps:{disabled:!0},children:[(0,o.jsx)("p",{children:"Some contents..."}),(0,o.jsx)("p",{children:"Some contents..."}),(0,o.jsx)("p",{children:"Some contents..."})]})]});};},b3417491:function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return d;}});var o=n("f19d2b93");n("bf47cb83");var l=n("5b220c3d"),a=n("a9d1a279"),r=n("3835a2b7");let s=(0,r.createStyles)(({token:e})=>({"my-modal-body":{background:e.blue1,padding:e.paddingSM},"my-modal-mask":{boxShadow:"inset 0 0 15px #fff"},"my-modal-header":{borderBottom:`1px dotted ${e.colorPrimary}`},"my-modal-footer":{color:e.colorPrimary},"my-modal-content":{border:"1px solid #333"}}));var d=()=>{let[e,t]=(0,l.useState)([!1,!1]),{styles:n}=s(),d=(0,r.useTheme)(),i=(e,n)=>{t(t=>(t[e]=n,[...t]));},c={body:n["my-modal-body"],mask:n["my-modal-mask"],header:n["my-modal-header"],footer:n["my-modal-footer"],content:n["my-modal-content"]},u={header:{borderLeft:`5px solid ${d.colorPrimary}`,borderRadius:0,paddingInlineStart:5},body:{boxShadow:"inset 0 0 5px #999",borderRadius:5},mask:{backdropFilter:"blur(10px)"},footer:{borderTop:"1px solid #333"},content:{boxShadow:"0 0 30px #999"}};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(a.Space,{children:[(0,o.jsx)(a.Button,{type:"primary",onClick:()=>i(0,!0),children:"Open Modal"}),(0,o.jsx)(a.Button,{type:"primary",onClick:()=>i(1,!0),children:"ConfigProvider"})]}),(0,o.jsxs)(a.Modal,{title:"Basic Modal",open:e[0],onOk:()=>i(0,!1),onCancel:()=>i(0,!1),footer:"Footer",classNames:c,styles:u,children:[(0,o.jsx)("p",{children:"Some contents..."}),(0,o.jsx)("p",{children:"Some contents..."}),(0,o.jsx)("p",{children:"Some contents..."})]}),(0,o.jsx)(a.ConfigProvider,{modal:{classNames:c,styles:u},children:(0,o.jsxs)(a.Modal,{title:"Basic Modal",open:e[1],onOk:()=>i(1,!1),onCancel:()=>i(1,!1),footer:"Footer",children:[(0,o.jsx)("p",{children:"Some contents..."}),(0,o.jsx)("p",{children:"Some contents..."}),(0,o.jsx)("p",{children:"Some contents..."})]})})]});};},b65c6d4b:function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return F;}});var o=n("777fffbe"),l=n("f19d2b93");n("959dc97e");var a=n("5b220c3d"),r=n("e22febe0"),s=n("a9d1a279"),d=o._(n("072ab8a9")),i=o._(n("738f1298")),c=o._(n("de3ef184"));d.default.extend(i.default);let{Panel:u}=s.Collapse,{TreeNode:h}=s.Tree,{TabPane:m}=s.Tabs,{Meta:x}=s.Card,{Link:f}=s.Anchor,{Text:p}=s.Typography,j=`
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`,b=Array.from({length:20}).map((e,t)=>({key:t.toString(),title:`content${t+1}`,description:`description of content${t+1}`,disabled:t%3<1})),y=b.filter(e=>Number(e.key)%3>1).map(e=>e.key),g=[{key:"1",name:"John Brown",age:32,address:"New York No. 1 Lake Park"},{key:"2",name:"Jim Green",age:42,address:"London No. 1 Lake Park"},{key:"3",name:"Joe Black",age:32,address:"Sydney No. 1 Lake Park"},{key:"4",name:"Jim Red",age:32,address:"London No. 2 Lake Park"}],k=[{title:"Name",dataIndex:"name"},{title:"Borrow",dataIndex:"borrow"},{title:"Repayment",dataIndex:"repayment"}],C=[{key:"1",name:"John Brown",borrow:10,repayment:33},{key:"2",name:"Jim Green",borrow:100,repayment:0},{key:"3",name:"Joe Black",borrow:10,repayment:10},{key:"4",name:"Jim Red",borrow:75,repayment:45}],v=Array.from({length:3}).map((e,t)=>({key:t,date:"2014-12-24 23:12:00",name:"This is production name",upgradeNum:"Upgraded: 56"})),S=[{title:"Date",dataIndex:"date",key:"date"},{title:"Name",dataIndex:"name",key:"name"},{title:"Status",key:"state",render:()=>(0,l.jsxs)("span",{children:[(0,l.jsx)(s.Badge,{status:"success"}),"Finished"]})},{title:"Upgrade Status",dataIndex:"upgradeNum",key:"upgradeNum"},{title:"Action",dataIndex:"operation",key:"operation",render:()=>(0,l.jsxs)("span",{className:"table-operation",children:[(0,l.jsx)("a",{children:"Pause"}),(0,l.jsx)("a",{children:"Stop"}),(0,l.jsx)(s.Dropdown,{children:(0,l.jsxs)("a",{children:["More ",(0,l.jsx)(r.DownOutlined,{})]})})]})}],M=()=>(0,l.jsx)(s.Table,{columns:S,dataSource:v,pagination:!1}),w=[{title:"Name",dataIndex:"name",key:"name"},{title:"Platform",dataIndex:"platform",key:"platform"},{title:"Version",dataIndex:"version",key:"version"},{title:"Upgraded",dataIndex:"upgradeNum",key:"upgradeNum"},{title:"Creator",dataIndex:"creator",key:"creator"},{title:"Date",dataIndex:"createdAt",key:"createdAt"},{title:"Action",key:"operation",render:()=>(0,l.jsx)("a",{children:"Publish"})}],B=Array.from({length:3}).map((e,t)=>({key:t,name:"Screem",platform:"iOS",version:"10.3.4.5654",upgradeNum:500,creator:"Jack",createdAt:"2014-12-24 23:12:00"})),T=[{title:"Full Name",width:100,dataIndex:"name",key:"name",fixed:"left"},{title:"Age",width:100,dataIndex:"age",key:"age",fixed:"left"},{title:"Column 1",dataIndex:"address",key:"1"},{title:"Column 2",dataIndex:"address",key:"2"},{title:"Column 3",dataIndex:"address",key:"3"},{title:"Column 4",dataIndex:"address",key:"4"},{title:"Column 5",dataIndex:"address",key:"5"},{title:"Column 6",dataIndex:"address",key:"6"},{title:"Column 7",dataIndex:"address",key:"7"},{title:"Column 8",dataIndex:"address",key:"8"},{title:"Action",key:"operation",fixed:"right",width:100,render:()=>(0,l.jsx)("a",{children:"action"})}],O=[{key:"1",name:"John Brown",age:32,address:"New York Park"},{key:"2",name:"Jim Green",age:40,address:"London Park"}],_=e=>{let{leftColumns:t,rightColumns:n,...o}=e;return(0,l.jsx)(s.Transfer,{...o,showSelectAll:!1,children:e=>{let{direction:o,filteredItems:a,onItemSelectAll:r,onItemSelect:d,selectedKeys:i,disabled:u}=e;return(0,l.jsx)(s.Table,{id:"components-transfer-table",rowSelection:{getCheckboxProps:e=>({disabled:u||e.disabled}),onSelectAll(e,t){let n=t.filter(e=>!e.disabled).map(({key:e})=>e);r(e?(0,c.default)(n,i):(0,c.default)(i,n),e);},onSelect({key:e},t){d(e,t);},selectedRowKeys:i},columns:("left"===o?t:n)??[],dataSource:a,size:"small",style:{pointerEvents:u?"none":"auto"},onRow:({key:e,disabled:t})=>({onClick:()=>{t||u||d(e,!i.includes(e));}})});}});},I=[{title:"Name",dataIndex:"name",key:"name",filters:[{text:"Joe",value:"Joe"},{text:"Jim",value:"Jim"}],filteredValue:null,onFilter:(e,t)=>t.name.includes(e),sorter:(e,t)=>e.name.length-t.name.length,sortOrder:"ascend",ellipsis:!0},{title:"Age",dataIndex:"age",key:"age",sorter:!1,sortOrder:"ascend",ellipsis:!0},{title:"Address",dataIndex:"address",key:"address",filters:[{text:"London",value:"London"},{text:"New York",value:"New York"}],filteredValue:null,onFilter:(e,t)=>t.address.includes(e),sorter:!1,sortOrder:"ascend",ellipsis:!0}],P=[{dataIndex:"title",title:"Name"},{dataIndex:"description",title:"Description"}];var F=()=>{let[e,t]=(0,a.useState)(!1),[n,o]=(0,a.useState)(y),[i,c]=(0,a.useState)([]),[v,S]=(0,a.useState)(!1),[F,N]=(0,a.useState)(!1);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.Button,{type:"primary",onClick:()=>{t(!0);},children:"Open Modal"}),(0,l.jsxs)(s.Modal,{title:"Basic Modal",open:e,onOk:e=>{console.log(e),t(!1);},onCancel:e=>{console.log(e),t(!1);},children:[(0,l.jsx)(s.Switch,{unCheckedChildren:"disabled",checkedChildren:"disabled",checked:v,onChange:e=>{S(e);},style:{marginBottom:16}}),(0,l.jsxs)(s.Card,{title:"Card Title",children:[(0,l.jsx)(s.Card.Grid,{children:"Content"}),(0,l.jsx)(s.Card.Grid,{hoverable:!1,children:"Content"}),(0,l.jsx)(s.Card.Grid,{children:"Content"}),(0,l.jsx)(s.Card.Grid,{children:"Content"}),(0,l.jsx)(s.Card.Grid,{children:"Content"}),(0,l.jsx)(s.Card.Grid,{children:"Content"}),(0,l.jsx)(s.Card.Grid,{children:"Content"})]}),(0,l.jsxs)(s.Collapse,{children:[(0,l.jsx)(u,{header:"This is panel header 1",children:(0,l.jsx)(s.Collapse,{defaultActiveKey:"1",children:(0,l.jsx)(u,{header:"This is panel nest panel",children:(0,l.jsx)("p",{children:j})},"1")})},"1"),(0,l.jsx)(u,{header:"This is panel header 2",children:(0,l.jsx)("p",{children:j})},"2"),(0,l.jsx)(u,{header:"This is panel header 3",children:(0,l.jsx)("p",{children:j})},"3")]}),(0,l.jsx)(s.Transfer,{dataSource:b,titles:["Source","Target"],targetKeys:n,selectedKeys:i,onChange:e=>{o(e);},onSelectChange:(e,t)=>{c([...e,...t]);},render:e=>e.title,disabled:v}),(0,l.jsx)(_,{dataSource:b,targetKeys:n,disabled:v,showSearch:F,leftColumns:P,rightColumns:P,onChange:e=>{o(e);},filterOption:(e,t)=>{var n,o;return(null===(n=t.title)||void 0===n?void 0:n.includes(e))||(null===(o=t.tag)||void 0===o?void 0:o.includes(e));}}),(0,l.jsx)(s.Switch,{unCheckedChildren:"disabled",checkedChildren:"disabled",checked:v,onChange:e=>{S(e);},style:{marginTop:16}}),(0,l.jsx)(s.Switch,{unCheckedChildren:"showSearch",checkedChildren:"showSearch",checked:F,onChange:e=>{N(e);},style:{marginTop:16}}),(0,l.jsxs)(s.Anchor,{children:[(0,l.jsx)(f,{href:"#anchor-demo-basic",title:"Basic demo"}),(0,l.jsx)(f,{href:"#anchor-demo-static",title:"Static demo"}),(0,l.jsx)(f,{href:"#anchor-demo-basic",title:"Basic demo with Target",target:"_blank"}),(0,l.jsxs)(f,{href:"#API",title:"API",children:[(0,l.jsx)(f,{href:"#Anchor-Props",title:"Anchor Props"}),(0,l.jsx)(f,{href:"#Link-Props",title:"Link Props"})]})]}),(0,l.jsxs)(s.Tabs,{type:"card",children:[(0,l.jsx)(m,{tab:"Tab 1",children:"Content of Tab Pane 1"},"1"),(0,l.jsx)(m,{tab:"Tab 2",children:"Content of Tab Pane 2"},"2"),(0,l.jsx)(m,{tab:"Tab 3",children:"Content of Tab Pane 3"},"3")]}),(0,l.jsxs)(s.Timeline,{children:[(0,l.jsx)(s.Timeline.Item,{children:"Create a services site 2015-09-01"}),(0,l.jsx)(s.Timeline.Item,{children:"Solve initial network problems 2015-09-01"}),(0,l.jsx)(s.Timeline.Item,{dot:(0,l.jsx)(r.ClockCircleOutlined,{style:{fontSize:"16px"}}),color:"red",children:"Technical testing 2015-09-01"}),(0,l.jsx)(s.Timeline.Item,{children:"Network problems being solved 2015-09-01"})]}),(0,l.jsx)(s.Calendar,{}),(0,l.jsx)(s.Tree,{showLine:!0,switcherIcon:(0,l.jsx)(r.DownOutlined,{}),defaultExpandedKeys:["0-0-0"],children:(0,l.jsxs)(h,{title:"parent 1",children:[(0,l.jsxs)(h,{title:"parent 1-0",children:[(0,l.jsx)(h,{title:"leaf"},"0-0-0-0"),(0,l.jsx)(h,{title:"leaf"},"0-0-0-1"),(0,l.jsx)(h,{title:"leaf"},"0-0-0-2")]},"0-0-0"),(0,l.jsx)(h,{title:"parent 1-1",children:(0,l.jsx)(h,{title:"leaf"},"0-0-1-0")},"0-0-1"),(0,l.jsxs)(h,{title:"parent 1-2",children:[(0,l.jsx)(h,{title:"leaf"},"0-0-2-0"),(0,l.jsx)(h,{title:"leaf"},"0-0-2-1")]},"0-0-2")]},"0-0")}),(0,l.jsx)(s.Table,{columns:I,dataSource:g,footer:()=>"Footer"}),(0,l.jsx)(s.Table,{columns:k,dataSource:C,pagination:!1,id:"table-demo-summary",bordered:!0,summary:e=>{let t=0,n=0;return e.forEach(({borrow:e,repayment:o})=>{t+=e,n+=o;}),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{children:"Total"}),(0,l.jsx)("td",{children:(0,l.jsx)(p,{type:"danger",children:t})}),(0,l.jsx)("td",{children:(0,l.jsx)(p,{children:n})})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{children:"Balance"}),(0,l.jsx)("td",{colSpan:2,children:(0,l.jsx)(p,{type:"danger",children:t-n})})]})]});}}),(0,l.jsx)("br",{}),(0,l.jsx)(s.Table,{columns:w,expandable:{expandedRowRender:M},dataSource:B}),(0,l.jsx)(s.Table,{columns:T,dataSource:O,scroll:{x:1300,y:100}}),(0,l.jsx)(s.Card,{hoverable:!0,style:{width:240},cover:(0,l.jsx)("img",{draggable:!1,alt:"example",src:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"}),children:(0,l.jsx)(x,{title:"Europe Street beat",description:"www.instagram.com"})}),(0,l.jsx)(s.Slider,{defaultValue:30}),(0,l.jsx)(s.DatePicker,{defaultValue:(0,d.default)("2015/01/01","YYYY/MM/DD"),format:"YYYY/MM/DD"}),(0,l.jsx)(s.Badge,{count:5,children:(0,l.jsx)("a",{href:"#",className:"head-example"})})]})]});};},c0014930:function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return r;}});var o=n("f19d2b93");n("4bb51a32");var l=n("5b220c3d"),a=n("a9d1a279"),r=()=>{let[e,t]=(0,l.useState)(!1);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(a.Space,{children:[(0,o.jsx)(a.Button,{type:"primary",onClick:()=>{t(!0);},children:"Open Modal"}),(0,o.jsx)(a.Button,{type:"primary",onClick:()=>{a.Modal.confirm({title:"Confirm",content:"Bla bla ...",footer:(e,{OkBtn:t,CancelBtn:n})=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.Button,{children:"Custom Button"}),(0,o.jsx)(n,{}),(0,o.jsx)(t,{})]})});},children:"Open Modal Confirm"})]}),(0,o.jsxs)(a.Modal,{open:e,title:"Title",onOk:()=>{t(!1);},onCancel:()=>{t(!1);},footer:(e,{OkBtn:t,CancelBtn:n})=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.Button,{children:"Custom Button"}),(0,o.jsx)(n,{}),(0,o.jsx)(t,{})]}),children:[(0,o.jsx)("p",{children:"Some contents..."}),(0,o.jsx)("p",{children:"Some contents..."}),(0,o.jsx)("p",{children:"Some contents..."}),(0,o.jsx)("p",{children:"Some contents..."}),(0,o.jsx)("p",{children:"Some contents..."})]})]});};},c2995d41:function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return r;}});var o=n("f19d2b93");n("cf3050d7");var l=n("5b220c3d"),a=n("a9d1a279"),r=()=>{let[e,t]=(0,l.useState)(!1),[n,r]=(0,l.useState)(!1),[s,d]=(0,l.useState)("Content of the modal");return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.Button,{type:"primary",onClick:()=>{t(!0);},children:"Open Modal with async logic"}),(0,o.jsx)(a.Modal,{title:"Title",open:e,onOk:()=>{d("The modal will be closed after two seconds"),r(!0),setTimeout(()=>{t(!1),r(!1);},2e3);},confirmLoading:n,onCancel:()=>{console.log("Clicked cancel button"),t(!1);},children:(0,o.jsx)("p",{children:s})})]});};},c9a29494:function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return s;}});var o=n("f19d2b93");n("cb20a2f4");var l=n("5b220c3d"),a=n("a9d1a279");let r=[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"}];var s=()=>{let[e,t]=a.message.useMessage(),[n,s]=a.notification.useNotification(),[d,i]=(0,l.useState)(!1);return(0,o.jsxs)(a.Space,{children:[(0,o.jsx)(a.Switch,{style:{position:"relative",zIndex:d?4e3:0},checkedChildren:"Open",unCheckedChildren:"Close",onChange:e=>i(e)}),(0,o.jsx)(a.Button,{onClick:()=>{a.Modal.confirm({content:(0,o.jsx)(a.Select,{open:!0,value:"1",options:r})});},children:"Static"}),(0,o.jsxs)(a.Modal,{title:"Basic Modal",open:d,footer:null,destroyOnClose:!0,onCancel:()=>i(!1),maskClosable:!1,closable:!1,styles:{content:{marginBlockStart:100}},children:[(0,o.jsx)(a.Select,{open:!0,value:"1",options:r}),(0,o.jsxs)(a.Modal,{title:"Nested Modal",open:d,footer:null,destroyOnClose:!0,mask:!1,onCancel:()=>i(!1),maskClosable:!1,closable:!1,styles:{content:{marginBlockStart:250},body:{display:"flex",justifyContent:"center"}},children:[(0,o.jsx)(a.Select,{open:!0,value:"1",options:r}),(0,o.jsx)(a.Modal,{title:"Nested Modal",open:d,footer:null,destroyOnClose:!0,mask:!1,maskClosable:!1,onCancel:()=>i(!1),closable:!1,styles:{content:{marginBlockStart:400},body:{display:"flex",justifyContent:"flex-end"}},children:(0,o.jsxs)(a.Space,{wrap:!0,children:[(0,o.jsx)(a.Button,{onClick:()=>{a.Modal.confirm({title:"Are you OK?",content:"I am OK"});},children:"Static Confirm"}),(0,o.jsx)(a.Button,{onClick:()=>{a.message.success("Hello World"),a.notification.success({message:"Hello World"});},children:"Static Message, Notification"}),(0,o.jsx)(a.Button,{onClick:()=>{e.success("Hello World"),n.success({message:"Hello World"});},children:"Hook Message, Notification"}),(0,o.jsx)(a.Select,{open:!0,value:"1",options:r})]})})]})]}),t,s]});};},dc22b91d:function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return i;}});var o=n("f19d2b93");n("44756fa8");var l=n("e22febe0"),a=n("a9d1a279");let{confirm:r}=a.Modal,s=()=>{a.Modal.destroyAll();},d=()=>{for(let e=0;e<3;e+=1)setTimeout(()=>{r({icon:(0,o.jsx)(l.ExclamationCircleOutlined,{}),content:(0,o.jsx)(a.Button,{onClick:s,children:"Click to destroy all"}),onOk(){console.log("OK");},onCancel(){console.log("Cancel");}});},500*e);};var i=()=>(0,o.jsx)(a.Button,{onClick:d,children:"Confirm"});},df53d018:function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return u;}});var o=n("f19d2b93");n("e7df8c15");var l=n("e22febe0"),a=n("a9d1a279");let{confirm:r}=a.Modal,s=()=>{r({title:"Do you want to delete these items?",icon:(0,o.jsx)(l.ExclamationCircleFilled,{}),content:"Some descriptions",onOk(){console.log("OK");},onCancel(){console.log("Cancel");}});},d=()=>{r({title:"Do you want to delete these items?",icon:(0,o.jsx)(l.ExclamationCircleFilled,{}),content:"When clicked the OK button, this dialog will be closed after 1 second",onOk:()=>new Promise((e,t)=>{setTimeout(Math.random()>.5?e:t,1e3);}).catch(()=>console.log("Oops errors!")),onCancel(){}});},i=()=>{r({title:"Are you sure delete this task?",icon:(0,o.jsx)(l.ExclamationCircleFilled,{}),content:"Some descriptions",okText:"Yes",okType:"danger",cancelText:"No",onOk(){console.log("OK");},onCancel(){console.log("Cancel");}});},c=()=>{r({title:"Are you sure delete this task?",icon:(0,o.jsx)(l.ExclamationCircleFilled,{}),content:"Some descriptions",okText:"Yes",okType:"danger",okButtonProps:{disabled:!0},cancelText:"No",onOk(){console.log("OK");},onCancel(){console.log("Cancel");}});};var u=()=>(0,o.jsxs)(a.Space,{wrap:!0,children:[(0,o.jsx)(a.Button,{onClick:s,children:"Confirm"}),(0,o.jsx)(a.Button,{onClick:d,children:"With promise"}),(0,o.jsx)(a.Button,{onClick:i,type:"dashed",children:"Delete"}),(0,o.jsx)(a.Button,{onClick:c,type:"dashed",children:"With extra props"})]});},e18153f8:function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return i;}});var o=n("f19d2b93");n("df558091");var l=n("5b220c3d"),a=n("a9d1a279");let r=(0,l.createContext)(null),s=(0,l.createContext)(null),d={title:"Use Hook!",content:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.Consumer,{children:e=>`Reachable: ${e}!`}),(0,o.jsx)("br",{}),(0,o.jsx)(s.Consumer,{children:e=>`Unreachable: ${e}!`})]})};var i=()=>{let[e,t]=a.Modal.useModal();return(0,o.jsxs)(r.Provider,{value:"Light",children:[(0,o.jsxs)(a.Space,{children:[(0,o.jsx)(a.Button,{onClick:async()=>{console.log("Confirmed: ",await e.confirm(d));},children:"Confirm"}),(0,o.jsx)(a.Button,{onClick:()=>{e.warning(d);},children:"Warning"}),(0,o.jsx)(a.Button,{onClick:async()=>{e.info(d);},children:"Info"}),(0,o.jsx)(a.Button,{onClick:async()=>{e.error(d);},children:"Error"})]}),t,(0,o.jsx)(s.Provider,{value:"Bamboo"})]});};},e2630f4d:function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return a;}});var o=n("f19d2b93");n("9dcdf535");var l=n("a9d1a279"),a=()=>{let[e,t]=l.Modal.useModal();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.Button,{onClick:()=>{let t=5,n=e.success({title:"This is a notification message",content:`This modal will be destroyed after ${t} second.`}),o=setInterval(()=>{t-=1,n.update({content:`This modal will be destroyed after ${t} second.`});},1e3);setTimeout(()=>{clearInterval(o),n.destroy();},1e3*t);},children:"Open modal to close in 5s"}),t]});};},f9172e3a:function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return d;}});var o=n("777fffbe"),l=n("f19d2b93");n("5af6d844");var a=n("5b220c3d"),r=n("a9d1a279"),s=o._(n("3d79e8ff")),d=()=>{let[e,t]=(0,a.useState)(!1),[n,o]=(0,a.useState)(!0),[d,i]=(0,a.useState)({left:0,top:0,bottom:0,right:0}),c=(0,a.useRef)(null),u=(e,t)=>{var n;let{clientWidth:o,clientHeight:l}=window.document.documentElement,a=null===(n=c.current)||void 0===n?void 0:n.getBoundingClientRect();a&&i({left:-a.left+t.x,right:o-(a.right-t.x),top:-a.top+t.y,bottom:l-(a.bottom-t.y)});};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.Button,{onClick:()=>{t(!0);},children:"Open Draggable Modal"}),(0,l.jsxs)(r.Modal,{title:(0,l.jsx)("div",{style:{width:"100%",cursor:"move"},onMouseOver:()=>{n&&o(!1);},onMouseOut:()=>{o(!0);},onFocus:()=>{},onBlur:()=>{},children:"Draggable Modal"}),open:e,onOk:e=>{console.log(e),t(!1);},onCancel:e=>{console.log(e),t(!1);},modalRender:e=>(0,l.jsx)(s.default,{disabled:n,bounds:d,nodeRef:c,onStart:(e,t)=>u(e,t),children:(0,l.jsx)("div",{ref:c,children:e})}),children:[(0,l.jsx)("p",{children:"Just don't learn physics at school and your life will be full of magic and miracles."}),(0,l.jsx)("br",{}),(0,l.jsx)("p",{children:"Day before yesterday I saw a rabbit, and yesterday a deer, and today, you."})]})]});};},fc3c798f:function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return r;}});var o=n("f19d2b93");n("e3663228");var l=n("5b220c3d"),a=n("a9d1a279"),r=()=>{let[e,t]=(0,l.useState)(!1),[n,r]=(0,l.useState)(!1);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.Button,{type:"primary",onClick:()=>t(!0),children:"Display a modal dialog at 20px to Top"}),(0,o.jsxs)(a.Modal,{title:"20px to Top",style:{top:20},open:e,onOk:()=>t(!1),onCancel:()=>t(!1),children:[(0,o.jsx)("p",{children:"some contents..."}),(0,o.jsx)("p",{children:"some contents..."}),(0,o.jsx)("p",{children:"some contents..."})]}),(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),(0,o.jsx)(a.Button,{type:"primary",onClick:()=>r(!0),children:"Vertically centered modal dialog"}),(0,o.jsxs)(a.Modal,{title:"Vertically centered modal dialog",centered:!0,open:n,onOk:()=>r(!1),onCancel:()=>r(!1),children:[(0,o.jsx)("p",{children:"some contents..."}),(0,o.jsx)("p",{children:"some contents..."}),(0,o.jsx)("p",{children:"some contents..."})]})]});};}}]);