'use strict';

var require$$1$1 = require('util');
var require$$0$1 = require('fs');
var require$$0$2 = require('path');
var require$$3$1 = require('crypto');
var require$$4 = require('assert');
var require$$5 = require('events');
var require$$1 = require('os');
var require$$1$2 = require('http');
var require$$2 = require('https');
var require$$0$4 = require('url');
var require$$3$2 = require('stream');
var require$$0$3 = require('tty');
var require$$8 = require('zlib');

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}
function _callSuper(t, o, e) {
  return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _construct(t, e, r) {
  if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
  var o = [null];
  o.push.apply(o, e);
  var p = new (t.bind.apply(t, o))();
  return r && _setPrototypeOf(p, r.prototype), p;
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e) {
      t && (r = t);
      var n = 0,
        F = function () {};
      return {
        s: F,
        n: function () {
          return n >= r.length ? {
            done: !0
          } : {
            done: !1,
            value: r[n++]
          };
        },
        e: function (r) {
          throw r;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o,
    a = !0,
    u = !1;
  return {
    s: function () {
      t = t.call(r);
    },
    n: function () {
      var r = t.next();
      return a = r.done, r;
    },
    e: function (r) {
      u = !0, o = r;
    },
    f: function () {
      try {
        a || null == t.return || t.return();
      } finally {
        if (u) throw o;
      }
    }
  };
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function _get() {
  return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) {
    var p = _superPropBase(e, t);
    if (p) {
      var n = Object.getOwnPropertyDescriptor(p, t);
      return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value;
    }
  }, _get.apply(null, arguments);
}
function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, _getPrototypeOf(t);
}
function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(t, "prototype", {
    writable: !1
  }), e && _setPrototypeOf(t, e);
}
function _isNativeFunction(t) {
  try {
    return -1 !== Function.toString.call(t).indexOf("[native code]");
  } catch (n) {
    return "function" == typeof t;
  }
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function () {
    return !!t;
  })();
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _possibleConstructorReturn(t, e) {
  if (e && ("object" == typeof e || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized(t);
}
function _regeneratorRuntime() {
  _regeneratorRuntime = function () {
    return e;
  };
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function (t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function (t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(typeof e + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function (e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function () {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function (e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function (t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function (t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    catch: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function (e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _superPropBase(t, o) {
  for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t)););
  return t;
}
function _superPropGet(t, e, o, r) {
  var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), e, o);
  return 2 & r && "function" == typeof p ? function (t) {
    return p.apply(o, t);
  } : p;
}
function _taggedTemplateLiteral(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
    raw: {
      value: Object.freeze(t)
    }
  }));
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _wrapNativeSuper(t) {
  var r = "function" == typeof Map ? new Map() : void 0;
  return _wrapNativeSuper = function (t) {
    if (null === t || !_isNativeFunction(t)) return t;
    if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
    if (void 0 !== r) {
      if (r.has(t)) return r.get(t);
      r.set(t, Wrapper);
    }
    function Wrapper() {
      return _construct(t, arguments, _getPrototypeOf(this).constructor);
    }
    return Wrapper.prototype = Object.create(t.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), _setPrototypeOf(Wrapper, t);
  }, _wrapNativeSuper(t);
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var react = {exports: {}};

var react_production_min = {};

var hasRequiredReact_production_min;
function requireReact_production_min() {
  if (hasRequiredReact_production_min) return react_production_min;
  hasRequiredReact_production_min = 1;
  var l = Symbol["for"]("react.element"),
    n = Symbol["for"]("react.portal"),
    p = Symbol["for"]("react.fragment"),
    q = Symbol["for"]("react.strict_mode"),
    r = Symbol["for"]("react.profiler"),
    t = Symbol["for"]("react.provider"),
    u = Symbol["for"]("react.context"),
    v = Symbol["for"]("react.forward_ref"),
    w = Symbol["for"]("react.suspense"),
    x = Symbol["for"]("react.memo"),
    y = Symbol["for"]("react.lazy"),
    z = Symbol.iterator;
  function A(a) {
    if (null === a || "object" !== _typeof(a)) return null;
    a = z && a[z] || a["@@iterator"];
    return "function" === typeof a ? a : null;
  }
  var B = {
      isMounted: function isMounted() {
        return !1;
      },
      enqueueForceUpdate: function enqueueForceUpdate() {},
      enqueueReplaceState: function enqueueReplaceState() {},
      enqueueSetState: function enqueueSetState() {}
    },
    C = Object.assign,
    D = {};
  function E(a, b, e) {
    this.props = a;
    this.context = b;
    this.refs = D;
    this.updater = e || B;
  }
  E.prototype.isReactComponent = {};
  E.prototype.setState = function (a, b) {
    if ("object" !== _typeof(a) && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, a, b, "setState");
  };
  E.prototype.forceUpdate = function (a) {
    this.updater.enqueueForceUpdate(this, a, "forceUpdate");
  };
  function F() {}
  F.prototype = E.prototype;
  function G(a, b, e) {
    this.props = a;
    this.context = b;
    this.refs = D;
    this.updater = e || B;
  }
  var H = G.prototype = new F();
  H.constructor = G;
  C(H, E.prototype);
  H.isPureReactComponent = !0;
  var I = Array.isArray,
    J = Object.prototype.hasOwnProperty,
    K = {
      current: null
    },
    L = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    };
  function M(a, b, e) {
    var d,
      c = {},
      k = null,
      h = null;
    if (null != b) for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b) J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
    var g = arguments.length - 2;
    if (1 === g) c.children = e;else if (1 < g) {
      for (var f = Array(g), m = 0; m < g; m++) f[m] = arguments[m + 2];
      c.children = f;
    }
    if (a && a.defaultProps) for (d in g = a.defaultProps, g) void 0 === c[d] && (c[d] = g[d]);
    return {
      $$typeof: l,
      type: a,
      key: k,
      ref: h,
      props: c,
      _owner: K.current
    };
  }
  function N(a, b) {
    return {
      $$typeof: l,
      type: a.type,
      key: b,
      ref: a.ref,
      props: a.props,
      _owner: a._owner
    };
  }
  function O(a) {
    return "object" === _typeof(a) && null !== a && a.$$typeof === l;
  }
  function escape(a) {
    var b = {
      "=": "=0",
      ":": "=2"
    };
    return "$" + a.replace(/[=:]/g, function (a) {
      return b[a];
    });
  }
  var P = /\/+/g;
  function Q(a, b) {
    return "object" === _typeof(a) && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
  }
  function R(a, b, e, d, c) {
    var k = _typeof(a);
    if ("undefined" === k || "boolean" === k) a = null;
    var h = !1;
    if (null === a) h = !0;else switch (k) {
      case "string":
      case "number":
        h = !0;
        break;
      case "object":
        switch (a.$$typeof) {
          case l:
          case n:
            h = !0;
        }
    }
    if (h) return h = a, c = c(h), a = "" === d ? "." + Q(h, 0) : d, I(c) ? (e = "", null != a && (e = a.replace(P, "$&/") + "/"), R(c, b, e, "", function (a) {
      return a;
    })) : null != c && (O(c) && (c = N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), b.push(c)), 1;
    h = 0;
    d = "" === d ? "." : d + ":";
    if (I(a)) for (var g = 0; g < a.length; g++) {
      k = a[g];
      var f = d + Q(k, g);
      h += R(k, b, e, f, c);
    } else if (f = A(a), "function" === typeof f) for (a = f.call(a), g = 0; !(k = a.next()).done;) k = k.value, f = d + Q(k, g++), h += R(k, b, e, f, c);else if ("object" === k) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
    return h;
  }
  function S(a, b, e) {
    if (null == a) return a;
    var d = [],
      c = 0;
    R(a, d, "", "", function (a) {
      return b.call(e, a, c++);
    });
    return d;
  }
  function T(a) {
    if (-1 === a._status) {
      var b = a._result;
      b = b();
      b.then(function (b) {
        if (0 === a._status || -1 === a._status) a._status = 1, a._result = b;
      }, function (b) {
        if (0 === a._status || -1 === a._status) a._status = 2, a._result = b;
      });
      -1 === a._status && (a._status = 0, a._result = b);
    }
    if (1 === a._status) return a._result["default"];
    throw a._result;
  }
  var U = {
      current: null
    },
    V = {
      transition: null
    },
    W = {
      ReactCurrentDispatcher: U,
      ReactCurrentBatchConfig: V,
      ReactCurrentOwner: K
    };
  function X() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  react_production_min.Children = {
    map: S,
    forEach: function forEach(a, b, e) {
      S(a, function () {
        b.apply(this, arguments);
      }, e);
    },
    count: function count(a) {
      var b = 0;
      S(a, function () {
        b++;
      });
      return b;
    },
    toArray: function toArray(a) {
      return S(a, function (a) {
        return a;
      }) || [];
    },
    only: function only(a) {
      if (!O(a)) throw Error("React.Children.only expected to receive a single React element child.");
      return a;
    }
  };
  react_production_min.Component = E;
  react_production_min.Fragment = p;
  react_production_min.Profiler = r;
  react_production_min.PureComponent = G;
  react_production_min.StrictMode = q;
  react_production_min.Suspense = w;
  react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
  react_production_min.act = X;
  react_production_min.cloneElement = function (a, b, e) {
    if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
    var d = C({}, a.props),
      c = a.key,
      k = a.ref,
      h = a._owner;
    if (null != b) {
      void 0 !== b.ref && (k = b.ref, h = K.current);
      void 0 !== b.key && (c = "" + b.key);
      if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
      for (f in b) J.call(b, f) && !L.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
    }
    var f = arguments.length - 2;
    if (1 === f) d.children = e;else if (1 < f) {
      g = Array(f);
      for (var m = 0; m < f; m++) g[m] = arguments[m + 2];
      d.children = g;
    }
    return {
      $$typeof: l,
      type: a.type,
      key: c,
      ref: k,
      props: d,
      _owner: h
    };
  };
  react_production_min.createContext = function (a) {
    a = {
      $$typeof: u,
      _currentValue: a,
      _currentValue2: a,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null
    };
    a.Provider = {
      $$typeof: t,
      _context: a
    };
    return a.Consumer = a;
  };
  react_production_min.createElement = M;
  react_production_min.createFactory = function (a) {
    var b = M.bind(null, a);
    b.type = a;
    return b;
  };
  react_production_min.createRef = function () {
    return {
      current: null
    };
  };
  react_production_min.forwardRef = function (a) {
    return {
      $$typeof: v,
      render: a
    };
  };
  react_production_min.isValidElement = O;
  react_production_min.lazy = function (a) {
    return {
      $$typeof: y,
      _payload: {
        _status: -1,
        _result: a
      },
      _init: T
    };
  };
  react_production_min.memo = function (a, b) {
    return {
      $$typeof: x,
      type: a,
      compare: void 0 === b ? null : b
    };
  };
  react_production_min.startTransition = function (a) {
    var b = V.transition;
    V.transition = {};
    try {
      a();
    } finally {
      V.transition = b;
    }
  };
  react_production_min.unstable_act = X;
  react_production_min.useCallback = function (a, b) {
    return U.current.useCallback(a, b);
  };
  react_production_min.useContext = function (a) {
    return U.current.useContext(a);
  };
  react_production_min.useDebugValue = function () {};
  react_production_min.useDeferredValue = function (a) {
    return U.current.useDeferredValue(a);
  };
  react_production_min.useEffect = function (a, b) {
    return U.current.useEffect(a, b);
  };
  react_production_min.useId = function () {
    return U.current.useId();
  };
  react_production_min.useImperativeHandle = function (a, b, e) {
    return U.current.useImperativeHandle(a, b, e);
  };
  react_production_min.useInsertionEffect = function (a, b) {
    return U.current.useInsertionEffect(a, b);
  };
  react_production_min.useLayoutEffect = function (a, b) {
    return U.current.useLayoutEffect(a, b);
  };
  react_production_min.useMemo = function (a, b) {
    return U.current.useMemo(a, b);
  };
  react_production_min.useReducer = function (a, b, e) {
    return U.current.useReducer(a, b, e);
  };
  react_production_min.useRef = function (a) {
    return U.current.useRef(a);
  };
  react_production_min.useState = function (a) {
    return U.current.useState(a);
  };
  react_production_min.useSyncExternalStore = function (a, b, e) {
    return U.current.useSyncExternalStore(a, b, e);
  };
  react_production_min.useTransition = function () {
    return U.current.useTransition();
  };
  react_production_min.version = "18.3.1";
  return react_production_min;
}

var react_development = {exports: {}};

react_development.exports;
var hasRequiredReact_development;
function requireReact_development() {
  if (hasRequiredReact_development) return react_development.exports;
  hasRequiredReact_development = 1;
  (function (module, exports) {

    if (process.env.NODE_ENV !== "production") {
      (function () {

        /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === 'function') {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
        }
        var ReactVersion = '18.3.1';

        // ATTENTION
        // When adding new symbols to this file,
        // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
        // The Symbol used to tag the ReactElement-like types.
        var REACT_ELEMENT_TYPE = Symbol["for"]('react.element');
        var REACT_PORTAL_TYPE = Symbol["for"]('react.portal');
        var REACT_FRAGMENT_TYPE = Symbol["for"]('react.fragment');
        var REACT_STRICT_MODE_TYPE = Symbol["for"]('react.strict_mode');
        var REACT_PROFILER_TYPE = Symbol["for"]('react.profiler');
        var REACT_PROVIDER_TYPE = Symbol["for"]('react.provider');
        var REACT_CONTEXT_TYPE = Symbol["for"]('react.context');
        var REACT_FORWARD_REF_TYPE = Symbol["for"]('react.forward_ref');
        var REACT_SUSPENSE_TYPE = Symbol["for"]('react.suspense');
        var REACT_SUSPENSE_LIST_TYPE = Symbol["for"]('react.suspense_list');
        var REACT_MEMO_TYPE = Symbol["for"]('react.memo');
        var REACT_LAZY_TYPE = Symbol["for"]('react.lazy');
        var REACT_OFFSCREEN_TYPE = Symbol["for"]('react.offscreen');
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = '@@iterator';
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || _typeof(maybeIterable) !== 'object') {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === 'function') {
            return maybeIterator;
          }
          return null;
        }

        /**
         * Keeps track of the current dispatcher.
         */
        var ReactCurrentDispatcher = {
          /**
           * @internal
           * @type {ReactComponent}
           */
          current: null
        };

        /**
         * Keeps track of the current batch's configuration such as how long an update
         * should suspend for if it needs to.
         */
        var ReactCurrentBatchConfig = {
          transition: null
        };
        var ReactCurrentActQueue = {
          current: null,
          // Used to reproduce behavior of `batchedUpdates` in legacy mode.
          isBatchingLegacy: false,
          didScheduleLegacyUpdate: false
        };

        /**
         * Keeps track of the current owner.
         *
         * The current owner is the component who should own any components that are
         * currently being constructed.
         */
        var ReactCurrentOwner = {
          /**
           * @internal
           * @type {ReactComponent}
           */
          current: null
        };
        var ReactDebugCurrentFrame = {};
        var currentExtraStackFrame = null;
        function setExtraStackFrame(stack) {
          {
            currentExtraStackFrame = stack;
          }
        }
        {
          ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {
            {
              currentExtraStackFrame = stack;
            }
          }; // Stack implementation injected by the current renderer.

          ReactDebugCurrentFrame.getCurrentStack = null;
          ReactDebugCurrentFrame.getStackAddendum = function () {
            var stack = ''; // Add an extra top frame while an element is being validated

            if (currentExtraStackFrame) {
              stack += currentExtraStackFrame;
            } // Delegate to the injected renderer-specific implementation

            var impl = ReactDebugCurrentFrame.getCurrentStack;
            if (impl) {
              stack += impl() || '';
            }
            return stack;
          };
        }

        // -----------------------------------------------------------------------------

        var enableScopeAPI = false; // Experimental Create Event Handle API.
        var enableCacheElement = false;
        var enableTransitionTracing = false; // No known bugs, but needs performance testing

        var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
        // stuff. Intended to enable React core members to more easily debug scheduling
        // issues in DEV builds.

        var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

        var ReactSharedInternals = {
          ReactCurrentDispatcher: ReactCurrentDispatcher,
          ReactCurrentBatchConfig: ReactCurrentBatchConfig,
          ReactCurrentOwner: ReactCurrentOwner
        };
        {
          ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
          ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
        }

        // by calls to these methods by a Babel plugin.
        //
        // In PROD (or in packages without access to React internals),
        // they are left as they are instead.

        function warn(format) {
          {
            {
              for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
              }
              printWarning('warn', format, args);
            }
          }
        }
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning('error', format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          // When changing this logic, you might want to also
          // update consoleWithStackDev.www.js as well.
          {
            var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame.getStackAddendum();
            if (stack !== '') {
              format += '%s';
              args = args.concat([stack]);
            } // eslint-disable-next-line react-internal/safe-string-coercion

            var argsWithFormat = args.map(function (item) {
              return String(item);
            }); // Careful: RN currently depends on this prefix

            argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
            // breaks IE9: https://github.com/facebook/react/issues/13610
            // eslint-disable-next-line react-internal/no-production-logging

            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        var didWarnStateUpdateForUnmountedComponent = {};
        function warnNoop(publicInstance, callerName) {
          {
            var _constructor = publicInstance.constructor;
            var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
            var warningKey = componentName + "." + callerName;
            if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
              return;
            }
            error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);
            didWarnStateUpdateForUnmountedComponent[warningKey] = true;
          }
        }
        /**
         * This is the abstract API for an update queue.
         */

        var ReactNoopUpdateQueue = {
          /**
           * Checks whether or not this composite component is mounted.
           * @param {ReactClass} publicInstance The instance we want to test.
           * @return {boolean} True if mounted, false otherwise.
           * @protected
           * @final
           */
          isMounted: function isMounted(publicInstance) {
            return false;
          },
          /**
           * Forces an update. This should only be invoked when it is known with
           * certainty that we are **not** in a DOM transaction.
           *
           * You may want to call this when you know that some deeper aspect of the
           * component's state has changed but `setState` was not called.
           *
           * This will not invoke `shouldComponentUpdate`, but it will invoke
           * `componentWillUpdate` and `componentDidUpdate`.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {?function} callback Called after component is updated.
           * @param {?string} callerName name of the calling function in the public API.
           * @internal
           */
          enqueueForceUpdate: function enqueueForceUpdate(publicInstance, callback, callerName) {
            warnNoop(publicInstance, 'forceUpdate');
          },
          /**
           * Replaces all of the state. Always use this or `setState` to mutate state.
           * You should treat `this.state` as immutable.
           *
           * There is no guarantee that `this.state` will be immediately updated, so
           * accessing `this.state` after calling this method may return the old value.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {object} completeState Next state.
           * @param {?function} callback Called after component is updated.
           * @param {?string} callerName name of the calling function in the public API.
           * @internal
           */
          enqueueReplaceState: function enqueueReplaceState(publicInstance, completeState, callback, callerName) {
            warnNoop(publicInstance, 'replaceState');
          },
          /**
           * Sets a subset of the state. This only exists because _pendingState is
           * internal. This provides a merging strategy that is not available to deep
           * properties which is confusing. TODO: Expose pendingState or don't use it
           * during the merge.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {object} partialState Next partial state to be merged with state.
           * @param {?function} callback Called after component is updated.
           * @param {?string} Name of the calling function in the public API.
           * @internal
           */
          enqueueSetState: function enqueueSetState(publicInstance, partialState, callback, callerName) {
            warnNoop(publicInstance, 'setState');
          }
        };
        var assign = Object.assign;
        var emptyObject = {};
        {
          Object.freeze(emptyObject);
        }
        /**
         * Base class helpers for the updating state of a component.
         */

        function Component(props, context, updater) {
          this.props = props;
          this.context = context; // If a component has string refs, we will assign a different object later.

          this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
          // renderer.

          this.updater = updater || ReactNoopUpdateQueue;
        }
        Component.prototype.isReactComponent = {};
        /**
         * Sets a subset of the state. Always use this to mutate
         * state. You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * There is no guarantee that calls to `setState` will run synchronously,
         * as they may eventually be batched together.  You can provide an optional
         * callback that will be executed when the call to setState is actually
         * completed.
         *
         * When a function is provided to setState, it will be called at some point in
         * the future (not synchronously). It will be called with the up to date
         * component arguments (state, props, context). These values can be different
         * from this.* because your function may be called after receiveProps but before
         * shouldComponentUpdate, and this new state, props, and context will not yet be
         * assigned to this.
         *
         * @param {object|function} partialState Next partial state or function to
         *        produce next partial state to be merged with current state.
         * @param {?function} callback Called after state is updated.
         * @final
         * @protected
         */

        Component.prototype.setState = function (partialState, callback) {
          if (_typeof(partialState) !== 'object' && typeof partialState !== 'function' && partialState != null) {
            throw new Error('setState(...): takes an object of state variables to update or a ' + 'function which returns an object of state variables.');
          }
          this.updater.enqueueSetState(this, partialState, callback, 'setState');
        };
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {?function} callback Called after update is complete.
         * @final
         * @protected
         */

        Component.prototype.forceUpdate = function (callback) {
          this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
        };
        /**
         * Deprecated APIs. These APIs used to exist on classic React classes but since
         * we would like to deprecate them, we're not going to move them over to this
         * modern base class. Instead, we define a getter that warns if it's accessed.
         */

        {
          var deprecatedAPIs = {
            isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
            replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
          };
          var defineDeprecationWarning = function defineDeprecationWarning(methodName, info) {
            Object.defineProperty(Component.prototype, methodName, {
              get: function get() {
                warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
                return undefined;
              }
            });
          };
          for (var fnName in deprecatedAPIs) {
            if (deprecatedAPIs.hasOwnProperty(fnName)) {
              defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
            }
          }
        }
        function ComponentDummy() {}
        ComponentDummy.prototype = Component.prototype;
        /**
         * Convenience component with default shallow equality check for sCU.
         */

        function PureComponent(props, context, updater) {
          this.props = props;
          this.context = context; // If a component has string refs, we will assign a different object later.

          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
        pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

        assign(pureComponentPrototype, Component.prototype);
        pureComponentPrototype.isPureReactComponent = true;

        // an immutable object with a single mutable value
        function createRef() {
          var refObject = {
            current: null
          };
          {
            Object.seal(refObject);
          }
          return refObject;
        }
        var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

        function isArray(a) {
          return isArrayImpl(a);
        }

        /*
         * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
         * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
         *
         * The functions in this module will throw an easier-to-understand,
         * easier-to-debug exception with a clear errors message message explaining the
         * problem. (Instead of a confusing exception thrown inside the implementation
         * of the `value` object).
         */
        // $FlowFixMe only called in DEV, so void return is not possible.
        function typeName(value) {
          {
            // toStringTag is needed for namespaced types like Temporal.Instant
            var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
            var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
            return type;
          }
        } // $FlowFixMe only called in DEV, so void return is not possible.

        function willCoercionThrow(value) {
          {
            try {
              testStringCoercion(value);
              return false;
            } catch (e) {
              return true;
            }
          }
        }
        function testStringCoercion(value) {
          // If you ended up here by following an exception call stack, here's what's
          // happened: you supplied an object or symbol value to React (as a prop, key,
          // DOM attribute, CSS property, string ref, etc.) and when React tried to
          // coerce it to a string using `'' + value`, an exception was thrown.
          //
          // The most common types that will cause this exception are `Symbol` instances
          // and Temporal objects like `Temporal.Instant`. But any object that has a
          // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
          // exception. (Library authors do this to prevent users from using built-in
          // numeric operators like `+` or comparison operators like `>=` because custom
          // methods are needed to perform accurate arithmetic or comparison.)
          //
          // To fix the problem, coerce this object or symbol value to a string before
          // passing it to React. The most reliable way is usually `String(value)`.
          //
          // To find which value is throwing, check the browser or debugger console.
          // Before this exception was thrown, there should be `console.error` output
          // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
          // problem and how that type was used: key, atrribute, input value prop, etc.
          // In most cases, this console output also shows the component and its
          // ancestor components where the exception happened.
          //
          // eslint-disable-next-line react-internal/safe-string-coercion
          return '' + value;
        }
        function checkKeyStringCoercion(value) {
          {
            if (willCoercionThrow(value)) {
              error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));
              return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
            }
          }
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var displayName = outerType.displayName;
          if (displayName) {
            return displayName;
          }
          var functionName = innerType.displayName || innerType.name || '';
          return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
        } // Keep in sync with react-reconciler/getComponentNameFromFiber

        function getContextName(type) {
          return type.displayName || 'Context';
        } // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.

        function getComponentNameFromType(type) {
          if (type == null) {
            // Host root, text node or just invalid type.
            return null;
          }
          {
            if (typeof type.tag === 'number') {
              error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
            }
          }
          if (typeof type === 'function') {
            return type.displayName || type.name || null;
          }
          if (typeof type === 'string') {
            return type;
          }
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return 'Fragment';
            case REACT_PORTAL_TYPE:
              return 'Portal';
            case REACT_PROFILER_TYPE:
              return 'Profiler';
            case REACT_STRICT_MODE_TYPE:
              return 'StrictMode';
            case REACT_SUSPENSE_TYPE:
              return 'Suspense';
            case REACT_SUSPENSE_LIST_TYPE:
              return 'SuspenseList';
          }
          if (_typeof(type) === 'object') {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + '.Consumer';
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + '.Provider';
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, 'ForwardRef');
              case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) {
                  return outerName;
                }
                return getComponentNameFromType(type.type) || 'Memo';
              case REACT_LAZY_TYPE:
                {
                  var lazyComponent = type;
                  var payload = lazyComponent._payload;
                  var init = lazyComponent._init;
                  try {
                    return getComponentNameFromType(init(payload));
                  } catch (x) {
                    return null;
                  }
                }

              // eslint-disable-next-line no-fallthrough
            }
          }
          return null;
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
        var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
        {
          didWarnAboutStringRefs = {};
        }
        function hasValidRef(config) {
          {
            if (hasOwnProperty.call(config, 'ref')) {
              var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.ref !== undefined;
        }
        function hasValidKey(config) {
          {
            if (hasOwnProperty.call(config, 'key')) {
              var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.key !== undefined;
        }
        function defineKeyPropWarningGetter(props, displayName) {
          var warnAboutAccessingKey = function warnAboutAccessingKey() {
            {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
              }
            }
          };
          warnAboutAccessingKey.isReactWarning = true;
          Object.defineProperty(props, 'key', {
            get: warnAboutAccessingKey,
            configurable: true
          });
        }
        function defineRefPropWarningGetter(props, displayName) {
          var warnAboutAccessingRef = function warnAboutAccessingRef() {
            {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
              }
            }
          };
          warnAboutAccessingRef.isReactWarning = true;
          Object.defineProperty(props, 'ref', {
            get: warnAboutAccessingRef,
            configurable: true
          });
        }
        function warnIfStringRefCannotBeAutoConverted(config) {
          {
            if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
              var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
              if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);
                didWarnAboutStringRefs[componentName] = true;
              }
            }
          }
        }
        /**
         * Factory method to create a new React element. This no longer adheres to
         * the class pattern, so do not use new to call it. Also, instanceof check
         * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
         * if something is a React Element.
         *
         * @param {*} type
         * @param {*} props
         * @param {*} key
         * @param {string|object} ref
         * @param {*} owner
         * @param {*} self A *temporary* helper to detect places where `this` is
         * different from the `owner` when React.createElement is called, so that we
         * can warn. We want to get rid of owner and replace string `ref`s with arrow
         * functions, and as long as `this` and owner are the same, there will be no
         * change in behavior.
         * @param {*} source An annotation object (added by a transpiler or otherwise)
         * indicating filename, line number, and/or other information.
         * @internal
         */

        var ReactElement = function ReactElement(type, key, ref, self, source, owner, props) {
          var element = {
            // This tag allows us to uniquely identify this as a React Element
            $$typeof: REACT_ELEMENT_TYPE,
            // Built-in properties that belong on the element
            type: type,
            key: key,
            ref: ref,
            props: props,
            // Record the component responsible for creating this element.
            _owner: owner
          };
          {
            // The validation flag is currently mutative. We put it on
            // an external backing store so that we can freeze the whole object.
            // This can be replaced with a WeakMap once they are implemented in
            // commonly used development environments.
            element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
            // the validation flag non-enumerable (where possible, which should
            // include every environment we run tests in), so the test framework
            // ignores it.

            Object.defineProperty(element._store, 'validated', {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false
            }); // self and source are DEV only properties.

            Object.defineProperty(element, '_self', {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self
            }); // Two elements created in two different places should be considered
            // equal for testing purposes and therefore we hide it from enumeration.

            Object.defineProperty(element, '_source', {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source
            });
            if (Object.freeze) {
              Object.freeze(element.props);
              Object.freeze(element);
            }
          }
          return element;
        };
        /**
         * Create and return a new ReactElement of the given type.
         * See https://reactjs.org/docs/react-api.html#createelement
         */

        function createElement(type, config, children) {
          var propName; // Reserved names are extracted

          var props = {};
          var key = null;
          var ref = null;
          var self = null;
          var source = null;
          if (config != null) {
            if (hasValidRef(config)) {
              ref = config.ref;
              {
                warnIfStringRefCannotBeAutoConverted(config);
              }
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = '' + config.key;
            }
            self = config.__self === undefined ? null : config.__self;
            source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config[propName];
              }
            }
          } // Children can be more than one argument, and those are transferred onto
          // the newly allocated props object.

          var childrenLength = arguments.length - 2;
          if (childrenLength === 1) {
            props.children = children;
          } else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for (var i = 0; i < childrenLength; i++) {
              childArray[i] = arguments[i + 2];
            }
            {
              if (Object.freeze) {
                Object.freeze(childArray);
              }
            }
            props.children = childArray;
          } // Resolve default props

          if (type && type.defaultProps) {
            var defaultProps = type.defaultProps;
            for (propName in defaultProps) {
              if (props[propName] === undefined) {
                props[propName] = defaultProps[propName];
              }
            }
          }
          {
            if (key || ref) {
              var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
          }
          return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
        }
        function cloneAndReplaceKey(oldElement, newKey) {
          var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
          return newElement;
        }
        /**
         * Clone and return a new ReactElement using element as the starting point.
         * See https://reactjs.org/docs/react-api.html#cloneelement
         */

        function cloneElement(element, config, children) {
          if (element === null || element === undefined) {
            throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
          }
          var propName; // Original props are copied

          var props = assign({}, element.props); // Reserved names are extracted

          var key = element.key;
          var ref = element.ref; // Self is preserved since the owner is preserved.

          var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
          // transpiler, and the original source is probably a better indicator of the
          // true owner.

          var source = element._source; // Owner will be preserved, unless ref is overridden

          var owner = element._owner;
          if (config != null) {
            if (hasValidRef(config)) {
              // Silently steal the ref from the parent.
              ref = config.ref;
              owner = ReactCurrentOwner.current;
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = '' + config.key;
            } // Remaining properties override existing props

            var defaultProps;
            if (element.type && element.type.defaultProps) {
              defaultProps = element.type.defaultProps;
            }
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                if (config[propName] === undefined && defaultProps !== undefined) {
                  // Resolve default props
                  props[propName] = defaultProps[propName];
                } else {
                  props[propName] = config[propName];
                }
              }
            }
          } // Children can be more than one argument, and those are transferred onto
          // the newly allocated props object.

          var childrenLength = arguments.length - 2;
          if (childrenLength === 1) {
            props.children = children;
          } else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for (var i = 0; i < childrenLength; i++) {
              childArray[i] = arguments[i + 2];
            }
            props.children = childArray;
          }
          return ReactElement(element.type, key, ref, self, source, owner, props);
        }
        /**
         * Verifies the object is a ReactElement.
         * See https://reactjs.org/docs/react-api.html#isvalidelement
         * @param {?object} object
         * @return {boolean} True if `object` is a ReactElement.
         * @final
         */

        function isValidElement(object) {
          return _typeof(object) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        var SEPARATOR = '.';
        var SUBSEPARATOR = ':';
        /**
         * Escape and wrap key so it is safe to use as a reactid
         *
         * @param {string} key to be escaped.
         * @return {string} the escaped key.
         */

        function escape(key) {
          var escapeRegex = /[=:]/g;
          var escaperLookup = {
            '=': '=0',
            ':': '=2'
          };
          var escapedString = key.replace(escapeRegex, function (match) {
            return escaperLookup[match];
          });
          return '$' + escapedString;
        }
        /**
         * TODO: Test that a single child and an array with one item have the same key
         * pattern.
         */

        var didWarnAboutMaps = false;
        var userProvidedKeyEscapeRegex = /\/+/g;
        function escapeUserProvidedKey(text) {
          return text.replace(userProvidedKeyEscapeRegex, '$&/');
        }
        /**
         * Generate a key string that identifies a element within a set.
         *
         * @param {*} element A element that could contain a manual key.
         * @param {number} index Index that is used if a manual key is not provided.
         * @return {string}
         */

        function getElementKey(element, index) {
          // Do some typechecking here since we call this blindly. We want to ensure
          // that we don't block potential future ES APIs.
          if (_typeof(element) === 'object' && element !== null && element.key != null) {
            // Explicit key
            {
              checkKeyStringCoercion(element.key);
            }
            return escape('' + element.key);
          } // Implicit key determined by the index in the set

          return index.toString(36);
        }
        function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
          var type = _typeof(children);
          if (type === 'undefined' || type === 'boolean') {
            // All of the above are perceived as null.
            children = null;
          }
          var invokeCallback = false;
          if (children === null) {
            invokeCallback = true;
          } else {
            switch (type) {
              case 'string':
              case 'number':
                invokeCallback = true;
                break;
              case 'object':
                switch (children.$$typeof) {
                  case REACT_ELEMENT_TYPE:
                  case REACT_PORTAL_TYPE:
                    invokeCallback = true;
                }
            }
          }
          if (invokeCallback) {
            var _child = children;
            var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array
            // so that it's consistent if the number of children grows:

            var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;
            if (isArray(mappedChild)) {
              var escapedChildKey = '';
              if (childKey != null) {
                escapedChildKey = escapeUserProvidedKey(childKey) + '/';
              }
              mapIntoArray(mappedChild, array, escapedChildKey, '', function (c) {
                return c;
              });
            } else if (mappedChild != null) {
              if (isValidElement(mappedChild)) {
                {
                  // The `if` statement here prevents auto-disabling of the safe
                  // coercion ESLint rule, so we must manually disable it below.
                  // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
                  if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) {
                    checkKeyStringCoercion(mappedChild.key);
                  }
                }
                mappedChild = cloneAndReplaceKey(mappedChild,
                // Keep both the (mapped) and old keys if they differ, just as
                // traverseAllChildren used to do for objects as children
                escapedPrefix + (
                // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
                mappedChild.key && (!_child || _child.key !== mappedChild.key) ?
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                escapeUserProvidedKey('' + mappedChild.key) + '/' : '') + childKey);
              }
              array.push(mappedChild);
            }
            return 1;
          }
          var child;
          var nextName;
          var subtreeCount = 0; // Count of children found in the current subtree.

          var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;
          if (isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              child = children[i];
              nextName = nextNamePrefix + getElementKey(child, i);
              subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
            }
          } else {
            var iteratorFn = getIteratorFn(children);
            if (typeof iteratorFn === 'function') {
              var iterableChildren = children;
              {
                // Warn about using Maps as children
                if (iteratorFn === iterableChildren.entries) {
                  if (!didWarnAboutMaps) {
                    warn('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');
                  }
                  didWarnAboutMaps = true;
                }
              }
              var iterator = iteratorFn.call(iterableChildren);
              var step;
              var ii = 0;
              while (!(step = iterator.next()).done) {
                child = step.value;
                nextName = nextNamePrefix + getElementKey(child, ii++);
                subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
              }
            } else if (type === 'object') {
              // eslint-disable-next-line react-internal/safe-string-coercion
              var childrenString = String(children);
              throw new Error("Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + "). " + 'If you meant to render a collection of children, use an array ' + 'instead.');
            }
          }
          return subtreeCount;
        }

        /**
         * Maps children that are typically specified as `props.children`.
         *
         * See https://reactjs.org/docs/react-api.html#reactchildrenmap
         *
         * The provided mapFunction(child, index) will be called for each
         * leaf child.
         *
         * @param {?*} children Children tree container.
         * @param {function(*, int)} func The map function.
         * @param {*} context Context for mapFunction.
         * @return {object} Object containing the ordered map of results.
         */
        function mapChildren(children, func, context) {
          if (children == null) {
            return children;
          }
          var result = [];
          var count = 0;
          mapIntoArray(children, result, '', '', function (child) {
            return func.call(context, child, count++);
          });
          return result;
        }
        /**
         * Count the number of children that are typically specified as
         * `props.children`.
         *
         * See https://reactjs.org/docs/react-api.html#reactchildrencount
         *
         * @param {?*} children Children tree container.
         * @return {number} The number of children.
         */

        function countChildren(children) {
          var n = 0;
          mapChildren(children, function () {
            n++; // Don't return anything
          });
          return n;
        }

        /**
         * Iterates through children that are typically specified as `props.children`.
         *
         * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
         *
         * The provided forEachFunc(child, index) will be called for each
         * leaf child.
         *
         * @param {?*} children Children tree container.
         * @param {function(*, int)} forEachFunc
         * @param {*} forEachContext Context for forEachContext.
         */
        function forEachChildren(children, forEachFunc, forEachContext) {
          mapChildren(children, function () {
            forEachFunc.apply(this, arguments); // Don't return anything.
          }, forEachContext);
        }
        /**
         * Flatten a children object (typically specified as `props.children`) and
         * return an array with appropriately re-keyed children.
         *
         * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
         */

        function toArray(children) {
          return mapChildren(children, function (child) {
            return child;
          }) || [];
        }
        /**
         * Returns the first child in a collection of children and verifies that there
         * is only one child in the collection.
         *
         * See https://reactjs.org/docs/react-api.html#reactchildrenonly
         *
         * The current implementation of this function assumes that a single child gets
         * passed without a wrapper, but the purpose of this helper function is to
         * abstract away the particular structure of children.
         *
         * @param {?object} children Child collection structure.
         * @return {ReactElement} The first and only `ReactElement` contained in the
         * structure.
         */

        function onlyChild(children) {
          if (!isValidElement(children)) {
            throw new Error('React.Children.only expected to receive a single React element child.');
          }
          return children;
        }
        function createContext(defaultValue) {
          // TODO: Second argument used to be an optional `calculateChangedBits`
          // function. Warn to reserve for future use?
          var context = {
            $$typeof: REACT_CONTEXT_TYPE,
            // As a workaround to support multiple concurrent renderers, we categorize
            // some renderers as primary and others as secondary. We only expect
            // there to be two concurrent renderers at most: React Native (primary) and
            // Fabric (secondary); React DOM (primary) and React ART (secondary).
            // Secondary renderers store their context values on separate fields.
            _currentValue: defaultValue,
            _currentValue2: defaultValue,
            // Used to track how many concurrent renderers this context currently
            // supports within in a single renderer. Such as parallel server rendering.
            _threadCount: 0,
            // These are circular
            Provider: null,
            Consumer: null,
            // Add these to use same hidden class in VM as ServerContext
            _defaultValue: null,
            _globalName: null
          };
          context.Provider = {
            $$typeof: REACT_PROVIDER_TYPE,
            _context: context
          };
          var hasWarnedAboutUsingNestedContextConsumers = false;
          var hasWarnedAboutUsingConsumerProvider = false;
          var hasWarnedAboutDisplayNameOnConsumer = false;
          {
            // A separate object, but proxies back to the original context object for
            // backwards compatibility. It has a different $$typeof, so we can properly
            // warn for the incorrect usage of Context as a Consumer.
            var Consumer = {
              $$typeof: REACT_CONTEXT_TYPE,
              _context: context
            }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

            Object.defineProperties(Consumer, {
              Provider: {
                get: function get() {
                  if (!hasWarnedAboutUsingConsumerProvider) {
                    hasWarnedAboutUsingConsumerProvider = true;
                    error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
                  }
                  return context.Provider;
                },
                set: function set(_Provider) {
                  context.Provider = _Provider;
                }
              },
              _currentValue: {
                get: function get() {
                  return context._currentValue;
                },
                set: function set(_currentValue) {
                  context._currentValue = _currentValue;
                }
              },
              _currentValue2: {
                get: function get() {
                  return context._currentValue2;
                },
                set: function set(_currentValue2) {
                  context._currentValue2 = _currentValue2;
                }
              },
              _threadCount: {
                get: function get() {
                  return context._threadCount;
                },
                set: function set(_threadCount) {
                  context._threadCount = _threadCount;
                }
              },
              Consumer: {
                get: function get() {
                  if (!hasWarnedAboutUsingNestedContextConsumers) {
                    hasWarnedAboutUsingNestedContextConsumers = true;
                    error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
                  }
                  return context.Consumer;
                }
              },
              displayName: {
                get: function get() {
                  return context.displayName;
                },
                set: function set(displayName) {
                  if (!hasWarnedAboutDisplayNameOnConsumer) {
                    warn('Setting `displayName` on Context.Consumer has no effect. ' + "You should set it directly on the context with Context.displayName = '%s'.", displayName);
                    hasWarnedAboutDisplayNameOnConsumer = true;
                  }
                }
              }
            }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

            context.Consumer = Consumer;
          }
          {
            context._currentRenderer = null;
            context._currentRenderer2 = null;
          }
          return context;
        }
        var Uninitialized = -1;
        var Pending = 0;
        var Resolved = 1;
        var Rejected = 2;
        function lazyInitializer(payload) {
          if (payload._status === Uninitialized) {
            var ctor = payload._result;
            var thenable = ctor(); // Transition to the next state.
            // This might throw either because it's missing or throws. If so, we treat it
            // as still uninitialized and try again next time. Which is the same as what
            // happens if the ctor or any wrappers processing the ctor throws. This might
            // end up fixing it if the resolution was a concurrency bug.

            thenable.then(function (moduleObject) {
              if (payload._status === Pending || payload._status === Uninitialized) {
                // Transition to the next state.
                var resolved = payload;
                resolved._status = Resolved;
                resolved._result = moduleObject;
              }
            }, function (error) {
              if (payload._status === Pending || payload._status === Uninitialized) {
                // Transition to the next state.
                var rejected = payload;
                rejected._status = Rejected;
                rejected._result = error;
              }
            });
            if (payload._status === Uninitialized) {
              // In case, we're still uninitialized, then we're waiting for the thenable
              // to resolve. Set it as pending in the meantime.
              var pending = payload;
              pending._status = Pending;
              pending._result = thenable;
            }
          }
          if (payload._status === Resolved) {
            var moduleObject = payload._result;
            {
              if (moduleObject === undefined) {
                error('lazy: Expected the result of a dynamic imp' + 'ort() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' +
                // Break up imports to avoid accidentally parsing them as dependencies.
                'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))\n\n" + 'Did you accidentally put curly braces around the import?', moduleObject);
              }
            }
            {
              if (!('default' in moduleObject)) {
                error('lazy: Expected the result of a dynamic imp' + 'ort() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' +
                // Break up imports to avoid accidentally parsing them as dependencies.
                'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))", moduleObject);
              }
            }
            return moduleObject["default"];
          } else {
            throw payload._result;
          }
        }
        function lazy(ctor) {
          var payload = {
            // We use these fields to store the result.
            _status: Uninitialized,
            _result: ctor
          };
          var lazyType = {
            $$typeof: REACT_LAZY_TYPE,
            _payload: payload,
            _init: lazyInitializer
          };
          {
            // In production, this would just set it on the object.
            var defaultProps;
            var propTypes; // $FlowFixMe

            Object.defineProperties(lazyType, {
              defaultProps: {
                configurable: true,
                get: function get() {
                  return defaultProps;
                },
                set: function set(newDefaultProps) {
                  error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
                  defaultProps = newDefaultProps; // Match production behavior more closely:
                  // $FlowFixMe

                  Object.defineProperty(lazyType, 'defaultProps', {
                    enumerable: true
                  });
                }
              },
              propTypes: {
                configurable: true,
                get: function get() {
                  return propTypes;
                },
                set: function set(newPropTypes) {
                  error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
                  propTypes = newPropTypes; // Match production behavior more closely:
                  // $FlowFixMe

                  Object.defineProperty(lazyType, 'propTypes', {
                    enumerable: true
                  });
                }
              }
            });
          }
          return lazyType;
        }
        function forwardRef(render) {
          {
            if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
              error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
            } else if (typeof render !== 'function') {
              error('forwardRef requires a render function but was given %s.', render === null ? 'null' : _typeof(render));
            } else {
              if (render.length !== 0 && render.length !== 2) {
                error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
              }
            }
            if (render != null) {
              if (render.defaultProps != null || render.propTypes != null) {
                error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
              }
            }
          }
          var elementType = {
            $$typeof: REACT_FORWARD_REF_TYPE,
            render: render
          };
          {
            var ownName;
            Object.defineProperty(elementType, 'displayName', {
              enumerable: false,
              configurable: true,
              get: function get() {
                return ownName;
              },
              set: function set(name) {
                ownName = name; // The inner component shouldn't inherit this display name in most cases,
                // because the component may be used elsewhere.
                // But it's nice for anonymous functions to inherit the name,
                // so that our component-stack generation logic will display their frames.
                // An anonymous function generally suggests a pattern like:
                //   React.forwardRef((props, ref) => {...});
                // This kind of inner function is not used elsewhere so the side effect is okay.

                if (!render.name && !render.displayName) {
                  render.displayName = name;
                }
              }
            });
          }
          return elementType;
        }
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol["for"]('react.module.reference');
        }
        function isValidElementType(type) {
          if (typeof type === 'string' || typeof type === 'function') {
            return true;
          } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).

          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (_typeof(type) === 'object' && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE ||
            // This needs to include all possible module reference object
            // types supported by any Flight configuration anywhere since
            // we don't know which Flight build this will end up being used
            // with.
            type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
              return true;
            }
          }
          return false;
        }
        function memo(type, compare) {
          {
            if (!isValidElementType(type)) {
              error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : _typeof(type));
            }
          }
          var elementType = {
            $$typeof: REACT_MEMO_TYPE,
            type: type,
            compare: compare === undefined ? null : compare
          };
          {
            var ownName;
            Object.defineProperty(elementType, 'displayName', {
              enumerable: false,
              configurable: true,
              get: function get() {
                return ownName;
              },
              set: function set(name) {
                ownName = name; // The inner component shouldn't inherit this display name in most cases,
                // because the component may be used elsewhere.
                // But it's nice for anonymous functions to inherit the name,
                // so that our component-stack generation logic will display their frames.
                // An anonymous function generally suggests a pattern like:
                //   React.memo((props) => {...});
                // This kind of inner function is not used elsewhere so the side effect is okay.

                if (!type.name && !type.displayName) {
                  type.displayName = name;
                }
              }
            });
          }
          return elementType;
        }
        function resolveDispatcher() {
          var dispatcher = ReactCurrentDispatcher.current;
          {
            if (dispatcher === null) {
              error('Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for' + ' one of the following reasons:\n' + '1. You might have mismatching versions of React and the renderer (such as React DOM)\n' + '2. You might be breaking the Rules of Hooks\n' + '3. You might have more than one copy of React in the same app\n' + 'See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.');
            }
          } // Will result in a null access error if accessed outside render phase. We
          // intentionally don't throw our own error because this is in a hot path.
          // Also helps ensure this is inlined.

          return dispatcher;
        }
        function useContext(Context) {
          var dispatcher = resolveDispatcher();
          {
            // TODO: add a more generic warning for invalid values.
            if (Context._context !== undefined) {
              var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
              // and nobody should be using this in existing code.

              if (realContext.Consumer === Context) {
                error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
              } else if (realContext.Provider === Context) {
                error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
              }
            }
          }
          return dispatcher.useContext(Context);
        }
        function useState(initialState) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useState(initialState);
        }
        function useReducer(reducer, initialArg, init) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useReducer(reducer, initialArg, init);
        }
        function useRef(initialValue) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useRef(initialValue);
        }
        function useEffect(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useEffect(create, deps);
        }
        function useInsertionEffect(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useInsertionEffect(create, deps);
        }
        function useLayoutEffect(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useLayoutEffect(create, deps);
        }
        function useCallback(callback, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useCallback(callback, deps);
        }
        function useMemo(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useMemo(create, deps);
        }
        function useImperativeHandle(ref, create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useImperativeHandle(ref, create, deps);
        }
        function useDebugValue(value, formatterFn) {
          {
            var dispatcher = resolveDispatcher();
            return dispatcher.useDebugValue(value, formatterFn);
          }
        }
        function useTransition() {
          var dispatcher = resolveDispatcher();
          return dispatcher.useTransition();
        }
        function useDeferredValue(value) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useDeferredValue(value);
        }
        function useId() {
          var dispatcher = resolveDispatcher();
          return dispatcher.useId();
        }
        function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
        }

        // Helpers to patch console.logs to avoid logging during side-effect free
        // replaying on render function. This currently only patches the object
        // lazily which won't cover if the log function was extracted eagerly.
        // We could also eagerly patch the method.
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {}
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              /* eslint-disable react-internal/no-production-logging */
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
              }; // $FlowFixMe Flow thinks console is immutable.

              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
              });
              /* eslint-enable react-internal/no-production-logging */
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              /* eslint-disable react-internal/no-production-logging */
              var props = {
                configurable: true,
                enumerable: true,
                writable: true
              }; // $FlowFixMe Flow thinks console is immutable.

              Object.defineProperties(console, {
                log: assign({}, props, {
                  value: prevLog
                }),
                info: assign({}, props, {
                  value: prevInfo
                }),
                warn: assign({}, props, {
                  value: prevWarn
                }),
                error: assign({}, props, {
                  value: prevError
                }),
                group: assign({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                  value: prevGroupEnd
                })
              });
              /* eslint-enable react-internal/no-production-logging */
            }
            if (disabledDepth < 0) {
              error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
            }
          }
        }
        var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix === undefined) {
              // Extract the VM specific prefix used by each line.
              try {
                throw Error();
              } catch (x) {
                var match = x.stack.trim().match(/\n( *(at )?)/);
                prefix = match && match[1] || '';
              }
            } // We use the prefix to ensure our stacks line up with native stack frames.

            return '\n' + prefix + name;
          }
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          // If something asked for a stack inside a fake render, it should get ignored.
          if (!fn || reentry) {
            return '';
          }
          {
            var frame = componentFrameCache.get(fn);
            if (frame !== undefined) {
              return frame;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

          Error.prepareStackTrace = undefined;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function
            // for warnings.

            ReactCurrentDispatcher$1.current = null;
            disableLogs();
          }
          try {
            // This should throw.
            if (construct) {
              // Something should be setting the props in the constructor.
              var Fake = function Fake() {
                throw Error();
              }; // $FlowFixMe

              Object.defineProperty(Fake.prototype, 'props', {
                set: function set() {
                  // We use a throwing setter instead of frozen or non-writable props
                  // because that won't throw in a non-strict mode function.
                  throw Error();
                }
              });
              if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === 'object' && Reflect.construct) {
                // We construct a different control for this case to include any extra
                // frames added by the construct call.
                try {
                  Reflect.construct(Fake, []);
                } catch (x) {
                  control = x;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x) {
                  control = x;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                control = x;
              }
              fn();
            }
          } catch (sample) {
            // This is inlined manually because closure doesn't do it for us.
            if (sample && control && typeof sample.stack === 'string') {
              // This extracts the first frame from the sample that isn't also in the control.
              // Skipping one frame that we assume is the frame that calls the two.
              var sampleLines = sample.stack.split('\n');
              var controlLines = control.stack.split('\n');
              var s = sampleLines.length - 1;
              var c = controlLines.length - 1;
              while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                // We expect at least one stack frame to be shared.
                // Typically this will be the root most one. However, stack frames may be
                // cut off due to maximum stack limits. In this case, one maybe cut off
                // earlier than the other. We assume that the sample is longer or the same
                // and there for cut off earlier. So we should find the root most frame in
                // the sample somewhere in the control.
                c--;
              }
              for (; s >= 1 && c >= 0; s--, c--) {
                // Next we find the first one that isn't the same which should be the
                // frame that called our sample function and the control.
                if (sampleLines[s] !== controlLines[c]) {
                  // In V8, the first line is describing the message but other VMs don't.
                  // If we're about to return the first line, and the control is also on the same
                  // line, that's a pretty good indicator that our sample threw at same line as
                  // the control. I.e. before we entered the sample frame. So we ignore this result.
                  // This can happen if you passed a class to function component, or non-function.
                  if (s !== 1 || c !== 1) {
                    do {
                      s--;
                      c--; // We may still have similar intermediate frames from the construct call.
                      // The next one that isn't the same should be our match though.

                      if (c < 0 || sampleLines[s] !== controlLines[c]) {
                        // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                        var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
                        // but we have a user-provided "displayName"
                        // splice it in to make the stack more readable.

                        if (fn.displayName && _frame.includes('<anonymous>')) {
                          _frame = _frame.replace('<anonymous>', fn.displayName);
                        }
                        {
                          if (typeof fn === 'function') {
                            componentFrameCache.set(fn, _frame);
                          }
                        } // Return the line we found.

                        return _frame;
                      }
                    } while (s >= 1 && c >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher$1.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          } // Fallback to just using the name if we couldn't make it throw.

          var name = fn ? fn.displayName || fn.name : '';
          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';
          {
            if (typeof fn === 'function') {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        function shouldConstruct(Component) {
          var prototype = Component.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return '';
          }
          if (typeof type === 'function') {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === 'string') {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame('Suspense');
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame('SuspenseList');
          }
          if (_typeof(type) === 'object') {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                // Memo may contain any component type so we recursively resolve it.
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_LAZY_TYPE:
                {
                  var lazyComponent = type;
                  var payload = lazyComponent._payload;
                  var init = lazyComponent._init;
                  try {
                    // Lazy may contain any component type so we recursively resolve it.
                    return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                  } catch (x) {}
                }
            }
          }
          return '';
        }
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame$1.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
          {
            // $FlowFixMe This is okay but Flow doesn't know it.
            var has = Function.call.bind(hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
                // fail the render phase where it didn't fail before. So we log it.
                // After these have been cleaned up, we'll let them throw.

                try {
                  // This is intentionally an invariant that gets caught. It's the same
                  // behavior as without this statement except with a better message.
                  if (typeof typeSpecs[typeSpecName] !== 'function') {
                    // eslint-disable-next-line react-internal/prod-error-codes
                    var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + _typeof(typeSpecs[typeSpecName]) + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
                    err.name = 'Invariant Violation';
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, _typeof(error$1));
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  // Only monitor this failure once because there tends to be a lot of the
                  // same error.
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error('Failed %s type: %s', location, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        function setCurrentlyValidatingElement$1(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              setExtraStackFrame(stack);
            } else {
              setExtraStackFrame(null);
            }
          }
        }
        var propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        function getDeclarationErrorAddendum() {
          if (ReactCurrentOwner.current) {
            var name = getComponentNameFromType(ReactCurrentOwner.current.type);
            if (name) {
              return '\n\nCheck the render method of `' + name + '`.';
            }
          }
          return '';
        }
        function getSourceInfoErrorAddendum(source) {
          if (source !== undefined) {
            var fileName = source.fileName.replace(/^.*[\\\/]/, '');
            var lineNumber = source.lineNumber;
            return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
          }
          return '';
        }
        function getSourceInfoErrorAddendumForProps(elementProps) {
          if (elementProps !== null && elementProps !== undefined) {
            return getSourceInfoErrorAddendum(elementProps.__source);
          }
          return '';
        }
        /**
         * Warn if there's no key explicitly set on dynamic arrays of children or
         * object keys are not valid. This allows us to keep track of children between
         * updates.
         */

        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          var info = getDeclarationErrorAddendum();
          if (!info) {
            var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
            if (parentName) {
              info = "\n\nCheck the top-level render call using <" + parentName + ">.";
            }
          }
          return info;
        }
        /**
         * Warn if the element doesn't have an explicit key assigned to it.
         * This element is in an array. The array could grow and shrink or be
         * reordered. All children that haven't already been validated are required to
         * have a "key" property assigned to it. Error statuses are cached so a warning
         * will only be shown once.
         *
         * @internal
         * @param {ReactElement} element Element that requires a key.
         * @param {*} parentType element's parent's type.
         */

        function validateExplicitKey(element, parentType) {
          if (!element._store || element._store.validated || element.key != null) {
            return;
          }
          element._store.validated = true;
          var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
          if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
            return;
          }
          ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
          // property, it may be the creator of the child that's responsible for
          // assigning it a key.

          var childOwner = '';
          if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
            // Give the component that originally created this child.
            childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
          }
          {
            setCurrentlyValidatingElement$1(element);
            error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
            setCurrentlyValidatingElement$1(null);
          }
        }
        /**
         * Ensure that every element either is passed in a static location, in an
         * array with an explicit keys property defined, or in an object literal
         * with valid key property.
         *
         * @internal
         * @param {ReactNode} node Statically passed child of any type.
         * @param {*} parentType node's parent's type.
         */

        function validateChildKeys(node, parentType) {
          if (_typeof(node) !== 'object') {
            return;
          }
          if (isArray(node)) {
            for (var i = 0; i < node.length; i++) {
              var child = node[i];
              if (isValidElement(child)) {
                validateExplicitKey(child, parentType);
              }
            }
          } else if (isValidElement(node)) {
            // This element was passed in a valid location.
            if (node._store) {
              node._store.validated = true;
            }
          } else if (node) {
            var iteratorFn = getIteratorFn(node);
            if (typeof iteratorFn === 'function') {
              // Entry iterators used to provide implicit keys,
              // but now we print a separate warning for them later.
              if (iteratorFn !== node.entries) {
                var iterator = iteratorFn.call(node);
                var step;
                while (!(step = iterator.next()).done) {
                  if (isValidElement(step.value)) {
                    validateExplicitKey(step.value, parentType);
                  }
                }
              }
            }
          }
        }
        /**
         * Given an element, validate that its props follow the propTypes definition,
         * provided by the type.
         *
         * @param {ReactElement} element
         */

        function validatePropTypes(element) {
          {
            var type = element.type;
            if (type === null || type === undefined || typeof type === 'string') {
              return;
            }
            var propTypes;
            if (typeof type === 'function') {
              propTypes = type.propTypes;
            } else if (_typeof(type) === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE ||
            // Note: Memo only checks outer props here.
            // Inner props are checked in the reconciler.
            type.$$typeof === REACT_MEMO_TYPE)) {
              propTypes = type.propTypes;
            } else {
              return;
            }
            if (propTypes) {
              // Intentionally inside to avoid triggering lazy initializers:
              var name = getComponentNameFromType(type);
              checkPropTypes(propTypes, element.props, 'prop', name, element);
            } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
              propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

              var _name = getComponentNameFromType(type);
              error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
            }
            if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
              error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
            }
          }
        }
        /**
         * Given a fragment, validate that it can only be provided with fragment props
         * @param {ReactElement} fragment
         */

        function validateFragmentProps(fragment) {
          {
            var keys = Object.keys(fragment.props);
            for (var i = 0; i < keys.length; i++) {
              var key = keys[i];
              if (key !== 'children' && key !== 'key') {
                setCurrentlyValidatingElement$1(fragment);
                error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);
                setCurrentlyValidatingElement$1(null);
                break;
              }
            }
            if (fragment.ref !== null) {
              setCurrentlyValidatingElement$1(fragment);
              error('Invalid attribute `ref` supplied to `React.Fragment`.');
              setCurrentlyValidatingElement$1(null);
            }
          }
        }
        function createElementWithValidation(type, props, children) {
          var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
          // succeed and there will likely be errors in render.

          if (!validType) {
            var info = '';
            if (type === undefined || _typeof(type) === 'object' && type !== null && Object.keys(type).length === 0) {
              info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
            }
            var sourceInfo = getSourceInfoErrorAddendumForProps(props);
            if (sourceInfo) {
              info += sourceInfo;
            } else {
              info += getDeclarationErrorAddendum();
            }
            var typeString;
            if (type === null) {
              typeString = 'null';
            } else if (isArray(type)) {
              typeString = 'array';
            } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
              typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
              info = ' Did you accidentally export a JSX literal instead of a component?';
            } else {
              typeString = _typeof(type);
            }
            {
              error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
            }
          }
          var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
          // TODO: Drop this when these are no longer allowed as the type argument.

          if (element == null) {
            return element;
          } // Skip key warning if the type isn't valid since our key validation logic
          // doesn't expect a non-string/function type and can throw confusing errors.
          // We don't want exception behavior to differ between dev and prod.
          // (Rendering will throw with a helpful message and as soon as the type is
          // fixed, the key warnings will appear.)

          if (validType) {
            for (var i = 2; i < arguments.length; i++) {
              validateChildKeys(arguments[i], type);
            }
          }
          if (type === REACT_FRAGMENT_TYPE) {
            validateFragmentProps(element);
          } else {
            validatePropTypes(element);
          }
          return element;
        }
        var didWarnAboutDeprecatedCreateFactory = false;
        function createFactoryWithValidation(type) {
          var validatedFactory = createElementWithValidation.bind(null, type);
          validatedFactory.type = type;
          {
            if (!didWarnAboutDeprecatedCreateFactory) {
              didWarnAboutDeprecatedCreateFactory = true;
              warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
            } // Legacy hook: remove it

            Object.defineProperty(validatedFactory, 'type', {
              enumerable: false,
              get: function get() {
                warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
                Object.defineProperty(this, 'type', {
                  value: type
                });
                return type;
              }
            });
          }
          return validatedFactory;
        }
        function cloneElementWithValidation(element, props, children) {
          var newElement = cloneElement.apply(this, arguments);
          for (var i = 2; i < arguments.length; i++) {
            validateChildKeys(arguments[i], newElement.type);
          }
          validatePropTypes(newElement);
          return newElement;
        }
        function startTransition(scope, options) {
          var prevTransition = ReactCurrentBatchConfig.transition;
          ReactCurrentBatchConfig.transition = {};
          var currentTransition = ReactCurrentBatchConfig.transition;
          {
            ReactCurrentBatchConfig.transition._updatedFibers = new Set();
          }
          try {
            scope();
          } finally {
            ReactCurrentBatchConfig.transition = prevTransition;
            {
              if (prevTransition === null && currentTransition._updatedFibers) {
                var updatedFibersCount = currentTransition._updatedFibers.size;
                if (updatedFibersCount > 10) {
                  warn('Detected a large number of updates inside startTransition. ' + 'If this is due to a subscription please re-write it to use React provided hooks. ' + 'Otherwise concurrent mode guarantees are off the table.');
                }
                currentTransition._updatedFibers.clear();
              }
            }
          }
        }
        var didWarnAboutMessageChannel = false;
        var enqueueTaskImpl = null;
        function enqueueTask(task) {
          if (enqueueTaskImpl === null) {
            try {
              // read require off the module object to get around the bundlers.
              // we don't want them to detect a require and bundle a Node polyfill.
              var requireString = ('require' + Math.random()).slice(0, 7);
              var nodeRequire = module && module[requireString]; // assuming we're in node, let's try to get node's
              // version of setImmediate, bypassing fake timers if any.

              enqueueTaskImpl = nodeRequire.call(module, 'timers').setImmediate;
            } catch (_err) {
              // we're in a browser
              // we can't use regular timers because they may still be faked
              // so we try MessageChannel+postMessage instead
              enqueueTaskImpl = function enqueueTaskImpl(callback) {
                {
                  if (didWarnAboutMessageChannel === false) {
                    didWarnAboutMessageChannel = true;
                    if (typeof MessageChannel === 'undefined') {
                      error('This browser does not have a MessageChannel implementation, ' + 'so enqueuing tasks via await act(async () => ...) will fail. ' + 'Please file an issue at https://github.com/facebook/react/issues ' + 'if you encounter this warning.');
                    }
                  }
                }
                var channel = new MessageChannel();
                channel.port1.onmessage = callback;
                channel.port2.postMessage(undefined);
              };
            }
          }
          return enqueueTaskImpl(task);
        }
        var actScopeDepth = 0;
        var didWarnNoAwaitAct = false;
        function act(callback) {
          {
            // `act` calls can be nested, so we track the depth. This represents the
            // number of `act` scopes on the stack.
            var prevActScopeDepth = actScopeDepth;
            actScopeDepth++;
            if (ReactCurrentActQueue.current === null) {
              // This is the outermost `act` scope. Initialize the queue. The reconciler
              // will detect the queue and use it instead of Scheduler.
              ReactCurrentActQueue.current = [];
            }
            var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
            var result;
            try {
              // Used to reproduce behavior of `batchedUpdates` in legacy mode. Only
              // set to `true` while the given callback is executed, not for updates
              // triggered during an async event, because this is how the legacy
              // implementation of `act` behaved.
              ReactCurrentActQueue.isBatchingLegacy = true;
              result = callback(); // Replicate behavior of original `act` implementation in legacy mode,
              // which flushed updates immediately after the scope function exits, even
              // if it's an async function.

              if (!prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {
                var queue = ReactCurrentActQueue.current;
                if (queue !== null) {
                  ReactCurrentActQueue.didScheduleLegacyUpdate = false;
                  flushActQueue(queue);
                }
              }
            } catch (error) {
              popActScope(prevActScopeDepth);
              throw error;
            } finally {
              ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
            }
            if (result !== null && _typeof(result) === 'object' && typeof result.then === 'function') {
              var thenableResult = result; // The callback is an async function (i.e. returned a promise). Wait
              // for it to resolve before exiting the current scope.

              var wasAwaited = false;
              var thenable = {
                then: function then(resolve, reject) {
                  wasAwaited = true;
                  thenableResult.then(function (returnValue) {
                    popActScope(prevActScopeDepth);
                    if (actScopeDepth === 0) {
                      // We've exited the outermost act scope. Recursively flush the
                      // queue until there's no remaining work.
                      recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                    } else {
                      resolve(returnValue);
                    }
                  }, function (error) {
                    // The callback threw an error.
                    popActScope(prevActScopeDepth);
                    reject(error);
                  });
                }
              };
              {
                if (!didWarnNoAwaitAct && typeof Promise !== 'undefined') {
                  // eslint-disable-next-line no-undef
                  Promise.resolve().then(function () {}).then(function () {
                    if (!wasAwaited) {
                      didWarnNoAwaitAct = true;
                      error('You called act(async () => ...) without await. ' + 'This could lead to unexpected testing behaviour, ' + 'interleaving multiple act calls and mixing their ' + 'scopes. ' + 'You should - await act(async () => ...);');
                    }
                  });
                }
              }
              return thenable;
            } else {
              var returnValue = result; // The callback is not an async function. Exit the current scope
              // immediately, without awaiting.

              popActScope(prevActScopeDepth);
              if (actScopeDepth === 0) {
                // Exiting the outermost act scope. Flush the queue.
                var _queue = ReactCurrentActQueue.current;
                if (_queue !== null) {
                  flushActQueue(_queue);
                  ReactCurrentActQueue.current = null;
                } // Return a thenable. If the user awaits it, we'll flush again in
                // case additional work was scheduled by a microtask.

                var _thenable = {
                  then: function then(resolve, reject) {
                    // Confirm we haven't re-entered another `act` scope, in case
                    // the user does something weird like await the thenable
                    // multiple times.
                    if (ReactCurrentActQueue.current === null) {
                      // Recursively flush the queue until there's no remaining work.
                      ReactCurrentActQueue.current = [];
                      recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                    } else {
                      resolve(returnValue);
                    }
                  }
                };
                return _thenable;
              } else {
                // Since we're inside a nested `act` scope, the returned thenable
                // immediately resolves. The outer scope will flush the queue.
                var _thenable2 = {
                  then: function then(resolve, reject) {
                    resolve(returnValue);
                  }
                };
                return _thenable2;
              }
            }
          }
        }
        function popActScope(prevActScopeDepth) {
          {
            if (prevActScopeDepth !== actScopeDepth - 1) {
              error('You seem to have overlapping act() calls, this is not supported. ' + 'Be sure to await previous act() calls before making a new one. ');
            }
            actScopeDepth = prevActScopeDepth;
          }
        }
        function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
          {
            var queue = ReactCurrentActQueue.current;
            if (queue !== null) {
              try {
                flushActQueue(queue);
                enqueueTask(function () {
                  if (queue.length === 0) {
                    // No additional work was scheduled. Finish.
                    ReactCurrentActQueue.current = null;
                    resolve(returnValue);
                  } else {
                    // Keep flushing work until there's none left.
                    recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                  }
                });
              } catch (error) {
                reject(error);
              }
            } else {
              resolve(returnValue);
            }
          }
        }
        var isFlushing = false;
        function flushActQueue(queue) {
          {
            if (!isFlushing) {
              // Prevent re-entrance.
              isFlushing = true;
              var i = 0;
              try {
                for (; i < queue.length; i++) {
                  var callback = queue[i];
                  do {
                    callback = callback(true);
                  } while (callback !== null);
                }
                queue.length = 0;
              } catch (error) {
                // If something throws, leave the remaining callbacks on the queue.
                queue = queue.slice(i + 1);
                throw error;
              } finally {
                isFlushing = false;
              }
            }
          }
        }
        var createElement$1 = createElementWithValidation;
        var cloneElement$1 = cloneElementWithValidation;
        var createFactory = createFactoryWithValidation;
        var Children = {
          map: mapChildren,
          forEach: forEachChildren,
          count: countChildren,
          toArray: toArray,
          only: onlyChild
        };
        exports.Children = Children;
        exports.Component = Component;
        exports.Fragment = REACT_FRAGMENT_TYPE;
        exports.Profiler = REACT_PROFILER_TYPE;
        exports.PureComponent = PureComponent;
        exports.StrictMode = REACT_STRICT_MODE_TYPE;
        exports.Suspense = REACT_SUSPENSE_TYPE;
        exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
        exports.act = act;
        exports.cloneElement = cloneElement$1;
        exports.createContext = createContext;
        exports.createElement = createElement$1;
        exports.createFactory = createFactory;
        exports.createRef = createRef;
        exports.forwardRef = forwardRef;
        exports.isValidElement = isValidElement;
        exports.lazy = lazy;
        exports.memo = memo;
        exports.startTransition = startTransition;
        exports.unstable_act = act;
        exports.useCallback = useCallback;
        exports.useContext = useContext;
        exports.useDebugValue = useDebugValue;
        exports.useDeferredValue = useDeferredValue;
        exports.useEffect = useEffect;
        exports.useId = useId;
        exports.useImperativeHandle = useImperativeHandle;
        exports.useInsertionEffect = useInsertionEffect;
        exports.useLayoutEffect = useLayoutEffect;
        exports.useMemo = useMemo;
        exports.useReducer = useReducer;
        exports.useRef = useRef;
        exports.useState = useState;
        exports.useSyncExternalStore = useSyncExternalStore;
        exports.useTransition = useTransition;
        exports.version = ReactVersion;
        /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === 'function') {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
        }
      })();
    }
  })(react_development, react_development.exports);
  return react_development.exports;
}

var hasRequiredReact;
function requireReact() {
  if (hasRequiredReact) return react.exports;
  hasRequiredReact = 1;
  if (process.env.NODE_ENV === 'production') {
    react.exports = requireReact_production_min();
  } else {
    react.exports = requireReact_development();
  }
  return react.exports;
}

var reactExports = requireReact();

var source$1 = {exports: {}};

var isObj;
var hasRequiredIsObj;
function requireIsObj() {
  if (hasRequiredIsObj) return isObj;
  hasRequiredIsObj = 1;
  isObj = function isObj(value) {
    var type = _typeof(value);
    return value !== null && (type === 'object' || type === 'function');
  };
  return isObj;
}

var dotProp;
var hasRequiredDotProp;
function requireDotProp() {
  if (hasRequiredDotProp) return dotProp;
  hasRequiredDotProp = 1;
  var isObj = requireIsObj();
  var disallowedKeys = new Set(['__proto__', 'prototype', 'constructor']);
  var isValidPath = function isValidPath(pathSegments) {
    return !pathSegments.some(function (segment) {
      return disallowedKeys.has(segment);
    });
  };
  function getPathSegments(path) {
    var pathArray = path.split('.');
    var parts = [];
    for (var i = 0; i < pathArray.length; i++) {
      var p = pathArray[i];
      while (p[p.length - 1] === '\\' && pathArray[i + 1] !== undefined) {
        p = p.slice(0, -1) + '.';
        p += pathArray[++i];
      }
      parts.push(p);
    }
    if (!isValidPath(parts)) {
      return [];
    }
    return parts;
  }
  dotProp = {
    get: function get(object, path, value) {
      if (!isObj(object) || typeof path !== 'string') {
        return value === undefined ? object : value;
      }
      var pathArray = getPathSegments(path);
      if (pathArray.length === 0) {
        return;
      }
      for (var i = 0; i < pathArray.length; i++) {
        object = object[pathArray[i]];
        if (object === undefined || object === null) {
          // `object` is either `undefined` or `null` so we want to stop the loop, and
          // if this is not the last bit of the path, and
          // if it did't return `undefined`
          // it would return `null` if `object` is `null`
          // but we want `get({foo: null}, 'foo.bar')` to equal `undefined`, or the supplied value, not `null`
          if (i !== pathArray.length - 1) {
            return value;
          }
          break;
        }
      }
      return object === undefined ? value : object;
    },
    set: function set(object, path, value) {
      if (!isObj(object) || typeof path !== 'string') {
        return object;
      }
      var root = object;
      var pathArray = getPathSegments(path);
      for (var i = 0; i < pathArray.length; i++) {
        var p = pathArray[i];
        if (!isObj(object[p])) {
          object[p] = {};
        }
        if (i === pathArray.length - 1) {
          object[p] = value;
        }
        object = object[p];
      }
      return root;
    },
    "delete": function _delete(object, path) {
      if (!isObj(object) || typeof path !== 'string') {
        return false;
      }
      var pathArray = getPathSegments(path);
      for (var i = 0; i < pathArray.length; i++) {
        var p = pathArray[i];
        if (i === pathArray.length - 1) {
          delete object[p];
          return true;
        }
        object = object[p];
        if (!isObj(object)) {
          return false;
        }
      }
    },
    has: function has(object, path) {
      if (!isObj(object) || typeof path !== 'string') {
        return false;
      }
      var pathArray = getPathSegments(path);
      if (pathArray.length === 0) {
        return false;
      }

      // eslint-disable-next-line unicorn/no-for-loop
      for (var i = 0; i < pathArray.length; i++) {
        if (isObj(object)) {
          if (!(pathArray[i] in object)) {
            return false;
          }
          object = object[pathArray[i]];
        } else {
          return false;
        }
      }
      return true;
    }
  };
  return dotProp;
}

var pkgUp = {exports: {}};

var findUp = {exports: {}};

var locatePath = {exports: {}};

var pathExists = {exports: {}};

var hasRequiredPathExists;
function requirePathExists() {
  if (hasRequiredPathExists) return pathExists.exports;
  hasRequiredPathExists = 1;
  var fs = require$$0$1;
  pathExists.exports = function (fp) {
    return new Promise(function (resolve) {
      fs.access(fp, function (err) {
        resolve(!err);
      });
    });
  };
  pathExists.exports.sync = function (fp) {
    try {
      fs.accessSync(fp);
      return true;
    } catch (err) {
      return false;
    }
  };
  return pathExists.exports;
}

var pLimit = {exports: {}};

var pTry = {exports: {}};

var hasRequiredPTry;
function requirePTry() {
  if (hasRequiredPTry) return pTry.exports;
  hasRequiredPTry = 1;
  var pTry$1 = function pTry(fn) {
    for (var _len = arguments.length, arguments_ = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      arguments_[_key - 1] = arguments[_key];
    }
    return new Promise(function (resolve) {
      resolve(fn.apply(void 0, arguments_));
    });
  };
  pTry.exports = pTry$1;
  // TODO: remove this in the next major version
  pTry.exports["default"] = pTry$1;
  return pTry.exports;
}

var hasRequiredPLimit;
function requirePLimit() {
  if (hasRequiredPLimit) return pLimit.exports;
  hasRequiredPLimit = 1;
  var pTry = requirePTry();
  var pLimit$1 = function pLimit(concurrency) {
    if (!((Number.isInteger(concurrency) || concurrency === Infinity) && concurrency > 0)) {
      return Promise.reject(new TypeError('Expected `concurrency` to be a number from 1 and up'));
    }
    var queue = [];
    var activeCount = 0;
    var next = function next() {
      activeCount--;
      if (queue.length > 0) {
        queue.shift()();
      }
    };
    var run = function run(fn, resolve) {
      activeCount++;
      for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        args[_key - 2] = arguments[_key];
      }
      var result = pTry.apply(void 0, [fn].concat(args));
      resolve(result);
      result.then(next, next);
    };
    var enqueue = function enqueue(fn, resolve) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }
      if (activeCount < concurrency) {
        run.apply(void 0, [fn, resolve].concat(args));
      } else {
        queue.push(run.bind.apply(run, [null, fn, resolve].concat(args)));
      }
    };
    var generator = function generator(fn) {
      for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        args[_key3 - 1] = arguments[_key3];
      }
      return new Promise(function (resolve) {
        return enqueue.apply(void 0, [fn, resolve].concat(args));
      });
    };
    Object.defineProperties(generator, {
      activeCount: {
        get: function get() {
          return activeCount;
        }
      },
      pendingCount: {
        get: function get() {
          return queue.length;
        }
      },
      clearQueue: {
        value: function value() {
          queue.length = 0;
        }
      }
    });
    return generator;
  };
  pLimit.exports = pLimit$1;
  pLimit.exports["default"] = pLimit$1;
  return pLimit.exports;
}

var pLocate;
var hasRequiredPLocate;
function requirePLocate() {
  if (hasRequiredPLocate) return pLocate;
  hasRequiredPLocate = 1;
  var pLimit = requirePLimit();
  var EndError = /*#__PURE__*/function (_Error) {
    function EndError(value) {
      var _this;
      _classCallCheck(this, EndError);
      _this = _callSuper(this, EndError);
      _this.value = value;
      return _this;
    }
    _inherits(EndError, _Error);
    return _createClass(EndError);
  }(/*#__PURE__*/_wrapNativeSuper(Error)); // The input can also be a promise, so we `Promise.resolve()` it
  var testElement = function testElement(el, tester) {
    return Promise.resolve(el).then(tester);
  };

  // The input can also be a promise, so we `Promise.all()` them both
  var finder = function finder(el) {
    return Promise.all(el).then(function (val) {
      return val[1] === true && Promise.reject(new EndError(val[0]));
    });
  };
  pLocate = function pLocate(iterable, tester, opts) {
    opts = Object.assign({
      concurrency: Infinity,
      preserveOrder: true
    }, opts);
    var limit = pLimit(opts.concurrency);

    // Start all the promises concurrently with optional limit
    var items = _toConsumableArray(iterable).map(function (el) {
      return [el, limit(testElement, el, tester)];
    });

    // Check the promises either serially or concurrently
    var checkLimit = pLimit(opts.preserveOrder ? 1 : Infinity);
    return Promise.all(items.map(function (el) {
      return checkLimit(finder, el);
    })).then(function () {})["catch"](function (err) {
      return err instanceof EndError ? err.value : Promise.reject(err);
    });
  };
  return pLocate;
}

var hasRequiredLocatePath;
function requireLocatePath() {
  if (hasRequiredLocatePath) return locatePath.exports;
  hasRequiredLocatePath = 1;
  var path = require$$0$2;
  var pathExists = requirePathExists();
  var pLocate = requirePLocate();
  locatePath.exports = function (iterable, options) {
    options = Object.assign({
      cwd: process.cwd()
    }, options);
    return pLocate(iterable, function (el) {
      return pathExists(path.resolve(options.cwd, el));
    }, options);
  };
  locatePath.exports.sync = function (iterable, options) {
    options = Object.assign({
      cwd: process.cwd()
    }, options);
    var _iterator = _createForOfIteratorHelper(iterable),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var el = _step.value;
        if (pathExists.sync(path.resolve(options.cwd, el))) {
          return el;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  };
  return locatePath.exports;
}

var hasRequiredFindUp;
function requireFindUp() {
  if (hasRequiredFindUp) return findUp.exports;
  hasRequiredFindUp = 1;
  var path = require$$0$2;
  var locatePath = requireLocatePath();
  findUp.exports = function (filename) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var startDir = path.resolve(opts.cwd || '');
    var _path$parse = path.parse(startDir),
      root = _path$parse.root;
    var filenames = [].concat(filename);
    return new Promise(function (resolve) {
      (function find(dir) {
        locatePath(filenames, {
          cwd: dir
        }).then(function (file) {
          if (file) {
            resolve(path.join(dir, file));
          } else if (dir === root) {
            resolve(null);
          } else {
            find(path.dirname(dir));
          }
        });
      })(startDir);
    });
  };
  findUp.exports.sync = function (filename) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var dir = path.resolve(opts.cwd || '');
    var _path$parse2 = path.parse(dir),
      root = _path$parse2.root;
    var filenames = [].concat(filename);

    // eslint-disable-next-line no-constant-condition
    while (true) {
      var file = locatePath.sync(filenames, {
        cwd: dir
      });
      if (file) {
        return path.join(dir, file);
      }
      if (dir === root) {
        return null;
      }
      dir = path.dirname(dir);
    }
  };
  return findUp.exports;
}

var hasRequiredPkgUp;
function requirePkgUp() {
  if (hasRequiredPkgUp) return pkgUp.exports;
  hasRequiredPkgUp = 1;
  var findUp = requireFindUp();
  pkgUp.exports = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var _ref2,
      cwd,
      _args = arguments;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _ref2 = _args.length > 0 && _args[0] !== undefined ? _args[0] : {}, cwd = _ref2.cwd;
          return _context.abrupt("return", findUp('package.json', {
            cwd: cwd
          }));
        case 2:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  pkgUp.exports.sync = function () {
    var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      cwd = _ref3.cwd;
    return findUp.sync('package.json', {
      cwd: cwd
    });
  };
  return pkgUp.exports;
}

var envPaths = {exports: {}};

var hasRequiredEnvPaths;
function requireEnvPaths() {
  if (hasRequiredEnvPaths) return envPaths.exports;
  hasRequiredEnvPaths = 1;
  var path = require$$0$2;
  var os = require$$1;
  var homedir = os.homedir();
  var tmpdir = os.tmpdir();
  var _process = process,
    env = _process.env;
  var macos = function macos(name) {
    var library = path.join(homedir, 'Library');
    return {
      data: path.join(library, 'Application Support', name),
      config: path.join(library, 'Preferences', name),
      cache: path.join(library, 'Caches', name),
      log: path.join(library, 'Logs', name),
      temp: path.join(tmpdir, name)
    };
  };
  var windows = function windows(name) {
    var appData = env.APPDATA || path.join(homedir, 'AppData', 'Roaming');
    var localAppData = env.LOCALAPPDATA || path.join(homedir, 'AppData', 'Local');
    return {
      // Data/config/cache/log are invented by me as Windows isn't opinionated about this
      data: path.join(localAppData, name, 'Data'),
      config: path.join(appData, name, 'Config'),
      cache: path.join(localAppData, name, 'Cache'),
      log: path.join(localAppData, name, 'Log'),
      temp: path.join(tmpdir, name)
    };
  };

  // https://specifications.freedesktop.org/basedir-spec/basedir-spec-latest.html
  var linux = function linux(name) {
    var username = path.basename(homedir);
    return {
      data: path.join(env.XDG_DATA_HOME || path.join(homedir, '.local', 'share'), name),
      config: path.join(env.XDG_CONFIG_HOME || path.join(homedir, '.config'), name),
      cache: path.join(env.XDG_CACHE_HOME || path.join(homedir, '.cache'), name),
      // https://wiki.debian.org/XDGBaseDirectorySpecification#state
      log: path.join(env.XDG_STATE_HOME || path.join(homedir, '.local', 'state'), name),
      temp: path.join(tmpdir, username, name)
    };
  };
  var envPaths$1 = function envPaths(name, options) {
    if (typeof name !== 'string') {
      throw new TypeError("Expected string, got ".concat(_typeof(name)));
    }
    options = Object.assign({
      suffix: 'nodejs'
    }, options);
    if (options.suffix) {
      // Add suffix to prevent possible conflict with native apps
      name += "-".concat(options.suffix);
    }
    if (process.platform === 'darwin') {
      return macos(name);
    }
    if (process.platform === 'win32') {
      return windows(name);
    }
    return linux(name);
  };
  envPaths.exports = envPaths$1;
  // TODO: Remove this for the next major release
  envPaths.exports["default"] = envPaths$1;
  return envPaths.exports;
}

var dist$1 = {};

var consts = {};

var hasRequiredConsts;
function requireConsts() {
  if (hasRequiredConsts) return consts;
  hasRequiredConsts = 1;
  /* CONSTS */
  Object.defineProperty(consts, "__esModule", {
    value: true
  });
  consts.NOOP = consts.LIMIT_FILES_DESCRIPTORS = consts.LIMIT_BASENAME_LENGTH = consts.IS_USER_ROOT = consts.IS_POSIX = consts.DEFAULT_TIMEOUT_SYNC = consts.DEFAULT_TIMEOUT_ASYNC = consts.DEFAULT_WRITE_OPTIONS = consts.DEFAULT_READ_OPTIONS = consts.DEFAULT_FOLDER_MODE = consts.DEFAULT_FILE_MODE = consts.DEFAULT_ENCODING = void 0;
  var DEFAULT_ENCODING = 'utf8';
  consts.DEFAULT_ENCODING = DEFAULT_ENCODING;
  var DEFAULT_FILE_MODE = 438;
  consts.DEFAULT_FILE_MODE = DEFAULT_FILE_MODE;
  var DEFAULT_FOLDER_MODE = 511;
  consts.DEFAULT_FOLDER_MODE = DEFAULT_FOLDER_MODE;
  var DEFAULT_READ_OPTIONS = {};
  consts.DEFAULT_READ_OPTIONS = DEFAULT_READ_OPTIONS;
  var DEFAULT_WRITE_OPTIONS = {};
  consts.DEFAULT_WRITE_OPTIONS = DEFAULT_WRITE_OPTIONS;
  var DEFAULT_TIMEOUT_ASYNC = 5000;
  consts.DEFAULT_TIMEOUT_ASYNC = DEFAULT_TIMEOUT_ASYNC;
  var DEFAULT_TIMEOUT_SYNC = 100;
  consts.DEFAULT_TIMEOUT_SYNC = DEFAULT_TIMEOUT_SYNC;
  var IS_POSIX = !!process.getuid;
  consts.IS_POSIX = IS_POSIX;
  var IS_USER_ROOT = process.getuid ? !process.getuid() : false;
  consts.IS_USER_ROOT = IS_USER_ROOT;
  var LIMIT_BASENAME_LENGTH = 128; //TODO: fetch the real limit from the filesystem //TODO: fetch the whole-path length limit too
  consts.LIMIT_BASENAME_LENGTH = LIMIT_BASENAME_LENGTH;
  var LIMIT_FILES_DESCRIPTORS = 10000; //TODO: fetch the real limit from the filesystem
  consts.LIMIT_FILES_DESCRIPTORS = LIMIT_FILES_DESCRIPTORS;
  var NOOP = function NOOP() {};
  consts.NOOP = NOOP;
  return consts;
}

var fs = {};

var attemptify = {};

var hasRequiredAttemptify;
function requireAttemptify() {
  if (hasRequiredAttemptify) return attemptify;
  hasRequiredAttemptify = 1;
  /* IMPORT */
  Object.defineProperty(attemptify, "__esModule", {
    value: true
  });
  attemptify.attemptifySync = attemptify.attemptifyAsync = void 0;
  var consts_1 = requireConsts();
  /* ATTEMPTIFY */
  //TODO: Maybe publish this as a standalone package
  //FIXME: The type castings here aren't exactly correct
  var attemptifyAsync = function attemptifyAsync(fn) {
    var onError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : consts_1.NOOP;
    return function () {
      return fn.apply(undefined, arguments)["catch"](onError);
    };
  };
  attemptify.attemptifyAsync = attemptifyAsync;
  var attemptifySync = function attemptifySync(fn) {
    var onError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : consts_1.NOOP;
    return function () {
      try {
        return fn.apply(undefined, arguments);
      } catch (error) {
        return onError(error);
      }
    };
  };
  attemptify.attemptifySync = attemptifySync;
  return attemptify;
}

var fs_handlers = {};

var hasRequiredFs_handlers;
function requireFs_handlers() {
  if (hasRequiredFs_handlers) return fs_handlers;
  hasRequiredFs_handlers = 1;
  /* IMPORT */
  Object.defineProperty(fs_handlers, "__esModule", {
    value: true
  });
  var consts_1 = requireConsts();
  /* FS HANDLERS */
  var Handlers = {
    isChangeErrorOk: function isChangeErrorOk(error) {
      var code = error.code;
      if (code === 'ENOSYS') return true;
      if (!consts_1.IS_USER_ROOT && (code === 'EINVAL' || code === 'EPERM')) return true;
      return false;
    },
    isRetriableError: function isRetriableError(error) {
      var code = error.code;
      if (code === 'EMFILE' || code === 'ENFILE' || code === 'EAGAIN' || code === 'EBUSY' || code === 'EACCESS' || code === 'EACCS' || code === 'EPERM') return true;
      return false;
    },
    onChangeError: function onChangeError(error) {
      if (Handlers.isChangeErrorOk(error)) return;
      throw error;
    }
  };
  /* EXPORT */
  fs_handlers["default"] = Handlers;
  return fs_handlers;
}

var retryify = {};

var retryify_queue = {};

var hasRequiredRetryify_queue;
function requireRetryify_queue() {
  if (hasRequiredRetryify_queue) return retryify_queue;
  hasRequiredRetryify_queue = 1;
  /* IMPORT */
  Object.defineProperty(retryify_queue, "__esModule", {
    value: true
  });
  var consts_1 = requireConsts();
  /* RETRYIFY QUEUE */
  var RetryfyQueue = {
    interval: 25,
    intervalId: undefined,
    limit: consts_1.LIMIT_FILES_DESCRIPTORS,
    queueActive: new Set(),
    queueWaiting: new Set(),
    init: function init() {
      if (RetryfyQueue.intervalId) return;
      RetryfyQueue.intervalId = setInterval(RetryfyQueue.tick, RetryfyQueue.interval);
    },
    reset: function reset() {
      if (!RetryfyQueue.intervalId) return;
      clearInterval(RetryfyQueue.intervalId);
      delete RetryfyQueue.intervalId;
    },
    add: function add(fn) {
      RetryfyQueue.queueWaiting.add(fn);
      if (RetryfyQueue.queueActive.size < RetryfyQueue.limit / 2) {
        // Active queue not under preassure, executing immediately
        RetryfyQueue.tick();
      } else {
        RetryfyQueue.init();
      }
    },
    remove: function remove(fn) {
      RetryfyQueue.queueWaiting["delete"](fn);
      RetryfyQueue.queueActive["delete"](fn);
    },
    schedule: function schedule() {
      return new Promise(function (resolve) {
        var cleanup = function cleanup() {
          return RetryfyQueue.remove(resolver);
        };
        var resolver = function resolver() {
          return resolve(cleanup);
        };
        RetryfyQueue.add(resolver);
      });
    },
    tick: function tick() {
      if (RetryfyQueue.queueActive.size >= RetryfyQueue.limit) return;
      if (!RetryfyQueue.queueWaiting.size) return RetryfyQueue.reset();
      var _iterator = _createForOfIteratorHelper(RetryfyQueue.queueWaiting),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var fn = _step.value;
          if (RetryfyQueue.queueActive.size >= RetryfyQueue.limit) break;
          RetryfyQueue.queueWaiting["delete"](fn);
          RetryfyQueue.queueActive.add(fn);
          fn();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  };
  /* EXPORT */
  retryify_queue["default"] = RetryfyQueue;
  return retryify_queue;
}

var hasRequiredRetryify;
function requireRetryify() {
  if (hasRequiredRetryify) return retryify;
  hasRequiredRetryify = 1;
  /* IMPORT */
  Object.defineProperty(retryify, "__esModule", {
    value: true
  });
  retryify.retryifySync = retryify.retryifyAsync = void 0;
  var retryify_queue_1 = requireRetryify_queue();
  /* RETRYIFY */
  var retryifyAsync = function retryifyAsync(fn, isRetriableError) {
    return function (timestamp) {
      return function attempt() {
        var _arguments = arguments;
        return retryify_queue_1["default"].schedule().then(function (cleanup) {
          return fn.apply(undefined, _arguments).then(function (result) {
            cleanup();
            return result;
          }, function (error) {
            cleanup();
            if (Date.now() >= timestamp) throw error;
            if (isRetriableError(error)) {
              var delay = Math.round(100 + 400 * Math.random()),
                delayPromise = new Promise(function (resolve) {
                  return setTimeout(resolve, delay);
                });
              return delayPromise.then(function () {
                return attempt.apply(undefined, _arguments);
              });
            }
            throw error;
          });
        });
      };
    };
  };
  retryify.retryifyAsync = retryifyAsync;
  var retryifySync = function retryifySync(fn, isRetriableError) {
    return function (timestamp) {
      return function attempt() {
        try {
          return fn.apply(undefined, arguments);
        } catch (error) {
          if (Date.now() > timestamp) throw error;
          if (isRetriableError(error)) return attempt.apply(undefined, arguments);
          throw error;
        }
      };
    };
  };
  retryify.retryifySync = retryifySync;
  return retryify;
}

var hasRequiredFs;
function requireFs() {
  if (hasRequiredFs) return fs;
  hasRequiredFs = 1;
  /* IMPORT */
  Object.defineProperty(fs, "__esModule", {
    value: true
  });
  var fs$1 = require$$0$1;
  var util_1 = require$$1$1;
  var attemptify_1 = requireAttemptify();
  var fs_handlers_1 = requireFs_handlers();
  var retryify_1 = requireRetryify();
  /* FS */
  var FS = {
    chmodAttempt: attemptify_1.attemptifyAsync(util_1.promisify(fs$1.chmod), fs_handlers_1["default"].onChangeError),
    chownAttempt: attemptify_1.attemptifyAsync(util_1.promisify(fs$1.chown), fs_handlers_1["default"].onChangeError),
    closeAttempt: attemptify_1.attemptifyAsync(util_1.promisify(fs$1.close)),
    fsyncAttempt: attemptify_1.attemptifyAsync(util_1.promisify(fs$1.fsync)),
    mkdirAttempt: attemptify_1.attemptifyAsync(util_1.promisify(fs$1.mkdir)),
    realpathAttempt: attemptify_1.attemptifyAsync(util_1.promisify(fs$1.realpath)),
    statAttempt: attemptify_1.attemptifyAsync(util_1.promisify(fs$1.stat)),
    unlinkAttempt: attemptify_1.attemptifyAsync(util_1.promisify(fs$1.unlink)),
    closeRetry: retryify_1.retryifyAsync(util_1.promisify(fs$1.close), fs_handlers_1["default"].isRetriableError),
    fsyncRetry: retryify_1.retryifyAsync(util_1.promisify(fs$1.fsync), fs_handlers_1["default"].isRetriableError),
    openRetry: retryify_1.retryifyAsync(util_1.promisify(fs$1.open), fs_handlers_1["default"].isRetriableError),
    readFileRetry: retryify_1.retryifyAsync(util_1.promisify(fs$1.readFile), fs_handlers_1["default"].isRetriableError),
    renameRetry: retryify_1.retryifyAsync(util_1.promisify(fs$1.rename), fs_handlers_1["default"].isRetriableError),
    statRetry: retryify_1.retryifyAsync(util_1.promisify(fs$1.stat), fs_handlers_1["default"].isRetriableError),
    writeRetry: retryify_1.retryifyAsync(util_1.promisify(fs$1.write), fs_handlers_1["default"].isRetriableError),
    chmodSyncAttempt: attemptify_1.attemptifySync(fs$1.chmodSync, fs_handlers_1["default"].onChangeError),
    chownSyncAttempt: attemptify_1.attemptifySync(fs$1.chownSync, fs_handlers_1["default"].onChangeError),
    closeSyncAttempt: attemptify_1.attemptifySync(fs$1.closeSync),
    mkdirSyncAttempt: attemptify_1.attemptifySync(fs$1.mkdirSync),
    realpathSyncAttempt: attemptify_1.attemptifySync(fs$1.realpathSync),
    statSyncAttempt: attemptify_1.attemptifySync(fs$1.statSync),
    unlinkSyncAttempt: attemptify_1.attemptifySync(fs$1.unlinkSync),
    closeSyncRetry: retryify_1.retryifySync(fs$1.closeSync, fs_handlers_1["default"].isRetriableError),
    fsyncSyncRetry: retryify_1.retryifySync(fs$1.fsyncSync, fs_handlers_1["default"].isRetriableError),
    openSyncRetry: retryify_1.retryifySync(fs$1.openSync, fs_handlers_1["default"].isRetriableError),
    readFileSyncRetry: retryify_1.retryifySync(fs$1.readFileSync, fs_handlers_1["default"].isRetriableError),
    renameSyncRetry: retryify_1.retryifySync(fs$1.renameSync, fs_handlers_1["default"].isRetriableError),
    statSyncRetry: retryify_1.retryifySync(fs$1.statSync, fs_handlers_1["default"].isRetriableError),
    writeSyncRetry: retryify_1.retryifySync(fs$1.writeSync, fs_handlers_1["default"].isRetriableError)
  };
  /* EXPORT */
  fs["default"] = FS;
  return fs;
}

var lang = {};

var hasRequiredLang;
function requireLang() {
  if (hasRequiredLang) return lang;
  hasRequiredLang = 1;
  /* LANG */
  Object.defineProperty(lang, "__esModule", {
    value: true
  });
  var Lang = {
    isFunction: function isFunction(x) {
      return typeof x === 'function';
    },
    isString: function isString(x) {
      return typeof x === 'string';
    },
    isUndefined: function isUndefined(x) {
      return typeof x === 'undefined';
    }
  };
  /* EXPORT */
  lang["default"] = Lang;
  return lang;
}

var scheduler = {};

var hasRequiredScheduler;
function requireScheduler() {
  if (hasRequiredScheduler) return scheduler;
  hasRequiredScheduler = 1;
  /* IMPORT */
  Object.defineProperty(scheduler, "__esModule", {
    value: true
  });
  /* VARIABLES */
  var Queues = {};
  /* SCHEDULER */
  //TODO: Maybe publish this as a standalone package
  var Scheduler = {
    next: function next(id) {
      var queue = Queues[id];
      if (!queue) return;
      queue.shift();
      var job = queue[0];
      if (job) {
        job(function () {
          return Scheduler.next(id);
        });
      } else {
        delete Queues[id];
      }
    },
    schedule: function schedule(id) {
      return new Promise(function (resolve) {
        var queue = Queues[id];
        if (!queue) queue = Queues[id] = [];
        queue.push(resolve);
        if (queue.length > 1) return;
        resolve(function () {
          return Scheduler.next(id);
        });
      });
    }
  };
  /* EXPORT */
  scheduler["default"] = Scheduler;
  return scheduler;
}

var temp = {};

var hasRequiredTemp;
function requireTemp() {
  if (hasRequiredTemp) return temp;
  hasRequiredTemp = 1;
  /* IMPORT */
  Object.defineProperty(temp, "__esModule", {
    value: true
  });
  var path = require$$0$2;
  var consts_1 = requireConsts();
  var fs_1 = requireFs();
  /* TEMP */
  //TODO: Maybe publish this as a standalone package
  var Temp = {
    store: {},
    create: function create(filePath) {
      var randomness = "000000".concat(Math.floor(Math.random() * 16777215).toString(16)).slice(-6),
        // 6 random-enough hex characters
        timestamp = Date.now().toString().slice(-10),
        // 10 precise timestamp digits
        prefix = 'tmp-',
        suffix = ".".concat(prefix).concat(timestamp).concat(randomness),
        tempPath = "".concat(filePath).concat(suffix);
      return tempPath;
    },
    get: function get(filePath, creator) {
      var purge = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var tempPath = Temp.truncate(creator(filePath));
      if (tempPath in Temp.store) return Temp.get(filePath, creator, purge); // Collision found, try again
      Temp.store[tempPath] = purge;
      var disposer = function disposer() {
        return delete Temp.store[tempPath];
      };
      return [tempPath, disposer];
    },
    purge: function purge(filePath) {
      if (!Temp.store[filePath]) return;
      delete Temp.store[filePath];
      fs_1["default"].unlinkAttempt(filePath);
    },
    purgeSync: function purgeSync(filePath) {
      if (!Temp.store[filePath]) return;
      delete Temp.store[filePath];
      fs_1["default"].unlinkSyncAttempt(filePath);
    },
    purgeSyncAll: function purgeSyncAll() {
      for (var filePath in Temp.store) {
        Temp.purgeSync(filePath);
      }
    },
    truncate: function truncate(filePath) {
      var basename = path.basename(filePath);
      if (basename.length <= consts_1.LIMIT_BASENAME_LENGTH) return filePath; //FIXME: Rough and quick attempt at detecting ok lengths
      var truncable = /^(\.?)(.*?)((?:\.[^.]+)?(?:\.tmp-\d{10}[a-f0-9]{6})?)$/.exec(basename);
      if (!truncable) return filePath; //FIXME: No truncable part detected, can't really do much without also changing the parent path, which is unsafe, hoping for the best here
      var truncationLength = basename.length - consts_1.LIMIT_BASENAME_LENGTH;
      return "".concat(filePath.slice(0, -basename.length)).concat(truncable[1]).concat(truncable[2].slice(0, -truncationLength)).concat(truncable[3]); //FIXME: The truncable part might be shorter than needed here
    }
  };
  /* INIT */
  process.on('exit', Temp.purgeSyncAll); // Ensuring purgeable temp files are purged on exit
  /* EXPORT */
  temp["default"] = Temp;
  return temp;
}

var hasRequiredDist$1;
function requireDist$1() {
  if (hasRequiredDist$1) return dist$1;
  hasRequiredDist$1 = 1;
  /* IMPORT */
  Object.defineProperty(dist$1, "__esModule", {
    value: true
  });
  dist$1.writeFileSync = dist$1.writeFile = dist$1.readFileSync = dist$1.readFile = void 0;
  var path = require$$0$2;
  var consts_1 = requireConsts();
  var fs_1 = requireFs();
  var lang_1 = requireLang();
  var scheduler_1 = requireScheduler();
  var temp_1 = requireTemp();
  function readFile(filePath) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : consts_1.DEFAULT_READ_OPTIONS;
    var _a;
    if (lang_1["default"].isString(options)) return readFile(filePath, {
      encoding: options
    });
    var timeout = Date.now() + ((_a = options.timeout) !== null && _a !== void 0 ? _a : consts_1.DEFAULT_TIMEOUT_ASYNC);
    return fs_1["default"].readFileRetry(timeout)(filePath, options);
  }
  dist$1.readFile = readFile;
  function readFileSync(filePath) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : consts_1.DEFAULT_READ_OPTIONS;
    var _a;
    if (lang_1["default"].isString(options)) return readFileSync(filePath, {
      encoding: options
    });
    var timeout = Date.now() + ((_a = options.timeout) !== null && _a !== void 0 ? _a : consts_1.DEFAULT_TIMEOUT_SYNC);
    return fs_1["default"].readFileSyncRetry(timeout)(filePath, options);
  }
  dist$1.readFileSync = readFileSync;
  var _writeFile = function writeFile(filePath, data, options, callback) {
    if (lang_1["default"].isFunction(options)) return _writeFile(filePath, data, consts_1.DEFAULT_WRITE_OPTIONS, options);
    var promise = _writeFileAsync(filePath, data, options);
    if (callback) promise.then(callback, callback);
    return promise;
  };
  dist$1.writeFile = _writeFile;
  var _writeFileAsync = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(filePath, data) {
      var options,
        _a,
        timeout,
        schedulerCustomDisposer,
        schedulerDisposer,
        tempDisposer,
        tempPath,
        fd,
        _temp_1$default$get,
        _temp_1$default$get2,
        useStatChown,
        useStatMode,
        stat,
        parentPath,
        _args = arguments;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            options = _args.length > 2 && _args[2] !== undefined ? _args[2] : consts_1.DEFAULT_WRITE_OPTIONS;
            if (!lang_1["default"].isString(options)) {
              _context.next = 3;
              break;
            }
            return _context.abrupt("return", _writeFileAsync(filePath, data, {
              encoding: options
            }));
          case 3:
            timeout = Date.now() + ((_a = options.timeout) !== null && _a !== void 0 ? _a : consts_1.DEFAULT_TIMEOUT_ASYNC);
            schedulerCustomDisposer = null, schedulerDisposer = null, tempDisposer = null, tempPath = null, fd = null;
            _context.prev = 5;
            if (!options.schedule) {
              _context.next = 10;
              break;
            }
            _context.next = 9;
            return options.schedule(filePath);
          case 9:
            schedulerCustomDisposer = _context.sent;
          case 10:
            _context.next = 12;
            return scheduler_1["default"].schedule(filePath);
          case 12:
            schedulerDisposer = _context.sent;
            _context.next = 15;
            return fs_1["default"].realpathAttempt(filePath);
          case 15:
            _context.t0 = _context.sent;
            if (_context.t0) {
              _context.next = 18;
              break;
            }
            _context.t0 = filePath;
          case 18:
            filePath = _context.t0;
            _temp_1$default$get = temp_1["default"].get(filePath, options.tmpCreate || temp_1["default"].create, !(options.tmpPurge === false));
            _temp_1$default$get2 = _slicedToArray(_temp_1$default$get, 2);
            tempPath = _temp_1$default$get2[0];
            tempDisposer = _temp_1$default$get2[1];
            useStatChown = consts_1.IS_POSIX && lang_1["default"].isUndefined(options.chown), useStatMode = lang_1["default"].isUndefined(options.mode);
            if (!(useStatChown || useStatMode)) {
              _context.next = 29;
              break;
            }
            _context.next = 27;
            return fs_1["default"].statAttempt(filePath);
          case 27:
            stat = _context.sent;
            if (stat) {
              options = _objectSpread2({}, options);
              if (useStatChown) options.chown = {
                uid: stat.uid,
                gid: stat.gid
              };
              if (useStatMode) options.mode = stat.mode;
            }
          case 29:
            parentPath = path.dirname(filePath);
            _context.next = 32;
            return fs_1["default"].mkdirAttempt(parentPath, {
              mode: consts_1.DEFAULT_FOLDER_MODE,
              recursive: true
            });
          case 32:
            _context.next = 34;
            return fs_1["default"].openRetry(timeout)(tempPath, 'w', options.mode || consts_1.DEFAULT_FILE_MODE);
          case 34:
            fd = _context.sent;
            if (options.tmpCreated) options.tmpCreated(tempPath);
            if (!lang_1["default"].isString(data)) {
              _context.next = 41;
              break;
            }
            _context.next = 39;
            return fs_1["default"].writeRetry(timeout)(fd, data, 0, options.encoding || consts_1.DEFAULT_ENCODING);
          case 39:
            _context.next = 44;
            break;
          case 41:
            if (lang_1["default"].isUndefined(data)) {
              _context.next = 44;
              break;
            }
            _context.next = 44;
            return fs_1["default"].writeRetry(timeout)(fd, data, 0, data.length, 0);
          case 44:
            if (!(options.fsync !== false)) {
              _context.next = 51;
              break;
            }
            if (!(options.fsyncWait !== false)) {
              _context.next = 50;
              break;
            }
            _context.next = 48;
            return fs_1["default"].fsyncRetry(timeout)(fd);
          case 48:
            _context.next = 51;
            break;
          case 50:
            fs_1["default"].fsyncAttempt(fd);
          case 51:
            _context.next = 53;
            return fs_1["default"].closeRetry(timeout)(fd);
          case 53:
            fd = null;
            if (!options.chown) {
              _context.next = 57;
              break;
            }
            _context.next = 57;
            return fs_1["default"].chownAttempt(tempPath, options.chown.uid, options.chown.gid);
          case 57:
            if (!options.mode) {
              _context.next = 60;
              break;
            }
            _context.next = 60;
            return fs_1["default"].chmodAttempt(tempPath, options.mode);
          case 60:
            _context.prev = 60;
            _context.next = 63;
            return fs_1["default"].renameRetry(timeout)(tempPath, filePath);
          case 63:
            _context.next = 71;
            break;
          case 65:
            _context.prev = 65;
            _context.t1 = _context["catch"](60);
            if (!(_context.t1.code !== 'ENAMETOOLONG')) {
              _context.next = 69;
              break;
            }
            throw _context.t1;
          case 69:
            _context.next = 71;
            return fs_1["default"].renameRetry(timeout)(tempPath, temp_1["default"].truncate(filePath));
          case 71:
            tempDisposer();
            tempPath = null;
          case 73:
            _context.prev = 73;
            if (!fd) {
              _context.next = 77;
              break;
            }
            _context.next = 77;
            return fs_1["default"].closeAttempt(fd);
          case 77:
            if (tempPath) temp_1["default"].purge(tempPath);
            if (schedulerCustomDisposer) schedulerCustomDisposer();
            if (schedulerDisposer) schedulerDisposer();
            return _context.finish(73);
          case 81:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[5,, 73, 81], [60, 65]]);
    }));
    return function writeFileAsync(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
  var _writeFileSync = function writeFileSync(filePath, data) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : consts_1.DEFAULT_WRITE_OPTIONS;
    var _a;
    if (lang_1["default"].isString(options)) return _writeFileSync(filePath, data, {
      encoding: options
    });
    var timeout = Date.now() + ((_a = options.timeout) !== null && _a !== void 0 ? _a : consts_1.DEFAULT_TIMEOUT_SYNC);
    var tempDisposer = null,
      tempPath = null,
      fd = null;
    try {
      filePath = fs_1["default"].realpathSyncAttempt(filePath) || filePath;
      var _temp_1$default$get3 = temp_1["default"].get(filePath, options.tmpCreate || temp_1["default"].create, !(options.tmpPurge === false));
      var _temp_1$default$get4 = _slicedToArray(_temp_1$default$get3, 2);
      tempPath = _temp_1$default$get4[0];
      tempDisposer = _temp_1$default$get4[1];
      var useStatChown = consts_1.IS_POSIX && lang_1["default"].isUndefined(options.chown),
        useStatMode = lang_1["default"].isUndefined(options.mode);
      if (useStatChown || useStatMode) {
        var stat = fs_1["default"].statSyncAttempt(filePath);
        if (stat) {
          options = _objectSpread2({}, options);
          if (useStatChown) options.chown = {
            uid: stat.uid,
            gid: stat.gid
          };
          if (useStatMode) options.mode = stat.mode;
        }
      }
      var parentPath = path.dirname(filePath);
      fs_1["default"].mkdirSyncAttempt(parentPath, {
        mode: consts_1.DEFAULT_FOLDER_MODE,
        recursive: true
      });
      fd = fs_1["default"].openSyncRetry(timeout)(tempPath, 'w', options.mode || consts_1.DEFAULT_FILE_MODE);
      if (options.tmpCreated) options.tmpCreated(tempPath);
      if (lang_1["default"].isString(data)) {
        fs_1["default"].writeSyncRetry(timeout)(fd, data, 0, options.encoding || consts_1.DEFAULT_ENCODING);
      } else if (!lang_1["default"].isUndefined(data)) {
        fs_1["default"].writeSyncRetry(timeout)(fd, data, 0, data.length, 0);
      }
      if (options.fsync !== false) {
        if (options.fsyncWait !== false) {
          fs_1["default"].fsyncSyncRetry(timeout)(fd);
        } else {
          fs_1["default"].fsyncAttempt(fd);
        }
      }
      fs_1["default"].closeSyncRetry(timeout)(fd);
      fd = null;
      if (options.chown) fs_1["default"].chownSyncAttempt(tempPath, options.chown.uid, options.chown.gid);
      if (options.mode) fs_1["default"].chmodSyncAttempt(tempPath, options.mode);
      try {
        fs_1["default"].renameSyncRetry(timeout)(tempPath, filePath);
      } catch (error) {
        if (error.code !== 'ENAMETOOLONG') throw error;
        fs_1["default"].renameSyncRetry(timeout)(tempPath, temp_1["default"].truncate(filePath));
      }
      tempDisposer();
      tempPath = null;
    } finally {
      if (fd) fs_1["default"].closeSyncAttempt(fd);
      if (tempPath) temp_1["default"].purge(tempPath);
    }
  };
  dist$1.writeFileSync = _writeFileSync;
  return dist$1;
}

var ajv = {exports: {}};

var core$1 = {};

var validate = {};

var boolSchema = {};

var errors = {};

var codegen = {};

var code$1 = {};

var _templateObject$B, _templateObject2$y;
var hasRequiredCode$1;
function requireCode$1() {
  if (hasRequiredCode$1) return code$1;
  hasRequiredCode$1 = 1;
  (function (exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.regexpCode = exports.getEsmExportName = exports.getProperty = exports.safeStringify = exports.stringify = exports.strConcat = exports.addCodeArg = exports.str = exports._ = exports.nil = exports._Code = exports.Name = exports.IDENTIFIER = exports._CodeOrName = void 0;
    // eslint-disable-next-line @typescript-eslint/no-extraneous-class
    var _CodeOrName = /*#__PURE__*/_createClass(function _CodeOrName() {
      _classCallCheck(this, _CodeOrName);
    });
    exports._CodeOrName = _CodeOrName;
    exports.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
    var Name = /*#__PURE__*/function (_CodeOrName2) {
      function Name(s) {
        var _this;
        _classCallCheck(this, Name);
        _this = _callSuper(this, Name);
        if (!exports.IDENTIFIER.test(s)) throw new Error("CodeGen: name must be a valid identifier");
        _this.str = s;
        return _this;
      }
      _inherits(Name, _CodeOrName2);
      return _createClass(Name, [{
        key: "toString",
        value: function toString() {
          return this.str;
        }
      }, {
        key: "emptyStr",
        value: function emptyStr() {
          return false;
        }
      }, {
        key: "names",
        get: function get() {
          return _defineProperty({}, this.str, 1);
        }
      }]);
    }(_CodeOrName);
    exports.Name = Name;
    var _Code = /*#__PURE__*/function (_CodeOrName3) {
      function _Code(code) {
        var _this2;
        _classCallCheck(this, _Code);
        _this2 = _callSuper(this, _Code);
        _this2._items = typeof code === "string" ? [code] : code;
        return _this2;
      }
      _inherits(_Code, _CodeOrName3);
      return _createClass(_Code, [{
        key: "toString",
        value: function toString() {
          return this.str;
        }
      }, {
        key: "emptyStr",
        value: function emptyStr() {
          if (this._items.length > 1) return false;
          var item = this._items[0];
          return item === "" || item === '""';
        }
      }, {
        key: "str",
        get: function get() {
          var _a;
          return (_a = this._str) !== null && _a !== void 0 ? _a : this._str = this._items.reduce(function (s, c) {
            return "".concat(s).concat(c);
          }, "");
        }
      }, {
        key: "names",
        get: function get() {
          var _a;
          return (_a = this._names) !== null && _a !== void 0 ? _a : this._names = this._items.reduce(function (names, c) {
            if (c instanceof Name) names[c.str] = (names[c.str] || 0) + 1;
            return names;
          }, {});
        }
      }]);
    }(_CodeOrName);
    exports._Code = _Code;
    exports.nil = new _Code("");
    function _(strs) {
      var code = [strs[0]];
      var i = 0;
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      while (i < args.length) {
        addCodeArg(code, args[i]);
        code.push(strs[++i]);
      }
      return new _Code(code);
    }
    exports._ = _;
    var plus = new _Code("+");
    function str(strs) {
      var expr = [safeStringify(strs[0])];
      var i = 0;
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }
      while (i < args.length) {
        expr.push(plus);
        addCodeArg(expr, args[i]);
        expr.push(plus, safeStringify(strs[++i]));
      }
      optimize(expr);
      return new _Code(expr);
    }
    exports.str = str;
    function addCodeArg(code, arg) {
      if (arg instanceof _Code) code.push.apply(code, _toConsumableArray(arg._items));else if (arg instanceof Name) code.push(arg);else code.push(interpolate(arg));
    }
    exports.addCodeArg = addCodeArg;
    function optimize(expr) {
      var i = 1;
      while (i < expr.length - 1) {
        if (expr[i] === plus) {
          var res = mergeExprItems(expr[i - 1], expr[i + 1]);
          if (res !== undefined) {
            expr.splice(i - 1, 3, res);
            continue;
          }
          expr[i++] = "+";
        }
        i++;
      }
    }
    function mergeExprItems(a, b) {
      if (b === '""') return a;
      if (a === '""') return b;
      if (typeof a == "string") {
        if (b instanceof Name || a[a.length - 1] !== '"') return;
        if (typeof b != "string") return "".concat(a.slice(0, -1)).concat(b, "\"");
        if (b[0] === '"') return a.slice(0, -1) + b.slice(1);
        return;
      }
      if (typeof b == "string" && b[0] === '"' && !(a instanceof Name)) return "\"".concat(a).concat(b.slice(1));
      return;
    }
    function strConcat(c1, c2) {
      return c2.emptyStr() ? c1 : c1.emptyStr() ? c2 : str(_templateObject$B || (_templateObject$B = _taggedTemplateLiteral(["", "", ""])), c1, c2);
    }
    exports.strConcat = strConcat;
    // TODO do not allow arrays here
    function interpolate(x) {
      return typeof x == "number" || typeof x == "boolean" || x === null ? x : safeStringify(Array.isArray(x) ? x.join(",") : x);
    }
    function stringify(x) {
      return new _Code(safeStringify(x));
    }
    exports.stringify = stringify;
    function safeStringify(x) {
      return JSON.stringify(x).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }
    exports.safeStringify = safeStringify;
    function getProperty(key) {
      return typeof key == "string" && exports.IDENTIFIER.test(key) ? new _Code(".".concat(key)) : _(_templateObject2$y || (_templateObject2$y = _taggedTemplateLiteral(["[", "]"])), key);
    }
    exports.getProperty = getProperty;
    //Does best effort to format the name properly
    function getEsmExportName(key) {
      if (typeof key == "string" && exports.IDENTIFIER.test(key)) {
        return new _Code("".concat(key));
      }
      throw new Error("CodeGen: invalid export name: ".concat(key, ", use explicit $id name mapping"));
    }
    exports.getEsmExportName = getEsmExportName;
    function regexpCode(rx) {
      return new _Code(rx.toString());
    }
    exports.regexpCode = regexpCode;
  })(code$1);
  return code$1;
}

var scope = {};

var _templateObject$A, _templateObject2$x, _templateObject3$s, _templateObject4$l, _templateObject5$h;
var hasRequiredScope;
function requireScope() {
  if (hasRequiredScope) return scope;
  hasRequiredScope = 1;
  (function (exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ValueScope = exports.ValueScopeName = exports.Scope = exports.varKinds = exports.UsedValueState = void 0;
    var code_1 = requireCode$1();
    var ValueError = /*#__PURE__*/function (_Error) {
      function ValueError(name) {
        var _this;
        _classCallCheck(this, ValueError);
        _this = _callSuper(this, ValueError, ["CodeGen: \"code\" for ".concat(name, " not defined")]);
        _this.value = name.value;
        return _this;
      }
      _inherits(ValueError, _Error);
      return _createClass(ValueError);
    }(/*#__PURE__*/_wrapNativeSuper(Error));
    var UsedValueState;
    (function (UsedValueState) {
      UsedValueState[UsedValueState["Started"] = 0] = "Started";
      UsedValueState[UsedValueState["Completed"] = 1] = "Completed";
    })(UsedValueState || (exports.UsedValueState = UsedValueState = {}));
    exports.varKinds = {
      "const": new code_1.Name("const"),
      "let": new code_1.Name("let"),
      "var": new code_1.Name("var")
    };
    var Scope = /*#__PURE__*/function () {
      function Scope() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          prefixes = _ref.prefixes,
          parent = _ref.parent;
        _classCallCheck(this, Scope);
        this._names = {};
        this._prefixes = prefixes;
        this._parent = parent;
      }
      return _createClass(Scope, [{
        key: "toName",
        value: function toName(nameOrPrefix) {
          return nameOrPrefix instanceof code_1.Name ? nameOrPrefix : this.name(nameOrPrefix);
        }
      }, {
        key: "name",
        value: function name(prefix) {
          return new code_1.Name(this._newName(prefix));
        }
      }, {
        key: "_newName",
        value: function _newName(prefix) {
          var ng = this._names[prefix] || this._nameGroup(prefix);
          return "".concat(prefix).concat(ng.index++);
        }
      }, {
        key: "_nameGroup",
        value: function _nameGroup(prefix) {
          var _a, _b;
          if (((_b = (_a = this._parent) === null || _a === void 0 ? void 0 : _a._prefixes) === null || _b === void 0 ? void 0 : _b.has(prefix)) || this._prefixes && !this._prefixes.has(prefix)) {
            throw new Error("CodeGen: prefix \"".concat(prefix, "\" is not allowed in this scope"));
          }
          return this._names[prefix] = {
            prefix: prefix,
            index: 0
          };
        }
      }]);
    }();
    exports.Scope = Scope;
    var ValueScopeName = /*#__PURE__*/function (_code_1$Name) {
      function ValueScopeName(prefix, nameStr) {
        var _this2;
        _classCallCheck(this, ValueScopeName);
        _this2 = _callSuper(this, ValueScopeName, [nameStr]);
        _this2.prefix = prefix;
        return _this2;
      }
      _inherits(ValueScopeName, _code_1$Name);
      return _createClass(ValueScopeName, [{
        key: "setValue",
        value: function setValue(value, _ref2) {
          var property = _ref2.property,
            itemIndex = _ref2.itemIndex;
          this.value = value;
          this.scopePath = (0, code_1._)(_templateObject$A || (_templateObject$A = _taggedTemplateLiteral([".", "[", "]"])), new code_1.Name(property), itemIndex);
        }
      }]);
    }(code_1.Name);
    exports.ValueScopeName = ValueScopeName;
    var line = (0, code_1._)(_templateObject2$x || (_templateObject2$x = _taggedTemplateLiteral(["\n"], ["\\n"])));
    var ValueScope = /*#__PURE__*/function (_Scope) {
      function ValueScope(opts) {
        var _this3;
        _classCallCheck(this, ValueScope);
        _this3 = _callSuper(this, ValueScope, [opts]);
        _this3._values = {};
        _this3._scope = opts.scope;
        _this3.opts = _objectSpread2(_objectSpread2({}, opts), {}, {
          _n: opts.lines ? line : code_1.nil
        });
        return _this3;
      }
      _inherits(ValueScope, _Scope);
      return _createClass(ValueScope, [{
        key: "get",
        value: function get() {
          return this._scope;
        }
      }, {
        key: "name",
        value: function name(prefix) {
          return new ValueScopeName(prefix, this._newName(prefix));
        }
      }, {
        key: "value",
        value: function value(nameOrPrefix, _value) {
          var _a;
          if (_value.ref === undefined) throw new Error("CodeGen: ref must be passed in value");
          var name = this.toName(nameOrPrefix);
          var prefix = name.prefix;
          var valueKey = (_a = _value.key) !== null && _a !== void 0 ? _a : _value.ref;
          var vs = this._values[prefix];
          if (vs) {
            var _name = vs.get(valueKey);
            if (_name) return _name;
          } else {
            vs = this._values[prefix] = new Map();
          }
          vs.set(valueKey, name);
          var s = this._scope[prefix] || (this._scope[prefix] = []);
          var itemIndex = s.length;
          s[itemIndex] = _value.ref;
          name.setValue(_value, {
            property: prefix,
            itemIndex: itemIndex
          });
          return name;
        }
      }, {
        key: "getValue",
        value: function getValue(prefix, keyOrRef) {
          var vs = this._values[prefix];
          if (!vs) return;
          return vs.get(keyOrRef);
        }
      }, {
        key: "scopeRefs",
        value: function scopeRefs(scopeName) {
          var values = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._values;
          return this._reduceValues(values, function (name) {
            if (name.scopePath === undefined) throw new Error("CodeGen: name \"".concat(name, "\" has no value"));
            return (0, code_1._)(_templateObject3$s || (_templateObject3$s = _taggedTemplateLiteral(["", "", ""])), scopeName, name.scopePath);
          });
        }
      }, {
        key: "scopeCode",
        value: function scopeCode() {
          var values = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._values;
          var usedValues = arguments.length > 1 ? arguments[1] : undefined;
          var getCode = arguments.length > 2 ? arguments[2] : undefined;
          return this._reduceValues(values, function (name) {
            if (name.value === undefined) throw new Error("CodeGen: name \"".concat(name, "\" has no value"));
            return name.value.code;
          }, usedValues, getCode);
        }
      }, {
        key: "_reduceValues",
        value: function _reduceValues(values, valueCode) {
          var _this4 = this;
          var usedValues = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          var getCode = arguments.length > 3 ? arguments[3] : undefined;
          var code = code_1.nil;
          var _loop = function _loop() {
            var vs = values[prefix];
            if (!vs) return 1; // continue
            var nameSet = usedValues[prefix] = usedValues[prefix] || new Map();
            vs.forEach(function (name) {
              if (nameSet.has(name)) return;
              nameSet.set(name, UsedValueState.Started);
              var c = valueCode(name);
              if (c) {
                var def = _this4.opts.es5 ? exports.varKinds["var"] : exports.varKinds["const"];
                code = (0, code_1._)(_templateObject4$l || (_templateObject4$l = _taggedTemplateLiteral(["", "", " ", " = ", ";", ""])), code, def, name, c, _this4.opts._n);
              } else if (c = getCode === null || getCode === void 0 ? void 0 : getCode(name)) {
                code = (0, code_1._)(_templateObject5$h || (_templateObject5$h = _taggedTemplateLiteral(["", "", "", ""])), code, c, _this4.opts._n);
              } else {
                throw new ValueError(name);
              }
              nameSet.set(name, UsedValueState.Completed);
            });
          };
          for (var prefix in values) {
            if (_loop()) continue;
          }
          return code;
        }
      }]);
    }(Scope);
    exports.ValueScope = ValueScope;
  })(scope);
  return scope;
}

var _templateObject$z, _templateObject2$w, _templateObject3$r, _templateObject4$k, _templateObject5$g, _templateObject6$b;
var hasRequiredCodegen;
function requireCodegen() {
  if (hasRequiredCodegen) return codegen;
  hasRequiredCodegen = 1;
  (function (exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.or = exports.and = exports.not = exports.CodeGen = exports.operators = exports.varKinds = exports.ValueScopeName = exports.ValueScope = exports.Scope = exports.Name = exports.regexpCode = exports.stringify = exports.getProperty = exports.nil = exports.strConcat = exports.str = exports._ = void 0;
    var code_1 = requireCode$1();
    var scope_1 = requireScope();
    var code_2 = requireCode$1();
    Object.defineProperty(exports, "_", {
      enumerable: true,
      get: function get() {
        return code_2._;
      }
    });
    Object.defineProperty(exports, "str", {
      enumerable: true,
      get: function get() {
        return code_2.str;
      }
    });
    Object.defineProperty(exports, "strConcat", {
      enumerable: true,
      get: function get() {
        return code_2.strConcat;
      }
    });
    Object.defineProperty(exports, "nil", {
      enumerable: true,
      get: function get() {
        return code_2.nil;
      }
    });
    Object.defineProperty(exports, "getProperty", {
      enumerable: true,
      get: function get() {
        return code_2.getProperty;
      }
    });
    Object.defineProperty(exports, "stringify", {
      enumerable: true,
      get: function get() {
        return code_2.stringify;
      }
    });
    Object.defineProperty(exports, "regexpCode", {
      enumerable: true,
      get: function get() {
        return code_2.regexpCode;
      }
    });
    Object.defineProperty(exports, "Name", {
      enumerable: true,
      get: function get() {
        return code_2.Name;
      }
    });
    var scope_2 = requireScope();
    Object.defineProperty(exports, "Scope", {
      enumerable: true,
      get: function get() {
        return scope_2.Scope;
      }
    });
    Object.defineProperty(exports, "ValueScope", {
      enumerable: true,
      get: function get() {
        return scope_2.ValueScope;
      }
    });
    Object.defineProperty(exports, "ValueScopeName", {
      enumerable: true,
      get: function get() {
        return scope_2.ValueScopeName;
      }
    });
    Object.defineProperty(exports, "varKinds", {
      enumerable: true,
      get: function get() {
        return scope_2.varKinds;
      }
    });
    exports.operators = {
      GT: new code_1._Code(">"),
      GTE: new code_1._Code(">="),
      LT: new code_1._Code("<"),
      LTE: new code_1._Code("<="),
      EQ: new code_1._Code("==="),
      NEQ: new code_1._Code("!=="),
      NOT: new code_1._Code("!"),
      OR: new code_1._Code("||"),
      AND: new code_1._Code("&&"),
      ADD: new code_1._Code("+")
    };
    var Node = /*#__PURE__*/function () {
      function Node() {
        _classCallCheck(this, Node);
      }
      return _createClass(Node, [{
        key: "optimizeNodes",
        value: function optimizeNodes() {
          return this;
        }
      }, {
        key: "optimizeNames",
        value: function optimizeNames(_names, _constants) {
          return this;
        }
      }]);
    }();
    var Def = /*#__PURE__*/function (_Node) {
      function Def(varKind, name, rhs) {
        var _this;
        _classCallCheck(this, Def);
        _this = _callSuper(this, Def);
        _this.varKind = varKind;
        _this.name = name;
        _this.rhs = rhs;
        return _this;
      }
      _inherits(Def, _Node);
      return _createClass(Def, [{
        key: "render",
        value: function render(_ref) {
          var es5 = _ref.es5,
            _n = _ref._n;
          var varKind = es5 ? scope_1.varKinds["var"] : this.varKind;
          var rhs = this.rhs === undefined ? "" : " = ".concat(this.rhs);
          return "".concat(varKind, " ").concat(this.name).concat(rhs, ";") + _n;
        }
      }, {
        key: "optimizeNames",
        value: function optimizeNames(names, constants) {
          if (!names[this.name.str]) return;
          if (this.rhs) this.rhs = optimizeExpr(this.rhs, names, constants);
          return this;
        }
      }, {
        key: "names",
        get: function get() {
          return this.rhs instanceof code_1._CodeOrName ? this.rhs.names : {};
        }
      }]);
    }(Node);
    var Assign = /*#__PURE__*/function (_Node2) {
      function Assign(lhs, rhs, sideEffects) {
        var _this2;
        _classCallCheck(this, Assign);
        _this2 = _callSuper(this, Assign);
        _this2.lhs = lhs;
        _this2.rhs = rhs;
        _this2.sideEffects = sideEffects;
        return _this2;
      }
      _inherits(Assign, _Node2);
      return _createClass(Assign, [{
        key: "render",
        value: function render(_ref2) {
          var _n = _ref2._n;
          return "".concat(this.lhs, " = ").concat(this.rhs, ";") + _n;
        }
      }, {
        key: "optimizeNames",
        value: function optimizeNames(names, constants) {
          if (this.lhs instanceof code_1.Name && !names[this.lhs.str] && !this.sideEffects) return;
          this.rhs = optimizeExpr(this.rhs, names, constants);
          return this;
        }
      }, {
        key: "names",
        get: function get() {
          var names = this.lhs instanceof code_1.Name ? {} : _objectSpread2({}, this.lhs.names);
          return addExprNames(names, this.rhs);
        }
      }]);
    }(Node);
    var AssignOp = /*#__PURE__*/function (_Assign) {
      function AssignOp(lhs, op, rhs, sideEffects) {
        var _this3;
        _classCallCheck(this, AssignOp);
        _this3 = _callSuper(this, AssignOp, [lhs, rhs, sideEffects]);
        _this3.op = op;
        return _this3;
      }
      _inherits(AssignOp, _Assign);
      return _createClass(AssignOp, [{
        key: "render",
        value: function render(_ref3) {
          var _n = _ref3._n;
          return "".concat(this.lhs, " ").concat(this.op, "= ").concat(this.rhs, ";") + _n;
        }
      }]);
    }(Assign);
    var Label = /*#__PURE__*/function (_Node3) {
      function Label(label) {
        var _this4;
        _classCallCheck(this, Label);
        _this4 = _callSuper(this, Label);
        _this4.label = label;
        _this4.names = {};
        return _this4;
      }
      _inherits(Label, _Node3);
      return _createClass(Label, [{
        key: "render",
        value: function render(_ref4) {
          var _n = _ref4._n;
          return "".concat(this.label, ":") + _n;
        }
      }]);
    }(Node);
    var Break = /*#__PURE__*/function (_Node4) {
      function Break(label) {
        var _this5;
        _classCallCheck(this, Break);
        _this5 = _callSuper(this, Break);
        _this5.label = label;
        _this5.names = {};
        return _this5;
      }
      _inherits(Break, _Node4);
      return _createClass(Break, [{
        key: "render",
        value: function render(_ref5) {
          var _n = _ref5._n;
          var label = this.label ? " ".concat(this.label) : "";
          return "break".concat(label, ";") + _n;
        }
      }]);
    }(Node);
    var Throw = /*#__PURE__*/function (_Node5) {
      function Throw(error) {
        var _this6;
        _classCallCheck(this, Throw);
        _this6 = _callSuper(this, Throw);
        _this6.error = error;
        return _this6;
      }
      _inherits(Throw, _Node5);
      return _createClass(Throw, [{
        key: "render",
        value: function render(_ref6) {
          var _n = _ref6._n;
          return "throw ".concat(this.error, ";") + _n;
        }
      }, {
        key: "names",
        get: function get() {
          return this.error.names;
        }
      }]);
    }(Node);
    var AnyCode = /*#__PURE__*/function (_Node6) {
      function AnyCode(code) {
        var _this7;
        _classCallCheck(this, AnyCode);
        _this7 = _callSuper(this, AnyCode);
        _this7.code = code;
        return _this7;
      }
      _inherits(AnyCode, _Node6);
      return _createClass(AnyCode, [{
        key: "render",
        value: function render(_ref7) {
          var _n = _ref7._n;
          return "".concat(this.code, ";") + _n;
        }
      }, {
        key: "optimizeNodes",
        value: function optimizeNodes() {
          return "".concat(this.code) ? this : undefined;
        }
      }, {
        key: "optimizeNames",
        value: function optimizeNames(names, constants) {
          this.code = optimizeExpr(this.code, names, constants);
          return this;
        }
      }, {
        key: "names",
        get: function get() {
          return this.code instanceof code_1._CodeOrName ? this.code.names : {};
        }
      }]);
    }(Node);
    var ParentNode = /*#__PURE__*/function (_Node7) {
      function ParentNode() {
        var _this8;
        var nodes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        _classCallCheck(this, ParentNode);
        _this8 = _callSuper(this, ParentNode);
        _this8.nodes = nodes;
        return _this8;
      }
      _inherits(ParentNode, _Node7);
      return _createClass(ParentNode, [{
        key: "render",
        value: function render(opts) {
          return this.nodes.reduce(function (code, n) {
            return code + n.render(opts);
          }, "");
        }
      }, {
        key: "optimizeNodes",
        value: function optimizeNodes() {
          var nodes = this.nodes;
          var i = nodes.length;
          while (i--) {
            var n = nodes[i].optimizeNodes();
            if (Array.isArray(n)) nodes.splice.apply(nodes, [i, 1].concat(_toConsumableArray(n)));else if (n) nodes[i] = n;else nodes.splice(i, 1);
          }
          return nodes.length > 0 ? this : undefined;
        }
      }, {
        key: "optimizeNames",
        value: function optimizeNames(names, constants) {
          var nodes = this.nodes;
          var i = nodes.length;
          while (i--) {
            // iterating backwards improves 1-pass optimization
            var n = nodes[i];
            if (n.optimizeNames(names, constants)) continue;
            subtractNames(names, n.names);
            nodes.splice(i, 1);
          }
          return nodes.length > 0 ? this : undefined;
        }
      }, {
        key: "names",
        get: function get() {
          return this.nodes.reduce(function (names, n) {
            return addNames(names, n.names);
          }, {});
        }
      }]);
    }(Node);
    var BlockNode = /*#__PURE__*/function (_ParentNode) {
      function BlockNode() {
        _classCallCheck(this, BlockNode);
        return _callSuper(this, BlockNode, arguments);
      }
      _inherits(BlockNode, _ParentNode);
      return _createClass(BlockNode, [{
        key: "render",
        value: function render(opts) {
          return "{" + opts._n + _superPropGet(BlockNode, "render", this, 3)([opts]) + "}" + opts._n;
        }
      }]);
    }(ParentNode);
    var Root = /*#__PURE__*/function (_ParentNode2) {
      function Root() {
        _classCallCheck(this, Root);
        return _callSuper(this, Root, arguments);
      }
      _inherits(Root, _ParentNode2);
      return _createClass(Root);
    }(ParentNode);
    var Else = /*#__PURE__*/function (_BlockNode) {
      function Else() {
        _classCallCheck(this, Else);
        return _callSuper(this, Else, arguments);
      }
      _inherits(Else, _BlockNode);
      return _createClass(Else);
    }(BlockNode);
    Else.kind = "else";
    var If = /*#__PURE__*/function (_BlockNode2) {
      function If(condition, nodes) {
        var _this9;
        _classCallCheck(this, If);
        _this9 = _callSuper(this, If, [nodes]);
        _this9.condition = condition;
        return _this9;
      }
      _inherits(If, _BlockNode2);
      return _createClass(If, [{
        key: "render",
        value: function render(opts) {
          var code = "if(".concat(this.condition, ")") + _superPropGet(If, "render", this, 3)([opts]);
          if (this["else"]) code += "else " + this["else"].render(opts);
          return code;
        }
      }, {
        key: "optimizeNodes",
        value: function optimizeNodes() {
          _superPropGet(If, "optimizeNodes", this, 3)([]);
          var cond = this.condition;
          if (cond === true) return this.nodes; // else is ignored here
          var e = this["else"];
          if (e) {
            var ns = e.optimizeNodes();
            e = this["else"] = Array.isArray(ns) ? new Else(ns) : ns;
          }
          if (e) {
            if (cond === false) return e instanceof If ? e : e.nodes;
            if (this.nodes.length) return this;
            return new If(not(cond), e instanceof If ? [e] : e.nodes);
          }
          if (cond === false || !this.nodes.length) return undefined;
          return this;
        }
      }, {
        key: "optimizeNames",
        value: function optimizeNames(names, constants) {
          var _a;
          this["else"] = (_a = this["else"]) === null || _a === void 0 ? void 0 : _a.optimizeNames(names, constants);
          if (!(_superPropGet(If, "optimizeNames", this, 3)([names, constants]) || this["else"])) return;
          this.condition = optimizeExpr(this.condition, names, constants);
          return this;
        }
      }, {
        key: "names",
        get: function get() {
          var names = _superPropGet(If, "names", this, 1);
          addExprNames(names, this.condition);
          if (this["else"]) addNames(names, this["else"].names);
          return names;
        }
      }]);
    }(BlockNode);
    If.kind = "if";
    var For = /*#__PURE__*/function (_BlockNode3) {
      function For() {
        _classCallCheck(this, For);
        return _callSuper(this, For, arguments);
      }
      _inherits(For, _BlockNode3);
      return _createClass(For);
    }(BlockNode);
    For.kind = "for";
    var ForLoop = /*#__PURE__*/function (_For) {
      function ForLoop(iteration) {
        var _this10;
        _classCallCheck(this, ForLoop);
        _this10 = _callSuper(this, ForLoop);
        _this10.iteration = iteration;
        return _this10;
      }
      _inherits(ForLoop, _For);
      return _createClass(ForLoop, [{
        key: "render",
        value: function render(opts) {
          return "for(".concat(this.iteration, ")") + _superPropGet(ForLoop, "render", this, 3)([opts]);
        }
      }, {
        key: "optimizeNames",
        value: function optimizeNames(names, constants) {
          if (!_superPropGet(ForLoop, "optimizeNames", this, 3)([names, constants])) return;
          this.iteration = optimizeExpr(this.iteration, names, constants);
          return this;
        }
      }, {
        key: "names",
        get: function get() {
          return addNames(_superPropGet(ForLoop, "names", this, 1), this.iteration.names);
        }
      }]);
    }(For);
    var ForRange = /*#__PURE__*/function (_For2) {
      function ForRange(varKind, name, from, to) {
        var _this11;
        _classCallCheck(this, ForRange);
        _this11 = _callSuper(this, ForRange);
        _this11.varKind = varKind;
        _this11.name = name;
        _this11.from = from;
        _this11.to = to;
        return _this11;
      }
      _inherits(ForRange, _For2);
      return _createClass(ForRange, [{
        key: "render",
        value: function render(opts) {
          var varKind = opts.es5 ? scope_1.varKinds["var"] : this.varKind;
          var name = this.name,
            from = this.from,
            to = this.to;
          return "for(".concat(varKind, " ").concat(name, "=").concat(from, "; ").concat(name, "<").concat(to, "; ").concat(name, "++)") + _superPropGet(ForRange, "render", this, 3)([opts]);
        }
      }, {
        key: "names",
        get: function get() {
          var names = addExprNames(_superPropGet(ForRange, "names", this, 1), this.from);
          return addExprNames(names, this.to);
        }
      }]);
    }(For);
    var ForIter = /*#__PURE__*/function (_For3) {
      function ForIter(loop, varKind, name, iterable) {
        var _this12;
        _classCallCheck(this, ForIter);
        _this12 = _callSuper(this, ForIter);
        _this12.loop = loop;
        _this12.varKind = varKind;
        _this12.name = name;
        _this12.iterable = iterable;
        return _this12;
      }
      _inherits(ForIter, _For3);
      return _createClass(ForIter, [{
        key: "render",
        value: function render(opts) {
          return "for(".concat(this.varKind, " ").concat(this.name, " ").concat(this.loop, " ").concat(this.iterable, ")") + _superPropGet(ForIter, "render", this, 3)([opts]);
        }
      }, {
        key: "optimizeNames",
        value: function optimizeNames(names, constants) {
          if (!_superPropGet(ForIter, "optimizeNames", this, 3)([names, constants])) return;
          this.iterable = optimizeExpr(this.iterable, names, constants);
          return this;
        }
      }, {
        key: "names",
        get: function get() {
          return addNames(_superPropGet(ForIter, "names", this, 1), this.iterable.names);
        }
      }]);
    }(For);
    var Func = /*#__PURE__*/function (_BlockNode4) {
      function Func(name, args, async) {
        var _this13;
        _classCallCheck(this, Func);
        _this13 = _callSuper(this, Func);
        _this13.name = name;
        _this13.args = args;
        _this13.async = async;
        return _this13;
      }
      _inherits(Func, _BlockNode4);
      return _createClass(Func, [{
        key: "render",
        value: function render(opts) {
          var _async = this.async ? "async " : "";
          return "".concat(_async, "function ").concat(this.name, "(").concat(this.args, ")") + _superPropGet(Func, "render", this, 3)([opts]);
        }
      }]);
    }(BlockNode);
    Func.kind = "func";
    var Return = /*#__PURE__*/function (_ParentNode3) {
      function Return() {
        _classCallCheck(this, Return);
        return _callSuper(this, Return, arguments);
      }
      _inherits(Return, _ParentNode3);
      return _createClass(Return, [{
        key: "render",
        value: function render(opts) {
          return "return " + _superPropGet(Return, "render", this, 3)([opts]);
        }
      }]);
    }(ParentNode);
    Return.kind = "return";
    var Try = /*#__PURE__*/function (_BlockNode5) {
      function Try() {
        _classCallCheck(this, Try);
        return _callSuper(this, Try, arguments);
      }
      _inherits(Try, _BlockNode5);
      return _createClass(Try, [{
        key: "render",
        value: function render(opts) {
          var code = "try" + _superPropGet(Try, "render", this, 3)([opts]);
          if (this["catch"]) code += this["catch"].render(opts);
          if (this["finally"]) code += this["finally"].render(opts);
          return code;
        }
      }, {
        key: "optimizeNodes",
        value: function optimizeNodes() {
          var _a, _b;
          _superPropGet(Try, "optimizeNodes", this, 3)([]);
          (_a = this["catch"]) === null || _a === void 0 ? void 0 : _a.optimizeNodes();
          (_b = this["finally"]) === null || _b === void 0 ? void 0 : _b.optimizeNodes();
          return this;
        }
      }, {
        key: "optimizeNames",
        value: function optimizeNames(names, constants) {
          var _a, _b;
          _superPropGet(Try, "optimizeNames", this, 3)([names, constants]);
          (_a = this["catch"]) === null || _a === void 0 ? void 0 : _a.optimizeNames(names, constants);
          (_b = this["finally"]) === null || _b === void 0 ? void 0 : _b.optimizeNames(names, constants);
          return this;
        }
      }, {
        key: "names",
        get: function get() {
          var names = _superPropGet(Try, "names", this, 1);
          if (this["catch"]) addNames(names, this["catch"].names);
          if (this["finally"]) addNames(names, this["finally"].names);
          return names;
        }
      }]);
    }(BlockNode);
    var Catch = /*#__PURE__*/function (_BlockNode6) {
      function Catch(error) {
        var _this14;
        _classCallCheck(this, Catch);
        _this14 = _callSuper(this, Catch);
        _this14.error = error;
        return _this14;
      }
      _inherits(Catch, _BlockNode6);
      return _createClass(Catch, [{
        key: "render",
        value: function render(opts) {
          return "catch(".concat(this.error, ")") + _superPropGet(Catch, "render", this, 3)([opts]);
        }
      }]);
    }(BlockNode);
    Catch.kind = "catch";
    var Finally = /*#__PURE__*/function (_BlockNode7) {
      function Finally() {
        _classCallCheck(this, Finally);
        return _callSuper(this, Finally, arguments);
      }
      _inherits(Finally, _BlockNode7);
      return _createClass(Finally, [{
        key: "render",
        value: function render(opts) {
          return "finally" + _superPropGet(Finally, "render", this, 3)([opts]);
        }
      }]);
    }(BlockNode);
    Finally.kind = "finally";
    var CodeGen = /*#__PURE__*/function () {
      function CodeGen(extScope) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        _classCallCheck(this, CodeGen);
        this._values = {};
        this._blockStarts = [];
        this._constants = {};
        this.opts = _objectSpread2(_objectSpread2({}, opts), {}, {
          _n: opts.lines ? "\n" : ""
        });
        this._extScope = extScope;
        this._scope = new scope_1.Scope({
          parent: extScope
        });
        this._nodes = [new Root()];
      }
      return _createClass(CodeGen, [{
        key: "toString",
        value: function toString() {
          return this._root.render(this.opts);
        }
        // returns unique name in the internal scope
      }, {
        key: "name",
        value: function name(prefix) {
          return this._scope.name(prefix);
        }
        // reserves unique name in the external scope
      }, {
        key: "scopeName",
        value: function scopeName(prefix) {
          return this._extScope.name(prefix);
        }
        // reserves unique name in the external scope and assigns value to it
      }, {
        key: "scopeValue",
        value: function scopeValue(prefixOrName, value) {
          var name = this._extScope.value(prefixOrName, value);
          var vs = this._values[name.prefix] || (this._values[name.prefix] = new Set());
          vs.add(name);
          return name;
        }
      }, {
        key: "getScopeValue",
        value: function getScopeValue(prefix, keyOrRef) {
          return this._extScope.getValue(prefix, keyOrRef);
        }
        // return code that assigns values in the external scope to the names that are used internally
        // (same names that were returned by gen.scopeName or gen.scopeValue)
      }, {
        key: "scopeRefs",
        value: function scopeRefs(scopeName) {
          return this._extScope.scopeRefs(scopeName, this._values);
        }
      }, {
        key: "scopeCode",
        value: function scopeCode() {
          return this._extScope.scopeCode(this._values);
        }
      }, {
        key: "_def",
        value: function _def(varKind, nameOrPrefix, rhs, constant) {
          var name = this._scope.toName(nameOrPrefix);
          if (rhs !== undefined && constant) this._constants[name.str] = rhs;
          this._leafNode(new Def(varKind, name, rhs));
          return name;
        }
        // `const` declaration (`var` in es5 mode)
      }, {
        key: "const",
        value: function _const(nameOrPrefix, rhs, _constant) {
          return this._def(scope_1.varKinds["const"], nameOrPrefix, rhs, _constant);
        }
        // `let` declaration with optional assignment (`var` in es5 mode)
      }, {
        key: "let",
        value: function _let(nameOrPrefix, rhs, _constant) {
          return this._def(scope_1.varKinds["let"], nameOrPrefix, rhs, _constant);
        }
        // `var` declaration with optional assignment
      }, {
        key: "var",
        value: function _var(nameOrPrefix, rhs, _constant) {
          return this._def(scope_1.varKinds["var"], nameOrPrefix, rhs, _constant);
        }
        // assignment code
      }, {
        key: "assign",
        value: function assign(lhs, rhs, sideEffects) {
          return this._leafNode(new Assign(lhs, rhs, sideEffects));
        }
        // `+=` code
      }, {
        key: "add",
        value: function add(lhs, rhs) {
          return this._leafNode(new AssignOp(lhs, exports.operators.ADD, rhs));
        }
        // appends passed SafeExpr to code or executes Block
      }, {
        key: "code",
        value: function code(c) {
          if (typeof c == "function") c();else if (c !== code_1.nil) this._leafNode(new AnyCode(c));
          return this;
        }
        // returns code for object literal for the passed argument list of key-value pairs
      }, {
        key: "object",
        value: function object() {
          var code = ["{"];
          for (var _len = arguments.length, keyValues = new Array(_len), _key = 0; _key < _len; _key++) {
            keyValues[_key] = arguments[_key];
          }
          for (var _i = 0, _keyValues = keyValues; _i < _keyValues.length; _i++) {
            var _keyValues$_i = _slicedToArray(_keyValues[_i], 2),
              key = _keyValues$_i[0],
              value = _keyValues$_i[1];
            if (code.length > 1) code.push(",");
            code.push(key);
            if (key !== value || this.opts.es5) {
              code.push(":");
              (0, code_1.addCodeArg)(code, value);
            }
          }
          code.push("}");
          return new code_1._Code(code);
        }
        // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
      }, {
        key: "if",
        value: function _if(condition, thenBody, elseBody) {
          this._blockNode(new If(condition));
          if (thenBody && elseBody) {
            this.code(thenBody)["else"]().code(elseBody).endIf();
          } else if (thenBody) {
            this.code(thenBody).endIf();
          } else if (elseBody) {
            throw new Error('CodeGen: "else" body without "then" body');
          }
          return this;
        }
        // `else if` clause - invalid without `if` or after `else` clauses
      }, {
        key: "elseIf",
        value: function elseIf(condition) {
          return this._elseNode(new If(condition));
        }
        // `else` clause - only valid after `if` or `else if` clauses
      }, {
        key: "else",
        value: function _else() {
          return this._elseNode(new Else());
        }
        // end `if` statement (needed if gen.if was used only with condition)
      }, {
        key: "endIf",
        value: function endIf() {
          return this._endBlockNode(If, Else);
        }
      }, {
        key: "_for",
        value: function _for(node, forBody) {
          this._blockNode(node);
          if (forBody) this.code(forBody).endFor();
          return this;
        }
        // a generic `for` clause (or statement if `forBody` is passed)
      }, {
        key: "for",
        value: function _for(iteration, forBody) {
          return this._for(new ForLoop(iteration), forBody);
        }
        // `for` statement for a range of values
      }, {
        key: "forRange",
        value: function forRange(nameOrPrefix, from, to, forBody) {
          var varKind = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : this.opts.es5 ? scope_1.varKinds["var"] : scope_1.varKinds["let"];
          var name = this._scope.toName(nameOrPrefix);
          return this._for(new ForRange(varKind, name, from, to), function () {
            return forBody(name);
          });
        }
        // `for-of` statement (in es5 mode replace with a normal for loop)
      }, {
        key: "forOf",
        value: function forOf(nameOrPrefix, iterable, forBody) {
          var _this15 = this;
          var varKind = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : scope_1.varKinds["const"];
          var name = this._scope.toName(nameOrPrefix);
          if (this.opts.es5) {
            var arr = iterable instanceof code_1.Name ? iterable : this["var"]("_arr", iterable);
            return this.forRange("_i", 0, (0, code_1._)(_templateObject$z || (_templateObject$z = _taggedTemplateLiteral(["", ".length"])), arr), function (i) {
              _this15["var"](name, (0, code_1._)(_templateObject2$w || (_templateObject2$w = _taggedTemplateLiteral(["", "[", "]"])), arr, i));
              forBody(name);
            });
          }
          return this._for(new ForIter("of", varKind, name, iterable), function () {
            return forBody(name);
          });
        }
        // `for-in` statement.
        // With option `ownProperties` replaced with a `for-of` loop for object keys
      }, {
        key: "forIn",
        value: function forIn(nameOrPrefix, obj, forBody) {
          var varKind = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.opts.es5 ? scope_1.varKinds["var"] : scope_1.varKinds["const"];
          if (this.opts.ownProperties) {
            return this.forOf(nameOrPrefix, (0, code_1._)(_templateObject3$r || (_templateObject3$r = _taggedTemplateLiteral(["Object.keys(", ")"])), obj), forBody);
          }
          var name = this._scope.toName(nameOrPrefix);
          return this._for(new ForIter("in", varKind, name, obj), function () {
            return forBody(name);
          });
        }
        // end `for` loop
      }, {
        key: "endFor",
        value: function endFor() {
          return this._endBlockNode(For);
        }
        // `label` statement
      }, {
        key: "label",
        value: function label(_label) {
          return this._leafNode(new Label(_label));
        }
        // `break` statement
      }, {
        key: "break",
        value: function _break(label) {
          return this._leafNode(new Break(label));
        }
        // `return` statement
      }, {
        key: "return",
        value: function _return(value) {
          var node = new Return();
          this._blockNode(node);
          this.code(value);
          if (node.nodes.length !== 1) throw new Error('CodeGen: "return" should have one node');
          return this._endBlockNode(Return);
        }
        // `try` statement
      }, {
        key: "try",
        value: function _try(tryBody, catchCode, finallyCode) {
          if (!catchCode && !finallyCode) throw new Error('CodeGen: "try" without "catch" and "finally"');
          var node = new Try();
          this._blockNode(node);
          this.code(tryBody);
          if (catchCode) {
            var error = this.name("e");
            this._currNode = node["catch"] = new Catch(error);
            catchCode(error);
          }
          if (finallyCode) {
            this._currNode = node["finally"] = new Finally();
            this.code(finallyCode);
          }
          return this._endBlockNode(Catch, Finally);
        }
        // `throw` statement
      }, {
        key: "throw",
        value: function _throw(error) {
          return this._leafNode(new Throw(error));
        }
        // start self-balancing block
      }, {
        key: "block",
        value: function block(body, nodeCount) {
          this._blockStarts.push(this._nodes.length);
          if (body) this.code(body).endBlock(nodeCount);
          return this;
        }
        // end the current self-balancing block
      }, {
        key: "endBlock",
        value: function endBlock(nodeCount) {
          var len = this._blockStarts.pop();
          if (len === undefined) throw new Error("CodeGen: not in self-balancing block");
          var toClose = this._nodes.length - len;
          if (toClose < 0 || nodeCount !== undefined && toClose !== nodeCount) {
            throw new Error("CodeGen: wrong number of nodes: ".concat(toClose, " vs ").concat(nodeCount, " expected"));
          }
          this._nodes.length = len;
          return this;
        }
        // `function` heading (or definition if funcBody is passed)
      }, {
        key: "func",
        value: function func(name) {
          var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : code_1.nil;
          var async = arguments.length > 2 ? arguments[2] : undefined;
          var funcBody = arguments.length > 3 ? arguments[3] : undefined;
          this._blockNode(new Func(name, args, async));
          if (funcBody) this.code(funcBody).endFunc();
          return this;
        }
        // end function definition
      }, {
        key: "endFunc",
        value: function endFunc() {
          return this._endBlockNode(Func);
        }
      }, {
        key: "optimize",
        value: function optimize() {
          var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
          while (n-- > 0) {
            this._root.optimizeNodes();
            this._root.optimizeNames(this._root.names, this._constants);
          }
        }
      }, {
        key: "_leafNode",
        value: function _leafNode(node) {
          this._currNode.nodes.push(node);
          return this;
        }
      }, {
        key: "_blockNode",
        value: function _blockNode(node) {
          this._currNode.nodes.push(node);
          this._nodes.push(node);
        }
      }, {
        key: "_endBlockNode",
        value: function _endBlockNode(N1, N2) {
          var n = this._currNode;
          if (n instanceof N1 || N2 && n instanceof N2) {
            this._nodes.pop();
            return this;
          }
          throw new Error("CodeGen: not in block \"".concat(N2 ? "".concat(N1.kind, "/").concat(N2.kind) : N1.kind, "\""));
        }
      }, {
        key: "_elseNode",
        value: function _elseNode(node) {
          var n = this._currNode;
          if (!(n instanceof If)) {
            throw new Error('CodeGen: "else" without "if"');
          }
          this._currNode = n["else"] = node;
          return this;
        }
      }, {
        key: "_root",
        get: function get() {
          return this._nodes[0];
        }
      }, {
        key: "_currNode",
        get: function get() {
          var ns = this._nodes;
          return ns[ns.length - 1];
        },
        set: function set(node) {
          var ns = this._nodes;
          ns[ns.length - 1] = node;
        }
      }]);
    }();
    exports.CodeGen = CodeGen;
    function addNames(names, from) {
      for (var n in from) names[n] = (names[n] || 0) + (from[n] || 0);
      return names;
    }
    function addExprNames(names, from) {
      return from instanceof code_1._CodeOrName ? addNames(names, from.names) : names;
    }
    function optimizeExpr(expr, names, constants) {
      if (expr instanceof code_1.Name) return replaceName(expr);
      if (!canOptimize(expr)) return expr;
      return new code_1._Code(expr._items.reduce(function (items, c) {
        if (c instanceof code_1.Name) c = replaceName(c);
        if (c instanceof code_1._Code) items.push.apply(items, _toConsumableArray(c._items));else items.push(c);
        return items;
      }, []));
      function replaceName(n) {
        var c = constants[n.str];
        if (c === undefined || names[n.str] !== 1) return n;
        delete names[n.str];
        return c;
      }
      function canOptimize(e) {
        return e instanceof code_1._Code && e._items.some(function (c) {
          return c instanceof code_1.Name && names[c.str] === 1 && constants[c.str] !== undefined;
        });
      }
    }
    function subtractNames(names, from) {
      for (var n in from) names[n] = (names[n] || 0) - (from[n] || 0);
    }
    function not(x) {
      return typeof x == "boolean" || typeof x == "number" || x === null ? !x : (0, code_1._)(_templateObject4$k || (_templateObject4$k = _taggedTemplateLiteral(["!", ""])), par(x));
    }
    exports.not = not;
    var andCode = mappend(exports.operators.AND);
    // boolean AND (&&) expression with the passed arguments
    function and() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      return args.reduce(andCode);
    }
    exports.and = and;
    var orCode = mappend(exports.operators.OR);
    // boolean OR (||) expression with the passed arguments
    function or() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      return args.reduce(orCode);
    }
    exports.or = or;
    function mappend(op) {
      return function (x, y) {
        return x === code_1.nil ? y : y === code_1.nil ? x : (0, code_1._)(_templateObject5$g || (_templateObject5$g = _taggedTemplateLiteral(["", " ", " ", ""])), par(x), op, par(y));
      };
    }
    function par(x) {
      return x instanceof code_1.Name ? x : (0, code_1._)(_templateObject6$b || (_templateObject6$b = _taggedTemplateLiteral(["(", ")"])), x);
    }
  })(codegen);
  return codegen;
}

var util = {};

var _templateObject$y, _templateObject2$v, _templateObject3$q, _templateObject4$j, _templateObject5$f, _templateObject6$a, _templateObject7$a, _templateObject8$a, _templateObject9$9, _templateObject10$8, _templateObject11$7, _templateObject12$7, _templateObject13$6, _templateObject14$6, _templateObject15$6, _templateObject16$5, _templateObject17$5, _templateObject18$3;
var hasRequiredUtil;
function requireUtil() {
  if (hasRequiredUtil) return util;
  hasRequiredUtil = 1;
  Object.defineProperty(util, "__esModule", {
    value: true
  });
  util.checkStrictMode = util.getErrorPath = util.Type = util.useFunc = util.setEvaluated = util.evaluatedPropsToName = util.mergeEvaluated = util.eachItem = util.unescapeJsonPointer = util.escapeJsonPointer = util.escapeFragment = util.unescapeFragment = util.schemaRefOrVal = util.schemaHasRulesButRef = util.schemaHasRules = util.checkUnknownRules = util.alwaysValidSchema = util.toHash = void 0;
  var codegen_1 = requireCodegen();
  var code_1 = requireCode$1();
  // TODO refactor to use Set
  function toHash(arr) {
    var hash = {};
    var _iterator = _createForOfIteratorHelper(arr),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var item = _step.value;
        hash[item] = true;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return hash;
  }
  util.toHash = toHash;
  function alwaysValidSchema(it, schema) {
    if (typeof schema == "boolean") return schema;
    if (Object.keys(schema).length === 0) return true;
    checkUnknownRules(it, schema);
    return !schemaHasRules(schema, it.self.RULES.all);
  }
  util.alwaysValidSchema = alwaysValidSchema;
  function checkUnknownRules(it) {
    var schema = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : it.schema;
    var opts = it.opts,
      self = it.self;
    if (!opts.strictSchema) return;
    if (typeof schema === "boolean") return;
    var rules = self.RULES.keywords;
    for (var key in schema) {
      if (!rules[key]) checkStrictMode(it, "unknown keyword: \"".concat(key, "\""));
    }
  }
  util.checkUnknownRules = checkUnknownRules;
  function schemaHasRules(schema, rules) {
    if (typeof schema == "boolean") return !schema;
    for (var key in schema) if (rules[key]) return true;
    return false;
  }
  util.schemaHasRules = schemaHasRules;
  function schemaHasRulesButRef(schema, RULES) {
    if (typeof schema == "boolean") return !schema;
    for (var key in schema) if (key !== "$ref" && RULES.all[key]) return true;
    return false;
  }
  util.schemaHasRulesButRef = schemaHasRulesButRef;
  function schemaRefOrVal(_ref, schema, keyword, $data) {
    var topSchemaRef = _ref.topSchemaRef,
      schemaPath = _ref.schemaPath;
    if (!$data) {
      if (typeof schema == "number" || typeof schema == "boolean") return schema;
      if (typeof schema == "string") return (0, codegen_1._)(_templateObject$y || (_templateObject$y = _taggedTemplateLiteral(["", ""])), schema);
    }
    return (0, codegen_1._)(_templateObject2$v || (_templateObject2$v = _taggedTemplateLiteral(["", "", "", ""])), topSchemaRef, schemaPath, (0, codegen_1.getProperty)(keyword));
  }
  util.schemaRefOrVal = schemaRefOrVal;
  function unescapeFragment(str) {
    return unescapeJsonPointer(decodeURIComponent(str));
  }
  util.unescapeFragment = unescapeFragment;
  function escapeFragment(str) {
    return encodeURIComponent(escapeJsonPointer(str));
  }
  util.escapeFragment = escapeFragment;
  function escapeJsonPointer(str) {
    if (typeof str == "number") return "".concat(str);
    return str.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  util.escapeJsonPointer = escapeJsonPointer;
  function unescapeJsonPointer(str) {
    return str.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  util.unescapeJsonPointer = unescapeJsonPointer;
  function eachItem(xs, f) {
    if (Array.isArray(xs)) {
      var _iterator2 = _createForOfIteratorHelper(xs),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var x = _step2.value;
          f(x);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    } else {
      f(xs);
    }
  }
  util.eachItem = eachItem;
  function makeMergeEvaluated(_ref2) {
    var mergeNames = _ref2.mergeNames,
      mergeToName = _ref2.mergeToName,
      mergeValues = _ref2.mergeValues,
      resultToName = _ref2.resultToName;
    return function (gen, from, to, toName) {
      var res = to === undefined ? from : to instanceof codegen_1.Name ? (from instanceof codegen_1.Name ? mergeNames(gen, from, to) : mergeToName(gen, from, to), to) : from instanceof codegen_1.Name ? (mergeToName(gen, to, from), from) : mergeValues(from, to);
      return toName === codegen_1.Name && !(res instanceof codegen_1.Name) ? resultToName(gen, res) : res;
    };
  }
  util.mergeEvaluated = {
    props: makeMergeEvaluated({
      mergeNames: function mergeNames(gen, from, to) {
        return gen["if"]((0, codegen_1._)(_templateObject3$q || (_templateObject3$q = _taggedTemplateLiteral(["", " !== true && ", " !== undefined"])), to, from), function () {
          gen["if"]((0, codegen_1._)(_templateObject4$j || (_templateObject4$j = _taggedTemplateLiteral(["", " === true"])), from), function () {
            return gen.assign(to, true);
          }, function () {
            return gen.assign(to, (0, codegen_1._)(_templateObject5$f || (_templateObject5$f = _taggedTemplateLiteral(["", " || {}"])), to)).code((0, codegen_1._)(_templateObject6$a || (_templateObject6$a = _taggedTemplateLiteral(["Object.assign(", ", ", ")"])), to, from));
          });
        });
      },
      mergeToName: function mergeToName(gen, from, to) {
        return gen["if"]((0, codegen_1._)(_templateObject7$a || (_templateObject7$a = _taggedTemplateLiteral(["", " !== true"])), to), function () {
          if (from === true) {
            gen.assign(to, true);
          } else {
            gen.assign(to, (0, codegen_1._)(_templateObject8$a || (_templateObject8$a = _taggedTemplateLiteral(["", " || {}"])), to));
            setEvaluated(gen, to, from);
          }
        });
      },
      mergeValues: function mergeValues(from, to) {
        return from === true ? true : _objectSpread2(_objectSpread2({}, from), to);
      },
      resultToName: evaluatedPropsToName
    }),
    items: makeMergeEvaluated({
      mergeNames: function mergeNames(gen, from, to) {
        return gen["if"]((0, codegen_1._)(_templateObject9$9 || (_templateObject9$9 = _taggedTemplateLiteral(["", " !== true && ", " !== undefined"])), to, from), function () {
          return gen.assign(to, (0, codegen_1._)(_templateObject10$8 || (_templateObject10$8 = _taggedTemplateLiteral(["", " === true ? true : ", " > ", " ? ", " : ", ""])), from, to, from, to, from));
        });
      },
      mergeToName: function mergeToName(gen, from, to) {
        return gen["if"]((0, codegen_1._)(_templateObject11$7 || (_templateObject11$7 = _taggedTemplateLiteral(["", " !== true"])), to), function () {
          return gen.assign(to, from === true ? true : (0, codegen_1._)(_templateObject12$7 || (_templateObject12$7 = _taggedTemplateLiteral(["", " > ", " ? ", " : ", ""])), to, from, to, from));
        });
      },
      mergeValues: function mergeValues(from, to) {
        return from === true ? true : Math.max(from, to);
      },
      resultToName: function resultToName(gen, items) {
        return gen["var"]("items", items);
      }
    })
  };
  function evaluatedPropsToName(gen, ps) {
    if (ps === true) return gen["var"]("props", true);
    var props = gen["var"]("props", (0, codegen_1._)(_templateObject13$6 || (_templateObject13$6 = _taggedTemplateLiteral(["{}"]))));
    if (ps !== undefined) setEvaluated(gen, props, ps);
    return props;
  }
  util.evaluatedPropsToName = evaluatedPropsToName;
  function setEvaluated(gen, props, ps) {
    Object.keys(ps).forEach(function (p) {
      return gen.assign((0, codegen_1._)(_templateObject14$6 || (_templateObject14$6 = _taggedTemplateLiteral(["", "", ""])), props, (0, codegen_1.getProperty)(p)), true);
    });
  }
  util.setEvaluated = setEvaluated;
  var snippets = {};
  function useFunc(gen, f) {
    return gen.scopeValue("func", {
      ref: f,
      code: snippets[f.code] || (snippets[f.code] = new code_1._Code(f.code))
    });
  }
  util.useFunc = useFunc;
  var Type;
  (function (Type) {
    Type[Type["Num"] = 0] = "Num";
    Type[Type["Str"] = 1] = "Str";
  })(Type || (util.Type = Type = {}));
  function getErrorPath(dataProp, dataPropType, jsPropertySyntax) {
    // let path
    if (dataProp instanceof codegen_1.Name) {
      var isNumber = dataPropType === Type.Num;
      return jsPropertySyntax ? isNumber ? (0, codegen_1._)(_templateObject15$6 || (_templateObject15$6 = _taggedTemplateLiteral(["\"[\" + ", " + \"]\""])), dataProp) : (0, codegen_1._)(_templateObject16$5 || (_templateObject16$5 = _taggedTemplateLiteral(["\"['\" + ", " + \"']\""])), dataProp) : isNumber ? (0, codegen_1._)(_templateObject17$5 || (_templateObject17$5 = _taggedTemplateLiteral(["\"/\" + ", ""])), dataProp) : (0, codegen_1._)(_templateObject18$3 || (_templateObject18$3 = _taggedTemplateLiteral(["\"/\" + ", ".replace(/~/g, \"~0\").replace(/\\//g, \"~1\")"], ["\"/\" + ", ".replace(/~/g, \"~0\").replace(/\\\\//g, \"~1\")"])), dataProp); // TODO maybe use global escapePointer
    }
    return jsPropertySyntax ? (0, codegen_1.getProperty)(dataProp).toString() : "/" + escapeJsonPointer(dataProp);
  }
  util.getErrorPath = getErrorPath;
  function checkStrictMode(it, msg) {
    var mode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : it.opts.strictSchema;
    if (!mode) return;
    msg = "strict mode: ".concat(msg);
    if (mode === true) throw new Error(msg);
    it.self.logger.warn(msg);
  }
  util.checkStrictMode = checkStrictMode;
  return util;
}

var names = {};

var hasRequiredNames;
function requireNames() {
  if (hasRequiredNames) return names;
  hasRequiredNames = 1;
  Object.defineProperty(names, "__esModule", {
    value: true
  });
  var codegen_1 = requireCodegen();
  var names$1 = {
    // validation function arguments
    data: new codegen_1.Name("data"),
    // data passed to validation function
    // args passed from referencing schema
    valCxt: new codegen_1.Name("valCxt"),
    // validation/data context - should not be used directly, it is destructured to the names below
    instancePath: new codegen_1.Name("instancePath"),
    parentData: new codegen_1.Name("parentData"),
    parentDataProperty: new codegen_1.Name("parentDataProperty"),
    rootData: new codegen_1.Name("rootData"),
    // root data - same as the data passed to the first/top validation function
    dynamicAnchors: new codegen_1.Name("dynamicAnchors"),
    // used to support recursiveRef and dynamicRef
    // function scoped variables
    vErrors: new codegen_1.Name("vErrors"),
    // null or array of validation errors
    errors: new codegen_1.Name("errors"),
    // counter of validation errors
    "this": new codegen_1.Name("this"),
    // "globals"
    self: new codegen_1.Name("self"),
    scope: new codegen_1.Name("scope"),
    // JTD serialize/parse name for JSON string and position
    json: new codegen_1.Name("json"),
    jsonPos: new codegen_1.Name("jsonPos"),
    jsonLen: new codegen_1.Name("jsonLen"),
    jsonPart: new codegen_1.Name("jsonPart")
  };
  names["default"] = names$1;
  return names;
}

var _templateObject$x, _templateObject2$u, _templateObject3$p, _templateObject4$i, _templateObject5$e, _templateObject6$9, _templateObject7$9, _templateObject8$9, _templateObject9$8, _templateObject10$7, _templateObject11$6, _templateObject12$6, _templateObject13$5, _templateObject14$5, _templateObject15$5, _templateObject16$4, _templateObject17$4, _templateObject18$2, _templateObject19$2, _templateObject20$2, _templateObject21$2, _templateObject22$2, _templateObject23$2, _templateObject24$2, _templateObject25$2;
var hasRequiredErrors;
function requireErrors() {
  if (hasRequiredErrors) return errors;
  hasRequiredErrors = 1;
  (function (exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.extendErrors = exports.resetErrorsCount = exports.reportExtraError = exports.reportError = exports.keyword$DataError = exports.keywordError = void 0;
    var codegen_1 = requireCodegen();
    var util_1 = requireUtil();
    var names_1 = requireNames();
    exports.keywordError = {
      message: function message(_ref) {
        var keyword = _ref.keyword;
        return (0, codegen_1.str)(_templateObject$x || (_templateObject$x = _taggedTemplateLiteral(["must pass \"", "\" keyword validation"])), keyword);
      }
    };
    exports.keyword$DataError = {
      message: function message(_ref2) {
        var keyword = _ref2.keyword,
          schemaType = _ref2.schemaType;
        return schemaType ? (0, codegen_1.str)(_templateObject2$u || (_templateObject2$u = _taggedTemplateLiteral(["\"", "\" keyword must be ", " ($data)"])), keyword, schemaType) : (0, codegen_1.str)(_templateObject3$p || (_templateObject3$p = _taggedTemplateLiteral(["\"", "\" keyword is invalid ($data)"])), keyword);
      }
    };
    function reportError(cxt) {
      var error = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : exports.keywordError;
      var errorPaths = arguments.length > 2 ? arguments[2] : undefined;
      var overrideAllErrors = arguments.length > 3 ? arguments[3] : undefined;
      var it = cxt.it;
      var gen = it.gen,
        compositeRule = it.compositeRule,
        allErrors = it.allErrors;
      var errObj = errorObjectCode(cxt, error, errorPaths);
      if (overrideAllErrors !== null && overrideAllErrors !== void 0 ? overrideAllErrors : compositeRule || allErrors) {
        addError(gen, errObj);
      } else {
        returnErrors(it, (0, codegen_1._)(_templateObject4$i || (_templateObject4$i = _taggedTemplateLiteral(["[", "]"])), errObj));
      }
    }
    exports.reportError = reportError;
    function reportExtraError(cxt) {
      var error = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : exports.keywordError;
      var errorPaths = arguments.length > 2 ? arguments[2] : undefined;
      var it = cxt.it;
      var gen = it.gen,
        compositeRule = it.compositeRule,
        allErrors = it.allErrors;
      var errObj = errorObjectCode(cxt, error, errorPaths);
      addError(gen, errObj);
      if (!(compositeRule || allErrors)) {
        returnErrors(it, names_1["default"].vErrors);
      }
    }
    exports.reportExtraError = reportExtraError;
    function resetErrorsCount(gen, errsCount) {
      gen.assign(names_1["default"].errors, errsCount);
      gen["if"]((0, codegen_1._)(_templateObject5$e || (_templateObject5$e = _taggedTemplateLiteral(["", " !== null"])), names_1["default"].vErrors), function () {
        return gen["if"](errsCount, function () {
          return gen.assign((0, codegen_1._)(_templateObject6$9 || (_templateObject6$9 = _taggedTemplateLiteral(["", ".length"])), names_1["default"].vErrors), errsCount);
        }, function () {
          return gen.assign(names_1["default"].vErrors, null);
        });
      });
    }
    exports.resetErrorsCount = resetErrorsCount;
    function extendErrors(_ref3) {
      var gen = _ref3.gen,
        keyword = _ref3.keyword,
        schemaValue = _ref3.schemaValue,
        data = _ref3.data,
        errsCount = _ref3.errsCount,
        it = _ref3.it;
      /* istanbul ignore if */
      if (errsCount === undefined) throw new Error("ajv implementation error");
      var err = gen.name("err");
      gen.forRange("i", errsCount, names_1["default"].errors, function (i) {
        gen["const"](err, (0, codegen_1._)(_templateObject7$9 || (_templateObject7$9 = _taggedTemplateLiteral(["", "[", "]"])), names_1["default"].vErrors, i));
        gen["if"]((0, codegen_1._)(_templateObject8$9 || (_templateObject8$9 = _taggedTemplateLiteral(["", ".instancePath === undefined"])), err), function () {
          return gen.assign((0, codegen_1._)(_templateObject9$8 || (_templateObject9$8 = _taggedTemplateLiteral(["", ".instancePath"])), err), (0, codegen_1.strConcat)(names_1["default"].instancePath, it.errorPath));
        });
        gen.assign((0, codegen_1._)(_templateObject10$7 || (_templateObject10$7 = _taggedTemplateLiteral(["", ".schemaPath"])), err), (0, codegen_1.str)(_templateObject11$6 || (_templateObject11$6 = _taggedTemplateLiteral(["", "/", ""])), it.errSchemaPath, keyword));
        if (it.opts.verbose) {
          gen.assign((0, codegen_1._)(_templateObject12$6 || (_templateObject12$6 = _taggedTemplateLiteral(["", ".schema"])), err), schemaValue);
          gen.assign((0, codegen_1._)(_templateObject13$5 || (_templateObject13$5 = _taggedTemplateLiteral(["", ".data"])), err), data);
        }
      });
    }
    exports.extendErrors = extendErrors;
    function addError(gen, errObj) {
      var err = gen["const"]("err", errObj);
      gen["if"]((0, codegen_1._)(_templateObject14$5 || (_templateObject14$5 = _taggedTemplateLiteral(["", " === null"])), names_1["default"].vErrors), function () {
        return gen.assign(names_1["default"].vErrors, (0, codegen_1._)(_templateObject15$5 || (_templateObject15$5 = _taggedTemplateLiteral(["[", "]"])), err));
      }, (0, codegen_1._)(_templateObject16$4 || (_templateObject16$4 = _taggedTemplateLiteral(["", ".push(", ")"])), names_1["default"].vErrors, err));
      gen.code((0, codegen_1._)(_templateObject17$4 || (_templateObject17$4 = _taggedTemplateLiteral(["", "++"])), names_1["default"].errors));
    }
    function returnErrors(it, errs) {
      var gen = it.gen,
        validateName = it.validateName,
        schemaEnv = it.schemaEnv;
      if (schemaEnv.$async) {
        gen["throw"]((0, codegen_1._)(_templateObject18$2 || (_templateObject18$2 = _taggedTemplateLiteral(["new ", "(", ")"])), it.ValidationError, errs));
      } else {
        gen.assign((0, codegen_1._)(_templateObject19$2 || (_templateObject19$2 = _taggedTemplateLiteral(["", ".errors"])), validateName), errs);
        gen["return"](false);
      }
    }
    var E = {
      keyword: new codegen_1.Name("keyword"),
      schemaPath: new codegen_1.Name("schemaPath"),
      // also used in JTD errors
      params: new codegen_1.Name("params"),
      propertyName: new codegen_1.Name("propertyName"),
      message: new codegen_1.Name("message"),
      schema: new codegen_1.Name("schema"),
      parentSchema: new codegen_1.Name("parentSchema")
    };
    function errorObjectCode(cxt, error, errorPaths) {
      var createErrors = cxt.it.createErrors;
      if (createErrors === false) return (0, codegen_1._)(_templateObject20$2 || (_templateObject20$2 = _taggedTemplateLiteral(["{}"])));
      return errorObject(cxt, error, errorPaths);
    }
    function errorObject(cxt, error) {
      var errorPaths = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var gen = cxt.gen,
        it = cxt.it;
      var keyValues = [errorInstancePath(it, errorPaths), errorSchemaPath(cxt, errorPaths)];
      extraErrorProps(cxt, error, keyValues);
      return gen.object.apply(gen, keyValues);
    }
    function errorInstancePath(_ref4, _ref5) {
      var errorPath = _ref4.errorPath;
      var instancePath = _ref5.instancePath;
      var instPath = instancePath ? (0, codegen_1.str)(_templateObject21$2 || (_templateObject21$2 = _taggedTemplateLiteral(["", "", ""])), errorPath, (0, util_1.getErrorPath)(instancePath, util_1.Type.Str)) : errorPath;
      return [names_1["default"].instancePath, (0, codegen_1.strConcat)(names_1["default"].instancePath, instPath)];
    }
    function errorSchemaPath(_ref6, _ref7) {
      var keyword = _ref6.keyword,
        errSchemaPath = _ref6.it.errSchemaPath;
      var schemaPath = _ref7.schemaPath,
        parentSchema = _ref7.parentSchema;
      var schPath = parentSchema ? errSchemaPath : (0, codegen_1.str)(_templateObject22$2 || (_templateObject22$2 = _taggedTemplateLiteral(["", "/", ""])), errSchemaPath, keyword);
      if (schemaPath) {
        schPath = (0, codegen_1.str)(_templateObject23$2 || (_templateObject23$2 = _taggedTemplateLiteral(["", "", ""])), schPath, (0, util_1.getErrorPath)(schemaPath, util_1.Type.Str));
      }
      return [E.schemaPath, schPath];
    }
    function extraErrorProps(cxt, _ref8, keyValues) {
      var params = _ref8.params,
        message = _ref8.message;
      var keyword = cxt.keyword,
        data = cxt.data,
        schemaValue = cxt.schemaValue,
        it = cxt.it;
      var opts = it.opts,
        propertyName = it.propertyName,
        topSchemaRef = it.topSchemaRef,
        schemaPath = it.schemaPath;
      keyValues.push([E.keyword, keyword], [E.params, typeof params == "function" ? params(cxt) : params || (0, codegen_1._)(_templateObject24$2 || (_templateObject24$2 = _taggedTemplateLiteral(["{}"])))]);
      if (opts.messages) {
        keyValues.push([E.message, typeof message == "function" ? message(cxt) : message]);
      }
      if (opts.verbose) {
        keyValues.push([E.schema, schemaValue], [E.parentSchema, (0, codegen_1._)(_templateObject25$2 || (_templateObject25$2 = _taggedTemplateLiteral(["", "", ""])), topSchemaRef, schemaPath)], [names_1["default"].data, data]);
      }
      if (propertyName) keyValues.push([E.propertyName, propertyName]);
    }
  })(errors);
  return errors;
}

var _templateObject$w;
var hasRequiredBoolSchema;
function requireBoolSchema() {
  if (hasRequiredBoolSchema) return boolSchema;
  hasRequiredBoolSchema = 1;
  Object.defineProperty(boolSchema, "__esModule", {
    value: true
  });
  boolSchema.boolOrEmptySchema = boolSchema.topBoolOrEmptySchema = void 0;
  var errors_1 = requireErrors();
  var codegen_1 = requireCodegen();
  var names_1 = requireNames();
  var boolError = {
    message: "boolean schema is false"
  };
  function topBoolOrEmptySchema(it) {
    var gen = it.gen,
      schema = it.schema,
      validateName = it.validateName;
    if (schema === false) {
      falseSchemaError(it, false);
    } else if (_typeof(schema) == "object" && schema.$async === true) {
      gen["return"](names_1["default"].data);
    } else {
      gen.assign((0, codegen_1._)(_templateObject$w || (_templateObject$w = _taggedTemplateLiteral(["", ".errors"])), validateName), null);
      gen["return"](true);
    }
  }
  boolSchema.topBoolOrEmptySchema = topBoolOrEmptySchema;
  function boolOrEmptySchema(it, valid) {
    var gen = it.gen,
      schema = it.schema;
    if (schema === false) {
      gen["var"](valid, false); // TODO var
      falseSchemaError(it);
    } else {
      gen["var"](valid, true); // TODO var
    }
  }
  boolSchema.boolOrEmptySchema = boolOrEmptySchema;
  function falseSchemaError(it, overrideAllErrors) {
    var gen = it.gen,
      data = it.data;
    // TODO maybe some other interface should be used for non-keyword validation errors...
    var cxt = {
      gen: gen,
      keyword: "false schema",
      data: data,
      schema: false,
      schemaCode: false,
      schemaValue: false,
      params: {},
      it: it
    };
    (0, errors_1.reportError)(cxt, boolError, undefined, overrideAllErrors);
  }
  return boolSchema;
}

var dataType = {};

var rules = {};

var hasRequiredRules;
function requireRules() {
  if (hasRequiredRules) return rules;
  hasRequiredRules = 1;
  Object.defineProperty(rules, "__esModule", {
    value: true
  });
  rules.getRules = rules.isJSONType = void 0;
  var _jsonTypes = ["string", "number", "integer", "boolean", "null", "object", "array"];
  var jsonTypes = new Set(_jsonTypes);
  function isJSONType(x) {
    return typeof x == "string" && jsonTypes.has(x);
  }
  rules.isJSONType = isJSONType;
  function getRules() {
    var groups = {
      number: {
        type: "number",
        rules: []
      },
      string: {
        type: "string",
        rules: []
      },
      array: {
        type: "array",
        rules: []
      },
      object: {
        type: "object",
        rules: []
      }
    };
    return {
      types: _objectSpread2(_objectSpread2({}, groups), {}, {
        integer: true,
        "boolean": true,
        "null": true
      }),
      rules: [{
        rules: []
      }, groups.number, groups.string, groups.array, groups.object],
      post: {
        rules: []
      },
      all: {},
      keywords: {}
    };
  }
  rules.getRules = getRules;
  return rules;
}

var applicability = {};

var hasRequiredApplicability;
function requireApplicability() {
  if (hasRequiredApplicability) return applicability;
  hasRequiredApplicability = 1;
  Object.defineProperty(applicability, "__esModule", {
    value: true
  });
  applicability.shouldUseRule = applicability.shouldUseGroup = applicability.schemaHasRulesForType = void 0;
  function schemaHasRulesForType(_ref, type) {
    var schema = _ref.schema,
      self = _ref.self;
    var group = self.RULES.types[type];
    return group && group !== true && shouldUseGroup(schema, group);
  }
  applicability.schemaHasRulesForType = schemaHasRulesForType;
  function shouldUseGroup(schema, group) {
    return group.rules.some(function (rule) {
      return shouldUseRule(schema, rule);
    });
  }
  applicability.shouldUseGroup = shouldUseGroup;
  function shouldUseRule(schema, rule) {
    var _a;
    return schema[rule.keyword] !== undefined || ((_a = rule.definition["implements"]) === null || _a === void 0 ? void 0 : _a.some(function (kwd) {
      return schema[kwd] !== undefined;
    }));
  }
  applicability.shouldUseRule = shouldUseRule;
  return applicability;
}

var _templateObject$v, _templateObject2$t, _templateObject3$o, _templateObject4$h, _templateObject5$d, _templateObject6$8, _templateObject7$8, _templateObject8$8, _templateObject9$7, _templateObject10$6, _templateObject11$5, _templateObject12$5, _templateObject13$4, _templateObject14$4, _templateObject15$4, _templateObject16$3, _templateObject17$3, _templateObject18$1, _templateObject19$1, _templateObject20$1, _templateObject21$1, _templateObject22$1, _templateObject23$1, _templateObject24$1, _templateObject25$1, _templateObject26$1, _templateObject27$1, _templateObject28$1, _templateObject29$1, _templateObject30$1, _templateObject31$1, _templateObject32$1, _templateObject33$1;
var hasRequiredDataType;
function requireDataType() {
  if (hasRequiredDataType) return dataType;
  hasRequiredDataType = 1;
  Object.defineProperty(dataType, "__esModule", {
    value: true
  });
  dataType.reportTypeError = dataType.checkDataTypes = dataType.checkDataType = dataType.coerceAndCheckDataType = dataType.getJSONTypes = dataType.getSchemaTypes = dataType.DataType = void 0;
  var rules_1 = requireRules();
  var applicability_1 = requireApplicability();
  var errors_1 = requireErrors();
  var codegen_1 = requireCodegen();
  var util_1 = requireUtil();
  var DataType;
  (function (DataType) {
    DataType[DataType["Correct"] = 0] = "Correct";
    DataType[DataType["Wrong"] = 1] = "Wrong";
  })(DataType || (dataType.DataType = DataType = {}));
  function getSchemaTypes(schema) {
    var types = getJSONTypes(schema.type);
    var hasNull = types.includes("null");
    if (hasNull) {
      if (schema.nullable === false) throw new Error("type: null contradicts nullable: false");
    } else {
      if (!types.length && schema.nullable !== undefined) {
        throw new Error('"nullable" cannot be used without "type"');
      }
      if (schema.nullable === true) types.push("null");
    }
    return types;
  }
  dataType.getSchemaTypes = getSchemaTypes;
  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
  function getJSONTypes(ts) {
    var types = Array.isArray(ts) ? ts : ts ? [ts] : [];
    if (types.every(rules_1.isJSONType)) return types;
    throw new Error("type must be JSONType or JSONType[]: " + types.join(","));
  }
  dataType.getJSONTypes = getJSONTypes;
  function coerceAndCheckDataType(it, types) {
    var gen = it.gen,
      data = it.data,
      opts = it.opts;
    var coerceTo = coerceToTypes(types, opts.coerceTypes);
    var checkTypes = types.length > 0 && !(coerceTo.length === 0 && types.length === 1 && (0, applicability_1.schemaHasRulesForType)(it, types[0]));
    if (checkTypes) {
      var wrongType = checkDataTypes(types, data, opts.strictNumbers, DataType.Wrong);
      gen["if"](wrongType, function () {
        if (coerceTo.length) coerceData(it, types, coerceTo);else reportTypeError(it);
      });
    }
    return checkTypes;
  }
  dataType.coerceAndCheckDataType = coerceAndCheckDataType;
  var COERCIBLE = new Set(["string", "number", "integer", "boolean", "null"]);
  function coerceToTypes(types, coerceTypes) {
    return coerceTypes ? types.filter(function (t) {
      return COERCIBLE.has(t) || coerceTypes === "array" && t === "array";
    }) : [];
  }
  function coerceData(it, types, coerceTo) {
    var gen = it.gen,
      data = it.data,
      opts = it.opts;
    var dataType = gen["let"]("dataType", (0, codegen_1._)(_templateObject$v || (_templateObject$v = _taggedTemplateLiteral(["typeof ", ""])), data));
    var coerced = gen["let"]("coerced", (0, codegen_1._)(_templateObject2$t || (_templateObject2$t = _taggedTemplateLiteral(["undefined"]))));
    if (opts.coerceTypes === "array") {
      gen["if"]((0, codegen_1._)(_templateObject3$o || (_templateObject3$o = _taggedTemplateLiteral(["", " == 'object' && Array.isArray(", ") && ", ".length == 1"])), dataType, data, data), function () {
        return gen.assign(data, (0, codegen_1._)(_templateObject4$h || (_templateObject4$h = _taggedTemplateLiteral(["", "[0]"])), data)).assign(dataType, (0, codegen_1._)(_templateObject5$d || (_templateObject5$d = _taggedTemplateLiteral(["typeof ", ""])), data))["if"](checkDataTypes(types, data, opts.strictNumbers), function () {
          return gen.assign(coerced, data);
        });
      });
    }
    gen["if"]((0, codegen_1._)(_templateObject6$8 || (_templateObject6$8 = _taggedTemplateLiteral(["", " !== undefined"])), coerced));
    var _iterator = _createForOfIteratorHelper(coerceTo),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var t = _step.value;
        if (COERCIBLE.has(t) || t === "array" && opts.coerceTypes === "array") {
          coerceSpecificType(t);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    gen["else"]();
    reportTypeError(it);
    gen.endIf();
    gen["if"]((0, codegen_1._)(_templateObject7$8 || (_templateObject7$8 = _taggedTemplateLiteral(["", " !== undefined"])), coerced), function () {
      gen.assign(data, coerced);
      assignParentData(it, coerced);
    });
    function coerceSpecificType(t) {
      switch (t) {
        case "string":
          gen.elseIf((0, codegen_1._)(_templateObject8$8 || (_templateObject8$8 = _taggedTemplateLiteral(["", " == \"number\" || ", " == \"boolean\""])), dataType, dataType)).assign(coerced, (0, codegen_1._)(_templateObject9$7 || (_templateObject9$7 = _taggedTemplateLiteral(["\"\" + ", ""])), data)).elseIf((0, codegen_1._)(_templateObject10$6 || (_templateObject10$6 = _taggedTemplateLiteral(["", " === null"])), data)).assign(coerced, (0, codegen_1._)(_templateObject11$5 || (_templateObject11$5 = _taggedTemplateLiteral(["\"\""]))));
          return;
        case "number":
          gen.elseIf((0, codegen_1._)(_templateObject12$5 || (_templateObject12$5 = _taggedTemplateLiteral(["", " == \"boolean\" || ", " === null\n              || (", " == \"string\" && ", " && ", " == +", ")"])), dataType, data, dataType, data, data, data)).assign(coerced, (0, codegen_1._)(_templateObject13$4 || (_templateObject13$4 = _taggedTemplateLiteral(["+", ""])), data));
          return;
        case "integer":
          gen.elseIf((0, codegen_1._)(_templateObject14$4 || (_templateObject14$4 = _taggedTemplateLiteral(["", " === \"boolean\" || ", " === null\n              || (", " === \"string\" && ", " && ", " == +", " && !(", " % 1))"])), dataType, data, dataType, data, data, data, data)).assign(coerced, (0, codegen_1._)(_templateObject15$4 || (_templateObject15$4 = _taggedTemplateLiteral(["+", ""])), data));
          return;
        case "boolean":
          gen.elseIf((0, codegen_1._)(_templateObject16$3 || (_templateObject16$3 = _taggedTemplateLiteral(["", " === \"false\" || ", " === 0 || ", " === null"])), data, data, data)).assign(coerced, false).elseIf((0, codegen_1._)(_templateObject17$3 || (_templateObject17$3 = _taggedTemplateLiteral(["", " === \"true\" || ", " === 1"])), data, data)).assign(coerced, true);
          return;
        case "null":
          gen.elseIf((0, codegen_1._)(_templateObject18$1 || (_templateObject18$1 = _taggedTemplateLiteral(["", " === \"\" || ", " === 0 || ", " === false"])), data, data, data));
          gen.assign(coerced, null);
          return;
        case "array":
          gen.elseIf((0, codegen_1._)(_templateObject19$1 || (_templateObject19$1 = _taggedTemplateLiteral(["", " === \"string\" || ", " === \"number\"\n              || ", " === \"boolean\" || ", " === null"])), dataType, dataType, dataType, data)).assign(coerced, (0, codegen_1._)(_templateObject20$1 || (_templateObject20$1 = _taggedTemplateLiteral(["[", "]"])), data));
      }
    }
  }
  function assignParentData(_ref, expr) {
    var gen = _ref.gen,
      parentData = _ref.parentData,
      parentDataProperty = _ref.parentDataProperty;
    // TODO use gen.property
    gen["if"]((0, codegen_1._)(_templateObject21$1 || (_templateObject21$1 = _taggedTemplateLiteral(["", " !== undefined"])), parentData), function () {
      return gen.assign((0, codegen_1._)(_templateObject22$1 || (_templateObject22$1 = _taggedTemplateLiteral(["", "[", "]"])), parentData, parentDataProperty), expr);
    });
  }
  function checkDataType(dataType, data, strictNums) {
    var correct = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : DataType.Correct;
    var EQ = correct === DataType.Correct ? codegen_1.operators.EQ : codegen_1.operators.NEQ;
    var cond;
    switch (dataType) {
      case "null":
        return (0, codegen_1._)(_templateObject23$1 || (_templateObject23$1 = _taggedTemplateLiteral(["", " ", " null"])), data, EQ);
      case "array":
        cond = (0, codegen_1._)(_templateObject24$1 || (_templateObject24$1 = _taggedTemplateLiteral(["Array.isArray(", ")"])), data);
        break;
      case "object":
        cond = (0, codegen_1._)(_templateObject25$1 || (_templateObject25$1 = _taggedTemplateLiteral(["", " && typeof ", " == \"object\" && !Array.isArray(", ")"])), data, data, data);
        break;
      case "integer":
        cond = numCond((0, codegen_1._)(_templateObject26$1 || (_templateObject26$1 = _taggedTemplateLiteral(["!(", " % 1) && !isNaN(", ")"])), data, data));
        break;
      case "number":
        cond = numCond();
        break;
      default:
        return (0, codegen_1._)(_templateObject27$1 || (_templateObject27$1 = _taggedTemplateLiteral(["typeof ", " ", " ", ""])), data, EQ, dataType);
    }
    return correct === DataType.Correct ? cond : (0, codegen_1.not)(cond);
    function numCond() {
      var _cond = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : codegen_1.nil;
      return (0, codegen_1.and)((0, codegen_1._)(_templateObject28$1 || (_templateObject28$1 = _taggedTemplateLiteral(["typeof ", " == \"number\""])), data), _cond, strictNums ? (0, codegen_1._)(_templateObject29$1 || (_templateObject29$1 = _taggedTemplateLiteral(["isFinite(", ")"])), data) : codegen_1.nil);
    }
  }
  dataType.checkDataType = checkDataType;
  function checkDataTypes(dataTypes, data, strictNums, correct) {
    if (dataTypes.length === 1) {
      return checkDataType(dataTypes[0], data, strictNums, correct);
    }
    var cond;
    var types = (0, util_1.toHash)(dataTypes);
    if (types.array && types.object) {
      var notObj = (0, codegen_1._)(_templateObject30$1 || (_templateObject30$1 = _taggedTemplateLiteral(["typeof ", " != \"object\""])), data);
      cond = types["null"] ? notObj : (0, codegen_1._)(_templateObject31$1 || (_templateObject31$1 = _taggedTemplateLiteral(["!", " || ", ""])), data, notObj);
      delete types["null"];
      delete types.array;
      delete types.object;
    } else {
      cond = codegen_1.nil;
    }
    if (types.number) delete types.integer;
    for (var t in types) cond = (0, codegen_1.and)(cond, checkDataType(t, data, strictNums, correct));
    return cond;
  }
  dataType.checkDataTypes = checkDataTypes;
  var typeError = {
    message: function message(_ref2) {
      var schema = _ref2.schema;
      return "must be ".concat(schema);
    },
    params: function params(_ref3) {
      var schema = _ref3.schema,
        schemaValue = _ref3.schemaValue;
      return typeof schema == "string" ? (0, codegen_1._)(_templateObject32$1 || (_templateObject32$1 = _taggedTemplateLiteral(["{type: ", "}"])), schema) : (0, codegen_1._)(_templateObject33$1 || (_templateObject33$1 = _taggedTemplateLiteral(["{type: ", "}"])), schemaValue);
    }
  };
  function reportTypeError(it) {
    var cxt = getTypeErrorContext(it);
    (0, errors_1.reportError)(cxt, typeError);
  }
  dataType.reportTypeError = reportTypeError;
  function getTypeErrorContext(it) {
    var gen = it.gen,
      data = it.data,
      schema = it.schema;
    var schemaCode = (0, util_1.schemaRefOrVal)(it, schema, "type");
    return {
      gen: gen,
      keyword: "type",
      data: data,
      schema: schema.type,
      schemaCode: schemaCode,
      schemaValue: schemaCode,
      parentSchema: schema,
      params: {},
      it: it
    };
  }
  return dataType;
}

var defaults = {};

var _templateObject$u, _templateObject2$s, _templateObject3$n, _templateObject4$g;
var hasRequiredDefaults$1;
function requireDefaults$1() {
  if (hasRequiredDefaults$1) return defaults;
  hasRequiredDefaults$1 = 1;
  Object.defineProperty(defaults, "__esModule", {
    value: true
  });
  defaults.assignDefaults = void 0;
  var codegen_1 = requireCodegen();
  var util_1 = requireUtil();
  function assignDefaults(it, ty) {
    var _it$schema = it.schema,
      properties = _it$schema.properties,
      items = _it$schema.items;
    if (ty === "object" && properties) {
      for (var key in properties) {
        assignDefault(it, key, properties[key]["default"]);
      }
    } else if (ty === "array" && Array.isArray(items)) {
      items.forEach(function (sch, i) {
        return assignDefault(it, i, sch["default"]);
      });
    }
  }
  defaults.assignDefaults = assignDefaults;
  function assignDefault(it, prop, defaultValue) {
    var gen = it.gen,
      compositeRule = it.compositeRule,
      data = it.data,
      opts = it.opts;
    if (defaultValue === undefined) return;
    var childData = (0, codegen_1._)(_templateObject$u || (_templateObject$u = _taggedTemplateLiteral(["", "", ""])), data, (0, codegen_1.getProperty)(prop));
    if (compositeRule) {
      (0, util_1.checkStrictMode)(it, "default is ignored for: ".concat(childData));
      return;
    }
    var condition = (0, codegen_1._)(_templateObject2$s || (_templateObject2$s = _taggedTemplateLiteral(["", " === undefined"])), childData);
    if (opts.useDefaults === "empty") {
      condition = (0, codegen_1._)(_templateObject3$n || (_templateObject3$n = _taggedTemplateLiteral(["", " || ", " === null || ", " === \"\""])), condition, childData, childData);
    }
    // `${childData} === undefined` +
    // (opts.useDefaults === "empty" ? ` || ${childData} === null || ${childData} === ""` : "")
    gen["if"](condition, (0, codegen_1._)(_templateObject4$g || (_templateObject4$g = _taggedTemplateLiteral(["", " = ", ""])), childData, (0, codegen_1.stringify)(defaultValue)));
  }
  return defaults;
}

var keyword = {};

var code = {};

var _templateObject$t, _templateObject2$r, _templateObject3$m, _templateObject4$f, _templateObject5$c, _templateObject6$7, _templateObject7$7, _templateObject8$7, _templateObject9$6, _templateObject10$5, _templateObject11$4, _templateObject12$4, _templateObject13$3, _templateObject14$3, _templateObject15$3;
var hasRequiredCode;
function requireCode() {
  if (hasRequiredCode) return code;
  hasRequiredCode = 1;
  Object.defineProperty(code, "__esModule", {
    value: true
  });
  code.validateUnion = code.validateArray = code.usePattern = code.callValidateCode = code.schemaProperties = code.allSchemaProperties = code.noPropertyInData = code.propertyInData = code.isOwnProperty = code.hasPropFunc = code.reportMissingProp = code.checkMissingProp = code.checkReportMissingProp = void 0;
  var codegen_1 = requireCodegen();
  var util_1 = requireUtil();
  var names_1 = requireNames();
  var util_2 = requireUtil();
  function checkReportMissingProp(cxt, prop) {
    var gen = cxt.gen,
      data = cxt.data,
      it = cxt.it;
    gen["if"](noPropertyInData(gen, data, prop, it.opts.ownProperties), function () {
      cxt.setParams({
        missingProperty: (0, codegen_1._)(_templateObject$t || (_templateObject$t = _taggedTemplateLiteral(["", ""])), prop)
      }, true);
      cxt.error();
    });
  }
  code.checkReportMissingProp = checkReportMissingProp;
  function checkMissingProp(_ref, properties, missing) {
    var gen = _ref.gen,
      data = _ref.data,
      opts = _ref.it.opts;
    return (codegen_1.or).apply(void 0, _toConsumableArray(properties.map(function (prop) {
      return (0, codegen_1.and)(noPropertyInData(gen, data, prop, opts.ownProperties), (0, codegen_1._)(_templateObject2$r || (_templateObject2$r = _taggedTemplateLiteral(["", " = ", ""])), missing, prop));
    })));
  }
  code.checkMissingProp = checkMissingProp;
  function reportMissingProp(cxt, missing) {
    cxt.setParams({
      missingProperty: missing
    }, true);
    cxt.error();
  }
  code.reportMissingProp = reportMissingProp;
  function hasPropFunc(gen) {
    return gen.scopeValue("func", {
      // eslint-disable-next-line @typescript-eslint/unbound-method
      ref: Object.prototype.hasOwnProperty,
      code: (0, codegen_1._)(_templateObject3$m || (_templateObject3$m = _taggedTemplateLiteral(["Object.prototype.hasOwnProperty"])))
    });
  }
  code.hasPropFunc = hasPropFunc;
  function isOwnProperty(gen, data, property) {
    return (0, codegen_1._)(_templateObject4$f || (_templateObject4$f = _taggedTemplateLiteral(["", ".call(", ", ", ")"])), hasPropFunc(gen), data, property);
  }
  code.isOwnProperty = isOwnProperty;
  function propertyInData(gen, data, property, ownProperties) {
    var cond = (0, codegen_1._)(_templateObject5$c || (_templateObject5$c = _taggedTemplateLiteral(["", "", " !== undefined"])), data, (0, codegen_1.getProperty)(property));
    return ownProperties ? (0, codegen_1._)(_templateObject6$7 || (_templateObject6$7 = _taggedTemplateLiteral(["", " && ", ""])), cond, isOwnProperty(gen, data, property)) : cond;
  }
  code.propertyInData = propertyInData;
  function noPropertyInData(gen, data, property, ownProperties) {
    var cond = (0, codegen_1._)(_templateObject7$7 || (_templateObject7$7 = _taggedTemplateLiteral(["", "", " === undefined"])), data, (0, codegen_1.getProperty)(property));
    return ownProperties ? (0, codegen_1.or)(cond, (0, codegen_1.not)(isOwnProperty(gen, data, property))) : cond;
  }
  code.noPropertyInData = noPropertyInData;
  function allSchemaProperties(schemaMap) {
    return schemaMap ? Object.keys(schemaMap).filter(function (p) {
      return p !== "__proto__";
    }) : [];
  }
  code.allSchemaProperties = allSchemaProperties;
  function schemaProperties(it, schemaMap) {
    return allSchemaProperties(schemaMap).filter(function (p) {
      return !(0, util_1.alwaysValidSchema)(it, schemaMap[p]);
    });
  }
  code.schemaProperties = schemaProperties;
  function callValidateCode(_ref2, func, context, passSchema) {
    var schemaCode = _ref2.schemaCode,
      data = _ref2.data,
      _ref2$it = _ref2.it,
      gen = _ref2$it.gen,
      topSchemaRef = _ref2$it.topSchemaRef,
      schemaPath = _ref2$it.schemaPath,
      errorPath = _ref2$it.errorPath,
      it = _ref2.it;
    var dataAndSchema = passSchema ? (0, codegen_1._)(_templateObject8$7 || (_templateObject8$7 = _taggedTemplateLiteral(["", ", ", ", ", "", ""])), schemaCode, data, topSchemaRef, schemaPath) : data;
    var valCxt = [[names_1["default"].instancePath, (0, codegen_1.strConcat)(names_1["default"].instancePath, errorPath)], [names_1["default"].parentData, it.parentData], [names_1["default"].parentDataProperty, it.parentDataProperty], [names_1["default"].rootData, names_1["default"].rootData]];
    if (it.opts.dynamicRef) valCxt.push([names_1["default"].dynamicAnchors, names_1["default"].dynamicAnchors]);
    var args = (0, codegen_1._)(_templateObject9$6 || (_templateObject9$6 = _taggedTemplateLiteral(["", ", ", ""])), dataAndSchema, gen.object.apply(gen, valCxt));
    return context !== codegen_1.nil ? (0, codegen_1._)(_templateObject10$5 || (_templateObject10$5 = _taggedTemplateLiteral(["", ".call(", ", ", ")"])), func, context, args) : (0, codegen_1._)(_templateObject11$4 || (_templateObject11$4 = _taggedTemplateLiteral(["", "(", ")"])), func, args);
  }
  code.callValidateCode = callValidateCode;
  var newRegExp = (0, codegen_1._)(_templateObject12$4 || (_templateObject12$4 = _taggedTemplateLiteral(["new RegExp"])));
  function usePattern(_ref3, pattern) {
    var gen = _ref3.gen,
      opts = _ref3.it.opts;
    var u = opts.unicodeRegExp ? "u" : "";
    var regExp = opts.code.regExp;
    var rx = regExp(pattern, u);
    return gen.scopeValue("pattern", {
      key: rx.toString(),
      ref: rx,
      code: (0, codegen_1._)(_templateObject13$3 || (_templateObject13$3 = _taggedTemplateLiteral(["", "(", ", ", ")"])), regExp.code === "new RegExp" ? newRegExp : (0, util_2.useFunc)(gen, regExp), pattern, u)
    });
  }
  code.usePattern = usePattern;
  function validateArray(cxt) {
    var gen = cxt.gen,
      data = cxt.data,
      keyword = cxt.keyword,
      it = cxt.it;
    var valid = gen.name("valid");
    if (it.allErrors) {
      var validArr = gen["let"]("valid", true);
      validateItems(function () {
        return gen.assign(validArr, false);
      });
      return validArr;
    }
    gen["var"](valid, true);
    validateItems(function () {
      return gen["break"]();
    });
    return valid;
    function validateItems(notValid) {
      var len = gen["const"]("len", (0, codegen_1._)(_templateObject14$3 || (_templateObject14$3 = _taggedTemplateLiteral(["", ".length"])), data));
      gen.forRange("i", 0, len, function (i) {
        cxt.subschema({
          keyword: keyword,
          dataProp: i,
          dataPropType: util_1.Type.Num
        }, valid);
        gen["if"]((0, codegen_1.not)(valid), notValid);
      });
    }
  }
  code.validateArray = validateArray;
  function validateUnion(cxt) {
    var gen = cxt.gen,
      schema = cxt.schema,
      keyword = cxt.keyword,
      it = cxt.it;
    /* istanbul ignore if */
    if (!Array.isArray(schema)) throw new Error("ajv implementation error");
    var alwaysValid = schema.some(function (sch) {
      return (0, util_1.alwaysValidSchema)(it, sch);
    });
    if (alwaysValid && !it.opts.unevaluated) return;
    var valid = gen["let"]("valid", false);
    var schValid = gen.name("_valid");
    gen.block(function () {
      return schema.forEach(function (_sch, i) {
        var schCxt = cxt.subschema({
          keyword: keyword,
          schemaProp: i,
          compositeRule: true
        }, schValid);
        gen.assign(valid, (0, codegen_1._)(_templateObject15$3 || (_templateObject15$3 = _taggedTemplateLiteral(["", " || ", ""])), valid, schValid));
        var merged = cxt.mergeValidEvaluated(schCxt, schValid);
        // can short-circuit if `unevaluatedProperties/Items` not supported (opts.unevaluated !== true)
        // or if all properties and items were evaluated (it.props === true && it.items === true)
        if (!merged) gen["if"]((0, codegen_1.not)(valid));
      });
    });
    cxt.result(valid, function () {
      return cxt.reset();
    }, function () {
      return cxt.error(true);
    });
  }
  code.validateUnion = validateUnion;
  return code;
}

var _templateObject$s, _templateObject2$q, _templateObject3$l, _templateObject4$e, _templateObject5$b, _templateObject6$6, _templateObject7$6, _templateObject8$6, _templateObject9$5, _templateObject10$4;
var hasRequiredKeyword;
function requireKeyword() {
  if (hasRequiredKeyword) return keyword;
  hasRequiredKeyword = 1;
  Object.defineProperty(keyword, "__esModule", {
    value: true
  });
  keyword.validateKeywordUsage = keyword.validSchemaType = keyword.funcKeywordCode = keyword.macroKeywordCode = void 0;
  var codegen_1 = requireCodegen();
  var names_1 = requireNames();
  var code_1 = requireCode();
  var errors_1 = requireErrors();
  function macroKeywordCode(cxt, def) {
    var gen = cxt.gen,
      keyword = cxt.keyword,
      schema = cxt.schema,
      parentSchema = cxt.parentSchema,
      it = cxt.it;
    var macroSchema = def.macro.call(it.self, schema, parentSchema, it);
    var schemaRef = useKeyword(gen, keyword, macroSchema);
    if (it.opts.validateSchema !== false) it.self.validateSchema(macroSchema, true);
    var valid = gen.name("valid");
    cxt.subschema({
      schema: macroSchema,
      schemaPath: codegen_1.nil,
      errSchemaPath: "".concat(it.errSchemaPath, "/").concat(keyword),
      topSchemaRef: schemaRef,
      compositeRule: true
    }, valid);
    cxt.pass(valid, function () {
      return cxt.error(true);
    });
  }
  keyword.macroKeywordCode = macroKeywordCode;
  function funcKeywordCode(cxt, def) {
    var _a;
    var gen = cxt.gen,
      keyword = cxt.keyword,
      schema = cxt.schema,
      parentSchema = cxt.parentSchema,
      $data = cxt.$data,
      it = cxt.it;
    checkAsyncKeyword(it, def);
    var validate = !$data && def.compile ? def.compile.call(it.self, schema, parentSchema, it) : def.validate;
    var validateRef = useKeyword(gen, keyword, validate);
    var valid = gen["let"]("valid");
    cxt.block$data(valid, validateKeyword);
    cxt.ok((_a = def.valid) !== null && _a !== void 0 ? _a : valid);
    function validateKeyword() {
      if (def.errors === false) {
        assignValid();
        if (def.modifying) modifyData(cxt);
        reportErrs(function () {
          return cxt.error();
        });
      } else {
        var ruleErrs = def.async ? validateAsync() : validateSync();
        if (def.modifying) modifyData(cxt);
        reportErrs(function () {
          return addErrs(cxt, ruleErrs);
        });
      }
    }
    function validateAsync() {
      var ruleErrs = gen["let"]("ruleErrs", null);
      gen["try"](function () {
        return assignValid((0, codegen_1._)(_templateObject$s || (_templateObject$s = _taggedTemplateLiteral(["await "]))));
      }, function (e) {
        return gen.assign(valid, false)["if"]((0, codegen_1._)(_templateObject2$q || (_templateObject2$q = _taggedTemplateLiteral(["", " instanceof ", ""])), e, it.ValidationError), function () {
          return gen.assign(ruleErrs, (0, codegen_1._)(_templateObject3$l || (_templateObject3$l = _taggedTemplateLiteral(["", ".errors"])), e));
        }, function () {
          return gen["throw"](e);
        });
      });
      return ruleErrs;
    }
    function validateSync() {
      var validateErrs = (0, codegen_1._)(_templateObject4$e || (_templateObject4$e = _taggedTemplateLiteral(["", ".errors"])), validateRef);
      gen.assign(validateErrs, null);
      assignValid(codegen_1.nil);
      return validateErrs;
    }
    function assignValid() {
      var _await = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : def.async ? (0, codegen_1._)(_templateObject5$b || (_templateObject5$b = _taggedTemplateLiteral(["await "]))) : codegen_1.nil;
      var passCxt = it.opts.passContext ? names_1["default"]["this"] : names_1["default"].self;
      var passSchema = !("compile" in def && !$data || def.schema === false);
      gen.assign(valid, (0, codegen_1._)(_templateObject6$6 || (_templateObject6$6 = _taggedTemplateLiteral(["", "", ""])), _await, (0, code_1.callValidateCode)(cxt, validateRef, passCxt, passSchema)), def.modifying);
    }
    function reportErrs(errors) {
      var _a;
      gen["if"]((0, codegen_1.not)((_a = def.valid) !== null && _a !== void 0 ? _a : valid), errors);
    }
  }
  keyword.funcKeywordCode = funcKeywordCode;
  function modifyData(cxt) {
    var gen = cxt.gen,
      data = cxt.data,
      it = cxt.it;
    gen["if"](it.parentData, function () {
      return gen.assign(data, (0, codegen_1._)(_templateObject7$6 || (_templateObject7$6 = _taggedTemplateLiteral(["", "[", "]"])), it.parentData, it.parentDataProperty));
    });
  }
  function addErrs(cxt, errs) {
    var gen = cxt.gen;
    gen["if"]((0, codegen_1._)(_templateObject8$6 || (_templateObject8$6 = _taggedTemplateLiteral(["Array.isArray(", ")"])), errs), function () {
      gen.assign(names_1["default"].vErrors, (0, codegen_1._)(_templateObject9$5 || (_templateObject9$5 = _taggedTemplateLiteral(["", " === null ? ", " : ", ".concat(", ")"])), names_1["default"].vErrors, errs, names_1["default"].vErrors, errs)).assign(names_1["default"].errors, (0, codegen_1._)(_templateObject10$4 || (_templateObject10$4 = _taggedTemplateLiteral(["", ".length"])), names_1["default"].vErrors));
      (0, errors_1.extendErrors)(cxt);
    }, function () {
      return cxt.error();
    });
  }
  function checkAsyncKeyword(_ref, def) {
    var schemaEnv = _ref.schemaEnv;
    if (def.async && !schemaEnv.$async) throw new Error("async keyword in sync schema");
  }
  function useKeyword(gen, keyword, result) {
    if (result === undefined) throw new Error("keyword \"".concat(keyword, "\" failed to compile"));
    return gen.scopeValue("keyword", typeof result == "function" ? {
      ref: result
    } : {
      ref: result,
      code: (0, codegen_1.stringify)(result)
    });
  }
  function validSchemaType(schema, schemaType) {
    var allowUndefined = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    // TODO add tests
    return !schemaType.length || schemaType.some(function (st) {
      return st === "array" ? Array.isArray(schema) : st === "object" ? schema && _typeof(schema) == "object" && !Array.isArray(schema) : _typeof(schema) == st || allowUndefined && typeof schema == "undefined";
    });
  }
  keyword.validSchemaType = validSchemaType;
  function validateKeywordUsage(_ref2, def, keyword) {
    var schema = _ref2.schema,
      opts = _ref2.opts,
      self = _ref2.self,
      errSchemaPath = _ref2.errSchemaPath;
    /* istanbul ignore if */
    if (Array.isArray(def.keyword) ? !def.keyword.includes(keyword) : def.keyword !== keyword) {
      throw new Error("ajv implementation error");
    }
    var deps = def.dependencies;
    if (deps === null || deps === void 0 ? void 0 : deps.some(function (kwd) {
      return !Object.prototype.hasOwnProperty.call(schema, kwd);
    })) {
      throw new Error("parent schema must have dependencies of ".concat(keyword, ": ").concat(deps.join(",")));
    }
    if (def.validateSchema) {
      var valid = def.validateSchema(schema[keyword]);
      if (!valid) {
        var msg = "keyword \"".concat(keyword, "\" value is invalid at path \"").concat(errSchemaPath, "\": ") + self.errorsText(def.validateSchema.errors);
        if (opts.validateSchema === "log") self.logger.error(msg);else throw new Error(msg);
      }
    }
  }
  keyword.validateKeywordUsage = validateKeywordUsage;
  return keyword;
}

var subschema = {};

var _templateObject$r, _templateObject2$p, _templateObject3$k, _templateObject4$d, _templateObject5$a;
var hasRequiredSubschema;
function requireSubschema() {
  if (hasRequiredSubschema) return subschema;
  hasRequiredSubschema = 1;
  Object.defineProperty(subschema, "__esModule", {
    value: true
  });
  subschema.extendSubschemaMode = subschema.extendSubschemaData = subschema.getSubschema = void 0;
  var codegen_1 = requireCodegen();
  var util_1 = requireUtil();
  function getSubschema(it, _ref) {
    var keyword = _ref.keyword,
      schemaProp = _ref.schemaProp,
      schema = _ref.schema,
      schemaPath = _ref.schemaPath,
      errSchemaPath = _ref.errSchemaPath,
      topSchemaRef = _ref.topSchemaRef;
    if (keyword !== undefined && schema !== undefined) {
      throw new Error('both "keyword" and "schema" passed, only one allowed');
    }
    if (keyword !== undefined) {
      var sch = it.schema[keyword];
      return schemaProp === undefined ? {
        schema: sch,
        schemaPath: (0, codegen_1._)(_templateObject$r || (_templateObject$r = _taggedTemplateLiteral(["", "", ""])), it.schemaPath, (0, codegen_1.getProperty)(keyword)),
        errSchemaPath: "".concat(it.errSchemaPath, "/").concat(keyword)
      } : {
        schema: sch[schemaProp],
        schemaPath: (0, codegen_1._)(_templateObject2$p || (_templateObject2$p = _taggedTemplateLiteral(["", "", "", ""])), it.schemaPath, (0, codegen_1.getProperty)(keyword), (0, codegen_1.getProperty)(schemaProp)),
        errSchemaPath: "".concat(it.errSchemaPath, "/").concat(keyword, "/").concat((0, util_1.escapeFragment)(schemaProp))
      };
    }
    if (schema !== undefined) {
      if (schemaPath === undefined || errSchemaPath === undefined || topSchemaRef === undefined) {
        throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
      }
      return {
        schema: schema,
        schemaPath: schemaPath,
        topSchemaRef: topSchemaRef,
        errSchemaPath: errSchemaPath
      };
    }
    throw new Error('either "keyword" or "schema" must be passed');
  }
  subschema.getSubschema = getSubschema;
  function extendSubschemaData(subschema, it, _ref2) {
    var dataProp = _ref2.dataProp,
      dpType = _ref2.dataPropType,
      data = _ref2.data,
      dataTypes = _ref2.dataTypes,
      propertyName = _ref2.propertyName;
    if (data !== undefined && dataProp !== undefined) {
      throw new Error('both "data" and "dataProp" passed, only one allowed');
    }
    var gen = it.gen;
    if (dataProp !== undefined) {
      var errorPath = it.errorPath,
        dataPathArr = it.dataPathArr,
        opts = it.opts;
      var nextData = gen["let"]("data", (0, codegen_1._)(_templateObject3$k || (_templateObject3$k = _taggedTemplateLiteral(["", "", ""])), it.data, (0, codegen_1.getProperty)(dataProp)), true);
      dataContextProps(nextData);
      subschema.errorPath = (0, codegen_1.str)(_templateObject4$d || (_templateObject4$d = _taggedTemplateLiteral(["", "", ""])), errorPath, (0, util_1.getErrorPath)(dataProp, dpType, opts.jsPropertySyntax));
      subschema.parentDataProperty = (0, codegen_1._)(_templateObject5$a || (_templateObject5$a = _taggedTemplateLiteral(["", ""])), dataProp);
      subschema.dataPathArr = [].concat(_toConsumableArray(dataPathArr), [subschema.parentDataProperty]);
    }
    if (data !== undefined) {
      var _nextData2 = data instanceof codegen_1.Name ? data : gen["let"]("data", data, true); // replaceable if used once?
      dataContextProps(_nextData2);
      if (propertyName !== undefined) subschema.propertyName = propertyName;
      // TODO something is possibly wrong here with not changing parentDataProperty and not appending dataPathArr
    }
    if (dataTypes) subschema.dataTypes = dataTypes;
    function dataContextProps(_nextData) {
      subschema.data = _nextData;
      subschema.dataLevel = it.dataLevel + 1;
      subschema.dataTypes = [];
      it.definedProperties = new Set();
      subschema.parentData = it.data;
      subschema.dataNames = [].concat(_toConsumableArray(it.dataNames), [_nextData]);
    }
  }
  subschema.extendSubschemaData = extendSubschemaData;
  function extendSubschemaMode(subschema, _ref3) {
    var jtdDiscriminator = _ref3.jtdDiscriminator,
      jtdMetadata = _ref3.jtdMetadata,
      compositeRule = _ref3.compositeRule,
      createErrors = _ref3.createErrors,
      allErrors = _ref3.allErrors;
    if (compositeRule !== undefined) subschema.compositeRule = compositeRule;
    if (createErrors !== undefined) subschema.createErrors = createErrors;
    if (allErrors !== undefined) subschema.allErrors = allErrors;
    subschema.jtdDiscriminator = jtdDiscriminator; // not inherited
    subschema.jtdMetadata = jtdMetadata; // not inherited
  }
  subschema.extendSubschemaMode = extendSubschemaMode;
  return subschema;
}

var resolve = {};

var fastDeepEqual;
var hasRequiredFastDeepEqual;
function requireFastDeepEqual() {
  if (hasRequiredFastDeepEqual) return fastDeepEqual;
  hasRequiredFastDeepEqual = 1;

  // do not edit .js files directly - edit src/index.jst

  fastDeepEqual = function equal(a, b) {
    if (a === b) return true;
    if (a && b && _typeof(a) == 'object' && _typeof(b) == 'object') {
      if (a.constructor !== b.constructor) return false;
      var length, i, keys;
      if (Array.isArray(a)) {
        length = a.length;
        if (length != b.length) return false;
        for (i = length; i-- !== 0;) if (!equal(a[i], b[i])) return false;
        return true;
      }
      if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
      if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
      if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();
      keys = Object.keys(a);
      length = keys.length;
      if (length !== Object.keys(b).length) return false;
      for (i = length; i-- !== 0;) if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
      for (i = length; i-- !== 0;) {
        var key = keys[i];
        if (!equal(a[key], b[key])) return false;
      }
      return true;
    }

    // true if both NaN, false otherwise
    return a !== a && b !== b;
  };
  return fastDeepEqual;
}

var jsonSchemaTraverse = {exports: {}};

var hasRequiredJsonSchemaTraverse;
function requireJsonSchemaTraverse() {
  if (hasRequiredJsonSchemaTraverse) return jsonSchemaTraverse.exports;
  hasRequiredJsonSchemaTraverse = 1;
  var traverse = jsonSchemaTraverse.exports = function (schema, opts, cb) {
    // Legacy support for v0.3.1 and earlier.
    if (typeof opts == 'function') {
      cb = opts;
      opts = {};
    }
    cb = opts.cb || cb;
    var pre = typeof cb == 'function' ? cb : cb.pre || function () {};
    var post = cb.post || function () {};
    _traverse(opts, pre, post, schema, '', schema);
  };
  traverse.keywords = {
    additionalItems: true,
    items: true,
    contains: true,
    additionalProperties: true,
    propertyNames: true,
    not: true,
    "if": true,
    then: true,
    "else": true
  };
  traverse.arrayKeywords = {
    items: true,
    allOf: true,
    anyOf: true,
    oneOf: true
  };
  traverse.propsKeywords = {
    $defs: true,
    definitions: true,
    properties: true,
    patternProperties: true,
    dependencies: true
  };
  traverse.skipKeywords = {
    "default": true,
    "enum": true,
    "const": true,
    required: true,
    maximum: true,
    minimum: true,
    exclusiveMaximum: true,
    exclusiveMinimum: true,
    multipleOf: true,
    maxLength: true,
    minLength: true,
    pattern: true,
    format: true,
    maxItems: true,
    minItems: true,
    uniqueItems: true,
    maxProperties: true,
    minProperties: true
  };
  function _traverse(opts, pre, post, schema, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex) {
    if (schema && _typeof(schema) == 'object' && !Array.isArray(schema)) {
      pre(schema, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex);
      for (var key in schema) {
        var sch = schema[key];
        if (Array.isArray(sch)) {
          if (key in traverse.arrayKeywords) {
            for (var i = 0; i < sch.length; i++) _traverse(opts, pre, post, sch[i], jsonPtr + '/' + key + '/' + i, rootSchema, jsonPtr, key, schema, i);
          }
        } else if (key in traverse.propsKeywords) {
          if (sch && _typeof(sch) == 'object') {
            for (var prop in sch) _traverse(opts, pre, post, sch[prop], jsonPtr + '/' + key + '/' + escapeJsonPtr(prop), rootSchema, jsonPtr, key, schema, prop);
          }
        } else if (key in traverse.keywords || opts.allKeys && !(key in traverse.skipKeywords)) {
          _traverse(opts, pre, post, sch, jsonPtr + '/' + key, rootSchema, jsonPtr, key, schema);
        }
      }
      post(schema, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex);
    }
  }
  function escapeJsonPtr(str) {
    return str.replace(/~/g, '~0').replace(/\//g, '~1');
  }
  return jsonSchemaTraverse.exports;
}

var hasRequiredResolve;
function requireResolve() {
  if (hasRequiredResolve) return resolve;
  hasRequiredResolve = 1;
  Object.defineProperty(resolve, "__esModule", {
    value: true
  });
  resolve.getSchemaRefs = resolve.resolveUrl = resolve.normalizeId = resolve._getFullPath = resolve.getFullPath = resolve.inlineRef = void 0;
  var util_1 = requireUtil();
  var equal = requireFastDeepEqual();
  var traverse = requireJsonSchemaTraverse();
  // TODO refactor to use keyword definitions
  var SIMPLE_INLINED = new Set(["type", "format", "pattern", "maxLength", "minLength", "maxProperties", "minProperties", "maxItems", "minItems", "maximum", "minimum", "uniqueItems", "multipleOf", "required", "enum", "const"]);
  function inlineRef(schema) {
    var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    if (typeof schema == "boolean") return true;
    if (limit === true) return !hasRef(schema);
    if (!limit) return false;
    return countKeys(schema) <= limit;
  }
  resolve.inlineRef = inlineRef;
  var REF_KEYWORDS = new Set(["$ref", "$recursiveRef", "$recursiveAnchor", "$dynamicRef", "$dynamicAnchor"]);
  function hasRef(schema) {
    for (var key in schema) {
      if (REF_KEYWORDS.has(key)) return true;
      var sch = schema[key];
      if (Array.isArray(sch) && sch.some(hasRef)) return true;
      if (_typeof(sch) == "object" && hasRef(sch)) return true;
    }
    return false;
  }
  function countKeys(schema) {
    var count = 0;
    for (var key in schema) {
      if (key === "$ref") return Infinity;
      count++;
      if (SIMPLE_INLINED.has(key)) continue;
      if (_typeof(schema[key]) == "object") {
        (0, util_1.eachItem)(schema[key], function (sch) {
          return count += countKeys(sch);
        });
      }
      if (count === Infinity) return Infinity;
    }
    return count;
  }
  function getFullPath(resolver) {
    var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var normalize = arguments.length > 2 ? arguments[2] : undefined;
    if (normalize !== false) id = normalizeId(id);
    var p = resolver.parse(id);
    return _getFullPath(resolver, p);
  }
  resolve.getFullPath = getFullPath;
  function _getFullPath(resolver, p) {
    var serialized = resolver.serialize(p);
    return serialized.split("#")[0] + "#";
  }
  resolve._getFullPath = _getFullPath;
  var TRAILING_SLASH_HASH = /#\/?$/;
  function normalizeId(id) {
    return id ? id.replace(TRAILING_SLASH_HASH, "") : "";
  }
  resolve.normalizeId = normalizeId;
  function resolveUrl(resolver, baseId, id) {
    id = normalizeId(id);
    return resolver.resolve(baseId, id);
  }
  resolve.resolveUrl = resolveUrl;
  var ANCHOR = /^[a-z_][-a-z0-9._]*$/i;
  function getSchemaRefs(schema, baseId) {
    var _this = this;
    if (typeof schema == "boolean") return {};
    var _this$opts = this.opts,
      schemaId = _this$opts.schemaId,
      uriResolver = _this$opts.uriResolver;
    var schId = normalizeId(schema[schemaId] || baseId);
    var baseIds = {
      "": schId
    };
    var pathPrefix = getFullPath(uriResolver, schId, false);
    var localRefs = {};
    var schemaRefs = new Set();
    traverse(schema, {
      allKeys: true
    }, function (sch, jsonPtr, _, parentJsonPtr) {
      if (parentJsonPtr === undefined) return;
      var fullPath = pathPrefix + jsonPtr;
      var innerBaseId = baseIds[parentJsonPtr];
      if (typeof sch[schemaId] == "string") innerBaseId = addRef.call(_this, sch[schemaId]);
      addAnchor.call(_this, sch.$anchor);
      addAnchor.call(_this, sch.$dynamicAnchor);
      baseIds[jsonPtr] = innerBaseId;
      function addRef(ref) {
        // eslint-disable-next-line @typescript-eslint/unbound-method
        var _resolve = this.opts.uriResolver.resolve;
        ref = normalizeId(innerBaseId ? _resolve(innerBaseId, ref) : ref);
        if (schemaRefs.has(ref)) throw ambiguos(ref);
        schemaRefs.add(ref);
        var schOrRef = this.refs[ref];
        if (typeof schOrRef == "string") schOrRef = this.refs[schOrRef];
        if (_typeof(schOrRef) == "object") {
          checkAmbiguosRef(sch, schOrRef.schema, ref);
        } else if (ref !== normalizeId(fullPath)) {
          if (ref[0] === "#") {
            checkAmbiguosRef(sch, localRefs[ref], ref);
            localRefs[ref] = sch;
          } else {
            this.refs[ref] = fullPath;
          }
        }
        return ref;
      }
      function addAnchor(anchor) {
        if (typeof anchor == "string") {
          if (!ANCHOR.test(anchor)) throw new Error("invalid anchor \"".concat(anchor, "\""));
          addRef.call(this, "#".concat(anchor));
        }
      }
    });
    return localRefs;
    function checkAmbiguosRef(sch1, sch2, ref) {
      if (sch2 !== undefined && !equal(sch1, sch2)) throw ambiguos(ref);
    }
    function ambiguos(ref) {
      return new Error("reference \"".concat(ref, "\" resolves to more than one schema"));
    }
  }
  resolve.getSchemaRefs = getSchemaRefs;
  return resolve;
}

var _templateObject$q, _templateObject2$o, _templateObject3$j, _templateObject4$c, _templateObject5$9, _templateObject6$5, _templateObject7$5, _templateObject8$5, _templateObject9$4, _templateObject10$3, _templateObject11$3, _templateObject12$3, _templateObject13$2, _templateObject14$2, _templateObject15$2, _templateObject16$2, _templateObject17$2, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39;
var hasRequiredValidate;
function requireValidate() {
  if (hasRequiredValidate) return validate;
  hasRequiredValidate = 1;
  Object.defineProperty(validate, "__esModule", {
    value: true
  });
  validate.getData = validate.KeywordCxt = validate.validateFunctionCode = void 0;
  var boolSchema_1 = requireBoolSchema();
  var dataType_1 = requireDataType();
  var applicability_1 = requireApplicability();
  var dataType_2 = requireDataType();
  var defaults_1 = requireDefaults$1();
  var keyword_1 = requireKeyword();
  var subschema_1 = requireSubschema();
  var codegen_1 = requireCodegen();
  var names_1 = requireNames();
  var resolve_1 = requireResolve();
  var util_1 = requireUtil();
  var errors_1 = requireErrors();
  // schema compilation - generates validation function, subschemaCode (below) is used for subschemas
  function validateFunctionCode(it) {
    if (isSchemaObj(it)) {
      checkKeywords(it);
      if (schemaCxtHasRules(it)) {
        topSchemaObjCode(it);
        return;
      }
    }
    validateFunction(it, function () {
      return (0, boolSchema_1.topBoolOrEmptySchema)(it);
    });
  }
  validate.validateFunctionCode = validateFunctionCode;
  function validateFunction(_ref, body) {
    var gen = _ref.gen,
      validateName = _ref.validateName,
      schema = _ref.schema,
      schemaEnv = _ref.schemaEnv,
      opts = _ref.opts;
    if (opts.code.es5) {
      gen.func(validateName, (0, codegen_1._)(_templateObject$q || (_templateObject$q = _taggedTemplateLiteral(["", ", ", ""])), names_1["default"].data, names_1["default"].valCxt), schemaEnv.$async, function () {
        gen.code((0, codegen_1._)(_templateObject2$o || (_templateObject2$o = _taggedTemplateLiteral(["\"use strict\"; ", ""])), funcSourceUrl(schema, opts)));
        destructureValCxtES5(gen, opts);
        gen.code(body);
      });
    } else {
      gen.func(validateName, (0, codegen_1._)(_templateObject3$j || (_templateObject3$j = _taggedTemplateLiteral(["", ", ", ""])), names_1["default"].data, destructureValCxt(opts)), schemaEnv.$async, function () {
        return gen.code(funcSourceUrl(schema, opts)).code(body);
      });
    }
  }
  function destructureValCxt(opts) {
    return (0, codegen_1._)(_templateObject4$c || (_templateObject4$c = _taggedTemplateLiteral(["{", "=\"\", ", ", ", ", ", "=", "", "}={}"])), names_1["default"].instancePath, names_1["default"].parentData, names_1["default"].parentDataProperty, names_1["default"].rootData, names_1["default"].data, opts.dynamicRef ? (0, codegen_1._)(_templateObject5$9 || (_templateObject5$9 = _taggedTemplateLiteral([", ", "={}"])), names_1["default"].dynamicAnchors) : codegen_1.nil);
  }
  function destructureValCxtES5(gen, opts) {
    gen["if"](names_1["default"].valCxt, function () {
      gen["var"](names_1["default"].instancePath, (0, codegen_1._)(_templateObject6$5 || (_templateObject6$5 = _taggedTemplateLiteral(["", ".", ""])), names_1["default"].valCxt, names_1["default"].instancePath));
      gen["var"](names_1["default"].parentData, (0, codegen_1._)(_templateObject7$5 || (_templateObject7$5 = _taggedTemplateLiteral(["", ".", ""])), names_1["default"].valCxt, names_1["default"].parentData));
      gen["var"](names_1["default"].parentDataProperty, (0, codegen_1._)(_templateObject8$5 || (_templateObject8$5 = _taggedTemplateLiteral(["", ".", ""])), names_1["default"].valCxt, names_1["default"].parentDataProperty));
      gen["var"](names_1["default"].rootData, (0, codegen_1._)(_templateObject9$4 || (_templateObject9$4 = _taggedTemplateLiteral(["", ".", ""])), names_1["default"].valCxt, names_1["default"].rootData));
      if (opts.dynamicRef) gen["var"](names_1["default"].dynamicAnchors, (0, codegen_1._)(_templateObject10$3 || (_templateObject10$3 = _taggedTemplateLiteral(["", ".", ""])), names_1["default"].valCxt, names_1["default"].dynamicAnchors));
    }, function () {
      gen["var"](names_1["default"].instancePath, (0, codegen_1._)(_templateObject11$3 || (_templateObject11$3 = _taggedTemplateLiteral(["\"\""]))));
      gen["var"](names_1["default"].parentData, (0, codegen_1._)(_templateObject12$3 || (_templateObject12$3 = _taggedTemplateLiteral(["undefined"]))));
      gen["var"](names_1["default"].parentDataProperty, (0, codegen_1._)(_templateObject13$2 || (_templateObject13$2 = _taggedTemplateLiteral(["undefined"]))));
      gen["var"](names_1["default"].rootData, names_1["default"].data);
      if (opts.dynamicRef) gen["var"](names_1["default"].dynamicAnchors, (0, codegen_1._)(_templateObject14$2 || (_templateObject14$2 = _taggedTemplateLiteral(["{}"]))));
    });
  }
  function topSchemaObjCode(it) {
    var schema = it.schema,
      opts = it.opts,
      gen = it.gen;
    validateFunction(it, function () {
      if (opts.$comment && schema.$comment) commentKeyword(it);
      checkNoDefault(it);
      gen["let"](names_1["default"].vErrors, null);
      gen["let"](names_1["default"].errors, 0);
      if (opts.unevaluated) resetEvaluated(it);
      typeAndKeywords(it);
      returnResults(it);
    });
    return;
  }
  function resetEvaluated(it) {
    // TODO maybe some hook to execute it in the end to check whether props/items are Name, as in assignEvaluated
    var gen = it.gen,
      validateName = it.validateName;
    it.evaluated = gen["const"]("evaluated", (0, codegen_1._)(_templateObject15$2 || (_templateObject15$2 = _taggedTemplateLiteral(["", ".evaluated"])), validateName));
    gen["if"]((0, codegen_1._)(_templateObject16$2 || (_templateObject16$2 = _taggedTemplateLiteral(["", ".dynamicProps"])), it.evaluated), function () {
      return gen.assign((0, codegen_1._)(_templateObject17$2 || (_templateObject17$2 = _taggedTemplateLiteral(["", ".props"])), it.evaluated), (0, codegen_1._)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["undefined"]))));
    });
    gen["if"]((0, codegen_1._)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["", ".dynamicItems"])), it.evaluated), function () {
      return gen.assign((0, codegen_1._)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["", ".items"])), it.evaluated), (0, codegen_1._)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["undefined"]))));
    });
  }
  function funcSourceUrl(schema, opts) {
    var schId = _typeof(schema) == "object" && schema[opts.schemaId];
    return schId && (opts.code.source || opts.code.process) ? (0, codegen_1._)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["/*# sourceURL=", " */"])), schId) : codegen_1.nil;
  }
  // schema compilation - this function is used recursively to generate code for sub-schemas
  function subschemaCode(it, valid) {
    if (isSchemaObj(it)) {
      checkKeywords(it);
      if (schemaCxtHasRules(it)) {
        subSchemaObjCode(it, valid);
        return;
      }
    }
    (0, boolSchema_1.boolOrEmptySchema)(it, valid);
  }
  function schemaCxtHasRules(_ref2) {
    var schema = _ref2.schema,
      self = _ref2.self;
    if (typeof schema == "boolean") return !schema;
    for (var key in schema) if (self.RULES.all[key]) return true;
    return false;
  }
  function isSchemaObj(it) {
    return typeof it.schema != "boolean";
  }
  function subSchemaObjCode(it, valid) {
    var schema = it.schema,
      gen = it.gen,
      opts = it.opts;
    if (opts.$comment && schema.$comment) commentKeyword(it);
    updateContext(it);
    checkAsyncSchema(it);
    var errsCount = gen["const"]("_errs", names_1["default"].errors);
    typeAndKeywords(it, errsCount);
    // TODO var
    gen["var"](valid, (0, codegen_1._)(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["", " === ", ""])), errsCount, names_1["default"].errors));
  }
  function checkKeywords(it) {
    (0, util_1.checkUnknownRules)(it);
    checkRefsAndKeywords(it);
  }
  function typeAndKeywords(it, errsCount) {
    if (it.opts.jtd) return schemaKeywords(it, [], false, errsCount);
    var types = (0, dataType_1.getSchemaTypes)(it.schema);
    var checkedTypes = (0, dataType_1.coerceAndCheckDataType)(it, types);
    schemaKeywords(it, types, !checkedTypes, errsCount);
  }
  function checkRefsAndKeywords(it) {
    var schema = it.schema,
      errSchemaPath = it.errSchemaPath,
      opts = it.opts,
      self = it.self;
    if (schema.$ref && opts.ignoreKeywordsWithRef && (0, util_1.schemaHasRulesButRef)(schema, self.RULES)) {
      self.logger.warn("$ref: keywords ignored in schema at path \"".concat(errSchemaPath, "\""));
    }
  }
  function checkNoDefault(it) {
    var schema = it.schema,
      opts = it.opts;
    if (schema["default"] !== undefined && opts.useDefaults && opts.strictSchema) {
      (0, util_1.checkStrictMode)(it, "default is ignored in the schema root");
    }
  }
  function updateContext(it) {
    var schId = it.schema[it.opts.schemaId];
    if (schId) it.baseId = (0, resolve_1.resolveUrl)(it.opts.uriResolver, it.baseId, schId);
  }
  function checkAsyncSchema(it) {
    if (it.schema.$async && !it.schemaEnv.$async) throw new Error("async schema in sync schema");
  }
  function commentKeyword(_ref3) {
    var gen = _ref3.gen,
      schemaEnv = _ref3.schemaEnv,
      schema = _ref3.schema,
      errSchemaPath = _ref3.errSchemaPath,
      opts = _ref3.opts;
    var msg = schema.$comment;
    if (opts.$comment === true) {
      gen.code((0, codegen_1._)(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["", ".logger.log(", ")"])), names_1["default"].self, msg));
    } else if (typeof opts.$comment == "function") {
      var schemaPath = (0, codegen_1.str)(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["", "/$comment"])), errSchemaPath);
      var rootName = gen.scopeValue("root", {
        ref: schemaEnv.root
      });
      gen.code((0, codegen_1._)(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["", ".opts.$comment(", ", ", ", ", ".schema)"])), names_1["default"].self, msg, schemaPath, rootName));
    }
  }
  function returnResults(it) {
    var gen = it.gen,
      schemaEnv = it.schemaEnv,
      validateName = it.validateName,
      ValidationError = it.ValidationError,
      opts = it.opts;
    if (schemaEnv.$async) {
      // TODO assign unevaluated
      gen["if"]((0, codegen_1._)(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["", " === 0"])), names_1["default"].errors), function () {
        return gen["return"](names_1["default"].data);
      }, function () {
        return gen["throw"]((0, codegen_1._)(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["new ", "(", ")"])), ValidationError, names_1["default"].vErrors));
      });
    } else {
      gen.assign((0, codegen_1._)(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["", ".errors"])), validateName), names_1["default"].vErrors);
      if (opts.unevaluated) assignEvaluated(it);
      gen["return"]((0, codegen_1._)(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["", " === 0"])), names_1["default"].errors));
    }
  }
  function assignEvaluated(_ref4) {
    var gen = _ref4.gen,
      evaluated = _ref4.evaluated,
      props = _ref4.props,
      items = _ref4.items;
    if (props instanceof codegen_1.Name) gen.assign((0, codegen_1._)(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["", ".props"])), evaluated), props);
    if (items instanceof codegen_1.Name) gen.assign((0, codegen_1._)(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["", ".items"])), evaluated), items);
  }
  function schemaKeywords(it, types, typeErrors, errsCount) {
    var gen = it.gen,
      schema = it.schema,
      data = it.data,
      allErrors = it.allErrors,
      opts = it.opts,
      self = it.self;
    var RULES = self.RULES;
    if (schema.$ref && (opts.ignoreKeywordsWithRef || !(0, util_1.schemaHasRulesButRef)(schema, RULES))) {
      gen.block(function () {
        return keywordCode(it, "$ref", RULES.all.$ref.definition);
      }); // TODO typecast
      return;
    }
    if (!opts.jtd) checkStrictTypes(it, types);
    gen.block(function () {
      var _iterator = _createForOfIteratorHelper(RULES.rules),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var group = _step.value;
          groupKeywords(group);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      groupKeywords(RULES.post);
    });
    function groupKeywords(group) {
      if (!(0, applicability_1.shouldUseGroup)(schema, group)) return;
      if (group.type) {
        gen["if"]((0, dataType_2.checkDataType)(group.type, data, opts.strictNumbers));
        iterateKeywords(it, group);
        if (types.length === 1 && types[0] === group.type && typeErrors) {
          gen["else"]();
          (0, dataType_2.reportTypeError)(it);
        }
        gen.endIf();
      } else {
        iterateKeywords(it, group);
      }
      // TODO make it "ok" call?
      if (!allErrors) gen["if"]((0, codegen_1._)(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["", " === ", ""])), names_1["default"].errors, errsCount || 0));
    }
  }
  function iterateKeywords(it, group) {
    var gen = it.gen,
      schema = it.schema,
      useDefaults = it.opts.useDefaults;
    if (useDefaults) (0, defaults_1.assignDefaults)(it, group.type);
    gen.block(function () {
      var _iterator2 = _createForOfIteratorHelper(group.rules),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var rule = _step2.value;
          if ((0, applicability_1.shouldUseRule)(schema, rule)) {
            keywordCode(it, rule.keyword, rule.definition, group.type);
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    });
  }
  function checkStrictTypes(it, types) {
    if (it.schemaEnv.meta || !it.opts.strictTypes) return;
    checkContextTypes(it, types);
    if (!it.opts.allowUnionTypes) checkMultipleTypes(it, types);
    checkKeywordTypes(it, it.dataTypes);
  }
  function checkContextTypes(it, types) {
    if (!types.length) return;
    if (!it.dataTypes.length) {
      it.dataTypes = types;
      return;
    }
    types.forEach(function (t) {
      if (!includesType(it.dataTypes, t)) {
        strictTypesError(it, "type \"".concat(t, "\" not allowed by context \"").concat(it.dataTypes.join(","), "\""));
      }
    });
    narrowSchemaTypes(it, types);
  }
  function checkMultipleTypes(it, ts) {
    if (ts.length > 1 && !(ts.length === 2 && ts.includes("null"))) {
      strictTypesError(it, "use allowUnionTypes to allow union type keyword");
    }
  }
  function checkKeywordTypes(it, ts) {
    var rules = it.self.RULES.all;
    for (var keyword in rules) {
      var rule = rules[keyword];
      if (_typeof(rule) == "object" && (0, applicability_1.shouldUseRule)(it.schema, rule)) {
        var type = rule.definition.type;
        if (type.length && !type.some(function (t) {
          return hasApplicableType(ts, t);
        })) {
          strictTypesError(it, "missing type \"".concat(type.join(","), "\" for keyword \"").concat(keyword, "\""));
        }
      }
    }
  }
  function hasApplicableType(schTs, kwdT) {
    return schTs.includes(kwdT) || kwdT === "number" && schTs.includes("integer");
  }
  function includesType(ts, t) {
    return ts.includes(t) || t === "integer" && ts.includes("number");
  }
  function narrowSchemaTypes(it, withTypes) {
    var ts = [];
    var _iterator3 = _createForOfIteratorHelper(it.dataTypes),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var t = _step3.value;
        if (includesType(withTypes, t)) ts.push(t);else if (withTypes.includes("integer") && t === "number") ts.push("integer");
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    it.dataTypes = ts;
  }
  function strictTypesError(it, msg) {
    var schemaPath = it.schemaEnv.baseId + it.errSchemaPath;
    msg += " at \"".concat(schemaPath, "\" (strictTypes)");
    (0, util_1.checkStrictMode)(it, msg, it.opts.strictTypes);
  }
  var KeywordCxt = /*#__PURE__*/function () {
    function KeywordCxt(it, def, keyword) {
      _classCallCheck(this, KeywordCxt);
      (0, keyword_1.validateKeywordUsage)(it, def, keyword);
      this.gen = it.gen;
      this.allErrors = it.allErrors;
      this.keyword = keyword;
      this.data = it.data;
      this.schema = it.schema[keyword];
      this.$data = def.$data && it.opts.$data && this.schema && this.schema.$data;
      this.schemaValue = (0, util_1.schemaRefOrVal)(it, this.schema, keyword, this.$data);
      this.schemaType = def.schemaType;
      this.parentSchema = it.schema;
      this.params = {};
      this.it = it;
      this.def = def;
      if (this.$data) {
        this.schemaCode = it.gen["const"]("vSchema", getData(this.$data, it));
      } else {
        this.schemaCode = this.schemaValue;
        if (!(0, keyword_1.validSchemaType)(this.schema, def.schemaType, def.allowUndefined)) {
          throw new Error("".concat(keyword, " value must be ").concat(JSON.stringify(def.schemaType)));
        }
      }
      if ("code" in def ? def.trackErrors : def.errors !== false) {
        this.errsCount = it.gen["const"]("_errs", names_1["default"].errors);
      }
    }
    return _createClass(KeywordCxt, [{
      key: "result",
      value: function result(condition, successAction, failAction) {
        this.failResult((0, codegen_1.not)(condition), successAction, failAction);
      }
    }, {
      key: "failResult",
      value: function failResult(condition, successAction, failAction) {
        this.gen["if"](condition);
        if (failAction) failAction();else this.error();
        if (successAction) {
          this.gen["else"]();
          successAction();
          if (this.allErrors) this.gen.endIf();
        } else {
          if (this.allErrors) this.gen.endIf();else this.gen["else"]();
        }
      }
    }, {
      key: "pass",
      value: function pass(condition, failAction) {
        this.failResult((0, codegen_1.not)(condition), undefined, failAction);
      }
    }, {
      key: "fail",
      value: function fail(condition) {
        if (condition === undefined) {
          this.error();
          if (!this.allErrors) this.gen["if"](false); // this branch will be removed by gen.optimize
          return;
        }
        this.gen["if"](condition);
        this.error();
        if (this.allErrors) this.gen.endIf();else this.gen["else"]();
      }
    }, {
      key: "fail$data",
      value: function fail$data(condition) {
        if (!this.$data) return this.fail(condition);
        var schemaCode = this.schemaCode;
        this.fail((0, codegen_1._)(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["", " !== undefined && (", ")"])), schemaCode, (0, codegen_1.or)(this.invalid$data(), condition)));
      }
    }, {
      key: "error",
      value: function error(append, errorParams, errorPaths) {
        if (errorParams) {
          this.setParams(errorParams);
          this._error(append, errorPaths);
          this.setParams({});
          return;
        }
        this._error(append, errorPaths);
      }
    }, {
      key: "_error",
      value: function _error(append, errorPaths) {
        (append ? errors_1.reportExtraError : errors_1.reportError)(this, this.def.error, errorPaths);
      }
    }, {
      key: "$dataError",
      value: function $dataError() {
        (0, errors_1.reportError)(this, this.def.$dataError || errors_1.keyword$DataError);
      }
    }, {
      key: "reset",
      value: function reset() {
        if (this.errsCount === undefined) throw new Error('add "trackErrors" to keyword definition');
        (0, errors_1.resetErrorsCount)(this.gen, this.errsCount);
      }
    }, {
      key: "ok",
      value: function ok(cond) {
        if (!this.allErrors) this.gen["if"](cond);
      }
    }, {
      key: "setParams",
      value: function setParams(obj, assign) {
        if (assign) Object.assign(this.params, obj);else this.params = obj;
      }
    }, {
      key: "block$data",
      value: function block$data(valid, codeBlock) {
        var _this = this;
        var $dataValid = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : codegen_1.nil;
        this.gen.block(function () {
          _this.check$data(valid, $dataValid);
          codeBlock();
        });
      }
    }, {
      key: "check$data",
      value: function check$data() {
        var valid = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : codegen_1.nil;
        var $dataValid = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : codegen_1.nil;
        if (!this.$data) return;
        var gen = this.gen,
          schemaCode = this.schemaCode,
          schemaType = this.schemaType,
          def = this.def;
        gen["if"]((0, codegen_1.or)((0, codegen_1._)(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["", " === undefined"])), schemaCode), $dataValid));
        if (valid !== codegen_1.nil) gen.assign(valid, true);
        if (schemaType.length || def.validateSchema) {
          gen.elseIf(this.invalid$data());
          this.$dataError();
          if (valid !== codegen_1.nil) gen.assign(valid, false);
        }
        gen["else"]();
      }
    }, {
      key: "invalid$data",
      value: function invalid$data() {
        var gen = this.gen,
          schemaCode = this.schemaCode,
          schemaType = this.schemaType,
          def = this.def,
          it = this.it;
        return (0, codegen_1.or)(wrong$DataType(), invalid$DataSchema());
        function wrong$DataType() {
          if (schemaType.length) {
            /* istanbul ignore if */
            if (!(schemaCode instanceof codegen_1.Name)) throw new Error("ajv implementation error");
            var st = Array.isArray(schemaType) ? schemaType : [schemaType];
            return (0, codegen_1._)(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral(["", ""])), (0, dataType_2.checkDataTypes)(st, schemaCode, it.opts.strictNumbers, dataType_2.DataType.Wrong));
          }
          return codegen_1.nil;
        }
        function invalid$DataSchema() {
          if (def.validateSchema) {
            var validateSchemaRef = gen.scopeValue("validate$data", {
              ref: def.validateSchema
            }); // TODO value.code for standalone
            return (0, codegen_1._)(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral(["!", "(", ")"])), validateSchemaRef, schemaCode);
          }
          return codegen_1.nil;
        }
      }
    }, {
      key: "subschema",
      value: function subschema(appl, valid) {
        var subschema = (0, subschema_1.getSubschema)(this.it, appl);
        (0, subschema_1.extendSubschemaData)(subschema, this.it, appl);
        (0, subschema_1.extendSubschemaMode)(subschema, appl);
        var nextContext = _objectSpread2(_objectSpread2(_objectSpread2({}, this.it), subschema), {}, {
          items: undefined,
          props: undefined
        });
        subschemaCode(nextContext, valid);
        return nextContext;
      }
    }, {
      key: "mergeEvaluated",
      value: function mergeEvaluated(schemaCxt, toName) {
        var it = this.it,
          gen = this.gen;
        if (!it.opts.unevaluated) return;
        if (it.props !== true && schemaCxt.props !== undefined) {
          it.props = util_1.mergeEvaluated.props(gen, schemaCxt.props, it.props, toName);
        }
        if (it.items !== true && schemaCxt.items !== undefined) {
          it.items = util_1.mergeEvaluated.items(gen, schemaCxt.items, it.items, toName);
        }
      }
    }, {
      key: "mergeValidEvaluated",
      value: function mergeValidEvaluated(schemaCxt, valid) {
        var _this2 = this;
        var it = this.it,
          gen = this.gen;
        if (it.opts.unevaluated && (it.props !== true || it.items !== true)) {
          gen["if"](valid, function () {
            return _this2.mergeEvaluated(schemaCxt, codegen_1.Name);
          });
          return true;
        }
      }
    }]);
  }();
  validate.KeywordCxt = KeywordCxt;
  function keywordCode(it, keyword, def, ruleType) {
    var cxt = new KeywordCxt(it, def, keyword);
    if ("code" in def) {
      def.code(cxt, ruleType);
    } else if (cxt.$data && def.validate) {
      (0, keyword_1.funcKeywordCode)(cxt, def);
    } else if ("macro" in def) {
      (0, keyword_1.macroKeywordCode)(cxt, def);
    } else if (def.compile || def.validate) {
      (0, keyword_1.funcKeywordCode)(cxt, def);
    }
  }
  var JSON_POINTER = /^\/(?:[^~]|~0|~1)*$/;
  var RELATIVE_JSON_POINTER = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function getData($data, _ref5) {
    var dataLevel = _ref5.dataLevel,
      dataNames = _ref5.dataNames,
      dataPathArr = _ref5.dataPathArr;
    var jsonPointer;
    var data;
    if ($data === "") return names_1["default"].rootData;
    if ($data[0] === "/") {
      if (!JSON_POINTER.test($data)) throw new Error("Invalid JSON-pointer: ".concat($data));
      jsonPointer = $data;
      data = names_1["default"].rootData;
    } else {
      var matches = RELATIVE_JSON_POINTER.exec($data);
      if (!matches) throw new Error("Invalid JSON-pointer: ".concat($data));
      var up = +matches[1];
      jsonPointer = matches[2];
      if (jsonPointer === "#") {
        if (up >= dataLevel) throw new Error(errorMsg("property/index", up));
        return dataPathArr[dataLevel - up];
      }
      if (up > dataLevel) throw new Error(errorMsg("data", up));
      data = dataNames[dataLevel - up];
      if (!jsonPointer) return data;
    }
    var expr = data;
    var segments = jsonPointer.split("/");
    var _iterator4 = _createForOfIteratorHelper(segments),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var segment = _step4.value;
        if (segment) {
          data = (0, codegen_1._)(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral(["", "", ""])), data, (0, codegen_1.getProperty)((0, util_1.unescapeJsonPointer)(segment)));
          expr = (0, codegen_1._)(_templateObject39 || (_templateObject39 = _taggedTemplateLiteral(["", " && ", ""])), expr, data);
        }
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    return expr;
    function errorMsg(pointerType, up) {
      return "Cannot access ".concat(pointerType, " ").concat(up, " levels up, current level is ").concat(dataLevel);
    }
  }
  validate.getData = getData;
  return validate;
}

var validation_error = {};

var hasRequiredValidation_error;
function requireValidation_error() {
  if (hasRequiredValidation_error) return validation_error;
  hasRequiredValidation_error = 1;
  Object.defineProperty(validation_error, "__esModule", {
    value: true
  });
  var ValidationError = /*#__PURE__*/function (_Error) {
    function ValidationError(errors) {
      var _this;
      _classCallCheck(this, ValidationError);
      _this = _callSuper(this, ValidationError, ["validation failed"]);
      _this.errors = errors;
      _this.ajv = _this.validation = true;
      return _this;
    }
    _inherits(ValidationError, _Error);
    return _createClass(ValidationError);
  }(/*#__PURE__*/_wrapNativeSuper(Error));
  validation_error["default"] = ValidationError;
  return validation_error;
}

var ref_error = {};

var hasRequiredRef_error;
function requireRef_error() {
  if (hasRequiredRef_error) return ref_error;
  hasRequiredRef_error = 1;
  Object.defineProperty(ref_error, "__esModule", {
    value: true
  });
  var resolve_1 = requireResolve();
  var MissingRefError = /*#__PURE__*/function (_Error) {
    function MissingRefError(resolver, baseId, ref, msg) {
      var _this;
      _classCallCheck(this, MissingRefError);
      _this = _callSuper(this, MissingRefError, [msg || "can't resolve reference ".concat(ref, " from id ").concat(baseId)]);
      _this.missingRef = (0, resolve_1.resolveUrl)(resolver, baseId, ref);
      _this.missingSchema = (0, resolve_1.normalizeId)((0, resolve_1.getFullPath)(resolver, _this.missingRef));
      return _this;
    }
    _inherits(MissingRefError, _Error);
    return _createClass(MissingRefError);
  }(/*#__PURE__*/_wrapNativeSuper(Error));
  ref_error["default"] = MissingRefError;
  return ref_error;
}

var compile = {};

var _templateObject$p, _templateObject2$n;
var hasRequiredCompile;
function requireCompile() {
  if (hasRequiredCompile) return compile;
  hasRequiredCompile = 1;
  Object.defineProperty(compile, "__esModule", {
    value: true
  });
  compile.resolveSchema = compile.getCompilingSchema = compile.resolveRef = compile.compileSchema = compile.SchemaEnv = void 0;
  var codegen_1 = requireCodegen();
  var validation_error_1 = requireValidation_error();
  var names_1 = requireNames();
  var resolve_1 = requireResolve();
  var util_1 = requireUtil();
  var validate_1 = requireValidate();
  var SchemaEnv = /*#__PURE__*/_createClass(function SchemaEnv(env) {
    _classCallCheck(this, SchemaEnv);
    var _a;
    this.refs = {};
    this.dynamicAnchors = {};
    var schema;
    if (_typeof(env.schema) == "object") schema = env.schema;
    this.schema = env.schema;
    this.schemaId = env.schemaId;
    this.root = env.root || this;
    this.baseId = (_a = env.baseId) !== null && _a !== void 0 ? _a : (0, resolve_1.normalizeId)(schema === null || schema === void 0 ? void 0 : schema[env.schemaId || "$id"]);
    this.schemaPath = env.schemaPath;
    this.localRefs = env.localRefs;
    this.meta = env.meta;
    this.$async = schema === null || schema === void 0 ? void 0 : schema.$async;
    this.refs = {};
  });
  compile.SchemaEnv = SchemaEnv;
  // let codeSize = 0
  // let nodeCount = 0
  // Compiles schema in SchemaEnv
  function compileSchema(sch) {
    // TODO refactor - remove compilations
    var _sch = getCompilingSchema.call(this, sch);
    if (_sch) return _sch;
    var rootId = (0, resolve_1.getFullPath)(this.opts.uriResolver, sch.root.baseId); // TODO if getFullPath removed 1 tests fails
    var _this$opts$code = this.opts.code,
      es5 = _this$opts$code.es5,
      lines = _this$opts$code.lines;
    var ownProperties = this.opts.ownProperties;
    var gen = new codegen_1.CodeGen(this.scope, {
      es5: es5,
      lines: lines,
      ownProperties: ownProperties
    });
    var _ValidationError;
    if (sch.$async) {
      _ValidationError = gen.scopeValue("Error", {
        ref: validation_error_1["default"],
        code: (0, codegen_1._)(_templateObject$p || (_templateObject$p = _taggedTemplateLiteral(["require(\"ajv/dist/runtime/validation_error\").default"])))
      });
    }
    var validateName = gen.scopeName("validate");
    sch.validateName = validateName;
    var schemaCxt = {
      gen: gen,
      allErrors: this.opts.allErrors,
      data: names_1["default"].data,
      parentData: names_1["default"].parentData,
      parentDataProperty: names_1["default"].parentDataProperty,
      dataNames: [names_1["default"].data],
      dataPathArr: [codegen_1.nil],
      // TODO can its length be used as dataLevel if nil is removed?
      dataLevel: 0,
      dataTypes: [],
      definedProperties: new Set(),
      topSchemaRef: gen.scopeValue("schema", this.opts.code.source === true ? {
        ref: sch.schema,
        code: (0, codegen_1.stringify)(sch.schema)
      } : {
        ref: sch.schema
      }),
      validateName: validateName,
      ValidationError: _ValidationError,
      schema: sch.schema,
      schemaEnv: sch,
      rootId: rootId,
      baseId: sch.baseId || rootId,
      schemaPath: codegen_1.nil,
      errSchemaPath: sch.schemaPath || (this.opts.jtd ? "" : "#"),
      errorPath: (0, codegen_1._)(_templateObject2$n || (_templateObject2$n = _taggedTemplateLiteral(["\"\""]))),
      opts: this.opts,
      self: this
    };
    var sourceCode;
    try {
      this._compilations.add(sch);
      (0, validate_1.validateFunctionCode)(schemaCxt);
      gen.optimize(this.opts.code.optimize);
      // gen.optimize(1)
      var validateCode = gen.toString();
      sourceCode = "".concat(gen.scopeRefs(names_1["default"].scope), "return ").concat(validateCode);
      // console.log((codeSize += sourceCode.length), (nodeCount += gen.nodeCount))
      if (this.opts.code.process) sourceCode = this.opts.code.process(sourceCode, sch);
      // console.log("\n\n\n *** \n", sourceCode)
      var makeValidate = new Function("".concat(names_1["default"].self), "".concat(names_1["default"].scope), sourceCode);
      var validate = makeValidate(this, this.scope.get());
      this.scope.value(validateName, {
        ref: validate
      });
      validate.errors = null;
      validate.schema = sch.schema;
      validate.schemaEnv = sch;
      if (sch.$async) validate.$async = true;
      if (this.opts.code.source === true) {
        validate.source = {
          validateName: validateName,
          validateCode: validateCode,
          scopeValues: gen._values
        };
      }
      if (this.opts.unevaluated) {
        var props = schemaCxt.props,
          items = schemaCxt.items;
        validate.evaluated = {
          props: props instanceof codegen_1.Name ? undefined : props,
          items: items instanceof codegen_1.Name ? undefined : items,
          dynamicProps: props instanceof codegen_1.Name,
          dynamicItems: items instanceof codegen_1.Name
        };
        if (validate.source) validate.source.evaluated = (0, codegen_1.stringify)(validate.evaluated);
      }
      sch.validate = validate;
      return sch;
    } catch (e) {
      delete sch.validate;
      delete sch.validateName;
      if (sourceCode) this.logger.error("Error compiling schema, function code:", sourceCode);
      // console.log("\n\n\n *** \n", sourceCode, this.opts)
      throw e;
    } finally {
      this._compilations["delete"](sch);
    }
  }
  compile.compileSchema = compileSchema;
  function resolveRef(root, baseId, ref) {
    var _a;
    ref = (0, resolve_1.resolveUrl)(this.opts.uriResolver, baseId, ref);
    var schOrFunc = root.refs[ref];
    if (schOrFunc) return schOrFunc;
    var _sch = resolve.call(this, root, ref);
    if (_sch === undefined) {
      var schema = (_a = root.localRefs) === null || _a === void 0 ? void 0 : _a[ref]; // TODO maybe localRefs should hold SchemaEnv
      var schemaId = this.opts.schemaId;
      if (schema) _sch = new SchemaEnv({
        schema: schema,
        schemaId: schemaId,
        root: root,
        baseId: baseId
      });
    }
    if (_sch === undefined) return;
    return root.refs[ref] = inlineOrCompile.call(this, _sch);
  }
  compile.resolveRef = resolveRef;
  function inlineOrCompile(sch) {
    if ((0, resolve_1.inlineRef)(sch.schema, this.opts.inlineRefs)) return sch.schema;
    return sch.validate ? sch : compileSchema.call(this, sch);
  }
  // Index of schema compilation in the currently compiled list
  function getCompilingSchema(schEnv) {
    var _iterator = _createForOfIteratorHelper(this._compilations),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var sch = _step.value;
        if (sameSchemaEnv(sch, schEnv)) return sch;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  compile.getCompilingSchema = getCompilingSchema;
  function sameSchemaEnv(s1, s2) {
    return s1.schema === s2.schema && s1.root === s2.root && s1.baseId === s2.baseId;
  }
  // resolve and compile the references ($ref)
  // TODO returns AnySchemaObject (if the schema can be inlined) or validation function
  function resolve(root,
  // information about the root schema for the current schema
  ref // reference to resolve
  ) {
    var sch;
    while (typeof (sch = this.refs[ref]) == "string") ref = sch;
    return sch || this.schemas[ref] || resolveSchema.call(this, root, ref);
  }
  // Resolve schema, its root and baseId
  function resolveSchema(root,
  // root object with properties schema, refs TODO below SchemaEnv is assigned to it
  ref // reference to resolve
  ) {
    var p = this.opts.uriResolver.parse(ref);
    var refPath = (0, resolve_1._getFullPath)(this.opts.uriResolver, p);
    var baseId = (0, resolve_1.getFullPath)(this.opts.uriResolver, root.baseId, undefined);
    // TODO `Object.keys(root.schema).length > 0` should not be needed - but removing breaks 2 tests
    if (Object.keys(root.schema).length > 0 && refPath === baseId) {
      return getJsonPointer.call(this, p, root);
    }
    var id = (0, resolve_1.normalizeId)(refPath);
    var schOrRef = this.refs[id] || this.schemas[id];
    if (typeof schOrRef == "string") {
      var sch = resolveSchema.call(this, root, schOrRef);
      if (_typeof(sch === null || sch === void 0 ? void 0 : sch.schema) !== "object") return;
      return getJsonPointer.call(this, p, sch);
    }
    if (_typeof(schOrRef === null || schOrRef === void 0 ? void 0 : schOrRef.schema) !== "object") return;
    if (!schOrRef.validate) compileSchema.call(this, schOrRef);
    if (id === (0, resolve_1.normalizeId)(ref)) {
      var schema = schOrRef.schema;
      var schemaId = this.opts.schemaId;
      var schId = schema[schemaId];
      if (schId) baseId = (0, resolve_1.resolveUrl)(this.opts.uriResolver, baseId, schId);
      return new SchemaEnv({
        schema: schema,
        schemaId: schemaId,
        root: root,
        baseId: baseId
      });
    }
    return getJsonPointer.call(this, p, schOrRef);
  }
  compile.resolveSchema = resolveSchema;
  var PREVENT_SCOPE_CHANGE = new Set(["properties", "patternProperties", "enum", "dependencies", "definitions"]);
  function getJsonPointer(parsedRef, _ref) {
    var baseId = _ref.baseId,
      schema = _ref.schema,
      root = _ref.root;
    var _a;
    if (((_a = parsedRef.fragment) === null || _a === void 0 ? void 0 : _a[0]) !== "/") return;
    var _iterator2 = _createForOfIteratorHelper(parsedRef.fragment.slice(1).split("/")),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var part = _step2.value;
        if (typeof schema === "boolean") return;
        var partSchema = schema[(0, util_1.unescapeFragment)(part)];
        if (partSchema === undefined) return;
        schema = partSchema;
        // TODO PREVENT_SCOPE_CHANGE could be defined in keyword def?
        var schId = _typeof(schema) === "object" && schema[this.opts.schemaId];
        if (!PREVENT_SCOPE_CHANGE.has(part) && schId) {
          baseId = (0, resolve_1.resolveUrl)(this.opts.uriResolver, baseId, schId);
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    var env;
    if (typeof schema != "boolean" && schema.$ref && !(0, util_1.schemaHasRulesButRef)(schema, this.RULES)) {
      var $ref = (0, resolve_1.resolveUrl)(this.opts.uriResolver, baseId, schema.$ref);
      env = resolveSchema.call(this, root, $ref);
    }
    // even though resolution failed we need to return SchemaEnv to throw exception
    // so that compileAsync loads missing schema.
    var schemaId = this.opts.schemaId;
    env = env || new SchemaEnv({
      schema: schema,
      schemaId: schemaId,
      root: root,
      baseId: baseId
    });
    if (env.schema !== env.root.schema) return env;
    return undefined;
  }
  return compile;
}

var $id$1 = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#";
var description = "Meta-schema for $data reference (JSON AnySchema extension proposal)";
var type$1 = "object";
var required$1 = [
	"$data"
];
var properties$2 = {
	$data: {
		type: "string",
		anyOf: [
			{
				format: "relative-json-pointer"
			},
			{
				format: "json-pointer"
			}
		]
	}
};
var additionalProperties$1 = false;
var require$$9 = {
	$id: $id$1,
	description: description,
	type: type$1,
	required: required$1,
	properties: properties$2,
	additionalProperties: additionalProperties$1
};

var uri = {};

var fastUri = {exports: {}};

var scopedChars;
var hasRequiredScopedChars;
function requireScopedChars() {
  if (hasRequiredScopedChars) return scopedChars;
  hasRequiredScopedChars = 1;
  var HEX = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    a: 10,
    A: 10,
    b: 11,
    B: 11,
    c: 12,
    C: 12,
    d: 13,
    D: 13,
    e: 14,
    E: 14,
    f: 15,
    F: 15
  };
  scopedChars = {
    HEX: HEX
  };
  return scopedChars;
}

var utils$1;
var hasRequiredUtils$1;
function requireUtils$1() {
  if (hasRequiredUtils$1) return utils$1;
  hasRequiredUtils$1 = 1;
  var _require$$ = requireScopedChars(),
    HEX = _require$$.HEX;
  function normalizeIPv4(host) {
    if (findToken(host, '.') < 3) {
      return {
        host: host,
        isIPV4: false
      };
    }
    var matches = host.match(/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/) || [];
    var _matches = _slicedToArray(matches, 1),
      address = _matches[0];
    if (address) {
      return {
        host: stripLeadingZeros(address, '.'),
        isIPV4: true
      };
    } else {
      return {
        host: host,
        isIPV4: false
      };
    }
  }

  /**
   * @param {string[]} input
   * @param {boolean} [keepZero=false]
   * @returns {string|undefined}
   */
  function stringArrayToHexStripped(input) {
    var keepZero = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var acc = '';
    var strip = true;
    var _iterator = _createForOfIteratorHelper(input),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var c = _step.value;
        if (HEX[c] === undefined) return undefined;
        if (c !== '0' && strip === true) strip = false;
        if (!strip) acc += c;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (keepZero && acc.length === 0) acc = '0';
    return acc;
  }
  function getIPV6(input) {
    var tokenCount = 0;
    var output = {
      error: false,
      address: '',
      zone: ''
    };
    var address = [];
    var buffer = [];
    var isZone = false;
    var endipv6Encountered = false;
    var endIpv6 = false;
    function consume() {
      if (buffer.length) {
        if (isZone === false) {
          var hex = stringArrayToHexStripped(buffer);
          if (hex !== undefined) {
            address.push(hex);
          } else {
            output.error = true;
            return false;
          }
        }
        buffer.length = 0;
      }
      return true;
    }
    for (var i = 0; i < input.length; i++) {
      var cursor = input[i];
      if (cursor === '[' || cursor === ']') {
        continue;
      }
      if (cursor === ':') {
        if (endipv6Encountered === true) {
          endIpv6 = true;
        }
        if (!consume()) {
          break;
        }
        tokenCount++;
        address.push(':');
        if (tokenCount > 7) {
          // not valid
          output.error = true;
          break;
        }
        if (i - 1 >= 0 && input[i - 1] === ':') {
          endipv6Encountered = true;
        }
        continue;
      } else if (cursor === '%') {
        if (!consume()) {
          break;
        }
        // switch to zone detection
        isZone = true;
      } else {
        buffer.push(cursor);
        continue;
      }
    }
    if (buffer.length) {
      if (isZone) {
        output.zone = buffer.join('');
      } else if (endIpv6) {
        address.push(buffer.join(''));
      } else {
        address.push(stringArrayToHexStripped(buffer));
      }
    }
    output.address = address.join('');
    return output;
  }
  function normalizeIPv6(host) {
    if (findToken(host, ':') < 2) {
      return {
        host: host,
        isIPV6: false
      };
    }
    var ipv6 = getIPV6(host);
    if (!ipv6.error) {
      var newHost = ipv6.address;
      var escapedHost = ipv6.address;
      if (ipv6.zone) {
        newHost += '%' + ipv6.zone;
        escapedHost += '%25' + ipv6.zone;
      }
      return {
        host: newHost,
        escapedHost: escapedHost,
        isIPV6: true
      };
    } else {
      return {
        host: host,
        isIPV6: false
      };
    }
  }
  function stripLeadingZeros(str, token) {
    var out = '';
    var skip = true;
    var l = str.length;
    for (var i = 0; i < l; i++) {
      var c = str[i];
      if (c === '0' && skip) {
        if (i + 1 <= l && str[i + 1] === token || i + 1 === l) {
          out += c;
          skip = false;
        }
      } else {
        if (c === token) {
          skip = true;
        } else {
          skip = false;
        }
        out += c;
      }
    }
    return out;
  }
  function findToken(str, token) {
    var ind = 0;
    for (var i = 0; i < str.length; i++) {
      if (str[i] === token) ind++;
    }
    return ind;
  }
  var RDS1 = /^\.\.?\//;
  var RDS2 = /^\/\.(?:\/|$)/;
  var RDS3 = /^\/\.\.(?:\/|$)/;
  var RDS5 = /^\/?(?:(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])|\n)*?(?=\/|$)/;
  function removeDotSegments(input) {
    var output = [];
    while (input.length) {
      if (input.match(RDS1)) {
        input = input.replace(RDS1, '');
      } else if (input.match(RDS2)) {
        input = input.replace(RDS2, '/');
      } else if (input.match(RDS3)) {
        input = input.replace(RDS3, '/');
        output.pop();
      } else if (input === '.' || input === '..') {
        input = '';
      } else {
        var im = input.match(RDS5);
        if (im) {
          var s = im[0];
          input = input.slice(s.length);
          output.push(s);
        } else {
          throw new Error('Unexpected dot segment condition');
        }
      }
    }
    return output.join('');
  }
  function normalizeComponentEncoding(components, esc) {
    var func = esc !== true ? escape : unescape;
    if (components.scheme !== undefined) {
      components.scheme = func(components.scheme);
    }
    if (components.userinfo !== undefined) {
      components.userinfo = func(components.userinfo);
    }
    if (components.host !== undefined) {
      components.host = func(components.host);
    }
    if (components.path !== undefined) {
      components.path = func(components.path);
    }
    if (components.query !== undefined) {
      components.query = func(components.query);
    }
    if (components.fragment !== undefined) {
      components.fragment = func(components.fragment);
    }
    return components;
  }
  function recomposeAuthority(components, options) {
    var uriTokens = [];
    if (components.userinfo !== undefined) {
      uriTokens.push(components.userinfo);
      uriTokens.push('@');
    }
    if (components.host !== undefined) {
      var host = unescape(components.host);
      var ipV4res = normalizeIPv4(host);
      if (ipV4res.isIPV4) {
        host = ipV4res.host;
      } else {
        var ipV6res = normalizeIPv6(ipV4res.host);
        if (ipV6res.isIPV6 === true) {
          host = "[".concat(ipV6res.escapedHost, "]");
        } else {
          host = components.host;
        }
      }
      uriTokens.push(host);
    }
    if (typeof components.port === 'number' || typeof components.port === 'string') {
      uriTokens.push(':');
      uriTokens.push(String(components.port));
    }
    return uriTokens.length ? uriTokens.join('') : undefined;
  }
  utils$1 = {
    recomposeAuthority: recomposeAuthority,
    normalizeComponentEncoding: normalizeComponentEncoding,
    removeDotSegments: removeDotSegments,
    normalizeIPv4: normalizeIPv4,
    normalizeIPv6: normalizeIPv6,
    stringArrayToHexStripped: stringArrayToHexStripped
  };
  return utils$1;
}

var schemes;
var hasRequiredSchemes;
function requireSchemes() {
  if (hasRequiredSchemes) return schemes;
  hasRequiredSchemes = 1;
  var UUID_REG = /^[0-9a-f]{8}\b\x2D[0-9a-f]{4}\b\x2D[0-9a-f]{4}\b\x2D[0-9a-f]{4}\b\x2D[0-9a-f]{12}$/i;
  var URN_REG = /([0-9a-z\u017F\u212A][\x2D0-9a-z\u017F\u212A]{0,31}):((?:[!\$'-\.0-;=@-Z_a-z\u017F\u212A]|%[0-9a-f]{2})+)/i;
  function isSecure(wsComponents) {
    return typeof wsComponents.secure === 'boolean' ? wsComponents.secure : String(wsComponents.scheme).toLowerCase() === 'wss';
  }
  function httpParse(components) {
    if (!components.host) {
      components.error = components.error || 'HTTP URIs must have a host.';
    }
    return components;
  }
  function httpSerialize(components) {
    var secure = String(components.scheme).toLowerCase() === 'https';

    // normalize the default port
    if (components.port === (secure ? 443 : 80) || components.port === '') {
      components.port = undefined;
    }

    // normalize the empty path
    if (!components.path) {
      components.path = '/';
    }

    // NOTE: We do not parse query strings for HTTP URIs
    // as WWW Form Url Encoded query strings are part of the HTML4+ spec,
    // and not the HTTP spec.

    return components;
  }
  function wsParse(wsComponents) {
    // indicate if the secure flag is set
    wsComponents.secure = isSecure(wsComponents);

    // construct resouce name
    wsComponents.resourceName = (wsComponents.path || '/') + (wsComponents.query ? '?' + wsComponents.query : '');
    wsComponents.path = undefined;
    wsComponents.query = undefined;
    return wsComponents;
  }
  function wsSerialize(wsComponents) {
    // normalize the default port
    if (wsComponents.port === (isSecure(wsComponents) ? 443 : 80) || wsComponents.port === '') {
      wsComponents.port = undefined;
    }

    // ensure scheme matches secure flag
    if (typeof wsComponents.secure === 'boolean') {
      wsComponents.scheme = wsComponents.secure ? 'wss' : 'ws';
      wsComponents.secure = undefined;
    }

    // reconstruct path from resource name
    if (wsComponents.resourceName) {
      var _wsComponents$resourc = wsComponents.resourceName.split('?'),
        _wsComponents$resourc2 = _slicedToArray(_wsComponents$resourc, 2),
        path = _wsComponents$resourc2[0],
        query = _wsComponents$resourc2[1];
      wsComponents.path = path && path !== '/' ? path : undefined;
      wsComponents.query = query;
      wsComponents.resourceName = undefined;
    }

    // forbid fragment component
    wsComponents.fragment = undefined;
    return wsComponents;
  }
  function urnParse(urnComponents, options) {
    if (!urnComponents.path) {
      urnComponents.error = 'URN can not be parsed';
      return urnComponents;
    }
    var matches = urnComponents.path.match(URN_REG);
    if (matches) {
      var scheme = options.scheme || urnComponents.scheme || 'urn';
      urnComponents.nid = matches[1].toLowerCase();
      urnComponents.nss = matches[2];
      var urnScheme = "".concat(scheme, ":").concat(options.nid || urnComponents.nid);
      var schemeHandler = SCHEMES[urnScheme];
      urnComponents.path = undefined;
      if (schemeHandler) {
        urnComponents = schemeHandler.parse(urnComponents, options);
      }
    } else {
      urnComponents.error = urnComponents.error || 'URN can not be parsed.';
    }
    return urnComponents;
  }
  function urnSerialize(urnComponents, options) {
    var scheme = options.scheme || urnComponents.scheme || 'urn';
    var nid = urnComponents.nid.toLowerCase();
    var urnScheme = "".concat(scheme, ":").concat(options.nid || nid);
    var schemeHandler = SCHEMES[urnScheme];
    if (schemeHandler) {
      urnComponents = schemeHandler.serialize(urnComponents, options);
    }
    var uriComponents = urnComponents;
    var nss = urnComponents.nss;
    uriComponents.path = "".concat(nid || options.nid, ":").concat(nss);
    options.skipEscape = true;
    return uriComponents;
  }
  function urnuuidParse(urnComponents, options) {
    var uuidComponents = urnComponents;
    uuidComponents.uuid = uuidComponents.nss;
    uuidComponents.nss = undefined;
    if (!options.tolerant && (!uuidComponents.uuid || !UUID_REG.test(uuidComponents.uuid))) {
      uuidComponents.error = uuidComponents.error || 'UUID is not valid.';
    }
    return uuidComponents;
  }
  function urnuuidSerialize(uuidComponents) {
    var urnComponents = uuidComponents;
    // normalize UUID
    urnComponents.nss = (uuidComponents.uuid || '').toLowerCase();
    return urnComponents;
  }
  var http = {
    scheme: 'http',
    domainHost: true,
    parse: httpParse,
    serialize: httpSerialize
  };
  var https = {
    scheme: 'https',
    domainHost: http.domainHost,
    parse: httpParse,
    serialize: httpSerialize
  };
  var ws = {
    scheme: 'ws',
    domainHost: true,
    parse: wsParse,
    serialize: wsSerialize
  };
  var wss = {
    scheme: 'wss',
    domainHost: ws.domainHost,
    parse: ws.parse,
    serialize: ws.serialize
  };
  var urn = {
    scheme: 'urn',
    parse: urnParse,
    serialize: urnSerialize,
    skipNormalize: true
  };
  var urnuuid = {
    scheme: 'urn:uuid',
    parse: urnuuidParse,
    serialize: urnuuidSerialize,
    skipNormalize: true
  };
  var SCHEMES = {
    http: http,
    https: https,
    ws: ws,
    wss: wss,
    urn: urn,
    'urn:uuid': urnuuid
  };
  schemes = SCHEMES;
  return schemes;
}

var hasRequiredFastUri;
function requireFastUri() {
  if (hasRequiredFastUri) return fastUri.exports;
  hasRequiredFastUri = 1;
  var _require$$ = requireUtils$1(),
    normalizeIPv6 = _require$$.normalizeIPv6,
    normalizeIPv4 = _require$$.normalizeIPv4,
    removeDotSegments = _require$$.removeDotSegments,
    recomposeAuthority = _require$$.recomposeAuthority,
    normalizeComponentEncoding = _require$$.normalizeComponentEncoding;
  var SCHEMES = requireSchemes();
  function normalize(uri, options) {
    if (typeof uri === 'string') {
      uri = serialize(parse(uri, options), options);
    } else if (_typeof(uri) === 'object') {
      uri = parse(serialize(uri, options), options);
    }
    return uri;
  }
  function resolve(baseURI, relativeURI, options) {
    var schemelessOptions = Object.assign({
      scheme: 'null'
    }, options);
    var resolved = resolveComponents(parse(baseURI, schemelessOptions), parse(relativeURI, schemelessOptions), schemelessOptions, true);
    return serialize(resolved, _objectSpread2(_objectSpread2({}, schemelessOptions), {}, {
      skipEscape: true
    }));
  }
  function resolveComponents(base, relative, options, skipNormalization) {
    var target = {};
    if (!skipNormalization) {
      base = parse(serialize(base, options), options); // normalize base components
      relative = parse(serialize(relative, options), options); // normalize relative components
    }
    options = options || {};
    if (!options.tolerant && relative.scheme) {
      target.scheme = relative.scheme;
      // target.authority = relative.authority;
      target.userinfo = relative.userinfo;
      target.host = relative.host;
      target.port = relative.port;
      target.path = removeDotSegments(relative.path || '');
      target.query = relative.query;
    } else {
      if (relative.userinfo !== undefined || relative.host !== undefined || relative.port !== undefined) {
        // target.authority = relative.authority;
        target.userinfo = relative.userinfo;
        target.host = relative.host;
        target.port = relative.port;
        target.path = removeDotSegments(relative.path || '');
        target.query = relative.query;
      } else {
        if (!relative.path) {
          target.path = base.path;
          if (relative.query !== undefined) {
            target.query = relative.query;
          } else {
            target.query = base.query;
          }
        } else {
          if (relative.path.charAt(0) === '/') {
            target.path = removeDotSegments(relative.path);
          } else {
            if ((base.userinfo !== undefined || base.host !== undefined || base.port !== undefined) && !base.path) {
              target.path = '/' + relative.path;
            } else if (!base.path) {
              target.path = relative.path;
            } else {
              target.path = base.path.slice(0, base.path.lastIndexOf('/') + 1) + relative.path;
            }
            target.path = removeDotSegments(target.path);
          }
          target.query = relative.query;
        }
        // target.authority = base.authority;
        target.userinfo = base.userinfo;
        target.host = base.host;
        target.port = base.port;
      }
      target.scheme = base.scheme;
    }
    target.fragment = relative.fragment;
    return target;
  }
  function equal(uriA, uriB, options) {
    if (typeof uriA === 'string') {
      uriA = unescape(uriA);
      uriA = serialize(normalizeComponentEncoding(parse(uriA, options), true), _objectSpread2(_objectSpread2({}, options), {}, {
        skipEscape: true
      }));
    } else if (_typeof(uriA) === 'object') {
      uriA = serialize(normalizeComponentEncoding(uriA, true), _objectSpread2(_objectSpread2({}, options), {}, {
        skipEscape: true
      }));
    }
    if (typeof uriB === 'string') {
      uriB = unescape(uriB);
      uriB = serialize(normalizeComponentEncoding(parse(uriB, options), true), _objectSpread2(_objectSpread2({}, options), {}, {
        skipEscape: true
      }));
    } else if (_typeof(uriB) === 'object') {
      uriB = serialize(normalizeComponentEncoding(uriB, true), _objectSpread2(_objectSpread2({}, options), {}, {
        skipEscape: true
      }));
    }
    return uriA.toLowerCase() === uriB.toLowerCase();
  }
  function serialize(cmpts, opts) {
    var components = {
      host: cmpts.host,
      scheme: cmpts.scheme,
      userinfo: cmpts.userinfo,
      port: cmpts.port,
      path: cmpts.path,
      query: cmpts.query,
      nid: cmpts.nid,
      nss: cmpts.nss,
      uuid: cmpts.uuid,
      fragment: cmpts.fragment,
      reference: cmpts.reference,
      resourceName: cmpts.resourceName,
      secure: cmpts.secure,
      error: ''
    };
    var options = Object.assign({}, opts);
    var uriTokens = [];

    // find scheme handler
    var schemeHandler = SCHEMES[(options.scheme || components.scheme || '').toLowerCase()];

    // perform scheme specific serialization
    if (schemeHandler && schemeHandler.serialize) schemeHandler.serialize(components, options);
    if (components.path !== undefined) {
      if (!options.skipEscape) {
        components.path = escape(components.path);
        if (components.scheme !== undefined) {
          components.path = components.path.split('%3A').join(':');
        }
      } else {
        components.path = unescape(components.path);
      }
    }
    if (options.reference !== 'suffix' && components.scheme) {
      uriTokens.push(components.scheme);
      uriTokens.push(':');
    }
    var authority = recomposeAuthority(components, options);
    if (authority !== undefined) {
      if (options.reference !== 'suffix') {
        uriTokens.push('//');
      }
      uriTokens.push(authority);
      if (components.path && components.path.charAt(0) !== '/') {
        uriTokens.push('/');
      }
    }
    if (components.path !== undefined) {
      var s = components.path;
      if (!options.absolutePath && (!schemeHandler || !schemeHandler.absolutePath)) {
        s = removeDotSegments(s);
      }
      if (authority === undefined) {
        s = s.replace(/^\/\//, '/%2F'); // don't allow the path to start with "//"
      }
      uriTokens.push(s);
    }
    if (components.query !== undefined) {
      uriTokens.push('?');
      uriTokens.push(components.query);
    }
    if (components.fragment !== undefined) {
      uriTokens.push('#');
      uriTokens.push(components.fragment);
    }
    return uriTokens.join('');
  }
  var hexLookUp = Array.from({
    length: 127
  }, function (v, k) {
    return /(?:[\0- #%\/-:<>-\^\|\x7F-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/.test(String.fromCharCode(k));
  });
  function nonSimpleDomain(value) {
    var code = 0;
    for (var i = 0, len = value.length; i < len; ++i) {
      code = value.charCodeAt(i);
      if (code > 126 || hexLookUp[code]) {
        return true;
      }
    }
    return false;
  }
  var URI_PARSE = /^(?:((?:[\0-"\$-\.0-9;->@-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+):)?(?:\/\/((?:((?:[\0-"\$-\.0->A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)@)?(\[(?:[\0-"\$-\.0->@-\\\^-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+\]|(?:[\0-"\$-\.0-9;->@-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)(?::([0-9]*))?))?((?:[\0-"\$->@-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)(?:\?((?:[\0-"\$-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*))?(?:#((?:(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])|[\n\r])*))?/;
  function parse(uri, opts) {
    var options = Object.assign({}, opts);
    var parsed = {
      scheme: undefined,
      userinfo: undefined,
      host: '',
      port: undefined,
      path: '',
      query: undefined,
      fragment: undefined
    };
    var gotEncoding = uri.indexOf('%') !== -1;
    var isIP = false;
    if (options.reference === 'suffix') uri = (options.scheme ? options.scheme + ':' : '') + '//' + uri;
    var matches = uri.match(URI_PARSE);
    if (matches) {
      // store each component
      parsed.scheme = matches[1];
      parsed.userinfo = matches[3];
      parsed.host = matches[4];
      parsed.port = parseInt(matches[5], 10);
      parsed.path = matches[6] || '';
      parsed.query = matches[7];
      parsed.fragment = matches[8];

      // fix port number
      if (isNaN(parsed.port)) {
        parsed.port = matches[5];
      }
      if (parsed.host) {
        var ipv4result = normalizeIPv4(parsed.host);
        if (ipv4result.isIPV4 === false) {
          var ipv6result = normalizeIPv6(ipv4result.host, {
            isIPV4: false
          });
          parsed.host = ipv6result.host.toLowerCase();
          isIP = ipv6result.isIPV6;
        } else {
          parsed.host = ipv4result.host;
          isIP = true;
        }
      }
      if (parsed.scheme === undefined && parsed.userinfo === undefined && parsed.host === undefined && parsed.port === undefined && !parsed.path && parsed.query === undefined) {
        parsed.reference = 'same-document';
      } else if (parsed.scheme === undefined) {
        parsed.reference = 'relative';
      } else if (parsed.fragment === undefined) {
        parsed.reference = 'absolute';
      } else {
        parsed.reference = 'uri';
      }

      // check for reference errors
      if (options.reference && options.reference !== 'suffix' && options.reference !== parsed.reference) {
        parsed.error = parsed.error || 'URI is not a ' + options.reference + ' reference.';
      }

      // find scheme handler
      var schemeHandler = SCHEMES[(options.scheme || parsed.scheme || '').toLowerCase()];

      // check if scheme can't handle IRIs
      if (!options.unicodeSupport && (!schemeHandler || !schemeHandler.unicodeSupport)) {
        // if host component is a domain name
        if (parsed.host && (options.domainHost || schemeHandler && schemeHandler.domainHost) && isIP === false && nonSimpleDomain(parsed.host)) {
          // convert Unicode IDN -> ASCII IDN
          try {
            parsed.host = URL.domainToASCII(parsed.host.toLowerCase());
          } catch (e) {
            parsed.error = parsed.error || "Host's domain name can not be converted to ASCII: " + e;
          }
        }
        // convert IRI -> URI
      }
      if (!schemeHandler || schemeHandler && !schemeHandler.skipNormalize) {
        if (gotEncoding && parsed.scheme !== undefined) {
          parsed.scheme = unescape(parsed.scheme);
        }
        if (gotEncoding && parsed.userinfo !== undefined) {
          parsed.userinfo = unescape(parsed.userinfo);
        }
        if (gotEncoding && parsed.host !== undefined) {
          parsed.host = unescape(parsed.host);
        }
        if (parsed.path !== undefined && parsed.path.length) {
          parsed.path = escape(unescape(parsed.path));
        }
        if (parsed.fragment !== undefined && parsed.fragment.length) {
          parsed.fragment = encodeURI(decodeURIComponent(parsed.fragment));
        }
      }

      // perform scheme specific parsing
      if (schemeHandler && schemeHandler.parse) {
        schemeHandler.parse(parsed, options);
      }
    } else {
      parsed.error = parsed.error || 'URI can not be parsed.';
    }
    return parsed;
  }
  var fastUri$1 = {
    SCHEMES: SCHEMES,
    normalize: normalize,
    resolve: resolve,
    resolveComponents: resolveComponents,
    equal: equal,
    serialize: serialize,
    parse: parse
  };
  fastUri.exports = fastUri$1;
  fastUri.exports["default"] = fastUri$1;
  fastUri.exports.fastUri = fastUri$1;
  return fastUri.exports;
}

var hasRequiredUri;
function requireUri() {
  if (hasRequiredUri) return uri;
  hasRequiredUri = 1;
  Object.defineProperty(uri, "__esModule", {
    value: true
  });
  var uri$1 = requireFastUri();
  uri$1.code = 'require("ajv/dist/runtime/uri").default';
  uri["default"] = uri$1;
  return uri;
}

var hasRequiredCore$1;
function requireCore$1() {
  if (hasRequiredCore$1) return core$1;
  hasRequiredCore$1 = 1;
  (function (exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.CodeGen = exports.Name = exports.nil = exports.stringify = exports.str = exports._ = exports.KeywordCxt = void 0;
    var validate_1 = requireValidate();
    Object.defineProperty(exports, "KeywordCxt", {
      enumerable: true,
      get: function get() {
        return validate_1.KeywordCxt;
      }
    });
    var codegen_1 = requireCodegen();
    Object.defineProperty(exports, "_", {
      enumerable: true,
      get: function get() {
        return codegen_1._;
      }
    });
    Object.defineProperty(exports, "str", {
      enumerable: true,
      get: function get() {
        return codegen_1.str;
      }
    });
    Object.defineProperty(exports, "stringify", {
      enumerable: true,
      get: function get() {
        return codegen_1.stringify;
      }
    });
    Object.defineProperty(exports, "nil", {
      enumerable: true,
      get: function get() {
        return codegen_1.nil;
      }
    });
    Object.defineProperty(exports, "Name", {
      enumerable: true,
      get: function get() {
        return codegen_1.Name;
      }
    });
    Object.defineProperty(exports, "CodeGen", {
      enumerable: true,
      get: function get() {
        return codegen_1.CodeGen;
      }
    });
    var validation_error_1 = requireValidation_error();
    var ref_error_1 = requireRef_error();
    var rules_1 = requireRules();
    var compile_1 = requireCompile();
    var codegen_2 = requireCodegen();
    var resolve_1 = requireResolve();
    var dataType_1 = requireDataType();
    var util_1 = requireUtil();
    var $dataRefSchema = require$$9;
    var uri_1 = requireUri();
    var defaultRegExp = function defaultRegExp(str, flags) {
      return new RegExp(str, flags);
    };
    defaultRegExp.code = "new RegExp";
    var META_IGNORE_OPTIONS = ["removeAdditional", "useDefaults", "coerceTypes"];
    var EXT_SCOPE_NAMES = new Set(["validate", "serialize", "parse", "wrapper", "root", "schema", "keyword", "pattern", "formats", "validate$data", "func", "obj", "Error"]);
    var removedOptions = {
      errorDataPath: "",
      format: "`validateFormats: false` can be used instead.",
      nullable: '"nullable" keyword is supported by default.',
      jsonPointers: "Deprecated jsPropertySyntax can be used instead.",
      extendRefs: "Deprecated ignoreKeywordsWithRef can be used instead.",
      missingRefs: "Pass empty schema with $id that should be ignored to ajv.addSchema.",
      processCode: "Use option `code: {process: (code, schemaEnv: object) => string}`",
      sourceCode: "Use option `code: {source: true}`",
      strictDefaults: "It is default now, see option `strict`.",
      strictKeywords: "It is default now, see option `strict`.",
      uniqueItems: '"uniqueItems" keyword is always validated.',
      unknownFormats: "Disable strict mode or pass `true` to `ajv.addFormat` (or `formats` option).",
      cache: "Map is used as cache, schema object as key.",
      serialize: "Map is used as cache, schema object as key.",
      ajvErrors: "It is default now."
    };
    var deprecatedOptions = {
      ignoreKeywordsWithRef: "",
      jsPropertySyntax: "",
      unicode: '"minLength"/"maxLength" account for unicode characters by default.'
    };
    var MAX_EXPRESSION = 200;
    // eslint-disable-next-line complexity
    function requiredOptions(o) {
      var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0;
      var s = o.strict;
      var _optz = (_a = o.code) === null || _a === void 0 ? void 0 : _a.optimize;
      var optimize = _optz === true || _optz === undefined ? 1 : _optz || 0;
      var regExp = (_c = (_b = o.code) === null || _b === void 0 ? void 0 : _b.regExp) !== null && _c !== void 0 ? _c : defaultRegExp;
      var uriResolver = (_d = o.uriResolver) !== null && _d !== void 0 ? _d : uri_1["default"];
      return {
        strictSchema: (_f = (_e = o.strictSchema) !== null && _e !== void 0 ? _e : s) !== null && _f !== void 0 ? _f : true,
        strictNumbers: (_h = (_g = o.strictNumbers) !== null && _g !== void 0 ? _g : s) !== null && _h !== void 0 ? _h : true,
        strictTypes: (_k = (_j = o.strictTypes) !== null && _j !== void 0 ? _j : s) !== null && _k !== void 0 ? _k : "log",
        strictTuples: (_m = (_l = o.strictTuples) !== null && _l !== void 0 ? _l : s) !== null && _m !== void 0 ? _m : "log",
        strictRequired: (_p = (_o = o.strictRequired) !== null && _o !== void 0 ? _o : s) !== null && _p !== void 0 ? _p : false,
        code: o.code ? _objectSpread2(_objectSpread2({}, o.code), {}, {
          optimize: optimize,
          regExp: regExp
        }) : {
          optimize: optimize,
          regExp: regExp
        },
        loopRequired: (_q = o.loopRequired) !== null && _q !== void 0 ? _q : MAX_EXPRESSION,
        loopEnum: (_r = o.loopEnum) !== null && _r !== void 0 ? _r : MAX_EXPRESSION,
        meta: (_s = o.meta) !== null && _s !== void 0 ? _s : true,
        messages: (_t = o.messages) !== null && _t !== void 0 ? _t : true,
        inlineRefs: (_u = o.inlineRefs) !== null && _u !== void 0 ? _u : true,
        schemaId: (_v = o.schemaId) !== null && _v !== void 0 ? _v : "$id",
        addUsedSchema: (_w = o.addUsedSchema) !== null && _w !== void 0 ? _w : true,
        validateSchema: (_x = o.validateSchema) !== null && _x !== void 0 ? _x : true,
        validateFormats: (_y = o.validateFormats) !== null && _y !== void 0 ? _y : true,
        unicodeRegExp: (_z = o.unicodeRegExp) !== null && _z !== void 0 ? _z : true,
        int32range: (_0 = o.int32range) !== null && _0 !== void 0 ? _0 : true,
        uriResolver: uriResolver
      };
    }
    var Ajv = /*#__PURE__*/function () {
      function Ajv() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck(this, Ajv);
        this.schemas = {};
        this.refs = {};
        this.formats = {};
        this._compilations = new Set();
        this._loading = {};
        this._cache = new Map();
        opts = this.opts = _objectSpread2(_objectSpread2({}, opts), requiredOptions(opts));
        var _this$opts$code = this.opts.code,
          es5 = _this$opts$code.es5,
          lines = _this$opts$code.lines;
        this.scope = new codegen_2.ValueScope({
          scope: {},
          prefixes: EXT_SCOPE_NAMES,
          es5: es5,
          lines: lines
        });
        this.logger = getLogger(opts.logger);
        var formatOpt = opts.validateFormats;
        opts.validateFormats = false;
        this.RULES = (0, rules_1.getRules)();
        checkOptions.call(this, removedOptions, opts, "NOT SUPPORTED");
        checkOptions.call(this, deprecatedOptions, opts, "DEPRECATED", "warn");
        this._metaOpts = getMetaSchemaOptions.call(this);
        if (opts.formats) addInitialFormats.call(this);
        this._addVocabularies();
        this._addDefaultMetaSchema();
        if (opts.keywords) addInitialKeywords.call(this, opts.keywords);
        if (_typeof(opts.meta) == "object") this.addMetaSchema(opts.meta);
        addInitialSchemas.call(this);
        opts.validateFormats = formatOpt;
      }
      return _createClass(Ajv, [{
        key: "_addVocabularies",
        value: function _addVocabularies() {
          this.addKeyword("$async");
        }
      }, {
        key: "_addDefaultMetaSchema",
        value: function _addDefaultMetaSchema() {
          var _this$opts = this.opts,
            $data = _this$opts.$data,
            meta = _this$opts.meta,
            schemaId = _this$opts.schemaId;
          var _dataRefSchema = $dataRefSchema;
          if (schemaId === "id") {
            _dataRefSchema = _objectSpread2({}, $dataRefSchema);
            _dataRefSchema.id = _dataRefSchema.$id;
            delete _dataRefSchema.$id;
          }
          if (meta && $data) this.addMetaSchema(_dataRefSchema, _dataRefSchema[schemaId], false);
        }
      }, {
        key: "defaultMeta",
        value: function defaultMeta() {
          var _this$opts2 = this.opts,
            meta = _this$opts2.meta,
            schemaId = _this$opts2.schemaId;
          return this.opts.defaultMeta = _typeof(meta) == "object" ? meta[schemaId] || meta : undefined;
        }
      }, {
        key: "validate",
        value: function validate(schemaKeyRef,
        // key, ref or schema object
        // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
        data // to be validated
        ) {
          var v;
          if (typeof schemaKeyRef == "string") {
            v = this.getSchema(schemaKeyRef);
            if (!v) throw new Error("no schema with key or ref \"".concat(schemaKeyRef, "\""));
          } else {
            v = this.compile(schemaKeyRef);
          }
          var valid = v(data);
          if (!("$async" in v)) this.errors = v.errors;
          return valid;
        }
      }, {
        key: "compile",
        value: function compile(schema, _meta) {
          var sch = this._addSchema(schema, _meta);
          return sch.validate || this._compileSchemaEnv(sch);
        }
      }, {
        key: "compileAsync",
        value: function compileAsync(schema, meta) {
          if (typeof this.opts.loadSchema != "function") {
            throw new Error("options.loadSchema should be a function");
          }
          var loadSchema = this.opts.loadSchema;
          return runCompileAsync.call(this, schema, meta);
          function runCompileAsync(_x2, _x3) {
            return _runCompileAsync.apply(this, arguments);
          }
          function _runCompileAsync() {
            _runCompileAsync = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(_schema, _meta) {
              var sch;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return loadMetaSchema.call(this, _schema.$schema);
                  case 2:
                    sch = this._addSchema(_schema, _meta);
                    return _context.abrupt("return", sch.validate || _compileAsync.call(this, sch));
                  case 4:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this);
            }));
            return _runCompileAsync.apply(this, arguments);
          }
          function loadMetaSchema(_x4) {
            return _loadMetaSchema.apply(this, arguments);
          }
          function _loadMetaSchema() {
            _loadMetaSchema = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2($ref) {
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!($ref && !this.getSchema($ref))) {
                      _context2.next = 3;
                      break;
                    }
                    _context2.next = 3;
                    return runCompileAsync.call(this, {
                      $ref: $ref
                    }, true);
                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2, this);
            }));
            return _loadMetaSchema.apply(this, arguments);
          }
          function _compileAsync(_x5) {
            return _compileAsync2.apply(this, arguments);
          }
          function _compileAsync2() {
            _compileAsync2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(sch) {
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.prev = 0;
                    return _context3.abrupt("return", this._compileSchemaEnv(sch));
                  case 4:
                    _context3.prev = 4;
                    _context3.t0 = _context3["catch"](0);
                    if (_context3.t0 instanceof ref_error_1["default"]) {
                      _context3.next = 8;
                      break;
                    }
                    throw _context3.t0;
                  case 8:
                    checkLoaded.call(this, _context3.t0);
                    _context3.next = 11;
                    return loadMissingSchema.call(this, _context3.t0.missingSchema);
                  case 11:
                    return _context3.abrupt("return", _compileAsync.call(this, sch));
                  case 12:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3, this, [[0, 4]]);
            }));
            return _compileAsync2.apply(this, arguments);
          }
          function checkLoaded(_ref) {
            var ref = _ref.missingSchema,
              missingRef = _ref.missingRef;
            if (this.refs[ref]) {
              throw new Error("AnySchema ".concat(ref, " is loaded but ").concat(missingRef, " cannot be resolved"));
            }
          }
          function loadMissingSchema(_x6) {
            return _loadMissingSchema.apply(this, arguments);
          }
          function _loadMissingSchema() {
            _loadMissingSchema = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(ref) {
              var _schema;
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return _loadSchema.call(this, ref);
                  case 2:
                    _schema = _context4.sent;
                    if (this.refs[ref]) {
                      _context4.next = 6;
                      break;
                    }
                    _context4.next = 6;
                    return loadMetaSchema.call(this, _schema.$schema);
                  case 6:
                    if (!this.refs[ref]) this.addSchema(_schema, ref, meta);
                  case 7:
                  case "end":
                    return _context4.stop();
                }
              }, _callee4, this);
            }));
            return _loadMissingSchema.apply(this, arguments);
          }
          function _loadSchema(_x7) {
            return _loadSchema2.apply(this, arguments);
          }
          function _loadSchema2() {
            _loadSchema2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(ref) {
              var p;
              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) switch (_context5.prev = _context5.next) {
                  case 0:
                    p = this._loading[ref];
                    if (!p) {
                      _context5.next = 3;
                      break;
                    }
                    return _context5.abrupt("return", p);
                  case 3:
                    _context5.prev = 3;
                    _context5.next = 6;
                    return this._loading[ref] = loadSchema(ref);
                  case 6:
                    return _context5.abrupt("return", _context5.sent);
                  case 7:
                    _context5.prev = 7;
                    delete this._loading[ref];
                    return _context5.finish(7);
                  case 10:
                  case "end":
                    return _context5.stop();
                }
              }, _callee5, this, [[3,, 7, 10]]);
            }));
            return _loadSchema2.apply(this, arguments);
          }
        }
        // Adds schema to the instance
      }, {
        key: "addSchema",
        value: function addSchema(schema,
        // If array is passed, `key` will be ignored
        key,
        // Optional schema key. Can be passed to `validate` method instead of schema object or id/ref. One schema per instance can have empty `id` and `key`.
        _meta) {
          var _validateSchema = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.opts.validateSchema;
          if (Array.isArray(schema)) {
            var _iterator = _createForOfIteratorHelper(schema),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var sch = _step.value;
                this.addSchema(sch, undefined, _meta, _validateSchema);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
            return this;
          }
          var id;
          if (_typeof(schema) === "object") {
            var schemaId = this.opts.schemaId;
            id = schema[schemaId];
            if (id !== undefined && typeof id != "string") {
              throw new Error("schema ".concat(schemaId, " must be string"));
            }
          }
          key = (0, resolve_1.normalizeId)(key || id);
          this._checkUnique(key);
          this.schemas[key] = this._addSchema(schema, _meta, key, _validateSchema, true);
          return this;
        }
        // Add schema that will be used to validate other schemas
        // options in META_IGNORE_OPTIONS are alway set to false
      }, {
        key: "addMetaSchema",
        value: function addMetaSchema(schema, key) {
          var _validateSchema = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.opts.validateSchema;
          this.addSchema(schema, key, true, _validateSchema);
          return this;
        }
        //  Validate schema against its meta-schema
      }, {
        key: "validateSchema",
        value: function validateSchema(schema, throwOrLogError) {
          if (typeof schema == "boolean") return true;
          var $schema;
          $schema = schema.$schema;
          if ($schema !== undefined && typeof $schema != "string") {
            throw new Error("$schema must be a string");
          }
          $schema = $schema || this.opts.defaultMeta || this.defaultMeta();
          if (!$schema) {
            this.logger.warn("meta-schema not available");
            this.errors = null;
            return true;
          }
          var valid = this.validate($schema, schema);
          if (!valid && throwOrLogError) {
            var message = "schema is invalid: " + this.errorsText();
            if (this.opts.validateSchema === "log") this.logger.error(message);else throw new Error(message);
          }
          return valid;
        }
        // Get compiled schema by `key` or `ref`.
        // (`key` that was passed to `addSchema` or full schema reference - `schema.$id` or resolved id)
      }, {
        key: "getSchema",
        value: function getSchema(keyRef) {
          var sch;
          while (typeof (sch = getSchEnv.call(this, keyRef)) == "string") keyRef = sch;
          if (sch === undefined) {
            var schemaId = this.opts.schemaId;
            var root = new compile_1.SchemaEnv({
              schema: {},
              schemaId: schemaId
            });
            sch = compile_1.resolveSchema.call(this, root, keyRef);
            if (!sch) return;
            this.refs[keyRef] = sch;
          }
          return sch.validate || this._compileSchemaEnv(sch);
        }
        // Remove cached schema(s).
        // If no parameter is passed all schemas but meta-schemas are removed.
        // If RegExp is passed all schemas with key/id matching pattern but meta-schemas are removed.
        // Even if schema is referenced by other schemas it still can be removed as other schemas have local references.
      }, {
        key: "removeSchema",
        value: function removeSchema(schemaKeyRef) {
          if (schemaKeyRef instanceof RegExp) {
            this._removeAllSchemas(this.schemas, schemaKeyRef);
            this._removeAllSchemas(this.refs, schemaKeyRef);
            return this;
          }
          switch (_typeof(schemaKeyRef)) {
            case "undefined":
              this._removeAllSchemas(this.schemas);
              this._removeAllSchemas(this.refs);
              this._cache.clear();
              return this;
            case "string":
              {
                var sch = getSchEnv.call(this, schemaKeyRef);
                if (_typeof(sch) == "object") this._cache["delete"](sch.schema);
                delete this.schemas[schemaKeyRef];
                delete this.refs[schemaKeyRef];
                return this;
              }
            case "object":
              {
                var cacheKey = schemaKeyRef;
                this._cache["delete"](cacheKey);
                var id = schemaKeyRef[this.opts.schemaId];
                if (id) {
                  id = (0, resolve_1.normalizeId)(id);
                  delete this.schemas[id];
                  delete this.refs[id];
                }
                return this;
              }
            default:
              throw new Error("ajv.removeSchema: invalid parameter");
          }
        }
        // add "vocabulary" - a collection of keywords
      }, {
        key: "addVocabulary",
        value: function addVocabulary(definitions) {
          var _iterator2 = _createForOfIteratorHelper(definitions),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var def = _step2.value;
              this.addKeyword(def);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
          return this;
        }
      }, {
        key: "addKeyword",
        value: function addKeyword(kwdOrDef, def // deprecated
        ) {
          var _this = this;
          var keyword;
          if (typeof kwdOrDef == "string") {
            keyword = kwdOrDef;
            if (_typeof(def) == "object") {
              this.logger.warn("these parameters are deprecated, see docs for addKeyword");
              def.keyword = keyword;
            }
          } else if (_typeof(kwdOrDef) == "object" && def === undefined) {
            def = kwdOrDef;
            keyword = def.keyword;
            if (Array.isArray(keyword) && !keyword.length) {
              throw new Error("addKeywords: keyword must be string or non-empty array");
            }
          } else {
            throw new Error("invalid addKeywords parameters");
          }
          checkKeyword.call(this, keyword, def);
          if (!def) {
            (0, util_1.eachItem)(keyword, function (kwd) {
              return addRule.call(_this, kwd);
            });
            return this;
          }
          keywordMetaschema.call(this, def);
          var definition = _objectSpread2(_objectSpread2({}, def), {}, {
            type: (0, dataType_1.getJSONTypes)(def.type),
            schemaType: (0, dataType_1.getJSONTypes)(def.schemaType)
          });
          (0, util_1.eachItem)(keyword, definition.type.length === 0 ? function (k) {
            return addRule.call(_this, k, definition);
          } : function (k) {
            return definition.type.forEach(function (t) {
              return addRule.call(_this, k, definition, t);
            });
          });
          return this;
        }
      }, {
        key: "getKeyword",
        value: function getKeyword(keyword) {
          var rule = this.RULES.all[keyword];
          return _typeof(rule) == "object" ? rule.definition : !!rule;
        }
        // Remove keyword
      }, {
        key: "removeKeyword",
        value: function removeKeyword(keyword) {
          // TODO return type should be Ajv
          var RULES = this.RULES;
          delete RULES.keywords[keyword];
          delete RULES.all[keyword];
          var _iterator3 = _createForOfIteratorHelper(RULES.rules),
            _step3;
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var group = _step3.value;
              var i = group.rules.findIndex(function (rule) {
                return rule.keyword === keyword;
              });
              if (i >= 0) group.rules.splice(i, 1);
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
          return this;
        }
        // Add format
      }, {
        key: "addFormat",
        value: function addFormat(name, format) {
          if (typeof format == "string") format = new RegExp(format);
          this.formats[name] = format;
          return this;
        }
      }, {
        key: "errorsText",
        value: function errorsText() {
          var errors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.errors;
          var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            _ref2$separator = _ref2.separator,
            separator = _ref2$separator === void 0 ? ", " : _ref2$separator,
            _ref2$dataVar = _ref2.dataVar,
            dataVar = _ref2$dataVar === void 0 ? "data" : _ref2$dataVar;
          if (!errors || errors.length === 0) return "No errors";
          return errors.map(function (e) {
            return "".concat(dataVar).concat(e.instancePath, " ").concat(e.message);
          }).reduce(function (text, msg) {
            return text + separator + msg;
          });
        }
      }, {
        key: "$dataMetaSchema",
        value: function $dataMetaSchema(metaSchema, keywordsJsonPointers) {
          var rules = this.RULES.all;
          metaSchema = JSON.parse(JSON.stringify(metaSchema));
          var _iterator4 = _createForOfIteratorHelper(keywordsJsonPointers),
            _step4;
          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var jsonPointer = _step4.value;
              var segments = jsonPointer.split("/").slice(1); // first segment is an empty string
              var keywords = metaSchema;
              var _iterator5 = _createForOfIteratorHelper(segments),
                _step5;
              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                  var seg = _step5.value;
                  keywords = keywords[seg];
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }
              for (var key in rules) {
                var rule = rules[key];
                if (_typeof(rule) != "object") continue;
                var $data = rule.definition.$data;
                var schema = keywords[key];
                if ($data && schema) keywords[key] = schemaOrData(schema);
              }
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
          return metaSchema;
        }
      }, {
        key: "_removeAllSchemas",
        value: function _removeAllSchemas(schemas, regex) {
          for (var keyRef in schemas) {
            var sch = schemas[keyRef];
            if (!regex || regex.test(keyRef)) {
              if (typeof sch == "string") {
                delete schemas[keyRef];
              } else if (sch && !sch.meta) {
                this._cache["delete"](sch.schema);
                delete schemas[keyRef];
              }
            }
          }
        }
      }, {
        key: "_addSchema",
        value: function _addSchema(schema, meta, baseId) {
          var validateSchema = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.opts.validateSchema;
          var addSchema = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : this.opts.addUsedSchema;
          var id;
          var schemaId = this.opts.schemaId;
          if (_typeof(schema) == "object") {
            id = schema[schemaId];
          } else {
            if (this.opts.jtd) throw new Error("schema must be object");else if (typeof schema != "boolean") throw new Error("schema must be object or boolean");
          }
          var sch = this._cache.get(schema);
          if (sch !== undefined) return sch;
          baseId = (0, resolve_1.normalizeId)(id || baseId);
          var localRefs = resolve_1.getSchemaRefs.call(this, schema, baseId);
          sch = new compile_1.SchemaEnv({
            schema: schema,
            schemaId: schemaId,
            meta: meta,
            baseId: baseId,
            localRefs: localRefs
          });
          this._cache.set(sch.schema, sch);
          if (addSchema && !baseId.startsWith("#")) {
            // TODO atm it is allowed to overwrite schemas without id (instead of not adding them)
            if (baseId) this._checkUnique(baseId);
            this.refs[baseId] = sch;
          }
          if (validateSchema) this.validateSchema(schema, true);
          return sch;
        }
      }, {
        key: "_checkUnique",
        value: function _checkUnique(id) {
          if (this.schemas[id] || this.refs[id]) {
            throw new Error("schema with key or id \"".concat(id, "\" already exists"));
          }
        }
      }, {
        key: "_compileSchemaEnv",
        value: function _compileSchemaEnv(sch) {
          if (sch.meta) this._compileMetaSchema(sch);else compile_1.compileSchema.call(this, sch);
          /* istanbul ignore if */
          if (!sch.validate) throw new Error("ajv implementation error");
          return sch.validate;
        }
      }, {
        key: "_compileMetaSchema",
        value: function _compileMetaSchema(sch) {
          var currentOpts = this.opts;
          this.opts = this._metaOpts;
          try {
            compile_1.compileSchema.call(this, sch);
          } finally {
            this.opts = currentOpts;
          }
        }
      }]);
    }();
    Ajv.ValidationError = validation_error_1["default"];
    Ajv.MissingRefError = ref_error_1["default"];
    exports["default"] = Ajv;
    function checkOptions(checkOpts, options, msg) {
      var log = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "error";
      for (var key in checkOpts) {
        var opt = key;
        if (opt in options) this.logger[log]("".concat(msg, ": option ").concat(key, ". ").concat(checkOpts[opt]));
      }
    }
    function getSchEnv(keyRef) {
      keyRef = (0, resolve_1.normalizeId)(keyRef); // TODO tests fail without this line
      return this.schemas[keyRef] || this.refs[keyRef];
    }
    function addInitialSchemas() {
      var optsSchemas = this.opts.schemas;
      if (!optsSchemas) return;
      if (Array.isArray(optsSchemas)) this.addSchema(optsSchemas);else for (var key in optsSchemas) this.addSchema(optsSchemas[key], key);
    }
    function addInitialFormats() {
      for (var name in this.opts.formats) {
        var format = this.opts.formats[name];
        if (format) this.addFormat(name, format);
      }
    }
    function addInitialKeywords(defs) {
      if (Array.isArray(defs)) {
        this.addVocabulary(defs);
        return;
      }
      this.logger.warn("keywords option as map is deprecated, pass array");
      for (var keyword in defs) {
        var def = defs[keyword];
        if (!def.keyword) def.keyword = keyword;
        this.addKeyword(def);
      }
    }
    function getMetaSchemaOptions() {
      var metaOpts = _objectSpread2({}, this.opts);
      var _iterator6 = _createForOfIteratorHelper(META_IGNORE_OPTIONS),
        _step6;
      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var opt = _step6.value;
          delete metaOpts[opt];
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
      return metaOpts;
    }
    var noLogs = {
      log: function log() {},
      warn: function warn() {},
      error: function error() {}
    };
    function getLogger(logger) {
      if (logger === false) return noLogs;
      if (logger === undefined) return console;
      if (logger.log && logger.warn && logger.error) return logger;
      throw new Error("logger must implement log, warn and error methods");
    }
    var KEYWORD_NAME = /^[a-z_$][a-z0-9_$:-]*$/i;
    function checkKeyword(keyword, def) {
      var RULES = this.RULES;
      (0, util_1.eachItem)(keyword, function (kwd) {
        if (RULES.keywords[kwd]) throw new Error("Keyword ".concat(kwd, " is already defined"));
        if (!KEYWORD_NAME.test(kwd)) throw new Error("Keyword ".concat(kwd, " has invalid name"));
      });
      if (!def) return;
      if (def.$data && !("code" in def || "validate" in def)) {
        throw new Error('$data keyword must have "code" or "validate" function');
      }
    }
    function addRule(keyword, definition, dataType) {
      var _this2 = this;
      var _a;
      var post = definition === null || definition === void 0 ? void 0 : definition.post;
      if (dataType && post) throw new Error('keyword with "post" flag cannot have "type"');
      var RULES = this.RULES;
      var ruleGroup = post ? RULES.post : RULES.rules.find(function (_ref3) {
        var t = _ref3.type;
        return t === dataType;
      });
      if (!ruleGroup) {
        ruleGroup = {
          type: dataType,
          rules: []
        };
        RULES.rules.push(ruleGroup);
      }
      RULES.keywords[keyword] = true;
      if (!definition) return;
      var rule = {
        keyword: keyword,
        definition: _objectSpread2(_objectSpread2({}, definition), {}, {
          type: (0, dataType_1.getJSONTypes)(definition.type),
          schemaType: (0, dataType_1.getJSONTypes)(definition.schemaType)
        })
      };
      if (definition.before) addBeforeRule.call(this, ruleGroup, rule, definition.before);else ruleGroup.rules.push(rule);
      RULES.all[keyword] = rule;
      (_a = definition["implements"]) === null || _a === void 0 ? void 0 : _a.forEach(function (kwd) {
        return _this2.addKeyword(kwd);
      });
    }
    function addBeforeRule(ruleGroup, rule, before) {
      var i = ruleGroup.rules.findIndex(function (_rule) {
        return _rule.keyword === before;
      });
      if (i >= 0) {
        ruleGroup.rules.splice(i, 0, rule);
      } else {
        ruleGroup.rules.push(rule);
        this.logger.warn("rule ".concat(before, " is not defined"));
      }
    }
    function keywordMetaschema(def) {
      var metaSchema = def.metaSchema;
      if (metaSchema === undefined) return;
      if (def.$data && this.opts.$data) metaSchema = schemaOrData(metaSchema);
      def.validateSchema = this.compile(metaSchema, true);
    }
    var $dataRef = {
      $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
    };
    function schemaOrData(schema) {
      return {
        anyOf: [schema, $dataRef]
      };
    }
  })(core$1);
  return core$1;
}

var draft7 = {};

var core = {};

var id = {};

var hasRequiredId;
function requireId() {
  if (hasRequiredId) return id;
  hasRequiredId = 1;
  Object.defineProperty(id, "__esModule", {
    value: true
  });
  var def = {
    keyword: "id",
    code: function code() {
      throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
    }
  };
  id["default"] = def;
  return id;
}

var ref = {};

var _templateObject$o, _templateObject2$m, _templateObject3$i, _templateObject4$b, _templateObject5$8, _templateObject6$4, _templateObject7$4, _templateObject8$4, _templateObject9$3;
var hasRequiredRef;
function requireRef() {
  if (hasRequiredRef) return ref;
  hasRequiredRef = 1;
  Object.defineProperty(ref, "__esModule", {
    value: true
  });
  ref.callRef = ref.getValidate = void 0;
  var ref_error_1 = requireRef_error();
  var code_1 = requireCode();
  var codegen_1 = requireCodegen();
  var names_1 = requireNames();
  var compile_1 = requireCompile();
  var util_1 = requireUtil();
  var def = {
    keyword: "$ref",
    schemaType: "string",
    code: function code(cxt) {
      var gen = cxt.gen,
        $ref = cxt.schema,
        it = cxt.it;
      var baseId = it.baseId,
        env = it.schemaEnv,
        validateName = it.validateName,
        opts = it.opts,
        self = it.self;
      var root = env.root;
      if (($ref === "#" || $ref === "#/") && baseId === root.baseId) return callRootRef();
      var schOrEnv = compile_1.resolveRef.call(self, root, baseId, $ref);
      if (schOrEnv === undefined) throw new ref_error_1["default"](it.opts.uriResolver, baseId, $ref);
      if (schOrEnv instanceof compile_1.SchemaEnv) return callValidate(schOrEnv);
      return inlineRefSchema(schOrEnv);
      function callRootRef() {
        if (env === root) return callRef(cxt, validateName, env, env.$async);
        var rootName = gen.scopeValue("root", {
          ref: root
        });
        return callRef(cxt, (0, codegen_1._)(_templateObject$o || (_templateObject$o = _taggedTemplateLiteral(["", ".validate"])), rootName), root, root.$async);
      }
      function callValidate(sch) {
        var v = getValidate(cxt, sch);
        callRef(cxt, v, sch, sch.$async);
      }
      function inlineRefSchema(sch) {
        var schName = gen.scopeValue("schema", opts.code.source === true ? {
          ref: sch,
          code: (0, codegen_1.stringify)(sch)
        } : {
          ref: sch
        });
        var valid = gen.name("valid");
        var schCxt = cxt.subschema({
          schema: sch,
          dataTypes: [],
          schemaPath: codegen_1.nil,
          topSchemaRef: schName,
          errSchemaPath: $ref
        }, valid);
        cxt.mergeEvaluated(schCxt);
        cxt.ok(valid);
      }
    }
  };
  function getValidate(cxt, sch) {
    var gen = cxt.gen;
    return sch.validate ? gen.scopeValue("validate", {
      ref: sch.validate
    }) : (0, codegen_1._)(_templateObject2$m || (_templateObject2$m = _taggedTemplateLiteral(["", ".validate"])), gen.scopeValue("wrapper", {
      ref: sch
    }));
  }
  ref.getValidate = getValidate;
  function callRef(cxt, v, sch, $async) {
    var gen = cxt.gen,
      it = cxt.it;
    var allErrors = it.allErrors,
      env = it.schemaEnv,
      opts = it.opts;
    var passCxt = opts.passContext ? names_1["default"]["this"] : codegen_1.nil;
    if ($async) callAsyncRef();else callSyncRef();
    function callAsyncRef() {
      if (!env.$async) throw new Error("async schema referenced by sync schema");
      var valid = gen["let"]("valid");
      gen["try"](function () {
        gen.code((0, codegen_1._)(_templateObject3$i || (_templateObject3$i = _taggedTemplateLiteral(["await ", ""])), (0, code_1.callValidateCode)(cxt, v, passCxt)));
        addEvaluatedFrom(v); // TODO will not work with async, it has to be returned with the result
        if (!allErrors) gen.assign(valid, true);
      }, function (e) {
        gen["if"]((0, codegen_1._)(_templateObject4$b || (_templateObject4$b = _taggedTemplateLiteral(["!(", " instanceof ", ")"])), e, it.ValidationError), function () {
          return gen["throw"](e);
        });
        addErrorsFrom(e);
        if (!allErrors) gen.assign(valid, false);
      });
      cxt.ok(valid);
    }
    function callSyncRef() {
      cxt.result((0, code_1.callValidateCode)(cxt, v, passCxt), function () {
        return addEvaluatedFrom(v);
      }, function () {
        return addErrorsFrom(v);
      });
    }
    function addErrorsFrom(source) {
      var errs = (0, codegen_1._)(_templateObject5$8 || (_templateObject5$8 = _taggedTemplateLiteral(["", ".errors"])), source);
      gen.assign(names_1["default"].vErrors, (0, codegen_1._)(_templateObject6$4 || (_templateObject6$4 = _taggedTemplateLiteral(["", " === null ? ", " : ", ".concat(", ")"])), names_1["default"].vErrors, errs, names_1["default"].vErrors, errs)); // TODO tagged
      gen.assign(names_1["default"].errors, (0, codegen_1._)(_templateObject7$4 || (_templateObject7$4 = _taggedTemplateLiteral(["", ".length"])), names_1["default"].vErrors));
    }
    function addEvaluatedFrom(source) {
      var _a;
      if (!it.opts.unevaluated) return;
      var schEvaluated = (_a = sch === null || sch === void 0 ? void 0 : sch.validate) === null || _a === void 0 ? void 0 : _a.evaluated;
      // TODO refactor
      if (it.props !== true) {
        if (schEvaluated && !schEvaluated.dynamicProps) {
          if (schEvaluated.props !== undefined) {
            it.props = util_1.mergeEvaluated.props(gen, schEvaluated.props, it.props);
          }
        } else {
          var props = gen["var"]("props", (0, codegen_1._)(_templateObject8$4 || (_templateObject8$4 = _taggedTemplateLiteral(["", ".evaluated.props"])), source));
          it.props = util_1.mergeEvaluated.props(gen, props, it.props, codegen_1.Name);
        }
      }
      if (it.items !== true) {
        if (schEvaluated && !schEvaluated.dynamicItems) {
          if (schEvaluated.items !== undefined) {
            it.items = util_1.mergeEvaluated.items(gen, schEvaluated.items, it.items);
          }
        } else {
          var items = gen["var"]("items", (0, codegen_1._)(_templateObject9$3 || (_templateObject9$3 = _taggedTemplateLiteral(["", ".evaluated.items"])), source));
          it.items = util_1.mergeEvaluated.items(gen, items, it.items, codegen_1.Name);
        }
      }
    }
  }
  ref.callRef = callRef;
  ref["default"] = def;
  return ref;
}

var hasRequiredCore;
function requireCore() {
  if (hasRequiredCore) return core;
  hasRequiredCore = 1;
  Object.defineProperty(core, "__esModule", {
    value: true
  });
  var id_1 = requireId();
  var ref_1 = requireRef();
  var core$1 = ["$schema", "$id", "$defs", "$vocabulary", {
    keyword: "$comment"
  }, "definitions", id_1["default"], ref_1["default"]];
  core["default"] = core$1;
  return core;
}

var validation = {};

var limitNumber = {};

var _templateObject$n, _templateObject2$l, _templateObject3$h;
var hasRequiredLimitNumber;
function requireLimitNumber() {
  if (hasRequiredLimitNumber) return limitNumber;
  hasRequiredLimitNumber = 1;
  Object.defineProperty(limitNumber, "__esModule", {
    value: true
  });
  var codegen_1 = requireCodegen();
  var ops = codegen_1.operators;
  var KWDs = {
    maximum: {
      okStr: "<=",
      ok: ops.LTE,
      fail: ops.GT
    },
    minimum: {
      okStr: ">=",
      ok: ops.GTE,
      fail: ops.LT
    },
    exclusiveMaximum: {
      okStr: "<",
      ok: ops.LT,
      fail: ops.GTE
    },
    exclusiveMinimum: {
      okStr: ">",
      ok: ops.GT,
      fail: ops.LTE
    }
  };
  var error = {
    message: function message(_ref) {
      var keyword = _ref.keyword,
        schemaCode = _ref.schemaCode;
      return (0, codegen_1.str)(_templateObject$n || (_templateObject$n = _taggedTemplateLiteral(["must be ", " ", ""])), KWDs[keyword].okStr, schemaCode);
    },
    params: function params(_ref2) {
      var keyword = _ref2.keyword,
        schemaCode = _ref2.schemaCode;
      return (0, codegen_1._)(_templateObject2$l || (_templateObject2$l = _taggedTemplateLiteral(["{comparison: ", ", limit: ", "}"])), KWDs[keyword].okStr, schemaCode);
    }
  };
  var def = {
    keyword: Object.keys(KWDs),
    type: "number",
    schemaType: "number",
    $data: true,
    error: error,
    code: function code(cxt) {
      var keyword = cxt.keyword,
        data = cxt.data,
        schemaCode = cxt.schemaCode;
      cxt.fail$data((0, codegen_1._)(_templateObject3$h || (_templateObject3$h = _taggedTemplateLiteral(["", " ", " ", " || isNaN(", ")"])), data, KWDs[keyword].fail, schemaCode, data));
    }
  };
  limitNumber["default"] = def;
  return limitNumber;
}

var multipleOf = {};

var _templateObject$m, _templateObject2$k, _templateObject3$g, _templateObject4$a, _templateObject5$7;
var hasRequiredMultipleOf;
function requireMultipleOf() {
  if (hasRequiredMultipleOf) return multipleOf;
  hasRequiredMultipleOf = 1;
  Object.defineProperty(multipleOf, "__esModule", {
    value: true
  });
  var codegen_1 = requireCodegen();
  var error = {
    message: function message(_ref) {
      var schemaCode = _ref.schemaCode;
      return (0, codegen_1.str)(_templateObject$m || (_templateObject$m = _taggedTemplateLiteral(["must be multiple of ", ""])), schemaCode);
    },
    params: function params(_ref2) {
      var schemaCode = _ref2.schemaCode;
      return (0, codegen_1._)(_templateObject2$k || (_templateObject2$k = _taggedTemplateLiteral(["{multipleOf: ", "}"])), schemaCode);
    }
  };
  var def = {
    keyword: "multipleOf",
    type: "number",
    schemaType: "number",
    $data: true,
    error: error,
    code: function code(cxt) {
      var gen = cxt.gen,
        data = cxt.data,
        schemaCode = cxt.schemaCode,
        it = cxt.it;
      // const bdt = bad$DataType(schemaCode, <string>def.schemaType, $data)
      var prec = it.opts.multipleOfPrecision;
      var res = gen["let"]("res");
      var invalid = prec ? (0, codegen_1._)(_templateObject3$g || (_templateObject3$g = _taggedTemplateLiteral(["Math.abs(Math.round(", ") - ", ") > 1e-", ""])), res, res, prec) : (0, codegen_1._)(_templateObject4$a || (_templateObject4$a = _taggedTemplateLiteral(["", " !== parseInt(", ")"])), res, res);
      cxt.fail$data((0, codegen_1._)(_templateObject5$7 || (_templateObject5$7 = _taggedTemplateLiteral(["(", " === 0 || (", " = ", "/", ", ", "))"])), schemaCode, res, data, schemaCode, invalid));
    }
  };
  multipleOf["default"] = def;
  return multipleOf;
}

var limitLength = {};

var ucs2length = {};

var hasRequiredUcs2length;
function requireUcs2length() {
  if (hasRequiredUcs2length) return ucs2length;
  hasRequiredUcs2length = 1;
  Object.defineProperty(ucs2length, "__esModule", {
    value: true
  });
  // https://mathiasbynens.be/notes/javascript-encoding
  // https://github.com/bestiejs/punycode.js - punycode.ucs2.decode
  function ucs2length$1(str) {
    var len = str.length;
    var length = 0;
    var pos = 0;
    var value;
    while (pos < len) {
      length++;
      value = str.charCodeAt(pos++);
      if (value >= 0xd800 && value <= 0xdbff && pos < len) {
        // high surrogate, and there is a next character
        value = str.charCodeAt(pos);
        if ((value & 0xfc00) === 0xdc00) pos++; // low surrogate
      }
    }
    return length;
  }
  ucs2length["default"] = ucs2length$1;
  ucs2length$1.code = 'require("ajv/dist/runtime/ucs2length").default';
  return ucs2length;
}

var _templateObject$l, _templateObject2$j, _templateObject3$f, _templateObject4$9, _templateObject5$6;
var hasRequiredLimitLength;
function requireLimitLength() {
  if (hasRequiredLimitLength) return limitLength;
  hasRequiredLimitLength = 1;
  Object.defineProperty(limitLength, "__esModule", {
    value: true
  });
  var codegen_1 = requireCodegen();
  var util_1 = requireUtil();
  var ucs2length_1 = requireUcs2length();
  var error = {
    message: function message(_ref) {
      var keyword = _ref.keyword,
        schemaCode = _ref.schemaCode;
      var comp = keyword === "maxLength" ? "more" : "fewer";
      return (0, codegen_1.str)(_templateObject$l || (_templateObject$l = _taggedTemplateLiteral(["must NOT have ", " than ", " characters"])), comp, schemaCode);
    },
    params: function params(_ref2) {
      var schemaCode = _ref2.schemaCode;
      return (0, codegen_1._)(_templateObject2$j || (_templateObject2$j = _taggedTemplateLiteral(["{limit: ", "}"])), schemaCode);
    }
  };
  var def = {
    keyword: ["maxLength", "minLength"],
    type: "string",
    schemaType: "number",
    $data: true,
    error: error,
    code: function code(cxt) {
      var keyword = cxt.keyword,
        data = cxt.data,
        schemaCode = cxt.schemaCode,
        it = cxt.it;
      var op = keyword === "maxLength" ? codegen_1.operators.GT : codegen_1.operators.LT;
      var len = it.opts.unicode === false ? (0, codegen_1._)(_templateObject3$f || (_templateObject3$f = _taggedTemplateLiteral(["", ".length"])), data) : (0, codegen_1._)(_templateObject4$9 || (_templateObject4$9 = _taggedTemplateLiteral(["", "(", ")"])), (0, util_1.useFunc)(cxt.gen, ucs2length_1["default"]), data);
      cxt.fail$data((0, codegen_1._)(_templateObject5$6 || (_templateObject5$6 = _taggedTemplateLiteral(["", " ", " ", ""])), len, op, schemaCode));
    }
  };
  limitLength["default"] = def;
  return limitLength;
}

var pattern = {};

var _templateObject$k, _templateObject2$i, _templateObject3$e, _templateObject4$8;
var hasRequiredPattern;
function requirePattern() {
  if (hasRequiredPattern) return pattern;
  hasRequiredPattern = 1;
  Object.defineProperty(pattern, "__esModule", {
    value: true
  });
  var code_1 = requireCode();
  var codegen_1 = requireCodegen();
  var error = {
    message: function message(_ref) {
      var schemaCode = _ref.schemaCode;
      return (0, codegen_1.str)(_templateObject$k || (_templateObject$k = _taggedTemplateLiteral(["must match pattern \"", "\""])), schemaCode);
    },
    params: function params(_ref2) {
      var schemaCode = _ref2.schemaCode;
      return (0, codegen_1._)(_templateObject2$i || (_templateObject2$i = _taggedTemplateLiteral(["{pattern: ", "}"])), schemaCode);
    }
  };
  var def = {
    keyword: "pattern",
    type: "string",
    schemaType: "string",
    $data: true,
    error: error,
    code: function code(cxt) {
      var data = cxt.data,
        $data = cxt.$data,
        schema = cxt.schema,
        schemaCode = cxt.schemaCode,
        it = cxt.it;
      // TODO regexp should be wrapped in try/catchs
      var u = it.opts.unicodeRegExp ? "u" : "";
      var regExp = $data ? (0, codegen_1._)(_templateObject3$e || (_templateObject3$e = _taggedTemplateLiteral(["(new RegExp(", ", ", "))"])), schemaCode, u) : (0, code_1.usePattern)(cxt, schema);
      cxt.fail$data((0, codegen_1._)(_templateObject4$8 || (_templateObject4$8 = _taggedTemplateLiteral(["!", ".test(", ")"])), regExp, data));
    }
  };
  pattern["default"] = def;
  return pattern;
}

var limitProperties = {};

var _templateObject$j, _templateObject2$h, _templateObject3$d;
var hasRequiredLimitProperties;
function requireLimitProperties() {
  if (hasRequiredLimitProperties) return limitProperties;
  hasRequiredLimitProperties = 1;
  Object.defineProperty(limitProperties, "__esModule", {
    value: true
  });
  var codegen_1 = requireCodegen();
  var error = {
    message: function message(_ref) {
      var keyword = _ref.keyword,
        schemaCode = _ref.schemaCode;
      var comp = keyword === "maxProperties" ? "more" : "fewer";
      return (0, codegen_1.str)(_templateObject$j || (_templateObject$j = _taggedTemplateLiteral(["must NOT have ", " than ", " properties"])), comp, schemaCode);
    },
    params: function params(_ref2) {
      var schemaCode = _ref2.schemaCode;
      return (0, codegen_1._)(_templateObject2$h || (_templateObject2$h = _taggedTemplateLiteral(["{limit: ", "}"])), schemaCode);
    }
  };
  var def = {
    keyword: ["maxProperties", "minProperties"],
    type: "object",
    schemaType: "number",
    $data: true,
    error: error,
    code: function code(cxt) {
      var keyword = cxt.keyword,
        data = cxt.data,
        schemaCode = cxt.schemaCode;
      var op = keyword === "maxProperties" ? codegen_1.operators.GT : codegen_1.operators.LT;
      cxt.fail$data((0, codegen_1._)(_templateObject3$d || (_templateObject3$d = _taggedTemplateLiteral(["Object.keys(", ").length ", " ", ""])), data, op, schemaCode));
    }
  };
  limitProperties["default"] = def;
  return limitProperties;
}

var required = {};

var _templateObject$i, _templateObject2$g;
var hasRequiredRequired;
function requireRequired() {
  if (hasRequiredRequired) return required;
  hasRequiredRequired = 1;
  Object.defineProperty(required, "__esModule", {
    value: true
  });
  var code_1 = requireCode();
  var codegen_1 = requireCodegen();
  var util_1 = requireUtil();
  var error = {
    message: function message(_ref) {
      var missingProperty = _ref.params.missingProperty;
      return (0, codegen_1.str)(_templateObject$i || (_templateObject$i = _taggedTemplateLiteral(["must have required property '", "'"])), missingProperty);
    },
    params: function params(_ref2) {
      var missingProperty = _ref2.params.missingProperty;
      return (0, codegen_1._)(_templateObject2$g || (_templateObject2$g = _taggedTemplateLiteral(["{missingProperty: ", "}"])), missingProperty);
    }
  };
  var def = {
    keyword: "required",
    type: "object",
    schemaType: "array",
    $data: true,
    error: error,
    code: function code(cxt) {
      var gen = cxt.gen,
        schema = cxt.schema,
        schemaCode = cxt.schemaCode,
        data = cxt.data,
        $data = cxt.$data,
        it = cxt.it;
      var opts = it.opts;
      if (!$data && schema.length === 0) return;
      var useLoop = schema.length >= opts.loopRequired;
      if (it.allErrors) allErrorsMode();else exitOnErrorMode();
      if (opts.strictRequired) {
        var props = cxt.parentSchema.properties;
        var definedProperties = cxt.it.definedProperties;
        var _iterator = _createForOfIteratorHelper(schema),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var requiredKey = _step.value;
            if ((props === null || props === void 0 ? void 0 : props[requiredKey]) === undefined && !definedProperties.has(requiredKey)) {
              var schemaPath = it.schemaEnv.baseId + it.errSchemaPath;
              var msg = "required property \"".concat(requiredKey, "\" is not defined at \"").concat(schemaPath, "\" (strictRequired)");
              (0, util_1.checkStrictMode)(it, msg, it.opts.strictRequired);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      function allErrorsMode() {
        if (useLoop || $data) {
          cxt.block$data(codegen_1.nil, loopAllRequired);
        } else {
          var _iterator2 = _createForOfIteratorHelper(schema),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var prop = _step2.value;
              (0, code_1.checkReportMissingProp)(cxt, prop);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      }
      function exitOnErrorMode() {
        var missing = gen["let"]("missing");
        if (useLoop || $data) {
          var valid = gen["let"]("valid", true);
          cxt.block$data(valid, function () {
            return loopUntilMissing(missing, valid);
          });
          cxt.ok(valid);
        } else {
          gen["if"]((0, code_1.checkMissingProp)(cxt, schema, missing));
          (0, code_1.reportMissingProp)(cxt, missing);
          gen["else"]();
        }
      }
      function loopAllRequired() {
        gen.forOf("prop", schemaCode, function (prop) {
          cxt.setParams({
            missingProperty: prop
          });
          gen["if"]((0, code_1.noPropertyInData)(gen, data, prop, opts.ownProperties), function () {
            return cxt.error();
          });
        });
      }
      function loopUntilMissing(missing, valid) {
        cxt.setParams({
          missingProperty: missing
        });
        gen.forOf(missing, schemaCode, function () {
          gen.assign(valid, (0, code_1.propertyInData)(gen, data, missing, opts.ownProperties));
          gen["if"]((0, codegen_1.not)(valid), function () {
            cxt.error();
            gen["break"]();
          });
        }, codegen_1.nil);
      }
    }
  };
  required["default"] = def;
  return required;
}

var limitItems = {};

var _templateObject$h, _templateObject2$f, _templateObject3$c;
var hasRequiredLimitItems;
function requireLimitItems() {
  if (hasRequiredLimitItems) return limitItems;
  hasRequiredLimitItems = 1;
  Object.defineProperty(limitItems, "__esModule", {
    value: true
  });
  var codegen_1 = requireCodegen();
  var error = {
    message: function message(_ref) {
      var keyword = _ref.keyword,
        schemaCode = _ref.schemaCode;
      var comp = keyword === "maxItems" ? "more" : "fewer";
      return (0, codegen_1.str)(_templateObject$h || (_templateObject$h = _taggedTemplateLiteral(["must NOT have ", " than ", " items"])), comp, schemaCode);
    },
    params: function params(_ref2) {
      var schemaCode = _ref2.schemaCode;
      return (0, codegen_1._)(_templateObject2$f || (_templateObject2$f = _taggedTemplateLiteral(["{limit: ", "}"])), schemaCode);
    }
  };
  var def = {
    keyword: ["maxItems", "minItems"],
    type: "array",
    schemaType: "number",
    $data: true,
    error: error,
    code: function code(cxt) {
      var keyword = cxt.keyword,
        data = cxt.data,
        schemaCode = cxt.schemaCode;
      var op = keyword === "maxItems" ? codegen_1.operators.GT : codegen_1.operators.LT;
      cxt.fail$data((0, codegen_1._)(_templateObject3$c || (_templateObject3$c = _taggedTemplateLiteral(["", ".length ", " ", ""])), data, op, schemaCode));
    }
  };
  limitItems["default"] = def;
  return limitItems;
}

var uniqueItems = {};

var equal = {};

var hasRequiredEqual;
function requireEqual() {
  if (hasRequiredEqual) return equal;
  hasRequiredEqual = 1;
  Object.defineProperty(equal, "__esModule", {
    value: true
  });
  // https://github.com/ajv-validator/ajv/issues/889
  var equal$1 = requireFastDeepEqual();
  equal$1.code = 'require("ajv/dist/runtime/equal").default';
  equal["default"] = equal$1;
  return equal;
}

var _templateObject$g, _templateObject2$e, _templateObject3$b, _templateObject4$7, _templateObject5$5, _templateObject6$3, _templateObject7$3, _templateObject8$3, _templateObject9$2, _templateObject10$2, _templateObject11$2, _templateObject12$2, _templateObject13$1, _templateObject14$1, _templateObject15$1, _templateObject16$1, _templateObject17$1;
var hasRequiredUniqueItems;
function requireUniqueItems() {
  if (hasRequiredUniqueItems) return uniqueItems;
  hasRequiredUniqueItems = 1;
  Object.defineProperty(uniqueItems, "__esModule", {
    value: true
  });
  var dataType_1 = requireDataType();
  var codegen_1 = requireCodegen();
  var util_1 = requireUtil();
  var equal_1 = requireEqual();
  var error = {
    message: function message(_ref) {
      var _ref$params = _ref.params,
        i = _ref$params.i,
        j = _ref$params.j;
      return (0, codegen_1.str)(_templateObject$g || (_templateObject$g = _taggedTemplateLiteral(["must NOT have duplicate items (items ## ", " and ", " are identical)"])), j, i);
    },
    params: function params(_ref2) {
      var _ref2$params = _ref2.params,
        i = _ref2$params.i,
        j = _ref2$params.j;
      return (0, codegen_1._)(_templateObject2$e || (_templateObject2$e = _taggedTemplateLiteral(["{i: ", ", j: ", "}"])), i, j);
    }
  };
  var def = {
    keyword: "uniqueItems",
    type: "array",
    schemaType: "boolean",
    $data: true,
    error: error,
    code: function code(cxt) {
      var gen = cxt.gen,
        data = cxt.data,
        $data = cxt.$data,
        schema = cxt.schema,
        parentSchema = cxt.parentSchema,
        schemaCode = cxt.schemaCode,
        it = cxt.it;
      if (!$data && !schema) return;
      var valid = gen["let"]("valid");
      var itemTypes = parentSchema.items ? (0, dataType_1.getSchemaTypes)(parentSchema.items) : [];
      cxt.block$data(valid, validateUniqueItems, (0, codegen_1._)(_templateObject3$b || (_templateObject3$b = _taggedTemplateLiteral(["", " === false"])), schemaCode));
      cxt.ok(valid);
      function validateUniqueItems() {
        var i = gen["let"]("i", (0, codegen_1._)(_templateObject4$7 || (_templateObject4$7 = _taggedTemplateLiteral(["", ".length"])), data));
        var j = gen["let"]("j");
        cxt.setParams({
          i: i,
          j: j
        });
        gen.assign(valid, true);
        gen["if"]((0, codegen_1._)(_templateObject5$5 || (_templateObject5$5 = _taggedTemplateLiteral(["", " > 1"])), i), function () {
          return (canOptimize() ? loopN : loopN2)(i, j);
        });
      }
      function canOptimize() {
        return itemTypes.length > 0 && !itemTypes.some(function (t) {
          return t === "object" || t === "array";
        });
      }
      function loopN(i, j) {
        var item = gen.name("item");
        var wrongType = (0, dataType_1.checkDataTypes)(itemTypes, item, it.opts.strictNumbers, dataType_1.DataType.Wrong);
        var indices = gen["const"]("indices", (0, codegen_1._)(_templateObject6$3 || (_templateObject6$3 = _taggedTemplateLiteral(["{}"]))));
        gen["for"]((0, codegen_1._)(_templateObject7$3 || (_templateObject7$3 = _taggedTemplateLiteral([";", "--;"])), i), function () {
          gen["let"](item, (0, codegen_1._)(_templateObject8$3 || (_templateObject8$3 = _taggedTemplateLiteral(["", "[", "]"])), data, i));
          gen["if"](wrongType, (0, codegen_1._)(_templateObject9$2 || (_templateObject9$2 = _taggedTemplateLiteral(["continue"]))));
          if (itemTypes.length > 1) gen["if"]((0, codegen_1._)(_templateObject10$2 || (_templateObject10$2 = _taggedTemplateLiteral(["typeof ", " == \"string\""])), item), (0, codegen_1._)(_templateObject11$2 || (_templateObject11$2 = _taggedTemplateLiteral(["", " += \"_\""])), item));
          gen["if"]((0, codegen_1._)(_templateObject12$2 || (_templateObject12$2 = _taggedTemplateLiteral(["typeof ", "[", "] == \"number\""])), indices, item), function () {
            gen.assign(j, (0, codegen_1._)(_templateObject13$1 || (_templateObject13$1 = _taggedTemplateLiteral(["", "[", "]"])), indices, item));
            cxt.error();
            gen.assign(valid, false)["break"]();
          }).code((0, codegen_1._)(_templateObject14$1 || (_templateObject14$1 = _taggedTemplateLiteral(["", "[", "] = ", ""])), indices, item, i));
        });
      }
      function loopN2(i, j) {
        var eql = (0, util_1.useFunc)(gen, equal_1["default"]);
        var outer = gen.name("outer");
        gen.label(outer)["for"]((0, codegen_1._)(_templateObject15$1 || (_templateObject15$1 = _taggedTemplateLiteral([";", "--;"])), i), function () {
          return gen["for"]((0, codegen_1._)(_templateObject16$1 || (_templateObject16$1 = _taggedTemplateLiteral(["", " = ", "; ", "--;"])), j, i, j), function () {
            return gen["if"]((0, codegen_1._)(_templateObject17$1 || (_templateObject17$1 = _taggedTemplateLiteral(["", "(", "[", "], ", "[", "])"])), eql, data, i, data, j), function () {
              cxt.error();
              gen.assign(valid, false)["break"](outer);
            });
          });
        });
      }
    }
  };
  uniqueItems["default"] = def;
  return uniqueItems;
}

var _const = {};

var _templateObject$f, _templateObject2$d, _templateObject3$a;
var hasRequired_const;
function require_const() {
  if (hasRequired_const) return _const;
  hasRequired_const = 1;
  Object.defineProperty(_const, "__esModule", {
    value: true
  });
  var codegen_1 = requireCodegen();
  var util_1 = requireUtil();
  var equal_1 = requireEqual();
  var error = {
    message: "must be equal to constant",
    params: function params(_ref) {
      var schemaCode = _ref.schemaCode;
      return (0, codegen_1._)(_templateObject$f || (_templateObject$f = _taggedTemplateLiteral(["{allowedValue: ", "}"])), schemaCode);
    }
  };
  var def = {
    keyword: "const",
    $data: true,
    error: error,
    code: function code(cxt) {
      var gen = cxt.gen,
        data = cxt.data,
        $data = cxt.$data,
        schemaCode = cxt.schemaCode,
        schema = cxt.schema;
      if ($data || schema && _typeof(schema) == "object") {
        cxt.fail$data((0, codegen_1._)(_templateObject2$d || (_templateObject2$d = _taggedTemplateLiteral(["!", "(", ", ", ")"])), (0, util_1.useFunc)(gen, equal_1["default"]), data, schemaCode));
      } else {
        cxt.fail((0, codegen_1._)(_templateObject3$a || (_templateObject3$a = _taggedTemplateLiteral(["", " !== ", ""])), schema, data));
      }
    }
  };
  _const["default"] = def;
  return _const;
}

var _enum = {};

var _templateObject$e, _templateObject2$c, _templateObject3$9, _templateObject4$6;
var hasRequired_enum;
function require_enum() {
  if (hasRequired_enum) return _enum;
  hasRequired_enum = 1;
  Object.defineProperty(_enum, "__esModule", {
    value: true
  });
  var codegen_1 = requireCodegen();
  var util_1 = requireUtil();
  var equal_1 = requireEqual();
  var error = {
    message: "must be equal to one of the allowed values",
    params: function params(_ref) {
      var schemaCode = _ref.schemaCode;
      return (0, codegen_1._)(_templateObject$e || (_templateObject$e = _taggedTemplateLiteral(["{allowedValues: ", "}"])), schemaCode);
    }
  };
  var def = {
    keyword: "enum",
    schemaType: "array",
    $data: true,
    error: error,
    code: function code(cxt) {
      var gen = cxt.gen,
        data = cxt.data,
        $data = cxt.$data,
        schema = cxt.schema,
        schemaCode = cxt.schemaCode,
        it = cxt.it;
      if (!$data && schema.length === 0) throw new Error("enum must have non-empty array");
      var useLoop = schema.length >= it.opts.loopEnum;
      var eql;
      var getEql = function getEql() {
        return eql !== null && eql !== void 0 ? eql : eql = (0, util_1.useFunc)(gen, equal_1["default"]);
      };
      var valid;
      if (useLoop || $data) {
        valid = gen["let"]("valid");
        cxt.block$data(valid, loopEnum);
      } else {
        /* istanbul ignore if */
        if (!Array.isArray(schema)) throw new Error("ajv implementation error");
        var vSchema = gen["const"]("vSchema", schemaCode);
        valid = (codegen_1.or).apply(void 0, _toConsumableArray(schema.map(function (_x, i) {
          return equalCode(vSchema, i);
        })));
      }
      cxt.pass(valid);
      function loopEnum() {
        gen.assign(valid, false);
        gen.forOf("v", schemaCode, function (v) {
          return gen["if"]((0, codegen_1._)(_templateObject2$c || (_templateObject2$c = _taggedTemplateLiteral(["", "(", ", ", ")"])), getEql(), data, v), function () {
            return gen.assign(valid, true)["break"]();
          });
        });
      }
      function equalCode(vSchema, i) {
        var sch = schema[i];
        return _typeof(sch) === "object" && sch !== null ? (0, codegen_1._)(_templateObject3$9 || (_templateObject3$9 = _taggedTemplateLiteral(["", "(", ", ", "[", "])"])), getEql(), data, vSchema, i) : (0, codegen_1._)(_templateObject4$6 || (_templateObject4$6 = _taggedTemplateLiteral(["", " === ", ""])), data, sch);
      }
    }
  };
  _enum["default"] = def;
  return _enum;
}

var hasRequiredValidation;
function requireValidation() {
  if (hasRequiredValidation) return validation;
  hasRequiredValidation = 1;
  Object.defineProperty(validation, "__esModule", {
    value: true
  });
  var limitNumber_1 = requireLimitNumber();
  var multipleOf_1 = requireMultipleOf();
  var limitLength_1 = requireLimitLength();
  var pattern_1 = requirePattern();
  var limitProperties_1 = requireLimitProperties();
  var required_1 = requireRequired();
  var limitItems_1 = requireLimitItems();
  var uniqueItems_1 = requireUniqueItems();
  var const_1 = require_const();
  var enum_1 = require_enum();
  var validation$1 = [
  // number
  limitNumber_1["default"], multipleOf_1["default"],
  // string
  limitLength_1["default"], pattern_1["default"],
  // object
  limitProperties_1["default"], required_1["default"],
  // array
  limitItems_1["default"], uniqueItems_1["default"],
  // any
  {
    keyword: "type",
    schemaType: ["string", "array"]
  }, {
    keyword: "nullable",
    schemaType: "boolean"
  }, const_1["default"], enum_1["default"]];
  validation["default"] = validation$1;
  return validation;
}

var applicator = {};

var additionalItems = {};

var _templateObject$d, _templateObject2$b, _templateObject3$8, _templateObject4$5, _templateObject5$4;
var hasRequiredAdditionalItems;
function requireAdditionalItems() {
  if (hasRequiredAdditionalItems) return additionalItems;
  hasRequiredAdditionalItems = 1;
  Object.defineProperty(additionalItems, "__esModule", {
    value: true
  });
  additionalItems.validateAdditionalItems = void 0;
  var codegen_1 = requireCodegen();
  var util_1 = requireUtil();
  var error = {
    message: function message(_ref) {
      var len = _ref.params.len;
      return (0, codegen_1.str)(_templateObject$d || (_templateObject$d = _taggedTemplateLiteral(["must NOT have more than ", " items"])), len);
    },
    params: function params(_ref2) {
      var len = _ref2.params.len;
      return (0, codegen_1._)(_templateObject2$b || (_templateObject2$b = _taggedTemplateLiteral(["{limit: ", "}"])), len);
    }
  };
  var def = {
    keyword: "additionalItems",
    type: "array",
    schemaType: ["boolean", "object"],
    before: "uniqueItems",
    error: error,
    code: function code(cxt) {
      var parentSchema = cxt.parentSchema,
        it = cxt.it;
      var items = parentSchema.items;
      if (!Array.isArray(items)) {
        (0, util_1.checkStrictMode)(it, '"additionalItems" is ignored when "items" is not an array of schemas');
        return;
      }
      validateAdditionalItems(cxt, items);
    }
  };
  function validateAdditionalItems(cxt, items) {
    var gen = cxt.gen,
      schema = cxt.schema,
      data = cxt.data,
      keyword = cxt.keyword,
      it = cxt.it;
    it.items = true;
    var len = gen["const"]("len", (0, codegen_1._)(_templateObject3$8 || (_templateObject3$8 = _taggedTemplateLiteral(["", ".length"])), data));
    if (schema === false) {
      cxt.setParams({
        len: items.length
      });
      cxt.pass((0, codegen_1._)(_templateObject4$5 || (_templateObject4$5 = _taggedTemplateLiteral(["", " <= ", ""])), len, items.length));
    } else if (_typeof(schema) == "object" && !(0, util_1.alwaysValidSchema)(it, schema)) {
      var valid = gen["var"]("valid", (0, codegen_1._)(_templateObject5$4 || (_templateObject5$4 = _taggedTemplateLiteral(["", " <= ", ""])), len, items.length)); // TODO var
      gen["if"]((0, codegen_1.not)(valid), function () {
        return validateItems(valid);
      });
      cxt.ok(valid);
    }
    function validateItems(valid) {
      gen.forRange("i", items.length, len, function (i) {
        cxt.subschema({
          keyword: keyword,
          dataProp: i,
          dataPropType: util_1.Type.Num
        }, valid);
        if (!it.allErrors) gen["if"]((0, codegen_1.not)(valid), function () {
          return gen["break"]();
        });
      });
    }
  }
  additionalItems.validateAdditionalItems = validateAdditionalItems;
  additionalItems["default"] = def;
  return additionalItems;
}

var prefixItems = {};

var items = {};

var _templateObject$c, _templateObject2$a;
var hasRequiredItems;
function requireItems() {
  if (hasRequiredItems) return items;
  hasRequiredItems = 1;
  Object.defineProperty(items, "__esModule", {
    value: true
  });
  items.validateTuple = void 0;
  var codegen_1 = requireCodegen();
  var util_1 = requireUtil();
  var code_1 = requireCode();
  var def = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "array", "boolean"],
    before: "uniqueItems",
    code: function code(cxt) {
      var schema = cxt.schema,
        it = cxt.it;
      if (Array.isArray(schema)) return validateTuple(cxt, "additionalItems", schema);
      it.items = true;
      if ((0, util_1.alwaysValidSchema)(it, schema)) return;
      cxt.ok((0, code_1.validateArray)(cxt));
    }
  };
  function validateTuple(cxt, extraItems) {
    var schArr = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : cxt.schema;
    var gen = cxt.gen,
      parentSchema = cxt.parentSchema,
      data = cxt.data,
      keyword = cxt.keyword,
      it = cxt.it;
    checkStrictTuple(parentSchema);
    if (it.opts.unevaluated && schArr.length && it.items !== true) {
      it.items = util_1.mergeEvaluated.items(gen, schArr.length, it.items);
    }
    var valid = gen.name("valid");
    var len = gen["const"]("len", (0, codegen_1._)(_templateObject$c || (_templateObject$c = _taggedTemplateLiteral(["", ".length"])), data));
    schArr.forEach(function (sch, i) {
      if ((0, util_1.alwaysValidSchema)(it, sch)) return;
      gen["if"]((0, codegen_1._)(_templateObject2$a || (_templateObject2$a = _taggedTemplateLiteral(["", " > ", ""])), len, i), function () {
        return cxt.subschema({
          keyword: keyword,
          schemaProp: i,
          dataProp: i
        }, valid);
      });
      cxt.ok(valid);
    });
    function checkStrictTuple(sch) {
      var opts = it.opts,
        errSchemaPath = it.errSchemaPath;
      var l = schArr.length;
      var fullTuple = l === sch.minItems && (l === sch.maxItems || sch[extraItems] === false);
      if (opts.strictTuples && !fullTuple) {
        var msg = "\"".concat(keyword, "\" is ").concat(l, "-tuple, but minItems or maxItems/").concat(extraItems, " are not specified or different at path \"").concat(errSchemaPath, "\"");
        (0, util_1.checkStrictMode)(it, msg, opts.strictTuples);
      }
    }
  }
  items.validateTuple = validateTuple;
  items["default"] = def;
  return items;
}

var hasRequiredPrefixItems;
function requirePrefixItems() {
  if (hasRequiredPrefixItems) return prefixItems;
  hasRequiredPrefixItems = 1;
  Object.defineProperty(prefixItems, "__esModule", {
    value: true
  });
  var items_1 = requireItems();
  var def = {
    keyword: "prefixItems",
    type: "array",
    schemaType: ["array"],
    before: "uniqueItems",
    code: function code(cxt) {
      return (0, items_1.validateTuple)(cxt, "items");
    }
  };
  prefixItems["default"] = def;
  return prefixItems;
}

var items2020 = {};

var _templateObject$b, _templateObject2$9;
var hasRequiredItems2020;
function requireItems2020() {
  if (hasRequiredItems2020) return items2020;
  hasRequiredItems2020 = 1;
  Object.defineProperty(items2020, "__esModule", {
    value: true
  });
  var codegen_1 = requireCodegen();
  var util_1 = requireUtil();
  var code_1 = requireCode();
  var additionalItems_1 = requireAdditionalItems();
  var error = {
    message: function message(_ref) {
      var len = _ref.params.len;
      return (0, codegen_1.str)(_templateObject$b || (_templateObject$b = _taggedTemplateLiteral(["must NOT have more than ", " items"])), len);
    },
    params: function params(_ref2) {
      var len = _ref2.params.len;
      return (0, codegen_1._)(_templateObject2$9 || (_templateObject2$9 = _taggedTemplateLiteral(["{limit: ", "}"])), len);
    }
  };
  var def = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    error: error,
    code: function code(cxt) {
      var schema = cxt.schema,
        parentSchema = cxt.parentSchema,
        it = cxt.it;
      var prefixItems = parentSchema.prefixItems;
      it.items = true;
      if ((0, util_1.alwaysValidSchema)(it, schema)) return;
      if (prefixItems) (0, additionalItems_1.validateAdditionalItems)(cxt, prefixItems);else cxt.ok((0, code_1.validateArray)(cxt));
    }
  };
  items2020["default"] = def;
  return items2020;
}

var contains = {};

var _templateObject$a, _templateObject2$8, _templateObject3$7, _templateObject4$4, _templateObject5$3, _templateObject6$2, _templateObject7$2, _templateObject8$2, _templateObject9$1, _templateObject10$1, _templateObject11$1, _templateObject12$1;
var hasRequiredContains;
function requireContains() {
  if (hasRequiredContains) return contains;
  hasRequiredContains = 1;
  Object.defineProperty(contains, "__esModule", {
    value: true
  });
  var codegen_1 = requireCodegen();
  var util_1 = requireUtil();
  var error = {
    message: function message(_ref) {
      var _ref$params = _ref.params,
        min = _ref$params.min,
        max = _ref$params.max;
      return max === undefined ? (0, codegen_1.str)(_templateObject$a || (_templateObject$a = _taggedTemplateLiteral(["must contain at least ", " valid item(s)"])), min) : (0, codegen_1.str)(_templateObject2$8 || (_templateObject2$8 = _taggedTemplateLiteral(["must contain at least ", " and no more than ", " valid item(s)"])), min, max);
    },
    params: function params(_ref2) {
      var _ref2$params = _ref2.params,
        min = _ref2$params.min,
        max = _ref2$params.max;
      return max === undefined ? (0, codegen_1._)(_templateObject3$7 || (_templateObject3$7 = _taggedTemplateLiteral(["{minContains: ", "}"])), min) : (0, codegen_1._)(_templateObject4$4 || (_templateObject4$4 = _taggedTemplateLiteral(["{minContains: ", ", maxContains: ", "}"])), min, max);
    }
  };
  var def = {
    keyword: "contains",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    trackErrors: true,
    error: error,
    code: function code(cxt) {
      var gen = cxt.gen,
        schema = cxt.schema,
        parentSchema = cxt.parentSchema,
        data = cxt.data,
        it = cxt.it;
      var min;
      var max;
      var minContains = parentSchema.minContains,
        maxContains = parentSchema.maxContains;
      if (it.opts.next) {
        min = minContains === undefined ? 1 : minContains;
        max = maxContains;
      } else {
        min = 1;
      }
      var len = gen["const"]("len", (0, codegen_1._)(_templateObject5$3 || (_templateObject5$3 = _taggedTemplateLiteral(["", ".length"])), data));
      cxt.setParams({
        min: min,
        max: max
      });
      if (max === undefined && min === 0) {
        (0, util_1.checkStrictMode)(it, "\"minContains\" == 0 without \"maxContains\": \"contains\" keyword ignored");
        return;
      }
      if (max !== undefined && min > max) {
        (0, util_1.checkStrictMode)(it, "\"minContains\" > \"maxContains\" is always invalid");
        cxt.fail();
        return;
      }
      if ((0, util_1.alwaysValidSchema)(it, schema)) {
        var cond = (0, codegen_1._)(_templateObject6$2 || (_templateObject6$2 = _taggedTemplateLiteral(["", " >= ", ""])), len, min);
        if (max !== undefined) cond = (0, codegen_1._)(_templateObject7$2 || (_templateObject7$2 = _taggedTemplateLiteral(["", " && ", " <= ", ""])), cond, len, max);
        cxt.pass(cond);
        return;
      }
      it.items = true;
      var valid = gen.name("valid");
      if (max === undefined && min === 1) {
        validateItems(valid, function () {
          return gen["if"](valid, function () {
            return gen["break"]();
          });
        });
      } else if (min === 0) {
        gen["let"](valid, true);
        if (max !== undefined) gen["if"]((0, codegen_1._)(_templateObject8$2 || (_templateObject8$2 = _taggedTemplateLiteral(["", ".length > 0"])), data), validateItemsWithCount);
      } else {
        gen["let"](valid, false);
        validateItemsWithCount();
      }
      cxt.result(valid, function () {
        return cxt.reset();
      });
      function validateItemsWithCount() {
        var schValid = gen.name("_valid");
        var count = gen["let"]("count", 0);
        validateItems(schValid, function () {
          return gen["if"](schValid, function () {
            return checkLimits(count);
          });
        });
      }
      function validateItems(_valid, block) {
        gen.forRange("i", 0, len, function (i) {
          cxt.subschema({
            keyword: "contains",
            dataProp: i,
            dataPropType: util_1.Type.Num,
            compositeRule: true
          }, _valid);
          block();
        });
      }
      function checkLimits(count) {
        gen.code((0, codegen_1._)(_templateObject9$1 || (_templateObject9$1 = _taggedTemplateLiteral(["", "++"])), count));
        if (max === undefined) {
          gen["if"]((0, codegen_1._)(_templateObject10$1 || (_templateObject10$1 = _taggedTemplateLiteral(["", " >= ", ""])), count, min), function () {
            return gen.assign(valid, true)["break"]();
          });
        } else {
          gen["if"]((0, codegen_1._)(_templateObject11$1 || (_templateObject11$1 = _taggedTemplateLiteral(["", " > ", ""])), count, max), function () {
            return gen.assign(valid, false)["break"]();
          });
          if (min === 1) gen.assign(valid, true);else gen["if"]((0, codegen_1._)(_templateObject12$1 || (_templateObject12$1 = _taggedTemplateLiteral(["", " >= ", ""])), count, min), function () {
            return gen.assign(valid, true);
          });
        }
      }
    }
  };
  contains["default"] = def;
  return contains;
}

var dependencies = {};

var _templateObject$9, _templateObject2$7, _templateObject3$6;
var hasRequiredDependencies;
function requireDependencies() {
  if (hasRequiredDependencies) return dependencies;
  hasRequiredDependencies = 1;
  (function (exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.validateSchemaDeps = exports.validatePropertyDeps = exports.error = void 0;
    var codegen_1 = requireCodegen();
    var util_1 = requireUtil();
    var code_1 = requireCode();
    exports.error = {
      message: function message(_ref) {
        var _ref$params = _ref.params,
          property = _ref$params.property,
          depsCount = _ref$params.depsCount,
          deps = _ref$params.deps;
        var property_ies = depsCount === 1 ? "property" : "properties";
        return (0, codegen_1.str)(_templateObject$9 || (_templateObject$9 = _taggedTemplateLiteral(["must have ", " ", " when property ", " is present"])), property_ies, deps, property);
      },
      params: function params(_ref2) {
        var _ref2$params = _ref2.params,
          property = _ref2$params.property,
          depsCount = _ref2$params.depsCount,
          deps = _ref2$params.deps,
          missingProperty = _ref2$params.missingProperty;
        return (0, codegen_1._)(_templateObject2$7 || (_templateObject2$7 = _taggedTemplateLiteral(["{property: ", ",\n    missingProperty: ", ",\n    depsCount: ", ",\n    deps: ", "}"])), property, missingProperty, depsCount, deps);
      } // TODO change to reference
    };
    var def = {
      keyword: "dependencies",
      type: "object",
      schemaType: "object",
      error: exports.error,
      code: function code(cxt) {
        var _splitDependencies = splitDependencies(cxt),
          _splitDependencies2 = _slicedToArray(_splitDependencies, 2),
          propDeps = _splitDependencies2[0],
          schDeps = _splitDependencies2[1];
        validatePropertyDeps(cxt, propDeps);
        validateSchemaDeps(cxt, schDeps);
      }
    };
    function splitDependencies(_ref3) {
      var schema = _ref3.schema;
      var propertyDeps = {};
      var schemaDeps = {};
      for (var key in schema) {
        if (key === "__proto__") continue;
        var deps = Array.isArray(schema[key]) ? propertyDeps : schemaDeps;
        deps[key] = schema[key];
      }
      return [propertyDeps, schemaDeps];
    }
    function validatePropertyDeps(cxt) {
      var propertyDeps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : cxt.schema;
      var gen = cxt.gen,
        data = cxt.data,
        it = cxt.it;
      if (Object.keys(propertyDeps).length === 0) return;
      var missing = gen["let"]("missing");
      var _loop = function _loop() {
        var deps = propertyDeps[prop];
        if (deps.length === 0) return 1; // continue
        var hasProperty = (0, code_1.propertyInData)(gen, data, prop, it.opts.ownProperties);
        cxt.setParams({
          property: prop,
          depsCount: deps.length,
          deps: deps.join(", ")
        });
        if (it.allErrors) {
          gen["if"](hasProperty, function () {
            var _iterator = _createForOfIteratorHelper(deps),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var depProp = _step.value;
                (0, code_1.checkReportMissingProp)(cxt, depProp);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          });
        } else {
          gen["if"]((0, codegen_1._)(_templateObject3$6 || (_templateObject3$6 = _taggedTemplateLiteral(["", " && (", ")"])), hasProperty, (0, code_1.checkMissingProp)(cxt, deps, missing)));
          (0, code_1.reportMissingProp)(cxt, missing);
          gen["else"]();
        }
      };
      for (var prop in propertyDeps) {
        if (_loop()) continue;
      }
    }
    exports.validatePropertyDeps = validatePropertyDeps;
    function validateSchemaDeps(cxt) {
      var schemaDeps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : cxt.schema;
      var gen = cxt.gen,
        data = cxt.data,
        keyword = cxt.keyword,
        it = cxt.it;
      var valid = gen.name("valid");
      var _loop2 = function _loop2(prop) {
        if ((0, util_1.alwaysValidSchema)(it, schemaDeps[prop])) return 1; // continue
        gen["if"]((0, code_1.propertyInData)(gen, data, prop, it.opts.ownProperties), function () {
          var schCxt = cxt.subschema({
            keyword: keyword,
            schemaProp: prop
          }, valid);
          cxt.mergeValidEvaluated(schCxt, valid);
        }, function () {
          return gen["var"](valid, true);
        } // TODO var
        );
        cxt.ok(valid);
      };
      for (var prop in schemaDeps) {
        if (_loop2(prop)) continue;
      }
    }
    exports.validateSchemaDeps = validateSchemaDeps;
    exports["default"] = def;
  })(dependencies);
  return dependencies;
}

var propertyNames = {};

var _templateObject$8;
var hasRequiredPropertyNames;
function requirePropertyNames() {
  if (hasRequiredPropertyNames) return propertyNames;
  hasRequiredPropertyNames = 1;
  Object.defineProperty(propertyNames, "__esModule", {
    value: true
  });
  var codegen_1 = requireCodegen();
  var util_1 = requireUtil();
  var error = {
    message: "property name must be valid",
    params: function params(_ref) {
      var _params = _ref.params;
      return (0, codegen_1._)(_templateObject$8 || (_templateObject$8 = _taggedTemplateLiteral(["{propertyName: ", "}"])), _params.propertyName);
    }
  };
  var def = {
    keyword: "propertyNames",
    type: "object",
    schemaType: ["object", "boolean"],
    error: error,
    code: function code(cxt) {
      var gen = cxt.gen,
        schema = cxt.schema,
        data = cxt.data,
        it = cxt.it;
      if ((0, util_1.alwaysValidSchema)(it, schema)) return;
      var valid = gen.name("valid");
      gen.forIn("key", data, function (key) {
        cxt.setParams({
          propertyName: key
        });
        cxt.subschema({
          keyword: "propertyNames",
          data: key,
          dataTypes: ["string"],
          propertyName: key,
          compositeRule: true
        }, valid);
        gen["if"]((0, codegen_1.not)(valid), function () {
          cxt.error(true);
          if (!it.allErrors) gen["break"]();
        });
      });
      cxt.ok(valid);
    }
  };
  propertyNames["default"] = def;
  return propertyNames;
}

var additionalProperties = {};

var _templateObject$7, _templateObject2$6, _templateObject3$5, _templateObject4$3, _templateObject5$2;
var hasRequiredAdditionalProperties;
function requireAdditionalProperties() {
  if (hasRequiredAdditionalProperties) return additionalProperties;
  hasRequiredAdditionalProperties = 1;
  Object.defineProperty(additionalProperties, "__esModule", {
    value: true
  });
  var code_1 = requireCode();
  var codegen_1 = requireCodegen();
  var names_1 = requireNames();
  var util_1 = requireUtil();
  var error = {
    message: "must NOT have additional properties",
    params: function params(_ref) {
      var _params = _ref.params;
      return (0, codegen_1._)(_templateObject$7 || (_templateObject$7 = _taggedTemplateLiteral(["{additionalProperty: ", "}"])), _params.additionalProperty);
    }
  };
  var def = {
    keyword: "additionalProperties",
    type: ["object"],
    schemaType: ["boolean", "object"],
    allowUndefined: true,
    trackErrors: true,
    error: error,
    code: function code(cxt) {
      var gen = cxt.gen,
        schema = cxt.schema,
        parentSchema = cxt.parentSchema,
        data = cxt.data,
        errsCount = cxt.errsCount,
        it = cxt.it;
      /* istanbul ignore if */
      if (!errsCount) throw new Error("ajv implementation error");
      var allErrors = it.allErrors,
        opts = it.opts;
      it.props = true;
      if (opts.removeAdditional !== "all" && (0, util_1.alwaysValidSchema)(it, schema)) return;
      var props = (0, code_1.allSchemaProperties)(parentSchema.properties);
      var patProps = (0, code_1.allSchemaProperties)(parentSchema.patternProperties);
      checkAdditionalProperties();
      cxt.ok((0, codegen_1._)(_templateObject2$6 || (_templateObject2$6 = _taggedTemplateLiteral(["", " === ", ""])), errsCount, names_1["default"].errors));
      function checkAdditionalProperties() {
        gen.forIn("key", data, function (key) {
          if (!props.length && !patProps.length) additionalPropertyCode(key);else gen["if"](isAdditional(key), function () {
            return additionalPropertyCode(key);
          });
        });
      }
      function isAdditional(key) {
        var definedProp;
        if (props.length > 8) {
          // TODO maybe an option instead of hard-coded 8?
          var propsSchema = (0, util_1.schemaRefOrVal)(it, parentSchema.properties, "properties");
          definedProp = (0, code_1.isOwnProperty)(gen, propsSchema, key);
        } else if (props.length) {
          definedProp = (codegen_1.or).apply(void 0, _toConsumableArray(props.map(function (p) {
            return (0, codegen_1._)(_templateObject3$5 || (_templateObject3$5 = _taggedTemplateLiteral(["", " === ", ""])), key, p);
          })));
        } else {
          definedProp = codegen_1.nil;
        }
        if (patProps.length) {
          definedProp = (codegen_1.or).apply(void 0, [definedProp].concat(_toConsumableArray(patProps.map(function (p) {
            return (0, codegen_1._)(_templateObject4$3 || (_templateObject4$3 = _taggedTemplateLiteral(["", ".test(", ")"])), (0, code_1.usePattern)(cxt, p), key);
          }))));
        }
        return (0, codegen_1.not)(definedProp);
      }
      function deleteAdditional(key) {
        gen.code((0, codegen_1._)(_templateObject5$2 || (_templateObject5$2 = _taggedTemplateLiteral(["delete ", "[", "]"])), data, key));
      }
      function additionalPropertyCode(key) {
        if (opts.removeAdditional === "all" || opts.removeAdditional && schema === false) {
          deleteAdditional(key);
          return;
        }
        if (schema === false) {
          cxt.setParams({
            additionalProperty: key
          });
          cxt.error();
          if (!allErrors) gen["break"]();
          return;
        }
        if (_typeof(schema) == "object" && !(0, util_1.alwaysValidSchema)(it, schema)) {
          var valid = gen.name("valid");
          if (opts.removeAdditional === "failing") {
            applyAdditionalSchema(key, valid, false);
            gen["if"]((0, codegen_1.not)(valid), function () {
              cxt.reset();
              deleteAdditional(key);
            });
          } else {
            applyAdditionalSchema(key, valid);
            if (!allErrors) gen["if"]((0, codegen_1.not)(valid), function () {
              return gen["break"]();
            });
          }
        }
      }
      function applyAdditionalSchema(key, valid, errors) {
        var subschema = {
          keyword: "additionalProperties",
          dataProp: key,
          dataPropType: util_1.Type.Str
        };
        if (errors === false) {
          Object.assign(subschema, {
            compositeRule: true,
            createErrors: false,
            allErrors: false
          });
        }
        cxt.subschema(subschema, valid);
      }
    }
  };
  additionalProperties["default"] = def;
  return additionalProperties;
}

var properties$1 = {};

var hasRequiredProperties;
function requireProperties() {
  if (hasRequiredProperties) return properties$1;
  hasRequiredProperties = 1;
  Object.defineProperty(properties$1, "__esModule", {
    value: true
  });
  var validate_1 = requireValidate();
  var code_1 = requireCode();
  var util_1 = requireUtil();
  var additionalProperties_1 = requireAdditionalProperties();
  var def = {
    keyword: "properties",
    type: "object",
    schemaType: "object",
    code: function code(cxt) {
      var gen = cxt.gen,
        schema = cxt.schema,
        parentSchema = cxt.parentSchema,
        data = cxt.data,
        it = cxt.it;
      if (it.opts.removeAdditional === "all" && parentSchema.additionalProperties === undefined) {
        additionalProperties_1["default"].code(new validate_1.KeywordCxt(it, additionalProperties_1["default"], "additionalProperties"));
      }
      var allProps = (0, code_1.allSchemaProperties)(schema);
      var _iterator = _createForOfIteratorHelper(allProps),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var prop = _step.value;
          it.definedProperties.add(prop);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (it.opts.unevaluated && allProps.length && it.props !== true) {
        it.props = util_1.mergeEvaluated.props(gen, (0, util_1.toHash)(allProps), it.props);
      }
      var properties = allProps.filter(function (p) {
        return !(0, util_1.alwaysValidSchema)(it, schema[p]);
      });
      if (properties.length === 0) return;
      var valid = gen.name("valid");
      var _iterator2 = _createForOfIteratorHelper(properties),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _prop = _step2.value;
          if (hasDefault(_prop)) {
            applyPropertySchema(_prop);
          } else {
            gen["if"]((0, code_1.propertyInData)(gen, data, _prop, it.opts.ownProperties));
            applyPropertySchema(_prop);
            if (!it.allErrors) gen["else"]()["var"](valid, true);
            gen.endIf();
          }
          cxt.it.definedProperties.add(_prop);
          cxt.ok(valid);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      function hasDefault(prop) {
        return it.opts.useDefaults && !it.compositeRule && schema[prop]["default"] !== undefined;
      }
      function applyPropertySchema(prop) {
        cxt.subschema({
          keyword: "properties",
          schemaProp: prop,
          dataProp: prop
        }, valid);
      }
    }
  };
  properties$1["default"] = def;
  return properties$1;
}

var patternProperties = {};

var _templateObject$6, _templateObject2$5;
var hasRequiredPatternProperties;
function requirePatternProperties() {
  if (hasRequiredPatternProperties) return patternProperties;
  hasRequiredPatternProperties = 1;
  Object.defineProperty(patternProperties, "__esModule", {
    value: true
  });
  var code_1 = requireCode();
  var codegen_1 = requireCodegen();
  var util_1 = requireUtil();
  var util_2 = requireUtil();
  var def = {
    keyword: "patternProperties",
    type: "object",
    schemaType: "object",
    code: function code(cxt) {
      var gen = cxt.gen,
        schema = cxt.schema,
        data = cxt.data,
        parentSchema = cxt.parentSchema,
        it = cxt.it;
      var opts = it.opts;
      var patterns = (0, code_1.allSchemaProperties)(schema);
      var alwaysValidPatterns = patterns.filter(function (p) {
        return (0, util_1.alwaysValidSchema)(it, schema[p]);
      });
      if (patterns.length === 0 || alwaysValidPatterns.length === patterns.length && (!it.opts.unevaluated || it.props === true)) {
        return;
      }
      var checkProperties = opts.strictSchema && !opts.allowMatchingProperties && parentSchema.properties;
      var valid = gen.name("valid");
      if (it.props !== true && !(it.props instanceof codegen_1.Name)) {
        it.props = (0, util_2.evaluatedPropsToName)(gen, it.props);
      }
      var props = it.props;
      validatePatternProperties();
      function validatePatternProperties() {
        var _iterator = _createForOfIteratorHelper(patterns),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var pat = _step.value;
            if (checkProperties) checkMatchingProperties(pat);
            if (it.allErrors) {
              validateProperties(pat);
            } else {
              gen["var"](valid, true); // TODO var
              validateProperties(pat);
              gen["if"](valid);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      function checkMatchingProperties(pat) {
        for (var prop in checkProperties) {
          if (new RegExp(pat).test(prop)) {
            (0, util_1.checkStrictMode)(it, "property ".concat(prop, " matches pattern ").concat(pat, " (use allowMatchingProperties)"));
          }
        }
      }
      function validateProperties(pat) {
        gen.forIn("key", data, function (key) {
          gen["if"]((0, codegen_1._)(_templateObject$6 || (_templateObject$6 = _taggedTemplateLiteral(["", ".test(", ")"])), (0, code_1.usePattern)(cxt, pat), key), function () {
            var alwaysValid = alwaysValidPatterns.includes(pat);
            if (!alwaysValid) {
              cxt.subschema({
                keyword: "patternProperties",
                schemaProp: pat,
                dataProp: key,
                dataPropType: util_2.Type.Str
              }, valid);
            }
            if (it.opts.unevaluated && props !== true) {
              gen.assign((0, codegen_1._)(_templateObject2$5 || (_templateObject2$5 = _taggedTemplateLiteral(["", "[", "]"])), props, key), true);
            } else if (!alwaysValid && !it.allErrors) {
              // can short-circuit if `unevaluatedProperties` is not supported (opts.next === false)
              // or if all properties were evaluated (props === true)
              gen["if"]((0, codegen_1.not)(valid), function () {
                return gen["break"]();
              });
            }
          });
        });
      }
    }
  };
  patternProperties["default"] = def;
  return patternProperties;
}

var not = {};

var hasRequiredNot;
function requireNot() {
  if (hasRequiredNot) return not;
  hasRequiredNot = 1;
  Object.defineProperty(not, "__esModule", {
    value: true
  });
  var util_1 = requireUtil();
  var def = {
    keyword: "not",
    schemaType: ["object", "boolean"],
    trackErrors: true,
    code: function code(cxt) {
      var gen = cxt.gen,
        schema = cxt.schema,
        it = cxt.it;
      if ((0, util_1.alwaysValidSchema)(it, schema)) {
        cxt.fail();
        return;
      }
      var valid = gen.name("valid");
      cxt.subschema({
        keyword: "not",
        compositeRule: true,
        createErrors: false,
        allErrors: false
      }, valid);
      cxt.failResult(valid, function () {
        return cxt.reset();
      }, function () {
        return cxt.error();
      });
    },
    error: {
      message: "must NOT be valid"
    }
  };
  not["default"] = def;
  return not;
}

var anyOf = {};

var hasRequiredAnyOf;
function requireAnyOf() {
  if (hasRequiredAnyOf) return anyOf;
  hasRequiredAnyOf = 1;
  Object.defineProperty(anyOf, "__esModule", {
    value: true
  });
  var code_1 = requireCode();
  var def = {
    keyword: "anyOf",
    schemaType: "array",
    trackErrors: true,
    code: code_1.validateUnion,
    error: {
      message: "must match a schema in anyOf"
    }
  };
  anyOf["default"] = def;
  return anyOf;
}

var oneOf = {};

var _templateObject$5, _templateObject2$4, _templateObject3$4;
var hasRequiredOneOf;
function requireOneOf() {
  if (hasRequiredOneOf) return oneOf;
  hasRequiredOneOf = 1;
  Object.defineProperty(oneOf, "__esModule", {
    value: true
  });
  var codegen_1 = requireCodegen();
  var util_1 = requireUtil();
  var error = {
    message: "must match exactly one schema in oneOf",
    params: function params(_ref) {
      var _params = _ref.params;
      return (0, codegen_1._)(_templateObject$5 || (_templateObject$5 = _taggedTemplateLiteral(["{passingSchemas: ", "}"])), _params.passing);
    }
  };
  var def = {
    keyword: "oneOf",
    schemaType: "array",
    trackErrors: true,
    error: error,
    code: function code(cxt) {
      var gen = cxt.gen,
        schema = cxt.schema,
        parentSchema = cxt.parentSchema,
        it = cxt.it;
      /* istanbul ignore if */
      if (!Array.isArray(schema)) throw new Error("ajv implementation error");
      if (it.opts.discriminator && parentSchema.discriminator) return;
      var schArr = schema;
      var valid = gen["let"]("valid", false);
      var passing = gen["let"]("passing", null);
      var schValid = gen.name("_valid");
      cxt.setParams({
        passing: passing
      });
      // TODO possibly fail straight away (with warning or exception) if there are two empty always valid schemas
      gen.block(validateOneOf);
      cxt.result(valid, function () {
        return cxt.reset();
      }, function () {
        return cxt.error(true);
      });
      function validateOneOf() {
        schArr.forEach(function (sch, i) {
          var schCxt;
          if ((0, util_1.alwaysValidSchema)(it, sch)) {
            gen["var"](schValid, true);
          } else {
            schCxt = cxt.subschema({
              keyword: "oneOf",
              schemaProp: i,
              compositeRule: true
            }, schValid);
          }
          if (i > 0) {
            gen["if"]((0, codegen_1._)(_templateObject2$4 || (_templateObject2$4 = _taggedTemplateLiteral(["", " && ", ""])), schValid, valid)).assign(valid, false).assign(passing, (0, codegen_1._)(_templateObject3$4 || (_templateObject3$4 = _taggedTemplateLiteral(["[", ", ", "]"])), passing, i))["else"]();
          }
          gen["if"](schValid, function () {
            gen.assign(valid, true);
            gen.assign(passing, i);
            if (schCxt) cxt.mergeEvaluated(schCxt, codegen_1.Name);
          });
        });
      }
    }
  };
  oneOf["default"] = def;
  return oneOf;
}

var allOf = {};

var hasRequiredAllOf;
function requireAllOf() {
  if (hasRequiredAllOf) return allOf;
  hasRequiredAllOf = 1;
  Object.defineProperty(allOf, "__esModule", {
    value: true
  });
  var util_1 = requireUtil();
  var def = {
    keyword: "allOf",
    schemaType: "array",
    code: function code(cxt) {
      var gen = cxt.gen,
        schema = cxt.schema,
        it = cxt.it;
      /* istanbul ignore if */
      if (!Array.isArray(schema)) throw new Error("ajv implementation error");
      var valid = gen.name("valid");
      schema.forEach(function (sch, i) {
        if ((0, util_1.alwaysValidSchema)(it, sch)) return;
        var schCxt = cxt.subschema({
          keyword: "allOf",
          schemaProp: i
        }, valid);
        cxt.ok(valid);
        cxt.mergeEvaluated(schCxt);
      });
    }
  };
  allOf["default"] = def;
  return allOf;
}

var _if = {};

var _templateObject$4, _templateObject2$3, _templateObject3$3;
var hasRequired_if;
function require_if() {
  if (hasRequired_if) return _if;
  hasRequired_if = 1;
  Object.defineProperty(_if, "__esModule", {
    value: true
  });
  var codegen_1 = requireCodegen();
  var util_1 = requireUtil();
  var error = {
    message: function message(_ref) {
      var params = _ref.params;
      return (0, codegen_1.str)(_templateObject$4 || (_templateObject$4 = _taggedTemplateLiteral(["must match \"", "\" schema"])), params.ifClause);
    },
    params: function params(_ref2) {
      var _params = _ref2.params;
      return (0, codegen_1._)(_templateObject2$3 || (_templateObject2$3 = _taggedTemplateLiteral(["{failingKeyword: ", "}"])), _params.ifClause);
    }
  };
  var def = {
    keyword: "if",
    schemaType: ["object", "boolean"],
    trackErrors: true,
    error: error,
    code: function code(cxt) {
      var gen = cxt.gen,
        parentSchema = cxt.parentSchema,
        it = cxt.it;
      if (parentSchema.then === undefined && parentSchema["else"] === undefined) {
        (0, util_1.checkStrictMode)(it, '"if" without "then" and "else" is ignored');
      }
      var hasThen = hasSchema(it, "then");
      var hasElse = hasSchema(it, "else");
      if (!hasThen && !hasElse) return;
      var valid = gen["let"]("valid", true);
      var schValid = gen.name("_valid");
      validateIf();
      cxt.reset();
      if (hasThen && hasElse) {
        var ifClause = gen["let"]("ifClause");
        cxt.setParams({
          ifClause: ifClause
        });
        gen["if"](schValid, validateClause("then", ifClause), validateClause("else", ifClause));
      } else if (hasThen) {
        gen["if"](schValid, validateClause("then"));
      } else {
        gen["if"]((0, codegen_1.not)(schValid), validateClause("else"));
      }
      cxt.pass(valid, function () {
        return cxt.error(true);
      });
      function validateIf() {
        var schCxt = cxt.subschema({
          keyword: "if",
          compositeRule: true,
          createErrors: false,
          allErrors: false
        }, schValid);
        cxt.mergeEvaluated(schCxt);
      }
      function validateClause(keyword, ifClause) {
        return function () {
          var schCxt = cxt.subschema({
            keyword: keyword
          }, schValid);
          gen.assign(valid, schValid);
          cxt.mergeValidEvaluated(schCxt, valid);
          if (ifClause) gen.assign(ifClause, (0, codegen_1._)(_templateObject3$3 || (_templateObject3$3 = _taggedTemplateLiteral(["", ""])), keyword));else cxt.setParams({
            ifClause: keyword
          });
        };
      }
    }
  };
  function hasSchema(it, keyword) {
    var schema = it.schema[keyword];
    return schema !== undefined && !(0, util_1.alwaysValidSchema)(it, schema);
  }
  _if["default"] = def;
  return _if;
}

var thenElse = {};

var hasRequiredThenElse;
function requireThenElse() {
  if (hasRequiredThenElse) return thenElse;
  hasRequiredThenElse = 1;
  Object.defineProperty(thenElse, "__esModule", {
    value: true
  });
  var util_1 = requireUtil();
  var def = {
    keyword: ["then", "else"],
    schemaType: ["object", "boolean"],
    code: function code(_ref) {
      var keyword = _ref.keyword,
        parentSchema = _ref.parentSchema,
        it = _ref.it;
      if (parentSchema["if"] === undefined) (0, util_1.checkStrictMode)(it, "\"".concat(keyword, "\" without \"if\" is ignored"));
    }
  };
  thenElse["default"] = def;
  return thenElse;
}

var hasRequiredApplicator;
function requireApplicator() {
  if (hasRequiredApplicator) return applicator;
  hasRequiredApplicator = 1;
  Object.defineProperty(applicator, "__esModule", {
    value: true
  });
  var additionalItems_1 = requireAdditionalItems();
  var prefixItems_1 = requirePrefixItems();
  var items_1 = requireItems();
  var items2020_1 = requireItems2020();
  var contains_1 = requireContains();
  var dependencies_1 = requireDependencies();
  var propertyNames_1 = requirePropertyNames();
  var additionalProperties_1 = requireAdditionalProperties();
  var properties_1 = requireProperties();
  var patternProperties_1 = requirePatternProperties();
  var not_1 = requireNot();
  var anyOf_1 = requireAnyOf();
  var oneOf_1 = requireOneOf();
  var allOf_1 = requireAllOf();
  var if_1 = require_if();
  var thenElse_1 = requireThenElse();
  function getApplicator() {
    var draft2020 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var applicator = [
    // any
    not_1["default"], anyOf_1["default"], oneOf_1["default"], allOf_1["default"], if_1["default"], thenElse_1["default"],
    // object
    propertyNames_1["default"], additionalProperties_1["default"], dependencies_1["default"], properties_1["default"], patternProperties_1["default"]];
    // array
    if (draft2020) applicator.push(prefixItems_1["default"], items2020_1["default"]);else applicator.push(additionalItems_1["default"], items_1["default"]);
    applicator.push(contains_1["default"]);
    return applicator;
  }
  applicator["default"] = getApplicator;
  return applicator;
}

var format$1 = {};

var format = {};

var _templateObject$3, _templateObject2$2, _templateObject3$2, _templateObject4$2, _templateObject5$1, _templateObject6$1, _templateObject7$1, _templateObject8$1, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17;
var hasRequiredFormat$1;
function requireFormat$1() {
  if (hasRequiredFormat$1) return format;
  hasRequiredFormat$1 = 1;
  Object.defineProperty(format, "__esModule", {
    value: true
  });
  var codegen_1 = requireCodegen();
  var error = {
    message: function message(_ref) {
      var schemaCode = _ref.schemaCode;
      return (0, codegen_1.str)(_templateObject$3 || (_templateObject$3 = _taggedTemplateLiteral(["must match format \"", "\""])), schemaCode);
    },
    params: function params(_ref2) {
      var schemaCode = _ref2.schemaCode;
      return (0, codegen_1._)(_templateObject2$2 || (_templateObject2$2 = _taggedTemplateLiteral(["{format: ", "}"])), schemaCode);
    }
  };
  var def = {
    keyword: "format",
    type: ["number", "string"],
    schemaType: "string",
    $data: true,
    error: error,
    code: function code(cxt, ruleType) {
      var gen = cxt.gen,
        data = cxt.data,
        $data = cxt.$data,
        schema = cxt.schema,
        schemaCode = cxt.schemaCode,
        it = cxt.it;
      var opts = it.opts,
        errSchemaPath = it.errSchemaPath,
        schemaEnv = it.schemaEnv,
        self = it.self;
      if (!opts.validateFormats) return;
      if ($data) validate$DataFormat();else validateFormat();
      function validate$DataFormat() {
        var fmts = gen.scopeValue("formats", {
          ref: self.formats,
          code: opts.code.formats
        });
        var fDef = gen["const"]("fDef", (0, codegen_1._)(_templateObject3$2 || (_templateObject3$2 = _taggedTemplateLiteral(["", "[", "]"])), fmts, schemaCode));
        var fType = gen["let"]("fType");
        var format = gen["let"]("format");
        // TODO simplify
        gen["if"]((0, codegen_1._)(_templateObject4$2 || (_templateObject4$2 = _taggedTemplateLiteral(["typeof ", " == \"object\" && !(", " instanceof RegExp)"])), fDef, fDef), function () {
          return gen.assign(fType, (0, codegen_1._)(_templateObject5$1 || (_templateObject5$1 = _taggedTemplateLiteral(["", ".type || \"string\""])), fDef)).assign(format, (0, codegen_1._)(_templateObject6$1 || (_templateObject6$1 = _taggedTemplateLiteral(["", ".validate"])), fDef));
        }, function () {
          return gen.assign(fType, (0, codegen_1._)(_templateObject7$1 || (_templateObject7$1 = _taggedTemplateLiteral(["\"string\""])))).assign(format, fDef);
        });
        cxt.fail$data((0, codegen_1.or)(unknownFmt(), invalidFmt()));
        function unknownFmt() {
          if (opts.strictSchema === false) return codegen_1.nil;
          return (0, codegen_1._)(_templateObject8$1 || (_templateObject8$1 = _taggedTemplateLiteral(["", " && !", ""])), schemaCode, format);
        }
        function invalidFmt() {
          var callFormat = schemaEnv.$async ? (0, codegen_1._)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["(", ".async ? await ", "(", ") : ", "(", "))"])), fDef, format, data, format, data) : (0, codegen_1._)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["", "(", ")"])), format, data);
          var validData = (0, codegen_1._)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["(typeof ", " == \"function\" ? ", " : ", ".test(", "))"])), format, callFormat, format, data);
          return (0, codegen_1._)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["", " && ", " !== true && ", " === ", " && !", ""])), format, format, fType, ruleType, validData);
        }
      }
      function validateFormat() {
        var formatDef = self.formats[schema];
        if (!formatDef) {
          unknownFormat();
          return;
        }
        if (formatDef === true) return;
        var _getFormat = getFormat(formatDef),
          _getFormat2 = _slicedToArray(_getFormat, 3),
          fmtType = _getFormat2[0],
          format = _getFormat2[1],
          fmtRef = _getFormat2[2];
        if (fmtType === ruleType) cxt.pass(validCondition());
        function unknownFormat() {
          if (opts.strictSchema === false) {
            self.logger.warn(unknownMsg());
            return;
          }
          throw new Error(unknownMsg());
          function unknownMsg() {
            return "unknown format \"".concat(schema, "\" ignored in schema at path \"").concat(errSchemaPath, "\"");
          }
        }
        function getFormat(fmtDef) {
          var code = fmtDef instanceof RegExp ? (0, codegen_1.regexpCode)(fmtDef) : opts.code.formats ? (0, codegen_1._)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["", "", ""])), opts.code.formats, (0, codegen_1.getProperty)(schema)) : undefined;
          var fmt = gen.scopeValue("formats", {
            key: schema,
            ref: fmtDef,
            code: code
          });
          if (_typeof(fmtDef) == "object" && !(fmtDef instanceof RegExp)) {
            return [fmtDef.type || "string", fmtDef.validate, (0, codegen_1._)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["", ".validate"])), fmt)];
          }
          return ["string", fmtDef, fmt];
        }
        function validCondition() {
          if (_typeof(formatDef) == "object" && !(formatDef instanceof RegExp) && formatDef.async) {
            if (!schemaEnv.$async) throw new Error("async format in sync schema");
            return (0, codegen_1._)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["await ", "(", ")"])), fmtRef, data);
          }
          return typeof format == "function" ? (0, codegen_1._)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["", "(", ")"])), fmtRef, data) : (0, codegen_1._)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["", ".test(", ")"])), fmtRef, data);
        }
      }
    }
  };
  format["default"] = def;
  return format;
}

var hasRequiredFormat;
function requireFormat() {
  if (hasRequiredFormat) return format$1;
  hasRequiredFormat = 1;
  Object.defineProperty(format$1, "__esModule", {
    value: true
  });
  var format_1 = requireFormat$1();
  var format = [format_1["default"]];
  format$1["default"] = format;
  return format$1;
}

var metadata = {};

var hasRequiredMetadata;
function requireMetadata() {
  if (hasRequiredMetadata) return metadata;
  hasRequiredMetadata = 1;
  Object.defineProperty(metadata, "__esModule", {
    value: true
  });
  metadata.contentVocabulary = metadata.metadataVocabulary = void 0;
  metadata.metadataVocabulary = ["title", "description", "default", "deprecated", "readOnly", "writeOnly", "examples"];
  metadata.contentVocabulary = ["contentMediaType", "contentEncoding", "contentSchema"];
  return metadata;
}

var hasRequiredDraft7;
function requireDraft7() {
  if (hasRequiredDraft7) return draft7;
  hasRequiredDraft7 = 1;
  Object.defineProperty(draft7, "__esModule", {
    value: true
  });
  var core_1 = requireCore();
  var validation_1 = requireValidation();
  var applicator_1 = requireApplicator();
  var format_1 = requireFormat();
  var metadata_1 = requireMetadata();
  var draft7Vocabularies = [core_1["default"], validation_1["default"], (0, applicator_1["default"])(), format_1["default"], metadata_1.metadataVocabulary, metadata_1.contentVocabulary];
  draft7["default"] = draft7Vocabularies;
  return draft7;
}

var discriminator = {};

var types = {};

var hasRequiredTypes;
function requireTypes() {
  if (hasRequiredTypes) return types;
  hasRequiredTypes = 1;
  Object.defineProperty(types, "__esModule", {
    value: true
  });
  types.DiscrError = void 0;
  var DiscrError;
  (function (DiscrError) {
    DiscrError["Tag"] = "tag";
    DiscrError["Mapping"] = "mapping";
  })(DiscrError || (types.DiscrError = DiscrError = {}));
  return types;
}

var _templateObject$2, _templateObject2$1, _templateObject3$1, _templateObject4$1;
var hasRequiredDiscriminator;
function requireDiscriminator() {
  if (hasRequiredDiscriminator) return discriminator;
  hasRequiredDiscriminator = 1;
  Object.defineProperty(discriminator, "__esModule", {
    value: true
  });
  var codegen_1 = requireCodegen();
  var types_1 = requireTypes();
  var compile_1 = requireCompile();
  var ref_error_1 = requireRef_error();
  var util_1 = requireUtil();
  var error = {
    message: function message(_ref) {
      var _ref$params = _ref.params,
        discrError = _ref$params.discrError,
        tagName = _ref$params.tagName;
      return discrError === types_1.DiscrError.Tag ? "tag \"".concat(tagName, "\" must be string") : "value of tag \"".concat(tagName, "\" must be in oneOf");
    },
    params: function params(_ref2) {
      var _ref2$params = _ref2.params,
        discrError = _ref2$params.discrError,
        tag = _ref2$params.tag,
        tagName = _ref2$params.tagName;
      return (0, codegen_1._)(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteral(["{error: ", ", tag: ", ", tagValue: ", "}"])), discrError, tagName, tag);
    }
  };
  var def = {
    keyword: "discriminator",
    type: "object",
    schemaType: "object",
    error: error,
    code: function code(cxt) {
      var gen = cxt.gen,
        data = cxt.data,
        schema = cxt.schema,
        parentSchema = cxt.parentSchema,
        it = cxt.it;
      var oneOf = parentSchema.oneOf;
      if (!it.opts.discriminator) {
        throw new Error("discriminator: requires discriminator option");
      }
      var tagName = schema.propertyName;
      if (typeof tagName != "string") throw new Error("discriminator: requires propertyName");
      if (schema.mapping) throw new Error("discriminator: mapping is not supported");
      if (!oneOf) throw new Error("discriminator: requires oneOf keyword");
      var valid = gen["let"]("valid", false);
      var tag = gen["const"]("tag", (0, codegen_1._)(_templateObject2$1 || (_templateObject2$1 = _taggedTemplateLiteral(["", "", ""])), data, (0, codegen_1.getProperty)(tagName)));
      gen["if"]((0, codegen_1._)(_templateObject3$1 || (_templateObject3$1 = _taggedTemplateLiteral(["typeof ", " == \"string\""])), tag), function () {
        return validateMapping();
      }, function () {
        return cxt.error(false, {
          discrError: types_1.DiscrError.Tag,
          tag: tag,
          tagName: tagName
        });
      });
      cxt.ok(valid);
      function validateMapping() {
        var mapping = getMapping();
        gen["if"](false);
        for (var tagValue in mapping) {
          gen.elseIf((0, codegen_1._)(_templateObject4$1 || (_templateObject4$1 = _taggedTemplateLiteral(["", " === ", ""])), tag, tagValue));
          gen.assign(valid, applyTagSchema(mapping[tagValue]));
        }
        gen["else"]();
        cxt.error(false, {
          discrError: types_1.DiscrError.Mapping,
          tag: tag,
          tagName: tagName
        });
        gen.endIf();
      }
      function applyTagSchema(schemaProp) {
        var _valid = gen.name("valid");
        var schCxt = cxt.subschema({
          keyword: "oneOf",
          schemaProp: schemaProp
        }, _valid);
        cxt.mergeEvaluated(schCxt, codegen_1.Name);
        return _valid;
      }
      function getMapping() {
        var _a;
        var oneOfMapping = {};
        var topRequired = hasRequired(parentSchema);
        var tagRequired = true;
        for (var i = 0; i < oneOf.length; i++) {
          var sch = oneOf[i];
          if ((sch === null || sch === void 0 ? void 0 : sch.$ref) && !(0, util_1.schemaHasRulesButRef)(sch, it.self.RULES)) {
            var ref = sch.$ref;
            sch = compile_1.resolveRef.call(it.self, it.schemaEnv.root, it.baseId, ref);
            if (sch instanceof compile_1.SchemaEnv) sch = sch.schema;
            if (sch === undefined) throw new ref_error_1["default"](it.opts.uriResolver, it.baseId, ref);
          }
          var propSch = (_a = sch === null || sch === void 0 ? void 0 : sch.properties) === null || _a === void 0 ? void 0 : _a[tagName];
          if (_typeof(propSch) != "object") {
            throw new Error("discriminator: oneOf subschemas (or referenced schemas) must have \"properties/".concat(tagName, "\""));
          }
          tagRequired = tagRequired && (topRequired || hasRequired(sch));
          addMappings(propSch, i);
        }
        if (!tagRequired) throw new Error("discriminator: \"".concat(tagName, "\" must be required"));
        return oneOfMapping;
        function hasRequired(_ref3) {
          var required = _ref3.required;
          return Array.isArray(required) && required.includes(tagName);
        }
        function addMappings(sch, i) {
          if (sch["const"]) {
            addMapping(sch["const"], i);
          } else if (sch["enum"]) {
            var _iterator = _createForOfIteratorHelper(sch["enum"]),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var tagValue = _step.value;
                addMapping(tagValue, i);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          } else {
            throw new Error("discriminator: \"properties/".concat(tagName, "\" must have \"const\" or \"enum\""));
          }
        }
        function addMapping(tagValue, i) {
          if (typeof tagValue != "string" || tagValue in oneOfMapping) {
            throw new Error("discriminator: \"".concat(tagName, "\" values must be unique strings"));
          }
          oneOfMapping[tagValue] = i;
        }
      }
    }
  };
  discriminator["default"] = def;
  return discriminator;
}

var $schema = "http://json-schema.org/draft-07/schema#";
var $id = "http://json-schema.org/draft-07/schema#";
var title = "Core schema meta-schema";
var definitions = {
	schemaArray: {
		type: "array",
		minItems: 1,
		items: {
			$ref: "#"
		}
	},
	nonNegativeInteger: {
		type: "integer",
		minimum: 0
	},
	nonNegativeIntegerDefault0: {
		allOf: [
			{
				$ref: "#/definitions/nonNegativeInteger"
			},
			{
				"default": 0
			}
		]
	},
	simpleTypes: {
		"enum": [
			"array",
			"boolean",
			"integer",
			"null",
			"number",
			"object",
			"string"
		]
	},
	stringArray: {
		type: "array",
		items: {
			type: "string"
		},
		uniqueItems: true,
		"default": [
		]
	}
};
var type = [
	"object",
	"boolean"
];
var properties = {
	$id: {
		type: "string",
		format: "uri-reference"
	},
	$schema: {
		type: "string",
		format: "uri"
	},
	$ref: {
		type: "string",
		format: "uri-reference"
	},
	$comment: {
		type: "string"
	},
	title: {
		type: "string"
	},
	description: {
		type: "string"
	},
	"default": true,
	readOnly: {
		type: "boolean",
		"default": false
	},
	examples: {
		type: "array",
		items: true
	},
	multipleOf: {
		type: "number",
		exclusiveMinimum: 0
	},
	maximum: {
		type: "number"
	},
	exclusiveMaximum: {
		type: "number"
	},
	minimum: {
		type: "number"
	},
	exclusiveMinimum: {
		type: "number"
	},
	maxLength: {
		$ref: "#/definitions/nonNegativeInteger"
	},
	minLength: {
		$ref: "#/definitions/nonNegativeIntegerDefault0"
	},
	pattern: {
		type: "string",
		format: "regex"
	},
	additionalItems: {
		$ref: "#"
	},
	items: {
		anyOf: [
			{
				$ref: "#"
			},
			{
				$ref: "#/definitions/schemaArray"
			}
		],
		"default": true
	},
	maxItems: {
		$ref: "#/definitions/nonNegativeInteger"
	},
	minItems: {
		$ref: "#/definitions/nonNegativeIntegerDefault0"
	},
	uniqueItems: {
		type: "boolean",
		"default": false
	},
	contains: {
		$ref: "#"
	},
	maxProperties: {
		$ref: "#/definitions/nonNegativeInteger"
	},
	minProperties: {
		$ref: "#/definitions/nonNegativeIntegerDefault0"
	},
	required: {
		$ref: "#/definitions/stringArray"
	},
	additionalProperties: {
		$ref: "#"
	},
	definitions: {
		type: "object",
		additionalProperties: {
			$ref: "#"
		},
		"default": {
		}
	},
	properties: {
		type: "object",
		additionalProperties: {
			$ref: "#"
		},
		"default": {
		}
	},
	patternProperties: {
		type: "object",
		additionalProperties: {
			$ref: "#"
		},
		propertyNames: {
			format: "regex"
		},
		"default": {
		}
	},
	dependencies: {
		type: "object",
		additionalProperties: {
			anyOf: [
				{
					$ref: "#"
				},
				{
					$ref: "#/definitions/stringArray"
				}
			]
		}
	},
	propertyNames: {
		$ref: "#"
	},
	"const": true,
	"enum": {
		type: "array",
		items: true,
		minItems: 1,
		uniqueItems: true
	},
	type: {
		anyOf: [
			{
				$ref: "#/definitions/simpleTypes"
			},
			{
				type: "array",
				items: {
					$ref: "#/definitions/simpleTypes"
				},
				minItems: 1,
				uniqueItems: true
			}
		]
	},
	format: {
		type: "string"
	},
	contentMediaType: {
		type: "string"
	},
	contentEncoding: {
		type: "string"
	},
	"if": {
		$ref: "#"
	},
	then: {
		$ref: "#"
	},
	"else": {
		$ref: "#"
	},
	allOf: {
		$ref: "#/definitions/schemaArray"
	},
	anyOf: {
		$ref: "#/definitions/schemaArray"
	},
	oneOf: {
		$ref: "#/definitions/schemaArray"
	},
	not: {
		$ref: "#"
	}
};
var require$$3 = {
	$schema: $schema,
	$id: $id,
	title: title,
	definitions: definitions,
	type: type,
	properties: properties,
	"default": true
};

var hasRequiredAjv;
function requireAjv() {
  if (hasRequiredAjv) return ajv.exports;
  hasRequiredAjv = 1;
  (function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.MissingRefError = exports.ValidationError = exports.CodeGen = exports.Name = exports.nil = exports.stringify = exports.str = exports._ = exports.KeywordCxt = exports.Ajv = void 0;
    var core_1 = requireCore$1();
    var draft7_1 = requireDraft7();
    var discriminator_1 = requireDiscriminator();
    var draft7MetaSchema = require$$3;
    var META_SUPPORT_DATA = ["/properties"];
    var META_SCHEMA_ID = "http://json-schema.org/draft-07/schema";
    var Ajv = /*#__PURE__*/function (_core_1$default) {
      function Ajv() {
        _classCallCheck(this, Ajv);
        return _callSuper(this, Ajv, arguments);
      }
      _inherits(Ajv, _core_1$default);
      return _createClass(Ajv, [{
        key: "_addVocabularies",
        value: function _addVocabularies() {
          var _this = this;
          _superPropGet(Ajv, "_addVocabularies", this, 3)([]);
          draft7_1["default"].forEach(function (v) {
            return _this.addVocabulary(v);
          });
          if (this.opts.discriminator) this.addKeyword(discriminator_1["default"]);
        }
      }, {
        key: "_addDefaultMetaSchema",
        value: function _addDefaultMetaSchema() {
          _superPropGet(Ajv, "_addDefaultMetaSchema", this, 3)([]);
          if (!this.opts.meta) return;
          var metaSchema = this.opts.$data ? this.$dataMetaSchema(draft7MetaSchema, META_SUPPORT_DATA) : draft7MetaSchema;
          this.addMetaSchema(metaSchema, META_SCHEMA_ID, false);
          this.refs["http://json-schema.org/schema"] = META_SCHEMA_ID;
        }
      }, {
        key: "defaultMeta",
        value: function defaultMeta() {
          return this.opts.defaultMeta = _superPropGet(Ajv, "defaultMeta", this, 3)([]) || (this.getSchema(META_SCHEMA_ID) ? META_SCHEMA_ID : undefined);
        }
      }]);
    }(core_1["default"]);
    exports.Ajv = Ajv;
    module.exports = exports = Ajv;
    module.exports.Ajv = Ajv;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = Ajv;
    var validate_1 = requireValidate();
    Object.defineProperty(exports, "KeywordCxt", {
      enumerable: true,
      get: function get() {
        return validate_1.KeywordCxt;
      }
    });
    var codegen_1 = requireCodegen();
    Object.defineProperty(exports, "_", {
      enumerable: true,
      get: function get() {
        return codegen_1._;
      }
    });
    Object.defineProperty(exports, "str", {
      enumerable: true,
      get: function get() {
        return codegen_1.str;
      }
    });
    Object.defineProperty(exports, "stringify", {
      enumerable: true,
      get: function get() {
        return codegen_1.stringify;
      }
    });
    Object.defineProperty(exports, "nil", {
      enumerable: true,
      get: function get() {
        return codegen_1.nil;
      }
    });
    Object.defineProperty(exports, "Name", {
      enumerable: true,
      get: function get() {
        return codegen_1.Name;
      }
    });
    Object.defineProperty(exports, "CodeGen", {
      enumerable: true,
      get: function get() {
        return codegen_1.CodeGen;
      }
    });
    var validation_error_1 = requireValidation_error();
    Object.defineProperty(exports, "ValidationError", {
      enumerable: true,
      get: function get() {
        return validation_error_1["default"];
      }
    });
    var ref_error_1 = requireRef_error();
    Object.defineProperty(exports, "MissingRefError", {
      enumerable: true,
      get: function get() {
        return ref_error_1["default"];
      }
    });
  })(ajv, ajv.exports);
  return ajv.exports;
}

var dist = {exports: {}};

var formats = {};

var hasRequiredFormats;
function requireFormats() {
  if (hasRequiredFormats) return formats;
  hasRequiredFormats = 1;
  (function (exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.formatNames = exports.fastFormats = exports.fullFormats = void 0;
    function fmtDef(validate, compare) {
      return {
        validate: validate,
        compare: compare
      };
    }
    exports.fullFormats = {
      // date: http://tools.ietf.org/html/rfc3339#section-5.6
      date: fmtDef(date, compareDate),
      // date-time: http://tools.ietf.org/html/rfc3339#section-5.6
      time: fmtDef(time, compareTime),
      "date-time": fmtDef(date_time, compareDateTime),
      // duration: https://tools.ietf.org/html/rfc3339#appendix-A
      duration: /^P(?!$)((\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?|(\d+W)?)$/,
      uri: uri,
      "uri-reference": /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,
      // uri-template: https://tools.ietf.org/html/rfc6570
      "uri-template": /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i,
      // For the source: https://gist.github.com/dperini/729294
      // For test cases: https://mathiasbynens.be/demo/url-regex
      url: /^(?:http[s\u017F]?|ftp):\/\/(?:(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+(?::(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?@)?(?:(?!(?:10|127)(?:\.[0-9]{1,3}){3})(?!(?:169\.254|192\.168)(?:\.[0-9]{1,3}){2})(?!172\.(?:1[6-9]|2[0-9]|3[01])(?:\.[0-9]{1,3}){2})(?:[1-9][0-9]?|1[0-9][0-9]|2[01][0-9]|22[0-3])(?:\.(?:1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])){2}(?:\.(?:[1-9][0-9]?|1[0-9][0-9]|2[0-4][0-9]|25[0-4]))|(?:(?:(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+\x2D)*(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)(?:\.(?:(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+\x2D)*(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)*(?:\.(?:(?:[KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]){2,})))(?::[0-9]{2,5})?(?:\/(?:(?![\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uD800-\uDFFF\uFEFF])[\s\S]|[\uD800-\uDBFF][\uDC00-\uDFFF])*)?$/i,
      email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
      hostname: /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i,
      // optimized https://www.safaribooksonline.com/library/view/regular-expressions-cookbook/9780596802837/ch07s16.html
      ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,
      ipv6: /^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))$/i,
      regex: regex,
      // uuid: http://tools.ietf.org/html/rfc4122
      uuid: /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i,
      // JSON-pointer: https://tools.ietf.org/html/rfc6901
      // uri fragment: https://tools.ietf.org/html/rfc3986#appendix-A
      "json-pointer": /^(?:\/(?:[^~/]|~0|~1)*)*$/,
      "json-pointer-uri-fragment": /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i,
      // relative JSON-pointer: http://tools.ietf.org/html/draft-luff-relative-json-pointer-00
      "relative-json-pointer": /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/,
      // the following formats are used by the openapi specification: https://spec.openapis.org/oas/v3.0.0#data-types
      // byte: https://github.com/miguelmota/is-base64
      "byte": _byte,
      // signed 32 bit integer
      int32: {
        type: "number",
        validate: validateInt32
      },
      // signed 64 bit integer
      int64: {
        type: "number",
        validate: validateInt64
      },
      // C-type float
      "float": {
        type: "number",
        validate: validateNumber
      },
      // C-type double
      "double": {
        type: "number",
        validate: validateNumber
      },
      // hint to the UI to hide input strings
      password: true,
      // unchecked string payload
      binary: true
    };
    exports.fastFormats = _objectSpread2(_objectSpread2({}, exports.fullFormats), {}, {
      date: fmtDef(/^\d\d\d\d-[0-1]\d-[0-3]\d$/, compareDate),
      time: fmtDef(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, compareTime),
      "date-time": fmtDef(/^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, compareDateTime),
      // uri: https://github.com/mafintosh/is-my-json-valid/blob/master/formats.js
      uri: /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i,
      "uri-reference": /^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i,
      // email (sources from jsen validator):
      // http://stackoverflow.com/questions/201323/using-a-regular-expression-to-validate-an-email-address#answer-8829363
      // http://www.w3.org/TR/html5/forms.html#valid-e-mail-address (search for 'wilful violation')
      email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i
    });
    exports.formatNames = Object.keys(exports.fullFormats);
    function isLeapYear(year) {
      // https://tools.ietf.org/html/rfc3339#appendix-C
      return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    }
    var DATE = /^(\d\d\d\d)-(\d\d)-(\d\d)$/;
    var DAYS = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    function date(str) {
      // full-date from http://tools.ietf.org/html/rfc3339#section-5.6
      var matches = DATE.exec(str);
      if (!matches) return false;
      var year = +matches[1];
      var month = +matches[2];
      var day = +matches[3];
      return month >= 1 && month <= 12 && day >= 1 && day <= (month === 2 && isLeapYear(year) ? 29 : DAYS[month]);
    }
    function compareDate(d1, d2) {
      if (!(d1 && d2)) return undefined;
      if (d1 > d2) return 1;
      if (d1 < d2) return -1;
      return 0;
    }
    var TIME = /^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d(?::?\d\d)?)?$/i;
    function time(str, withTimeZone) {
      var matches = TIME.exec(str);
      if (!matches) return false;
      var hour = +matches[1];
      var minute = +matches[2];
      var second = +matches[3];
      var timeZone = matches[5];
      return (hour <= 23 && minute <= 59 && second <= 59 || hour === 23 && minute === 59 && second === 60) && (!withTimeZone || timeZone !== "");
    }
    function compareTime(t1, t2) {
      if (!(t1 && t2)) return undefined;
      var a1 = TIME.exec(t1);
      var a2 = TIME.exec(t2);
      if (!(a1 && a2)) return undefined;
      t1 = a1[1] + a1[2] + a1[3] + (a1[4] || "");
      t2 = a2[1] + a2[2] + a2[3] + (a2[4] || "");
      if (t1 > t2) return 1;
      if (t1 < t2) return -1;
      return 0;
    }
    var DATE_TIME_SEPARATOR = /t|\s/i;
    function date_time(str) {
      // http://tools.ietf.org/html/rfc3339#section-5.6
      var dateTime = str.split(DATE_TIME_SEPARATOR);
      return dateTime.length === 2 && date(dateTime[0]) && time(dateTime[1], true);
    }
    function compareDateTime(dt1, dt2) {
      if (!(dt1 && dt2)) return undefined;
      var _dt1$split = dt1.split(DATE_TIME_SEPARATOR),
        _dt1$split2 = _slicedToArray(_dt1$split, 2),
        d1 = _dt1$split2[0],
        t1 = _dt1$split2[1];
      var _dt2$split = dt2.split(DATE_TIME_SEPARATOR),
        _dt2$split2 = _slicedToArray(_dt2$split, 2),
        d2 = _dt2$split2[0],
        t2 = _dt2$split2[1];
      var res = compareDate(d1, d2);
      if (res === undefined) return undefined;
      return res || compareTime(t1, t2);
    }
    var NOT_URI_FRAGMENT = /\/|:/;
    var URI = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
    function uri(str) {
      // http://jmrware.com/articles/2009/uri_regexp/URI_regex.html + optional protocol + required "."
      return NOT_URI_FRAGMENT.test(str) && URI.test(str);
    }
    var BYTE = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm;
    function _byte(str) {
      BYTE.lastIndex = 0;
      return BYTE.test(str);
    }
    var MIN_INT32 = -Math.pow(2, 31);
    var MAX_INT32 = Math.pow(2, 31) - 1;
    function validateInt32(value) {
      return Number.isInteger(value) && value <= MAX_INT32 && value >= MIN_INT32;
    }
    function validateInt64(value) {
      // JSON and javascript max Int is 2**53, so any int that passes isInteger is valid for Int64
      return Number.isInteger(value);
    }
    function validateNumber() {
      return true;
    }
    var Z_ANCHOR = /[^\\]\\Z/;
    function regex(str) {
      if (Z_ANCHOR.test(str)) return false;
      try {
        new RegExp(str);
        return true;
      } catch (e) {
        return false;
      }
    }
  })(formats);
  return formats;
}

var limit = {};

var _templateObject$1, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;
var hasRequiredLimit;
function requireLimit() {
  if (hasRequiredLimit) return limit;
  hasRequiredLimit = 1;
  (function (exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.formatLimitDefinition = void 0;
    var ajv_1 = requireAjv();
    var codegen_1 = requireCodegen();
    var ops = codegen_1.operators;
    var KWDs = {
      formatMaximum: {
        okStr: "<=",
        ok: ops.LTE,
        fail: ops.GT
      },
      formatMinimum: {
        okStr: ">=",
        ok: ops.GTE,
        fail: ops.LT
      },
      formatExclusiveMaximum: {
        okStr: "<",
        ok: ops.LT,
        fail: ops.GTE
      },
      formatExclusiveMinimum: {
        okStr: ">",
        ok: ops.GT,
        fail: ops.LTE
      }
    };
    var error = {
      message: function message(_ref) {
        var keyword = _ref.keyword,
          schemaCode = _ref.schemaCode;
        return codegen_1.str(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral(["should be ", " ", ""])), KWDs[keyword].okStr, schemaCode);
      },
      params: function params(_ref2) {
        var keyword = _ref2.keyword,
          schemaCode = _ref2.schemaCode;
        return codegen_1._(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["{comparison: ", ", limit: ", "}"])), KWDs[keyword].okStr, schemaCode);
      }
    };
    exports.formatLimitDefinition = {
      keyword: Object.keys(KWDs),
      type: "string",
      schemaType: "string",
      $data: true,
      error: error,
      code: function code(cxt) {
        var gen = cxt.gen,
          data = cxt.data,
          schemaCode = cxt.schemaCode,
          keyword = cxt.keyword,
          it = cxt.it;
        var opts = it.opts,
          self = it.self;
        if (!opts.validateFormats) return;
        var fCxt = new ajv_1.KeywordCxt(it, self.RULES.all.format.definition, "format");
        if (fCxt.$data) validate$DataFormat();else validateFormat();
        function validate$DataFormat() {
          var fmts = gen.scopeValue("formats", {
            ref: self.formats,
            code: opts.code.formats
          });
          var fmt = gen["const"]("fmt", codegen_1._(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["", "[", "]"])), fmts, fCxt.schemaCode));
          cxt.fail$data(codegen_1.or(codegen_1._(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["typeof ", " != \"object\""])), fmt), codegen_1._(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["", " instanceof RegExp"])), fmt), codegen_1._(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["typeof ", ".compare != \"function\""])), fmt), compareCode(fmt)));
        }
        function validateFormat() {
          var format = fCxt.schema;
          var fmtDef = self.formats[format];
          if (!fmtDef || fmtDef === true) return;
          if (_typeof(fmtDef) != "object" || fmtDef instanceof RegExp || typeof fmtDef.compare != "function") {
            throw new Error("\"".concat(keyword, "\": format \"").concat(format, "\" does not define \"compare\" function"));
          }
          var fmt = gen.scopeValue("formats", {
            key: format,
            ref: fmtDef,
            code: opts.code.formats ? codegen_1._(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["", "", ""])), opts.code.formats, codegen_1.getProperty(format)) : undefined
          });
          cxt.fail$data(compareCode(fmt));
        }
        function compareCode(fmt) {
          return codegen_1._(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["", ".compare(", ", ", ") ", " 0"])), fmt, data, schemaCode, KWDs[keyword].fail);
        }
      },
      dependencies: ["format"]
    };
    var formatLimitPlugin = function formatLimitPlugin(ajv) {
      ajv.addKeyword(exports.formatLimitDefinition);
      return ajv;
    };
    exports["default"] = formatLimitPlugin;
  })(limit);
  return limit;
}

var _templateObject;
var hasRequiredDist;
function requireDist() {
  if (hasRequiredDist) return dist.exports;
  hasRequiredDist = 1;
  (function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var formats_1 = requireFormats();
    var limit_1 = requireLimit();
    var codegen_1 = requireCodegen();
    var fullName = new codegen_1.Name("fullFormats");
    var fastName = new codegen_1.Name("fastFormats");
    var formatsPlugin = function formatsPlugin(ajv) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        keywords: true
      };
      if (Array.isArray(opts)) {
        addFormats(ajv, opts, formats_1.fullFormats, fullName);
        return ajv;
      }
      var _ref = opts.mode === "fast" ? [formats_1.fastFormats, fastName] : [formats_1.fullFormats, fullName],
        _ref2 = _slicedToArray(_ref, 2),
        formats = _ref2[0],
        exportName = _ref2[1];
      var list = opts.formats || formats_1.formatNames;
      addFormats(ajv, list, formats, exportName);
      if (opts.keywords) limit_1["default"](ajv);
      return ajv;
    };
    formatsPlugin.get = function (name) {
      var mode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "full";
      var formats = mode === "fast" ? formats_1.fastFormats : formats_1.fullFormats;
      var f = formats[name];
      if (!f) throw new Error("Unknown format \"".concat(name, "\""));
      return f;
    };
    function addFormats(ajv, list, fs, exportName) {
      var _a;
      var _b;
      (_a = (_b = ajv.opts.code).formats) !== null && _a !== void 0 ? _a : _b.formats = codegen_1._(_templateObject || (_templateObject = _taggedTemplateLiteral(["require(\"ajv-formats/dist/formats\").", ""])), exportName);
      var _iterator = _createForOfIteratorHelper(list),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var f = _step.value;
          ajv.addFormat(f, fs[f]);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    module.exports = exports = formatsPlugin;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = formatsPlugin;
  })(dist, dist.exports);
  return dist.exports;
}

var mimicFn_1;
var hasRequiredMimicFn$1;
function requireMimicFn$1() {
  if (hasRequiredMimicFn$1) return mimicFn_1;
  hasRequiredMimicFn$1 = 1;
  var copyProperty = function copyProperty(to, from, property, ignoreNonConfigurable) {
    // `Function#length` should reflect the parameters of `to` not `from` since we keep its body.
    // `Function#prototype` is non-writable and non-configurable so can never be modified.
    if (property === 'length' || property === 'prototype') {
      return;
    }

    // `Function#arguments` and `Function#caller` should not be copied. They were reported to be present in `Reflect.ownKeys` for some devices in React Native (#41), so we explicitly ignore them here.
    if (property === 'arguments' || property === 'caller') {
      return;
    }
    var toDescriptor = Object.getOwnPropertyDescriptor(to, property);
    var fromDescriptor = Object.getOwnPropertyDescriptor(from, property);
    if (!canCopyProperty(toDescriptor, fromDescriptor) && ignoreNonConfigurable) {
      return;
    }
    Object.defineProperty(to, property, fromDescriptor);
  };

  // `Object.defineProperty()` throws if the property exists, is not configurable and either:
  //  - one its descriptors is changed
  //  - it is non-writable and its value is changed
  var canCopyProperty = function canCopyProperty(toDescriptor, fromDescriptor) {
    return toDescriptor === undefined || toDescriptor.configurable || toDescriptor.writable === fromDescriptor.writable && toDescriptor.enumerable === fromDescriptor.enumerable && toDescriptor.configurable === fromDescriptor.configurable && (toDescriptor.writable || toDescriptor.value === fromDescriptor.value);
  };
  var changePrototype = function changePrototype(to, from) {
    var fromPrototype = Object.getPrototypeOf(from);
    if (fromPrototype === Object.getPrototypeOf(to)) {
      return;
    }
    Object.setPrototypeOf(to, fromPrototype);
  };
  var wrappedToString = function wrappedToString(withName, fromBody) {
    return "/* Wrapped ".concat(withName, "*/\n").concat(fromBody);
  };
  var toStringDescriptor = Object.getOwnPropertyDescriptor(Function.prototype, 'toString');
  var toStringName = Object.getOwnPropertyDescriptor(Function.prototype.toString, 'name');

  // We call `from.toString()` early (not lazily) to ensure `from` can be garbage collected.
  // We use `bind()` instead of a closure for the same reason.
  // Calling `from.toString()` early also allows caching it in case `to.toString()` is called several times.
  var changeToString = function changeToString(to, from, name) {
    var withName = name === '' ? '' : "with ".concat(name.trim(), "() ");
    var newToString = wrappedToString.bind(null, withName, from.toString());
    // Ensure `to.toString.toString` is non-enumerable and has the same `same`
    Object.defineProperty(newToString, 'name', toStringName);
    Object.defineProperty(to, 'toString', _objectSpread2(_objectSpread2({}, toStringDescriptor), {}, {
      value: newToString
    }));
  };
  var mimicFn = function mimicFn(to, from) {
    var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$ignoreNonConfigu = _ref.ignoreNonConfigurable,
      ignoreNonConfigurable = _ref$ignoreNonConfigu === void 0 ? false : _ref$ignoreNonConfigu;
    var name = to.name;
    var _iterator = _createForOfIteratorHelper(Reflect.ownKeys(from)),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var property = _step.value;
        copyProperty(to, from, property, ignoreNonConfigurable);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    changePrototype(to, from);
    changeToString(to, from, name);
    return to;
  };
  mimicFn_1 = mimicFn;
  return mimicFn_1;
}

var debounceFn;
var hasRequiredDebounceFn;
function requireDebounceFn() {
  if (hasRequiredDebounceFn) return debounceFn;
  hasRequiredDebounceFn = 1;
  var mimicFn = requireMimicFn$1();
  debounceFn = function debounceFn(inputFunction) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (typeof inputFunction !== 'function') {
      throw new TypeError("Expected the first argument to be a function, got `".concat(_typeof(inputFunction), "`"));
    }
    var _options$wait = options.wait,
      wait = _options$wait === void 0 ? 0 : _options$wait,
      _options$before = options.before,
      before = _options$before === void 0 ? false : _options$before,
      _options$after = options.after,
      after = _options$after === void 0 ? true : _options$after;
    if (!before && !after) {
      throw new Error('Both `before` and `after` are false, function wouldn\'t be called.');
    }
    var timeout;
    var result;
    var debouncedFunction = function debouncedFunction() {
      for (var _len = arguments.length, arguments_ = new Array(_len), _key = 0; _key < _len; _key++) {
        arguments_[_key] = arguments[_key];
      }
      var context = this;
      var later = function later() {
        timeout = undefined;
        if (after) {
          result = inputFunction.apply(context, arguments_);
        }
      };
      var shouldCallNow = before && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (shouldCallNow) {
        result = inputFunction.apply(context, arguments_);
      }
      return result;
    };
    mimicFn(debouncedFunction, inputFunction);
    debouncedFunction.cancel = function () {
      if (timeout) {
        clearTimeout(timeout);
        timeout = undefined;
      }
    };
    return debouncedFunction;
  };
  return debounceFn;
}

var re = {exports: {}};

var constants;
var hasRequiredConstants;
function requireConstants() {
  if (hasRequiredConstants) return constants;
  hasRequiredConstants = 1;
  // Note: this is the semver.org version of the spec that it implements
  // Not necessarily the package version of this code.
  var SEMVER_SPEC_VERSION = '2.0.0';
  var MAX_LENGTH = 256;
  var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */9007199254740991;

  // Max safe segment length for coercion.
  var MAX_SAFE_COMPONENT_LENGTH = 16;

  // Max safe length for a build identifier. The max length minus 6 characters for
  // the shortest version with a build 0.0.0+BUILD.
  var MAX_SAFE_BUILD_LENGTH = MAX_LENGTH - 6;
  var RELEASE_TYPES = ['major', 'premajor', 'minor', 'preminor', 'patch', 'prepatch', 'prerelease'];
  constants = {
    MAX_LENGTH: MAX_LENGTH,
    MAX_SAFE_COMPONENT_LENGTH: MAX_SAFE_COMPONENT_LENGTH,
    MAX_SAFE_BUILD_LENGTH: MAX_SAFE_BUILD_LENGTH,
    MAX_SAFE_INTEGER: MAX_SAFE_INTEGER,
    RELEASE_TYPES: RELEASE_TYPES,
    SEMVER_SPEC_VERSION: SEMVER_SPEC_VERSION,
    FLAG_INCLUDE_PRERELEASE: 1,
    FLAG_LOOSE: 2
  };
  return constants;
}

var debug_1$1;
var hasRequiredDebug$1;
function requireDebug$1() {
  if (hasRequiredDebug$1) return debug_1$1;
  hasRequiredDebug$1 = 1;
  var debug = (typeof process === "undefined" ? "undefined" : _typeof(process)) === 'object' && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? function () {
    var _console;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return (_console = console).error.apply(_console, ['SEMVER'].concat(args));
  } : function () {};
  debug_1$1 = debug;
  return debug_1$1;
}

var hasRequiredRe;
function requireRe() {
  if (hasRequiredRe) return re.exports;
  hasRequiredRe = 1;
  (function (module, exports) {
    var _require$$ = requireConstants(),
      MAX_SAFE_COMPONENT_LENGTH = _require$$.MAX_SAFE_COMPONENT_LENGTH,
      MAX_SAFE_BUILD_LENGTH = _require$$.MAX_SAFE_BUILD_LENGTH,
      MAX_LENGTH = _require$$.MAX_LENGTH;
    var debug = requireDebug$1();
    exports = module.exports = {};

    // The actual regexps go on exports.re
    var re = exports.re = [];
    var safeRe = exports.safeRe = [];
    var src = exports.src = [];
    var t = exports.t = {};
    var R = 0;
    var LETTERDASHNUMBER = '[a-zA-Z0-9-]';

    // Replace some greedy regex tokens to prevent regex dos issues. These regex are
    // used internally via the safeRe object since all inputs in this library get
    // normalized first to trim and collapse all extra whitespace. The original
    // regexes are exported for userland consumption and lower level usage. A
    // future breaking change could export the safer regex only with a note that
    // all input should have extra whitespace removed.
    var safeRegexReplacements = [['\\s', 1], ['\\d', MAX_LENGTH], [LETTERDASHNUMBER, MAX_SAFE_BUILD_LENGTH]];
    var makeSafeRegex = function makeSafeRegex(value) {
      for (var _i = 0, _safeRegexReplacement = safeRegexReplacements; _i < _safeRegexReplacement.length; _i++) {
        var _safeRegexReplacement2 = _slicedToArray(_safeRegexReplacement[_i], 2),
          token = _safeRegexReplacement2[0],
          max = _safeRegexReplacement2[1];
        value = value.split("".concat(token, "*")).join("".concat(token, "{0,").concat(max, "}")).split("".concat(token, "+")).join("".concat(token, "{1,").concat(max, "}"));
      }
      return value;
    };
    var createToken = function createToken(name, value, isGlobal) {
      var safe = makeSafeRegex(value);
      var index = R++;
      debug(name, index, value);
      t[name] = index;
      src[index] = value;
      re[index] = new RegExp(value, isGlobal ? 'g' : undefined);
      safeRe[index] = new RegExp(safe, isGlobal ? 'g' : undefined);
    };

    // The following Regular Expressions can be used for tokenizing,
    // validating, and parsing SemVer version strings.

    // ## Numeric Identifier
    // A single `0`, or a non-zero digit followed by zero or more digits.

    createToken('NUMERICIDENTIFIER', '0|[1-9]\\d*');
    createToken('NUMERICIDENTIFIERLOOSE', '\\d+');

    // ## Non-numeric Identifier
    // Zero or more digits, followed by a letter or hyphen, and then zero or
    // more letters, digits, or hyphens.

    createToken('NONNUMERICIDENTIFIER', "\\d*[a-zA-Z-]".concat(LETTERDASHNUMBER, "*"));

    // ## Main Version
    // Three dot-separated numeric identifiers.

    createToken('MAINVERSION', "(".concat(src[t.NUMERICIDENTIFIER], ")\\.") + "(".concat(src[t.NUMERICIDENTIFIER], ")\\.") + "(".concat(src[t.NUMERICIDENTIFIER], ")"));
    createToken('MAINVERSIONLOOSE', "(".concat(src[t.NUMERICIDENTIFIERLOOSE], ")\\.") + "(".concat(src[t.NUMERICIDENTIFIERLOOSE], ")\\.") + "(".concat(src[t.NUMERICIDENTIFIERLOOSE], ")"));

    // ## Pre-release Version Identifier
    // A numeric identifier, or a non-numeric identifier.

    createToken('PRERELEASEIDENTIFIER', "(?:".concat(src[t.NUMERICIDENTIFIER], "|").concat(src[t.NONNUMERICIDENTIFIER], ")"));
    createToken('PRERELEASEIDENTIFIERLOOSE', "(?:".concat(src[t.NUMERICIDENTIFIERLOOSE], "|").concat(src[t.NONNUMERICIDENTIFIER], ")"));

    // ## Pre-release Version
    // Hyphen, followed by one or more dot-separated pre-release version
    // identifiers.

    createToken('PRERELEASE', "(?:-(".concat(src[t.PRERELEASEIDENTIFIER], "(?:\\.").concat(src[t.PRERELEASEIDENTIFIER], ")*))"));
    createToken('PRERELEASELOOSE', "(?:-?(".concat(src[t.PRERELEASEIDENTIFIERLOOSE], "(?:\\.").concat(src[t.PRERELEASEIDENTIFIERLOOSE], ")*))"));

    // ## Build Metadata Identifier
    // Any combination of digits, letters, or hyphens.

    createToken('BUILDIDENTIFIER', "".concat(LETTERDASHNUMBER, "+"));

    // ## Build Metadata
    // Plus sign, followed by one or more period-separated build metadata
    // identifiers.

    createToken('BUILD', "(?:\\+(".concat(src[t.BUILDIDENTIFIER], "(?:\\.").concat(src[t.BUILDIDENTIFIER], ")*))"));

    // ## Full Version String
    // A main version, followed optionally by a pre-release version and
    // build metadata.

    // Note that the only major, minor, patch, and pre-release sections of
    // the version string are capturing groups.  The build metadata is not a
    // capturing group, because it should not ever be used in version
    // comparison.

    createToken('FULLPLAIN', "v?".concat(src[t.MAINVERSION]).concat(src[t.PRERELEASE], "?").concat(src[t.BUILD], "?"));
    createToken('FULL', "^".concat(src[t.FULLPLAIN], "$"));

    // like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
    // also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
    // common in the npm registry.
    createToken('LOOSEPLAIN', "[v=\\s]*".concat(src[t.MAINVERSIONLOOSE]).concat(src[t.PRERELEASELOOSE], "?").concat(src[t.BUILD], "?"));
    createToken('LOOSE', "^".concat(src[t.LOOSEPLAIN], "$"));
    createToken('GTLT', '((?:<|>)?=?)');

    // Something like "2.*" or "1.2.x".
    // Note that "x.x" is a valid xRange identifer, meaning "any version"
    // Only the first item is strictly required.
    createToken('XRANGEIDENTIFIERLOOSE', "".concat(src[t.NUMERICIDENTIFIERLOOSE], "|x|X|\\*"));
    createToken('XRANGEIDENTIFIER', "".concat(src[t.NUMERICIDENTIFIER], "|x|X|\\*"));
    createToken('XRANGEPLAIN', "[v=\\s]*(".concat(src[t.XRANGEIDENTIFIER], ")") + "(?:\\.(".concat(src[t.XRANGEIDENTIFIER], ")") + "(?:\\.(".concat(src[t.XRANGEIDENTIFIER], ")") + "(?:".concat(src[t.PRERELEASE], ")?").concat(src[t.BUILD], "?") + ")?)?");
    createToken('XRANGEPLAINLOOSE', "[v=\\s]*(".concat(src[t.XRANGEIDENTIFIERLOOSE], ")") + "(?:\\.(".concat(src[t.XRANGEIDENTIFIERLOOSE], ")") + "(?:\\.(".concat(src[t.XRANGEIDENTIFIERLOOSE], ")") + "(?:".concat(src[t.PRERELEASELOOSE], ")?").concat(src[t.BUILD], "?") + ")?)?");
    createToken('XRANGE', "^".concat(src[t.GTLT], "\\s*").concat(src[t.XRANGEPLAIN], "$"));
    createToken('XRANGELOOSE', "^".concat(src[t.GTLT], "\\s*").concat(src[t.XRANGEPLAINLOOSE], "$"));

    // Coercion.
    // Extract anything that could conceivably be a part of a valid semver
    createToken('COERCEPLAIN', "".concat('(^|[^\\d])' + '(\\d{1,').concat(MAX_SAFE_COMPONENT_LENGTH, "})") + "(?:\\.(\\d{1,".concat(MAX_SAFE_COMPONENT_LENGTH, "}))?") + "(?:\\.(\\d{1,".concat(MAX_SAFE_COMPONENT_LENGTH, "}))?"));
    createToken('COERCE', "".concat(src[t.COERCEPLAIN], "(?:$|[^\\d])"));
    createToken('COERCEFULL', src[t.COERCEPLAIN] + "(?:".concat(src[t.PRERELEASE], ")?") + "(?:".concat(src[t.BUILD], ")?") + "(?:$|[^\\d])");
    createToken('COERCERTL', src[t.COERCE], true);
    createToken('COERCERTLFULL', src[t.COERCEFULL], true);

    // Tilde ranges.
    // Meaning is "reasonably at or greater than"
    createToken('LONETILDE', '(?:~>?)');
    createToken('TILDETRIM', "(\\s*)".concat(src[t.LONETILDE], "\\s+"), true);
    exports.tildeTrimReplace = '$1~';
    createToken('TILDE', "^".concat(src[t.LONETILDE]).concat(src[t.XRANGEPLAIN], "$"));
    createToken('TILDELOOSE', "^".concat(src[t.LONETILDE]).concat(src[t.XRANGEPLAINLOOSE], "$"));

    // Caret ranges.
    // Meaning is "at least and backwards compatible with"
    createToken('LONECARET', '(?:\\^)');
    createToken('CARETTRIM', "(\\s*)".concat(src[t.LONECARET], "\\s+"), true);
    exports.caretTrimReplace = '$1^';
    createToken('CARET', "^".concat(src[t.LONECARET]).concat(src[t.XRANGEPLAIN], "$"));
    createToken('CARETLOOSE', "^".concat(src[t.LONECARET]).concat(src[t.XRANGEPLAINLOOSE], "$"));

    // A simple gt/lt/eq thing, or just "" to indicate "any version"
    createToken('COMPARATORLOOSE', "^".concat(src[t.GTLT], "\\s*(").concat(src[t.LOOSEPLAIN], ")$|^$"));
    createToken('COMPARATOR', "^".concat(src[t.GTLT], "\\s*(").concat(src[t.FULLPLAIN], ")$|^$"));

    // An expression to strip any whitespace between the gtlt and the thing
    // it modifies, so that `> 1.2.3` ==> `>1.2.3`
    createToken('COMPARATORTRIM', "(\\s*)".concat(src[t.GTLT], "\\s*(").concat(src[t.LOOSEPLAIN], "|").concat(src[t.XRANGEPLAIN], ")"), true);
    exports.comparatorTrimReplace = '$1$2$3';

    // Something like `1.2.3 - 1.2.4`
    // Note that these all use the loose form, because they'll be
    // checked against either the strict or loose comparator form
    // later.
    createToken('HYPHENRANGE', "^\\s*(".concat(src[t.XRANGEPLAIN], ")") + "\\s+-\\s+" + "(".concat(src[t.XRANGEPLAIN], ")") + "\\s*$");
    createToken('HYPHENRANGELOOSE', "^\\s*(".concat(src[t.XRANGEPLAINLOOSE], ")") + "\\s+-\\s+" + "(".concat(src[t.XRANGEPLAINLOOSE], ")") + "\\s*$");

    // Star ranges basically just allow anything at all.
    createToken('STAR', '(<|>)?=?\\s*\\*');
    // >=0.0.0 is like a star
    createToken('GTE0', '^\\s*>=\\s*0\\.0\\.0\\s*$');
    createToken('GTE0PRE', '^\\s*>=\\s*0\\.0\\.0-0\\s*$');
  })(re, re.exports);
  return re.exports;
}

var parseOptions_1;
var hasRequiredParseOptions;
function requireParseOptions() {
  if (hasRequiredParseOptions) return parseOptions_1;
  hasRequiredParseOptions = 1;
  // parse out just the options we care about
  var looseOption = Object.freeze({
    loose: true
  });
  var emptyOpts = Object.freeze({});
  var parseOptions = function parseOptions(options) {
    if (!options) {
      return emptyOpts;
    }
    if (_typeof(options) !== 'object') {
      return looseOption;
    }
    return options;
  };
  parseOptions_1 = parseOptions;
  return parseOptions_1;
}

var identifiers;
var hasRequiredIdentifiers;
function requireIdentifiers() {
  if (hasRequiredIdentifiers) return identifiers;
  hasRequiredIdentifiers = 1;
  var numeric = /^[0-9]+$/;
  var compareIdentifiers = function compareIdentifiers(a, b) {
    var anum = numeric.test(a);
    var bnum = numeric.test(b);
    if (anum && bnum) {
      a = +a;
      b = +b;
    }
    return a === b ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : 1;
  };
  var rcompareIdentifiers = function rcompareIdentifiers(a, b) {
    return compareIdentifiers(b, a);
  };
  identifiers = {
    compareIdentifiers: compareIdentifiers,
    rcompareIdentifiers: rcompareIdentifiers
  };
  return identifiers;
}

var semver$1;
var hasRequiredSemver$1;
function requireSemver$1() {
  if (hasRequiredSemver$1) return semver$1;
  hasRequiredSemver$1 = 1;
  var debug = requireDebug$1();
  var _require$$ = requireConstants(),
    MAX_LENGTH = _require$$.MAX_LENGTH,
    MAX_SAFE_INTEGER = _require$$.MAX_SAFE_INTEGER;
  var _require$$2 = requireRe(),
    re = _require$$2.safeRe,
    t = _require$$2.t;
  var parseOptions = requireParseOptions();
  var _require$$3 = requireIdentifiers(),
    compareIdentifiers = _require$$3.compareIdentifiers;
  var SemVer = /*#__PURE__*/function () {
    function SemVer(version, options) {
      _classCallCheck(this, SemVer);
      options = parseOptions(options);
      if (version instanceof SemVer) {
        if (version.loose === !!options.loose && version.includePrerelease === !!options.includePrerelease) {
          return version;
        } else {
          version = version.version;
        }
      } else if (typeof version !== 'string') {
        throw new TypeError("Invalid version. Must be a string. Got type \"".concat(_typeof(version), "\"."));
      }
      if (version.length > MAX_LENGTH) {
        throw new TypeError("version is longer than ".concat(MAX_LENGTH, " characters"));
      }
      debug('SemVer', version, options);
      this.options = options;
      this.loose = !!options.loose;
      // this isn't actually relevant for versions, but keep it so that we
      // don't run into trouble passing this.options around.
      this.includePrerelease = !!options.includePrerelease;
      var m = version.trim().match(options.loose ? re[t.LOOSE] : re[t.FULL]);
      if (!m) {
        throw new TypeError("Invalid Version: ".concat(version));
      }
      this.raw = version;

      // these are actually numbers
      this.major = +m[1];
      this.minor = +m[2];
      this.patch = +m[3];
      if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
        throw new TypeError('Invalid major version');
      }
      if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
        throw new TypeError('Invalid minor version');
      }
      if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
        throw new TypeError('Invalid patch version');
      }

      // numberify any prerelease numeric ids
      if (!m[4]) {
        this.prerelease = [];
      } else {
        this.prerelease = m[4].split('.').map(function (id) {
          if (/^[0-9]+$/.test(id)) {
            var num = +id;
            if (num >= 0 && num < MAX_SAFE_INTEGER) {
              return num;
            }
          }
          return id;
        });
      }
      this.build = m[5] ? m[5].split('.') : [];
      this.format();
    }
    return _createClass(SemVer, [{
      key: "format",
      value: function format() {
        this.version = "".concat(this.major, ".").concat(this.minor, ".").concat(this.patch);
        if (this.prerelease.length) {
          this.version += "-".concat(this.prerelease.join('.'));
        }
        return this.version;
      }
    }, {
      key: "toString",
      value: function toString() {
        return this.version;
      }
    }, {
      key: "compare",
      value: function compare(other) {
        debug('SemVer.compare', this.version, this.options, other);
        if (!(other instanceof SemVer)) {
          if (typeof other === 'string' && other === this.version) {
            return 0;
          }
          other = new SemVer(other, this.options);
        }
        if (other.version === this.version) {
          return 0;
        }
        return this.compareMain(other) || this.comparePre(other);
      }
    }, {
      key: "compareMain",
      value: function compareMain(other) {
        if (!(other instanceof SemVer)) {
          other = new SemVer(other, this.options);
        }
        return compareIdentifiers(this.major, other.major) || compareIdentifiers(this.minor, other.minor) || compareIdentifiers(this.patch, other.patch);
      }
    }, {
      key: "comparePre",
      value: function comparePre(other) {
        if (!(other instanceof SemVer)) {
          other = new SemVer(other, this.options);
        }

        // NOT having a prerelease is > having one
        if (this.prerelease.length && !other.prerelease.length) {
          return -1;
        } else if (!this.prerelease.length && other.prerelease.length) {
          return 1;
        } else if (!this.prerelease.length && !other.prerelease.length) {
          return 0;
        }
        var i = 0;
        do {
          var a = this.prerelease[i];
          var b = other.prerelease[i];
          debug('prerelease compare', i, a, b);
          if (a === undefined && b === undefined) {
            return 0;
          } else if (b === undefined) {
            return 1;
          } else if (a === undefined) {
            return -1;
          } else if (a === b) {
            continue;
          } else {
            return compareIdentifiers(a, b);
          }
        } while (++i);
      }
    }, {
      key: "compareBuild",
      value: function compareBuild(other) {
        if (!(other instanceof SemVer)) {
          other = new SemVer(other, this.options);
        }
        var i = 0;
        do {
          var a = this.build[i];
          var b = other.build[i];
          debug('build compare', i, a, b);
          if (a === undefined && b === undefined) {
            return 0;
          } else if (b === undefined) {
            return 1;
          } else if (a === undefined) {
            return -1;
          } else if (a === b) {
            continue;
          } else {
            return compareIdentifiers(a, b);
          }
        } while (++i);
      }

      // preminor will bump the version up to the next minor release, and immediately
      // down to pre-release. premajor and prepatch work the same way.
    }, {
      key: "inc",
      value: function inc(release, identifier, identifierBase) {
        switch (release) {
          case 'premajor':
            this.prerelease.length = 0;
            this.patch = 0;
            this.minor = 0;
            this.major++;
            this.inc('pre', identifier, identifierBase);
            break;
          case 'preminor':
            this.prerelease.length = 0;
            this.patch = 0;
            this.minor++;
            this.inc('pre', identifier, identifierBase);
            break;
          case 'prepatch':
            // If this is already a prerelease, it will bump to the next version
            // drop any prereleases that might already exist, since they are not
            // relevant at this point.
            this.prerelease.length = 0;
            this.inc('patch', identifier, identifierBase);
            this.inc('pre', identifier, identifierBase);
            break;
          // If the input is a non-prerelease version, this acts the same as
          // prepatch.
          case 'prerelease':
            if (this.prerelease.length === 0) {
              this.inc('patch', identifier, identifierBase);
            }
            this.inc('pre', identifier, identifierBase);
            break;
          case 'major':
            // If this is a pre-major version, bump up to the same major version.
            // Otherwise increment major.
            // 1.0.0-5 bumps to 1.0.0
            // 1.1.0 bumps to 2.0.0
            if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
              this.major++;
            }
            this.minor = 0;
            this.patch = 0;
            this.prerelease = [];
            break;
          case 'minor':
            // If this is a pre-minor version, bump up to the same minor version.
            // Otherwise increment minor.
            // 1.2.0-5 bumps to 1.2.0
            // 1.2.1 bumps to 1.3.0
            if (this.patch !== 0 || this.prerelease.length === 0) {
              this.minor++;
            }
            this.patch = 0;
            this.prerelease = [];
            break;
          case 'patch':
            // If this is not a pre-release version, it will increment the patch.
            // If it is a pre-release it will bump up to the same patch version.
            // 1.2.0-5 patches to 1.2.0
            // 1.2.0 patches to 1.2.1
            if (this.prerelease.length === 0) {
              this.patch++;
            }
            this.prerelease = [];
            break;
          // This probably shouldn't be used publicly.
          // 1.0.0 'pre' would become 1.0.0-0 which is the wrong direction.
          case 'pre':
            {
              var base = Number(identifierBase) ? 1 : 0;
              if (!identifier && identifierBase === false) {
                throw new Error('invalid increment argument: identifier is empty');
              }
              if (this.prerelease.length === 0) {
                this.prerelease = [base];
              } else {
                var i = this.prerelease.length;
                while (--i >= 0) {
                  if (typeof this.prerelease[i] === 'number') {
                    this.prerelease[i]++;
                    i = -2;
                  }
                }
                if (i === -1) {
                  // didn't increment anything
                  if (identifier === this.prerelease.join('.') && identifierBase === false) {
                    throw new Error('invalid increment argument: identifier already exists');
                  }
                  this.prerelease.push(base);
                }
              }
              if (identifier) {
                // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
                // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
                var prerelease = [identifier, base];
                if (identifierBase === false) {
                  prerelease = [identifier];
                }
                if (compareIdentifiers(this.prerelease[0], identifier) === 0) {
                  if (isNaN(this.prerelease[1])) {
                    this.prerelease = prerelease;
                  }
                } else {
                  this.prerelease = prerelease;
                }
              }
              break;
            }
          default:
            throw new Error("invalid increment argument: ".concat(release));
        }
        this.raw = this.format();
        if (this.build.length) {
          this.raw += "+".concat(this.build.join('.'));
        }
        return this;
      }
    }]);
  }();
  semver$1 = SemVer;
  return semver$1;
}

var parse_1;
var hasRequiredParse;
function requireParse() {
  if (hasRequiredParse) return parse_1;
  hasRequiredParse = 1;
  var SemVer = requireSemver$1();
  var parse = function parse(version, options) {
    var throwErrors = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    if (version instanceof SemVer) {
      return version;
    }
    try {
      return new SemVer(version, options);
    } catch (er) {
      if (!throwErrors) {
        return null;
      }
      throw er;
    }
  };
  parse_1 = parse;
  return parse_1;
}

var valid_1;
var hasRequiredValid$1;
function requireValid$1() {
  if (hasRequiredValid$1) return valid_1;
  hasRequiredValid$1 = 1;
  var parse = requireParse();
  var valid = function valid(version, options) {
    var v = parse(version, options);
    return v ? v.version : null;
  };
  valid_1 = valid;
  return valid_1;
}

var clean_1;
var hasRequiredClean;
function requireClean() {
  if (hasRequiredClean) return clean_1;
  hasRequiredClean = 1;
  var parse = requireParse();
  var clean = function clean(version, options) {
    var s = parse(version.trim().replace(/^[=v]+/, ''), options);
    return s ? s.version : null;
  };
  clean_1 = clean;
  return clean_1;
}

var inc_1;
var hasRequiredInc;
function requireInc() {
  if (hasRequiredInc) return inc_1;
  hasRequiredInc = 1;
  var SemVer = requireSemver$1();
  var inc = function inc(version, release, options, identifier, identifierBase) {
    if (typeof options === 'string') {
      identifierBase = identifier;
      identifier = options;
      options = undefined;
    }
    try {
      return new SemVer(version instanceof SemVer ? version.version : version, options).inc(release, identifier, identifierBase).version;
    } catch (er) {
      return null;
    }
  };
  inc_1 = inc;
  return inc_1;
}

var diff_1;
var hasRequiredDiff;
function requireDiff() {
  if (hasRequiredDiff) return diff_1;
  hasRequiredDiff = 1;
  var parse = requireParse();
  var diff = function diff(version1, version2) {
    var v1 = parse(version1, null, true);
    var v2 = parse(version2, null, true);
    var comparison = v1.compare(v2);
    if (comparison === 0) {
      return null;
    }
    var v1Higher = comparison > 0;
    var highVersion = v1Higher ? v1 : v2;
    var lowVersion = v1Higher ? v2 : v1;
    var highHasPre = !!highVersion.prerelease.length;
    var lowHasPre = !!lowVersion.prerelease.length;
    if (lowHasPre && !highHasPre) {
      // Going from prerelease -> no prerelease requires some special casing

      // If the low version has only a major, then it will always be a major
      // Some examples:
      // 1.0.0-1 -> 1.0.0
      // 1.0.0-1 -> 1.1.1
      // 1.0.0-1 -> 2.0.0
      if (!lowVersion.patch && !lowVersion.minor) {
        return 'major';
      }

      // Otherwise it can be determined by checking the high version

      if (highVersion.patch) {
        // anything higher than a patch bump would result in the wrong version
        return 'patch';
      }
      if (highVersion.minor) {
        // anything higher than a minor bump would result in the wrong version
        return 'minor';
      }

      // bumping major/minor/patch all have same result
      return 'major';
    }

    // add the `pre` prefix if we are going to a prerelease version
    var prefix = highHasPre ? 'pre' : '';
    if (v1.major !== v2.major) {
      return prefix + 'major';
    }
    if (v1.minor !== v2.minor) {
      return prefix + 'minor';
    }
    if (v1.patch !== v2.patch) {
      return prefix + 'patch';
    }

    // high and low are preleases
    return 'prerelease';
  };
  diff_1 = diff;
  return diff_1;
}

var major_1;
var hasRequiredMajor;
function requireMajor() {
  if (hasRequiredMajor) return major_1;
  hasRequiredMajor = 1;
  var SemVer = requireSemver$1();
  var major = function major(a, loose) {
    return new SemVer(a, loose).major;
  };
  major_1 = major;
  return major_1;
}

var minor_1;
var hasRequiredMinor;
function requireMinor() {
  if (hasRequiredMinor) return minor_1;
  hasRequiredMinor = 1;
  var SemVer = requireSemver$1();
  var minor = function minor(a, loose) {
    return new SemVer(a, loose).minor;
  };
  minor_1 = minor;
  return minor_1;
}

var patch_1;
var hasRequiredPatch;
function requirePatch() {
  if (hasRequiredPatch) return patch_1;
  hasRequiredPatch = 1;
  var SemVer = requireSemver$1();
  var patch = function patch(a, loose) {
    return new SemVer(a, loose).patch;
  };
  patch_1 = patch;
  return patch_1;
}

var prerelease_1;
var hasRequiredPrerelease;
function requirePrerelease() {
  if (hasRequiredPrerelease) return prerelease_1;
  hasRequiredPrerelease = 1;
  var parse = requireParse();
  var prerelease = function prerelease(version, options) {
    var parsed = parse(version, options);
    return parsed && parsed.prerelease.length ? parsed.prerelease : null;
  };
  prerelease_1 = prerelease;
  return prerelease_1;
}

var compare_1;
var hasRequiredCompare;
function requireCompare() {
  if (hasRequiredCompare) return compare_1;
  hasRequiredCompare = 1;
  var SemVer = requireSemver$1();
  var compare = function compare(a, b, loose) {
    return new SemVer(a, loose).compare(new SemVer(b, loose));
  };
  compare_1 = compare;
  return compare_1;
}

var rcompare_1;
var hasRequiredRcompare;
function requireRcompare() {
  if (hasRequiredRcompare) return rcompare_1;
  hasRequiredRcompare = 1;
  var compare = requireCompare();
  var rcompare = function rcompare(a, b, loose) {
    return compare(b, a, loose);
  };
  rcompare_1 = rcompare;
  return rcompare_1;
}

var compareLoose_1;
var hasRequiredCompareLoose;
function requireCompareLoose() {
  if (hasRequiredCompareLoose) return compareLoose_1;
  hasRequiredCompareLoose = 1;
  var compare = requireCompare();
  var compareLoose = function compareLoose(a, b) {
    return compare(a, b, true);
  };
  compareLoose_1 = compareLoose;
  return compareLoose_1;
}

var compareBuild_1;
var hasRequiredCompareBuild;
function requireCompareBuild() {
  if (hasRequiredCompareBuild) return compareBuild_1;
  hasRequiredCompareBuild = 1;
  var SemVer = requireSemver$1();
  var compareBuild = function compareBuild(a, b, loose) {
    var versionA = new SemVer(a, loose);
    var versionB = new SemVer(b, loose);
    return versionA.compare(versionB) || versionA.compareBuild(versionB);
  };
  compareBuild_1 = compareBuild;
  return compareBuild_1;
}

var sort_1;
var hasRequiredSort;
function requireSort() {
  if (hasRequiredSort) return sort_1;
  hasRequiredSort = 1;
  var compareBuild = requireCompareBuild();
  var sort = function sort(list, loose) {
    return list.sort(function (a, b) {
      return compareBuild(a, b, loose);
    });
  };
  sort_1 = sort;
  return sort_1;
}

var rsort_1;
var hasRequiredRsort;
function requireRsort() {
  if (hasRequiredRsort) return rsort_1;
  hasRequiredRsort = 1;
  var compareBuild = requireCompareBuild();
  var rsort = function rsort(list, loose) {
    return list.sort(function (a, b) {
      return compareBuild(b, a, loose);
    });
  };
  rsort_1 = rsort;
  return rsort_1;
}

var gt_1;
var hasRequiredGt;
function requireGt() {
  if (hasRequiredGt) return gt_1;
  hasRequiredGt = 1;
  var compare = requireCompare();
  var gt = function gt(a, b, loose) {
    return compare(a, b, loose) > 0;
  };
  gt_1 = gt;
  return gt_1;
}

var lt_1;
var hasRequiredLt;
function requireLt() {
  if (hasRequiredLt) return lt_1;
  hasRequiredLt = 1;
  var compare = requireCompare();
  var lt = function lt(a, b, loose) {
    return compare(a, b, loose) < 0;
  };
  lt_1 = lt;
  return lt_1;
}

var eq_1;
var hasRequiredEq;
function requireEq() {
  if (hasRequiredEq) return eq_1;
  hasRequiredEq = 1;
  var compare = requireCompare();
  var eq = function eq(a, b, loose) {
    return compare(a, b, loose) === 0;
  };
  eq_1 = eq;
  return eq_1;
}

var neq_1;
var hasRequiredNeq;
function requireNeq() {
  if (hasRequiredNeq) return neq_1;
  hasRequiredNeq = 1;
  var compare = requireCompare();
  var neq = function neq(a, b, loose) {
    return compare(a, b, loose) !== 0;
  };
  neq_1 = neq;
  return neq_1;
}

var gte_1;
var hasRequiredGte;
function requireGte() {
  if (hasRequiredGte) return gte_1;
  hasRequiredGte = 1;
  var compare = requireCompare();
  var gte = function gte(a, b, loose) {
    return compare(a, b, loose) >= 0;
  };
  gte_1 = gte;
  return gte_1;
}

var lte_1;
var hasRequiredLte;
function requireLte() {
  if (hasRequiredLte) return lte_1;
  hasRequiredLte = 1;
  var compare = requireCompare();
  var lte = function lte(a, b, loose) {
    return compare(a, b, loose) <= 0;
  };
  lte_1 = lte;
  return lte_1;
}

var cmp_1;
var hasRequiredCmp;
function requireCmp() {
  if (hasRequiredCmp) return cmp_1;
  hasRequiredCmp = 1;
  var eq = requireEq();
  var neq = requireNeq();
  var gt = requireGt();
  var gte = requireGte();
  var lt = requireLt();
  var lte = requireLte();
  var cmp = function cmp(a, op, b, loose) {
    switch (op) {
      case '===':
        if (_typeof(a) === 'object') {
          a = a.version;
        }
        if (_typeof(b) === 'object') {
          b = b.version;
        }
        return a === b;
      case '!==':
        if (_typeof(a) === 'object') {
          a = a.version;
        }
        if (_typeof(b) === 'object') {
          b = b.version;
        }
        return a !== b;
      case '':
      case '=':
      case '==':
        return eq(a, b, loose);
      case '!=':
        return neq(a, b, loose);
      case '>':
        return gt(a, b, loose);
      case '>=':
        return gte(a, b, loose);
      case '<':
        return lt(a, b, loose);
      case '<=':
        return lte(a, b, loose);
      default:
        throw new TypeError("Invalid operator: ".concat(op));
    }
  };
  cmp_1 = cmp;
  return cmp_1;
}

var coerce_1;
var hasRequiredCoerce;
function requireCoerce() {
  if (hasRequiredCoerce) return coerce_1;
  hasRequiredCoerce = 1;
  var SemVer = requireSemver$1();
  var parse = requireParse();
  var _require$$ = requireRe(),
    re = _require$$.safeRe,
    t = _require$$.t;
  var coerce = function coerce(version, options) {
    if (version instanceof SemVer) {
      return version;
    }
    if (typeof version === 'number') {
      version = String(version);
    }
    if (typeof version !== 'string') {
      return null;
    }
    options = options || {};
    var match = null;
    if (!options.rtl) {
      match = version.match(options.includePrerelease ? re[t.COERCEFULL] : re[t.COERCE]);
    } else {
      // Find the right-most coercible string that does not share
      // a terminus with a more left-ward coercible string.
      // Eg, '1.2.3.4' wants to coerce '2.3.4', not '3.4' or '4'
      // With includePrerelease option set, '1.2.3.4-rc' wants to coerce '2.3.4-rc', not '2.3.4'
      //
      // Walk through the string checking with a /g regexp
      // Manually set the index so as to pick up overlapping matches.
      // Stop when we get a match that ends at the string end, since no
      // coercible string can be more right-ward without the same terminus.
      var coerceRtlRegex = options.includePrerelease ? re[t.COERCERTLFULL] : re[t.COERCERTL];
      var next;
      while ((next = coerceRtlRegex.exec(version)) && (!match || match.index + match[0].length !== version.length)) {
        if (!match || next.index + next[0].length !== match.index + match[0].length) {
          match = next;
        }
        coerceRtlRegex.lastIndex = next.index + next[1].length + next[2].length;
      }
      // leave it in a clean state
      coerceRtlRegex.lastIndex = -1;
    }
    if (match === null) {
      return null;
    }
    var major = match[2];
    var minor = match[3] || '0';
    var patch = match[4] || '0';
    var prerelease = options.includePrerelease && match[5] ? "-".concat(match[5]) : '';
    var build = options.includePrerelease && match[6] ? "+".concat(match[6]) : '';
    return parse("".concat(major, ".").concat(minor, ".").concat(patch).concat(prerelease).concat(build), options);
  };
  coerce_1 = coerce;
  return coerce_1;
}

var lrucache;
var hasRequiredLrucache;
function requireLrucache() {
  if (hasRequiredLrucache) return lrucache;
  hasRequiredLrucache = 1;
  var LRUCache = /*#__PURE__*/function () {
    function LRUCache() {
      _classCallCheck(this, LRUCache);
      this.max = 1000;
      this.map = new Map();
    }
    return _createClass(LRUCache, [{
      key: "get",
      value: function get(key) {
        var value = this.map.get(key);
        if (value === undefined) {
          return undefined;
        } else {
          // Remove the key from the map and add it to the end
          this.map["delete"](key);
          this.map.set(key, value);
          return value;
        }
      }
    }, {
      key: "delete",
      value: function _delete(key) {
        return this.map["delete"](key);
      }
    }, {
      key: "set",
      value: function set(key, value) {
        var deleted = this["delete"](key);
        if (!deleted && value !== undefined) {
          // If cache is full, delete the least recently used item
          if (this.map.size >= this.max) {
            var firstKey = this.map.keys().next().value;
            this["delete"](firstKey);
          }
          this.map.set(key, value);
        }
        return this;
      }
    }]);
  }();
  lrucache = LRUCache;
  return lrucache;
}

var range;
var hasRequiredRange;
function requireRange() {
  if (hasRequiredRange) return range;
  hasRequiredRange = 1;
  var SPACE_CHARACTERS = /\s+/g;

  // hoisted class for cyclic dependency
  var Range = /*#__PURE__*/function () {
    function Range(range, options) {
      var _this = this;
      _classCallCheck(this, Range);
      options = parseOptions(options);
      if (range instanceof Range) {
        if (range.loose === !!options.loose && range.includePrerelease === !!options.includePrerelease) {
          return range;
        } else {
          return new Range(range.raw, options);
        }
      }
      if (range instanceof Comparator) {
        // just put it in the set and return
        this.raw = range.value;
        this.set = [[range]];
        this.formatted = undefined;
        return this;
      }
      this.options = options;
      this.loose = !!options.loose;
      this.includePrerelease = !!options.includePrerelease;

      // First reduce all whitespace as much as possible so we do not have to rely
      // on potentially slow regexes like \s*. This is then stored and used for
      // future error messages as well.
      this.raw = range.trim().replace(SPACE_CHARACTERS, ' ');

      // First, split on ||
      this.set = this.raw.split('||')
      // map the range to a 2d array of comparators
      .map(function (r) {
        return _this.parseRange(r.trim());
      })
      // throw out any comparator lists that are empty
      // this generally means that it was not a valid range, which is allowed
      // in loose mode, but will still throw if the WHOLE range is invalid.
      .filter(function (c) {
        return c.length;
      });
      if (!this.set.length) {
        throw new TypeError("Invalid SemVer Range: ".concat(this.raw));
      }

      // if we have any that are not the null set, throw out null sets.
      if (this.set.length > 1) {
        // keep the first one, in case they're all null sets
        var first = this.set[0];
        this.set = this.set.filter(function (c) {
          return !isNullSet(c[0]);
        });
        if (this.set.length === 0) {
          this.set = [first];
        } else if (this.set.length > 1) {
          // if we have any that are *, then the range is just *
          var _iterator = _createForOfIteratorHelper(this.set),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var c = _step.value;
              if (c.length === 1 && isAny(c[0])) {
                this.set = [c];
                break;
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
      }
      this.formatted = undefined;
    }
    return _createClass(Range, [{
      key: "range",
      get: function get() {
        if (this.formatted === undefined) {
          this.formatted = '';
          for (var i = 0; i < this.set.length; i++) {
            if (i > 0) {
              this.formatted += '||';
            }
            var comps = this.set[i];
            for (var k = 0; k < comps.length; k++) {
              if (k > 0) {
                this.formatted += ' ';
              }
              this.formatted += comps[k].toString().trim();
            }
          }
        }
        return this.formatted;
      }
    }, {
      key: "format",
      value: function format() {
        return this.range;
      }
    }, {
      key: "toString",
      value: function toString() {
        return this.range;
      }
    }, {
      key: "parseRange",
      value: function parseRange(range) {
        var _this2 = this;
        // memoize range parsing for performance.
        // this is a very hot path, and fully deterministic.
        var memoOpts = (this.options.includePrerelease && FLAG_INCLUDE_PRERELEASE) | (this.options.loose && FLAG_LOOSE);
        var memoKey = memoOpts + ':' + range;
        var cached = cache.get(memoKey);
        if (cached) {
          return cached;
        }
        var loose = this.options.loose;
        // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`
        var hr = loose ? re[t.HYPHENRANGELOOSE] : re[t.HYPHENRANGE];
        range = range.replace(hr, hyphenReplace(this.options.includePrerelease));
        debug('hyphen replace', range);

        // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`
        range = range.replace(re[t.COMPARATORTRIM], comparatorTrimReplace);
        debug('comparator trim', range);

        // `~ 1.2.3` => `~1.2.3`
        range = range.replace(re[t.TILDETRIM], tildeTrimReplace);
        debug('tilde trim', range);

        // `^ 1.2.3` => `^1.2.3`
        range = range.replace(re[t.CARETTRIM], caretTrimReplace);
        debug('caret trim', range);

        // At this point, the range is completely trimmed and
        // ready to be split into comparators.

        var rangeList = range.split(' ').map(function (comp) {
          return parseComparator(comp, _this2.options);
        }).join(' ').split(/\s+/)
        // >=0.0.0 is equivalent to *
        .map(function (comp) {
          return replaceGTE0(comp, _this2.options);
        });
        if (loose) {
          // in loose mode, throw out any that are not valid comparators
          rangeList = rangeList.filter(function (comp) {
            debug('loose invalid filter', comp, _this2.options);
            return !!comp.match(re[t.COMPARATORLOOSE]);
          });
        }
        debug('range list', rangeList);

        // if any comparators are the null set, then replace with JUST null set
        // if more than one comparator, remove any * comparators
        // also, don't include the same comparator more than once
        var rangeMap = new Map();
        var comparators = rangeList.map(function (comp) {
          return new Comparator(comp, _this2.options);
        });
        var _iterator2 = _createForOfIteratorHelper(comparators),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var comp = _step2.value;
            if (isNullSet(comp)) {
              return [comp];
            }
            rangeMap.set(comp.value, comp);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        if (rangeMap.size > 1 && rangeMap.has('')) {
          rangeMap["delete"]('');
        }
        var result = _toConsumableArray(rangeMap.values());
        cache.set(memoKey, result);
        return result;
      }
    }, {
      key: "intersects",
      value: function intersects(range, options) {
        if (!(range instanceof Range)) {
          throw new TypeError('a Range is required');
        }
        return this.set.some(function (thisComparators) {
          return isSatisfiable(thisComparators, options) && range.set.some(function (rangeComparators) {
            return isSatisfiable(rangeComparators, options) && thisComparators.every(function (thisComparator) {
              return rangeComparators.every(function (rangeComparator) {
                return thisComparator.intersects(rangeComparator, options);
              });
            });
          });
        });
      }

      // if ANY of the sets match ALL of its comparators, then pass
    }, {
      key: "test",
      value: function test(version) {
        if (!version) {
          return false;
        }
        if (typeof version === 'string') {
          try {
            version = new SemVer(version, this.options);
          } catch (er) {
            return false;
          }
        }
        for (var i = 0; i < this.set.length; i++) {
          if (testSet(this.set[i], version, this.options)) {
            return true;
          }
        }
        return false;
      }
    }]);
  }();
  range = Range;
  var LRU = requireLrucache();
  var cache = new LRU();
  var parseOptions = requireParseOptions();
  var Comparator = requireComparator();
  var debug = requireDebug$1();
  var SemVer = requireSemver$1();
  var _require$$ = requireRe(),
    re = _require$$.safeRe,
    t = _require$$.t,
    comparatorTrimReplace = _require$$.comparatorTrimReplace,
    tildeTrimReplace = _require$$.tildeTrimReplace,
    caretTrimReplace = _require$$.caretTrimReplace;
  var _require$$2 = requireConstants(),
    FLAG_INCLUDE_PRERELEASE = _require$$2.FLAG_INCLUDE_PRERELEASE,
    FLAG_LOOSE = _require$$2.FLAG_LOOSE;
  var isNullSet = function isNullSet(c) {
    return c.value === '<0.0.0-0';
  };
  var isAny = function isAny(c) {
    return c.value === '';
  };

  // take a set of comparators and determine whether there
  // exists a version which can satisfy it
  var isSatisfiable = function isSatisfiable(comparators, options) {
    var result = true;
    var remainingComparators = comparators.slice();
    var testComparator = remainingComparators.pop();
    while (result && remainingComparators.length) {
      result = remainingComparators.every(function (otherComparator) {
        return testComparator.intersects(otherComparator, options);
      });
      testComparator = remainingComparators.pop();
    }
    return result;
  };

  // comprised of xranges, tildes, stars, and gtlt's at this point.
  // already replaced the hyphen ranges
  // turn into a set of JUST comparators.
  var parseComparator = function parseComparator(comp, options) {
    debug('comp', comp, options);
    comp = replaceCarets(comp, options);
    debug('caret', comp);
    comp = replaceTildes(comp, options);
    debug('tildes', comp);
    comp = replaceXRanges(comp, options);
    debug('xrange', comp);
    comp = replaceStars(comp, options);
    debug('stars', comp);
    return comp;
  };
  var isX = function isX(id) {
    return !id || id.toLowerCase() === 'x' || id === '*';
  };

  // ~, ~> --> * (any, kinda silly)
  // ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0-0
  // ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0-0
  // ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0-0
  // ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0-0
  // ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0-0
  // ~0.0.1 --> >=0.0.1 <0.1.0-0
  var replaceTildes = function replaceTildes(comp, options) {
    return comp.trim().split(/\s+/).map(function (c) {
      return replaceTilde(c, options);
    }).join(' ');
  };
  var replaceTilde = function replaceTilde(comp, options) {
    var r = options.loose ? re[t.TILDELOOSE] : re[t.TILDE];
    return comp.replace(r, function (_, M, m, p, pr) {
      debug('tilde', comp, _, M, m, p, pr);
      var ret;
      if (isX(M)) {
        ret = '';
      } else if (isX(m)) {
        ret = ">=".concat(M, ".0.0 <").concat(+M + 1, ".0.0-0");
      } else if (isX(p)) {
        // ~1.2 == >=1.2.0 <1.3.0-0
        ret = ">=".concat(M, ".").concat(m, ".0 <").concat(M, ".").concat(+m + 1, ".0-0");
      } else if (pr) {
        debug('replaceTilde pr', pr);
        ret = ">=".concat(M, ".").concat(m, ".").concat(p, "-").concat(pr, " <").concat(M, ".").concat(+m + 1, ".0-0");
      } else {
        // ~1.2.3 == >=1.2.3 <1.3.0-0
        ret = ">=".concat(M, ".").concat(m, ".").concat(p, " <").concat(M, ".").concat(+m + 1, ".0-0");
      }
      debug('tilde return', ret);
      return ret;
    });
  };

  // ^ --> * (any, kinda silly)
  // ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0-0
  // ^2.0, ^2.0.x --> >=2.0.0 <3.0.0-0
  // ^1.2, ^1.2.x --> >=1.2.0 <2.0.0-0
  // ^1.2.3 --> >=1.2.3 <2.0.0-0
  // ^1.2.0 --> >=1.2.0 <2.0.0-0
  // ^0.0.1 --> >=0.0.1 <0.0.2-0
  // ^0.1.0 --> >=0.1.0 <0.2.0-0
  var replaceCarets = function replaceCarets(comp, options) {
    return comp.trim().split(/\s+/).map(function (c) {
      return replaceCaret(c, options);
    }).join(' ');
  };
  var replaceCaret = function replaceCaret(comp, options) {
    debug('caret', comp, options);
    var r = options.loose ? re[t.CARETLOOSE] : re[t.CARET];
    var z = options.includePrerelease ? '-0' : '';
    return comp.replace(r, function (_, M, m, p, pr) {
      debug('caret', comp, _, M, m, p, pr);
      var ret;
      if (isX(M)) {
        ret = '';
      } else if (isX(m)) {
        ret = ">=".concat(M, ".0.0").concat(z, " <").concat(+M + 1, ".0.0-0");
      } else if (isX(p)) {
        if (M === '0') {
          ret = ">=".concat(M, ".").concat(m, ".0").concat(z, " <").concat(M, ".").concat(+m + 1, ".0-0");
        } else {
          ret = ">=".concat(M, ".").concat(m, ".0").concat(z, " <").concat(+M + 1, ".0.0-0");
        }
      } else if (pr) {
        debug('replaceCaret pr', pr);
        if (M === '0') {
          if (m === '0') {
            ret = ">=".concat(M, ".").concat(m, ".").concat(p, "-").concat(pr, " <").concat(M, ".").concat(m, ".").concat(+p + 1, "-0");
          } else {
            ret = ">=".concat(M, ".").concat(m, ".").concat(p, "-").concat(pr, " <").concat(M, ".").concat(+m + 1, ".0-0");
          }
        } else {
          ret = ">=".concat(M, ".").concat(m, ".").concat(p, "-").concat(pr, " <").concat(+M + 1, ".0.0-0");
        }
      } else {
        debug('no pr');
        if (M === '0') {
          if (m === '0') {
            ret = ">=".concat(M, ".").concat(m, ".").concat(p).concat(z, " <").concat(M, ".").concat(m, ".").concat(+p + 1, "-0");
          } else {
            ret = ">=".concat(M, ".").concat(m, ".").concat(p).concat(z, " <").concat(M, ".").concat(+m + 1, ".0-0");
          }
        } else {
          ret = ">=".concat(M, ".").concat(m, ".").concat(p, " <").concat(+M + 1, ".0.0-0");
        }
      }
      debug('caret return', ret);
      return ret;
    });
  };
  var replaceXRanges = function replaceXRanges(comp, options) {
    debug('replaceXRanges', comp, options);
    return comp.split(/\s+/).map(function (c) {
      return replaceXRange(c, options);
    }).join(' ');
  };
  var replaceXRange = function replaceXRange(comp, options) {
    comp = comp.trim();
    var r = options.loose ? re[t.XRANGELOOSE] : re[t.XRANGE];
    return comp.replace(r, function (ret, gtlt, M, m, p, pr) {
      debug('xRange', comp, ret, gtlt, M, m, p, pr);
      var xM = isX(M);
      var xm = xM || isX(m);
      var xp = xm || isX(p);
      var anyX = xp;
      if (gtlt === '=' && anyX) {
        gtlt = '';
      }

      // if we're including prereleases in the match, then we need
      // to fix this to -0, the lowest possible prerelease value
      pr = options.includePrerelease ? '-0' : '';
      if (xM) {
        if (gtlt === '>' || gtlt === '<') {
          // nothing is allowed
          ret = '<0.0.0-0';
        } else {
          // nothing is forbidden
          ret = '*';
        }
      } else if (gtlt && anyX) {
        // we know patch is an x, because we have any x at all.
        // replace X with 0
        if (xm) {
          m = 0;
        }
        p = 0;
        if (gtlt === '>') {
          // >1 => >=2.0.0
          // >1.2 => >=1.3.0
          gtlt = '>=';
          if (xm) {
            M = +M + 1;
            m = 0;
            p = 0;
          } else {
            m = +m + 1;
            p = 0;
          }
        } else if (gtlt === '<=') {
          // <=0.7.x is actually <0.8.0, since any 0.7.x should
          // pass.  Similarly, <=7.x is actually <8.0.0, etc.
          gtlt = '<';
          if (xm) {
            M = +M + 1;
          } else {
            m = +m + 1;
          }
        }
        if (gtlt === '<') {
          pr = '-0';
        }
        ret = "".concat(gtlt + M, ".").concat(m, ".").concat(p).concat(pr);
      } else if (xm) {
        ret = ">=".concat(M, ".0.0").concat(pr, " <").concat(+M + 1, ".0.0-0");
      } else if (xp) {
        ret = ">=".concat(M, ".").concat(m, ".0").concat(pr, " <").concat(M, ".").concat(+m + 1, ".0-0");
      }
      debug('xRange return', ret);
      return ret;
    });
  };

  // Because * is AND-ed with everything else in the comparator,
  // and '' means "any version", just remove the *s entirely.
  var replaceStars = function replaceStars(comp, options) {
    debug('replaceStars', comp, options);
    // Looseness is ignored here.  star is always as loose as it gets!
    return comp.trim().replace(re[t.STAR], '');
  };
  var replaceGTE0 = function replaceGTE0(comp, options) {
    debug('replaceGTE0', comp, options);
    return comp.trim().replace(re[options.includePrerelease ? t.GTE0PRE : t.GTE0], '');
  };

  // This function is passed to string.replace(re[t.HYPHENRANGE])
  // M, m, patch, prerelease, build
  // 1.2 - 3.4.5 => >=1.2.0 <=3.4.5
  // 1.2.3 - 3.4 => >=1.2.0 <3.5.0-0 Any 3.4.x will do
  // 1.2 - 3.4 => >=1.2.0 <3.5.0-0
  // TODO build?
  var hyphenReplace = function hyphenReplace(incPr) {
    return function ($0, from, fM, fm, fp, fpr, fb, to, tM, tm, tp, tpr) {
      if (isX(fM)) {
        from = '';
      } else if (isX(fm)) {
        from = ">=".concat(fM, ".0.0").concat(incPr ? '-0' : '');
      } else if (isX(fp)) {
        from = ">=".concat(fM, ".").concat(fm, ".0").concat(incPr ? '-0' : '');
      } else if (fpr) {
        from = ">=".concat(from);
      } else {
        from = ">=".concat(from).concat(incPr ? '-0' : '');
      }
      if (isX(tM)) {
        to = '';
      } else if (isX(tm)) {
        to = "<".concat(+tM + 1, ".0.0-0");
      } else if (isX(tp)) {
        to = "<".concat(tM, ".").concat(+tm + 1, ".0-0");
      } else if (tpr) {
        to = "<=".concat(tM, ".").concat(tm, ".").concat(tp, "-").concat(tpr);
      } else if (incPr) {
        to = "<".concat(tM, ".").concat(tm, ".").concat(+tp + 1, "-0");
      } else {
        to = "<=".concat(to);
      }
      return "".concat(from, " ").concat(to).trim();
    };
  };
  var testSet = function testSet(set, version, options) {
    for (var i = 0; i < set.length; i++) {
      if (!set[i].test(version)) {
        return false;
      }
    }
    if (version.prerelease.length && !options.includePrerelease) {
      // Find the set of versions that are allowed to have prereleases
      // For example, ^1.2.3-pr.1 desugars to >=1.2.3-pr.1 <2.0.0
      // That should allow `1.2.3-pr.2` to pass.
      // However, `1.2.4-alpha.notready` should NOT be allowed,
      // even though it's within the range set by the comparators.
      for (var _i = 0; _i < set.length; _i++) {
        debug(set[_i].semver);
        if (set[_i].semver === Comparator.ANY) {
          continue;
        }
        if (set[_i].semver.prerelease.length > 0) {
          var allowed = set[_i].semver;
          if (allowed.major === version.major && allowed.minor === version.minor && allowed.patch === version.patch) {
            return true;
          }
        }
      }

      // Version has a -pre, but it's not one of the ones we like.
      return false;
    }
    return true;
  };
  return range;
}

var comparator;
var hasRequiredComparator;
function requireComparator() {
  if (hasRequiredComparator) return comparator;
  hasRequiredComparator = 1;
  var ANY = Symbol('SemVer ANY');
  // hoisted class for cyclic dependency
  var Comparator = /*#__PURE__*/function () {
    function Comparator(comp, options) {
      _classCallCheck(this, Comparator);
      options = parseOptions(options);
      if (comp instanceof Comparator) {
        if (comp.loose === !!options.loose) {
          return comp;
        } else {
          comp = comp.value;
        }
      }
      comp = comp.trim().split(/\s+/).join(' ');
      debug('comparator', comp, options);
      this.options = options;
      this.loose = !!options.loose;
      this.parse(comp);
      if (this.semver === ANY) {
        this.value = '';
      } else {
        this.value = this.operator + this.semver.version;
      }
      debug('comp', this);
    }
    return _createClass(Comparator, [{
      key: "parse",
      value: function parse(comp) {
        var r = this.options.loose ? re[t.COMPARATORLOOSE] : re[t.COMPARATOR];
        var m = comp.match(r);
        if (!m) {
          throw new TypeError("Invalid comparator: ".concat(comp));
        }
        this.operator = m[1] !== undefined ? m[1] : '';
        if (this.operator === '=') {
          this.operator = '';
        }

        // if it literally is just '>' or '' then allow anything.
        if (!m[2]) {
          this.semver = ANY;
        } else {
          this.semver = new SemVer(m[2], this.options.loose);
        }
      }
    }, {
      key: "toString",
      value: function toString() {
        return this.value;
      }
    }, {
      key: "test",
      value: function test(version) {
        debug('Comparator.test', version, this.options.loose);
        if (this.semver === ANY || version === ANY) {
          return true;
        }
        if (typeof version === 'string') {
          try {
            version = new SemVer(version, this.options);
          } catch (er) {
            return false;
          }
        }
        return cmp(version, this.operator, this.semver, this.options);
      }
    }, {
      key: "intersects",
      value: function intersects(comp, options) {
        if (!(comp instanceof Comparator)) {
          throw new TypeError('a Comparator is required');
        }
        if (this.operator === '') {
          if (this.value === '') {
            return true;
          }
          return new Range(comp.value, options).test(this.value);
        } else if (comp.operator === '') {
          if (comp.value === '') {
            return true;
          }
          return new Range(this.value, options).test(comp.semver);
        }
        options = parseOptions(options);

        // Special cases where nothing can possibly be lower
        if (options.includePrerelease && (this.value === '<0.0.0-0' || comp.value === '<0.0.0-0')) {
          return false;
        }
        if (!options.includePrerelease && (this.value.startsWith('<0.0.0') || comp.value.startsWith('<0.0.0'))) {
          return false;
        }

        // Same direction increasing (> or >=)
        if (this.operator.startsWith('>') && comp.operator.startsWith('>')) {
          return true;
        }
        // Same direction decreasing (< or <=)
        if (this.operator.startsWith('<') && comp.operator.startsWith('<')) {
          return true;
        }
        // same SemVer and both sides are inclusive (<= or >=)
        if (this.semver.version === comp.semver.version && this.operator.includes('=') && comp.operator.includes('=')) {
          return true;
        }
        // opposite directions less than
        if (cmp(this.semver, '<', comp.semver, options) && this.operator.startsWith('>') && comp.operator.startsWith('<')) {
          return true;
        }
        // opposite directions greater than
        if (cmp(this.semver, '>', comp.semver, options) && this.operator.startsWith('<') && comp.operator.startsWith('>')) {
          return true;
        }
        return false;
      }
    }], [{
      key: "ANY",
      get: function get() {
        return ANY;
      }
    }]);
  }();
  comparator = Comparator;
  var parseOptions = requireParseOptions();
  var _require$$ = requireRe(),
    re = _require$$.safeRe,
    t = _require$$.t;
  var cmp = requireCmp();
  var debug = requireDebug$1();
  var SemVer = requireSemver$1();
  var Range = requireRange();
  return comparator;
}

var satisfies_1;
var hasRequiredSatisfies;
function requireSatisfies() {
  if (hasRequiredSatisfies) return satisfies_1;
  hasRequiredSatisfies = 1;
  var Range = requireRange();
  var satisfies = function satisfies(version, range, options) {
    try {
      range = new Range(range, options);
    } catch (er) {
      return false;
    }
    return range.test(version);
  };
  satisfies_1 = satisfies;
  return satisfies_1;
}

var toComparators_1;
var hasRequiredToComparators;
function requireToComparators() {
  if (hasRequiredToComparators) return toComparators_1;
  hasRequiredToComparators = 1;
  var Range = requireRange();

  // Mostly just for testing and legacy API reasons
  var toComparators = function toComparators(range, options) {
    return new Range(range, options).set.map(function (comp) {
      return comp.map(function (c) {
        return c.value;
      }).join(' ').trim().split(' ');
    });
  };
  toComparators_1 = toComparators;
  return toComparators_1;
}

var maxSatisfying_1;
var hasRequiredMaxSatisfying;
function requireMaxSatisfying() {
  if (hasRequiredMaxSatisfying) return maxSatisfying_1;
  hasRequiredMaxSatisfying = 1;
  var SemVer = requireSemver$1();
  var Range = requireRange();
  var maxSatisfying = function maxSatisfying(versions, range, options) {
    var max = null;
    var maxSV = null;
    var rangeObj = null;
    try {
      rangeObj = new Range(range, options);
    } catch (er) {
      return null;
    }
    versions.forEach(function (v) {
      if (rangeObj.test(v)) {
        // satisfies(v, range, options)
        if (!max || maxSV.compare(v) === -1) {
          // compare(max, v, true)
          max = v;
          maxSV = new SemVer(max, options);
        }
      }
    });
    return max;
  };
  maxSatisfying_1 = maxSatisfying;
  return maxSatisfying_1;
}

var minSatisfying_1;
var hasRequiredMinSatisfying;
function requireMinSatisfying() {
  if (hasRequiredMinSatisfying) return minSatisfying_1;
  hasRequiredMinSatisfying = 1;
  var SemVer = requireSemver$1();
  var Range = requireRange();
  var minSatisfying = function minSatisfying(versions, range, options) {
    var min = null;
    var minSV = null;
    var rangeObj = null;
    try {
      rangeObj = new Range(range, options);
    } catch (er) {
      return null;
    }
    versions.forEach(function (v) {
      if (rangeObj.test(v)) {
        // satisfies(v, range, options)
        if (!min || minSV.compare(v) === 1) {
          // compare(min, v, true)
          min = v;
          minSV = new SemVer(min, options);
        }
      }
    });
    return min;
  };
  minSatisfying_1 = minSatisfying;
  return minSatisfying_1;
}

var minVersion_1;
var hasRequiredMinVersion;
function requireMinVersion() {
  if (hasRequiredMinVersion) return minVersion_1;
  hasRequiredMinVersion = 1;
  var SemVer = requireSemver$1();
  var Range = requireRange();
  var gt = requireGt();
  var minVersion = function minVersion(range, loose) {
    range = new Range(range, loose);
    var minver = new SemVer('0.0.0');
    if (range.test(minver)) {
      return minver;
    }
    minver = new SemVer('0.0.0-0');
    if (range.test(minver)) {
      return minver;
    }
    minver = null;
    var _loop = function _loop() {
      var comparators = range.set[i];
      var setMin = null;
      comparators.forEach(function (comparator) {
        // Clone to avoid manipulating the comparator's semver object.
        var compver = new SemVer(comparator.semver.version);
        switch (comparator.operator) {
          case '>':
            if (compver.prerelease.length === 0) {
              compver.patch++;
            } else {
              compver.prerelease.push(0);
            }
            compver.raw = compver.format();
          /* fallthrough */
          case '':
          case '>=':
            if (!setMin || gt(compver, setMin)) {
              setMin = compver;
            }
            break;
          case '<':
          case '<=':
            /* Ignore maximum versions */
            break;
          /* istanbul ignore next */
          default:
            throw new Error("Unexpected operation: ".concat(comparator.operator));
        }
      });
      if (setMin && (!minver || gt(minver, setMin))) {
        minver = setMin;
      }
    };
    for (var i = 0; i < range.set.length; ++i) {
      _loop();
    }
    if (minver && range.test(minver)) {
      return minver;
    }
    return null;
  };
  minVersion_1 = minVersion;
  return minVersion_1;
}

var valid;
var hasRequiredValid;
function requireValid() {
  if (hasRequiredValid) return valid;
  hasRequiredValid = 1;
  var Range = requireRange();
  var validRange = function validRange(range, options) {
    try {
      // Return '*' instead of '' so that truthiness works.
      // This will throw if it's invalid anyway
      return new Range(range, options).range || '*';
    } catch (er) {
      return null;
    }
  };
  valid = validRange;
  return valid;
}

var outside_1;
var hasRequiredOutside;
function requireOutside() {
  if (hasRequiredOutside) return outside_1;
  hasRequiredOutside = 1;
  var SemVer = requireSemver$1();
  var Comparator = requireComparator();
  var ANY = Comparator.ANY;
  var Range = requireRange();
  var satisfies = requireSatisfies();
  var gt = requireGt();
  var lt = requireLt();
  var lte = requireLte();
  var gte = requireGte();
  var outside = function outside(version, range, hilo, options) {
    version = new SemVer(version, options);
    range = new Range(range, options);
    var gtfn, ltefn, ltfn, comp, ecomp;
    switch (hilo) {
      case '>':
        gtfn = gt;
        ltefn = lte;
        ltfn = lt;
        comp = '>';
        ecomp = '>=';
        break;
      case '<':
        gtfn = lt;
        ltefn = gte;
        ltfn = gt;
        comp = '<';
        ecomp = '<=';
        break;
      default:
        throw new TypeError('Must provide a hilo val of "<" or ">"');
    }

    // If it satisfies the range it is not outside
    if (satisfies(version, range, options)) {
      return false;
    }

    // From now on, variable terms are as if we're in "gtr" mode.
    // but note that everything is flipped for the "ltr" function.
    var _loop = function _loop() {
        var comparators = range.set[i];
        var high = null;
        var low = null;
        comparators.forEach(function (comparator) {
          if (comparator.semver === ANY) {
            comparator = new Comparator('>=0.0.0');
          }
          high = high || comparator;
          low = low || comparator;
          if (gtfn(comparator.semver, high.semver, options)) {
            high = comparator;
          } else if (ltfn(comparator.semver, low.semver, options)) {
            low = comparator;
          }
        });

        // If the edge version comparator has a operator then our version
        // isn't outside it
        if (high.operator === comp || high.operator === ecomp) {
          return {
            v: false
          };
        }

        // If the lowest version comparator has an operator and our version
        // is less than it then it isn't higher than the range
        if ((!low.operator || low.operator === comp) && ltefn(version, low.semver)) {
          return {
            v: false
          };
        } else if (low.operator === ecomp && ltfn(version, low.semver)) {
          return {
            v: false
          };
        }
      },
      _ret;
    for (var i = 0; i < range.set.length; ++i) {
      _ret = _loop();
      if (_ret) return _ret.v;
    }
    return true;
  };
  outside_1 = outside;
  return outside_1;
}

var gtr_1;
var hasRequiredGtr;
function requireGtr() {
  if (hasRequiredGtr) return gtr_1;
  hasRequiredGtr = 1;
  // Determine if version is greater than all the versions possible in the range.
  var outside = requireOutside();
  var gtr = function gtr(version, range, options) {
    return outside(version, range, '>', options);
  };
  gtr_1 = gtr;
  return gtr_1;
}

var ltr_1;
var hasRequiredLtr;
function requireLtr() {
  if (hasRequiredLtr) return ltr_1;
  hasRequiredLtr = 1;
  var outside = requireOutside();
  // Determine if version is less than all the versions possible in the range
  var ltr = function ltr(version, range, options) {
    return outside(version, range, '<', options);
  };
  ltr_1 = ltr;
  return ltr_1;
}

var intersects_1;
var hasRequiredIntersects;
function requireIntersects() {
  if (hasRequiredIntersects) return intersects_1;
  hasRequiredIntersects = 1;
  var Range = requireRange();
  var intersects = function intersects(r1, r2, options) {
    r1 = new Range(r1, options);
    r2 = new Range(r2, options);
    return r1.intersects(r2, options);
  };
  intersects_1 = intersects;
  return intersects_1;
}

var simplify;
var hasRequiredSimplify;
function requireSimplify() {
  if (hasRequiredSimplify) return simplify;
  hasRequiredSimplify = 1;
  // given a set of versions and a range, create a "simplified" range
  // that includes the same versions that the original range does
  // If the original range is shorter than the simplified one, return that.
  var satisfies = requireSatisfies();
  var compare = requireCompare();
  simplify = function simplify(versions, range, options) {
    var set = [];
    var first = null;
    var prev = null;
    var v = versions.sort(function (a, b) {
      return compare(a, b, options);
    });
    var _iterator = _createForOfIteratorHelper(v),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var version = _step.value;
        var included = satisfies(version, range, options);
        if (included) {
          prev = version;
          if (!first) {
            first = version;
          }
        } else {
          if (prev) {
            set.push([first, prev]);
          }
          prev = null;
          first = null;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (first) {
      set.push([first, null]);
    }
    var ranges = [];
    for (var _i = 0, _set = set; _i < _set.length; _i++) {
      var _set$_i = _slicedToArray(_set[_i], 2),
        min = _set$_i[0],
        max = _set$_i[1];
      if (min === max) {
        ranges.push(min);
      } else if (!max && min === v[0]) {
        ranges.push('*');
      } else if (!max) {
        ranges.push(">=".concat(min));
      } else if (min === v[0]) {
        ranges.push("<=".concat(max));
      } else {
        ranges.push("".concat(min, " - ").concat(max));
      }
    }
    var simplified = ranges.join(' || ');
    var original = typeof range.raw === 'string' ? range.raw : String(range);
    return simplified.length < original.length ? simplified : range;
  };
  return simplify;
}

var subset_1;
var hasRequiredSubset;
function requireSubset() {
  if (hasRequiredSubset) return subset_1;
  hasRequiredSubset = 1;
  var Range = requireRange();
  var Comparator = requireComparator();
  var ANY = Comparator.ANY;
  var satisfies = requireSatisfies();
  var compare = requireCompare();

  // Complex range `r1 || r2 || ...` is a subset of `R1 || R2 || ...` iff:
  // - Every simple range `r1, r2, ...` is a null set, OR
  // - Every simple range `r1, r2, ...` which is not a null set is a subset of
  //   some `R1, R2, ...`
  //
  // Simple range `c1 c2 ...` is a subset of simple range `C1 C2 ...` iff:
  // - If c is only the ANY comparator
  //   - If C is only the ANY comparator, return true
  //   - Else if in prerelease mode, return false
  //   - else replace c with `[>=0.0.0]`
  // - If C is only the ANY comparator
  //   - if in prerelease mode, return true
  //   - else replace C with `[>=0.0.0]`
  // - Let EQ be the set of = comparators in c
  // - If EQ is more than one, return true (null set)
  // - Let GT be the highest > or >= comparator in c
  // - Let LT be the lowest < or <= comparator in c
  // - If GT and LT, and GT.semver > LT.semver, return true (null set)
  // - If any C is a = range, and GT or LT are set, return false
  // - If EQ
  //   - If GT, and EQ does not satisfy GT, return true (null set)
  //   - If LT, and EQ does not satisfy LT, return true (null set)
  //   - If EQ satisfies every C, return true
  //   - Else return false
  // - If GT
  //   - If GT.semver is lower than any > or >= comp in C, return false
  //   - If GT is >=, and GT.semver does not satisfy every C, return false
  //   - If GT.semver has a prerelease, and not in prerelease mode
  //     - If no C has a prerelease and the GT.semver tuple, return false
  // - If LT
  //   - If LT.semver is greater than any < or <= comp in C, return false
  //   - If LT is <=, and LT.semver does not satisfy every C, return false
  //   - If GT.semver has a prerelease, and not in prerelease mode
  //     - If no C has a prerelease and the LT.semver tuple, return false
  // - Else return true

  var subset = function subset(sub, dom) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    if (sub === dom) {
      return true;
    }
    sub = new Range(sub, options);
    dom = new Range(dom, options);
    var sawNonNull = false;
    var _iterator = _createForOfIteratorHelper(sub.set),
      _step;
    try {
      OUTER: for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var simpleSub = _step.value;
        var _iterator2 = _createForOfIteratorHelper(dom.set),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var simpleDom = _step2.value;
            var isSub = simpleSubset(simpleSub, simpleDom, options);
            sawNonNull = sawNonNull || isSub !== null;
            if (isSub) {
              continue OUTER;
            }
          }
          // the null set is a subset of everything, but null simple ranges in
          // a complex range should be ignored.  so if we saw a non-null range,
          // then we know this isn't a subset, but if EVERY simple range was null,
          // then it is a subset.
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        if (sawNonNull) {
          return false;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return true;
  };
  var minimumVersionWithPreRelease = [new Comparator('>=0.0.0-0')];
  var minimumVersion = [new Comparator('>=0.0.0')];
  var simpleSubset = function simpleSubset(sub, dom, options) {
    if (sub === dom) {
      return true;
    }
    if (sub.length === 1 && sub[0].semver === ANY) {
      if (dom.length === 1 && dom[0].semver === ANY) {
        return true;
      } else if (options.includePrerelease) {
        sub = minimumVersionWithPreRelease;
      } else {
        sub = minimumVersion;
      }
    }
    if (dom.length === 1 && dom[0].semver === ANY) {
      if (options.includePrerelease) {
        return true;
      } else {
        dom = minimumVersion;
      }
    }
    var eqSet = new Set();
    var gt, lt;
    var _iterator3 = _createForOfIteratorHelper(sub),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var c = _step3.value;
        if (c.operator === '>' || c.operator === '>=') {
          gt = higherGT(gt, c, options);
        } else if (c.operator === '<' || c.operator === '<=') {
          lt = lowerLT(lt, c, options);
        } else {
          eqSet.add(c.semver);
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    if (eqSet.size > 1) {
      return null;
    }
    var gtltComp;
    if (gt && lt) {
      gtltComp = compare(gt.semver, lt.semver, options);
      if (gtltComp > 0) {
        return null;
      } else if (gtltComp === 0 && (gt.operator !== '>=' || lt.operator !== '<=')) {
        return null;
      }
    }

    // will iterate one or zero times
    var _iterator4 = _createForOfIteratorHelper(eqSet),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var eq = _step4.value;
        if (gt && !satisfies(eq, String(gt), options)) {
          return null;
        }
        if (lt && !satisfies(eq, String(lt), options)) {
          return null;
        }
        var _iterator6 = _createForOfIteratorHelper(dom),
          _step6;
        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
            var _c = _step6.value;
            if (!satisfies(eq, String(_c), options)) {
              return false;
            }
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
        return true;
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    var higher, lower;
    var hasDomLT, hasDomGT;
    // if the subset has a prerelease, we need a comparator in the superset
    // with the same tuple and a prerelease, or it's not a subset
    var needDomLTPre = lt && !options.includePrerelease && lt.semver.prerelease.length ? lt.semver : false;
    var needDomGTPre = gt && !options.includePrerelease && gt.semver.prerelease.length ? gt.semver : false;
    // exception: <1.2.3-0 is the same as <1.2.3
    if (needDomLTPre && needDomLTPre.prerelease.length === 1 && lt.operator === '<' && needDomLTPre.prerelease[0] === 0) {
      needDomLTPre = false;
    }
    var _iterator5 = _createForOfIteratorHelper(dom),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var _c2 = _step5.value;
        hasDomGT = hasDomGT || _c2.operator === '>' || _c2.operator === '>=';
        hasDomLT = hasDomLT || _c2.operator === '<' || _c2.operator === '<=';
        if (gt) {
          if (needDomGTPre) {
            if (_c2.semver.prerelease && _c2.semver.prerelease.length && _c2.semver.major === needDomGTPre.major && _c2.semver.minor === needDomGTPre.minor && _c2.semver.patch === needDomGTPre.patch) {
              needDomGTPre = false;
            }
          }
          if (_c2.operator === '>' || _c2.operator === '>=') {
            higher = higherGT(gt, _c2, options);
            if (higher === _c2 && higher !== gt) {
              return false;
            }
          } else if (gt.operator === '>=' && !satisfies(gt.semver, String(_c2), options)) {
            return false;
          }
        }
        if (lt) {
          if (needDomLTPre) {
            if (_c2.semver.prerelease && _c2.semver.prerelease.length && _c2.semver.major === needDomLTPre.major && _c2.semver.minor === needDomLTPre.minor && _c2.semver.patch === needDomLTPre.patch) {
              needDomLTPre = false;
            }
          }
          if (_c2.operator === '<' || _c2.operator === '<=') {
            lower = lowerLT(lt, _c2, options);
            if (lower === _c2 && lower !== lt) {
              return false;
            }
          } else if (lt.operator === '<=' && !satisfies(lt.semver, String(_c2), options)) {
            return false;
          }
        }
        if (!_c2.operator && (lt || gt) && gtltComp !== 0) {
          return false;
        }
      }

      // if there was a < or >, and nothing in the dom, then must be false
      // UNLESS it was limited by another range in the other direction.
      // Eg, >1.0.0 <1.0.1 is still a subset of <2.0.0
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
    if (gt && hasDomLT && !lt && gtltComp !== 0) {
      return false;
    }
    if (lt && hasDomGT && !gt && gtltComp !== 0) {
      return false;
    }

    // we needed a prerelease range in a specific tuple, but didn't get one
    // then this isn't a subset.  eg >=1.2.3-pre is not a subset of >=1.0.0,
    // because it includes prereleases in the 1.2.3 tuple
    if (needDomGTPre || needDomLTPre) {
      return false;
    }
    return true;
  };

  // >=1.2.3 is lower than >1.2.3
  var higherGT = function higherGT(a, b, options) {
    if (!a) {
      return b;
    }
    var comp = compare(a.semver, b.semver, options);
    return comp > 0 ? a : comp < 0 ? b : b.operator === '>' && a.operator === '>=' ? b : a;
  };

  // <=1.2.3 is higher than <1.2.3
  var lowerLT = function lowerLT(a, b, options) {
    if (!a) {
      return b;
    }
    var comp = compare(a.semver, b.semver, options);
    return comp < 0 ? a : comp > 0 ? b : b.operator === '<' && a.operator === '<=' ? b : a;
  };
  subset_1 = subset;
  return subset_1;
}

var semver;
var hasRequiredSemver;
function requireSemver() {
  if (hasRequiredSemver) return semver;
  hasRequiredSemver = 1;
  // just pre-load all the stuff that index.js lazily exports
  var internalRe = requireRe();
  var constants = requireConstants();
  var SemVer = requireSemver$1();
  var identifiers = requireIdentifiers();
  var parse = requireParse();
  var valid = requireValid$1();
  var clean = requireClean();
  var inc = requireInc();
  var diff = requireDiff();
  var major = requireMajor();
  var minor = requireMinor();
  var patch = requirePatch();
  var prerelease = requirePrerelease();
  var compare = requireCompare();
  var rcompare = requireRcompare();
  var compareLoose = requireCompareLoose();
  var compareBuild = requireCompareBuild();
  var sort = requireSort();
  var rsort = requireRsort();
  var gt = requireGt();
  var lt = requireLt();
  var eq = requireEq();
  var neq = requireNeq();
  var gte = requireGte();
  var lte = requireLte();
  var cmp = requireCmp();
  var coerce = requireCoerce();
  var Comparator = requireComparator();
  var Range = requireRange();
  var satisfies = requireSatisfies();
  var toComparators = requireToComparators();
  var maxSatisfying = requireMaxSatisfying();
  var minSatisfying = requireMinSatisfying();
  var minVersion = requireMinVersion();
  var validRange = requireValid();
  var outside = requireOutside();
  var gtr = requireGtr();
  var ltr = requireLtr();
  var intersects = requireIntersects();
  var simplifyRange = requireSimplify();
  var subset = requireSubset();
  semver = {
    parse: parse,
    valid: valid,
    clean: clean,
    inc: inc,
    diff: diff,
    major: major,
    minor: minor,
    patch: patch,
    prerelease: prerelease,
    compare: compare,
    rcompare: rcompare,
    compareLoose: compareLoose,
    compareBuild: compareBuild,
    sort: sort,
    rsort: rsort,
    gt: gt,
    lt: lt,
    eq: eq,
    neq: neq,
    gte: gte,
    lte: lte,
    cmp: cmp,
    coerce: coerce,
    Comparator: Comparator,
    Range: Range,
    satisfies: satisfies,
    toComparators: toComparators,
    maxSatisfying: maxSatisfying,
    minSatisfying: minSatisfying,
    minVersion: minVersion,
    validRange: validRange,
    outside: outside,
    gtr: gtr,
    ltr: ltr,
    intersects: intersects,
    simplifyRange: simplifyRange,
    subset: subset,
    SemVer: SemVer,
    re: internalRe.re,
    src: internalRe.src,
    tokens: internalRe.t,
    SEMVER_SPEC_VERSION: constants.SEMVER_SPEC_VERSION,
    RELEASE_TYPES: constants.RELEASE_TYPES,
    compareIdentifiers: identifiers.compareIdentifiers,
    rcompareIdentifiers: identifiers.rcompareIdentifiers
  };
  return semver;
}

var onetime = {exports: {}};

var mimicFn = {exports: {}};

var hasRequiredMimicFn;
function requireMimicFn() {
  if (hasRequiredMimicFn) return mimicFn.exports;
  hasRequiredMimicFn = 1;
  var mimicFn$1 = function mimicFn(to, from) {
    var _iterator = _createForOfIteratorHelper(Reflect.ownKeys(from)),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var prop = _step.value;
        Object.defineProperty(to, prop, Object.getOwnPropertyDescriptor(from, prop));
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return to;
  };
  mimicFn.exports = mimicFn$1;
  // TODO: Remove this for the next major release
  mimicFn.exports["default"] = mimicFn$1;
  return mimicFn.exports;
}

var hasRequiredOnetime;
function requireOnetime() {
  if (hasRequiredOnetime) return onetime.exports;
  hasRequiredOnetime = 1;
  var mimicFn = requireMimicFn();
  var calledFunctions = new WeakMap();
  var _onetime2 = function onetime(function_) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (typeof function_ !== 'function') {
      throw new TypeError('Expected a function');
    }
    var returnValue;
    var callCount = 0;
    var functionName = function_.displayName || function_.name || '<anonymous>';
    var _onetime = function onetime() {
      calledFunctions.set(_onetime, ++callCount);
      if (callCount === 1) {
        for (var _len = arguments.length, arguments_ = new Array(_len), _key = 0; _key < _len; _key++) {
          arguments_[_key] = arguments[_key];
        }
        returnValue = function_.apply(this, arguments_);
        function_ = null;
      } else if (options["throw"] === true) {
        throw new Error("Function `".concat(functionName, "` can only be called once"));
      }
      return returnValue;
    };
    mimicFn(_onetime, function_);
    calledFunctions.set(_onetime, callCount);
    return _onetime;
  };
  onetime.exports = _onetime2;
  // TODO: Remove this for the next major release
  onetime.exports["default"] = _onetime2;
  onetime.exports.callCount = function (function_) {
    if (!calledFunctions.has(function_)) {
      throw new Error("The given function `".concat(function_.name, "` is not wrapped by the `onetime` package"));
    }
    return calledFunctions.get(function_);
  };
  return onetime.exports;
}

var source = source$1.exports;
var hasRequiredSource;
function requireSource() {
  if (hasRequiredSource) return source$1.exports;
  hasRequiredSource = 1;
  (function (module, exports) {

    var __classPrivateFieldSet = source && source.__classPrivateFieldSet || function (receiver, state, value, kind, f) {
      if (kind === "m") throw new TypeError("Private method is not writable");
      if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    var __classPrivateFieldGet = source && source.__classPrivateFieldGet || function (receiver, state, kind, f) {
      if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var _a, _b;
    var _Conf_validator, _Conf_encryptionKey, _Conf_options, _Conf_defaultValues;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var util_1 = require$$1$1;
    var fs = require$$0$1;
    var path = require$$0$2;
    var crypto = require$$3$1;
    var assert = require$$4;
    var events_1 = require$$5;
    var dotProp = requireDotProp();
    var pkgUp = requirePkgUp();
    var envPaths = requireEnvPaths();
    var atomically = requireDist$1();
    var ajv_1 = requireAjv();
    var ajv_formats_1 = requireDist();
    var debounceFn = requireDebounceFn();
    var semver = requireSemver();
    var onetime = requireOnetime();
    var encryptionAlgorithm = 'aes-256-cbc';
    var createPlainObject = function createPlainObject() {
      return Object.create(null);
    };
    var isExist = function isExist(data) {
      return data !== undefined && data !== null;
    };
    var parentDir = '';
    try {
      // Prevent caching of this module so module.parent is always accurate.
      // Note: This trick won't work with ESM or inside a webworker
      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete require.cache[__filename];
      parentDir = path.dirname((_b = (_a = module.parent) === null || _a === void 0 ? void 0 : _a.filename) !== null && _b !== void 0 ? _b : '.');
    } catch (_c) {}
    var checkValueType = function checkValueType(key, value) {
      var nonJsonTypes = new Set(['undefined', 'symbol', 'function']);
      var type = _typeof(value);
      if (nonJsonTypes.has(type)) {
        throw new TypeError("Setting a value of type `".concat(type, "` for key `").concat(key, "` is not allowed as it's not supported by JSON"));
      }
    };
    var INTERNAL_KEY = '__internal__';
    var MIGRATION_KEY = "".concat(INTERNAL_KEY, ".migrations.version");
    var Conf = /*#__PURE__*/function (_ref) {
      function Conf() {
        var partialOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck(this, Conf);
        var _a;
        _Conf_validator.set(this, void 0);
        _Conf_encryptionKey.set(this, void 0);
        _Conf_options.set(this, void 0);
        _Conf_defaultValues.set(this, {});
        this._deserialize = function (value) {
          return JSON.parse(value);
        };
        this._serialize = function (value) {
          return JSON.stringify(value, undefined, '\t');
        };
        var options = _objectSpread2({
          configName: 'config',
          fileExtension: 'json',
          projectSuffix: 'nodejs',
          clearInvalidConfig: false,
          accessPropertiesByDotNotation: true,
          configFileMode: 438
        }, partialOptions);
        var getPackageData = onetime(function () {
          var packagePath = pkgUp.sync({
            cwd: parentDir
          });
          // Can't use `require` because of Webpack being annoying:
          // https://github.com/webpack/webpack/issues/196
          var packageData = packagePath && JSON.parse(fs.readFileSync(packagePath, 'utf8'));
          return packageData !== null && packageData !== void 0 ? packageData : {};
        });
        if (!options.cwd) {
          if (!options.projectName) {
            options.projectName = getPackageData().name;
          }
          if (!options.projectName) {
            throw new Error('Project name could not be inferred. Please specify the `projectName` option.');
          }
          options.cwd = envPaths(options.projectName, {
            suffix: options.projectSuffix
          }).config;
        }
        __classPrivateFieldSet(this, _Conf_options, options, "f");
        if (options.schema) {
          if (_typeof(options.schema) !== 'object') {
            throw new TypeError('The `schema` option must be an object.');
          }
          var ajv = new ajv_1["default"]({
            allErrors: true,
            useDefaults: true
          });
          (0, ajv_formats_1["default"])(ajv);
          var schema = {
            type: 'object',
            properties: options.schema
          };
          __classPrivateFieldSet(this, _Conf_validator, ajv.compile(schema), "f");
          for (var _i = 0, _Object$entries = Object.entries(options.schema); _i < _Object$entries.length; _i++) {
            var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
              key = _Object$entries$_i[0],
              value = _Object$entries$_i[1];
            if (value === null || value === void 0 ? void 0 : value["default"]) {
              __classPrivateFieldGet(this, _Conf_defaultValues, "f")[key] = value["default"];
            }
          }
        }
        if (options.defaults) {
          __classPrivateFieldSet(this, _Conf_defaultValues, _objectSpread2(_objectSpread2({}, __classPrivateFieldGet(this, _Conf_defaultValues, "f")), options.defaults), "f");
        }
        if (options.serialize) {
          this._serialize = options.serialize;
        }
        if (options.deserialize) {
          this._deserialize = options.deserialize;
        }
        this.events = new events_1.EventEmitter();
        __classPrivateFieldSet(this, _Conf_encryptionKey, options.encryptionKey, "f");
        var fileExtension = options.fileExtension ? ".".concat(options.fileExtension) : '';
        this.path = path.resolve(options.cwd, "".concat((_a = options.configName) !== null && _a !== void 0 ? _a : 'config').concat(fileExtension));
        var fileStore = this.store;
        var store = Object.assign(createPlainObject(), options.defaults, fileStore);
        this._validate(store);
        try {
          assert.deepEqual(fileStore, store);
        } catch (_b) {
          this.store = store;
        }
        if (options.watch) {
          this._watch();
        }
        if (options.migrations) {
          if (!options.projectVersion) {
            options.projectVersion = getPackageData().version;
          }
          if (!options.projectVersion) {
            throw new Error('Project version could not be inferred. Please specify the `projectVersion` option.');
          }
          this._migrate(options.migrations, options.projectVersion, options.beforeEachMigration);
        }
      }
      return _createClass(Conf, [{
        key: "get",
        value: function get(key, defaultValue) {
          if (__classPrivateFieldGet(this, _Conf_options, "f").accessPropertiesByDotNotation) {
            return this._get(key, defaultValue);
          }
          var store = this.store;
          return key in store ? store[key] : defaultValue;
        }
      }, {
        key: "set",
        value: function set(key, value) {
          var _this = this;
          if (typeof key !== 'string' && _typeof(key) !== 'object') {
            throw new TypeError("Expected `key` to be of type `string` or `object`, got ".concat(_typeof(key)));
          }
          if (_typeof(key) !== 'object' && value === undefined) {
            throw new TypeError('Use `delete()` to clear values');
          }
          if (this._containsReservedKey(key)) {
            throw new TypeError("Please don't use the ".concat(INTERNAL_KEY, " key, as it's used to manage this module internal operations."));
          }
          var store = this.store;
          var set = function set(key, value) {
            checkValueType(key, value);
            if (__classPrivateFieldGet(_this, _Conf_options, "f").accessPropertiesByDotNotation) {
              dotProp.set(store, key, value);
            } else {
              store[key] = value;
            }
          };
          if (_typeof(key) === 'object') {
            var object = key;
            for (var _i2 = 0, _Object$entries2 = Object.entries(object); _i2 < _Object$entries2.length; _i2++) {
              var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
                _key = _Object$entries2$_i[0],
                _value = _Object$entries2$_i[1];
              set(_key, _value);
            }
          } else {
            set(key, value);
          }
          this.store = store;
        }
        /**
        Check if an item exists.
         @param key - The key of the item to check.
        */
      }, {
        key: "has",
        value: function has(key) {
          if (__classPrivateFieldGet(this, _Conf_options, "f").accessPropertiesByDotNotation) {
            return dotProp.has(this.store, key);
          }
          return key in this.store;
        }
        /**
        Reset items to their default values, as defined by the `defaults` or `schema` option.
         @see `clear()` to reset all items.
         @param keys - The keys of the items to reset.
        */
      }, {
        key: "reset",
        value: function reset() {
          for (var _len = arguments.length, keys = new Array(_len), _key2 = 0; _key2 < _len; _key2++) {
            keys[_key2] = arguments[_key2];
          }
          for (var _i3 = 0, _keys = keys; _i3 < _keys.length; _i3++) {
            var key = _keys[_i3];
            if (isExist(__classPrivateFieldGet(this, _Conf_defaultValues, "f")[key])) {
              this.set(key, __classPrivateFieldGet(this, _Conf_defaultValues, "f")[key]);
            }
          }
        }
        /**
        Delete an item.
         @param key - The key of the item to delete.
        */
      }, {
        key: "delete",
        value: function _delete(key) {
          var store = this.store;
          if (__classPrivateFieldGet(this, _Conf_options, "f").accessPropertiesByDotNotation) {
            dotProp["delete"](store, key);
          } else {
            // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
            delete store[key];
          }
          this.store = store;
        }
        /**
        Delete all items.
         This resets known items to their default values, if defined by the `defaults` or `schema` option.
        */
      }, {
        key: "clear",
        value: function clear() {
          this.store = createPlainObject();
          for (var _i4 = 0, _Object$keys = Object.keys(__classPrivateFieldGet(this, _Conf_defaultValues, "f")); _i4 < _Object$keys.length; _i4++) {
            var key = _Object$keys[_i4];
            this.reset(key);
          }
        }
        /**
        Watches the given `key`, calling `callback` on any changes.
         @param key - The key wo watch.
        @param callback - A callback function that is called on any changes. When a `key` is first set `oldValue` will be `undefined`, and when a key is deleted `newValue` will be `undefined`.
        @returns A function, that when called, will unsubscribe.
        */
      }, {
        key: "onDidChange",
        value: function onDidChange(key, callback) {
          var _this2 = this;
          if (typeof key !== 'string') {
            throw new TypeError("Expected `key` to be of type `string`, got ".concat(_typeof(key)));
          }
          if (typeof callback !== 'function') {
            throw new TypeError("Expected `callback` to be of type `function`, got ".concat(_typeof(callback)));
          }
          return this._handleChange(function () {
            return _this2.get(key);
          }, callback);
        }
        /**
        Watches the whole config object, calling `callback` on any changes.
         @param callback - A callback function that is called on any changes. When a `key` is first set `oldValue` will be `undefined`, and when a key is deleted `newValue` will be `undefined`.
        @returns A function, that when called, will unsubscribe.
        */
      }, {
        key: "onDidAnyChange",
        value: function onDidAnyChange(callback) {
          var _this3 = this;
          if (typeof callback !== 'function') {
            throw new TypeError("Expected `callback` to be of type `function`, got ".concat(_typeof(callback)));
          }
          return this._handleChange(function () {
            return _this3.store;
          }, callback);
        }
      }, {
        key: "size",
        get: function get() {
          return Object.keys(this.store).length;
        }
      }, {
        key: "store",
        get: function get() {
          try {
            var data = fs.readFileSync(this.path, __classPrivateFieldGet(this, _Conf_encryptionKey, "f") ? null : 'utf8');
            var dataString = this._encryptData(data);
            var deserializedData = this._deserialize(dataString);
            this._validate(deserializedData);
            return Object.assign(createPlainObject(), deserializedData);
          } catch (error) {
            if ((error === null || error === void 0 ? void 0 : error.code) === 'ENOENT') {
              this._ensureDirectory();
              return createPlainObject();
            }
            if (__classPrivateFieldGet(this, _Conf_options, "f").clearInvalidConfig && error.name === 'SyntaxError') {
              return createPlainObject();
            }
            throw error;
          }
        },
        set: function set(value) {
          this._ensureDirectory();
          this._validate(value);
          this._write(value);
          this.events.emit('change');
        }
      }, {
        key: _ref,
        value: /*#__PURE__*/_regeneratorRuntime().mark(function value() {
          var _i5, _Object$entries3, _Object$entries3$_i, key, value;
          return _regeneratorRuntime().wrap(function value$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _i5 = 0, _Object$entries3 = Object.entries(this.store);
              case 1:
                if (!(_i5 < _Object$entries3.length)) {
                  _context.next = 8;
                  break;
                }
                _Object$entries3$_i = _slicedToArray(_Object$entries3[_i5], 2), key = _Object$entries3$_i[0], value = _Object$entries3$_i[1];
                _context.next = 5;
                return [key, value];
              case 5:
                _i5++;
                _context.next = 1;
                break;
              case 8:
              case "end":
                return _context.stop();
            }
          }, value, this);
        })
      }, {
        key: "_encryptData",
        value: function _encryptData(data) {
          if (!__classPrivateFieldGet(this, _Conf_encryptionKey, "f")) {
            return data.toString();
          }
          try {
            // Check if an initialization vector has been used to encrypt the data
            if (__classPrivateFieldGet(this, _Conf_encryptionKey, "f")) {
              try {
                if (data.slice(16, 17).toString() === ':') {
                  var initializationVector = data.slice(0, 16);
                  var password = crypto.pbkdf2Sync(__classPrivateFieldGet(this, _Conf_encryptionKey, "f"), initializationVector.toString(), 10000, 32, 'sha512');
                  var decipher = crypto.createDecipheriv(encryptionAlgorithm, password, initializationVector);
                  data = Buffer.concat([decipher.update(Buffer.from(data.slice(17))), decipher["final"]()]).toString('utf8');
                } else {
                  // TODO: Remove this in the next major version.
                  var _decipher = crypto.createDecipher(encryptionAlgorithm, __classPrivateFieldGet(this, _Conf_encryptionKey, "f"));
                  data = Buffer.concat([_decipher.update(Buffer.from(data)), _decipher["final"]()]).toString('utf8');
                }
              } catch (_a) {}
            }
          } catch (_b) {}
          return data.toString();
        }
      }, {
        key: "_handleChange",
        value: function _handleChange(getter, callback) {
          var _this4 = this;
          var currentValue = getter();
          var onChange = function onChange() {
            var oldValue = currentValue;
            var newValue = getter();
            if ((0, util_1.isDeepStrictEqual)(newValue, oldValue)) {
              return;
            }
            currentValue = newValue;
            callback.call(_this4, newValue, oldValue);
          };
          this.events.on('change', onChange);
          return function () {
            return _this4.events.removeListener('change', onChange);
          };
        }
      }, {
        key: "_validate",
        value: function _validate(data) {
          if (!__classPrivateFieldGet(this, _Conf_validator, "f")) {
            return;
          }
          var valid = __classPrivateFieldGet(this, _Conf_validator, "f").call(this, data);
          if (valid || !__classPrivateFieldGet(this, _Conf_validator, "f").errors) {
            return;
          }
          var errors = __classPrivateFieldGet(this, _Conf_validator, "f").errors.map(function (_ref2) {
            var instancePath = _ref2.instancePath,
              _ref2$message = _ref2.message,
              message = _ref2$message === void 0 ? '' : _ref2$message;
            return "`".concat(instancePath.slice(1), "` ").concat(message);
          });
          throw new Error('Config schema violation: ' + errors.join('; '));
        }
      }, {
        key: "_ensureDirectory",
        value: function _ensureDirectory() {
          // Ensure the directory exists as it could have been deleted in the meantime.
          fs.mkdirSync(path.dirname(this.path), {
            recursive: true
          });
        }
      }, {
        key: "_write",
        value: function _write(value) {
          var data = this._serialize(value);
          if (__classPrivateFieldGet(this, _Conf_encryptionKey, "f")) {
            var initializationVector = crypto.randomBytes(16);
            var password = crypto.pbkdf2Sync(__classPrivateFieldGet(this, _Conf_encryptionKey, "f"), initializationVector.toString(), 10000, 32, 'sha512');
            var cipher = crypto.createCipheriv(encryptionAlgorithm, password, initializationVector);
            data = Buffer.concat([initializationVector, Buffer.from(':'), cipher.update(Buffer.from(data)), cipher["final"]()]);
          }
          // Temporary workaround for Conf being packaged in a Ubuntu Snap app.
          // See https://github.com/sindresorhus/conf/pull/82
          if (process.env.SNAP) {
            fs.writeFileSync(this.path, data, {
              mode: __classPrivateFieldGet(this, _Conf_options, "f").configFileMode
            });
          } else {
            try {
              atomically.writeFileSync(this.path, data, {
                mode: __classPrivateFieldGet(this, _Conf_options, "f").configFileMode
              });
            } catch (error) {
              // Fix for https://github.com/sindresorhus/electron-store/issues/106
              // Sometimes on Windows, we will get an EXDEV error when atomic writing
              // (even though to the same directory), so we fall back to non atomic write
              if ((error === null || error === void 0 ? void 0 : error.code) === 'EXDEV') {
                fs.writeFileSync(this.path, data, {
                  mode: __classPrivateFieldGet(this, _Conf_options, "f").configFileMode
                });
                return;
              }
              throw error;
            }
          }
        }
      }, {
        key: "_watch",
        value: function _watch() {
          var _this5 = this;
          this._ensureDirectory();
          if (!fs.existsSync(this.path)) {
            this._write(createPlainObject());
          }
          if (process.platform === 'win32') {
            fs.watch(this.path, {
              persistent: false
            }, debounceFn(function () {
              // On Linux and Windows, writing to the config file emits a `rename` event, so we skip checking the event type.
              _this5.events.emit('change');
            }, {
              wait: 100
            }));
          } else {
            fs.watchFile(this.path, {
              persistent: false
            }, debounceFn(function () {
              _this5.events.emit('change');
            }, {
              wait: 5000
            }));
          }
        }
      }, {
        key: "_migrate",
        value: function _migrate(migrations, versionToMigrate, beforeEachMigration) {
          var _this6 = this;
          var previousMigratedVersion = this._get(MIGRATION_KEY, '0.0.0');
          var newerVersions = Object.keys(migrations).filter(function (candidateVersion) {
            return _this6._shouldPerformMigration(candidateVersion, previousMigratedVersion, versionToMigrate);
          });
          var storeBackup = _objectSpread2({}, this.store);
          var _iterator = _createForOfIteratorHelper(newerVersions),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var version = _step.value;
              try {
                if (beforeEachMigration) {
                  beforeEachMigration(this, {
                    fromVersion: previousMigratedVersion,
                    toVersion: version,
                    finalVersion: versionToMigrate,
                    versions: newerVersions
                  });
                }
                var migration = migrations[version];
                migration(this);
                this._set(MIGRATION_KEY, version);
                previousMigratedVersion = version;
                storeBackup = _objectSpread2({}, this.store);
              } catch (error) {
                this.store = storeBackup;
                throw new Error("Something went wrong during the migration! Changes applied to the store until this failed migration will be restored. ".concat(error));
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          if (this._isVersionInRangeFormat(previousMigratedVersion) || !semver.eq(previousMigratedVersion, versionToMigrate)) {
            this._set(MIGRATION_KEY, versionToMigrate);
          }
        }
      }, {
        key: "_containsReservedKey",
        value: function _containsReservedKey(key) {
          if (_typeof(key) === 'object') {
            var firsKey = Object.keys(key)[0];
            if (firsKey === INTERNAL_KEY) {
              return true;
            }
          }
          if (typeof key !== 'string') {
            return false;
          }
          if (__classPrivateFieldGet(this, _Conf_options, "f").accessPropertiesByDotNotation) {
            if (key.startsWith("".concat(INTERNAL_KEY, "."))) {
              return true;
            }
            return false;
          }
          return false;
        }
      }, {
        key: "_isVersionInRangeFormat",
        value: function _isVersionInRangeFormat(version) {
          return semver.clean(version) === null;
        }
      }, {
        key: "_shouldPerformMigration",
        value: function _shouldPerformMigration(candidateVersion, previousMigratedVersion, versionToMigrate) {
          if (this._isVersionInRangeFormat(candidateVersion)) {
            if (previousMigratedVersion !== '0.0.0' && semver.satisfies(previousMigratedVersion, candidateVersion)) {
              return false;
            }
            return semver.satisfies(versionToMigrate, candidateVersion);
          }
          if (semver.lte(candidateVersion, previousMigratedVersion)) {
            return false;
          }
          if (semver.gt(candidateVersion, versionToMigrate)) {
            return false;
          }
          return true;
        }
      }, {
        key: "_get",
        value: function _get(key, defaultValue) {
          return dotProp.get(this.store, key, defaultValue);
        }
      }, {
        key: "_set",
        value: function _set(key, value) {
          var store = this.store;
          dotProp.set(store, key, value);
          this.store = store;
        }
      }]);
    }((_Conf_validator = new WeakMap(), _Conf_encryptionKey = new WeakMap(), _Conf_options = new WeakMap(), _Conf_defaultValues = new WeakMap(), Symbol.iterator));
    exports["default"] = Conf;
    // For CommonJS default export support
    module.exports = Conf;
    module.exports["default"] = Conf;
  })(source$1, source$1.exports);
  return source$1.exports;
}

var config_1;
var hasRequiredConfig;
function requireConfig() {
  if (hasRequiredConfig) return config_1;
  hasRequiredConfig = 1;
  var Conf = requireSource();
  var config = new Conf({
    projectSuffix: "",
    cwd: process.env.HOME + "/.config/roboflow",
    projectName: "roboflow"
  });
  var DEFAULTS = {
    RF_APP_URL: "https://app.roboflow.com",
    RF_API_URL: "https://api.roboflow.com",
    RF_OBJECT_DETECTION_URL: "https://detect.roboflow.com",
    RF_CLASSIFICATION_URL: "https://classify.roboflow.com",
    RF_INSTANCE_SEGMENTATION_URL: "https://outline.roboflow.com",
    RF_SEMANTIC_SEGMENTATION_URL: "https://segment.roboflow.com",
    RF_CLIP_URL: "https://infer.roboflow.com/clip"
  };

  // env vars take precedence over config values
  function getCascadingConfigValue(key, defaultValue) {
    if (key.startsWith("RF_") && process.env[key]) {
      return process.env[key];
    } else if (config.has(key)) {
      return config.get(key);
    } else {
      return DEFAULTS[key];
    }
  }
  config_1 = {
    get: function get(key) {
      return getCascadingConfigValue(key);
    },
    set: function set(key, value) {
      return config.set(key, value);
    },
    getAll: function getAll() {
      return _objectSpread2(_objectSpread2({}, config.store), {}, {
        RF_WORKSPACE: getCascadingConfigValue("RF_WORKSPACE"),
        RF_APP_URL: getCascadingConfigValue("RF_APP_URL"),
        RF_API_URL: getCascadingConfigValue("RF_API_URL"),
        RF_OBJECT_DETECTION_URL: getCascadingConfigValue("RF_OBJECT_DETECTION_URL"),
        RF_CLASSIFICATION_URL: getCascadingConfigValue("RF_CLASSIFICATION_URL"),
        RF_INSTANCE_SEGMENTATION_URL: getCascadingConfigValue("RF_INSTANCE_SEGMENTATION_URL"),
        RF_SEMANTIC_SEGMENTATION_URL: getCascadingConfigValue("RF_SEMANTIC_SEGMENTATION_URL"),
        RF_CLIP_URL: getCascadingConfigValue("RF_CLIP_URL")
      });
    },
    clear: function clear() {
      return config.clear();
    },
    configFile: config.path
  };
  return config_1;
}

var axios$1 = {exports: {}};

var bind;
var hasRequiredBind;
function requireBind() {
  if (hasRequiredBind) return bind;
  hasRequiredBind = 1;
  bind = function bind(fn, thisArg) {
    return function wrap() {
      var args = new Array(arguments.length);
      for (var i = 0; i < args.length; i++) {
        args[i] = arguments[i];
      }
      return fn.apply(thisArg, args);
    };
  };
  return bind;
}

var utils;
var hasRequiredUtils;
function requireUtils() {
  if (hasRequiredUtils) return utils;
  hasRequiredUtils = 1;
  var bind = requireBind();

  // utils is a library of generic helper functions non-specific to axios

  var toString = Object.prototype.toString;

  // eslint-disable-next-line func-names
  var kindOf = function (cache) {
    // eslint-disable-next-line func-names
    return function (thing) {
      var str = toString.call(thing);
      return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
    };
  }(Object.create(null));
  function kindOfTest(type) {
    type = type.toLowerCase();
    return function isKindOf(thing) {
      return kindOf(thing) === type;
    };
  }

  /**
   * Determine if a value is an Array
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is an Array, otherwise false
   */
  function isArray(val) {
    return Array.isArray(val);
  }

  /**
   * Determine if a value is undefined
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if the value is undefined, otherwise false
   */
  function isUndefined(val) {
    return typeof val === 'undefined';
  }

  /**
   * Determine if a value is a Buffer
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Buffer, otherwise false
   */
  function isBuffer(val) {
    return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
  }

  /**
   * Determine if a value is an ArrayBuffer
   *
   * @function
   * @param {Object} val The value to test
   * @returns {boolean} True if value is an ArrayBuffer, otherwise false
   */
  var isArrayBuffer = kindOfTest('ArrayBuffer');

  /**
   * Determine if a value is a view on an ArrayBuffer
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
   */
  function isArrayBufferView(val) {
    var result;
    if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
      result = ArrayBuffer.isView(val);
    } else {
      result = val && val.buffer && isArrayBuffer(val.buffer);
    }
    return result;
  }

  /**
   * Determine if a value is a String
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a String, otherwise false
   */
  function isString(val) {
    return typeof val === 'string';
  }

  /**
   * Determine if a value is a Number
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Number, otherwise false
   */
  function isNumber(val) {
    return typeof val === 'number';
  }

  /**
   * Determine if a value is an Object
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is an Object, otherwise false
   */
  function isObject(val) {
    return val !== null && _typeof(val) === 'object';
  }

  /**
   * Determine if a value is a plain Object
   *
   * @param {Object} val The value to test
   * @return {boolean} True if value is a plain Object, otherwise false
   */
  function isPlainObject(val) {
    if (kindOf(val) !== 'object') {
      return false;
    }
    var prototype = Object.getPrototypeOf(val);
    return prototype === null || prototype === Object.prototype;
  }

  /**
   * Determine if a value is a Date
   *
   * @function
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Date, otherwise false
   */
  var isDate = kindOfTest('Date');

  /**
   * Determine if a value is a File
   *
   * @function
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a File, otherwise false
   */
  var isFile = kindOfTest('File');

  /**
   * Determine if a value is a Blob
   *
   * @function
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Blob, otherwise false
   */
  var isBlob = kindOfTest('Blob');

  /**
   * Determine if a value is a FileList
   *
   * @function
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a File, otherwise false
   */
  var isFileList = kindOfTest('FileList');

  /**
   * Determine if a value is a Function
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Function, otherwise false
   */
  function isFunction(val) {
    return toString.call(val) === '[object Function]';
  }

  /**
   * Determine if a value is a Stream
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Stream, otherwise false
   */
  function isStream(val) {
    return isObject(val) && isFunction(val.pipe);
  }

  /**
   * Determine if a value is a FormData
   *
   * @param {Object} thing The value to test
   * @returns {boolean} True if value is an FormData, otherwise false
   */
  function isFormData(thing) {
    var pattern = '[object FormData]';
    return thing && (typeof FormData === 'function' && thing instanceof FormData || toString.call(thing) === pattern || isFunction(thing.toString) && thing.toString() === pattern);
  }

  /**
   * Determine if a value is a URLSearchParams object
   * @function
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a URLSearchParams object, otherwise false
   */
  var isURLSearchParams = kindOfTest('URLSearchParams');

  /**
   * Trim excess whitespace off the beginning and end of a string
   *
   * @param {String} str The String to trim
   * @returns {String} The String freed of excess whitespace
   */
  function trim(str) {
    return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
  }

  /**
   * Determine if we're running in a standard browser environment
   *
   * This allows axios to run in a web worker, and react-native.
   * Both environments support XMLHttpRequest, but not fully standard globals.
   *
   * web workers:
   *  typeof window -> undefined
   *  typeof document -> undefined
   *
   * react-native:
   *  navigator.product -> 'ReactNative'
   * nativescript
   *  navigator.product -> 'NativeScript' or 'NS'
   */
  function isStandardBrowserEnv() {
    if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' || navigator.product === 'NativeScript' || navigator.product === 'NS')) {
      return false;
    }
    return typeof window !== 'undefined' && typeof document !== 'undefined';
  }

  /**
   * Iterate over an Array or an Object invoking a function for each item.
   *
   * If `obj` is an Array callback will be called passing
   * the value, index, and complete array for each item.
   *
   * If 'obj' is an Object callback will be called passing
   * the value, key, and complete object for each property.
   *
   * @param {Object|Array} obj The object to iterate
   * @param {Function} fn The callback to invoke for each item
   */
  function forEach(obj, fn) {
    // Don't bother if no value provided
    if (obj === null || typeof obj === 'undefined') {
      return;
    }

    // Force an array if not already something iterable
    if (_typeof(obj) !== 'object') {
      /*eslint no-param-reassign:0*/
      obj = [obj];
    }
    if (isArray(obj)) {
      // Iterate over array values
      for (var i = 0, l = obj.length; i < l; i++) {
        fn.call(null, obj[i], i, obj);
      }
    } else {
      // Iterate over object keys
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          fn.call(null, obj[key], key, obj);
        }
      }
    }
  }

  /**
   * Accepts varargs expecting each argument to be an object, then
   * immutably merges the properties of each object and returns result.
   *
   * When multiple objects contain the same key the later object in
   * the arguments list will take precedence.
   *
   * Example:
   *
   * ```js
   * var result = merge({foo: 123}, {foo: 456});
   * console.log(result.foo); // outputs 456
   * ```
   *
   * @param {Object} obj1 Object to merge
   * @returns {Object} Result of all merge properties
   */
  function merge(/* obj1, obj2, obj3, ... */
  ) {
    var result = {};
    function assignValue(val, key) {
      if (isPlainObject(result[key]) && isPlainObject(val)) {
        result[key] = merge(result[key], val);
      } else if (isPlainObject(val)) {
        result[key] = merge({}, val);
      } else if (isArray(val)) {
        result[key] = val.slice();
      } else {
        result[key] = val;
      }
    }
    for (var i = 0, l = arguments.length; i < l; i++) {
      forEach(arguments[i], assignValue);
    }
    return result;
  }

  /**
   * Extends object a by mutably adding to it the properties of object b.
   *
   * @param {Object} a The object to be extended
   * @param {Object} b The object to copy properties from
   * @param {Object} thisArg The object to bind function to
   * @return {Object} The resulting value of object a
   */
  function extend(a, b, thisArg) {
    forEach(b, function assignValue(val, key) {
      if (thisArg && typeof val === 'function') {
        a[key] = bind(val, thisArg);
      } else {
        a[key] = val;
      }
    });
    return a;
  }

  /**
   * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
   *
   * @param {string} content with BOM
   * @return {string} content value without BOM
   */
  function stripBOM(content) {
    if (content.charCodeAt(0) === 0xFEFF) {
      content = content.slice(1);
    }
    return content;
  }

  /**
   * Inherit the prototype methods from one constructor into another
   * @param {function} constructor
   * @param {function} superConstructor
   * @param {object} [props]
   * @param {object} [descriptors]
   */

  function inherits(constructor, superConstructor, props, descriptors) {
    constructor.prototype = Object.create(superConstructor.prototype, descriptors);
    constructor.prototype.constructor = constructor;
    props && Object.assign(constructor.prototype, props);
  }

  /**
   * Resolve object with deep prototype chain to a flat object
   * @param {Object} sourceObj source object
   * @param {Object} [destObj]
   * @param {Function} [filter]
   * @returns {Object}
   */

  function toFlatObject(sourceObj, destObj, filter) {
    var props;
    var i;
    var prop;
    var merged = {};
    destObj = destObj || {};
    do {
      props = Object.getOwnPropertyNames(sourceObj);
      i = props.length;
      while (i-- > 0) {
        prop = props[i];
        if (!merged[prop]) {
          destObj[prop] = sourceObj[prop];
          merged[prop] = true;
        }
      }
      sourceObj = Object.getPrototypeOf(sourceObj);
    } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);
    return destObj;
  }

  /*
   * determines whether a string ends with the characters of a specified string
   * @param {String} str
   * @param {String} searchString
   * @param {Number} [position= 0]
   * @returns {boolean}
   */
  function endsWith(str, searchString, position) {
    str = String(str);
    if (position === undefined || position > str.length) {
      position = str.length;
    }
    position -= searchString.length;
    var lastIndex = str.indexOf(searchString, position);
    return lastIndex !== -1 && lastIndex === position;
  }

  /**
   * Returns new array from array like object
   * @param {*} [thing]
   * @returns {Array}
   */
  function toArray(thing) {
    if (!thing) return null;
    var i = thing.length;
    if (isUndefined(i)) return null;
    var arr = new Array(i);
    while (i-- > 0) {
      arr[i] = thing[i];
    }
    return arr;
  }

  // eslint-disable-next-line func-names
  var isTypedArray = function (TypedArray) {
    // eslint-disable-next-line func-names
    return function (thing) {
      return TypedArray && thing instanceof TypedArray;
    };
  }(typeof Uint8Array !== 'undefined' && Object.getPrototypeOf(Uint8Array));
  utils = {
    isArray: isArray,
    isArrayBuffer: isArrayBuffer,
    isBuffer: isBuffer,
    isFormData: isFormData,
    isArrayBufferView: isArrayBufferView,
    isString: isString,
    isNumber: isNumber,
    isObject: isObject,
    isPlainObject: isPlainObject,
    isUndefined: isUndefined,
    isDate: isDate,
    isFile: isFile,
    isBlob: isBlob,
    isFunction: isFunction,
    isStream: isStream,
    isURLSearchParams: isURLSearchParams,
    isStandardBrowserEnv: isStandardBrowserEnv,
    forEach: forEach,
    merge: merge,
    extend: extend,
    trim: trim,
    stripBOM: stripBOM,
    inherits: inherits,
    toFlatObject: toFlatObject,
    kindOf: kindOf,
    kindOfTest: kindOfTest,
    endsWith: endsWith,
    toArray: toArray,
    isTypedArray: isTypedArray,
    isFileList: isFileList
  };
  return utils;
}

var buildURL;
var hasRequiredBuildURL;
function requireBuildURL() {
  if (hasRequiredBuildURL) return buildURL;
  hasRequiredBuildURL = 1;
  var utils = requireUtils();
  function encode(val) {
    return encodeURIComponent(val).replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
  }

  /**
   * Build a URL by appending params to the end
   *
   * @param {string} url The base of the url (e.g., http://www.google.com)
   * @param {object} [params] The params to be appended
   * @returns {string} The formatted url
   */
  buildURL = function buildURL(url, params, paramsSerializer) {
    /*eslint no-param-reassign:0*/
    if (!params) {
      return url;
    }
    var serializedParams;
    if (paramsSerializer) {
      serializedParams = paramsSerializer(params);
    } else if (utils.isURLSearchParams(params)) {
      serializedParams = params.toString();
    } else {
      var parts = [];
      utils.forEach(params, function serialize(val, key) {
        if (val === null || typeof val === 'undefined') {
          return;
        }
        if (utils.isArray(val)) {
          key = key + '[]';
        } else {
          val = [val];
        }
        utils.forEach(val, function parseValue(v) {
          if (utils.isDate(v)) {
            v = v.toISOString();
          } else if (utils.isObject(v)) {
            v = JSON.stringify(v);
          }
          parts.push(encode(key) + '=' + encode(v));
        });
      });
      serializedParams = parts.join('&');
    }
    if (serializedParams) {
      var hashmarkIndex = url.indexOf('#');
      if (hashmarkIndex !== -1) {
        url = url.slice(0, hashmarkIndex);
      }
      url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
    }
    return url;
  };
  return buildURL;
}

var InterceptorManager_1;
var hasRequiredInterceptorManager;
function requireInterceptorManager() {
  if (hasRequiredInterceptorManager) return InterceptorManager_1;
  hasRequiredInterceptorManager = 1;
  var utils = requireUtils();
  function InterceptorManager() {
    this.handlers = [];
  }

  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
    this.handlers.push({
      fulfilled: fulfilled,
      rejected: rejected,
      synchronous: options ? options.synchronous : false,
      runWhen: options ? options.runWhen : null
    });
    return this.handlers.length - 1;
  };

  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   */
  InterceptorManager.prototype.eject = function eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  };

  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   */
  InterceptorManager.prototype.forEach = function forEach(fn) {
    utils.forEach(this.handlers, function forEachHandler(h) {
      if (h !== null) {
        fn(h);
      }
    });
  };
  InterceptorManager_1 = InterceptorManager;
  return InterceptorManager_1;
}

var normalizeHeaderName;
var hasRequiredNormalizeHeaderName;
function requireNormalizeHeaderName() {
  if (hasRequiredNormalizeHeaderName) return normalizeHeaderName;
  hasRequiredNormalizeHeaderName = 1;
  var utils = requireUtils();
  normalizeHeaderName = function normalizeHeaderName(headers, normalizedName) {
    utils.forEach(headers, function processHeader(value, name) {
      if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
        headers[normalizedName] = value;
        delete headers[name];
      }
    });
  };
  return normalizeHeaderName;
}

var AxiosError_1;
var hasRequiredAxiosError;
function requireAxiosError() {
  if (hasRequiredAxiosError) return AxiosError_1;
  hasRequiredAxiosError = 1;
  var utils = requireUtils();

  /**
   * Create an Error with the specified message, config, error code, request and response.
   *
   * @param {string} message The error message.
   * @param {string} [code] The error code (for example, 'ECONNABORTED').
   * @param {Object} [config] The config.
   * @param {Object} [request] The request.
   * @param {Object} [response] The response.
   * @returns {Error} The created error.
   */
  function AxiosError(message, code, config, request, response) {
    Error.call(this);
    this.message = message;
    this.name = 'AxiosError';
    code && (this.code = code);
    config && (this.config = config);
    request && (this.request = request);
    response && (this.response = response);
  }
  utils.inherits(AxiosError, Error, {
    toJSON: function toJSON() {
      return {
        // Standard
        message: this.message,
        name: this.name,
        // Microsoft
        description: this.description,
        number: this.number,
        // Mozilla
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        // Axios
        config: this.config,
        code: this.code,
        status: this.response && this.response.status ? this.response.status : null
      };
    }
  });
  var prototype = AxiosError.prototype;
  var descriptors = {};
  ['ERR_BAD_OPTION_VALUE', 'ERR_BAD_OPTION', 'ECONNABORTED', 'ETIMEDOUT', 'ERR_NETWORK', 'ERR_FR_TOO_MANY_REDIRECTS', 'ERR_DEPRECATED', 'ERR_BAD_RESPONSE', 'ERR_BAD_REQUEST', 'ERR_CANCELED'
  // eslint-disable-next-line func-names
  ].forEach(function (code) {
    descriptors[code] = {
      value: code
    };
  });
  Object.defineProperties(AxiosError, descriptors);
  Object.defineProperty(prototype, 'isAxiosError', {
    value: true
  });

  // eslint-disable-next-line func-names
  AxiosError.from = function (error, code, config, request, response, customProps) {
    var axiosError = Object.create(prototype);
    utils.toFlatObject(error, axiosError, function filter(obj) {
      return obj !== Error.prototype;
    });
    AxiosError.call(axiosError, error.message, code, config, request, response);
    axiosError.name = error.name;
    customProps && Object.assign(axiosError, customProps);
    return axiosError;
  };
  AxiosError_1 = AxiosError;
  return AxiosError_1;
}

var transitional;
var hasRequiredTransitional;
function requireTransitional() {
  if (hasRequiredTransitional) return transitional;
  hasRequiredTransitional = 1;
  transitional = {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
  };
  return transitional;
}

var toFormData_1;
var hasRequiredToFormData;
function requireToFormData() {
  if (hasRequiredToFormData) return toFormData_1;
  hasRequiredToFormData = 1;
  var utils = requireUtils();

  /**
   * Convert a data object to FormData
   * @param {Object} obj
   * @param {?Object} [formData]
   * @returns {Object}
   **/

  function toFormData(obj, formData) {
    // eslint-disable-next-line no-param-reassign
    formData = formData || new FormData();
    var stack = [];
    function convertValue(value) {
      if (value === null) return '';
      if (utils.isDate(value)) {
        return value.toISOString();
      }
      if (utils.isArrayBuffer(value) || utils.isTypedArray(value)) {
        return typeof Blob === 'function' ? new Blob([value]) : Buffer.from(value);
      }
      return value;
    }
    function build(data, parentKey) {
      if (utils.isPlainObject(data) || utils.isArray(data)) {
        if (stack.indexOf(data) !== -1) {
          throw Error('Circular reference detected in ' + parentKey);
        }
        stack.push(data);
        utils.forEach(data, function each(value, key) {
          if (utils.isUndefined(value)) return;
          var fullKey = parentKey ? parentKey + '.' + key : key;
          var arr;
          if (value && !parentKey && _typeof(value) === 'object') {
            if (utils.endsWith(key, '{}')) {
              // eslint-disable-next-line no-param-reassign
              value = JSON.stringify(value);
            } else if (utils.endsWith(key, '[]') && (arr = utils.toArray(value))) {
              // eslint-disable-next-line func-names
              arr.forEach(function (el) {
                !utils.isUndefined(el) && formData.append(fullKey, convertValue(el));
              });
              return;
            }
          }
          build(value, fullKey);
        });
        stack.pop();
      } else {
        formData.append(parentKey, convertValue(data));
      }
    }
    build(obj);
    return formData;
  }
  toFormData_1 = toFormData;
  return toFormData_1;
}

var settle;
var hasRequiredSettle;
function requireSettle() {
  if (hasRequiredSettle) return settle;
  hasRequiredSettle = 1;
  var AxiosError = requireAxiosError();

  /**
   * Resolve or reject a Promise based on response status.
   *
   * @param {Function} resolve A function that resolves the promise.
   * @param {Function} reject A function that rejects the promise.
   * @param {object} response The response.
   */
  settle = function settle(resolve, reject, response) {
    var validateStatus = response.config.validateStatus;
    if (!response.status || !validateStatus || validateStatus(response.status)) {
      resolve(response);
    } else {
      reject(new AxiosError('Request failed with status code ' + response.status, [AxiosError.ERR_BAD_REQUEST, AxiosError.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4], response.config, response.request, response));
    }
  };
  return settle;
}

var cookies;
var hasRequiredCookies;
function requireCookies() {
  if (hasRequiredCookies) return cookies;
  hasRequiredCookies = 1;
  var utils = requireUtils();
  cookies = utils.isStandardBrowserEnv() ?
  // Standard browser envs support document.cookie
  function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));
        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }
        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }
        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }
        if (secure === true) {
          cookie.push('secure');
        }
        document.cookie = cookie.join('; ');
      },
      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return match ? decodeURIComponent(match[3]) : null;
      },
      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  }() :
  // Non standard browser env (web workers, react-native) lack needed support.
  function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() {
        return null;
      },
      remove: function remove() {}
    };
  }();
  return cookies;
}

var isAbsoluteURL;
var hasRequiredIsAbsoluteURL;
function requireIsAbsoluteURL() {
  if (hasRequiredIsAbsoluteURL) return isAbsoluteURL;
  hasRequiredIsAbsoluteURL = 1;

  /**
   * Determines whether the specified URL is absolute
   *
   * @param {string} url The URL to test
   * @returns {boolean} True if the specified URL is absolute, otherwise false
   */
  isAbsoluteURL = function isAbsoluteURL(url) {
    // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
    // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
    // by any combination of letters, digits, plus, period, or hyphen.
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
  };
  return isAbsoluteURL;
}

var combineURLs;
var hasRequiredCombineURLs;
function requireCombineURLs() {
  if (hasRequiredCombineURLs) return combineURLs;
  hasRequiredCombineURLs = 1;

  /**
   * Creates a new URL by combining the specified URLs
   *
   * @param {string} baseURL The base URL
   * @param {string} relativeURL The relative URL
   * @returns {string} The combined URL
   */
  combineURLs = function combineURLs(baseURL, relativeURL) {
    return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
  };
  return combineURLs;
}

var buildFullPath;
var hasRequiredBuildFullPath;
function requireBuildFullPath() {
  if (hasRequiredBuildFullPath) return buildFullPath;
  hasRequiredBuildFullPath = 1;
  var isAbsoluteURL = requireIsAbsoluteURL();
  var combineURLs = requireCombineURLs();

  /**
   * Creates a new URL by combining the baseURL with the requestedURL,
   * only when the requestedURL is not already an absolute URL.
   * If the requestURL is absolute, this function returns the requestedURL untouched.
   *
   * @param {string} baseURL The base URL
   * @param {string} requestedURL Absolute or relative URL to combine
   * @returns {string} The combined full path
   */
  buildFullPath = function buildFullPath(baseURL, requestedURL) {
    if (baseURL && !isAbsoluteURL(requestedURL)) {
      return combineURLs(baseURL, requestedURL);
    }
    return requestedURL;
  };
  return buildFullPath;
}

var parseHeaders;
var hasRequiredParseHeaders;
function requireParseHeaders() {
  if (hasRequiredParseHeaders) return parseHeaders;
  hasRequiredParseHeaders = 1;
  var utils = requireUtils();

  // Headers whose duplicates are ignored by node
  // c.f. https://nodejs.org/api/http.html#http_message_headers
  var ignoreDuplicateOf = ['age', 'authorization', 'content-length', 'content-type', 'etag', 'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since', 'last-modified', 'location', 'max-forwards', 'proxy-authorization', 'referer', 'retry-after', 'user-agent'];

  /**
   * Parse headers into an object
   *
   * ```
   * Date: Wed, 27 Aug 2014 08:58:49 GMT
   * Content-Type: application/json
   * Connection: keep-alive
   * Transfer-Encoding: chunked
   * ```
   *
   * @param {String} headers Headers needing to be parsed
   * @returns {Object} Headers parsed into an object
   */
  parseHeaders = function parseHeaders(headers) {
    var parsed = {};
    var key;
    var val;
    var i;
    if (!headers) {
      return parsed;
    }
    utils.forEach(headers.split('\n'), function parser(line) {
      i = line.indexOf(':');
      key = utils.trim(line.substr(0, i)).toLowerCase();
      val = utils.trim(line.substr(i + 1));
      if (key) {
        if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
          return;
        }
        if (key === 'set-cookie') {
          parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
        } else {
          parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
        }
      }
    });
    return parsed;
  };
  return parseHeaders;
}

var isURLSameOrigin;
var hasRequiredIsURLSameOrigin;
function requireIsURLSameOrigin() {
  if (hasRequiredIsURLSameOrigin) return isURLSameOrigin;
  hasRequiredIsURLSameOrigin = 1;
  var utils = requireUtils();
  isURLSameOrigin = utils.isStandardBrowserEnv() ?
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;
      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }
      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
      };
    }
    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
      return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
    };
  }() :
  // Non standard browser envs (web workers, react-native) lack needed support.
  function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  }();
  return isURLSameOrigin;
}

var CanceledError_1;
var hasRequiredCanceledError;
function requireCanceledError() {
  if (hasRequiredCanceledError) return CanceledError_1;
  hasRequiredCanceledError = 1;
  var AxiosError = requireAxiosError();
  var utils = requireUtils();

  /**
   * A `CanceledError` is an object that is thrown when an operation is canceled.
   *
   * @class
   * @param {string=} message The message.
   */
  function CanceledError(message) {
    // eslint-disable-next-line no-eq-null,eqeqeq
    AxiosError.call(this, message == null ? 'canceled' : message, AxiosError.ERR_CANCELED);
    this.name = 'CanceledError';
  }
  utils.inherits(CanceledError, AxiosError, {
    __CANCEL__: true
  });
  CanceledError_1 = CanceledError;
  return CanceledError_1;
}

var parseProtocol;
var hasRequiredParseProtocol;
function requireParseProtocol() {
  if (hasRequiredParseProtocol) return parseProtocol;
  hasRequiredParseProtocol = 1;
  parseProtocol = function parseProtocol(url) {
    var match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
    return match && match[1] || '';
  };
  return parseProtocol;
}

var xhr;
var hasRequiredXhr;
function requireXhr() {
  if (hasRequiredXhr) return xhr;
  hasRequiredXhr = 1;
  var utils = requireUtils();
  var settle = requireSettle();
  var cookies = requireCookies();
  var buildURL = requireBuildURL();
  var buildFullPath = requireBuildFullPath();
  var parseHeaders = requireParseHeaders();
  var isURLSameOrigin = requireIsURLSameOrigin();
  var transitionalDefaults = requireTransitional();
  var AxiosError = requireAxiosError();
  var CanceledError = requireCanceledError();
  var parseProtocol = requireParseProtocol();
  xhr = function xhrAdapter(config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
      var requestData = config.data;
      var requestHeaders = config.headers;
      var responseType = config.responseType;
      var onCanceled;
      function done() {
        if (config.cancelToken) {
          config.cancelToken.unsubscribe(onCanceled);
        }
        if (config.signal) {
          config.signal.removeEventListener('abort', onCanceled);
        }
      }
      if (utils.isFormData(requestData) && utils.isStandardBrowserEnv()) {
        delete requestHeaders['Content-Type']; // Let the browser set it
      }
      var request = new XMLHttpRequest();

      // HTTP basic authentication
      if (config.auth) {
        var username = config.auth.username || '';
        var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
        requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
      }
      var fullPath = buildFullPath(config.baseURL, config.url);
      request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

      // Set the request timeout in MS
      request.timeout = config.timeout;
      function onloadend() {
        if (!request) {
          return;
        }
        // Prepare the response
        var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
        var responseData = !responseType || responseType === 'text' || responseType === 'json' ? request.responseText : request.response;
        var response = {
          data: responseData,
          status: request.status,
          statusText: request.statusText,
          headers: responseHeaders,
          config: config,
          request: request
        };
        settle(function _resolve(value) {
          resolve(value);
          done();
        }, function _reject(err) {
          reject(err);
          done();
        }, response);

        // Clean up request
        request = null;
      }
      if ('onloadend' in request) {
        // Use onloadend if available
        request.onloadend = onloadend;
      } else {
        // Listen for ready state to emulate onloadend
        request.onreadystatechange = function handleLoad() {
          if (!request || request.readyState !== 4) {
            return;
          }

          // The request errored out and we didn't get a response, this will be
          // handled by onerror instead
          // With one exception: request that using file: protocol, most browsers
          // will return status as 0 even though it's a successful request
          if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
            return;
          }
          // readystate handler is calling before onerror or ontimeout handlers,
          // so we should call onloadend on the next 'tick'
          setTimeout(onloadend);
        };
      }

      // Handle browser request cancellation (as opposed to a manual cancellation)
      request.onabort = function handleAbort() {
        if (!request) {
          return;
        }
        reject(new AxiosError('Request aborted', AxiosError.ECONNABORTED, config, request));

        // Clean up request
        request = null;
      };

      // Handle low level network errors
      request.onerror = function handleError() {
        // Real errors are hidden from us by the browser
        // onerror should only fire if it's a network error
        reject(new AxiosError('Network Error', AxiosError.ERR_NETWORK, config, request, request));

        // Clean up request
        request = null;
      };

      // Handle timeout
      request.ontimeout = function handleTimeout() {
        var timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
        var transitional = config.transitional || transitionalDefaults;
        if (config.timeoutErrorMessage) {
          timeoutErrorMessage = config.timeoutErrorMessage;
        }
        reject(new AxiosError(timeoutErrorMessage, transitional.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED, config, request));

        // Clean up request
        request = null;
      };

      // Add xsrf header
      // This is only done if running in a standard browser environment.
      // Specifically not if we're in a web worker, or react-native.
      if (utils.isStandardBrowserEnv()) {
        // Add xsrf header
        var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : undefined;
        if (xsrfValue) {
          requestHeaders[config.xsrfHeaderName] = xsrfValue;
        }
      }

      // Add headers to the request
      if ('setRequestHeader' in request) {
        utils.forEach(requestHeaders, function setRequestHeader(val, key) {
          if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
            // Remove Content-Type if data is undefined
            delete requestHeaders[key];
          } else {
            // Otherwise add header to the request
            request.setRequestHeader(key, val);
          }
        });
      }

      // Add withCredentials to request if needed
      if (!utils.isUndefined(config.withCredentials)) {
        request.withCredentials = !!config.withCredentials;
      }

      // Add responseType to request if needed
      if (responseType && responseType !== 'json') {
        request.responseType = config.responseType;
      }

      // Handle progress if needed
      if (typeof config.onDownloadProgress === 'function') {
        request.addEventListener('progress', config.onDownloadProgress);
      }

      // Not all browsers support upload events
      if (typeof config.onUploadProgress === 'function' && request.upload) {
        request.upload.addEventListener('progress', config.onUploadProgress);
      }
      if (config.cancelToken || config.signal) {
        // Handle cancellation
        // eslint-disable-next-line func-names
        onCanceled = function onCanceled(cancel) {
          if (!request) {
            return;
          }
          reject(!cancel || cancel && cancel.type ? new CanceledError() : cancel);
          request.abort();
          request = null;
        };
        config.cancelToken && config.cancelToken.subscribe(onCanceled);
        if (config.signal) {
          config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
        }
      }
      if (!requestData) {
        requestData = null;
      }
      var protocol = parseProtocol(fullPath);
      if (protocol && ['http', 'https', 'file'].indexOf(protocol) === -1) {
        reject(new AxiosError('Unsupported protocol ' + protocol + ':', AxiosError.ERR_BAD_REQUEST, config));
        return;
      }

      // Send the request
      request.send(requestData);
    });
  };
  return xhr;
}

var followRedirects = {exports: {}};

var src = {exports: {}};

var browser = {exports: {}};

var ms;
var hasRequiredMs;
function requireMs() {
  if (hasRequiredMs) return ms;
  hasRequiredMs = 1;
  var s = 1000;
  var m = s * 60;
  var h = m * 60;
  var d = h * 24;
  var w = d * 7;
  var y = d * 365.25;

  /**
   * Parse or format the given `val`.
   *
   * Options:
   *
   *  - `long` verbose formatting [false]
   *
   * @param {String|Number} val
   * @param {Object} [options]
   * @throws {Error} throw an error if val is not a non-empty string or a number
   * @return {String|Number}
   * @api public
   */

  ms = function ms(val, options) {
    options = options || {};
    var type = _typeof(val);
    if (type === 'string' && val.length > 0) {
      return parse(val);
    } else if (type === 'number' && isFinite(val)) {
      return options["long"] ? fmtLong(val) : fmtShort(val);
    }
    throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
  };

  /**
   * Parse the given `str` and return milliseconds.
   *
   * @param {String} str
   * @return {Number}
   * @api private
   */

  function parse(str) {
    str = String(str);
    if (str.length > 100) {
      return;
    }
    var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);
    if (!match) {
      return;
    }
    var n = parseFloat(match[1]);
    var type = (match[2] || 'ms').toLowerCase();
    switch (type) {
      case 'years':
      case 'year':
      case 'yrs':
      case 'yr':
      case 'y':
        return n * y;
      case 'weeks':
      case 'week':
      case 'w':
        return n * w;
      case 'days':
      case 'day':
      case 'd':
        return n * d;
      case 'hours':
      case 'hour':
      case 'hrs':
      case 'hr':
      case 'h':
        return n * h;
      case 'minutes':
      case 'minute':
      case 'mins':
      case 'min':
      case 'm':
        return n * m;
      case 'seconds':
      case 'second':
      case 'secs':
      case 'sec':
      case 's':
        return n * s;
      case 'milliseconds':
      case 'millisecond':
      case 'msecs':
      case 'msec':
      case 'ms':
        return n;
      default:
        return undefined;
    }
  }

  /**
   * Short format for `ms`.
   *
   * @param {Number} ms
   * @return {String}
   * @api private
   */

  function fmtShort(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) {
      return Math.round(ms / d) + 'd';
    }
    if (msAbs >= h) {
      return Math.round(ms / h) + 'h';
    }
    if (msAbs >= m) {
      return Math.round(ms / m) + 'm';
    }
    if (msAbs >= s) {
      return Math.round(ms / s) + 's';
    }
    return ms + 'ms';
  }

  /**
   * Long format for `ms`.
   *
   * @param {Number} ms
   * @return {String}
   * @api private
   */

  function fmtLong(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) {
      return plural(ms, msAbs, d, 'day');
    }
    if (msAbs >= h) {
      return plural(ms, msAbs, h, 'hour');
    }
    if (msAbs >= m) {
      return plural(ms, msAbs, m, 'minute');
    }
    if (msAbs >= s) {
      return plural(ms, msAbs, s, 'second');
    }
    return ms + ' ms';
  }

  /**
   * Pluralization helper.
   */

  function plural(ms, msAbs, n, name) {
    var isPlural = msAbs >= n * 1.5;
    return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
  }
  return ms;
}

var common;
var hasRequiredCommon;
function requireCommon() {
  if (hasRequiredCommon) return common;
  hasRequiredCommon = 1;
  /**
   * This is the common logic for both the Node.js and web browser
   * implementations of `debug()`.
   */

  function setup(env) {
    createDebug.debug = createDebug;
    createDebug["default"] = createDebug;
    createDebug.coerce = coerce;
    createDebug.disable = disable;
    createDebug.enable = enable;
    createDebug.enabled = enabled;
    createDebug.humanize = requireMs();
    createDebug.destroy = destroy;
    Object.keys(env).forEach(function (key) {
      createDebug[key] = env[key];
    });

    /**
    * The currently active debug mode names, and names to skip.
    */

    createDebug.names = [];
    createDebug.skips = [];

    /**
    * Map of special "%n" handling functions, for the debug "format" argument.
    *
    * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
    */
    createDebug.formatters = {};

    /**
    * Selects a color for a debug namespace
    * @param {String} namespace The namespace string for the debug instance to be colored
    * @return {Number|String} An ANSI color code for the given namespace
    * @api private
    */
    function selectColor(namespace) {
      var hash = 0;
      for (var i = 0; i < namespace.length; i++) {
        hash = (hash << 5) - hash + namespace.charCodeAt(i);
        hash |= 0; // Convert to 32bit integer
      }
      return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
    }
    createDebug.selectColor = selectColor;

    /**
    * Create a debugger with the given `namespace`.
    *
    * @param {String} namespace
    * @return {Function}
    * @api public
    */
    function createDebug(namespace) {
      var prevTime;
      var enableOverride = null;
      var namespacesCache;
      var enabledCache;
      function debug() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        // Disabled?
        if (!debug.enabled) {
          return;
        }
        var self = debug;

        // Set `diff` timestamp
        var curr = Number(new Date());
        var ms = curr - (prevTime || curr);
        self.diff = ms;
        self.prev = prevTime;
        self.curr = curr;
        prevTime = curr;
        args[0] = createDebug.coerce(args[0]);
        if (typeof args[0] !== 'string') {
          // Anything else let's inspect with %O
          args.unshift('%O');
        }

        // Apply any `formatters` transformations
        var index = 0;
        args[0] = args[0].replace(/%([a-zA-Z%])/g, function (match, format) {
          // If we encounter an escaped % then don't increase the array index
          if (match === '%%') {
            return '%';
          }
          index++;
          var formatter = createDebug.formatters[format];
          if (typeof formatter === 'function') {
            var val = args[index];
            match = formatter.call(self, val);

            // Now we need to remove `args[index]` since it's inlined in the `format`
            args.splice(index, 1);
            index--;
          }
          return match;
        });

        // Apply env-specific formatting (colors, etc.)
        createDebug.formatArgs.call(self, args);
        var logFn = self.log || createDebug.log;
        logFn.apply(self, args);
      }
      debug.namespace = namespace;
      debug.useColors = createDebug.useColors();
      debug.color = createDebug.selectColor(namespace);
      debug.extend = extend;
      debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.

      Object.defineProperty(debug, 'enabled', {
        enumerable: true,
        configurable: false,
        get: function get() {
          if (enableOverride !== null) {
            return enableOverride;
          }
          if (namespacesCache !== createDebug.namespaces) {
            namespacesCache = createDebug.namespaces;
            enabledCache = createDebug.enabled(namespace);
          }
          return enabledCache;
        },
        set: function set(v) {
          enableOverride = v;
        }
      });

      // Env-specific initialization logic for debug instances
      if (typeof createDebug.init === 'function') {
        createDebug.init(debug);
      }
      return debug;
    }
    function extend(namespace, delimiter) {
      var newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
      newDebug.log = this.log;
      return newDebug;
    }

    /**
    * Enables a debug mode by namespaces. This can include modes
    * separated by a colon and wildcards.
    *
    * @param {String} namespaces
    * @api public
    */
    function enable(namespaces) {
      createDebug.save(namespaces);
      createDebug.namespaces = namespaces;
      createDebug.names = [];
      createDebug.skips = [];
      var i;
      var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
      var len = split.length;
      for (i = 0; i < len; i++) {
        if (!split[i]) {
          // ignore empty strings
          continue;
        }
        namespaces = split[i].replace(/\*/g, '.*?');
        if (namespaces[0] === '-') {
          createDebug.skips.push(new RegExp('^' + namespaces.slice(1) + '$'));
        } else {
          createDebug.names.push(new RegExp('^' + namespaces + '$'));
        }
      }
    }

    /**
    * Disable debug output.
    *
    * @return {String} namespaces
    * @api public
    */
    function disable() {
      var namespaces = [].concat(_toConsumableArray(createDebug.names.map(toNamespace)), _toConsumableArray(createDebug.skips.map(toNamespace).map(function (namespace) {
        return '-' + namespace;
      }))).join(',');
      createDebug.enable('');
      return namespaces;
    }

    /**
    * Returns true if the given mode name is enabled, false otherwise.
    *
    * @param {String} name
    * @return {Boolean}
    * @api public
    */
    function enabled(name) {
      if (name[name.length - 1] === '*') {
        return true;
      }
      var i;
      var len;
      for (i = 0, len = createDebug.skips.length; i < len; i++) {
        if (createDebug.skips[i].test(name)) {
          return false;
        }
      }
      for (i = 0, len = createDebug.names.length; i < len; i++) {
        if (createDebug.names[i].test(name)) {
          return true;
        }
      }
      return false;
    }

    /**
    * Convert regexp to namespace
    *
    * @param {RegExp} regxep
    * @return {String} namespace
    * @api private
    */
    function toNamespace(regexp) {
      return regexp.toString().substring(2, regexp.toString().length - 2).replace(/\.\*\?$/, '*');
    }

    /**
    * Coerce `val`.
    *
    * @param {Mixed} val
    * @return {Mixed}
    * @api private
    */
    function coerce(val) {
      if (val instanceof Error) {
        return val.stack || val.message;
      }
      return val;
    }

    /**
    * XXX DO NOT USE. This is a temporary stub function.
    * XXX It WILL be removed in the next major release.
    */
    function destroy() {
      console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
    }
    createDebug.enable(createDebug.load());
    return createDebug;
  }
  common = setup;
  return common;
}

/* eslint-env browser */
var hasRequiredBrowser;
function requireBrowser() {
  if (hasRequiredBrowser) return browser.exports;
  hasRequiredBrowser = 1;
  (function (module, exports) {
    /**
     * This is the web browser implementation of `debug()`.
     */

    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load;
    exports.useColors = useColors;
    exports.storage = localstorage();
    exports.destroy = function () {
      var warned = false;
      return function () {
        if (!warned) {
          warned = true;
          console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
        }
      };
    }();

    /**
     * Colors.
     */

    exports.colors = ['#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC', '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF', '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC', '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF', '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC', '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033', '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366', '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933', '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC', '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF', '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'];

    /**
     * Currently only WebKit-based Web Inspectors, Firefox >= v31,
     * and the Firebug extension (any Firefox version) are known
     * to support "%c" CSS customizations.
     *
     * TODO: add a `localStorage` variable to explicitly enable/disable colors
     */

    // eslint-disable-next-line complexity
    function useColors() {
      // NB: In an Electron preload script, document will be defined but not fully
      // initialized. Since we know we're in Chrome, we'll just detect this case
      // explicitly
      if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
        return true;
      }

      // Internet Explorer and Edge do not support colors.
      if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
        return false;
      }
      var m;

      // Is webkit? http://stackoverflow.com/a/16459606/376773
      // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
      return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance ||
      // Is firebug? http://stackoverflow.com/a/398120/376773
      typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) ||
      // Is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator !== 'undefined' && navigator.userAgent && (m = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(m[1], 10) >= 31 ||
      // Double check webkit in userAgent just in case we are in a worker
      typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }

    /**
     * Colorize log arguments if enabled.
     *
     * @api public
     */

    function formatArgs(args) {
      args[0] = (this.useColors ? '%c' : '') + this.namespace + (this.useColors ? ' %c' : ' ') + args[0] + (this.useColors ? '%c ' : ' ') + '+' + module.exports.humanize(this.diff);
      if (!this.useColors) {
        return;
      }
      var c = 'color: ' + this.color;
      args.splice(1, 0, c, 'color: inherit');

      // The final "%c" is somewhat tricky, because there could be other
      // arguments passed either before or after the %c, so we need to
      // figure out the correct index to insert the CSS into
      var index = 0;
      var lastC = 0;
      args[0].replace(/%[a-zA-Z%]/g, function (match) {
        if (match === '%%') {
          return;
        }
        index++;
        if (match === '%c') {
          // We only are interested in the *last* %c
          // (the user may have provided their own)
          lastC = index;
        }
      });
      args.splice(lastC, 0, c);
    }

    /**
     * Invokes `console.debug()` when available.
     * No-op when `console.debug` is not a "function".
     * If `console.debug` is not available, falls back
     * to `console.log`.
     *
     * @api public
     */
    exports.log = console.debug || console.log || function () {};

    /**
     * Save `namespaces`.
     *
     * @param {String} namespaces
     * @api private
     */
    function save(namespaces) {
      try {
        if (namespaces) {
          exports.storage.setItem('debug', namespaces);
        } else {
          exports.storage.removeItem('debug');
        }
      } catch (error) {
        // Swallow
        // XXX (@Qix-) should we be logging these?
      }
    }

    /**
     * Load `namespaces`.
     *
     * @return {String} returns the previously persisted debug modes
     * @api private
     */
    function load() {
      var r;
      try {
        r = exports.storage.getItem('debug');
      } catch (error) {
        // Swallow
        // XXX (@Qix-) should we be logging these?
      }

      // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
      if (!r && typeof process !== 'undefined' && 'env' in process) {
        r = process.env.DEBUG;
      }
      return r;
    }

    /**
     * Localstorage attempts to return the localstorage.
     *
     * This is necessary because safari throws
     * when a user disables cookies/localstorage
     * and you attempt to access it.
     *
     * @return {LocalStorage}
     * @api private
     */

    function localstorage() {
      try {
        // TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
        // The Browser also has localStorage in the global context.
        return localStorage;
      } catch (error) {
        // Swallow
        // XXX (@Qix-) should we be logging these?
      }
    }
    module.exports = requireCommon()(exports);
    var formatters = module.exports.formatters;

    /**
     * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
     */

    formatters.j = function (v) {
      try {
        return JSON.stringify(v);
      } catch (error) {
        return '[UnexpectedJSONParseError]: ' + error.message;
      }
    };
  })(browser, browser.exports);
  return browser.exports;
}

var node = {exports: {}};

var hasFlag;
var hasRequiredHasFlag;
function requireHasFlag() {
  if (hasRequiredHasFlag) return hasFlag;
  hasRequiredHasFlag = 1;
  hasFlag = function hasFlag(flag, argv) {
    argv = argv || process.argv;
    var prefix = flag.startsWith('-') ? '' : flag.length === 1 ? '-' : '--';
    var pos = argv.indexOf(prefix + flag);
    var terminatorPos = argv.indexOf('--');
    return pos !== -1 && (terminatorPos === -1 ? true : pos < terminatorPos);
  };
  return hasFlag;
}

var supportsColor_1;
var hasRequiredSupportsColor;
function requireSupportsColor() {
  if (hasRequiredSupportsColor) return supportsColor_1;
  hasRequiredSupportsColor = 1;
  var os = require$$1;
  var hasFlag = requireHasFlag();
  var env = process.env;
  var forceColor;
  if (hasFlag('no-color') || hasFlag('no-colors') || hasFlag('color=false')) {
    forceColor = false;
  } else if (hasFlag('color') || hasFlag('colors') || hasFlag('color=true') || hasFlag('color=always')) {
    forceColor = true;
  }
  if ('FORCE_COLOR' in env) {
    forceColor = env.FORCE_COLOR.length === 0 || parseInt(env.FORCE_COLOR, 10) !== 0;
  }
  function translateLevel(level) {
    if (level === 0) {
      return false;
    }
    return {
      level: level,
      hasBasic: true,
      has256: level >= 2,
      has16m: level >= 3
    };
  }
  function supportsColor(stream) {
    if (forceColor === false) {
      return 0;
    }
    if (hasFlag('color=16m') || hasFlag('color=full') || hasFlag('color=truecolor')) {
      return 3;
    }
    if (hasFlag('color=256')) {
      return 2;
    }
    if (stream && !stream.isTTY && forceColor !== true) {
      return 0;
    }
    var min = forceColor ? 1 : 0;
    if (process.platform === 'win32') {
      // Node.js 7.5.0 is the first version of Node.js to include a patch to
      // libuv that enables 256 color output on Windows. Anything earlier and it
      // won't work. However, here we target Node.js 8 at minimum as it is an LTS
      // release, and Node.js 7 is not. Windows 10 build 10586 is the first Windows
      // release that supports 256 colors. Windows 10 build 14931 is the first release
      // that supports 16m/TrueColor.
      var osRelease = os.release().split('.');
      if (Number(process.versions.node.split('.')[0]) >= 8 && Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
        return Number(osRelease[2]) >= 14931 ? 3 : 2;
      }
      return 1;
    }
    if ('CI' in env) {
      if (['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI'].some(function (sign) {
        return sign in env;
      }) || env.CI_NAME === 'codeship') {
        return 1;
      }
      return min;
    }
    if ('TEAMCITY_VERSION' in env) {
      return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
    }
    if (env.COLORTERM === 'truecolor') {
      return 3;
    }
    if ('TERM_PROGRAM' in env) {
      var version = parseInt((env.TERM_PROGRAM_VERSION || '').split('.')[0], 10);
      switch (env.TERM_PROGRAM) {
        case 'iTerm.app':
          return version >= 3 ? 3 : 2;
        case 'Apple_Terminal':
          return 2;
        // No default
      }
    }
    if (/-256(color)?$/i.test(env.TERM)) {
      return 2;
    }
    if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
      return 1;
    }
    if ('COLORTERM' in env) {
      return 1;
    }
    if (env.TERM === 'dumb') {
      return min;
    }
    return min;
  }
  function getSupportLevel(stream) {
    var level = supportsColor(stream);
    return translateLevel(level);
  }
  supportsColor_1 = {
    supportsColor: getSupportLevel,
    stdout: getSupportLevel(process.stdout),
    stderr: getSupportLevel(process.stderr)
  };
  return supportsColor_1;
}

/**
 * Module dependencies.
 */
var hasRequiredNode;
function requireNode() {
  if (hasRequiredNode) return node.exports;
  hasRequiredNode = 1;
  (function (module, exports) {
    var tty = require$$0$3;
    var util = require$$1$1;

    /**
     * This is the Node.js implementation of `debug()`.
     */

    exports.init = init;
    exports.log = log;
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load;
    exports.useColors = useColors;
    exports.destroy = util.deprecate(function () {}, 'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');

    /**
     * Colors.
     */

    exports.colors = [6, 2, 3, 4, 5, 1];
    try {
      // Optional dependency (as in, doesn't need to be installed, NOT like optionalDependencies in package.json)
      // eslint-disable-next-line import/no-extraneous-dependencies
      var supportsColor = requireSupportsColor();
      if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
        exports.colors = [20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62, 63, 68, 69, 74, 75, 76, 77, 78, 79, 80, 81, 92, 93, 98, 99, 112, 113, 128, 129, 134, 135, 148, 149, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 178, 179, 184, 185, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 214, 215, 220, 221];
      }
    } catch (error) {
      // Swallow - we only care if `supports-color` is available; it doesn't have to be.
    }

    /**
     * Build up the default `inspectOpts` object from the environment variables.
     *
     *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
     */

    exports.inspectOpts = Object.keys(process.env).filter(function (key) {
      return /^debug_/i.test(key);
    }).reduce(function (obj, key) {
      // Camel-case
      var prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, function (_, k) {
        return k.toUpperCase();
      });

      // Coerce string value into JS value
      var val = process.env[key];
      if (/^(yes|on|true|enabled)$/i.test(val)) {
        val = true;
      } else if (/^(no|off|false|disabled)$/i.test(val)) {
        val = false;
      } else if (val === 'null') {
        val = null;
      } else {
        val = Number(val);
      }
      obj[prop] = val;
      return obj;
    }, {});

    /**
     * Is stdout a TTY? Colored output is enabled when `true`.
     */

    function useColors() {
      return 'colors' in exports.inspectOpts ? Boolean(exports.inspectOpts.colors) : tty.isatty(process.stderr.fd);
    }

    /**
     * Adds ANSI color escape codes if enabled.
     *
     * @api public
     */

    function formatArgs(args) {
      var name = this.namespace,
        useColors = this.useColors;
      if (useColors) {
        var c = this.color;
        var colorCode = "\x1B[3" + (c < 8 ? c : '8;5;' + c);
        var prefix = "  ".concat(colorCode, ";1m").concat(name, " \x1B[0m");
        args[0] = prefix + args[0].split('\n').join('\n' + prefix);
        args.push(colorCode + 'm+' + module.exports.humanize(this.diff) + "\x1B[0m");
      } else {
        args[0] = getDate() + name + ' ' + args[0];
      }
    }
    function getDate() {
      if (exports.inspectOpts.hideDate) {
        return '';
      }
      return new Date().toISOString() + ' ';
    }

    /**
     * Invokes `util.formatWithOptions()` with the specified arguments and writes to stderr.
     */

    function log() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return process.stderr.write(util.formatWithOptions.apply(util, [exports.inspectOpts].concat(args)) + '\n');
    }

    /**
     * Save `namespaces`.
     *
     * @param {String} namespaces
     * @api private
     */
    function save(namespaces) {
      if (namespaces) {
        process.env.DEBUG = namespaces;
      } else {
        // If you set a process.env field to null or undefined, it gets cast to the
        // string 'null' or 'undefined'. Just delete instead.
        delete process.env.DEBUG;
      }
    }

    /**
     * Load `namespaces`.
     *
     * @return {String} returns the previously persisted debug modes
     * @api private
     */

    function load() {
      return process.env.DEBUG;
    }

    /**
     * Init logic for `debug` instances.
     *
     * Create a new `inspectOpts` object in case `useColors` is set
     * differently for a particular `debug` instance.
     */

    function init(debug) {
      debug.inspectOpts = {};
      var keys = Object.keys(exports.inspectOpts);
      for (var i = 0; i < keys.length; i++) {
        debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
      }
    }
    module.exports = requireCommon()(exports);
    var formatters = module.exports.formatters;

    /**
     * Map %o to `util.inspect()`, all on a single line.
     */

    formatters.o = function (v) {
      this.inspectOpts.colors = this.useColors;
      return util.inspect(v, this.inspectOpts).split('\n').map(function (str) {
        return str.trim();
      }).join(' ');
    };

    /**
     * Map %O to `util.inspect()`, allowing multiple lines if needed.
     */

    formatters.O = function (v) {
      this.inspectOpts.colors = this.useColors;
      return util.inspect(v, this.inspectOpts);
    };
  })(node, node.exports);
  return node.exports;
}

/**
 * Detect Electron renderer / nwjs process, which is node, but we should
 * treat as a browser.
 */
var hasRequiredSrc;
function requireSrc() {
  if (hasRequiredSrc) return src.exports;
  hasRequiredSrc = 1;
  if (typeof process === 'undefined' || process.type === 'renderer' || process.browser === true || process.__nwjs) {
    src.exports = requireBrowser();
  } else {
    src.exports = requireNode();
  }
  return src.exports;
}

var debug_1;
var hasRequiredDebug;
function requireDebug() {
  if (hasRequiredDebug) return debug_1;
  hasRequiredDebug = 1;
  var debug;
  debug_1 = function debug_1() {
    if (!debug) {
      try {
        /* eslint global-require: off */
        debug = requireSrc()("follow-redirects");
      } catch (error) {/* */}
      if (typeof debug !== "function") {
        debug = function debug() {/* */};
      }
    }
    debug.apply(null, arguments);
  };
  return debug_1;
}

var hasRequiredFollowRedirects;
function requireFollowRedirects() {
  if (hasRequiredFollowRedirects) return followRedirects.exports;
  hasRequiredFollowRedirects = 1;
  var url = require$$0$4;
  var URL = url.URL;
  var http = require$$1$2;
  var https = require$$2;
  var Writable = require$$3$2.Writable;
  var assert = require$$4;
  var debug = requireDebug();

  // Preventive platform detection
  // istanbul ignore next
  (function detectUnsupportedEnvironment() {
    var looksLikeNode = typeof process !== "undefined";
    var looksLikeBrowser = typeof window !== "undefined" && typeof document !== "undefined";
    var looksLikeV8 = isFunction(Error.captureStackTrace);
    if (!looksLikeNode && (looksLikeBrowser || !looksLikeV8)) {
      console.warn("The follow-redirects package should be excluded from browser builds.");
    }
  })();

  // Whether to use the native URL object or the legacy url module
  var useNativeURL = false;
  try {
    assert(new URL(""));
  } catch (error) {
    useNativeURL = error.code === "ERR_INVALID_URL";
  }

  // URL fields to preserve in copy operations
  var preservedUrlFields = ["auth", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "hash"];

  // Create handlers that pass events from native requests
  var events = ["abort", "aborted", "connect", "error", "socket", "timeout"];
  var eventHandlers = Object.create(null);
  events.forEach(function (event) {
    eventHandlers[event] = function (arg1, arg2, arg3) {
      this._redirectable.emit(event, arg1, arg2, arg3);
    };
  });

  // Error types with codes
  var InvalidUrlError = createErrorType("ERR_INVALID_URL", "Invalid URL", TypeError);
  var RedirectionError = createErrorType("ERR_FR_REDIRECTION_FAILURE", "Redirected request failed");
  var TooManyRedirectsError = createErrorType("ERR_FR_TOO_MANY_REDIRECTS", "Maximum number of redirects exceeded", RedirectionError);
  var MaxBodyLengthExceededError = createErrorType("ERR_FR_MAX_BODY_LENGTH_EXCEEDED", "Request body larger than maxBodyLength limit");
  var WriteAfterEndError = createErrorType("ERR_STREAM_WRITE_AFTER_END", "write after end");

  // istanbul ignore next
  var destroy = Writable.prototype.destroy || noop;

  // An HTTP(S) request that can be redirected
  function RedirectableRequest(options, responseCallback) {
    // Initialize the request
    Writable.call(this);
    this._sanitizeOptions(options);
    this._options = options;
    this._ended = false;
    this._ending = false;
    this._redirectCount = 0;
    this._redirects = [];
    this._requestBodyLength = 0;
    this._requestBodyBuffers = [];

    // Attach a callback if passed
    if (responseCallback) {
      this.on("response", responseCallback);
    }

    // React to responses of native requests
    var self = this;
    this._onNativeResponse = function (response) {
      try {
        self._processResponse(response);
      } catch (cause) {
        self.emit("error", cause instanceof RedirectionError ? cause : new RedirectionError({
          cause: cause
        }));
      }
    };

    // Perform the first request
    this._performRequest();
  }
  RedirectableRequest.prototype = Object.create(Writable.prototype);
  RedirectableRequest.prototype.abort = function () {
    destroyRequest(this._currentRequest);
    this._currentRequest.abort();
    this.emit("abort");
  };
  RedirectableRequest.prototype.destroy = function (error) {
    destroyRequest(this._currentRequest, error);
    destroy.call(this, error);
    return this;
  };

  // Writes buffered data to the current native request
  RedirectableRequest.prototype.write = function (data, encoding, callback) {
    // Writing is not allowed if end has been called
    if (this._ending) {
      throw new WriteAfterEndError();
    }

    // Validate input and shift parameters if necessary
    if (!isString(data) && !isBuffer(data)) {
      throw new TypeError("data should be a string, Buffer or Uint8Array");
    }
    if (isFunction(encoding)) {
      callback = encoding;
      encoding = null;
    }

    // Ignore empty buffers, since writing them doesn't invoke the callback
    // https://github.com/nodejs/node/issues/22066
    if (data.length === 0) {
      if (callback) {
        callback();
      }
      return;
    }
    // Only write when we don't exceed the maximum body length
    if (this._requestBodyLength + data.length <= this._options.maxBodyLength) {
      this._requestBodyLength += data.length;
      this._requestBodyBuffers.push({
        data: data,
        encoding: encoding
      });
      this._currentRequest.write(data, encoding, callback);
    }
    // Error when we exceed the maximum body length
    else {
      this.emit("error", new MaxBodyLengthExceededError());
      this.abort();
    }
  };

  // Ends the current native request
  RedirectableRequest.prototype.end = function (data, encoding, callback) {
    // Shift parameters if necessary
    if (isFunction(data)) {
      callback = data;
      data = encoding = null;
    } else if (isFunction(encoding)) {
      callback = encoding;
      encoding = null;
    }

    // Write data if needed and end
    if (!data) {
      this._ended = this._ending = true;
      this._currentRequest.end(null, null, callback);
    } else {
      var self = this;
      var currentRequest = this._currentRequest;
      this.write(data, encoding, function () {
        self._ended = true;
        currentRequest.end(null, null, callback);
      });
      this._ending = true;
    }
  };

  // Sets a header value on the current native request
  RedirectableRequest.prototype.setHeader = function (name, value) {
    this._options.headers[name] = value;
    this._currentRequest.setHeader(name, value);
  };

  // Clears a header value on the current native request
  RedirectableRequest.prototype.removeHeader = function (name) {
    delete this._options.headers[name];
    this._currentRequest.removeHeader(name);
  };

  // Global timeout for all underlying requests
  RedirectableRequest.prototype.setTimeout = function (msecs, callback) {
    var self = this;

    // Destroys the socket on timeout
    function destroyOnTimeout(socket) {
      socket.setTimeout(msecs);
      socket.removeListener("timeout", socket.destroy);
      socket.addListener("timeout", socket.destroy);
    }

    // Sets up a timer to trigger a timeout event
    function startTimer(socket) {
      if (self._timeout) {
        clearTimeout(self._timeout);
      }
      self._timeout = setTimeout(function () {
        self.emit("timeout");
        clearTimer();
      }, msecs);
      destroyOnTimeout(socket);
    }

    // Stops a timeout from triggering
    function clearTimer() {
      // Clear the timeout
      if (self._timeout) {
        clearTimeout(self._timeout);
        self._timeout = null;
      }

      // Clean up all attached listeners
      self.removeListener("abort", clearTimer);
      self.removeListener("error", clearTimer);
      self.removeListener("response", clearTimer);
      self.removeListener("close", clearTimer);
      if (callback) {
        self.removeListener("timeout", callback);
      }
      if (!self.socket) {
        self._currentRequest.removeListener("socket", startTimer);
      }
    }

    // Attach callback if passed
    if (callback) {
      this.on("timeout", callback);
    }

    // Start the timer if or when the socket is opened
    if (this.socket) {
      startTimer(this.socket);
    } else {
      this._currentRequest.once("socket", startTimer);
    }

    // Clean up on events
    this.on("socket", destroyOnTimeout);
    this.on("abort", clearTimer);
    this.on("error", clearTimer);
    this.on("response", clearTimer);
    this.on("close", clearTimer);
    return this;
  };

  // Proxy all other public ClientRequest methods
  ["flushHeaders", "getHeader", "setNoDelay", "setSocketKeepAlive"].forEach(function (method) {
    RedirectableRequest.prototype[method] = function (a, b) {
      return this._currentRequest[method](a, b);
    };
  });

  // Proxy all public ClientRequest properties
  ["aborted", "connection", "socket"].forEach(function (property) {
    Object.defineProperty(RedirectableRequest.prototype, property, {
      get: function get() {
        return this._currentRequest[property];
      }
    });
  });
  RedirectableRequest.prototype._sanitizeOptions = function (options) {
    // Ensure headers are always present
    if (!options.headers) {
      options.headers = {};
    }

    // Since http.request treats host as an alias of hostname,
    // but the url module interprets host as hostname plus port,
    // eliminate the host property to avoid confusion.
    if (options.host) {
      // Use hostname if set, because it has precedence
      if (!options.hostname) {
        options.hostname = options.host;
      }
      delete options.host;
    }

    // Complete the URL object when necessary
    if (!options.pathname && options.path) {
      var searchPos = options.path.indexOf("?");
      if (searchPos < 0) {
        options.pathname = options.path;
      } else {
        options.pathname = options.path.substring(0, searchPos);
        options.search = options.path.substring(searchPos);
      }
    }
  };

  // Executes the next native request (initial or redirect)
  RedirectableRequest.prototype._performRequest = function () {
    // Load the native protocol
    var protocol = this._options.protocol;
    var nativeProtocol = this._options.nativeProtocols[protocol];
    if (!nativeProtocol) {
      throw new TypeError("Unsupported protocol " + protocol);
    }

    // If specified, use the agent corresponding to the protocol
    // (HTTP and HTTPS use different types of agents)
    if (this._options.agents) {
      var scheme = protocol.slice(0, -1);
      this._options.agent = this._options.agents[scheme];
    }

    // Create the native request and set up its event handlers
    var request = this._currentRequest = nativeProtocol.request(this._options, this._onNativeResponse);
    request._redirectable = this;
    for (var _i = 0, _events = events; _i < _events.length; _i++) {
      var event = _events[_i];
      request.on(event, eventHandlers[event]);
    }

    // RFC7230§5.3.1: When making a request directly to an origin server, […]
    // a client MUST send only the absolute path […] as the request-target.
    this._currentUrl = /^\//.test(this._options.path) ? url.format(this._options) :
    // When making a request to a proxy, […]
    // a client MUST send the target URI in absolute-form […].
    this._options.path;

    // End a redirected request
    // (The first request must be ended explicitly with RedirectableRequest#end)
    if (this._isRedirect) {
      // Write the request entity and end
      var i = 0;
      var self = this;
      var buffers = this._requestBodyBuffers;
      (function writeNext(error) {
        // Only write if this request has not been redirected yet
        // istanbul ignore else
        if (request === self._currentRequest) {
          // Report any write errors
          // istanbul ignore if
          if (error) {
            self.emit("error", error);
          }
          // Write the next buffer if there are still left
          else if (i < buffers.length) {
            var buffer = buffers[i++];
            // istanbul ignore else
            if (!request.finished) {
              request.write(buffer.data, buffer.encoding, writeNext);
            }
          }
          // End the request if `end` has been called on us
          else if (self._ended) {
            request.end();
          }
        }
      })();
    }
  };

  // Processes a response from the current native request
  RedirectableRequest.prototype._processResponse = function (response) {
    // Store the redirected response
    var statusCode = response.statusCode;
    if (this._options.trackRedirects) {
      this._redirects.push({
        url: this._currentUrl,
        headers: response.headers,
        statusCode: statusCode
      });
    }

    // RFC7231§6.4: The 3xx (Redirection) class of status code indicates
    // that further action needs to be taken by the user agent in order to
    // fulfill the request. If a Location header field is provided,
    // the user agent MAY automatically redirect its request to the URI
    // referenced by the Location field value,
    // even if the specific status code is not understood.

    // If the response is not a redirect; return it as-is
    var location = response.headers.location;
    if (!location || this._options.followRedirects === false || statusCode < 300 || statusCode >= 400) {
      response.responseUrl = this._currentUrl;
      response.redirects = this._redirects;
      this.emit("response", response);

      // Clean up
      this._requestBodyBuffers = [];
      return;
    }

    // The response is a redirect, so abort the current request
    destroyRequest(this._currentRequest);
    // Discard the remainder of the response to avoid waiting for data
    response.destroy();

    // RFC7231§6.4: A client SHOULD detect and intervene
    // in cyclical redirections (i.e., "infinite" redirection loops).
    if (++this._redirectCount > this._options.maxRedirects) {
      throw new TooManyRedirectsError();
    }

    // Store the request headers if applicable
    var requestHeaders;
    var beforeRedirect = this._options.beforeRedirect;
    if (beforeRedirect) {
      requestHeaders = Object.assign({
        // The Host header was set by nativeProtocol.request
        Host: response.req.getHeader("host")
      }, this._options.headers);
    }

    // RFC7231§6.4: Automatic redirection needs to done with
    // care for methods not known to be safe, […]
    // RFC7231§6.4.2–3: For historical reasons, a user agent MAY change
    // the request method from POST to GET for the subsequent request.
    var method = this._options.method;
    if ((statusCode === 301 || statusCode === 302) && this._options.method === "POST" ||
    // RFC7231§6.4.4: The 303 (See Other) status code indicates that
    // the server is redirecting the user agent to a different resource […]
    // A user agent can perform a retrieval request targeting that URI
    // (a GET or HEAD request if using HTTP) […]
    statusCode === 303 && !/^(?:GET|HEAD)$/.test(this._options.method)) {
      this._options.method = "GET";
      // Drop a possible entity and headers related to it
      this._requestBodyBuffers = [];
      removeMatchingHeaders(/^content-/i, this._options.headers);
    }

    // Drop the Host header, as the redirect might lead to a different host
    var currentHostHeader = removeMatchingHeaders(/^host$/i, this._options.headers);

    // If the redirect is relative, carry over the host of the last request
    var currentUrlParts = parseUrl(this._currentUrl);
    var currentHost = currentHostHeader || currentUrlParts.host;
    var currentUrl = /^\w+:/.test(location) ? this._currentUrl : url.format(Object.assign(currentUrlParts, {
      host: currentHost
    }));

    // Create the redirected request
    var redirectUrl = resolveUrl(location, currentUrl);
    debug("redirecting to", redirectUrl.href);
    this._isRedirect = true;
    spreadUrlObject(redirectUrl, this._options);

    // Drop confidential headers when redirecting to a less secure protocol
    // or to a different domain that is not a superdomain
    if (redirectUrl.protocol !== currentUrlParts.protocol && redirectUrl.protocol !== "https:" || redirectUrl.host !== currentHost && !isSubdomain(redirectUrl.host, currentHost)) {
      removeMatchingHeaders(/^(?:(?:proxy-)?authorization|cookie)$/i, this._options.headers);
    }

    // Evaluate the beforeRedirect callback
    if (isFunction(beforeRedirect)) {
      var responseDetails = {
        headers: response.headers,
        statusCode: statusCode
      };
      var requestDetails = {
        url: currentUrl,
        method: method,
        headers: requestHeaders
      };
      beforeRedirect(this._options, responseDetails, requestDetails);
      this._sanitizeOptions(this._options);
    }

    // Perform the redirected request
    this._performRequest();
  };

  // Wraps the key/value object of protocols with redirect functionality
  function wrap(protocols) {
    // Default settings
    var exports = {
      maxRedirects: 21,
      maxBodyLength: 10 * 1024 * 1024
    };

    // Wrap each protocol
    var nativeProtocols = {};
    Object.keys(protocols).forEach(function (scheme) {
      var protocol = scheme + ":";
      var nativeProtocol = nativeProtocols[protocol] = protocols[scheme];
      var wrappedProtocol = exports[scheme] = Object.create(nativeProtocol);

      // Executes a request, following redirects
      function request(input, options, callback) {
        // Parse parameters, ensuring that input is an object
        if (isURL(input)) {
          input = spreadUrlObject(input);
        } else if (isString(input)) {
          input = spreadUrlObject(parseUrl(input));
        } else {
          callback = options;
          options = validateUrl(input);
          input = {
            protocol: protocol
          };
        }
        if (isFunction(options)) {
          callback = options;
          options = null;
        }

        // Set defaults
        options = Object.assign({
          maxRedirects: exports.maxRedirects,
          maxBodyLength: exports.maxBodyLength
        }, input, options);
        options.nativeProtocols = nativeProtocols;
        if (!isString(options.host) && !isString(options.hostname)) {
          options.hostname = "::1";
        }
        assert.equal(options.protocol, protocol, "protocol mismatch");
        debug("options", options);
        return new RedirectableRequest(options, callback);
      }

      // Executes a GET request, following redirects
      function get(input, options, callback) {
        var wrappedRequest = wrappedProtocol.request(input, options, callback);
        wrappedRequest.end();
        return wrappedRequest;
      }

      // Expose the properties on the wrapped protocol
      Object.defineProperties(wrappedProtocol, {
        request: {
          value: request,
          configurable: true,
          enumerable: true,
          writable: true
        },
        get: {
          value: get,
          configurable: true,
          enumerable: true,
          writable: true
        }
      });
    });
    return exports;
  }
  function noop() {/* empty */}
  function parseUrl(input) {
    var parsed;
    // istanbul ignore else
    if (useNativeURL) {
      parsed = new URL(input);
    } else {
      // Ensure the URL is valid and absolute
      parsed = validateUrl(url.parse(input));
      if (!isString(parsed.protocol)) {
        throw new InvalidUrlError({
          input: input
        });
      }
    }
    return parsed;
  }
  function resolveUrl(relative, base) {
    // istanbul ignore next
    return useNativeURL ? new URL(relative, base) : parseUrl(url.resolve(base, relative));
  }
  function validateUrl(input) {
    if (/^\[/.test(input.hostname) && !/^\[[:0-9a-f]+\]$/i.test(input.hostname)) {
      throw new InvalidUrlError({
        input: input.href || input
      });
    }
    if (/^\[/.test(input.host) && !/^\[[:0-9a-f]+\](:\d+)?$/i.test(input.host)) {
      throw new InvalidUrlError({
        input: input.href || input
      });
    }
    return input;
  }
  function spreadUrlObject(urlObject, target) {
    var spread = target || {};
    var _iterator = _createForOfIteratorHelper(preservedUrlFields),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var key = _step.value;
        spread[key] = urlObject[key];
      }

      // Fix IPv6 hostname
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (spread.hostname.startsWith("[")) {
      spread.hostname = spread.hostname.slice(1, -1);
    }
    // Ensure port is a number
    if (spread.port !== "") {
      spread.port = Number(spread.port);
    }
    // Concatenate path
    spread.path = spread.search ? spread.pathname + spread.search : spread.pathname;
    return spread;
  }
  function removeMatchingHeaders(regex, headers) {
    var lastValue;
    for (var header in headers) {
      if (regex.test(header)) {
        lastValue = headers[header];
        delete headers[header];
      }
    }
    return lastValue === null || typeof lastValue === "undefined" ? undefined : String(lastValue).trim();
  }
  function createErrorType(code, message, baseClass) {
    // Create constructor
    function CustomError(properties) {
      // istanbul ignore else
      if (isFunction(Error.captureStackTrace)) {
        Error.captureStackTrace(this, this.constructor);
      }
      Object.assign(this, properties || {});
      this.code = code;
      this.message = this.cause ? message + ": " + this.cause.message : message;
    }

    // Attach constructor and set default properties
    CustomError.prototype = new (baseClass || Error)();
    Object.defineProperties(CustomError.prototype, {
      constructor: {
        value: CustomError,
        enumerable: false
      },
      name: {
        value: "Error [" + code + "]",
        enumerable: false
      }
    });
    return CustomError;
  }
  function destroyRequest(request, error) {
    for (var _i2 = 0, _events2 = events; _i2 < _events2.length; _i2++) {
      var event = _events2[_i2];
      request.removeListener(event, eventHandlers[event]);
    }
    request.on("error", noop);
    request.destroy(error);
  }
  function isSubdomain(subdomain, domain) {
    assert(isString(subdomain) && isString(domain));
    var dot = subdomain.length - domain.length - 1;
    return dot > 0 && subdomain[dot] === "." && subdomain.endsWith(domain);
  }
  function isString(value) {
    return typeof value === "string" || value instanceof String;
  }
  function isFunction(value) {
    return typeof value === "function";
  }
  function isBuffer(value) {
    return _typeof(value) === "object" && "length" in value;
  }
  function isURL(value) {
    return URL && value instanceof URL;
  }

  // Exports
  followRedirects.exports = wrap({
    http: http,
    https: https
  });
  followRedirects.exports.wrap = wrap;
  return followRedirects.exports;
}

var data;
var hasRequiredData;
function requireData() {
  if (hasRequiredData) return data;
  hasRequiredData = 1;
  data = {
    "version": "0.27.2"
  };
  return data;
}

var http_1;
var hasRequiredHttp;
function requireHttp() {
  if (hasRequiredHttp) return http_1;
  hasRequiredHttp = 1;
  var utils = requireUtils();
  var settle = requireSettle();
  var buildFullPath = requireBuildFullPath();
  var buildURL = requireBuildURL();
  var http = require$$1$2;
  var https = require$$2;
  var httpFollow = requireFollowRedirects().http;
  var httpsFollow = requireFollowRedirects().https;
  var url = require$$0$4;
  var zlib = require$$8;
  var VERSION = requireData().version;
  var transitionalDefaults = requireTransitional();
  var AxiosError = requireAxiosError();
  var CanceledError = requireCanceledError();
  var isHttps = /https:?/;
  var supportedProtocols = ['http:', 'https:', 'file:'];

  /**
   *
   * @param {http.ClientRequestArgs} options
   * @param {AxiosProxyConfig} proxy
   * @param {string} location
   */
  function setProxy(options, proxy, location) {
    options.hostname = proxy.host;
    options.host = proxy.host;
    options.port = proxy.port;
    options.path = location;

    // Basic proxy authorization
    if (proxy.auth) {
      var base64 = Buffer.from(proxy.auth.username + ':' + proxy.auth.password, 'utf8').toString('base64');
      options.headers['Proxy-Authorization'] = 'Basic ' + base64;
    }

    // If a proxy is used, any redirects must also pass through the proxy
    options.beforeRedirect = function beforeRedirect(redirection) {
      redirection.headers.host = redirection.host;
      setProxy(redirection, proxy, redirection.href);
    };
  }

  /*eslint consistent-return:0*/
  http_1 = function httpAdapter(config) {
    return new Promise(function dispatchHttpRequest(resolvePromise, rejectPromise) {
      var onCanceled;
      function done() {
        if (config.cancelToken) {
          config.cancelToken.unsubscribe(onCanceled);
        }
        if (config.signal) {
          config.signal.removeEventListener('abort', onCanceled);
        }
      }
      var resolve = function resolve(value) {
        done();
        resolvePromise(value);
      };
      var rejected = false;
      var reject = function reject(value) {
        done();
        rejected = true;
        rejectPromise(value);
      };
      var data = config.data;
      var headers = config.headers;
      var headerNames = {};
      Object.keys(headers).forEach(function storeLowerName(name) {
        headerNames[name.toLowerCase()] = name;
      });

      // Set User-Agent (required by some servers)
      // See https://github.com/axios/axios/issues/69
      if ('user-agent' in headerNames) {
        // User-Agent is specified; handle case where no UA header is desired
        if (!headers[headerNames['user-agent']]) {
          delete headers[headerNames['user-agent']];
        }
        // Otherwise, use specified value
      } else {
        // Only set header if it hasn't been set in config
        headers['User-Agent'] = 'axios/' + VERSION;
      }

      // support for https://www.npmjs.com/package/form-data api
      if (utils.isFormData(data) && utils.isFunction(data.getHeaders)) {
        Object.assign(headers, data.getHeaders());
      } else if (data && !utils.isStream(data)) {
        if (Buffer.isBuffer(data)) ; else if (utils.isArrayBuffer(data)) {
          data = Buffer.from(new Uint8Array(data));
        } else if (utils.isString(data)) {
          data = Buffer.from(data, 'utf-8');
        } else {
          return reject(new AxiosError('Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream', AxiosError.ERR_BAD_REQUEST, config));
        }
        if (config.maxBodyLength > -1 && data.length > config.maxBodyLength) {
          return reject(new AxiosError('Request body larger than maxBodyLength limit', AxiosError.ERR_BAD_REQUEST, config));
        }

        // Add Content-Length header if data exists
        if (!headerNames['content-length']) {
          headers['Content-Length'] = data.length;
        }
      }

      // HTTP basic authentication
      var auth = undefined;
      if (config.auth) {
        var username = config.auth.username || '';
        var password = config.auth.password || '';
        auth = username + ':' + password;
      }

      // Parse url
      var fullPath = buildFullPath(config.baseURL, config.url);
      var parsed = url.parse(fullPath);
      var protocol = parsed.protocol || supportedProtocols[0];
      if (supportedProtocols.indexOf(protocol) === -1) {
        return reject(new AxiosError('Unsupported protocol ' + protocol, AxiosError.ERR_BAD_REQUEST, config));
      }
      if (!auth && parsed.auth) {
        var urlAuth = parsed.auth.split(':');
        var urlUsername = urlAuth[0] || '';
        var urlPassword = urlAuth[1] || '';
        auth = urlUsername + ':' + urlPassword;
      }
      if (auth && headerNames.authorization) {
        delete headers[headerNames.authorization];
      }
      var isHttpsRequest = isHttps.test(protocol);
      var agent = isHttpsRequest ? config.httpsAgent : config.httpAgent;
      try {
        buildURL(parsed.path, config.params, config.paramsSerializer).replace(/^\?/, '');
      } catch (err) {
        var customErr = new Error(err.message);
        customErr.config = config;
        customErr.url = config.url;
        customErr.exists = true;
        reject(customErr);
      }
      var options = {
        path: buildURL(parsed.path, config.params, config.paramsSerializer).replace(/^\?/, ''),
        method: config.method.toUpperCase(),
        headers: headers,
        agent: agent,
        agents: {
          http: config.httpAgent,
          https: config.httpsAgent
        },
        auth: auth
      };
      if (config.socketPath) {
        options.socketPath = config.socketPath;
      } else {
        options.hostname = parsed.hostname;
        options.port = parsed.port;
      }
      var proxy = config.proxy;
      if (!proxy && proxy !== false) {
        var proxyEnv = protocol.slice(0, -1) + '_proxy';
        var proxyUrl = process.env[proxyEnv] || process.env[proxyEnv.toUpperCase()];
        if (proxyUrl) {
          var parsedProxyUrl = url.parse(proxyUrl);
          var noProxyEnv = process.env.no_proxy || process.env.NO_PROXY;
          var shouldProxy = true;
          if (noProxyEnv) {
            var noProxy = noProxyEnv.split(',').map(function trim(s) {
              return s.trim();
            });
            shouldProxy = !noProxy.some(function proxyMatch(proxyElement) {
              if (!proxyElement) {
                return false;
              }
              if (proxyElement === '*') {
                return true;
              }
              if (proxyElement[0] === '.' && parsed.hostname.substr(parsed.hostname.length - proxyElement.length) === proxyElement) {
                return true;
              }
              return parsed.hostname === proxyElement;
            });
          }
          if (shouldProxy) {
            proxy = {
              host: parsedProxyUrl.hostname,
              port: parsedProxyUrl.port,
              protocol: parsedProxyUrl.protocol
            };
            if (parsedProxyUrl.auth) {
              var proxyUrlAuth = parsedProxyUrl.auth.split(':');
              proxy.auth = {
                username: proxyUrlAuth[0],
                password: proxyUrlAuth[1]
              };
            }
          }
        }
      }
      if (proxy) {
        options.headers.host = parsed.hostname + (parsed.port ? ':' + parsed.port : '');
        setProxy(options, proxy, protocol + '//' + parsed.hostname + (parsed.port ? ':' + parsed.port : '') + options.path);
      }
      var transport;
      var isHttpsProxy = isHttpsRequest && (proxy ? isHttps.test(proxy.protocol) : true);
      if (config.transport) {
        transport = config.transport;
      } else if (config.maxRedirects === 0) {
        transport = isHttpsProxy ? https : http;
      } else {
        if (config.maxRedirects) {
          options.maxRedirects = config.maxRedirects;
        }
        if (config.beforeRedirect) {
          options.beforeRedirect = config.beforeRedirect;
        }
        transport = isHttpsProxy ? httpsFollow : httpFollow;
      }
      if (config.maxBodyLength > -1) {
        options.maxBodyLength = config.maxBodyLength;
      }
      if (config.insecureHTTPParser) {
        options.insecureHTTPParser = config.insecureHTTPParser;
      }

      // Create the request
      var req = transport.request(options, function handleResponse(res) {
        if (req.aborted) return;

        // uncompress the response body transparently if required
        var stream = res;

        // return the last request in case of redirects
        var lastRequest = res.req || req;

        // if no content, is HEAD request or decompress disabled we should not decompress
        if (res.statusCode !== 204 && lastRequest.method !== 'HEAD' && config.decompress !== false) {
          switch (res.headers['content-encoding']) {
            /*eslint default-case:0*/
            case 'gzip':
            case 'compress':
            case 'deflate':
              // add the unzipper to the body stream processing pipeline
              stream = stream.pipe(zlib.createUnzip());

              // remove the content-encoding in order to not confuse downstream operations
              delete res.headers['content-encoding'];
              break;
          }
        }
        var response = {
          status: res.statusCode,
          statusText: res.statusMessage,
          headers: res.headers,
          config: config,
          request: lastRequest
        };
        if (config.responseType === 'stream') {
          response.data = stream;
          settle(resolve, reject, response);
        } else {
          var responseBuffer = [];
          var totalResponseBytes = 0;
          stream.on('data', function handleStreamData(chunk) {
            responseBuffer.push(chunk);
            totalResponseBytes += chunk.length;

            // make sure the content length is not over the maxContentLength if specified
            if (config.maxContentLength > -1 && totalResponseBytes > config.maxContentLength) {
              // stream.destoy() emit aborted event before calling reject() on Node.js v16
              rejected = true;
              stream.destroy();
              reject(new AxiosError('maxContentLength size of ' + config.maxContentLength + ' exceeded', AxiosError.ERR_BAD_RESPONSE, config, lastRequest));
            }
          });
          stream.on('aborted', function handlerStreamAborted() {
            if (rejected) {
              return;
            }
            stream.destroy();
            reject(new AxiosError('maxContentLength size of ' + config.maxContentLength + ' exceeded', AxiosError.ERR_BAD_RESPONSE, config, lastRequest));
          });
          stream.on('error', function handleStreamError(err) {
            if (req.aborted) return;
            reject(AxiosError.from(err, null, config, lastRequest));
          });
          stream.on('end', function handleStreamEnd() {
            try {
              var responseData = responseBuffer.length === 1 ? responseBuffer[0] : Buffer.concat(responseBuffer);
              if (config.responseType !== 'arraybuffer') {
                responseData = responseData.toString(config.responseEncoding);
                if (!config.responseEncoding || config.responseEncoding === 'utf8') {
                  responseData = utils.stripBOM(responseData);
                }
              }
              response.data = responseData;
            } catch (err) {
              reject(AxiosError.from(err, null, config, response.request, response));
            }
            settle(resolve, reject, response);
          });
        }
      });

      // Handle errors
      req.on('error', function handleRequestError(err) {
        // @todo remove
        // if (req.aborted && err.code !== AxiosError.ERR_FR_TOO_MANY_REDIRECTS) return;
        reject(AxiosError.from(err, null, config, req));
      });

      // set tcp keep alive to prevent drop connection by peer
      req.on('socket', function handleRequestSocket(socket) {
        // default interval of sending ack packet is 1 minute
        socket.setKeepAlive(true, 1000 * 60);
      });

      // Handle request timeout
      if (config.timeout) {
        // This is forcing a int timeout to avoid problems if the `req` interface doesn't handle other types.
        var timeout = parseInt(config.timeout, 10);
        if (isNaN(timeout)) {
          reject(new AxiosError('error trying to parse `config.timeout` to int', AxiosError.ERR_BAD_OPTION_VALUE, config, req));
          return;
        }

        // Sometime, the response will be very slow, and does not respond, the connect event will be block by event loop system.
        // And timer callback will be fired, and abort() will be invoked before connection, then get "socket hang up" and code ECONNRESET.
        // At this time, if we have a large number of request, nodejs will hang up some socket on background. and the number will up and up.
        // And then these socket which be hang up will devoring CPU little by little.
        // ClientRequest.setTimeout will be fired on the specify milliseconds, and can make sure that abort() will be fired after connect.
        req.setTimeout(timeout, function handleRequestTimeout() {
          req.abort();
          var transitional = config.transitional || transitionalDefaults;
          reject(new AxiosError('timeout of ' + timeout + 'ms exceeded', transitional.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED, config, req));
        });
      }
      if (config.cancelToken || config.signal) {
        // Handle cancellation
        // eslint-disable-next-line func-names
        onCanceled = function onCanceled(cancel) {
          if (req.aborted) return;
          req.abort();
          reject(!cancel || cancel && cancel.type ? new CanceledError() : cancel);
        };
        config.cancelToken && config.cancelToken.subscribe(onCanceled);
        if (config.signal) {
          config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
        }
      }

      // Send the request
      if (utils.isStream(data)) {
        data.on('error', function handleStreamError(err) {
          reject(AxiosError.from(err, config, null, req));
        }).pipe(req);
      } else {
        req.end(data);
      }
    });
  };
  return http_1;
}

var delayed_stream;
var hasRequiredDelayed_stream;
function requireDelayed_stream() {
  if (hasRequiredDelayed_stream) return delayed_stream;
  hasRequiredDelayed_stream = 1;
  var Stream = require$$3$2.Stream;
  var util = require$$1$1;
  delayed_stream = DelayedStream;
  function DelayedStream() {
    this.source = null;
    this.dataSize = 0;
    this.maxDataSize = 1024 * 1024;
    this.pauseStream = true;
    this._maxDataSizeExceeded = false;
    this._released = false;
    this._bufferedEvents = [];
  }
  util.inherits(DelayedStream, Stream);
  DelayedStream.create = function (source, options) {
    var delayedStream = new this();
    options = options || {};
    for (var option in options) {
      delayedStream[option] = options[option];
    }
    delayedStream.source = source;
    var realEmit = source.emit;
    source.emit = function () {
      delayedStream._handleEmit(arguments);
      return realEmit.apply(source, arguments);
    };
    source.on('error', function () {});
    if (delayedStream.pauseStream) {
      source.pause();
    }
    return delayedStream;
  };
  Object.defineProperty(DelayedStream.prototype, 'readable', {
    configurable: true,
    enumerable: true,
    get: function get() {
      return this.source.readable;
    }
  });
  DelayedStream.prototype.setEncoding = function () {
    return this.source.setEncoding.apply(this.source, arguments);
  };
  DelayedStream.prototype.resume = function () {
    if (!this._released) {
      this.release();
    }
    this.source.resume();
  };
  DelayedStream.prototype.pause = function () {
    this.source.pause();
  };
  DelayedStream.prototype.release = function () {
    this._released = true;
    this._bufferedEvents.forEach(function (args) {
      this.emit.apply(this, args);
    }.bind(this));
    this._bufferedEvents = [];
  };
  DelayedStream.prototype.pipe = function () {
    var r = Stream.prototype.pipe.apply(this, arguments);
    this.resume();
    return r;
  };
  DelayedStream.prototype._handleEmit = function (args) {
    if (this._released) {
      this.emit.apply(this, args);
      return;
    }
    if (args[0] === 'data') {
      this.dataSize += args[1].length;
      this._checkIfMaxDataSizeExceeded();
    }
    this._bufferedEvents.push(args);
  };
  DelayedStream.prototype._checkIfMaxDataSizeExceeded = function () {
    if (this._maxDataSizeExceeded) {
      return;
    }
    if (this.dataSize <= this.maxDataSize) {
      return;
    }
    this._maxDataSizeExceeded = true;
    var message = 'DelayedStream#maxDataSize of ' + this.maxDataSize + ' bytes exceeded.';
    this.emit('error', new Error(message));
  };
  return delayed_stream;
}

var combined_stream;
var hasRequiredCombined_stream;
function requireCombined_stream() {
  if (hasRequiredCombined_stream) return combined_stream;
  hasRequiredCombined_stream = 1;
  var util = require$$1$1;
  var Stream = require$$3$2.Stream;
  var DelayedStream = requireDelayed_stream();
  combined_stream = CombinedStream;
  function CombinedStream() {
    this.writable = false;
    this.readable = true;
    this.dataSize = 0;
    this.maxDataSize = 2 * 1024 * 1024;
    this.pauseStreams = true;
    this._released = false;
    this._streams = [];
    this._currentStream = null;
    this._insideLoop = false;
    this._pendingNext = false;
  }
  util.inherits(CombinedStream, Stream);
  CombinedStream.create = function (options) {
    var combinedStream = new this();
    options = options || {};
    for (var option in options) {
      combinedStream[option] = options[option];
    }
    return combinedStream;
  };
  CombinedStream.isStreamLike = function (stream) {
    return typeof stream !== 'function' && typeof stream !== 'string' && typeof stream !== 'boolean' && typeof stream !== 'number' && !Buffer.isBuffer(stream);
  };
  CombinedStream.prototype.append = function (stream) {
    var isStreamLike = CombinedStream.isStreamLike(stream);
    if (isStreamLike) {
      if (!(stream instanceof DelayedStream)) {
        var newStream = DelayedStream.create(stream, {
          maxDataSize: Infinity,
          pauseStream: this.pauseStreams
        });
        stream.on('data', this._checkDataSize.bind(this));
        stream = newStream;
      }
      this._handleErrors(stream);
      if (this.pauseStreams) {
        stream.pause();
      }
    }
    this._streams.push(stream);
    return this;
  };
  CombinedStream.prototype.pipe = function (dest, options) {
    Stream.prototype.pipe.call(this, dest, options);
    this.resume();
    return dest;
  };
  CombinedStream.prototype._getNext = function () {
    this._currentStream = null;
    if (this._insideLoop) {
      this._pendingNext = true;
      return; // defer call
    }
    this._insideLoop = true;
    try {
      do {
        this._pendingNext = false;
        this._realGetNext();
      } while (this._pendingNext);
    } finally {
      this._insideLoop = false;
    }
  };
  CombinedStream.prototype._realGetNext = function () {
    var stream = this._streams.shift();
    if (typeof stream == 'undefined') {
      this.end();
      return;
    }
    if (typeof stream !== 'function') {
      this._pipeNext(stream);
      return;
    }
    var getStream = stream;
    getStream(function (stream) {
      var isStreamLike = CombinedStream.isStreamLike(stream);
      if (isStreamLike) {
        stream.on('data', this._checkDataSize.bind(this));
        this._handleErrors(stream);
      }
      this._pipeNext(stream);
    }.bind(this));
  };
  CombinedStream.prototype._pipeNext = function (stream) {
    this._currentStream = stream;
    var isStreamLike = CombinedStream.isStreamLike(stream);
    if (isStreamLike) {
      stream.on('end', this._getNext.bind(this));
      stream.pipe(this, {
        end: false
      });
      return;
    }
    var value = stream;
    this.write(value);
    this._getNext();
  };
  CombinedStream.prototype._handleErrors = function (stream) {
    var self = this;
    stream.on('error', function (err) {
      self._emitError(err);
    });
  };
  CombinedStream.prototype.write = function (data) {
    this.emit('data', data);
  };
  CombinedStream.prototype.pause = function () {
    if (!this.pauseStreams) {
      return;
    }
    if (this.pauseStreams && this._currentStream && typeof this._currentStream.pause == 'function') this._currentStream.pause();
    this.emit('pause');
  };
  CombinedStream.prototype.resume = function () {
    if (!this._released) {
      this._released = true;
      this.writable = true;
      this._getNext();
    }
    if (this.pauseStreams && this._currentStream && typeof this._currentStream.resume == 'function') this._currentStream.resume();
    this.emit('resume');
  };
  CombinedStream.prototype.end = function () {
    this._reset();
    this.emit('end');
  };
  CombinedStream.prototype.destroy = function () {
    this._reset();
    this.emit('close');
  };
  CombinedStream.prototype._reset = function () {
    this.writable = false;
    this._streams = [];
    this._currentStream = null;
  };
  CombinedStream.prototype._checkDataSize = function () {
    this._updateDataSize();
    if (this.dataSize <= this.maxDataSize) {
      return;
    }
    var message = 'DelayedStream#maxDataSize of ' + this.maxDataSize + ' bytes exceeded.';
    this._emitError(new Error(message));
  };
  CombinedStream.prototype._updateDataSize = function () {
    this.dataSize = 0;
    var self = this;
    this._streams.forEach(function (stream) {
      if (!stream.dataSize) {
        return;
      }
      self.dataSize += stream.dataSize;
    });
    if (this._currentStream && this._currentStream.dataSize) {
      this.dataSize += this._currentStream.dataSize;
    }
  };
  CombinedStream.prototype._emitError = function (err) {
    this._reset();
    this.emit('error', err);
  };
  return combined_stream;
}

var mimeTypes = {};

var require$$0 = {
	"application/1d-interleaved-parityfec": {
	source: "iana"
},
	"application/3gpdash-qoe-report+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/3gpp-ims+xml": {
	source: "iana",
	compressible: true
},
	"application/3gpphal+json": {
	source: "iana",
	compressible: true
},
	"application/3gpphalforms+json": {
	source: "iana",
	compressible: true
},
	"application/a2l": {
	source: "iana"
},
	"application/ace+cbor": {
	source: "iana"
},
	"application/activemessage": {
	source: "iana"
},
	"application/activity+json": {
	source: "iana",
	compressible: true
},
	"application/alto-costmap+json": {
	source: "iana",
	compressible: true
},
	"application/alto-costmapfilter+json": {
	source: "iana",
	compressible: true
},
	"application/alto-directory+json": {
	source: "iana",
	compressible: true
},
	"application/alto-endpointcost+json": {
	source: "iana",
	compressible: true
},
	"application/alto-endpointcostparams+json": {
	source: "iana",
	compressible: true
},
	"application/alto-endpointprop+json": {
	source: "iana",
	compressible: true
},
	"application/alto-endpointpropparams+json": {
	source: "iana",
	compressible: true
},
	"application/alto-error+json": {
	source: "iana",
	compressible: true
},
	"application/alto-networkmap+json": {
	source: "iana",
	compressible: true
},
	"application/alto-networkmapfilter+json": {
	source: "iana",
	compressible: true
},
	"application/alto-updatestreamcontrol+json": {
	source: "iana",
	compressible: true
},
	"application/alto-updatestreamparams+json": {
	source: "iana",
	compressible: true
},
	"application/aml": {
	source: "iana"
},
	"application/andrew-inset": {
	source: "iana",
	extensions: [
		"ez"
	]
},
	"application/applefile": {
	source: "iana"
},
	"application/applixware": {
	source: "apache",
	extensions: [
		"aw"
	]
},
	"application/at+jwt": {
	source: "iana"
},
	"application/atf": {
	source: "iana"
},
	"application/atfx": {
	source: "iana"
},
	"application/atom+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"atom"
	]
},
	"application/atomcat+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"atomcat"
	]
},
	"application/atomdeleted+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"atomdeleted"
	]
},
	"application/atomicmail": {
	source: "iana"
},
	"application/atomsvc+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"atomsvc"
	]
},
	"application/atsc-dwd+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"dwd"
	]
},
	"application/atsc-dynamic-event-message": {
	source: "iana"
},
	"application/atsc-held+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"held"
	]
},
	"application/atsc-rdt+json": {
	source: "iana",
	compressible: true
},
	"application/atsc-rsat+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"rsat"
	]
},
	"application/atxml": {
	source: "iana"
},
	"application/auth-policy+xml": {
	source: "iana",
	compressible: true
},
	"application/bacnet-xdd+zip": {
	source: "iana",
	compressible: false
},
	"application/batch-smtp": {
	source: "iana"
},
	"application/bdoc": {
	compressible: false,
	extensions: [
		"bdoc"
	]
},
	"application/beep+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/calendar+json": {
	source: "iana",
	compressible: true
},
	"application/calendar+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xcs"
	]
},
	"application/call-completion": {
	source: "iana"
},
	"application/cals-1840": {
	source: "iana"
},
	"application/captive+json": {
	source: "iana",
	compressible: true
},
	"application/cbor": {
	source: "iana"
},
	"application/cbor-seq": {
	source: "iana"
},
	"application/cccex": {
	source: "iana"
},
	"application/ccmp+xml": {
	source: "iana",
	compressible: true
},
	"application/ccxml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"ccxml"
	]
},
	"application/cdfx+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"cdfx"
	]
},
	"application/cdmi-capability": {
	source: "iana",
	extensions: [
		"cdmia"
	]
},
	"application/cdmi-container": {
	source: "iana",
	extensions: [
		"cdmic"
	]
},
	"application/cdmi-domain": {
	source: "iana",
	extensions: [
		"cdmid"
	]
},
	"application/cdmi-object": {
	source: "iana",
	extensions: [
		"cdmio"
	]
},
	"application/cdmi-queue": {
	source: "iana",
	extensions: [
		"cdmiq"
	]
},
	"application/cdni": {
	source: "iana"
},
	"application/cea": {
	source: "iana"
},
	"application/cea-2018+xml": {
	source: "iana",
	compressible: true
},
	"application/cellml+xml": {
	source: "iana",
	compressible: true
},
	"application/cfw": {
	source: "iana"
},
	"application/city+json": {
	source: "iana",
	compressible: true
},
	"application/clr": {
	source: "iana"
},
	"application/clue+xml": {
	source: "iana",
	compressible: true
},
	"application/clue_info+xml": {
	source: "iana",
	compressible: true
},
	"application/cms": {
	source: "iana"
},
	"application/cnrp+xml": {
	source: "iana",
	compressible: true
},
	"application/coap-group+json": {
	source: "iana",
	compressible: true
},
	"application/coap-payload": {
	source: "iana"
},
	"application/commonground": {
	source: "iana"
},
	"application/conference-info+xml": {
	source: "iana",
	compressible: true
},
	"application/cose": {
	source: "iana"
},
	"application/cose-key": {
	source: "iana"
},
	"application/cose-key-set": {
	source: "iana"
},
	"application/cpl+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"cpl"
	]
},
	"application/csrattrs": {
	source: "iana"
},
	"application/csta+xml": {
	source: "iana",
	compressible: true
},
	"application/cstadata+xml": {
	source: "iana",
	compressible: true
},
	"application/csvm+json": {
	source: "iana",
	compressible: true
},
	"application/cu-seeme": {
	source: "apache",
	extensions: [
		"cu"
	]
},
	"application/cwt": {
	source: "iana"
},
	"application/cybercash": {
	source: "iana"
},
	"application/dart": {
	compressible: true
},
	"application/dash+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"mpd"
	]
},
	"application/dash-patch+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"mpp"
	]
},
	"application/dashdelta": {
	source: "iana"
},
	"application/davmount+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"davmount"
	]
},
	"application/dca-rft": {
	source: "iana"
},
	"application/dcd": {
	source: "iana"
},
	"application/dec-dx": {
	source: "iana"
},
	"application/dialog-info+xml": {
	source: "iana",
	compressible: true
},
	"application/dicom": {
	source: "iana"
},
	"application/dicom+json": {
	source: "iana",
	compressible: true
},
	"application/dicom+xml": {
	source: "iana",
	compressible: true
},
	"application/dii": {
	source: "iana"
},
	"application/dit": {
	source: "iana"
},
	"application/dns": {
	source: "iana"
},
	"application/dns+json": {
	source: "iana",
	compressible: true
},
	"application/dns-message": {
	source: "iana"
},
	"application/docbook+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"dbk"
	]
},
	"application/dots+cbor": {
	source: "iana"
},
	"application/dskpp+xml": {
	source: "iana",
	compressible: true
},
	"application/dssc+der": {
	source: "iana",
	extensions: [
		"dssc"
	]
},
	"application/dssc+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xdssc"
	]
},
	"application/dvcs": {
	source: "iana"
},
	"application/ecmascript": {
	source: "iana",
	compressible: true,
	extensions: [
		"es",
		"ecma"
	]
},
	"application/edi-consent": {
	source: "iana"
},
	"application/edi-x12": {
	source: "iana",
	compressible: false
},
	"application/edifact": {
	source: "iana",
	compressible: false
},
	"application/efi": {
	source: "iana"
},
	"application/elm+json": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/elm+xml": {
	source: "iana",
	compressible: true
},
	"application/emergencycalldata.cap+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/emergencycalldata.comment+xml": {
	source: "iana",
	compressible: true
},
	"application/emergencycalldata.control+xml": {
	source: "iana",
	compressible: true
},
	"application/emergencycalldata.deviceinfo+xml": {
	source: "iana",
	compressible: true
},
	"application/emergencycalldata.ecall.msd": {
	source: "iana"
},
	"application/emergencycalldata.providerinfo+xml": {
	source: "iana",
	compressible: true
},
	"application/emergencycalldata.serviceinfo+xml": {
	source: "iana",
	compressible: true
},
	"application/emergencycalldata.subscriberinfo+xml": {
	source: "iana",
	compressible: true
},
	"application/emergencycalldata.veds+xml": {
	source: "iana",
	compressible: true
},
	"application/emma+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"emma"
	]
},
	"application/emotionml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"emotionml"
	]
},
	"application/encaprtp": {
	source: "iana"
},
	"application/epp+xml": {
	source: "iana",
	compressible: true
},
	"application/epub+zip": {
	source: "iana",
	compressible: false,
	extensions: [
		"epub"
	]
},
	"application/eshop": {
	source: "iana"
},
	"application/exi": {
	source: "iana",
	extensions: [
		"exi"
	]
},
	"application/expect-ct-report+json": {
	source: "iana",
	compressible: true
},
	"application/express": {
	source: "iana",
	extensions: [
		"exp"
	]
},
	"application/fastinfoset": {
	source: "iana"
},
	"application/fastsoap": {
	source: "iana"
},
	"application/fdt+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"fdt"
	]
},
	"application/fhir+json": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/fhir+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/fido.trusted-apps+json": {
	compressible: true
},
	"application/fits": {
	source: "iana"
},
	"application/flexfec": {
	source: "iana"
},
	"application/font-sfnt": {
	source: "iana"
},
	"application/font-tdpfr": {
	source: "iana",
	extensions: [
		"pfr"
	]
},
	"application/font-woff": {
	source: "iana",
	compressible: false
},
	"application/framework-attributes+xml": {
	source: "iana",
	compressible: true
},
	"application/geo+json": {
	source: "iana",
	compressible: true,
	extensions: [
		"geojson"
	]
},
	"application/geo+json-seq": {
	source: "iana"
},
	"application/geopackage+sqlite3": {
	source: "iana"
},
	"application/geoxacml+xml": {
	source: "iana",
	compressible: true
},
	"application/gltf-buffer": {
	source: "iana"
},
	"application/gml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"gml"
	]
},
	"application/gpx+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"gpx"
	]
},
	"application/gxf": {
	source: "apache",
	extensions: [
		"gxf"
	]
},
	"application/gzip": {
	source: "iana",
	compressible: false,
	extensions: [
		"gz"
	]
},
	"application/h224": {
	source: "iana"
},
	"application/held+xml": {
	source: "iana",
	compressible: true
},
	"application/hjson": {
	extensions: [
		"hjson"
	]
},
	"application/http": {
	source: "iana"
},
	"application/hyperstudio": {
	source: "iana",
	extensions: [
		"stk"
	]
},
	"application/ibe-key-request+xml": {
	source: "iana",
	compressible: true
},
	"application/ibe-pkg-reply+xml": {
	source: "iana",
	compressible: true
},
	"application/ibe-pp-data": {
	source: "iana"
},
	"application/iges": {
	source: "iana"
},
	"application/im-iscomposing+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/index": {
	source: "iana"
},
	"application/index.cmd": {
	source: "iana"
},
	"application/index.obj": {
	source: "iana"
},
	"application/index.response": {
	source: "iana"
},
	"application/index.vnd": {
	source: "iana"
},
	"application/inkml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"ink",
		"inkml"
	]
},
	"application/iotp": {
	source: "iana"
},
	"application/ipfix": {
	source: "iana",
	extensions: [
		"ipfix"
	]
},
	"application/ipp": {
	source: "iana"
},
	"application/isup": {
	source: "iana"
},
	"application/its+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"its"
	]
},
	"application/java-archive": {
	source: "apache",
	compressible: false,
	extensions: [
		"jar",
		"war",
		"ear"
	]
},
	"application/java-serialized-object": {
	source: "apache",
	compressible: false,
	extensions: [
		"ser"
	]
},
	"application/java-vm": {
	source: "apache",
	compressible: false,
	extensions: [
		"class"
	]
},
	"application/javascript": {
	source: "iana",
	charset: "UTF-8",
	compressible: true,
	extensions: [
		"js",
		"mjs"
	]
},
	"application/jf2feed+json": {
	source: "iana",
	compressible: true
},
	"application/jose": {
	source: "iana"
},
	"application/jose+json": {
	source: "iana",
	compressible: true
},
	"application/jrd+json": {
	source: "iana",
	compressible: true
},
	"application/jscalendar+json": {
	source: "iana",
	compressible: true
},
	"application/json": {
	source: "iana",
	charset: "UTF-8",
	compressible: true,
	extensions: [
		"json",
		"map"
	]
},
	"application/json-patch+json": {
	source: "iana",
	compressible: true
},
	"application/json-seq": {
	source: "iana"
},
	"application/json5": {
	extensions: [
		"json5"
	]
},
	"application/jsonml+json": {
	source: "apache",
	compressible: true,
	extensions: [
		"jsonml"
	]
},
	"application/jwk+json": {
	source: "iana",
	compressible: true
},
	"application/jwk-set+json": {
	source: "iana",
	compressible: true
},
	"application/jwt": {
	source: "iana"
},
	"application/kpml-request+xml": {
	source: "iana",
	compressible: true
},
	"application/kpml-response+xml": {
	source: "iana",
	compressible: true
},
	"application/ld+json": {
	source: "iana",
	compressible: true,
	extensions: [
		"jsonld"
	]
},
	"application/lgr+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"lgr"
	]
},
	"application/link-format": {
	source: "iana"
},
	"application/load-control+xml": {
	source: "iana",
	compressible: true
},
	"application/lost+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"lostxml"
	]
},
	"application/lostsync+xml": {
	source: "iana",
	compressible: true
},
	"application/lpf+zip": {
	source: "iana",
	compressible: false
},
	"application/lxf": {
	source: "iana"
},
	"application/mac-binhex40": {
	source: "iana",
	extensions: [
		"hqx"
	]
},
	"application/mac-compactpro": {
	source: "apache",
	extensions: [
		"cpt"
	]
},
	"application/macwriteii": {
	source: "iana"
},
	"application/mads+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"mads"
	]
},
	"application/manifest+json": {
	source: "iana",
	charset: "UTF-8",
	compressible: true,
	extensions: [
		"webmanifest"
	]
},
	"application/marc": {
	source: "iana",
	extensions: [
		"mrc"
	]
},
	"application/marcxml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"mrcx"
	]
},
	"application/mathematica": {
	source: "iana",
	extensions: [
		"ma",
		"nb",
		"mb"
	]
},
	"application/mathml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"mathml"
	]
},
	"application/mathml-content+xml": {
	source: "iana",
	compressible: true
},
	"application/mathml-presentation+xml": {
	source: "iana",
	compressible: true
},
	"application/mbms-associated-procedure-description+xml": {
	source: "iana",
	compressible: true
},
	"application/mbms-deregister+xml": {
	source: "iana",
	compressible: true
},
	"application/mbms-envelope+xml": {
	source: "iana",
	compressible: true
},
	"application/mbms-msk+xml": {
	source: "iana",
	compressible: true
},
	"application/mbms-msk-response+xml": {
	source: "iana",
	compressible: true
},
	"application/mbms-protection-description+xml": {
	source: "iana",
	compressible: true
},
	"application/mbms-reception-report+xml": {
	source: "iana",
	compressible: true
},
	"application/mbms-register+xml": {
	source: "iana",
	compressible: true
},
	"application/mbms-register-response+xml": {
	source: "iana",
	compressible: true
},
	"application/mbms-schedule+xml": {
	source: "iana",
	compressible: true
},
	"application/mbms-user-service-description+xml": {
	source: "iana",
	compressible: true
},
	"application/mbox": {
	source: "iana",
	extensions: [
		"mbox"
	]
},
	"application/media-policy-dataset+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"mpf"
	]
},
	"application/media_control+xml": {
	source: "iana",
	compressible: true
},
	"application/mediaservercontrol+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"mscml"
	]
},
	"application/merge-patch+json": {
	source: "iana",
	compressible: true
},
	"application/metalink+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"metalink"
	]
},
	"application/metalink4+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"meta4"
	]
},
	"application/mets+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"mets"
	]
},
	"application/mf4": {
	source: "iana"
},
	"application/mikey": {
	source: "iana"
},
	"application/mipc": {
	source: "iana"
},
	"application/missing-blocks+cbor-seq": {
	source: "iana"
},
	"application/mmt-aei+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"maei"
	]
},
	"application/mmt-usd+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"musd"
	]
},
	"application/mods+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"mods"
	]
},
	"application/moss-keys": {
	source: "iana"
},
	"application/moss-signature": {
	source: "iana"
},
	"application/mosskey-data": {
	source: "iana"
},
	"application/mosskey-request": {
	source: "iana"
},
	"application/mp21": {
	source: "iana",
	extensions: [
		"m21",
		"mp21"
	]
},
	"application/mp4": {
	source: "iana",
	extensions: [
		"mp4s",
		"m4p"
	]
},
	"application/mpeg4-generic": {
	source: "iana"
},
	"application/mpeg4-iod": {
	source: "iana"
},
	"application/mpeg4-iod-xmt": {
	source: "iana"
},
	"application/mrb-consumer+xml": {
	source: "iana",
	compressible: true
},
	"application/mrb-publish+xml": {
	source: "iana",
	compressible: true
},
	"application/msc-ivr+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/msc-mixer+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/msword": {
	source: "iana",
	compressible: false,
	extensions: [
		"doc",
		"dot"
	]
},
	"application/mud+json": {
	source: "iana",
	compressible: true
},
	"application/multipart-core": {
	source: "iana"
},
	"application/mxf": {
	source: "iana",
	extensions: [
		"mxf"
	]
},
	"application/n-quads": {
	source: "iana",
	extensions: [
		"nq"
	]
},
	"application/n-triples": {
	source: "iana",
	extensions: [
		"nt"
	]
},
	"application/nasdata": {
	source: "iana"
},
	"application/news-checkgroups": {
	source: "iana",
	charset: "US-ASCII"
},
	"application/news-groupinfo": {
	source: "iana",
	charset: "US-ASCII"
},
	"application/news-transmission": {
	source: "iana"
},
	"application/nlsml+xml": {
	source: "iana",
	compressible: true
},
	"application/node": {
	source: "iana",
	extensions: [
		"cjs"
	]
},
	"application/nss": {
	source: "iana"
},
	"application/oauth-authz-req+jwt": {
	source: "iana"
},
	"application/oblivious-dns-message": {
	source: "iana"
},
	"application/ocsp-request": {
	source: "iana"
},
	"application/ocsp-response": {
	source: "iana"
},
	"application/octet-stream": {
	source: "iana",
	compressible: false,
	extensions: [
		"bin",
		"dms",
		"lrf",
		"mar",
		"so",
		"dist",
		"distz",
		"pkg",
		"bpk",
		"dump",
		"elc",
		"deploy",
		"exe",
		"dll",
		"deb",
		"dmg",
		"iso",
		"img",
		"msi",
		"msp",
		"msm",
		"buffer"
	]
},
	"application/oda": {
	source: "iana",
	extensions: [
		"oda"
	]
},
	"application/odm+xml": {
	source: "iana",
	compressible: true
},
	"application/odx": {
	source: "iana"
},
	"application/oebps-package+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"opf"
	]
},
	"application/ogg": {
	source: "iana",
	compressible: false,
	extensions: [
		"ogx"
	]
},
	"application/omdoc+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"omdoc"
	]
},
	"application/onenote": {
	source: "apache",
	extensions: [
		"onetoc",
		"onetoc2",
		"onetmp",
		"onepkg"
	]
},
	"application/opc-nodeset+xml": {
	source: "iana",
	compressible: true
},
	"application/oscore": {
	source: "iana"
},
	"application/oxps": {
	source: "iana",
	extensions: [
		"oxps"
	]
},
	"application/p21": {
	source: "iana"
},
	"application/p21+zip": {
	source: "iana",
	compressible: false
},
	"application/p2p-overlay+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"relo"
	]
},
	"application/parityfec": {
	source: "iana"
},
	"application/passport": {
	source: "iana"
},
	"application/patch-ops-error+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xer"
	]
},
	"application/pdf": {
	source: "iana",
	compressible: false,
	extensions: [
		"pdf"
	]
},
	"application/pdx": {
	source: "iana"
},
	"application/pem-certificate-chain": {
	source: "iana"
},
	"application/pgp-encrypted": {
	source: "iana",
	compressible: false,
	extensions: [
		"pgp"
	]
},
	"application/pgp-keys": {
	source: "iana",
	extensions: [
		"asc"
	]
},
	"application/pgp-signature": {
	source: "iana",
	extensions: [
		"asc",
		"sig"
	]
},
	"application/pics-rules": {
	source: "apache",
	extensions: [
		"prf"
	]
},
	"application/pidf+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/pidf-diff+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/pkcs10": {
	source: "iana",
	extensions: [
		"p10"
	]
},
	"application/pkcs12": {
	source: "iana"
},
	"application/pkcs7-mime": {
	source: "iana",
	extensions: [
		"p7m",
		"p7c"
	]
},
	"application/pkcs7-signature": {
	source: "iana",
	extensions: [
		"p7s"
	]
},
	"application/pkcs8": {
	source: "iana",
	extensions: [
		"p8"
	]
},
	"application/pkcs8-encrypted": {
	source: "iana"
},
	"application/pkix-attr-cert": {
	source: "iana",
	extensions: [
		"ac"
	]
},
	"application/pkix-cert": {
	source: "iana",
	extensions: [
		"cer"
	]
},
	"application/pkix-crl": {
	source: "iana",
	extensions: [
		"crl"
	]
},
	"application/pkix-pkipath": {
	source: "iana",
	extensions: [
		"pkipath"
	]
},
	"application/pkixcmp": {
	source: "iana",
	extensions: [
		"pki"
	]
},
	"application/pls+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"pls"
	]
},
	"application/poc-settings+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/postscript": {
	source: "iana",
	compressible: true,
	extensions: [
		"ai",
		"eps",
		"ps"
	]
},
	"application/ppsp-tracker+json": {
	source: "iana",
	compressible: true
},
	"application/problem+json": {
	source: "iana",
	compressible: true
},
	"application/problem+xml": {
	source: "iana",
	compressible: true
},
	"application/provenance+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"provx"
	]
},
	"application/prs.alvestrand.titrax-sheet": {
	source: "iana"
},
	"application/prs.cww": {
	source: "iana",
	extensions: [
		"cww"
	]
},
	"application/prs.cyn": {
	source: "iana",
	charset: "7-BIT"
},
	"application/prs.hpub+zip": {
	source: "iana",
	compressible: false
},
	"application/prs.nprend": {
	source: "iana"
},
	"application/prs.plucker": {
	source: "iana"
},
	"application/prs.rdf-xml-crypt": {
	source: "iana"
},
	"application/prs.xsf+xml": {
	source: "iana",
	compressible: true
},
	"application/pskc+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"pskcxml"
	]
},
	"application/pvd+json": {
	source: "iana",
	compressible: true
},
	"application/qsig": {
	source: "iana"
},
	"application/raml+yaml": {
	compressible: true,
	extensions: [
		"raml"
	]
},
	"application/raptorfec": {
	source: "iana"
},
	"application/rdap+json": {
	source: "iana",
	compressible: true
},
	"application/rdf+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"rdf",
		"owl"
	]
},
	"application/reginfo+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"rif"
	]
},
	"application/relax-ng-compact-syntax": {
	source: "iana",
	extensions: [
		"rnc"
	]
},
	"application/remote-printing": {
	source: "iana"
},
	"application/reputon+json": {
	source: "iana",
	compressible: true
},
	"application/resource-lists+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"rl"
	]
},
	"application/resource-lists-diff+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"rld"
	]
},
	"application/rfc+xml": {
	source: "iana",
	compressible: true
},
	"application/riscos": {
	source: "iana"
},
	"application/rlmi+xml": {
	source: "iana",
	compressible: true
},
	"application/rls-services+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"rs"
	]
},
	"application/route-apd+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"rapd"
	]
},
	"application/route-s-tsid+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"sls"
	]
},
	"application/route-usd+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"rusd"
	]
},
	"application/rpki-ghostbusters": {
	source: "iana",
	extensions: [
		"gbr"
	]
},
	"application/rpki-manifest": {
	source: "iana",
	extensions: [
		"mft"
	]
},
	"application/rpki-publication": {
	source: "iana"
},
	"application/rpki-roa": {
	source: "iana",
	extensions: [
		"roa"
	]
},
	"application/rpki-updown": {
	source: "iana"
},
	"application/rsd+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"rsd"
	]
},
	"application/rss+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"rss"
	]
},
	"application/rtf": {
	source: "iana",
	compressible: true,
	extensions: [
		"rtf"
	]
},
	"application/rtploopback": {
	source: "iana"
},
	"application/rtx": {
	source: "iana"
},
	"application/samlassertion+xml": {
	source: "iana",
	compressible: true
},
	"application/samlmetadata+xml": {
	source: "iana",
	compressible: true
},
	"application/sarif+json": {
	source: "iana",
	compressible: true
},
	"application/sarif-external-properties+json": {
	source: "iana",
	compressible: true
},
	"application/sbe": {
	source: "iana"
},
	"application/sbml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"sbml"
	]
},
	"application/scaip+xml": {
	source: "iana",
	compressible: true
},
	"application/scim+json": {
	source: "iana",
	compressible: true
},
	"application/scvp-cv-request": {
	source: "iana",
	extensions: [
		"scq"
	]
},
	"application/scvp-cv-response": {
	source: "iana",
	extensions: [
		"scs"
	]
},
	"application/scvp-vp-request": {
	source: "iana",
	extensions: [
		"spq"
	]
},
	"application/scvp-vp-response": {
	source: "iana",
	extensions: [
		"spp"
	]
},
	"application/sdp": {
	source: "iana",
	extensions: [
		"sdp"
	]
},
	"application/secevent+jwt": {
	source: "iana"
},
	"application/senml+cbor": {
	source: "iana"
},
	"application/senml+json": {
	source: "iana",
	compressible: true
},
	"application/senml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"senmlx"
	]
},
	"application/senml-etch+cbor": {
	source: "iana"
},
	"application/senml-etch+json": {
	source: "iana",
	compressible: true
},
	"application/senml-exi": {
	source: "iana"
},
	"application/sensml+cbor": {
	source: "iana"
},
	"application/sensml+json": {
	source: "iana",
	compressible: true
},
	"application/sensml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"sensmlx"
	]
},
	"application/sensml-exi": {
	source: "iana"
},
	"application/sep+xml": {
	source: "iana",
	compressible: true
},
	"application/sep-exi": {
	source: "iana"
},
	"application/session-info": {
	source: "iana"
},
	"application/set-payment": {
	source: "iana"
},
	"application/set-payment-initiation": {
	source: "iana",
	extensions: [
		"setpay"
	]
},
	"application/set-registration": {
	source: "iana"
},
	"application/set-registration-initiation": {
	source: "iana",
	extensions: [
		"setreg"
	]
},
	"application/sgml": {
	source: "iana"
},
	"application/sgml-open-catalog": {
	source: "iana"
},
	"application/shf+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"shf"
	]
},
	"application/sieve": {
	source: "iana",
	extensions: [
		"siv",
		"sieve"
	]
},
	"application/simple-filter+xml": {
	source: "iana",
	compressible: true
},
	"application/simple-message-summary": {
	source: "iana"
},
	"application/simplesymbolcontainer": {
	source: "iana"
},
	"application/sipc": {
	source: "iana"
},
	"application/slate": {
	source: "iana"
},
	"application/smil": {
	source: "iana"
},
	"application/smil+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"smi",
		"smil"
	]
},
	"application/smpte336m": {
	source: "iana"
},
	"application/soap+fastinfoset": {
	source: "iana"
},
	"application/soap+xml": {
	source: "iana",
	compressible: true
},
	"application/sparql-query": {
	source: "iana",
	extensions: [
		"rq"
	]
},
	"application/sparql-results+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"srx"
	]
},
	"application/spdx+json": {
	source: "iana",
	compressible: true
},
	"application/spirits-event+xml": {
	source: "iana",
	compressible: true
},
	"application/sql": {
	source: "iana"
},
	"application/srgs": {
	source: "iana",
	extensions: [
		"gram"
	]
},
	"application/srgs+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"grxml"
	]
},
	"application/sru+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"sru"
	]
},
	"application/ssdl+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"ssdl"
	]
},
	"application/ssml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"ssml"
	]
},
	"application/stix+json": {
	source: "iana",
	compressible: true
},
	"application/swid+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"swidtag"
	]
},
	"application/tamp-apex-update": {
	source: "iana"
},
	"application/tamp-apex-update-confirm": {
	source: "iana"
},
	"application/tamp-community-update": {
	source: "iana"
},
	"application/tamp-community-update-confirm": {
	source: "iana"
},
	"application/tamp-error": {
	source: "iana"
},
	"application/tamp-sequence-adjust": {
	source: "iana"
},
	"application/tamp-sequence-adjust-confirm": {
	source: "iana"
},
	"application/tamp-status-query": {
	source: "iana"
},
	"application/tamp-status-response": {
	source: "iana"
},
	"application/tamp-update": {
	source: "iana"
},
	"application/tamp-update-confirm": {
	source: "iana"
},
	"application/tar": {
	compressible: true
},
	"application/taxii+json": {
	source: "iana",
	compressible: true
},
	"application/td+json": {
	source: "iana",
	compressible: true
},
	"application/tei+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"tei",
		"teicorpus"
	]
},
	"application/tetra_isi": {
	source: "iana"
},
	"application/thraud+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"tfi"
	]
},
	"application/timestamp-query": {
	source: "iana"
},
	"application/timestamp-reply": {
	source: "iana"
},
	"application/timestamped-data": {
	source: "iana",
	extensions: [
		"tsd"
	]
},
	"application/tlsrpt+gzip": {
	source: "iana"
},
	"application/tlsrpt+json": {
	source: "iana",
	compressible: true
},
	"application/tnauthlist": {
	source: "iana"
},
	"application/token-introspection+jwt": {
	source: "iana"
},
	"application/toml": {
	compressible: true,
	extensions: [
		"toml"
	]
},
	"application/trickle-ice-sdpfrag": {
	source: "iana"
},
	"application/trig": {
	source: "iana",
	extensions: [
		"trig"
	]
},
	"application/ttml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"ttml"
	]
},
	"application/tve-trigger": {
	source: "iana"
},
	"application/tzif": {
	source: "iana"
},
	"application/tzif-leap": {
	source: "iana"
},
	"application/ubjson": {
	compressible: false,
	extensions: [
		"ubj"
	]
},
	"application/ulpfec": {
	source: "iana"
},
	"application/urc-grpsheet+xml": {
	source: "iana",
	compressible: true
},
	"application/urc-ressheet+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"rsheet"
	]
},
	"application/urc-targetdesc+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"td"
	]
},
	"application/urc-uisocketdesc+xml": {
	source: "iana",
	compressible: true
},
	"application/vcard+json": {
	source: "iana",
	compressible: true
},
	"application/vcard+xml": {
	source: "iana",
	compressible: true
},
	"application/vemmi": {
	source: "iana"
},
	"application/vividence.scriptfile": {
	source: "apache"
},
	"application/vnd.1000minds.decision-model+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"1km"
	]
},
	"application/vnd.3gpp-prose+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp-prose-pc3ch+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp-v2x-local-service-information": {
	source: "iana"
},
	"application/vnd.3gpp.5gnas": {
	source: "iana"
},
	"application/vnd.3gpp.access-transfer-events+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.bsf+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.gmop+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.gtpc": {
	source: "iana"
},
	"application/vnd.3gpp.interworking-data": {
	source: "iana"
},
	"application/vnd.3gpp.lpp": {
	source: "iana"
},
	"application/vnd.3gpp.mc-signalling-ear": {
	source: "iana"
},
	"application/vnd.3gpp.mcdata-affiliation-command+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcdata-info+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcdata-payload": {
	source: "iana"
},
	"application/vnd.3gpp.mcdata-service-config+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcdata-signalling": {
	source: "iana"
},
	"application/vnd.3gpp.mcdata-ue-config+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcdata-user-profile+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcptt-affiliation-command+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcptt-floor-request+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcptt-info+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcptt-location-info+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcptt-mbms-usage-info+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcptt-service-config+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcptt-signed+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcptt-ue-config+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcptt-ue-init-config+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcptt-user-profile+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcvideo-affiliation-command+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcvideo-affiliation-info+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcvideo-info+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcvideo-location-info+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcvideo-mbms-usage-info+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcvideo-service-config+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcvideo-transmission-request+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcvideo-ue-config+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcvideo-user-profile+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mid-call+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.ngap": {
	source: "iana"
},
	"application/vnd.3gpp.pfcp": {
	source: "iana"
},
	"application/vnd.3gpp.pic-bw-large": {
	source: "iana",
	extensions: [
		"plb"
	]
},
	"application/vnd.3gpp.pic-bw-small": {
	source: "iana",
	extensions: [
		"psb"
	]
},
	"application/vnd.3gpp.pic-bw-var": {
	source: "iana",
	extensions: [
		"pvb"
	]
},
	"application/vnd.3gpp.s1ap": {
	source: "iana"
},
	"application/vnd.3gpp.sms": {
	source: "iana"
},
	"application/vnd.3gpp.sms+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.srvcc-ext+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.srvcc-info+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.state-and-event-info+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.ussd+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp2.bcmcsinfo+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp2.sms": {
	source: "iana"
},
	"application/vnd.3gpp2.tcap": {
	source: "iana",
	extensions: [
		"tcap"
	]
},
	"application/vnd.3lightssoftware.imagescal": {
	source: "iana"
},
	"application/vnd.3m.post-it-notes": {
	source: "iana",
	extensions: [
		"pwn"
	]
},
	"application/vnd.accpac.simply.aso": {
	source: "iana",
	extensions: [
		"aso"
	]
},
	"application/vnd.accpac.simply.imp": {
	source: "iana",
	extensions: [
		"imp"
	]
},
	"application/vnd.acucobol": {
	source: "iana",
	extensions: [
		"acu"
	]
},
	"application/vnd.acucorp": {
	source: "iana",
	extensions: [
		"atc",
		"acutc"
	]
},
	"application/vnd.adobe.air-application-installer-package+zip": {
	source: "apache",
	compressible: false,
	extensions: [
		"air"
	]
},
	"application/vnd.adobe.flash.movie": {
	source: "iana"
},
	"application/vnd.adobe.formscentral.fcdt": {
	source: "iana",
	extensions: [
		"fcdt"
	]
},
	"application/vnd.adobe.fxp": {
	source: "iana",
	extensions: [
		"fxp",
		"fxpl"
	]
},
	"application/vnd.adobe.partial-upload": {
	source: "iana"
},
	"application/vnd.adobe.xdp+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xdp"
	]
},
	"application/vnd.adobe.xfdf": {
	source: "iana",
	extensions: [
		"xfdf"
	]
},
	"application/vnd.aether.imp": {
	source: "iana"
},
	"application/vnd.afpc.afplinedata": {
	source: "iana"
},
	"application/vnd.afpc.afplinedata-pagedef": {
	source: "iana"
},
	"application/vnd.afpc.cmoca-cmresource": {
	source: "iana"
},
	"application/vnd.afpc.foca-charset": {
	source: "iana"
},
	"application/vnd.afpc.foca-codedfont": {
	source: "iana"
},
	"application/vnd.afpc.foca-codepage": {
	source: "iana"
},
	"application/vnd.afpc.modca": {
	source: "iana"
},
	"application/vnd.afpc.modca-cmtable": {
	source: "iana"
},
	"application/vnd.afpc.modca-formdef": {
	source: "iana"
},
	"application/vnd.afpc.modca-mediummap": {
	source: "iana"
},
	"application/vnd.afpc.modca-objectcontainer": {
	source: "iana"
},
	"application/vnd.afpc.modca-overlay": {
	source: "iana"
},
	"application/vnd.afpc.modca-pagesegment": {
	source: "iana"
},
	"application/vnd.age": {
	source: "iana",
	extensions: [
		"age"
	]
},
	"application/vnd.ah-barcode": {
	source: "iana"
},
	"application/vnd.ahead.space": {
	source: "iana",
	extensions: [
		"ahead"
	]
},
	"application/vnd.airzip.filesecure.azf": {
	source: "iana",
	extensions: [
		"azf"
	]
},
	"application/vnd.airzip.filesecure.azs": {
	source: "iana",
	extensions: [
		"azs"
	]
},
	"application/vnd.amadeus+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.amazon.ebook": {
	source: "apache",
	extensions: [
		"azw"
	]
},
	"application/vnd.amazon.mobi8-ebook": {
	source: "iana"
},
	"application/vnd.americandynamics.acc": {
	source: "iana",
	extensions: [
		"acc"
	]
},
	"application/vnd.amiga.ami": {
	source: "iana",
	extensions: [
		"ami"
	]
},
	"application/vnd.amundsen.maze+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.android.ota": {
	source: "iana"
},
	"application/vnd.android.package-archive": {
	source: "apache",
	compressible: false,
	extensions: [
		"apk"
	]
},
	"application/vnd.anki": {
	source: "iana"
},
	"application/vnd.anser-web-certificate-issue-initiation": {
	source: "iana",
	extensions: [
		"cii"
	]
},
	"application/vnd.anser-web-funds-transfer-initiation": {
	source: "apache",
	extensions: [
		"fti"
	]
},
	"application/vnd.antix.game-component": {
	source: "iana",
	extensions: [
		"atx"
	]
},
	"application/vnd.apache.arrow.file": {
	source: "iana"
},
	"application/vnd.apache.arrow.stream": {
	source: "iana"
},
	"application/vnd.apache.thrift.binary": {
	source: "iana"
},
	"application/vnd.apache.thrift.compact": {
	source: "iana"
},
	"application/vnd.apache.thrift.json": {
	source: "iana"
},
	"application/vnd.api+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.aplextor.warrp+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.apothekende.reservation+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.apple.installer+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"mpkg"
	]
},
	"application/vnd.apple.keynote": {
	source: "iana",
	extensions: [
		"key"
	]
},
	"application/vnd.apple.mpegurl": {
	source: "iana",
	extensions: [
		"m3u8"
	]
},
	"application/vnd.apple.numbers": {
	source: "iana",
	extensions: [
		"numbers"
	]
},
	"application/vnd.apple.pages": {
	source: "iana",
	extensions: [
		"pages"
	]
},
	"application/vnd.apple.pkpass": {
	compressible: false,
	extensions: [
		"pkpass"
	]
},
	"application/vnd.arastra.swi": {
	source: "iana"
},
	"application/vnd.aristanetworks.swi": {
	source: "iana",
	extensions: [
		"swi"
	]
},
	"application/vnd.artisan+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.artsquare": {
	source: "iana"
},
	"application/vnd.astraea-software.iota": {
	source: "iana",
	extensions: [
		"iota"
	]
},
	"application/vnd.audiograph": {
	source: "iana",
	extensions: [
		"aep"
	]
},
	"application/vnd.autopackage": {
	source: "iana"
},
	"application/vnd.avalon+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.avistar+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.balsamiq.bmml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"bmml"
	]
},
	"application/vnd.balsamiq.bmpr": {
	source: "iana"
},
	"application/vnd.banana-accounting": {
	source: "iana"
},
	"application/vnd.bbf.usp.error": {
	source: "iana"
},
	"application/vnd.bbf.usp.msg": {
	source: "iana"
},
	"application/vnd.bbf.usp.msg+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.bekitzur-stech+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.bint.med-content": {
	source: "iana"
},
	"application/vnd.biopax.rdf+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.blink-idb-value-wrapper": {
	source: "iana"
},
	"application/vnd.blueice.multipass": {
	source: "iana",
	extensions: [
		"mpm"
	]
},
	"application/vnd.bluetooth.ep.oob": {
	source: "iana"
},
	"application/vnd.bluetooth.le.oob": {
	source: "iana"
},
	"application/vnd.bmi": {
	source: "iana",
	extensions: [
		"bmi"
	]
},
	"application/vnd.bpf": {
	source: "iana"
},
	"application/vnd.bpf3": {
	source: "iana"
},
	"application/vnd.businessobjects": {
	source: "iana",
	extensions: [
		"rep"
	]
},
	"application/vnd.byu.uapi+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.cab-jscript": {
	source: "iana"
},
	"application/vnd.canon-cpdl": {
	source: "iana"
},
	"application/vnd.canon-lips": {
	source: "iana"
},
	"application/vnd.capasystems-pg+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.cendio.thinlinc.clientconf": {
	source: "iana"
},
	"application/vnd.century-systems.tcp_stream": {
	source: "iana"
},
	"application/vnd.chemdraw+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"cdxml"
	]
},
	"application/vnd.chess-pgn": {
	source: "iana"
},
	"application/vnd.chipnuts.karaoke-mmd": {
	source: "iana",
	extensions: [
		"mmd"
	]
},
	"application/vnd.ciedi": {
	source: "iana"
},
	"application/vnd.cinderella": {
	source: "iana",
	extensions: [
		"cdy"
	]
},
	"application/vnd.cirpack.isdn-ext": {
	source: "iana"
},
	"application/vnd.citationstyles.style+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"csl"
	]
},
	"application/vnd.claymore": {
	source: "iana",
	extensions: [
		"cla"
	]
},
	"application/vnd.cloanto.rp9": {
	source: "iana",
	extensions: [
		"rp9"
	]
},
	"application/vnd.clonk.c4group": {
	source: "iana",
	extensions: [
		"c4g",
		"c4d",
		"c4f",
		"c4p",
		"c4u"
	]
},
	"application/vnd.cluetrust.cartomobile-config": {
	source: "iana",
	extensions: [
		"c11amc"
	]
},
	"application/vnd.cluetrust.cartomobile-config-pkg": {
	source: "iana",
	extensions: [
		"c11amz"
	]
},
	"application/vnd.coffeescript": {
	source: "iana"
},
	"application/vnd.collabio.xodocuments.document": {
	source: "iana"
},
	"application/vnd.collabio.xodocuments.document-template": {
	source: "iana"
},
	"application/vnd.collabio.xodocuments.presentation": {
	source: "iana"
},
	"application/vnd.collabio.xodocuments.presentation-template": {
	source: "iana"
},
	"application/vnd.collabio.xodocuments.spreadsheet": {
	source: "iana"
},
	"application/vnd.collabio.xodocuments.spreadsheet-template": {
	source: "iana"
},
	"application/vnd.collection+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.collection.doc+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.collection.next+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.comicbook+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.comicbook-rar": {
	source: "iana"
},
	"application/vnd.commerce-battelle": {
	source: "iana"
},
	"application/vnd.commonspace": {
	source: "iana",
	extensions: [
		"csp"
	]
},
	"application/vnd.contact.cmsg": {
	source: "iana",
	extensions: [
		"cdbcmsg"
	]
},
	"application/vnd.coreos.ignition+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.cosmocaller": {
	source: "iana",
	extensions: [
		"cmc"
	]
},
	"application/vnd.crick.clicker": {
	source: "iana",
	extensions: [
		"clkx"
	]
},
	"application/vnd.crick.clicker.keyboard": {
	source: "iana",
	extensions: [
		"clkk"
	]
},
	"application/vnd.crick.clicker.palette": {
	source: "iana",
	extensions: [
		"clkp"
	]
},
	"application/vnd.crick.clicker.template": {
	source: "iana",
	extensions: [
		"clkt"
	]
},
	"application/vnd.crick.clicker.wordbank": {
	source: "iana",
	extensions: [
		"clkw"
	]
},
	"application/vnd.criticaltools.wbs+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"wbs"
	]
},
	"application/vnd.cryptii.pipe+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.crypto-shade-file": {
	source: "iana"
},
	"application/vnd.cryptomator.encrypted": {
	source: "iana"
},
	"application/vnd.cryptomator.vault": {
	source: "iana"
},
	"application/vnd.ctc-posml": {
	source: "iana",
	extensions: [
		"pml"
	]
},
	"application/vnd.ctct.ws+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.cups-pdf": {
	source: "iana"
},
	"application/vnd.cups-postscript": {
	source: "iana"
},
	"application/vnd.cups-ppd": {
	source: "iana",
	extensions: [
		"ppd"
	]
},
	"application/vnd.cups-raster": {
	source: "iana"
},
	"application/vnd.cups-raw": {
	source: "iana"
},
	"application/vnd.curl": {
	source: "iana"
},
	"application/vnd.curl.car": {
	source: "apache",
	extensions: [
		"car"
	]
},
	"application/vnd.curl.pcurl": {
	source: "apache",
	extensions: [
		"pcurl"
	]
},
	"application/vnd.cyan.dean.root+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.cybank": {
	source: "iana"
},
	"application/vnd.cyclonedx+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.cyclonedx+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.d2l.coursepackage1p0+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.d3m-dataset": {
	source: "iana"
},
	"application/vnd.d3m-problem": {
	source: "iana"
},
	"application/vnd.dart": {
	source: "iana",
	compressible: true,
	extensions: [
		"dart"
	]
},
	"application/vnd.data-vision.rdz": {
	source: "iana",
	extensions: [
		"rdz"
	]
},
	"application/vnd.datapackage+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.dataresource+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.dbf": {
	source: "iana",
	extensions: [
		"dbf"
	]
},
	"application/vnd.debian.binary-package": {
	source: "iana"
},
	"application/vnd.dece.data": {
	source: "iana",
	extensions: [
		"uvf",
		"uvvf",
		"uvd",
		"uvvd"
	]
},
	"application/vnd.dece.ttml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"uvt",
		"uvvt"
	]
},
	"application/vnd.dece.unspecified": {
	source: "iana",
	extensions: [
		"uvx",
		"uvvx"
	]
},
	"application/vnd.dece.zip": {
	source: "iana",
	extensions: [
		"uvz",
		"uvvz"
	]
},
	"application/vnd.denovo.fcselayout-link": {
	source: "iana",
	extensions: [
		"fe_launch"
	]
},
	"application/vnd.desmume.movie": {
	source: "iana"
},
	"application/vnd.dir-bi.plate-dl-nosuffix": {
	source: "iana"
},
	"application/vnd.dm.delegation+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.dna": {
	source: "iana",
	extensions: [
		"dna"
	]
},
	"application/vnd.document+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.dolby.mlp": {
	source: "apache",
	extensions: [
		"mlp"
	]
},
	"application/vnd.dolby.mobile.1": {
	source: "iana"
},
	"application/vnd.dolby.mobile.2": {
	source: "iana"
},
	"application/vnd.doremir.scorecloud-binary-document": {
	source: "iana"
},
	"application/vnd.dpgraph": {
	source: "iana",
	extensions: [
		"dpg"
	]
},
	"application/vnd.dreamfactory": {
	source: "iana",
	extensions: [
		"dfac"
	]
},
	"application/vnd.drive+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.ds-keypoint": {
	source: "apache",
	extensions: [
		"kpxx"
	]
},
	"application/vnd.dtg.local": {
	source: "iana"
},
	"application/vnd.dtg.local.flash": {
	source: "iana"
},
	"application/vnd.dtg.local.html": {
	source: "iana"
},
	"application/vnd.dvb.ait": {
	source: "iana",
	extensions: [
		"ait"
	]
},
	"application/vnd.dvb.dvbisl+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.dvb.dvbj": {
	source: "iana"
},
	"application/vnd.dvb.esgcontainer": {
	source: "iana"
},
	"application/vnd.dvb.ipdcdftnotifaccess": {
	source: "iana"
},
	"application/vnd.dvb.ipdcesgaccess": {
	source: "iana"
},
	"application/vnd.dvb.ipdcesgaccess2": {
	source: "iana"
},
	"application/vnd.dvb.ipdcesgpdd": {
	source: "iana"
},
	"application/vnd.dvb.ipdcroaming": {
	source: "iana"
},
	"application/vnd.dvb.iptv.alfec-base": {
	source: "iana"
},
	"application/vnd.dvb.iptv.alfec-enhancement": {
	source: "iana"
},
	"application/vnd.dvb.notif-aggregate-root+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.dvb.notif-container+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.dvb.notif-generic+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.dvb.notif-ia-msglist+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.dvb.notif-ia-registration-request+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.dvb.notif-ia-registration-response+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.dvb.notif-init+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.dvb.pfr": {
	source: "iana"
},
	"application/vnd.dvb.service": {
	source: "iana",
	extensions: [
		"svc"
	]
},
	"application/vnd.dxr": {
	source: "iana"
},
	"application/vnd.dynageo": {
	source: "iana",
	extensions: [
		"geo"
	]
},
	"application/vnd.dzr": {
	source: "iana"
},
	"application/vnd.easykaraoke.cdgdownload": {
	source: "iana"
},
	"application/vnd.ecdis-update": {
	source: "iana"
},
	"application/vnd.ecip.rlp": {
	source: "iana"
},
	"application/vnd.eclipse.ditto+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.ecowin.chart": {
	source: "iana",
	extensions: [
		"mag"
	]
},
	"application/vnd.ecowin.filerequest": {
	source: "iana"
},
	"application/vnd.ecowin.fileupdate": {
	source: "iana"
},
	"application/vnd.ecowin.series": {
	source: "iana"
},
	"application/vnd.ecowin.seriesrequest": {
	source: "iana"
},
	"application/vnd.ecowin.seriesupdate": {
	source: "iana"
},
	"application/vnd.efi.img": {
	source: "iana"
},
	"application/vnd.efi.iso": {
	source: "iana"
},
	"application/vnd.emclient.accessrequest+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.enliven": {
	source: "iana",
	extensions: [
		"nml"
	]
},
	"application/vnd.enphase.envoy": {
	source: "iana"
},
	"application/vnd.eprints.data+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.epson.esf": {
	source: "iana",
	extensions: [
		"esf"
	]
},
	"application/vnd.epson.msf": {
	source: "iana",
	extensions: [
		"msf"
	]
},
	"application/vnd.epson.quickanime": {
	source: "iana",
	extensions: [
		"qam"
	]
},
	"application/vnd.epson.salt": {
	source: "iana",
	extensions: [
		"slt"
	]
},
	"application/vnd.epson.ssf": {
	source: "iana",
	extensions: [
		"ssf"
	]
},
	"application/vnd.ericsson.quickcall": {
	source: "iana"
},
	"application/vnd.espass-espass+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.eszigno3+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"es3",
		"et3"
	]
},
	"application/vnd.etsi.aoc+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.asic-e+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.etsi.asic-s+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.etsi.cug+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.iptvcommand+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.iptvdiscovery+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.iptvprofile+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.iptvsad-bc+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.iptvsad-cod+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.iptvsad-npvr+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.iptvservice+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.iptvsync+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.iptvueprofile+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.mcid+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.mheg5": {
	source: "iana"
},
	"application/vnd.etsi.overload-control-policy-dataset+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.pstn+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.sci+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.simservs+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.timestamp-token": {
	source: "iana"
},
	"application/vnd.etsi.tsl+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.tsl.der": {
	source: "iana"
},
	"application/vnd.eu.kasparian.car+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.eudora.data": {
	source: "iana"
},
	"application/vnd.evolv.ecig.profile": {
	source: "iana"
},
	"application/vnd.evolv.ecig.settings": {
	source: "iana"
},
	"application/vnd.evolv.ecig.theme": {
	source: "iana"
},
	"application/vnd.exstream-empower+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.exstream-package": {
	source: "iana"
},
	"application/vnd.ezpix-album": {
	source: "iana",
	extensions: [
		"ez2"
	]
},
	"application/vnd.ezpix-package": {
	source: "iana",
	extensions: [
		"ez3"
	]
},
	"application/vnd.f-secure.mobile": {
	source: "iana"
},
	"application/vnd.familysearch.gedcom+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.fastcopy-disk-image": {
	source: "iana"
},
	"application/vnd.fdf": {
	source: "iana",
	extensions: [
		"fdf"
	]
},
	"application/vnd.fdsn.mseed": {
	source: "iana",
	extensions: [
		"mseed"
	]
},
	"application/vnd.fdsn.seed": {
	source: "iana",
	extensions: [
		"seed",
		"dataless"
	]
},
	"application/vnd.ffsns": {
	source: "iana"
},
	"application/vnd.ficlab.flb+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.filmit.zfc": {
	source: "iana"
},
	"application/vnd.fints": {
	source: "iana"
},
	"application/vnd.firemonkeys.cloudcell": {
	source: "iana"
},
	"application/vnd.flographit": {
	source: "iana",
	extensions: [
		"gph"
	]
},
	"application/vnd.fluxtime.clip": {
	source: "iana",
	extensions: [
		"ftc"
	]
},
	"application/vnd.font-fontforge-sfd": {
	source: "iana"
},
	"application/vnd.framemaker": {
	source: "iana",
	extensions: [
		"fm",
		"frame",
		"maker",
		"book"
	]
},
	"application/vnd.frogans.fnc": {
	source: "iana",
	extensions: [
		"fnc"
	]
},
	"application/vnd.frogans.ltf": {
	source: "iana",
	extensions: [
		"ltf"
	]
},
	"application/vnd.fsc.weblaunch": {
	source: "iana",
	extensions: [
		"fsc"
	]
},
	"application/vnd.fujifilm.fb.docuworks": {
	source: "iana"
},
	"application/vnd.fujifilm.fb.docuworks.binder": {
	source: "iana"
},
	"application/vnd.fujifilm.fb.docuworks.container": {
	source: "iana"
},
	"application/vnd.fujifilm.fb.jfi+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.fujitsu.oasys": {
	source: "iana",
	extensions: [
		"oas"
	]
},
	"application/vnd.fujitsu.oasys2": {
	source: "iana",
	extensions: [
		"oa2"
	]
},
	"application/vnd.fujitsu.oasys3": {
	source: "iana",
	extensions: [
		"oa3"
	]
},
	"application/vnd.fujitsu.oasysgp": {
	source: "iana",
	extensions: [
		"fg5"
	]
},
	"application/vnd.fujitsu.oasysprs": {
	source: "iana",
	extensions: [
		"bh2"
	]
},
	"application/vnd.fujixerox.art-ex": {
	source: "iana"
},
	"application/vnd.fujixerox.art4": {
	source: "iana"
},
	"application/vnd.fujixerox.ddd": {
	source: "iana",
	extensions: [
		"ddd"
	]
},
	"application/vnd.fujixerox.docuworks": {
	source: "iana",
	extensions: [
		"xdw"
	]
},
	"application/vnd.fujixerox.docuworks.binder": {
	source: "iana",
	extensions: [
		"xbd"
	]
},
	"application/vnd.fujixerox.docuworks.container": {
	source: "iana"
},
	"application/vnd.fujixerox.hbpl": {
	source: "iana"
},
	"application/vnd.fut-misnet": {
	source: "iana"
},
	"application/vnd.futoin+cbor": {
	source: "iana"
},
	"application/vnd.futoin+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.fuzzysheet": {
	source: "iana",
	extensions: [
		"fzs"
	]
},
	"application/vnd.genomatix.tuxedo": {
	source: "iana",
	extensions: [
		"txd"
	]
},
	"application/vnd.gentics.grd+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.geo+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.geocube+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.geogebra.file": {
	source: "iana",
	extensions: [
		"ggb"
	]
},
	"application/vnd.geogebra.slides": {
	source: "iana"
},
	"application/vnd.geogebra.tool": {
	source: "iana",
	extensions: [
		"ggt"
	]
},
	"application/vnd.geometry-explorer": {
	source: "iana",
	extensions: [
		"gex",
		"gre"
	]
},
	"application/vnd.geonext": {
	source: "iana",
	extensions: [
		"gxt"
	]
},
	"application/vnd.geoplan": {
	source: "iana",
	extensions: [
		"g2w"
	]
},
	"application/vnd.geospace": {
	source: "iana",
	extensions: [
		"g3w"
	]
},
	"application/vnd.gerber": {
	source: "iana"
},
	"application/vnd.globalplatform.card-content-mgt": {
	source: "iana"
},
	"application/vnd.globalplatform.card-content-mgt-response": {
	source: "iana"
},
	"application/vnd.gmx": {
	source: "iana",
	extensions: [
		"gmx"
	]
},
	"application/vnd.google-apps.document": {
	compressible: false,
	extensions: [
		"gdoc"
	]
},
	"application/vnd.google-apps.presentation": {
	compressible: false,
	extensions: [
		"gslides"
	]
},
	"application/vnd.google-apps.spreadsheet": {
	compressible: false,
	extensions: [
		"gsheet"
	]
},
	"application/vnd.google-earth.kml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"kml"
	]
},
	"application/vnd.google-earth.kmz": {
	source: "iana",
	compressible: false,
	extensions: [
		"kmz"
	]
},
	"application/vnd.gov.sk.e-form+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.gov.sk.e-form+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.gov.sk.xmldatacontainer+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.grafeq": {
	source: "iana",
	extensions: [
		"gqf",
		"gqs"
	]
},
	"application/vnd.gridmp": {
	source: "iana"
},
	"application/vnd.groove-account": {
	source: "iana",
	extensions: [
		"gac"
	]
},
	"application/vnd.groove-help": {
	source: "iana",
	extensions: [
		"ghf"
	]
},
	"application/vnd.groove-identity-message": {
	source: "iana",
	extensions: [
		"gim"
	]
},
	"application/vnd.groove-injector": {
	source: "iana",
	extensions: [
		"grv"
	]
},
	"application/vnd.groove-tool-message": {
	source: "iana",
	extensions: [
		"gtm"
	]
},
	"application/vnd.groove-tool-template": {
	source: "iana",
	extensions: [
		"tpl"
	]
},
	"application/vnd.groove-vcard": {
	source: "iana",
	extensions: [
		"vcg"
	]
},
	"application/vnd.hal+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.hal+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"hal"
	]
},
	"application/vnd.handheld-entertainment+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"zmm"
	]
},
	"application/vnd.hbci": {
	source: "iana",
	extensions: [
		"hbci"
	]
},
	"application/vnd.hc+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.hcl-bireports": {
	source: "iana"
},
	"application/vnd.hdt": {
	source: "iana"
},
	"application/vnd.heroku+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.hhe.lesson-player": {
	source: "iana",
	extensions: [
		"les"
	]
},
	"application/vnd.hl7cda+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/vnd.hl7v2+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/vnd.hp-hpgl": {
	source: "iana",
	extensions: [
		"hpgl"
	]
},
	"application/vnd.hp-hpid": {
	source: "iana",
	extensions: [
		"hpid"
	]
},
	"application/vnd.hp-hps": {
	source: "iana",
	extensions: [
		"hps"
	]
},
	"application/vnd.hp-jlyt": {
	source: "iana",
	extensions: [
		"jlt"
	]
},
	"application/vnd.hp-pcl": {
	source: "iana",
	extensions: [
		"pcl"
	]
},
	"application/vnd.hp-pclxl": {
	source: "iana",
	extensions: [
		"pclxl"
	]
},
	"application/vnd.httphone": {
	source: "iana"
},
	"application/vnd.hydrostatix.sof-data": {
	source: "iana",
	extensions: [
		"sfd-hdstx"
	]
},
	"application/vnd.hyper+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.hyper-item+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.hyperdrive+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.hzn-3d-crossword": {
	source: "iana"
},
	"application/vnd.ibm.afplinedata": {
	source: "iana"
},
	"application/vnd.ibm.electronic-media": {
	source: "iana"
},
	"application/vnd.ibm.minipay": {
	source: "iana",
	extensions: [
		"mpy"
	]
},
	"application/vnd.ibm.modcap": {
	source: "iana",
	extensions: [
		"afp",
		"listafp",
		"list3820"
	]
},
	"application/vnd.ibm.rights-management": {
	source: "iana",
	extensions: [
		"irm"
	]
},
	"application/vnd.ibm.secure-container": {
	source: "iana",
	extensions: [
		"sc"
	]
},
	"application/vnd.iccprofile": {
	source: "iana",
	extensions: [
		"icc",
		"icm"
	]
},
	"application/vnd.ieee.1905": {
	source: "iana"
},
	"application/vnd.igloader": {
	source: "iana",
	extensions: [
		"igl"
	]
},
	"application/vnd.imagemeter.folder+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.imagemeter.image+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.immervision-ivp": {
	source: "iana",
	extensions: [
		"ivp"
	]
},
	"application/vnd.immervision-ivu": {
	source: "iana",
	extensions: [
		"ivu"
	]
},
	"application/vnd.ims.imsccv1p1": {
	source: "iana"
},
	"application/vnd.ims.imsccv1p2": {
	source: "iana"
},
	"application/vnd.ims.imsccv1p3": {
	source: "iana"
},
	"application/vnd.ims.lis.v2.result+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.ims.lti.v2.toolconsumerprofile+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.ims.lti.v2.toolproxy+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.ims.lti.v2.toolproxy.id+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.ims.lti.v2.toolsettings+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.ims.lti.v2.toolsettings.simple+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.informedcontrol.rms+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.informix-visionary": {
	source: "iana"
},
	"application/vnd.infotech.project": {
	source: "iana"
},
	"application/vnd.infotech.project+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.innopath.wamp.notification": {
	source: "iana"
},
	"application/vnd.insors.igm": {
	source: "iana",
	extensions: [
		"igm"
	]
},
	"application/vnd.intercon.formnet": {
	source: "iana",
	extensions: [
		"xpw",
		"xpx"
	]
},
	"application/vnd.intergeo": {
	source: "iana",
	extensions: [
		"i2g"
	]
},
	"application/vnd.intertrust.digibox": {
	source: "iana"
},
	"application/vnd.intertrust.nncp": {
	source: "iana"
},
	"application/vnd.intu.qbo": {
	source: "iana",
	extensions: [
		"qbo"
	]
},
	"application/vnd.intu.qfx": {
	source: "iana",
	extensions: [
		"qfx"
	]
},
	"application/vnd.iptc.g2.catalogitem+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.iptc.g2.conceptitem+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.iptc.g2.knowledgeitem+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.iptc.g2.newsitem+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.iptc.g2.newsmessage+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.iptc.g2.packageitem+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.iptc.g2.planningitem+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.ipunplugged.rcprofile": {
	source: "iana",
	extensions: [
		"rcprofile"
	]
},
	"application/vnd.irepository.package+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"irp"
	]
},
	"application/vnd.is-xpr": {
	source: "iana",
	extensions: [
		"xpr"
	]
},
	"application/vnd.isac.fcs": {
	source: "iana",
	extensions: [
		"fcs"
	]
},
	"application/vnd.iso11783-10+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.jam": {
	source: "iana",
	extensions: [
		"jam"
	]
},
	"application/vnd.japannet-directory-service": {
	source: "iana"
},
	"application/vnd.japannet-jpnstore-wakeup": {
	source: "iana"
},
	"application/vnd.japannet-payment-wakeup": {
	source: "iana"
},
	"application/vnd.japannet-registration": {
	source: "iana"
},
	"application/vnd.japannet-registration-wakeup": {
	source: "iana"
},
	"application/vnd.japannet-setstore-wakeup": {
	source: "iana"
},
	"application/vnd.japannet-verification": {
	source: "iana"
},
	"application/vnd.japannet-verification-wakeup": {
	source: "iana"
},
	"application/vnd.jcp.javame.midlet-rms": {
	source: "iana",
	extensions: [
		"rms"
	]
},
	"application/vnd.jisp": {
	source: "iana",
	extensions: [
		"jisp"
	]
},
	"application/vnd.joost.joda-archive": {
	source: "iana",
	extensions: [
		"joda"
	]
},
	"application/vnd.jsk.isdn-ngn": {
	source: "iana"
},
	"application/vnd.kahootz": {
	source: "iana",
	extensions: [
		"ktz",
		"ktr"
	]
},
	"application/vnd.kde.karbon": {
	source: "iana",
	extensions: [
		"karbon"
	]
},
	"application/vnd.kde.kchart": {
	source: "iana",
	extensions: [
		"chrt"
	]
},
	"application/vnd.kde.kformula": {
	source: "iana",
	extensions: [
		"kfo"
	]
},
	"application/vnd.kde.kivio": {
	source: "iana",
	extensions: [
		"flw"
	]
},
	"application/vnd.kde.kontour": {
	source: "iana",
	extensions: [
		"kon"
	]
},
	"application/vnd.kde.kpresenter": {
	source: "iana",
	extensions: [
		"kpr",
		"kpt"
	]
},
	"application/vnd.kde.kspread": {
	source: "iana",
	extensions: [
		"ksp"
	]
},
	"application/vnd.kde.kword": {
	source: "iana",
	extensions: [
		"kwd",
		"kwt"
	]
},
	"application/vnd.kenameaapp": {
	source: "iana",
	extensions: [
		"htke"
	]
},
	"application/vnd.kidspiration": {
	source: "iana",
	extensions: [
		"kia"
	]
},
	"application/vnd.kinar": {
	source: "iana",
	extensions: [
		"kne",
		"knp"
	]
},
	"application/vnd.koan": {
	source: "iana",
	extensions: [
		"skp",
		"skd",
		"skt",
		"skm"
	]
},
	"application/vnd.kodak-descriptor": {
	source: "iana",
	extensions: [
		"sse"
	]
},
	"application/vnd.las": {
	source: "iana"
},
	"application/vnd.las.las+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.las.las+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"lasxml"
	]
},
	"application/vnd.laszip": {
	source: "iana"
},
	"application/vnd.leap+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.liberty-request+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.llamagraphics.life-balance.desktop": {
	source: "iana",
	extensions: [
		"lbd"
	]
},
	"application/vnd.llamagraphics.life-balance.exchange+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"lbe"
	]
},
	"application/vnd.logipipe.circuit+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.loom": {
	source: "iana"
},
	"application/vnd.lotus-1-2-3": {
	source: "iana",
	extensions: [
		"123"
	]
},
	"application/vnd.lotus-approach": {
	source: "iana",
	extensions: [
		"apr"
	]
},
	"application/vnd.lotus-freelance": {
	source: "iana",
	extensions: [
		"pre"
	]
},
	"application/vnd.lotus-notes": {
	source: "iana",
	extensions: [
		"nsf"
	]
},
	"application/vnd.lotus-organizer": {
	source: "iana",
	extensions: [
		"org"
	]
},
	"application/vnd.lotus-screencam": {
	source: "iana",
	extensions: [
		"scm"
	]
},
	"application/vnd.lotus-wordpro": {
	source: "iana",
	extensions: [
		"lwp"
	]
},
	"application/vnd.macports.portpkg": {
	source: "iana",
	extensions: [
		"portpkg"
	]
},
	"application/vnd.mapbox-vector-tile": {
	source: "iana",
	extensions: [
		"mvt"
	]
},
	"application/vnd.marlin.drm.actiontoken+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.marlin.drm.conftoken+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.marlin.drm.license+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.marlin.drm.mdcf": {
	source: "iana"
},
	"application/vnd.mason+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.maxar.archive.3tz+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.maxmind.maxmind-db": {
	source: "iana"
},
	"application/vnd.mcd": {
	source: "iana",
	extensions: [
		"mcd"
	]
},
	"application/vnd.medcalcdata": {
	source: "iana",
	extensions: [
		"mc1"
	]
},
	"application/vnd.mediastation.cdkey": {
	source: "iana",
	extensions: [
		"cdkey"
	]
},
	"application/vnd.meridian-slingshot": {
	source: "iana"
},
	"application/vnd.mfer": {
	source: "iana",
	extensions: [
		"mwf"
	]
},
	"application/vnd.mfmp": {
	source: "iana",
	extensions: [
		"mfm"
	]
},
	"application/vnd.micro+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.micrografx.flo": {
	source: "iana",
	extensions: [
		"flo"
	]
},
	"application/vnd.micrografx.igx": {
	source: "iana",
	extensions: [
		"igx"
	]
},
	"application/vnd.microsoft.portable-executable": {
	source: "iana"
},
	"application/vnd.microsoft.windows.thumbnail-cache": {
	source: "iana"
},
	"application/vnd.miele+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.mif": {
	source: "iana",
	extensions: [
		"mif"
	]
},
	"application/vnd.minisoft-hp3000-save": {
	source: "iana"
},
	"application/vnd.mitsubishi.misty-guard.trustweb": {
	source: "iana"
},
	"application/vnd.mobius.daf": {
	source: "iana",
	extensions: [
		"daf"
	]
},
	"application/vnd.mobius.dis": {
	source: "iana",
	extensions: [
		"dis"
	]
},
	"application/vnd.mobius.mbk": {
	source: "iana",
	extensions: [
		"mbk"
	]
},
	"application/vnd.mobius.mqy": {
	source: "iana",
	extensions: [
		"mqy"
	]
},
	"application/vnd.mobius.msl": {
	source: "iana",
	extensions: [
		"msl"
	]
},
	"application/vnd.mobius.plc": {
	source: "iana",
	extensions: [
		"plc"
	]
},
	"application/vnd.mobius.txf": {
	source: "iana",
	extensions: [
		"txf"
	]
},
	"application/vnd.mophun.application": {
	source: "iana",
	extensions: [
		"mpn"
	]
},
	"application/vnd.mophun.certificate": {
	source: "iana",
	extensions: [
		"mpc"
	]
},
	"application/vnd.motorola.flexsuite": {
	source: "iana"
},
	"application/vnd.motorola.flexsuite.adsi": {
	source: "iana"
},
	"application/vnd.motorola.flexsuite.fis": {
	source: "iana"
},
	"application/vnd.motorola.flexsuite.gotap": {
	source: "iana"
},
	"application/vnd.motorola.flexsuite.kmr": {
	source: "iana"
},
	"application/vnd.motorola.flexsuite.ttc": {
	source: "iana"
},
	"application/vnd.motorola.flexsuite.wem": {
	source: "iana"
},
	"application/vnd.motorola.iprm": {
	source: "iana"
},
	"application/vnd.mozilla.xul+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xul"
	]
},
	"application/vnd.ms-3mfdocument": {
	source: "iana"
},
	"application/vnd.ms-artgalry": {
	source: "iana",
	extensions: [
		"cil"
	]
},
	"application/vnd.ms-asf": {
	source: "iana"
},
	"application/vnd.ms-cab-compressed": {
	source: "iana",
	extensions: [
		"cab"
	]
},
	"application/vnd.ms-color.iccprofile": {
	source: "apache"
},
	"application/vnd.ms-excel": {
	source: "iana",
	compressible: false,
	extensions: [
		"xls",
		"xlm",
		"xla",
		"xlc",
		"xlt",
		"xlw"
	]
},
	"application/vnd.ms-excel.addin.macroenabled.12": {
	source: "iana",
	extensions: [
		"xlam"
	]
},
	"application/vnd.ms-excel.sheet.binary.macroenabled.12": {
	source: "iana",
	extensions: [
		"xlsb"
	]
},
	"application/vnd.ms-excel.sheet.macroenabled.12": {
	source: "iana",
	extensions: [
		"xlsm"
	]
},
	"application/vnd.ms-excel.template.macroenabled.12": {
	source: "iana",
	extensions: [
		"xltm"
	]
},
	"application/vnd.ms-fontobject": {
	source: "iana",
	compressible: true,
	extensions: [
		"eot"
	]
},
	"application/vnd.ms-htmlhelp": {
	source: "iana",
	extensions: [
		"chm"
	]
},
	"application/vnd.ms-ims": {
	source: "iana",
	extensions: [
		"ims"
	]
},
	"application/vnd.ms-lrm": {
	source: "iana",
	extensions: [
		"lrm"
	]
},
	"application/vnd.ms-office.activex+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.ms-officetheme": {
	source: "iana",
	extensions: [
		"thmx"
	]
},
	"application/vnd.ms-opentype": {
	source: "apache",
	compressible: true
},
	"application/vnd.ms-outlook": {
	compressible: false,
	extensions: [
		"msg"
	]
},
	"application/vnd.ms-package.obfuscated-opentype": {
	source: "apache"
},
	"application/vnd.ms-pki.seccat": {
	source: "apache",
	extensions: [
		"cat"
	]
},
	"application/vnd.ms-pki.stl": {
	source: "apache",
	extensions: [
		"stl"
	]
},
	"application/vnd.ms-playready.initiator+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.ms-powerpoint": {
	source: "iana",
	compressible: false,
	extensions: [
		"ppt",
		"pps",
		"pot"
	]
},
	"application/vnd.ms-powerpoint.addin.macroenabled.12": {
	source: "iana",
	extensions: [
		"ppam"
	]
},
	"application/vnd.ms-powerpoint.presentation.macroenabled.12": {
	source: "iana",
	extensions: [
		"pptm"
	]
},
	"application/vnd.ms-powerpoint.slide.macroenabled.12": {
	source: "iana",
	extensions: [
		"sldm"
	]
},
	"application/vnd.ms-powerpoint.slideshow.macroenabled.12": {
	source: "iana",
	extensions: [
		"ppsm"
	]
},
	"application/vnd.ms-powerpoint.template.macroenabled.12": {
	source: "iana",
	extensions: [
		"potm"
	]
},
	"application/vnd.ms-printdevicecapabilities+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.ms-printing.printticket+xml": {
	source: "apache",
	compressible: true
},
	"application/vnd.ms-printschematicket+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.ms-project": {
	source: "iana",
	extensions: [
		"mpp",
		"mpt"
	]
},
	"application/vnd.ms-tnef": {
	source: "iana"
},
	"application/vnd.ms-windows.devicepairing": {
	source: "iana"
},
	"application/vnd.ms-windows.nwprinting.oob": {
	source: "iana"
},
	"application/vnd.ms-windows.printerpairing": {
	source: "iana"
},
	"application/vnd.ms-windows.wsd.oob": {
	source: "iana"
},
	"application/vnd.ms-wmdrm.lic-chlg-req": {
	source: "iana"
},
	"application/vnd.ms-wmdrm.lic-resp": {
	source: "iana"
},
	"application/vnd.ms-wmdrm.meter-chlg-req": {
	source: "iana"
},
	"application/vnd.ms-wmdrm.meter-resp": {
	source: "iana"
},
	"application/vnd.ms-word.document.macroenabled.12": {
	source: "iana",
	extensions: [
		"docm"
	]
},
	"application/vnd.ms-word.template.macroenabled.12": {
	source: "iana",
	extensions: [
		"dotm"
	]
},
	"application/vnd.ms-works": {
	source: "iana",
	extensions: [
		"wps",
		"wks",
		"wcm",
		"wdb"
	]
},
	"application/vnd.ms-wpl": {
	source: "iana",
	extensions: [
		"wpl"
	]
},
	"application/vnd.ms-xpsdocument": {
	source: "iana",
	compressible: false,
	extensions: [
		"xps"
	]
},
	"application/vnd.msa-disk-image": {
	source: "iana"
},
	"application/vnd.mseq": {
	source: "iana",
	extensions: [
		"mseq"
	]
},
	"application/vnd.msign": {
	source: "iana"
},
	"application/vnd.multiad.creator": {
	source: "iana"
},
	"application/vnd.multiad.creator.cif": {
	source: "iana"
},
	"application/vnd.music-niff": {
	source: "iana"
},
	"application/vnd.musician": {
	source: "iana",
	extensions: [
		"mus"
	]
},
	"application/vnd.muvee.style": {
	source: "iana",
	extensions: [
		"msty"
	]
},
	"application/vnd.mynfc": {
	source: "iana",
	extensions: [
		"taglet"
	]
},
	"application/vnd.nacamar.ybrid+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.ncd.control": {
	source: "iana"
},
	"application/vnd.ncd.reference": {
	source: "iana"
},
	"application/vnd.nearst.inv+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.nebumind.line": {
	source: "iana"
},
	"application/vnd.nervana": {
	source: "iana"
},
	"application/vnd.netfpx": {
	source: "iana"
},
	"application/vnd.neurolanguage.nlu": {
	source: "iana",
	extensions: [
		"nlu"
	]
},
	"application/vnd.nimn": {
	source: "iana"
},
	"application/vnd.nintendo.nitro.rom": {
	source: "iana"
},
	"application/vnd.nintendo.snes.rom": {
	source: "iana"
},
	"application/vnd.nitf": {
	source: "iana",
	extensions: [
		"ntf",
		"nitf"
	]
},
	"application/vnd.noblenet-directory": {
	source: "iana",
	extensions: [
		"nnd"
	]
},
	"application/vnd.noblenet-sealer": {
	source: "iana",
	extensions: [
		"nns"
	]
},
	"application/vnd.noblenet-web": {
	source: "iana",
	extensions: [
		"nnw"
	]
},
	"application/vnd.nokia.catalogs": {
	source: "iana"
},
	"application/vnd.nokia.conml+wbxml": {
	source: "iana"
},
	"application/vnd.nokia.conml+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.nokia.iptv.config+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.nokia.isds-radio-presets": {
	source: "iana"
},
	"application/vnd.nokia.landmark+wbxml": {
	source: "iana"
},
	"application/vnd.nokia.landmark+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.nokia.landmarkcollection+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.nokia.n-gage.ac+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"ac"
	]
},
	"application/vnd.nokia.n-gage.data": {
	source: "iana",
	extensions: [
		"ngdat"
	]
},
	"application/vnd.nokia.n-gage.symbian.install": {
	source: "iana",
	extensions: [
		"n-gage"
	]
},
	"application/vnd.nokia.ncd": {
	source: "iana"
},
	"application/vnd.nokia.pcd+wbxml": {
	source: "iana"
},
	"application/vnd.nokia.pcd+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.nokia.radio-preset": {
	source: "iana",
	extensions: [
		"rpst"
	]
},
	"application/vnd.nokia.radio-presets": {
	source: "iana",
	extensions: [
		"rpss"
	]
},
	"application/vnd.novadigm.edm": {
	source: "iana",
	extensions: [
		"edm"
	]
},
	"application/vnd.novadigm.edx": {
	source: "iana",
	extensions: [
		"edx"
	]
},
	"application/vnd.novadigm.ext": {
	source: "iana",
	extensions: [
		"ext"
	]
},
	"application/vnd.ntt-local.content-share": {
	source: "iana"
},
	"application/vnd.ntt-local.file-transfer": {
	source: "iana"
},
	"application/vnd.ntt-local.ogw_remote-access": {
	source: "iana"
},
	"application/vnd.ntt-local.sip-ta_remote": {
	source: "iana"
},
	"application/vnd.ntt-local.sip-ta_tcp_stream": {
	source: "iana"
},
	"application/vnd.oasis.opendocument.chart": {
	source: "iana",
	extensions: [
		"odc"
	]
},
	"application/vnd.oasis.opendocument.chart-template": {
	source: "iana",
	extensions: [
		"otc"
	]
},
	"application/vnd.oasis.opendocument.database": {
	source: "iana",
	extensions: [
		"odb"
	]
},
	"application/vnd.oasis.opendocument.formula": {
	source: "iana",
	extensions: [
		"odf"
	]
},
	"application/vnd.oasis.opendocument.formula-template": {
	source: "iana",
	extensions: [
		"odft"
	]
},
	"application/vnd.oasis.opendocument.graphics": {
	source: "iana",
	compressible: false,
	extensions: [
		"odg"
	]
},
	"application/vnd.oasis.opendocument.graphics-template": {
	source: "iana",
	extensions: [
		"otg"
	]
},
	"application/vnd.oasis.opendocument.image": {
	source: "iana",
	extensions: [
		"odi"
	]
},
	"application/vnd.oasis.opendocument.image-template": {
	source: "iana",
	extensions: [
		"oti"
	]
},
	"application/vnd.oasis.opendocument.presentation": {
	source: "iana",
	compressible: false,
	extensions: [
		"odp"
	]
},
	"application/vnd.oasis.opendocument.presentation-template": {
	source: "iana",
	extensions: [
		"otp"
	]
},
	"application/vnd.oasis.opendocument.spreadsheet": {
	source: "iana",
	compressible: false,
	extensions: [
		"ods"
	]
},
	"application/vnd.oasis.opendocument.spreadsheet-template": {
	source: "iana",
	extensions: [
		"ots"
	]
},
	"application/vnd.oasis.opendocument.text": {
	source: "iana",
	compressible: false,
	extensions: [
		"odt"
	]
},
	"application/vnd.oasis.opendocument.text-master": {
	source: "iana",
	extensions: [
		"odm"
	]
},
	"application/vnd.oasis.opendocument.text-template": {
	source: "iana",
	extensions: [
		"ott"
	]
},
	"application/vnd.oasis.opendocument.text-web": {
	source: "iana",
	extensions: [
		"oth"
	]
},
	"application/vnd.obn": {
	source: "iana"
},
	"application/vnd.ocf+cbor": {
	source: "iana"
},
	"application/vnd.oci.image.manifest.v1+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.oftn.l10n+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.oipf.contentaccessdownload+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oipf.contentaccessstreaming+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oipf.cspg-hexbinary": {
	source: "iana"
},
	"application/vnd.oipf.dae.svg+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oipf.dae.xhtml+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oipf.mippvcontrolmessage+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oipf.pae.gem": {
	source: "iana"
},
	"application/vnd.oipf.spdiscovery+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oipf.spdlist+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oipf.ueprofile+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oipf.userprofile+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.olpc-sugar": {
	source: "iana",
	extensions: [
		"xo"
	]
},
	"application/vnd.oma-scws-config": {
	source: "iana"
},
	"application/vnd.oma-scws-http-request": {
	source: "iana"
},
	"application/vnd.oma-scws-http-response": {
	source: "iana"
},
	"application/vnd.oma.bcast.associated-procedure-parameter+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.bcast.drm-trigger+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.bcast.imd+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.bcast.ltkm": {
	source: "iana"
},
	"application/vnd.oma.bcast.notification+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.bcast.provisioningtrigger": {
	source: "iana"
},
	"application/vnd.oma.bcast.sgboot": {
	source: "iana"
},
	"application/vnd.oma.bcast.sgdd+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.bcast.sgdu": {
	source: "iana"
},
	"application/vnd.oma.bcast.simple-symbol-container": {
	source: "iana"
},
	"application/vnd.oma.bcast.smartcard-trigger+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.bcast.sprov+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.bcast.stkm": {
	source: "iana"
},
	"application/vnd.oma.cab-address-book+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.cab-feature-handler+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.cab-pcc+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.cab-subs-invite+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.cab-user-prefs+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.dcd": {
	source: "iana"
},
	"application/vnd.oma.dcdc": {
	source: "iana"
},
	"application/vnd.oma.dd2+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"dd2"
	]
},
	"application/vnd.oma.drm.risd+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.group-usage-list+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.lwm2m+cbor": {
	source: "iana"
},
	"application/vnd.oma.lwm2m+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.lwm2m+tlv": {
	source: "iana"
},
	"application/vnd.oma.pal+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.poc.detailed-progress-report+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.poc.final-report+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.poc.groups+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.poc.invocation-descriptor+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.poc.optimized-progress-report+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.push": {
	source: "iana"
},
	"application/vnd.oma.scidm.messages+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.xcap-directory+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.omads-email+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/vnd.omads-file+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/vnd.omads-folder+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/vnd.omaloc-supl-init": {
	source: "iana"
},
	"application/vnd.onepager": {
	source: "iana"
},
	"application/vnd.onepagertamp": {
	source: "iana"
},
	"application/vnd.onepagertamx": {
	source: "iana"
},
	"application/vnd.onepagertat": {
	source: "iana"
},
	"application/vnd.onepagertatp": {
	source: "iana"
},
	"application/vnd.onepagertatx": {
	source: "iana"
},
	"application/vnd.openblox.game+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"obgx"
	]
},
	"application/vnd.openblox.game-binary": {
	source: "iana"
},
	"application/vnd.openeye.oeb": {
	source: "iana"
},
	"application/vnd.openofficeorg.extension": {
	source: "apache",
	extensions: [
		"oxt"
	]
},
	"application/vnd.openstreetmap.data+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"osm"
	]
},
	"application/vnd.opentimestamps.ots": {
	source: "iana"
},
	"application/vnd.openxmlformats-officedocument.custom-properties+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.customxmlproperties+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.drawing+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.drawingml.chart+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.drawingml.diagramcolors+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.drawingml.diagramdata+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.drawingml.diagramlayout+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.drawingml.diagramstyle+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.extended-properties+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.commentauthors+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.comments+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.handoutmaster+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.notesmaster+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.notesslide+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.presentation": {
	source: "iana",
	compressible: false,
	extensions: [
		"pptx"
	]
},
	"application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.presprops+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.slide": {
	source: "iana",
	extensions: [
		"sldx"
	]
},
	"application/vnd.openxmlformats-officedocument.presentationml.slide+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.slidelayout+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.slidemaster+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.slideshow": {
	source: "iana",
	extensions: [
		"ppsx"
	]
},
	"application/vnd.openxmlformats-officedocument.presentationml.slideshow.main+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.slideupdateinfo+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.tablestyles+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.tags+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.template": {
	source: "iana",
	extensions: [
		"potx"
	]
},
	"application/vnd.openxmlformats-officedocument.presentationml.template.main+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.viewprops+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.calcchain+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.externallink+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcachedefinition+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcacherecords+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.pivottable+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.querytable+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.revisionheaders+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.revisionlog+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.sharedstrings+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": {
	source: "iana",
	compressible: false,
	extensions: [
		"xlsx"
	]
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.sheetmetadata+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.tablesinglecells+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.template": {
	source: "iana",
	extensions: [
		"xltx"
	]
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.usernames+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.volatiledependencies+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.theme+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.themeoverride+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.vmldrawing": {
	source: "iana"
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.document": {
	source: "iana",
	compressible: false,
	extensions: [
		"docx"
	]
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.document.glossary+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.endnotes+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.fonttable+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.template": {
	source: "iana",
	extensions: [
		"dotx"
	]
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.template.main+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.websettings+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-package.core-properties+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-package.digital-signature-xmlsignature+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-package.relationships+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oracle.resource+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.orange.indata": {
	source: "iana"
},
	"application/vnd.osa.netdeploy": {
	source: "iana"
},
	"application/vnd.osgeo.mapguide.package": {
	source: "iana",
	extensions: [
		"mgp"
	]
},
	"application/vnd.osgi.bundle": {
	source: "iana"
},
	"application/vnd.osgi.dp": {
	source: "iana",
	extensions: [
		"dp"
	]
},
	"application/vnd.osgi.subsystem": {
	source: "iana",
	extensions: [
		"esa"
	]
},
	"application/vnd.otps.ct-kip+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oxli.countgraph": {
	source: "iana"
},
	"application/vnd.pagerduty+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.palm": {
	source: "iana",
	extensions: [
		"pdb",
		"pqa",
		"oprc"
	]
},
	"application/vnd.panoply": {
	source: "iana"
},
	"application/vnd.paos.xml": {
	source: "iana"
},
	"application/vnd.patentdive": {
	source: "iana"
},
	"application/vnd.patientecommsdoc": {
	source: "iana"
},
	"application/vnd.pawaafile": {
	source: "iana",
	extensions: [
		"paw"
	]
},
	"application/vnd.pcos": {
	source: "iana"
},
	"application/vnd.pg.format": {
	source: "iana",
	extensions: [
		"str"
	]
},
	"application/vnd.pg.osasli": {
	source: "iana",
	extensions: [
		"ei6"
	]
},
	"application/vnd.piaccess.application-licence": {
	source: "iana"
},
	"application/vnd.picsel": {
	source: "iana",
	extensions: [
		"efif"
	]
},
	"application/vnd.pmi.widget": {
	source: "iana",
	extensions: [
		"wg"
	]
},
	"application/vnd.poc.group-advertisement+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.pocketlearn": {
	source: "iana",
	extensions: [
		"plf"
	]
},
	"application/vnd.powerbuilder6": {
	source: "iana",
	extensions: [
		"pbd"
	]
},
	"application/vnd.powerbuilder6-s": {
	source: "iana"
},
	"application/vnd.powerbuilder7": {
	source: "iana"
},
	"application/vnd.powerbuilder7-s": {
	source: "iana"
},
	"application/vnd.powerbuilder75": {
	source: "iana"
},
	"application/vnd.powerbuilder75-s": {
	source: "iana"
},
	"application/vnd.preminet": {
	source: "iana"
},
	"application/vnd.previewsystems.box": {
	source: "iana",
	extensions: [
		"box"
	]
},
	"application/vnd.proteus.magazine": {
	source: "iana",
	extensions: [
		"mgz"
	]
},
	"application/vnd.psfs": {
	source: "iana"
},
	"application/vnd.publishare-delta-tree": {
	source: "iana",
	extensions: [
		"qps"
	]
},
	"application/vnd.pvi.ptid1": {
	source: "iana",
	extensions: [
		"ptid"
	]
},
	"application/vnd.pwg-multiplexed": {
	source: "iana"
},
	"application/vnd.pwg-xhtml-print+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.qualcomm.brew-app-res": {
	source: "iana"
},
	"application/vnd.quarantainenet": {
	source: "iana"
},
	"application/vnd.quark.quarkxpress": {
	source: "iana",
	extensions: [
		"qxd",
		"qxt",
		"qwd",
		"qwt",
		"qxl",
		"qxb"
	]
},
	"application/vnd.quobject-quoxdocument": {
	source: "iana"
},
	"application/vnd.radisys.moml+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-audit+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-audit-conf+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-audit-conn+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-audit-dialog+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-audit-stream+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-conf+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-dialog+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-dialog-base+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-dialog-fax-detect+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-dialog-fax-sendrecv+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-dialog-group+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-dialog-speech+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-dialog-transform+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.rainstor.data": {
	source: "iana"
},
	"application/vnd.rapid": {
	source: "iana"
},
	"application/vnd.rar": {
	source: "iana",
	extensions: [
		"rar"
	]
},
	"application/vnd.realvnc.bed": {
	source: "iana",
	extensions: [
		"bed"
	]
},
	"application/vnd.recordare.musicxml": {
	source: "iana",
	extensions: [
		"mxl"
	]
},
	"application/vnd.recordare.musicxml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"musicxml"
	]
},
	"application/vnd.renlearn.rlprint": {
	source: "iana"
},
	"application/vnd.resilient.logic": {
	source: "iana"
},
	"application/vnd.restful+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.rig.cryptonote": {
	source: "iana",
	extensions: [
		"cryptonote"
	]
},
	"application/vnd.rim.cod": {
	source: "apache",
	extensions: [
		"cod"
	]
},
	"application/vnd.rn-realmedia": {
	source: "apache",
	extensions: [
		"rm"
	]
},
	"application/vnd.rn-realmedia-vbr": {
	source: "apache",
	extensions: [
		"rmvb"
	]
},
	"application/vnd.route66.link66+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"link66"
	]
},
	"application/vnd.rs-274x": {
	source: "iana"
},
	"application/vnd.ruckus.download": {
	source: "iana"
},
	"application/vnd.s3sms": {
	source: "iana"
},
	"application/vnd.sailingtracker.track": {
	source: "iana",
	extensions: [
		"st"
	]
},
	"application/vnd.sar": {
	source: "iana"
},
	"application/vnd.sbm.cid": {
	source: "iana"
},
	"application/vnd.sbm.mid2": {
	source: "iana"
},
	"application/vnd.scribus": {
	source: "iana"
},
	"application/vnd.sealed.3df": {
	source: "iana"
},
	"application/vnd.sealed.csf": {
	source: "iana"
},
	"application/vnd.sealed.doc": {
	source: "iana"
},
	"application/vnd.sealed.eml": {
	source: "iana"
},
	"application/vnd.sealed.mht": {
	source: "iana"
},
	"application/vnd.sealed.net": {
	source: "iana"
},
	"application/vnd.sealed.ppt": {
	source: "iana"
},
	"application/vnd.sealed.tiff": {
	source: "iana"
},
	"application/vnd.sealed.xls": {
	source: "iana"
},
	"application/vnd.sealedmedia.softseal.html": {
	source: "iana"
},
	"application/vnd.sealedmedia.softseal.pdf": {
	source: "iana"
},
	"application/vnd.seemail": {
	source: "iana",
	extensions: [
		"see"
	]
},
	"application/vnd.seis+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.sema": {
	source: "iana",
	extensions: [
		"sema"
	]
},
	"application/vnd.semd": {
	source: "iana",
	extensions: [
		"semd"
	]
},
	"application/vnd.semf": {
	source: "iana",
	extensions: [
		"semf"
	]
},
	"application/vnd.shade-save-file": {
	source: "iana"
},
	"application/vnd.shana.informed.formdata": {
	source: "iana",
	extensions: [
		"ifm"
	]
},
	"application/vnd.shana.informed.formtemplate": {
	source: "iana",
	extensions: [
		"itp"
	]
},
	"application/vnd.shana.informed.interchange": {
	source: "iana",
	extensions: [
		"iif"
	]
},
	"application/vnd.shana.informed.package": {
	source: "iana",
	extensions: [
		"ipk"
	]
},
	"application/vnd.shootproof+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.shopkick+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.shp": {
	source: "iana"
},
	"application/vnd.shx": {
	source: "iana"
},
	"application/vnd.sigrok.session": {
	source: "iana"
},
	"application/vnd.simtech-mindmapper": {
	source: "iana",
	extensions: [
		"twd",
		"twds"
	]
},
	"application/vnd.siren+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.smaf": {
	source: "iana",
	extensions: [
		"mmf"
	]
},
	"application/vnd.smart.notebook": {
	source: "iana"
},
	"application/vnd.smart.teacher": {
	source: "iana",
	extensions: [
		"teacher"
	]
},
	"application/vnd.snesdev-page-table": {
	source: "iana"
},
	"application/vnd.software602.filler.form+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"fo"
	]
},
	"application/vnd.software602.filler.form-xml-zip": {
	source: "iana"
},
	"application/vnd.solent.sdkm+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"sdkm",
		"sdkd"
	]
},
	"application/vnd.spotfire.dxp": {
	source: "iana",
	extensions: [
		"dxp"
	]
},
	"application/vnd.spotfire.sfs": {
	source: "iana",
	extensions: [
		"sfs"
	]
},
	"application/vnd.sqlite3": {
	source: "iana"
},
	"application/vnd.sss-cod": {
	source: "iana"
},
	"application/vnd.sss-dtf": {
	source: "iana"
},
	"application/vnd.sss-ntf": {
	source: "iana"
},
	"application/vnd.stardivision.calc": {
	source: "apache",
	extensions: [
		"sdc"
	]
},
	"application/vnd.stardivision.draw": {
	source: "apache",
	extensions: [
		"sda"
	]
},
	"application/vnd.stardivision.impress": {
	source: "apache",
	extensions: [
		"sdd"
	]
},
	"application/vnd.stardivision.math": {
	source: "apache",
	extensions: [
		"smf"
	]
},
	"application/vnd.stardivision.writer": {
	source: "apache",
	extensions: [
		"sdw",
		"vor"
	]
},
	"application/vnd.stardivision.writer-global": {
	source: "apache",
	extensions: [
		"sgl"
	]
},
	"application/vnd.stepmania.package": {
	source: "iana",
	extensions: [
		"smzip"
	]
},
	"application/vnd.stepmania.stepchart": {
	source: "iana",
	extensions: [
		"sm"
	]
},
	"application/vnd.street-stream": {
	source: "iana"
},
	"application/vnd.sun.wadl+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"wadl"
	]
},
	"application/vnd.sun.xml.calc": {
	source: "apache",
	extensions: [
		"sxc"
	]
},
	"application/vnd.sun.xml.calc.template": {
	source: "apache",
	extensions: [
		"stc"
	]
},
	"application/vnd.sun.xml.draw": {
	source: "apache",
	extensions: [
		"sxd"
	]
},
	"application/vnd.sun.xml.draw.template": {
	source: "apache",
	extensions: [
		"std"
	]
},
	"application/vnd.sun.xml.impress": {
	source: "apache",
	extensions: [
		"sxi"
	]
},
	"application/vnd.sun.xml.impress.template": {
	source: "apache",
	extensions: [
		"sti"
	]
},
	"application/vnd.sun.xml.math": {
	source: "apache",
	extensions: [
		"sxm"
	]
},
	"application/vnd.sun.xml.writer": {
	source: "apache",
	extensions: [
		"sxw"
	]
},
	"application/vnd.sun.xml.writer.global": {
	source: "apache",
	extensions: [
		"sxg"
	]
},
	"application/vnd.sun.xml.writer.template": {
	source: "apache",
	extensions: [
		"stw"
	]
},
	"application/vnd.sus-calendar": {
	source: "iana",
	extensions: [
		"sus",
		"susp"
	]
},
	"application/vnd.svd": {
	source: "iana",
	extensions: [
		"svd"
	]
},
	"application/vnd.swiftview-ics": {
	source: "iana"
},
	"application/vnd.sycle+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.syft+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.symbian.install": {
	source: "apache",
	extensions: [
		"sis",
		"sisx"
	]
},
	"application/vnd.syncml+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true,
	extensions: [
		"xsm"
	]
},
	"application/vnd.syncml.dm+wbxml": {
	source: "iana",
	charset: "UTF-8",
	extensions: [
		"bdm"
	]
},
	"application/vnd.syncml.dm+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true,
	extensions: [
		"xdm"
	]
},
	"application/vnd.syncml.dm.notification": {
	source: "iana"
},
	"application/vnd.syncml.dmddf+wbxml": {
	source: "iana"
},
	"application/vnd.syncml.dmddf+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true,
	extensions: [
		"ddf"
	]
},
	"application/vnd.syncml.dmtnds+wbxml": {
	source: "iana"
},
	"application/vnd.syncml.dmtnds+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/vnd.syncml.ds.notification": {
	source: "iana"
},
	"application/vnd.tableschema+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.tao.intent-module-archive": {
	source: "iana",
	extensions: [
		"tao"
	]
},
	"application/vnd.tcpdump.pcap": {
	source: "iana",
	extensions: [
		"pcap",
		"cap",
		"dmp"
	]
},
	"application/vnd.think-cell.ppttc+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.tmd.mediaflex.api+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.tml": {
	source: "iana"
},
	"application/vnd.tmobile-livetv": {
	source: "iana",
	extensions: [
		"tmo"
	]
},
	"application/vnd.tri.onesource": {
	source: "iana"
},
	"application/vnd.trid.tpt": {
	source: "iana",
	extensions: [
		"tpt"
	]
},
	"application/vnd.triscape.mxs": {
	source: "iana",
	extensions: [
		"mxs"
	]
},
	"application/vnd.trueapp": {
	source: "iana",
	extensions: [
		"tra"
	]
},
	"application/vnd.truedoc": {
	source: "iana"
},
	"application/vnd.ubisoft.webplayer": {
	source: "iana"
},
	"application/vnd.ufdl": {
	source: "iana",
	extensions: [
		"ufd",
		"ufdl"
	]
},
	"application/vnd.uiq.theme": {
	source: "iana",
	extensions: [
		"utz"
	]
},
	"application/vnd.umajin": {
	source: "iana",
	extensions: [
		"umj"
	]
},
	"application/vnd.unity": {
	source: "iana",
	extensions: [
		"unityweb"
	]
},
	"application/vnd.uoml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"uoml"
	]
},
	"application/vnd.uplanet.alert": {
	source: "iana"
},
	"application/vnd.uplanet.alert-wbxml": {
	source: "iana"
},
	"application/vnd.uplanet.bearer-choice": {
	source: "iana"
},
	"application/vnd.uplanet.bearer-choice-wbxml": {
	source: "iana"
},
	"application/vnd.uplanet.cacheop": {
	source: "iana"
},
	"application/vnd.uplanet.cacheop-wbxml": {
	source: "iana"
},
	"application/vnd.uplanet.channel": {
	source: "iana"
},
	"application/vnd.uplanet.channel-wbxml": {
	source: "iana"
},
	"application/vnd.uplanet.list": {
	source: "iana"
},
	"application/vnd.uplanet.list-wbxml": {
	source: "iana"
},
	"application/vnd.uplanet.listcmd": {
	source: "iana"
},
	"application/vnd.uplanet.listcmd-wbxml": {
	source: "iana"
},
	"application/vnd.uplanet.signal": {
	source: "iana"
},
	"application/vnd.uri-map": {
	source: "iana"
},
	"application/vnd.valve.source.material": {
	source: "iana"
},
	"application/vnd.vcx": {
	source: "iana",
	extensions: [
		"vcx"
	]
},
	"application/vnd.vd-study": {
	source: "iana"
},
	"application/vnd.vectorworks": {
	source: "iana"
},
	"application/vnd.vel+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.verimatrix.vcas": {
	source: "iana"
},
	"application/vnd.veritone.aion+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.veryant.thin": {
	source: "iana"
},
	"application/vnd.ves.encrypted": {
	source: "iana"
},
	"application/vnd.vidsoft.vidconference": {
	source: "iana"
},
	"application/vnd.visio": {
	source: "iana",
	extensions: [
		"vsd",
		"vst",
		"vss",
		"vsw"
	]
},
	"application/vnd.visionary": {
	source: "iana",
	extensions: [
		"vis"
	]
},
	"application/vnd.vividence.scriptfile": {
	source: "iana"
},
	"application/vnd.vsf": {
	source: "iana",
	extensions: [
		"vsf"
	]
},
	"application/vnd.wap.sic": {
	source: "iana"
},
	"application/vnd.wap.slc": {
	source: "iana"
},
	"application/vnd.wap.wbxml": {
	source: "iana",
	charset: "UTF-8",
	extensions: [
		"wbxml"
	]
},
	"application/vnd.wap.wmlc": {
	source: "iana",
	extensions: [
		"wmlc"
	]
},
	"application/vnd.wap.wmlscriptc": {
	source: "iana",
	extensions: [
		"wmlsc"
	]
},
	"application/vnd.webturbo": {
	source: "iana",
	extensions: [
		"wtb"
	]
},
	"application/vnd.wfa.dpp": {
	source: "iana"
},
	"application/vnd.wfa.p2p": {
	source: "iana"
},
	"application/vnd.wfa.wsc": {
	source: "iana"
},
	"application/vnd.windows.devicepairing": {
	source: "iana"
},
	"application/vnd.wmc": {
	source: "iana"
},
	"application/vnd.wmf.bootstrap": {
	source: "iana"
},
	"application/vnd.wolfram.mathematica": {
	source: "iana"
},
	"application/vnd.wolfram.mathematica.package": {
	source: "iana"
},
	"application/vnd.wolfram.player": {
	source: "iana",
	extensions: [
		"nbp"
	]
},
	"application/vnd.wordperfect": {
	source: "iana",
	extensions: [
		"wpd"
	]
},
	"application/vnd.wqd": {
	source: "iana",
	extensions: [
		"wqd"
	]
},
	"application/vnd.wrq-hp3000-labelled": {
	source: "iana"
},
	"application/vnd.wt.stf": {
	source: "iana",
	extensions: [
		"stf"
	]
},
	"application/vnd.wv.csp+wbxml": {
	source: "iana"
},
	"application/vnd.wv.csp+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.wv.ssp+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.xacml+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.xara": {
	source: "iana",
	extensions: [
		"xar"
	]
},
	"application/vnd.xfdl": {
	source: "iana",
	extensions: [
		"xfdl"
	]
},
	"application/vnd.xfdl.webform": {
	source: "iana"
},
	"application/vnd.xmi+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.xmpie.cpkg": {
	source: "iana"
},
	"application/vnd.xmpie.dpkg": {
	source: "iana"
},
	"application/vnd.xmpie.plan": {
	source: "iana"
},
	"application/vnd.xmpie.ppkg": {
	source: "iana"
},
	"application/vnd.xmpie.xlim": {
	source: "iana"
},
	"application/vnd.yamaha.hv-dic": {
	source: "iana",
	extensions: [
		"hvd"
	]
},
	"application/vnd.yamaha.hv-script": {
	source: "iana",
	extensions: [
		"hvs"
	]
},
	"application/vnd.yamaha.hv-voice": {
	source: "iana",
	extensions: [
		"hvp"
	]
},
	"application/vnd.yamaha.openscoreformat": {
	source: "iana",
	extensions: [
		"osf"
	]
},
	"application/vnd.yamaha.openscoreformat.osfpvg+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"osfpvg"
	]
},
	"application/vnd.yamaha.remote-setup": {
	source: "iana"
},
	"application/vnd.yamaha.smaf-audio": {
	source: "iana",
	extensions: [
		"saf"
	]
},
	"application/vnd.yamaha.smaf-phrase": {
	source: "iana",
	extensions: [
		"spf"
	]
},
	"application/vnd.yamaha.through-ngn": {
	source: "iana"
},
	"application/vnd.yamaha.tunnel-udpencap": {
	source: "iana"
},
	"application/vnd.yaoweme": {
	source: "iana"
},
	"application/vnd.yellowriver-custom-menu": {
	source: "iana",
	extensions: [
		"cmp"
	]
},
	"application/vnd.youtube.yt": {
	source: "iana"
},
	"application/vnd.zul": {
	source: "iana",
	extensions: [
		"zir",
		"zirz"
	]
},
	"application/vnd.zzazz.deck+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"zaz"
	]
},
	"application/voicexml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"vxml"
	]
},
	"application/voucher-cms+json": {
	source: "iana",
	compressible: true
},
	"application/vq-rtcpxr": {
	source: "iana"
},
	"application/wasm": {
	source: "iana",
	compressible: true,
	extensions: [
		"wasm"
	]
},
	"application/watcherinfo+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"wif"
	]
},
	"application/webpush-options+json": {
	source: "iana",
	compressible: true
},
	"application/whoispp-query": {
	source: "iana"
},
	"application/whoispp-response": {
	source: "iana"
},
	"application/widget": {
	source: "iana",
	extensions: [
		"wgt"
	]
},
	"application/winhlp": {
	source: "apache",
	extensions: [
		"hlp"
	]
},
	"application/wita": {
	source: "iana"
},
	"application/wordperfect5.1": {
	source: "iana"
},
	"application/wsdl+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"wsdl"
	]
},
	"application/wspolicy+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"wspolicy"
	]
},
	"application/x-7z-compressed": {
	source: "apache",
	compressible: false,
	extensions: [
		"7z"
	]
},
	"application/x-abiword": {
	source: "apache",
	extensions: [
		"abw"
	]
},
	"application/x-ace-compressed": {
	source: "apache",
	extensions: [
		"ace"
	]
},
	"application/x-amf": {
	source: "apache"
},
	"application/x-apple-diskimage": {
	source: "apache",
	extensions: [
		"dmg"
	]
},
	"application/x-arj": {
	compressible: false,
	extensions: [
		"arj"
	]
},
	"application/x-authorware-bin": {
	source: "apache",
	extensions: [
		"aab",
		"x32",
		"u32",
		"vox"
	]
},
	"application/x-authorware-map": {
	source: "apache",
	extensions: [
		"aam"
	]
},
	"application/x-authorware-seg": {
	source: "apache",
	extensions: [
		"aas"
	]
},
	"application/x-bcpio": {
	source: "apache",
	extensions: [
		"bcpio"
	]
},
	"application/x-bdoc": {
	compressible: false,
	extensions: [
		"bdoc"
	]
},
	"application/x-bittorrent": {
	source: "apache",
	extensions: [
		"torrent"
	]
},
	"application/x-blorb": {
	source: "apache",
	extensions: [
		"blb",
		"blorb"
	]
},
	"application/x-bzip": {
	source: "apache",
	compressible: false,
	extensions: [
		"bz"
	]
},
	"application/x-bzip2": {
	source: "apache",
	compressible: false,
	extensions: [
		"bz2",
		"boz"
	]
},
	"application/x-cbr": {
	source: "apache",
	extensions: [
		"cbr",
		"cba",
		"cbt",
		"cbz",
		"cb7"
	]
},
	"application/x-cdlink": {
	source: "apache",
	extensions: [
		"vcd"
	]
},
	"application/x-cfs-compressed": {
	source: "apache",
	extensions: [
		"cfs"
	]
},
	"application/x-chat": {
	source: "apache",
	extensions: [
		"chat"
	]
},
	"application/x-chess-pgn": {
	source: "apache",
	extensions: [
		"pgn"
	]
},
	"application/x-chrome-extension": {
	extensions: [
		"crx"
	]
},
	"application/x-cocoa": {
	source: "nginx",
	extensions: [
		"cco"
	]
},
	"application/x-compress": {
	source: "apache"
},
	"application/x-conference": {
	source: "apache",
	extensions: [
		"nsc"
	]
},
	"application/x-cpio": {
	source: "apache",
	extensions: [
		"cpio"
	]
},
	"application/x-csh": {
	source: "apache",
	extensions: [
		"csh"
	]
},
	"application/x-deb": {
	compressible: false
},
	"application/x-debian-package": {
	source: "apache",
	extensions: [
		"deb",
		"udeb"
	]
},
	"application/x-dgc-compressed": {
	source: "apache",
	extensions: [
		"dgc"
	]
},
	"application/x-director": {
	source: "apache",
	extensions: [
		"dir",
		"dcr",
		"dxr",
		"cst",
		"cct",
		"cxt",
		"w3d",
		"fgd",
		"swa"
	]
},
	"application/x-doom": {
	source: "apache",
	extensions: [
		"wad"
	]
},
	"application/x-dtbncx+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"ncx"
	]
},
	"application/x-dtbook+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"dtb"
	]
},
	"application/x-dtbresource+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"res"
	]
},
	"application/x-dvi": {
	source: "apache",
	compressible: false,
	extensions: [
		"dvi"
	]
},
	"application/x-envoy": {
	source: "apache",
	extensions: [
		"evy"
	]
},
	"application/x-eva": {
	source: "apache",
	extensions: [
		"eva"
	]
},
	"application/x-font-bdf": {
	source: "apache",
	extensions: [
		"bdf"
	]
},
	"application/x-font-dos": {
	source: "apache"
},
	"application/x-font-framemaker": {
	source: "apache"
},
	"application/x-font-ghostscript": {
	source: "apache",
	extensions: [
		"gsf"
	]
},
	"application/x-font-libgrx": {
	source: "apache"
},
	"application/x-font-linux-psf": {
	source: "apache",
	extensions: [
		"psf"
	]
},
	"application/x-font-pcf": {
	source: "apache",
	extensions: [
		"pcf"
	]
},
	"application/x-font-snf": {
	source: "apache",
	extensions: [
		"snf"
	]
},
	"application/x-font-speedo": {
	source: "apache"
},
	"application/x-font-sunos-news": {
	source: "apache"
},
	"application/x-font-type1": {
	source: "apache",
	extensions: [
		"pfa",
		"pfb",
		"pfm",
		"afm"
	]
},
	"application/x-font-vfont": {
	source: "apache"
},
	"application/x-freearc": {
	source: "apache",
	extensions: [
		"arc"
	]
},
	"application/x-futuresplash": {
	source: "apache",
	extensions: [
		"spl"
	]
},
	"application/x-gca-compressed": {
	source: "apache",
	extensions: [
		"gca"
	]
},
	"application/x-glulx": {
	source: "apache",
	extensions: [
		"ulx"
	]
},
	"application/x-gnumeric": {
	source: "apache",
	extensions: [
		"gnumeric"
	]
},
	"application/x-gramps-xml": {
	source: "apache",
	extensions: [
		"gramps"
	]
},
	"application/x-gtar": {
	source: "apache",
	extensions: [
		"gtar"
	]
},
	"application/x-gzip": {
	source: "apache"
},
	"application/x-hdf": {
	source: "apache",
	extensions: [
		"hdf"
	]
},
	"application/x-httpd-php": {
	compressible: true,
	extensions: [
		"php"
	]
},
	"application/x-install-instructions": {
	source: "apache",
	extensions: [
		"install"
	]
},
	"application/x-iso9660-image": {
	source: "apache",
	extensions: [
		"iso"
	]
},
	"application/x-iwork-keynote-sffkey": {
	extensions: [
		"key"
	]
},
	"application/x-iwork-numbers-sffnumbers": {
	extensions: [
		"numbers"
	]
},
	"application/x-iwork-pages-sffpages": {
	extensions: [
		"pages"
	]
},
	"application/x-java-archive-diff": {
	source: "nginx",
	extensions: [
		"jardiff"
	]
},
	"application/x-java-jnlp-file": {
	source: "apache",
	compressible: false,
	extensions: [
		"jnlp"
	]
},
	"application/x-javascript": {
	compressible: true
},
	"application/x-keepass2": {
	extensions: [
		"kdbx"
	]
},
	"application/x-latex": {
	source: "apache",
	compressible: false,
	extensions: [
		"latex"
	]
},
	"application/x-lua-bytecode": {
	extensions: [
		"luac"
	]
},
	"application/x-lzh-compressed": {
	source: "apache",
	extensions: [
		"lzh",
		"lha"
	]
},
	"application/x-makeself": {
	source: "nginx",
	extensions: [
		"run"
	]
},
	"application/x-mie": {
	source: "apache",
	extensions: [
		"mie"
	]
},
	"application/x-mobipocket-ebook": {
	source: "apache",
	extensions: [
		"prc",
		"mobi"
	]
},
	"application/x-mpegurl": {
	compressible: false
},
	"application/x-ms-application": {
	source: "apache",
	extensions: [
		"application"
	]
},
	"application/x-ms-shortcut": {
	source: "apache",
	extensions: [
		"lnk"
	]
},
	"application/x-ms-wmd": {
	source: "apache",
	extensions: [
		"wmd"
	]
},
	"application/x-ms-wmz": {
	source: "apache",
	extensions: [
		"wmz"
	]
},
	"application/x-ms-xbap": {
	source: "apache",
	extensions: [
		"xbap"
	]
},
	"application/x-msaccess": {
	source: "apache",
	extensions: [
		"mdb"
	]
},
	"application/x-msbinder": {
	source: "apache",
	extensions: [
		"obd"
	]
},
	"application/x-mscardfile": {
	source: "apache",
	extensions: [
		"crd"
	]
},
	"application/x-msclip": {
	source: "apache",
	extensions: [
		"clp"
	]
},
	"application/x-msdos-program": {
	extensions: [
		"exe"
	]
},
	"application/x-msdownload": {
	source: "apache",
	extensions: [
		"exe",
		"dll",
		"com",
		"bat",
		"msi"
	]
},
	"application/x-msmediaview": {
	source: "apache",
	extensions: [
		"mvb",
		"m13",
		"m14"
	]
},
	"application/x-msmetafile": {
	source: "apache",
	extensions: [
		"wmf",
		"wmz",
		"emf",
		"emz"
	]
},
	"application/x-msmoney": {
	source: "apache",
	extensions: [
		"mny"
	]
},
	"application/x-mspublisher": {
	source: "apache",
	extensions: [
		"pub"
	]
},
	"application/x-msschedule": {
	source: "apache",
	extensions: [
		"scd"
	]
},
	"application/x-msterminal": {
	source: "apache",
	extensions: [
		"trm"
	]
},
	"application/x-mswrite": {
	source: "apache",
	extensions: [
		"wri"
	]
},
	"application/x-netcdf": {
	source: "apache",
	extensions: [
		"nc",
		"cdf"
	]
},
	"application/x-ns-proxy-autoconfig": {
	compressible: true,
	extensions: [
		"pac"
	]
},
	"application/x-nzb": {
	source: "apache",
	extensions: [
		"nzb"
	]
},
	"application/x-perl": {
	source: "nginx",
	extensions: [
		"pl",
		"pm"
	]
},
	"application/x-pilot": {
	source: "nginx",
	extensions: [
		"prc",
		"pdb"
	]
},
	"application/x-pkcs12": {
	source: "apache",
	compressible: false,
	extensions: [
		"p12",
		"pfx"
	]
},
	"application/x-pkcs7-certificates": {
	source: "apache",
	extensions: [
		"p7b",
		"spc"
	]
},
	"application/x-pkcs7-certreqresp": {
	source: "apache",
	extensions: [
		"p7r"
	]
},
	"application/x-pki-message": {
	source: "iana"
},
	"application/x-rar-compressed": {
	source: "apache",
	compressible: false,
	extensions: [
		"rar"
	]
},
	"application/x-redhat-package-manager": {
	source: "nginx",
	extensions: [
		"rpm"
	]
},
	"application/x-research-info-systems": {
	source: "apache",
	extensions: [
		"ris"
	]
},
	"application/x-sea": {
	source: "nginx",
	extensions: [
		"sea"
	]
},
	"application/x-sh": {
	source: "apache",
	compressible: true,
	extensions: [
		"sh"
	]
},
	"application/x-shar": {
	source: "apache",
	extensions: [
		"shar"
	]
},
	"application/x-shockwave-flash": {
	source: "apache",
	compressible: false,
	extensions: [
		"swf"
	]
},
	"application/x-silverlight-app": {
	source: "apache",
	extensions: [
		"xap"
	]
},
	"application/x-sql": {
	source: "apache",
	extensions: [
		"sql"
	]
},
	"application/x-stuffit": {
	source: "apache",
	compressible: false,
	extensions: [
		"sit"
	]
},
	"application/x-stuffitx": {
	source: "apache",
	extensions: [
		"sitx"
	]
},
	"application/x-subrip": {
	source: "apache",
	extensions: [
		"srt"
	]
},
	"application/x-sv4cpio": {
	source: "apache",
	extensions: [
		"sv4cpio"
	]
},
	"application/x-sv4crc": {
	source: "apache",
	extensions: [
		"sv4crc"
	]
},
	"application/x-t3vm-image": {
	source: "apache",
	extensions: [
		"t3"
	]
},
	"application/x-tads": {
	source: "apache",
	extensions: [
		"gam"
	]
},
	"application/x-tar": {
	source: "apache",
	compressible: true,
	extensions: [
		"tar"
	]
},
	"application/x-tcl": {
	source: "apache",
	extensions: [
		"tcl",
		"tk"
	]
},
	"application/x-tex": {
	source: "apache",
	extensions: [
		"tex"
	]
},
	"application/x-tex-tfm": {
	source: "apache",
	extensions: [
		"tfm"
	]
},
	"application/x-texinfo": {
	source: "apache",
	extensions: [
		"texinfo",
		"texi"
	]
},
	"application/x-tgif": {
	source: "apache",
	extensions: [
		"obj"
	]
},
	"application/x-ustar": {
	source: "apache",
	extensions: [
		"ustar"
	]
},
	"application/x-virtualbox-hdd": {
	compressible: true,
	extensions: [
		"hdd"
	]
},
	"application/x-virtualbox-ova": {
	compressible: true,
	extensions: [
		"ova"
	]
},
	"application/x-virtualbox-ovf": {
	compressible: true,
	extensions: [
		"ovf"
	]
},
	"application/x-virtualbox-vbox": {
	compressible: true,
	extensions: [
		"vbox"
	]
},
	"application/x-virtualbox-vbox-extpack": {
	compressible: false,
	extensions: [
		"vbox-extpack"
	]
},
	"application/x-virtualbox-vdi": {
	compressible: true,
	extensions: [
		"vdi"
	]
},
	"application/x-virtualbox-vhd": {
	compressible: true,
	extensions: [
		"vhd"
	]
},
	"application/x-virtualbox-vmdk": {
	compressible: true,
	extensions: [
		"vmdk"
	]
},
	"application/x-wais-source": {
	source: "apache",
	extensions: [
		"src"
	]
},
	"application/x-web-app-manifest+json": {
	compressible: true,
	extensions: [
		"webapp"
	]
},
	"application/x-www-form-urlencoded": {
	source: "iana",
	compressible: true
},
	"application/x-x509-ca-cert": {
	source: "iana",
	extensions: [
		"der",
		"crt",
		"pem"
	]
},
	"application/x-x509-ca-ra-cert": {
	source: "iana"
},
	"application/x-x509-next-ca-cert": {
	source: "iana"
},
	"application/x-xfig": {
	source: "apache",
	extensions: [
		"fig"
	]
},
	"application/x-xliff+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"xlf"
	]
},
	"application/x-xpinstall": {
	source: "apache",
	compressible: false,
	extensions: [
		"xpi"
	]
},
	"application/x-xz": {
	source: "apache",
	extensions: [
		"xz"
	]
},
	"application/x-zmachine": {
	source: "apache",
	extensions: [
		"z1",
		"z2",
		"z3",
		"z4",
		"z5",
		"z6",
		"z7",
		"z8"
	]
},
	"application/x400-bp": {
	source: "iana"
},
	"application/xacml+xml": {
	source: "iana",
	compressible: true
},
	"application/xaml+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"xaml"
	]
},
	"application/xcap-att+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xav"
	]
},
	"application/xcap-caps+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xca"
	]
},
	"application/xcap-diff+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xdf"
	]
},
	"application/xcap-el+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xel"
	]
},
	"application/xcap-error+xml": {
	source: "iana",
	compressible: true
},
	"application/xcap-ns+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xns"
	]
},
	"application/xcon-conference-info+xml": {
	source: "iana",
	compressible: true
},
	"application/xcon-conference-info-diff+xml": {
	source: "iana",
	compressible: true
},
	"application/xenc+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xenc"
	]
},
	"application/xhtml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xhtml",
		"xht"
	]
},
	"application/xhtml-voice+xml": {
	source: "apache",
	compressible: true
},
	"application/xliff+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xlf"
	]
},
	"application/xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xml",
		"xsl",
		"xsd",
		"rng"
	]
},
	"application/xml-dtd": {
	source: "iana",
	compressible: true,
	extensions: [
		"dtd"
	]
},
	"application/xml-external-parsed-entity": {
	source: "iana"
},
	"application/xml-patch+xml": {
	source: "iana",
	compressible: true
},
	"application/xmpp+xml": {
	source: "iana",
	compressible: true
},
	"application/xop+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xop"
	]
},
	"application/xproc+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"xpl"
	]
},
	"application/xslt+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xsl",
		"xslt"
	]
},
	"application/xspf+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"xspf"
	]
},
	"application/xv+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"mxml",
		"xhvml",
		"xvml",
		"xvm"
	]
},
	"application/yang": {
	source: "iana",
	extensions: [
		"yang"
	]
},
	"application/yang-data+json": {
	source: "iana",
	compressible: true
},
	"application/yang-data+xml": {
	source: "iana",
	compressible: true
},
	"application/yang-patch+json": {
	source: "iana",
	compressible: true
},
	"application/yang-patch+xml": {
	source: "iana",
	compressible: true
},
	"application/yin+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"yin"
	]
},
	"application/zip": {
	source: "iana",
	compressible: false,
	extensions: [
		"zip"
	]
},
	"application/zlib": {
	source: "iana"
},
	"application/zstd": {
	source: "iana"
},
	"audio/1d-interleaved-parityfec": {
	source: "iana"
},
	"audio/32kadpcm": {
	source: "iana"
},
	"audio/3gpp": {
	source: "iana",
	compressible: false,
	extensions: [
		"3gpp"
	]
},
	"audio/3gpp2": {
	source: "iana"
},
	"audio/aac": {
	source: "iana"
},
	"audio/ac3": {
	source: "iana"
},
	"audio/adpcm": {
	source: "apache",
	extensions: [
		"adp"
	]
},
	"audio/amr": {
	source: "iana",
	extensions: [
		"amr"
	]
},
	"audio/amr-wb": {
	source: "iana"
},
	"audio/amr-wb+": {
	source: "iana"
},
	"audio/aptx": {
	source: "iana"
},
	"audio/asc": {
	source: "iana"
},
	"audio/atrac-advanced-lossless": {
	source: "iana"
},
	"audio/atrac-x": {
	source: "iana"
},
	"audio/atrac3": {
	source: "iana"
},
	"audio/basic": {
	source: "iana",
	compressible: false,
	extensions: [
		"au",
		"snd"
	]
},
	"audio/bv16": {
	source: "iana"
},
	"audio/bv32": {
	source: "iana"
},
	"audio/clearmode": {
	source: "iana"
},
	"audio/cn": {
	source: "iana"
},
	"audio/dat12": {
	source: "iana"
},
	"audio/dls": {
	source: "iana"
},
	"audio/dsr-es201108": {
	source: "iana"
},
	"audio/dsr-es202050": {
	source: "iana"
},
	"audio/dsr-es202211": {
	source: "iana"
},
	"audio/dsr-es202212": {
	source: "iana"
},
	"audio/dv": {
	source: "iana"
},
	"audio/dvi4": {
	source: "iana"
},
	"audio/eac3": {
	source: "iana"
},
	"audio/encaprtp": {
	source: "iana"
},
	"audio/evrc": {
	source: "iana"
},
	"audio/evrc-qcp": {
	source: "iana"
},
	"audio/evrc0": {
	source: "iana"
},
	"audio/evrc1": {
	source: "iana"
},
	"audio/evrcb": {
	source: "iana"
},
	"audio/evrcb0": {
	source: "iana"
},
	"audio/evrcb1": {
	source: "iana"
},
	"audio/evrcnw": {
	source: "iana"
},
	"audio/evrcnw0": {
	source: "iana"
},
	"audio/evrcnw1": {
	source: "iana"
},
	"audio/evrcwb": {
	source: "iana"
},
	"audio/evrcwb0": {
	source: "iana"
},
	"audio/evrcwb1": {
	source: "iana"
},
	"audio/evs": {
	source: "iana"
},
	"audio/flexfec": {
	source: "iana"
},
	"audio/fwdred": {
	source: "iana"
},
	"audio/g711-0": {
	source: "iana"
},
	"audio/g719": {
	source: "iana"
},
	"audio/g722": {
	source: "iana"
},
	"audio/g7221": {
	source: "iana"
},
	"audio/g723": {
	source: "iana"
},
	"audio/g726-16": {
	source: "iana"
},
	"audio/g726-24": {
	source: "iana"
},
	"audio/g726-32": {
	source: "iana"
},
	"audio/g726-40": {
	source: "iana"
},
	"audio/g728": {
	source: "iana"
},
	"audio/g729": {
	source: "iana"
},
	"audio/g7291": {
	source: "iana"
},
	"audio/g729d": {
	source: "iana"
},
	"audio/g729e": {
	source: "iana"
},
	"audio/gsm": {
	source: "iana"
},
	"audio/gsm-efr": {
	source: "iana"
},
	"audio/gsm-hr-08": {
	source: "iana"
},
	"audio/ilbc": {
	source: "iana"
},
	"audio/ip-mr_v2.5": {
	source: "iana"
},
	"audio/isac": {
	source: "apache"
},
	"audio/l16": {
	source: "iana"
},
	"audio/l20": {
	source: "iana"
},
	"audio/l24": {
	source: "iana",
	compressible: false
},
	"audio/l8": {
	source: "iana"
},
	"audio/lpc": {
	source: "iana"
},
	"audio/melp": {
	source: "iana"
},
	"audio/melp1200": {
	source: "iana"
},
	"audio/melp2400": {
	source: "iana"
},
	"audio/melp600": {
	source: "iana"
},
	"audio/mhas": {
	source: "iana"
},
	"audio/midi": {
	source: "apache",
	extensions: [
		"mid",
		"midi",
		"kar",
		"rmi"
	]
},
	"audio/mobile-xmf": {
	source: "iana",
	extensions: [
		"mxmf"
	]
},
	"audio/mp3": {
	compressible: false,
	extensions: [
		"mp3"
	]
},
	"audio/mp4": {
	source: "iana",
	compressible: false,
	extensions: [
		"m4a",
		"mp4a"
	]
},
	"audio/mp4a-latm": {
	source: "iana"
},
	"audio/mpa": {
	source: "iana"
},
	"audio/mpa-robust": {
	source: "iana"
},
	"audio/mpeg": {
	source: "iana",
	compressible: false,
	extensions: [
		"mpga",
		"mp2",
		"mp2a",
		"mp3",
		"m2a",
		"m3a"
	]
},
	"audio/mpeg4-generic": {
	source: "iana"
},
	"audio/musepack": {
	source: "apache"
},
	"audio/ogg": {
	source: "iana",
	compressible: false,
	extensions: [
		"oga",
		"ogg",
		"spx",
		"opus"
	]
},
	"audio/opus": {
	source: "iana"
},
	"audio/parityfec": {
	source: "iana"
},
	"audio/pcma": {
	source: "iana"
},
	"audio/pcma-wb": {
	source: "iana"
},
	"audio/pcmu": {
	source: "iana"
},
	"audio/pcmu-wb": {
	source: "iana"
},
	"audio/prs.sid": {
	source: "iana"
},
	"audio/qcelp": {
	source: "iana"
},
	"audio/raptorfec": {
	source: "iana"
},
	"audio/red": {
	source: "iana"
},
	"audio/rtp-enc-aescm128": {
	source: "iana"
},
	"audio/rtp-midi": {
	source: "iana"
},
	"audio/rtploopback": {
	source: "iana"
},
	"audio/rtx": {
	source: "iana"
},
	"audio/s3m": {
	source: "apache",
	extensions: [
		"s3m"
	]
},
	"audio/scip": {
	source: "iana"
},
	"audio/silk": {
	source: "apache",
	extensions: [
		"sil"
	]
},
	"audio/smv": {
	source: "iana"
},
	"audio/smv-qcp": {
	source: "iana"
},
	"audio/smv0": {
	source: "iana"
},
	"audio/sofa": {
	source: "iana"
},
	"audio/sp-midi": {
	source: "iana"
},
	"audio/speex": {
	source: "iana"
},
	"audio/t140c": {
	source: "iana"
},
	"audio/t38": {
	source: "iana"
},
	"audio/telephone-event": {
	source: "iana"
},
	"audio/tetra_acelp": {
	source: "iana"
},
	"audio/tetra_acelp_bb": {
	source: "iana"
},
	"audio/tone": {
	source: "iana"
},
	"audio/tsvcis": {
	source: "iana"
},
	"audio/uemclip": {
	source: "iana"
},
	"audio/ulpfec": {
	source: "iana"
},
	"audio/usac": {
	source: "iana"
},
	"audio/vdvi": {
	source: "iana"
},
	"audio/vmr-wb": {
	source: "iana"
},
	"audio/vnd.3gpp.iufp": {
	source: "iana"
},
	"audio/vnd.4sb": {
	source: "iana"
},
	"audio/vnd.audiokoz": {
	source: "iana"
},
	"audio/vnd.celp": {
	source: "iana"
},
	"audio/vnd.cisco.nse": {
	source: "iana"
},
	"audio/vnd.cmles.radio-events": {
	source: "iana"
},
	"audio/vnd.cns.anp1": {
	source: "iana"
},
	"audio/vnd.cns.inf1": {
	source: "iana"
},
	"audio/vnd.dece.audio": {
	source: "iana",
	extensions: [
		"uva",
		"uvva"
	]
},
	"audio/vnd.digital-winds": {
	source: "iana",
	extensions: [
		"eol"
	]
},
	"audio/vnd.dlna.adts": {
	source: "iana"
},
	"audio/vnd.dolby.heaac.1": {
	source: "iana"
},
	"audio/vnd.dolby.heaac.2": {
	source: "iana"
},
	"audio/vnd.dolby.mlp": {
	source: "iana"
},
	"audio/vnd.dolby.mps": {
	source: "iana"
},
	"audio/vnd.dolby.pl2": {
	source: "iana"
},
	"audio/vnd.dolby.pl2x": {
	source: "iana"
},
	"audio/vnd.dolby.pl2z": {
	source: "iana"
},
	"audio/vnd.dolby.pulse.1": {
	source: "iana"
},
	"audio/vnd.dra": {
	source: "iana",
	extensions: [
		"dra"
	]
},
	"audio/vnd.dts": {
	source: "iana",
	extensions: [
		"dts"
	]
},
	"audio/vnd.dts.hd": {
	source: "iana",
	extensions: [
		"dtshd"
	]
},
	"audio/vnd.dts.uhd": {
	source: "iana"
},
	"audio/vnd.dvb.file": {
	source: "iana"
},
	"audio/vnd.everad.plj": {
	source: "iana"
},
	"audio/vnd.hns.audio": {
	source: "iana"
},
	"audio/vnd.lucent.voice": {
	source: "iana",
	extensions: [
		"lvp"
	]
},
	"audio/vnd.ms-playready.media.pya": {
	source: "iana",
	extensions: [
		"pya"
	]
},
	"audio/vnd.nokia.mobile-xmf": {
	source: "iana"
},
	"audio/vnd.nortel.vbk": {
	source: "iana"
},
	"audio/vnd.nuera.ecelp4800": {
	source: "iana",
	extensions: [
		"ecelp4800"
	]
},
	"audio/vnd.nuera.ecelp7470": {
	source: "iana",
	extensions: [
		"ecelp7470"
	]
},
	"audio/vnd.nuera.ecelp9600": {
	source: "iana",
	extensions: [
		"ecelp9600"
	]
},
	"audio/vnd.octel.sbc": {
	source: "iana"
},
	"audio/vnd.presonus.multitrack": {
	source: "iana"
},
	"audio/vnd.qcelp": {
	source: "iana"
},
	"audio/vnd.rhetorex.32kadpcm": {
	source: "iana"
},
	"audio/vnd.rip": {
	source: "iana",
	extensions: [
		"rip"
	]
},
	"audio/vnd.rn-realaudio": {
	compressible: false
},
	"audio/vnd.sealedmedia.softseal.mpeg": {
	source: "iana"
},
	"audio/vnd.vmx.cvsd": {
	source: "iana"
},
	"audio/vnd.wave": {
	compressible: false
},
	"audio/vorbis": {
	source: "iana",
	compressible: false
},
	"audio/vorbis-config": {
	source: "iana"
},
	"audio/wav": {
	compressible: false,
	extensions: [
		"wav"
	]
},
	"audio/wave": {
	compressible: false,
	extensions: [
		"wav"
	]
},
	"audio/webm": {
	source: "apache",
	compressible: false,
	extensions: [
		"weba"
	]
},
	"audio/x-aac": {
	source: "apache",
	compressible: false,
	extensions: [
		"aac"
	]
},
	"audio/x-aiff": {
	source: "apache",
	extensions: [
		"aif",
		"aiff",
		"aifc"
	]
},
	"audio/x-caf": {
	source: "apache",
	compressible: false,
	extensions: [
		"caf"
	]
},
	"audio/x-flac": {
	source: "apache",
	extensions: [
		"flac"
	]
},
	"audio/x-m4a": {
	source: "nginx",
	extensions: [
		"m4a"
	]
},
	"audio/x-matroska": {
	source: "apache",
	extensions: [
		"mka"
	]
},
	"audio/x-mpegurl": {
	source: "apache",
	extensions: [
		"m3u"
	]
},
	"audio/x-ms-wax": {
	source: "apache",
	extensions: [
		"wax"
	]
},
	"audio/x-ms-wma": {
	source: "apache",
	extensions: [
		"wma"
	]
},
	"audio/x-pn-realaudio": {
	source: "apache",
	extensions: [
		"ram",
		"ra"
	]
},
	"audio/x-pn-realaudio-plugin": {
	source: "apache",
	extensions: [
		"rmp"
	]
},
	"audio/x-realaudio": {
	source: "nginx",
	extensions: [
		"ra"
	]
},
	"audio/x-tta": {
	source: "apache"
},
	"audio/x-wav": {
	source: "apache",
	extensions: [
		"wav"
	]
},
	"audio/xm": {
	source: "apache",
	extensions: [
		"xm"
	]
},
	"chemical/x-cdx": {
	source: "apache",
	extensions: [
		"cdx"
	]
},
	"chemical/x-cif": {
	source: "apache",
	extensions: [
		"cif"
	]
},
	"chemical/x-cmdf": {
	source: "apache",
	extensions: [
		"cmdf"
	]
},
	"chemical/x-cml": {
	source: "apache",
	extensions: [
		"cml"
	]
},
	"chemical/x-csml": {
	source: "apache",
	extensions: [
		"csml"
	]
},
	"chemical/x-pdb": {
	source: "apache"
},
	"chemical/x-xyz": {
	source: "apache",
	extensions: [
		"xyz"
	]
},
	"font/collection": {
	source: "iana",
	extensions: [
		"ttc"
	]
},
	"font/otf": {
	source: "iana",
	compressible: true,
	extensions: [
		"otf"
	]
},
	"font/sfnt": {
	source: "iana"
},
	"font/ttf": {
	source: "iana",
	compressible: true,
	extensions: [
		"ttf"
	]
},
	"font/woff": {
	source: "iana",
	extensions: [
		"woff"
	]
},
	"font/woff2": {
	source: "iana",
	extensions: [
		"woff2"
	]
},
	"image/aces": {
	source: "iana",
	extensions: [
		"exr"
	]
},
	"image/apng": {
	compressible: false,
	extensions: [
		"apng"
	]
},
	"image/avci": {
	source: "iana",
	extensions: [
		"avci"
	]
},
	"image/avcs": {
	source: "iana",
	extensions: [
		"avcs"
	]
},
	"image/avif": {
	source: "iana",
	compressible: false,
	extensions: [
		"avif"
	]
},
	"image/bmp": {
	source: "iana",
	compressible: true,
	extensions: [
		"bmp"
	]
},
	"image/cgm": {
	source: "iana",
	extensions: [
		"cgm"
	]
},
	"image/dicom-rle": {
	source: "iana",
	extensions: [
		"drle"
	]
},
	"image/emf": {
	source: "iana",
	extensions: [
		"emf"
	]
},
	"image/fits": {
	source: "iana",
	extensions: [
		"fits"
	]
},
	"image/g3fax": {
	source: "iana",
	extensions: [
		"g3"
	]
},
	"image/gif": {
	source: "iana",
	compressible: false,
	extensions: [
		"gif"
	]
},
	"image/heic": {
	source: "iana",
	extensions: [
		"heic"
	]
},
	"image/heic-sequence": {
	source: "iana",
	extensions: [
		"heics"
	]
},
	"image/heif": {
	source: "iana",
	extensions: [
		"heif"
	]
},
	"image/heif-sequence": {
	source: "iana",
	extensions: [
		"heifs"
	]
},
	"image/hej2k": {
	source: "iana",
	extensions: [
		"hej2"
	]
},
	"image/hsj2": {
	source: "iana",
	extensions: [
		"hsj2"
	]
},
	"image/ief": {
	source: "iana",
	extensions: [
		"ief"
	]
},
	"image/jls": {
	source: "iana",
	extensions: [
		"jls"
	]
},
	"image/jp2": {
	source: "iana",
	compressible: false,
	extensions: [
		"jp2",
		"jpg2"
	]
},
	"image/jpeg": {
	source: "iana",
	compressible: false,
	extensions: [
		"jpeg",
		"jpg",
		"jpe"
	]
},
	"image/jph": {
	source: "iana",
	extensions: [
		"jph"
	]
},
	"image/jphc": {
	source: "iana",
	extensions: [
		"jhc"
	]
},
	"image/jpm": {
	source: "iana",
	compressible: false,
	extensions: [
		"jpm"
	]
},
	"image/jpx": {
	source: "iana",
	compressible: false,
	extensions: [
		"jpx",
		"jpf"
	]
},
	"image/jxr": {
	source: "iana",
	extensions: [
		"jxr"
	]
},
	"image/jxra": {
	source: "iana",
	extensions: [
		"jxra"
	]
},
	"image/jxrs": {
	source: "iana",
	extensions: [
		"jxrs"
	]
},
	"image/jxs": {
	source: "iana",
	extensions: [
		"jxs"
	]
},
	"image/jxsc": {
	source: "iana",
	extensions: [
		"jxsc"
	]
},
	"image/jxsi": {
	source: "iana",
	extensions: [
		"jxsi"
	]
},
	"image/jxss": {
	source: "iana",
	extensions: [
		"jxss"
	]
},
	"image/ktx": {
	source: "iana",
	extensions: [
		"ktx"
	]
},
	"image/ktx2": {
	source: "iana",
	extensions: [
		"ktx2"
	]
},
	"image/naplps": {
	source: "iana"
},
	"image/pjpeg": {
	compressible: false
},
	"image/png": {
	source: "iana",
	compressible: false,
	extensions: [
		"png"
	]
},
	"image/prs.btif": {
	source: "iana",
	extensions: [
		"btif"
	]
},
	"image/prs.pti": {
	source: "iana",
	extensions: [
		"pti"
	]
},
	"image/pwg-raster": {
	source: "iana"
},
	"image/sgi": {
	source: "apache",
	extensions: [
		"sgi"
	]
},
	"image/svg+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"svg",
		"svgz"
	]
},
	"image/t38": {
	source: "iana",
	extensions: [
		"t38"
	]
},
	"image/tiff": {
	source: "iana",
	compressible: false,
	extensions: [
		"tif",
		"tiff"
	]
},
	"image/tiff-fx": {
	source: "iana",
	extensions: [
		"tfx"
	]
},
	"image/vnd.adobe.photoshop": {
	source: "iana",
	compressible: true,
	extensions: [
		"psd"
	]
},
	"image/vnd.airzip.accelerator.azv": {
	source: "iana",
	extensions: [
		"azv"
	]
},
	"image/vnd.cns.inf2": {
	source: "iana"
},
	"image/vnd.dece.graphic": {
	source: "iana",
	extensions: [
		"uvi",
		"uvvi",
		"uvg",
		"uvvg"
	]
},
	"image/vnd.djvu": {
	source: "iana",
	extensions: [
		"djvu",
		"djv"
	]
},
	"image/vnd.dvb.subtitle": {
	source: "iana",
	extensions: [
		"sub"
	]
},
	"image/vnd.dwg": {
	source: "iana",
	extensions: [
		"dwg"
	]
},
	"image/vnd.dxf": {
	source: "iana",
	extensions: [
		"dxf"
	]
},
	"image/vnd.fastbidsheet": {
	source: "iana",
	extensions: [
		"fbs"
	]
},
	"image/vnd.fpx": {
	source: "iana",
	extensions: [
		"fpx"
	]
},
	"image/vnd.fst": {
	source: "iana",
	extensions: [
		"fst"
	]
},
	"image/vnd.fujixerox.edmics-mmr": {
	source: "iana",
	extensions: [
		"mmr"
	]
},
	"image/vnd.fujixerox.edmics-rlc": {
	source: "iana",
	extensions: [
		"rlc"
	]
},
	"image/vnd.globalgraphics.pgb": {
	source: "iana"
},
	"image/vnd.microsoft.icon": {
	source: "iana",
	compressible: true,
	extensions: [
		"ico"
	]
},
	"image/vnd.mix": {
	source: "iana"
},
	"image/vnd.mozilla.apng": {
	source: "iana"
},
	"image/vnd.ms-dds": {
	compressible: true,
	extensions: [
		"dds"
	]
},
	"image/vnd.ms-modi": {
	source: "iana",
	extensions: [
		"mdi"
	]
},
	"image/vnd.ms-photo": {
	source: "apache",
	extensions: [
		"wdp"
	]
},
	"image/vnd.net-fpx": {
	source: "iana",
	extensions: [
		"npx"
	]
},
	"image/vnd.pco.b16": {
	source: "iana",
	extensions: [
		"b16"
	]
},
	"image/vnd.radiance": {
	source: "iana"
},
	"image/vnd.sealed.png": {
	source: "iana"
},
	"image/vnd.sealedmedia.softseal.gif": {
	source: "iana"
},
	"image/vnd.sealedmedia.softseal.jpg": {
	source: "iana"
},
	"image/vnd.svf": {
	source: "iana"
},
	"image/vnd.tencent.tap": {
	source: "iana",
	extensions: [
		"tap"
	]
},
	"image/vnd.valve.source.texture": {
	source: "iana",
	extensions: [
		"vtf"
	]
},
	"image/vnd.wap.wbmp": {
	source: "iana",
	extensions: [
		"wbmp"
	]
},
	"image/vnd.xiff": {
	source: "iana",
	extensions: [
		"xif"
	]
},
	"image/vnd.zbrush.pcx": {
	source: "iana",
	extensions: [
		"pcx"
	]
},
	"image/webp": {
	source: "apache",
	extensions: [
		"webp"
	]
},
	"image/wmf": {
	source: "iana",
	extensions: [
		"wmf"
	]
},
	"image/x-3ds": {
	source: "apache",
	extensions: [
		"3ds"
	]
},
	"image/x-cmu-raster": {
	source: "apache",
	extensions: [
		"ras"
	]
},
	"image/x-cmx": {
	source: "apache",
	extensions: [
		"cmx"
	]
},
	"image/x-freehand": {
	source: "apache",
	extensions: [
		"fh",
		"fhc",
		"fh4",
		"fh5",
		"fh7"
	]
},
	"image/x-icon": {
	source: "apache",
	compressible: true,
	extensions: [
		"ico"
	]
},
	"image/x-jng": {
	source: "nginx",
	extensions: [
		"jng"
	]
},
	"image/x-mrsid-image": {
	source: "apache",
	extensions: [
		"sid"
	]
},
	"image/x-ms-bmp": {
	source: "nginx",
	compressible: true,
	extensions: [
		"bmp"
	]
},
	"image/x-pcx": {
	source: "apache",
	extensions: [
		"pcx"
	]
},
	"image/x-pict": {
	source: "apache",
	extensions: [
		"pic",
		"pct"
	]
},
	"image/x-portable-anymap": {
	source: "apache",
	extensions: [
		"pnm"
	]
},
	"image/x-portable-bitmap": {
	source: "apache",
	extensions: [
		"pbm"
	]
},
	"image/x-portable-graymap": {
	source: "apache",
	extensions: [
		"pgm"
	]
},
	"image/x-portable-pixmap": {
	source: "apache",
	extensions: [
		"ppm"
	]
},
	"image/x-rgb": {
	source: "apache",
	extensions: [
		"rgb"
	]
},
	"image/x-tga": {
	source: "apache",
	extensions: [
		"tga"
	]
},
	"image/x-xbitmap": {
	source: "apache",
	extensions: [
		"xbm"
	]
},
	"image/x-xcf": {
	compressible: false
},
	"image/x-xpixmap": {
	source: "apache",
	extensions: [
		"xpm"
	]
},
	"image/x-xwindowdump": {
	source: "apache",
	extensions: [
		"xwd"
	]
},
	"message/cpim": {
	source: "iana"
},
	"message/delivery-status": {
	source: "iana"
},
	"message/disposition-notification": {
	source: "iana",
	extensions: [
		"disposition-notification"
	]
},
	"message/external-body": {
	source: "iana"
},
	"message/feedback-report": {
	source: "iana"
},
	"message/global": {
	source: "iana",
	extensions: [
		"u8msg"
	]
},
	"message/global-delivery-status": {
	source: "iana",
	extensions: [
		"u8dsn"
	]
},
	"message/global-disposition-notification": {
	source: "iana",
	extensions: [
		"u8mdn"
	]
},
	"message/global-headers": {
	source: "iana",
	extensions: [
		"u8hdr"
	]
},
	"message/http": {
	source: "iana",
	compressible: false
},
	"message/imdn+xml": {
	source: "iana",
	compressible: true
},
	"message/news": {
	source: "iana"
},
	"message/partial": {
	source: "iana",
	compressible: false
},
	"message/rfc822": {
	source: "iana",
	compressible: true,
	extensions: [
		"eml",
		"mime"
	]
},
	"message/s-http": {
	source: "iana"
},
	"message/sip": {
	source: "iana"
},
	"message/sipfrag": {
	source: "iana"
},
	"message/tracking-status": {
	source: "iana"
},
	"message/vnd.si.simp": {
	source: "iana"
},
	"message/vnd.wfa.wsc": {
	source: "iana",
	extensions: [
		"wsc"
	]
},
	"model/3mf": {
	source: "iana",
	extensions: [
		"3mf"
	]
},
	"model/e57": {
	source: "iana"
},
	"model/gltf+json": {
	source: "iana",
	compressible: true,
	extensions: [
		"gltf"
	]
},
	"model/gltf-binary": {
	source: "iana",
	compressible: true,
	extensions: [
		"glb"
	]
},
	"model/iges": {
	source: "iana",
	compressible: false,
	extensions: [
		"igs",
		"iges"
	]
},
	"model/mesh": {
	source: "iana",
	compressible: false,
	extensions: [
		"msh",
		"mesh",
		"silo"
	]
},
	"model/mtl": {
	source: "iana",
	extensions: [
		"mtl"
	]
},
	"model/obj": {
	source: "iana",
	extensions: [
		"obj"
	]
},
	"model/step": {
	source: "iana"
},
	"model/step+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"stpx"
	]
},
	"model/step+zip": {
	source: "iana",
	compressible: false,
	extensions: [
		"stpz"
	]
},
	"model/step-xml+zip": {
	source: "iana",
	compressible: false,
	extensions: [
		"stpxz"
	]
},
	"model/stl": {
	source: "iana",
	extensions: [
		"stl"
	]
},
	"model/vnd.collada+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"dae"
	]
},
	"model/vnd.dwf": {
	source: "iana",
	extensions: [
		"dwf"
	]
},
	"model/vnd.flatland.3dml": {
	source: "iana"
},
	"model/vnd.gdl": {
	source: "iana",
	extensions: [
		"gdl"
	]
},
	"model/vnd.gs-gdl": {
	source: "apache"
},
	"model/vnd.gs.gdl": {
	source: "iana"
},
	"model/vnd.gtw": {
	source: "iana",
	extensions: [
		"gtw"
	]
},
	"model/vnd.moml+xml": {
	source: "iana",
	compressible: true
},
	"model/vnd.mts": {
	source: "iana",
	extensions: [
		"mts"
	]
},
	"model/vnd.opengex": {
	source: "iana",
	extensions: [
		"ogex"
	]
},
	"model/vnd.parasolid.transmit.binary": {
	source: "iana",
	extensions: [
		"x_b"
	]
},
	"model/vnd.parasolid.transmit.text": {
	source: "iana",
	extensions: [
		"x_t"
	]
},
	"model/vnd.pytha.pyox": {
	source: "iana"
},
	"model/vnd.rosette.annotated-data-model": {
	source: "iana"
},
	"model/vnd.sap.vds": {
	source: "iana",
	extensions: [
		"vds"
	]
},
	"model/vnd.usdz+zip": {
	source: "iana",
	compressible: false,
	extensions: [
		"usdz"
	]
},
	"model/vnd.valve.source.compiled-map": {
	source: "iana",
	extensions: [
		"bsp"
	]
},
	"model/vnd.vtu": {
	source: "iana",
	extensions: [
		"vtu"
	]
},
	"model/vrml": {
	source: "iana",
	compressible: false,
	extensions: [
		"wrl",
		"vrml"
	]
},
	"model/x3d+binary": {
	source: "apache",
	compressible: false,
	extensions: [
		"x3db",
		"x3dbz"
	]
},
	"model/x3d+fastinfoset": {
	source: "iana",
	extensions: [
		"x3db"
	]
},
	"model/x3d+vrml": {
	source: "apache",
	compressible: false,
	extensions: [
		"x3dv",
		"x3dvz"
	]
},
	"model/x3d+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"x3d",
		"x3dz"
	]
},
	"model/x3d-vrml": {
	source: "iana",
	extensions: [
		"x3dv"
	]
},
	"multipart/alternative": {
	source: "iana",
	compressible: false
},
	"multipart/appledouble": {
	source: "iana"
},
	"multipart/byteranges": {
	source: "iana"
},
	"multipart/digest": {
	source: "iana"
},
	"multipart/encrypted": {
	source: "iana",
	compressible: false
},
	"multipart/form-data": {
	source: "iana",
	compressible: false
},
	"multipart/header-set": {
	source: "iana"
},
	"multipart/mixed": {
	source: "iana"
},
	"multipart/multilingual": {
	source: "iana"
},
	"multipart/parallel": {
	source: "iana"
},
	"multipart/related": {
	source: "iana",
	compressible: false
},
	"multipart/report": {
	source: "iana"
},
	"multipart/signed": {
	source: "iana",
	compressible: false
},
	"multipart/vnd.bint.med-plus": {
	source: "iana"
},
	"multipart/voice-message": {
	source: "iana"
},
	"multipart/x-mixed-replace": {
	source: "iana"
},
	"text/1d-interleaved-parityfec": {
	source: "iana"
},
	"text/cache-manifest": {
	source: "iana",
	compressible: true,
	extensions: [
		"appcache",
		"manifest"
	]
},
	"text/calendar": {
	source: "iana",
	extensions: [
		"ics",
		"ifb"
	]
},
	"text/calender": {
	compressible: true
},
	"text/cmd": {
	compressible: true
},
	"text/coffeescript": {
	extensions: [
		"coffee",
		"litcoffee"
	]
},
	"text/cql": {
	source: "iana"
},
	"text/cql-expression": {
	source: "iana"
},
	"text/cql-identifier": {
	source: "iana"
},
	"text/css": {
	source: "iana",
	charset: "UTF-8",
	compressible: true,
	extensions: [
		"css"
	]
},
	"text/csv": {
	source: "iana",
	compressible: true,
	extensions: [
		"csv"
	]
},
	"text/csv-schema": {
	source: "iana"
},
	"text/directory": {
	source: "iana"
},
	"text/dns": {
	source: "iana"
},
	"text/ecmascript": {
	source: "iana"
},
	"text/encaprtp": {
	source: "iana"
},
	"text/enriched": {
	source: "iana"
},
	"text/fhirpath": {
	source: "iana"
},
	"text/flexfec": {
	source: "iana"
},
	"text/fwdred": {
	source: "iana"
},
	"text/gff3": {
	source: "iana"
},
	"text/grammar-ref-list": {
	source: "iana"
},
	"text/html": {
	source: "iana",
	compressible: true,
	extensions: [
		"html",
		"htm",
		"shtml"
	]
},
	"text/jade": {
	extensions: [
		"jade"
	]
},
	"text/javascript": {
	source: "iana",
	compressible: true
},
	"text/jcr-cnd": {
	source: "iana"
},
	"text/jsx": {
	compressible: true,
	extensions: [
		"jsx"
	]
},
	"text/less": {
	compressible: true,
	extensions: [
		"less"
	]
},
	"text/markdown": {
	source: "iana",
	compressible: true,
	extensions: [
		"markdown",
		"md"
	]
},
	"text/mathml": {
	source: "nginx",
	extensions: [
		"mml"
	]
},
	"text/mdx": {
	compressible: true,
	extensions: [
		"mdx"
	]
},
	"text/mizar": {
	source: "iana"
},
	"text/n3": {
	source: "iana",
	charset: "UTF-8",
	compressible: true,
	extensions: [
		"n3"
	]
},
	"text/parameters": {
	source: "iana",
	charset: "UTF-8"
},
	"text/parityfec": {
	source: "iana"
},
	"text/plain": {
	source: "iana",
	compressible: true,
	extensions: [
		"txt",
		"text",
		"conf",
		"def",
		"list",
		"log",
		"in",
		"ini"
	]
},
	"text/provenance-notation": {
	source: "iana",
	charset: "UTF-8"
},
	"text/prs.fallenstein.rst": {
	source: "iana"
},
	"text/prs.lines.tag": {
	source: "iana",
	extensions: [
		"dsc"
	]
},
	"text/prs.prop.logic": {
	source: "iana"
},
	"text/raptorfec": {
	source: "iana"
},
	"text/red": {
	source: "iana"
},
	"text/rfc822-headers": {
	source: "iana"
},
	"text/richtext": {
	source: "iana",
	compressible: true,
	extensions: [
		"rtx"
	]
},
	"text/rtf": {
	source: "iana",
	compressible: true,
	extensions: [
		"rtf"
	]
},
	"text/rtp-enc-aescm128": {
	source: "iana"
},
	"text/rtploopback": {
	source: "iana"
},
	"text/rtx": {
	source: "iana"
},
	"text/sgml": {
	source: "iana",
	extensions: [
		"sgml",
		"sgm"
	]
},
	"text/shaclc": {
	source: "iana"
},
	"text/shex": {
	source: "iana",
	extensions: [
		"shex"
	]
},
	"text/slim": {
	extensions: [
		"slim",
		"slm"
	]
},
	"text/spdx": {
	source: "iana",
	extensions: [
		"spdx"
	]
},
	"text/strings": {
	source: "iana"
},
	"text/stylus": {
	extensions: [
		"stylus",
		"styl"
	]
},
	"text/t140": {
	source: "iana"
},
	"text/tab-separated-values": {
	source: "iana",
	compressible: true,
	extensions: [
		"tsv"
	]
},
	"text/troff": {
	source: "iana",
	extensions: [
		"t",
		"tr",
		"roff",
		"man",
		"me",
		"ms"
	]
},
	"text/turtle": {
	source: "iana",
	charset: "UTF-8",
	extensions: [
		"ttl"
	]
},
	"text/ulpfec": {
	source: "iana"
},
	"text/uri-list": {
	source: "iana",
	compressible: true,
	extensions: [
		"uri",
		"uris",
		"urls"
	]
},
	"text/vcard": {
	source: "iana",
	compressible: true,
	extensions: [
		"vcard"
	]
},
	"text/vnd.a": {
	source: "iana"
},
	"text/vnd.abc": {
	source: "iana"
},
	"text/vnd.ascii-art": {
	source: "iana"
},
	"text/vnd.curl": {
	source: "iana",
	extensions: [
		"curl"
	]
},
	"text/vnd.curl.dcurl": {
	source: "apache",
	extensions: [
		"dcurl"
	]
},
	"text/vnd.curl.mcurl": {
	source: "apache",
	extensions: [
		"mcurl"
	]
},
	"text/vnd.curl.scurl": {
	source: "apache",
	extensions: [
		"scurl"
	]
},
	"text/vnd.debian.copyright": {
	source: "iana",
	charset: "UTF-8"
},
	"text/vnd.dmclientscript": {
	source: "iana"
},
	"text/vnd.dvb.subtitle": {
	source: "iana",
	extensions: [
		"sub"
	]
},
	"text/vnd.esmertec.theme-descriptor": {
	source: "iana",
	charset: "UTF-8"
},
	"text/vnd.familysearch.gedcom": {
	source: "iana",
	extensions: [
		"ged"
	]
},
	"text/vnd.ficlab.flt": {
	source: "iana"
},
	"text/vnd.fly": {
	source: "iana",
	extensions: [
		"fly"
	]
},
	"text/vnd.fmi.flexstor": {
	source: "iana",
	extensions: [
		"flx"
	]
},
	"text/vnd.gml": {
	source: "iana"
},
	"text/vnd.graphviz": {
	source: "iana",
	extensions: [
		"gv"
	]
},
	"text/vnd.hans": {
	source: "iana"
},
	"text/vnd.hgl": {
	source: "iana"
},
	"text/vnd.in3d.3dml": {
	source: "iana",
	extensions: [
		"3dml"
	]
},
	"text/vnd.in3d.spot": {
	source: "iana",
	extensions: [
		"spot"
	]
},
	"text/vnd.iptc.newsml": {
	source: "iana"
},
	"text/vnd.iptc.nitf": {
	source: "iana"
},
	"text/vnd.latex-z": {
	source: "iana"
},
	"text/vnd.motorola.reflex": {
	source: "iana"
},
	"text/vnd.ms-mediapackage": {
	source: "iana"
},
	"text/vnd.net2phone.commcenter.command": {
	source: "iana"
},
	"text/vnd.radisys.msml-basic-layout": {
	source: "iana"
},
	"text/vnd.senx.warpscript": {
	source: "iana"
},
	"text/vnd.si.uricatalogue": {
	source: "iana"
},
	"text/vnd.sosi": {
	source: "iana"
},
	"text/vnd.sun.j2me.app-descriptor": {
	source: "iana",
	charset: "UTF-8",
	extensions: [
		"jad"
	]
},
	"text/vnd.trolltech.linguist": {
	source: "iana",
	charset: "UTF-8"
},
	"text/vnd.wap.si": {
	source: "iana"
},
	"text/vnd.wap.sl": {
	source: "iana"
},
	"text/vnd.wap.wml": {
	source: "iana",
	extensions: [
		"wml"
	]
},
	"text/vnd.wap.wmlscript": {
	source: "iana",
	extensions: [
		"wmls"
	]
},
	"text/vtt": {
	source: "iana",
	charset: "UTF-8",
	compressible: true,
	extensions: [
		"vtt"
	]
},
	"text/x-asm": {
	source: "apache",
	extensions: [
		"s",
		"asm"
	]
},
	"text/x-c": {
	source: "apache",
	extensions: [
		"c",
		"cc",
		"cxx",
		"cpp",
		"h",
		"hh",
		"dic"
	]
},
	"text/x-component": {
	source: "nginx",
	extensions: [
		"htc"
	]
},
	"text/x-fortran": {
	source: "apache",
	extensions: [
		"f",
		"for",
		"f77",
		"f90"
	]
},
	"text/x-gwt-rpc": {
	compressible: true
},
	"text/x-handlebars-template": {
	extensions: [
		"hbs"
	]
},
	"text/x-java-source": {
	source: "apache",
	extensions: [
		"java"
	]
},
	"text/x-jquery-tmpl": {
	compressible: true
},
	"text/x-lua": {
	extensions: [
		"lua"
	]
},
	"text/x-markdown": {
	compressible: true,
	extensions: [
		"mkd"
	]
},
	"text/x-nfo": {
	source: "apache",
	extensions: [
		"nfo"
	]
},
	"text/x-opml": {
	source: "apache",
	extensions: [
		"opml"
	]
},
	"text/x-org": {
	compressible: true,
	extensions: [
		"org"
	]
},
	"text/x-pascal": {
	source: "apache",
	extensions: [
		"p",
		"pas"
	]
},
	"text/x-processing": {
	compressible: true,
	extensions: [
		"pde"
	]
},
	"text/x-sass": {
	extensions: [
		"sass"
	]
},
	"text/x-scss": {
	extensions: [
		"scss"
	]
},
	"text/x-setext": {
	source: "apache",
	extensions: [
		"etx"
	]
},
	"text/x-sfv": {
	source: "apache",
	extensions: [
		"sfv"
	]
},
	"text/x-suse-ymp": {
	compressible: true,
	extensions: [
		"ymp"
	]
},
	"text/x-uuencode": {
	source: "apache",
	extensions: [
		"uu"
	]
},
	"text/x-vcalendar": {
	source: "apache",
	extensions: [
		"vcs"
	]
},
	"text/x-vcard": {
	source: "apache",
	extensions: [
		"vcf"
	]
},
	"text/xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xml"
	]
},
	"text/xml-external-parsed-entity": {
	source: "iana"
},
	"text/yaml": {
	compressible: true,
	extensions: [
		"yaml",
		"yml"
	]
},
	"video/1d-interleaved-parityfec": {
	source: "iana"
},
	"video/3gpp": {
	source: "iana",
	extensions: [
		"3gp",
		"3gpp"
	]
},
	"video/3gpp-tt": {
	source: "iana"
},
	"video/3gpp2": {
	source: "iana",
	extensions: [
		"3g2"
	]
},
	"video/av1": {
	source: "iana"
},
	"video/bmpeg": {
	source: "iana"
},
	"video/bt656": {
	source: "iana"
},
	"video/celb": {
	source: "iana"
},
	"video/dv": {
	source: "iana"
},
	"video/encaprtp": {
	source: "iana"
},
	"video/ffv1": {
	source: "iana"
},
	"video/flexfec": {
	source: "iana"
},
	"video/h261": {
	source: "iana",
	extensions: [
		"h261"
	]
},
	"video/h263": {
	source: "iana",
	extensions: [
		"h263"
	]
},
	"video/h263-1998": {
	source: "iana"
},
	"video/h263-2000": {
	source: "iana"
},
	"video/h264": {
	source: "iana",
	extensions: [
		"h264"
	]
},
	"video/h264-rcdo": {
	source: "iana"
},
	"video/h264-svc": {
	source: "iana"
},
	"video/h265": {
	source: "iana"
},
	"video/iso.segment": {
	source: "iana",
	extensions: [
		"m4s"
	]
},
	"video/jpeg": {
	source: "iana",
	extensions: [
		"jpgv"
	]
},
	"video/jpeg2000": {
	source: "iana"
},
	"video/jpm": {
	source: "apache",
	extensions: [
		"jpm",
		"jpgm"
	]
},
	"video/jxsv": {
	source: "iana"
},
	"video/mj2": {
	source: "iana",
	extensions: [
		"mj2",
		"mjp2"
	]
},
	"video/mp1s": {
	source: "iana"
},
	"video/mp2p": {
	source: "iana"
},
	"video/mp2t": {
	source: "iana",
	extensions: [
		"ts"
	]
},
	"video/mp4": {
	source: "iana",
	compressible: false,
	extensions: [
		"mp4",
		"mp4v",
		"mpg4"
	]
},
	"video/mp4v-es": {
	source: "iana"
},
	"video/mpeg": {
	source: "iana",
	compressible: false,
	extensions: [
		"mpeg",
		"mpg",
		"mpe",
		"m1v",
		"m2v"
	]
},
	"video/mpeg4-generic": {
	source: "iana"
},
	"video/mpv": {
	source: "iana"
},
	"video/nv": {
	source: "iana"
},
	"video/ogg": {
	source: "iana",
	compressible: false,
	extensions: [
		"ogv"
	]
},
	"video/parityfec": {
	source: "iana"
},
	"video/pointer": {
	source: "iana"
},
	"video/quicktime": {
	source: "iana",
	compressible: false,
	extensions: [
		"qt",
		"mov"
	]
},
	"video/raptorfec": {
	source: "iana"
},
	"video/raw": {
	source: "iana"
},
	"video/rtp-enc-aescm128": {
	source: "iana"
},
	"video/rtploopback": {
	source: "iana"
},
	"video/rtx": {
	source: "iana"
},
	"video/scip": {
	source: "iana"
},
	"video/smpte291": {
	source: "iana"
},
	"video/smpte292m": {
	source: "iana"
},
	"video/ulpfec": {
	source: "iana"
},
	"video/vc1": {
	source: "iana"
},
	"video/vc2": {
	source: "iana"
},
	"video/vnd.cctv": {
	source: "iana"
},
	"video/vnd.dece.hd": {
	source: "iana",
	extensions: [
		"uvh",
		"uvvh"
	]
},
	"video/vnd.dece.mobile": {
	source: "iana",
	extensions: [
		"uvm",
		"uvvm"
	]
},
	"video/vnd.dece.mp4": {
	source: "iana"
},
	"video/vnd.dece.pd": {
	source: "iana",
	extensions: [
		"uvp",
		"uvvp"
	]
},
	"video/vnd.dece.sd": {
	source: "iana",
	extensions: [
		"uvs",
		"uvvs"
	]
},
	"video/vnd.dece.video": {
	source: "iana",
	extensions: [
		"uvv",
		"uvvv"
	]
},
	"video/vnd.directv.mpeg": {
	source: "iana"
},
	"video/vnd.directv.mpeg-tts": {
	source: "iana"
},
	"video/vnd.dlna.mpeg-tts": {
	source: "iana"
},
	"video/vnd.dvb.file": {
	source: "iana",
	extensions: [
		"dvb"
	]
},
	"video/vnd.fvt": {
	source: "iana",
	extensions: [
		"fvt"
	]
},
	"video/vnd.hns.video": {
	source: "iana"
},
	"video/vnd.iptvforum.1dparityfec-1010": {
	source: "iana"
},
	"video/vnd.iptvforum.1dparityfec-2005": {
	source: "iana"
},
	"video/vnd.iptvforum.2dparityfec-1010": {
	source: "iana"
},
	"video/vnd.iptvforum.2dparityfec-2005": {
	source: "iana"
},
	"video/vnd.iptvforum.ttsavc": {
	source: "iana"
},
	"video/vnd.iptvforum.ttsmpeg2": {
	source: "iana"
},
	"video/vnd.motorola.video": {
	source: "iana"
},
	"video/vnd.motorola.videop": {
	source: "iana"
},
	"video/vnd.mpegurl": {
	source: "iana",
	extensions: [
		"mxu",
		"m4u"
	]
},
	"video/vnd.ms-playready.media.pyv": {
	source: "iana",
	extensions: [
		"pyv"
	]
},
	"video/vnd.nokia.interleaved-multimedia": {
	source: "iana"
},
	"video/vnd.nokia.mp4vr": {
	source: "iana"
},
	"video/vnd.nokia.videovoip": {
	source: "iana"
},
	"video/vnd.objectvideo": {
	source: "iana"
},
	"video/vnd.radgamettools.bink": {
	source: "iana"
},
	"video/vnd.radgamettools.smacker": {
	source: "iana"
},
	"video/vnd.sealed.mpeg1": {
	source: "iana"
},
	"video/vnd.sealed.mpeg4": {
	source: "iana"
},
	"video/vnd.sealed.swf": {
	source: "iana"
},
	"video/vnd.sealedmedia.softseal.mov": {
	source: "iana"
},
	"video/vnd.uvvu.mp4": {
	source: "iana",
	extensions: [
		"uvu",
		"uvvu"
	]
},
	"video/vnd.vivo": {
	source: "iana",
	extensions: [
		"viv"
	]
},
	"video/vnd.youtube.yt": {
	source: "iana"
},
	"video/vp8": {
	source: "iana"
},
	"video/vp9": {
	source: "iana"
},
	"video/webm": {
	source: "apache",
	compressible: false,
	extensions: [
		"webm"
	]
},
	"video/x-f4v": {
	source: "apache",
	extensions: [
		"f4v"
	]
},
	"video/x-fli": {
	source: "apache",
	extensions: [
		"fli"
	]
},
	"video/x-flv": {
	source: "apache",
	compressible: false,
	extensions: [
		"flv"
	]
},
	"video/x-m4v": {
	source: "apache",
	extensions: [
		"m4v"
	]
},
	"video/x-matroska": {
	source: "apache",
	compressible: false,
	extensions: [
		"mkv",
		"mk3d",
		"mks"
	]
},
	"video/x-mng": {
	source: "apache",
	extensions: [
		"mng"
	]
},
	"video/x-ms-asf": {
	source: "apache",
	extensions: [
		"asf",
		"asx"
	]
},
	"video/x-ms-vob": {
	source: "apache",
	extensions: [
		"vob"
	]
},
	"video/x-ms-wm": {
	source: "apache",
	extensions: [
		"wm"
	]
},
	"video/x-ms-wmv": {
	source: "apache",
	compressible: false,
	extensions: [
		"wmv"
	]
},
	"video/x-ms-wmx": {
	source: "apache",
	extensions: [
		"wmx"
	]
},
	"video/x-ms-wvx": {
	source: "apache",
	extensions: [
		"wvx"
	]
},
	"video/x-msvideo": {
	source: "apache",
	extensions: [
		"avi"
	]
},
	"video/x-sgi-movie": {
	source: "apache",
	extensions: [
		"movie"
	]
},
	"video/x-smv": {
	source: "apache",
	extensions: [
		"smv"
	]
},
	"x-conference/x-cooltalk": {
	source: "apache",
	extensions: [
		"ice"
	]
},
	"x-shader/x-fragment": {
	compressible: true
},
	"x-shader/x-vertex": {
	compressible: true
}
};

/*!
 * mime-db
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2015-2022 Douglas Christopher Wilson
 * MIT Licensed
 */
var mimeDb;
var hasRequiredMimeDb;
function requireMimeDb() {
  if (hasRequiredMimeDb) return mimeDb;
  hasRequiredMimeDb = 1;
  /**
   * Module exports.
   */

  mimeDb = require$$0;
  return mimeDb;
}

/*!
 * mime-types
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
var hasRequiredMimeTypes;
function requireMimeTypes() {
  if (hasRequiredMimeTypes) return mimeTypes;
  hasRequiredMimeTypes = 1;
  (function (exports) {

    /**
     * Module dependencies.
     * @private
     */
    var db = requireMimeDb();
    var extname = require$$0$2.extname;

    /**
     * Module variables.
     * @private
     */

    var EXTRACT_TYPE_REGEXP = /^\s*([^;\s]*)(?:;|\s|$)/;
    var TEXT_TYPE_REGEXP = /^text\//i;

    /**
     * Module exports.
     * @public
     */

    exports.charset = charset;
    exports.charsets = {
      lookup: charset
    };
    exports.contentType = contentType;
    exports.extension = extension;
    exports.extensions = Object.create(null);
    exports.lookup = lookup;
    exports.types = Object.create(null);

    // Populate the extensions/types maps
    populateMaps(exports.extensions, exports.types);

    /**
     * Get the default charset for a MIME type.
     *
     * @param {string} type
     * @return {boolean|string}
     */

    function charset(type) {
      if (!type || typeof type !== 'string') {
        return false;
      }

      // TODO: use media-typer
      var match = EXTRACT_TYPE_REGEXP.exec(type);
      var mime = match && db[match[1].toLowerCase()];
      if (mime && mime.charset) {
        return mime.charset;
      }

      // default text/* to utf-8
      if (match && TEXT_TYPE_REGEXP.test(match[1])) {
        return 'UTF-8';
      }
      return false;
    }

    /**
     * Create a full Content-Type header given a MIME type or extension.
     *
     * @param {string} str
     * @return {boolean|string}
     */

    function contentType(str) {
      // TODO: should this even be in this module?
      if (!str || typeof str !== 'string') {
        return false;
      }
      var mime = str.indexOf('/') === -1 ? exports.lookup(str) : str;
      if (!mime) {
        return false;
      }

      // TODO: use content-type or other module
      if (mime.indexOf('charset') === -1) {
        var charset = exports.charset(mime);
        if (charset) mime += '; charset=' + charset.toLowerCase();
      }
      return mime;
    }

    /**
     * Get the default extension for a MIME type.
     *
     * @param {string} type
     * @return {boolean|string}
     */

    function extension(type) {
      if (!type || typeof type !== 'string') {
        return false;
      }

      // TODO: use media-typer
      var match = EXTRACT_TYPE_REGEXP.exec(type);

      // get extensions
      var exts = match && exports.extensions[match[1].toLowerCase()];
      if (!exts || !exts.length) {
        return false;
      }
      return exts[0];
    }

    /**
     * Lookup the MIME type for a file path/extension.
     *
     * @param {string} path
     * @return {boolean|string}
     */

    function lookup(path) {
      if (!path || typeof path !== 'string') {
        return false;
      }

      // get the extension ("ext" or ".ext" or full path)
      var extension = extname('x.' + path).toLowerCase().substr(1);
      if (!extension) {
        return false;
      }
      return exports.types[extension] || false;
    }

    /**
     * Populate the extensions and types maps.
     * @private
     */

    function populateMaps(extensions, types) {
      // source preference (least -> most)
      var preference = ['nginx', 'apache', undefined, 'iana'];
      Object.keys(db).forEach(function forEachMimeType(type) {
        var mime = db[type];
        var exts = mime.extensions;
        if (!exts || !exts.length) {
          return;
        }

        // mime -> extensions
        extensions[type] = exts;

        // extension -> mime
        for (var i = 0; i < exts.length; i++) {
          var extension = exts[i];
          if (types[extension]) {
            var from = preference.indexOf(db[types[extension]].source);
            var to = preference.indexOf(mime.source);
            if (types[extension] !== 'application/octet-stream' && (from > to || from === to && types[extension].substr(0, 12) === 'application/')) {
              // skip the remapping
              continue;
            }
          }

          // set the extension -> mime
          types[extension] = type;
        }
      });
    }
  })(mimeTypes);
  return mimeTypes;
}

var defer_1;
var hasRequiredDefer;
function requireDefer() {
  if (hasRequiredDefer) return defer_1;
  hasRequiredDefer = 1;
  defer_1 = defer;

  /**
   * Runs provided function on next iteration of the event loop
   *
   * @param {function} fn - function to run
   */
  function defer(fn) {
    var nextTick = typeof setImmediate == 'function' ? setImmediate : (typeof process === "undefined" ? "undefined" : _typeof(process)) == 'object' && typeof process.nextTick == 'function' ? process.nextTick : null;
    if (nextTick) {
      nextTick(fn);
    } else {
      setTimeout(fn, 0);
    }
  }
  return defer_1;
}

var async_1;
var hasRequiredAsync;
function requireAsync() {
  if (hasRequiredAsync) return async_1;
  hasRequiredAsync = 1;
  var defer = requireDefer();

  // API
  async_1 = async;

  /**
   * Runs provided callback asynchronously
   * even if callback itself is not
   *
   * @param   {function} callback - callback to invoke
   * @returns {function} - augmented callback
   */
  function async(callback) {
    var isAsync = false;

    // check if async happened
    defer(function () {
      isAsync = true;
    });
    return function async_callback(err, result) {
      if (isAsync) {
        callback(err, result);
      } else {
        defer(function nextTick_callback() {
          callback(err, result);
        });
      }
    };
  }
  return async_1;
}

var abort_1;
var hasRequiredAbort;
function requireAbort() {
  if (hasRequiredAbort) return abort_1;
  hasRequiredAbort = 1;
  // API
  abort_1 = abort;

  /**
   * Aborts leftover active jobs
   *
   * @param {object} state - current state object
   */
  function abort(state) {
    Object.keys(state.jobs).forEach(clean.bind(state));

    // reset leftover jobs
    state.jobs = {};
  }

  /**
   * Cleans up leftover job by invoking abort function for the provided job id
   *
   * @this  state
   * @param {string|number} key - job id to abort
   */
  function clean(key) {
    if (typeof this.jobs[key] == 'function') {
      this.jobs[key]();
    }
  }
  return abort_1;
}

var iterate_1;
var hasRequiredIterate;
function requireIterate() {
  if (hasRequiredIterate) return iterate_1;
  hasRequiredIterate = 1;
  var async = requireAsync(),
    abort = requireAbort();

  // API
  iterate_1 = iterate;

  /**
   * Iterates over each job object
   *
   * @param {array|object} list - array or object (named list) to iterate over
   * @param {function} iterator - iterator to run
   * @param {object} state - current job status
   * @param {function} callback - invoked when all elements processed
   */
  function iterate(list, iterator, state, callback) {
    // store current index
    var key = state['keyedList'] ? state['keyedList'][state.index] : state.index;
    state.jobs[key] = runJob(iterator, key, list[key], function (error, output) {
      // don't repeat yourself
      // skip secondary callbacks
      if (!(key in state.jobs)) {
        return;
      }

      // clean up jobs
      delete state.jobs[key];
      if (error) {
        // don't process rest of the results
        // stop still active jobs
        // and reset the list
        abort(state);
      } else {
        state.results[key] = output;
      }

      // return salvaged results
      callback(error, state.results);
    });
  }

  /**
   * Runs iterator over provided job element
   *
   * @param   {function} iterator - iterator to invoke
   * @param   {string|number} key - key/index of the element in the list of jobs
   * @param   {mixed} item - job description
   * @param   {function} callback - invoked after iterator is done with the job
   * @returns {function|mixed} - job abort function or something else
   */
  function runJob(iterator, key, item, callback) {
    var aborter;

    // allow shortcut if iterator expects only two arguments
    if (iterator.length == 2) {
      aborter = iterator(item, async(callback));
    }
    // otherwise go with full three arguments
    else {
      aborter = iterator(item, key, async(callback));
    }
    return aborter;
  }
  return iterate_1;
}

var state_1;
var hasRequiredState;
function requireState() {
  if (hasRequiredState) return state_1;
  hasRequiredState = 1;
  // API
  state_1 = state;

  /**
   * Creates initial state object
   * for iteration over list
   *
   * @param   {array|object} list - list to iterate over
   * @param   {function|null} sortMethod - function to use for keys sort,
   *                                     or `null` to keep them as is
   * @returns {object} - initial state object
   */
  function state(list, sortMethod) {
    var isNamedList = !Array.isArray(list),
      initState = {
        index: 0,
        keyedList: isNamedList || sortMethod ? Object.keys(list) : null,
        jobs: {},
        results: isNamedList ? {} : [],
        size: isNamedList ? Object.keys(list).length : list.length
      };
    if (sortMethod) {
      // sort array keys based on it's values
      // sort object's keys just on own merit
      initState.keyedList.sort(isNamedList ? sortMethod : function (a, b) {
        return sortMethod(list[a], list[b]);
      });
    }
    return initState;
  }
  return state_1;
}

var terminator_1;
var hasRequiredTerminator;
function requireTerminator() {
  if (hasRequiredTerminator) return terminator_1;
  hasRequiredTerminator = 1;
  var abort = requireAbort(),
    async = requireAsync();

  // API
  terminator_1 = terminator;

  /**
   * Terminates jobs in the attached state context
   *
   * @this  AsyncKitState#
   * @param {function} callback - final callback to invoke after termination
   */
  function terminator(callback) {
    if (!Object.keys(this.jobs).length) {
      return;
    }

    // fast forward iteration index
    this.index = this.size;

    // abort jobs
    abort(this);

    // send back results we have so far
    async(callback)(null, this.results);
  }
  return terminator_1;
}

var parallel_1;
var hasRequiredParallel;
function requireParallel() {
  if (hasRequiredParallel) return parallel_1;
  hasRequiredParallel = 1;
  var iterate = requireIterate(),
    initState = requireState(),
    terminator = requireTerminator();

  // Public API
  parallel_1 = parallel;

  /**
   * Runs iterator over provided array elements in parallel
   *
   * @param   {array|object} list - array or object (named list) to iterate over
   * @param   {function} iterator - iterator to run
   * @param   {function} callback - invoked when all elements processed
   * @returns {function} - jobs terminator
   */
  function parallel(list, iterator, callback) {
    var state = initState(list);
    while (state.index < (state['keyedList'] || list).length) {
      iterate(list, iterator, state, function (error, result) {
        if (error) {
          callback(error, result);
          return;
        }

        // looks like it's the last one
        if (Object.keys(state.jobs).length === 0) {
          callback(null, state.results);
          return;
        }
      });
      state.index++;
    }
    return terminator.bind(state, callback);
  }
  return parallel_1;
}

var serialOrdered = {exports: {}};

var hasRequiredSerialOrdered;
function requireSerialOrdered() {
  if (hasRequiredSerialOrdered) return serialOrdered.exports;
  hasRequiredSerialOrdered = 1;
  var iterate = requireIterate(),
    initState = requireState(),
    terminator = requireTerminator();

  // Public API
  serialOrdered.exports = serialOrdered$1;
  // sorting helpers
  serialOrdered.exports.ascending = ascending;
  serialOrdered.exports.descending = descending;

  /**
   * Runs iterator over provided sorted array elements in series
   *
   * @param   {array|object} list - array or object (named list) to iterate over
   * @param   {function} iterator - iterator to run
   * @param   {function} sortMethod - custom sort function
   * @param   {function} callback - invoked when all elements processed
   * @returns {function} - jobs terminator
   */
  function serialOrdered$1(list, iterator, sortMethod, callback) {
    var state = initState(list, sortMethod);
    iterate(list, iterator, state, function iteratorHandler(error, result) {
      if (error) {
        callback(error, result);
        return;
      }
      state.index++;

      // are we there yet?
      if (state.index < (state['keyedList'] || list).length) {
        iterate(list, iterator, state, iteratorHandler);
        return;
      }

      // done here
      callback(null, state.results);
    });
    return terminator.bind(state, callback);
  }

  /*
   * -- Sort methods
   */

  /**
   * sort helper to sort array elements in ascending order
   *
   * @param   {mixed} a - an item to compare
   * @param   {mixed} b - an item to compare
   * @returns {number} - comparison result
   */
  function ascending(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  }

  /**
   * sort helper to sort array elements in descending order
   *
   * @param   {mixed} a - an item to compare
   * @param   {mixed} b - an item to compare
   * @returns {number} - comparison result
   */
  function descending(a, b) {
    return -1 * ascending(a, b);
  }
  return serialOrdered.exports;
}

var serial_1;
var hasRequiredSerial;
function requireSerial() {
  if (hasRequiredSerial) return serial_1;
  hasRequiredSerial = 1;
  var serialOrdered = requireSerialOrdered();

  // Public API
  serial_1 = serial;

  /**
   * Runs iterator over provided array elements in series
   *
   * @param   {array|object} list - array or object (named list) to iterate over
   * @param   {function} iterator - iterator to run
   * @param   {function} callback - invoked when all elements processed
   * @returns {function} - jobs terminator
   */
  function serial(list, iterator, callback) {
    return serialOrdered(list, iterator, null, callback);
  }
  return serial_1;
}

var asynckit;
var hasRequiredAsynckit;
function requireAsynckit() {
  if (hasRequiredAsynckit) return asynckit;
  hasRequiredAsynckit = 1;
  asynckit = {
    parallel: requireParallel(),
    serial: requireSerial(),
    serialOrdered: requireSerialOrdered()
  };
  return asynckit;
}

var populate;
var hasRequiredPopulate;
function requirePopulate() {
  if (hasRequiredPopulate) return populate;
  hasRequiredPopulate = 1;
  // populates missing values
  populate = function populate(dst, src) {
    Object.keys(src).forEach(function (prop) {
      dst[prop] = dst[prop] || src[prop];
    });
    return dst;
  };
  return populate;
}

var form_data;
var hasRequiredForm_data;
function requireForm_data() {
  if (hasRequiredForm_data) return form_data;
  hasRequiredForm_data = 1;
  var CombinedStream = requireCombined_stream();
  var util = require$$1$1;
  var path = require$$0$2;
  var http = require$$1$2;
  var https = require$$2;
  var parseUrl = require$$0$4.parse;
  var fs = require$$0$1;
  var Stream = require$$3$2.Stream;
  var mime = requireMimeTypes();
  var asynckit = requireAsynckit();
  var populate = requirePopulate();

  // Public API
  form_data = FormData;

  // make it a Stream
  util.inherits(FormData, CombinedStream);

  /**
   * Create readable "multipart/form-data" streams.
   * Can be used to submit forms
   * and file uploads to other web applications.
   *
   * @constructor
   * @param {Object} options - Properties to be added/overriden for FormData and CombinedStream
   */
  function FormData(options) {
    if (!(this instanceof FormData)) {
      return new FormData(options);
    }
    this._overheadLength = 0;
    this._valueLength = 0;
    this._valuesToMeasure = [];
    CombinedStream.call(this);
    options = options || {};
    for (var option in options) {
      this[option] = options[option];
    }
  }
  FormData.LINE_BREAK = '\r\n';
  FormData.DEFAULT_CONTENT_TYPE = 'application/octet-stream';
  FormData.prototype.append = function (field, value, options) {
    options = options || {};

    // allow filename as single option
    if (typeof options == 'string') {
      options = {
        filename: options
      };
    }
    var append = CombinedStream.prototype.append.bind(this);

    // all that streamy business can't handle numbers
    if (typeof value == 'number') {
      value = '' + value;
    }

    // https://github.com/felixge/node-form-data/issues/38
    if (util.isArray(value)) {
      // Please convert your array into string
      // the way web server expects it
      this._error(new Error('Arrays are not supported.'));
      return;
    }
    var header = this._multiPartHeader(field, value, options);
    var footer = this._multiPartFooter();
    append(header);
    append(value);
    append(footer);

    // pass along options.knownLength
    this._trackLength(header, value, options);
  };
  FormData.prototype._trackLength = function (header, value, options) {
    var valueLength = 0;

    // used w/ getLengthSync(), when length is known.
    // e.g. for streaming directly from a remote server,
    // w/ a known file a size, and not wanting to wait for
    // incoming file to finish to get its size.
    if (options.knownLength != null) {
      valueLength += +options.knownLength;
    } else if (Buffer.isBuffer(value)) {
      valueLength = value.length;
    } else if (typeof value === 'string') {
      valueLength = Buffer.byteLength(value);
    }
    this._valueLength += valueLength;

    // @check why add CRLF? does this account for custom/multiple CRLFs?
    this._overheadLength += Buffer.byteLength(header) + FormData.LINE_BREAK.length;

    // empty or either doesn't have path or not an http response or not a stream
    if (!value || !value.path && !(value.readable && value.hasOwnProperty('httpVersion')) && !(value instanceof Stream)) {
      return;
    }

    // no need to bother with the length
    if (!options.knownLength) {
      this._valuesToMeasure.push(value);
    }
  };
  FormData.prototype._lengthRetriever = function (value, callback) {
    if (value.hasOwnProperty('fd')) {
      // take read range into a account
      // `end` = Infinity –> read file till the end
      //
      // TODO: Looks like there is bug in Node fs.createReadStream
      // it doesn't respect `end` options without `start` options
      // Fix it when node fixes it.
      // https://github.com/joyent/node/issues/7819
      if (value.end != undefined && value.end != Infinity && value.start != undefined) {
        // when end specified
        // no need to calculate range
        // inclusive, starts with 0
        callback(null, value.end + 1 - (value.start ? value.start : 0));

        // not that fast snoopy
      } else {
        // still need to fetch file size from fs
        fs.stat(value.path, function (err, stat) {
          var fileSize;
          if (err) {
            callback(err);
            return;
          }

          // update final size based on the range options
          fileSize = stat.size - (value.start ? value.start : 0);
          callback(null, fileSize);
        });
      }

      // or http response
    } else if (value.hasOwnProperty('httpVersion')) {
      callback(null, +value.headers['content-length']);

      // or request stream http://github.com/mikeal/request
    } else if (value.hasOwnProperty('httpModule')) {
      // wait till response come back
      value.on('response', function (response) {
        value.pause();
        callback(null, +response.headers['content-length']);
      });
      value.resume();

      // something else
    } else {
      callback('Unknown stream');
    }
  };
  FormData.prototype._multiPartHeader = function (field, value, options) {
    // custom header specified (as string)?
    // it becomes responsible for boundary
    // (e.g. to handle extra CRLFs on .NET servers)
    if (typeof options.header == 'string') {
      return options.header;
    }
    var contentDisposition = this._getContentDisposition(value, options);
    var contentType = this._getContentType(value, options);
    var contents = '';
    var headers = {
      // add custom disposition as third element or keep it two elements if not
      'Content-Disposition': ['form-data', 'name="' + field + '"'].concat(contentDisposition || []),
      // if no content type. allow it to be empty array
      'Content-Type': [].concat(contentType || [])
    };

    // allow custom headers.
    if (_typeof(options.header) == 'object') {
      populate(headers, options.header);
    }
    var header;
    for (var prop in headers) {
      if (!headers.hasOwnProperty(prop)) continue;
      header = headers[prop];

      // skip nullish headers.
      if (header == null) {
        continue;
      }

      // convert all headers to arrays.
      if (!Array.isArray(header)) {
        header = [header];
      }

      // add non-empty headers.
      if (header.length) {
        contents += prop + ': ' + header.join('; ') + FormData.LINE_BREAK;
      }
    }
    return '--' + this.getBoundary() + FormData.LINE_BREAK + contents + FormData.LINE_BREAK;
  };
  FormData.prototype._getContentDisposition = function (value, options) {
    var filename, contentDisposition;
    if (typeof options.filepath === 'string') {
      // custom filepath for relative paths
      filename = path.normalize(options.filepath).replace(/\\/g, '/');
    } else if (options.filename || value.name || value.path) {
      // custom filename take precedence
      // formidable and the browser add a name property
      // fs- and request- streams have path property
      filename = path.basename(options.filename || value.name || value.path);
    } else if (value.readable && value.hasOwnProperty('httpVersion')) {
      // or try http response
      filename = path.basename(value.client._httpMessage.path || '');
    }
    if (filename) {
      contentDisposition = 'filename="' + filename + '"';
    }
    return contentDisposition;
  };
  FormData.prototype._getContentType = function (value, options) {
    // use custom content-type above all
    var contentType = options.contentType;

    // or try `name` from formidable, browser
    if (!contentType && value.name) {
      contentType = mime.lookup(value.name);
    }

    // or try `path` from fs-, request- streams
    if (!contentType && value.path) {
      contentType = mime.lookup(value.path);
    }

    // or if it's http-reponse
    if (!contentType && value.readable && value.hasOwnProperty('httpVersion')) {
      contentType = value.headers['content-type'];
    }

    // or guess it from the filepath or filename
    if (!contentType && (options.filepath || options.filename)) {
      contentType = mime.lookup(options.filepath || options.filename);
    }

    // fallback to the default content type if `value` is not simple value
    if (!contentType && _typeof(value) == 'object') {
      contentType = FormData.DEFAULT_CONTENT_TYPE;
    }
    return contentType;
  };
  FormData.prototype._multiPartFooter = function () {
    return function (next) {
      var footer = FormData.LINE_BREAK;
      var lastPart = this._streams.length === 0;
      if (lastPart) {
        footer += this._lastBoundary();
      }
      next(footer);
    }.bind(this);
  };
  FormData.prototype._lastBoundary = function () {
    return '--' + this.getBoundary() + '--' + FormData.LINE_BREAK;
  };
  FormData.prototype.getHeaders = function (userHeaders) {
    var header;
    var formHeaders = {
      'content-type': 'multipart/form-data; boundary=' + this.getBoundary()
    };
    for (header in userHeaders) {
      if (userHeaders.hasOwnProperty(header)) {
        formHeaders[header.toLowerCase()] = userHeaders[header];
      }
    }
    return formHeaders;
  };
  FormData.prototype.setBoundary = function (boundary) {
    this._boundary = boundary;
  };
  FormData.prototype.getBoundary = function () {
    if (!this._boundary) {
      this._generateBoundary();
    }
    return this._boundary;
  };
  FormData.prototype.getBuffer = function () {
    var dataBuffer = new Buffer.alloc(0);
    var boundary = this.getBoundary();

    // Create the form content. Add Line breaks to the end of data.
    for (var i = 0, len = this._streams.length; i < len; i++) {
      if (typeof this._streams[i] !== 'function') {
        // Add content to the buffer.
        if (Buffer.isBuffer(this._streams[i])) {
          dataBuffer = Buffer.concat([dataBuffer, this._streams[i]]);
        } else {
          dataBuffer = Buffer.concat([dataBuffer, Buffer.from(this._streams[i])]);
        }

        // Add break after content.
        if (typeof this._streams[i] !== 'string' || this._streams[i].substring(2, boundary.length + 2) !== boundary) {
          dataBuffer = Buffer.concat([dataBuffer, Buffer.from(FormData.LINE_BREAK)]);
        }
      }
    }

    // Add the footer and return the Buffer object.
    return Buffer.concat([dataBuffer, Buffer.from(this._lastBoundary())]);
  };
  FormData.prototype._generateBoundary = function () {
    // This generates a 50 character boundary similar to those used by Firefox.
    // They are optimized for boyer-moore parsing.
    var boundary = '--------------------------';
    for (var i = 0; i < 24; i++) {
      boundary += Math.floor(Math.random() * 10).toString(16);
    }
    this._boundary = boundary;
  };

  // Note: getLengthSync DOESN'T calculate streams length
  // As workaround one can calculate file size manually
  // and add it as knownLength option
  FormData.prototype.getLengthSync = function () {
    var knownLength = this._overheadLength + this._valueLength;

    // Don't get confused, there are 3 "internal" streams for each keyval pair
    // so it basically checks if there is any value added to the form
    if (this._streams.length) {
      knownLength += this._lastBoundary().length;
    }

    // https://github.com/form-data/form-data/issues/40
    if (!this.hasKnownLength()) {
      // Some async length retrievers are present
      // therefore synchronous length calculation is false.
      // Please use getLength(callback) to get proper length
      this._error(new Error('Cannot calculate proper length in synchronous way.'));
    }
    return knownLength;
  };

  // Public API to check if length of added values is known
  // https://github.com/form-data/form-data/issues/196
  // https://github.com/form-data/form-data/issues/262
  FormData.prototype.hasKnownLength = function () {
    var hasKnownLength = true;
    if (this._valuesToMeasure.length) {
      hasKnownLength = false;
    }
    return hasKnownLength;
  };
  FormData.prototype.getLength = function (cb) {
    var knownLength = this._overheadLength + this._valueLength;
    if (this._streams.length) {
      knownLength += this._lastBoundary().length;
    }
    if (!this._valuesToMeasure.length) {
      process.nextTick(cb.bind(this, null, knownLength));
      return;
    }
    asynckit.parallel(this._valuesToMeasure, this._lengthRetriever, function (err, values) {
      if (err) {
        cb(err);
        return;
      }
      values.forEach(function (length) {
        knownLength += length;
      });
      cb(null, knownLength);
    });
  };
  FormData.prototype.submit = function (params, cb) {
    var request,
      options,
      defaults = {
        method: 'post'
      };

    // parse provided url if it's string
    // or treat it as options object
    if (typeof params == 'string') {
      params = parseUrl(params);
      options = populate({
        port: params.port,
        path: params.pathname,
        host: params.hostname,
        protocol: params.protocol
      }, defaults);

      // use custom params
    } else {
      options = populate(params, defaults);
      // if no port provided use default one
      if (!options.port) {
        options.port = options.protocol == 'https:' ? 443 : 80;
      }
    }

    // put that good code in getHeaders to some use
    options.headers = this.getHeaders(params.headers);

    // https if specified, fallback to http in any other case
    if (options.protocol == 'https:') {
      request = https.request(options);
    } else {
      request = http.request(options);
    }

    // get content length and fire away
    this.getLength(function (err, length) {
      if (err && err !== 'Unknown stream') {
        this._error(err);
        return;
      }

      // add content length
      if (length) {
        request.setHeader('Content-Length', length);
      }
      this.pipe(request);
      if (cb) {
        var onResponse;
        var _callback = function callback(error, responce) {
          request.removeListener('error', _callback);
          request.removeListener('response', onResponse);
          return cb.call(this, error, responce);
        };
        onResponse = _callback.bind(this, null);
        request.on('error', _callback);
        request.on('response', onResponse);
      }
    }.bind(this));
    return request;
  };
  FormData.prototype._error = function (err) {
    if (!this.error) {
      this.error = err;
      this.pause();
      this.emit('error', err);
    }
  };
  FormData.prototype.toString = function () {
    return '[object FormData]';
  };
  return form_data;
}

var FormData$1;
var hasRequiredFormData;
function requireFormData() {
  if (hasRequiredFormData) return FormData$1;
  hasRequiredFormData = 1;
  // eslint-disable-next-line strict
  FormData$1 = requireForm_data();
  return FormData$1;
}

var defaults_1;
var hasRequiredDefaults;
function requireDefaults() {
  if (hasRequiredDefaults) return defaults_1;
  hasRequiredDefaults = 1;
  var utils = requireUtils();
  var normalizeHeaderName = requireNormalizeHeaderName();
  var AxiosError = requireAxiosError();
  var transitionalDefaults = requireTransitional();
  var toFormData = requireToFormData();
  var DEFAULT_CONTENT_TYPE = {
    'Content-Type': 'application/x-www-form-urlencoded'
  };
  function setContentTypeIfUnset(headers, value) {
    if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
      headers['Content-Type'] = value;
    }
  }
  function getDefaultAdapter() {
    var adapter;
    if (typeof XMLHttpRequest !== 'undefined') {
      // For browsers use XHR adapter
      adapter = requireXhr();
    } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
      // For node use HTTP adapter
      adapter = requireHttp();
    }
    return adapter;
  }
  function stringifySafely(rawValue, parser, encoder) {
    if (utils.isString(rawValue)) {
      try {
        (parser || JSON.parse)(rawValue);
        return utils.trim(rawValue);
      } catch (e) {
        if (e.name !== 'SyntaxError') {
          throw e;
        }
      }
    }
    return (0, JSON.stringify)(rawValue);
  }
  var defaults = {
    transitional: transitionalDefaults,
    adapter: getDefaultAdapter(),
    transformRequest: [function transformRequest(data, headers) {
      normalizeHeaderName(headers, 'Accept');
      normalizeHeaderName(headers, 'Content-Type');
      if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
        return data;
      }
      if (utils.isArrayBufferView(data)) {
        return data.buffer;
      }
      if (utils.isURLSearchParams(data)) {
        setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
        return data.toString();
      }
      var isObjectPayload = utils.isObject(data);
      var contentType = headers && headers['Content-Type'];
      var isFileList;
      if ((isFileList = utils.isFileList(data)) || isObjectPayload && contentType === 'multipart/form-data') {
        var _FormData = this.env && this.env.FormData;
        return toFormData(isFileList ? {
          'files[]': data
        } : data, _FormData && new _FormData());
      } else if (isObjectPayload || contentType === 'application/json') {
        setContentTypeIfUnset(headers, 'application/json');
        return stringifySafely(data);
      }
      return data;
    }],
    transformResponse: [function transformResponse(data) {
      var transitional = this.transitional || defaults.transitional;
      var silentJSONParsing = transitional && transitional.silentJSONParsing;
      var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
      var strictJSONParsing = !silentJSONParsing && this.responseType === 'json';
      if (strictJSONParsing || forcedJSONParsing && utils.isString(data) && data.length) {
        try {
          return JSON.parse(data);
        } catch (e) {
          if (strictJSONParsing) {
            if (e.name === 'SyntaxError') {
              throw AxiosError.from(e, AxiosError.ERR_BAD_RESPONSE, this, null, this.response);
            }
            throw e;
          }
        }
      }
      return data;
    }],
    /**
     * A timeout in milliseconds to abort a request. If set to 0 (default) a
     * timeout is not created.
     */
    timeout: 0,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
      FormData: requireFormData()
    },
    validateStatus: function validateStatus(status) {
      return status >= 200 && status < 300;
    },
    headers: {
      common: {
        'Accept': 'application/json, text/plain, */*'
      }
    }
  };
  utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
    defaults.headers[method] = {};
  });
  utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
    defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
  });
  defaults_1 = defaults;
  return defaults_1;
}

var transformData;
var hasRequiredTransformData;
function requireTransformData() {
  if (hasRequiredTransformData) return transformData;
  hasRequiredTransformData = 1;
  var utils = requireUtils();
  var defaults = requireDefaults();

  /**
   * Transform the data for a request or a response
   *
   * @param {Object|String} data The data to be transformed
   * @param {Array} headers The headers for the request or response
   * @param {Array|Function} fns A single function or Array of functions
   * @returns {*} The resulting transformed data
   */
  transformData = function transformData(data, headers, fns) {
    var context = this || defaults;
    /*eslint no-param-reassign:0*/
    utils.forEach(fns, function transform(fn) {
      data = fn.call(context, data, headers);
    });
    return data;
  };
  return transformData;
}

var isCancel;
var hasRequiredIsCancel;
function requireIsCancel() {
  if (hasRequiredIsCancel) return isCancel;
  hasRequiredIsCancel = 1;
  isCancel = function isCancel(value) {
    return !!(value && value.__CANCEL__);
  };
  return isCancel;
}

var dispatchRequest;
var hasRequiredDispatchRequest;
function requireDispatchRequest() {
  if (hasRequiredDispatchRequest) return dispatchRequest;
  hasRequiredDispatchRequest = 1;
  var utils = requireUtils();
  var transformData = requireTransformData();
  var isCancel = requireIsCancel();
  var defaults = requireDefaults();
  var CanceledError = requireCanceledError();

  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  function throwIfCancellationRequested(config) {
    if (config.cancelToken) {
      config.cancelToken.throwIfRequested();
    }
    if (config.signal && config.signal.aborted) {
      throw new CanceledError();
    }
  }

  /**
   * Dispatch a request to the server using the configured adapter.
   *
   * @param {object} config The config that is to be used for the request
   * @returns {Promise} The Promise to be fulfilled
   */
  dispatchRequest = function dispatchRequest(config) {
    throwIfCancellationRequested(config);

    // Ensure headers exist
    config.headers = config.headers || {};

    // Transform request data
    config.data = transformData.call(config, config.data, config.headers, config.transformRequest);

    // Flatten headers
    config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers);
    utils.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function cleanHeaderConfig(method) {
      delete config.headers[method];
    });
    var adapter = config.adapter || defaults.adapter;
    return adapter(config).then(function onAdapterResolution(response) {
      throwIfCancellationRequested(config);

      // Transform response data
      response.data = transformData.call(config, response.data, response.headers, config.transformResponse);
      return response;
    }, function onAdapterRejection(reason) {
      if (!isCancel(reason)) {
        throwIfCancellationRequested(config);

        // Transform response data
        if (reason && reason.response) {
          reason.response.data = transformData.call(config, reason.response.data, reason.response.headers, config.transformResponse);
        }
      }
      return Promise.reject(reason);
    });
  };
  return dispatchRequest;
}

var mergeConfig;
var hasRequiredMergeConfig;
function requireMergeConfig() {
  if (hasRequiredMergeConfig) return mergeConfig;
  hasRequiredMergeConfig = 1;
  var utils = requireUtils();

  /**
   * Config-specific merge-function which creates a new config-object
   * by merging two configuration objects together.
   *
   * @param {Object} config1
   * @param {Object} config2
   * @returns {Object} New object resulting from merging config2 to config1
   */
  mergeConfig = function mergeConfig(config1, config2) {
    // eslint-disable-next-line no-param-reassign
    config2 = config2 || {};
    var config = {};
    function getMergedValue(target, source) {
      if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
        return utils.merge(target, source);
      } else if (utils.isPlainObject(source)) {
        return utils.merge({}, source);
      } else if (utils.isArray(source)) {
        return source.slice();
      }
      return source;
    }

    // eslint-disable-next-line consistent-return
    function mergeDeepProperties(prop) {
      if (!utils.isUndefined(config2[prop])) {
        return getMergedValue(config1[prop], config2[prop]);
      } else if (!utils.isUndefined(config1[prop])) {
        return getMergedValue(undefined, config1[prop]);
      }
    }

    // eslint-disable-next-line consistent-return
    function valueFromConfig2(prop) {
      if (!utils.isUndefined(config2[prop])) {
        return getMergedValue(undefined, config2[prop]);
      }
    }

    // eslint-disable-next-line consistent-return
    function defaultToConfig2(prop) {
      if (!utils.isUndefined(config2[prop])) {
        return getMergedValue(undefined, config2[prop]);
      } else if (!utils.isUndefined(config1[prop])) {
        return getMergedValue(undefined, config1[prop]);
      }
    }

    // eslint-disable-next-line consistent-return
    function mergeDirectKeys(prop) {
      if (prop in config2) {
        return getMergedValue(config1[prop], config2[prop]);
      } else if (prop in config1) {
        return getMergedValue(undefined, config1[prop]);
      }
    }
    var mergeMap = {
      'url': valueFromConfig2,
      'method': valueFromConfig2,
      'data': valueFromConfig2,
      'baseURL': defaultToConfig2,
      'transformRequest': defaultToConfig2,
      'transformResponse': defaultToConfig2,
      'paramsSerializer': defaultToConfig2,
      'timeout': defaultToConfig2,
      'timeoutMessage': defaultToConfig2,
      'withCredentials': defaultToConfig2,
      'adapter': defaultToConfig2,
      'responseType': defaultToConfig2,
      'xsrfCookieName': defaultToConfig2,
      'xsrfHeaderName': defaultToConfig2,
      'onUploadProgress': defaultToConfig2,
      'onDownloadProgress': defaultToConfig2,
      'decompress': defaultToConfig2,
      'maxContentLength': defaultToConfig2,
      'maxBodyLength': defaultToConfig2,
      'beforeRedirect': defaultToConfig2,
      'transport': defaultToConfig2,
      'httpAgent': defaultToConfig2,
      'httpsAgent': defaultToConfig2,
      'cancelToken': defaultToConfig2,
      'socketPath': defaultToConfig2,
      'responseEncoding': defaultToConfig2,
      'validateStatus': mergeDirectKeys
    };
    utils.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
      var merge = mergeMap[prop] || mergeDeepProperties;
      var configValue = merge(prop);
      utils.isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);
    });
    return config;
  };
  return mergeConfig;
}

var validator;
var hasRequiredValidator;
function requireValidator() {
  if (hasRequiredValidator) return validator;
  hasRequiredValidator = 1;
  var VERSION = requireData().version;
  var AxiosError = requireAxiosError();
  var validators = {};

  // eslint-disable-next-line func-names
  ['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(function (type, i) {
    validators[type] = function validator(thing) {
      return _typeof(thing) === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
    };
  });
  var deprecatedWarnings = {};

  /**
   * Transitional option validator
   * @param {function|boolean?} validator - set to false if the transitional option has been removed
   * @param {string?} version - deprecated version / removed since version
   * @param {string?} message - some message with additional info
   * @returns {function}
   */
  validators.transitional = function transitional(validator, version, message) {
    function formatMessage(opt, desc) {
      return '[Axios v' + VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
    }

    // eslint-disable-next-line func-names
    return function (value, opt, opts) {
      if (validator === false) {
        throw new AxiosError(formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')), AxiosError.ERR_DEPRECATED);
      }
      if (version && !deprecatedWarnings[opt]) {
        deprecatedWarnings[opt] = true;
        // eslint-disable-next-line no-console
        console.warn(formatMessage(opt, ' has been deprecated since v' + version + ' and will be removed in the near future'));
      }
      return validator ? validator(value, opt, opts) : true;
    };
  };

  /**
   * Assert object's properties type
   * @param {object} options
   * @param {object} schema
   * @param {boolean?} allowUnknown
   */

  function assertOptions(options, schema, allowUnknown) {
    if (_typeof(options) !== 'object') {
      throw new AxiosError('options must be an object', AxiosError.ERR_BAD_OPTION_VALUE);
    }
    var keys = Object.keys(options);
    var i = keys.length;
    while (i-- > 0) {
      var opt = keys[i];
      var validator = schema[opt];
      if (validator) {
        var value = options[opt];
        var result = value === undefined || validator(value, opt, options);
        if (result !== true) {
          throw new AxiosError('option ' + opt + ' must be ' + result, AxiosError.ERR_BAD_OPTION_VALUE);
        }
        continue;
      }
      if (allowUnknown !== true) {
        throw new AxiosError('Unknown option ' + opt, AxiosError.ERR_BAD_OPTION);
      }
    }
  }
  validator = {
    assertOptions: assertOptions,
    validators: validators
  };
  return validator;
}

var Axios_1;
var hasRequiredAxios$2;
function requireAxios$2() {
  if (hasRequiredAxios$2) return Axios_1;
  hasRequiredAxios$2 = 1;
  var utils = requireUtils();
  var buildURL = requireBuildURL();
  var InterceptorManager = requireInterceptorManager();
  var dispatchRequest = requireDispatchRequest();
  var mergeConfig = requireMergeConfig();
  var buildFullPath = requireBuildFullPath();
  var validator = requireValidator();
  var validators = validator.validators;
  /**
   * Create a new instance of Axios
   *
   * @param {Object} instanceConfig The default config for the instance
   */
  function Axios(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new InterceptorManager(),
      response: new InterceptorManager()
    };
  }

  /**
   * Dispatch a request
   *
   * @param {Object} config The config specific for this request (merged with this.defaults)
   */
  Axios.prototype.request = function request(configOrUrl, config) {
    /*eslint no-param-reassign:0*/
    // Allow for axios('example/url'[, config]) a la fetch API
    if (typeof configOrUrl === 'string') {
      config = config || {};
      config.url = configOrUrl;
    } else {
      config = configOrUrl || {};
    }
    config = mergeConfig(this.defaults, config);

    // Set config.method
    if (config.method) {
      config.method = config.method.toLowerCase();
    } else if (this.defaults.method) {
      config.method = this.defaults.method.toLowerCase();
    } else {
      config.method = 'get';
    }
    var transitional = config.transitional;
    if (transitional !== undefined) {
      validator.assertOptions(transitional, {
        silentJSONParsing: validators.transitional(validators["boolean"]),
        forcedJSONParsing: validators.transitional(validators["boolean"]),
        clarifyTimeoutError: validators.transitional(validators["boolean"])
      }, false);
    }

    // filter out skipped interceptors
    var requestInterceptorChain = [];
    var synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
        return;
      }
      synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
      requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
    });
    var responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });
    var promise;
    if (!synchronousRequestInterceptors) {
      var chain = [dispatchRequest, undefined];
      Array.prototype.unshift.apply(chain, requestInterceptorChain);
      chain = chain.concat(responseInterceptorChain);
      promise = Promise.resolve(config);
      while (chain.length) {
        promise = promise.then(chain.shift(), chain.shift());
      }
      return promise;
    }
    var newConfig = config;
    while (requestInterceptorChain.length) {
      var onFulfilled = requestInterceptorChain.shift();
      var onRejected = requestInterceptorChain.shift();
      try {
        newConfig = onFulfilled(newConfig);
      } catch (error) {
        onRejected(error);
        break;
      }
    }
    try {
      promise = dispatchRequest(newConfig);
    } catch (error) {
      return Promise.reject(error);
    }
    while (responseInterceptorChain.length) {
      promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
    }
    return promise;
  };
  Axios.prototype.getUri = function getUri(config) {
    config = mergeConfig(this.defaults, config);
    var fullPath = buildFullPath(config.baseURL, config.url);
    return buildURL(fullPath, config.params, config.paramsSerializer);
  };

  // Provide aliases for supported request methods
  utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
    /*eslint func-names:0*/
    Axios.prototype[method] = function (url, config) {
      return this.request(mergeConfig(config || {}, {
        method: method,
        url: url,
        data: (config || {}).data
      }));
    };
  });
  utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
    /*eslint func-names:0*/

    function generateHTTPMethod(isForm) {
      return function httpMethod(url, data, config) {
        return this.request(mergeConfig(config || {}, {
          method: method,
          headers: isForm ? {
            'Content-Type': 'multipart/form-data'
          } : {},
          url: url,
          data: data
        }));
      };
    }
    Axios.prototype[method] = generateHTTPMethod();
    Axios.prototype[method + 'Form'] = generateHTTPMethod(true);
  });
  Axios_1 = Axios;
  return Axios_1;
}

var CancelToken_1;
var hasRequiredCancelToken;
function requireCancelToken() {
  if (hasRequiredCancelToken) return CancelToken_1;
  hasRequiredCancelToken = 1;
  var CanceledError = requireCanceledError();

  /**
   * A `CancelToken` is an object that can be used to request cancellation of an operation.
   *
   * @class
   * @param {Function} executor The executor function.
   */
  function CancelToken(executor) {
    if (typeof executor !== 'function') {
      throw new TypeError('executor must be a function.');
    }
    var resolvePromise;
    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });
    var token = this;

    // eslint-disable-next-line func-names
    this.promise.then(function (cancel) {
      if (!token._listeners) return;
      var i;
      var l = token._listeners.length;
      for (i = 0; i < l; i++) {
        token._listeners[i](cancel);
      }
      token._listeners = null;
    });

    // eslint-disable-next-line func-names
    this.promise.then = function (onfulfilled) {
      var _resolve;
      // eslint-disable-next-line func-names
      var promise = new Promise(function (resolve) {
        token.subscribe(resolve);
        _resolve = resolve;
      }).then(onfulfilled);
      promise.cancel = function reject() {
        token.unsubscribe(_resolve);
      };
      return promise;
    };
    executor(function cancel(message) {
      if (token.reason) {
        // Cancellation has already been requested
        return;
      }
      token.reason = new CanceledError(message);
      resolvePromise(token.reason);
    });
  }

  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  CancelToken.prototype.throwIfRequested = function throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  };

  /**
   * Subscribe to the cancel signal
   */

  CancelToken.prototype.subscribe = function subscribe(listener) {
    if (this.reason) {
      listener(this.reason);
      return;
    }
    if (this._listeners) {
      this._listeners.push(listener);
    } else {
      this._listeners = [listener];
    }
  };

  /**
   * Unsubscribe from the cancel signal
   */

  CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
    if (!this._listeners) {
      return;
    }
    var index = this._listeners.indexOf(listener);
    if (index !== -1) {
      this._listeners.splice(index, 1);
    }
  };

  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  CancelToken.source = function source() {
    var cancel;
    var token = new CancelToken(function executor(c) {
      cancel = c;
    });
    return {
      token: token,
      cancel: cancel
    };
  };
  CancelToken_1 = CancelToken;
  return CancelToken_1;
}

var spread;
var hasRequiredSpread;
function requireSpread() {
  if (hasRequiredSpread) return spread;
  hasRequiredSpread = 1;

  /**
   * Syntactic sugar for invoking a function and expanding an array for arguments.
   *
   * Common use case would be to use `Function.prototype.apply`.
   *
   *  ```js
   *  function f(x, y, z) {}
   *  var args = [1, 2, 3];
   *  f.apply(null, args);
   *  ```
   *
   * With `spread` this example can be re-written.
   *
   *  ```js
   *  spread(function(x, y, z) {})([1, 2, 3]);
   *  ```
   *
   * @param {Function} callback
   * @returns {Function}
   */
  spread = function spread(callback) {
    return function wrap(arr) {
      return callback.apply(null, arr);
    };
  };
  return spread;
}

var isAxiosError;
var hasRequiredIsAxiosError;
function requireIsAxiosError() {
  if (hasRequiredIsAxiosError) return isAxiosError;
  hasRequiredIsAxiosError = 1;
  var utils = requireUtils();

  /**
   * Determines whether the payload is an error thrown by Axios
   *
   * @param {*} payload The value to test
   * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
   */
  isAxiosError = function isAxiosError(payload) {
    return utils.isObject(payload) && payload.isAxiosError === true;
  };
  return isAxiosError;
}

var hasRequiredAxios$1;
function requireAxios$1() {
  if (hasRequiredAxios$1) return axios$1.exports;
  hasRequiredAxios$1 = 1;
  var utils = requireUtils();
  var bind = requireBind();
  var Axios = requireAxios$2();
  var mergeConfig = requireMergeConfig();
  var defaults = requireDefaults();

  /**
   * Create an instance of Axios
   *
   * @param {Object} defaultConfig The default config for the instance
   * @return {Axios} A new instance of Axios
   */
  function createInstance(defaultConfig) {
    var context = new Axios(defaultConfig);
    var instance = bind(Axios.prototype.request, context);

    // Copy axios.prototype to instance
    utils.extend(instance, Axios.prototype, context);

    // Copy context to instance
    utils.extend(instance, context);

    // Factory for creating new instances
    instance.create = function create(instanceConfig) {
      return createInstance(mergeConfig(defaultConfig, instanceConfig));
    };
    return instance;
  }

  // Create the default instance to be exported
  var axios = createInstance(defaults);

  // Expose Axios class to allow class inheritance
  axios.Axios = Axios;

  // Expose Cancel & CancelToken
  axios.CanceledError = requireCanceledError();
  axios.CancelToken = requireCancelToken();
  axios.isCancel = requireIsCancel();
  axios.VERSION = requireData().version;
  axios.toFormData = requireToFormData();

  // Expose AxiosError class
  axios.AxiosError = requireAxiosError();

  // alias for CanceledError for backward compatibility
  axios.Cancel = axios.CanceledError;

  // Expose all/spread
  axios.all = function all(promises) {
    return Promise.all(promises);
  };
  axios.spread = requireSpread();

  // Expose isAxiosError
  axios.isAxiosError = requireIsAxiosError();
  axios$1.exports = axios;

  // Allow use of default import syntax in TypeScript
  axios$1.exports["default"] = axios;
  return axios$1.exports;
}

var axios;
var hasRequiredAxios;
function requireAxios() {
  if (hasRequiredAxios) return axios;
  hasRequiredAxios = 1;
  axios = requireAxios$1();
  return axios;
}

var api_1;
var hasRequiredApi;
function requireApi() {
  if (hasRequiredApi) return api_1;
  hasRequiredApi = 1;
  var config = requireConfig();
  var axios = requireAxios();
  var path = require$$0$2;
  var fs = require$$0$1;
  var FormData = requireForm_data();
  function api_GET(_x, _x2) {
    return _api_GET.apply(this, arguments);
  }
  function _api_GET() {
    _api_GET = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(endpoint, apiKey) {
      var RF_API_URL, url, apiResponse;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            RF_API_URL = config.get("RF_API_URL");
            url = "".concat(RF_API_URL) + endpoint;
            if (commonjsGlobal.debug) {
              console.debug("making request to: ".concat(url));
            }
            _context.next = 5;
            return axios.get("".concat(url, "?api_key=").concat(apiKey));
          case 5:
            apiResponse = _context.sent;
            return _context.abrupt("return", apiResponse.data);
          case 7:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _api_GET.apply(this, arguments);
  }
  function getWorkspace(_x3, _x4) {
    return _getWorkspace.apply(this, arguments);
  }
  function _getWorkspace() {
    _getWorkspace = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(workspaceUrl, apiKey) {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", api_GET("/".concat(workspaceUrl), apiKey));
          case 1:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return _getWorkspace.apply(this, arguments);
  }
  function getProject(_x5, _x6, _x7) {
    return _getProject.apply(this, arguments);
  }
  function _getProject() {
    _getProject = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(workspaceUrl, projectUrl, apiKey) {
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", api_GET("/".concat(workspaceUrl, "/").concat(projectUrl), apiKey));
          case 1:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return _getProject.apply(this, arguments);
  }
  function getVersion(_x8, _x9, _x10, _x11) {
    return _getVersion.apply(this, arguments);
  }
  function _getVersion() {
    _getVersion = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(workspaceUrl, projectUrl, version, apiKey) {
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt("return", api_GET("/".concat(workspaceUrl, "/").concat(projectUrl, "/").concat(version), apiKey));
          case 1:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return _getVersion.apply(this, arguments);
  }
  function getFormat(_x12, _x13, _x14, _x15, _x16) {
    return _getFormat.apply(this, arguments);
  }
  function _getFormat() {
    _getFormat = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(workspaceUrl, projectUrl, version, format, apiKey) {
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            return _context5.abrupt("return", api_GET("/".concat(workspaceUrl, "/").concat(projectUrl, "/").concat(version, "/").concat(format), apiKey));
          case 1:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }));
    return _getFormat.apply(this, arguments);
  }
  function uploadImage(_x17, _x18, _x19, _x20) {
    return _uploadImage.apply(this, arguments);
  }
  function _uploadImage() {
    _uploadImage = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(filepath, projectUrl, apiKey, options) {
      var filename, formData, response;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            filename = path.basename(filepath); // console.log(filename, split)
            formData = new FormData();
            formData.append("name", filename);
            formData.append("file", fs.createReadStream(filepath));
            if (options && options.split) {
              formData.append("split", options.split);
            }
            if (options && options.batch) {
              formData.append("batch", options.batch);
            }
            _context6.prev = 6;
            _context6.next = 9;
            return axios({
              method: "POST",
              url: "".concat(config.get("RF_API_URL"), "/dataset/") + projectUrl + "/upload",
              params: {
                api_key: apiKey
              },
              data: formData,
              headers: formData.getHeaders()
            });
          case 9:
            response = _context6.sent;
            return _context6.abrupt("return", response.data);
          case 13:
            _context6.prev = 13;
            _context6.t0 = _context6["catch"](6);
            if (!_context6.t0.response) {
              _context6.next = 17;
              break;
            }
            return _context6.abrupt("return", _context6.t0.response.data);
          case 17:
            throw _context6.t0;
          case 18:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[6, 13]]);
    }));
    return _uploadImage.apply(this, arguments);
  }
  function uploadAnnotationRaw(_x21, _x22, _x23, _x24, _x25) {
    return _uploadAnnotationRaw.apply(this, arguments);
  }
  function _uploadAnnotationRaw() {
    _uploadAnnotationRaw = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(imageID, annotationName, annotationData, projectUrl, apiKey) {
      var response;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return axios({
              method: "POST",
              url: "".concat(config.get("RF_API_URL"), "/dataset/").concat(projectUrl, "/annotate/").concat(imageID),
              params: {
                api_key: apiKey,
                name: annotationName
              },
              data: annotationData,
              headers: {
                "Content-Type": "text/plain"
              }
            });
          case 3:
            response = _context7.sent;
            return _context7.abrupt("return", response.data);
          case 7:
            _context7.prev = 7;
            _context7.t0 = _context7["catch"](0);
            if (!_context7.t0.response) {
              _context7.next = 11;
              break;
            }
            return _context7.abrupt("return", _context7.t0.response.data);
          case 11:
            throw _context7.t0;
          case 12:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[0, 7]]);
    }));
    return _uploadAnnotationRaw.apply(this, arguments);
  }
  function uploadAnnotation(_x26, _x27, _x28, _x29) {
    return _uploadAnnotation.apply(this, arguments);
  }
  function _uploadAnnotation() {
    _uploadAnnotation = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(imageID, annotationFile, projectUrl, apiKey) {
      var filename, annotationData, response;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            filename = path.basename(annotationFile);
            annotationData = fs.readFileSync(annotationFile, "utf-8");
            _context8.prev = 2;
            _context8.next = 5;
            return axios({
              method: "POST",
              url: "".concat(config.get("RF_API_URL"), "/dataset/").concat(projectUrl, "/annotate/").concat(imageID),
              params: {
                api_key: apiKey,
                name: filename
              },
              data: annotationData,
              headers: {
                "Content-Type": "text/plain"
              }
            });
          case 5:
            response = _context8.sent;
            return _context8.abrupt("return", response.data);
          case 9:
            _context8.prev = 9;
            _context8.t0 = _context8["catch"](2);
            if (!_context8.t0.response) {
              _context8.next = 13;
              break;
            }
            return _context8.abrupt("return", _context8.t0.response.data);
          case 13:
            throw _context8.t0;
          case 14:
          case "end":
            return _context8.stop();
        }
      }, _callee8, null, [[2, 9]]);
    }));
    return _uploadAnnotation.apply(this, arguments);
  }
  function detectObject(_x30, _x31, _x32, _x33) {
    return _detectObject.apply(this, arguments);
  }
  function _detectObject() {
    _detectObject = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(filepath, modelUrl, apiKey, options) {
      var image, response;
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            image = fs.readFileSync(filepath, {
              encoding: "base64"
            });
            _context9.next = 3;
            return axios({
              method: "POST",
              url: "".concat(config.get("RF_OBJECT_DETECTION_URL"), "/").concat(modelUrl),
              params: _objectSpread2({
                api_key: apiKey
              }, options),
              data: image,
              headers: {
                "Content-Type": "application/x-www-form-urlencoded"
              }
            });
          case 3:
            response = _context9.sent;
            return _context9.abrupt("return", response.data);
          case 5:
          case "end":
            return _context9.stop();
        }
      }, _callee9);
    }));
    return _detectObject.apply(this, arguments);
  }
  function classify(_x34, _x35, _x36) {
    return _classify.apply(this, arguments);
  }
  function _classify() {
    _classify = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(filepath, modelUrl, apiKey) {
      var image, response;
      return _regeneratorRuntime().wrap(function _callee10$(_context10) {
        while (1) switch (_context10.prev = _context10.next) {
          case 0:
            image = fs.readFileSync(filepath, {
              encoding: "base64"
            });
            _context10.next = 3;
            return axios({
              method: "POST",
              url: "".concat(config.get("RF_CLASSIFICATION_URL"), "/").concat(modelUrl),
              params: {
                api_key: apiKey
              },
              data: image,
              headers: {
                "Content-Type": "application/x-www-form-urlencoded"
              }
            });
          case 3:
            response = _context10.sent;
            return _context10.abrupt("return", response.data);
          case 5:
          case "end":
            return _context10.stop();
        }
      }, _callee10);
    }));
    return _classify.apply(this, arguments);
  }
  function instanceSegmentation(_x37, _x38, _x39) {
    return _instanceSegmentation.apply(this, arguments);
  }
  function _instanceSegmentation() {
    _instanceSegmentation = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(filepath, modelUrl, apiKey) {
      var image, response;
      return _regeneratorRuntime().wrap(function _callee11$(_context11) {
        while (1) switch (_context11.prev = _context11.next) {
          case 0:
            image = fs.readFileSync(filepath, {
              encoding: "base64"
            });
            _context11.next = 3;
            return axios({
              method: "POST",
              url: "".concat(config.get("RF_INSTANCE_SEGMENTATION_URL"), "/").concat(modelUrl),
              params: {
                api_key: apiKey
              },
              data: image,
              headers: {
                "Content-Type": "application/x-www-form-urlencoded"
              }
            });
          case 3:
            response = _context11.sent;
            return _context11.abrupt("return", response.data);
          case 5:
          case "end":
            return _context11.stop();
        }
      }, _callee11);
    }));
    return _instanceSegmentation.apply(this, arguments);
  }
  function semanticSegmentation(_x40, _x41, _x42) {
    return _semanticSegmentation.apply(this, arguments);
  }
  function _semanticSegmentation() {
    _semanticSegmentation = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12(filepath, modelUrl, apiKey) {
      var image, response;
      return _regeneratorRuntime().wrap(function _callee12$(_context12) {
        while (1) switch (_context12.prev = _context12.next) {
          case 0:
            image = fs.readFileSync(filepath, {
              encoding: "base64"
            });
            _context12.next = 3;
            return axios({
              method: "POST",
              url: "".concat(config.get("RF_SEMANTIC_SEGMENTATION_URL"), "/").concat(modelUrl),
              params: {
                api_key: apiKey
              },
              data: image,
              headers: {
                "Content-Type": "application/x-www-form-urlencoded"
              }
            });
          case 3:
            response = _context12.sent;
            return _context12.abrupt("return", response.data);
          case 5:
          case "end":
            return _context12.stop();
        }
      }, _callee12);
    }));
    return _semanticSegmentation.apply(this, arguments);
  }
  function embedImage(_x43, _x44) {
    return _embedImage.apply(this, arguments);
  }
  function _embedImage() {
    _embedImage = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13(filepath, apiKey) {
      var image, response;
      return _regeneratorRuntime().wrap(function _callee13$(_context13) {
        while (1) switch (_context13.prev = _context13.next) {
          case 0:
            image = fs.readFileSync(filepath, {
              encoding: "base64"
            });
            _context13.next = 3;
            return axios({
              method: "POST",
              url: "".concat(config.get("RF_CLIP_URL"), "/embed_image"),
              params: {
                api_key: apiKey
              },
              data: {
                clip_version_id: "ViT-B-16",
                image: [{
                  type: "base64",
                  value: image
                }]
              },
              headers: {
                "Content-Type": "application/json"
              }
            });
          case 3:
            response = _context13.sent;
            return _context13.abrupt("return", response.data);
          case 5:
          case "end":
            return _context13.stop();
        }
      }, _callee13);
    }));
    return _embedImage.apply(this, arguments);
  }
  function embedText(_x45, _x46) {
    return _embedText.apply(this, arguments);
  }
  function _embedText() {
    _embedText = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee14(text, apiKey) {
      var response;
      return _regeneratorRuntime().wrap(function _callee14$(_context14) {
        while (1) switch (_context14.prev = _context14.next) {
          case 0:
            _context14.next = 2;
            return axios({
              method: "POST",
              url: "".concat(config.get("RF_CLIP_URL"), "/embed_text"),
              params: {
                api_key: apiKey
              },
              data: {
                clip_version_id: "ViT-B-16",
                text: text
              },
              headers: {
                "Content-Type": "application/json"
              }
            });
          case 2:
            response = _context14.sent;
            return _context14.abrupt("return", response.data);
          case 4:
          case "end":
            return _context14.stop();
        }
      }, _callee14);
    }));
    return _embedText.apply(this, arguments);
  }
  api_1 = api = {
    getWorkspace: getWorkspace,
    getProject: getProject,
    getVersion: getVersion,
    getFormat: getFormat,
    uploadImage: uploadImage,
    uploadAnnotation: uploadAnnotation,
    detectObject: detectObject,
    classify: classify,
    instanceSegmentation: instanceSegmentation,
    semanticSegmentation: semanticSegmentation,
    embedImage: embedImage,
    embedText: embedText,
    uploadAnnotationRaw: uploadAnnotationRaw
  };
  return api_1;
}

var roboflow;
var hasRequiredRoboflow;
function requireRoboflow() {
  if (hasRequiredRoboflow) return roboflow;
  hasRequiredRoboflow = 1;
  var api = requireApi();
  roboflow = api;
  return roboflow;
}

var roboflowExports = requireRoboflow();
var Roboflow = /*@__PURE__*/getDefaultExportFromCjs(roboflowExports);

var useRoboflowModel = function useRoboflowModel(publishableKey, modelConfig) {
  var _useState = reactExports.useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    model = _useState2[0],
    setModel = _useState2[1];
  reactExports.useEffect(function () {
    var roboflow = new Roboflow();
    roboflow.auth({
      publishable_key: publishableKey
    }).then(function () {
      return roboflow.load(modelConfig);
    }).then(function (loadedModel) {
      return setModel(loadedModel);
    })["catch"](function (err) {
      return console.error('Error loading Roboflow model:', err);
    });
  }, [publishableKey, modelConfig]);
  return model;
};

module.exports = useRoboflowModel;
