(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d209607"],{a992:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a-card",[e("a-form",{staticClass:"ant-advanced-search-form",attrs:{layout:"inline",form:t.searchForm}},[e("a-form-item",{attrs:{label:"时间范围","validate-status":t.validateStatus,help:t.validateMsg}},[e("a-date-picker",{staticStyle:{"margin-right":"10px"},attrs:{disabledDate:t.disabledStartDate,format:t.dateFormat,placeholder:"选择查询开始时间"},on:{change:t.dateChange},model:{value:t.searchForm.startDate,callback:function(a){t.$set(t.searchForm,"startDate",a)},expression:"searchForm.startDate"}}),e("a-date-picker",{attrs:{disabledDate:t.disabledEndDate,format:t.dateFormat,placeholder:"选择查询结束时间"},on:{change:t.dateChange},model:{value:t.searchForm.endDate,callback:function(a){t.$set(t.searchForm,"endDate",a)},expression:"searchForm.endDate"}})],1),e("a-form-item",{attrs:{label:"查询类型"}},[e("a-select",{staticStyle:{width:"120px"},attrs:{defaultValue:""},on:{change:t.handleChange},model:{value:t.searchForm.type,callback:function(a){t.$set(t.searchForm,"type",a)},expression:"searchForm.type"}},[e("a-select-option",{attrs:{value:""}},[t._v("全部日志")]),e("a-select-option",{attrs:{value:"1001"}},[t._v("登录日志")]),e("a-select-option",{attrs:{value:"1002"}},[t._v("登出日志")]),e("a-select-option",{attrs:{value:"1003"}},[t._v("上传日志")]),e("a-select-option",{attrs:{value:"1004"}},[t._v("下载日志")]),e("a-select-option",{attrs:{value:"1005"}},[t._v("上传审核")]),e("a-select-option",{attrs:{value:"1006"}},[t._v("下载审核")])],1)],1),e("a-form-item",{attrs:{label:"查询手机号"}},[e("a-input",{staticStyle:{width:"90%"},attrs:{placeholder:"请输入操作人手机号"},model:{value:t.searchForm.mobile,callback:function(a){t.$set(t.searchForm,"mobile",a)},expression:"searchForm.mobile"}})],1),e("a-form-item",[e("a-button",{attrs:{type:"primary"},on:{click:t.search}},[t._v("查询")])],1)],1),e("a-table",{attrs:{columns:t.columns,dataSource:t.list,loading:t.loading,rowKey:"id",size:"middle",bordered:"",pagination:t.pagination},on:{change:t.handleTableChange},scopedSlots:t._u([{key:"status",fn:function(a,s){return[e("a-tag",{attrs:{color:s.status>0?"green":"red"}},[t._v(t._s(t.getStatus(s.status)))])]}}])})],1)},r=[],n=e("c1df"),o=e.n(n),i={"0001":"系统功能",1001:"系统登录",1002:"系统退出",1003:"文档上传",1004:"文档下载",1005:"审核上传",1006:"审核下载",1007:"文档查阅"},l={1:"成功","-1":"失败",0:"默认"};e("5c3a");o.a.locale("zh-cn");var c=[{title:"ID",dataIndex:"id"},{title:"事件类型",dataIndex:"event",customRender:function(t,a){return i[a.event]}},{title:"内容",dataIndex:"context"},{title:"操作人",dataIndex:"name"},{title:"日期",dataIndex:"createDate"},{title:"事件状态",dataIndex:"status",scopedSlots:{customRender:"status"}}],d={data:function(){return{columns:c,searchForm:{startDate:o()(this.$store.state.session.date,this.dateFormat).subtract(30,"days"),endDate:o()(this.$store.state.session.date,this.dateFormat),type:"",mobile:""},validateStatus:"",validateMsg:""}},computed:{dateFormat:function(){return this.$store.state.manager.dateFormat},list:function(){return this.$store.state.logs.list},loading:function(){return this.$store.state.logs.loading},pagination:function(){return this.$store.state.logs.pagination}},methods:{getStatus:function(t){return l[t]},moment:o.a,disabledStartDate:function(t){var a=this.searchForm.endDate;return!(!t||!a)&&(t.valueOf()>a.valueOf()||a.diff(t,"days")>this.$store.state.app.dateRange)},disabledEndDate:function(t){var a=this.searchForm.startDate;return!(!t||!a)&&(a.valueOf()>t.valueOf()||t.diff(a,"days")>this.$store.state.app.dateRange)},handleTableChange:function(t){this.$store.commit("logs/setPagination",t),this.$store.dispatch("logs/list",this.searchForm)},dateChange:function(){null===this.searchForm.startDate||null===this.searchForm.endDate?(this.validateStatus="error",this.validateMsg="查询的时间范围是必选项"):(this.validateStatus="",this.validateMsg="")},handleChange:function(t){console.log("selected"+t)},search:function(){null!=this.searchForm.startDate&&null!=this.searchForm.endDate?this.$store.dispatch("logs/list",this.searchForm):this.$message.error("请选择查询时间范围，并且开始时间、结束时间在45天之内。",2)}}},u=d,h=e("2877"),m=Object(h["a"])(u,s,r,!1,null,null,null);a["default"]=m.exports}}]);
//# sourceMappingURL=chunk-2d209607.de24827d.js.map