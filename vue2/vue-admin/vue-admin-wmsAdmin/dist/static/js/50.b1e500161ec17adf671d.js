webpackJsonp([50],{109:function(e,t,o){function a(e){o(795)}var n=o(29)(o(630),o(892),a,null,null);e.exports=n.exports},630:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"goodsstock",data:function(){return{formInline:{consignor:"",supplier:"",isZero:"",brand:"",batchNo:"",barcode:"",productName:""},loading:!0,tableData:[],currentPage:1,pageSize:10}},mounted:function(){this.loadData()},methods:{loadData:function(){var e=this;this.loading=!0,this.tableData=[{goodsId:"1",barcode:"SP2017984",consignor:"杭州塑料制品厂",supplier:"杭州化工集团有限公司",classify:"手机",brand:"华为",batchNo:"白色",productName:"荣耀",specification:"40*70",unit:"部",stockNo:"150",lockStock:"20",defectStock:"30",createdate:"2016-05-02"},{goodsId:"2",barcode:"SP2017985",consignor:"杭州塑料制品厂",supplier:"杭州化工集团有限公司",classify:"手机",brand:"华为",batchNo:"白色",productName:"荣耀",specification:"40*70",unit:"部",stockNo:"150",lockStock:"20",defectStock:"30",createdate:"2016-05-02"},{goodsId:"3",barcode:"SP2017986",consignor:"杭州塑料制品厂",supplier:"杭州化工集团有限公司",classify:"手机",brand:"华为",batchNo:"白色",productName:"荣耀",specification:"40*70",unit:"部",stockNo:"150",lockStock:"20",defectStock:"30",createdate:"2016-05-02"},{goodsId:"3",barcode:"SP2017987",consignor:"杭州塑料制品厂",supplier:"杭州化工集团有限公司",classify:"手机",brand:"华为",batchNo:"白色",productName:"荣耀",specification:"40*70",unit:"部",stockNo:"150",lockStock:"20",defectStock:"30",createdate:"2016-05-02"},{goodsId:"4",barcode:"SP2017988",consignor:"杭州塑料制品厂",supplier:"杭州化工集团有限公司",classify:"手机",brand:"华为",batchNo:"白色",productName:"荣耀",specification:"40*70",unit:"部",stockNo:"150",lockStock:"20",defectStock:"30",createdate:"2016-05-02"},{goodsId:"5",barcode:"SP2017989",consignor:"杭州塑料制品厂",supplier:"杭州化工集团有限公司",classify:"手机",brand:"华为",batchNo:"白色",productName:"荣耀",specification:"40*70",unit:"部",stockNo:"150",lockStock:"20",defectStock:"30",createdate:"2016-05-02"},{goodsId:"6",barcode:"SP2017910",consignor:"杭州塑料制品厂",supplier:"杭州化工集团有限公司",classify:"手机",brand:"华为",batchNo:"白色",productName:"荣耀",specification:"40*70",unit:"部",stockNo:"150",lockStock:"20",defectStock:"30",createdate:"2016-05-02"},{goodsId:"7",barcode:"SP2017911",consignor:"杭州塑料制品厂",supplier:"杭州化工集团有限公司",classify:"手机",brand:"华为",batchNo:"白色",productName:"荣耀",specification:"40*70",unit:"部",stockNo:"150",lockStock:"20",defectStock:"30",createdate:"2016-05-02"},{goodsId:"8",barcode:"SP2017912",consignor:"杭州塑料制品厂",supplier:"杭州化工集团有限公司",classify:"手机",brand:"华为",batchNo:"白色",productName:"荣耀",specification:"40*70",unit:"部",stockNo:"150",lockStock:"20",defectStock:"30",createdate:"2016-05-02"},{goodsId:"9",barcode:"SP2017913",consignor:"杭州塑料制品厂",supplier:"杭州化工集团有限公司",classify:"手机",brand:"华为",batchNo:"白色",productName:"荣耀",specification:"40*70",unit:"部",stockNo:"150",lockStock:"20",defectStock:"30",createdate:"2016-05-02"},{goodsId:"10",barcode:"SP2017914",consignor:"杭州塑料制品厂",supplier:"杭州化工集团有限公司",classify:"手机",brand:"华为",batchNo:"白色",productName:"荣耀",specification:"40*70",unit:"部",stockNo:"150",lockStock:"20",defectStock:"30",createdate:"2016-05-02"}],setTimeout(function(){e.loading=!1},100)},onSearch:function(){this.currentPage=1,console.log("onSearch!"),this.loadData()},doClear:function(){this.formInline={consignor:"",supplier:"",isZero:"",brand:"",batchNo:"",barcode:"",productName:""}},goFlow:function(e){this.$router.push({path:"/datachart/goods_stock/flow/"+e.goodsId})},handleSizeChange:function(e){this.pageSize=e,console.log("每页 "+e+" 条"),this.loadData()},handleCurrentChange:function(e){this.currentPage=e,this.loadData(),console.log("当前页: "+e)}}}},728:function(e,t,o){t=e.exports=o(95)(!0),t.push([e.i,".grid-container{height:auto;overflow:hidden}.grid-container .action-column{text-align:right}.grid-container .color-gred{color:#999}","",{version:3,sources:["D:/wmsAdmin/src/components/datachart/goodsstock/goodsStock.vue"],names:[],mappings:"AACA,gBACE,YAAa,AACb,eAAiB,CAClB,AACD,+BACE,gBAAkB,CACnB,AACD,4BACE,UAAY,CACb",file:"goodsStock.vue",sourcesContent:["\n.grid-container {\n  height: auto;\n  overflow: hidden;\n}\n.grid-container .action-column {\n  text-align: right;\n}\n.grid-container .color-gred {\n  color: #999;\n}\n"],sourceRoot:""}])},795:function(e,t,o){var a=o(728);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);o(96)("3d09a9c0",a,!0)},892:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"grid-container"},[o("div",{staticClass:"search-form"},[o("el-form",{attrs:{inline:!0,model:e.formInline}},[o("el-form-item",{attrs:{label:"货主"}},[o("el-input",{attrs:{placeholder:"货主"},model:{value:e.formInline.consignor,callback:function(t){e.formInline.consignor=t},expression:"formInline.consignor"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"供应商"}},[o("el-input",{attrs:{placeholder:"供应商"},model:{value:e.formInline.supplier,callback:function(t){e.formInline.supplier=t},expression:"formInline.supplier"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"排除零库存"}},[o("el-select",{attrs:{placeholder:"排除零库存"},model:{value:e.formInline.isZero,callback:function(t){e.formInline.isZero=t},expression:"formInline.isZero"}},[o("el-option",{attrs:{label:"区域一",value:"shanghai"}}),e._v(" "),o("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1),e._v(" "),o("el-form-item",{attrs:{label:"品牌"}},[o("el-input",{attrs:{placeholder:"品牌"},model:{value:e.formInline.brand,callback:function(t){e.formInline.brand=t},expression:"formInline.brand"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"批号/型号/货号"}},[o("el-input",{attrs:{placeholder:"批号/型号/货号"},model:{value:e.formInline.batchNo,callback:function(t){e.formInline.batchNo=t},expression:"formInline.batchNo"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"商品条码"}},[o("el-input",{attrs:{placeholder:"商品条码"},model:{value:e.formInline.barcode,callback:function(t){e.formInline.barcode=t},expression:"formInline.barcode"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"产品名称"}},[o("el-input",{attrs:{placeholder:"产品名称"},model:{value:e.formInline.productName,callback:function(t){e.formInline.productName=t},expression:"formInline.productName"}})],1),e._v(" "),o("el-form-item",[o("el-button",{attrs:{type:"primary"},on:{click:e.onSearch}},[e._v("查询")]),e._v(" "),o("el-button",{on:{click:e.doClear}},[e._v("清空")])],1)],1)],1),e._v(" "),e._m(0),e._v(" "),o("div",{staticClass:"grid-content"},[o("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.loading,expression:"loading",modifiers:{body:!0}}],staticStyle:{width:"100%"},attrs:{data:e.tableData,stripe:""}},[o("el-table-column",{attrs:{prop:"barcode",label:"商品条码",width:"150"}}),e._v(" "),o("el-table-column",{attrs:{prop:"consignor",label:"货主",width:"250"}}),e._v(" "),o("el-table-column",{attrs:{prop:"supplier",label:"供应商",width:"250"}}),e._v(" "),o("el-table-column",{attrs:{prop:"classify",label:"产品分类",width:"150"}}),e._v(" "),o("el-table-column",{attrs:{prop:"brand",label:"品牌",width:"150"}}),e._v(" "),o("el-table-column",{attrs:{prop:"batchNo",label:"批号/型号/货号",width:"150"}}),e._v(" "),o("el-table-column",{attrs:{prop:"productName",label:"产品名称",width:"150"}}),e._v(" "),o("el-table-column",{attrs:{prop:"specification",label:"规格",width:"150"}}),e._v(" "),o("el-table-column",{attrs:{prop:"unit",label:"单位",width:"150"}}),e._v(" "),o("el-table-column",{attrs:{prop:"stockNo",label:"库存量",width:"150"}}),e._v(" "),o("el-table-column",{attrs:{prop:"lockStock",label:"冻结库存",width:"150"}}),e._v(" "),o("el-table-column",{attrs:{prop:"defectStock",label:"次品库存",width:"150"}}),e._v(" "),o("el-table-column",{attrs:{fixed:"right",label:"操作",width:"80","class-name":"action-column"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("div",{staticClass:"action-column"},[o("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(o){o.preventDefault(),e.goFlow(t.row)}}},[e._v("\n\t\t\t          \t\t库存流水\n\t\t\t        \t")])],1)]}}])})],1)],1),e._v(" "),o("div",{staticClass:"grid-page"},[o("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[10,20,50,100],"page-size":e.pageSize,layout:"total,->, prev, pager, next, jumper, sizes",total:e.tableData.length},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t}}})],1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"grid-toolbar"},[o("button",{staticClass:"tool-btn btn-export"},[e._v("导出表格")])])}]}}});
//# sourceMappingURL=50.b1e500161ec17adf671d.js.map