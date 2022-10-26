var P=Object.defineProperty,L=Object.defineProperties;var R=Object.getOwnPropertyDescriptors;var $=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var q=(e,l,s)=>l in e?P(e,l,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[l]=s,S=(e,l)=>{for(var s in l||(l={}))G.call(l,s)&&q(e,s,l[s]);if($)for(var s of $(l))I.call(l,s)&&q(e,s,l[s]);return e},z=(e,l)=>L(e,R(l));import{_ as O,d as j,r as H,c as J,e as Q,t as W,V as X,k as d,R as Y,m as T,p as Z,y as m,G as _,v as y,w as u,A as t,q as a,D as r,z as K,$ as F,E as U,S as x}from"./index.1666788454973.js";import{t as k}from"./api.16667884549732.js";import"./Api.1666788454973.js";const ee=j({name:"TagTreeList",components:{},setup(){const e=H(null),l=J({saveTabDialog:{title:"\u65B0\u589E\u6807\u7B7E",visible:!1,form:{id:0,pid:0,code:"",name:"",remark:""}},infoDialog:{title:"",visible:!1,data:null},data:[],props:{label:"name",children:"children"},defaultExpandedKeys:[],rules:{code:[{required:!0,message:"\u6807\u8BC6\u7B26\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],name:[{required:!0,message:"\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}});Q(()=>{s()});const s=async()=>{let o=await k.getTagTrees.request(null);l.data=o},V=async o=>{l.infoDialog.data=o,l.infoDialog.visible=!0},w=o=>{o?(l.saveTabDialog.form.pid=o.id,l.saveTabDialog.title=`\u65B0\u589E [${o.codePath}] \u5B50\u6807\u7B7E\u4FE1\u606F`):l.saveTabDialog.title="\u65B0\u589E\u6839\u6807\u7B7E\u4FE1\u606F",l.saveTabDialog.visible=!0},A=o=>{l.saveTabDialog.form.id=o.id,l.saveTabDialog.form.code=o.code,l.saveTabDialog.form.name=o.name,l.saveTabDialog.form.remark=o.remark,l.saveTabDialog.title=`\u4FEE\u6539 [${o.codePath}] \u4FE1\u606F`,l.saveTabDialog.visible=!0},g=async()=>{e.value.validate(async o=>{if(o){const i=l.saveTabDialog.form;await k.saveTagTree.request(i),U.success("\u4FDD\u5B58\u6210\u529F"),s(),D()}})},D=()=>{l.saveTabDialog.visible=!1,l.saveTabDialog.form={},e.value.resetFields()},B=o=>{x.confirm(`\u6B64\u64CD\u4F5C\u5C06\u5220\u9664 [${o.codePath}], \u662F\u5426\u7EE7\u7EED?`,"\u63D0\u793A",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",type:"warning"}).then(async()=>{await k.delTagTree.request({id:o.id}),U.success("\u5220\u9664\u6210\u529F\uFF01"),s()})},h=(o,i)=>{const c=i.data.id;l.defaultExpandedKeys.includes(c)||l.defaultExpandedKeys.push(c)},b=(o,i)=>{p(i.data.id);let c=i.childNodes;for(let v of c)v.expanded&&p(v.data.id),b(o,v)},p=o=>{let i=l.defaultExpandedKeys.indexOf(o);i>-1&&l.defaultExpandedKeys.splice(i,1)};return z(S({},W(l)),{dateFormat:X,tagForm:e,info:V,saveTag:g,showSaveTabDialog:w,showEditTagDialog:A,cancelSaveTag:D,deleteTag:B,handleNodeExpand:h,handleNodeCollapse:b})}}),le={class:"menu"},ae={class:"toolbar"},oe={style:{float:"right"}},ue=m("br",null,null,-1),ne=m("br",null,null,-1),te={class:"custom-tree-node"},se={style:{"font-size":"13px"}},ie=m("span",{style:{color:"#3c8dbc"}},"\u3010",-1),de=m("span",{style:{color:"#3c8dbc"}},"\u3011",-1),re={class:"dialog-footer"};function me(e,l,s,V,w,A){const g=d("el-button"),D=d("question-filled"),B=d("el-icon"),h=d("el-tooltip"),b=d("el-tag"),p=d("el-link"),o=d("el-tree"),i=d("el-input"),c=d("el-form-item"),v=d("el-form"),N=d("el-dialog"),f=d("el-descriptions-item"),M=d("el-descriptions"),E=Y("auth");return T(),Z("div",le,[m("div",ae,[_((T(),y(g,{type:"primary",icon:"plus",onClick:l[0]||(l[0]=n=>e.showSaveTabDialog(null))},{default:u(()=>[t("\u6DFB\u52A0")]),_:1})),[[E,"tag:save"]]),m("div",oe,[a(h,{effect:"dark",placement:"top"},{content:u(()=>[t(" 1. \u7528\u4E8E\u5C06\u8D44\u4EA7\u8FDB\u884C\u5F52\u7C7B "),ue,t("2. \u53EF\u5728\u56E2\u961F\u7BA1\u7406\u4E2D\u8FDB\u884C\u5206\u914D\uFF0C\u7528\u4E8E\u8D44\u6E90\u9694\u79BB "),ne,t("3. \u7236\u6807\u7B7E\u53EF\u8BBF\u95EE\u53CA\u64CD\u4F5C\u6240\u6709\u5B50\u6807\u7B7E\u5173\u8054\u7684\u8D44\u6E90 ")]),default:u(()=>[m("span",null,[t("\u6807\u7B7E\u4F5C\u7528"),a(B,null,{default:u(()=>[a(D)]),_:1})])]),_:1})])]),a(o,{class:"none-select",indent:38,"node-key":"id",props:e.props,data:e.data,onNodeExpand:e.handleNodeExpand,onNodeCollapse:e.handleNodeCollapse,"default-expanded-keys":e.defaultExpandedKeys,"expand-on-click-node":!1},{default:u(({data:n})=>[m("span",te,[m("span",se,[t(r(n.code)+" ",1),ie,t(" "+r(n.name)+" ",1),de,n.children!==null?(T(),y(b,{key:0,size:"small"},{default:u(()=>[t(r(n.children.length),1)]),_:2},1024)):K("",!0)]),a(p,{onClick:F(C=>e.info(n),["prevent"]),style:{"margin-left":"25px"},icon:"view",type:"info",underline:!1},null,8,["onClick"]),_(a(p,{onClick:F(C=>e.showEditTagDialog(n),["prevent"]),class:"ml5",type:"primary",icon:"edit",underline:!1},null,8,["onClick"]),[[E,"tag:save"]]),_(a(p,{onClick:F(C=>e.showSaveTabDialog(n),["prevent"]),icon:"circle-plus",underline:!1,type:"success",class:"ml5"},null,8,["onClick"]),[[E,"tag:save"]]),n.children==null?_((T(),y(p,{key:0,onClick:F(C=>e.deleteTag(n),["prevent"]),type:"danger",icon:"delete",underline:!1,plain:"",class:"ml5"},null,8,["onClick"])),[[E,"tag:del"]]):K("",!0)])]),_:1},8,["props","data","onNodeExpand","onNodeCollapse","default-expanded-keys"]),a(N,{width:"500px",title:e.saveTabDialog.title,"before-close":e.cancelSaveTag,modelValue:e.saveTabDialog.visible,"onUpdate:modelValue":l[5]||(l[5]=n=>e.saveTabDialog.visible=n)},{footer:u(()=>[m("div",re,[a(g,{onClick:l[4]||(l[4]=n=>e.cancelSaveTag())},{default:u(()=>[t("\u53D6 \u6D88")]),_:1}),a(g,{onClick:e.saveTag,type:"primary"},{default:u(()=>[t("\u786E \u5B9A")]),_:1},8,["onClick"])])]),default:u(()=>[a(v,{ref:"tagForm",rules:e.rules,model:e.saveTabDialog.form,"label-width":"70px"},{default:u(()=>[a(c,{prop:"code",label:"\u6807\u8BC6:",required:""},{default:u(()=>[a(i,{disabled:!!e.saveTabDialog.form.id,modelValue:e.saveTabDialog.form.code,"onUpdate:modelValue":l[1]||(l[1]=n=>e.saveTabDialog.form.code=n),"auto-complete":"off"},null,8,["disabled","modelValue"])]),_:1}),a(c,{prop:"name",label:"\u540D\u79F0:",required:""},{default:u(()=>[a(i,{modelValue:e.saveTabDialog.form.name,"onUpdate:modelValue":l[2]||(l[2]=n=>e.saveTabDialog.form.name=n),"auto-complete":"off"},null,8,["modelValue"])]),_:1}),a(c,{label:"\u5907\u6CE8:"},{default:u(()=>[a(i,{modelValue:e.saveTabDialog.form.remark,"onUpdate:modelValue":l[3]||(l[3]=n=>e.saveTabDialog.form.remark=n),"auto-complete":"off"},null,8,["modelValue"])]),_:1})]),_:1},8,["rules","model"])]),_:1},8,["title","before-close","modelValue"]),a(N,{modelValue:e.infoDialog.visible,"onUpdate:modelValue":l[6]||(l[6]=n=>e.infoDialog.visible=n)},{default:u(()=>[a(M,{title:"\u8282\u70B9\u4FE1\u606F",column:2,border:""},{default:u(()=>[a(f,{label:"code"},{default:u(()=>[t(r(e.infoDialog.data.code),1)]),_:1}),a(f,{label:"code\u8DEF\u5F84"},{default:u(()=>[t(r(e.infoDialog.data.codePath),1)]),_:1}),a(f,{label:"\u540D\u79F0"},{default:u(()=>[t(r(e.infoDialog.data.name),1)]),_:1}),a(f,{label:"\u5907\u6CE8"},{default:u(()=>[t(r(e.infoDialog.data.remark),1)]),_:1}),a(f,{label:"\u521B\u5EFA\u8005"},{default:u(()=>[t(r(e.infoDialog.data.creator),1)]),_:1}),a(f,{label:"\u521B\u5EFA\u65F6\u95F4"},{default:u(()=>[t(r(e.dateFormat(e.infoDialog.data.createTime)),1)]),_:1}),a(f,{label:"\u4FEE\u6539\u8005"},{default:u(()=>[t(r(e.infoDialog.data.modifier),1)]),_:1}),a(f,{label:"\u66F4\u65B0\u65F6\u95F4"},{default:u(()=>[t(r(e.dateFormat(e.infoDialog.data.updateTime)),1)]),_:1})]),_:1})]),_:1},8,["modelValue"])])}var ve=O(ee,[["render",me]]);export{ve as default};