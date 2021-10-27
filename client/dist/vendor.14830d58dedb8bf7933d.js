"use strict";
(self["webpackChunkwebpack_react_boilerplate"] = self["webpackChunkwebpack_react_boilerplate"] || []).push([["vendor"],{

/***/ "./node_modules/react-bootstrap/esm/Spinner.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/Spinner.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




const Spinner = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({
  bsPrefix,
  variant,
  animation,
  size,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'div',
  className,
  ...props
}, ref) => {
  bsPrefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__.useBootstrapPrefix)(bsPrefix, 'spinner');
  const bsSpinnerPrefix = `${bsPrefix}-${animation}`;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Component, {
    ref: ref,
    ...props,
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, bsSpinnerPrefix, size && `${bsSpinnerPrefix}-${size}`, variant && `text-${variant}`)
  });
});
Spinner.displayName = 'Spinner';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Spinner);

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/ThemeProvider.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/ThemeProvider.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useBootstrapPrefix": () => (/* binding */ useBootstrapPrefix),
/* harmony export */   "useIsRTL": () => (/* binding */ useIsRTL),
/* harmony export */   "createBootstrapComponent": () => (/* binding */ createBootstrapComponent),
/* harmony export */   "ThemeConsumer": () => (/* binding */ Consumer),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



const ThemeContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({
  prefixes: {}
});
const {
  Consumer,
  Provider
} = ThemeContext;

function ThemeProvider({
  prefixes = {},
  dir,
  children
}) {
  const contextValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
    prefixes: { ...prefixes
    },
    dir
  }), [prefixes, dir]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Provider, {
    value: contextValue,
    children: children
  });
}

function useBootstrapPrefix(prefix, defaultPrefix) {
  const {
    prefixes
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ThemeContext);
  return prefix || prefixes[defaultPrefix] || defaultPrefix;
}
function useIsRTL() {
  const {
    dir
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ThemeContext);
  return dir === 'rtl';
}

