(function(t){function e(e){for(var o,s,r=e[0],c=e[1],l=e[2],d=0,p=[];d<r.length;d++)s=r[d],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&p.push(n[s][0]),n[s]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);u&&u(e);while(p.length)p.shift()();return a.push.apply(a,l||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],o=!0,s=1;s<i.length;s++){var c=i[s];0!==n[c]&&(o=!1)}o&&(a.splice(e--,1),t=r(r.s=i[0]))}return t}var o={},n={app:0},a=[];function s(t){return r.p+"static/js/"+({about:"about"}[t]||t)+"."+{about:"bee6aa4b","chunk-5e0efebc":"00a73a65","chunk-8b0d9b3a":"17ad57ec"}[t]+".js"}function r(e){if(o[e])return o[e].exports;var i=o[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.e=function(t){var e=[],i=n[t];if(0!==i)if(i)e.push(i[2]);else{var o=new Promise((function(e,o){i=n[t]=[e,o]}));e.push(i[2]=o);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,r.nc&&c.setAttribute("nonce",r.nc),c.src=s(t);var l=new Error;a=function(e){c.onerror=c.onload=null,clearTimeout(d);var i=n[t];if(0!==i){if(i){var o=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",l.name="ChunkLoadError",l.type=o,l.request=a,i[1](l)}n[t]=void 0}};var d=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(e)},r.m=t,r.c=o,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(i,o,function(e){return t[e]}.bind(null,o));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var u=l;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"0368":function(t,e,i){var o=i("8cb3");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=i("499e").default;n("9edafdac",o,!0,{sourceMap:!1,shadowMode:!1})},"0f13":function(t,e,i){var o={"./HelloWorld.vue":["fdab","chunk-8b0d9b3a"],"./calculator.vue":["13c4","chunk-5e0efebc"]};function n(t){if(!i.o(o,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=o[t],n=e[0];return i.e(e[1]).then((function(){return i(n)}))}n.keys=function(){return Object.keys(o)},n.id="0f13",t.exports=n},2919:function(t,e,i){t.exports=i.p+"static/img/safari.0961b7e3.png"},"405c":function(t,e,i){t.exports=i.p+"static/img/doc.54eb6ec9.png"},"457e":function(t,e,i){var o=i("24fb");e=o(!1),e.push([t.i,".context-menu-section{position:absolute}.context-menu{margin:0;padding:0;border-radius:4px}.context-menu ul{background:hsla(0,0%,100%,.8);width:100%;padding:5px 0;list-style:none}.context-menu ul .list-item{cursor:default;color:#333;padding:0 10px}.context-menu ul .list-item:hover{background:#4b8de4;color:#fff}.context-menu ul .list-item:hover .sublist{display:block}.context-menu ul .list-item.disabled{color:#999}.context-menu ul .divide{border-top:1px solid #ccc;margin:5px}.context-menu li>.sublist{position:absolute;left:150px;list-style:none}.context-menu li>.sublist .list-item{padding:0 10px}",""]),t.exports=e},"4d0b":function(t,e,i){var o=i("f568");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=i("499e").default;n("082b9252",o,!0,{sourceMap:!1,shadowMode:!1})},5314:function(t,e,i){"use strict";var o=i("c973"),n=i.n(o);n.a},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var o=i("a026"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"monitor"}},[i("router-view")],1)},a=[],s=(i("cd4d"),i("da16"),{name:"monitor",created:function(){}}),r=s,c=i("2877"),l=Object(c["a"])(r,n,a,!1,null,null,null),d=l.exports,u=(i("d3b7"),i("8c4f")),p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"desktop"},[i("wallpaper"),i("icon-grid"),i("taskbar"),i("application"),i("ContextMenu")],1)},f=[],h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"application-section scope"},t._l(t.apps,(function(t){return i("window",{key:t.id,attrs:{setting:t}})})),1)},m=[],g=(i("4160"),i("159b"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"show",rawName:"v-show",value:!t.setting.hidden,expression:"!setting.hidden"}],staticClass:"window",class:{focus:t.setting.focus,animating:this.animating,maximized:this.maximized},style:{top:t.position.y+"px",left:t.position.x+"px",width:t.width+"px",height:t.height+"px"},on:{mousedown:function(e){return t.onFocus(t.setting.id)}}},[i("header",{staticClass:"window-title",on:{mousedown:function(e){return e.target!==e.currentTarget?null:t.onMousedown(e)}}},[i("div",{staticClass:"icon",class:t.setting.icon}),t._v(" "+t._s(t.setting.title)+" "),i("div",{staticClass:"window-control"},[i("span",{staticClass:"button min",on:{mousedown:function(e){return t.onMin(t.setting.id)}}}),i("span",{staticClass:"button max",on:{mousedown:function(e){return t.onMax()}}}),i("span",{staticClass:"button close",on:{mousedown:function(e){return t.onClose(t.setting.id)}}})])]),i("div",{staticClass:"window-body"},[i("keep-alive",[i(t.subComponent,{tag:"component",attrs:{window:t.window},on:{"update:window":function(e){t.window=e}}})],1)],1),i("div",{directives:[{name:"show",rawName:"v-show",value:t.overlayShow,expression:"overlayShow"}],staticClass:"resize-overlay"}),t._l(t.resizeSide,(function(e,o){return i("div",{directives:[{name:"show",rawName:"v-show",value:t.resizable,expression:"resizable"}],key:o,staticClass:"resize-side",class:e,on:{mousedown:function(i){return t.onResize(e)}}})}))],2)}),b=[],w=(i("c975"),{name:"Window",props:{setting:Object},data:function(){return{subComponent:{},timer:{},drag:!1,resize:!1,width:200,height:400,maximized:!1,animating:!1,resizable:!0,position:{x:0,y:0},oldposition:{},overlayShow:!1,resizeSide:["side-top","side-bottom","side-left","side-right","angle-top-left","angle-top-right","angle-bottom-left","angle-bottom-right"]}},computed:{window:function(){return{width:this.width,height:this.height}}},created:function(){var t=this,e=document.body.clientWidth,o=document.body.clientHeight;this.width=this.setting.width>0?this.setting.width:e/2,this.height=this.setting.height>0?this.setting.height:e/3,this.position.x=e/2-this.width/2,this.position.y=(o-this.height)/2,this.subComponent=function(){return i("0f13")("./"+t.setting.page+".vue")}},methods:{onFocus:function(t){this.$store.commit("manager/focusApplication",t),this.$store.commit("manager/selectIcon","")},onClose:function(t){this.$store.dispatch("manager/closeTask",t)},onMin:function(t){this.$store.dispatch("manager/showOrhidden",t)},onMax:function(){var t=this;this.maximized&&this.oldPosition?(this.animating=!0,this.resizable=!0,clearTimeout(this.timer),this.timer=setTimeout((function(){t.maximized=!1,t.position.y=t.oldPosition.y,t.position.x=t.oldPosition.x,t.height=t.oldPosition.height,t.width=t.oldPosition.width,t.oldPosition=null,clearTimeout(t.timer),t.timer=setTimeout((function(){t.animating=!1}),500)}))):(this.animating=!0,this.resizable=!1,clearTimeout(this.timer),this.timer=setTimeout((function(){t.maximized=!0,t.oldPosition={y:t.position.y,x:t.position.x,height:t.height,width:t.width},t.position.y=0,t.position.x=0,t.height=.95*document.body.clientHeight,t.width=document.body.clientWidth,clearTimeout(t.timer),t.timer=setTimeout((function(){t.animating=!1}),500)})))},onResize:function(t){var e=this;this.resize=!0,this.overlayShow=!0,document.onmousemove=function(i){if(e.resize){var o=i.clientX,n=i.clientY,a=document.body.clientWidth,s=.95*document.body.clientHeight;o=o>=0?o>=a?a:o:0,n=n>=0?n>=s?s:n:0,t.indexOf("top")>=0&&(e.height=e.height+(e.position.y-n),e.position.y=n),t.indexOf("left")>=0&&(e.width=e.width+(e.position.x-o),e.position.x=o),t.indexOf("bottom")>=0&&(e.height=e.height+(n-(e.position.y+e.height))),t.indexOf("right")>=0&&(e.width=e.width+(o-(e.position.x+e.width)))}},document.onmouseup=function(){e.resize=!1,e.overlayShow=!1}},onMousedown:function(t){var e=this,i=t.clientX-this.position.x,o=t.clientY-this.position.y;this.maximized||(this.drag=!0,document.onmousemove=function(t){if(e.drag){var n=document.body.clientWidth,a=.95*document.body.clientHeight;e.position.x=t.clientX-i,e.position.y=t.clientY-o,e.position.x=e.position.x<=0?0:e.position.x+e.width>=n?n-e.width:e.position.x,e.position.y=e.position.y<=0?0:e.position.y+e.height>=a?a-e.height:e.position.y}},document.onmouseup=function(){e.drag=!1})}}}),x=w,v=(i("deec"),Object(c["a"])(x,g,b,!1,null,null,null)),k=v.exports,y={name:"Applications",components:{Window:k},data:function(){return{setting:{}}},computed:{apps:function(){var t=[],e=null;return this.$store.state.manager.tasklist.forEach((function(i){null==i||i.focus||t.push(i),i.focus&&(e=i)})),null!=e&&t.push(e),t}},methods:{}},z=y,C=Object(c["a"])(z,h,m,!1,null,null,null),_=C.exports,M=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wallpaper-section"},[i("div",{staticClass:"wallpaper-section",on:{mousedown:function(e){return t.onMousedown(e)}}}),i("div",{staticClass:"mouse-action-section"},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.selection.startSelection,expression:"selection.startSelection"}],staticClass:"selection-section"})])])},O=[],$={name:"wallpaper",data:function(){return{selection:{startSelection:!1,startPosition:{},currentPosition:{},topLeft:null,bottomRight:null}}},methods:{onMousedown:function(t){this.$store.commit("manager/selectIcon",""),t&&t.preventDefault()}},ready:function(){}},j=$,T=(i("d19e"),Object(c["a"])(j,M,O,!1,null,null,null)),A=T.exports,E=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"taskbar-section scope"},[i("div",{staticClass:"dog-start"},[i("div",{staticClass:"dog-icons",on:{click:t.onStart}},[t._m(0)])]),i("div",{staticClass:"task-list"},t._l(t.tasklist,(function(e){return i("div",{key:e.id,staticClass:"task-item",class:{actived:e.focus},style:{width:t.itemWidth+"px"},on:{click:function(i){return t.onClick(e.id)}}},[i("span",{staticClass:"icon",class:e.icon}),t._v(" "+t._s(e.title)+" ")])})),0),i("transition",{attrs:{name:"zoom","enter-active-class":"animate zoomIn","leave-active-class":"animated zoomOut"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.showmenu,expression:"showmenu"}],staticClass:"dog-menu"},[i("div",{staticClass:"dog-menu-list"},[i("ul",[i("li",[t._v("列表")]),t._l(t.applications,(function(e){return i("li",{key:e.id},[i("a",{attrs:{href:"#"},on:{click:function(i){return t.openApplication(e.id)}}},[i("div",{staticClass:"icon",class:e.icon}),t._v(t._s(e.name))])])}))],2)]),i("div",{staticClass:"dog-menu-links"},[i("ul",[i("li",[i("a",{attrs:{href:"#"}},[i("span",[t._v("Documentsspan>")])])]),i("li",[i("a",{attrs:{href:"#"}},[i("span",[t._v("Documentsspan>")])])])])])])])],1)},S=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a",{attrs:{href:"#"}},[i("i",{staticClass:"fa fa-magic"})])}],P={name:"Taskbar",data:function(){return{}},computed:{applications:function(){return this.$store.state.manager.applications},tasklist:function(){var t=[];return this.$store.state.manager.tasklist.forEach((function(e){null!=e&&t.push(e)})),t},itemWidth:function(){if(this.$store.state.manager.tasklist.length<5)return 100;var t=.95*document.body.clientWidth;return Math.floor(t/this.$store.state.manager.tasklist.length)},showmenu:function(){return this.$store.state.manager.startMenu}},methods:{openApplication:function(t){this.$store.dispatch("manager/openTask",t),this.$store.commit("manager/selectIcon","")},onClick:function(t){this.$store.dispatch("manager/focusTask",t)},onStart:function(){this.$store.commit("manager/openStartMenu")}}},I=P,D=(i("6143"),Object(c["a"])(I,E,S,!1,null,null,null)),W=D.exports,H=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"icon-section"},t._l(t.icons,(function(e,o){return i("appIcon",{key:e.id,attrs:{item:e,grid:t.grid,cell:t.cell,order:o}})})),1)},N=[],X=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"icon-item",class:{selected:t.item.selected},style:{height:this.cell.height+"px",width:this.cell.width+"px",top:this.position.y+"px",left:this.position.x+"px"},on:{mousedown:function(e){return t.onMousedown(e)},contextmenu:function(e){return t.onContextmenu(e)}}},[i("div",{staticClass:"icon-body",attrs:{draggable:"true"},on:{click:function(e){return t.onClick()},dblclick:function(e){return t.onDblclick()},dragstart:function(e){return t.onDragstart()},dragend:function(e){return t.onDragend()}}},[i("div",{staticClass:"icon",class:t.item.icon}),i("div",{staticClass:"text"},[t._v(t._s(t.item.name))])])])},L=[],F=(i("a9e3"),{name:"Icon",props:{item:Object,grid:Object,cell:Object,order:Number},data:function(){return{position:{x:0,y:0},dragging:!1}},created:function(){this.position.x=Math.floor(this.order/this.grid.row)*this.cell.width,this.position.y=Math.floor(this.order%this.grid.row)*this.cell.height},methods:{onMousedown:function(t){console.log("onMousedown==========>"+t)},onContextmenu:function(t){console.log("onContextmenu==========>"+t)},onClick:function(){this.$store.dispatch("manager/selectIcon",this.item.id)},onDblclick:function(){this.$store.dispatch("manager/openTask",this.item.id)},onDragstart:function(){},onDragend:function(){}}}),Y=F,R=(i("5ca3"),Object(c["a"])(Y,X,L,!1,null,null,null)),G=R.exports,J={name:"IconGrid",components:{appIcon:G},data:function(){return{grid:{row:0,col:0},cell:{height:130,width:130}}},created:function(){var t=document.body.clientWidth,e=.9*document.body.clientHeight;this.grid.row=Math.ceil(e/this.cell.height),this.grid.col=Math.ceil(t/this.cell.width)},computed:{icons:function(){return this.$store.state.manager.applications}},methods:{}},K=J,U=Object(c["a"])(K,H,N,!1,null,null,null),q=U.exports,B=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"context-menu-section",style:{top:t.y+"px",left:t.x+"px"}},[i("div",{staticClass:"context-menu"},[i("ul",t._l(t.data.list,(function(e){return i("li",{key:e.id,class:{disabled:e.disabled,divide:"divide"==e.type,"list-item":"divide"!==e.type},on:{click:function(i){return t.onClick(e)}}},[t._v(" "+t._s(e.text)+" "),t._m(0,!0)])})),0)])])},Q=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"sublist"},[i("li",{staticClass:"list-item"},[t._v("100001")]),i("li",{staticClass:"list-item"},[t._v("100002")])])}],V={name:"ContextMenu",data:function(){return{data:{position:{x:0,y:0},list:[{id:"1",text:"6666666",type:"copy",disabled:!1,callback:function(){}},{type:"divide"},{id:"2",text:"222",type:"copy",disabled:!1,callback:function(){}},{id:"3",text:"222",type:"copy",disabled:!1,callback:function(){}}]}}},beforeCreate:function(){},components:{},methods:{onClick:function(){}}},Z=V,tt=(i("5314"),Object(c["a"])(Z,B,Q,!1,null,null,null)),et=tt.exports,it={name:"Desktop",beforeCreate:function(){this.$store.commit("manager/init")},components:{Application:_,Wallpaper:A,Taskbar:W,IconGrid:q,ContextMenu:et},methods:{clean:function(){this.$store.commit("manager/selectIcon","")}}},ot=it,nt=Object(c["a"])(ot,p,f,!1,null,null,null),at=nt.exports;o["a"].use(u["a"]);var st=[{path:"/",name:"Desktop",component:at},{path:"/lockScreen",name:"LockScreen",component:function(){return i.e("about").then(i.bind(null,"5459"))}}],rt=new u["a"]({routes:st}),ct=rt,lt=i("2f62"),dt=(i("4de4"),i("a434"),i("b0c0"),{MAXTASK:50,titleHeight:30,taskHeight:40,application:[{id:"0001",name:"第一",page:"HelloWorld",icon:"firefox"},{id:"0002",name:"简易计算器",page:"calculator",width:400,height:400,icon:"chrome"},{id:"0003",name:"第三",icon:"chrome"},{id:"0004",name:"第4",icon:"safari"},{id:"0005",name:"第5",icon:"chrome"},{id:"0006",name:"第6",icon:"safari"},{id:"0007",name:"第7",icon:"chrome"},{id:"0008",name:"第8",icon:"safari"},{id:"0009",name:"第9",icon:"chrome"},{id:"0010",name:"第10",icon:"chrome"}]}),ut=dt;i("b64b");function pt(t){return!(!t&&"undefined"!=typeof t&&0!=t)&&("undefined"!=typeof t&&0===Object.keys(t).length)}function ft(t){return""===t||null===t}var ht={namespaced:!0,state:{startMenu:!1,applications:[],tasklist:[]},mutations:{init:function(t){ut.application.forEach((function(e){var i={};i.id=e.id,i.name=e.name,i.icon=e.icon,i.width=e.width>0?e.width:0,i.height=e.height>0?e.height:0,i.page=e.page,i.selected=!1,t.applications.push(i)}))},selectIcon:function(t,e){t.applications.forEach((function(t){e==t.id?t.selected=!0:t.selected=!1})),t.startMenu&&(t.startMenu=!1)},getTask:function(t,e){t.tasklist.forEach((function(t){if(t.id==e)return t}))},focusApplication:function(t,e){var i=!1,o=-1;t.tasklist.forEach((function(t,n){ft(e)||t.id!=e||t.hidden?t.focus=!1:(t.focus=!0,i=!0),t.hidden||(o=n)})),!i&&o>=0&&t.tasklist.length>=1&&(t.tasklist[o].focus=!0)},openApplication:function(t,e){var i=t.tasklist.filter((function(t){return t.id==e}));if(pt(i)&&t.tasklist.length<=ut.MAXTASK){var o=t.applications.filter((function(t){return t.id==e}))[0],n={};n.id=o.id,n.width=o.width,n.height=o.height,n.title=o.name,n.icon=o.icon,n.page=pt(o.page)?"":o.page,n.hidden=!1,n.focus=!0,t.tasklist.push(n)}},showOrhiddenApplication:function(t,e){t.tasklist.forEach((function(t){t.id==e&&(0==t.hidden&&t.focus?t.hidden=!0:t.hidden=!1)}))},closeApplication:function(t,e){t.tasklist.forEach((function(i,o){i.id==e&&t.tasklist.splice(o,1)}))},openStartMenu:function(t){t.startMenu=!t.startMenu}},actions:{focusTask:function(t,e){var i=t.commit;i("showOrhiddenApplication",e),i("focusApplication",e)},showOrhidden:function(t,e){var i=t.commit;i("showOrhiddenApplication",e),i("focusApplication","")},selectIcon:function(t,e){var i=t.commit;i("selectIcon",e)},openTask:function(t,e){var i=t.commit;i("openApplication",e),i("focusApplication",e)},closeTask:function(t,e){var i=t.commit;i("closeApplication",e),i("focusApplication","")}}};o["a"].use(lt["a"]);var mt=new lt["a"].Store({modules:{manager:ht}}),gt=i("77ed"),bt=i.n(gt);o["a"].config.productionTip=!1,o["a"].use(bt.a),new o["a"]({router:ct,store:mt,render:function(t){return t(d)}}).$mount("#monitor")},"5ca3":function(t,e,i){"use strict";var o=i("a873"),n=i.n(o);n.a},6143:function(t,e,i){"use strict";var o=i("0368"),n=i.n(o);n.a},"64be":function(t,e,i){var o=i("c1e3");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=i("499e").default;n("137cf438",o,!0,{sourceMap:!1,shadowMode:!1})},"659c":function(t,e,i){t.exports=i.p+"static/img/firefox.f8d88900.png"},8033:function(t,e,i){var o=i("24fb"),n=i("1de5"),a=i("405c"),s=i("659c"),r=i("ba00"),c=i("2919");e=o(!1);var l=n(a),d=n(s),u=n(r),p=n(c);e.push([t.i,".icon{background-image:url("+l+");background-position:50%;background-repeat:no-repeat}.icon.firefox{background-image:url("+d+")}.icon.chrome{background-image:url("+u+")}.icon.safari{background-image:url("+p+")}",""]),t.exports=e},"8cb3":function(t,e,i){var o=i("24fb");e=o(!1),e.push([t.i,'.fade-enter-active,.fade-leave-active{transition:opacity .2s}.fade-enter,.fade-leave-active{opacity:0}.dog-start{width:8%;margin:0 auto;float:left;height:40px}.taskbar-section{width:100%;height:40px;background:#f9f9f9;position:absolute;bottom:0;top:auto!important;left:0;box-shadow:0 10px 25px rgba(0,0,0,.4)}.task-list{width:92%;float:right;overflow:hidden;border-left:2px double #333;height:40px;cursor:default}.task-list .task-item{float:left;height:40px;min-width:50px;padding:0 20px 0 15px;text-align:center;line-height:40px;font-size:14px;border-right:1px solid #e9e9e9;color:#aaa;-webkit-filter:saturate(.2);-moz-filter:saturate(.2);-o-filter:saturate(.2);-ms-filter:saturate(.2)}.task-list .task-item.actived{color:#111;background:#fff;-webkit-filter:saturate(1);-moz-filter:saturate(1);-o-filter:saturate(1);-ms-filter:saturate(1)}.task-list .task-item .icon{display:inline-block;width:25px;height:25px;margin-right:5px;background-size:cover;vertical-align:top;position:relative;top:7px}.dog-icons{padding:0;list-style:none;margin:1em;display:inline-block;margin:.15em;position:relative;font-size:1.2em}.dog-icons i{color:#fff;position:absolute;top:10px;left:10px;transition:all 265ms ease-out}.dog-icons a{display:inline-block}.dog-icons a:before{transform:scale(1);-ms-transform:scale(1);-webkit-transform:scale(1);content:" ";width:40px;height:40px;border-radius:100%;display:block;background:linear-gradient(45deg,#1da1f2,#c648c8);transition:all 265ms ease-out}.dog-icons a:hover:before{transform:scale(0);transition:all 265ms ease-in}.dog-icons a:hover i{transform:scale(2.2);-ms-transform:scale(2.2);-webkit-transform:scale(2.2);color:#1da1f2;background:-webkit-linear-gradient(45deg,#1da1f2,#c648c8);-webkit-background-clip:text;-webkit-text-fill-color:transparent;transition:all 265ms ease-in}.fa-magic:before{content:"狼"}.fa{font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.dog-menu,.fa{display:inline-block}.dog-menu{bottom:40px;left:0;border:1px solid #102a3e;overflow:visible;min-width:400px;-moz-border-radius:5px;-webkit-border-radius:5px;position:fixed;box-shadow:inset 0 0 1px #fff;-moz-box-shadow:inset 0 0 1px #fff;-webkit-box-shadow:inset 0 0 1px #fff;opacity:.9;background-color:#619bb9;background:-moz-linear-gradient(top,rgba(50,123,165,.75),rgba(46,75,90,.75) 50%,rgba(92,176,220,.75));background:-webkit-gradient(linear,center top,center bottom,from(#327aa4),color-stop(45%,#2e4b5a),to(#5cb0dc))}.dog-menu ul{list-style:none}.dog-menu .icon{display:inline-block;height:18px;width:18px;background-size:cover}.dog-menu-list{width:50%;float:left;background:#fff;border:1px solid #365167;margin:7px 0 7px 7px;box-shadow:0 0 1px #fff;-moz-box-shadow:0 0 1px #fff;-webkit-box-shadow:0 0 1px #fff;-moz-border-radius:3px;-webkit-border-radius:3px;min-height:400px}.dog-menu-list a{border:1px solid transparent;display:block;padding:3px;margin:3px;color:#4b4b4b;text-align:left;text-decoration:none}.dog-menu-list a:hover{border:1px solid #7da2ce;-moz-border-radius:3px;-webkit-border-radius:3px;box-shadow:inset 0 0 1px #fff;-moz-box-shadow:inset 0 0 1px #fff;-webkit-box-shadow:inset 0 0 1px #fff;background-color:#cfe3fd;background:-moz-linear-gradient(top,#dcebfd,#c2dcfd);background:-webkit-gradient(linear,center top,center bottom,from(#dcebfd),to(#c2dcfd))}.dog-menu-list a img{border:0;vertical-align:middle;margin:0 5px 0 0}.dog-menu-links{width:40%;float:left;margin:7px}.dog-menu-links li.icon{text-align:center}.dog-menu-links a{border:1px solid transparent;display:block;margin:5px 0;position:relative;color:#fff;text-decoration:none;min-width:120px}.dog-menu-links a:hover{border:1px solid #000;-moz-border-radius:3px;-webkit-border-radius:3px;box-shadow:0 0 1px #fff;-moz-box-shadow:inset 0 0 1px #fff;-webkit-box-shadow:inset 0 0 1px #fff;background-color:#658da0;background:-moz-linear-gradient(center left,rgba(81,115,132,.55),rgba(121,163,184,.55) 50%,rgba(81,115,132,.55));background:-webkit-gradient(linear,0 100%,100% 100%,from(#517384),color-stop(50%,#79a3b8),to(#517384))}.dog-menu-links a span{padding:5px;display:block}.dog-menu-links a:hover span{background:-moz-linear-gradient(center top,transparent,transparent 49%,rgba(2,37,58,.5) 50%,rgba(63,111,135,.5));background:-webkit-gradient(linear,center top,center bottom,from(transparent),color-stop(49%,transparent),color-stop(50%,rgba(2,37,58,.5)),to(rgba(63,111,135,.5)))}',""]),t.exports=e},9789:function(t,e,i){var o=i("24fb");e=o(!1),e.push([t.i,"*{margin:0;padding:0;border:none;box-sizing:border-box;-webkit-user-select:none}body,html{overflow:hidden}#monitor,body,html{height:100%;width:100%}#monitor{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-align:center;color:#2c3e50;position:relative}#monitor .scope{position:absolute;top:0;left:0;width:100%}.desktop{height:100%;width:100%;position:relative}.desktop .scope{position:absolute;top:0;left:0;width:100%}input[type=text]{border:1px solid;cursor:text;-webkit-user-select:initial}",""]),t.exports=e},a873:function(t,e,i){var o=i("bd25");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=i("499e").default;n("1761cd04",o,!0,{sourceMap:!1,shadowMode:!1})},ba00:function(t,e,i){t.exports=i.p+"static/img/chrome.ee5c7a60.png"},bd25:function(t,e,i){var o=i("24fb");e=o(!1),e.push([t.i,".icon-item{position:absolute}.icon-item.selected .icon-body{background:rgba(0,134,255,.27)}.icon-item.dragging{opacity:.6}.icon-item .icon-body{border-radius:4px;position:absolute;top:50%;left:50%;transform:translateX(-50%) translateY(-50%);width:90px}.icon-item .icon-body .icon{height:80px;width:100%;margin:0 auto;background-size:64px}.icon-item .icon-body .text{min-height:20px;line-height:20px;text-align:center;overflow:hidden;word-wrap:break-word;word-break:break-all;text-overflow:ellipsis;padding-bottom:5px}",""]),t.exports=e},c1e3:function(t,e,i){var o=i("24fb");e=o(!1),e.push([t.i,'.fade-enter-active,.fade-leave-active{transition:opacity .2s}.fade-enter,.fade-leave-active{opacity:0}.window{position:absolute;background:#fff;border-radius:5px;overflow:hidden;box-shadow:0 10px 25px rgba(0,0,0,.4)}.window.animating{transition:all .5s ease}.window .window-title{position:relative;background:#f2f6ff;text-align:center;line-height:30px;height:30px;cursor:default;color:#aaa;-webkit-filter:saturate(.5);-moz-filter:saturate(.5);-o-filter:saturate(.5);-ms-filter:saturate(.5)}.window .window-title .icon{position:absolute;top:4px;left:5px;height:18px;width:18px;background-size:cover}.window.focus{box-shadow:0 10px 35px rgba(0,0,0,.6)}.window.focus .window-title{background:#f5f8ff;color:#333;-webkit-filter:saturate(1.2);-moz-filter:saturate(1.2);-o-filter:saturate(1.2);-ms-filter:saturate(1.2)}.window.maximized .window-control .button.max:before{left:4px;top:8px}.window.maximized .window-control .button.max:after,.window.maximized .window-control .button.max:before{box-sizing:border-box;content:"";display:block;position:absolute;height:8px;width:8px;border:1px solid #fff;border-top-width:2px}.window.maximized .window-control .button.max:after{left:8px;top:4px}.window .window-control{position:absolute;right:0;top:0;height:30px}.window .window-control .button{display:block;position:relative;width:20px;height:20px;margin:5px 5px 0 0;float:left;border-radius:3px}.window .window-control .min{background:#81c2d0}.window .window-control .min:before{box-sizing:border-box;content:"";display:block;position:absolute;height:2px;width:12px;left:4px;bottom:5px;background:#fff}.window .window-control .max{background:#659a65}.window .window-control .max:before{box-sizing:border-box;content:"";display:block;position:absolute;height:12px;width:12px;left:4px;top:4px;border:1px solid #fff;border-top-width:2px}.window .window-control .close{background:#d26262}.window .window-control .close:after,.window .window-control .close:before{content:"";display:block;position:absolute;height:2px;width:14px;left:3px;top:9px;background:#fff;transform:rotate(45deg);-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg)}.window .window-control .close:after{transform:rotate(-45deg);-webkit-transform:rotate(-45deg);-moz-transform:rotate(-45deg)}.window .resize-side{position:absolute}.window .resize-overlay{position:absolute;top:0;left:0;height:100%;width:100%}.window .side-right{right:0;bottom:0;height:100%;width:4px;cursor:e-resize}.window .side-bottom{right:0;bottom:0;width:100%;height:4px;cursor:s-resize}.window .side-left{left:0;top:0;height:100%;width:4px;cursor:w-resize}.window .side-top{left:0;top:0;width:100%;height:4px;cursor:n-resize}.window .angle-bottom-right{right:0;bottom:0;width:8px;height:8px;cursor:se-resize}.window .angle-bottom-left{left:0;bottom:0;width:8px;height:8px;cursor:sw-resize}.window .angle-top-right{top:0;right:0;width:8px;height:8px;cursor:ne-resize}.window .angle-top-left{top:0;left:0;width:8px;height:8px;cursor:nw-resize}',""]),t.exports=e},c973:function(t,e,i){var o=i("457e");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=i("499e").default;n("05c1d050",o,!0,{sourceMap:!1,shadowMode:!1})},cd4d:function(t,e,i){var o=i("9789");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=i("499e").default;n("75243308",o,!0,{sourceMap:!1,shadowMode:!1})},d19e:function(t,e,i){"use strict";var o=i("4d0b"),n=i.n(o);n.a},da16:function(t,e,i){var o=i("8033");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=i("499e").default;n("dc739fc4",o,!0,{sourceMap:!1,shadowMode:!1})},deec:function(t,e,i){"use strict";var o=i("64be"),n=i.n(o);n.a},f568:function(t,e,i){var o=i("24fb"),n=i("1de5"),a=i("f69a");e=o(!1);var s=n(a);e.push([t.i,".wallpaper-section{height:100%;background:url("+s+");background-size:cover}",""]),t.exports=e},f69a:function(t,e,i){t.exports=i.p+"static/img/wall.9376583b.jpg"}});
//# sourceMappingURL=app.459a292c.js.map