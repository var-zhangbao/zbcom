webpackJsonp([48],{1135:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Row",[a("Col",{attrs:{span:"24"}},[a("Card",[a("Row",{staticClass:"clearfix"},[a("Col",{attrs:{span:"4"}},[a("span",{staticStyle:{"padding-right":"10px"}},[t._v("场景")]),t._v(" "),a("Select",{staticStyle:{width:"100px"},attrs:{size:"small"},on:{"on-change":t.changeScene},model:{value:t.selectedScene,callback:function(e){t.selectedScene=e},expression:"selectedScene"}},t._l(t.sceneList,function(e){return a("Option",{key:e.value,attrs:{value:e.value}},[t._v(t._s(e.label))])}))],1),t._v(" "),a("Col",{attrs:{span:"8",offset:"4"}},[a("AutoComplete",{staticStyle:{width:"300px",float:"left"},attrs:{icon:"ios-search",placeholder:"订单编号/订单名称/相对方名称"},on:{"on-search":t.searchContract},model:{value:t.searchValue,callback:function(e){t.searchValue=e},expression:"searchValue"}})],1)],1),t._v(" "),a("div",{staticClass:"clearfix margin-top-10"},[a("Table",{staticStyle:{width:"100%",float:"left"},attrs:{size:"small",stripe:"",columns:t.contractColumns,data:t.contractData,loading:t.loadingMorn},on:{"on-sort-change":t.sort}}),t._v(" "),a("Page",{staticClass:"margin-top-10 fr",attrs:{total:t.totalPage,size:"small","show-elevator":"","show-sizer":""},on:{"on-change":t.changeSize,"on-page-size-change":t.changePagesize}})],1)],1)],1)],1),t._v(" "),a("Modal",{staticStyle:{"text-align":"center"},attrs:{"mask-closable":!1,title:t.typeSelect?"审批意见":"驳回意见"},on:{"on-cancel":t.cancel},model:{value:t.rejectModel,callback:function(e){t.rejectModel=e},expression:"rejectModel"}},[a("Form",{attrs:{"label-position":"top"}},[a("Row",[a("Col",{attrs:{span:"24"}},[a("FormItem",[a("Input",{attrs:{type:"textarea",maxlength:255,placeholder:"备注255个字以内"},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}})],1)],1)],1)],1),t._v(" "),a("div",{staticStyle:{height:"30px"},attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{type:"primary",loading:t.modal_loading},on:{click:function(e){t.workSure()}}},[t._v("确定")]),t._v(" "),a("Button",{attrs:{type:"ghost",loading:t.modal_loading},on:{click:function(e){t.rejectModel=!1}}},[t._v("取消")])],1)],1)],1)},o=[];n._withStripped=!0;var i={render:n,staticRenderFns:o};e.default=i},303:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(591),o=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,function(){return n[t]})}(i);var s=a(1135),r=a.n(s),l=a(1),c=l(o.a,r.a,!1,null,null,null);c.options.__file="src/views/Workflow/paymentWork.vue",e.default=c.exports},591:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=a(5),i=n(o),s=a(10),r=n(s);e.default={name:"contractWork",data:function(){var t=this;return{sceneList:[{value:"0",label:"待处理"},{value:"1",label:"已处理"}],selectedScene:"0",loadingMorn:!1,totalPage:0,pageIndex:1,pageSize:10,rejectModel:!1,modal_loading:!1,typeSelect:!1,description:"",contractColumns:[{type:"index",title:"序号",width:60},{title:"任务名称",key:"taskName"},{title:"订单编号",key:"contractCode",sortable:!0,render:function(e,a){return e("span",[e("a",{style:{},on:{click:function(){t.lookDetail(a.row.payBillId)}}},a.row.contractCode)])}},{title:"订单名称",key:"contractName",sortable:!0},{title:"相对方",key:"relativeName",render:function(e,a){return 0==t.userType?e("span",a.row.purchaserName):1==t.userType?e("span",a.row.supplierName):void 0},renderHeader:function(e,a){return 0==t.userType?e("span",{domProps:{innerHTML:"采购商"}}):1==t.userType?e("span",{domProps:{innerHTML:"供应商"}}):void 0}},{title:"提交时间",key:"createTime",render:function(t,e){return t("span",r.default.formatTime(e.row.createTime))}},{title:"操作",key:"operation",render:function(e,a){if(0==t.selectedScene)return"采购员提交"==a.row.taskName?e("div",[e("Button",{props:{type:"text",size:"small"},style:{color:"#2d8cf0"},on:{click:function(){t.submitPayMent(a.row.payBillId)}}},"提交"),e("Button",{props:{type:"text",size:"small"},style:{color:"#2d8cf0"},on:{click:function(){t.editPayMent(a.row.payBillId)}}},"维护"),e("Button",{props:{type:"text",size:"small"},style:{color:"#2d8cf0"},on:{click:function(){t.deletePayMent(a.row.payBillId)}}},"删除")]):e("div",[e("Button",{props:{type:"text",size:"small"},style:{color:"#2d8cf0"},on:{click:function(){t.approvalContract(a.row.payBillId,a.row.taskId)}}},"审批"),e("Button",{props:{type:"text",size:"small"},style:{color:"#2d8cf0"},on:{click:function(){t.rejectContract(a.row.payBillId,a.row.taskId)}}},"驳回")])}}],contractData:[],searchValue:"",userType:"",taskId:"",payBillId:"",outcome:""}},watch:{},mounted:function(){this.getContractList();var t=JSON.parse(i.default.get("userData"));this.userType=t.userType,"0"===this.userType?this.showBtn=!0:this.showBtn=!1},methods:{lookDetail:function(t){var e={payBillId:t};this.$router.push({name:"paymentdetail_index",query:e})},searchContract:function(t){this.searchValue=t,this.getContractList()},sort:function(t){console.log(t),this.getContractList(t)},changeSize:function(t){this.pageIndex=t,this.getContractList()},changePagesize:function(t){this.pageSize=t,this.getContractList()},submitPayMent:function(t){var e=this,a={payBillId:t};this.$httpServer("/payApply/submit.do",a).then(function(t){console.log(t),200==t.status&&(e.$Message.success("提交成功"),e.getPayMentList())})},editPayMent:function(t){var e={payment_State:1002,payBillId:t};this.$router.push({name:"paymentaddedit_index",query:e})},deletePayMent:function(t){var e=this,a={payBillId:t};this.$httpServer("/payApply/delete.do",a).then(function(t){console.log(t),200==t.status&&(e.$Message.success("删除成功"),e.getPayMentList())})},getContractList:function(t){var e=this;t?(this.para={pageIndex:this.pageIndex,pageSize:this.pageSize,inputParam:this.searchValue},this.para[t.key]=t.order):this.para={pageIndex:this.pageIndex,pageSize:this.pageSize,inputParam:this.searchValue},this.loadingMorn=!0,this.$httpServer("/activitiPay/getPersonalTastList.do",this.para).then(function(t){if(console.log(t),null==t.data)return e.loadingMorn=!1,e.contractData=[],!1;e.contractData=t.data,e.loadingMorn=!1})},getHistoryContractList:function(t){var e=this;t?(this.para={pageIndex:this.pageIndex,pageSize:this.pageSize,inputParam:this.searchValue},this.para[t.key]=t.order):this.para={pageIndex:this.pageIndex,pageSize:this.pageSize,inputParam:this.searchValue},this.loadingMorn=!0,this.$httpServer("/activitiPay/getHistoryTaskList.do",this.para).then(function(t){if(console.log(t),null==t.data)return e.loadingMorn=!1,e.contractData=[],!1;e.contractData=t.data,e.loadingMorn=!1})},rejectContract:function(t,e){this.rejectModel=!0,this.taskId=e,this.payBillId=t},approvalContract:function(t,e){this.rejectModel=!0,this.typeSelect=!0,this.taskId=e,this.payBillId=t},cancel:function(){this.rejectModel=!1},workSure:function(){var t=this;1==this.typeSelect?this.outcome="批准":this.outcome="驳回",this.$httpServer("/activitiPay/completeTask.do",{taskId:this.taskId,outcome:this.outcome,payBillId:this.payBillId,comment:this.description}).then(function(e){200==e.status?(t.getContractList(),t.rejectModel=!1,t.description="",t.$Message.success("提交成功!")):(t.$Message.error("提交失败!"),t.rejectModel=!0,t.description="")})},changeScene:function(t){this.selectedScene=t,0==this.selectedScene?this.getContractList():this.getHistoryContractList()}}}}});