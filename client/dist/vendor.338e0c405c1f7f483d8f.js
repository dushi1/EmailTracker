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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yLjMzOGUwYzQwNWMxZjdmNDgzZDhmLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFvQztBQUNMO0FBQ3NCO0FBQ0w7QUFDaEQsNkJBQTZCLDZDQUFnQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELGFBQWEsa0VBQWtCO0FBQy9CLDZCQUE2QixTQUFTLEdBQUcsVUFBVTtBQUNuRCxzQkFBc0Isc0RBQUk7QUFDMUI7QUFDQTtBQUNBLGVBQWUsaURBQVUsd0NBQXdDLGdCQUFnQixHQUFHLEtBQUssc0JBQXNCLFFBQVE7QUFDdkgsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBLGlFQUFlLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJTO0FBQ2E7QUFDSTtBQUNoRCxrQ0FBa0MsZ0RBQW1CO0FBQ3JEO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLENBQUM7QUFDRCx1QkFBdUIsOENBQU87QUFDOUIsZ0JBQWdCO0FBQ2hCLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSCxzQkFBc0Isc0RBQUk7QUFDMUI7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFTztBQUNQO0FBQ0E7QUFDQSxJQUFJLEVBQUUsaURBQVU7QUFDaEI7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLElBQUksRUFBRSxpREFBVTtBQUNoQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0ZBQWdGOztBQUVoRjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osK0JBQStCLDZDQUFnQixJQUFJO0FBQ25ELEdBQUc7QUFDSDtBQUNBO0FBQ0Esd0JBQXdCLHNEQUFJLGNBQWM7QUFDMUM7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILHFDQUFxQyx3Q0FBd0M7QUFDN0U7QUFDQTs7QUFFK0Q7QUFDL0QsaUVBQWUsYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stcmVhY3QtYm9pbGVycGxhdGUvd2VicGFjay1yZWFjdC1ib2lsZXJwbGF0ZS93ZWJwYWNrLXJlYWN0LWJvaWxlcnBsYXRlL3dlYnBhY2stcmVhY3QtYm9pbGVycGxhdGUvd2VicGFjay1yZWFjdC1ib2lsZXJwbGF0ZS93ZWJwYWNrLXJlYWN0LWJvaWxlcnBsYXRlL3dlYnBhY2stcmVhY3QtYm9pbGVycGxhdGUvd2VicGFjay1yZWFjdC1ib2lsZXJwbGF0ZS93ZWJwYWNrLXJlYWN0LWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9lc20vU3Bpbm5lci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXJlYWN0LWJvaWxlcnBsYXRlL3dlYnBhY2stcmVhY3QtYm9pbGVycGxhdGUvd2VicGFjay1yZWFjdC1ib2lsZXJwbGF0ZS93ZWJwYWNrLXJlYWN0LWJvaWxlcnBsYXRlL3dlYnBhY2stcmVhY3QtYm9pbGVycGxhdGUvd2VicGFjay1yZWFjdC1ib2lsZXJwbGF0ZS93ZWJwYWNrLXJlYWN0LWJvaWxlcnBsYXRlL3dlYnBhY2stcmVhY3QtYm9pbGVycGxhdGUvd2VicGFjay1yZWFjdC1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvZXNtL1RoZW1lUHJvdmlkZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VCb290c3RyYXBQcmVmaXggfSBmcm9tICcuL1RoZW1lUHJvdmlkZXInO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmNvbnN0IFNwaW5uZXIgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZigoe1xuICBic1ByZWZpeCxcbiAgdmFyaWFudCxcbiAgYW5pbWF0aW9uLFxuICBzaXplLFxuICAvLyBOZWVkIHRvIGRlZmluZSB0aGUgZGVmYXVsdCBcImFzXCIgZHVyaW5nIHByb3AgZGVzdHJ1Y3R1cmluZyB0byBiZSBjb21wYXRpYmxlIHdpdGggc3R5bGVkLWNvbXBvbmVudHMgZ2l0aHViLmNvbS9yZWFjdC1ib290c3RyYXAvcmVhY3QtYm9vdHN0cmFwL2lzc3Vlcy8zNTk1XG4gIGFzOiBDb21wb25lbnQgPSAnZGl2JyxcbiAgY2xhc3NOYW1lLFxuICAuLi5wcm9wc1xufSwgcmVmKSA9PiB7XG4gIGJzUHJlZml4ID0gdXNlQm9vdHN0cmFwUHJlZml4KGJzUHJlZml4LCAnc3Bpbm5lcicpO1xuICBjb25zdCBic1NwaW5uZXJQcmVmaXggPSBgJHtic1ByZWZpeH0tJHthbmltYXRpb259YDtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9fanN4KENvbXBvbmVudCwge1xuICAgIHJlZjogcmVmLFxuICAgIC4uLnByb3BzLFxuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lcyhjbGFzc05hbWUsIGJzU3Bpbm5lclByZWZpeCwgc2l6ZSAmJiBgJHtic1NwaW5uZXJQcmVmaXh9LSR7c2l6ZX1gLCB2YXJpYW50ICYmIGB0ZXh0LSR7dmFyaWFudH1gKVxuICB9KTtcbn0pO1xuU3Bpbm5lci5kaXNwbGF5TmFtZSA9ICdTcGlubmVyJztcbmV4cG9ydCBkZWZhdWx0IFNwaW5uZXI7IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5jb25zdCBUaGVtZUNvbnRleHQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlQ29udGV4dCh7XG4gIHByZWZpeGVzOiB7fVxufSk7XG5jb25zdCB7XG4gIENvbnN1bWVyLFxuICBQcm92aWRlclxufSA9IFRoZW1lQ29udGV4dDtcblxuZnVuY3Rpb24gVGhlbWVQcm92aWRlcih7XG4gIHByZWZpeGVzID0ge30sXG4gIGRpcixcbiAgY2hpbGRyZW5cbn0pIHtcbiAgY29uc3QgY29udGV4dFZhbHVlID0gdXNlTWVtbygoKSA9PiAoe1xuICAgIHByZWZpeGVzOiB7IC4uLnByZWZpeGVzXG4gICAgfSxcbiAgICBkaXJcbiAgfSksIFtwcmVmaXhlcywgZGlyXSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovX2pzeChQcm92aWRlciwge1xuICAgIHZhbHVlOiBjb250ZXh0VmFsdWUsXG4gICAgY2hpbGRyZW46IGNoaWxkcmVuXG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlQm9vdHN0cmFwUHJlZml4KHByZWZpeCwgZGVmYXVsdFByZWZpeCkge1xuICBjb25zdCB7XG4gICAgcHJlZml4ZXNcbiAgfSA9IHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTtcbiAgcmV0dXJuIHByZWZpeCB8fCBwcmVmaXhlc1tkZWZhdWx0UHJlZml4XSB8fCBkZWZhdWx0UHJlZml4O1xufVxuZXhwb3J0IGZ1bmN0aW9uIHVzZUlzUlRMKCkge1xuICBjb25zdCB7XG4gICAgZGlyXG4gIH0gPSB1c2VDb250ZXh0KFRoZW1lQ29udGV4dCk7XG4gIHJldHVybiBkaXIgPT09ICdydGwnO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVCb290c3RyYXBDb21wb25lbnQoQ29tcG9uZW50LCBvcHRzKSB7XG4gIGlmICh0eXBlb2Ygb3B0cyA9PT0gJ3N0cmluZycpIG9wdHMgPSB7XG4gICAgcHJlZml4OiBvcHRzXG4gIH07XG4gIGNvbnN0IGlzQ2xhc3N5ID0gQ29tcG9uZW50LnByb3RvdHlwZSAmJiBDb21wb25lbnQucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQ7IC8vIElmIGl0J3MgYSBmdW5jdGlvbmFsIGNvbXBvbmVudCBtYWtlIHN1cmUgd2UgZG9uJ3QgYnJlYWsgaXQgd2l0aCBhIHJlZlxuXG4gIGNvbnN0IHtcbiAgICBwcmVmaXgsXG4gICAgZm9yd2FyZFJlZkFzID0gaXNDbGFzc3kgPyAncmVmJyA6ICdpbm5lclJlZidcbiAgfSA9IG9wdHM7XG4gIGNvbnN0IFdyYXBwZWQgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZigoeyAuLi5wcm9wc1xuICB9LCByZWYpID0+IHtcbiAgICBwcm9wc1tmb3J3YXJkUmVmQXNdID0gcmVmO1xuICAgIGNvbnN0IGJzUHJlZml4ID0gdXNlQm9vdHN0cmFwUHJlZml4KHByb3BzLmJzUHJlZml4LCBwcmVmaXgpO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovX2pzeChDb21wb25lbnQsIHsgLi4ucHJvcHMsXG4gICAgICBic1ByZWZpeDogYnNQcmVmaXhcbiAgICB9KTtcbiAgfSk7XG4gIFdyYXBwZWQuZGlzcGxheU5hbWUgPSBgQm9vdHN0cmFwKCR7Q29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lfSlgO1xuICByZXR1cm4gV3JhcHBlZDtcbn1cblxuZXhwb3J0IHsgY3JlYXRlQm9vdHN0cmFwQ29tcG9uZW50LCBDb25zdW1lciBhcyBUaGVtZUNvbnN1bWVyIH07XG5leHBvcnQgZGVmYXVsdCBUaGVtZVByb3ZpZGVyOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==