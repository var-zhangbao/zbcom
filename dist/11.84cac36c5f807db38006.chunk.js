webpackJsonp([11],{1061:function(t,a,e){"use strict";function s(t){c||e(1062)}Object.defineProperty(a,"__esModule",{value:!0});var n=e(577),i=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(a,t,function(){return n[t]})}(o);var l=e(1064),r=e.n(l),c=!1,v=e(4),f=s,u=v(i.a,r.a,!1,f,"data-v-20be08b0",null);u.options.__file="src/views/check/acceptance/tabChilds/acceptanceMainInfo.vue",a.default=u.exports},1062:function(t,a,e){var s=e(1063);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e(20)("67e6aa28",s,!1)},1063:function(t,a,e){a=t.exports=e(19)(void 0),a.push([t.i,"\n.expand-row[data-v-20be08b0] {\n    margin-bottom: 16px;\n    margin-top: 16px;\n}\n",""])},1064:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticStyle:{background:"#fff"}},[e("p",{attrs:{slot:"title"},slot:"title"},[e("Icon",{attrs:{type:"flag"}}),t._v("  基本信息")],1),t._v(" "),e("div",[e("Row",{staticClass:"expand-row"},[e("Col",{attrs:{span:"11"}},[e("Col",{attrs:{span:"11",offset:"2"}},[t._v("到货验收单号:")]),t._v(" "),e("Col",{staticClass:"greyCol",attrs:{span:"11"}},[t._v(t._s(t.mainInfoData.arrivalCheckBillNo))])],1),t._v(" "),e("Col",{attrs:{span:"11",offset:"2"}},[e("Col",{attrs:{span:"11",offset:"2"}},[t._v("订单编号: ")]),t._v(" "),e("Col",{staticClass:"greyCol",attrs:{span:"11"}},[t._v(t._s(t.mainInfoData.contractCode))])],1)],1),t._v(" "),e("Row",{staticClass:"expand-row"},[e("Col",{attrs:{span:"11"}},[e("Col",{attrs:{span:"11",offset:"2"}},[t._v("订单名称:")]),t._v(" "),e("Col",{staticClass:"greyCol",attrs:{span:"11"}},[t._v(t._s(t.mainInfoData.contractName))])],1),t._v(" "),e("Col",{attrs:{span:"11",offset:"2"}},[e("Col",{attrs:{span:"11",offset:"2"}},[t._v("采购商名称:")]),t._v(" "),e("Col",{staticClass:"greyCol",attrs:{span:"11"}},[t._v(t._s(t.mainInfoData.demanderName))])],1)],1),t._v(" "),e("Row",{staticClass:"expand-row"},[e("Col",{attrs:{span:"11"}},[e("Col",{attrs:{span:"11",offset:"2"}},[t._v("供应商名称: ")]),t._v(" "),e("Col",{staticClass:"greyCol",attrs:{span:"11"}},[t._v(t._s(t.mainInfoData.relativeName))])],1),t._v(" "),e("Col",{attrs:{span:"11",offset:"2"}},[e("Col",{attrs:{span:"11",offset:"2"}},[t._v("供应商订单承办人:")]),t._v(" "),e("Col",{staticClass:"greyCol",attrs:{span:"11"}},[t._v(t._s(t.mainInfoData.director))])],1)],1),t._v(" "),e("Row",{staticClass:"expand-row"},[e("Col",{attrs:{span:"11"}},[e("Col",{attrs:{span:"11",offset:"2"}},[t._v("验收通知方: ")]),t._v(" "),e("Col",{staticClass:"greyCol",attrs:{span:"11"}},[t._v(t._s(t.notice))])],1),t._v(" "),e("Col",{attrs:{span:"11",offset:"2"}},[e("Col",{attrs:{span:"11",offset:"2"}},[t._v("验收人:")]),t._v(" "),e("Col",{staticClass:"greyCol",attrs:{span:"11"}},[t._v(t._s(t.mainInfoData.checker))])],1)],1),t._v(" "),e("Row",{staticClass:"expand-row"},[e("Col",{attrs:{span:"11"}},[e("Col",{attrs:{span:"11",offset:"2"}},[t._v("验收时间: ")]),t._v(" "),e("Col",{staticClass:"greyCol",attrs:{span:"11"}},[t._v(t._s(t._f("time")(t.mainInfoData.updateDate)))])],1),t._v(" "),e("Col",{attrs:{span:"11",offset:"2"}},[e("Col",{attrs:{span:"11",offset:"2"}},[t._v("发货单号:")]),t._v(" "),e("Col",{staticClass:"greyCol",attrs:{span:"11"}},[t._v(t._s(t.mainInfoData.dispatchBillNo))])],1)],1),t._v(" "),e("Row",{staticClass:"expand-row"},[e("Col",{attrs:{span:"11"}},[e("Col",{attrs:{span:"11",offset:"2"}},[t._v("验收意见: ")]),t._v(" "),e("Col",{staticClass:"greyCol",attrs:{span:"11"}},[t._v(t._s(t.mainInfoData.checkOpinion))])],1)],1)],1),t._v(" "),e("p",{attrs:{slot:"title"},slot:"title"},[e("Icon",{attrs:{type:"gear-a"}}),t._v("  到货信息")],1),t._v(" "),e("div",[e("Row",{staticClass:"expand-row"},[e("Col",{attrs:{span:"11"}},[e("Col",{attrs:{span:"11",offset:"2"}},[t._v("接收人:")]),t._v(" "),e("Col",{staticClass:"greyCol",attrs:{span:"11"}},[t._v(t._s(t.mainInfoData.receiver))])],1),t._v(" "),e("Col",{attrs:{span:"11",offset:"2"}},[e("Col",{attrs:{span:"11",offset:"2"}},[t._v("到货通知方:")]),t._v(" "),e("Col",{staticClass:"greyCol",attrs:{span:"11"}},[t._v(t._s(t.notice))])],1)],1),t._v(" "),e("Row",{staticClass:"expand-row"},[e("Col",{attrs:{span:"11"}},[e("Col",{attrs:{span:"11",offset:"2"}},[t._v("到货意见: ")]),t._v(" "),e("Col",{staticClass:"greyCol",attrs:{span:"11"}},[t._v(t._s(t.mainInfoData.arrivalOpinion))])],1)],1)],1),t._v(" "),e("p",{attrs:{slot:"title"},slot:"title"},[e("Icon",{attrs:{type:"gear-a"}}),t._v("  系统信息")],1),t._v(" "),e("div",[e("Row",{staticClass:"expand-row"},[e("Col",{attrs:{span:"11"}},[e("Col",{attrs:{span:"11",offset:"2"}},[t._v("验收状态:")]),t._v(" "),e("Col",{directives:[{name:"show",rawName:"v-show",value:"0"==t.mainInfoData.state,expression:"mainInfoData.state == '0'"}],staticClass:"greyCol",attrs:{span:"11"}},[t._v("待接收")]),t._v(" "),e("Col",{directives:[{name:"show",rawName:"v-show",value:"1"==t.mainInfoData.state,expression:"mainInfoData.state == '1'"}],staticClass:"greyCol",attrs:{span:"11"}},[t._v("已接收")]),t._v(" "),e("Col",{directives:[{name:"show",rawName:"v-show",value:"2"==t.mainInfoData.state,expression:"mainInfoData.state == '2'"}],staticClass:"greyCol",attrs:{span:"11"}},[t._v("已验收")]),t._v(" "),e("Col",{directives:[{name:"show",rawName:"v-show",value:"3"==t.mainInfoData.state,expression:"mainInfoData.state == '3'"}],staticClass:"greyCol",attrs:{span:"11"}},[t._v("已拒验")]),t._v(" "),e("Col",{directives:[{name:"show",rawName:"v-show",value:"4"==t.mainInfoData.state,expression:"mainInfoData.state == '4'"}],staticClass:"greyCol",attrs:{span:"11"}},[t._v("已结算")]),t._v(" "),e("Col",{directives:[{name:"show",rawName:"v-show",value:"5"==t.mainInfoData.state,expression:"mainInfoData.state == '5'"}],staticClass:"greyCol",attrs:{span:"11"}},[t._v("待验收")]),t._v(" "),e("Col",{directives:[{name:"show",rawName:"v-show",value:"6"==t.mainInfoData.state,expression:"mainInfoData.state == '6'"}],staticClass:"greyCol",attrs:{span:"11"}},[t._v("已拒收")])],1),t._v(" "),e("Col",{attrs:{span:"11",offset:"2"}},[e("Col",{attrs:{span:"11",offset:"2"}},[t._v("最后处理时间: ")]),t._v(" "),e("Col",{staticClass:"greyCol",attrs:{span:"11"}},[t._v(t._s(t._f("time")(t.mainInfoData.updateDate)))])],1)],1),t._v(" "),e("Row",{staticClass:"expand-row"},[e("Col",{attrs:{span:"11"}},[e("Col",{attrs:{span:"11",offset:"2"}},[t._v("创建人:")]),t._v(" "),e("Col",{staticClass:"greyCol",attrs:{span:"11"}},[t._v(t._s(t.mainInfoData.createName))])],1),t._v(" "),e("Col",{attrs:{span:"11",offset:"2"}},[e("Col",{attrs:{span:"11",offset:"2"}},[t._v("最后修改人: ")]),t._v(" "),e("Col",{staticClass:"greyCol",attrs:{span:"11"}},[t._v(t._s(t.mainInfoData.updateName))])],1)],1)],1)])},n=[];s._withStripped=!0;var i={render:s,staticRenderFns:n};a.default=i},1065:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e(578),n=e.n(s);for(var i in s)"default"!==i&&function(t){e.d(a,t,function(){return s[t]})}(i);var o=e(1066),l=e.n(o),r=e(4),c=r(n.a,l.a,!1,null,null,null);c.options.__file="src/views/check/acceptance/tabChilds/acceptanceMainList.vue",a.default=c.exports},1066:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticStyle:{background:"#fff"}},[e("p",{attrs:{slot:"title"},slot:"title"},[e("Icon",{attrs:{type:"navicon"}}),t._v("  基本信息")],1),t._v(" "),e("Table",{staticClass:"margin-top-10",attrs:{columns:t.columns,data:t.mainListData,size:"small",border:!1}})],1)},n=[];s._withStripped=!0;var i={render:s,staticRenderFns:n};a.default=i},1067:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e(579),n=e.n(s);for(var i in s)"default"!==i&&function(t){e.d(a,t,function(){return s[t]})}(i);var o=e(1068),l=e.n(o),r=e(4),c=r(n.a,l.a,!1,null,null,null);c.options.__file="src/views/check/acceptance/tabChilds/acceptanceMainFile.vue",a.default=c.exports},1068:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticStyle:{background:"#fff"}},[e("p",{attrs:{slot:"title"},slot:"title"},[e("Icon",{attrs:{type:"paperclip"}}),t._v("  附件信息")],1),t._v(" "),e("Table",{staticClass:"margin-top-10",attrs:{columns:t.columns2,data:t.FileLsit,size:"small",border:!1}})],1)},n=[];s._withStripped=!0;var i={render:s,staticRenderFns:n};a.default=i},1069:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticStyle:{background:"#eee"}},[e("Card",{attrs:{bordered:!1}},[e("Tabs",{attrs:{value:"name1"}},[e("TabPane",{attrs:{label:"主信息",name:"name1"}},[e("acceptanceMainInfo")],1),t._v(" "),e("TabPane",{attrs:{label:"明细信息",name:"name2"}},[e("acceptanceMainList")],1),t._v(" "),e("TabPane",{attrs:{label:"附件",name:"name3"}},[e("acceptanceMainFile")],1)],1)],1)],1)},n=[];s._withStripped=!0;var i={render:s,staticRenderFns:n};a.default=i},297:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e(576),n=e.n(s);for(var i in s)"default"!==i&&function(t){e.d(a,t,function(){return s[t]})}(i);var o=e(1069),l=e.n(o),r=e(4),c=r(n.a,l.a,!1,null,null,null);c.options.__file="src/views/check/acceptance/acceptanceDetail.vue",a.default=c.exports},576:function(t,a,e){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(a,"__esModule",{value:!0});var n=e(1061),i=s(n),o=e(1065),l=s(o),r=e(1067),c=s(r);a.default={name:"",data:function(){return{arrivalCheckBillId:""}},mounted:function(){this.init()},methods:{init:function(){this.arrivalCheckBillId=this.$route.query.arrivalCheckBillId.toString(),console.log(this.arrivalCheckBillId)}},components:{acceptanceMainInfo:i.default,acceptanceMainList:l.default,acceptanceMainFile:c.default}}},577:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={name:"",data:function(){return{arrivalCheckBillId:"",mainInfoData:{},notice:""}},mounted:function(){this.init()},methods:{init:function(){this.arrivalCheckBillId=this.$route.query.arrivalCheckBillId.toString(),console.log(this.arrivalCheckBillId),this.getMainInfo()},getMainInfo:function(){var t=this;this.$httpServer("/checkOfGoods/getArrivalCheckBill.do",{billId:this.arrivalCheckBillId}).then(function(a){console.log(a),200==a.status&&(t.mainInfoData=a.result.arrivalCheckBill,t.noticeFn())})},noticeFn:function(){var t=this;this.$httpServer("/arrivalOfGoods/arrivalCheckNoticeMan.do",{contractId:this.mainInfoData.contractId}).then(function(a){var e=[];if(200==a.status)for(var s=0;s<a.result.length;s++)e.push(a.result[s].loginName);t.notice=e.join(" / ")})}}}},578:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={name:"",data:function(){return{columns:[{title:"序号",type:"index",width:80,align:"center"},{title:"物资名称",key:"materialName",align:"center",width:200},{title:"材料规格型号",key:"spectype",align:"center",width:150},{title:"图号",key:"figureNo",align:"center",width:150},{title:"单位",key:"measureUnit",align:"center",width:200},{title:"订单数量",key:"needQuantity",align:"center",width:150},{title:"累计验收数量",key:"checkedQuantity",align:"center",width:150},{title:"发货数量",key:"dispatchQuantity",align:"center",width:150},{title:"到货数量",key:"arrivalNum",align:"center",width:150},{title:"验收货数量",key:"checkQuantity",align:"center",width:150}],mainListData:[]}},mounted:function(){this.init()},methods:{init:function(){this.arrivalCheckBillId=this.$route.query.arrivalCheckBillId.toString(),this.getMainList()},getMainList:function(){var t=this;this.$httpServer("/checkOfGoods/getArrivalCheckBillItem.do",{billId:this.arrivalCheckBillId}).then(function(a){console.log(a),200==a.status&&(t.mainListData=a.result.arrivalCheckBillItems)})}}}},579:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e(15),n=function(t){return t&&t.__esModule?t:{default:t}}(s);a.default={name:"",data:function(){var t=this;return{arrivalCheckBillId:"",columns2:[{type:"index",title:"序号",width:60},{title:"附件名称",key:"name"},{title:"上传人",key:"uploadUserName"},{title:"上传日期",key:"uploadTime",render:function(t,a){return t("span",n.default.format(a.row.uploadTime))}},{title:"操作",key:"caozuo",render:function(a,e){return a("span",[a("a",{style:{},on:{click:function(){t.uploadFile(e.row.id)}}},"下载")])}}],FileLsit:[]}},mounted:function(){this.init()},methods:{init:function(){this.arrivalCheckBillId=this.$route.query.arrivalCheckBillId.toString(),console.log(this.arrivalCheckBillId),this.getFileList()},getFileList:function(){var t=this,a={billId:this.arrivalCheckBillId};this.$httpServer("/checkOfGoods/getArrivalCheckBillFile.do",a).then(function(a){console.log(a),t.FileLsit=a.result.attachs})},uploadFile:function(t){window.open("/ync/checkOfGoods/downloadFile.do?fileId="+t)}}}}});