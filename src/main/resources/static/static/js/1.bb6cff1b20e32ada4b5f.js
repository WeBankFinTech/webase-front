(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"8t7H":function(e,t,s){"use strict";var r=s("uXmc");s.n(r).a},mHBk:function(e,t,s){"use strict";var r=s("4d7F"),n=s.n(r),a=s("vDqi"),o=s.n(a),i=s("oYx3"),u=o.a.create({timeout:3e4});u.defaults.headers.post["X-Requested-With"]="XMLHttpRequest",u.defaults.responseType="json",u.defaults.validateStatus=function(){return!0},u.interceptors.response.use(function(e){return e.data&&302e3===e.data.code&&i.a.push({path:"/",query:{redirect:i.a.currentRoute.fullPath}}),e},function(e){return n.a.reject(e)});function c(e){return new n.a(function(t,s){u(e).then(function(e){t(e)}).catch(function(e){s(e)})})}var l=s("DgvE");s("Qyje");function p(e){return c({url:e+"/web3/clientVersion",method:"get"})}function d(e,t){var s=Object(l.g)(e,t);return c({url:"performance/"+s.str,method:"get",params:s.querys})}function h(e,t){var s=Object(l.g)(e,t);return c({url:"chain/"+s.str,method:"get",params:s.querys})}function g(){return c({url:"1/web3/groupList",method:"get"})}function m(){return c({url:"privateKey",method:"get"})}function v(e,t){return c({url:"privateKey/import",method:"get",params:Object(l.g)(e,t).querys})}function f(e){return c({url:e+"/web3/blockNumber",method:"get"})}function y(e){return c({url:e+"/web3/groupPeers",method:"get"})}function b(e){return c({url:e+"/web3/transaction-total",method:"get"})}function w(e){return c({url:e+"/web3/pending-transactions-count",method:"get"})}function _(e,t){return c({url:e+"/web3/search",method:"get",params:Object(l.g)(e,t).querys})}function K(e,t,s){Object(l.g)(e,t);return c({url:s+"/web3/peers",method:"get"})}function C(e,t){return c({url:e+"/web3/transaction/"+t,method:"get"})}function k(e,t){return c({url:e+"/web3/transactionReceipt/"+t,method:"get"})}s.d(t,"t",function(){return p}),s.d(t,"n",function(){return d}),s.d(t,"r",function(){return h}),s.d(t,"v",function(){return g}),s.d(t,"u",function(){return m}),s.d(t,"x",function(){return v}),s.d(t,"s",function(){return f}),s.d(t,"z",function(){return y}),s.d(t,"C",function(){return b}),s.d(t,"A",function(){return w}),s.d(t,"w",function(){return _}),s.d(t,"y",function(){return K}),s.d(t,"B",function(){return C}),s.d(t,"D",function(){return k})},qse9:function(e,t,s){"use strict";var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content-head-wrapper"},[s("div",{staticClass:"content-head-title"},[e.icon?s("span",{staticClass:"content-head-icon",on:{click:e.skip}},[s("i",{staticClass:"wbs-icon-back"})]):e._e(),e._v(" "),s("span",{class:{"font-color-9da2ab":e.headSubTitle}},[e._v(e._s(e.title))]),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:e.headSubTitle,expression:"headSubTitle"}],staticClass:"font-color-9da2ab"},[e._v("/")]),e._v(" "),s("span",[e._v(e._s(e.headSubTitle))])]),e._v(" "),s("div",{staticClass:"content-head-network"},[e.version?s("div",{staticClass:"content-head-item font-color-8798ad"},[s("span",[e._v("当前版本:"+e._s(e.version))])]):e._e(),e._v(" "),s("div",{staticClass:"content-head-item"},[s("span",{staticClass:"font-color-fff"},[e._v("群组：")]),e._v(" "),s("el-select",{staticStyle:{width:"60px"},on:{change:e.changeGroup},model:{value:e.group,callback:function(t){e.group=t},expression:"group"}},e._l(e.groupList,function(e){return s("el-option",{key:e,attrs:{label:e,value:e}})}),1)],1),e._v(" "),s("div",{staticClass:"content-head-item"},[s("el-input",{staticStyle:{width:"450px"},model:{value:e.userMap.address,callback:function(t){e.$set(e.userMap,"address",t)},expression:"userMap.address"}},[s("template",{slot:"prepend"},[e._v("\n                    地址：\n                ")]),e._v(" "),s("template",{slot:"append"},[s("el-button",{attrs:{icon:"wbs-icon-copy",title:"复制地址"},on:{click:function(t){e.copyAddress(e.userMap.address)}}})],1)],2)],1),e._v(" "),s("div",{staticClass:"content-head-item"},[s("el-dropdown",{on:{command:e.changRivateKey}},[s("el-button",[e._v("\n                    私钥\n                    "),s("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),e._v(" "),s("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},e._l(e.rivateKeyOption,function(t){return s("el-dropdown-item",{key:t.value,attrs:{command:t.value}},[e._v("\n                        "+e._s(t.label)+"\n                    ")])}),1)],1)],1)]),e._v(" "),s("el-dialog",{attrs:{visible:e.rivateKeyVisible,width:""},on:{"update:visible":function(t){e.rivateKeyVisible=t}}},[s("table",{staticClass:"rivate-key-dialog"},e._l(e.userMap,function(t,r){return s("tr",[s("td",{staticClass:"dialog-text"},[e._v("\n                    "+e._s(e.transferCh(r))+"："+e._s(t)+"\n                    "),s("i",{staticClass:"wbs-icon-copy font-12",staticStyle:{"margin-left":"10px"},attrs:{title:"复制"+e.transferCh(r)},on:{click:function(s){e.copyAddress(t)}}})])])}),0),e._v(" "),s("i",{staticClass:"el-icon-warning font-color-ed5454"},[e._v(" 亲,记得保存私钥哦! ")])]),e._v(" "),s("el-dialog",{attrs:{visible:e.importRivateKeyVisible,width:"600px"},on:{"update:visible":function(t){e.importRivateKeyVisible=t},close:e.closeImport}},[s("el-input",{model:{value:e.importRivateKey,callback:function(t){e.importRivateKey=t},expression:"importRivateKey"}}),e._v(" "),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(t){e.importRivateKeyVisible=!1}}},[e._v("取 消")]),e._v(" "),s("el-button",{attrs:{type:"primary"},on:{click:e.sureImportRivateKey}},[e._v("确 定")])],1)],1)],1)};r._withStripped=!0;var n=s("GQeE"),a=s.n(n),o=s("gDS+"),i=s.n(o),u=s("oYx3"),c=s("mHBk"),l=(s("DgvE"),{name:"conetnt-head",props:["headTitle","icon","route","headSubTitle"],components:{},watch:{headTitle:function(e){this.title=e}},data:function(){return{rivateKeyVisible:!1,importRivateKeyVisible:!1,title:this.headTitle,headIcon:this.icon||!1,way:this.route||"",path:"",group:"1",groupList:localStorage.getItem("cluster")?JSON.parse(localStorage.getItem("cluster")):[],userMap:localStorage.getItem("keyInfo")?JSON.parse(localStorage.getItem("keyInfo")):{},rivateKeyOption:[{value:"create",label:"获取私钥"},{value:"import",label:"导入私钥"},{value:"export",label:"导出私钥"}],importRivateKey:"",version:""}},mounted:function(){localStorage.getItem("groupName")&&(this.group=localStorage.getItem("groupName")),"/home"==this.$route.path&&(this.getGroup(),this.getClientVersion())},methods:{getClientVersion:function(){var e=this;Object(c.t)(this.group).then(function(t){console.log(t,"version");var s=t.data,r=t.status;t.statusText;200===r?e.version=s:e.$message({type:"error",message:s.errorMessage||"系统错误"})}).catch(function(t){e.$message({type:"error",message:"系统错误"})})},getGroup:function(){var e=this;Object(c.v)().then(function(t){var s=t.data,r=t.status;t.statusText;200===r?(e.groupList=s,localStorage.setItem("cluster",i()(s))):e.$message({type:"error",message:s.errorMessage||"系统错误"})}).catch(function(t){e.$message({type:"error",message:"系统错误"})})},getCreatePrivateKey:function(){var e=this;Object(c.u)().then(function(t){var s=t.data,r=t.status;t.statusText;200===r?(e.userMap=s,localStorage.setItem("keyInfo",i()(s))):e.$message({type:"error",message:s.errorMessage||"系统错误"})}).catch(function(t){e.$message({type:"error",message:"系统错误"})})},getImportPrivateKey:function(){var e=this,t={privateKey:this.importRivateKey.trim()};Object(c.x)({},t).then(function(t){var s=t.data,r=t.status;t.statusText;200===r?(e.userMap=s,localStorage.setItem("keyInfo",i()(s)),e.importRivateKeyVisible=!1,e.$message({type:"success",showClose:!0,message:"导入成功",duration:2e3})):e.$message({type:"error",message:s.errorMessage||"系统错误"})}).catch(function(t){e.$message({type:"error",message:"系统错误"})})},skip:function(){this.route?u.a.push(this.way):this.$router.go(-1)},changeGroup:function(){this.path=this.$route.path,localStorage.setItem("groupName",this.group),this.$emit("changeGroup",this.group),this.getClientVersion()},copyPrivateKey:function(e){var t=this;e?this.$copyText(e).then(function(e){t.$message({type:"success",showClose:!0,message:"复制成功",duration:2e3})}):this.$message({type:"fail",showClose:!0,message:"privateKey为空，不复制。",duration:2e3})},copyAddress:function(e){var t=this;e?this.$copyText(e).then(function(e){t.$message({type:"success",showClose:!0,message:"复制成功",duration:2e3})}):this.$message({type:"fail",showClose:!0,message:"address为空，不复制。",duration:2e3})},changRivateKey:function(e){switch(e){case"create":this.rivateKeyVisible=!0,localStorage.getItem("keyInfo")&&(this.userMap=JSON.parse(localStorage.getItem("keyInfo"))),this.getCreatePrivateKey();break;case"import":this.importRivateKeyVisible=!0;break;case"export":if(0==a()(this.userMap).length)return void this.$message({type:"warning",showClose:!0,message:"没有私钥可以导出",duration:2e3});this.rivateKeyVisible=!0}},sureImportRivateKey:function(){this.importRivateKey?this.getImportPrivateKey():this.$message({type:"error",showClose:!0,message:"内容为空",duration:2e3})},transferCh:function(e){var t="";switch(e){case"publicKey":t="公钥";break;case"privateKey":t="私钥";break;case"address":t="地址"}return t},closeImport:function(){this.importRivateKey=""}}}),p=(s("8t7H"),s("KHd+")),d=Object(p.a)(l,r,[],!1,null,"7ba17399",null);d.options.__file="src/components/contentHead.vue";t.a=d.exports},uXmc:function(e,t,s){}}]);