webpackJsonp([0],{

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_components_a_scss__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_components_a_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__css_components_a_scss__);



/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(9);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;

transform = __webpack_require__(5);

var options = {"singleton":true,"transform":"./css.transform.js","hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(6)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../node_modules/_css-loader@0.28.11@css-loader/index.js??ref--0-2!../../../node_modules/_sass-loader@6.0.7@sass-loader/lib/loader.js!./a.scss", function() {
		var newContent = require("!!../../../node_modules/_css-loader@0.28.11@css-loader/index.js??ref--0-2!../../../node_modules/_sass-loader@6.0.7@sass-loader/lib/loader.js!./a.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".src-css-components-a__a--pvPbc{font-size:18px;color:#333}", ""]);

// exports
exports.locals = {
	"a": "src-css-components-a__a--pvPbc"
};

/***/ })

});