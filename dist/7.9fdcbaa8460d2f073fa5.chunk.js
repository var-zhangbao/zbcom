webpackJsonp([7],{1018:function(t,a,e){"use strict";function s(t){d||e(1019)}Object.defineProperty(a,"__esModule",{value:!0});var i=e(550),n=e.n(i);for(var l in i)"default"!==l&&function(t){e.d(a,t,function(){return i[t]})}(l);var r=e(1021),o=e.n(r),d=!1,v=e(1),c=s,p=v(n.a,o.a,!1,c,"data-v-84524b16",null);p.options.__file="src/views/deliver/tabChilds/deliverMainInfo.vue",a.default=p.exports},1019:function(t,a,e){var s=e(1020);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e(18)("888c77a0",s,!1)},1020:function(t,a,e){a=t.exports=e(17)(void 0),a.push([t.i,"\n.expand-row[data-v-84524b16] {\n    margin-bottom: 16px;\n    margin-top: 16px;\n}\n",""])},1021:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticStyle:{background:"#fff"}},[e("p",{attrs:{slot:"title"},slot:"title"},[e("Icon",{attrs:{type:"flag"}}),t._v("  基本信息")],1),t._v(" "),e("div",[e("Row",{staticClass:"expand-row"},[e("Col",{attrs:{span:"11"}},[e("Col",{attrs:{span:"11",offset:"2"}},[t._v("订单名称:")]),t._v(" "),e("Col",{staticClass:"greyCol",attrs:{span:"11"}},[t._v(t._s(t.deliverMainData.contractName))])],1),t._v(" "),e("Col",{attrs:{span:"11",offset:"2"}},[e("Col",{attrs:{span:"11",offset:"2"}},[t._v("订单编号: ")]),t._v(" "),e("Col",{staticClass:"greyCol",attrs:{span:"11"}},[t._v(t._s(t.deliverMainData.contractCode))])],1)],1),t._v(" "),e("Row",{staticClass:"expand-row"},[e("Col",{attrs:{span:"11"}},[e("Col",{attrs:{span:"11",offset:"2"}},[t._v("发货单号:")]),t._v(" "),e("Col",{staticClass:"greyCol",attrs:{span:"11"}},[t._v(t._s(t.deliverMainData.dispatchBillNo))])],1),t._v(" "),e("Col",{attrs:{span:"11",offset:"2"}},[e("Col",{attrs:{span:"11",offset:"2"}},[t._v("相对方单位: ")]),t._v(" "),e("Col",{staticClass:"greyCol",attrs:{span:"11"}},[t._v(t._s(t.deliverMainData.relativeName))])],1)],1),t._v(" "),e("Row",{staticClass:"expand-row"},[e("Col",{attrs:{span:"11"}},[e("Col",{attrs:{span:"11",offset:"2"}},[t._v("订单承办人: ")]),t._v(" "),e("Col",{staticClass:"greyCol",attrs:{span:"11"}},[t._v(t._s(t.deliverMainData.contractor))])],1),t._v(" "),e("Col",{attrs:{span:"11",offset:"2"}},[e("Col",{attrs:{span:"11",offset:"2"}},[t._v("发货通知方: ")]),t._v(" "),e("Col",{staticClass:"greyCol",attrs:{span:"11"}},[t._v(t._s(t.notice))])],1)],1),t._v(" "),e("Row",{staticClass:"expand-row"},[e("Col",{attrs:{span:"11"}},[e("Col",{attrs:{span:"11",offset:"2"}},[t._v("采购方:")]),t._v(" "),e("Col",{staticClass:"greyCol",attrs:{span:"11"}},[t._v(t._s(t.deliverMainData.demanderName))])],1)],1)],1),t._v(" "),e("p",{attrs:{slot:"title"},slot:"title"},[e("Icon",{attrs:{type:"network"}}),t._v("  物流信息")],1),t._v(" "),t.isOnlineOrder?e("div",[e("Row",{staticClass:"expand-row"},[e("Col",{attrs:{span:"11"}},[e("Col",{attrs:{span:"11",offset:"2"}},[t._v("发货人:")]),t._v(" "),e("Col",{staticClass:"greyCol",attrs:{span:"11"}},[t._v(t._s(t.deliverMainData.dispatchName))])],1),t._v(" "),e("Col",{attrs:{span:"11",offset:"2"}},[e("Col",{attrs:{span:"11",offset:"2"}},[t._v("联系电话: ")]),t._v(" "),e("Col",{staticClass:"greyCol",attrs:{span:"11"}},[t._v(t._s(t.deliverMainData.dispatchMobile))])],1)],1),t._v(" "),e("Row",{staticClass:"expand-row"},[e("Col",{attrs:{span:"11"}},[e("Col",{attrs:{span:"11",offset:"2"}},[t._v("收货单位:")]),t._v(" "),e("Col",{staticClass:"greyCol",attrs:{span:"11"}},[t._v(t._s(t.deliverMainData.dispatchCompany))])],1),t._v(" "),e("Col",{attrs:{span:"11",offset:"2"}},[e("Col",{attrs:{span:"11",offset:"2"}},[t._v("发货地址: ")]),t._v(" "),e("Col",{staticClass:"greyCol",attrs:{span:"11"}},[t._v(t._s(t.deliverMainData.dispatchProvinceName)+t._s(t.deliverMainData.dispatchCityName)+t._s(t.deliverMainData.dispatchExpAreaName)+t._s(t.deliverMainData.dispatchAddress))])],1)],1),t._v(" "),e("Row",{staticClass:"expand-row"},[e("Col",{attrs:{span:"11"}},[e("Col",{attrs:{span:"11",offset:"2"}},[t._v("收货人:")]),t._v(" "),e("Col",{staticClass:"greyCol",attrs:{span:"11"}},[t._v(t._s(t.deliverMainData.director))])],1),t._v(" "),e("Col",{attrs:{span:"11",offset:"2"}},[e("Col",{attrs:{span:"11",offset:"2"}},[t._v("收货单位:")]),t._v(" "),e("Col",{staticClass:"greyCol",attrs:{span:"11"}},[t._v(t._s(t.deliverMainData.receiverCompany))])],1)],1),t._v(" "),e("Row",{staticClass:"expand-row"},[e("Col",{attrs:{span:"11"}},[e("Col",{attrs:{span:"11",offset:"2"}},[t._v("收货地址: ")]),t._v(" "),e("Col",{staticClass:"greyCol",attrs:{span:"11"}},[t._v("\n                "+t._s(t.deliverMainData.receiverAddress)+"\n                ")])],1),t._v(" "),e("Col",{attrs:{span:"11",offset:"2"}},[e("Col",{attrs:{span:"11",offset:"2"}},[t._v("物流公司: ")]),t._v(" "),e("Col",{staticClass:"greyCol",attrs:{span:"11"}},[t._v(t._s(t.deliverMainData.expressCompany))])],1)],1),t._v(" "),e("Row",{staticClass:"expand-row"},[e("Col",{attrs:{span:"11"}},[e("Col",{attrs:{span:"11",offset:"2"}},[t._v("快递类型:")]),t._v(" "),e("Col",{staticClass:"greyCol",attrs:{span:"11"}},[t._v(t._s(t.deliverMainData.expTypeName))])],1),t._v(" "),0!=t.deliverMainData.state?e("Col",{attrs:{span:"11",offset:"2"}},[e("Col",{attrs:{span:"11",offset:"2"}},[t._v("物流单号:")]),t._v(" "),e("Col",{staticClass:"greyCol",attrs:{span:"11"}},[t._v(t._s(t.deliverMainData.logisticsCorpCode))])],1):e("Col",{attrs:{span:"11",offset:"2"}},[e("Col",{attrs:{span:"11",offset:"2"}},[t._v("物流单号:")]),t._v(" "),e("Col",{staticClass:"greyCol",attrs:{span:"11"}},[t._v("无")])],1)],1),t._v(" "),e("Row",{staticClass:"expand-row"},[e("Col",{attrs:{span:"11"}},[e("Col",{attrs:{span:"11",offset:"2"}},[t._v("备注:")]),t._v(" "),e("Col",{staticClass:"greyCol",attrs:{span:"11"}},[t._v(t._s(t.deliverMainData.logisticsRemarks))])],1),t._v(" "),e("Col",{attrs:{span:"11",offset:"2"}},[e("Col",{attrs:{span:"11",offset:"2"}},[t._v("收货人电话:")]),t._v(" "),e("Col",{staticClass:"greyCol",attrs:{span:"11"}},[t._v(t._s(t.deliverMainData.receiverMobile))])],1)],1)],1):e("div",[e("Row",{staticClass:"expand-row"},[e("Col",{attrs:{span:"11"}},[e("Col",{attrs:{span:"11",offset:"2"}},[t._v("收货人:")]),t._v(" "),e("Col",{staticClass:"greyCol",attrs:{span:"11"}},[t._v(t._s(t.deliverMainData.contractor))])],1),t._v(" "),e("Col",{attrs:{span:"11",offset:"2"}},[e("Col",{attrs:{span:"11",offset:"2"}},[t._v("联系电话: ")]),t._v(" "),e("Col",{staticClass:"greyCol",attrs:{span:"11"}},[t._v(t._s(t.deliverMainData.dispatchMobile))])],1)],1),t._v(" "),e("Row",{staticClass:"expand-row"},[e("Col",{attrs:{span:"11"}},[e("Col",{attrs:{span:"11",offset:"2"}},[t._v("收货单位:")]),t._v(" "),e("Col",{staticClass:"greyCol",attrs:{span:"11"}},[t._v(t._s(t.deliverMainData.receiverCompany))])],1),t._v(" "),e("Col",{attrs:{span:"11",offset:"2"}},[e("Col",{attrs:{span:"11",offset:"2"}},[t._v("收货地址: ")]),t._v(" "),e("Col",{staticClass:"greyCol",attrs:{span:"11"}},[t._v("\n                "+t._s(t.deliverMainData.receiverAddress))])],1)],1),t._v(" "),e("Row",{staticClass:"expand-row"},[e("Col",{attrs:{span:"11"}},[e("Col",{attrs:{span:"11",offset:"2"}},[t._v("配送方式:")]),t._v(" "),e("Col",{staticClass:"greyCol",attrs:{span:"11"}},[t._v(t._s(t.deliverMainData.distributionMethod))])],1),t._v(" "),e("Col",{attrs:{span:"11",offset:"2"}},[e("Col",{attrs:{span:"11",offset:"2"}},[t._v("物流公司: ")]),t._v(" "),e("Col",{staticClass:"greyCol",attrs:{span:"11"}},[t._v(t._s(t.deliverMainData.expressCompany))])],1)],1),t._v(" "),e("Row",{staticClass:"expand-row"},[e("Col",{attrs:{span:"11"}},[e("Col",{attrs:{span:"11",offset:"2"}},[t._v("物流单号:")]),t._v(" "),e("Col",{staticClass:"greyCol",attrs:{span:"11"}},[t._v(t._s(t.deliverMainData.dispatchOrderNo))])],1),t._v(" "),e("Col",{attrs:{span:"11",offset:"2"}},[e("Col",{attrs:{span:"11",offset:"2"}},[t._v("备注:")]),t._v(" "),e("Col",{staticClass:"greyCol",attrs:{span:"11"}},[t._v(t._s(t.deliverMainData.remark))])],1)],1)],1),t._v(" "),e("p",{attrs:{slot:"title"},slot:"title"},[e("Icon",{attrs:{type:"gear-a"}}),t._v("  系统信息")],1),t._v(" "),e("div",[e("Row",{staticClass:"expand-row"},[e("Col",{attrs:{span:"11"}},[e("Col",{attrs:{span:"11",offset:"2"}},[t._v("发货状态:")]),t._v(" "),e("Col",{directives:[{name:"show",rawName:"v-show",value:0==t.deliverMainData.state,expression:"deliverMainData.state == 0"}],staticClass:"greyCol",attrs:{span:"11"}},[t._v("待发货")]),t._v(" "),e("Col",{directives:[{name:"show",rawName:"v-show",value:1==t.deliverMainData.state,expression:"deliverMainData.state == 1"}],staticClass:"greyCol",attrs:{span:"11"}},[t._v("已发货")]),t._v(" "),e("Col",{directives:[{name:"show",rawName:"v-show",value:2==t.deliverMainData.state,expression:"deliverMainData.state == 2"}],staticClass:"greyCol",attrs:{span:"11"}},[t._v("已接收")]),t._v(" "),e("Col",{directives:[{name:"show",rawName:"v-show",value:3==t.deliverMainData.state,expression:"deliverMainData.state == 3"}],staticClass:"greyCol",attrs:{span:"11"}},[t._v("已验收")]),t._v(" "),e("Col",{directives:[{name:"show",rawName:"v-show",value:4==t.deliverMainData.state,expression:"deliverMainData.state == 4"}],staticClass:"greyCol",attrs:{span:"11"}},[t._v("已拒收")]),t._v(" "),e("Col",{directives:[{name:"show",rawName:"v-show",value:5==t.deliverMainData.state,expression:"deliverMainData.state == 5"}],staticClass:"greyCol",attrs:{span:"11"}},[t._v("已拒验")])],1),t._v(" "),e("Col",{attrs:{span:"11",offset:"2"}},[e("Col",{attrs:{span:"11",offset:"2"}},[t._v("发货时间: ")]),t._v(" "),e("Col",{staticClass:"greyCol",attrs:{span:"11"}},[t._v(t._s(t._f("time")(t.deliverMainData.createTime)))])],1)],1),t._v(" "),e("Row",{staticClass:"expand-row"},[e("Col",{attrs:{span:"11"}},[e("Col",{attrs:{span:"11",offset:"2"}},[t._v("创建人:")]),t._v(" "),e("Col",{staticClass:"greyCol",attrs:{span:"11"}},[t._v(t._s(t.deliverMainData.createUser))])],1)],1)],1)])},i=[];s._withStripped=!0;var n={render:s,staticRenderFns:i};a.default=n},1022:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e(551),i=e.n(s);for(var n in s)"default"!==n&&function(t){e.d(a,t,function(){return s[t]})}(n);var l=e(1023),r=e.n(l),o=e(1),d=o(i.a,r.a,!1,null,null,null);d.options.__file="src/views/deliver/tabChilds/deliverMainList.vue",a.default=d.exports},1023:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticStyle:{background:"#fff"}},[e("p",{attrs:{slot:"title"},slot:"title"},[e("Icon",{attrs:{type:"navicon"}}),t._v("  基本信息")],1),t._v(" "),e("Table",{staticClass:"margin-top-10",attrs:{columns:t.columns,data:t.deliverMainData,size:"small",border:!1}})],1)},i=[];s._withStripped=!0;var n={render:s,staticRenderFns:i};a.default=n},1024:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e(552),i=e.n(s);for(var n in s)"default"!==n&&function(t){e.d(a,t,function(){return s[t]})}(n);var l=e(1025),r=e.n(l),o=e(1),d=o(i.a,r.a,!1,null,null,null);d.options.__file="src/views/deliver/tabChilds/deliverMainFile.vue",a.default=d.exports},1025:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticStyle:{background:"#fff"}},[e("p",{attrs:{slot:"title"},slot:"title"},[e("Icon",{attrs:{type:"paperclip"}}),t._v("  基本信息")],1),t._v(" "),e("Table",{staticClass:"margin-top-10",attrs:{columns:t.columns2,data:t.deliverMainFile,size:"small",border:!1}})],1)},i=[];s._withStripped=!0;var n={render:s,staticRenderFns:i};a.default=n},1026:function(t,a,e){"use strict";function s(t){d||e(1027)}Object.defineProperty(a,"__esModule",{value:!0});var i=e(553),n=e.n(i);for(var l in i)"default"!==l&&function(t){e.d(a,t,function(){return i[t]})}(l);var r=e(1029),o=e.n(r),d=!1,v=e(1),c=s,p=v(n.a,o.a,!1,c,"data-v-c554f348",null);p.options.__file="src/views/deliver/tabChilds/deliverMainLogistics.vue",a.default=p.exports},1027:function(t,a,e){var s=e(1028);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e(18)("aca2c966",s,!1)},1028:function(t,a,e){a=t.exports=e(17)(void 0),a.push([t.i,"\n.logistics[data-v-c554f348]{\n    padding: 10px 0;\n    border-bottom: 1px solid #eee;\n}\n.ivu-badge-dot[data-v-c554f348]{\n    background: #5cb85c !important;\n    right: 0 ;\n}\n.logisticsDate[data-v-c554f348]{\n    color:#f0f0f0;\n    padding-left: 20px;\n}\n.logisticsDes[data-v-c554f348]{\n    color:red;\n}\n.xpadding20[data-v-c554f348]{\n    padding: 20px 0;\n}\n",""])},1029:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticStyle:{background:"#fff"}},[e("p",{attrs:{slot:"title"},slot:"title"},[e("Icon",{attrs:{type:"ios-calendar-outline"}}),t._v("  发货物流")],1),t._v(" "),e("Row",[e("Col",{attrs:{span:23,offset:1}},[e("p",{staticClass:"xpadding20"},[t._v("快递公司："),e("span",{staticClass:"greyCol"},[t._v(t._s(t.logistics.shipperName))]),t._v(" 单号："),e("span",{staticClass:"greyCol"},[t._v(t._s(t.logistics.logisticCode))]),t._v(" 状态："),e("span",{staticClass:"greyCol"},[t._v(t._s(null==t.logistics.reason?"无":t.logistics.reason))])])])],1),t._v(" "),t._l(t.logistics.traces,function(a,s){return 0!=t.logistics.traces.length?e("Row",{key:s,staticClass:"logistics"},[e("Col",{attrs:{span:4}},[e("div",{staticClass:"logisticsDate"},[e("span",[t._v(t._s(a.acceptTime))])])]),t._v(" "),e("Col",{attrs:{span:18,offset:"2"}},[e("div",{staticClass:"logisticsDes"},[e("p",[t._v(t._s(a.acceptStation))])])])],1):t._e()})],2)},i=[];s._withStripped=!0;var n={render:s,staticRenderFns:i};a.default=n},1030:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticStyle:{background:"#eee"}},[e("keep-alive",[e("Card",{attrs:{bordered:!1}},[e("Tabs",{attrs:{value:"name1"},on:{"on-click":t.tabChange}},[e("TabPane",{attrs:{label:"主信息",name:"name1"}},[e("deliverMainInfo",{on:{wlMsg:t.wlLition}})],1),t._v(" "),e("TabPane",{attrs:{label:"明细信息",name:"name2"}},[e("deliverMainList")],1),t._v(" "),e("TabPane",{attrs:{label:"物流信息",disabled:t.sign,name:"name4"}},[e("deliverMainLogistics",{attrs:{logistics:t.logData}})],1),t._v(" "),e("TabPane",{attrs:{label:"附件",name:"name3"}},[e("deliverMainFile")],1)],1)],1)],1)],1)},i=[];s._withStripped=!0;var n={render:s,staticRenderFns:i};a.default=n},277:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e(549),i=e.n(s);for(var n in s)"default"!==n&&function(t){e.d(a,t,function(){return s[t]})}(n);var l=e(1030),r=e.n(l),o=e(1),d=o(i.a,r.a,!1,null,null,null);d.options.__file="src/views/deliver/deliverDetail.vue",a.default=d.exports},549:function(t,a,e){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(a,"__esModule",{value:!0});var i=e(1018),n=s(i),l=e(1022),r=s(l),o=e(1024),d=s(o),v=e(1026),c=s(v);a.default={name:"",data:function(){return{dispatchBillId:"",deliverMainLog:[],shipperCode:"",logisticCode:"",sign:!1,isShow:!0,logData:{}}},mounted:function(){this.init()},methods:{init:function(){this.dispatchBillId=this.$route.query.dispatchBillId.toString(),this.sign=this.$route.query.sign.toString(),"0"==this.sign?this.sign=!0:this.sign=!1},tabChange:function(t){"name4"==t&&this.isShow&&this.getDeliverMainLog()},getDeliverMainLog:function(){var t=this;this.$httpServer("/logistics/orderHandle.do",{shipperCode:this.shipperCode,logisticCode:this.logisticCode}).then(function(a){t.isShow=!1,t.logData=a.result})},wlLition:function(){this.shipperCode=arguments.length<=0?void 0:arguments[0],this.logisticCode=arguments.length<=1?void 0:arguments[1]}},components:{deliverMainInfo:n.default,deliverMainList:r.default,deliverMainFile:d.default,deliverMainLogistics:c.default}}},550:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={name:"",data:function(){return{deliverMainData:{deliverAddress:""},dispatchBillId:"",isOnlineOrder:"1",wlCode:"",wlOrder:"",state:"",notice:""}},mounted:function(){this.init()},methods:{init:function(){this.dispatchBillId=this.$route.query.dispatchBillId.toString(),this.getDeliverMainData()},getDeliverMainData:function(){var t=this;this.$httpServer("/dispatch/getDispatchBill.do",{billId:this.dispatchBillId}).then(function(a){t.deliverMainData=a.result,t.isOnlineOrder=a.result.isOnlineOrder,"1"==t.isOnlineOrder?t.isOnlineOrder=!0:t.isOnlineOrder=!1,t.wlCode=a.result.logisticsCorpCode,t.wlOrder=a.result.logisticszCode,0==a.result.state?t.state=!0:t.state=!1,t.noticeFn(),t.sendWlMsg()})},sendWlMsg:function(){this.$emit("wlMsg",this.wlCode,this.wlOrder)},noticeFn:function(){var t=this;this.$httpServer("/dispatch/dispatchNoticeMan.do",{contractId:this.deliverMainData.contractId}).then(function(a){var e=[];if(200==a.status)for(var s=0;s<a.result.length;s++)e.push(a.result[s].loginName);t.notice=e.join(" / ")})}}}},551:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={name:"",data:function(){return{deliverMainData:[],dispatchBillId:"",columns:[{title:"序号",type:"index",width:80,align:"center"},{title:"物资名称",key:"materialName",align:"center",width:200},{title:"材料规格型号",key:"spectype",align:"center",width:200},{title:"图号",key:"figureNo",align:"center",width:200},{title:"单位",key:"measureUnit",align:"center",width:200},{title:"订单数量",key:"needQuantity",align:"center",width:200},{title:"累计验收数量",key:"checkedNum",align:"center",width:200},{title:"发货数量",key:"dispatchQuantity",align:"center",width:200}]}},mounted:function(){this.init()},methods:{init:function(){this.dispatchBillId=this.$route.query.dispatchBillId.toString(),this.getDeliverMainData()},getDeliverMainData:function(){var t=this;this.$httpServer("/dispatch/getDispatchBillItem.do",{billId:this.dispatchBillId}).then(function(a){t.deliverMainData=a.result})}}}},552:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e(10),i=function(t){return t&&t.__esModule?t:{default:t}}(s);a.default={name:"",data:function(){var t=this;return{deliverMainFile:[],columns2:[{type:"index",title:"序号",width:60},{title:"附件名称",key:"name"},{title:"上传人",key:"uploadUserName"},{title:"上传日期",key:"uploaddate",render:function(t,a){return t("span",i.default.format(a.row.uploaddate))}},{title:"操作",key:"caozuo",render:function(a,e){return a("span",[a("a",{style:{},on:{click:function(){t.uploadFile(e.row.id)}}},"下载")])}}]}},mounted:function(){this.init()},methods:{init:function(){this.dispatchBillId=this.$route.query.dispatchBillId.toString(),this.getDeliverMainFile()},getDeliverMainFile:function(){var t=this;this.$httpServer("/dispatch/getDispatchFile.do",{billId:this.dispatchBillId}).then(function(a){t.deliverMainFile=a.result})},uploadFile:function(t){window.open("/dispatch/downloadFile.do?fileId="+t)}}}},553:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={name:"",data:function(){return{}},props:{logistics:{type:Object,default:function(){return{message:"hello"}}}}}}});