var fe=Object.defineProperty,he=Object.defineProperties;var be=Object.getOwnPropertyDescriptors;var se=Object.getOwnPropertySymbols;var ge=Object.prototype.hasOwnProperty,ve=Object.prototype.propertyIsEnumerable;var ue=(e,l,h)=>l in e?fe(e,l,{enumerable:!0,configurable:!0,writable:!0,value:h}):e[l]=h,N=(e,l)=>{for(var h in l||(l={}))ge.call(l,h)&&ue(e,h,l[h]);if(se)for(var h of se(l))ve.call(l,h)&&ue(e,h,l[h]);return e},R=(e,l)=>he(e,be(l));import{y as K,t as O,r as te,a as J,F as Q,E as q,d as a,V as X,q as f,e as j,j as t,k as o,f as $,w as U,G as E,I as x,J as ee,h as v,P as oe,i as Y,H as M,g as ie,M as _e,o as ye}from"./vendor.1642734948623.js";import{A as k}from"./Api.1642734948623.js";import{p as Ce}from"./api.16427349486233.js";import{S as Fe}from"./SshTerminal.1642734948623.js";import{E as re}from"./Enum.1642734948623.js";import{n as ne}from"./assert.1642734948623.js";import{c as de}from"./codemirror.1642734948623.js";import{_ as Z,g as De,c as me}from"./index.1642734948623.js";const T={list:k.create("/machines","get"),info:k.create("/machines/{id}/sysinfo","get"),stats:k.create("/machines/{id}/stats","get"),process:k.create("/machines/{id}/process","get"),killProcess:k.create("/machines/{id}/process","delete"),closeCli:k.create("/machines/{id}/close-cli","delete"),saveMachine:k.create("/machines","post"),del:k.create("/machines/{id}","delete"),scripts:k.create("/machines/{machineId}/scripts","get"),runScript:k.create("/machines/{machineId}/scripts/{scriptId}/run","get"),saveScript:k.create("/machines/{machineId}/scripts","post"),deleteScript:k.create("/machines/{machineId}/scripts/{scriptId}","delete"),files:k.create("/machines/{id}/files","get"),lsFile:k.create("/machines/{machineId}/files/{fileId}/read-dir","get"),rmFile:k.create("/machines/{machineId}/files/{fileId}/remove","delete"),uploadFile:k.create("/machines/files/upload","post"),fileContent:k.create("/machines/{machineId}/files/{fileId}/read","get"),updateFileContent:k.create("/machines/{machineId}/files/{id}/write","post"),addConf:k.create("/machines/{machineId}/files","post"),delConf:k.create("/machines/{machineId}/files/{id}","delete"),terminal:k.create("/api/machines/{id}/terminal","get")};var W={scriptTypeEnum:new re().add("RESULT","\u6709\u7ED3\u679C",1).add("NO_RESULT","\u65E0\u7ED3\u679C",2).add("REAL_TIME","\u5B9E\u65F6\u4EA4\u4E92",3),FileTypeEnum:new re().add("DIRECTORY","\u76EE\u5F55",1).add("FILE","\u6587\u4EF6",2)};const Ee=K({name:"ScriptEdit",components:{codemirror:de},props:{visible:{type:Boolean},data:{type:Object},title:{type:String},machineId:{type:Number},isCommon:{type:Boolean}},setup(e,{emit:l}){const{isCommon:h,machineId:s}=O(e),I=te(null),w=J({dialogVisible:!1,submitDisabled:!1,form:{id:null,name:"",machineId:0,description:"",script:"",params:null,type:null},btnLoading:!1});Q(e,p=>{p.data?w.form=N({},p.data):(w.form={},w.form.script=""),w.dialogVisible=p.visible});const b=()=>{w.form.machineId=h.value?9999999:s.value,console.log("machineid:",s),I.value.validate(p=>{if(p)ne(w.form.name,"\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A"),ne(w.form.description,"\u63CF\u8FF0\u4E0D\u80FD\u4E3A\u7A7A"),ne(w.form.script,"\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A"),T.saveScript.request(w.form).then(()=>{q.success("\u4FDD\u5B58\u6210\u529F"),l("submitSuccess"),w.submitDisabled=!1,m()},()=>{w.submitDisabled=!1});else return!1})},m=()=>{l("update:visible",!1),l("cancel")};return R(N({},O(w)),{enums:W,mockDataForm:I,btnOk:b,cancel:m})}}),we={class:"mock-data-dialog"},Be={class:"dialog-footer"},Ve=v("\u4FDD \u5B58"),Ie=v("\u5173 \u95ED");function ke(e,l,h,s,I,w){const b=a("el-input"),m=a("el-form-item"),p=a("el-option"),u=a("el-select"),C=a("codemirror"),F=a("el-form"),_=a("el-button"),i=a("el-dialog"),y=X("auth");return f(),j("div",we,[t(i,{title:e.title,modelValue:e.dialogVisible,"onUpdate:modelValue":l[6]||(l[6]=n=>e.dialogVisible=n),"close-on-click-modal":!1,"before-close":e.cancel,"show-close":!0,"destroy-on-close":!0,width:"800px"},{footer:o(()=>[$("div",Be,[U((f(),E(_,{type:"primary",loading:e.btnLoading,onClick:e.btnOk,size:"small",disabled:e.submitDisabled},{default:o(()=>[Ve]),_:1},8,["loading","onClick","disabled"])),[[y,"machine:script:save"]]),t(_,{onClick:l[5]||(l[5]=n=>e.cancel()),disabled:e.submitDisabled,size:"small"},{default:o(()=>[Ie]),_:1},8,["disabled"])])]),default:o(()=>[t(F,{model:e.form,ref:"mockDataForm","label-width":"70px"},{default:o(()=>[t(m,{prop:"method",label:"\u540D\u79F0"},{default:o(()=>[t(b,{modelValue:e.form.name,"onUpdate:modelValue":l[0]||(l[0]=n=>e.form.name=n),modelModifiers:{trim:!0},placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0"},null,8,["modelValue"])]),_:1}),t(m,{prop:"description",label:"\u63CF\u8FF0"},{default:o(()=>[t(b,{modelValue:e.form.description,"onUpdate:modelValue":l[1]||(l[1]=n=>e.form.description=n),modelModifiers:{trim:!0},placeholder:"\u8BF7\u8F93\u5165\u63CF\u8FF0"},null,8,["modelValue"])]),_:1}),t(m,{prop:"type",label:"\u7C7B\u578B"},{default:o(()=>[t(u,{modelValue:e.form.type,"onUpdate:modelValue":l[2]||(l[2]=n=>e.form.type=n),"default-first-option":"",style:{width:"100%"},placeholder:"\u8BF7\u9009\u62E9\u7C7B\u578B"},{default:o(()=>[(f(!0),j(x,null,ee(e.enums.scriptTypeEnum,n=>(f(),E(p,{key:n.value,label:n.label,value:n.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(m,{prop:"params",label:"\u53C2\u6570"},{default:o(()=>[t(b,{modelValue:e.form.params,"onUpdate:modelValue":l[3]||(l[3]=n=>e.form.params=n),modelModifiers:{trim:!0},placeholder:"\u53C2\u6570\u6570\u7EC4json\uFF0C\u82E5\u65E0\u53EF\u4E0D\u586B"},null,8,["modelValue"])]),_:1}),t(m,{prop:"script",label:"\u5185\u5BB9",id:"content"},{default:o(()=>[t(C,{ref:"cmEditor",modelValue:e.form.script,"onUpdate:modelValue":l[4]||(l[4]=n=>e.form.script=n),language:"shell"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["title","modelValue","before-close"])])}var $e=Z(Ee,[["render",ke]]);const Ae=K({name:"ServiceManage",components:{ScriptEdit:$e,SshTerminal:Fe},props:{visible:{type:Boolean},machineId:{type:Number},title:{type:String}},setup(e,l){const h=te(null),s=J({dialogVisible:!1,type:0,currentId:null,currentData:null,editDialog:{visible:!1,data:null,title:"",machineId:9999999},scriptTable:[],scriptParamsDialog:{visible:!1,params:{},paramsFormItem:[]},resultDialog:{visible:!1,result:""},terminalDialog:{visible:!1,cmd:"",machineId:0}});Q(e,n=>{e.machineId&&I(),s.dialogVisible=n.visible});const I=async()=>{s.currentId=null,s.currentData=null;const n=s.type==0?e.machineId:9999999,A=await T.scripts.request({machineId:n});s.scriptTable=A.list},w=async n=>{if(n.params){s.scriptParamsDialog.paramsFormItem=JSON.parse(n.params),s.scriptParamsDialog.visible=!0;return}m(n)},b=async n=>{s.scriptParamsDialog.visible&&h.value.validate(A=>{if(A)m(n),s.scriptParamsDialog.params={},s.scriptParamsDialog.visible=!1,h.value.resetFields();else return!1})},m=async n=>{const A=n.type==W.scriptTypeEnum.NO_RESULT.value;if(n.type==W.scriptTypeEnum.RESULT.value||A){const z=await T.runScript.request({machineId:e.machineId,scriptId:n.id,params:s.scriptParamsDialog.params});if(A){q.success("\u6267\u884C\u5B8C\u6210");return}s.resultDialog.result=z,s.resultDialog.visible=!0;return}if(n.type==W.scriptTypeEnum.REAL_TIME.value){n=n.script,s.scriptParamsDialog.params&&(n=p(n,s.scriptParamsDialog.params)),s.terminalDialog.cmd=n,s.terminalDialog.visible=!0,s.terminalDialog.machineId=e.machineId;return}};function p(n,A){return n.replace(/\{{.\w+\}}/g,z=>{const P=z.substring(3,z.length-2),d=A[P];return d!=null||d!=null?d:""})}const u=()=>{s.terminalDialog.visible=!1,s.terminalDialog.machineId=0},C=n=>{!n||(s.currentId=n.id,s.currentData=n)},F=n=>{s.editDialog.machineId=e.machineId,s.editDialog.data=n,n?s.editDialog.title="\u67E5\u770B\u7F16\u8F91\u811A\u672C":s.editDialog.title="\u65B0\u589E\u811A\u672C",s.editDialog.visible=!0},_=()=>{I()},i=n=>{oe.confirm(`\u6B64\u64CD\u4F5C\u5C06\u5220\u9664 [${n.name}], \u662F\u5426\u7EE7\u7EED?`,"\u63D0\u793A",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",type:"warning"}).then(()=>{T.deleteScript.request({machineId:e.machineId,scriptId:n.id}).then(()=>{I()})})},y=()=>{l.emit("update:visible",!1),l.emit("update:machineId",null),l.emit("cancel"),s.scriptTable=[]};return R(N({},O(s)),{paramsForm:h,enums:W,getScripts:I,runScript:w,hasParamsRun:b,closeTermnial:u,choose:C,editScript:F,submitSuccess:_,deleteRow:i,handleClose:y})}}),Te={class:"file-manage"},Ue={class:"toolbar"},Se={style:{float:"left"}},je={style:{float:"right"}},ze=v("\u67E5\u770B"),Me=v("\u6DFB\u52A0"),Pe=v("\u5220\u9664"),qe=$("i",null,null,-1),Le=v("\u786E\u5B9A"),Ne=v("\u6267\u884C"),Re={class:"dialog-footer"},Oe=v("\u786E \u5B9A"),We={style:{"white-space":"pre-line",padding:"10px",color:"#000000"}};function Ge(e,l,h,s,I,w){const b=a("el-option"),m=a("el-select"),p=a("el-button"),u=a("el-radio"),C=a("el-table-column"),F=a("el-table"),_=a("el-dialog"),i=a("el-input"),y=a("el-form-item"),n=a("el-form"),A=a("ssh-terminal"),z=a("script-edit"),P=X("auth");return f(),j("div",Te,[t(_,{title:e.title,modelValue:e.dialogVisible,"onUpdate:modelValue":l[5]||(l[5]=d=>e.dialogVisible=d),"destroy-on-close":!0,"show-close":!0,"before-close":e.handleClose,width:"60%"},{default:o(()=>[$("div",Ue,[$("div",Se,[t(m,{modelValue:e.type,"onUpdate:modelValue":l[0]||(l[0]=d=>e.type=d),onChange:e.getScripts,size:"small",placeholder:"\u8BF7\u9009\u62E9"},{default:o(()=>[(f(),E(b,{key:0,label:"\u79C1\u6709",value:0})),(f(),E(b,{key:1,label:"\u516C\u5171",value:1}))]),_:1},8,["modelValue","onChange"])]),$("div",je,[t(p,{onClick:l[1]||(l[1]=d=>e.editScript(e.currentData)),disabled:e.currentId==null,type:"primary",icon:"tickets",size:"small",plain:""},{default:o(()=>[ze]),_:1},8,["disabled"]),U((f(),E(p,{type:"primary",onClick:l[2]||(l[2]=d=>e.editScript(null)),icon:"plus",size:"small",plain:""},{default:o(()=>[Me]),_:1})),[[P,"machine:script:save"]]),U((f(),E(p,{disabled:e.currentId==null,type:"danger",onClick:l[3]||(l[3]=d=>e.deleteRow(e.currentData)),icon:"delete",size:"small",plain:""},{default:o(()=>[Pe]),_:1},8,["disabled"])),[[P,"machine:script:del"]])])]),t(F,{data:e.scriptTable,onCurrentChange:e.choose,stripe:"",border:"",size:"small",style:{width:"100%"}},{default:o(()=>[t(C,{label:"\u9009\u62E9",width:"55px"},{default:o(d=>[t(u,{modelValue:e.currentId,"onUpdate:modelValue":l[4]||(l[4]=B=>e.currentId=B),label:d.row.id},{default:o(()=>[qe]),_:2},1032,["modelValue","label"])]),_:1}),t(C,{prop:"name",label:"\u540D\u79F0","min-width":70}),t(C,{prop:"description",label:"\u63CF\u8FF0","min-width":100,"show-overflow-tooltip":""}),t(C,{prop:"name",label:"\u7C7B\u578B","min-width":50},{default:o(d=>[v(Y(e.enums.scriptTypeEnum.getLabelByValue(d.row.type)),1)]),_:1}),t(C,{label:"\u64CD\u4F5C"},{default:o(d=>[d.row.id==null?(f(),E(p,{key:0,onClick:B=>e.addFiles(d.row),type:"success",icon:"el-icon-success",size:"small",plain:""},{default:o(()=>[Le]),_:2},1032,["onClick"])):M("",!0),d.row.id!=null?U((f(),E(p,{key:1,onClick:B=>e.runScript(d.row),type:"primary",icon:"video-play",size:"small",plain:""},{default:o(()=>[Ne]),_:2},1032,["onClick"])),[[P,"machine:script:run"]]):M("",!0)]),_:1})]),_:1},8,["data","onCurrentChange"])]),_:1},8,["title","modelValue","before-close"]),t(_,{title:"\u811A\u672C\u53C2\u6570",modelValue:e.scriptParamsDialog.visible,"onUpdate:modelValue":l[7]||(l[7]=d=>e.scriptParamsDialog.visible=d),width:"400px"},{footer:o(()=>[$("span",Re,[t(p,{type:"primary",onClick:l[6]||(l[6]=d=>e.hasParamsRun(e.currentData)),size:"small"},{default:o(()=>[Oe]),_:1})])]),default:o(()=>[t(n,{ref:"paramsForm",model:e.scriptParamsDialog.params,"label-width":"70px",size:"small"},{default:o(()=>[(f(!0),j(x,null,ee(e.scriptParamsDialog.paramsFormItem,d=>(f(),E(y,{key:d.name,prop:d.model,label:d.name,required:""},{default:o(()=>[t(i,{modelValue:e.scriptParamsDialog.params[d.model],"onUpdate:modelValue":B=>e.scriptParamsDialog.params[d.model]=B,placeholder:d.placeholder,autocomplete:"off"},null,8,["modelValue","onUpdate:modelValue","placeholder"])]),_:2},1032,["prop","label"]))),128))]),_:1},8,["model"])]),_:1},8,["modelValue"]),t(_,{title:"\u6267\u884C\u7ED3\u679C",modelValue:e.resultDialog.visible,"onUpdate:modelValue":l[9]||(l[9]=d=>e.resultDialog.visible=d),width:"50%"},{default:o(()=>[$("div",We,[t(i,{modelValue:e.resultDialog.result,"onUpdate:modelValue":l[8]||(l[8]=d=>e.resultDialog.result=d),rows:20,type:"textarea"},null,8,["modelValue"])])]),_:1},8,["modelValue"]),e.terminalDialog.visible?(f(),E(_,{key:0,title:"\u7EC8\u7AEF",modelValue:e.terminalDialog.visible,"onUpdate:modelValue":l[10]||(l[10]=d=>e.terminalDialog.visible=d),width:"70%","close-on-click-modal":!1,modal:!1,onClose:e.closeTermnial},{default:o(()=>[t(A,{ref:"terminal",cmd:e.terminalDialog.cmd,machineId:e.terminalDialog.machineId,height:"600px"},null,8,["cmd","machineId"])]),_:1},8,["modelValue","onClose"])):M("",!0),t(z,{visible:e.editDialog.visible,"onUpdate:visible":l[11]||(l[11]=d=>e.editDialog.visible=d),data:e.editDialog.data,"onUpdate:data":l[12]||(l[12]=d=>e.editDialog.data=d),title:e.editDialog.title,machineId:e.editDialog.machineId,"onUpdate:machineId":l[13]||(l[13]=d=>e.editDialog.machineId=d),isCommon:e.type==1,onSubmitSuccess:e.submitSuccess},null,8,["visible","data","title","machineId","isCommon","onSubmitSuccess"])])}var Ke=Z(Ae,[["render",Ge]]);const Je=K({name:"FileManage",components:{codemirror:de},props:{visible:{type:Boolean},machineId:{type:Number},title:{type:String}},setup(e,{emit:l}){const h=T.addConf,s=T.delConf,I=T.updateFileContent,w=T.files,b=te(null),m=De("token"),p={tabSize:2,mode:"text/x-sh",theme:"panda-syntax",line:!0,lint:!0,gutters:["CodeMirror-lint-markers"],indentWithTabs:!0,smartIndent:!0,matchBrackets:!0,autofocus:!0,styleSelectedText:!0,styleActiveLine:!0,foldGutter:!0,hintOptions:{completeSingle:!0}},u=J({dialogVisible:!1,form:{id:null,type:null,name:"",remark:""},fileTable:[],btnLoading:!1,fileContent:{fileId:0,content:"",contentVisible:!1,dialogTitle:"",path:"",type:"shell"},tree:{title:"",visible:!1,folder:{id:0},node:{childNodes:[]},resolve:{}},props:{label:"name",children:"zones",isLeaf:"leaf"}});Q(e,c=>{c.machineId&&C(),u.dialogVisible=c.visible});const C=async()=>{const c=await w.request({id:e.machineId});u.fileTable=c.list},F=()=>{u.fileTable=[{}].concat(u.fileTable)},_=async c=>{c.machineId=e.machineId,await h.request(c),q.success("\u6DFB\u52A0\u6210\u529F"),C()},i=(c,V)=>{V.id?oe.confirm(`\u6B64\u64CD\u4F5C\u5C06\u5220\u9664 [${V.name}], \u662F\u5426\u7EE7\u7EED?`,"\u63D0\u793A",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",type:"warning"}).then(()=>{s.request({machineId:e.machineId,id:V.id}).then(()=>{u.fileTable.splice(c,1)})}):u.fileTable.splice(c,1)},y=c=>{if(c.type==1){u.tree.folder=c,u.tree.title=c.name,d(u.tree.node,u.tree.resolve),u.tree.visible=!0;return}n(c.id,c.path)},n=async(c,V)=>{const S=await T.fileContent.request({fileId:c,path:V,machineId:e.machineId});u.fileContent.content=S,u.fileContent.fileId=c,u.fileContent.dialogTitle=V,u.fileContent.path=V,u.fileContent.type=A(V),u.fileContent.contentVisible=!0},A=c=>c.endsWith(".sh")?"shell":c.endsWith("js")||c.endsWith("json")?"javascript":c.endsWith("Dockerfile")?"dockerfile":c.endsWith("nginx.conf")?"nginx":c.endsWith("yaml")||c.endsWith("yml")?"yaml":c.endsWith("xml")||c.endsWith("html")?"html":"text",z=async()=>{await I.request({content:u.fileContent.content,id:u.fileContent.fileId,path:u.fileContent.path,machineId:e.machineId}),q.success("\u4FEE\u6539\u6210\u529F"),u.fileContent.contentVisible=!1,u.fileContent.content=""},P=()=>{l("update:visible",!1),l("update:machineId",null),l("cancel"),u.fileTable=[],u.tree.folder={id:0}},d=async(c,V)=>{if(typeof V!="function")return;const S=u.tree.folder;if(c.level===0){u.tree.node=c,u.tree.resolve=V;const H=S?S.path:"/";return V([{name:H,type:"d",path:H}])}let G;const L=c.data;!L||L.name==L.path?G=S.path:G=L.path;const ae=await T.lsFile.request({fileId:S.id,machineId:e.machineId,path:G});for(const H of ae)H.type!="d"&&(H.leaf=!0);return V(ae)},B=(c,V)=>{const S=V.path;oe.confirm(`\u6B64\u64CD\u4F5C\u5C06\u5220\u9664 [${S}], \u662F\u5426\u7EE7\u7EED?`,"\u63D0\u793A",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",type:"warning"}).then(()=>{T.rmFile.request({fileId:u.tree.folder.id,path:S,machineId:e.machineId}).then(()=>{q.success("\u5220\u9664\u6210\u529F"),b.value.remove(c)})}).catch(()=>{})},r=(c,V)=>{const S=document.createElement("a");S.setAttribute("href",`${me.baseApiUrl}/machines/${e.machineId}/files/${u.tree.folder.id}/read?type=1&path=${V.path}&token=${m}`),S.click()},g=()=>`${me.baseApiUrl}/machines/${e.machineId}/files/${u.tree.folder.id}/upload?token=${m}`,D=c=>{c.code!==200&&q.error(c.msg)},le=c=>{q.success(`'${c.name}' \u4E0A\u4F20\u4E2D,\u8BF7\u5173\u6CE8\u7ED3\u679C\u901A\u77E5`)},pe=c=>{const V=c.path;return["/","//","/usr","/usr/","/usr/bin","/opt","/run","/etc","/proc","/var","/mnt","/boot","/dev","/home","/media","/root"].indexOf(V)!=-1},ce=c=>{const V=Number(c);if(c&&!isNaN(V)){const S=["B","KB","MB","GB","TB","PB","EB","ZB","YB","BB"];let G=0,L=V;if(V>=1024)for(;L>1024;)L=L/1024,G++;return`${L.toFixed(2)}${S[G]}`}return"-"};return R(N({},O(u)),{fileTree:b,enums:W,token:m,cmOptions:p,add:F,getFiles:C,addFiles:_,deleteRow:i,getConf:y,getFileContent:n,updateContent:z,handleClose:P,loadNode:d,deleteFile:B,downloadFile:r,getUploadFile:g,beforeUpload:le,uploadSuccess:D,dontOperate:pe,formatFileSize:ce})}}),Ye={class:"file-manage"},Ze={class:"toolbar"},He={style:{float:"right"}},Qe=v("\u6DFB\u52A0"),Xe=v("\u786E\u5B9A"),xe=v("\u67E5\u770B"),el=v("\u5220\u9664"),ll={style:{height:"45vh",overflow:"auto"}},tl={class:"custom-tree-node"},ol={class:"el-dropdown-link"},il={key:0},nl={key:1},al={key:2},sl={style:{display:"inline-block"}},ul={key:0,style:{color:"#67c23a"}},rl=v(" \u67E5\u770B "),dl=v(" \u4E0A\u4F20 "),ml=v("\u4E0B\u8F7D"),pl=v("\u5220\u9664 "),cl={class:"dialog-footer"},fl=v("\u4FDD \u5B58"),hl=v("\u5173 \u95ED");function bl(e,l,h,s,I,w){const b=a("el-button"),m=a("el-input"),p=a("el-table-column"),u=a("el-option"),C=a("el-select"),F=a("el-table"),_=a("el-dialog"),i=a("SvgIcon"),y=a("el-link"),n=a("el-dropdown-item"),A=a("el-upload"),z=a("el-dropdown-menu"),P=a("el-dropdown"),d=a("el-tree"),B=a("codemirror"),r=X("auth");return f(),j("div",Ye,[t(_,{title:e.title,modelValue:e.dialogVisible,"onUpdate:modelValue":l[0]||(l[0]=g=>e.dialogVisible=g),"show-close":!0,"before-close":e.handleClose,width:"800px"},{default:o(()=>[$("div",Ze,[$("div",He,[U((f(),E(b,{type:"primary",onClick:e.add,icon:"plus",size:"small",plain:""},{default:o(()=>[Qe]),_:1},8,["onClick"])),[[r,"machine:file:add"]])])]),t(F,{data:e.fileTable,stripe:"",style:{width:"100%"}},{default:o(()=>[t(p,{prop:"name",label:"\u540D\u79F0",width:""},{default:o(g=>[t(m,{modelValue:g.row.name,"onUpdate:modelValue":D=>g.row.name=D,size:"small",disabled:g.row.id!=null,clearable:""},null,8,["modelValue","onUpdate:modelValue","disabled"])]),_:1}),t(p,{prop:"name",label:"\u7C7B\u578B","min-width":"50px"},{default:o(g=>[t(C,{disabled:g.row.id!=null,size:"small",modelValue:g.row.type,"onUpdate:modelValue":D=>g.row.type=D,style:{width:"100px"},placeholder:"\u8BF7\u9009\u62E9"},{default:o(()=>[(f(!0),j(x,null,ee(e.enums.FileTypeEnum,D=>(f(),E(u,{key:D.value,label:D.label,value:D.value},null,8,["label","value"]))),128))]),_:2},1032,["disabled","modelValue","onUpdate:modelValue"])]),_:1}),t(p,{prop:"path",label:"\u8DEF\u5F84",width:""},{default:o(g=>[t(m,{modelValue:g.row.path,"onUpdate:modelValue":D=>g.row.path=D,disabled:g.row.id!=null,size:"small",clearable:""},null,8,["modelValue","onUpdate:modelValue","disabled"])]),_:1}),t(p,{label:"\u64CD\u4F5C",width:""},{default:o(g=>[g.row.id==null?(f(),E(b,{key:0,onClick:D=>e.addFiles(g.row),type:"success",icon:"success-filled",size:"small",plain:""},{default:o(()=>[Xe]),_:2},1032,["onClick"])):M("",!0),g.row.id!=null?(f(),E(b,{key:1,onClick:D=>e.getConf(g.row),type:"primary",icon:"tickets",size:"small",plain:""},{default:o(()=>[xe]),_:2},1032,["onClick"])):M("",!0),U((f(),E(b,{type:"danger",onClick:D=>e.deleteRow(g.$index,g.row),icon:"delete",size:"small",plain:""},{default:o(()=>[el]),_:2},1032,["onClick"])),[[r,"machine:file:del"]])]),_:1})]),_:1},8,["data"])]),_:1},8,["title","modelValue","before-close"]),t(_,{title:e.tree.title,modelValue:e.tree.visible,"onUpdate:modelValue":l[2]||(l[2]=g=>e.tree.visible=g),"close-on-click-modal":!1,width:"680px"},{default:o(()=>[$("div",ll,[e.tree.visible?(f(),E(d,{key:0,ref:"fileTree",load:e.loadNode,props:e.props,lazy:"","node-key":"id","expand-on-click-node":!0},{default:o(({node:g,data:D})=>[$("span",tl,[t(P,{size:"small",trigger:"contextmenu"},{dropdown:o(()=>[t(z,null,{default:o(()=>[t(n,null,{default:o(()=>[D.type=="-"&&D.size<1*1024*1024?(f(),E(y,{key:0,onClick:ie(le=>e.getFileContent(e.tree.folder.id,D.path),["prevent"]),type:"info",icon:"view",underline:!1},{default:o(()=>[rl]),_:2},1032,["onClick"])):M("",!0)]),_:2},1024),D.type=="d"?(f(),E(n,{key:0},{default:o(()=>[t(A,{"before-upload":e.beforeUpload,"on-success":e.uploadSuccess,headers:{token:e.token},data:{fileId:e.tree.folder.id,path:D.path,machineId:e.machineId},action:e.getUploadFile({path:D.path}),"show-file-list":!1,name:"file",multiple:"",limit:100,style:{display:"inline-block","margin-left":"2px"}},{default:o(()=>[U((f(),E(y,{onClick:l[1]||(l[1]=ie(()=>{},["prevent"])),icon:"upload",underline:!1},{default:o(()=>[dl]),_:1})),[[r,"machine:file:upload"]])]),_:2},1032,["before-upload","on-success","headers","data","action"])]),_:2},1024)):M("",!0),t(n,null,{default:o(()=>[D.type=="-"?U((f(),E(y,{key:0,onClick:ie(le=>e.downloadFile(g,D),["prevent"]),type:"primary",icon:"download",underline:!1,style:{"margin-left":"2px"}},{default:o(()=>[ml]),_:2},1032,["onClick"])),[[r,"machine:file:write"]]):M("",!0)]),_:2},1024),t(n,null,{default:o(()=>[e.dontOperate(D)?M("",!0):U((f(),E(y,{key:0,onClick:ie(le=>e.deleteFile(g,D),["prevent"]),type:"danger",icon:"delete",underline:!1,style:{"margin-left":"2px"}},{default:o(()=>[pl]),_:2},1032,["onClick"])),[[r,"machine:file:rm"]])]),_:2},1024)]),_:2},1024)]),default:o(()=>[$("span",ol,[D.type=="d"&&!g.expanded?(f(),j("span",il,[t(i,{name:"folder"})])):M("",!0),D.type=="d"&&g.expanded?(f(),j("span",nl,[t(i,{name:"folder-opened"})])):M("",!0),D.type=="-"?(f(),j("span",al,[t(i,{name:"document"})])):M("",!0),$("span",sl,[v(Y(g.label)+" ",1),D.type=="-"?(f(),j("span",ul,"\xA0\xA0["+Y(e.formatFileSize(D.size))+"]",1)):M("",!0)])])]),_:2},1024)])]),_:1},8,["load","props"])):M("",!0)])]),_:1},8,["title","modelValue"]),t(_,{"destroy-on-close":!0,title:e.fileContent.dialogTitle,modelValue:e.fileContent.contentVisible,"onUpdate:modelValue":l[5]||(l[5]=g=>e.fileContent.contentVisible=g),"close-on-click-modal":!1,top:"5vh",width:"70%"},{footer:o(()=>[$("div",cl,[U((f(),E(b,{type:"primary",onClick:e.updateContent},{default:o(()=>[fl]),_:1},8,["onClick"])),[[r,"machine:file:write"]]),t(b,{onClick:l[4]||(l[4]=g=>e.fileContent.contentVisible=!1)},{default:o(()=>[hl]),_:1})])]),default:o(()=>[$("div",null,[t(B,{"can-change-mode":!0,ref:"cmEditor",modelValue:e.fileContent.content,"onUpdate:modelValue":l[3]||(l[3]=g=>e.fileContent.content=g),language:e.fileContent.type},null,8,["modelValue","language"])])]),_:1},8,["title","modelValue"])])}var gl=Z(Je,[["render",bl]]);const vl=K({name:"MachineEdit",props:{visible:{type:Boolean},projects:{type:Array},machine:{type:[Boolean,Object]},title:{type:String}},setup(e,{emit:l}){const h=te(null),s=J({dialogVisible:!1,projects:[],form:{id:null,projectId:null,projectName:null,name:null,port:22,username:null,password:null},btnLoading:!1,rules:{projectId:[{required:!0,message:"\u8BF7\u9009\u62E9\u9879\u76EE",trigger:["change","blur"]}],envId:[{required:!0,message:"\u8BF7\u9009\u62E9\u73AF\u5883",trigger:["change","blur"]}],name:[{required:!0,message:"\u8BF7\u8F93\u5165\u522B\u540D",trigger:["change","blur"]}],ip:[{required:!0,message:"\u8BF7\u8F93\u5165\u4E3B\u673Aip",trigger:["change","blur"]}],port:[{required:!0,message:"\u8BF7\u8F93\u5165\u7AEF\u53E3",trigger:["change","blur"]}],username:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",trigger:["change","blur"]}],password:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801",trigger:["change","blur"]}]}});Q(e,async m=>{s.dialogVisible=m.visible,s.projects=m.projects,m.machine?s.form=N({},m.machine):s.form={port:22}});const I=m=>{for(let p of s.projects)p.id==m&&(s.form.projectName=p.name)},w=async()=>{h.value.validate(m=>{if(m)T.saveMachine.request(s.form).then(()=>{q.success("\u4FDD\u5B58\u6210\u529F"),l("val-change",s.form),s.btnLoading=!0,setTimeout(()=>{s.btnLoading=!1},1e3),b()});else return q.error("\u8BF7\u6B63\u786E\u586B\u5199\u4FE1\u606F"),!1})},b=()=>{l("update:visible",!1),l("cancel"),setTimeout(()=>{h.value.resetFields(),s.form={}},200)};return R(N({},O(s)),{machineForm:h,changeProject:I,btnOk:w,cancel:b})}}),_l={class:"dialog-footer"},yl=v("\u786E \u5B9A"),Cl=v("\u53D6 \u6D88");function Fl(e,l,h,s,I,w){const b=a("el-option"),m=a("el-select"),p=a("el-form-item"),u=a("el-input"),C=a("el-form"),F=a("el-button"),_=a("el-dialog");return f(),j("div",null,[t(_,{title:e.title,modelValue:e.dialogVisible,"onUpdate:modelValue":l[7]||(l[7]=i=>e.dialogVisible=i),"show-close":!1,"before-close":e.cancel,width:"35%"},{footer:o(()=>[$("div",_l,[t(F,{type:"primary",loading:e.btnLoading,onClick:e.btnOk},{default:o(()=>[yl]),_:1},8,["loading","onClick"]),t(F,{onClick:l[6]||(l[6]=i=>e.cancel())},{default:o(()=>[Cl]),_:1})])]),default:o(()=>[t(C,{model:e.form,ref:"machineForm",rules:e.rules,"label-width":"85px"},{default:o(()=>[t(p,{prop:"projectId",label:"\u9879\u76EE:",required:""},{default:o(()=>[t(m,{style:{width:"100%"},modelValue:e.form.projectId,"onUpdate:modelValue":l[0]||(l[0]=i=>e.form.projectId=i),placeholder:"\u8BF7\u9009\u62E9\u9879\u76EE",onChange:e.changeProject,filterable:""},{default:o(()=>[(f(!0),j(x,null,ee(e.projects,i=>(f(),E(b,{key:i.id,label:`${i.name} [${i.remark}]`,value:i.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","onChange"])]),_:1}),t(p,{prop:"name",label:"\u540D\u79F0:",required:""},{default:o(()=>[t(u,{modelValue:e.form.name,"onUpdate:modelValue":l[1]||(l[1]=i=>e.form.name=i),modelModifiers:{trim:!0},placeholder:"\u8BF7\u8F93\u5165\u673A\u5668\u522B\u540D","auto-complete":"off"},null,8,["modelValue"])]),_:1}),t(p,{prop:"ip",label:"ip:",required:""},{default:o(()=>[t(u,{modelValue:e.form.ip,"onUpdate:modelValue":l[2]||(l[2]=i=>e.form.ip=i),modelModifiers:{trim:!0},placeholder:"\u8BF7\u8F93\u5165\u4E3B\u673Aip","auto-complete":"off"},null,8,["modelValue"])]),_:1}),t(p,{prop:"port",label:"port:",required:""},{default:o(()=>[t(u,{type:"number",modelValue:e.form.port,"onUpdate:modelValue":l[3]||(l[3]=i=>e.form.port=i),modelModifiers:{trim:!0},placeholder:"\u8BF7\u8F93\u5165\u7AEF\u53E3"},null,8,["modelValue"])]),_:1}),t(p,{prop:"username",label:"\u7528\u6237\u540D:",required:""},{default:o(()=>[t(u,{modelValue:e.form.username,"onUpdate:modelValue":l[4]||(l[4]=i=>e.form.username=i),modelModifiers:{trim:!0},placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"},null,8,["modelValue"])]),_:1}),t(p,{prop:"password",label:"\u5BC6\u7801:",required:""},{default:o(()=>[t(u,{type:"password","show-password":"",modelValue:e.form.password,"onUpdate:modelValue":l[5]||(l[5]=i=>e.form.password=i),modelModifiers:{trim:!0},placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801",autocomplete:"new-password"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["title","modelValue","before-close"])])}var Dl=Z(vl,[["render",Fl]]);const El=K({name:"ProcessList",components:{},props:{visible:{type:Boolean},machineId:{type:Number},title:{type:String}},setup(e,l){const h=J({dialogVisible:!1,params:{name:"",sortType:"1",count:"10",id:0},processList:[]});Q(e,m=>{e.machineId&&(h.params.id=e.machineId,s()),h.dialogVisible=m.visible});const s=async()=>{const p=(await T.process.request(h.params)).split(`
`),u=[],C=h.params.name==""?1:0;for(let F=C;F<p.length;F++){const i=p[F].split(/\s+/);if(i.length<2)continue;let y=i[10];if(!(h.params.name&&(y=="bash"||y=="grep"))){for(let n=10;n<i.length-1;n++)y+=" "+i[n+1];u.push({user:i[0],pid:i[1],cpu:i[2],mem:i[3],vsz:w(i[4]),rss:w(i[5]),stat:i[7],start:i[8],time:i[9],command:y})}}h.processList=u},I=async m=>{await T.killProcess.request({pid:m,id:h.params.id}),q.success("kill success"),h.params.name="",s()},w=m=>(parseInt(m)/1024).toFixed(2)+"M",b=()=>{l.emit("update:visible",!1),l.emit("update:machineId",null),l.emit("cancel"),h.params={name:"",sortType:"1",count:"10",id:0},h.processList=[]};return R(N({},O(h)),{getProcess:s,confirmKillProcess:I,enums:W,handleClose:b})}}),wl={class:"file-manage"},Bl={class:"toolbar"},Vl=v("\u5237\u65B0"),Il=v(" VSZ "),kl=v(" RSS "),$l=v(" STAT "),Al=v(" START "),Tl=v(" TIME "),Ul=v("\u7EC8\u6B62");function Sl(e,l,h,s,I,w){const b=a("el-input"),m=a("el-col"),p=a("el-option"),u=a("el-select"),C=a("el-button"),F=a("el-row"),_=a("el-table-column"),i=a("question-filled"),y=a("el-icon"),n=a("el-tooltip"),A=a("el-popconfirm"),z=a("el-table"),P=a("el-dialog"),d=X("auth");return f(),j("div",wl,[t(P,{title:"\u8FDB\u7A0B\u4FE1\u606F",modelValue:e.dialogVisible,"onUpdate:modelValue":l[3]||(l[3]=B=>e.dialogVisible=B),"destroy-on-close":!0,"show-close":!0,"before-close":e.handleClose,width:"65%"},{default:o(()=>[$("div",Bl,[t(F,null,{default:o(()=>[t(m,{span:4},{default:o(()=>[t(b,{size:"small",placeholder:"\u8FDB\u7A0B\u540D",modelValue:e.params.name,"onUpdate:modelValue":l[0]||(l[0]=B=>e.params.name=B),plain:"",clearable:""},null,8,["modelValue"])]),_:1}),t(m,{span:4,class:"ml5"},{default:o(()=>[t(u,{onChange:e.getProcess,size:"small",modelValue:e.params.sortType,"onUpdate:modelValue":l[1]||(l[1]=B=>e.params.sortType=B),placeholder:"\u8BF7\u9009\u62E9\u6392\u5E8F\u7C7B\u578B"},{default:o(()=>[t(p,{key:"cpu",label:"cpu\u964D\u5E8F",value:"1"}),t(p,{key:"cpu",label:"mem\u964D\u5E8F",value:"2"})]),_:1},8,["onChange","modelValue"])]),_:1}),t(m,{span:4,class:"ml5"},{default:o(()=>[t(u,{onChange:e.getProcess,size:"small",modelValue:e.params.count,"onUpdate:modelValue":l[2]||(l[2]=B=>e.params.count=B),placeholder:"\u8BF7\u9009\u62E9\u8FDB\u7A0B\u4E2A\u6570"},{default:o(()=>[t(p,{key:"10",label:"10",value:"10"}),t(p,{key:"15",label:"15",value:"15"}),t(p,{key:"20",label:"20",value:"20"}),t(p,{key:"25",label:"25",value:"25"})]),_:1},8,["onChange","modelValue"])]),_:1}),t(m,{span:6},{default:o(()=>[t(C,{class:"ml5",onClick:e.getProcess,type:"primary",icon:"tickets",size:"small",plain:""},{default:o(()=>[Vl]),_:1},8,["onClick"])]),_:1})]),_:1})]),t(z,{data:e.processList,size:"small",style:{width:"100%"},"empty-text":"\u83B7\u53D6\u8FDB\u7A0B\u4E2D..."},{default:o(()=>[t(_,{prop:"user",label:"USER","min-width":50}),t(_,{prop:"pid",label:"PID","min-width":50,"show-overflow-tooltip":""}),t(_,{prop:"cpu",label:"%CPU","min-width":40}),t(_,{prop:"mem",label:"%MEM","min-width":42}),t(_,{prop:"vsz",label:"vsz","min-width":55},{header:o(()=>[Il,t(n,{class:"box-item",effect:"dark",content:"\u865A\u62DF\u5185\u5B58",placement:"top"},{default:o(()=>[t(y,null,{default:o(()=>[t(i)]),_:1})]),_:1})]),_:1}),t(_,{prop:"rss","min-width":52},{header:o(()=>[kl,t(n,{class:"box-item",effect:"dark",content:"\u56FA\u5B9A\u5185\u5B58",placement:"top"},{default:o(()=>[t(y,null,{default:o(()=>[t(i)]),_:1})]),_:1})]),_:1}),t(_,{prop:"stat","min-width":50},{header:o(()=>[$l,t(n,{class:"box-item",effect:"dark",content:"\u8FDB\u7A0B\u72B6\u6001",placement:"top"},{default:o(()=>[t(y,null,{default:o(()=>[t(i)]),_:1})]),_:1})]),_:1}),t(_,{prop:"start","min-width":50},{header:o(()=>[Al,t(n,{class:"box-item",effect:"dark",content:"\u542F\u52A8\u65F6\u95F4",placement:"top"},{default:o(()=>[t(y,null,{default:o(()=>[t(i)]),_:1})]),_:1})]),_:1}),t(_,{prop:"time","min-width":50},{header:o(()=>[Tl,t(n,{class:"box-item",effect:"dark",content:"\u8BE5\u8FDB\u7A0B\u5B9E\u9645\u4F7F\u7528CPU\u8FD0\u4F5C\u7684\u65F6\u95F4",placement:"top"},{default:o(()=>[t(y,null,{default:o(()=>[t(i)]),_:1})]),_:1})]),_:1}),t(_,{prop:"command",label:"command","min-width":120,"show-overflow-tooltip":""}),t(_,{label:"\u64CD\u4F5C"},{default:o(B=>[t(A,{title:"\u786E\u5B9A\u7EC8\u6B62\u8BE5\u8FDB\u7A0B?",onConfirm:r=>e.confirmKillProcess(B.row.pid)},{reference:o(()=>[U((f(),E(C,{type:"danger",icon:"delete",size:"small",plain:""},{default:o(()=>[Ul]),_:1})),[[d,"machine:killprocess"]])]),_:2},1032,["onConfirm"])]),_:1})]),_:1},8,["data"])]),_:1},8,["modelValue","before-close"])])}var jl=Z(El,[["render",Sl]]);const zl=K({name:"MachineList",components:{ServiceManage:Ke,ProcessList:jl,FileManage:gl,MachineEdit:Dl},setup(){const e=_e(),l=J({projects:[],params:{pageNum:1,pageSize:10,host:null,clusterId:null},data:{list:[],total:10},currentId:null,currentData:null,infoDialog:{visible:!1,info:""},serviceDialog:{visible:!1,machineId:0,title:""},processDialog:{visible:!1,machineId:0},fileDialog:{visible:!1,machineId:0,title:""},monitorDialog:{visible:!1,machineId:0},machineEditDialog:{visible:!1,data:null,title:"\u65B0\u589E\u673A\u5668"}});ye(async()=>{C(),l.projects=(await Ce.projects.request({pageNum:1,pageSize:100})).list});const h=i=>{!i||(l.currentId=i.id,l.currentData=i)},s=i=>{const{href:y}=e.resolve({path:"/machine/terminal",query:{id:i.id,name:i.name}});window.open(y,"_blank")},I=async i=>{await T.closeCli.request({id:i.id}),q.success("\u5173\u95ED\u6210\u529F"),C()},w=i=>{let y;i?(l.machineEditDialog.data=l.currentData,y="\u7F16\u8F91\u673A\u5668"):(l.machineEditDialog.data={port:22},y="\u6DFB\u52A0\u673A\u5668"),l.machineEditDialog.title=y,l.machineEditDialog.visible=!0},b=async i=>{try{await oe.confirm("\u786E\u5B9A\u5220\u9664\u8BE5\u673A\u5668\u4FE1\u606F? \u8BE5\u64CD\u4F5C\u5C06\u540C\u65F6\u5220\u9664\u811A\u672C\u53CA\u6587\u4EF6\u914D\u7F6E\u4FE1\u606F","\u63D0\u793A",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",type:"warning"}),await T.del.request({id:i}),q.success("\u64CD\u4F5C\u6210\u529F"),l.currentId=null,l.currentData=null,C()}catch{}},m=i=>{l.serviceDialog.machineId=i.id,l.serviceDialog.visible=!0,l.serviceDialog.title=`${i.name} => ${i.ip}`},p=()=>{l.currentId=null,l.currentData=null,C()},u=i=>{l.fileDialog.visible=!0,l.fileDialog.machineId=i.id,l.fileDialog.title=`${i.name} => ${i.ip}`},C=async()=>{const i=await T.list.request(l.params);l.data=i},F=i=>{l.params.pageNum=i,C()},_=i=>{l.processDialog.machineId=i.id,l.processDialog.visible=!0};return R(N({},O(l)),{choose:h,showTerminal:s,openFormDialog:w,deleteMachine:b,closeCli:I,serviceManager:m,showProcess:_,submitSuccess:p,fileManage:u,search:C,handlePageChange:F})}}),Ml=v("\u6DFB\u52A0"),Pl=v("\u7F16\u8F91"),ql=v("\u5220\u9664"),Ll=v("\u6587\u4EF6"),Nl={style:{float:"right"}},Rl=$("i",null,null,-1),Ol=v("\u811A\u672C"),Wl=v("\u7EC8\u7AEF"),Gl=v("\u8FDB\u7A0B"),Kl=v("\u5173\u95ED\u8FDE\u63A5");function Jl(e,l,h,s,I,w){const b=a("el-button"),m=a("el-option"),p=a("el-select"),u=a("el-input"),C=a("el-radio"),F=a("el-table-column"),_=a("el-table"),i=a("el-pagination"),y=a("el-row"),n=a("el-card"),A=a("machine-edit"),z=a("process-list"),P=a("service-manage"),d=a("file-manage"),B=X("auth");return f(),j("div",null,[t(n,null,{default:o(()=>[$("div",null,[U((f(),E(b,{type:"primary",icon:"plus",onClick:l[0]||(l[0]=r=>e.openFormDialog(!1)),plain:""},{default:o(()=>[Ml]),_:1})),[[B,"machine:add"]]),U((f(),E(b,{type:"primary",icon:"edit",disabled:e.currentId==null,onClick:l[1]||(l[1]=r=>e.openFormDialog(e.currentData)),plain:""},{default:o(()=>[Pl]),_:1},8,["disabled"])),[[B,"machine:update"]]),U((f(),E(b,{disabled:e.currentId==null,onClick:l[2]||(l[2]=r=>e.deleteMachine(e.currentId)),type:"danger",icon:"delete"},{default:o(()=>[ql]),_:1},8,["disabled"])),[[B,"machine:del"]]),U((f(),E(b,{type:"success",icon:"files",disabled:e.currentId==null,onClick:l[3]||(l[3]=r=>e.fileManage(e.currentData)),plain:""},{default:o(()=>[Ll]),_:1},8,["disabled"])),[[B,"machine:file"]]),$("div",Nl,[t(p,{modelValue:e.params.projectId,"onUpdate:modelValue":l[4]||(l[4]=r=>e.params.projectId=r),placeholder:"\u8BF7\u9009\u62E9\u9879\u76EE",onClear:e.search,filterable:"",clearable:""},{default:o(()=>[(f(!0),j(x,null,ee(e.projects,r=>(f(),E(m,{key:r.id,label:`${r.name} [${r.remark}]`,value:r.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","onClear"]),t(u,{class:"ml5",placeholder:"\u8BF7\u8F93\u5165ip",style:{width:"200px"},modelValue:e.params.ip,"onUpdate:modelValue":l[5]||(l[5]=r=>e.params.ip=r),onClear:e.search,plain:"",clearable:""},null,8,["modelValue","onClear"]),t(b,{class:"ml5",onClick:e.search,type:"success",icon:"search"},null,8,["onClick"])])]),t(_,{data:e.data.list,stripe:"",style:{width:"100%"},onCurrentChange:e.choose},{default:o(()=>[t(F,{label:"\u9009\u62E9",width:"55px"},{default:o(r=>[t(C,{modelValue:e.currentId,"onUpdate:modelValue":l[6]||(l[6]=g=>e.currentId=g),label:r.row.id},{default:o(()=>[Rl]),_:2},1032,["modelValue","label"])]),_:1}),t(F,{prop:"name",label:"\u540D\u79F0","min-width":"130","show-overflow-tooltip":""}),t(F,{prop:"ip",label:"ip:port","min-width":"130"},{default:o(r=>[v(Y(`${r.row.ip}:${r.row.port}`),1)]),_:1}),t(F,{prop:"username",label:"\u7528\u6237\u540D","min-width":"75"}),t(F,{prop:"projectName",label:"\u9879\u76EE","min-width":"120"}),t(F,{prop:"ip",label:"hasCli",width:"70"},{default:o(r=>[v(Y(`${r.row.hasCli?"\u662F":"\u5426"}`),1)]),_:1}),t(F,{prop:"createTime",label:"\u521B\u5EFA\u65F6\u95F4",width:"165"},{default:o(r=>[v(Y(e.$filters.dateFormat(r.row.createTime)),1)]),_:1}),t(F,{prop:"creator",label:"\u521B\u5EFA\u8005","min-width":"60"}),t(F,{label:"\u64CD\u4F5C","min-width":"260",fixed:"right"},{default:o(r=>[t(b,{type:"success",onClick:g=>e.serviceManager(r.row),plain:"",size:"small"},{default:o(()=>[Ol]),_:2},1032,["onClick"]),U((f(),E(b,{type:"primary",onClick:g=>e.showTerminal(r.row),plain:"",size:"small"},{default:o(()=>[Wl]),_:2},1032,["onClick"])),[[B,"machine:terminal"]]),t(b,{onClick:g=>e.showProcess(r.row),plain:"",size:"small"},{default:o(()=>[Gl]),_:2},1032,["onClick"]),t(b,{disabled:!r.row.hasCli,type:"danger",onClick:g=>e.closeCli(r.row),plain:"",size:"small"},{default:o(()=>[Kl]),_:2},1032,["disabled","onClick"])]),_:1})]),_:1},8,["data","onCurrentChange"]),t(y,{style:{"margin-top":"20px"},type:"flex",justify:"end"},{default:o(()=>[t(i,{style:{"text-align":"right"},total:e.data.total,layout:"prev, pager, next, total, jumper","current-page":e.params.pageNum,"onUpdate:current-page":l[7]||(l[7]=r=>e.params.pageNum=r),"page-size":e.params.pageSize,onCurrentChange:e.handlePageChange},null,8,["total","current-page","page-size","onCurrentChange"])]),_:1})]),_:1}),t(A,{title:e.machineEditDialog.title,projects:e.projects,visible:e.machineEditDialog.visible,"onUpdate:visible":l[8]||(l[8]=r=>e.machineEditDialog.visible=r),machine:e.machineEditDialog.data,"onUpdate:machine":l[9]||(l[9]=r=>e.machineEditDialog.data=r),onValChange:e.submitSuccess},null,8,["title","projects","visible","machine","onValChange"]),t(z,{visible:e.processDialog.visible,"onUpdate:visible":l[10]||(l[10]=r=>e.processDialog.visible=r),machineId:e.processDialog.machineId,"onUpdate:machineId":l[11]||(l[11]=r=>e.processDialog.machineId=r)},null,8,["visible","machineId"]),t(P,{title:e.serviceDialog.title,visible:e.serviceDialog.visible,"onUpdate:visible":l[12]||(l[12]=r=>e.serviceDialog.visible=r),machineId:e.serviceDialog.machineId,"onUpdate:machineId":l[13]||(l[13]=r=>e.serviceDialog.machineId=r)},null,8,["title","visible","machineId"]),t(d,{title:e.fileDialog.title,visible:e.fileDialog.visible,"onUpdate:visible":l[14]||(l[14]=r=>e.fileDialog.visible=r),machineId:e.fileDialog.machineId,"onUpdate:machineId":l[15]||(l[15]=r=>e.fileDialog.machineId=r)},null,8,["title","visible","machineId"])])}var it=Z(zl,[["render",Jl]]);export{it as default};
