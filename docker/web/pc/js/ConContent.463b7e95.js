(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ConContent"],{1187:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-button",{staticClass:"btnsize",staticStyle:{background:"#067FB5",color:"#fff"},attrs:{icon:"iconfont icon-kaishi",size:"small"},on:{click:t.containerState}},[t._v(" "+t._s(t.$t("Button_Start")))]),n("el-button",{staticClass:"btnsize",attrs:{icon:"iconfont icon-tingzhi",type:"danger",size:"small"},on:{click:t.containerStop}},[t._v(t._s(t.$t("Button_Stop")))]),n("el-button",{staticClass:"btnsize",staticStyle:{background:"#067FB5",color:"#fff"},attrs:{icon:"iconfont icon-zhongqi",size:"small"},on:{click:t.containerRestart}},[t._v(t._s(t.$t("Button_Restart")))]),n("el-button",{staticClass:"btnsize",staticStyle:{background:"#067FB5",color:"#fff"},attrs:{icon:"iconfont icon-zantingtingzhi",size:"small"},on:{click:t.containerPause}},[t._v(" "+t._s(t.$t("Button_Pause")))]),n("el-button",{staticClass:"btnsize",attrs:{icon:"iconfont icon-lajitong",type:"danger",size:"small"},on:{click:t.containerDel}},[t._v(t._s(t.$t("Button_Delete")))])],1)},s=[],o=n("14c3"),a={props:["multipleSelection","state","continerState"],watch:{continerState:function(t,e){var n=t[t.length-1];1===n?this.containerStop():2===n&&this.containerState()}},methods:{linkAdd:function(){this.$router.push("/Container/AddContainer")},containerState:function(){var t=this,e=this.$loading({text:"安装中",background:"rgba(0, 0, 0, 0.8)"});if(0===this.multipleSelection.length)return this.$emit("setListLog",{title:"未选择容器",type:"warning"}),e.close();var n=this.multipleSelection.filter((function(t){return"running"===t.State||"paused"===t.State}));if(n.length>0)return this.$emit("setListLog",{title:"选择容器中有已运行容器，请取消选择后重试！",type:"warning"}),e.close();for(var i=0;i<this.multipleSelection.length;i++){var s='curl -w %{http_code} --unix-socket /var/run/docker.sock -s -X POST "http:/v1.40/containers/'.concat(this.multipleSelection[i].Id,'/start"');Object(o["a"])({docker:s},(function(e){e.message?t.$emit("setListLog",{title:e.message,type:"error"}):e>=200&&e<300?(t.$emit("setListLog",{title:"容器运行成功！",type:"success"}),t.$store.commit("changeIsFetchContainer",!0)):t.$emit("setListLog",{title:"网络不畅，请重试！",type:"success"})}),this)}e.close()},containerStop:function(){var t=this,e=this.$loading({text:"安装中",background:"rgba(0, 0, 0, 0.8)"});if(0===this.multipleSelection.length)return this.$emit("setListLog",{title:"未选择容器！",type:"warning"}),e.close();var n=this.multipleSelection.filter((function(t){return"exited"===t.State||"paused"===t.State}));if(n.length>0)return this.$emit("setListLog",{title:"选择容器中有已停止或暂停容器，请取消选择后重试！",type:"warning"}),e.close();for(var i=0;i<this.multipleSelection.length;i++){var s='curl -w %{http_code} --unix-socket /var/run/docker.sock -s -X POST "http:/v1.40/containers/'.concat(this.multipleSelection[i].Id,'/stop"');Object(o["a"])({docker:s},(function(e){e.message?t.$emit("setListLog",{title:e.msg,type:"error"}):e>=200&&e<300?(t.$emit("setListLog",{title:"容器停止成功！",type:"success"}),t.$store.commit("changeIsFetchContainer",!0)):t.$emit("setListLog",{title:"网络不畅，请重试！",type:"error"})}),this)}e.close()},containerDel:function(){var t=this;if(0===this.multipleSelection.length){var e=this.$loading({text:"安装中",background:"rgba(0, 0, 0, 0.8)"});return this.$emit("setListLog",{title:"未选择容器！",type:"warning"}),e.close()}var n=this.multipleSelection.filter((function(t){return"running"===t.State||"paused"===t.State})),i=!1;if(!(n.length>0)||(i=confirm("选择有已运行或暂停容器，是否强制删除？"),i)){for(var s=this.$loading({text:"安装中",background:"rgba(0, 0, 0, 0.8)"}),a=0;a<this.multipleSelection.length;a++){var r='curl -w %{http_code} --unix-socket /var/run/docker.sock -s -X DELETE "http:/v1.40/containers/'.concat(this.multipleSelection[a].Id,"?force=").concat(i,'"');Object(o["a"])({docker:r},(function(e){e.message?t.$emit("setListLog",{title:e.message,type:"error"}):e>=200&&e<300?(t.$emit("setListLog",{title:"容器删除成功！",type:"success"}),t.$store.commit("changeIsFetchContainer",!0)):t.$emit("setListLog",{title:"网络不畅，请重试！",type:"error"})}),this)}s.close()}},containerKill:function(){var t=this,e=this.$loading({text:"安装中",background:"rgba(0, 0, 0, 0.8)"});if(0===this.multipleSelection.length)return this.$emit("setListLog",{title:"未选择容器！",type:"warning"}),e.close();var n=this.multipleSelection.filter((function(t){return"exited"===t.State}));if(n.length>0)return this.$emit("setListLog",{title:"选择容器中有已停止容器，请取消选择后重试！",type:"warning"}),e.close();if(confirm("强制终止容器可能会造成数据丢失，是否确认操作？"))for(var i=0;i<this.multipleSelection.length;i++){var s='curl -w %{http_code} --unix-socket /var/run/docker.sock -s -X POST "http:/v1.40/containers/'.concat(this.multipleSelection[i].Id,'/kill"');Object(o["a"])({docker:s},(function(e){e.message?t.$emit("setListLog",{title:e.message,type:"error"}):e>=200&&e<300?(t.$emit("setListLog",{title:"容器强制停止成功！",type:"success"}),t.$store.commit("changeIsFetchContainer",!0)):t.$emit("setListLog",{title:"网络不畅，请重试！",type:"error"})}),this)}e.close()},containerRestart:function(){var t=this,e=this.$loading({text:"安装中",background:"rgba(0, 0, 0, 0.8)"});if(0===this.multipleSelection.length)return this.$emit("setListLog",{title:"未选择容器！",type:"warning"}),e.close();var n=this.multipleSelection.filter((function(t){return"exited"===t.State||"paused"===t.State}));if(n.length>0)return this.$emit("setListLog",{title:"选择容器中有已停止或暂停容器，请取消选择后重试！",type:"warning"}),e.close();for(var i=0;i<this.multipleSelection.length;i++){var s='curl -w %{http_code} --unix-socket /var/run/docker.sock -s -X POST "http:/v1.40/containers/'.concat(this.multipleSelection[i].Id,'/restart"');Object(o["a"])({docker:s},(function(e){e.message?t.$emit("setListLog",{title:e.message,type:"error"}):e>=200&&e<300?(t.$emit("setListLog",{title:"容器重启成功！",type:"success"}),t.$store.commit("changeIsFetchContainer",!0)):t.$emit("setListLog",{title:"网络不畅，请重试！",type:"error"})}),this)}e.close()},containerPause:function(){var t=this,e=this.$loading({text:"安装中",background:"rgba(0, 0, 0, 0.8)"});if(0===this.multipleSelection.length)return this.$emit("setListLog",{title:"未选择容器！",type:"warning"}),e.close();var n=this.multipleSelection.filter((function(t){return"exited"===t.State||"paused"===t.State}));if(n.length>0)return this.$emit("setListLog",{title:"选择容器中有已停止或已暂停容器，请取消选择后重试！",type:"warning"}),e.close();for(var i=0;i<this.multipleSelection.length;i++){var s='curl -w %{http_code} --unix-socket /var/run/docker.sock -s -X POST "http:/v1.40/containers/'.concat(this.multipleSelection[i].Id,'/pause"');Object(o["a"])({docker:s},(function(e){e.message?t.$emit("setListLog",{title:e.message,type:"error"}):e>=200&&e<300?(t.$emit("setListLog",{title:"容器暂停成功！",type:"success"}),t.$store.commit("changeIsFetchContainer",!0)):t.$emit("setListLog",{title:"网络不畅，请重试！",type:"error"})}),this)}e.close()},containerUnpause:function(){var t=this,e=this.$loading({text:"安装中",background:"rgba(0, 0, 0, 0.8)"});if(0===this.multipleSelection.length)return this.$emit("setListLog",{title:"未选择容器！",type:"warning"}),e.close();var n=this.multipleSelection.filter((function(t){return"paused"!==t.State}));if(n.length>0)return this.$emit("setListLog",{title:"选择容器中有未暂停或已停止容器，请取消选择后重试！",type:"warning"}),e.close();for(var i=0;i<this.multipleSelection.length;i++){var s='curl -w %{http_code} --unix-socket /var/run/docker.sock -s -X POST "http:/v1.40/containers/'.concat(this.multipleSelection[i].Id,'/unpause"');Object(o["a"])({docker:s},(function(e){e.message?t.$emit("setListLog",{title:e.message,type:"error"}):e>=200&&e<300?(t.$emit("setListLog",{title:"容器恢复成功！",type:"success"}),t.$store.commit("changeIsFetchContainer",!0)):t.$emit("setListLog",{title:"网络不畅，请重试！",type:"error"})}),this)}e.close()}}},r=a,c=(n("7e72"),n("2877")),l=Object(c["a"])(r,i,s,!1,null,"4ff94ade",null);e["a"]=l.exports},1425:function(t,e,n){},"206c":function(t,e,n){"use strict";var i=n("d403"),s=n.n(i);s.a},"27ae":function(t,e,n){(function(n){var i,s;(function(e,n){t.exports=n(e)})("undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n?n:this,(function(n){"use strict";n=n||{};var o,a=n.Base64,r="2.6.4",c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",l=function(t){for(var e={},n=0,i=t.length;n<i;n++)e[t.charAt(n)]=n;return e}(c),u=String.fromCharCode,m=function(t){if(t.length<2){var e=t.charCodeAt(0);return e<128?t:e<2048?u(192|e>>>6)+u(128|63&e):u(224|e>>>12&15)+u(128|e>>>6&63)+u(128|63&e)}e=65536+1024*(t.charCodeAt(0)-55296)+(t.charCodeAt(1)-56320);return u(240|e>>>18&7)+u(128|e>>>12&63)+u(128|e>>>6&63)+u(128|63&e)},d=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,f=function(t){return t.replace(d,m)},h=function(t){var e=[0,2,1][t.length%3],n=t.charCodeAt(0)<<16|(t.length>1?t.charCodeAt(1):0)<<8|(t.length>2?t.charCodeAt(2):0),i=[c.charAt(n>>>18),c.charAt(n>>>12&63),e>=2?"=":c.charAt(n>>>6&63),e>=1?"=":c.charAt(63&n)];return i.join("")},g=n.btoa&&"function"==typeof n.btoa?function(t){return n.btoa(t)}:function(t){if(t.match(/[^\x00-\xFF]/))throw new RangeError("The string contains invalid characters.");return t.replace(/[\s\S]{1,3}/g,h)},p=function(t){return g(f(String(t)))},v=function(t){return t.replace(/[+\/]/g,(function(t){return"+"==t?"-":"_"})).replace(/=/g,"")},C=function(t,e){return e?v(p(t)):p(t)},_=function(t){return C(t,!0)};n.Uint8Array&&(o=function(t,e){for(var n="",i=0,s=t.length;i<s;i+=3){var o=t[i],a=t[i+1],r=t[i+2],l=o<<16|a<<8|r;n+=c.charAt(l>>>18)+c.charAt(l>>>12&63)+("undefined"!=typeof a?c.charAt(l>>>6&63):"=")+("undefined"!=typeof r?c.charAt(63&l):"=")}return e?v(n):n});var b,k=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,S=function(t){switch(t.length){case 4:var e=(7&t.charCodeAt(0))<<18|(63&t.charCodeAt(1))<<12|(63&t.charCodeAt(2))<<6|63&t.charCodeAt(3),n=e-65536;return u(55296+(n>>>10))+u(56320+(1023&n));case 3:return u((15&t.charCodeAt(0))<<12|(63&t.charCodeAt(1))<<6|63&t.charCodeAt(2));default:return u((31&t.charCodeAt(0))<<6|63&t.charCodeAt(1))}},$=function(t){return t.replace(k,S)},w=function(t){var e=t.length,n=e%4,i=(e>0?l[t.charAt(0)]<<18:0)|(e>1?l[t.charAt(1)]<<12:0)|(e>2?l[t.charAt(2)]<<6:0)|(e>3?l[t.charAt(3)]:0),s=[u(i>>>16),u(i>>>8&255),u(255&i)];return s.length-=[0,0,2,1][n],s.join("")},y=n.atob&&"function"==typeof n.atob?function(t){return n.atob(t)}:function(t){return t.replace(/\S{1,4}/g,w)},x=function(t){return y(String(t).replace(/[^A-Za-z0-9\+\/]/g,""))},I=function(t){return $(y(t))},L=function(t){return String(t).replace(/[-_]/g,(function(t){return"-"==t?"+":"/"})).replace(/[^A-Za-z0-9\+\/]/g,"")},N=function(t){return I(L(t))};n.Uint8Array&&(b=function(t){return Uint8Array.from(x(L(t)),(function(t){return t.charCodeAt(0)}))});var A=function(){var t=n.Base64;return n.Base64=a,t};if(n.Base64={VERSION:r,atob:x,btoa:g,fromBase64:N,toBase64:C,utob:f,encode:C,encodeURI:_,btou:$,decode:N,noConflict:A,fromUint8Array:o,toUint8Array:b},"function"===typeof Object.defineProperty){var O=function(t){return{value:t,enumerable:!1,writable:!0,configurable:!0}};n.Base64.extendString=function(){Object.defineProperty(String.prototype,"fromBase64",O((function(){return N(this)}))),Object.defineProperty(String.prototype,"toBase64",O((function(t){return C(this,t)}))),Object.defineProperty(String.prototype,"toBase64URI",O((function(){return C(this,!0)})))}}return n["Meteor"]&&(Base64=n.Base64),t.exports?t.exports.Base64=n.Base64:(i=[],s=function(){return n.Base64}.apply(e,i),void 0===s||(t.exports=s)),{Base64:n.Base64}}))}).call(this,n("c8ba"))},"3f56":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-form",{ref:"form",attrs:{model:t.form,"label-width":"80px"}},[n("el-form-item",{attrs:{label:t.$t("ImageSimpleAdd_ImageSource"),prop:"imageUrl"}},[n("el-select",{attrs:{placeholder:"请选择镜像来源"},model:{value:t.form.imageUrl,callback:function(e){t.$set(t.form,"imageUrl",e)},expression:"form.imageUrl"}},[n("el-option",{attrs:{label:"DockerHub",value:""}}),t._l(t.hubdata,(function(t){return n("el-option",{key:t.name,attrs:{label:t.name,value:t.url}})}))],2)],1),n("el-form-item",{attrs:{label:t.$t("ImageSimpleAdd_ImageName"),prop:"imageName",rules:[{required:!0,message:t.$t("ImageSimpleAdd_Name")}]}},[n("el-input",{attrs:{placeholder:t.$t("ImageSimpleAdd_Example")},model:{value:t.form.imageName,callback:function(e){t.$set(t.form,"imageName","string"===typeof e?e.trim():e)},expression:"form.imageName"}})],1),n("el-form-item",[n("el-button",{staticStyle:{background:"#067FB5",color:"#fff"},attrs:{size:"small"},on:{click:function(e){return t.onSubmit()}}},[t._v(t._s(this.item?this.$t("ImageSimpleAdd_CreateImage"):this.$t("ImageSimpleAdd_PullImage")))])],1)],1)],1)},s=[],o=n("751a"),a=n("27ae"),r={data:function(){return{hubdata:[],form:{imageUrl:"",imageName:""}}},props:["item"],mounted:function(){var t=this;Object(o["a"])({url:"/hubfind",method:"GET",timeout:2e6}).then((function(e){t.hubdata=e.Data})).catch((function(t){return t}))},methods:{onSubmit:function(){if(""===this.form.imageName)return this.$message({showClose:!0,message:"镜像名称为空",type:"error"});this.loading=this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),this.addimgae()},addimgae:function(){var t=this,e="",n=this.form.imageName;if(-1===this.form.imageName.indexOf(":")&&(n+=":latest"),this.item)e='curl --unix-socket /var/run/docker.sock -s -X POST "http:/v1.40/commit?container='.concat(this.item.Id,"&repo=").concat(n,'"');else if(this.form.imageUrl){var i=this.hubdata.filter((function(e){return e.url===t.form.imageUrl})),s={serveraddress:i[0].url,username:i[0].username,password:a["Base64"].decode(i[0].password)},r=a["Base64"].encode(JSON.stringify(s));e='curl -s -X POST --unix-socket /var/run/docker.sock --header "X-Registry-Auth: '.concat(r,'" http:/v1.40/images/create?fromImage=').concat(n)}else e='curl --unix-socket /var/run/docker.sock -s -X POST "http:/v1.40/images/create?fromImage='.concat(n,'"');Object(o["a"])({url:"/docker",method:"POST",timeout:6e8,data:{docker:e}}).then((function(e){if(t.loading.close(),200!==e.Code)return t.$message({showClose:!0,message:"镜像拉取失败！",type:"error"});t.$message({showClose:!0,message:"镜像拉取成功！",type:"success"}),t.$emit("Success")}))}}},c=r,l=n("2877"),u=Object(l["a"])(c,i,s,!1,null,null,null);e["a"]=u.exports},6403:function(t,e,n){"use strict";var i=n("1425"),s=n.n(i);s.a},"66b7":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-page-header",{attrs:{content:t.title},on:{back:t.goBack}})],1)},s=[],o={props:["title"],methods:{goBack:function(){this.$router.go(-1)}}},a=o,r=n("2877"),c=Object(r["a"])(a,i,s,!1,null,null,null);e["a"]=c.exports},6700:function(t,e,n){},"7e72":function(t,e,n){"use strict";var i=n("d5f4"),s=n.n(i);s.a},"8ad8":function(t,e,n){},"8b60":function(t,e,n){"use strict";var i=n("6700"),s=n.n(i);s.a},9861:function(t,e,n){"use strict";var i=n("ff8e"),s=n.n(i);s.a},b655:function(t,e,n){},bbd0:function(t,e,n){"use strict";var i=n("b655"),s=n.n(i);s.a},c36a:function(t,e,n){"use strict";var i=n("fc5d"),s=n.n(i);s.a},d403:function(t,e,n){},d5f4:function(t,e,n){},da3a:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-form",{ref:"form",attrs:{model:t.form}},[n("el-form-item",{attrs:{title:"参数与参数之间请用‘&’连接",label:t.$t("SeniorAdd_image"),prop:"imageData",rules:[{required:!0,message:t.$t("SeniorAdd_pleaseEnterImageName")}]}},[n("el-input",{attrs:{placeholder:t.$t("SeniorAdd_forexample")},model:{value:t.form.imageData,callback:function(e){t.$set(t.form,"imageData","string"===typeof e?e.trim():e)},expression:"form.imageData"}})],1),n("el-form-item",[n("el-button",{staticStyle:{background:"#067FB5",color:"#fff"},attrs:{size:"small"},on:{click:t.onSubmit}},[t._v(t._s(this.item?t.$t("SeniorAdd_createImage"):t.$t("SeniorAdd_pullImage")))])],1)],1)],1)},s=[],o=n("751a"),a={data:function(){return{form:{imageData:""}}},props:["item"],methods:{onSubmit:function(){var t=this;if(""===this.form.imageData)return this.$message({showClose:!0,message:"镜像为空",type:"error"});this.loading=this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});var e="";e=this.item?'curl --unix-socket /var/run/docker.sock -s -X POST "http:/v1.40/commit?container='.concat(this.item.Id,"&").concat(this.form.imageData,'"'):'curl --unix-socket /var/run/docker.sock -s -X POST "http:/v1.40/images/create?'.concat(this.form.imageData,'"'),Object(o["a"])({url:"/docker",method:"POST",timeout:6e9,data:{docker:e}}).then((function(e){if(200!==e.Code)return t.$message({showClose:!0,message:"镜像拉取失败，请重试",type:"error"});t.loading.close(),t.$message({showClose:!0,message:"拉取/创建成功！",type:"success"}),t.$emit("Success")}))}}},r=a,c=n("2877"),l=Object(c["a"])(r,i,s,!1,null,null,null);e["a"]=l.exports},f478:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Back",{attrs:{title:t.item?t.item.Name+t.$t("ConContent_containDetail"):t.$t("ConContent_containDetail")}}),n("div",{staticClass:"from btn"},[n("div",{staticClass:"title"},[t._v(" "+t._s(t.$t("ConContent_operation"))+" ")]),n("ConButton",{attrs:{multipleSelection:[t.item],state:"false"}}),n("ReButton",{attrs:{item:t.item}})],1),n("ContainerState",{attrs:{item:t.item},on:{success:t.fetchItem}}),n("ConImage",{attrs:{item:t.item}}),n("ContainerInfo",{attrs:{item:t.item}}),n("ConNetwork",{attrs:{item:t.item},on:{Success:t.fetchItem}})],1)},s=[],o=(n("672e"),n("450d"),n("101e")),a=n.n(o),r=(n("5466"),n("ecdf")),c=n.n(r),l=(n("38a0"),n("ad41")),u=n.n(l),m=(n("06f1"),n("6ac9")),d=n.n(m),f=(n("1951"),n("eedf")),h=n.n(f),g=(n("6611"),n("e772")),p=n.n(g),v=(n("10cb"),n("f3ad")),C=n.n(v),_=(n("1f1a"),n("4e4b")),b=n.n(_),k=(n("eca7"),n("3787")),S=n.n(k),$=(n("425f"),n("4105")),w=n.n($),y=n("2b0e"),x=n("14c3"),I=n("1187"),L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box"},[n("el-button",{attrs:{id:"btnsize",icon:"el-icon-refresh",type:"danger",size:"small"},on:{click:t.containerRename}},[t._v(t._s(t.$t("ReButton_Rebuildcontainer")))]),n("el-button",{staticStyle:{background:"#067FB5",color:"#fff"},attrs:{id:"btnsize",icon:"el-icon-edit",size:"small"},on:{click:t.containerEdit}},[t._v(t._s(t.$t("ReButton_Modifycontainer")))])],1)},N=[],A={props:["item"],methods:{containerRename:function(){var t=this;if(confirm("是否确认重建？重建后您未固化的数据可能会被删除！")){var e='curl -w %{http_code} --unix-socket /var/run/docker.sock -s -X POST "http:/v1.40/containers/'.concat(this.item.Id,'/rename?name=1001010101010101010101"');Object(x["a"])({docker:e},(function(e){e>=200&&e<300?t.containerRebuild():(t.$message({showClose:!0,message:"网络错误，请稍候重试！",type:"error"}),t.loading.close())}),this)}},containerRebuild:function(){var t=this,e={name:this.item.Name,WorkingDir:this.item.Config.WorkingDir,Volumes:this.item.Config.Volumes,User:this.item.Config.User,Tty:this.item.Config.Tty,OpenStdin:this.item.Config.OpenStdin,NetworkingConfig:this.item.NetworkSettings,MacAddress:this.item.NetworkSettings.MacAddress,Labels:this.item.Config.Labels,Image:this.item.Config.Image,Hostname:this.item.Config.Hostname,HostConfig:this.item.HostConfig,ExposedPorts:this.item.Config.ExposedPorts,Env:this.item.Config.Env,Entrypoint:this.item.Config.Entrypoint,Domainname:this.item.Config.Domainname,Cmd:this.item.Config.Cmd},n="curl --unix-socket /var/run/docker.sock -s -H Content-Type:application/json -d '".concat(JSON.stringify(e),"' http:/v1.40/containers/create?name=").concat(this.item.Name);Object(x["a"])({docker:n},(function(e){if(e.message)return t.loading.close(),t.$message({showClose:!0,message:e.message,type:"error"});e.Id?t.containerRemove(e.Id):(t.$message({showClose:!0,message:"网络错误，请稍候重试！",type:"error"}),t.loading.close())}),this)},containerRemove:function(t){var e=this,n='curl -w %{http_code} --unix-socket /var/run/docker.sock -s -X DELETE "http:/v1.40/containers/'.concat(this.item.Id,'?force=true&v=true"');Object(x["a"])({docker:n},(function(n){n>=200&&n<300?e.containerStart(t):(e.$message({showClose:!0,message:"网络错误，请稍候重试！",type:"error"}),e.loading.close(),e.$router.push("/Container"))}),this)},containerStart:function(t){var e=this,n='curl -w %{http_code} --unix-socket /var/run/docker.sock -s -X POST "http:/v1.40/containers/'.concat(t,'/start"');Object(x["a"])({docker:n},(function(t){t>=200&&t<300?(e.$message({showClose:!0,message:"容器重建成功！",type:"success"}),e.$router.go(-1),e.loading.close()):(e.$message({showClose:!0,message:"容器启动失败！",type:"error"}),e.loading.close(),e.$router.push("/Container"))}),this)},containerEdit:function(){this.$router.push("/Container/EditContainer/".concat(this.item.Id))}}},O=A,B=(n("206c"),n("2877")),P=Object(B["a"])(O,L,N,!1,null,"54522d4c",null),j=P.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"from"},[n("div",{staticClass:"title"},[t._v(" "+t._s(t.$t("ContainerState_Containerstatus"))+" ")]),t.item?n("div",[n("div",{staticClass:"item"},[n("span",{staticClass:"span"},[t._v("ID")]),t._v(t._s(t.item.Id))]),n("div",{staticClass:"item"},[n("span",{staticClass:"span"},[t._v(t._s(t.$t("ContainerState_ContainerName")))]),n("span",{directives:[{name:"show",rawName:"v-show",value:!t.editShow,expression:"!editShow"}]},[t._v(" "+t._s(t.item.Name)+" "),n("i",{staticClass:"el-icon-edit",staticStyle:{color:"#067FB5",cursor:"pointer"},attrs:{title:t.$t("ContainerState_Changethename")},on:{click:t.editNameShow}})]),n("span",{directives:[{name:"show",rawName:"v-show",value:t.editShow,expression:"editShow"}]},[n("el-input",{staticStyle:{width:"200px","margin-right":"10px"},attrs:{size:"mini",placeholder:"$t('ContainerState_Pleaseinputthecontent')"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),n("el-button",{staticStyle:{background:"#067FB5",color:"#fff"},attrs:{size:"mini"},on:{click:t.editNameShow}},[t._v(t._s(t.$t("ContainerInfo_cancel")))]),n("el-button",{attrs:{size:"mini",type:"success"},on:{click:t.editName}},[t._v(t._s(t.$t("ContainerInfo_Submit")))])],1)]),n("div",{staticClass:"item"},[n("span",{staticClass:"span"},[t._v(t._s(t.$t("ContainerState_IPaddress")))]),t._v(t._s(t.item.NetworkSettings.IPAddress))]),n("div",{staticClass:"item"},[n("span",{staticClass:"span"},[t._v(t._s(t.$t("ContainerState_state")))]),t._v(t._s(t.item.State.Status))]),n("div",{staticClass:"item"},[n("span",{staticClass:"span"},[t._v(t._s(t.$t("ContainerState_Creationtime")))]),t._v(t._s(t.item.Created))]),n("div",{staticClass:"item"},[n("span",{staticClass:"span"},[t._v(t._s(t.$t("ContainerState_Starttime")))]),t._v(t._s(t.item.State.StartedAt))])]):t._e(),t.item?n("div",{staticClass:"btn"},[n("router-link",{attrs:{tag:"button",to:"/Container/Logs/"+t.item.Id}},[n("i",{staticClass:"iconfont icon-wulianwang-"}),n("span",[t._v("日志")])]),n("router-link",{attrs:{tag:"button",to:"/Container/CheckContainer/"+t.item.Id}},[n("i",{staticClass:"iconfont icon-gengduo"}),n("span",[t._v("检查")])]),n("router-link",{attrs:{tag:"button",to:"/Container/CountContainer/"+t.item.Id}},[n("i",{staticClass:"iconfont icon-zhenduan"}),n("span",[t._v("统计")])]),n("router-link",{attrs:{tag:"button",to:"/Container/ConsoleContainer/"+t.item.Id}},[n("i",{staticClass:"iconfont icon-minglinghang"}),n("span",[t._v("控制台")])])],1):t._e()])},E=[],T={data:function(){return{editShow:!1,name:""}},props:["item"],watch:{item:function(){this.name=this.item.Name}},methods:{editNameShow:function(){this.editShow=!this.editShow},editName:function(){var t=this,e='curl -w %{http_code} --unix-socket /var/run/docker.sock -s -X POST "http:/v1.40/containers/'.concat(this.item.Id,"/rename?name=").concat(this.name,'"');Object(x["a"])({docker:e},(function(e){if(e.message)return t.$message({showClose:!0,message:e.message,type:"error"});e>=200&&e<300?(t.$message({showClose:!0,message:"修改成功",type:"success"}),t.$emit("success"),t.editNameShow()):t.$message({showClose:!0,message:"网络不畅，请稍候重试",type:"error"})}),this)}}},F=T,z=(n("fcef"),Object(B["a"])(F,R,E,!1,null,"97881996",null)),D=z.exports,X=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"from"},[n("div",{staticClass:"title"},[t._v(" "+t._s(t.$t("ConImage_ContainerName"))+" ")]),n("button",{staticClass:"btn btn1",class:0===t.addShow?"btnActive":"",on:{click:function(e){return t.changeAddShow(0)}}},[t._v(t._s(t.$t("ConImage_simple")))]),n("button",{staticClass:"btn btn2",class:1===t.addShow?"btnActive":"",on:{click:function(e){return t.changeAddShow(1)}}},[t._v(t._s(t.$t("ConImage_senior")))]),n("div",{directives:[{name:"show",rawName:"v-show",value:0===t.addShow,expression:"addShow === 0"}],staticClass:"addbox"},[n("SimpleAdd",{attrs:{item:t.item}})],1),n("div",{directives:[{name:"show",rawName:"v-show",value:1===t.addShow,expression:"addShow === 1"}],staticClass:"addbox"},[n("SeniorAdd",{attrs:{item:t.item}})],1)])},U=[],H=n("3f56"),M=n("da3a"),J={data:function(){return{addShow:0}},props:["item"],methods:{changeAddShow:function(t){this.addShow=t}},components:{SeniorAdd:M["a"],SimpleAdd:H["a"]}},W=J,q=(n("8b60"),Object(B["a"])(W,X,U,!1,null,"277184ea",null)),V=q.exports,G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"from"},[n("div",{staticClass:"title"},[t._v(" "+t._s(t.$t("ContainerInfo_ContainerInformation"))+" ")]),t.item?n("div",[n("div",{staticClass:"item"},[n("span",[t._v(t._s(t.$t("ContainerInfo_imaegs")))]),n("div",[t._v(t._s(t.item.Image))])]),n("div",{staticClass:"item"},[n("span",[t._v(t._s(t.$t("ContainerInfo_Port")))]),n("div",{domProps:{innerHTML:t._s(this.port(t.item))}})]),n("div",{staticClass:"item"},[n("span",[t._v(t._s(t.$t("ContainerInfo_CMD")))]),n("div",[t._v(t._s(t.item.Config.Cmd?t.item.Config.Cmd.join(" "):"Null"))])]),n("div",{staticClass:"item"},[n("span",[t._v(t._s(t.$t("ContainerInfo_ContainerName")))]),n("div",[t._v(t._s(t.item.Config.Entrypoint?t.item.Config.Entrypoint.join(" "):"Null"))])]),n("div",{staticClass:"item"},[n("span",[t._v(t._s(t.$t("ContainerInfo_Env")))]),n("div",{domProps:{innerHTML:t._s(t.itemEnv(t.item.Config.Env))}})]),n("div",{staticClass:"item"},[n("span",[t._v(t._s(t.$t("ContainerInfo_Label")))]),n("div",{domProps:{innerHTML:t._s(t.itemLabels(t.item.Config.Labels))}},[t._v(t._s(t.item.Config.Labels))])]),n("div",{staticClass:"item"},[n("span",[t._v(t._s(t.$t("ContainerInfo_RestartStrategy")))]),n("div",[n("el-form",{staticClass:"demo-form-inline",staticStyle:{"padding-top":"15px","box-sizing":"border-box"},attrs:{inline:!0,size:"small"}},[n("el-form-item",{attrs:{label:""}},[n("el-select",{attrs:{placeholder:t.$t("ContainerInfo_always"),size:"small"},model:{value:t.Restart,callback:function(e){t.Restart=e},expression:"Restart"}},[n("el-option",{attrs:{label:"never",value:"no"}}),n("el-option",{attrs:{label:"always",value:"always"}}),n("el-option",{attrs:{label:"on-failure",value:"on-failure"}}),n("el-option",{attrs:{label:"unless-stopped",value:"unless-stopped"}})],1)],1),n("el-form-item",{directives:[{name:"show",rawName:"v-show",value:"on-failure"===t.Restart,expression:"Restart === 'on-failure'"}],attrs:{label:t.$t("ContainerInfo_Restarttimes")}},[n("el-input",{staticStyle:{width:"200px"},attrs:{type:"Number",placeholder:t.$t("ContainerInfo_Restarttimes")},model:{value:t.RestartNum,callback:function(e){t.RestartNum="string"===typeof e?e.trim():e},expression:"RestartNum"}})],1),n("el-form-item",[n("el-button",{staticStyle:{background:"#067FB5","margin-left":"20px",color:"#fff"},attrs:{size:"small"},on:{click:t.chengeRestartPolicy}},[t._v(t._s(t.$t("ContainerInfo_toupdate")))])],1)],1)],1)])]):t._e()])},Z=[],K={data:function(){return{Restart:"",RestartNum:0}},props:["item"],watch:{item:function(){this.item&&(this.Restart=this.item.HostConfig.RestartPolicy.Name,this.RestartNum=this.item.HostConfig.RestartPolicy.MaximumRetryCount)}},methods:{chengeRestartPolicy:function(){var t=this,e="";e="on-failure"!==this.Restart?'{"RestartPolicy": {"Name":"'.concat(this.Restart,'"}}'):'{"RestartPolicy": {"MaximumRetryCount": '.concat(this.RestartNum,', "Name":"').concat(this.Restart,'"}}');var n='curl --unix-socket /var/run/docker.sock -s -H "Content-Type:application/json" -d \''.concat(e,"' -X POST \"http:/v1.40/containers/").concat(this.item.Id,'/update"');Object(x["a"])({docker:n},(function(e){if(e.message)return t.$message({showClose:!0,message:e.message,type:"error"});t.$message({showClose:!0,message:"重启策略修改成功",type:"success"})}),this)},itemLabels:function(t){var e="";if("{}"!==JSON.stringify(t))for(var n in t)e+=n+" : "+t[n]+"</br>";else e="Null";return e},itemEnv:function(t){return t?t.join("</br>"):"Null"},port:function(t){var e="";for(var n in t.NetworkSettings.Ports)t.NetworkSettings.Ports[n]?e+=t.NetworkSettings.Ports[n][0].HostIp+":"+t.NetworkSettings.Ports[n][0].HostPort+" - "+n+"</br>":e+=n+"</br>";return e}}},Q=K,Y=(n("6403"),Object(B["a"])(Q,G,Z,!1,null,"1ce26177",null)),tt=Y.exports,et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"from"},[n("div",{staticClass:"title"},[t._v(" "+t._s(t.$t("ConNetwork_Networkinterconnection"))+" ")]),n("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,size:"small"}},[n("el-form-item",{staticStyle:{"margin-left":"25px"},attrs:{label:t.$t("ConNetwork_Jointhenetwork")}},[n("el-select",{attrs:{placeholder:t.$t("ConNetwork_Pleaseselectnetwork")},model:{value:t.network,callback:function(e){t.network=e},expression:"network"}},t._l(t.netList,(function(t){return n("el-option",{key:t.Id,attrs:{label:t.Name,value:t.Id}})})),1)],1),n("el-form-item",[n("el-button",{staticStyle:{background:"#067FB5",color:"#fff"},on:{click:t.Submit}},[t._v(t._s(t.$t("ConNetwork_join")))])],1)],1),t.item?n("ConNetTable",{attrs:{conId:t.item.Id,netWorks:t.item.NetworkSettings.Networks},on:{removeSuccess:t.Success}}):t._e()],1)},nt=[],it=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("table",[n("thead",[n("tr",[n("th",[t._v(t._s(t.$t("ConNetTable_network")))]),n("th",[t._v(t._s(t.$t("ConNetTable_IPaddress")))]),n("th",[t._v(t._s(t.$t("ConNetTable_gateway")))]),n("th",[t._v(t._s(t.$t("ConNetTable_MACaddress")))]),n("th",[t._v(t._s(t.$t("ConNetTable_operation")))])])]),n("tbody",t._l(t.netWorks,(function(e,i){return n("tr",{key:e.Id},[n("td",[t._v(t._s(i))]),n("td",[t._v(t._s(e.IPAddress))]),n("td",[t._v(t._s(e.Gateway))]),n("td",[t._v(t._s(e.MacAddress))]),n("td",[n("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(n){return t.removeNet(e.NetworkID)}}},[t._v("离开网络")])],1)])})),0)])])},st=[],ot={props:["netWorks","conId"],methods:{removeNet:function(t){var e=this,n={Container:this.conId,Force:!0},i="curl -w %{http_code} --unix-socket /var/run/docker.sock -s -H Content-Type:application/json -d '".concat(JSON.stringify(n),"' \"http:/v1.40/networks/").concat(t,'/disconnect"');Object(x["a"])({docker:i},(function(t){t>=200&&t<300?(e.$message({showClose:!0,message:"网络移除成功！",type:"success"}),e.$emit("removeSuccess")):e.$message({showClose:!0,message:"网络错误，请稍候重试！",type:"error"})}),this)}}},at=ot,rt=(n("c36a"),Object(B["a"])(at,it,st,!1,null,"b464e646",null)),ct=rt.exports,lt={data:function(){return{netList:null,network:""}},props:["item"],mounted:function(){var t=this,e='curl --unix-socket /var/run/docker.sock -s "http:/v1.40/networks"';Object(x["a"])({docker:e},(function(e){t.netList=e}),this)},methods:{Submit:function(){var t=this,e={Container:this.item.Id},n="curl -w %{http_code} --unix-socket /var/run/docker.sock -s -H Content-Type:application/json -d '".concat(JSON.stringify(e),"' \"http:/v1.40/networks/").concat(this.network,'/connect"');Object(x["a"])({docker:n},(function(e){e>=200&&e<300?(t.$message({showClose:!0,message:"网络连接成功！",type:"success"}),t.Success()):t.$message({showClose:!0,message:"网络错误，请稍候重试！",type:"error"})}),this)},Success:function(){this.$emit("Success")}},components:{ConNetTable:ct}},ut=lt,mt=(n("bbd0"),Object(B["a"])(ut,et,nt,!1,null,"058b644c",null)),dt=mt.exports,ft=n("66b7");y["default"].use(w.a),y["default"].use(S.a),y["default"].use(b.a),y["default"].use(C.a),y["default"].use(p.a),y["default"].use(h.a),y["default"].use(d.a),y["default"].use(u.a),y["default"].use(c.a),y["default"].use(a.a);var ht={data:function(){return{item:null}},mounted:function(){this.fetchItem()},methods:{fetchItem:function(){var t=this,e='curl --unix-socket /var/run/docker.sock -s "http:/v1.40/containers/'.concat(this.$route.params.id,'/json"');Object(x["a"])({docker:e},(function(e){t.item=e}),this)}},components:{ConButton:I["a"],ReButton:j,ContainerState:D,ConImage:V,ContainerInfo:tt,ConNetwork:dt,Back:ft["a"]}},gt=ht,pt=(n("9861"),Object(B["a"])(gt,i,s,!1,null,"7098dde0",null));e["default"]=pt.exports},fc5d:function(t,e,n){},fcef:function(t,e,n){"use strict";var i=n("8ad8"),s=n.n(i);s.a},ff8e:function(t,e,n){}}]);
//# sourceMappingURL=ConContent.463b7e95.js.map