function createBootstrapComponent(Component, opts) {
  if (typeof opts === 'string') opts = {
    prefix: opts
  };
  const isClassy = Component.prototype && Component.prototype.isReactComponent; // If it's a functional component make sure we don't break it with a ref

  const {
    prefix,
    forwardRefAs = isClassy ? 'ref' : 'innerRef'
  } = opts;
  const Wrapped = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(({ ...props
  }, ref) => {
    props[forwardRefAs] = ref;
    const bsPrefix = useBootstrapPrefix(props.bsPrefix, prefix);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Component, { ...props,
      bsPrefix: bsPrefix
    });
  });
  Wrapped.displayName = `Bootstrap(${Component.displayName || Component.name})`;
  return Wrapped;
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThemeProvider);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yLjE0ODMwZDU4ZGVkYjhiZjc5MzNkLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFvQztBQUNMO0FBQ3NCO0FBQ0w7QUFDaEQsNkJBQTZCLDZDQUFnQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELGFBQWEsa0VBQWtCO0FBQy9CLDZCQUE2QixTQUFTLEdBQUcsVUFBVTtBQUNuRCxzQkFBc0Isc0RBQUk7QUFDMUI7QUFDQTtBQUNBLGVBQWUsaURBQVUsd0NBQXdDLGdCQUFnQixHQUFHLEtBQUssc0JBQXNCLFFBQVE7QUFDdkgsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBLGlFQUFlLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJTO0FBQ2E7QUFDSTtBQUNoRCxrQ0FBa0MsZ0RBQW1CO0FBQ3JEO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLENBQUM7QUFDRCx1QkFBdUIsOENBQU87QUFDOUIsZ0JBQWdCO0FBQ2hCLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSCxzQkFBc0Isc0RBQUk7QUFDMUI7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFTztBQUNQO0FBQ0E7QUFDQSxJQUFJLEVBQUUsaURBQVU7QUFDaEI7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLElBQUksRUFBRSxpREFBVTtBQUNoQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0ZBQWdGOztBQUVoRjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osK0JBQStCLDZDQUFnQixJQUFJO0FBQ25ELEdBQUc7QUFDSDtBQUNBO0FBQ0Esd0JBQXdCLHNEQUFJLGNBQWM7QUFDMUM7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILHFDQUFxQyx3Q0FBd0M7QUFDN0U7QUFDQTs7QUFFK0Q7QUFDL0QsaUVBQWUsYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stcmVhY3QtYm9pbGVycGxhdGUvd2VicGFjay1yZWFjdC1ib2lsZXJwbGF0ZS93ZWJwYWNrLXJlYWN0LWJvaWxlcnBsYXRlL3dlYnBhY2stcmVhY3QtYm9pbGVycGxhdGUvd2VicGFjay1yZWFjdC1ib2lsZXJwbGF0ZS93ZWJwYWNrLXJlYWN0LWJvaWxlcnBsYXRlL3dlYnBhY2stcmVhY3QtYm9pbGVycGxhdGUvd2VicGFjay1yZWFjdC1ib2lsZXJwbGF0ZS93ZWJwYWNrLXJlYWN0LWJvaWxlcnBsYXRlL3dlYnBhY2stcmVhY3QtYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2VzbS9TcGlubmVyLmpzIiwid2VicGFjazovL3dlYnBhY2stcmVhY3QtYm9pbGVycGxhdGUvd2VicGFjay1yZWFjdC1ib2lsZXJwbGF0ZS93ZWJwYWNrLXJlYWN0LWJvaWxlcnBsYXRlL3dlYnBhY2stcmVhY3QtYm9pbGVycGxhdGUvd2VicGFjay1yZWFjdC1ib2lsZXJwbGF0ZS93ZWJwYWNrLXJlYWN0LWJvaWxlcnBsYXRlL3dlYnBhY2stcmVhY3QtYm9pbGVycGxhdGUvd2VicGFjay1yZWFjdC1ib2lsZXJwbGF0ZS93ZWJwYWNrLXJlYWN0LWJvaWxlcnBsYXRlL3dlYnBhY2stcmVhY3QtYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2VzbS9UaGVtZVByb3ZpZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQm9vdHN0cmFwUHJlZml4IH0gZnJvbSAnLi9UaGVtZVByb3ZpZGVyJztcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5jb25zdCBTcGlubmVyID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoKHtcbiAgYnNQcmVmaXgsXG4gIHZhcmlhbnQsXG4gIGFuaW1hdGlvbixcbiAgc2l6ZSxcbiAgLy8gTmVlZCB0byBkZWZpbmUgdGhlIGRlZmF1bHQgXCJhc1wiIGR1cmluZyBwcm9wIGRlc3RydWN0dXJpbmcgdG8gYmUgY29tcGF0aWJsZSB3aXRoIHN0eWxlZC1jb21wb25lbnRzIGdpdGh1Yi5jb20vcmVhY3QtYm9vdHN0cmFwL3JlYWN0LWJvb3RzdHJhcC9pc3N1ZXMvMzU5NVxuICBhczogQ29tcG9uZW50ID0gJ2RpdicsXG4gIGNsYXNzTmFtZSxcbiAgLi4ucHJvcHNcbn0sIHJlZikgPT4ge1xuICBic1ByZWZpeCA9IHVzZUJvb3RzdHJhcFByZWZpeChic1ByZWZpeCwgJ3NwaW5uZXInKTtcbiAgY29uc3QgYnNTcGlubmVyUHJlZml4ID0gYCR7YnNQcmVmaXh9LSR7YW5pbWF0aW9ufWA7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovX2pzeChDb21wb25lbnQsIHtcbiAgICByZWY6IHJlZixcbiAgICAuLi5wcm9wcyxcbiAgICBjbGFzc05hbWU6IGNsYXNzTmFtZXMoY2xhc3NOYW1lLCBic1NwaW5uZXJQcmVmaXgsIHNpemUgJiYgYCR7YnNTcGlubmVyUHJlZml4fS0ke3NpemV9YCwgdmFyaWFudCAmJiBgdGV4dC0ke3ZhcmlhbnR9YClcbiAgfSk7XG59KTtcblNwaW5uZXIuZGlzcGxheU5hbWUgPSAnU3Bpbm5lcic7XG5leHBvcnQgZGVmYXVsdCBTcGlubmVyOyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuY29uc3QgVGhlbWVDb250ZXh0ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUNvbnRleHQoe1xuICBwcmVmaXhlczoge31cbn0pO1xuY29uc3Qge1xuICBDb25zdW1lcixcbiAgUHJvdmlkZXJcbn0gPSBUaGVtZUNvbnRleHQ7XG5cbmZ1bmN0aW9uIFRoZW1lUHJvdmlkZXIoe1xuICBwcmVmaXhlcyA9IHt9LFxuICBkaXIsXG4gIGNoaWxkcmVuXG59KSB7XG4gIGNvbnN0IGNvbnRleHRWYWx1ZSA9IHVzZU1lbW8oKCkgPT4gKHtcbiAgICBwcmVmaXhlczogeyAuLi5wcmVmaXhlc1xuICAgIH0sXG4gICAgZGlyXG4gIH0pLCBbcHJlZml4ZXMsIGRpcl0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL19qc3goUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogY29udGV4dFZhbHVlLFxuICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUJvb3RzdHJhcFByZWZpeChwcmVmaXgsIGRlZmF1bHRQcmVmaXgpIHtcbiAgY29uc3Qge1xuICAgIHByZWZpeGVzXG4gIH0gPSB1c2VDb250ZXh0KFRoZW1lQ29udGV4dCk7XG4gIHJldHVybiBwcmVmaXggfHwgcHJlZml4ZXNbZGVmYXVsdFByZWZpeF0gfHwgZGVmYXVsdFByZWZpeDtcbn1cbmV4cG9ydCBmdW5jdGlvbiB1c2VJc1JUTCgpIHtcbiAgY29uc3Qge1xuICAgIGRpclxuICB9ID0gdXNlQ29udGV4dChUaGVtZUNvbnRleHQpO1xuICByZXR1cm4gZGlyID09PSAncnRsJztcbn1cblxuZnVuY3Rpb24gY3JlYXRlQm9vdHN0cmFwQ29tcG9uZW50KENvbXBvbmVudCwgb3B0cykge1xuICBpZiAodHlwZW9mIG9wdHMgPT09ICdzdHJpbmcnKSBvcHRzID0ge1xuICAgIHByZWZpeDogb3B0c1xuICB9O1xuICBjb25zdCBpc0NsYXNzeSA9IENvbXBvbmVudC5wcm90b3R5cGUgJiYgQ29tcG9uZW50LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50OyAvLyBJZiBpdCdzIGEgZnVuY3Rpb25hbCBjb21wb25lbnQgbWFrZSBzdXJlIHdlIGRvbid0IGJyZWFrIGl0IHdpdGggYSByZWZcblxuICBjb25zdCB7XG4gICAgcHJlZml4LFxuICAgIGZvcndhcmRSZWZBcyA9IGlzQ2xhc3N5ID8gJ3JlZicgOiAnaW5uZXJSZWYnXG4gIH0gPSBvcHRzO1xuICBjb25zdCBXcmFwcGVkID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoKHsgLi4ucHJvcHNcbiAgfSwgcmVmKSA9PiB7XG4gICAgcHJvcHNbZm9yd2FyZFJlZkFzXSA9IHJlZjtcbiAgICBjb25zdCBic1ByZWZpeCA9IHVzZUJvb3RzdHJhcFByZWZpeChwcm9wcy5ic1ByZWZpeCwgcHJlZml4KTtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL19qc3goQ29tcG9uZW50LCB7IC4uLnByb3BzLFxuICAgICAgYnNQcmVmaXg6IGJzUHJlZml4XG4gICAgfSk7XG4gIH0pO1xuICBXcmFwcGVkLmRpc3BsYXlOYW1lID0gYEJvb3RzdHJhcCgke0NvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZX0pYDtcbiAgcmV0dXJuIFdyYXBwZWQ7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZUJvb3RzdHJhcENvbXBvbmVudCwgQ29uc3VtZXIgYXMgVGhlbWVDb25zdW1lciB9O1xuZXhwb3J0IGRlZmF1bHQgVGhlbWVQcm92aWRlcjsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=