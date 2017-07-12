webpackJsonp([63],{24:function(n,t,e){"use strict";var a=e(2),o=e(92),i=e(30),c=e.n(i);a.default.use(o.a);var r=new o.a({linkActiveClass:"active",routes:[{path:"/login",name:"登录",component:function(n){return e.e(20).then(function(){var t=[e(130)];n.apply(null,t)}.bind(this)).catch(e.oe)}},{path:"/seeding_wall",name:"播种墙",component:{template:"<p>Seeding wall</p>"}},{path:"/",name:"主页",component:function(n){return e.e(7).then(function(){var t=[e(131)];n.apply(null,t)}.bind(this)).catch(e.oe)},redirect:"/index",children:[{path:"/index",name:"首页",component:function(n){return e.e(24).then(function(){var t=[e(119)];n.apply(null,t)}.bind(this)).catch(e.oe)}},{path:"/baseinfo",name:"基本信息",component:function(n){return e.e(15).then(function(){var t=[e(97)];n.apply(null,t)}.bind(this)).catch(e.oe)},redirect:"/baseinfo/customer_manage",children:[{path:"/baseinfo/customer_manage",name:"客户管理",component:function(n){return e.e(19).then(function(){var t=[e(98)];n.apply(null,t)}.bind(this)).catch(e.oe)}},{path:"/baseinfo/customer_manage/add",name:"新增客户",component:function(n){return e.e(4).then(function(){var t=[e(31)];n.apply(null,t)}.bind(this)).catch(e.oe)}},{path:"/baseinfo/customer_manage/edite/:customerid",name:"编辑客户",component:function(n){return e.e(4).then(function(){var t=[e(31)];n.apply(null,t)}.bind(this)).catch(e.oe)}},{path:"/baseinfo/goods_category_manage",name:"商品品类管理",component:function(n){return e.e(54).then(function(){var t=[e(101)];n.apply(null,t)}.bind(this)).catch(e.oe)}},{path:"/baseinfo/goods_classify_manage",name:"商品分类管理（一级分类）",component:function(n){return e.e(23).then(function(){var t=[e(102)];n.apply(null,t)}.bind(this)).catch(e.oe)}},{path:"/baseinfo/goods_classify_manage/sub1/:id",name:"商品分类管理（二级分类）",component:function(n){return e.e(53).then(function(){var t=[e(103)];n.apply(null,t)}.bind(this)).catch(e.oe)}},{path:"/baseinfo/goods_classify_manage/sub2/:id",name:"商品分类管理（三级级分类）",component:function(n){return e.e(56).then(function(){var t=[e(99)];n.apply(null,t)}.bind(this)).catch(e.oe)}},{path:"/baseinfo/goods_manage",name:"商品管理",component:function(n){return e.e(55).then(function(){var t=[e(100)];n.apply(null,t)}.bind(this)).catch(e.oe)}},{path:"/baseinfo/goods_manage/add",name:"新增商品",component:function(n){return e.e(1).then(function(){var t=[e(32)];n.apply(null,t)}.bind(this)).catch(e.oe)}},{path:"/baseinfo/goods_manage/edite/:productNo",name:"编辑商品",component:function(n){return e.e(1).then(function(){var t=[e(32)];n.apply(null,t)}.bind(this)).catch(e.oe)}},{path:"/baseinfo/goods_manage/detail/:productNo",name:"商品详情",component:function(n){return e.e(52).then(function(){var t=[e(104)];n.apply(null,t)}.bind(this)).catch(e.oe)}},{path:"/baseinfo/location_manage",name:"库区管理",component:function(n){return e.e(18).then(function(){var t=[e(106)];n.apply(null,t)}.bind(this)).catch(e.oe)}},{path:"/baseinfo/location_manage/addArea",name:"新增库区",component:function(n){return e.e(3).then(function(){var t=[e(33)];n.apply(null,t)}.bind(this)).catch(e.oe)}},{path:"/baseinfo/location_manage/editeArea/:areaId",name:"编辑库区",component:function(n){return e.e(3).then(function(){var t=[e(33)];n.apply(null,t)}.bind(this)).catch(e.oe)}},{path:"/baseinfo/location_manage/location/:areaId/:areaNo/:areaName/:areaType",name:"管理库位",component:function(n){return e.e(9).then(function(){var t=[e(105)];n.apply(null,t)}.bind(this)).catch(e.oe)}}]},{path:"/instorage_action",name:"入库作业",component:function(n){return e.e(13).then(function(){var t=[e(120)];n.apply(null,t)}.bind(this)).catch(e.oe)},redirect:"/instorage_action/procurement_storage",children:[{path:"/instorage_action/procurement_storage",name:"采购入库交接",component:function(n){return e.e(43).then(function(){var t=[e(123)];n.apply(null,t)}.bind(this)).catch(e.oe)}},{path:"/instorage_action/procurement_storage/detail/:id",name:"采购入库单详情",component:function(n){return e.e(45).then(function(){var t=[e(121)];n.apply(null,t)}.bind(this)).catch(e.oe)}},{path:"/instorage_action/procurement_storage/purchase_order_add",name:"新建采购单",component:function(n){return e.e(0).then(function(){var t=[e(34)];n.apply(null,t)}.bind(this)).catch(e.oe)}},{path:"/instorage_action/procurement_storage/purchase_order_edite/:id",name:"编辑采购单",component:function(n){return e.e(0).then(function(){var t=[e(34)];n.apply(null,t)}.bind(this)).catch(e.oe)}},{path:"/instorage_action/procurement_storage/hand/:id",name:"手工交接",component:function(n){return e.e(44).then(function(){var t=[e(122)];n.apply(null,t)}.bind(this)).catch(e.oe)}},{path:"/instorage_action/sales_returns_warehousing",name:"销售退货入库交接",component:function(n){return e.e(40).then(function(){var t=[e(126)];n.apply(null,t)}.bind(this)).catch(e.oe)}},{path:"/instorage_action/sales_returns_warehousing/detail/:id",name:"销售退货单详情",component:function(n){return e.e(42).then(function(){var t=[e(124)];n.apply(null,t)}.bind(this)).catch(e.oe)}},{path:"/instorage_action/sales_returns_warehousing/hand/:id",name:"销售手工交接",component:function(n){return e.e(41).then(function(){var t=[e(125)];n.apply(null,t)}.bind(this)).catch(e.oe)}},{path:"/instorage_action/warehouse_shelves",name:"入库上架",component:function(n){return e.e(38).then(function(){var t=[e(129)];n.apply(null,t)}.bind(this)).catch(e.oe)}},{path:"/instorage_action/warehouse_shelves/detail/:id",name:"入库单详情",component:function(n){return e.e(39).then(function(){var t=[e(127)];n.apply(null,t)}.bind(this)).catch(e.oe)}},{path:"/instorage_action/warehouse_shelves/hand/:id",name:"手工上架",component:function(n){return e.e(22).then(function(){var t=[e(128)];n.apply(null,t)}.bind(this)).catch(e.oe)}}]},{path:"/outstorage_action",name:"出库作业",component:function(n){return e.e(12).then(function(){var t=[e(132)];n.apply(null,t)}.bind(this)).catch(e.oe)},redirect:"/outstorage_action/sell_out",children:[{path:"/outstorage_action/sell_out",name:"销售出库",component:function(n){return e.e(34).then(function(){var t=[e(136)];n.apply(null,t)}.bind(this)).catch(e.oe)}},{path:"/outstorage_action/sell_out/detail/:id",name:"销售出库单详情",component:function(n){return e.e(35).then(function(){var t=[e(135)];n.apply(null,t)}.bind(this)).catch(e.oe)}},{path:"/outstorage_action/wave_picking",name:"波次拣货",component:function(n){return e.e(30).then(function(){var t=[e(142)];n.apply(null,t)}.bind(this)).catch(e.oe)}},{path:"/outstorage_action/wave_picking/detail/:id",name:"波次详情",component:function(n){return e.e(33).then(function(){var t=[e(137)];n.apply(null,t)}.bind(this)).catch(e.oe)},redirect:"/outstorage_action/wave_picking/detail/:id/order",children:[{path:"/outstorage_action/wave_picking/detail/:id/order",name:"订单",component:function(n){return e.e(57).then(function(){var t=[e(139)];n.apply(null,t)}.bind(this)).catch(e.oe)}},{path:"/outstorage_action/wave_picking/detail/:id/goods",name:"商品",component:function(n){return e.e(58).then(function(){var t=[e(138)];n.apply(null,t)}.bind(this)).catch(e.oe)}}]},{path:"/outstorage_action/wave_picking/add",name:"创建波次",component:function(n){return e.e(32).then(function(){var t=[e(140)];n.apply(null,t)}.bind(this)).catch(e.oe)}},{path:"/outstorage_action/wave_picking/edite/:id",name:"编辑波次",component:function(n){return e.e(31).then(function(){var t=[e(141)];n.apply(null,t)}.bind(this)).catch(e.oe)}},{path:"/outstorage_action/outstock_check",name:"出库复核",component:{template:"<p>outstock_check</p>"}},{path:"/outstorage_action/purchase_returns",name:"采购退货出库",component:function(n){return e.e(36).then(function(){var t=[e(134)];n.apply(null,t)}.bind(this)).catch(e.oe)}},{path:"/outstorage_action/purchase_returns/detail/:id",name:"采购退货出库单详情",component:function(n){return e.e(37).then(function(){var t=[e(133)];n.apply(null,t)}.bind(this)).catch(e.oe)}}]},{path:"/storage_action",name:"库内作业",component:function(n){return e.e(11).then(function(){var t=[e(150)];n.apply(null,t)}.bind(this)).catch(e.oe)},redirect:"/storage_action/warehouse_stock",children:[{path:"/storage_action/warehouse_stock",name:"库位库存",component:function(n){return e.e(8).then(function(){var t=[e(152)];n.apply(null,t)}.bind(this)).catch(e.oe)}},{path:"/storage_action/inventory_adjustment",name:"库存调整",component:function(n){return e.e(26).then(function(){var t=[e(147)];n.apply(null,t)}.bind(this)).catch(e.oe)}},{path:"/storage_action/inventory_adjustment/detail/:id",name:"库存调整详情",component:function(n){return e.e(27).then(function(){var t=[e(146)];n.apply(null,t)}.bind(this)).catch(e.oe)}},{path:"/storage_action/inventory_adjustment/add",name:"新建库存调整",component:function(n){return e.e(2).then(function(){var t=[e(35)];n.apply(null,t)}.bind(this)).catch(e.oe)}},{path:"/storage_action/inventory_adjustment/edite/:id",name:"编辑库存调整",component:function(n){return e.e(2).then(function(){var t=[e(35)];n.apply(null,t)}.bind(this)).catch(e.oe)}},{path:"/storage_action/inventory",name:"盘点",component:function(n){return e.e(21).then(function(){var t=[e(145)];n.apply(null,t)}.bind(this)).catch(e.oe)}},{path:"/storage_action/inventory/detail/:id",name:"盘点详情",component:function(n){return e.e(29).then(function(){var t=[e(143)];n.apply(null,t)}.bind(this)).catch(e.oe)}},{path:"/storage_action/inventory/handle_inventory/:id",name:"手工盘点",component:function(n){return e.e(28).then(function(){var t=[e(144)];n.apply(null,t)}.bind(this)).catch(e.oe)}},{path:"/storage_action/transfer_list",name:"移库记录",component:function(n){return e.e(16).then(function(){var t=[e(151)];n.apply(null,t)}.bind(this)).catch(e.oe)}},{path:"/storage_action/replenishment_list",name:"补货记录",component:function(n){return e.e(17).then(function(){var t=[e(149)];n.apply(null,t)}.bind(this)).catch(e.oe)}},{path:"/storage_action/inventory_warning",name:"库存预警",component:function(n){return e.e(25).then(function(){var t=[e(148)];n.apply(null,t)}.bind(this)).catch(e.oe)}}]},{path:"/datachart",name:"数据报表",component:function(n){return e.e(14).then(function(){var t=[e(107)];n.apply(null,t)}.bind(this)).catch(e.oe)},redirect:"/datachart/goods_stock",children:[{path:"/datachart/goods_stock",name:"商品库存",component:function(n){return e.e(50).then(function(){var t=[e(109)];n.apply(null,t)}.bind(this)).catch(e.oe)}},{path:"/datachart/goods_stock/flow/:goodsId",name:"库存流水",component:function(n){return e.e(51).then(function(){var t=[e(108)];n.apply(null,t)}.bind(this)).catch(e.oe)}},{path:"/datachart/instorage",name:"入库",component:function(n){return e.e(49).then(function(){var t=[e(111)];n.apply(null,t)}.bind(this)).catch(e.oe)},redirect:"/datachart/instorage/summary",children:[{path:"/datachart/instorage/summary",name:"入库汇总",component:function(n){return e.e(6).then(function(){var t=[e(112)];n.apply(null,t)}.bind(this)).catch(e.oe)}},{path:"/datachart/instorage/detailed",name:"入库明细",component:function(n){return e.e(61).then(function(){var t=[e(110)];n.apply(null,t)}.bind(this)).catch(e.oe)}}]},{path:"/datachart/outstorage",name:"出库",component:function(n){return e.e(48).then(function(){var t=[e(114)];n.apply(null,t)}.bind(this)).catch(e.oe)},redirect:"/datachart/outstorage/summary",children:[{path:"/datachart/outstorage/summary",name:"出库汇总",component:function(n){return e.e(5).then(function(){var t=[e(115)];n.apply(null,t)}.bind(this)).catch(e.oe)}},{path:"/datachart/outstorage/detailed",name:"出库明细",component:function(n){return e.e(60).then(function(){var t=[e(113)];n.apply(null,t)}.bind(this)).catch(e.oe)}}]},{path:"/datachart/inventory_profit_loss",name:"盘点损益",component:function(n){return e.e(59).then(function(){var t=[e(116)];n.apply(null,t)}.bind(this)).catch(e.oe)}},{path:"/datachart/sales_list",name:"销售出库排行",component:function(n){return e.e(47).then(function(){var t=[e(117)];n.apply(null,t)}.bind(this)).catch(e.oe)}},{path:"/datachart/warehouse_log",name:"仓库日志",component:function(n){return e.e(46).then(function(){var t=[e(118)];n.apply(null,t)}.bind(this)).catch(e.oe)}}]},{path:"/sys_setting",name:"系统配置",component:function(n){return e.e(10).then(function(){var t=[e(153)];n.apply(null,t)}.bind(this)).catch(e.oe)},redirect:"/sys_setting/operation_log",children:[{path:"/sys_setting/operation_log",component:{template:"<p>operation_log</p>"}},{path:"/sys_setting/reservoir_dictionary",component:{template:"<p>reservoir_dictionary</p>"}},{path:"/sys_setting/library_sequence",component:{template:"<p>library_sequence</p>"}},{path:"/sys_setting/warehouse_staff",component:{template:"<p>warehouse_staff</p>"}},{path:"/sys_setting/post_manage",component:{template:"<p>post_manage</p>"}},{path:"/sys_setting/department_manage",component:{template:"<p>department_manage</p>"}},{path:"/sys_setting/business_rules",component:{template:"<p>business_rules</p>"}}]}]}]});r.beforeEach(function(n,t,e){var a=n.path.split("/");c.a.set("path",a),e()}),t.a=r},27:function(n,t){},28:function(n,t,e){function a(n){e(78)}var o=e(29)(e(58),e(91),a,null,null);n.exports=o.exports},58:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app"}},59:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e(2),o=e(28),i=e.n(o),c=e(24),r=e(26),u=e.n(r),p=e(25),h=e.n(p),l=e(27);e.n(l);a.default.use(h.a),u.a.polyfill(),a.default.config.productionTip=!1,new a.default({el:"#app",router:c.a,template:"<App/>",components:{App:i.a}})},78:function(n,t){},91:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{attrs:{id:"app"}},[e("transition",{attrs:{name:"fade",mode:"out-in"}},[e("router-view")],1)],1)},staticRenderFns:[]}},94:function(n,t){}},[59]);
//# sourceMappingURL=app.b2ed6fd9a77f9cb1a941.js.map