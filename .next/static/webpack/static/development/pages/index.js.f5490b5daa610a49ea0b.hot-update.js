webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/container.js":
/*!*********************************!*\
  !*** ./components/container.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\EquipoGG\\Documents\\GitHub\\next-Test\\components\\container.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Header = antd__WEBPACK_IMPORTED_MODULE_2__["Layout"].Header,
    Content = antd__WEBPACK_IMPORTED_MODULE_2__["Layout"].Content,
    Footer = antd__WEBPACK_IMPORTED_MODULE_2__["Layout"].Footer;

var Container = function Container(_ref) {
  var children = _ref.children;
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 2
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 2
    }
  }, __jsx("tittle", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 3
    }
  }, "Hola mi pana")), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 2
    }
  }, __jsx(Header, {
    style: {
      position: 'fixed',
      zIndex: 1,
      width: '100%'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "logo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 8
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"], {
    theme: "dark",
    mode: "horizontal",
    defaultSelectedKeys: ['2'],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 8
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 10
    }
  }, "nav 1"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 10
    }
  }, "nav 2"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 10
    }
  }, "nav 3"))), __jsx(Content, {
    className: "site-layout",
    style: {
      padding: '0 50px',
      marginTop: 64
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 6
    }
  }, children), __jsx(Footer, {
    style: {
      textAlign: 'center'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 6
    }
  }, "Ant Design \xA92018 Created by Ant UED")));
};

_c = Container;
/* harmony default export */ __webpack_exports__["default"] = (Container);

var _c;

$RefreshReg$(_c, "Container");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbnRhaW5lci5qcyJdLCJuYW1lcyI6WyJIZWFkZXIiLCJMYXlvdXQiLCJDb250ZW50IiwiRm9vdGVyIiwiQ29udGFpbmVyIiwiY2hpbGRyZW4iLCJwb3NpdGlvbiIsInpJbmRleCIsIndpZHRoIiwicGFkZGluZyIsIm1hcmdpblRvcCIsInRleHRBbGlnbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtJQUNRQSxNLEdBQTRCQywyQyxDQUE1QkQsTTtJQUFRRSxPLEdBQW9CRCwyQyxDQUFwQkMsTztJQUFTQyxNLEdBQVdGLDJDLENBQVhFLE07O0FBQ3pCLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZO0FBQUEsTUFBRUMsUUFBRixRQUFFQSxRQUFGO0FBQUEsU0FDakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREQsQ0FEQSxFQUlBLE1BQUMsMkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsTUFBRDtBQUFRLFNBQUssRUFBRTtBQUFFQyxjQUFRLEVBQUUsT0FBWjtBQUFxQkMsWUFBTSxFQUFFLENBQTdCO0FBQWdDQyxXQUFLLEVBQUU7QUFBdkMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLHlDQUFEO0FBQU0sU0FBSyxFQUFDLE1BQVo7QUFBbUIsUUFBSSxFQUFDLFlBQXhCO0FBQXFDLHVCQUFtQixFQUFFLENBQUMsR0FBRCxDQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxPQUFHLEVBQUMsR0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFFRSxNQUFDLHlDQUFELENBQU0sSUFBTjtBQUFXLE9BQUcsRUFBQyxHQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixFQUdFLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQVcsT0FBRyxFQUFDLEdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGLENBRkYsQ0FESixFQVNJLE1BQUMsT0FBRDtBQUFTLGFBQVMsRUFBQyxhQUFuQjtBQUFpQyxTQUFLLEVBQUU7QUFBRUMsYUFBTyxFQUFFLFFBQVg7QUFBcUJDLGVBQVMsRUFBRTtBQUFoQyxLQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dMLFFBREgsQ0FUSixFQVlJLE1BQUMsTUFBRDtBQUFRLFNBQUssRUFBRTtBQUFFTSxlQUFTLEVBQUU7QUFBYixLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOENBWkosQ0FKQSxDQURpQjtBQUFBLENBQWxCOztLQUFNUCxTO0FBcUJTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuZjU0OTBiNWRhYTYxMGE0OWVhMGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHsgTGF5b3V0LCBNZW51IH0gZnJvbSAnYW50ZCdcclxuY29uc3QgeyBIZWFkZXIsIENvbnRlbnQsIEZvb3RlciB9ID0gTGF5b3V0XHJcbmNvbnN0IENvbnRhaW5lciA9ICh7Y2hpbGRyZW59KSA9PihcclxuXHQ8ZGl2PlxyXG5cdDxIZWFkPlxyXG5cdFx0PHRpdHRsZT5Ib2xhIG1pIHBhbmE8L3RpdHRsZT5cclxuXHQ8L0hlYWQ+XHJcblx0PExheW91dD5cclxuXHQgICAgPEhlYWRlciBzdHlsZT17eyBwb3NpdGlvbjogJ2ZpeGVkJywgekluZGV4OiAxLCB3aWR0aDogJzEwMCUnIH19PlxyXG5cdCAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiIC8+XHJcblx0ICAgICAgPE1lbnUgdGhlbWU9XCJkYXJrXCIgbW9kZT1cImhvcml6b250YWxcIiBkZWZhdWx0U2VsZWN0ZWRLZXlzPXtbJzInXX0+XHJcblx0ICAgICAgICA8TWVudS5JdGVtIGtleT1cIjFcIj5uYXYgMTwvTWVudS5JdGVtPlxyXG5cdCAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCIyXCI+bmF2IDI8L01lbnUuSXRlbT5cclxuXHQgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiM1wiPm5hdiAzPC9NZW51Lkl0ZW0+XHJcblx0ICAgICAgPC9NZW51PlxyXG5cdCAgICA8L0hlYWRlcj5cclxuXHQgICAgPENvbnRlbnQgY2xhc3NOYW1lPVwic2l0ZS1sYXlvdXRcIiBzdHlsZT17eyBwYWRkaW5nOiAnMCA1MHB4JywgbWFyZ2luVG9wOiA2NCB9fT5cclxuXHQgICAgICB7Y2hpbGRyZW59XHJcblx0ICAgIDwvQ29udGVudD5cclxuXHQgICAgPEZvb3RlciBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PkFudCBEZXNpZ24gwqkyMDE4IENyZWF0ZWQgYnkgQW50IFVFRDwvRm9vdGVyPlxyXG4gIFx0PC9MYXlvdXQ+XHJcbiAgXHQ8L2Rpdj5cclxuKVxyXG5leHBvcnQgZGVmYXVsdCBDb250YWluZXIiXSwic291cmNlUm9vdCI6IiJ9