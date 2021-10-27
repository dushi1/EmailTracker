"use strict";
self["webpackHotUpdatewebpack_react_boilerplate"]("app",{

/***/ "./src/actions/Auth/AuthActions.js":
/*!*****************************************!*\
  !*** ./src/actions/Auth/AuthActions.js ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchUser": () => (/* binding */ fetchUser)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AuthTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuthTypes */ "./src/actions/Auth/AuthTypes.js");
/* module decorator */ module = __webpack_require__.hmd(module);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};



var fetchUser = function fetchUser() {
  return function (dispatch) {
    dispatch({
      type: _AuthTypes__WEBPACK_IMPORTED_MODULE_1__.FETCH_USER_LOADING
    });
    axios__WEBPACK_IMPORTED_MODULE_0___default().get('/api/current').then(function (res) {
      dispatch({
        type: _AuthTypes__WEBPACK_IMPORTED_MODULE_1__.FETCH_USER,
        payload: res.data
      });
    })["catch"](function (er) {
      dispatch({
        type: _AuthTypes__WEBPACK_IMPORTED_MODULE_1__.FETCH_USER_ERROR,
        payload: er
      });
    });
  };
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(fetchUser, "fetchUser", "/home/dushyant/Project/node-with-react/client/src/actions/Auth/AuthActions.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("14830d58dedb8bf7933d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODZmMjMzZS1hcHAtd3BzLWhtci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sSUFBTUksU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUMzQixTQUFPLFVBQVVDLFFBQVYsRUFBb0I7QUFDdkJBLFlBQVEsQ0FBQztBQUFFQyxVQUFJLEVBQUVILDBEQUFrQkE7QUFBMUIsS0FBRCxDQUFSO0FBQ0FILElBQUFBLGdEQUFBLENBQVUsY0FBVixFQUEwQlEsSUFBMUIsQ0FBK0IsVUFBQ0MsR0FBRCxFQUFTO0FBQ3BDSixjQUFRLENBQUM7QUFBRUMsWUFBSSxFQUFFTCxrREFBUjtBQUFvQlMsZUFBTyxFQUFFRCxHQUFHLENBQUNFO0FBQWpDLE9BQUQsQ0FBUjtBQUNILEtBRkQsV0FFUyxVQUFDQyxFQUFELEVBQVE7QUFDYlAsY0FBUSxDQUFDO0FBQUVDLFlBQUksRUFBRUosd0RBQVI7QUFBMEJRLGVBQU8sRUFBRUU7QUFBbkMsT0FBRCxDQUFSO0FBQ0gsS0FKRDtBQUtILEdBUEQ7QUFRSCxDQVRNOzs7Ozs7Ozs7OzBCQUFNUjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNIYiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stcmVhY3QtYm9pbGVycGxhdGUvLi9zcmMvYWN0aW9ucy9BdXRoL0F1dGhBY3Rpb25zLmpzIiwid2VicGFjazovL3dlYnBhY2stcmVhY3QtYm9pbGVycGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxuaW1wb3J0IHsgRkVUQ0hfVVNFUiwgRkVUQ0hfVVNFUl9FUlJPUiwgRkVUQ0hfVVNFUl9MT0FESU5HIH0gZnJvbSAnLi9BdXRoVHlwZXMnXG5cbmV4cG9ydCBjb25zdCBmZXRjaFVzZXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IEZFVENIX1VTRVJfTE9BRElORyB9KVxuICAgICAgICBheGlvcy5nZXQoJy9hcGkvY3VycmVudCcpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBGRVRDSF9VU0VSLCBwYXlsb2FkOiByZXMuZGF0YSB9KVxuICAgICAgICB9KS5jYXRjaCgoZXIpID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogRkVUQ0hfVVNFUl9FUlJPUiwgcGF5bG9hZDogZXIgfSlcbiAgICAgICAgfSlcbiAgICB9XG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMTQ4MzBkNThkZWRiOGJmNzkzM2RcIikiXSwibmFtZXMiOlsiYXhpb3MiLCJGRVRDSF9VU0VSIiwiRkVUQ0hfVVNFUl9FUlJPUiIsIkZFVENIX1VTRVJfTE9BRElORyIsImZldGNoVXNlciIsImRpc3BhdGNoIiwidHlwZSIsImdldCIsInRoZW4iLCJyZXMiLCJwYXlsb2FkIiwiZGF0YSIsImVyIl0sInNvdXJjZVJvb3QiOiIifQ==