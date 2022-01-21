var Y=Object.defineProperty,Z=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var K=Object.getOwnPropertySymbols;var ee=Object.prototype.hasOwnProperty,ae=Object.prototype.propertyIsEnumerable;var M=(e,a,t)=>a in e?Y(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,$=(e,a)=>{for(var t in a||(a={}))ee.call(a,t)&&M(e,t,a[t]);if(K)for(var t of K(a))ae.call(a,t)&&M(e,t,a[t]);return e},A=(e,a)=>Z(e,x(a));import{r as v}from"./api.16427349486235.js";import{i as j,n as G,a as q}from"./assert.1642734948623.js";import{_ as U}from"./index.1642734948623.js";import{y as R,a as O,F as C,t as N,E as L,d,q as _,G as B,k as s,f as D,j as l,h,V as Q,w as W,H,e as z,I as te,J as le,i as S,P as se}from"./vendor.1642734948623.js";import{P as ne}from"./ProjectEnvSelect.1642734948623.js";import"./Api.1642734948623.js";import"./api.16427349486233.js";const oe=R({name:"ValueDialog",components:{},props:{visible:{type:Boolean},title:{type:String},keyValue:{type:[String,Object]}},setup(e,{emit:a}){const t=O({dialogVisible:!1,keyValue2:{}}),b=()=>{a("update:visible",!1),a("cancel")};C(()=>e.visible,r=>{t.dialogVisible=r}),C(()=>e.keyValue,r=>{t.keyValue2=r,typeof r.value=="string"?t.keyValue2.jsonValue=JSON.stringify(JSON.parse(r.value),null,2):t.keyValue2.jsonValue=JSON.stringify(r.value,null,2)});const k=async()=>{j(t.keyValue2.type=="string","\u6682\u4E0D\u652F\u6301\u9664string\u5916\u5176\u4ED6\u7C7B\u578B\u4FEE\u6539"),t.keyValue2.value=t.keyValue2.jsonValue,await v.saveStringValue.request(t.keyValue2),L.success("\u4FDD\u5B58\u6210\u529F"),b()},E=r=>{t.keyValue2.value=JSON.stringify(r)};return A($({},N(t)),{saveValue:k,valueChange:E,cancel:b})}}),ue={class:"dialog-footer"},ie=h("\u786E \u5B9A"),de=h("\u53D6 \u6D88");function re(e,a,t,b,k,E){const r=d("el-input"),n=d("el-form-item"),m=d("el-form"),w=d("el-button"),f=d("el-dialog");return _(),B(f,{title:e.keyValue.key,modelValue:e.dialogVisible,"onUpdate:modelValue":a[2]||(a[2]=y=>e.dialogVisible=y),"before-close":e.cancel,"show-close":!1,width:"900px"},{footer:s(()=>[D("div",ue,[l(w,{onClick:e.saveValue,type:"primary"},{default:s(()=>[ie]),_:1},8,["onClick"]),l(w,{onClick:a[1]||(a[1]=y=>e.cancel())},{default:s(()=>[de]),_:1})])]),default:s(()=>[l(m,null,{default:s(()=>[l(n,null,{default:s(()=>[l(r,{class:"json-text",modelValue:e.keyValue2.jsonValue,"onUpdate:modelValue":a[0]||(a[0]=y=>e.keyValue2.jsonValue=y),type:"textarea",autosize:{minRows:10,maxRows:20}},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["title","modelValue","before-close"])}var pe=U(oe,[["render",re]]);const ce=R({name:"DateEdit",components:{},props:{visible:{type:Boolean},title:{type:String},redisId:{type:[Number],require:!0},keyInfo:{type:[Object]},operationType:{type:[Number]},stringValue:{type:[String]},setValue:{type:[Array,Object]},hashValue:{type:[Array,Object]}},emits:["valChange","cancel","update:visible"],setup(e,{emit:a}){const t=O({dialogVisible:!1,operationType:1,redisId:"",keyInfo:{key:"",type:"string",timed:-1},stringValue:"",hashValue:[{key:"",value:""}],setValue:[{value:""}]}),b=()=>{a("update:visible",!1),a("cancel"),setTimeout(()=>{t.keyInfo={key:"",type:"string",timed:-1},t.stringValue="",t.hashValue=[{key:"",value:""}]},500)};C(()=>e.visible,n=>{t.dialogVisible=n}),C(()=>e.redisId,n=>{t.redisId=n}),C(()=>e.operationType,n=>{t.operationType=n}),C(()=>e.keyInfo,n=>{n&&(t.keyInfo=$({},n))},{deep:!0}),C(()=>e.stringValue,n=>{n&&(t.stringValue=n)},{deep:!0}),C(()=>e.setValue,n=>{n&&(t.setValue=n)},{deep:!0}),C(()=>e.hashValue,n=>{n&&(t.hashValue=n)},{deep:!0});const k=async()=>{if(G(t.keyInfo.key,"key\u4E0D\u80FD\u4E3A\u7A7A"),t.keyInfo.type=="string"){G(t.stringValue,"value\u4E0D\u80FD\u4E3A\u7A7A");const n={value:t.stringValue,id:t.redisId};Object.assign(n,t.keyInfo),await v.saveStringValue.request(n)}if(t.keyInfo.type=="hash"){j(t.hashValue.length>0,"hash\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A");const n={value:t.hashValue,id:t.redisId};Object.assign(n,t.keyInfo),await v.saveHashValue.request(n)}if(t.keyInfo.type=="set"){j(t.setValue.length>0,"set\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A");const n={value:t.setValue.map(m=>m.value),id:t.redisId};Object.assign(n,t.keyInfo),await v.saveSetValue.request(n)}L.success("\u6570\u636E\u4FDD\u5B58\u6210\u529F"),b(),a("valChange")},E=()=>{t.hashValue.push({key:"",value:""})},r=()=>{t.setValue.push({value:""})};return A($({},N(t)),{saveValue:k,cancel:b,onAddHashValue:E,onAddSetValue:r})}}),me={key:1},ye=h("\u6DFB\u52A0"),fe=h("\u5220\u9664"),Ve={key:2},he=h("\u6DFB\u52A0"),ke=h("\u5220\u9664"),be={class:"dialog-footer"},ge=h("\u786E \u5B9A"),ve=h("\u53D6 \u6D88");function _e(e,a,t,b,k,E){const r=d("el-input"),n=d("el-form-item"),m=d("el-option"),w=d("el-select"),f=d("el-button"),y=d("el-table-column"),g=d("el-table"),F=d("el-form"),c=d("el-dialog"),p=Q("auth");return _(),B(c,{title:e.title,modelValue:e.dialogVisible,"onUpdate:modelValue":a[5]||(a[5]=o=>e.dialogVisible=o),"before-close":e.cancel,"show-close":!1,width:"750px","destroy-on-close":!0},{footer:s(()=>[D("div",be,[W((_(),B(f,{onClick:e.saveValue,type:"primary"},{default:s(()=>[ge]),_:1},8,["onClick"])),[[p,"redis:data:save"]]),l(f,{onClick:a[4]||(a[4]=o=>e.cancel())},{default:s(()=>[ve]),_:1})])]),default:s(()=>[l(F,{"label-width":"85px"},{default:s(()=>[l(n,{prop:"key",label:"key:"},{default:s(()=>[l(r,{disabled:e.operationType==2,modelValue:e.keyInfo.key,"onUpdate:modelValue":a[0]||(a[0]=o=>e.keyInfo.key=o)},null,8,["disabled","modelValue"])]),_:1}),l(n,{prop:"timed",label:"\u8FC7\u671F\u65F6\u95F4:"},{default:s(()=>[l(r,{modelValue:e.keyInfo.timed,"onUpdate:modelValue":a[1]||(a[1]=o=>e.keyInfo.timed=o),modelModifiers:{number:!0},type:"number"},null,8,["modelValue"])]),_:1}),l(n,{prop:"dataType",label:"\u6570\u636E\u7C7B\u578B:"},{default:s(()=>[l(w,{disabled:e.operationType==2,style:{width:"100%"},modelValue:e.keyInfo.type,"onUpdate:modelValue":a[2]||(a[2]=o=>e.keyInfo.type=o),placeholder:"\u8BF7\u9009\u62E9\u6570\u636E\u7C7B\u578B"},{default:s(()=>[l(m,{key:"string",label:"string",value:"string"}),l(m,{key:"hash",label:"hash",value:"hash"}),l(m,{key:"set",label:"set",value:"set"})]),_:1},8,["disabled","modelValue"])]),_:1}),e.keyInfo.type=="string"?(_(),B(n,{key:0,prop:"value",label:"\u5185\u5BB9:"},{default:s(()=>[l(r,{class:"json-text",modelValue:e.stringValue,"onUpdate:modelValue":a[3]||(a[3]=o=>e.stringValue=o),type:"textarea",autosize:{minRows:10,maxRows:20}},null,8,["modelValue"])]),_:1})):H("",!0),e.keyInfo.type=="hash"?(_(),z("span",me,[l(f,{onClick:e.onAddHashValue,icon:"plus",size:"small",plain:"",class:"mt10"},{default:s(()=>[ye]),_:1},8,["onClick"]),l(g,{data:e.hashValue,stripe:"",style:{width:"100%"}},{default:s(()=>[l(y,{prop:"key",label:"key",width:""},{default:s(o=>[l(r,{modelValue:o.row.key,"onUpdate:modelValue":u=>o.row.key=u,clearable:"",size:"small"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),l(y,{prop:"value",label:"value","min-width":"200"},{default:s(o=>[l(r,{modelValue:o.row.value,"onUpdate:modelValue":u=>o.row.value=u,clearable:"",type:"textarea",autosize:{minRows:2,maxRows:10},size:"small"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),l(y,{label:"\u64CD\u4F5C",width:"90"},{default:s(o=>[l(f,{type:"danger",onClick:u=>e.hashValue.splice(o.$index,1),icon:"delete",size:"small",plain:""},{default:s(()=>[fe]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])])):H("",!0),e.keyInfo.type=="set"?(_(),z("span",Ve,[l(f,{onClick:e.onAddSetValue,icon:"plus",size:"small",plain:"",class:"mt10"},{default:s(()=>[he]),_:1},8,["onClick"]),l(g,{data:e.setValue,stripe:"",style:{width:"100%"}},{default:s(()=>[l(y,{prop:"value",label:"value",width:""},{default:s(o=>[l(r,{modelValue:o.row.value,"onUpdate:modelValue":u=>o.row.value=u,clearable:"",type:"textarea",autosize:{minRows:2,maxRows:10},size:"small"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),l(y,{label:"\u64CD\u4F5C",width:"90"},{default:s(o=>[l(f,{type:"danger",onClick:u=>e.setValue.splice(o.$index,1),icon:"delete",size:"small",plain:""},{default:s(()=>[ke]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])])):H("",!0)]),_:1})]),_:1},8,["title","modelValue","before-close"])}var Ee=U(ce,[["render",_e]]);const Ce=R({name:"DataOperation",components:{ValueDialog:pe,DataEdit:Ee,ProjectEnvSelect:ne},setup(){const e=O({loading:!1,cluster:0,redisList:[],query:{envId:0},scanParam:{id:null,cluster:0,match:null,count:10,cursor:0,prevCursor:null},valueDialog:{visible:!1,value:{}},dataEdit:{visible:!1,title:"\u65B0\u589E\u6570\u636E",operationType:1,keyInfo:{type:"string",timed:-1,key:""},stringValue:"",hashValue:[{key:"",value:""}],setValue:[{value:""}]},keys:[],dbsize:0}),a=async()=>{q(e.query.envId,"\u8BF7\u5148\u9009\u62E9\u9879\u76EE\u73AF\u5883");const c=await v.redisList.request(e.query);e.redisList=c.list},t=(c,p)=>{r(),p!=null&&(e.query.envId=p,a())},b=()=>{m(),e.keys=[],e.dbsize=0,E()},k=()=>{j(e.scanParam.id!=null,"\u8BF7\u5148\u9009\u62E9redis"),j(e.scanParam.count<20001,"count\u4E0D\u80FD\u8D85\u8FC720000"),e.loading=!0,e.scanParam.cluster=e.cluster==0?0:1,v.scan.request(e.scanParam).then(c=>{e.keys=c.keys,e.dbsize=c.dbSize,e.scanParam.cursor=c.cursor,e.loading=!1})},E=()=>{e.scanParam.cursor=0,k()},r=()=>{e.redisList=[],e.scanParam.id=null,m(),e.keys=[],e.dbsize=0},n=()=>{m(),e.scanParam.id&&k()},m=()=>{e.scanParam.match=null,e.scanParam.cursor=0,e.scanParam.count=10},w=async c=>{const p=c.type,o=c.key;let u;const I=e.cluster==0?e.scanParam.id:e.cluster,V={cluster:e.cluster,key:c.key,id:I};switch(p){case"string":u=await v.getStringValue.request(V);break;case"hash":u=await v.getHashValue.request(V);break;case"set":u=await v.getSetValue.request(V);break;default:u=null;break}if(q(u,"\u6682\u4E0D\u652F\u6301\u8BE5\u7C7B\u578B\u6570\u636E\u67E5\u770B"),p=="string"&&(e.dataEdit.stringValue=u),p=="set"&&(e.dataEdit.setValue=u.map(i=>({value:i}))),p=="hash"){const i=[],P=Object.keys(u);for(let T=0;T<P.length;T++){const J=P[T],X=u[J];i.push({key:J,value:X})}e.dataEdit.hashValue=i}e.dataEdit.keyInfo.type=p,e.dataEdit.keyInfo.timed=c.ttl,e.dataEdit.keyInfo.key=o,e.dataEdit.operationType=2,e.dataEdit.title="\u4FEE\u6539\u6570\u636E",e.dataEdit.visible=!0},f=c=>{se.confirm("\u6B64\u64CD\u4F5C\u5C06\u5220\u9664\u5BF9\u5E94\u7684key , \u662F\u5426\u7EE7\u7EED?","\u63D0\u793A",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",type:"warning"}).then(()=>{let p=e.cluster==0?e.scanParam.id:e.cluster;v.delKey.request({cluster:e.cluster,key:c,id:p}).then(()=>{L.success("\u5220\u9664\u6210\u529F\uFF01"),k()})}).catch(()=>{})},y=c=>{if(c==-1)return"\u6C38\u4E45";c||(c=0);let p=parseInt(c),o=0,u=0,I=0;p>60&&(o=parseInt(p/60+""),p=p%60,o>60&&(u=parseInt(o/60+""),o=o%60,u>24&&(I=parseInt(u/24+""),u=u%24)));let V=""+p+"s";return o>0&&(V=""+o+"m:"+V),u>0&&(V=""+u+"h:"+V),I>0&&(V=""+I+"d:"+V),V},g=()=>{q(e.scanParam.id,"\u8BF7\u5148\u9009\u62E9redis"),e.dataEdit.operationType=1,e.dataEdit.title="\u65B0\u589E\u6570\u636E",e.dataEdit.visible=!0},F=()=>{e.dataEdit.keyInfo={},e.dataEdit.stringValue="",e.dataEdit.setValue=[],e.dataEdit.hashValue=[]};return A($({},N(e)),{changeProjectEnv:t,changeRedis:b,clearRedis:r,searchKey:E,scan:k,clear:n,getValue:w,del:f,ttlConveter:y,onAddData:g,onCancelDataEdit:F})}}),we={style:{float:"left"}},De={style:{float:"left"}},Ie={style:{float:"right",color:"#8492a6","margin-left":"6px","font-size":"13px"}},Be=h("scan"),Fe={style:{float:"right"}},$e=h("\u67E5\u770B"),je=h("\u5220\u9664"),Pe=D("div",{style:{"text-align":"center","margin-top":"10px"}},null,-1);function Ae(e,a,t,b,k,E){const r=d("el-option"),n=d("el-select"),m=d("el-form-item"),w=d("project-env-select"),f=d("el-col"),y=d("el-input"),g=d("el-button"),F=d("el-form"),c=d("el-row"),p=d("el-table-column"),o=d("el-table"),u=d("el-card"),I=d("data-edit"),V=Q("loading");return _(),z("div",null,[l(u,null,{default:s(()=>[D("div",we,[l(c,{type:"flex",justify:"space-between"},{default:s(()=>[l(f,{span:24},{default:s(()=>[l(w,{onChangeProjectEnv:e.changeProjectEnv,onClear:e.clearRedis},{default:s(()=>[l(m,{label:"redis","label-width":"40px"},{default:s(()=>[l(n,{modelValue:e.scanParam.id,"onUpdate:modelValue":a[0]||(a[0]=i=>e.scanParam.id=i),placeholder:"\u8BF7\u9009\u62E9redis",onChange:e.changeRedis,onClear:e.clearRedis,clearable:""},{default:s(()=>[(_(!0),z(te,null,le(e.redisList,i=>(_(),B(r,{key:i.id,label:i.host,value:i.id},{default:s(()=>[D("span",De,S(i.host),1),D("span",Ie,S(`\u5E93: [${i.db}]`),1)]),_:2},1032,["label","value"]))),128))]),_:1},8,["modelValue","onChange","onClear"])]),_:1})]),_:1},8,["onChangeProjectEnv","onClear"])]),_:1}),l(f,{class:"mt10"},{default:s(()=>[l(F,{class:"search-form","label-position":"right",inline:!0,"label-width":"60px"},{default:s(()=>[l(m,{label:"key","label-width":"40px"},{default:s(()=>[l(y,{placeholder:"\u652F\u6301*\u6A21\u7CCAkey",style:{width:"180px"},modelValue:e.scanParam.match,"onUpdate:modelValue":a[1]||(a[1]=i=>e.scanParam.match=i),onClear:a[2]||(a[2]=i=>e.clear()),clearable:""},null,8,["modelValue"])]),_:1}),l(m,{label:"count","label-width":"60px"},{default:s(()=>[l(y,{placeholder:"count",style:{width:"62px"},modelValue:e.scanParam.count,"onUpdate:modelValue":a[3]||(a[3]=i=>e.scanParam.count=i)},null,8,["modelValue"])]),_:1}),l(m,null,{default:s(()=>[l(g,{onClick:a[4]||(a[4]=i=>e.searchKey()),type:"success",icon:"search",plain:""}),l(g,{onClick:a[5]||(a[5]=i=>e.scan()),icon:"bottom",plain:""},{default:s(()=>[Be]),_:1}),l(g,{type:"primary",icon:"plus",onClick:a[6]||(a[6]=i=>e.onAddData(!1)),plain:""})]),_:1}),D("div",Fe,[D("span",null,"keys: "+S(e.dbsize),1)])]),_:1})]),_:1})]),_:1})]),W((_(),B(o,{data:e.keys,stripe:"","highlight-current-row":!0,style:{cursor:"pointer"}},{default:s(()=>[l(p,{"show-overflow-tooltip":"",prop:"key",label:"key"}),l(p,{prop:"type",label:"type",width:"80"}),l(p,{prop:"ttl",label:"ttl(\u8FC7\u671F\u65F6\u95F4)",width:"130"},{default:s(i=>[h(S(e.ttlConveter(i.row.ttl)),1)]),_:1}),l(p,{label:"\u64CD\u4F5C"},{default:s(i=>[l(g,{onClick:P=>e.getValue(i.row),type:"success",icon:"search",plain:"",size:"small"},{default:s(()=>[$e]),_:2},1032,["onClick"]),l(g,{onClick:P=>e.del(i.row.key),type:"danger",icon:"delete",plain:"",size:"small"},{default:s(()=>[je]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[V,e.loading]])]),_:1}),Pe,l(I,{visible:e.dataEdit.visible,"onUpdate:visible":a[7]||(a[7]=i=>e.dataEdit.visible=i),title:e.dataEdit.title,keyInfo:e.dataEdit.keyInfo,redisId:e.scanParam.id,operationType:e.dataEdit.operationType,stringValue:e.dataEdit.stringValue,setValue:e.dataEdit.setValue,hashValue:e.dataEdit.hashValue,onValChange:e.searchKey,onCancel:e.onCancelDataEdit},null,8,["visible","title","keyInfo","redisId","operationType","stringValue","setValue","hashValue","onValChange","onCancel"])])}var Le=U(Ce,[["render",Ae]]);export{Le as default};
