webpackJsonp([44],{1123:function(n,t,e){var i=e(1124);"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);e(18)("02ea8202",i,!1)},1124:function(n,t,e){t=n.exports=e(17)(void 0),t.push([n.i,'\n.margin-top-8 {\n  margin-top: 8px;\n}\n.margin-top-10 {\n  margin-top: 10px;\n}\n.margin-top-20 {\n  margin-top: 20px;\n}\n.margin-left-10 {\n  margin-left: 10px;\n}\n.margin-left-50 {\n  margin-left: 50px;\n}\n.margin-bottom-10 {\n  margin-bottom: 10px;\n}\n.margin-bottom-100 {\n  margin-bottom: 100px;\n}\n.margin-right-10 {\n  margin-right: 10px;\n}\n.margin-right-20 {\n  margin-right: 20px;\n}\n.padding-bottom-10 {\n  padding-bottom: 10px;\n}\n.padding-left-6 {\n  padding-left: 6px;\n}\n.padding-left-8 {\n  padding-left: 5px;\n}\n.padding-left-10 {\n  padding-left: 10px;\n}\n.padding-left-20 {\n  padding-left: 20px;\n}\n.height-100 {\n  height: 100%;\n}\n.height-120px {\n  height: 100px;\n}\n.height-200px {\n  height: 200px;\n}\n.height-492px {\n  height: 492px;\n}\n.height-460px {\n  height: 460px;\n}\n.line-gray {\n  height: 0;\n  border-bottom: 2px solid #dcdcdc;\n}\n.notwrap {\n  word-break: keep-all;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.padding-left-5 {\n  padding-left: 10px;\n}\n[v-cloak] {\n  display: none;\n}\n.clearfix:after {\n  content: ".";\n  clear: both;\n  display: block;\n  height: 0;\n  overflow: hidden;\n  visibility: hidden;\n}\n.clearfix {\n  zoom: 1;\n}\n.fl {\n  float: left;\n}\n.fr {\n  float: right;\n}\n.file {\n  position: relative;\n  display: inline-block;\n  background: #D0EEFF;\n  border: 1px solid #99D3F5;\n  border-radius: 4px;\n  padding: 4px 12px;\n  overflow: hidden;\n  color: #1E88C7;\n  text-decoration: none;\n  text-indent: 0;\n  line-height: 20px;\n}\n.file input {\n  position: absolute;\n  font-size: 100px;\n  right: 0;\n  top: 0;\n  opacity: 0;\n}\n.file:hover {\n  background: #AADFFD;\n  border-color: #78C3F3;\n  color: #004974;\n  text-decoration: none;\n}\n.my-upload div table tr {\n  font-size: 12px;\n}\n.greyCol {\n  color: #999;\n}\n.expand-row {\n  margin-bottom: 16px;\n  margin-top: 16px;\n  font-size: 12px;\n}\ntextarea.ivu-input {\n  font-size: 12px;\n}\n.soltTitlel {\n  line-height: 2;\n  padding: 0 16px;\n  margin-left: -16px;\n  margin-right: -19px;\n  font-weight: 900;\n  color: #464c5b;\n}\n',""])},1125:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("Row",[e("Col",{attrs:{span:"24"}},[e("Card",[e("Row",{staticClass:"clearfix"},[e("Col",{attrs:{span:"12"}},[e("Input",{staticStyle:{width:"300px",float:"left"},attrs:{icon:"ios-search",placeholder:"到货验收单号/订单编号/订单名称"},on:{input:n.handleSearch},model:{value:n.searchValue,callback:function(t){n.searchValue=t},expression:"searchValue"}})],1),n._v(" "),e("Col",{attrs:{span:"12"}},[e("Button",{staticClass:"fr",attrs:{type:"primary"},on:{click:n.newArrival}},[e("Icon",{attrs:{type:"plus"}}),n._v("  新建")],1)],1)],1),n._v(" "),e("Row",{staticClass:"margin-top-10 searchable-table-con1 clearfix"},[e("Table",{staticStyle:{width:"100%",float:"left"},attrs:{stripe:"",size:"small",columns:n.columns,data:n.initTable,loading:n.loadingMorn},on:{"on-sort-change":n.sort}}),n._v(" "),e("Page",{staticClass:"fr margin-top-10",attrs:{total:n.totalCount,size:"small","show-elevator":"","show-sizer":""},on:{"on-change":n.onChangePage,"on-page-size-change":n.onPageSize}})],1)],1)],1)],1)],1)},a=[];i._withStripped=!0;var r={render:i,staticRenderFns:a};t.default=r},297:function(n,t,e){"use strict";function i(n){c||e(1123)}Object.defineProperty(t,"__esModule",{value:!0});var a=e(585),r=e.n(a);for(var o in a)"default"!==o&&function(n){e.d(t,n,function(){return a[n]})}(o);var l=e(1125),s=e.n(l),c=!1,p=e(1),d=i,u=p(r.a,s.a,!1,d,null,null);u.options.__file="src/views/check/arrival/arrival.vue",t.default=u.exports},585:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e(10),a=function(n){return n&&n.__esModule?n:{default:n}}(i);t.default={name:"searchable-table",data:function(){var n=this;return{searchValue:"",columns:[{type:"index",width:60,title:"序号"},{key:"arrivalCheckBillNo",title:"到货验收单号",sortable:!0,render:function(t,e){return t("span",[t("a",{style:{},on:{click:function(){n.arrivalDetail(e)}}},e.row.arrivalCheckBillNo)])}},{key:"contractCode",title:"订单编号"},{key:"contractName",title:"订单名称"},{key:"createDate",title:"日期",sortable:!0,render:function(n,t){return n("span",a.default.format(t.row.createDate))}},{key:"state",title:"状态",width:80,sortable:!0,render:function(n,t){switch(t.row.state){case"0":return n("span","待接收");case"1":return n("span","已接收");case"2":return n("span","已验收");case"3":return n("span","已拒验");case"4":return n("span","已结算");case"5":return n("span","待验收");case"6":return n("span","已拒收")}}},{key:"operation",title:"操作",render:function(t,e){switch(e.row.state){case"0":return t("div",[t("Button",{props:{type:"text",size:"small"},style:{color:"#2d8cf0"},on:{click:function(){n.submitFn(e.row.arrivalCheckBillId)}}},"提交"),t("Button",{props:{type:"text",size:"small"},style:{color:"#2d8cf0"},on:{click:function(){n.maintainFn(e.row.arrivalCheckBillId)}}},"维护"),t("Button",{props:{type:"text",size:"small"},style:{color:"#2d8cf0"},on:{click:function(){n.deleteFn(e.row.arrivalCheckBillId)}}},"删除")]);case"1":case"2":case"3":case"4":case"5":return t("span","")}}}],totalCount:0,initTable:[],pageSize:10,currPage:1,loadingMorn:!1,para:{}}},methods:{init:function(n){var t=this;n?(this.para={currPage:this.currPage,pageSize:this.pageSize,inputParam:this.searchValue},this.para[n.key]=n.order.toUpperCase()):this.para={currPage:this.currPage,pageSize:this.pageSize,inputParam:this.searchValue},this.loadingMorn=!0,this.$httpServer("/arrivalOfGoods/getArrivalOfGoodsList.do",this.para).then(function(n){console.log(n),null==n.result?(t.totalCount=0,t.initTable=[],t.loadingMorn=!1):(t.totalCount=n.result.totalCount,t.initTable=n.result.list,t.loadingMorn=!1)})},handleSearch:function(){this.init()},newArrival:function(){this.$router.push({name:"newArrival"})},arrivalDetail:function(n){var t={arrivalCheckBillId:n.row.arrivalCheckBillId};this.$router.push({name:"arrivalDetail",query:t})},onChangePage:function(n){console.log(n),this.currPage=n,this.init()},onPageSize:function(n){console.log(n),this.pageSize=n,this.init()},submitFn:function(n){var t=this;this.$httpServer("/arrivalOfGoods/commitArrivalOfGoods.do",{arrivalCheckBillId:n}).then(function(n){console.log(n),200==n.status&&(t.$Message.success("到货验收单已提交"),t.init())})},maintainFn:function(n){var t={arrivalCheckBillId:n};this.$router.push({name:"newArrival",query:t})},deleteFn:function(n){var t=this;this.$httpServer("/arrivalOfGoods/deleteArrivalCheckBill.do",{billId:n}).then(function(n){console.log(n),200==n.status&&(t.$Message.success("到货验收单已删除"),t.init())})},sort:function(n){console.log(n),this.init(n)}},mounted:function(){this.init()}}}});