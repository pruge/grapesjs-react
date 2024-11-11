import Xe, { createContext as He, useState as O, useContext as Ze, useRef as be, useEffect as S, memo as k, useMemo as Ue, createElement as qe } from "react";
import { createPortal as jt } from "react-dom";
var Se = { exports: {} }, Q = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Je;
function kt() {
  if (Je)
    return Q;
  Je = 1;
  var n = Xe, t = Symbol.for("react.element"), i = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, a = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(l, d, E) {
    var v, b = {}, _ = null, h = null;
    E !== void 0 && (_ = "" + E), d.key !== void 0 && (_ = "" + d.key), d.ref !== void 0 && (h = d.ref);
    for (v in d)
      o.call(d, v) && !u.hasOwnProperty(v) && (b[v] = d[v]);
    if (l && l.defaultProps)
      for (v in d = l.defaultProps, d)
        b[v] === void 0 && (b[v] = d[v]);
    return { $$typeof: t, type: l, key: _, ref: h, props: b, _owner: a.current };
  }
  return Q.Fragment = i, Q.jsx = c, Q.jsxs = c, Q;
}
var ee = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ke;
function At() {
  return Ke || (Ke = 1, process.env.NODE_ENV !== "production" && function() {
    var n = Xe, t = Symbol.for("react.element"), i = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), l = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), W = Symbol.iterator, B = "@@iterator";
    function K(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = W && e[W] || e[B];
      return typeof r == "function" ? r : null;
    }
    var $ = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function T(e) {
      {
        for (var r = arguments.length, s = new Array(r > 1 ? r - 1 : 0), f = 1; f < r; f++)
          s[f - 1] = arguments[f];
        te("error", e, s);
      }
    }
    function te(e, r, s) {
      {
        var f = $.ReactDebugCurrentFrame, g = f.getStackAddendum();
        g !== "" && (r += "%s", s = s.concat([g]));
        var y = s.map(function(m) {
          return String(m);
        });
        y.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, y);
      }
    }
    var re = !1, G = !1, ce = !1, le = !1, z = !1, x;
    x = Symbol.for("react.module.reference");
    function ne(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === o || e === u || z || e === a || e === E || e === v || le || e === h || re || G || ce || typeof e == "object" && e !== null && (e.$$typeof === _ || e.$$typeof === b || e.$$typeof === c || e.$$typeof === l || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === x || e.getModuleId !== void 0));
    }
    function oe(e, r, s) {
      var f = e.displayName;
      if (f)
        return f;
      var g = r.displayName || r.name || "";
      return g !== "" ? s + "(" + g + ")" : s;
    }
    function X(e) {
      return e.displayName || "Context";
    }
    function I(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && T("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case o:
          return "Fragment";
        case i:
          return "Portal";
        case u:
          return "Profiler";
        case a:
          return "StrictMode";
        case E:
          return "Suspense";
        case v:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case l:
            var r = e;
            return X(r) + ".Consumer";
          case c:
            var s = e;
            return X(s._context) + ".Provider";
          case d:
            return oe(e, e.render, "ForwardRef");
          case b:
            var f = e.displayName || null;
            return f !== null ? f : I(e.type) || "Memo";
          case _: {
            var g = e, y = g._payload, m = g._init;
            try {
              return I(m(y));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var M = Object.assign, N = 0, Re, _e, Ce, Pe, Te, we, Oe;
    function xe() {
    }
    xe.__reactDisabledLog = !0;
    function nt() {
      {
        if (N === 0) {
          Re = console.log, _e = console.info, Ce = console.warn, Pe = console.error, Te = console.group, we = console.groupCollapsed, Oe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: xe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        N++;
      }
    }
    function ot() {
      {
        if (N--, N === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: M({}, e, {
              value: Re
            }),
            info: M({}, e, {
              value: _e
            }),
            warn: M({}, e, {
              value: Ce
            }),
            error: M({}, e, {
              value: Pe
            }),
            group: M({}, e, {
              value: Te
            }),
            groupCollapsed: M({}, e, {
              value: we
            }),
            groupEnd: M({}, e, {
              value: Oe
            })
          });
        }
        N < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var fe = $.ReactCurrentDispatcher, de;
    function se(e, r, s) {
      {
        if (de === void 0)
          try {
            throw Error();
          } catch (g) {
            var f = g.stack.trim().match(/\n( *(at )?)/);
            de = f && f[1] || "";
          }
        return `
` + de + e;
      }
    }
    var ve = !1, ae;
    {
      var st = typeof WeakMap == "function" ? WeakMap : Map;
      ae = new st();
    }
    function je(e, r) {
      if (!e || ve)
        return "";
      {
        var s = ae.get(e);
        if (s !== void 0)
          return s;
      }
      var f;
      ve = !0;
      var g = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var y;
      y = fe.current, fe.current = null, nt();
      try {
        if (r) {
          var m = function() {
            throw Error();
          };
          if (Object.defineProperty(m.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(m, []);
            } catch (j) {
              f = j;
            }
            Reflect.construct(e, [], m);
          } else {
            try {
              m.call();
            } catch (j) {
              f = j;
            }
            e.call(m.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (j) {
            f = j;
          }
          e();
        }
      } catch (j) {
        if (j && f && typeof j.stack == "string") {
          for (var p = j.stack.split(`
`), w = f.stack.split(`
`), R = p.length - 1, C = w.length - 1; R >= 1 && C >= 0 && p[R] !== w[C]; )
            C--;
          for (; R >= 1 && C >= 0; R--, C--)
            if (p[R] !== w[C]) {
              if (R !== 1 || C !== 1)
                do
                  if (R--, C--, C < 0 || p[R] !== w[C]) {
                    var D = `
` + p[R].replace(" at new ", " at ");
                    return e.displayName && D.includes("<anonymous>") && (D = D.replace("<anonymous>", e.displayName)), typeof e == "function" && ae.set(e, D), D;
                  }
                while (R >= 1 && C >= 0);
              break;
            }
        }
      } finally {
        ve = !1, fe.current = y, ot(), Error.prepareStackTrace = g;
      }
      var q = e ? e.displayName || e.name : "", V = q ? se(q) : "";
      return typeof e == "function" && ae.set(e, V), V;
    }
    function at(e, r, s) {
      return je(e, !1);
    }
    function it(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function ie(e, r, s) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return je(e, it(e));
      if (typeof e == "string")
        return se(e);
      switch (e) {
        case E:
          return se("Suspense");
        case v:
          return se("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return at(e.render);
          case b:
            return ie(e.type, r, s);
          case _: {
            var f = e, g = f._payload, y = f._init;
            try {
              return ie(y(g), r, s);
            } catch {
            }
          }
        }
      return "";
    }
    var H = Object.prototype.hasOwnProperty, ke = {}, Ae = $.ReactDebugCurrentFrame;
    function ue(e) {
      if (e) {
        var r = e._owner, s = ie(e.type, e._source, r ? r.type : null);
        Ae.setExtraStackFrame(s);
      } else
        Ae.setExtraStackFrame(null);
    }
    function ut(e, r, s, f, g) {
      {
        var y = Function.call.bind(H);
        for (var m in e)
          if (y(e, m)) {
            var p = void 0;
            try {
              if (typeof e[m] != "function") {
                var w = Error((f || "React class") + ": " + s + " type `" + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[m] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw w.name = "Invariant Violation", w;
              }
              p = e[m](r, m, f, s, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (R) {
              p = R;
            }
            p && !(p instanceof Error) && (ue(g), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", f || "React class", s, m, typeof p), ue(null)), p instanceof Error && !(p.message in ke) && (ke[p.message] = !0, ue(g), T("Failed %s type: %s", s, p.message), ue(null));
          }
      }
    }
    var ct = Array.isArray;
    function pe(e) {
      return ct(e);
    }
    function lt(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, s = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return s;
      }
    }
    function ft(e) {
      try {
        return Me(e), !1;
      } catch {
        return !0;
      }
    }
    function Me(e) {
      return "" + e;
    }
    function De(e) {
      if (ft(e))
        return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", lt(e)), Me(e);
    }
    var Z = $.ReactCurrentOwner, dt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Fe, Ie, me;
    me = {};
    function vt(e) {
      if (H.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function pt(e) {
      if (H.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function mt(e, r) {
      if (typeof e.ref == "string" && Z.current && r && Z.current.stateNode !== r) {
        var s = I(Z.current.type);
        me[s] || (T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', I(Z.current.type), e.ref), me[s] = !0);
      }
    }
    function gt(e, r) {
      {
        var s = function() {
          Fe || (Fe = !0, T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        s.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: s,
          configurable: !0
        });
      }
    }
    function yt(e, r) {
      {
        var s = function() {
          Ie || (Ie = !0, T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        s.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: s,
          configurable: !0
        });
      }
    }
    var ht = function(e, r, s, f, g, y, m) {
      var p = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: s,
        props: m,
        // Record the component responsible for creating this element.
        _owner: y
      };
      return p._store = {}, Object.defineProperty(p._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(p, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: f
      }), Object.defineProperty(p, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: g
      }), Object.freeze && (Object.freeze(p.props), Object.freeze(p)), p;
    };
    function Et(e, r, s, f, g) {
      {
        var y, m = {}, p = null, w = null;
        s !== void 0 && (De(s), p = "" + s), pt(r) && (De(r.key), p = "" + r.key), vt(r) && (w = r.ref, mt(r, g));
        for (y in r)
          H.call(r, y) && !dt.hasOwnProperty(y) && (m[y] = r[y]);
        if (e && e.defaultProps) {
          var R = e.defaultProps;
          for (y in R)
            m[y] === void 0 && (m[y] = R[y]);
        }
        if (p || w) {
          var C = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          p && gt(m, C), w && yt(m, C);
        }
        return ht(e, p, w, g, f, Z.current, m);
      }
    }
    var ge = $.ReactCurrentOwner, Le = $.ReactDebugCurrentFrame;
    function U(e) {
      if (e) {
        var r = e._owner, s = ie(e.type, e._source, r ? r.type : null);
        Le.setExtraStackFrame(s);
      } else
        Le.setExtraStackFrame(null);
    }
    var ye;
    ye = !1;
    function he(e) {
      return typeof e == "object" && e !== null && e.$$typeof === t;
    }
    function We() {
      {
        if (ge.current) {
          var e = I(ge.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function St(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), s = e.lineNumber;
          return `

Check your code at ` + r + ":" + s + ".";
        }
        return "";
      }
    }
    var $e = {};
    function bt(e) {
      {
        var r = We();
        if (!r) {
          var s = typeof e == "string" ? e : e.displayName || e.name;
          s && (r = `

Check the top-level render call using <` + s + ">.");
        }
        return r;
      }
    }
    function Ye(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var s = bt(r);
        if ($e[s])
          return;
        $e[s] = !0;
        var f = "";
        e && e._owner && e._owner !== ge.current && (f = " It was passed a child from " + I(e._owner.type) + "."), U(e), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', s, f), U(null);
      }
    }
    function Be(e, r) {
      {
        if (typeof e != "object")
          return;
        if (pe(e))
          for (var s = 0; s < e.length; s++) {
            var f = e[s];
            he(f) && Ye(f, r);
          }
        else if (he(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var g = K(e);
          if (typeof g == "function" && g !== e.entries)
            for (var y = g.call(e), m; !(m = y.next()).done; )
              he(m.value) && Ye(m.value, r);
        }
      }
    }
    function Rt(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var s;
        if (typeof r == "function")
          s = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === b))
          s = r.propTypes;
        else
          return;
        if (s) {
          var f = I(r);
          ut(s, e.props, "prop", f, e);
        } else if (r.PropTypes !== void 0 && !ye) {
          ye = !0;
          var g = I(r);
          T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", g || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function _t(e) {
      {
        for (var r = Object.keys(e.props), s = 0; s < r.length; s++) {
          var f = r[s];
          if (f !== "children" && f !== "key") {
            U(e), T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", f), U(null);
            break;
          }
        }
        e.ref !== null && (U(e), T("Invalid attribute `ref` supplied to `React.Fragment`."), U(null));
      }
    }
    var Ne = {};
    function Ve(e, r, s, f, g, y) {
      {
        var m = ne(e);
        if (!m) {
          var p = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (p += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var w = St(g);
          w ? p += w : p += We();
          var R;
          e === null ? R = "null" : pe(e) ? R = "array" : e !== void 0 && e.$$typeof === t ? (R = "<" + (I(e.type) || "Unknown") + " />", p = " Did you accidentally export a JSX literal instead of a component?") : R = typeof e, T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", R, p);
        }
        var C = Et(e, r, s, g, y);
        if (C == null)
          return C;
        if (m) {
          var D = r.children;
          if (D !== void 0)
            if (f)
              if (pe(D)) {
                for (var q = 0; q < D.length; q++)
                  Be(D[q], e);
                Object.freeze && Object.freeze(D);
              } else
                T("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Be(D, e);
        }
        if (H.call(r, "key")) {
          var V = I(e), j = Object.keys(r).filter(function(xt) {
            return xt !== "key";
          }), Ee = j.length > 0 ? "{key: someKey, " + j.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ne[V + Ee]) {
            var Ot = j.length > 0 ? "{" + j.join(": ..., ") + ": ...}" : "{}";
            T(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ee, V, Ot, V), Ne[V + Ee] = !0;
          }
        }
        return e === o ? _t(C) : Rt(C), C;
      }
    }
    function Ct(e, r, s) {
      return Ve(e, r, s, !0);
    }
    function Pt(e, r, s) {
      return Ve(e, r, s, !1);
    }
    var Tt = Pt, wt = Ct;
    ee.Fragment = o, ee.jsx = Tt, ee.jsxs = wt;
  }()), ee;
}
process.env.NODE_ENV === "production" ? Se.exports = kt() : Se.exports = At();
var P = Se.exports;
const Qe = He(null), Mt = ({ children: n }) => {
  const [t, i] = O({
    setEditor: (o) => {
      i((a) => ({ ...a, editor: o }));
    }
  });
  return /* @__PURE__ */ P.jsx(Qe.Provider, { value: t, children: n });
}, A = () => {
  const n = Ze(Qe);
  if (!n)
    throw new Error("useEditorInstance must be used within EditorInstanceProvider");
  return n;
}, Jt = () => {
  const { editor: n } = A();
  if (!n)
    throw new Error("useEditor used before the load of the editor instance. You can wrap your component in `<WithEditor>` or make use of `useEditorMaybe` hook and ensure the `editor` exists.");
  return n;
}, Dt = () => A().editor, et = He(null), Ft = ({ children: n }) => {
  const [t, i] = O(() => ({
    setRefCanvas(o) {
      i((a) => ({ ...a, refCanvas: o }));
    },
    setCustomModal(o) {
      i((a) => ({ ...a, customModal: o }));
    },
    setCustomAssets(o) {
      i((a) => ({ ...a, customAssets: o }));
    },
    setCustomBlocks(o) {
      i((a) => ({ ...a, customBlocks: o }));
    },
    setCustomRte(o) {
      i((a) => ({ ...a, customRte: o }));
    },
    setCustomStyles(o) {
      i((a) => ({ ...a, customStyles: o }));
    },
    setCustomLayers(o) {
      i((a) => ({ ...a, customLayers: o }));
    },
    setCustomSelectors(o) {
      i((a) => ({ ...a, customSelectors: o }));
    },
    setCustomTraits(o) {
      i((a) => ({ ...a, customTraits: o }));
    },
    setReady(o) {
      i((a) => ({ ...a, ready: o }));
    }
  }));
  return /* @__PURE__ */ P.jsx(et.Provider, { value: t, children: n });
}, L = () => {
  const n = Ze(et);
  if (!n)
    throw new Error("useEditorOptions must be used within EditorOptionsProvider");
  return n;
};
function It(...n) {
  return (Array.isArray(n[0]) ? n[0] : [...n]).filter(Boolean).join(" ");
}
function Y(n) {
  return typeof n == "function";
}
function F() {
}
const tt = (n) => typeof n == "string", Lt = async (n) => {
  const t = document.createElement("link");
  t.href = n, t.rel = "stylesheet", document.head.appendChild(t);
}, rt = (n) => {
  const t = tt(n) ? { id: n, src: n } : n;
  return new Promise((i, o) => {
    const a = document.createElement("script");
    if (document.querySelector(`script[src="${t.src}"]`))
      return i(t.id);
    a.src = t.src, a.onload = () => i(t.id), a.onerror = () => o(t.id), document.head.appendChild(a);
  });
}, Wt = (n) => {
  const t = n.map((i) => rt(i));
  return Promise.allSettled(t);
}, Ge = (n) => function() {
  const i = be(null);
  return S(() => {
    const { current: o } = i;
    o && (tt(n) ? o.innerHTML = n : o.appendChild(n));
  }, [i.current]), /* @__PURE__ */ P.jsx("div", { ref: i, className: "flex w-full", style: { height: "96%" } });
}, ze = /* @__PURE__ */ new WeakMap();
function J(n) {
  if (!n)
    return () => null;
  const t = ze.get(n);
  if (t)
    return t;
  const i = function({ children: a }) {
    return jt(a, n);
  };
  return ze.set(n, i), i;
}
const Kt = k(function({ children: n }) {
  const { editor: t } = A(), i = L(), [o, a] = O(!1), [u, c] = O({
    assets: [],
    types: [],
    close: () => {
    },
    select: () => {
    },
    Container: () => null
  });
  return S(() => {
    if (!t)
      return;
    const { Assets: l } = t, d = t.Assets.events.custom, E = ({ open: v, assets: b, types: _, select: h, close: W, container: B }) => {
      v && c({
        assets: b,
        types: _,
        select: h,
        close: W,
        Container: J(B)
      }), a(v);
    };
    return t.on(d, E), l.__trgCustom(), () => {
      t.off(d, E);
    };
  }, [t]), S(() => i.setCustomAssets(!0), []), t && Y(n) ? n({ open: o, ...u }) : null;
}), Gt = k(function({ children: n }) {
  const { editor: t } = A(), i = L(), [o, a] = O(() => ({
    blocks: [],
    dragStart: F,
    dragStop: F,
    mapCategoryBlocks: /* @__PURE__ */ new Map(),
    Container: () => null
  }));
  return S(() => {
    if (!t)
      return;
    const u = t.Blocks.events.custom, c = ({ blocks: l, container: d, dragStart: E, dragStop: v }) => {
      const b = l.reduce((_, h) => {
        const W = h.getCategoryLabel(), B = _.get(W);
        return B ? B.push(h) : _.set(W, [h]), _;
      }, /* @__PURE__ */ new Map());
      a({
        blocks: l,
        dragStart: E,
        dragStop: v,
        mapCategoryBlocks: b,
        Container: J(d)
      });
    };
    return t.on(u, c), t.Blocks.__trgCustom(), () => {
      t.off(u, c);
    };
  }, [t]), S(() => i.setCustomBlocks(!0), []), t && Y(n) ? n(o) : null;
});
function zt({ children: n, ...t }) {
  const i = L(), o = be(null);
  return S(() => {
    o.current && i.setRefCanvas(o.current);
  }, [o.current]), /* @__PURE__ */ P.jsx("div", { ...t, ref: o, children: n });
}
const Xt = k(function({ children: n }) {
  const { editor: t } = A(), [i, o] = O(() => ({
    devices: [],
    selected: "",
    select: F
  }));
  return S(() => {
    if (!t)
      return;
    const { Devices: a } = t, u = a.events.all, c = () => {
      var l;
      o({
        devices: a.getDevices(),
        selected: (l = a.getSelected()) == null ? void 0 : l.id,
        select: (d) => a.select(d)
      });
    };
    return t.on(u, c), c(), () => {
      t.off(u, c);
    };
  }, [t]), t && Y(n) ? n(i) : null;
}), $t = (n) => !!(n && !Array.isArray(n) && typeof n == "object");
async function Yt(n) {
  const t = n.map(({ id: c, src: l }) => ({ id: c, src: l })), i = n.reduce((c, l) => (c[l.id] = l, c), {}), o = [], a = [];
  return (await Wt(t)).forEach((c) => {
    c.status === "fulfilled" ? o.push(i[c.value]) : a.push(i[c.reason]);
  }), { loaded: o, failed: a };
}
const Bt = async (n) => {
  const t = [...n], i = {};
  if (t.length) {
    const o = {}, a = [];
    if (t.forEach((u, c) => {
      $t(u) && (o[u.id] = { index: c }, a.push(u));
    }), a.length) {
      const { loaded: u } = await Yt(a);
      u.forEach(({ id: c, options: l }) => {
        o[c].loaded = !0, i[c] = l || {};
      });
    }
    Object.keys(o).forEach((u) => {
      const c = o[u];
      c.loaded ? t[c.index] = u : t[c.index] = !1;
    });
  }
  return {
    plugins: t.filter(Boolean),
    pluginOptions: i
  };
}, Nt = k(function({
  children: n,
  className: t,
  style: i,
  options: o = {},
  plugins: a = [],
  grapesjs: u,
  grapesjsCss: c,
  onEditor: l = F,
  onReady: d,
  onUpdate: E,
  waitReady: v,
  ...b
}) {
  const { setEditor: _ } = A(), h = L(), [W, B] = O(!1), K = be(null);
  S(() => {
    if (!h.ready || !K.current)
      return;
    const le = K.current, z = h.refCanvas;
    let x, ne = {}, oe = [];
    const X = (M) => {
      const N = {
        height: "100%",
        ...o,
        plugins: [
          ...oe,
          ...o.plugins || []
        ],
        pluginsOpts: {
          ...o.pluginsOpts,
          ...ne
        },
        modal: {
          ...o.modal,
          custom: !!h.customModal
        },
        assetManager: {
          ...o.assetManager,
          custom: !!h.customAssets
        },
        styleManager: {
          ...o.styleManager,
          custom: !!h.customStyles
        },
        blockManager: {
          ...o.blockManager,
          custom: !!h.customBlocks
        },
        richTextEditor: {
          ...o.richTextEditor,
          custom: !!h.customRte
        },
        layerManager: {
          ...o.layerManager,
          custom: !!h.customLayers
        },
        traitManager: {
          ...o.traitManager,
          custom: !!h.customTraits
        },
        selectorManager: {
          ...o.selectorManager,
          custom: !!h.customSelectors
        },
        container: z || le,
        customUI: !!z,
        // Disables all default panels if Canvas is used
        ...z ? {
          panels: { defaults: [] }
        } : {}
      };
      x = M.init(N), _(x), l(x), E && x.on("update", () => {
        E(x.getProjectData(), x);
      }), x.onReady(() => {
        B(!0), d == null || d(x);
      });
    };
    return (async () => {
      c && await Lt(c);
      const M = await Bt(a);
      oe = M.plugins, ne = M.pluginOptions, typeof u == "string" ? (await rt(u), X(window.grapesjs)) : X(u);
    })(), () => x == null ? void 0 : x.destroy();
  }, [h.ready]);
  const $ = o.height ?? "100%", T = o.width ?? "100%", te = It("gjs-editor-wrapper", t), re = v && !W, G = Ue(() => ({
    ...i,
    height: $,
    width: T
  }), [$, T, i]), ce = Ue(() => ({
    ...G,
    ...re ? {
      opacity: 0,
      width: 0,
      height: 0
    } : {}
  }), [G, re]);
  return /* @__PURE__ */ P.jsxs(P.Fragment, { children: [
    v && !W ? /* @__PURE__ */ P.jsx("div", { className: te, style: G, children: v }) : null,
    /* @__PURE__ */ P.jsx("div", { ...b, ref: K, className: te, style: ce, children: n })
  ] });
}), Vt = k(function() {
  const n = L();
  return S(() => n.setReady(!0), []), /* @__PURE__ */ P.jsx(P.Fragment, {});
}), Ht = k(function({ children: t, ...i }) {
  return /* @__PURE__ */ P.jsx(Mt, { children: /* @__PURE__ */ P.jsx(Ft, { children: /* @__PURE__ */ P.jsxs(Nt, { ...i, children: [
    t,
    /* @__PURE__ */ P.jsx(Vt, {})
  ] }) }) });
}), Zt = k(function({ children: n }) {
  const { editor: t } = A(), i = L(), [o, a] = O(() => ({
    root: void 0,
    Container: () => null
  }));
  return S(() => {
    if (!t)
      return;
    const { Layers: u } = t, c = u.events.custom, l = ({ container: d }) => {
      a({
        root: u.getRoot(),
        Container: J(d)
      });
    };
    return t.on(c, l), u.__trgCustom({}), () => {
      t.off(c, l);
    };
  }, [t]), S(() => i.setCustomLayers(!0), []), t && Y(n) ? n(o) : null;
}), Qt = k(function({ children: n }) {
  const { editor: t } = A(), i = L(), [o, a] = O(!1), [u, c] = O({
    title: /* @__PURE__ */ P.jsx(P.Fragment, {}),
    content: /* @__PURE__ */ P.jsx(P.Fragment, {}),
    attributes: {},
    close: F
  });
  return S(() => {
    if (!t)
      return;
    const l = "modal", d = ({ open: E, title: v, content: b, close: _, attributes: h }) => {
      E && c({
        title: qe(Ge(v)),
        content: qe(Ge(b)),
        attributes: h,
        close: _
      }), a(E);
    };
    return t.on(l, d), () => {
      t.off(l, d);
    };
  }, [t]), S(() => i.setCustomModal(!0), []), t && typeof n == "function" ? n({ open: o, ...u }) : null;
}), er = k(function({ children: n }) {
  const { editor: t } = A(), [i, o] = O(() => ({
    pages: [],
    selected: void 0,
    select: F,
    add: F,
    remove: F
  }));
  return S(() => {
    if (!t)
      return;
    const { Pages: a } = t, u = a.events.all, c = () => {
      o({
        pages: a.getAll(),
        selected: a.getSelected(),
        select: (...l) => a.select(...l),
        add: (...l) => a.add(...l),
        remove: (...l) => a.remove(...l)
      });
    };
    return t.on(u, c), c(), () => {
      t.off(u, c);
    };
  }, [t]), t && Y(n) ? n(i) : null;
}), tr = k(function({ children: n }) {
  const { editor: t } = A(), i = L(), [o, a] = O(() => ({
    component: void 0,
    transform: void 0
  }));
  return S(() => {
    if (!t)
      return;
    const { Selectors: u, Styles: c } = t, l = u.events.custom, d = t.StyleManager, E = () => {
      a({
        component: t.getSelected(),
        transform: d.getSector("transform-xywh")
      });
    }, v = () => {
      a((b) => ({ ...b, transform: d.getSector("transform-xywh") }));
    };
    return t.on(l, E), t.on(c.events.custom, v), u.__trgCustom(), () => {
      t.off(l, E), t.off(c.events.custom, v);
    };
  }, [t]), S(() => i.setCustomSelectors(!0), []), t && Y(n) ? n(o) : null;
}), rr = k(function({ children: n }) {
  const { editor: t } = A(), i = L(), [o, a] = O(() => ({
    selectors: [],
    states: [],
    selectedState: "",
    targets: [],
    addSelector: F,
    removeSelector: F,
    setState: F,
    addState: F,
    Container: () => null
  }));
  return S(() => {
    if (!t)
      return;
    const { Selectors: u } = t, c = u.events.custom, l = t.StyleManager, d = ({ container: E }) => {
      a({
        selectors: u.getSelected(),
        states: u.getStates(),
        selectedState: u.getState(),
        targets: u.getSelectedTargets().map((v) => v.getSelectorsString()),
        addSelector: (...v) => u.addSelected(...v),
        removeSelector: (...v) => u.removeSelected(...v),
        setState: (...v) => u.setState(...v),
        addState: (v) => {
          const b = u.getStates().map((_) => ({
            name: _.getName(),
            label: _.getLabel()
          })).concat(v);
          u.setStates(b);
        },
        Container: J(E),
        component: t.getSelected(),
        // transform: sm.getSector('transform-xywh'),
        sm: l
      });
    };
    return t.on(c, d), () => {
      t.off(c, d);
    };
  }, [t]), S(() => i.setCustomSelectors(!0), []), t && Y(n) ? n(o) : null;
}), nr = k(function({ children: n }) {
  const { editor: t } = A(), i = L(), [o, a] = O(() => ({
    sectors: [],
    Container: () => null
  }));
  return S(() => {
    if (!t)
      return;
    const { Styles: u } = t, c = u.events.custom, l = ({ container: d }) => {
      a({
        sectors: u.getSectors({ visible: !0 }),
        Container: J(d)
      });
    };
    return t.on(c, l), u.__trgCustom(), () => {
      t.off(c, l);
    };
  }, [t]), S(() => i.setCustomStyles(!0), []), t && Y(n) ? n(o) : null;
}), or = k(function({ children: n }) {
  const { editor: t } = A(), i = L(), [o, a] = O(() => ({
    traits: [],
    Container: () => null
  }));
  return S(() => {
    if (!t)
      return;
    const { Traits: u } = t, c = u.events.custom, l = ({ container: d }) => {
      a({
        traits: u.getCurrent(),
        Container: J(d)
      });
    };
    return t.on(c, l), u.__trgCustom(), () => {
      t.off(c, l);
    };
  }, [t]), S(() => i.setCustomTraits(!0), []), t && Y(n) ? n(o) : null;
}), sr = ({ children: n }) => Dt() ? /* @__PURE__ */ P.jsx(P.Fragment, { children: n }) : null;
export {
  Kt as AssetsProvider,
  Gt as BlocksProvider,
  zt as Canvas,
  Xt as DevicesProvider,
  Ht as Editor,
  Zt as LayersProvider,
  Qt as ModalProvider,
  er as PagesProvider,
  tr as SelectorProvider,
  rr as SelectorsProvider,
  nr as StylesProvider,
  or as TraitsProvider,
  sr as WithEditor,
  Ht as default,
  Jt as useEditor,
  Dt as useEditorMaybe
};
