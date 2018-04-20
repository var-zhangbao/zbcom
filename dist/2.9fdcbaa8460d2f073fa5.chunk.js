webpackJsonp([2],{1e3:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{background:"#fff"}},[a("p",{attrs:{slot:"title"},slot:"title"},[a("Icon",{attrs:{type:"paperclip"}}),t._v("  附件信息")],1),t._v(" "),a("Table",{staticClass:"margin-top-10",attrs:{columns:t.columnsFile,data:t.dataFile,size:"small",border:""}})],1)},s=[];i._withStripped=!0;var n={render:i,staticRenderFns:s};e.default=n},1001:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{background:"#eee"}},[a("Card",{attrs:{bordered:!1}},[a("Tabs",{attrs:{value:"name1"}},[a("TabPane",{attrs:{label:"主信息",name:"name1"}},[a("applicationMainInfo")],1),t._v(" "),a("TabPane",{attrs:{label:"开票明细",name:"name2"}},[a("applicationList")],1),t._v(" "),a("TabPane",{attrs:{label:"发票信息",name:"name3"}},[a("applicationInvoice")],1),t._v(" "),a("TabPane",{attrs:{label:"发票物流",name:"name4"}},[a("applicationLogistics")],1),t._v(" "),a("TabPane",{attrs:{label:"附件",name:"name5"}},[a("applicationFile")],1)],1)],1)],1)},s=[];i._withStripped=!0;var n={render:i,staticRenderFns:s};e.default=n},272:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(539),s=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,function(){return i[t]})}(n);var o=a(1001),r=a.n(o),l=a(1),c=l(s.a,r.a,!1,null,null,null);c.options.__file="src/views/clearingTicket/component/application_detail.vue",e.default=c.exports},327:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"",data:function(){return{invoiceApplicationId:"",traces:[],invoiceId:"",invoiceSettlementId:"",logisticCode:"",shipperCode:"",status:""}},watch:{$route:function(){this.init()}},mounted:function(){this.init()},methods:{init:function(){void 0!=this.$route.query.invoiceApplicationId?(this.invoiceApplicationId=this.$route.query.invoiceApplicationId,this.invoiceDetail()):void 0!=this.$route.query.invoiceSettlementId?(this.invoiceSettlementId=this.$route.query.settlementId,this.onlineDetails()):void 0!=this.$route.query.invoiceId?this.invoiceNews():void 0!=this.$route.query.shipperCode&&(this.shipperCode=this.$route.query.shipperCode,this.logisticCode=this.$route.query.logisticCode,this.onlineDetail())},invoiceDetail:function(){var t=this;this.$httpServer("/invoiceApplication/getInvoiceLogisticsTrace.do",{invocieApplicationId:this.invoiceApplicationId}).then(function(e){200==e.status?t.traces=e.result.traces:t.status=e.status})},onlineDetails:function(){var t=this;this.$httpServer("/outputSettlementBill/getInvoiceLogisticsTrace.do",{invoiceSettlementId:this.invoiceSettlementId}).then(function(e){200==e.status?t.traces=e.result.traces:t.status=e.status})},invoiceNews:function(){var t=this;this.$httpServer("/invoiceNew/getLogisticsTrace.do",{invoiceId:this.invoiceId}).then(function(e){200==e.status?t.traces=e.result.traces:t.status=e.status})},onlineDetail:function(){var t=this;this.$httpServer("/logistics/orderHandle.do",{shipperCode:this.shipperCode,logisticCode:this.logisticCode}).then(function(e){200==e.status?t.traces=e.result.traces:t.status=e.status})}}}},356:function(t,e,a){"use strict";function i(t){c||a(357)}Object.defineProperty(e,"__esModule",{value:!0});var s=a(327),n=a.n(s);for(var o in s)"default"!==o&&function(t){a.d(e,t,function(){return s[t]})}(o);var r=a(359),l=a.n(r),c=!1,p=a(1),v=i,d=p(n.a,l.a,!1,v,"data-v-08f2958e",null);d.options.__file="src/views/clearingTicket/component/applicationLogistics.vue",e.default=d.exports},357:function(t,e,a){var i=a(358);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(18)("0c15a784",i,!1)},358:function(t,e,a){e=t.exports=a(17)(void 0),e.push([t.i,"\n.logistics[data-v-08f2958e] {\n    padding: 10px 0;\n    border-bottom: 1px solid #eee;\n    font-size: 12px !important;\n}\n.ivu-badge-dot[data-v-08f2958e] {\n    background: #5cb85c !important;\n    right: 0;\n}\n.logisticsDate[data-v-08f2958e] {\n    color: #f0f0f0;\n    padding-left: 20px;\n}\n.logisticsDes[data-v-08f2958e] {\n    color: red;\n}\n",""])},359:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{background:"#fff"}},[a("p",{attrs:{slot:"title"},slot:"title"},[a("Icon",{attrs:{type:"ios-calendar-outline"}}),t._v("  发票物流")],1),t._v(" "),500==t.status?a("Row",{staticClass:"logistics"},[a("Col",{attrs:{span:20}},[a("div",{staticClass:"logisticsDes"},[a("span",[t._v("当前无物流轨迹")])])])],1):t._l(t.traces,function(e){return a("Row",{key:e.acceptStation,staticClass:"logistics"},[a("Col",{attrs:{span:4}},[a("div",{staticClass:"logisticsDate"},[a("span",[t._v(t._s(e.acceptTime))])])]),t._v(" "),a("Col",{attrs:{span:18,offset:"2"}},[a("div",{staticClass:"logisticsDes"},[a("p",[t._v(t._s(e.acceptStation))])])])],1)})],2)},s=[];i._withStripped=!0;var n={render:i,staticRenderFns:s};e.default=n},376:function(t,e,a){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=a(2),n=(i(s),a(10)),o=i(n);e.default={name:"",data:function(){return{columns:[{title:"序号",type:"index",width:80,align:"center",fixed:"left"},{title:"物资名称",key:"materialName",align:"center",width:300},{title:"材料规格型号",key:"spectype",align:"center"},{title:"单位",key:"metricunitName",align:"center"},{title:"数量",key:"settlementQuantity",align:"center"},{title:"单价(未税)",key:"price",align:"center"},{title:"金额(未税)",key:"taxExclusiveAmount",align:"center",render:function(t,e){return t("span",o.default.formatNum(e.row.price*e.row.settlementQuantity,2))}},{title:"税率",key:"itemTaxs",align:"center"},{title:"税额",key:"itemTaxAmount",align:"center",render:function(t,e){return t("span",o.default.formatNum(e.row.price*e.row.settlementQuantity*e.row.itemTax,2))}}],dataList:[],invoiceApplicationId:"",invoiceSettlementId:"",invoiceId:""}},mounted:function(){this.init()},watch:{$route:function(){this.init()}},methods:{init:function(){void 0!=this.$route.query.invoiceApplicationId?(this.invoiceApplicationId=this.$route.query.invoiceApplicationId,this.invoiceList()):void 0!=this.$route.query.invoiceSettlementId?(this.invoiceSettlementId=this.$route.query.settlementId,this.tickitList()):void 0!=this.$route.query.invoiceId&&(this.invoiceId=this.$route.query.invoiceId,this.ticketDetail())},invoiceList:function(){var t=this;this.$httpServer("/invoiceApplication/getInvoiceApplicationItemsByAId.do",{invoiceApplicationId:this.invoiceApplicationId}).then(function(e){t.dataList=e;for(var a=0;a<t.dataList.length;a++)t.dataList[a].itemTaxs=100*t.dataList[a].itemTax+"%"})},tickitList:function(){var t=this;this.$httpServer("/outputSettlementBill/getInvoiceSettlementItemsByAId.do",{invoiceSettlementId:this.invoiceSettlementId}).then(function(e){t.dataList=e;for(var a=0;a<t.dataList.length;a++)t.dataList[a].itemTaxs=100*t.dataList[a].itemTax+"%"})},ticketDetail:function(){var t=this;this.$httpServer("/invoiceNew/getInvoiceNewMainDetail.do",{invoiceId:this.invoiceId}).then(function(e){t.dataList=e.invoiceApplicationItems;for(var a=0;a<t.dataList.length;a++)t.dataList[a].itemTaxs=100*t.dataList[a].itemTax+"%"})}}}},419:function(t,e,a){"use strict";function i(t){c||a(420)}Object.defineProperty(e,"__esModule",{value:!0});var s=a(376),n=a.n(s);for(var o in s)"default"!==o&&function(t){a.d(e,t,function(){return s[t]})}(o);var r=a(422),l=a.n(r),c=!1,p=a(1),v=i,d=p(n.a,l.a,!1,v,"data-v-788ae968",null);d.options.__file="src/views/clearingTicket/component/applicationList.vue",e.default=d.exports},420:function(t,e,a){var i=a(421);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(18)("1ab7037c",i,!1)},421:function(t,e,a){e=t.exports=a(17)(void 0),e.push([t.i,"\n.expand-row[data-v-788ae968] {\n    margin-bottom: 16px;\n    margin-top: 16px;\n}\n",""])},422:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{background:"#fff"}},[a("Row",[a("Col",{attrs:{span:"24"}},[a("p",{staticClass:"soltTitle margin-bottom-10"},[a("Icon",{attrs:{type:"flag"}}),t._v("  开票明细")],1)]),t._v(" "),a("Col",{attrs:{span:"24"}},[a("Table",{ref:"selection",attrs:{size:"small",border:"",columns:t.columns,data:t.dataList}})],1)],1)],1)},s=[];i._withStripped=!0;var n={render:i,staticRenderFns:s};e.default=n},539:function(t,e,a){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=a(991),n=i(s),o=a(419),r=i(o),l=a(995),c=i(l),p=a(356),v=i(p),d=a(999),u=i(d);e.default={name:"",data:function(){return{}},mounted:function(){},methods:{},components:{applicationMainInfo:n.default,applicationList:r.default,applicationInvoice:c.default,applicationLogistics:v.default,applicationFile:u.default}}},540:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"",data:function(){return{applyMethod:"",invocieApplicationId:"",noticeNo:"",contractCode:"",contractName:"",arrivalCheckBillNo:"",invoiceType:"",invoiceMoney:"",taxedMoney:"",purchaserName:"",invoiceRule:"",remark:"",relativerName:"",invoiceRuleName:"",purchaserCreditNo:"",purchaserBankName:"",purchaserBankAccount:"",purchaserAddr:"",purchaserTel:"",supplierName:"",supplierCreditNo:"",supplierBankName:"",supplierBankAccount:"",supplierAddr:"",supplierTel:"",stateName:"",createTime:"",createByName:"",invoiceApplicationId:"",invoiceSettlementId:""}},mounted:function(){this.init(),this.initFormatter()},watch:{$route:function(){this.init()}},methods:{init:function(){void 0!=this.$route.query.invoiceApplicationId?(this.invoiceApplicationId=this.$route.query.invoiceApplicationId,this.invoiceDetail()):(this.invoiceSettlementId=this.$route.query.settlementId,this.getInvoiceDetail())},initFormatter:function(){Date.prototype.Format=function(t){var e={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length)));for(var a in e)new RegExp("("+a+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[a]:("00"+e[a]).substr((""+e[a]).length)));return t}},invoiceDetail:function(){var t=this;this.$httpServer("/invoiceApplication/getInvoiceApplicationMainInfo.do",{invocieApplicationId:this.invoiceApplicationId}).then(function(e){t.applyMethod=e.applyMethod,t.noticeNo=e.noticeNo,t.contractCode=e.contractCode,t.contractName=e.contractName,t.arrivalCheckBillNo=e.arrivalNos,t.invoiceType=e.noticeStyleName,t.invoiceMoney=e.invoiceApplyMoney,t.taxedMoney=e.invoiceApplyTaxMoney,t.relativerName=e.relativerName,t.invoiceRuleName=e.invoiceRuleName,t.remark=e.description,t.purchaserName=e.invoiceTitle,t.purchaserCreditNo=e.companyCode,t.purchaserBankName=e.bankName,t.purchaserBankAccount=e.bankAccount,t.purchaserAddr=e.companyAddr,t.purchaserTel=e.contactsTel,t.supplierName=e.supplierInvoiceTitle,t.supplierCreditNo=e.supplierCompanyCode,t.supplierBankName=e.supplierBankName,t.supplierBankAccount=e.supplierBankAccount,t.supplierAddr=e.supplierCompanyAddr,t.supplierTel=e.supplierCompanyTel,t.stateName=e.stateName,t.createTime=new Date(e.createTime).Format("yyyy-MM-dd"),t.createByName=e.createUserName})},getInvoiceDetail:function(){var t=this;this.$httpServer("/outputSettlementBill/getInvoiceSettlementMainInfo.do",{invoiceSettlementId:this.invoiceSettlementId}).then(function(e){t.contractName=e.contractName,t.invoiceType=e.invoiceTypeName,t.invoiceMoney=e.settlementMoney,t.taxedMoney=e.settlementTaxMoney,t.invoiceRuleName=e.invoiceRuleName,t.remark=e.description,t.purchaserName=e.purchaserName,t.purchaserCreditNo=e.purchaserCompanyCode,t.purchaserBankName=e.purchaserBankName,t.purchaserBankAccount=e.purchaserBankAccount,t.purchaserAddr=e.purchaserCompanyAddr,t.purchaserTel=e.purchaserCompanyTel,t.supplierName=e.supplierName,t.supplierCreditNo=e.supplierCompanyCode,t.supplierBankName=e.supplierBankName,t.supplierBankAccount=e.supplierBankAccount,t.supplierAddr=e.supplierCompanyAddr,t.supplierTel=e.supplierCompanyTel,t.stateName=e.stateName,t.createTime=new Date(e.createTime).Format("yyyy-MM-dd"),t.createByName=e.createUserName,void 0==e.applyMethod&&(e.applyMethod="其他",t.applyMethod=e.applyMethod)})}}}},541:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(10),s=function(t){return t&&t.__esModule?t:{default:t}}(i);e.default={name:"",data:function(){return{invoiceApplicationId:"",invoiceSettlementId:"",modal:!1,modal1:!1,modal_loading:!1,columns:[{title:"序号",type:"index",width:80,align:"center",fixed:"left"},{title:"发票代码",key:"invoiceCode",align:"center"},{title:"发票号码",key:"invoiceNo",align:"center"},{title:"发票金额(含税)",key:"taxIncludedSum",align:"center"},{title:"开票日期",key:"invoiceDate",align:"center",render:function(t,e){return t("span",s.default.format(e.row.invoiceDate))}},{title:"发票状态",key:"state",align:"center"},{title:"寄送状态",key:"logisticState",align:"center"}],dataList:[],columnsInvoice:[{title:"序号",key:"age",width:80,align:"center"},{title:"物资名称",key:"name",align:"center",width:200},{title:"规格型号",key:"province",align:"center",width:200},{title:"单位",key:"city",align:"center",width:200},{title:"单位数量",key:"zip",align:"center",width:200},{title:"单价",key:"address",align:"center",width:200},{title:"金额",key:"zip",align:"center",width:200},{title:"税率",key:"zip",align:"center",width:200},{title:"税额",key:"zip",align:"center",width:200}],invoiceList:[{name:"John Brown",age:18,address:"New York No. 1 Lake Park",province:"America",city:"New York",zip:1e5},{name:"Jim Green",age:24,address:"Washington, D.C. No. 1 Lake Park",province:"America",city:"Washington, D.C.",zip:1e5},{name:"Joe Black",age:30,address:"Sydney No. 1 Lake Park",province:"Australian",city:"Sydney",zip:1e5}],ninvoiceList:[{name:"详见销货清单"}]}},mounted:function(){this.init(),this.initFormatter()},watch:{$route:function(){this.init()}},methods:{init:function(){void 0!=this.$route.query.invoiceApplicationId?(this.invoiceApplicationId=this.$route.query.invoiceApplicationId,this.invoiceDetail()):(this.invoiceSettlementId=this.$route.query.settlementId,this.ticketDetail())},initFormatter:function(){Date.prototype.Format=function(t){var e={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length)));for(var a in e)new RegExp("("+a+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[a]:("00"+e[a]).substr((""+e[a]).length)));return t}},invoiceDetail:function(){var t=this;this.$httpServer("/invoiceNew/getInvoiceInfosForDetail.do",{invoiceApplicationId:this.invoiceApplicationId}).then(function(e){t.dataList=e;for(var a=0;a<t.dataList.length;a++)null==t.dataList[a].invoiceDate?t.dataList[a].invoiceDate="":t.dataList[a].createTimes=new Date(t.dataList[a].invoiceDate).Format("yyyy-MM-dd")})},ticketDetail:function(){var t=this;this.$httpServer("/outputSettlementBill/selectInvoiceInfos.do",{invoiceSettlementId:this.invoiceSettlementId}).then(function(e){t.dataList=e;for(var a=0;a<t.dataList.length;a++)t.dataList[a].createTimes=new Date(t.dataList[a].createTime).Format("yyyy-MM-dd")})},lookDetail:function(t){this.modal1=!0,this.$httpServer("/outputSettlementBill/getInvoiceDetail.do",{invoiceId:t}).then(function(t){})},cancel:function(){this.modal=!1,this.modal1=!1}}}},542:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(10),s=function(t){return t&&t.__esModule?t:{default:t}}(i);e.default={name:"",data:function(){var t=this;return{columnsFile:[{type:"index",title:"序号",width:60},{title:"附件名称",key:"attachName"},{title:"上传人",key:"createByName"},{title:"上传日期",key:"createTime",render:function(t,e){return t("span",s.default.format(e.row.createTime))}},{title:"操作",key:"caozuo",render:function(e,a){return e("span",[e("a",{style:{},on:{click:function(){t.uploadFile(a.row.attachId)}}},"下载")])}}],dataFile:[],invoiceApplicationId:"",invoiceSettlementId:""}},mounted:function(){this.init()},watch:{$route:function(){this.init()}},methods:{init:function(){void 0!=this.$route.query.invoiceApplicationId?(this.invoiceApplicationId=this.$route.query.invoiceApplicationId,this.invoiceFile()):this.invoiceSettlementId=this.$route.query.settlementId},invoiceFile:function(){var t=this;this.$httpServer("/invoiceAttach/getInvoiceAttachList.do",{invoiceApplicationId:this.invoiceApplicationId}).then(function(e){t.dataFile=e.data})},uploadFile:function(t){window.open("/invoiceAttach/download.do?invoiceAttachId="+t)}}}},991:function(t,e,a){"use strict";function i(t){c||a(992)}Object.defineProperty(e,"__esModule",{value:!0});var s=a(540),n=a.n(s);for(var o in s)"default"!==o&&function(t){a.d(e,t,function(){return s[t]})}(o);var r=a(994),l=a.n(r),c=!1,p=a(1),v=i,d=p(n.a,l.a,!1,v,"data-v-e558655e",null);d.options.__file="src/views/clearingTicket/component/applicationMainInfo.vue",e.default=d.exports},992:function(t,e,a){var i=a(993);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(18)("1558815b",i,!1)},993:function(t,e,a){e=t.exports=a(17)(void 0),e.push([t.i,"\n.expand-row[data-v-e558655e] {\n    margin-bottom: 16px;\n    margin-top: 16px;\n    font-size: 12px !important;\n}\n.greyCol[data-v-e558655e] {\n    color: #999;\n}\n",""])},994:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{background:"#fff"}},[a("p",{attrs:{slot:"title"},slot:"title"},[a("Icon",{attrs:{type:"flag"}}),t._v("  基本信息")],1),t._v(" "),"验收开票"==t.applyMethod?a("div",[a("Row",{staticClass:"expand-row"},[a("Col",{attrs:{span:"11"}},[a("Col",{attrs:{span:"11",offset:"2"}},[t._v("开票申请单单号:")]),t._v(" "),a("Col",{staticClass:"greyCol",attrs:{span:"11"}},[t._v(t._s(t.noticeNo))])],1),t._v(" "),a("Col",{attrs:{span:"11",offset:"2"}},[a("Col",{attrs:{span:"11",offset:"2"}},[t._v("订单编号: ")]),t._v(" "),a("Col",{staticClass:"greyCol",attrs:{span:"11"}},[t._v(t._s(t.contractCode))])],1)],1),t._v(" "),a("Row",{staticClass:"expand-row"},[a("Col",{attrs:{span:"11"}},[a("Col",{attrs:{span:"11",offset:"2"}},[t._v("订单名称:")]),t._v(" "),a("Col",{staticClass:"greyCol",attrs:{span:"11"}},[t._v(t._s(t.contractName))])],1),t._v(" "),a("Col",{attrs:{span:"11",offset:"2"}},[a("Col",{attrs:{span:"11",offset:"2"}},[t._v("到货验收单: ")]),t._v(" "),a("Col",{staticClass:"greyCol",attrs:{span:"11"}},[t._v(t._s(t.arrivalCheckBillNo))])],1)],1),t._v(" "),a("Row",{staticClass:"expand-row"},[a("Col",{attrs:{span:"11"}},[a("Col",{attrs:{span:"11",offset:"2"}},[t._v("开票类型:")]),t._v(" "),a("Col",{staticClass:"greyCol",attrs:{span:"11"}},[t._v(t._s(t.invoiceType))])],1),t._v(" "),a("Col",{attrs:{span:"11",offset:"2"}},[a("Col",{attrs:{span:"11",offset:"2"}},[t._v("开票金额: ")]),t._v(" "),a("Col",{staticClass:"greyCol",attrs:{span:"11"}},[t._v(t._s(t._f("money")(t.invoiceMoney)))])],1)],1),t._v(" "),a("Row",{staticClass:"expand-row"},[a("Col",{attrs:{span:"11"}},[a("Col",{attrs:{span:"11",offset:"2"}},[t._v("税额:")]),t._v(" "),a("Col",{staticClass:"greyCol",attrs:{span:"11"}},[t._v(t._s(t._f("money")(t.taxedMoney)))])],1),t._v(" "),a("Col",{attrs:{span:"11",offset:"2"}},[a("Col",{attrs:{span:"11",offset:"2"}},[t._v("相对方: ")]),t._v(" "),a("Col",{staticClass:"greyCol",attrs:{span:"11"}},[t._v(t._s(t.relativerName))])],1)],1),t._v(" "),a("Row",{staticClass:"expand-row"},[a("Col",{attrs:{span:"11"}},[a("Col",{attrs:{span:"11",offset:"2"}},[t._v("备注: ")]),t._v(" "),a("Col",{staticClass:"greyCol",attrs:{span:"11"}},[t._v(t._s(t.remark))])],1)],1)],1):t._e(),t._v(" "),"直接开票"==t.applyMethod?a("div",[a("Row",{staticClass:"expand-row"},[a("Col",{attrs:{span:"11"}},[a("Col",{attrs:{span:"11",offset:"2"}},[t._v("开票申请单单号:")]),t._v(" "),a("Col",{staticClass:"greyCol",attrs:{span:"11"}},[t._v(t._s(t.noticeNo))])],1),t._v(" "),a("Col",{attrs:{span:"11",offset:"2"}},[a("Col",{attrs:{span:"11",offset:"2"}},[t._v("订单编号: ")]),t._v(" "),a("Col",{staticClass:"greyCol",attrs:{span:"11"}},[t._v(t._s(t.contractCode))])],1)],1),t._v(" "),a("Row",{staticClass:"expand-row"},[a("Col",{attrs:{span:"11"}},[a("Col",{attrs:{span:"11",offset:"2"}},[t._v("订单名称:")]),t._v(" "),a("Col",{staticClass:"greyCol",attrs:{span:"11"}},[t._v(t._s(t.contractName))])],1),t._v(" "),a("Col",{attrs:{span:"11",offset:"2"}},[a("Col",{attrs:{span:"11",offset:"2"}},[t._v("开票类型:")]),t._v(" "),a("Col",{staticClass:"greyCol",attrs:{span:"11"}},[t._v(t._s(t.invoiceType))])],1)],1),t._v(" "),a("Row",{staticClass:"expand-row"},[a("Col",{attrs:{span:"11"}},[a("Col",{attrs:{span:"11",offset:"2"}},[t._v("开票金额: ")]),t._v(" "),a("Col",{staticClass:"greyCol",attrs:{span:"11"}},[t._v(t._s(t._f("money")(t.invoiceMoney)))])],1),t._v(" "),a("Col",{attrs:{span:"11",offset:"2"}},[a("Col",{attrs:{span:"11",offset:"2"}},[t._v("税额:")]),t._v(" "),a("Col",{staticClass:"greyCol",attrs:{span:"11"}},[t._v(t._s(t._f("money")(t.taxedMoney)))])],1)],1),t._v(" "),a("Row",{staticClass:"expand-row"},[a("Col",{attrs:{span:"11"}},[a("Col",{attrs:{span:"11",offset:"2"}},[t._v("相对方: ")]),t._v(" "),a("Col",{staticClass:"greyCol",attrs:{span:"11"}},[t._v(t._s(t.relativerName))])],1),t._v(" "),a("Col",{attrs:{span:"11",offset:"2"}},[a("Col",{attrs:{span:"11",offset:"2"}},[t._v("备注: ")]),t._v(" "),a("Col",{staticClass:"greyCol",attrs:{span:"11"}},[t._v(t._s(t.remark))])],1)],1)],1):t._e(),t._v(" "),"其他"==t.applyMethod?a("div",[a("Row",{staticClass:"expand-row"},[a("Col",{attrs:{span:"11"}},[a("Col",{attrs:{span:"11",offset:"2"}},[t._v("订单名称:")]),t._v(" "),a("Col",{staticClass:"greyCol",attrs:{span:"11"}},[t._v(t._s(t.contractName))])],1),t._v(" "),a("Col",{attrs:{span:"11",offset:"2"}},[a("Col",{attrs:{span:"11",offset:"2"}},[t._v("开票类型:")]),t._v(" "),a("Col",{staticClass:"greyCol",attrs:{span:"11"}},[t._v(t._s(t.invoiceType))])],1)],1),t._v(" "),a("Row",{staticClass:"expand-row"},[a("Col",{attrs:{span:"11"}},[a("Col",{attrs:{span:"11",offset:"2"}},[t._v("开票金额: ")]),t._v(" "),a("Col",{staticClass:"greyCol",attrs:{span:"11"}},[t._v(t._s(t._f("money")(t.invoiceMoney)))])],1),t._v(" "),a("Col",{attrs:{span:"11",offset:"2"}},[a("Col",{attrs:{span:"11",offset:"2"}},[t._v("税额:")]),t._v(" "),a("Col",{staticClass:"greyCol",attrs:{span:"11"}},[t._v(t._s(t._f("money")(t.taxedMoney)))])],1)],1)],1):t._e(),t._v(" "),a("p",{attrs:{slot:"title"},slot:"title"},[a("Icon",{attrs:{type:"network"}}),t._v("  购货单位")],1),t._v(" "),a("div",[a("Row",{staticClass:"expand-row"},[a("Col",{attrs:{span:"11"}},[a("Col",{attrs:{span:"11",offset:"2"}},[t._v("开票抬头:")]),t._v(" "),a("Col",{staticClass:"greyCol",attrs:{span:"11"}},[t._v(t._s(t.purchaserName))])],1),t._v(" "),a("Col",{attrs:{span:"11",offset:"2"}},[a("Col",{attrs:{span:"11",offset:"2"}},[t._v("纳税识别号: ")]),t._v(" "),a("Col",{staticClass:"greyCol",attrs:{span:"11"}},[t._v(t._s(t.purchaserCreditNo))])],1)],1),t._v(" "),a("Row",{staticClass:"expand-row"},[a("Col",{attrs:{span:"11"}},[a("Col",{attrs:{span:"11",offset:"2"}},[t._v("开户行:")]),t._v(" "),a("Col",{staticClass:"greyCol",attrs:{span:"11"}},[t._v(t._s(t.purchaserBankName))])],1),t._v(" "),a("Col",{attrs:{span:"11",offset:"2"}},[a("Col",{attrs:{span:"11",offset:"2"}},[t._v("银行账号: ")]),t._v(" "),a("Col",{staticClass:"greyCol",attrs:{span:"11"}},[t._v(t._s(t.purchaserBankAccount))])],1)],1),t._v(" "),a("Row",{staticClass:"expand-row"},[a("Col",{attrs:{span:"11"}},[a("Col",{attrs:{span:"11",offset:"2"}},[t._v("地址:")]),t._v(" "),a("Col",{staticClass:"greyCol",attrs:{span:"11"}},[t._v(t._s(t.purchaserAddr))])],1),t._v(" "),a("Col",{attrs:{span:"11",offset:"2"}},[a("Col",{attrs:{span:"11",offset:"2"}},[t._v("电话: ")]),t._v(" "),a("Col",{staticClass:"greyCol",attrs:{span:"11"}},[t._v(t._s(t.purchaserTel))])],1)],1)],1),t._v(" "),a("p",{attrs:{slot:"title"},slot:"title"},[a("Icon",{attrs:{type:"stats-bars"}}),t._v("  销货单位")],1),t._v(" "),a("div",[a("Row",{staticClass:"expand-row"},[a("Col",{attrs:{span:"11"}},[a("Col",{attrs:{span:"11",offset:"2"}},[t._v("开票抬头:")]),t._v(" "),a("Col",{staticClass:"greyCol",attrs:{span:"11"}},[t._v(t._s(t.supplierName))])],1),t._v(" "),a("Col",{attrs:{span:"11",offset:"2"}},[a("Col",{attrs:{span:"11",offset:"2"}},[t._v("纳税识别号: ")]),t._v(" "),a("Col",{staticClass:"greyCol",attrs:{span:"11"}},[t._v(t._s(t.supplierCreditNo))])],1)],1),t._v(" "),a("Row",{staticClass:"expand-row"},[a("Col",{attrs:{span:"11"}},[a("Col",{attrs:{span:"11",offset:"2"}},[t._v("开户行:")]),t._v(" "),a("Col",{staticClass:"greyCol",attrs:{span:"11"}},[t._v(t._s(t.supplierBankName))])],1),t._v(" "),a("Col",{attrs:{span:"11",offset:"2"}},[a("Col",{attrs:{span:"11",offset:"2"}},[t._v("银行账号: ")]),t._v(" "),a("Col",{staticClass:"greyCol",attrs:{span:"11"}},[t._v(t._s(t.supplierBankAccount))])],1)],1),t._v(" "),a("Row",{staticClass:"expand-row"},[a("Col",{attrs:{span:"11"}},[a("Col",{attrs:{span:"11",offset:"2"}},[t._v("地址:")]),t._v(" "),a("Col",{staticClass:"greyCol",attrs:{span:"11"}},[t._v(t._s(t.supplierAddr))])],1),t._v(" "),a("Col",{attrs:{span:"11",offset:"2"}},[a("Col",{attrs:{span:"11",offset:"2"}},[t._v("电话: ")]),t._v(" "),a("Col",{staticClass:"greyCol",attrs:{span:"11"}},[t._v(t._s(t.supplierTel))])],1)],1)],1),t._v(" "),a("p",{attrs:{slot:"title"},slot:"title"},[a("Icon",{attrs:{type:"gear-a"}}),t._v("  系统信息")],1),t._v(" "),a("div",[a("Row",{staticClass:"expand-row"},[a("Col",{attrs:{span:"11"}},[a("Col",{attrs:{span:"11",offset:"2"}},[t._v("开票申请状态:")]),t._v(" "),a("Col",{staticClass:"greyCol",attrs:{span:"11"}},[t._v(t._s(t.stateName))])],1),t._v(" "),a("Col",{attrs:{span:"11",offset:"2"}},[a("Col",{attrs:{span:"11",offset:"2"}},[t._v("创建时间: ")]),t._v(" "),a("Col",{staticClass:"greyCol",attrs:{span:"11"}},[t._v(t._s(t.createTime))])],1)],1),t._v(" "),a("Row",{staticClass:"expand-row"},[a("Col",{attrs:{span:"11"}},[a("Col",{attrs:{span:"11",offset:"2"}},[t._v("创建人:")]),t._v(" "),a("Col",{staticClass:"greyCol",attrs:{span:"11"}},[t._v(t._s(t.createByName))])],1)],1)],1)])},s=[];i._withStripped=!0;var n={render:i,staticRenderFns:s};e.default=n},995:function(t,e,a){"use strict";function i(t){c||a(996)}Object.defineProperty(e,"__esModule",{value:!0});var s=a(541),n=a.n(s);for(var o in s)"default"!==o&&function(t){a.d(e,t,function(){return s[t]})}(o);var r=a(998),l=a.n(r),c=!1,p=a(1),v=i,d=p(n.a,l.a,!1,v,"data-v-79232cd3",null);d.options.__file="src/views/clearingTicket/component/applicationInvoice.vue",e.default=d.exports},996:function(t,e,a){var i=a(997);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(18)("168ac0e4",i,!1)},997:function(t,e,a){e=t.exports=a(17)(void 0),e.push([t.i,"\n.expand-row[data-v-79232cd3] {\n    margin-bottom: 16px;\n    margin-top: 16px;\n}\n",""])},998:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{background:"#fff"}},[a("Row",[a("Col",{attrs:{span:"24"}},[a("p",{staticClass:"soltTitle margin-bottom-10"},[a("Icon",{attrs:{type:"flag"}}),t._v("  发票信息")],1)]),t._v(" "),a("Col",{attrs:{span:"24"}},[a("Table",{ref:"selection",attrs:{size:"small",border:"",columns:t.columns,data:t.dataList}})],1)],1),t._v(" "),a("Modal",{staticStyle:{"text-align":"center"},attrs:{title:"增值税专用发票",width:"50%"},on:{"on-cancel":t.cancel},model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}},[a("Form",{attrs:{"label-position":"top"}},[a("Row",{staticClass:"expand-row"},[a("Col",{attrs:{span:"11"}},[a("Col",{attrs:{span:"11"}},[t._v("采购商名称:")]),t._v(" "),a("Col",{attrs:{span:"11"}},[t._v("固1213445566")])],1),t._v(" "),a("Col",{attrs:{span:"11",offset:"2"}},[a("Col",{attrs:{span:"11",offset:"2"}},[t._v("销售方名称: ")]),t._v(" "),a("Col",{attrs:{span:"11"}},[t._v("固定资产采购订单")])],1)],1),t._v(" "),a("Row",{staticClass:"expand-row"},[a("Col",{attrs:{span:"11"}},[a("Col",{attrs:{span:"11"}},[t._v("发票金额:")]),t._v(" "),a("Col",{attrs:{span:"11"}},[t._v("固1213445566")])],1),t._v(" "),a("Col",{attrs:{span:"11",offset:"2"}},[a("Col",{attrs:{span:"11",offset:"2"}},[t._v("税额: ")]),t._v(" "),a("Col",{attrs:{span:"11"}},[t._v("固定资产采购订单")])],1)],1),t._v(" "),a("Row",[a("Col",{attrs:{span:"24"}},[a("Table",{ref:"selection",attrs:{size:"small",height:"200",border:"",columns:t.columnsInvoice,data:t.invoiceList}})],1)],1)],1)],1),t._v(" "),a("Modal",{staticStyle:{"text-align":"center"},attrs:{title:"增值税专用发票",width:"50%"},on:{"on-cancel":t.cancel},model:{value:t.modal1,callback:function(e){t.modal1=e},expression:"modal1"}},[a("Form",{attrs:{"label-position":"top"}},[a("Row",{staticClass:"expand-row"},[a("Col",{attrs:{span:"11"}},[a("Col",{attrs:{span:"11"}},[t._v("采购商名称:")]),t._v(" "),a("Col",{attrs:{span:"11"}},[t._v("固1213445566")])],1),t._v(" "),a("Col",{attrs:{span:"11",offset:"2"}},[a("Col",{attrs:{span:"11",offset:"2"}},[t._v("销售方名称: ")]),t._v(" "),a("Col",{attrs:{span:"11"}},[t._v("固定资产采购订单")])],1)],1),t._v(" "),a("Row",{staticClass:"expand-row"},[a("Col",{attrs:{span:"11"}},[a("Col",{attrs:{span:"11"}},[t._v("发票金额:")]),t._v(" "),a("Col",{attrs:{span:"11"}},[t._v("固1213445566")])],1),t._v(" "),a("Col",{attrs:{span:"11",offset:"2"}},[a("Col",{attrs:{span:"11",offset:"2"}},[t._v("税额: ")]),t._v(" "),a("Col",{attrs:{span:"11"}},[t._v("固定资产采购订单")])],1)],1),t._v(" "),a("Row",[a("Col",{attrs:{span:"24"}},[a("Table",{ref:"selection",attrs:{size:"small",columns:t.columnsInvoice,data:t.ninvoiceList}})],1)],1)],1),t._v(" "),a("Form",{attrs:{"label-position":"top"}},[a("Row",[a("Col",{attrs:{span:"24"}},[a("p",{staticClass:"soltTitle margin-bottom-10"},[t._v("销售货物或者提供应税劳务清单")])])],1),t._v(" "),a("Row",{staticClass:"expand-row"},[a("Col",{attrs:{span:"11"}},[a("Col",{attrs:{span:"11"}},[t._v("采购商名称:")]),t._v(" "),a("Col",{attrs:{span:"11"}},[t._v("固1213445566")])],1),t._v(" "),a("Col",{attrs:{span:"11",offset:"2"}},[a("Col",{attrs:{span:"11",offset:"2"}},[t._v("销售方名称: ")]),t._v(" "),a("Col",{attrs:{span:"11"}},[t._v("固定资产采购订单")])],1)],1),t._v(" "),a("Row",{staticClass:"expand-row"},[a("Col",{attrs:{span:"11"}},[a("Col",{attrs:{span:"11"}},[t._v("发票金额:")]),t._v(" "),a("Col",{attrs:{span:"11"}},[t._v("固1213445566")])],1),t._v(" "),a("Col",{attrs:{span:"11",offset:"2"}},[a("Col",{attrs:{span:"11",offset:"2"}},[t._v("税额: ")]),t._v(" "),a("Col",{attrs:{span:"11"}},[t._v("固定资产采购订单")])],1)],1),t._v(" "),a("Row",[a("Col",{attrs:{span:"24"}},[a("Table",{ref:"selection",attrs:{size:"small",columns:t.columnsInvoice,data:t.invoiceList}})],1)],1)],1)],1)],1)},s=[];i._withStripped=!0;var n={render:i,staticRenderFns:s};e.default=n},999:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(542),s=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,function(){return i[t]})}(n);var o=a(1e3),r=a.n(o),l=a(1),c=l(s.a,r.a,!1,null,null,null);c.options.__file="src/views/clearingTicket/component/applicationFile.vue",e.default=c.exports}});