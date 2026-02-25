(function () {
  const x = document.createElement("link").relList;
  if (x && x.supports && x.supports("modulepreload")) return;
  for (const C of document.querySelectorAll('link[rel="modulepreload"]')) m(C);
  new MutationObserver((C) => {
    for (const R of C)
      if (R.type === "childList")
        for (const G of R.addedNodes)
          G.tagName === "LINK" && G.rel === "modulepreload" && m(G);
  }).observe(document, { childList: !0, subtree: !0 });
  function q(C) {
    const R = {};
    return (
      C.integrity && (R.integrity = C.integrity),
      C.referrerPolicy && (R.referrerPolicy = C.referrerPolicy),
      C.crossOrigin === "use-credentials"
        ? (R.credentials = "include")
        : C.crossOrigin === "anonymous"
          ? (R.credentials = "omit")
          : (R.credentials = "same-origin"),
      R
    );
  }
  function m(C) {
    if (C.ep) return;
    C.ep = !0;
    const R = q(C);
    fetch(C.href, R);
  }
})();
function Dd(A) {
  return A && A.__esModule && Object.prototype.hasOwnProperty.call(A, "default")
    ? A.default
    : A;
}
var cf = { exports: {} },
  zu = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var rd;
function ly() {
  if (rd) return zu;
  rd = 1;
  var A = Symbol.for("react.transitional.element"),
    x = Symbol.for("react.fragment");
  function q(m, C, R) {
    var G = null;
    if (
      (R !== void 0 && (G = "" + R),
      C.key !== void 0 && (G = "" + C.key),
      "key" in C)
    ) {
      R = {};
      for (var K in C) K !== "key" && (R[K] = C[K]);
    } else R = C;
    return (
      (C = R.ref),
      { $$typeof: A, type: m, key: G, ref: C !== void 0 ? C : null, props: R }
    );
  }
  return ((zu.Fragment = x), (zu.jsx = q), (zu.jsxs = q), zu);
}
var gd;
function ty() {
  return (gd || ((gd = 1), (cf.exports = ly())), cf.exports);
}
var p = ty(),
  ff = { exports: {} },
  X = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Sd;
function ay() {
  if (Sd) return X;
  Sd = 1;
  var A = Symbol.for("react.transitional.element"),
    x = Symbol.for("react.portal"),
    q = Symbol.for("react.fragment"),
    m = Symbol.for("react.strict_mode"),
    C = Symbol.for("react.profiler"),
    R = Symbol.for("react.consumer"),
    G = Symbol.for("react.context"),
    K = Symbol.for("react.forward_ref"),
    O = Symbol.for("react.suspense"),
    T = Symbol.for("react.memo"),
    Q = Symbol.for("react.lazy"),
    _ = Symbol.for("react.activity"),
    el = Symbol.iterator;
  function Yl(o) {
    return o === null || typeof o != "object"
      ? null
      : ((o = (el && o[el]) || o["@@iterator"]),
        typeof o == "function" ? o : null);
  }
  var xl = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Gl = Object.assign,
    At = {};
  function Ml(o, E, D) {
    ((this.props = o),
      (this.context = E),
      (this.refs = At),
      (this.updater = D || xl));
  }
  ((Ml.prototype.isReactComponent = {}),
    (Ml.prototype.setState = function (o, E) {
      if (typeof o != "object" && typeof o != "function" && o != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, o, E, "setState");
    }),
    (Ml.prototype.forceUpdate = function (o) {
      this.updater.enqueueForceUpdate(this, o, "forceUpdate");
    }));
  function mt() {}
  mt.prototype = Ml.prototype;
  function gl(o, E, D) {
    ((this.props = o),
      (this.context = E),
      (this.refs = At),
      (this.updater = D || xl));
  }
  var Ql = (gl.prototype = new mt());
  ((Ql.constructor = gl), Gl(Ql, Ml.prototype), (Ql.isPureReactComponent = !0));
  var Pl = Array.isArray;
  function Ol() {}
  var J = { H: null, A: null, T: null, S: null },
    Ul = Object.prototype.hasOwnProperty;
  function lt(o, E, D) {
    var U = D.ref;
    return {
      $$typeof: A,
      type: o,
      key: E,
      ref: U !== void 0 ? U : null,
      props: D,
    };
  }
  function It(o, E) {
    return lt(o.type, E, o.props);
  }
  function Vl(o) {
    return typeof o == "object" && o !== null && o.$$typeof === A;
  }
  function Hl(o) {
    var E = { "=": "=0", ":": "=2" };
    return (
      "$" +
      o.replace(/[=:]/g, function (D) {
        return E[D];
      })
    );
  }
  var tt = /\/+/g;
  function Ht(o, E) {
    return typeof o == "object" && o !== null && o.key != null
      ? Hl("" + o.key)
      : E.toString(36);
  }
  function pt(o) {
    switch (o.status) {
      case "fulfilled":
        return o.value;
      case "rejected":
        throw o.reason;
      default:
        switch (
          (typeof o.status == "string"
            ? o.then(Ol, Ol)
            : ((o.status = "pending"),
              o.then(
                function (E) {
                  o.status === "pending" &&
                    ((o.status = "fulfilled"), (o.value = E));
                },
                function (E) {
                  o.status === "pending" &&
                    ((o.status = "rejected"), (o.reason = E));
                },
              )),
          o.status)
        ) {
          case "fulfilled":
            return o.value;
          case "rejected":
            throw o.reason;
        }
    }
    throw o;
  }
  function S(o, E, D, U, Z) {
    var w = typeof o;
    (w === "undefined" || w === "boolean") && (o = null);
    var al = !1;
    if (o === null) al = !0;
    else
      switch (w) {
        case "bigint":
        case "string":
        case "number":
          al = !0;
          break;
        case "object":
          switch (o.$$typeof) {
            case A:
            case x:
              al = !0;
              break;
            case Q:
              return ((al = o._init), S(al(o._payload), E, D, U, Z));
          }
      }
    if (al)
      return (
        (Z = Z(o)),
        (al = U === "" ? "." + Ht(o, 0) : U),
        Pl(Z)
          ? ((D = ""),
            al != null && (D = al.replace(tt, "$&/") + "/"),
            S(Z, E, D, "", function (Oe) {
              return Oe;
            }))
          : Z != null &&
            (Vl(Z) &&
              (Z = It(
                Z,
                D +
                  (Z.key == null || (o && o.key === Z.key)
                    ? ""
                    : ("" + Z.key).replace(tt, "$&/") + "/") +
                  al,
              )),
            E.push(Z)),
        1
      );
    al = 0;
    var Zl = U === "" ? "." : U + ":";
    if (Pl(o))
      for (var Sl = 0; Sl < o.length; Sl++)
        ((U = o[Sl]), (w = Zl + Ht(U, Sl)), (al += S(U, E, D, w, Z)));
    else if (((Sl = Yl(o)), typeof Sl == "function"))
      for (o = Sl.call(o), Sl = 0; !(U = o.next()).done; )
        ((U = U.value), (w = Zl + Ht(U, Sl++)), (al += S(U, E, D, w, Z)));
    else if (w === "object") {
      if (typeof o.then == "function") return S(pt(o), E, D, U, Z);
      throw (
        (E = String(o)),
        Error(
          "Objects are not valid as a React child (found: " +
            (E === "[object Object]"
              ? "object with keys {" + Object.keys(o).join(", ") + "}"
              : E) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return al;
  }
  function M(o, E, D) {
    if (o == null) return o;
    var U = [],
      Z = 0;
    return (
      S(o, U, "", "", function (w) {
        return E.call(D, w, Z++);
      }),
      U
    );
  }
  function Y(o) {
    if (o._status === -1) {
      var E = o._result;
      ((E = E()),
        E.then(
          function (D) {
            (o._status === 0 || o._status === -1) &&
              ((o._status = 1), (o._result = D));
          },
          function (D) {
            (o._status === 0 || o._status === -1) &&
              ((o._status = 2), (o._result = D));
          },
        ),
        o._status === -1 && ((o._status = 0), (o._result = E)));
    }
    if (o._status === 1) return o._result.default;
    throw o._result;
  }
  var cl =
      typeof reportError == "function"
        ? reportError
        : function (o) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var E = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof o == "object" &&
                  o !== null &&
                  typeof o.message == "string"
                    ? String(o.message)
                    : String(o),
                error: o,
              });
              if (!window.dispatchEvent(E)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", o);
              return;
            }
            console.error(o);
          },
    ol = {
      map: M,
      forEach: function (o, E, D) {
        M(
          o,
          function () {
            E.apply(this, arguments);
          },
          D,
        );
      },
      count: function (o) {
        var E = 0;
        return (
          M(o, function () {
            E++;
          }),
          E
        );
      },
      toArray: function (o) {
        return (
          M(o, function (E) {
            return E;
          }) || []
        );
      },
      only: function (o) {
        if (!Vl(o))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return o;
      },
    };
  return (
    (X.Activity = _),
    (X.Children = ol),
    (X.Component = Ml),
    (X.Fragment = q),
    (X.Profiler = C),
    (X.PureComponent = gl),
    (X.StrictMode = m),
    (X.Suspense = O),
    (X.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = J),
    (X.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (o) {
        return J.H.useMemoCache(o);
      },
    }),
    (X.cache = function (o) {
      return function () {
        return o.apply(null, arguments);
      };
    }),
    (X.cacheSignal = function () {
      return null;
    }),
    (X.cloneElement = function (o, E, D) {
      if (o == null)
        throw Error(
          "The argument must be a React element, but you passed " + o + ".",
        );
      var U = Gl({}, o.props),
        Z = o.key;
      if (E != null)
        for (w in (E.key !== void 0 && (Z = "" + E.key), E))
          !Ul.call(E, w) ||
            w === "key" ||
            w === "__self" ||
            w === "__source" ||
            (w === "ref" && E.ref === void 0) ||
            (U[w] = E[w]);
      var w = arguments.length - 2;
      if (w === 1) U.children = D;
      else if (1 < w) {
        for (var al = Array(w), Zl = 0; Zl < w; Zl++)
          al[Zl] = arguments[Zl + 2];
        U.children = al;
      }
      return lt(o.type, Z, U);
    }),
    (X.createContext = function (o) {
      return (
        (o = {
          $$typeof: G,
          _currentValue: o,
          _currentValue2: o,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (o.Provider = o),
        (o.Consumer = { $$typeof: R, _context: o }),
        o
      );
    }),
    (X.createElement = function (o, E, D) {
      var U,
        Z = {},
        w = null;
      if (E != null)
        for (U in (E.key !== void 0 && (w = "" + E.key), E))
          Ul.call(E, U) &&
            U !== "key" &&
            U !== "__self" &&
            U !== "__source" &&
            (Z[U] = E[U]);
      var al = arguments.length - 2;
      if (al === 1) Z.children = D;
      else if (1 < al) {
        for (var Zl = Array(al), Sl = 0; Sl < al; Sl++)
          Zl[Sl] = arguments[Sl + 2];
        Z.children = Zl;
      }
      if (o && o.defaultProps)
        for (U in ((al = o.defaultProps), al))
          Z[U] === void 0 && (Z[U] = al[U]);
      return lt(o, w, Z);
    }),
    (X.createRef = function () {
      return { current: null };
    }),
    (X.forwardRef = function (o) {
      return { $$typeof: K, render: o };
    }),
    (X.isValidElement = Vl),
    (X.lazy = function (o) {
      return { $$typeof: Q, _payload: { _status: -1, _result: o }, _init: Y };
    }),
    (X.memo = function (o, E) {
      return { $$typeof: T, type: o, compare: E === void 0 ? null : E };
    }),
    (X.startTransition = function (o) {
      var E = J.T,
        D = {};
      J.T = D;
      try {
        var U = o(),
          Z = J.S;
        (Z !== null && Z(D, U),
          typeof U == "object" &&
            U !== null &&
            typeof U.then == "function" &&
            U.then(Ol, cl));
      } catch (w) {
        cl(w);
      } finally {
        (E !== null && D.types !== null && (E.types = D.types), (J.T = E));
      }
    }),
    (X.unstable_useCacheRefresh = function () {
      return J.H.useCacheRefresh();
    }),
    (X.use = function (o) {
      return J.H.use(o);
    }),
    (X.useActionState = function (o, E, D) {
      return J.H.useActionState(o, E, D);
    }),
    (X.useCallback = function (o, E) {
      return J.H.useCallback(o, E);
    }),
    (X.useContext = function (o) {
      return J.H.useContext(o);
    }),
    (X.useDebugValue = function () {}),
    (X.useDeferredValue = function (o, E) {
      return J.H.useDeferredValue(o, E);
    }),
    (X.useEffect = function (o, E) {
      return J.H.useEffect(o, E);
    }),
    (X.useEffectEvent = function (o) {
      return J.H.useEffectEvent(o);
    }),
    (X.useId = function () {
      return J.H.useId();
    }),
    (X.useImperativeHandle = function (o, E, D) {
      return J.H.useImperativeHandle(o, E, D);
    }),
    (X.useInsertionEffect = function (o, E) {
      return J.H.useInsertionEffect(o, E);
    }),
    (X.useLayoutEffect = function (o, E) {
      return J.H.useLayoutEffect(o, E);
    }),
    (X.useMemo = function (o, E) {
      return J.H.useMemo(o, E);
    }),
    (X.useOptimistic = function (o, E) {
      return J.H.useOptimistic(o, E);
    }),
    (X.useReducer = function (o, E, D) {
      return J.H.useReducer(o, E, D);
    }),
    (X.useRef = function (o) {
      return J.H.useRef(o);
    }),
    (X.useState = function (o) {
      return J.H.useState(o);
    }),
    (X.useSyncExternalStore = function (o, E, D) {
      return J.H.useSyncExternalStore(o, E, D);
    }),
    (X.useTransition = function () {
      return J.H.useTransition();
    }),
    (X.version = "19.2.4"),
    X
  );
}
var bd;
function yf() {
  return (bd || ((bd = 1), (ff.exports = ay())), ff.exports);
}
var Il = yf();
const ey = Dd(Il);
var sf = { exports: {} },
  Eu = {},
  of = { exports: {} },
  df = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zd;
function uy() {
  return (
    zd ||
      ((zd = 1),
      (function (A) {
        function x(S, M) {
          var Y = S.length;
          S.push(M);
          l: for (; 0 < Y; ) {
            var cl = (Y - 1) >>> 1,
              ol = S[cl];
            if (0 < C(ol, M)) ((S[cl] = M), (S[Y] = ol), (Y = cl));
            else break l;
          }
        }
        function q(S) {
          return S.length === 0 ? null : S[0];
        }
        function m(S) {
          if (S.length === 0) return null;
          var M = S[0],
            Y = S.pop();
          if (Y !== M) {
            S[0] = Y;
            l: for (var cl = 0, ol = S.length, o = ol >>> 1; cl < o; ) {
              var E = 2 * (cl + 1) - 1,
                D = S[E],
                U = E + 1,
                Z = S[U];
              if (0 > C(D, Y))
                U < ol && 0 > C(Z, D)
                  ? ((S[cl] = Z), (S[U] = Y), (cl = U))
                  : ((S[cl] = D), (S[E] = Y), (cl = E));
              else if (U < ol && 0 > C(Z, Y))
                ((S[cl] = Z), (S[U] = Y), (cl = U));
              else break l;
            }
          }
          return M;
        }
        function C(S, M) {
          var Y = S.sortIndex - M.sortIndex;
          return Y !== 0 ? Y : S.id - M.id;
        }
        if (
          ((A.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var R = performance;
          A.unstable_now = function () {
            return R.now();
          };
        } else {
          var G = Date,
            K = G.now();
          A.unstable_now = function () {
            return G.now() - K;
          };
        }
        var O = [],
          T = [],
          Q = 1,
          _ = null,
          el = 3,
          Yl = !1,
          xl = !1,
          Gl = !1,
          At = !1,
          Ml = typeof setTimeout == "function" ? setTimeout : null,
          mt = typeof clearTimeout == "function" ? clearTimeout : null,
          gl = typeof setImmediate < "u" ? setImmediate : null;
        function Ql(S) {
          for (var M = q(T); M !== null; ) {
            if (M.callback === null) m(T);
            else if (M.startTime <= S)
              (m(T), (M.sortIndex = M.expirationTime), x(O, M));
            else break;
            M = q(T);
          }
        }
        function Pl(S) {
          if (((Gl = !1), Ql(S), !xl))
            if (q(O) !== null) ((xl = !0), Ol || ((Ol = !0), Hl()));
            else {
              var M = q(T);
              M !== null && pt(Pl, M.startTime - S);
            }
        }
        var Ol = !1,
          J = -1,
          Ul = 5,
          lt = -1;
        function It() {
          return At ? !0 : !(A.unstable_now() - lt < Ul);
        }
        function Vl() {
          if (((At = !1), Ol)) {
            var S = A.unstable_now();
            lt = S;
            var M = !0;
            try {
              l: {
                ((xl = !1), Gl && ((Gl = !1), mt(J), (J = -1)), (Yl = !0));
                var Y = el;
                try {
                  t: {
                    for (
                      Ql(S), _ = q(O);
                      _ !== null && !(_.expirationTime > S && It());
                    ) {
                      var cl = _.callback;
                      if (typeof cl == "function") {
                        ((_.callback = null), (el = _.priorityLevel));
                        var ol = cl(_.expirationTime <= S);
                        if (((S = A.unstable_now()), typeof ol == "function")) {
                          ((_.callback = ol), Ql(S), (M = !0));
                          break t;
                        }
                        (_ === q(O) && m(O), Ql(S));
                      } else m(O);
                      _ = q(O);
                    }
                    if (_ !== null) M = !0;
                    else {
                      var o = q(T);
                      (o !== null && pt(Pl, o.startTime - S), (M = !1));
                    }
                  }
                  break l;
                } finally {
                  ((_ = null), (el = Y), (Yl = !1));
                }
                M = void 0;
              }
            } finally {
              M ? Hl() : (Ol = !1);
            }
          }
        }
        var Hl;
        if (typeof gl == "function")
          Hl = function () {
            gl(Vl);
          };
        else if (typeof MessageChannel < "u") {
          var tt = new MessageChannel(),
            Ht = tt.port2;
          ((tt.port1.onmessage = Vl),
            (Hl = function () {
              Ht.postMessage(null);
            }));
        } else
          Hl = function () {
            Ml(Vl, 0);
          };
        function pt(S, M) {
          J = Ml(function () {
            S(A.unstable_now());
          }, M);
        }
        ((A.unstable_IdlePriority = 5),
          (A.unstable_ImmediatePriority = 1),
          (A.unstable_LowPriority = 4),
          (A.unstable_NormalPriority = 3),
          (A.unstable_Profiling = null),
          (A.unstable_UserBlockingPriority = 2),
          (A.unstable_cancelCallback = function (S) {
            S.callback = null;
          }),
          (A.unstable_forceFrameRate = function (S) {
            0 > S || 125 < S
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (Ul = 0 < S ? Math.floor(1e3 / S) : 5);
          }),
          (A.unstable_getCurrentPriorityLevel = function () {
            return el;
          }),
          (A.unstable_next = function (S) {
            switch (el) {
              case 1:
              case 2:
              case 3:
                var M = 3;
                break;
              default:
                M = el;
            }
            var Y = el;
            el = M;
            try {
              return S();
            } finally {
              el = Y;
            }
          }),
          (A.unstable_requestPaint = function () {
            At = !0;
          }),
          (A.unstable_runWithPriority = function (S, M) {
            switch (S) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                S = 3;
            }
            var Y = el;
            el = S;
            try {
              return M();
            } finally {
              el = Y;
            }
          }),
          (A.unstable_scheduleCallback = function (S, M, Y) {
            var cl = A.unstable_now();
            switch (
              (typeof Y == "object" && Y !== null
                ? ((Y = Y.delay),
                  (Y = typeof Y == "number" && 0 < Y ? cl + Y : cl))
                : (Y = cl),
              S)
            ) {
              case 1:
                var ol = -1;
                break;
              case 2:
                ol = 250;
                break;
              case 5:
                ol = 1073741823;
                break;
              case 4:
                ol = 1e4;
                break;
              default:
                ol = 5e3;
            }
            return (
              (ol = Y + ol),
              (S = {
                id: Q++,
                callback: M,
                priorityLevel: S,
                startTime: Y,
                expirationTime: ol,
                sortIndex: -1,
              }),
              Y > cl
                ? ((S.sortIndex = Y),
                  x(T, S),
                  q(O) === null &&
                    S === q(T) &&
                    (Gl ? (mt(J), (J = -1)) : (Gl = !0), pt(Pl, Y - cl)))
                : ((S.sortIndex = ol),
                  x(O, S),
                  xl || Yl || ((xl = !0), Ol || ((Ol = !0), Hl()))),
              S
            );
          }),
          (A.unstable_shouldYield = It),
          (A.unstable_wrapCallback = function (S) {
            var M = el;
            return function () {
              var Y = el;
              el = M;
              try {
                return S.apply(this, arguments);
              } finally {
                el = Y;
              }
            };
          }));
      })(df)),
    df
  );
}
var Ed;
function ny() {
  return (Ed || ((Ed = 1), (of.exports = uy())), of.exports);
}
var mf = { exports: {} },
  Xl = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Td;
function cy() {
  if (Td) return Xl;
  Td = 1;
  var A = yf();
  function x(O) {
    var T = "https://react.dev/errors/" + O;
    if (1 < arguments.length) {
      T += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var Q = 2; Q < arguments.length; Q++)
        T += "&args[]=" + encodeURIComponent(arguments[Q]);
    }
    return (
      "Minified React error #" +
      O +
      "; visit " +
      T +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function q() {}
  var m = {
      d: {
        f: q,
        r: function () {
          throw Error(x(522));
        },
        D: q,
        C: q,
        L: q,
        m: q,
        X: q,
        S: q,
        M: q,
      },
      p: 0,
      findDOMNode: null,
    },
    C = Symbol.for("react.portal");
  function R(O, T, Q) {
    var _ =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: C,
      key: _ == null ? null : "" + _,
      children: O,
      containerInfo: T,
      implementation: Q,
    };
  }
  var G = A.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function K(O, T) {
    if (O === "font") return "";
    if (typeof T == "string") return T === "use-credentials" ? T : "";
  }
  return (
    (Xl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = m),
    (Xl.createPortal = function (O, T) {
      var Q =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!T || (T.nodeType !== 1 && T.nodeType !== 9 && T.nodeType !== 11))
        throw Error(x(299));
      return R(O, T, null, Q);
    }),
    (Xl.flushSync = function (O) {
      var T = G.T,
        Q = m.p;
      try {
        if (((G.T = null), (m.p = 2), O)) return O();
      } finally {
        ((G.T = T), (m.p = Q), m.d.f());
      }
    }),
    (Xl.preconnect = function (O, T) {
      typeof O == "string" &&
        (T
          ? ((T = T.crossOrigin),
            (T =
              typeof T == "string"
                ? T === "use-credentials"
                  ? T
                  : ""
                : void 0))
          : (T = null),
        m.d.C(O, T));
    }),
    (Xl.prefetchDNS = function (O) {
      typeof O == "string" && m.d.D(O);
    }),
    (Xl.preinit = function (O, T) {
      if (typeof O == "string" && T && typeof T.as == "string") {
        var Q = T.as,
          _ = K(Q, T.crossOrigin),
          el = typeof T.integrity == "string" ? T.integrity : void 0,
          Yl = typeof T.fetchPriority == "string" ? T.fetchPriority : void 0;
        Q === "style"
          ? m.d.S(O, typeof T.precedence == "string" ? T.precedence : void 0, {
              crossOrigin: _,
              integrity: el,
              fetchPriority: Yl,
            })
          : Q === "script" &&
            m.d.X(O, {
              crossOrigin: _,
              integrity: el,
              fetchPriority: Yl,
              nonce: typeof T.nonce == "string" ? T.nonce : void 0,
            });
      }
    }),
    (Xl.preinitModule = function (O, T) {
      if (typeof O == "string")
        if (typeof T == "object" && T !== null) {
          if (T.as == null || T.as === "script") {
            var Q = K(T.as, T.crossOrigin);
            m.d.M(O, {
              crossOrigin: Q,
              integrity: typeof T.integrity == "string" ? T.integrity : void 0,
              nonce: typeof T.nonce == "string" ? T.nonce : void 0,
            });
          }
        } else T == null && m.d.M(O);
    }),
    (Xl.preload = function (O, T) {
      if (
        typeof O == "string" &&
        typeof T == "object" &&
        T !== null &&
        typeof T.as == "string"
      ) {
        var Q = T.as,
          _ = K(Q, T.crossOrigin);
        m.d.L(O, Q, {
          crossOrigin: _,
          integrity: typeof T.integrity == "string" ? T.integrity : void 0,
          nonce: typeof T.nonce == "string" ? T.nonce : void 0,
          type: typeof T.type == "string" ? T.type : void 0,
          fetchPriority:
            typeof T.fetchPriority == "string" ? T.fetchPriority : void 0,
          referrerPolicy:
            typeof T.referrerPolicy == "string" ? T.referrerPolicy : void 0,
          imageSrcSet:
            typeof T.imageSrcSet == "string" ? T.imageSrcSet : void 0,
          imageSizes: typeof T.imageSizes == "string" ? T.imageSizes : void 0,
          media: typeof T.media == "string" ? T.media : void 0,
        });
      }
    }),
    (Xl.preloadModule = function (O, T) {
      if (typeof O == "string")
        if (T) {
          var Q = K(T.as, T.crossOrigin);
          m.d.m(O, {
            as: typeof T.as == "string" && T.as !== "script" ? T.as : void 0,
            crossOrigin: Q,
            integrity: typeof T.integrity == "string" ? T.integrity : void 0,
          });
        } else m.d.m(O);
    }),
    (Xl.requestFormReset = function (O) {
      m.d.r(O);
    }),
    (Xl.unstable_batchedUpdates = function (O, T) {
      return O(T);
    }),
    (Xl.useFormState = function (O, T, Q) {
      return G.H.useFormState(O, T, Q);
    }),
    (Xl.useFormStatus = function () {
      return G.H.useHostTransitionStatus();
    }),
    (Xl.version = "19.2.4"),
    Xl
  );
}
var Ad;
function iy() {
  if (Ad) return mf.exports;
  Ad = 1;
  function A() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A);
      } catch (x) {
        console.error(x);
      }
  }
  return (A(), (mf.exports = cy()), mf.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pd;
function fy() {
  if (pd) return Eu;
  pd = 1;
  var A = ny(),
    x = yf(),
    q = iy();
  function m(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return (
      "Minified React error #" +
      l +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function C(l) {
    return !(!l || (l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11));
  }
  function R(l) {
    var t = l,
      a = l;
    if (l.alternate) for (; t.return; ) t = t.return;
    else {
      l = t;
      do ((t = l), (t.flags & 4098) !== 0 && (a = t.return), (l = t.return));
      while (l);
    }
    return t.tag === 3 ? a : null;
  }
  function G(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (
        (t === null && ((l = l.alternate), l !== null && (t = l.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function K(l) {
    if (l.tag === 31) {
      var t = l.memoizedState;
      if (
        (t === null && ((l = l.alternate), l !== null && (t = l.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function O(l) {
    if (R(l) !== l) throw Error(m(188));
  }
  function T(l) {
    var t = l.alternate;
    if (!t) {
      if (((t = R(l)), t === null)) throw Error(m(188));
      return t !== l ? null : l;
    }
    for (var a = l, e = t; ; ) {
      var u = a.return;
      if (u === null) break;
      var n = u.alternate;
      if (n === null) {
        if (((e = u.return), e !== null)) {
          a = e;
          continue;
        }
        break;
      }
      if (u.child === n.child) {
        for (n = u.child; n; ) {
          if (n === a) return (O(u), l);
          if (n === e) return (O(u), t);
          n = n.sibling;
        }
        throw Error(m(188));
      }
      if (a.return !== e.return) ((a = u), (e = n));
      else {
        for (var c = !1, i = u.child; i; ) {
          if (i === a) {
            ((c = !0), (a = u), (e = n));
            break;
          }
          if (i === e) {
            ((c = !0), (e = u), (a = n));
            break;
          }
          i = i.sibling;
        }
        if (!c) {
          for (i = n.child; i; ) {
            if (i === a) {
              ((c = !0), (a = n), (e = u));
              break;
            }
            if (i === e) {
              ((c = !0), (e = n), (a = u));
              break;
            }
            i = i.sibling;
          }
          if (!c) throw Error(m(189));
        }
      }
      if (a.alternate !== e) throw Error(m(190));
    }
    if (a.tag !== 3) throw Error(m(188));
    return a.stateNode.current === a ? l : t;
  }
  function Q(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (((t = Q(l)), t !== null)) return t;
      l = l.sibling;
    }
    return null;
  }
  var _ = Object.assign,
    el = Symbol.for("react.element"),
    Yl = Symbol.for("react.transitional.element"),
    xl = Symbol.for("react.portal"),
    Gl = Symbol.for("react.fragment"),
    At = Symbol.for("react.strict_mode"),
    Ml = Symbol.for("react.profiler"),
    mt = Symbol.for("react.consumer"),
    gl = Symbol.for("react.context"),
    Ql = Symbol.for("react.forward_ref"),
    Pl = Symbol.for("react.suspense"),
    Ol = Symbol.for("react.suspense_list"),
    J = Symbol.for("react.memo"),
    Ul = Symbol.for("react.lazy"),
    lt = Symbol.for("react.activity"),
    It = Symbol.for("react.memo_cache_sentinel"),
    Vl = Symbol.iterator;
  function Hl(l) {
    return l === null || typeof l != "object"
      ? null
      : ((l = (Vl && l[Vl]) || l["@@iterator"]),
        typeof l == "function" ? l : null);
  }
  var tt = Symbol.for("react.client.reference");
  function Ht(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === tt ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case Gl:
        return "Fragment";
      case Ml:
        return "Profiler";
      case At:
        return "StrictMode";
      case Pl:
        return "Suspense";
      case Ol:
        return "SuspenseList";
      case lt:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case xl:
          return "Portal";
        case gl:
          return l.displayName || "Context";
        case mt:
          return (l._context.displayName || "Context") + ".Consumer";
        case Ql:
          var t = l.render;
          return (
            (l = l.displayName),
            l ||
              ((l = t.displayName || t.name || ""),
              (l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef")),
            l
          );
        case J:
          return (
            (t = l.displayName || null),
            t !== null ? t : Ht(l.type) || "Memo"
          );
        case Ul:
          ((t = l._payload), (l = l._init));
          try {
            return Ht(l(t));
          } catch {}
      }
    return null;
  }
  var pt = Array.isArray,
    S = x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    M = q.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    Y = { pending: !1, data: null, method: null, action: null },
    cl = [],
    ol = -1;
  function o(l) {
    return { current: l };
  }
  function E(l) {
    0 > ol || ((l.current = cl[ol]), (cl[ol] = null), ol--);
  }
  function D(l, t) {
    (ol++, (cl[ol] = l.current), (l.current = t));
  }
  var U = o(null),
    Z = o(null),
    w = o(null),
    al = o(null);
  function Zl(l, t) {
    switch ((D(w, t), D(Z, l), D(U, null), t.nodeType)) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? Go(l) : 0;
        break;
      default:
        if (((l = t.tagName), (t = t.namespaceURI)))
          ((t = Go(t)), (l = Xo(t, l)));
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    (E(U), D(U, l));
  }
  function Sl() {
    (E(U), E(Z), E(w));
  }
  function Oe(l) {
    l.memoizedState !== null && D(al, l);
    var t = U.current,
      a = Xo(t, l.type);
    t !== a && (D(Z, l), D(U, a));
  }
  function Tu(l) {
    (Z.current === l && (E(U), E(Z)),
      al.current === l && (E(al), (ru._currentValue = Y)));
  }
  var Zn, vf;
  function pa(l) {
    if (Zn === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        ((Zn = (t && t[1]) || ""),
          (vf =
            -1 <
            a.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < a.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      Zn +
      l +
      vf
    );
  }
  var Ln = !1;
  function Vn(l, t) {
    if (!l || Ln) return "";
    Ln = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var e = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var z = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(z.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(z, []);
                } catch (r) {
                  var h = r;
                }
                Reflect.construct(l, [], z);
              } else {
                try {
                  z.call();
                } catch (r) {
                  h = r;
                }
                l.call(z.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (r) {
                h = r;
              }
              (z = l()) &&
                typeof z.catch == "function" &&
                z.catch(function () {});
            }
          } catch (r) {
            if (r && h && typeof r.stack == "string") return [r.stack, h.stack];
          }
          return [null, null];
        },
      };
      e.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        e.DetermineComponentFrameRoot,
        "name",
      );
      u &&
        u.configurable &&
        Object.defineProperty(e.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var n = e.DetermineComponentFrameRoot(),
        c = n[0],
        i = n[1];
      if (c && i) {
        var f = c.split(`
`),
          v = i.split(`
`);
        for (
          u = e = 0;
          e < f.length && !f[e].includes("DetermineComponentFrameRoot");
        )
          e++;
        for (; u < v.length && !v[u].includes("DetermineComponentFrameRoot"); )
          u++;
        if (e === f.length || u === v.length)
          for (
            e = f.length - 1, u = v.length - 1;
            1 <= e && 0 <= u && f[e] !== v[u];
          )
            u--;
        for (; 1 <= e && 0 <= u; e--, u--)
          if (f[e] !== v[u]) {
            if (e !== 1 || u !== 1)
              do
                if ((e--, u--, 0 > u || f[e] !== v[u])) {
                  var g =
                    `
` + f[e].replace(" at new ", " at ");
                  return (
                    l.displayName &&
                      g.includes("<anonymous>") &&
                      (g = g.replace("<anonymous>", l.displayName)),
                    g
                  );
                }
              while (1 <= e && 0 <= u);
            break;
          }
      }
    } finally {
      ((Ln = !1), (Error.prepareStackTrace = a));
    }
    return (a = l ? l.displayName || l.name : "") ? pa(a) : "";
  }
  function Ud(l, t) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return pa(l.type);
      case 16:
        return pa("Lazy");
      case 13:
        return l.child !== t && t !== null
          ? pa("Suspense Fallback")
          : pa("Suspense");
      case 19:
        return pa("SuspenseList");
      case 0:
      case 15:
        return Vn(l.type, !1);
      case 11:
        return Vn(l.type.render, !1);
      case 1:
        return Vn(l.type, !0);
      case 31:
        return pa("Activity");
      default:
        return "";
    }
  }
  function hf(l) {
    try {
      var t = "",
        a = null;
      do ((t += Ud(l, a)), (a = l), (l = l.return));
      while (l);
      return t;
    } catch (e) {
      return (
        `
Error generating stack: ` +
        e.message +
        `
` +
        e.stack
      );
    }
  }
  var Kn = Object.prototype.hasOwnProperty,
    Jn = A.unstable_scheduleCallback,
    wn = A.unstable_cancelCallback,
    Hd = A.unstable_shouldYield,
    Cd = A.unstable_requestPaint,
    at = A.unstable_now,
    jd = A.unstable_getCurrentPriorityLevel,
    rf = A.unstable_ImmediatePriority,
    gf = A.unstable_UserBlockingPriority,
    Au = A.unstable_NormalPriority,
    Rd = A.unstable_LowPriority,
    Sf = A.unstable_IdlePriority,
    qd = A.log,
    Bd = A.unstable_setDisableYieldValue,
    De = null,
    et = null;
  function Pt(l) {
    if (
      (typeof qd == "function" && Bd(l),
      et && typeof et.setStrictMode == "function")
    )
      try {
        et.setStrictMode(De, l);
      } catch {}
  }
  var ut = Math.clz32 ? Math.clz32 : Xd,
    Yd = Math.log,
    Gd = Math.LN2;
  function Xd(l) {
    return ((l >>>= 0), l === 0 ? 32 : (31 - ((Yd(l) / Gd) | 0)) | 0);
  }
  var pu = 256,
    _u = 262144,
    Mu = 4194304;
  function _a(l) {
    var t = l & 42;
    if (t !== 0) return t;
    switch (l & -l) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return l & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function Ou(l, t, a) {
    var e = l.pendingLanes;
    if (e === 0) return 0;
    var u = 0,
      n = l.suspendedLanes,
      c = l.pingedLanes;
    l = l.warmLanes;
    var i = e & 134217727;
    return (
      i !== 0
        ? ((e = i & ~n),
          e !== 0
            ? (u = _a(e))
            : ((c &= i),
              c !== 0
                ? (u = _a(c))
                : a || ((a = i & ~l), a !== 0 && (u = _a(a)))))
        : ((i = e & ~n),
          i !== 0
            ? (u = _a(i))
            : c !== 0
              ? (u = _a(c))
              : a || ((a = e & ~l), a !== 0 && (u = _a(a)))),
      u === 0
        ? 0
        : t !== 0 &&
            t !== u &&
            (t & n) === 0 &&
            ((n = u & -u),
            (a = t & -t),
            n >= a || (n === 32 && (a & 4194048) !== 0))
          ? t
          : u
    );
  }
  function Ne(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function Qd(l, t) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function bf() {
    var l = Mu;
    return ((Mu <<= 1), (Mu & 62914560) === 0 && (Mu = 4194304), l);
  }
  function Wn(l) {
    for (var t = [], a = 0; 31 > a; a++) t.push(l);
    return t;
  }
  function xe(l, t) {
    ((l.pendingLanes |= t),
      t !== 268435456 &&
        ((l.suspendedLanes = 0), (l.pingedLanes = 0), (l.warmLanes = 0)));
  }
  function Zd(l, t, a, e, u, n) {
    var c = l.pendingLanes;
    ((l.pendingLanes = a),
      (l.suspendedLanes = 0),
      (l.pingedLanes = 0),
      (l.warmLanes = 0),
      (l.expiredLanes &= a),
      (l.entangledLanes &= a),
      (l.errorRecoveryDisabledLanes &= a),
      (l.shellSuspendCounter = 0));
    var i = l.entanglements,
      f = l.expirationTimes,
      v = l.hiddenUpdates;
    for (a = c & ~a; 0 < a; ) {
      var g = 31 - ut(a),
        z = 1 << g;
      ((i[g] = 0), (f[g] = -1));
      var h = v[g];
      if (h !== null)
        for (v[g] = null, g = 0; g < h.length; g++) {
          var r = h[g];
          r !== null && (r.lane &= -536870913);
        }
      a &= ~z;
    }
    (e !== 0 && zf(l, e, 0),
      n !== 0 && u === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(c & ~t)));
  }
  function zf(l, t, a) {
    ((l.pendingLanes |= t), (l.suspendedLanes &= ~t));
    var e = 31 - ut(t);
    ((l.entangledLanes |= t),
      (l.entanglements[e] = l.entanglements[e] | 1073741824 | (a & 261930)));
  }
  function Ef(l, t) {
    var a = (l.entangledLanes |= t);
    for (l = l.entanglements; a; ) {
      var e = 31 - ut(a),
        u = 1 << e;
      ((u & t) | (l[e] & t) && (l[e] |= t), (a &= ~u));
    }
  }
  function Tf(l, t) {
    var a = t & -t;
    return (
      (a = (a & 42) !== 0 ? 1 : $n(a)),
      (a & (l.suspendedLanes | t)) !== 0 ? 0 : a
    );
  }
  function $n(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function kn(l) {
    return (
      (l &= -l),
      2 < l ? (8 < l ? ((l & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Af() {
    var l = M.p;
    return l !== 0 ? l : ((l = window.event), l === void 0 ? 32 : sd(l.type));
  }
  function pf(l, t) {
    var a = M.p;
    try {
      return ((M.p = l), t());
    } finally {
      M.p = a;
    }
  }
  var la = Math.random().toString(36).slice(2),
    Cl = "__reactFiber$" + la,
    Kl = "__reactProps$" + la,
    La = "__reactContainer$" + la,
    Fn = "__reactEvents$" + la,
    Ld = "__reactListeners$" + la,
    Vd = "__reactHandles$" + la,
    _f = "__reactResources$" + la,
    Ue = "__reactMarker$" + la;
  function In(l) {
    (delete l[Cl], delete l[Kl], delete l[Fn], delete l[Ld], delete l[Vd]);
  }
  function Va(l) {
    var t = l[Cl];
    if (t) return t;
    for (var a = l.parentNode; a; ) {
      if ((t = a[La] || a[Cl])) {
        if (
          ((a = t.alternate),
          t.child !== null || (a !== null && a.child !== null))
        )
          for (l = wo(l); l !== null; ) {
            if ((a = l[Cl])) return a;
            l = wo(l);
          }
        return t;
      }
      ((l = a), (a = l.parentNode));
    }
    return null;
  }
  function Ka(l) {
    if ((l = l[Cl] || l[La])) {
      var t = l.tag;
      if (
        t === 5 ||
        t === 6 ||
        t === 13 ||
        t === 31 ||
        t === 26 ||
        t === 27 ||
        t === 3
      )
        return l;
    }
    return null;
  }
  function He(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(m(33));
  }
  function Ja(l) {
    var t = l[_f];
    return (
      t ||
        (t = l[_f] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function Dl(l) {
    l[Ue] = !0;
  }
  var Mf = new Set(),
    Of = {};
  function Ma(l, t) {
    (wa(l, t), wa(l + "Capture", t));
  }
  function wa(l, t) {
    for (Of[l] = t, l = 0; l < t.length; l++) Mf.add(t[l]);
  }
  var Kd = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    Df = {},
    Nf = {};
  function Jd(l) {
    return Kn.call(Nf, l)
      ? !0
      : Kn.call(Df, l)
        ? !1
        : Kd.test(l)
          ? (Nf[l] = !0)
          : ((Df[l] = !0), !1);
  }
  function Du(l, t, a) {
    if (Jd(t))
      if (a === null) l.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var e = t.toLowerCase().slice(0, 5);
            if (e !== "data-" && e !== "aria-") {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, "" + a);
      }
  }
  function Nu(l, t, a) {
    if (a === null) l.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, "" + a);
    }
  }
  function Ct(l, t, a, e) {
    if (e === null) l.removeAttribute(a);
    else {
      switch (typeof e) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(a);
          return;
      }
      l.setAttributeNS(t, a, "" + e);
    }
  }
  function yt(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function xf(l) {
    var t = l.type;
    return (
      (l = l.nodeName) &&
      l.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function wd(l, t, a) {
    var e = Object.getOwnPropertyDescriptor(l.constructor.prototype, t);
    if (
      !l.hasOwnProperty(t) &&
      typeof e < "u" &&
      typeof e.get == "function" &&
      typeof e.set == "function"
    ) {
      var u = e.get,
        n = e.set;
      return (
        Object.defineProperty(l, t, {
          configurable: !0,
          get: function () {
            return u.call(this);
          },
          set: function (c) {
            ((a = "" + c), n.call(this, c));
          },
        }),
        Object.defineProperty(l, t, { enumerable: e.enumerable }),
        {
          getValue: function () {
            return a;
          },
          setValue: function (c) {
            a = "" + c;
          },
          stopTracking: function () {
            ((l._valueTracker = null), delete l[t]);
          },
        }
      );
    }
  }
  function Pn(l) {
    if (!l._valueTracker) {
      var t = xf(l) ? "checked" : "value";
      l._valueTracker = wd(l, t, "" + l[t]);
    }
  }
  function Uf(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var a = t.getValue(),
      e = "";
    return (
      l && (e = xf(l) ? (l.checked ? "true" : "false") : l.value),
      (l = e),
      l !== a ? (t.setValue(l), !0) : !1
    );
  }
  function xu(l) {
    if (
      ((l = l || (typeof document < "u" ? document : void 0)), typeof l > "u")
    )
      return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var Wd = /[\n"\\]/g;
  function vt(l) {
    return l.replace(Wd, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function lc(l, t, a, e, u, n, c, i) {
    ((l.name = ""),
      c != null &&
      typeof c != "function" &&
      typeof c != "symbol" &&
      typeof c != "boolean"
        ? (l.type = c)
        : l.removeAttribute("type"),
      t != null
        ? c === "number"
          ? ((t === 0 && l.value === "") || l.value != t) &&
            (l.value = "" + yt(t))
          : l.value !== "" + yt(t) && (l.value = "" + yt(t))
        : (c !== "submit" && c !== "reset") || l.removeAttribute("value"),
      t != null
        ? tc(l, c, yt(t))
        : a != null
          ? tc(l, c, yt(a))
          : e != null && l.removeAttribute("value"),
      u == null && n != null && (l.defaultChecked = !!n),
      u != null &&
        (l.checked = u && typeof u != "function" && typeof u != "symbol"),
      i != null &&
      typeof i != "function" &&
      typeof i != "symbol" &&
      typeof i != "boolean"
        ? (l.name = "" + yt(i))
        : l.removeAttribute("name"));
  }
  function Hf(l, t, a, e, u, n, c, i) {
    if (
      (n != null &&
        typeof n != "function" &&
        typeof n != "symbol" &&
        typeof n != "boolean" &&
        (l.type = n),
      t != null || a != null)
    ) {
      if (!((n !== "submit" && n !== "reset") || t != null)) {
        Pn(l);
        return;
      }
      ((a = a != null ? "" + yt(a) : ""),
        (t = t != null ? "" + yt(t) : a),
        i || t === l.value || (l.value = t),
        (l.defaultValue = t));
    }
    ((e = e ?? u),
      (e = typeof e != "function" && typeof e != "symbol" && !!e),
      (l.checked = i ? l.checked : !!e),
      (l.defaultChecked = !!e),
      c != null &&
        typeof c != "function" &&
        typeof c != "symbol" &&
        typeof c != "boolean" &&
        (l.name = c),
      Pn(l));
  }
  function tc(l, t, a) {
    (t === "number" && xu(l.ownerDocument) === l) ||
      l.defaultValue === "" + a ||
      (l.defaultValue = "" + a);
  }
  function Wa(l, t, a, e) {
    if (((l = l.options), t)) {
      t = {};
      for (var u = 0; u < a.length; u++) t["$" + a[u]] = !0;
      for (a = 0; a < l.length; a++)
        ((u = t.hasOwnProperty("$" + l[a].value)),
          l[a].selected !== u && (l[a].selected = u),
          u && e && (l[a].defaultSelected = !0));
    } else {
      for (a = "" + yt(a), t = null, u = 0; u < l.length; u++) {
        if (l[u].value === a) {
          ((l[u].selected = !0), e && (l[u].defaultSelected = !0));
          return;
        }
        t !== null || l[u].disabled || (t = l[u]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Cf(l, t, a) {
    if (
      t != null &&
      ((t = "" + yt(t)), t !== l.value && (l.value = t), a == null)
    ) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = a != null ? "" + yt(a) : "";
  }
  function jf(l, t, a, e) {
    if (t == null) {
      if (e != null) {
        if (a != null) throw Error(m(92));
        if (pt(e)) {
          if (1 < e.length) throw Error(m(93));
          e = e[0];
        }
        a = e;
      }
      (a == null && (a = ""), (t = a));
    }
    ((a = yt(t)),
      (l.defaultValue = a),
      (e = l.textContent),
      e === a && e !== "" && e !== null && (l.value = e),
      Pn(l));
  }
  function $a(l, t) {
    if (t) {
      var a = l.firstChild;
      if (a && a === l.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var $d = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function Rf(l, t, a) {
    var e = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === ""
      ? e
        ? l.setProperty(t, "")
        : t === "float"
          ? (l.cssFloat = "")
          : (l[t] = "")
      : e
        ? l.setProperty(t, a)
        : typeof a != "number" || a === 0 || $d.has(t)
          ? t === "float"
            ? (l.cssFloat = a)
            : (l[t] = ("" + a).trim())
          : (l[t] = a + "px");
  }
  function qf(l, t, a) {
    if (t != null && typeof t != "object") throw Error(m(62));
    if (((l = l.style), a != null)) {
      for (var e in a)
        !a.hasOwnProperty(e) ||
          (t != null && t.hasOwnProperty(e)) ||
          (e.indexOf("--") === 0
            ? l.setProperty(e, "")
            : e === "float"
              ? (l.cssFloat = "")
              : (l[e] = ""));
      for (var u in t)
        ((e = t[u]), t.hasOwnProperty(u) && a[u] !== e && Rf(l, u, e));
    } else for (var n in t) t.hasOwnProperty(n) && Rf(l, n, t[n]);
  }
  function ac(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var kd = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    Fd =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Uu(l) {
    return Fd.test("" + l)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : l;
  }
  function jt() {}
  var ec = null;
  function uc(l) {
    return (
      (l = l.target || l.srcElement || window),
      l.correspondingUseElement && (l = l.correspondingUseElement),
      l.nodeType === 3 ? l.parentNode : l
    );
  }
  var ka = null,
    Fa = null;
  function Bf(l) {
    var t = Ka(l);
    if (t && (l = t.stateNode)) {
      var a = l[Kl] || null;
      l: switch (((l = t.stateNode), t.type)) {
        case "input":
          if (
            (lc(
              l,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name,
            ),
            (t = a.name),
            a.type === "radio" && t != null)
          ) {
            for (a = l; a.parentNode; ) a = a.parentNode;
            for (
              a = a.querySelectorAll(
                'input[name="' + vt("" + t) + '"][type="radio"]',
              ),
                t = 0;
              t < a.length;
              t++
            ) {
              var e = a[t];
              if (e !== l && e.form === l.form) {
                var u = e[Kl] || null;
                if (!u) throw Error(m(90));
                lc(
                  e,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name,
                );
              }
            }
            for (t = 0; t < a.length; t++)
              ((e = a[t]), e.form === l.form && Uf(e));
          }
          break l;
        case "textarea":
          Cf(l, a.value, a.defaultValue);
          break l;
        case "select":
          ((t = a.value), t != null && Wa(l, !!a.multiple, t, !1));
      }
    }
  }
  var nc = !1;
  function Yf(l, t, a) {
    if (nc) return l(t, a);
    nc = !0;
    try {
      var e = l(t);
      return e;
    } finally {
      if (
        ((nc = !1),
        (ka !== null || Fa !== null) &&
          (bn(), ka && ((t = ka), (l = Fa), (Fa = ka = null), Bf(t), l)))
      )
        for (t = 0; t < l.length; t++) Bf(l[t]);
    }
  }
  function Ce(l, t) {
    var a = l.stateNode;
    if (a === null) return null;
    var e = a[Kl] || null;
    if (e === null) return null;
    a = e[t];
    l: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((e = !e.disabled) ||
          ((l = l.type),
          (e = !(
            l === "button" ||
            l === "input" ||
            l === "select" ||
            l === "textarea"
          ))),
          (l = !e));
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (a && typeof a != "function") throw Error(m(231, t, typeof a));
    return a;
  }
  var Rt = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    cc = !1;
  if (Rt)
    try {
      var je = {};
      (Object.defineProperty(je, "passive", {
        get: function () {
          cc = !0;
        },
      }),
        window.addEventListener("test", je, je),
        window.removeEventListener("test", je, je));
    } catch {
      cc = !1;
    }
  var ta = null,
    ic = null,
    Hu = null;
  function Gf() {
    if (Hu) return Hu;
    var l,
      t = ic,
      a = t.length,
      e,
      u = "value" in ta ? ta.value : ta.textContent,
      n = u.length;
    for (l = 0; l < a && t[l] === u[l]; l++);
    var c = a - l;
    for (e = 1; e <= c && t[a - e] === u[n - e]; e++);
    return (Hu = u.slice(l, 1 < e ? 1 - e : void 0));
  }
  function Cu(l) {
    var t = l.keyCode;
    return (
      "charCode" in l
        ? ((l = l.charCode), l === 0 && t === 13 && (l = 13))
        : (l = t),
      l === 10 && (l = 13),
      32 <= l || l === 13 ? l : 0
    );
  }
  function ju() {
    return !0;
  }
  function Xf() {
    return !1;
  }
  function Jl(l) {
    function t(a, e, u, n, c) {
      ((this._reactName = a),
        (this._targetInst = u),
        (this.type = e),
        (this.nativeEvent = n),
        (this.target = c),
        (this.currentTarget = null));
      for (var i in l)
        l.hasOwnProperty(i) && ((a = l[i]), (this[i] = a ? a(n) : n[i]));
      return (
        (this.isDefaultPrevented = (
          n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1
        )
          ? ju
          : Xf),
        (this.isPropagationStopped = Xf),
        this
      );
    }
    return (
      _(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a &&
            (a.preventDefault
              ? a.preventDefault()
              : typeof a.returnValue != "unknown" && (a.returnValue = !1),
            (this.isDefaultPrevented = ju));
        },
        stopPropagation: function () {
          var a = this.nativeEvent;
          a &&
            (a.stopPropagation
              ? a.stopPropagation()
              : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
            (this.isPropagationStopped = ju));
        },
        persist: function () {},
        isPersistent: ju,
      }),
      t
    );
  }
  var Oa = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (l) {
        return l.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Ru = Jl(Oa),
    Re = _({}, Oa, { view: 0, detail: 0 }),
    Id = Jl(Re),
    fc,
    sc,
    qe,
    qu = _({}, Re, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: dc,
      button: 0,
      buttons: 0,
      relatedTarget: function (l) {
        return l.relatedTarget === void 0
          ? l.fromElement === l.srcElement
            ? l.toElement
            : l.fromElement
          : l.relatedTarget;
      },
      movementX: function (l) {
        return "movementX" in l
          ? l.movementX
          : (l !== qe &&
              (qe && l.type === "mousemove"
                ? ((fc = l.screenX - qe.screenX), (sc = l.screenY - qe.screenY))
                : (sc = fc = 0),
              (qe = l)),
            fc);
      },
      movementY: function (l) {
        return "movementY" in l ? l.movementY : sc;
      },
    }),
    Qf = Jl(qu),
    Pd = _({}, qu, { dataTransfer: 0 }),
    lm = Jl(Pd),
    tm = _({}, Re, { relatedTarget: 0 }),
    oc = Jl(tm),
    am = _({}, Oa, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    em = Jl(am),
    um = _({}, Oa, {
      clipboardData: function (l) {
        return "clipboardData" in l ? l.clipboardData : window.clipboardData;
      },
    }),
    nm = Jl(um),
    cm = _({}, Oa, { data: 0 }),
    Zf = Jl(cm),
    im = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    fm = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    sm = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function om(l) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(l)
      : (l = sm[l])
        ? !!t[l]
        : !1;
  }
  function dc() {
    return om;
  }
  var dm = _({}, Re, {
      key: function (l) {
        if (l.key) {
          var t = im[l.key] || l.key;
          if (t !== "Unidentified") return t;
        }
        return l.type === "keypress"
          ? ((l = Cu(l)), l === 13 ? "Enter" : String.fromCharCode(l))
          : l.type === "keydown" || l.type === "keyup"
            ? fm[l.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: dc,
      charCode: function (l) {
        return l.type === "keypress" ? Cu(l) : 0;
      },
      keyCode: function (l) {
        return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
      },
      which: function (l) {
        return l.type === "keypress"
          ? Cu(l)
          : l.type === "keydown" || l.type === "keyup"
            ? l.keyCode
            : 0;
      },
    }),
    mm = Jl(dm),
    ym = _({}, qu, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Lf = Jl(ym),
    vm = _({}, Re, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: dc,
    }),
    hm = Jl(vm),
    rm = _({}, Oa, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    gm = Jl(rm),
    Sm = _({}, qu, {
      deltaX: function (l) {
        return "deltaX" in l
          ? l.deltaX
          : "wheelDeltaX" in l
            ? -l.wheelDeltaX
            : 0;
      },
      deltaY: function (l) {
        return "deltaY" in l
          ? l.deltaY
          : "wheelDeltaY" in l
            ? -l.wheelDeltaY
            : "wheelDelta" in l
              ? -l.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    bm = Jl(Sm),
    zm = _({}, Oa, { newState: 0, oldState: 0 }),
    Em = Jl(zm),
    Tm = [9, 13, 27, 32],
    mc = Rt && "CompositionEvent" in window,
    Be = null;
  Rt && "documentMode" in document && (Be = document.documentMode);
  var Am = Rt && "TextEvent" in window && !Be,
    Vf = Rt && (!mc || (Be && 8 < Be && 11 >= Be)),
    Kf = " ",
    Jf = !1;
  function wf(l, t) {
    switch (l) {
      case "keyup":
        return Tm.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Wf(l) {
    return (
      (l = l.detail),
      typeof l == "object" && "data" in l ? l.data : null
    );
  }
  var Ia = !1;
  function pm(l, t) {
    switch (l) {
      case "compositionend":
        return Wf(t);
      case "keypress":
        return t.which !== 32 ? null : ((Jf = !0), Kf);
      case "textInput":
        return ((l = t.data), l === Kf && Jf ? null : l);
      default:
        return null;
    }
  }
  function _m(l, t) {
    if (Ia)
      return l === "compositionend" || (!mc && wf(l, t))
        ? ((l = Gf()), (Hu = ic = ta = null), (Ia = !1), l)
        : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Vf && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Mm = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function $f(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!Mm[l.type] : t === "textarea";
  }
  function kf(l, t, a, e) {
    (ka ? (Fa ? Fa.push(e) : (Fa = [e])) : (ka = e),
      (t = Mn(t, "onChange")),
      0 < t.length &&
        ((a = new Ru("onChange", "change", null, a, e)),
        l.push({ event: a, listeners: t })));
  }
  var Ye = null,
    Ge = null;
  function Om(l) {
    Co(l, 0);
  }
  function Bu(l) {
    var t = He(l);
    if (Uf(t)) return l;
  }
  function Ff(l, t) {
    if (l === "change") return t;
  }
  var If = !1;
  if (Rt) {
    var yc;
    if (Rt) {
      var vc = "oninput" in document;
      if (!vc) {
        var Pf = document.createElement("div");
        (Pf.setAttribute("oninput", "return;"),
          (vc = typeof Pf.oninput == "function"));
      }
      yc = vc;
    } else yc = !1;
    If = yc && (!document.documentMode || 9 < document.documentMode);
  }
  function ls() {
    Ye && (Ye.detachEvent("onpropertychange", ts), (Ge = Ye = null));
  }
  function ts(l) {
    if (l.propertyName === "value" && Bu(Ge)) {
      var t = [];
      (kf(t, Ge, l, uc(l)), Yf(Om, t));
    }
  }
  function Dm(l, t, a) {
    l === "focusin"
      ? (ls(), (Ye = t), (Ge = a), Ye.attachEvent("onpropertychange", ts))
      : l === "focusout" && ls();
  }
  function Nm(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Bu(Ge);
  }
  function xm(l, t) {
    if (l === "click") return Bu(t);
  }
  function Um(l, t) {
    if (l === "input" || l === "change") return Bu(t);
  }
  function Hm(l, t) {
    return (l === t && (l !== 0 || 1 / l === 1 / t)) || (l !== l && t !== t);
  }
  var nt = typeof Object.is == "function" ? Object.is : Hm;
  function Xe(l, t) {
    if (nt(l, t)) return !0;
    if (
      typeof l != "object" ||
      l === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var a = Object.keys(l),
      e = Object.keys(t);
    if (a.length !== e.length) return !1;
    for (e = 0; e < a.length; e++) {
      var u = a[e];
      if (!Kn.call(t, u) || !nt(l[u], t[u])) return !1;
    }
    return !0;
  }
  function as(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function es(l, t) {
    var a = as(l);
    l = 0;
    for (var e; a; ) {
      if (a.nodeType === 3) {
        if (((e = l + a.textContent.length), l <= t && e >= t))
          return { node: a, offset: t - l };
        l = e;
      }
      l: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break l;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = as(a);
    }
  }
  function us(l, t) {
    return l && t
      ? l === t
        ? !0
        : l && l.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? us(l, t.parentNode)
            : "contains" in l
              ? l.contains(t)
              : l.compareDocumentPosition
                ? !!(l.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function ns(l) {
    l =
      l != null &&
      l.ownerDocument != null &&
      l.ownerDocument.defaultView != null
        ? l.ownerDocument.defaultView
        : window;
    for (var t = xu(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) l = t.contentWindow;
      else break;
      t = xu(l.document);
    }
    return t;
  }
  function hc(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (l.type === "text" ||
          l.type === "search" ||
          l.type === "tel" ||
          l.type === "url" ||
          l.type === "password")) ||
        t === "textarea" ||
        l.contentEditable === "true")
    );
  }
  var Cm = Rt && "documentMode" in document && 11 >= document.documentMode,
    Pa = null,
    rc = null,
    Qe = null,
    gc = !1;
  function cs(l, t, a) {
    var e =
      a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    gc ||
      Pa == null ||
      Pa !== xu(e) ||
      ((e = Pa),
      "selectionStart" in e && hc(e)
        ? (e = { start: e.selectionStart, end: e.selectionEnd })
        : ((e = (
            (e.ownerDocument && e.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (e = {
            anchorNode: e.anchorNode,
            anchorOffset: e.anchorOffset,
            focusNode: e.focusNode,
            focusOffset: e.focusOffset,
          })),
      (Qe && Xe(Qe, e)) ||
        ((Qe = e),
        (e = Mn(rc, "onSelect")),
        0 < e.length &&
          ((t = new Ru("onSelect", "select", null, t, a)),
          l.push({ event: t, listeners: e }),
          (t.target = Pa))));
  }
  function Da(l, t) {
    var a = {};
    return (
      (a[l.toLowerCase()] = t.toLowerCase()),
      (a["Webkit" + l] = "webkit" + t),
      (a["Moz" + l] = "moz" + t),
      a
    );
  }
  var le = {
      animationend: Da("Animation", "AnimationEnd"),
      animationiteration: Da("Animation", "AnimationIteration"),
      animationstart: Da("Animation", "AnimationStart"),
      transitionrun: Da("Transition", "TransitionRun"),
      transitionstart: Da("Transition", "TransitionStart"),
      transitioncancel: Da("Transition", "TransitionCancel"),
      transitionend: Da("Transition", "TransitionEnd"),
    },
    Sc = {},
    is = {};
  Rt &&
    ((is = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete le.animationend.animation,
      delete le.animationiteration.animation,
      delete le.animationstart.animation),
    "TransitionEvent" in window || delete le.transitionend.transition);
  function Na(l) {
    if (Sc[l]) return Sc[l];
    if (!le[l]) return l;
    var t = le[l],
      a;
    for (a in t) if (t.hasOwnProperty(a) && a in is) return (Sc[l] = t[a]);
    return l;
  }
  var fs = Na("animationend"),
    ss = Na("animationiteration"),
    os = Na("animationstart"),
    jm = Na("transitionrun"),
    Rm = Na("transitionstart"),
    qm = Na("transitioncancel"),
    ds = Na("transitionend"),
    ms = new Map(),
    bc =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  bc.push("scrollEnd");
  function _t(l, t) {
    (ms.set(l, t), Ma(t, [l]));
  }
  var Yu =
      typeof reportError == "function"
        ? reportError
        : function (l) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof l == "object" &&
                  l !== null &&
                  typeof l.message == "string"
                    ? String(l.message)
                    : String(l),
                error: l,
              });
              if (!window.dispatchEvent(t)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", l);
              return;
            }
            console.error(l);
          },
    ht = [],
    te = 0,
    zc = 0;
  function Gu() {
    for (var l = te, t = (zc = te = 0); t < l; ) {
      var a = ht[t];
      ht[t++] = null;
      var e = ht[t];
      ht[t++] = null;
      var u = ht[t];
      ht[t++] = null;
      var n = ht[t];
      if (((ht[t++] = null), e !== null && u !== null)) {
        var c = e.pending;
        (c === null ? (u.next = u) : ((u.next = c.next), (c.next = u)),
          (e.pending = u));
      }
      n !== 0 && ys(a, u, n);
    }
  }
  function Xu(l, t, a, e) {
    ((ht[te++] = l),
      (ht[te++] = t),
      (ht[te++] = a),
      (ht[te++] = e),
      (zc |= e),
      (l.lanes |= e),
      (l = l.alternate),
      l !== null && (l.lanes |= e));
  }
  function Ec(l, t, a, e) {
    return (Xu(l, t, a, e), Qu(l));
  }
  function xa(l, t) {
    return (Xu(l, null, null, t), Qu(l));
  }
  function ys(l, t, a) {
    l.lanes |= a;
    var e = l.alternate;
    e !== null && (e.lanes |= a);
    for (var u = !1, n = l.return; n !== null; )
      ((n.childLanes |= a),
        (e = n.alternate),
        e !== null && (e.childLanes |= a),
        n.tag === 22 &&
          ((l = n.stateNode), l === null || l._visibility & 1 || (u = !0)),
        (l = n),
        (n = n.return));
    return l.tag === 3
      ? ((n = l.stateNode),
        u &&
          t !== null &&
          ((u = 31 - ut(a)),
          (l = n.hiddenUpdates),
          (e = l[u]),
          e === null ? (l[u] = [t]) : e.push(t),
          (t.lane = a | 536870912)),
        n)
      : null;
  }
  function Qu(l) {
    if (50 < su) throw ((su = 0), (xi = null), Error(m(185)));
    for (var t = l.return; t !== null; ) ((l = t), (t = l.return));
    return l.tag === 3 ? l.stateNode : null;
  }
  var ae = {};
  function Bm(l, t, a, e) {
    ((this.tag = l),
      (this.key = a),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = e),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function ct(l, t, a, e) {
    return new Bm(l, t, a, e);
  }
  function Tc(l) {
    return ((l = l.prototype), !(!l || !l.isReactComponent));
  }
  function qt(l, t) {
    var a = l.alternate;
    return (
      a === null
        ? ((a = ct(l.tag, t, l.key, l.mode)),
          (a.elementType = l.elementType),
          (a.type = l.type),
          (a.stateNode = l.stateNode),
          (a.alternate = l),
          (l.alternate = a))
        : ((a.pendingProps = t),
          (a.type = l.type),
          (a.flags = 0),
          (a.subtreeFlags = 0),
          (a.deletions = null)),
      (a.flags = l.flags & 65011712),
      (a.childLanes = l.childLanes),
      (a.lanes = l.lanes),
      (a.child = l.child),
      (a.memoizedProps = l.memoizedProps),
      (a.memoizedState = l.memoizedState),
      (a.updateQueue = l.updateQueue),
      (t = l.dependencies),
      (a.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (a.sibling = l.sibling),
      (a.index = l.index),
      (a.ref = l.ref),
      (a.refCleanup = l.refCleanup),
      a
    );
  }
  function vs(l, t) {
    l.flags &= 65011714;
    var a = l.alternate;
    return (
      a === null
        ? ((l.childLanes = 0),
          (l.lanes = t),
          (l.child = null),
          (l.subtreeFlags = 0),
          (l.memoizedProps = null),
          (l.memoizedState = null),
          (l.updateQueue = null),
          (l.dependencies = null),
          (l.stateNode = null))
        : ((l.childLanes = a.childLanes),
          (l.lanes = a.lanes),
          (l.child = a.child),
          (l.subtreeFlags = 0),
          (l.deletions = null),
          (l.memoizedProps = a.memoizedProps),
          (l.memoizedState = a.memoizedState),
          (l.updateQueue = a.updateQueue),
          (l.type = a.type),
          (t = a.dependencies),
          (l.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      l
    );
  }
  function Zu(l, t, a, e, u, n) {
    var c = 0;
    if (((e = l), typeof l == "function")) Tc(l) && (c = 1);
    else if (typeof l == "string")
      c = Z1(l, a, U.current)
        ? 26
        : l === "html" || l === "head" || l === "body"
          ? 27
          : 5;
    else
      l: switch (l) {
        case lt:
          return (
            (l = ct(31, a, t, u)),
            (l.elementType = lt),
            (l.lanes = n),
            l
          );
        case Gl:
          return Ua(a.children, u, n, t);
        case At:
          ((c = 8), (u |= 24));
          break;
        case Ml:
          return (
            (l = ct(12, a, t, u | 2)),
            (l.elementType = Ml),
            (l.lanes = n),
            l
          );
        case Pl:
          return (
            (l = ct(13, a, t, u)),
            (l.elementType = Pl),
            (l.lanes = n),
            l
          );
        case Ol:
          return (
            (l = ct(19, a, t, u)),
            (l.elementType = Ol),
            (l.lanes = n),
            l
          );
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case gl:
                c = 10;
                break l;
              case mt:
                c = 9;
                break l;
              case Ql:
                c = 11;
                break l;
              case J:
                c = 14;
                break l;
              case Ul:
                ((c = 16), (e = null));
                break l;
            }
          ((c = 29),
            (a = Error(m(130, l === null ? "null" : typeof l, ""))),
            (e = null));
      }
    return (
      (t = ct(c, a, t, u)),
      (t.elementType = l),
      (t.type = e),
      (t.lanes = n),
      t
    );
  }
  function Ua(l, t, a, e) {
    return ((l = ct(7, l, e, t)), (l.lanes = a), l);
  }
  function Ac(l, t, a) {
    return ((l = ct(6, l, null, t)), (l.lanes = a), l);
  }
  function hs(l) {
    var t = ct(18, null, null, 0);
    return ((t.stateNode = l), t);
  }
  function pc(l, t, a) {
    return (
      (t = ct(4, l.children !== null ? l.children : [], l.key, t)),
      (t.lanes = a),
      (t.stateNode = {
        containerInfo: l.containerInfo,
        pendingChildren: null,
        implementation: l.implementation,
      }),
      t
    );
  }
  var rs = new WeakMap();
  function rt(l, t) {
    if (typeof l == "object" && l !== null) {
      var a = rs.get(l);
      return a !== void 0
        ? a
        : ((t = { value: l, source: t, stack: hf(t) }), rs.set(l, t), t);
    }
    return { value: l, source: t, stack: hf(t) };
  }
  var ee = [],
    ue = 0,
    Lu = null,
    Ze = 0,
    gt = [],
    St = 0,
    aa = null,
    Dt = 1,
    Nt = "";
  function Bt(l, t) {
    ((ee[ue++] = Ze), (ee[ue++] = Lu), (Lu = l), (Ze = t));
  }
  function gs(l, t, a) {
    ((gt[St++] = Dt), (gt[St++] = Nt), (gt[St++] = aa), (aa = l));
    var e = Dt;
    l = Nt;
    var u = 32 - ut(e) - 1;
    ((e &= ~(1 << u)), (a += 1));
    var n = 32 - ut(t) + u;
    if (30 < n) {
      var c = u - (u % 5);
      ((n = (e & ((1 << c) - 1)).toString(32)),
        (e >>= c),
        (u -= c),
        (Dt = (1 << (32 - ut(t) + u)) | (a << u) | e),
        (Nt = n + l));
    } else ((Dt = (1 << n) | (a << u) | e), (Nt = l));
  }
  function _c(l) {
    l.return !== null && (Bt(l, 1), gs(l, 1, 0));
  }
  function Mc(l) {
    for (; l === Lu; )
      ((Lu = ee[--ue]), (ee[ue] = null), (Ze = ee[--ue]), (ee[ue] = null));
    for (; l === aa; )
      ((aa = gt[--St]),
        (gt[St] = null),
        (Nt = gt[--St]),
        (gt[St] = null),
        (Dt = gt[--St]),
        (gt[St] = null));
  }
  function Ss(l, t) {
    ((gt[St++] = Dt),
      (gt[St++] = Nt),
      (gt[St++] = aa),
      (Dt = t.id),
      (Nt = t.overflow),
      (aa = l));
  }
  var jl = null,
    ml = null,
    I = !1,
    ea = null,
    bt = !1,
    Oc = Error(m(519));
  function ua(l) {
    var t = Error(
      m(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        "",
      ),
    );
    throw (Le(rt(t, l)), Oc);
  }
  function bs(l) {
    var t = l.stateNode,
      a = l.type,
      e = l.memoizedProps;
    switch (((t[Cl] = l), (t[Kl] = e), a)) {
      case "dialog":
        ($("cancel", t), $("close", t));
        break;
      case "iframe":
      case "object":
      case "embed":
        $("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < du.length; a++) $(du[a], t);
        break;
      case "source":
        $("error", t);
        break;
      case "img":
      case "image":
      case "link":
        ($("error", t), $("load", t));
        break;
      case "details":
        $("toggle", t);
        break;
      case "input":
        ($("invalid", t),
          Hf(
            t,
            e.value,
            e.defaultValue,
            e.checked,
            e.defaultChecked,
            e.type,
            e.name,
            !0,
          ));
        break;
      case "select":
        $("invalid", t);
        break;
      case "textarea":
        ($("invalid", t), jf(t, e.value, e.defaultValue, e.children));
    }
    ((a = e.children),
      (typeof a != "string" && typeof a != "number" && typeof a != "bigint") ||
      t.textContent === "" + a ||
      e.suppressHydrationWarning === !0 ||
      Bo(t.textContent, a)
        ? (e.popover != null && ($("beforetoggle", t), $("toggle", t)),
          e.onScroll != null && $("scroll", t),
          e.onScrollEnd != null && $("scrollend", t),
          e.onClick != null && (t.onclick = jt),
          (t = !0))
        : (t = !1),
      t || ua(l, !0));
  }
  function zs(l) {
    for (jl = l.return; jl; )
      switch (jl.tag) {
        case 5:
        case 31:
        case 13:
          bt = !1;
          return;
        case 27:
        case 3:
          bt = !0;
          return;
        default:
          jl = jl.return;
      }
  }
  function ne(l) {
    if (l !== jl) return !1;
    if (!I) return (zs(l), (I = !0), !1);
    var t = l.tag,
      a;
    if (
      ((a = t !== 3 && t !== 27) &&
        ((a = t === 5) &&
          ((a = l.type),
          (a =
            !(a !== "form" && a !== "button") || Ki(l.type, l.memoizedProps))),
        (a = !a)),
      a && ml && ua(l),
      zs(l),
      t === 13)
    ) {
      if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
        throw Error(m(317));
      ml = Jo(l);
    } else if (t === 31) {
      if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
        throw Error(m(317));
      ml = Jo(l);
    } else
      t === 27
        ? ((t = ml), Sa(l.type) ? ((l = ki), (ki = null), (ml = l)) : (ml = t))
        : (ml = jl ? Et(l.stateNode.nextSibling) : null);
    return !0;
  }
  function Ha() {
    ((ml = jl = null), (I = !1));
  }
  function Dc() {
    var l = ea;
    return (
      l !== null &&
        (kl === null ? (kl = l) : kl.push.apply(kl, l), (ea = null)),
      l
    );
  }
  function Le(l) {
    ea === null ? (ea = [l]) : ea.push(l);
  }
  var Nc = o(null),
    Ca = null,
    Yt = null;
  function na(l, t, a) {
    (D(Nc, t._currentValue), (t._currentValue = a));
  }
  function Gt(l) {
    ((l._currentValue = Nc.current), E(Nc));
  }
  function xc(l, t, a) {
    for (; l !== null; ) {
      var e = l.alternate;
      if (
        ((l.childLanes & t) !== t
          ? ((l.childLanes |= t), e !== null && (e.childLanes |= t))
          : e !== null && (e.childLanes & t) !== t && (e.childLanes |= t),
        l === a)
      )
        break;
      l = l.return;
    }
  }
  function Uc(l, t, a, e) {
    var u = l.child;
    for (u !== null && (u.return = l); u !== null; ) {
      var n = u.dependencies;
      if (n !== null) {
        var c = u.child;
        n = n.firstContext;
        l: for (; n !== null; ) {
          var i = n;
          n = u;
          for (var f = 0; f < t.length; f++)
            if (i.context === t[f]) {
              ((n.lanes |= a),
                (i = n.alternate),
                i !== null && (i.lanes |= a),
                xc(n.return, a, l),
                e || (c = null));
              break l;
            }
          n = i.next;
        }
      } else if (u.tag === 18) {
        if (((c = u.return), c === null)) throw Error(m(341));
        ((c.lanes |= a),
          (n = c.alternate),
          n !== null && (n.lanes |= a),
          xc(c, a, l),
          (c = null));
      } else c = u.child;
      if (c !== null) c.return = u;
      else
        for (c = u; c !== null; ) {
          if (c === l) {
            c = null;
            break;
          }
          if (((u = c.sibling), u !== null)) {
            ((u.return = c.return), (c = u));
            break;
          }
          c = c.return;
        }
      u = c;
    }
  }
  function ce(l, t, a, e) {
    l = null;
    for (var u = t, n = !1; u !== null; ) {
      if (!n) {
        if ((u.flags & 524288) !== 0) n = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var c = u.alternate;
        if (c === null) throw Error(m(387));
        if (((c = c.memoizedProps), c !== null)) {
          var i = u.type;
          nt(u.pendingProps.value, c.value) ||
            (l !== null ? l.push(i) : (l = [i]));
        }
      } else if (u === al.current) {
        if (((c = u.alternate), c === null)) throw Error(m(387));
        c.memoizedState.memoizedState !== u.memoizedState.memoizedState &&
          (l !== null ? l.push(ru) : (l = [ru]));
      }
      u = u.return;
    }
    (l !== null && Uc(t, l, a, e), (t.flags |= 262144));
  }
  function Vu(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!nt(l.context._currentValue, l.memoizedValue)) return !0;
      l = l.next;
    }
    return !1;
  }
  function ja(l) {
    ((Ca = l),
      (Yt = null),
      (l = l.dependencies),
      l !== null && (l.firstContext = null));
  }
  function Rl(l) {
    return Es(Ca, l);
  }
  function Ku(l, t) {
    return (Ca === null && ja(l), Es(l, t));
  }
  function Es(l, t) {
    var a = t._currentValue;
    if (((t = { context: t, memoizedValue: a, next: null }), Yt === null)) {
      if (l === null) throw Error(m(308));
      ((Yt = t),
        (l.dependencies = { lanes: 0, firstContext: t }),
        (l.flags |= 524288));
    } else Yt = Yt.next = t;
    return a;
  }
  var Ym =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var l = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (a, e) {
                  l.push(e);
                },
              });
            this.abort = function () {
              ((t.aborted = !0),
                l.forEach(function (a) {
                  return a();
                }));
            };
          },
    Gm = A.unstable_scheduleCallback,
    Xm = A.unstable_NormalPriority,
    El = {
      $$typeof: gl,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Hc() {
    return { controller: new Ym(), data: new Map(), refCount: 0 };
  }
  function Ve(l) {
    (l.refCount--,
      l.refCount === 0 &&
        Gm(Xm, function () {
          l.controller.abort();
        }));
  }
  var Ke = null,
    Cc = 0,
    ie = 0,
    fe = null;
  function Qm(l, t) {
    if (Ke === null) {
      var a = (Ke = []);
      ((Cc = 0),
        (ie = qi()),
        (fe = {
          status: "pending",
          value: void 0,
          then: function (e) {
            a.push(e);
          },
        }));
    }
    return (Cc++, t.then(Ts, Ts), t);
  }
  function Ts() {
    if (--Cc === 0 && Ke !== null) {
      fe !== null && (fe.status = "fulfilled");
      var l = Ke;
      ((Ke = null), (ie = 0), (fe = null));
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function Zm(l, t) {
    var a = [],
      e = {
        status: "pending",
        value: null,
        reason: null,
        then: function (u) {
          a.push(u);
        },
      };
    return (
      l.then(
        function () {
          ((e.status = "fulfilled"), (e.value = t));
          for (var u = 0; u < a.length; u++) (0, a[u])(t);
        },
        function (u) {
          for (e.status = "rejected", e.reason = u, u = 0; u < a.length; u++)
            (0, a[u])(void 0);
        },
      ),
      e
    );
  }
  var As = S.S;
  S.S = function (l, t) {
    ((co = at()),
      typeof t == "object" &&
        t !== null &&
        typeof t.then == "function" &&
        Qm(l, t),
      As !== null && As(l, t));
  };
  var Ra = o(null);
  function jc() {
    var l = Ra.current;
    return l !== null ? l : dl.pooledCache;
  }
  function Ju(l, t) {
    t === null ? D(Ra, Ra.current) : D(Ra, t.pool);
  }
  function ps() {
    var l = jc();
    return l === null ? null : { parent: El._currentValue, pool: l };
  }
  var se = Error(m(460)),
    Rc = Error(m(474)),
    wu = Error(m(542)),
    Wu = { then: function () {} };
  function _s(l) {
    return ((l = l.status), l === "fulfilled" || l === "rejected");
  }
  function Ms(l, t, a) {
    switch (
      ((a = l[a]),
      a === void 0 ? l.push(t) : a !== t && (t.then(jt, jt), (t = a)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((l = t.reason), Ds(l), l);
      default:
        if (typeof t.status == "string") t.then(jt, jt);
        else {
          if (((l = dl), l !== null && 100 < l.shellSuspendCounter))
            throw Error(m(482));
          ((l = t),
            (l.status = "pending"),
            l.then(
              function (e) {
                if (t.status === "pending") {
                  var u = t;
                  ((u.status = "fulfilled"), (u.value = e));
                }
              },
              function (e) {
                if (t.status === "pending") {
                  var u = t;
                  ((u.status = "rejected"), (u.reason = e));
                }
              },
            ));
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((l = t.reason), Ds(l), l);
        }
        throw ((Ba = t), se);
    }
  }
  function qa(l) {
    try {
      var t = l._init;
      return t(l._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function"
        ? ((Ba = a), se)
        : a;
    }
  }
  var Ba = null;
  function Os() {
    if (Ba === null) throw Error(m(459));
    var l = Ba;
    return ((Ba = null), l);
  }
  function Ds(l) {
    if (l === se || l === wu) throw Error(m(483));
  }
  var oe = null,
    Je = 0;
  function $u(l) {
    var t = Je;
    return ((Je += 1), oe === null && (oe = []), Ms(oe, l, t));
  }
  function we(l, t) {
    ((t = t.props.ref), (l.ref = t !== void 0 ? t : null));
  }
  function ku(l, t) {
    throw t.$$typeof === el
      ? Error(m(525))
      : ((l = Object.prototype.toString.call(t)),
        Error(
          m(
            31,
            l === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : l,
          ),
        ));
  }
  function Ns(l) {
    function t(d, s) {
      if (l) {
        var y = d.deletions;
        y === null ? ((d.deletions = [s]), (d.flags |= 16)) : y.push(s);
      }
    }
    function a(d, s) {
      if (!l) return null;
      for (; s !== null; ) (t(d, s), (s = s.sibling));
      return null;
    }
    function e(d) {
      for (var s = new Map(); d !== null; )
        (d.key !== null ? s.set(d.key, d) : s.set(d.index, d), (d = d.sibling));
      return s;
    }
    function u(d, s) {
      return ((d = qt(d, s)), (d.index = 0), (d.sibling = null), d);
    }
    function n(d, s, y) {
      return (
        (d.index = y),
        l
          ? ((y = d.alternate),
            y !== null
              ? ((y = y.index), y < s ? ((d.flags |= 67108866), s) : y)
              : ((d.flags |= 67108866), s))
          : ((d.flags |= 1048576), s)
      );
    }
    function c(d) {
      return (l && d.alternate === null && (d.flags |= 67108866), d);
    }
    function i(d, s, y, b) {
      return s === null || s.tag !== 6
        ? ((s = Ac(y, d.mode, b)), (s.return = d), s)
        : ((s = u(s, y)), (s.return = d), s);
    }
    function f(d, s, y, b) {
      var j = y.type;
      return j === Gl
        ? g(d, s, y.props.children, b, y.key)
        : s !== null &&
            (s.elementType === j ||
              (typeof j == "object" &&
                j !== null &&
                j.$$typeof === Ul &&
                qa(j) === s.type))
          ? ((s = u(s, y.props)), we(s, y), (s.return = d), s)
          : ((s = Zu(y.type, y.key, y.props, null, d.mode, b)),
            we(s, y),
            (s.return = d),
            s);
    }
    function v(d, s, y, b) {
      return s === null ||
        s.tag !== 4 ||
        s.stateNode.containerInfo !== y.containerInfo ||
        s.stateNode.implementation !== y.implementation
        ? ((s = pc(y, d.mode, b)), (s.return = d), s)
        : ((s = u(s, y.children || [])), (s.return = d), s);
    }
    function g(d, s, y, b, j) {
      return s === null || s.tag !== 7
        ? ((s = Ua(y, d.mode, b, j)), (s.return = d), s)
        : ((s = u(s, y)), (s.return = d), s);
    }
    function z(d, s, y) {
      if (
        (typeof s == "string" && s !== "") ||
        typeof s == "number" ||
        typeof s == "bigint"
      )
        return ((s = Ac("" + s, d.mode, y)), (s.return = d), s);
      if (typeof s == "object" && s !== null) {
        switch (s.$$typeof) {
          case Yl:
            return (
              (y = Zu(s.type, s.key, s.props, null, d.mode, y)),
              we(y, s),
              (y.return = d),
              y
            );
          case xl:
            return ((s = pc(s, d.mode, y)), (s.return = d), s);
          case Ul:
            return ((s = qa(s)), z(d, s, y));
        }
        if (pt(s) || Hl(s))
          return ((s = Ua(s, d.mode, y, null)), (s.return = d), s);
        if (typeof s.then == "function") return z(d, $u(s), y);
        if (s.$$typeof === gl) return z(d, Ku(d, s), y);
        ku(d, s);
      }
      return null;
    }
    function h(d, s, y, b) {
      var j = s !== null ? s.key : null;
      if (
        (typeof y == "string" && y !== "") ||
        typeof y == "number" ||
        typeof y == "bigint"
      )
        return j !== null ? null : i(d, s, "" + y, b);
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case Yl:
            return y.key === j ? f(d, s, y, b) : null;
          case xl:
            return y.key === j ? v(d, s, y, b) : null;
          case Ul:
            return ((y = qa(y)), h(d, s, y, b));
        }
        if (pt(y) || Hl(y)) return j !== null ? null : g(d, s, y, b, null);
        if (typeof y.then == "function") return h(d, s, $u(y), b);
        if (y.$$typeof === gl) return h(d, s, Ku(d, y), b);
        ku(d, y);
      }
      return null;
    }
    function r(d, s, y, b, j) {
      if (
        (typeof b == "string" && b !== "") ||
        typeof b == "number" ||
        typeof b == "bigint"
      )
        return ((d = d.get(y) || null), i(s, d, "" + b, j));
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case Yl:
            return (
              (d = d.get(b.key === null ? y : b.key) || null),
              f(s, d, b, j)
            );
          case xl:
            return (
              (d = d.get(b.key === null ? y : b.key) || null),
              v(s, d, b, j)
            );
          case Ul:
            return ((b = qa(b)), r(d, s, y, b, j));
        }
        if (pt(b) || Hl(b))
          return ((d = d.get(y) || null), g(s, d, b, j, null));
        if (typeof b.then == "function") return r(d, s, y, $u(b), j);
        if (b.$$typeof === gl) return r(d, s, y, Ku(s, b), j);
        ku(s, b);
      }
      return null;
    }
    function N(d, s, y, b) {
      for (
        var j = null, P = null, H = s, V = (s = 0), F = null;
        H !== null && V < y.length;
        V++
      ) {
        H.index > V ? ((F = H), (H = null)) : (F = H.sibling);
        var ll = h(d, H, y[V], b);
        if (ll === null) {
          H === null && (H = F);
          break;
        }
        (l && H && ll.alternate === null && t(d, H),
          (s = n(ll, s, V)),
          P === null ? (j = ll) : (P.sibling = ll),
          (P = ll),
          (H = F));
      }
      if (V === y.length) return (a(d, H), I && Bt(d, V), j);
      if (H === null) {
        for (; V < y.length; V++)
          ((H = z(d, y[V], b)),
            H !== null &&
              ((s = n(H, s, V)),
              P === null ? (j = H) : (P.sibling = H),
              (P = H)));
        return (I && Bt(d, V), j);
      }
      for (H = e(H); V < y.length; V++)
        ((F = r(H, d, V, y[V], b)),
          F !== null &&
            (l && F.alternate !== null && H.delete(F.key === null ? V : F.key),
            (s = n(F, s, V)),
            P === null ? (j = F) : (P.sibling = F),
            (P = F)));
      return (
        l &&
          H.forEach(function (Aa) {
            return t(d, Aa);
          }),
        I && Bt(d, V),
        j
      );
    }
    function B(d, s, y, b) {
      if (y == null) throw Error(m(151));
      for (
        var j = null, P = null, H = s, V = (s = 0), F = null, ll = y.next();
        H !== null && !ll.done;
        V++, ll = y.next()
      ) {
        H.index > V ? ((F = H), (H = null)) : (F = H.sibling);
        var Aa = h(d, H, ll.value, b);
        if (Aa === null) {
          H === null && (H = F);
          break;
        }
        (l && H && Aa.alternate === null && t(d, H),
          (s = n(Aa, s, V)),
          P === null ? (j = Aa) : (P.sibling = Aa),
          (P = Aa),
          (H = F));
      }
      if (ll.done) return (a(d, H), I && Bt(d, V), j);
      if (H === null) {
        for (; !ll.done; V++, ll = y.next())
          ((ll = z(d, ll.value, b)),
            ll !== null &&
              ((s = n(ll, s, V)),
              P === null ? (j = ll) : (P.sibling = ll),
              (P = ll)));
        return (I && Bt(d, V), j);
      }
      for (H = e(H); !ll.done; V++, ll = y.next())
        ((ll = r(H, d, V, ll.value, b)),
          ll !== null &&
            (l &&
              ll.alternate !== null &&
              H.delete(ll.key === null ? V : ll.key),
            (s = n(ll, s, V)),
            P === null ? (j = ll) : (P.sibling = ll),
            (P = ll)));
      return (
        l &&
          H.forEach(function (P1) {
            return t(d, P1);
          }),
        I && Bt(d, V),
        j
      );
    }
    function sl(d, s, y, b) {
      if (
        (typeof y == "object" &&
          y !== null &&
          y.type === Gl &&
          y.key === null &&
          (y = y.props.children),
        typeof y == "object" && y !== null)
      ) {
        switch (y.$$typeof) {
          case Yl:
            l: {
              for (var j = y.key; s !== null; ) {
                if (s.key === j) {
                  if (((j = y.type), j === Gl)) {
                    if (s.tag === 7) {
                      (a(d, s.sibling),
                        (b = u(s, y.props.children)),
                        (b.return = d),
                        (d = b));
                      break l;
                    }
                  } else if (
                    s.elementType === j ||
                    (typeof j == "object" &&
                      j !== null &&
                      j.$$typeof === Ul &&
                      qa(j) === s.type)
                  ) {
                    (a(d, s.sibling),
                      (b = u(s, y.props)),
                      we(b, y),
                      (b.return = d),
                      (d = b));
                    break l;
                  }
                  a(d, s);
                  break;
                } else t(d, s);
                s = s.sibling;
              }
              y.type === Gl
                ? ((b = Ua(y.props.children, d.mode, b, y.key)),
                  (b.return = d),
                  (d = b))
                : ((b = Zu(y.type, y.key, y.props, null, d.mode, b)),
                  we(b, y),
                  (b.return = d),
                  (d = b));
            }
            return c(d);
          case xl:
            l: {
              for (j = y.key; s !== null; ) {
                if (s.key === j)
                  if (
                    s.tag === 4 &&
                    s.stateNode.containerInfo === y.containerInfo &&
                    s.stateNode.implementation === y.implementation
                  ) {
                    (a(d, s.sibling),
                      (b = u(s, y.children || [])),
                      (b.return = d),
                      (d = b));
                    break l;
                  } else {
                    a(d, s);
                    break;
                  }
                else t(d, s);
                s = s.sibling;
              }
              ((b = pc(y, d.mode, b)), (b.return = d), (d = b));
            }
            return c(d);
          case Ul:
            return ((y = qa(y)), sl(d, s, y, b));
        }
        if (pt(y)) return N(d, s, y, b);
        if (Hl(y)) {
          if (((j = Hl(y)), typeof j != "function")) throw Error(m(150));
          return ((y = j.call(y)), B(d, s, y, b));
        }
        if (typeof y.then == "function") return sl(d, s, $u(y), b);
        if (y.$$typeof === gl) return sl(d, s, Ku(d, y), b);
        ku(d, y);
      }
      return (typeof y == "string" && y !== "") ||
        typeof y == "number" ||
        typeof y == "bigint"
        ? ((y = "" + y),
          s !== null && s.tag === 6
            ? (a(d, s.sibling), (b = u(s, y)), (b.return = d), (d = b))
            : (a(d, s), (b = Ac(y, d.mode, b)), (b.return = d), (d = b)),
          c(d))
        : a(d, s);
    }
    return function (d, s, y, b) {
      try {
        Je = 0;
        var j = sl(d, s, y, b);
        return ((oe = null), j);
      } catch (H) {
        if (H === se || H === wu) throw H;
        var P = ct(29, H, null, d.mode);
        return ((P.lanes = b), (P.return = d), P);
      } finally {
      }
    };
  }
  var Ya = Ns(!0),
    xs = Ns(!1),
    ca = !1;
  function qc(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Bc(l, t) {
    ((l = l.updateQueue),
      t.updateQueue === l &&
        (t.updateQueue = {
          baseState: l.baseState,
          firstBaseUpdate: l.firstBaseUpdate,
          lastBaseUpdate: l.lastBaseUpdate,
          shared: l.shared,
          callbacks: null,
        }));
  }
  function ia(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function fa(l, t, a) {
    var e = l.updateQueue;
    if (e === null) return null;
    if (((e = e.shared), (tl & 2) !== 0)) {
      var u = e.pending;
      return (
        u === null ? (t.next = t) : ((t.next = u.next), (u.next = t)),
        (e.pending = t),
        (t = Qu(l)),
        ys(l, null, a),
        t
      );
    }
    return (Xu(l, e, t, a), Qu(l));
  }
  function We(l, t, a) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (a & 4194048) !== 0))
    ) {
      var e = t.lanes;
      ((e &= l.pendingLanes), (a |= e), (t.lanes = a), Ef(l, a));
    }
  }
  function Yc(l, t) {
    var a = l.updateQueue,
      e = l.alternate;
    if (e !== null && ((e = e.updateQueue), a === e)) {
      var u = null,
        n = null;
      if (((a = a.firstBaseUpdate), a !== null)) {
        do {
          var c = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null,
          };
          (n === null ? (u = n = c) : (n = n.next = c), (a = a.next));
        } while (a !== null);
        n === null ? (u = n = t) : (n = n.next = t);
      } else u = n = t;
      ((a = {
        baseState: e.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: n,
        shared: e.shared,
        callbacks: e.callbacks,
      }),
        (l.updateQueue = a));
      return;
    }
    ((l = a.lastBaseUpdate),
      l === null ? (a.firstBaseUpdate = t) : (l.next = t),
      (a.lastBaseUpdate = t));
  }
  var Gc = !1;
  function $e() {
    if (Gc) {
      var l = fe;
      if (l !== null) throw l;
    }
  }
  function ke(l, t, a, e) {
    Gc = !1;
    var u = l.updateQueue;
    ca = !1;
    var n = u.firstBaseUpdate,
      c = u.lastBaseUpdate,
      i = u.shared.pending;
    if (i !== null) {
      u.shared.pending = null;
      var f = i,
        v = f.next;
      ((f.next = null), c === null ? (n = v) : (c.next = v), (c = f));
      var g = l.alternate;
      g !== null &&
        ((g = g.updateQueue),
        (i = g.lastBaseUpdate),
        i !== c &&
          (i === null ? (g.firstBaseUpdate = v) : (i.next = v),
          (g.lastBaseUpdate = f)));
    }
    if (n !== null) {
      var z = u.baseState;
      ((c = 0), (g = v = f = null), (i = n));
      do {
        var h = i.lane & -536870913,
          r = h !== i.lane;
        if (r ? (k & h) === h : (e & h) === h) {
          (h !== 0 && h === ie && (Gc = !0),
            g !== null &&
              (g = g.next =
                {
                  lane: 0,
                  tag: i.tag,
                  payload: i.payload,
                  callback: null,
                  next: null,
                }));
          l: {
            var N = l,
              B = i;
            h = t;
            var sl = a;
            switch (B.tag) {
              case 1:
                if (((N = B.payload), typeof N == "function")) {
                  z = N.call(sl, z, h);
                  break l;
                }
                z = N;
                break l;
              case 3:
                N.flags = (N.flags & -65537) | 128;
              case 0:
                if (
                  ((N = B.payload),
                  (h = typeof N == "function" ? N.call(sl, z, h) : N),
                  h == null)
                )
                  break l;
                z = _({}, z, h);
                break l;
              case 2:
                ca = !0;
            }
          }
          ((h = i.callback),
            h !== null &&
              ((l.flags |= 64),
              r && (l.flags |= 8192),
              (r = u.callbacks),
              r === null ? (u.callbacks = [h]) : r.push(h)));
        } else
          ((r = {
            lane: h,
            tag: i.tag,
            payload: i.payload,
            callback: i.callback,
            next: null,
          }),
            g === null ? ((v = g = r), (f = z)) : (g = g.next = r),
            (c |= h));
        if (((i = i.next), i === null)) {
          if (((i = u.shared.pending), i === null)) break;
          ((r = i),
            (i = r.next),
            (r.next = null),
            (u.lastBaseUpdate = r),
            (u.shared.pending = null));
        }
      } while (!0);
      (g === null && (f = z),
        (u.baseState = f),
        (u.firstBaseUpdate = v),
        (u.lastBaseUpdate = g),
        n === null && (u.shared.lanes = 0),
        (ya |= c),
        (l.lanes = c),
        (l.memoizedState = z));
    }
  }
  function Us(l, t) {
    if (typeof l != "function") throw Error(m(191, l));
    l.call(t);
  }
  function Hs(l, t) {
    var a = l.callbacks;
    if (a !== null)
      for (l.callbacks = null, l = 0; l < a.length; l++) Us(a[l], t);
  }
  var de = o(null),
    Fu = o(0);
  function Cs(l, t) {
    ((l = Wt), D(Fu, l), D(de, t), (Wt = l | t.baseLanes));
  }
  function Xc() {
    (D(Fu, Wt), D(de, de.current));
  }
  function Qc() {
    ((Wt = Fu.current), E(de), E(Fu));
  }
  var it = o(null),
    zt = null;
  function sa(l) {
    var t = l.alternate;
    (D(bl, bl.current & 1),
      D(it, l),
      zt === null &&
        (t === null || de.current !== null || t.memoizedState !== null) &&
        (zt = l));
  }
  function Zc(l) {
    (D(bl, bl.current), D(it, l), zt === null && (zt = l));
  }
  function js(l) {
    l.tag === 22
      ? (D(bl, bl.current), D(it, l), zt === null && (zt = l))
      : oa();
  }
  function oa() {
    (D(bl, bl.current), D(it, it.current));
  }
  function ft(l) {
    (E(it), zt === l && (zt = null), E(bl));
  }
  var bl = o(0);
  function Iu(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && ((a = a.dehydrated), a === null || Wi(a) || $i(a)))
          return t;
      } else if (
        t.tag === 19 &&
        (t.memoizedProps.revealOrder === "forwards" ||
          t.memoizedProps.revealOrder === "backwards" ||
          t.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          t.memoizedProps.revealOrder === "together")
      ) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === l) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var Xt = 0,
    L = null,
    il = null,
    Tl = null,
    Pu = !1,
    me = !1,
    Ga = !1,
    ln = 0,
    Fe = 0,
    ye = null,
    Lm = 0;
  function hl() {
    throw Error(m(321));
  }
  function Lc(l, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < l.length; a++)
      if (!nt(l[a], t[a])) return !1;
    return !0;
  }
  function Vc(l, t, a, e, u, n) {
    return (
      (Xt = n),
      (L = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (S.H = l === null || l.memoizedState === null ? g0 : ni),
      (Ga = !1),
      (n = a(e, u)),
      (Ga = !1),
      me && (n = qs(t, a, e, u)),
      Rs(l),
      n
    );
  }
  function Rs(l) {
    S.H = lu;
    var t = il !== null && il.next !== null;
    if (((Xt = 0), (Tl = il = L = null), (Pu = !1), (Fe = 0), (ye = null), t))
      throw Error(m(300));
    l === null ||
      Al ||
      ((l = l.dependencies), l !== null && Vu(l) && (Al = !0));
  }
  function qs(l, t, a, e) {
    L = l;
    var u = 0;
    do {
      if ((me && (ye = null), (Fe = 0), (me = !1), 25 <= u))
        throw Error(m(301));
      if (((u += 1), (Tl = il = null), l.updateQueue != null)) {
        var n = l.updateQueue;
        ((n.lastEffect = null),
          (n.events = null),
          (n.stores = null),
          n.memoCache != null && (n.memoCache.index = 0));
      }
      ((S.H = S0), (n = t(a, e)));
    } while (me);
    return n;
  }
  function Vm() {
    var l = S.H,
      t = l.useState()[0];
    return (
      (t = typeof t.then == "function" ? Ie(t) : t),
      (l = l.useState()[0]),
      (il !== null ? il.memoizedState : null) !== l && (L.flags |= 1024),
      t
    );
  }
  function Kc() {
    var l = ln !== 0;
    return ((ln = 0), l);
  }
  function Jc(l, t, a) {
    ((t.updateQueue = l.updateQueue), (t.flags &= -2053), (l.lanes &= ~a));
  }
  function wc(l) {
    if (Pu) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        (t !== null && (t.pending = null), (l = l.next));
      }
      Pu = !1;
    }
    ((Xt = 0), (Tl = il = L = null), (me = !1), (Fe = ln = 0), (ye = null));
  }
  function Ll() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (Tl === null ? (L.memoizedState = Tl = l) : (Tl = Tl.next = l), Tl);
  }
  function zl() {
    if (il === null) {
      var l = L.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = il.next;
    var t = Tl === null ? L.memoizedState : Tl.next;
    if (t !== null) ((Tl = t), (il = l));
    else {
      if (l === null)
        throw L.alternate === null ? Error(m(467)) : Error(m(310));
      ((il = l),
        (l = {
          memoizedState: il.memoizedState,
          baseState: il.baseState,
          baseQueue: il.baseQueue,
          queue: il.queue,
          next: null,
        }),
        Tl === null ? (L.memoizedState = Tl = l) : (Tl = Tl.next = l));
    }
    return Tl;
  }
  function tn() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ie(l) {
    var t = Fe;
    return (
      (Fe += 1),
      ye === null && (ye = []),
      (l = Ms(ye, l, t)),
      (t = L),
      (Tl === null ? t.memoizedState : Tl.next) === null &&
        ((t = t.alternate),
        (S.H = t === null || t.memoizedState === null ? g0 : ni)),
      l
    );
  }
  function an(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Ie(l);
      if (l.$$typeof === gl) return Rl(l);
    }
    throw Error(m(438, String(l)));
  }
  function Wc(l) {
    var t = null,
      a = L.updateQueue;
    if ((a !== null && (t = a.memoCache), t == null)) {
      var e = L.alternate;
      e !== null &&
        ((e = e.updateQueue),
        e !== null &&
          ((e = e.memoCache),
          e != null &&
            (t = {
              data: e.data.map(function (u) {
                return u.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      a === null && ((a = tn()), (L.updateQueue = a)),
      (a.memoCache = t),
      (a = t.data[t.index]),
      a === void 0)
    )
      for (a = t.data[t.index] = Array(l), e = 0; e < l; e++) a[e] = It;
    return (t.index++, a);
  }
  function Qt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function en(l) {
    var t = zl();
    return $c(t, il, l);
  }
  function $c(l, t, a) {
    var e = l.queue;
    if (e === null) throw Error(m(311));
    e.lastRenderedReducer = a;
    var u = l.baseQueue,
      n = e.pending;
    if (n !== null) {
      if (u !== null) {
        var c = u.next;
        ((u.next = n.next), (n.next = c));
      }
      ((t.baseQueue = u = n), (e.pending = null));
    }
    if (((n = l.baseState), u === null)) l.memoizedState = n;
    else {
      t = u.next;
      var i = (c = null),
        f = null,
        v = t,
        g = !1;
      do {
        var z = v.lane & -536870913;
        if (z !== v.lane ? (k & z) === z : (Xt & z) === z) {
          var h = v.revertLane;
          if (h === 0)
            (f !== null &&
              (f = f.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: v.action,
                  hasEagerState: v.hasEagerState,
                  eagerState: v.eagerState,
                  next: null,
                }),
              z === ie && (g = !0));
          else if ((Xt & h) === h) {
            ((v = v.next), h === ie && (g = !0));
            continue;
          } else
            ((z = {
              lane: 0,
              revertLane: v.revertLane,
              gesture: null,
              action: v.action,
              hasEagerState: v.hasEagerState,
              eagerState: v.eagerState,
              next: null,
            }),
              f === null ? ((i = f = z), (c = n)) : (f = f.next = z),
              (L.lanes |= h),
              (ya |= h));
          ((z = v.action),
            Ga && a(n, z),
            (n = v.hasEagerState ? v.eagerState : a(n, z)));
        } else
          ((h = {
            lane: z,
            revertLane: v.revertLane,
            gesture: v.gesture,
            action: v.action,
            hasEagerState: v.hasEagerState,
            eagerState: v.eagerState,
            next: null,
          }),
            f === null ? ((i = f = h), (c = n)) : (f = f.next = h),
            (L.lanes |= z),
            (ya |= z));
        v = v.next;
      } while (v !== null && v !== t);
      if (
        (f === null ? (c = n) : (f.next = i),
        !nt(n, l.memoizedState) && ((Al = !0), g && ((a = fe), a !== null)))
      )
        throw a;
      ((l.memoizedState = n),
        (l.baseState = c),
        (l.baseQueue = f),
        (e.lastRenderedState = n));
    }
    return (u === null && (e.lanes = 0), [l.memoizedState, e.dispatch]);
  }
  function kc(l) {
    var t = zl(),
      a = t.queue;
    if (a === null) throw Error(m(311));
    a.lastRenderedReducer = l;
    var e = a.dispatch,
      u = a.pending,
      n = t.memoizedState;
    if (u !== null) {
      a.pending = null;
      var c = (u = u.next);
      do ((n = l(n, c.action)), (c = c.next));
      while (c !== u);
      (nt(n, t.memoizedState) || (Al = !0),
        (t.memoizedState = n),
        t.baseQueue === null && (t.baseState = n),
        (a.lastRenderedState = n));
    }
    return [n, e];
  }
  function Bs(l, t, a) {
    var e = L,
      u = zl(),
      n = I;
    if (n) {
      if (a === void 0) throw Error(m(407));
      a = a();
    } else a = t();
    var c = !nt((il || u).memoizedState, a);
    if (
      (c && ((u.memoizedState = a), (Al = !0)),
      (u = u.queue),
      Pc(Xs.bind(null, e, u, l), [l]),
      u.getSnapshot !== t || c || (Tl !== null && Tl.memoizedState.tag & 1))
    ) {
      if (
        ((e.flags |= 2048),
        ve(9, { destroy: void 0 }, Gs.bind(null, e, u, a, t), null),
        dl === null)
      )
        throw Error(m(349));
      n || (Xt & 127) !== 0 || Ys(e, t, a);
    }
    return a;
  }
  function Ys(l, t, a) {
    ((l.flags |= 16384),
      (l = { getSnapshot: t, value: a }),
      (t = L.updateQueue),
      t === null
        ? ((t = tn()), (L.updateQueue = t), (t.stores = [l]))
        : ((a = t.stores), a === null ? (t.stores = [l]) : a.push(l)));
  }
  function Gs(l, t, a, e) {
    ((t.value = a), (t.getSnapshot = e), Qs(t) && Zs(l));
  }
  function Xs(l, t, a) {
    return a(function () {
      Qs(t) && Zs(l);
    });
  }
  function Qs(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var a = t();
      return !nt(l, a);
    } catch {
      return !0;
    }
  }
  function Zs(l) {
    var t = xa(l, 2);
    t !== null && Fl(t, l, 2);
  }
  function Fc(l) {
    var t = Ll();
    if (typeof l == "function") {
      var a = l;
      if (((l = a()), Ga)) {
        Pt(!0);
        try {
          a();
        } finally {
          Pt(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = l),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Qt,
        lastRenderedState: l,
      }),
      t
    );
  }
  function Ls(l, t, a, e) {
    return ((l.baseState = a), $c(l, il, typeof e == "function" ? e : Qt));
  }
  function Km(l, t, a, e, u) {
    if (cn(l)) throw Error(m(485));
    if (((l = t.action), l !== null)) {
      var n = {
        payload: u,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (c) {
          n.listeners.push(c);
        },
      };
      (S.T !== null ? a(!0) : (n.isTransition = !1),
        e(n),
        (a = t.pending),
        a === null
          ? ((n.next = t.pending = n), Vs(t, n))
          : ((n.next = a.next), (t.pending = a.next = n)));
    }
  }
  function Vs(l, t) {
    var a = t.action,
      e = t.payload,
      u = l.state;
    if (t.isTransition) {
      var n = S.T,
        c = {};
      S.T = c;
      try {
        var i = a(u, e),
          f = S.S;
        (f !== null && f(c, i), Ks(l, t, i));
      } catch (v) {
        Ic(l, t, v);
      } finally {
        (n !== null && c.types !== null && (n.types = c.types), (S.T = n));
      }
    } else
      try {
        ((n = a(u, e)), Ks(l, t, n));
      } catch (v) {
        Ic(l, t, v);
      }
  }
  function Ks(l, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function"
      ? a.then(
          function (e) {
            Js(l, t, e);
          },
          function (e) {
            return Ic(l, t, e);
          },
        )
      : Js(l, t, a);
  }
  function Js(l, t, a) {
    ((t.status = "fulfilled"),
      (t.value = a),
      ws(t),
      (l.state = a),
      (t = l.pending),
      t !== null &&
        ((a = t.next),
        a === t ? (l.pending = null) : ((a = a.next), (t.next = a), Vs(l, a))));
  }
  function Ic(l, t, a) {
    var e = l.pending;
    if (((l.pending = null), e !== null)) {
      e = e.next;
      do ((t.status = "rejected"), (t.reason = a), ws(t), (t = t.next));
      while (t !== e);
    }
    l.action = null;
  }
  function ws(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function Ws(l, t) {
    return t;
  }
  function $s(l, t) {
    if (I) {
      var a = dl.formState;
      if (a !== null) {
        l: {
          var e = L;
          if (I) {
            if (ml) {
              t: {
                for (var u = ml, n = bt; u.nodeType !== 8; ) {
                  if (!n) {
                    u = null;
                    break t;
                  }
                  if (((u = Et(u.nextSibling)), u === null)) {
                    u = null;
                    break t;
                  }
                }
                ((n = u.data), (u = n === "F!" || n === "F" ? u : null));
              }
              if (u) {
                ((ml = Et(u.nextSibling)), (e = u.data === "F!"));
                break l;
              }
            }
            ua(e);
          }
          e = !1;
        }
        e && (t = a[0]);
      }
    }
    return (
      (a = Ll()),
      (a.memoizedState = a.baseState = t),
      (e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ws,
        lastRenderedState: t,
      }),
      (a.queue = e),
      (a = v0.bind(null, L, e)),
      (e.dispatch = a),
      (e = Fc(!1)),
      (n = ui.bind(null, L, !1, e.queue)),
      (e = Ll()),
      (u = { state: t, dispatch: null, action: l, pending: null }),
      (e.queue = u),
      (a = Km.bind(null, L, u, n, a)),
      (u.dispatch = a),
      (e.memoizedState = l),
      [t, a, !1]
    );
  }
  function ks(l) {
    var t = zl();
    return Fs(t, il, l);
  }
  function Fs(l, t, a) {
    if (
      ((t = $c(l, t, Ws)[0]),
      (l = en(Qt)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var e = Ie(t);
      } catch (c) {
        throw c === se ? wu : c;
      }
    else e = t;
    t = zl();
    var u = t.queue,
      n = u.dispatch;
    return (
      a !== t.memoizedState &&
        ((L.flags |= 2048),
        ve(9, { destroy: void 0 }, Jm.bind(null, u, a), null)),
      [e, n, l]
    );
  }
  function Jm(l, t) {
    l.action = t;
  }
  function Is(l) {
    var t = zl(),
      a = il;
    if (a !== null) return Fs(t, a, l);
    (zl(), (t = t.memoizedState), (a = zl()));
    var e = a.queue.dispatch;
    return ((a.memoizedState = l), [t, e, !1]);
  }
  function ve(l, t, a, e) {
    return (
      (l = { tag: l, create: a, deps: e, inst: t, next: null }),
      (t = L.updateQueue),
      t === null && ((t = tn()), (L.updateQueue = t)),
      (a = t.lastEffect),
      a === null
        ? (t.lastEffect = l.next = l)
        : ((e = a.next), (a.next = l), (l.next = e), (t.lastEffect = l)),
      l
    );
  }
  function Ps() {
    return zl().memoizedState;
  }
  function un(l, t, a, e) {
    var u = Ll();
    ((L.flags |= l),
      (u.memoizedState = ve(
        1 | t,
        { destroy: void 0 },
        a,
        e === void 0 ? null : e,
      )));
  }
  function nn(l, t, a, e) {
    var u = zl();
    e = e === void 0 ? null : e;
    var n = u.memoizedState.inst;
    il !== null && e !== null && Lc(e, il.memoizedState.deps)
      ? (u.memoizedState = ve(t, n, a, e))
      : ((L.flags |= l), (u.memoizedState = ve(1 | t, n, a, e)));
  }
  function l0(l, t) {
    un(8390656, 8, l, t);
  }
  function Pc(l, t) {
    nn(2048, 8, l, t);
  }
  function wm(l) {
    L.flags |= 4;
    var t = L.updateQueue;
    if (t === null) ((t = tn()), (L.updateQueue = t), (t.events = [l]));
    else {
      var a = t.events;
      a === null ? (t.events = [l]) : a.push(l);
    }
  }
  function t0(l) {
    var t = zl().memoizedState;
    return (
      wm({ ref: t, nextImpl: l }),
      function () {
        if ((tl & 2) !== 0) throw Error(m(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function a0(l, t) {
    return nn(4, 2, l, t);
  }
  function e0(l, t) {
    return nn(4, 4, l, t);
  }
  function u0(l, t) {
    if (typeof t == "function") {
      l = l();
      var a = t(l);
      return function () {
        typeof a == "function" ? a() : t(null);
      };
    }
    if (t != null)
      return (
        (l = l()),
        (t.current = l),
        function () {
          t.current = null;
        }
      );
  }
  function n0(l, t, a) {
    ((a = a != null ? a.concat([l]) : null), nn(4, 4, u0.bind(null, t, l), a));
  }
  function li() {}
  function c0(l, t) {
    var a = zl();
    t = t === void 0 ? null : t;
    var e = a.memoizedState;
    return t !== null && Lc(t, e[1]) ? e[0] : ((a.memoizedState = [l, t]), l);
  }
  function i0(l, t) {
    var a = zl();
    t = t === void 0 ? null : t;
    var e = a.memoizedState;
    if (t !== null && Lc(t, e[1])) return e[0];
    if (((e = l()), Ga)) {
      Pt(!0);
      try {
        l();
      } finally {
        Pt(!1);
      }
    }
    return ((a.memoizedState = [e, t]), e);
  }
  function ti(l, t, a) {
    return a === void 0 || ((Xt & 1073741824) !== 0 && (k & 261930) === 0)
      ? (l.memoizedState = t)
      : ((l.memoizedState = a), (l = fo()), (L.lanes |= l), (ya |= l), a);
  }
  function f0(l, t, a, e) {
    return nt(a, t)
      ? a
      : de.current !== null
        ? ((l = ti(l, a, e)), nt(l, t) || (Al = !0), l)
        : (Xt & 42) === 0 || ((Xt & 1073741824) !== 0 && (k & 261930) === 0)
          ? ((Al = !0), (l.memoizedState = a))
          : ((l = fo()), (L.lanes |= l), (ya |= l), t);
  }
  function s0(l, t, a, e, u) {
    var n = M.p;
    M.p = n !== 0 && 8 > n ? n : 8;
    var c = S.T,
      i = {};
    ((S.T = i), ui(l, !1, t, a));
    try {
      var f = u(),
        v = S.S;
      if (
        (v !== null && v(i, f),
        f !== null && typeof f == "object" && typeof f.then == "function")
      ) {
        var g = Zm(f, e);
        Pe(l, t, g, dt(l));
      } else Pe(l, t, e, dt(l));
    } catch (z) {
      Pe(l, t, { then: function () {}, status: "rejected", reason: z }, dt());
    } finally {
      ((M.p = n),
        c !== null && i.types !== null && (c.types = i.types),
        (S.T = c));
    }
  }
  function Wm() {}
  function ai(l, t, a, e) {
    if (l.tag !== 5) throw Error(m(476));
    var u = o0(l).queue;
    s0(
      l,
      u,
      t,
      Y,
      a === null
        ? Wm
        : function () {
            return (d0(l), a(e));
          },
    );
  }
  function o0(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: Y,
      baseState: Y,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Qt,
        lastRenderedState: Y,
      },
      next: null,
    };
    var a = {};
    return (
      (t.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Qt,
          lastRenderedState: a,
        },
        next: null,
      }),
      (l.memoizedState = t),
      (l = l.alternate),
      l !== null && (l.memoizedState = t),
      t
    );
  }
  function d0(l) {
    var t = o0(l);
    (t.next === null && (t = l.alternate.memoizedState),
      Pe(l, t.next.queue, {}, dt()));
  }
  function ei() {
    return Rl(ru);
  }
  function m0() {
    return zl().memoizedState;
  }
  function y0() {
    return zl().memoizedState;
  }
  function $m(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = dt();
          l = ia(a);
          var e = fa(t, l, a);
          (e !== null && (Fl(e, t, a), We(e, t, a)),
            (t = { cache: Hc() }),
            (l.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function km(l, t, a) {
    var e = dt();
    ((a = {
      lane: e,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      cn(l)
        ? h0(t, a)
        : ((a = Ec(l, t, a, e)), a !== null && (Fl(a, l, e), r0(a, t, e))));
  }
  function v0(l, t, a) {
    var e = dt();
    Pe(l, t, a, e);
  }
  function Pe(l, t, a, e) {
    var u = {
      lane: e,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (cn(l)) h0(t, u);
    else {
      var n = l.alternate;
      if (
        l.lanes === 0 &&
        (n === null || n.lanes === 0) &&
        ((n = t.lastRenderedReducer), n !== null)
      )
        try {
          var c = t.lastRenderedState,
            i = n(c, a);
          if (((u.hasEagerState = !0), (u.eagerState = i), nt(i, c)))
            return (Xu(l, t, u, 0), dl === null && Gu(), !1);
        } catch {
        } finally {
        }
      if (((a = Ec(l, t, u, e)), a !== null))
        return (Fl(a, l, e), r0(a, t, e), !0);
    }
    return !1;
  }
  function ui(l, t, a, e) {
    if (
      ((e = {
        lane: 2,
        revertLane: qi(),
        gesture: null,
        action: e,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      cn(l))
    ) {
      if (t) throw Error(m(479));
    } else ((t = Ec(l, a, e, 2)), t !== null && Fl(t, l, 2));
  }
  function cn(l) {
    var t = l.alternate;
    return l === L || (t !== null && t === L);
  }
  function h0(l, t) {
    me = Pu = !0;
    var a = l.pending;
    (a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
      (l.pending = t));
  }
  function r0(l, t, a) {
    if ((a & 4194048) !== 0) {
      var e = t.lanes;
      ((e &= l.pendingLanes), (a |= e), (t.lanes = a), Ef(l, a));
    }
  }
  var lu = {
    readContext: Rl,
    use: an,
    useCallback: hl,
    useContext: hl,
    useEffect: hl,
    useImperativeHandle: hl,
    useLayoutEffect: hl,
    useInsertionEffect: hl,
    useMemo: hl,
    useReducer: hl,
    useRef: hl,
    useState: hl,
    useDebugValue: hl,
    useDeferredValue: hl,
    useTransition: hl,
    useSyncExternalStore: hl,
    useId: hl,
    useHostTransitionStatus: hl,
    useFormState: hl,
    useActionState: hl,
    useOptimistic: hl,
    useMemoCache: hl,
    useCacheRefresh: hl,
  };
  lu.useEffectEvent = hl;
  var g0 = {
      readContext: Rl,
      use: an,
      useCallback: function (l, t) {
        return ((Ll().memoizedState = [l, t === void 0 ? null : t]), l);
      },
      useContext: Rl,
      useEffect: l0,
      useImperativeHandle: function (l, t, a) {
        ((a = a != null ? a.concat([l]) : null),
          un(4194308, 4, u0.bind(null, t, l), a));
      },
      useLayoutEffect: function (l, t) {
        return un(4194308, 4, l, t);
      },
      useInsertionEffect: function (l, t) {
        un(4, 2, l, t);
      },
      useMemo: function (l, t) {
        var a = Ll();
        t = t === void 0 ? null : t;
        var e = l();
        if (Ga) {
          Pt(!0);
          try {
            l();
          } finally {
            Pt(!1);
          }
        }
        return ((a.memoizedState = [e, t]), e);
      },
      useReducer: function (l, t, a) {
        var e = Ll();
        if (a !== void 0) {
          var u = a(t);
          if (Ga) {
            Pt(!0);
            try {
              a(t);
            } finally {
              Pt(!1);
            }
          }
        } else u = t;
        return (
          (e.memoizedState = e.baseState = u),
          (l = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: l,
            lastRenderedState: u,
          }),
          (e.queue = l),
          (l = l.dispatch = km.bind(null, L, l)),
          [e.memoizedState, l]
        );
      },
      useRef: function (l) {
        var t = Ll();
        return ((l = { current: l }), (t.memoizedState = l));
      },
      useState: function (l) {
        l = Fc(l);
        var t = l.queue,
          a = v0.bind(null, L, t);
        return ((t.dispatch = a), [l.memoizedState, a]);
      },
      useDebugValue: li,
      useDeferredValue: function (l, t) {
        var a = Ll();
        return ti(a, l, t);
      },
      useTransition: function () {
        var l = Fc(!1);
        return (
          (l = s0.bind(null, L, l.queue, !0, !1)),
          (Ll().memoizedState = l),
          [!1, l]
        );
      },
      useSyncExternalStore: function (l, t, a) {
        var e = L,
          u = Ll();
        if (I) {
          if (a === void 0) throw Error(m(407));
          a = a();
        } else {
          if (((a = t()), dl === null)) throw Error(m(349));
          (k & 127) !== 0 || Ys(e, t, a);
        }
        u.memoizedState = a;
        var n = { value: a, getSnapshot: t };
        return (
          (u.queue = n),
          l0(Xs.bind(null, e, n, l), [l]),
          (e.flags |= 2048),
          ve(9, { destroy: void 0 }, Gs.bind(null, e, n, a, t), null),
          a
        );
      },
      useId: function () {
        var l = Ll(),
          t = dl.identifierPrefix;
        if (I) {
          var a = Nt,
            e = Dt;
          ((a = (e & ~(1 << (32 - ut(e) - 1))).toString(32) + a),
            (t = "_" + t + "R_" + a),
            (a = ln++),
            0 < a && (t += "H" + a.toString(32)),
            (t += "_"));
        } else ((a = Lm++), (t = "_" + t + "r_" + a.toString(32) + "_"));
        return (l.memoizedState = t);
      },
      useHostTransitionStatus: ei,
      useFormState: $s,
      useActionState: $s,
      useOptimistic: function (l) {
        var t = Ll();
        t.memoizedState = t.baseState = l;
        var a = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = a),
          (t = ui.bind(null, L, !0, a)),
          (a.dispatch = t),
          [l, t]
        );
      },
      useMemoCache: Wc,
      useCacheRefresh: function () {
        return (Ll().memoizedState = $m.bind(null, L));
      },
      useEffectEvent: function (l) {
        var t = Ll(),
          a = { impl: l };
        return (
          (t.memoizedState = a),
          function () {
            if ((tl & 2) !== 0) throw Error(m(440));
            return a.impl.apply(void 0, arguments);
          }
        );
      },
    },
    ni = {
      readContext: Rl,
      use: an,
      useCallback: c0,
      useContext: Rl,
      useEffect: Pc,
      useImperativeHandle: n0,
      useInsertionEffect: a0,
      useLayoutEffect: e0,
      useMemo: i0,
      useReducer: en,
      useRef: Ps,
      useState: function () {
        return en(Qt);
      },
      useDebugValue: li,
      useDeferredValue: function (l, t) {
        var a = zl();
        return f0(a, il.memoizedState, l, t);
      },
      useTransition: function () {
        var l = en(Qt)[0],
          t = zl().memoizedState;
        return [typeof l == "boolean" ? l : Ie(l), t];
      },
      useSyncExternalStore: Bs,
      useId: m0,
      useHostTransitionStatus: ei,
      useFormState: ks,
      useActionState: ks,
      useOptimistic: function (l, t) {
        var a = zl();
        return Ls(a, il, l, t);
      },
      useMemoCache: Wc,
      useCacheRefresh: y0,
    };
  ni.useEffectEvent = t0;
  var S0 = {
    readContext: Rl,
    use: an,
    useCallback: c0,
    useContext: Rl,
    useEffect: Pc,
    useImperativeHandle: n0,
    useInsertionEffect: a0,
    useLayoutEffect: e0,
    useMemo: i0,
    useReducer: kc,
    useRef: Ps,
    useState: function () {
      return kc(Qt);
    },
    useDebugValue: li,
    useDeferredValue: function (l, t) {
      var a = zl();
      return il === null ? ti(a, l, t) : f0(a, il.memoizedState, l, t);
    },
    useTransition: function () {
      var l = kc(Qt)[0],
        t = zl().memoizedState;
      return [typeof l == "boolean" ? l : Ie(l), t];
    },
    useSyncExternalStore: Bs,
    useId: m0,
    useHostTransitionStatus: ei,
    useFormState: Is,
    useActionState: Is,
    useOptimistic: function (l, t) {
      var a = zl();
      return il !== null
        ? Ls(a, il, l, t)
        : ((a.baseState = l), [l, a.queue.dispatch]);
    },
    useMemoCache: Wc,
    useCacheRefresh: y0,
  };
  S0.useEffectEvent = t0;
  function ci(l, t, a, e) {
    ((t = l.memoizedState),
      (a = a(e, t)),
      (a = a == null ? t : _({}, t, a)),
      (l.memoizedState = a),
      l.lanes === 0 && (l.updateQueue.baseState = a));
  }
  var ii = {
    enqueueSetState: function (l, t, a) {
      l = l._reactInternals;
      var e = dt(),
        u = ia(e);
      ((u.payload = t),
        a != null && (u.callback = a),
        (t = fa(l, u, e)),
        t !== null && (Fl(t, l, e), We(t, l, e)));
    },
    enqueueReplaceState: function (l, t, a) {
      l = l._reactInternals;
      var e = dt(),
        u = ia(e);
      ((u.tag = 1),
        (u.payload = t),
        a != null && (u.callback = a),
        (t = fa(l, u, e)),
        t !== null && (Fl(t, l, e), We(t, l, e)));
    },
    enqueueForceUpdate: function (l, t) {
      l = l._reactInternals;
      var a = dt(),
        e = ia(a);
      ((e.tag = 2),
        t != null && (e.callback = t),
        (t = fa(l, e, a)),
        t !== null && (Fl(t, l, a), We(t, l, a)));
    },
  };
  function b0(l, t, a, e, u, n, c) {
    return (
      (l = l.stateNode),
      typeof l.shouldComponentUpdate == "function"
        ? l.shouldComponentUpdate(e, n, c)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Xe(a, e) || !Xe(u, n)
          : !0
    );
  }
  function z0(l, t, a, e) {
    ((l = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(a, e),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(a, e),
      t.state !== l && ii.enqueueReplaceState(t, t.state, null));
  }
  function Xa(l, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var e in t) e !== "ref" && (a[e] = t[e]);
    }
    if ((l = l.defaultProps)) {
      a === t && (a = _({}, a));
      for (var u in l) a[u] === void 0 && (a[u] = l[u]);
    }
    return a;
  }
  function E0(l) {
    Yu(l);
  }
  function T0(l) {
    console.error(l);
  }
  function A0(l) {
    Yu(l);
  }
  function fn(l, t) {
    try {
      var a = l.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (e) {
      setTimeout(function () {
        throw e;
      });
    }
  }
  function p0(l, t, a) {
    try {
      var e = l.onCaughtError;
      e(a.value, {
        componentStack: a.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function fi(l, t, a) {
    return (
      (a = ia(a)),
      (a.tag = 3),
      (a.payload = { element: null }),
      (a.callback = function () {
        fn(l, t);
      }),
      a
    );
  }
  function _0(l) {
    return ((l = ia(l)), (l.tag = 3), l);
  }
  function M0(l, t, a, e) {
    var u = a.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var n = e.value;
      ((l.payload = function () {
        return u(n);
      }),
        (l.callback = function () {
          p0(t, a, e);
        }));
    }
    var c = a.stateNode;
    c !== null &&
      typeof c.componentDidCatch == "function" &&
      (l.callback = function () {
        (p0(t, a, e),
          typeof u != "function" &&
            (va === null ? (va = new Set([this])) : va.add(this)));
        var i = e.stack;
        this.componentDidCatch(e.value, {
          componentStack: i !== null ? i : "",
        });
      });
  }
  function Fm(l, t, a, e, u) {
    if (
      ((a.flags |= 32768),
      e !== null && typeof e == "object" && typeof e.then == "function")
    ) {
      if (
        ((t = a.alternate),
        t !== null && ce(t, a, u, !0),
        (a = it.current),
        a !== null)
      ) {
        switch (a.tag) {
          case 31:
          case 13:
            return (
              zt === null ? zn() : a.alternate === null && rl === 0 && (rl = 3),
              (a.flags &= -257),
              (a.flags |= 65536),
              (a.lanes = u),
              e === Wu
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null ? (a.updateQueue = new Set([e])) : t.add(e),
                  Ci(l, e, u)),
              !1
            );
          case 22:
            return (
              (a.flags |= 65536),
              e === Wu
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([e]),
                      }),
                      (a.updateQueue = t))
                    : ((a = t.retryQueue),
                      a === null ? (t.retryQueue = new Set([e])) : a.add(e)),
                  Ci(l, e, u)),
              !1
            );
        }
        throw Error(m(435, a.tag));
      }
      return (Ci(l, e, u), zn(), !1);
    }
    if (I)
      return (
        (t = it.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = u),
            e !== Oc && ((l = Error(m(422), { cause: e })), Le(rt(l, a))))
          : (e !== Oc && ((t = Error(m(423), { cause: e })), Le(rt(t, a))),
            (l = l.current.alternate),
            (l.flags |= 65536),
            (u &= -u),
            (l.lanes |= u),
            (e = rt(e, a)),
            (u = fi(l.stateNode, e, u)),
            Yc(l, u),
            rl !== 4 && (rl = 2)),
        !1
      );
    var n = Error(m(520), { cause: e });
    if (
      ((n = rt(n, a)),
      fu === null ? (fu = [n]) : fu.push(n),
      rl !== 4 && (rl = 2),
      t === null)
    )
      return !0;
    ((e = rt(e, a)), (a = t));
    do {
      switch (a.tag) {
        case 3:
          return (
            (a.flags |= 65536),
            (l = u & -u),
            (a.lanes |= l),
            (l = fi(a.stateNode, e, l)),
            Yc(a, l),
            !1
          );
        case 1:
          if (
            ((t = a.type),
            (n = a.stateNode),
            (a.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (n !== null &&
                  typeof n.componentDidCatch == "function" &&
                  (va === null || !va.has(n)))))
          )
            return (
              (a.flags |= 65536),
              (u &= -u),
              (a.lanes |= u),
              (u = _0(u)),
              M0(u, l, a, e),
              Yc(a, u),
              !1
            );
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var si = Error(m(461)),
    Al = !1;
  function ql(l, t, a, e) {
    t.child = l === null ? xs(t, null, a, e) : Ya(t, l.child, a, e);
  }
  function O0(l, t, a, e, u) {
    a = a.render;
    var n = t.ref;
    if ("ref" in e) {
      var c = {};
      for (var i in e) i !== "ref" && (c[i] = e[i]);
    } else c = e;
    return (
      ja(t),
      (e = Vc(l, t, a, c, n, u)),
      (i = Kc()),
      l !== null && !Al
        ? (Jc(l, t, u), Zt(l, t, u))
        : (I && i && _c(t), (t.flags |= 1), ql(l, t, e, u), t.child)
    );
  }
  function D0(l, t, a, e, u) {
    if (l === null) {
      var n = a.type;
      return typeof n == "function" &&
        !Tc(n) &&
        n.defaultProps === void 0 &&
        a.compare === null
        ? ((t.tag = 15), (t.type = n), N0(l, t, n, e, u))
        : ((l = Zu(a.type, null, e, t, t.mode, u)),
          (l.ref = t.ref),
          (l.return = t),
          (t.child = l));
    }
    if (((n = l.child), !gi(l, u))) {
      var c = n.memoizedProps;
      if (
        ((a = a.compare), (a = a !== null ? a : Xe), a(c, e) && l.ref === t.ref)
      )
        return Zt(l, t, u);
    }
    return (
      (t.flags |= 1),
      (l = qt(n, e)),
      (l.ref = t.ref),
      (l.return = t),
      (t.child = l)
    );
  }
  function N0(l, t, a, e, u) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (Xe(n, e) && l.ref === t.ref)
        if (((Al = !1), (t.pendingProps = e = n), gi(l, u)))
          (l.flags & 131072) !== 0 && (Al = !0);
        else return ((t.lanes = l.lanes), Zt(l, t, u));
    }
    return oi(l, t, a, e, u);
  }
  function x0(l, t, a, e) {
    var u = e.children,
      n = l !== null ? l.memoizedState : null;
    if (
      (l === null &&
        t.stateNode === null &&
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      e.mode === "hidden")
    ) {
      if ((t.flags & 128) !== 0) {
        if (((n = n !== null ? n.baseLanes | a : a), l !== null)) {
          for (e = t.child = l.child, u = 0; e !== null; )
            ((u = u | e.lanes | e.childLanes), (e = e.sibling));
          e = u & ~n;
        } else ((e = 0), (t.child = null));
        return U0(l, t, n, a, e);
      }
      if ((a & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          l !== null && Ju(t, n !== null ? n.cachePool : null),
          n !== null ? Cs(t, n) : Xc(),
          js(t));
      else
        return (
          (e = t.lanes = 536870912),
          U0(l, t, n !== null ? n.baseLanes | a : a, a, e)
        );
    } else
      n !== null
        ? (Ju(t, n.cachePool), Cs(t, n), oa(), (t.memoizedState = null))
        : (l !== null && Ju(t, null), Xc(), oa());
    return (ql(l, t, u, a), t.child);
  }
  function tu(l, t) {
    return (
      (l !== null && l.tag === 22) ||
        t.stateNode !== null ||
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      t.sibling
    );
  }
  function U0(l, t, a, e, u) {
    var n = jc();
    return (
      (n = n === null ? null : { parent: El._currentValue, pool: n }),
      (t.memoizedState = { baseLanes: a, cachePool: n }),
      l !== null && Ju(t, null),
      Xc(),
      js(t),
      l !== null && ce(l, t, e, !0),
      (t.childLanes = u),
      null
    );
  }
  function sn(l, t) {
    return (
      (t = dn({ mode: t.mode, children: t.children }, l.mode)),
      (t.ref = l.ref),
      (l.child = t),
      (t.return = l),
      t
    );
  }
  function H0(l, t, a) {
    return (
      Ya(t, l.child, null, a),
      (l = sn(t, t.pendingProps)),
      (l.flags |= 2),
      ft(t),
      (t.memoizedState = null),
      l
    );
  }
  function Im(l, t, a) {
    var e = t.pendingProps,
      u = (t.flags & 128) !== 0;
    if (((t.flags &= -129), l === null)) {
      if (I) {
        if (e.mode === "hidden")
          return ((l = sn(t, e)), (t.lanes = 536870912), tu(null, l));
        if (
          (Zc(t),
          (l = ml)
            ? ((l = Ko(l, bt)),
              (l = l !== null && l.data === "&" ? l : null),
              l !== null &&
                ((t.memoizedState = {
                  dehydrated: l,
                  treeContext: aa !== null ? { id: Dt, overflow: Nt } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (a = hs(l)),
                (a.return = t),
                (t.child = a),
                (jl = t),
                (ml = null)))
            : (l = null),
          l === null)
        )
          throw ua(t);
        return ((t.lanes = 536870912), null);
      }
      return sn(t, e);
    }
    var n = l.memoizedState;
    if (n !== null) {
      var c = n.dehydrated;
      if ((Zc(t), u))
        if (t.flags & 256) ((t.flags &= -257), (t = H0(l, t, a)));
        else if (t.memoizedState !== null)
          ((t.child = l.child), (t.flags |= 128), (t = null));
        else throw Error(m(558));
      else if (
        (Al || ce(l, t, a, !1), (u = (a & l.childLanes) !== 0), Al || u)
      ) {
        if (
          ((e = dl),
          e !== null && ((c = Tf(e, a)), c !== 0 && c !== n.retryLane))
        )
          throw ((n.retryLane = c), xa(l, c), Fl(e, l, c), si);
        (zn(), (t = H0(l, t, a)));
      } else
        ((l = n.treeContext),
          (ml = Et(c.nextSibling)),
          (jl = t),
          (I = !0),
          (ea = null),
          (bt = !1),
          l !== null && Ss(t, l),
          (t = sn(t, e)),
          (t.flags |= 4096));
      return t;
    }
    return (
      (l = qt(l.child, { mode: e.mode, children: e.children })),
      (l.ref = t.ref),
      (t.child = l),
      (l.return = t),
      l
    );
  }
  function on(l, t) {
    var a = t.ref;
    if (a === null) l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object") throw Error(m(284));
      (l === null || l.ref !== a) && (t.flags |= 4194816);
    }
  }
  function oi(l, t, a, e, u) {
    return (
      ja(t),
      (a = Vc(l, t, a, e, void 0, u)),
      (e = Kc()),
      l !== null && !Al
        ? (Jc(l, t, u), Zt(l, t, u))
        : (I && e && _c(t), (t.flags |= 1), ql(l, t, a, u), t.child)
    );
  }
  function C0(l, t, a, e, u, n) {
    return (
      ja(t),
      (t.updateQueue = null),
      (a = qs(t, e, a, u)),
      Rs(l),
      (e = Kc()),
      l !== null && !Al
        ? (Jc(l, t, n), Zt(l, t, n))
        : (I && e && _c(t), (t.flags |= 1), ql(l, t, a, n), t.child)
    );
  }
  function j0(l, t, a, e, u) {
    if ((ja(t), t.stateNode === null)) {
      var n = ae,
        c = a.contextType;
      (typeof c == "object" && c !== null && (n = Rl(c)),
        (n = new a(e, n)),
        (t.memoizedState =
          n.state !== null && n.state !== void 0 ? n.state : null),
        (n.updater = ii),
        (t.stateNode = n),
        (n._reactInternals = t),
        (n = t.stateNode),
        (n.props = e),
        (n.state = t.memoizedState),
        (n.refs = {}),
        qc(t),
        (c = a.contextType),
        (n.context = typeof c == "object" && c !== null ? Rl(c) : ae),
        (n.state = t.memoizedState),
        (c = a.getDerivedStateFromProps),
        typeof c == "function" && (ci(t, a, c, e), (n.state = t.memoizedState)),
        typeof a.getDerivedStateFromProps == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function" ||
          (typeof n.UNSAFE_componentWillMount != "function" &&
            typeof n.componentWillMount != "function") ||
          ((c = n.state),
          typeof n.componentWillMount == "function" && n.componentWillMount(),
          typeof n.UNSAFE_componentWillMount == "function" &&
            n.UNSAFE_componentWillMount(),
          c !== n.state && ii.enqueueReplaceState(n, n.state, null),
          ke(t, e, n, u),
          $e(),
          (n.state = t.memoizedState)),
        typeof n.componentDidMount == "function" && (t.flags |= 4194308),
        (e = !0));
    } else if (l === null) {
      n = t.stateNode;
      var i = t.memoizedProps,
        f = Xa(a, i);
      n.props = f;
      var v = n.context,
        g = a.contextType;
      ((c = ae), typeof g == "object" && g !== null && (c = Rl(g)));
      var z = a.getDerivedStateFromProps;
      ((g =
        typeof z == "function" ||
        typeof n.getSnapshotBeforeUpdate == "function"),
        (i = t.pendingProps !== i),
        g ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((i || v !== c) && z0(t, n, e, c)),
        (ca = !1));
      var h = t.memoizedState;
      ((n.state = h),
        ke(t, e, n, u),
        $e(),
        (v = t.memoizedState),
        i || h !== v || ca
          ? (typeof z == "function" && (ci(t, a, z, e), (v = t.memoizedState)),
            (f = ca || b0(t, a, f, e, h, v, c))
              ? (g ||
                  (typeof n.UNSAFE_componentWillMount != "function" &&
                    typeof n.componentWillMount != "function") ||
                  (typeof n.componentWillMount == "function" &&
                    n.componentWillMount(),
                  typeof n.UNSAFE_componentWillMount == "function" &&
                    n.UNSAFE_componentWillMount()),
                typeof n.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof n.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = e),
                (t.memoizedState = v)),
            (n.props = e),
            (n.state = v),
            (n.context = c),
            (e = f))
          : (typeof n.componentDidMount == "function" && (t.flags |= 4194308),
            (e = !1)));
    } else {
      ((n = t.stateNode),
        Bc(l, t),
        (c = t.memoizedProps),
        (g = Xa(a, c)),
        (n.props = g),
        (z = t.pendingProps),
        (h = n.context),
        (v = a.contextType),
        (f = ae),
        typeof v == "object" && v !== null && (f = Rl(v)),
        (i = a.getDerivedStateFromProps),
        (v =
          typeof i == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function") ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((c !== z || h !== f) && z0(t, n, e, f)),
        (ca = !1),
        (h = t.memoizedState),
        (n.state = h),
        ke(t, e, n, u),
        $e());
      var r = t.memoizedState;
      c !== z ||
      h !== r ||
      ca ||
      (l !== null && l.dependencies !== null && Vu(l.dependencies))
        ? (typeof i == "function" && (ci(t, a, i, e), (r = t.memoizedState)),
          (g =
            ca ||
            b0(t, a, g, e, h, r, f) ||
            (l !== null && l.dependencies !== null && Vu(l.dependencies)))
            ? (v ||
                (typeof n.UNSAFE_componentWillUpdate != "function" &&
                  typeof n.componentWillUpdate != "function") ||
                (typeof n.componentWillUpdate == "function" &&
                  n.componentWillUpdate(e, r, f),
                typeof n.UNSAFE_componentWillUpdate == "function" &&
                  n.UNSAFE_componentWillUpdate(e, r, f)),
              typeof n.componentDidUpdate == "function" && (t.flags |= 4),
              typeof n.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof n.componentDidUpdate != "function" ||
                (c === l.memoizedProps && h === l.memoizedState) ||
                (t.flags |= 4),
              typeof n.getSnapshotBeforeUpdate != "function" ||
                (c === l.memoizedProps && h === l.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = e),
              (t.memoizedState = r)),
          (n.props = e),
          (n.state = r),
          (n.context = f),
          (e = g))
        : (typeof n.componentDidUpdate != "function" ||
            (c === l.memoizedProps && h === l.memoizedState) ||
            (t.flags |= 4),
          typeof n.getSnapshotBeforeUpdate != "function" ||
            (c === l.memoizedProps && h === l.memoizedState) ||
            (t.flags |= 1024),
          (e = !1));
    }
    return (
      (n = e),
      on(l, t),
      (e = (t.flags & 128) !== 0),
      n || e
        ? ((n = t.stateNode),
          (a =
            e && typeof a.getDerivedStateFromError != "function"
              ? null
              : n.render()),
          (t.flags |= 1),
          l !== null && e
            ? ((t.child = Ya(t, l.child, null, u)),
              (t.child = Ya(t, null, a, u)))
            : ql(l, t, a, u),
          (t.memoizedState = n.state),
          (l = t.child))
        : (l = Zt(l, t, u)),
      l
    );
  }
  function R0(l, t, a, e) {
    return (Ha(), (t.flags |= 256), ql(l, t, a, e), t.child);
  }
  var di = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function mi(l) {
    return { baseLanes: l, cachePool: ps() };
  }
  function yi(l, t, a) {
    return ((l = l !== null ? l.childLanes & ~a : 0), t && (l |= ot), l);
  }
  function q0(l, t, a) {
    var e = t.pendingProps,
      u = !1,
      n = (t.flags & 128) !== 0,
      c;
    if (
      ((c = n) ||
        (c =
          l !== null && l.memoizedState === null ? !1 : (bl.current & 2) !== 0),
      c && ((u = !0), (t.flags &= -129)),
      (c = (t.flags & 32) !== 0),
      (t.flags &= -33),
      l === null)
    ) {
      if (I) {
        if (
          (u ? sa(t) : oa(),
          (l = ml)
            ? ((l = Ko(l, bt)),
              (l = l !== null && l.data !== "&" ? l : null),
              l !== null &&
                ((t.memoizedState = {
                  dehydrated: l,
                  treeContext: aa !== null ? { id: Dt, overflow: Nt } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (a = hs(l)),
                (a.return = t),
                (t.child = a),
                (jl = t),
                (ml = null)))
            : (l = null),
          l === null)
        )
          throw ua(t);
        return ($i(l) ? (t.lanes = 32) : (t.lanes = 536870912), null);
      }
      var i = e.children;
      return (
        (e = e.fallback),
        u
          ? (oa(),
            (u = t.mode),
            (i = dn({ mode: "hidden", children: i }, u)),
            (e = Ua(e, u, a, null)),
            (i.return = t),
            (e.return = t),
            (i.sibling = e),
            (t.child = i),
            (e = t.child),
            (e.memoizedState = mi(a)),
            (e.childLanes = yi(l, c, a)),
            (t.memoizedState = di),
            tu(null, e))
          : (sa(t), vi(t, i))
      );
    }
    var f = l.memoizedState;
    if (f !== null && ((i = f.dehydrated), i !== null)) {
      if (n)
        t.flags & 256
          ? (sa(t), (t.flags &= -257), (t = hi(l, t, a)))
          : t.memoizedState !== null
            ? (oa(), (t.child = l.child), (t.flags |= 128), (t = null))
            : (oa(),
              (i = e.fallback),
              (u = t.mode),
              (e = dn({ mode: "visible", children: e.children }, u)),
              (i = Ua(i, u, a, null)),
              (i.flags |= 2),
              (e.return = t),
              (i.return = t),
              (e.sibling = i),
              (t.child = e),
              Ya(t, l.child, null, a),
              (e = t.child),
              (e.memoizedState = mi(a)),
              (e.childLanes = yi(l, c, a)),
              (t.memoizedState = di),
              (t = tu(null, e)));
      else if ((sa(t), $i(i))) {
        if (((c = i.nextSibling && i.nextSibling.dataset), c)) var v = c.dgst;
        ((c = v),
          (e = Error(m(419))),
          (e.stack = ""),
          (e.digest = c),
          Le({ value: e, source: null, stack: null }),
          (t = hi(l, t, a)));
      } else if (
        (Al || ce(l, t, a, !1), (c = (a & l.childLanes) !== 0), Al || c)
      ) {
        if (
          ((c = dl),
          c !== null && ((e = Tf(c, a)), e !== 0 && e !== f.retryLane))
        )
          throw ((f.retryLane = e), xa(l, e), Fl(c, l, e), si);
        (Wi(i) || zn(), (t = hi(l, t, a)));
      } else
        Wi(i)
          ? ((t.flags |= 192), (t.child = l.child), (t = null))
          : ((l = f.treeContext),
            (ml = Et(i.nextSibling)),
            (jl = t),
            (I = !0),
            (ea = null),
            (bt = !1),
            l !== null && Ss(t, l),
            (t = vi(t, e.children)),
            (t.flags |= 4096));
      return t;
    }
    return u
      ? (oa(),
        (i = e.fallback),
        (u = t.mode),
        (f = l.child),
        (v = f.sibling),
        (e = qt(f, { mode: "hidden", children: e.children })),
        (e.subtreeFlags = f.subtreeFlags & 65011712),
        v !== null ? (i = qt(v, i)) : ((i = Ua(i, u, a, null)), (i.flags |= 2)),
        (i.return = t),
        (e.return = t),
        (e.sibling = i),
        (t.child = e),
        tu(null, e),
        (e = t.child),
        (i = l.child.memoizedState),
        i === null
          ? (i = mi(a))
          : ((u = i.cachePool),
            u !== null
              ? ((f = El._currentValue),
                (u = u.parent !== f ? { parent: f, pool: f } : u))
              : (u = ps()),
            (i = { baseLanes: i.baseLanes | a, cachePool: u })),
        (e.memoizedState = i),
        (e.childLanes = yi(l, c, a)),
        (t.memoizedState = di),
        tu(l.child, e))
      : (sa(t),
        (a = l.child),
        (l = a.sibling),
        (a = qt(a, { mode: "visible", children: e.children })),
        (a.return = t),
        (a.sibling = null),
        l !== null &&
          ((c = t.deletions),
          c === null ? ((t.deletions = [l]), (t.flags |= 16)) : c.push(l)),
        (t.child = a),
        (t.memoizedState = null),
        a);
  }
  function vi(l, t) {
    return (
      (t = dn({ mode: "visible", children: t }, l.mode)),
      (t.return = l),
      (l.child = t)
    );
  }
  function dn(l, t) {
    return ((l = ct(22, l, null, t)), (l.lanes = 0), l);
  }
  function hi(l, t, a) {
    return (
      Ya(t, l.child, null, a),
      (l = vi(t, t.pendingProps.children)),
      (l.flags |= 2),
      (t.memoizedState = null),
      l
    );
  }
  function B0(l, t, a) {
    l.lanes |= t;
    var e = l.alternate;
    (e !== null && (e.lanes |= t), xc(l.return, t, a));
  }
  function ri(l, t, a, e, u, n) {
    var c = l.memoizedState;
    c === null
      ? (l.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: e,
          tail: a,
          tailMode: u,
          treeForkCount: n,
        })
      : ((c.isBackwards = t),
        (c.rendering = null),
        (c.renderingStartTime = 0),
        (c.last = e),
        (c.tail = a),
        (c.tailMode = u),
        (c.treeForkCount = n));
  }
  function Y0(l, t, a) {
    var e = t.pendingProps,
      u = e.revealOrder,
      n = e.tail;
    e = e.children;
    var c = bl.current,
      i = (c & 2) !== 0;
    if (
      (i ? ((c = (c & 1) | 2), (t.flags |= 128)) : (c &= 1),
      D(bl, c),
      ql(l, t, e, a),
      (e = I ? Ze : 0),
      !i && l !== null && (l.flags & 128) !== 0)
    )
      l: for (l = t.child; l !== null; ) {
        if (l.tag === 13) l.memoizedState !== null && B0(l, a, t);
        else if (l.tag === 19) B0(l, a, t);
        else if (l.child !== null) {
          ((l.child.return = l), (l = l.child));
          continue;
        }
        if (l === t) break l;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t) break l;
          l = l.return;
        }
        ((l.sibling.return = l.return), (l = l.sibling));
      }
    switch (u) {
      case "forwards":
        for (a = t.child, u = null; a !== null; )
          ((l = a.alternate),
            l !== null && Iu(l) === null && (u = a),
            (a = a.sibling));
        ((a = u),
          a === null
            ? ((u = t.child), (t.child = null))
            : ((u = a.sibling), (a.sibling = null)),
          ri(t, !1, u, a, n, e));
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (a = null, u = t.child, t.child = null; u !== null; ) {
          if (((l = u.alternate), l !== null && Iu(l) === null)) {
            t.child = u;
            break;
          }
          ((l = u.sibling), (u.sibling = a), (a = u), (u = l));
        }
        ri(t, !0, a, null, n, e);
        break;
      case "together":
        ri(t, !1, null, null, void 0, e);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Zt(l, t, a) {
    if (
      (l !== null && (t.dependencies = l.dependencies),
      (ya |= t.lanes),
      (a & t.childLanes) === 0)
    )
      if (l !== null) {
        if ((ce(l, t, a, !1), (a & t.childLanes) === 0)) return null;
      } else return null;
    if (l !== null && t.child !== l.child) throw Error(m(153));
    if (t.child !== null) {
      for (
        l = t.child, a = qt(l, l.pendingProps), t.child = a, a.return = t;
        l.sibling !== null;
      )
        ((l = l.sibling),
          (a = a.sibling = qt(l, l.pendingProps)),
          (a.return = t));
      a.sibling = null;
    }
    return t.child;
  }
  function gi(l, t) {
    return (l.lanes & t) !== 0
      ? !0
      : ((l = l.dependencies), !!(l !== null && Vu(l)));
  }
  function Pm(l, t, a) {
    switch (t.tag) {
      case 3:
        (Zl(t, t.stateNode.containerInfo),
          na(t, El, l.memoizedState.cache),
          Ha());
        break;
      case 27:
      case 5:
        Oe(t);
        break;
      case 4:
        Zl(t, t.stateNode.containerInfo);
        break;
      case 10:
        na(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return ((t.flags |= 128), Zc(t), null);
        break;
      case 13:
        var e = t.memoizedState;
        if (e !== null)
          return e.dehydrated !== null
            ? (sa(t), (t.flags |= 128), null)
            : (a & t.child.childLanes) !== 0
              ? q0(l, t, a)
              : (sa(t), (l = Zt(l, t, a)), l !== null ? l.sibling : null);
        sa(t);
        break;
      case 19:
        var u = (l.flags & 128) !== 0;
        if (
          ((e = (a & t.childLanes) !== 0),
          e || (ce(l, t, a, !1), (e = (a & t.childLanes) !== 0)),
          u)
        ) {
          if (e) return Y0(l, t, a);
          t.flags |= 128;
        }
        if (
          ((u = t.memoizedState),
          u !== null &&
            ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          D(bl, bl.current),
          e)
        )
          break;
        return null;
      case 22:
        return ((t.lanes = 0), x0(l, t, a, t.pendingProps));
      case 24:
        na(t, El, l.memoizedState.cache);
    }
    return Zt(l, t, a);
  }
  function G0(l, t, a) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps) Al = !0;
      else {
        if (!gi(l, a) && (t.flags & 128) === 0) return ((Al = !1), Pm(l, t, a));
        Al = (l.flags & 131072) !== 0;
      }
    else ((Al = !1), I && (t.flags & 1048576) !== 0 && gs(t, Ze, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        l: {
          var e = t.pendingProps;
          if (((l = qa(t.elementType)), (t.type = l), typeof l == "function"))
            Tc(l)
              ? ((e = Xa(l, e)), (t.tag = 1), (t = j0(null, t, l, e, a)))
              : ((t.tag = 0), (t = oi(null, t, l, e, a)));
          else {
            if (l != null) {
              var u = l.$$typeof;
              if (u === Ql) {
                ((t.tag = 11), (t = O0(null, t, l, e, a)));
                break l;
              } else if (u === J) {
                ((t.tag = 14), (t = D0(null, t, l, e, a)));
                break l;
              }
            }
            throw ((t = Ht(l) || l), Error(m(306, t, "")));
          }
        }
        return t;
      case 0:
        return oi(l, t, t.type, t.pendingProps, a);
      case 1:
        return ((e = t.type), (u = Xa(e, t.pendingProps)), j0(l, t, e, u, a));
      case 3:
        l: {
          if ((Zl(t, t.stateNode.containerInfo), l === null))
            throw Error(m(387));
          e = t.pendingProps;
          var n = t.memoizedState;
          ((u = n.element), Bc(l, t), ke(t, e, null, a));
          var c = t.memoizedState;
          if (
            ((e = c.cache),
            na(t, El, e),
            e !== n.cache && Uc(t, [El], a, !0),
            $e(),
            (e = c.element),
            n.isDehydrated)
          )
            if (
              ((n = { element: e, isDehydrated: !1, cache: c.cache }),
              (t.updateQueue.baseState = n),
              (t.memoizedState = n),
              t.flags & 256)
            ) {
              t = R0(l, t, e, a);
              break l;
            } else if (e !== u) {
              ((u = rt(Error(m(424)), t)), Le(u), (t = R0(l, t, e, a)));
              break l;
            } else {
              switch (((l = t.stateNode.containerInfo), l.nodeType)) {
                case 9:
                  l = l.body;
                  break;
                default:
                  l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
              }
              for (
                ml = Et(l.firstChild),
                  jl = t,
                  I = !0,
                  ea = null,
                  bt = !0,
                  a = xs(t, null, e, a),
                  t.child = a;
                a;
              )
                ((a.flags = (a.flags & -3) | 4096), (a = a.sibling));
            }
          else {
            if ((Ha(), e === u)) {
              t = Zt(l, t, a);
              break l;
            }
            ql(l, t, e, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          on(l, t),
          l === null
            ? (a = Fo(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = a)
              : I ||
                ((a = t.type),
                (l = t.pendingProps),
                (e = On(w.current).createElement(a)),
                (e[Cl] = t),
                (e[Kl] = l),
                Bl(e, a, l),
                Dl(e),
                (t.stateNode = e))
            : (t.memoizedState = Fo(
                t.type,
                l.memoizedProps,
                t.pendingProps,
                l.memoizedState,
              )),
          null
        );
      case 27:
        return (
          Oe(t),
          l === null &&
            I &&
            ((e = t.stateNode = Wo(t.type, t.pendingProps, w.current)),
            (jl = t),
            (bt = !0),
            (u = ml),
            Sa(t.type) ? ((ki = u), (ml = Et(e.firstChild))) : (ml = u)),
          ql(l, t, t.pendingProps.children, a),
          on(l, t),
          l === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          l === null &&
            I &&
            ((u = e = ml) &&
              ((e = N1(e, t.type, t.pendingProps, bt)),
              e !== null
                ? ((t.stateNode = e),
                  (jl = t),
                  (ml = Et(e.firstChild)),
                  (bt = !1),
                  (u = !0))
                : (u = !1)),
            u || ua(t)),
          Oe(t),
          (u = t.type),
          (n = t.pendingProps),
          (c = l !== null ? l.memoizedProps : null),
          (e = n.children),
          Ki(u, n) ? (e = null) : c !== null && Ki(u, c) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((u = Vc(l, t, Vm, null, null, a)), (ru._currentValue = u)),
          on(l, t),
          ql(l, t, e, a),
          t.child
        );
      case 6:
        return (
          l === null &&
            I &&
            ((l = a = ml) &&
              ((a = x1(a, t.pendingProps, bt)),
              a !== null
                ? ((t.stateNode = a), (jl = t), (ml = null), (l = !0))
                : (l = !1)),
            l || ua(t)),
          null
        );
      case 13:
        return q0(l, t, a);
      case 4:
        return (
          Zl(t, t.stateNode.containerInfo),
          (e = t.pendingProps),
          l === null ? (t.child = Ya(t, null, e, a)) : ql(l, t, e, a),
          t.child
        );
      case 11:
        return O0(l, t, t.type, t.pendingProps, a);
      case 7:
        return (ql(l, t, t.pendingProps, a), t.child);
      case 8:
        return (ql(l, t, t.pendingProps.children, a), t.child);
      case 12:
        return (ql(l, t, t.pendingProps.children, a), t.child);
      case 10:
        return (
          (e = t.pendingProps),
          na(t, t.type, e.value),
          ql(l, t, e.children, a),
          t.child
        );
      case 9:
        return (
          (u = t.type._context),
          (e = t.pendingProps.children),
          ja(t),
          (u = Rl(u)),
          (e = e(u)),
          (t.flags |= 1),
          ql(l, t, e, a),
          t.child
        );
      case 14:
        return D0(l, t, t.type, t.pendingProps, a);
      case 15:
        return N0(l, t, t.type, t.pendingProps, a);
      case 19:
        return Y0(l, t, a);
      case 31:
        return Im(l, t, a);
      case 22:
        return x0(l, t, a, t.pendingProps);
      case 24:
        return (
          ja(t),
          (e = Rl(El)),
          l === null
            ? ((u = jc()),
              u === null &&
                ((u = dl),
                (n = Hc()),
                (u.pooledCache = n),
                n.refCount++,
                n !== null && (u.pooledCacheLanes |= a),
                (u = n)),
              (t.memoizedState = { parent: e, cache: u }),
              qc(t),
              na(t, El, u))
            : ((l.lanes & a) !== 0 && (Bc(l, t), ke(t, null, null, a), $e()),
              (u = l.memoizedState),
              (n = t.memoizedState),
              u.parent !== e
                ? ((u = { parent: e, cache: e }),
                  (t.memoizedState = u),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = u),
                  na(t, El, e))
                : ((e = n.cache),
                  na(t, El, e),
                  e !== u.cache && Uc(t, [El], a, !0))),
          ql(l, t, t.pendingProps.children, a),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(m(156, t.tag));
  }
  function Lt(l) {
    l.flags |= 4;
  }
  function Si(l, t, a, e, u) {
    if (((t = (l.mode & 32) !== 0) && (t = !1), t)) {
      if (((l.flags |= 16777216), (u & 335544128) === u))
        if (l.stateNode.complete) l.flags |= 8192;
        else if (yo()) l.flags |= 8192;
        else throw ((Ba = Wu), Rc);
    } else l.flags &= -16777217;
  }
  function X0(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (((l.flags |= 16777216), !ad(t)))
      if (yo()) l.flags |= 8192;
      else throw ((Ba = Wu), Rc);
  }
  function mn(l, t) {
    (t !== null && (l.flags |= 4),
      l.flags & 16384 &&
        ((t = l.tag !== 22 ? bf() : 536870912), (l.lanes |= t), (Se |= t)));
  }
  function au(l, t) {
    if (!I)
      switch (l.tailMode) {
        case "hidden":
          t = l.tail;
          for (var a = null; t !== null; )
            (t.alternate !== null && (a = t), (t = t.sibling));
          a === null ? (l.tail = null) : (a.sibling = null);
          break;
        case "collapsed":
          a = l.tail;
          for (var e = null; a !== null; )
            (a.alternate !== null && (e = a), (a = a.sibling));
          e === null
            ? t || l.tail === null
              ? (l.tail = null)
              : (l.tail.sibling = null)
            : (e.sibling = null);
      }
  }
  function yl(l) {
    var t = l.alternate !== null && l.alternate.child === l.child,
      a = 0,
      e = 0;
    if (t)
      for (var u = l.child; u !== null; )
        ((a |= u.lanes | u.childLanes),
          (e |= u.subtreeFlags & 65011712),
          (e |= u.flags & 65011712),
          (u.return = l),
          (u = u.sibling));
    else
      for (u = l.child; u !== null; )
        ((a |= u.lanes | u.childLanes),
          (e |= u.subtreeFlags),
          (e |= u.flags),
          (u.return = l),
          (u = u.sibling));
    return ((l.subtreeFlags |= e), (l.childLanes = a), t);
  }
  function l1(l, t, a) {
    var e = t.pendingProps;
    switch ((Mc(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (yl(t), null);
      case 1:
        return (yl(t), null);
      case 3:
        return (
          (a = t.stateNode),
          (e = null),
          l !== null && (e = l.memoizedState.cache),
          t.memoizedState.cache !== e && (t.flags |= 2048),
          Gt(El),
          Sl(),
          a.pendingContext &&
            ((a.context = a.pendingContext), (a.pendingContext = null)),
          (l === null || l.child === null) &&
            (ne(t)
              ? Lt(t)
              : l === null ||
                (l.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Dc())),
          yl(t),
          null
        );
      case 26:
        var u = t.type,
          n = t.memoizedState;
        return (
          l === null
            ? (Lt(t),
              n !== null ? (yl(t), X0(t, n)) : (yl(t), Si(t, u, null, e, a)))
            : n
              ? n !== l.memoizedState
                ? (Lt(t), yl(t), X0(t, n))
                : (yl(t), (t.flags &= -16777217))
              : ((l = l.memoizedProps),
                l !== e && Lt(t),
                yl(t),
                Si(t, u, l, e, a)),
          null
        );
      case 27:
        if (
          (Tu(t),
          (a = w.current),
          (u = t.type),
          l !== null && t.stateNode != null)
        )
          l.memoizedProps !== e && Lt(t);
        else {
          if (!e) {
            if (t.stateNode === null) throw Error(m(166));
            return (yl(t), null);
          }
          ((l = U.current),
            ne(t) ? bs(t) : ((l = Wo(u, e, a)), (t.stateNode = l), Lt(t)));
        }
        return (yl(t), null);
      case 5:
        if ((Tu(t), (u = t.type), l !== null && t.stateNode != null))
          l.memoizedProps !== e && Lt(t);
        else {
          if (!e) {
            if (t.stateNode === null) throw Error(m(166));
            return (yl(t), null);
          }
          if (((n = U.current), ne(t))) bs(t);
          else {
            var c = On(w.current);
            switch (n) {
              case 1:
                n = c.createElementNS("http://www.w3.org/2000/svg", u);
                break;
              case 2:
                n = c.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                break;
              default:
                switch (u) {
                  case "svg":
                    n = c.createElementNS("http://www.w3.org/2000/svg", u);
                    break;
                  case "math":
                    n = c.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u,
                    );
                    break;
                  case "script":
                    ((n = c.createElement("div")),
                      (n.innerHTML = "<script><\/script>"),
                      (n = n.removeChild(n.firstChild)));
                    break;
                  case "select":
                    ((n =
                      typeof e.is == "string"
                        ? c.createElement("select", { is: e.is })
                        : c.createElement("select")),
                      e.multiple
                        ? (n.multiple = !0)
                        : e.size && (n.size = e.size));
                    break;
                  default:
                    n =
                      typeof e.is == "string"
                        ? c.createElement(u, { is: e.is })
                        : c.createElement(u);
                }
            }
            ((n[Cl] = t), (n[Kl] = e));
            l: for (c = t.child; c !== null; ) {
              if (c.tag === 5 || c.tag === 6) n.appendChild(c.stateNode);
              else if (c.tag !== 4 && c.tag !== 27 && c.child !== null) {
                ((c.child.return = c), (c = c.child));
                continue;
              }
              if (c === t) break l;
              for (; c.sibling === null; ) {
                if (c.return === null || c.return === t) break l;
                c = c.return;
              }
              ((c.sibling.return = c.return), (c = c.sibling));
            }
            t.stateNode = n;
            l: switch ((Bl(n, u, e), u)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!e.autoFocus;
                break l;
              case "img":
                e = !0;
                break l;
              default:
                e = !1;
            }
            e && Lt(t);
          }
        }
        return (
          yl(t),
          Si(t, t.type, l === null ? null : l.memoizedProps, t.pendingProps, a),
          null
        );
      case 6:
        if (l && t.stateNode != null) l.memoizedProps !== e && Lt(t);
        else {
          if (typeof e != "string" && t.stateNode === null) throw Error(m(166));
          if (((l = w.current), ne(t))) {
            if (
              ((l = t.stateNode),
              (a = t.memoizedProps),
              (e = null),
              (u = jl),
              u !== null)
            )
              switch (u.tag) {
                case 27:
                case 5:
                  e = u.memoizedProps;
              }
            ((l[Cl] = t),
              (l = !!(
                l.nodeValue === a ||
                (e !== null && e.suppressHydrationWarning === !0) ||
                Bo(l.nodeValue, a)
              )),
              l || ua(t, !0));
          } else
            ((l = On(l).createTextNode(e)), (l[Cl] = t), (t.stateNode = l));
        }
        return (yl(t), null);
      case 31:
        if (((a = t.memoizedState), l === null || l.memoizedState !== null)) {
          if (((e = ne(t)), a !== null)) {
            if (l === null) {
              if (!e) throw Error(m(318));
              if (
                ((l = t.memoizedState),
                (l = l !== null ? l.dehydrated : null),
                !l)
              )
                throw Error(m(557));
              l[Cl] = t;
            } else
              (Ha(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (yl(t), (l = !1));
          } else
            ((a = Dc()),
              l !== null &&
                l.memoizedState !== null &&
                (l.memoizedState.hydrationErrors = a),
              (l = !0));
          if (!l) return t.flags & 256 ? (ft(t), t) : (ft(t), null);
          if ((t.flags & 128) !== 0) throw Error(m(558));
        }
        return (yl(t), null);
      case 13:
        if (
          ((e = t.memoizedState),
          l === null ||
            (l.memoizedState !== null && l.memoizedState.dehydrated !== null))
        ) {
          if (((u = ne(t)), e !== null && e.dehydrated !== null)) {
            if (l === null) {
              if (!u) throw Error(m(318));
              if (
                ((u = t.memoizedState),
                (u = u !== null ? u.dehydrated : null),
                !u)
              )
                throw Error(m(317));
              u[Cl] = t;
            } else
              (Ha(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (yl(t), (u = !1));
          } else
            ((u = Dc()),
              l !== null &&
                l.memoizedState !== null &&
                (l.memoizedState.hydrationErrors = u),
              (u = !0));
          if (!u) return t.flags & 256 ? (ft(t), t) : (ft(t), null);
        }
        return (
          ft(t),
          (t.flags & 128) !== 0
            ? ((t.lanes = a), t)
            : ((a = e !== null),
              (l = l !== null && l.memoizedState !== null),
              a &&
                ((e = t.child),
                (u = null),
                e.alternate !== null &&
                  e.alternate.memoizedState !== null &&
                  e.alternate.memoizedState.cachePool !== null &&
                  (u = e.alternate.memoizedState.cachePool.pool),
                (n = null),
                e.memoizedState !== null &&
                  e.memoizedState.cachePool !== null &&
                  (n = e.memoizedState.cachePool.pool),
                n !== u && (e.flags |= 2048)),
              a !== l && a && (t.child.flags |= 8192),
              mn(t, t.updateQueue),
              yl(t),
              null)
        );
      case 4:
        return (Sl(), l === null && Xi(t.stateNode.containerInfo), yl(t), null);
      case 10:
        return (Gt(t.type), yl(t), null);
      case 19:
        if ((E(bl), (e = t.memoizedState), e === null)) return (yl(t), null);
        if (((u = (t.flags & 128) !== 0), (n = e.rendering), n === null))
          if (u) au(e, !1);
          else {
            if (rl !== 0 || (l !== null && (l.flags & 128) !== 0))
              for (l = t.child; l !== null; ) {
                if (((n = Iu(l)), n !== null)) {
                  for (
                    t.flags |= 128,
                      au(e, !1),
                      l = n.updateQueue,
                      t.updateQueue = l,
                      mn(t, l),
                      t.subtreeFlags = 0,
                      l = a,
                      a = t.child;
                    a !== null;
                  )
                    (vs(a, l), (a = a.sibling));
                  return (
                    D(bl, (bl.current & 1) | 2),
                    I && Bt(t, e.treeForkCount),
                    t.child
                  );
                }
                l = l.sibling;
              }
            e.tail !== null &&
              at() > gn &&
              ((t.flags |= 128), (u = !0), au(e, !1), (t.lanes = 4194304));
          }
        else {
          if (!u)
            if (((l = Iu(n)), l !== null)) {
              if (
                ((t.flags |= 128),
                (u = !0),
                (l = l.updateQueue),
                (t.updateQueue = l),
                mn(t, l),
                au(e, !0),
                e.tail === null &&
                  e.tailMode === "hidden" &&
                  !n.alternate &&
                  !I)
              )
                return (yl(t), null);
            } else
              2 * at() - e.renderingStartTime > gn &&
                a !== 536870912 &&
                ((t.flags |= 128), (u = !0), au(e, !1), (t.lanes = 4194304));
          e.isBackwards
            ? ((n.sibling = t.child), (t.child = n))
            : ((l = e.last),
              l !== null ? (l.sibling = n) : (t.child = n),
              (e.last = n));
        }
        return e.tail !== null
          ? ((l = e.tail),
            (e.rendering = l),
            (e.tail = l.sibling),
            (e.renderingStartTime = at()),
            (l.sibling = null),
            (a = bl.current),
            D(bl, u ? (a & 1) | 2 : a & 1),
            I && Bt(t, e.treeForkCount),
            l)
          : (yl(t), null);
      case 22:
      case 23:
        return (
          ft(t),
          Qc(),
          (e = t.memoizedState !== null),
          l !== null
            ? (l.memoizedState !== null) !== e && (t.flags |= 8192)
            : e && (t.flags |= 8192),
          e
            ? (a & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (yl(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : yl(t),
          (a = t.updateQueue),
          a !== null && mn(t, a.retryQueue),
          (a = null),
          l !== null &&
            l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (a = l.memoizedState.cachePool.pool),
          (e = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (e = t.memoizedState.cachePool.pool),
          e !== a && (t.flags |= 2048),
          l !== null && E(Ra),
          null
        );
      case 24:
        return (
          (a = null),
          l !== null && (a = l.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          Gt(El),
          yl(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(m(156, t.tag));
  }
  function t1(l, t) {
    switch ((Mc(t), t.tag)) {
      case 1:
        return (
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 3:
        return (
          Gt(El),
          Sl(),
          (l = t.flags),
          (l & 65536) !== 0 && (l & 128) === 0
            ? ((t.flags = (l & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (Tu(t), null);
      case 31:
        if (t.memoizedState !== null) {
          if ((ft(t), t.alternate === null)) throw Error(m(340));
          Ha();
        }
        return (
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 13:
        if (
          (ft(t), (l = t.memoizedState), l !== null && l.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(m(340));
          Ha();
        }
        return (
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 19:
        return (E(bl), null);
      case 4:
        return (Sl(), null);
      case 10:
        return (Gt(t.type), null);
      case 22:
      case 23:
        return (
          ft(t),
          Qc(),
          l !== null && E(Ra),
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 24:
        return (Gt(El), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Q0(l, t) {
    switch ((Mc(t), t.tag)) {
      case 3:
        (Gt(El), Sl());
        break;
      case 26:
      case 27:
      case 5:
        Tu(t);
        break;
      case 4:
        Sl();
        break;
      case 31:
        t.memoizedState !== null && ft(t);
        break;
      case 13:
        ft(t);
        break;
      case 19:
        E(bl);
        break;
      case 10:
        Gt(t.type);
        break;
      case 22:
      case 23:
        (ft(t), Qc(), l !== null && E(Ra));
        break;
      case 24:
        Gt(El);
    }
  }
  function eu(l, t) {
    try {
      var a = t.updateQueue,
        e = a !== null ? a.lastEffect : null;
      if (e !== null) {
        var u = e.next;
        a = u;
        do {
          if ((a.tag & l) === l) {
            e = void 0;
            var n = a.create,
              c = a.inst;
            ((e = n()), (c.destroy = e));
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (i) {
      nl(t, t.return, i);
    }
  }
  function da(l, t, a) {
    try {
      var e = t.updateQueue,
        u = e !== null ? e.lastEffect : null;
      if (u !== null) {
        var n = u.next;
        e = n;
        do {
          if ((e.tag & l) === l) {
            var c = e.inst,
              i = c.destroy;
            if (i !== void 0) {
              ((c.destroy = void 0), (u = t));
              var f = a,
                v = i;
              try {
                v();
              } catch (g) {
                nl(u, f, g);
              }
            }
          }
          e = e.next;
        } while (e !== n);
      }
    } catch (g) {
      nl(t, t.return, g);
    }
  }
  function Z0(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var a = l.stateNode;
      try {
        Hs(t, a);
      } catch (e) {
        nl(l, l.return, e);
      }
    }
  }
  function L0(l, t, a) {
    ((a.props = Xa(l.type, l.memoizedProps)), (a.state = l.memoizedState));
    try {
      a.componentWillUnmount();
    } catch (e) {
      nl(l, t, e);
    }
  }
  function uu(l, t) {
    try {
      var a = l.ref;
      if (a !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var e = l.stateNode;
            break;
          case 30:
            e = l.stateNode;
            break;
          default:
            e = l.stateNode;
        }
        typeof a == "function" ? (l.refCleanup = a(e)) : (a.current = e);
      }
    } catch (u) {
      nl(l, t, u);
    }
  }
  function xt(l, t) {
    var a = l.ref,
      e = l.refCleanup;
    if (a !== null)
      if (typeof e == "function")
        try {
          e();
        } catch (u) {
          nl(l, t, u);
        } finally {
          ((l.refCleanup = null),
            (l = l.alternate),
            l != null && (l.refCleanup = null));
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (u) {
          nl(l, t, u);
        }
      else a.current = null;
  }
  function V0(l) {
    var t = l.type,
      a = l.memoizedProps,
      e = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          break l;
        case "img":
          a.src ? (e.src = a.src) : a.srcSet && (e.srcset = a.srcSet);
      }
    } catch (u) {
      nl(l, l.return, u);
    }
  }
  function bi(l, t, a) {
    try {
      var e = l.stateNode;
      (A1(e, l.type, a, t), (e[Kl] = t));
    } catch (u) {
      nl(l, l.return, u);
    }
  }
  function K0(l) {
    return (
      l.tag === 5 ||
      l.tag === 3 ||
      l.tag === 26 ||
      (l.tag === 27 && Sa(l.type)) ||
      l.tag === 4
    );
  }
  function zi(l) {
    l: for (;;) {
      for (; l.sibling === null; ) {
        if (l.return === null || K0(l.return)) return null;
        l = l.return;
      }
      for (
        l.sibling.return = l.return, l = l.sibling;
        l.tag !== 5 && l.tag !== 6 && l.tag !== 18;
      ) {
        if (
          (l.tag === 27 && Sa(l.type)) ||
          l.flags & 2 ||
          l.child === null ||
          l.tag === 4
        )
          continue l;
        ((l.child.return = l), (l = l.child));
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function Ei(l, t, a) {
    var e = l.tag;
    if (e === 5 || e === 6)
      ((l = l.stateNode),
        t
          ? (a.nodeType === 9
              ? a.body
              : a.nodeName === "HTML"
                ? a.ownerDocument.body
                : a
            ).insertBefore(l, t)
          : ((t =
              a.nodeType === 9
                ? a.body
                : a.nodeName === "HTML"
                  ? a.ownerDocument.body
                  : a),
            t.appendChild(l),
            (a = a._reactRootContainer),
            a != null || t.onclick !== null || (t.onclick = jt)));
    else if (
      e !== 4 &&
      (e === 27 && Sa(l.type) && ((a = l.stateNode), (t = null)),
      (l = l.child),
      l !== null)
    )
      for (Ei(l, t, a), l = l.sibling; l !== null; )
        (Ei(l, t, a), (l = l.sibling));
  }
  function yn(l, t, a) {
    var e = l.tag;
    if (e === 5 || e === 6)
      ((l = l.stateNode), t ? a.insertBefore(l, t) : a.appendChild(l));
    else if (
      e !== 4 &&
      (e === 27 && Sa(l.type) && (a = l.stateNode), (l = l.child), l !== null)
    )
      for (yn(l, t, a), l = l.sibling; l !== null; )
        (yn(l, t, a), (l = l.sibling));
  }
  function J0(l) {
    var t = l.stateNode,
      a = l.memoizedProps;
    try {
      for (var e = l.type, u = t.attributes; u.length; )
        t.removeAttributeNode(u[0]);
      (Bl(t, e, a), (t[Cl] = l), (t[Kl] = a));
    } catch (n) {
      nl(l, l.return, n);
    }
  }
  var Vt = !1,
    pl = !1,
    Ti = !1,
    w0 = typeof WeakSet == "function" ? WeakSet : Set,
    Nl = null;
  function a1(l, t) {
    if (((l = l.containerInfo), (Li = jn), (l = ns(l)), hc(l))) {
      if ("selectionStart" in l)
        var a = { start: l.selectionStart, end: l.selectionEnd };
      else
        l: {
          a = ((a = l.ownerDocument) && a.defaultView) || window;
          var e = a.getSelection && a.getSelection();
          if (e && e.rangeCount !== 0) {
            a = e.anchorNode;
            var u = e.anchorOffset,
              n = e.focusNode;
            e = e.focusOffset;
            try {
              (a.nodeType, n.nodeType);
            } catch {
              a = null;
              break l;
            }
            var c = 0,
              i = -1,
              f = -1,
              v = 0,
              g = 0,
              z = l,
              h = null;
            t: for (;;) {
              for (
                var r;
                z !== a || (u !== 0 && z.nodeType !== 3) || (i = c + u),
                  z !== n || (e !== 0 && z.nodeType !== 3) || (f = c + e),
                  z.nodeType === 3 && (c += z.nodeValue.length),
                  (r = z.firstChild) !== null;
              )
                ((h = z), (z = r));
              for (;;) {
                if (z === l) break t;
                if (
                  (h === a && ++v === u && (i = c),
                  h === n && ++g === e && (f = c),
                  (r = z.nextSibling) !== null)
                )
                  break;
                ((z = h), (h = z.parentNode));
              }
              z = r;
            }
            a = i === -1 || f === -1 ? null : { start: i, end: f };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (
      Vi = { focusedElem: l, selectionRange: a }, jn = !1, Nl = t;
      Nl !== null;
    )
      if (
        ((t = Nl), (l = t.child), (t.subtreeFlags & 1028) !== 0 && l !== null)
      )
        ((l.return = t), (Nl = l));
      else
        for (; Nl !== null; ) {
          switch (((t = Nl), (n = t.alternate), (l = t.flags), t.tag)) {
            case 0:
              if (
                (l & 4) !== 0 &&
                ((l = t.updateQueue),
                (l = l !== null ? l.events : null),
                l !== null)
              )
                for (a = 0; a < l.length; a++)
                  ((u = l[a]), (u.ref.impl = u.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && n !== null) {
                ((l = void 0),
                  (a = t),
                  (u = n.memoizedProps),
                  (n = n.memoizedState),
                  (e = a.stateNode));
                try {
                  var N = Xa(a.type, u);
                  ((l = e.getSnapshotBeforeUpdate(N, n)),
                    (e.__reactInternalSnapshotBeforeUpdate = l));
                } catch (B) {
                  nl(a, a.return, B);
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (
                  ((l = t.stateNode.containerInfo), (a = l.nodeType), a === 9)
                )
                  wi(l);
                else if (a === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      wi(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(m(163));
          }
          if (((l = t.sibling), l !== null)) {
            ((l.return = t.return), (Nl = l));
            break;
          }
          Nl = t.return;
        }
  }
  function W0(l, t, a) {
    var e = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        (Jt(l, a), e & 4 && eu(5, a));
        break;
      case 1:
        if ((Jt(l, a), e & 4))
          if (((l = a.stateNode), t === null))
            try {
              l.componentDidMount();
            } catch (c) {
              nl(a, a.return, c);
            }
          else {
            var u = Xa(a.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              l.componentDidUpdate(u, t, l.__reactInternalSnapshotBeforeUpdate);
            } catch (c) {
              nl(a, a.return, c);
            }
          }
        (e & 64 && Z0(a), e & 512 && uu(a, a.return));
        break;
      case 3:
        if ((Jt(l, a), e & 64 && ((l = a.updateQueue), l !== null))) {
          if (((t = null), a.child !== null))
            switch (a.child.tag) {
              case 27:
              case 5:
                t = a.child.stateNode;
                break;
              case 1:
                t = a.child.stateNode;
            }
          try {
            Hs(l, t);
          } catch (c) {
            nl(a, a.return, c);
          }
        }
        break;
      case 27:
        t === null && e & 4 && J0(a);
      case 26:
      case 5:
        (Jt(l, a), t === null && e & 4 && V0(a), e & 512 && uu(a, a.return));
        break;
      case 12:
        Jt(l, a);
        break;
      case 31:
        (Jt(l, a), e & 4 && F0(l, a));
        break;
      case 13:
        (Jt(l, a),
          e & 4 && I0(l, a),
          e & 64 &&
            ((l = a.memoizedState),
            l !== null &&
              ((l = l.dehydrated),
              l !== null && ((a = d1.bind(null, a)), U1(l, a)))));
        break;
      case 22:
        if (((e = a.memoizedState !== null || Vt), !e)) {
          ((t = (t !== null && t.memoizedState !== null) || pl), (u = Vt));
          var n = pl;
          ((Vt = e),
            (pl = t) && !n ? wt(l, a, (a.subtreeFlags & 8772) !== 0) : Jt(l, a),
            (Vt = u),
            (pl = n));
        }
        break;
      case 30:
        break;
      default:
        Jt(l, a);
    }
  }
  function $0(l) {
    var t = l.alternate;
    (t !== null && ((l.alternate = null), $0(t)),
      (l.child = null),
      (l.deletions = null),
      (l.sibling = null),
      l.tag === 5 && ((t = l.stateNode), t !== null && In(t)),
      (l.stateNode = null),
      (l.return = null),
      (l.dependencies = null),
      (l.memoizedProps = null),
      (l.memoizedState = null),
      (l.pendingProps = null),
      (l.stateNode = null),
      (l.updateQueue = null));
  }
  var vl = null,
    wl = !1;
  function Kt(l, t, a) {
    for (a = a.child; a !== null; ) (k0(l, t, a), (a = a.sibling));
  }
  function k0(l, t, a) {
    if (et && typeof et.onCommitFiberUnmount == "function")
      try {
        et.onCommitFiberUnmount(De, a);
      } catch {}
    switch (a.tag) {
      case 26:
        (pl || xt(a, t),
          Kt(l, t, a),
          a.memoizedState
            ? a.memoizedState.count--
            : a.stateNode && ((a = a.stateNode), a.parentNode.removeChild(a)));
        break;
      case 27:
        pl || xt(a, t);
        var e = vl,
          u = wl;
        (Sa(a.type) && ((vl = a.stateNode), (wl = !1)),
          Kt(l, t, a),
          yu(a.stateNode),
          (vl = e),
          (wl = u));
        break;
      case 5:
        pl || xt(a, t);
      case 6:
        if (
          ((e = vl),
          (u = wl),
          (vl = null),
          Kt(l, t, a),
          (vl = e),
          (wl = u),
          vl !== null)
        )
          if (wl)
            try {
              (vl.nodeType === 9
                ? vl.body
                : vl.nodeName === "HTML"
                  ? vl.ownerDocument.body
                  : vl
              ).removeChild(a.stateNode);
            } catch (n) {
              nl(a, t, n);
            }
          else
            try {
              vl.removeChild(a.stateNode);
            } catch (n) {
              nl(a, t, n);
            }
        break;
      case 18:
        vl !== null &&
          (wl
            ? ((l = vl),
              Lo(
                l.nodeType === 9
                  ? l.body
                  : l.nodeName === "HTML"
                    ? l.ownerDocument.body
                    : l,
                a.stateNode,
              ),
              Me(l))
            : Lo(vl, a.stateNode));
        break;
      case 4:
        ((e = vl),
          (u = wl),
          (vl = a.stateNode.containerInfo),
          (wl = !0),
          Kt(l, t, a),
          (vl = e),
          (wl = u));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (da(2, a, t), pl || da(4, a, t), Kt(l, t, a));
        break;
      case 1:
        (pl ||
          (xt(a, t),
          (e = a.stateNode),
          typeof e.componentWillUnmount == "function" && L0(a, t, e)),
          Kt(l, t, a));
        break;
      case 21:
        Kt(l, t, a);
        break;
      case 22:
        ((pl = (e = pl) || a.memoizedState !== null), Kt(l, t, a), (pl = e));
        break;
      default:
        Kt(l, t, a);
    }
  }
  function F0(l, t) {
    if (
      t.memoizedState === null &&
      ((l = t.alternate), l !== null && ((l = l.memoizedState), l !== null))
    ) {
      l = l.dehydrated;
      try {
        Me(l);
      } catch (a) {
        nl(t, t.return, a);
      }
    }
  }
  function I0(l, t) {
    if (
      t.memoizedState === null &&
      ((l = t.alternate),
      l !== null &&
        ((l = l.memoizedState), l !== null && ((l = l.dehydrated), l !== null)))
    )
      try {
        Me(l);
      } catch (a) {
        nl(t, t.return, a);
      }
  }
  function e1(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var t = l.stateNode;
        return (t === null && (t = l.stateNode = new w0()), t);
      case 22:
        return (
          (l = l.stateNode),
          (t = l._retryCache),
          t === null && (t = l._retryCache = new w0()),
          t
        );
      default:
        throw Error(m(435, l.tag));
    }
  }
  function vn(l, t) {
    var a = e1(l);
    t.forEach(function (e) {
      if (!a.has(e)) {
        a.add(e);
        var u = m1.bind(null, l, e);
        e.then(u, u);
      }
    });
  }
  function Wl(l, t) {
    var a = t.deletions;
    if (a !== null)
      for (var e = 0; e < a.length; e++) {
        var u = a[e],
          n = l,
          c = t,
          i = c;
        l: for (; i !== null; ) {
          switch (i.tag) {
            case 27:
              if (Sa(i.type)) {
                ((vl = i.stateNode), (wl = !1));
                break l;
              }
              break;
            case 5:
              ((vl = i.stateNode), (wl = !1));
              break l;
            case 3:
            case 4:
              ((vl = i.stateNode.containerInfo), (wl = !0));
              break l;
          }
          i = i.return;
        }
        if (vl === null) throw Error(m(160));
        (k0(n, c, u),
          (vl = null),
          (wl = !1),
          (n = u.alternate),
          n !== null && (n.return = null),
          (u.return = null));
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; ) (P0(t, l), (t = t.sibling));
  }
  var Mt = null;
  function P0(l, t) {
    var a = l.alternate,
      e = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (Wl(t, l),
          $l(l),
          e & 4 && (da(3, l, l.return), eu(3, l), da(5, l, l.return)));
        break;
      case 1:
        (Wl(t, l),
          $l(l),
          e & 512 && (pl || a === null || xt(a, a.return)),
          e & 64 &&
            Vt &&
            ((l = l.updateQueue),
            l !== null &&
              ((e = l.callbacks),
              e !== null &&
                ((a = l.shared.hiddenCallbacks),
                (l.shared.hiddenCallbacks = a === null ? e : a.concat(e))))));
        break;
      case 26:
        var u = Mt;
        if (
          (Wl(t, l),
          $l(l),
          e & 512 && (pl || a === null || xt(a, a.return)),
          e & 4)
        ) {
          var n = a !== null ? a.memoizedState : null;
          if (((e = l.memoizedState), a === null))
            if (e === null)
              if (l.stateNode === null) {
                l: {
                  ((e = l.type),
                    (a = l.memoizedProps),
                    (u = u.ownerDocument || u));
                  t: switch (e) {
                    case "title":
                      ((n = u.getElementsByTagName("title")[0]),
                        (!n ||
                          n[Ue] ||
                          n[Cl] ||
                          n.namespaceURI === "http://www.w3.org/2000/svg" ||
                          n.hasAttribute("itemprop")) &&
                          ((n = u.createElement(e)),
                          u.head.insertBefore(
                            n,
                            u.querySelector("head > title"),
                          )),
                        Bl(n, e, a),
                        (n[Cl] = l),
                        Dl(n),
                        (e = n));
                      break l;
                    case "link":
                      var c = ld("link", "href", u).get(e + (a.href || ""));
                      if (c) {
                        for (var i = 0; i < c.length; i++)
                          if (
                            ((n = c[i]),
                            n.getAttribute("href") ===
                              (a.href == null || a.href === ""
                                ? null
                                : a.href) &&
                              n.getAttribute("rel") ===
                                (a.rel == null ? null : a.rel) &&
                              n.getAttribute("title") ===
                                (a.title == null ? null : a.title) &&
                              n.getAttribute("crossorigin") ===
                                (a.crossOrigin == null ? null : a.crossOrigin))
                          ) {
                            c.splice(i, 1);
                            break t;
                          }
                      }
                      ((n = u.createElement(e)),
                        Bl(n, e, a),
                        u.head.appendChild(n));
                      break;
                    case "meta":
                      if (
                        (c = ld("meta", "content", u).get(
                          e + (a.content || ""),
                        ))
                      ) {
                        for (i = 0; i < c.length; i++)
                          if (
                            ((n = c[i]),
                            n.getAttribute("content") ===
                              (a.content == null ? null : "" + a.content) &&
                              n.getAttribute("name") ===
                                (a.name == null ? null : a.name) &&
                              n.getAttribute("property") ===
                                (a.property == null ? null : a.property) &&
                              n.getAttribute("http-equiv") ===
                                (a.httpEquiv == null ? null : a.httpEquiv) &&
                              n.getAttribute("charset") ===
                                (a.charSet == null ? null : a.charSet))
                          ) {
                            c.splice(i, 1);
                            break t;
                          }
                      }
                      ((n = u.createElement(e)),
                        Bl(n, e, a),
                        u.head.appendChild(n));
                      break;
                    default:
                      throw Error(m(468, e));
                  }
                  ((n[Cl] = l), Dl(n), (e = n));
                }
                l.stateNode = e;
              } else td(u, l.type, l.stateNode);
            else l.stateNode = Po(u, e, l.memoizedProps);
          else
            n !== e
              ? (n === null
                  ? a.stateNode !== null &&
                    ((a = a.stateNode), a.parentNode.removeChild(a))
                  : n.count--,
                e === null
                  ? td(u, l.type, l.stateNode)
                  : Po(u, e, l.memoizedProps))
              : e === null &&
                l.stateNode !== null &&
                bi(l, l.memoizedProps, a.memoizedProps);
        }
        break;
      case 27:
        (Wl(t, l),
          $l(l),
          e & 512 && (pl || a === null || xt(a, a.return)),
          a !== null && e & 4 && bi(l, l.memoizedProps, a.memoizedProps));
        break;
      case 5:
        if (
          (Wl(t, l),
          $l(l),
          e & 512 && (pl || a === null || xt(a, a.return)),
          l.flags & 32)
        ) {
          u = l.stateNode;
          try {
            $a(u, "");
          } catch (N) {
            nl(l, l.return, N);
          }
        }
        (e & 4 &&
          l.stateNode != null &&
          ((u = l.memoizedProps), bi(l, u, a !== null ? a.memoizedProps : u)),
          e & 1024 && (Ti = !0));
        break;
      case 6:
        if ((Wl(t, l), $l(l), e & 4)) {
          if (l.stateNode === null) throw Error(m(162));
          ((e = l.memoizedProps), (a = l.stateNode));
          try {
            a.nodeValue = e;
          } catch (N) {
            nl(l, l.return, N);
          }
        }
        break;
      case 3:
        if (
          ((xn = null),
          (u = Mt),
          (Mt = Dn(t.containerInfo)),
          Wl(t, l),
          (Mt = u),
          $l(l),
          e & 4 && a !== null && a.memoizedState.isDehydrated)
        )
          try {
            Me(t.containerInfo);
          } catch (N) {
            nl(l, l.return, N);
          }
        Ti && ((Ti = !1), lo(l));
        break;
      case 4:
        ((e = Mt),
          (Mt = Dn(l.stateNode.containerInfo)),
          Wl(t, l),
          $l(l),
          (Mt = e));
        break;
      case 12:
        (Wl(t, l), $l(l));
        break;
      case 31:
        (Wl(t, l),
          $l(l),
          e & 4 &&
            ((e = l.updateQueue),
            e !== null && ((l.updateQueue = null), vn(l, e))));
        break;
      case 13:
        (Wl(t, l),
          $l(l),
          l.child.flags & 8192 &&
            (l.memoizedState !== null) !=
              (a !== null && a.memoizedState !== null) &&
            (rn = at()),
          e & 4 &&
            ((e = l.updateQueue),
            e !== null && ((l.updateQueue = null), vn(l, e))));
        break;
      case 22:
        u = l.memoizedState !== null;
        var f = a !== null && a.memoizedState !== null,
          v = Vt,
          g = pl;
        if (
          ((Vt = v || u),
          (pl = g || f),
          Wl(t, l),
          (pl = g),
          (Vt = v),
          $l(l),
          e & 8192)
        )
          l: for (
            t = l.stateNode,
              t._visibility = u ? t._visibility & -2 : t._visibility | 1,
              u && (a === null || f || Vt || pl || Qa(l)),
              a = null,
              t = l;
            ;
          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                f = a = t;
                try {
                  if (((n = f.stateNode), u))
                    ((c = n.style),
                      typeof c.setProperty == "function"
                        ? c.setProperty("display", "none", "important")
                        : (c.display = "none"));
                  else {
                    i = f.stateNode;
                    var z = f.memoizedProps.style,
                      h =
                        z != null && z.hasOwnProperty("display")
                          ? z.display
                          : null;
                    i.style.display =
                      h == null || typeof h == "boolean" ? "" : ("" + h).trim();
                  }
                } catch (N) {
                  nl(f, f.return, N);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                f = t;
                try {
                  f.stateNode.nodeValue = u ? "" : f.memoizedProps;
                } catch (N) {
                  nl(f, f.return, N);
                }
              }
            } else if (t.tag === 18) {
              if (a === null) {
                f = t;
                try {
                  var r = f.stateNode;
                  u ? Vo(r, !0) : Vo(f.stateNode, !1);
                } catch (N) {
                  nl(f, f.return, N);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === l) &&
              t.child !== null
            ) {
              ((t.child.return = t), (t = t.child));
              continue;
            }
            if (t === l) break l;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === l) break l;
              (a === t && (a = null), (t = t.return));
            }
            (a === t && (a = null),
              (t.sibling.return = t.return),
              (t = t.sibling));
          }
        e & 4 &&
          ((e = l.updateQueue),
          e !== null &&
            ((a = e.retryQueue),
            a !== null && ((e.retryQueue = null), vn(l, a))));
        break;
      case 19:
        (Wl(t, l),
          $l(l),
          e & 4 &&
            ((e = l.updateQueue),
            e !== null && ((l.updateQueue = null), vn(l, e))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (Wl(t, l), $l(l));
    }
  }
  function $l(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var a, e = l.return; e !== null; ) {
          if (K0(e)) {
            a = e;
            break;
          }
          e = e.return;
        }
        if (a == null) throw Error(m(160));
        switch (a.tag) {
          case 27:
            var u = a.stateNode,
              n = zi(l);
            yn(l, n, u);
            break;
          case 5:
            var c = a.stateNode;
            a.flags & 32 && ($a(c, ""), (a.flags &= -33));
            var i = zi(l);
            yn(l, i, c);
            break;
          case 3:
          case 4:
            var f = a.stateNode.containerInfo,
              v = zi(l);
            Ei(l, v, f);
            break;
          default:
            throw Error(m(161));
        }
      } catch (g) {
        nl(l, l.return, g);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function lo(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        (lo(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (l = l.sibling));
      }
  }
  function Jt(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) (W0(l, t.alternate, t), (t = t.sibling));
  }
  function Qa(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (da(4, t, t.return), Qa(t));
          break;
        case 1:
          xt(t, t.return);
          var a = t.stateNode;
          (typeof a.componentWillUnmount == "function" && L0(t, t.return, a),
            Qa(t));
          break;
        case 27:
          yu(t.stateNode);
        case 26:
        case 5:
          (xt(t, t.return), Qa(t));
          break;
        case 22:
          t.memoizedState === null && Qa(t);
          break;
        case 30:
          Qa(t);
          break;
        default:
          Qa(t);
      }
      l = l.sibling;
    }
  }
  function wt(l, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var e = t.alternate,
        u = l,
        n = t,
        c = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          (wt(u, n, a), eu(4, n));
          break;
        case 1:
          if (
            (wt(u, n, a),
            (e = n),
            (u = e.stateNode),
            typeof u.componentDidMount == "function")
          )
            try {
              u.componentDidMount();
            } catch (v) {
              nl(e, e.return, v);
            }
          if (((e = n), (u = e.updateQueue), u !== null)) {
            var i = e.stateNode;
            try {
              var f = u.shared.hiddenCallbacks;
              if (f !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < f.length; u++)
                  Us(f[u], i);
            } catch (v) {
              nl(e, e.return, v);
            }
          }
          (a && c & 64 && Z0(n), uu(n, n.return));
          break;
        case 27:
          J0(n);
        case 26:
        case 5:
          (wt(u, n, a), a && e === null && c & 4 && V0(n), uu(n, n.return));
          break;
        case 12:
          wt(u, n, a);
          break;
        case 31:
          (wt(u, n, a), a && c & 4 && F0(u, n));
          break;
        case 13:
          (wt(u, n, a), a && c & 4 && I0(u, n));
          break;
        case 22:
          (n.memoizedState === null && wt(u, n, a), uu(n, n.return));
          break;
        case 30:
          break;
        default:
          wt(u, n, a);
      }
      t = t.sibling;
    }
  }
  function Ai(l, t) {
    var a = null;
    (l !== null &&
      l.memoizedState !== null &&
      l.memoizedState.cachePool !== null &&
      (a = l.memoizedState.cachePool.pool),
      (l = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (l = t.memoizedState.cachePool.pool),
      l !== a && (l != null && l.refCount++, a != null && Ve(a)));
  }
  function pi(l, t) {
    ((l = null),
      t.alternate !== null && (l = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== l && (t.refCount++, l != null && Ve(l)));
  }
  function Ot(l, t, a, e) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) (to(l, t, a, e), (t = t.sibling));
  }
  function to(l, t, a, e) {
    var u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (Ot(l, t, a, e), u & 2048 && eu(9, t));
        break;
      case 1:
        Ot(l, t, a, e);
        break;
      case 3:
        (Ot(l, t, a, e),
          u & 2048 &&
            ((l = null),
            t.alternate !== null && (l = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== l && (t.refCount++, l != null && Ve(l))));
        break;
      case 12:
        if (u & 2048) {
          (Ot(l, t, a, e), (l = t.stateNode));
          try {
            var n = t.memoizedProps,
              c = n.id,
              i = n.onPostCommit;
            typeof i == "function" &&
              i(
                c,
                t.alternate === null ? "mount" : "update",
                l.passiveEffectDuration,
                -0,
              );
          } catch (f) {
            nl(t, t.return, f);
          }
        } else Ot(l, t, a, e);
        break;
      case 31:
        Ot(l, t, a, e);
        break;
      case 13:
        Ot(l, t, a, e);
        break;
      case 23:
        break;
      case 22:
        ((n = t.stateNode),
          (c = t.alternate),
          t.memoizedState !== null
            ? n._visibility & 2
              ? Ot(l, t, a, e)
              : nu(l, t)
            : n._visibility & 2
              ? Ot(l, t, a, e)
              : ((n._visibility |= 2),
                he(l, t, a, e, (t.subtreeFlags & 10256) !== 0 || !1)),
          u & 2048 && Ai(c, t));
        break;
      case 24:
        (Ot(l, t, a, e), u & 2048 && pi(t.alternate, t));
        break;
      default:
        Ot(l, t, a, e);
    }
  }
  function he(l, t, a, e, u) {
    for (
      u = u && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child;
      t !== null;
    ) {
      var n = l,
        c = t,
        i = a,
        f = e,
        v = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          (he(n, c, i, f, u), eu(8, c));
          break;
        case 23:
          break;
        case 22:
          var g = c.stateNode;
          (c.memoizedState !== null
            ? g._visibility & 2
              ? he(n, c, i, f, u)
              : nu(n, c)
            : ((g._visibility |= 2), he(n, c, i, f, u)),
            u && v & 2048 && Ai(c.alternate, c));
          break;
        case 24:
          (he(n, c, i, f, u), u && v & 2048 && pi(c.alternate, c));
          break;
        default:
          he(n, c, i, f, u);
      }
      t = t.sibling;
    }
  }
  function nu(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = l,
          e = t,
          u = e.flags;
        switch (e.tag) {
          case 22:
            (nu(a, e), u & 2048 && Ai(e.alternate, e));
            break;
          case 24:
            (nu(a, e), u & 2048 && pi(e.alternate, e));
            break;
          default:
            nu(a, e);
        }
        t = t.sibling;
      }
  }
  var cu = 8192;
  function re(l, t, a) {
    if (l.subtreeFlags & cu)
      for (l = l.child; l !== null; ) (ao(l, t, a), (l = l.sibling));
  }
  function ao(l, t, a) {
    switch (l.tag) {
      case 26:
        (re(l, t, a),
          l.flags & cu &&
            l.memoizedState !== null &&
            L1(a, Mt, l.memoizedState, l.memoizedProps));
        break;
      case 5:
        re(l, t, a);
        break;
      case 3:
      case 4:
        var e = Mt;
        ((Mt = Dn(l.stateNode.containerInfo)), re(l, t, a), (Mt = e));
        break;
      case 22:
        l.memoizedState === null &&
          ((e = l.alternate),
          e !== null && e.memoizedState !== null
            ? ((e = cu), (cu = 16777216), re(l, t, a), (cu = e))
            : re(l, t, a));
        break;
      default:
        re(l, t, a);
    }
  }
  function eo(l) {
    var t = l.alternate;
    if (t !== null && ((l = t.child), l !== null)) {
      t.child = null;
      do ((t = l.sibling), (l.sibling = null), (l = t));
      while (l !== null);
    }
  }
  function iu(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var e = t[a];
          ((Nl = e), no(e, l));
        }
      eo(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) (uo(l), (l = l.sibling));
  }
  function uo(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        (iu(l), l.flags & 2048 && da(9, l, l.return));
        break;
      case 3:
        iu(l);
        break;
      case 12:
        iu(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null &&
        t._visibility & 2 &&
        (l.return === null || l.return.tag !== 13)
          ? ((t._visibility &= -3), hn(l))
          : iu(l);
        break;
      default:
        iu(l);
    }
  }
  function hn(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var e = t[a];
          ((Nl = e), no(e, l));
        }
      eo(l);
    }
    for (l = l.child; l !== null; ) {
      switch (((t = l), t.tag)) {
        case 0:
        case 11:
        case 15:
          (da(8, t, t.return), hn(t));
          break;
        case 22:
          ((a = t.stateNode),
            a._visibility & 2 && ((a._visibility &= -3), hn(t)));
          break;
        default:
          hn(t);
      }
      l = l.sibling;
    }
  }
  function no(l, t) {
    for (; Nl !== null; ) {
      var a = Nl;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          da(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var e = a.memoizedState.cachePool.pool;
            e != null && e.refCount++;
          }
          break;
        case 24:
          Ve(a.memoizedState.cache);
      }
      if (((e = a.child), e !== null)) ((e.return = a), (Nl = e));
      else
        l: for (a = l; Nl !== null; ) {
          e = Nl;
          var u = e.sibling,
            n = e.return;
          if (($0(e), e === a)) {
            Nl = null;
            break l;
          }
          if (u !== null) {
            ((u.return = n), (Nl = u));
            break l;
          }
          Nl = n;
        }
    }
  }
  var u1 = {
      getCacheForType: function (l) {
        var t = Rl(El),
          a = t.data.get(l);
        return (a === void 0 && ((a = l()), t.data.set(l, a)), a);
      },
      cacheSignal: function () {
        return Rl(El).controller.signal;
      },
    },
    n1 = typeof WeakMap == "function" ? WeakMap : Map,
    tl = 0,
    dl = null,
    W = null,
    k = 0,
    ul = 0,
    st = null,
    ma = !1,
    ge = !1,
    _i = !1,
    Wt = 0,
    rl = 0,
    ya = 0,
    Za = 0,
    Mi = 0,
    ot = 0,
    Se = 0,
    fu = null,
    kl = null,
    Oi = !1,
    rn = 0,
    co = 0,
    gn = 1 / 0,
    Sn = null,
    va = null,
    _l = 0,
    ha = null,
    be = null,
    $t = 0,
    Di = 0,
    Ni = null,
    io = null,
    su = 0,
    xi = null;
  function dt() {
    return (tl & 2) !== 0 && k !== 0 ? k & -k : S.T !== null ? qi() : Af();
  }
  function fo() {
    if (ot === 0)
      if ((k & 536870912) === 0 || I) {
        var l = _u;
        ((_u <<= 1), (_u & 3932160) === 0 && (_u = 262144), (ot = l));
      } else ot = 536870912;
    return ((l = it.current), l !== null && (l.flags |= 32), ot);
  }
  function Fl(l, t, a) {
    (((l === dl && (ul === 2 || ul === 9)) || l.cancelPendingCommit !== null) &&
      (ze(l, 0), ra(l, k, ot, !1)),
      xe(l, a),
      ((tl & 2) === 0 || l !== dl) &&
        (l === dl &&
          ((tl & 2) === 0 && (Za |= a), rl === 4 && ra(l, k, ot, !1)),
        Ut(l)));
  }
  function so(l, t, a) {
    if ((tl & 6) !== 0) throw Error(m(327));
    var e = (!a && (t & 127) === 0 && (t & l.expiredLanes) === 0) || Ne(l, t),
      u = e ? f1(l, t) : Hi(l, t, !0),
      n = e;
    do {
      if (u === 0) {
        ge && !e && ra(l, t, 0, !1);
        break;
      } else {
        if (((a = l.current.alternate), n && !c1(a))) {
          ((u = Hi(l, t, !1)), (n = !1));
          continue;
        }
        if (u === 2) {
          if (((n = t), l.errorRecoveryDisabledLanes & n)) var c = 0;
          else
            ((c = l.pendingLanes & -536870913),
              (c = c !== 0 ? c : c & 536870912 ? 536870912 : 0));
          if (c !== 0) {
            t = c;
            l: {
              var i = l;
              u = fu;
              var f = i.current.memoizedState.isDehydrated;
              if ((f && (ze(i, c).flags |= 256), (c = Hi(i, c, !1)), c !== 2)) {
                if (_i && !f) {
                  ((i.errorRecoveryDisabledLanes |= n), (Za |= n), (u = 4));
                  break l;
                }
                ((n = kl),
                  (kl = u),
                  n !== null &&
                    (kl === null ? (kl = n) : kl.push.apply(kl, n)));
              }
              u = c;
            }
            if (((n = !1), u !== 2)) continue;
          }
        }
        if (u === 1) {
          (ze(l, 0), ra(l, t, 0, !0));
          break;
        }
        l: {
          switch (((e = l), (n = u), n)) {
            case 0:
            case 1:
              throw Error(m(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              ra(e, t, ot, !ma);
              break l;
            case 2:
              kl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(m(329));
          }
          if ((t & 62914560) === t && ((u = rn + 300 - at()), 10 < u)) {
            if ((ra(e, t, ot, !ma), Ou(e, 0, !0) !== 0)) break l;
            (($t = t),
              (e.timeoutHandle = Qo(
                oo.bind(
                  null,
                  e,
                  a,
                  kl,
                  Sn,
                  Oi,
                  t,
                  ot,
                  Za,
                  Se,
                  ma,
                  n,
                  "Throttled",
                  -0,
                  0,
                ),
                u,
              )));
            break l;
          }
          oo(e, a, kl, Sn, Oi, t, ot, Za, Se, ma, n, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Ut(l);
  }
  function oo(l, t, a, e, u, n, c, i, f, v, g, z, h, r) {
    if (
      ((l.timeoutHandle = -1),
      (z = t.subtreeFlags),
      z & 8192 || (z & 16785408) === 16785408)
    ) {
      ((z = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: jt,
      }),
        ao(t, n, z));
      var N =
        (n & 62914560) === n ? rn - at() : (n & 4194048) === n ? co - at() : 0;
      if (((N = V1(z, N)), N !== null)) {
        (($t = n),
          (l.cancelPendingCommit = N(
            bo.bind(null, l, t, n, a, e, u, c, i, f, g, z, null, h, r),
          )),
          ra(l, n, c, !v));
        return;
      }
    }
    bo(l, t, n, a, e, u, c, i, f);
  }
  function c1(l) {
    for (var t = l; ; ) {
      var a = t.tag;
      if (
        (a === 0 || a === 11 || a === 15) &&
        t.flags & 16384 &&
        ((a = t.updateQueue), a !== null && ((a = a.stores), a !== null))
      )
        for (var e = 0; e < a.length; e++) {
          var u = a[e],
            n = u.getSnapshot;
          u = u.value;
          try {
            if (!nt(n(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (((a = t.child), t.subtreeFlags & 16384 && a !== null))
        ((a.return = t), (t = a));
      else {
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function ra(l, t, a, e) {
    ((t &= ~Mi),
      (t &= ~Za),
      (l.suspendedLanes |= t),
      (l.pingedLanes &= ~t),
      e && (l.warmLanes |= t),
      (e = l.expirationTimes));
    for (var u = t; 0 < u; ) {
      var n = 31 - ut(u),
        c = 1 << n;
      ((e[n] = -1), (u &= ~c));
    }
    a !== 0 && zf(l, a, t);
  }
  function bn() {
    return (tl & 6) === 0 ? (ou(0), !1) : !0;
  }
  function Ui() {
    if (W !== null) {
      if (ul === 0) var l = W.return;
      else ((l = W), (Yt = Ca = null), wc(l), (oe = null), (Je = 0), (l = W));
      for (; l !== null; ) (Q0(l.alternate, l), (l = l.return));
      W = null;
    }
  }
  function ze(l, t) {
    var a = l.timeoutHandle;
    (a !== -1 && ((l.timeoutHandle = -1), M1(a)),
      (a = l.cancelPendingCommit),
      a !== null && ((l.cancelPendingCommit = null), a()),
      ($t = 0),
      Ui(),
      (dl = l),
      (W = a = qt(l.current, null)),
      (k = t),
      (ul = 0),
      (st = null),
      (ma = !1),
      (ge = Ne(l, t)),
      (_i = !1),
      (Se = ot = Mi = Za = ya = rl = 0),
      (kl = fu = null),
      (Oi = !1),
      (t & 8) !== 0 && (t |= t & 32));
    var e = l.entangledLanes;
    if (e !== 0)
      for (l = l.entanglements, e &= t; 0 < e; ) {
        var u = 31 - ut(e),
          n = 1 << u;
        ((t |= l[u]), (e &= ~n));
      }
    return ((Wt = t), Gu(), a);
  }
  function mo(l, t) {
    ((L = null),
      (S.H = lu),
      t === se || t === wu
        ? ((t = Os()), (ul = 3))
        : t === Rc
          ? ((t = Os()), (ul = 4))
          : (ul =
              t === si
                ? 8
                : t !== null &&
                    typeof t == "object" &&
                    typeof t.then == "function"
                  ? 6
                  : 1),
      (st = t),
      W === null && ((rl = 1), fn(l, rt(t, l.current))));
  }
  function yo() {
    var l = it.current;
    return l === null
      ? !0
      : (k & 4194048) === k
        ? zt === null
        : (k & 62914560) === k || (k & 536870912) !== 0
          ? l === zt
          : !1;
  }
  function vo() {
    var l = S.H;
    return ((S.H = lu), l === null ? lu : l);
  }
  function ho() {
    var l = S.A;
    return ((S.A = u1), l);
  }
  function zn() {
    ((rl = 4),
      ma || ((k & 4194048) !== k && it.current !== null) || (ge = !0),
      ((ya & 134217727) === 0 && (Za & 134217727) === 0) ||
        dl === null ||
        ra(dl, k, ot, !1));
  }
  function Hi(l, t, a) {
    var e = tl;
    tl |= 2;
    var u = vo(),
      n = ho();
    ((dl !== l || k !== t) && ((Sn = null), ze(l, t)), (t = !1));
    var c = rl;
    l: do
      try {
        if (ul !== 0 && W !== null) {
          var i = W,
            f = st;
          switch (ul) {
            case 8:
              (Ui(), (c = 6));
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              it.current === null && (t = !0);
              var v = ul;
              if (((ul = 0), (st = null), Ee(l, i, f, v), a && ge)) {
                c = 0;
                break l;
              }
              break;
            default:
              ((v = ul), (ul = 0), (st = null), Ee(l, i, f, v));
          }
        }
        (i1(), (c = rl));
        break;
      } catch (g) {
        mo(l, g);
      }
    while (!0);
    return (
      t && l.shellSuspendCounter++,
      (Yt = Ca = null),
      (tl = e),
      (S.H = u),
      (S.A = n),
      W === null && ((dl = null), (k = 0), Gu()),
      c
    );
  }
  function i1() {
    for (; W !== null; ) ro(W);
  }
  function f1(l, t) {
    var a = tl;
    tl |= 2;
    var e = vo(),
      u = ho();
    dl !== l || k !== t
      ? ((Sn = null), (gn = at() + 500), ze(l, t))
      : (ge = Ne(l, t));
    l: do
      try {
        if (ul !== 0 && W !== null) {
          t = W;
          var n = st;
          t: switch (ul) {
            case 1:
              ((ul = 0), (st = null), Ee(l, t, n, 1));
              break;
            case 2:
            case 9:
              if (_s(n)) {
                ((ul = 0), (st = null), go(t));
                break;
              }
              ((t = function () {
                ((ul !== 2 && ul !== 9) || dl !== l || (ul = 7), Ut(l));
              }),
                n.then(t, t));
              break l;
            case 3:
              ul = 7;
              break l;
            case 4:
              ul = 5;
              break l;
            case 7:
              _s(n)
                ? ((ul = 0), (st = null), go(t))
                : ((ul = 0), (st = null), Ee(l, t, n, 7));
              break;
            case 5:
              var c = null;
              switch (W.tag) {
                case 26:
                  c = W.memoizedState;
                case 5:
                case 27:
                  var i = W;
                  if (c ? ad(c) : i.stateNode.complete) {
                    ((ul = 0), (st = null));
                    var f = i.sibling;
                    if (f !== null) W = f;
                    else {
                      var v = i.return;
                      v !== null ? ((W = v), En(v)) : (W = null);
                    }
                    break t;
                  }
              }
              ((ul = 0), (st = null), Ee(l, t, n, 5));
              break;
            case 6:
              ((ul = 0), (st = null), Ee(l, t, n, 6));
              break;
            case 8:
              (Ui(), (rl = 6));
              break l;
            default:
              throw Error(m(462));
          }
        }
        s1();
        break;
      } catch (g) {
        mo(l, g);
      }
    while (!0);
    return (
      (Yt = Ca = null),
      (S.H = e),
      (S.A = u),
      (tl = a),
      W !== null ? 0 : ((dl = null), (k = 0), Gu(), rl)
    );
  }
  function s1() {
    for (; W !== null && !Hd(); ) ro(W);
  }
  function ro(l) {
    var t = G0(l.alternate, l, Wt);
    ((l.memoizedProps = l.pendingProps), t === null ? En(l) : (W = t));
  }
  function go(l) {
    var t = l,
      a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = C0(a, t, t.pendingProps, t.type, void 0, k);
        break;
      case 11:
        t = C0(a, t, t.pendingProps, t.type.render, t.ref, k);
        break;
      case 5:
        wc(t);
      default:
        (Q0(a, t), (t = W = vs(t, Wt)), (t = G0(a, t, Wt)));
    }
    ((l.memoizedProps = l.pendingProps), t === null ? En(l) : (W = t));
  }
  function Ee(l, t, a, e) {
    ((Yt = Ca = null), wc(t), (oe = null), (Je = 0));
    var u = t.return;
    try {
      if (Fm(l, u, t, a, k)) {
        ((rl = 1), fn(l, rt(a, l.current)), (W = null));
        return;
      }
    } catch (n) {
      if (u !== null) throw ((W = u), n);
      ((rl = 1), fn(l, rt(a, l.current)), (W = null));
      return;
    }
    t.flags & 32768
      ? (I || e === 1
          ? (l = !0)
          : ge || (k & 536870912) !== 0
            ? (l = !1)
            : ((ma = l = !0),
              (e === 2 || e === 9 || e === 3 || e === 6) &&
                ((e = it.current),
                e !== null && e.tag === 13 && (e.flags |= 16384))),
        So(t, l))
      : En(t);
  }
  function En(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        So(t, ma);
        return;
      }
      l = t.return;
      var a = l1(t.alternate, t, Wt);
      if (a !== null) {
        W = a;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        W = t;
        return;
      }
      W = t = l;
    } while (t !== null);
    rl === 0 && (rl = 5);
  }
  function So(l, t) {
    do {
      var a = t1(l.alternate, l);
      if (a !== null) {
        ((a.flags &= 32767), (W = a));
        return;
      }
      if (
        ((a = l.return),
        a !== null &&
          ((a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)),
        !t && ((l = l.sibling), l !== null))
      ) {
        W = l;
        return;
      }
      W = l = a;
    } while (l !== null);
    ((rl = 6), (W = null));
  }
  function bo(l, t, a, e, u, n, c, i, f) {
    l.cancelPendingCommit = null;
    do Tn();
    while (_l !== 0);
    if ((tl & 6) !== 0) throw Error(m(327));
    if (t !== null) {
      if (t === l.current) throw Error(m(177));
      if (
        ((n = t.lanes | t.childLanes),
        (n |= zc),
        Zd(l, a, n, c, i, f),
        l === dl && ((W = dl = null), (k = 0)),
        (be = t),
        (ha = l),
        ($t = a),
        (Di = n),
        (Ni = u),
        (io = e),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((l.callbackNode = null),
            (l.callbackPriority = 0),
            y1(Au, function () {
              return (po(), null);
            }))
          : ((l.callbackNode = null), (l.callbackPriority = 0)),
        (e = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || e)
      ) {
        ((e = S.T), (S.T = null), (u = M.p), (M.p = 2), (c = tl), (tl |= 4));
        try {
          a1(l, t, a);
        } finally {
          ((tl = c), (M.p = u), (S.T = e));
        }
      }
      ((_l = 1), zo(), Eo(), To());
    }
  }
  function zo() {
    if (_l === 1) {
      _l = 0;
      var l = ha,
        t = be,
        a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        ((a = S.T), (S.T = null));
        var e = M.p;
        M.p = 2;
        var u = tl;
        tl |= 4;
        try {
          P0(t, l);
          var n = Vi,
            c = ns(l.containerInfo),
            i = n.focusedElem,
            f = n.selectionRange;
          if (
            c !== i &&
            i &&
            i.ownerDocument &&
            us(i.ownerDocument.documentElement, i)
          ) {
            if (f !== null && hc(i)) {
              var v = f.start,
                g = f.end;
              if ((g === void 0 && (g = v), "selectionStart" in i))
                ((i.selectionStart = v),
                  (i.selectionEnd = Math.min(g, i.value.length)));
              else {
                var z = i.ownerDocument || document,
                  h = (z && z.defaultView) || window;
                if (h.getSelection) {
                  var r = h.getSelection(),
                    N = i.textContent.length,
                    B = Math.min(f.start, N),
                    sl = f.end === void 0 ? B : Math.min(f.end, N);
                  !r.extend && B > sl && ((c = sl), (sl = B), (B = c));
                  var d = es(i, B),
                    s = es(i, sl);
                  if (
                    d &&
                    s &&
                    (r.rangeCount !== 1 ||
                      r.anchorNode !== d.node ||
                      r.anchorOffset !== d.offset ||
                      r.focusNode !== s.node ||
                      r.focusOffset !== s.offset)
                  ) {
                    var y = z.createRange();
                    (y.setStart(d.node, d.offset),
                      r.removeAllRanges(),
                      B > sl
                        ? (r.addRange(y), r.extend(s.node, s.offset))
                        : (y.setEnd(s.node, s.offset), r.addRange(y)));
                  }
                }
              }
            }
            for (z = [], r = i; (r = r.parentNode); )
              r.nodeType === 1 &&
                z.push({ element: r, left: r.scrollLeft, top: r.scrollTop });
            for (
              typeof i.focus == "function" && i.focus(), i = 0;
              i < z.length;
              i++
            ) {
              var b = z[i];
              ((b.element.scrollLeft = b.left), (b.element.scrollTop = b.top));
            }
          }
          ((jn = !!Li), (Vi = Li = null));
        } finally {
          ((tl = u), (M.p = e), (S.T = a));
        }
      }
      ((l.current = t), (_l = 2));
    }
  }
  function Eo() {
    if (_l === 2) {
      _l = 0;
      var l = ha,
        t = be,
        a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        ((a = S.T), (S.T = null));
        var e = M.p;
        M.p = 2;
        var u = tl;
        tl |= 4;
        try {
          W0(l, t.alternate, t);
        } finally {
          ((tl = u), (M.p = e), (S.T = a));
        }
      }
      _l = 3;
    }
  }
  function To() {
    if (_l === 4 || _l === 3) {
      ((_l = 0), Cd());
      var l = ha,
        t = be,
        a = $t,
        e = io;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (_l = 5)
        : ((_l = 0), (be = ha = null), Ao(l, l.pendingLanes));
      var u = l.pendingLanes;
      if (
        (u === 0 && (va = null),
        kn(a),
        (t = t.stateNode),
        et && typeof et.onCommitFiberRoot == "function")
      )
        try {
          et.onCommitFiberRoot(De, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (e !== null) {
        ((t = S.T), (u = M.p), (M.p = 2), (S.T = null));
        try {
          for (var n = l.onRecoverableError, c = 0; c < e.length; c++) {
            var i = e[c];
            n(i.value, { componentStack: i.stack });
          }
        } finally {
          ((S.T = t), (M.p = u));
        }
      }
      (($t & 3) !== 0 && Tn(),
        Ut(l),
        (u = l.pendingLanes),
        (a & 261930) !== 0 && (u & 42) !== 0
          ? l === xi
            ? su++
            : ((su = 0), (xi = l))
          : (su = 0),
        ou(0));
    }
  }
  function Ao(l, t) {
    (l.pooledCacheLanes &= t) === 0 &&
      ((t = l.pooledCache), t != null && ((l.pooledCache = null), Ve(t)));
  }
  function Tn() {
    return (zo(), Eo(), To(), po());
  }
  function po() {
    if (_l !== 5) return !1;
    var l = ha,
      t = Di;
    Di = 0;
    var a = kn($t),
      e = S.T,
      u = M.p;
    try {
      ((M.p = 32 > a ? 32 : a), (S.T = null), (a = Ni), (Ni = null));
      var n = ha,
        c = $t;
      if (((_l = 0), (be = ha = null), ($t = 0), (tl & 6) !== 0))
        throw Error(m(331));
      var i = tl;
      if (
        ((tl |= 4),
        uo(n.current),
        to(n, n.current, c, a),
        (tl = i),
        ou(0, !1),
        et && typeof et.onPostCommitFiberRoot == "function")
      )
        try {
          et.onPostCommitFiberRoot(De, n);
        } catch {}
      return !0;
    } finally {
      ((M.p = u), (S.T = e), Ao(l, t));
    }
  }
  function _o(l, t, a) {
    ((t = rt(a, t)),
      (t = fi(l.stateNode, t, 2)),
      (l = fa(l, t, 2)),
      l !== null && (xe(l, 2), Ut(l)));
  }
  function nl(l, t, a) {
    if (l.tag === 3) _o(l, l, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          _o(t, l, a);
          break;
        } else if (t.tag === 1) {
          var e = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof e.componentDidCatch == "function" &&
              (va === null || !va.has(e)))
          ) {
            ((l = rt(a, l)),
              (a = _0(2)),
              (e = fa(t, a, 2)),
              e !== null && (M0(a, e, t, l), xe(e, 2), Ut(e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Ci(l, t, a) {
    var e = l.pingCache;
    if (e === null) {
      e = l.pingCache = new n1();
      var u = new Set();
      e.set(t, u);
    } else ((u = e.get(t)), u === void 0 && ((u = new Set()), e.set(t, u)));
    u.has(a) ||
      ((_i = !0), u.add(a), (l = o1.bind(null, l, t, a)), t.then(l, l));
  }
  function o1(l, t, a) {
    var e = l.pingCache;
    (e !== null && e.delete(t),
      (l.pingedLanes |= l.suspendedLanes & a),
      (l.warmLanes &= ~a),
      dl === l &&
        (k & a) === a &&
        (rl === 4 || (rl === 3 && (k & 62914560) === k && 300 > at() - rn)
          ? (tl & 2) === 0 && ze(l, 0)
          : (Mi |= a),
        Se === k && (Se = 0)),
      Ut(l));
  }
  function Mo(l, t) {
    (t === 0 && (t = bf()), (l = xa(l, t)), l !== null && (xe(l, t), Ut(l)));
  }
  function d1(l) {
    var t = l.memoizedState,
      a = 0;
    (t !== null && (a = t.retryLane), Mo(l, a));
  }
  function m1(l, t) {
    var a = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var e = l.stateNode,
          u = l.memoizedState;
        u !== null && (a = u.retryLane);
        break;
      case 19:
        e = l.stateNode;
        break;
      case 22:
        e = l.stateNode._retryCache;
        break;
      default:
        throw Error(m(314));
    }
    (e !== null && e.delete(t), Mo(l, a));
  }
  function y1(l, t) {
    return Jn(l, t);
  }
  var An = null,
    Te = null,
    ji = !1,
    pn = !1,
    Ri = !1,
    ga = 0;
  function Ut(l) {
    (l !== Te &&
      l.next === null &&
      (Te === null ? (An = Te = l) : (Te = Te.next = l)),
      (pn = !0),
      ji || ((ji = !0), h1()));
  }
  function ou(l, t) {
    if (!Ri && pn) {
      Ri = !0;
      do
        for (var a = !1, e = An; e !== null; ) {
          if (l !== 0) {
            var u = e.pendingLanes;
            if (u === 0) var n = 0;
            else {
              var c = e.suspendedLanes,
                i = e.pingedLanes;
              ((n = (1 << (31 - ut(42 | l) + 1)) - 1),
                (n &= u & ~(c & ~i)),
                (n = n & 201326741 ? (n & 201326741) | 1 : n ? n | 2 : 0));
            }
            n !== 0 && ((a = !0), xo(e, n));
          } else
            ((n = k),
              (n = Ou(
                e,
                e === dl ? n : 0,
                e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
              )),
              (n & 3) === 0 || Ne(e, n) || ((a = !0), xo(e, n)));
          e = e.next;
        }
      while (a);
      Ri = !1;
    }
  }
  function v1() {
    Oo();
  }
  function Oo() {
    pn = ji = !1;
    var l = 0;
    ga !== 0 && _1() && (l = ga);
    for (var t = at(), a = null, e = An; e !== null; ) {
      var u = e.next,
        n = Do(e, t);
      (n === 0
        ? ((e.next = null),
          a === null ? (An = u) : (a.next = u),
          u === null && (Te = a))
        : ((a = e), (l !== 0 || (n & 3) !== 0) && (pn = !0)),
        (e = u));
    }
    ((_l !== 0 && _l !== 5) || ou(l), ga !== 0 && (ga = 0));
  }
  function Do(l, t) {
    for (
      var a = l.suspendedLanes,
        e = l.pingedLanes,
        u = l.expirationTimes,
        n = l.pendingLanes & -62914561;
      0 < n;
    ) {
      var c = 31 - ut(n),
        i = 1 << c,
        f = u[c];
      (f === -1
        ? ((i & a) === 0 || (i & e) !== 0) && (u[c] = Qd(i, t))
        : f <= t && (l.expiredLanes |= i),
        (n &= ~i));
    }
    if (
      ((t = dl),
      (a = k),
      (a = Ou(
        l,
        l === t ? a : 0,
        l.cancelPendingCommit !== null || l.timeoutHandle !== -1,
      )),
      (e = l.callbackNode),
      a === 0 ||
        (l === t && (ul === 2 || ul === 9)) ||
        l.cancelPendingCommit !== null)
    )
      return (
        e !== null && e !== null && wn(e),
        (l.callbackNode = null),
        (l.callbackPriority = 0)
      );
    if ((a & 3) === 0 || Ne(l, a)) {
      if (((t = a & -a), t === l.callbackPriority)) return t;
      switch ((e !== null && wn(e), kn(a))) {
        case 2:
        case 8:
          a = gf;
          break;
        case 32:
          a = Au;
          break;
        case 268435456:
          a = Sf;
          break;
        default:
          a = Au;
      }
      return (
        (e = No.bind(null, l)),
        (a = Jn(a, e)),
        (l.callbackPriority = t),
        (l.callbackNode = a),
        t
      );
    }
    return (
      e !== null && e !== null && wn(e),
      (l.callbackPriority = 2),
      (l.callbackNode = null),
      2
    );
  }
  function No(l, t) {
    if (_l !== 0 && _l !== 5)
      return ((l.callbackNode = null), (l.callbackPriority = 0), null);
    var a = l.callbackNode;
    if (Tn() && l.callbackNode !== a) return null;
    var e = k;
    return (
      (e = Ou(
        l,
        l === dl ? e : 0,
        l.cancelPendingCommit !== null || l.timeoutHandle !== -1,
      )),
      e === 0
        ? null
        : (so(l, e, t),
          Do(l, at()),
          l.callbackNode != null && l.callbackNode === a
            ? No.bind(null, l)
            : null)
    );
  }
  function xo(l, t) {
    if (Tn()) return null;
    so(l, t, !0);
  }
  function h1() {
    O1(function () {
      (tl & 6) !== 0 ? Jn(rf, v1) : Oo();
    });
  }
  function qi() {
    if (ga === 0) {
      var l = ie;
      (l === 0 && ((l = pu), (pu <<= 1), (pu & 261888) === 0 && (pu = 256)),
        (ga = l));
    }
    return ga;
  }
  function Uo(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean"
      ? null
      : typeof l == "function"
        ? l
        : Uu("" + l);
  }
  function Ho(l, t) {
    var a = t.ownerDocument.createElement("input");
    return (
      (a.name = t.name),
      (a.value = t.value),
      l.id && a.setAttribute("form", l.id),
      t.parentNode.insertBefore(a, t),
      (l = new FormData(l)),
      a.parentNode.removeChild(a),
      l
    );
  }
  function r1(l, t, a, e, u) {
    if (t === "submit" && a && a.stateNode === u) {
      var n = Uo((u[Kl] || null).action),
        c = e.submitter;
      c &&
        ((t = (t = c[Kl] || null)
          ? Uo(t.formAction)
          : c.getAttribute("formAction")),
        t !== null && ((n = t), (c = null)));
      var i = new Ru("action", "action", null, e, u);
      l.push({
        event: i,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (e.defaultPrevented) {
                if (ga !== 0) {
                  var f = c ? Ho(u, c) : new FormData(u);
                  ai(
                    a,
                    { pending: !0, data: f, method: u.method, action: n },
                    null,
                    f,
                  );
                }
              } else
                typeof n == "function" &&
                  (i.preventDefault(),
                  (f = c ? Ho(u, c) : new FormData(u)),
                  ai(
                    a,
                    { pending: !0, data: f, method: u.method, action: n },
                    n,
                    f,
                  ));
            },
            currentTarget: u,
          },
        ],
      });
    }
  }
  for (var Bi = 0; Bi < bc.length; Bi++) {
    var Yi = bc[Bi],
      g1 = Yi.toLowerCase(),
      S1 = Yi[0].toUpperCase() + Yi.slice(1);
    _t(g1, "on" + S1);
  }
  (_t(fs, "onAnimationEnd"),
    _t(ss, "onAnimationIteration"),
    _t(os, "onAnimationStart"),
    _t("dblclick", "onDoubleClick"),
    _t("focusin", "onFocus"),
    _t("focusout", "onBlur"),
    _t(jm, "onTransitionRun"),
    _t(Rm, "onTransitionStart"),
    _t(qm, "onTransitionCancel"),
    _t(ds, "onTransitionEnd"),
    wa("onMouseEnter", ["mouseout", "mouseover"]),
    wa("onMouseLeave", ["mouseout", "mouseover"]),
    wa("onPointerEnter", ["pointerout", "pointerover"]),
    wa("onPointerLeave", ["pointerout", "pointerover"]),
    Ma(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    Ma(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    Ma("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Ma(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    Ma(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    Ma(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var du =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    b1 = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(du),
    );
  function Co(l, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < l.length; a++) {
      var e = l[a],
        u = e.event;
      e = e.listeners;
      l: {
        var n = void 0;
        if (t)
          for (var c = e.length - 1; 0 <= c; c--) {
            var i = e[c],
              f = i.instance,
              v = i.currentTarget;
            if (((i = i.listener), f !== n && u.isPropagationStopped()))
              break l;
            ((n = i), (u.currentTarget = v));
            try {
              n(u);
            } catch (g) {
              Yu(g);
            }
            ((u.currentTarget = null), (n = f));
          }
        else
          for (c = 0; c < e.length; c++) {
            if (
              ((i = e[c]),
              (f = i.instance),
              (v = i.currentTarget),
              (i = i.listener),
              f !== n && u.isPropagationStopped())
            )
              break l;
            ((n = i), (u.currentTarget = v));
            try {
              n(u);
            } catch (g) {
              Yu(g);
            }
            ((u.currentTarget = null), (n = f));
          }
      }
    }
  }
  function $(l, t) {
    var a = t[Fn];
    a === void 0 && (a = t[Fn] = new Set());
    var e = l + "__bubble";
    a.has(e) || (jo(t, l, 2, !1), a.add(e));
  }
  function Gi(l, t, a) {
    var e = 0;
    (t && (e |= 4), jo(a, l, e, t));
  }
  var _n = "_reactListening" + Math.random().toString(36).slice(2);
  function Xi(l) {
    if (!l[_n]) {
      ((l[_n] = !0),
        Mf.forEach(function (a) {
          a !== "selectionchange" && (b1.has(a) || Gi(a, !1, l), Gi(a, !0, l));
        }));
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[_n] || ((t[_n] = !0), Gi("selectionchange", !1, t));
    }
  }
  function jo(l, t, a, e) {
    switch (sd(t)) {
      case 2:
        var u = w1;
        break;
      case 8:
        u = W1;
        break;
      default:
        u = tf;
    }
    ((a = u.bind(null, t, a, l)),
      (u = void 0),
      !cc ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (u = !0),
      e
        ? u !== void 0
          ? l.addEventListener(t, a, { capture: !0, passive: u })
          : l.addEventListener(t, a, !0)
        : u !== void 0
          ? l.addEventListener(t, a, { passive: u })
          : l.addEventListener(t, a, !1));
  }
  function Qi(l, t, a, e, u) {
    var n = e;
    if ((t & 1) === 0 && (t & 2) === 0 && e !== null)
      l: for (;;) {
        if (e === null) return;
        var c = e.tag;
        if (c === 3 || c === 4) {
          var i = e.stateNode.containerInfo;
          if (i === u) break;
          if (c === 4)
            for (c = e.return; c !== null; ) {
              var f = c.tag;
              if ((f === 3 || f === 4) && c.stateNode.containerInfo === u)
                return;
              c = c.return;
            }
          for (; i !== null; ) {
            if (((c = Va(i)), c === null)) return;
            if (((f = c.tag), f === 5 || f === 6 || f === 26 || f === 27)) {
              e = n = c;
              continue l;
            }
            i = i.parentNode;
          }
        }
        e = e.return;
      }
    Yf(function () {
      var v = n,
        g = uc(a),
        z = [];
      l: {
        var h = ms.get(l);
        if (h !== void 0) {
          var r = Ru,
            N = l;
          switch (l) {
            case "keypress":
              if (Cu(a) === 0) break l;
            case "keydown":
            case "keyup":
              r = mm;
              break;
            case "focusin":
              ((N = "focus"), (r = oc));
              break;
            case "focusout":
              ((N = "blur"), (r = oc));
              break;
            case "beforeblur":
            case "afterblur":
              r = oc;
              break;
            case "click":
              if (a.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              r = Qf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              r = lm;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              r = hm;
              break;
            case fs:
            case ss:
            case os:
              r = em;
              break;
            case ds:
              r = gm;
              break;
            case "scroll":
            case "scrollend":
              r = Id;
              break;
            case "wheel":
              r = bm;
              break;
            case "copy":
            case "cut":
            case "paste":
              r = nm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              r = Lf;
              break;
            case "toggle":
            case "beforetoggle":
              r = Em;
          }
          var B = (t & 4) !== 0,
            sl = !B && (l === "scroll" || l === "scrollend"),
            d = B ? (h !== null ? h + "Capture" : null) : h;
          B = [];
          for (var s = v, y; s !== null; ) {
            var b = s;
            if (
              ((y = b.stateNode),
              (b = b.tag),
              (b !== 5 && b !== 26 && b !== 27) ||
                y === null ||
                d === null ||
                ((b = Ce(s, d)), b != null && B.push(mu(s, b, y))),
              sl)
            )
              break;
            s = s.return;
          }
          0 < B.length &&
            ((h = new r(h, N, null, a, g)), z.push({ event: h, listeners: B }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (
            ((h = l === "mouseover" || l === "pointerover"),
            (r = l === "mouseout" || l === "pointerout"),
            h &&
              a !== ec &&
              (N = a.relatedTarget || a.fromElement) &&
              (Va(N) || N[La]))
          )
            break l;
          if (
            (r || h) &&
            ((h =
              g.window === g
                ? g
                : (h = g.ownerDocument)
                  ? h.defaultView || h.parentWindow
                  : window),
            r
              ? ((N = a.relatedTarget || a.toElement),
                (r = v),
                (N = N ? Va(N) : null),
                N !== null &&
                  ((sl = R(N)),
                  (B = N.tag),
                  N !== sl || (B !== 5 && B !== 27 && B !== 6)) &&
                  (N = null))
              : ((r = null), (N = v)),
            r !== N)
          ) {
            if (
              ((B = Qf),
              (b = "onMouseLeave"),
              (d = "onMouseEnter"),
              (s = "mouse"),
              (l === "pointerout" || l === "pointerover") &&
                ((B = Lf),
                (b = "onPointerLeave"),
                (d = "onPointerEnter"),
                (s = "pointer")),
              (sl = r == null ? h : He(r)),
              (y = N == null ? h : He(N)),
              (h = new B(b, s + "leave", r, a, g)),
              (h.target = sl),
              (h.relatedTarget = y),
              (b = null),
              Va(g) === v &&
                ((B = new B(d, s + "enter", N, a, g)),
                (B.target = y),
                (B.relatedTarget = sl),
                (b = B)),
              (sl = b),
              r && N)
            )
              t: {
                for (B = z1, d = r, s = N, y = 0, b = d; b; b = B(b)) y++;
                b = 0;
                for (var j = s; j; j = B(j)) b++;
                for (; 0 < y - b; ) ((d = B(d)), y--);
                for (; 0 < b - y; ) ((s = B(s)), b--);
                for (; y--; ) {
                  if (d === s || (s !== null && d === s.alternate)) {
                    B = d;
                    break t;
                  }
                  ((d = B(d)), (s = B(s)));
                }
                B = null;
              }
            else B = null;
            (r !== null && Ro(z, h, r, B, !1),
              N !== null && sl !== null && Ro(z, sl, N, B, !0));
          }
        }
        l: {
          if (
            ((h = v ? He(v) : window),
            (r = h.nodeName && h.nodeName.toLowerCase()),
            r === "select" || (r === "input" && h.type === "file"))
          )
            var P = Ff;
          else if ($f(h))
            if (If) P = Um;
            else {
              P = Nm;
              var H = Dm;
            }
          else
            ((r = h.nodeName),
              !r ||
              r.toLowerCase() !== "input" ||
              (h.type !== "checkbox" && h.type !== "radio")
                ? v && ac(v.elementType) && (P = Ff)
                : (P = xm));
          if (P && (P = P(l, v))) {
            kf(z, P, a, g);
            break l;
          }
          (H && H(l, h, v),
            l === "focusout" &&
              v &&
              h.type === "number" &&
              v.memoizedProps.value != null &&
              tc(h, "number", h.value));
        }
        switch (((H = v ? He(v) : window), l)) {
          case "focusin":
            ($f(H) || H.contentEditable === "true") &&
              ((Pa = H), (rc = v), (Qe = null));
            break;
          case "focusout":
            Qe = rc = Pa = null;
            break;
          case "mousedown":
            gc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((gc = !1), cs(z, a, g));
            break;
          case "selectionchange":
            if (Cm) break;
          case "keydown":
          case "keyup":
            cs(z, a, g);
        }
        var V;
        if (mc)
          l: {
            switch (l) {
              case "compositionstart":
                var F = "onCompositionStart";
                break l;
              case "compositionend":
                F = "onCompositionEnd";
                break l;
              case "compositionupdate":
                F = "onCompositionUpdate";
                break l;
            }
            F = void 0;
          }
        else
          Ia
            ? wf(l, a) && (F = "onCompositionEnd")
            : l === "keydown" &&
              a.keyCode === 229 &&
              (F = "onCompositionStart");
        (F &&
          (Vf &&
            a.locale !== "ko" &&
            (Ia || F !== "onCompositionStart"
              ? F === "onCompositionEnd" && Ia && (V = Gf())
              : ((ta = g),
                (ic = "value" in ta ? ta.value : ta.textContent),
                (Ia = !0))),
          (H = Mn(v, F)),
          0 < H.length &&
            ((F = new Zf(F, l, null, a, g)),
            z.push({ event: F, listeners: H }),
            V ? (F.data = V) : ((V = Wf(a)), V !== null && (F.data = V)))),
          (V = Am ? pm(l, a) : _m(l, a)) &&
            ((F = Mn(v, "onBeforeInput")),
            0 < F.length &&
              ((H = new Zf("onBeforeInput", "beforeinput", null, a, g)),
              z.push({ event: H, listeners: F }),
              (H.data = V))),
          r1(z, l, v, a, g));
      }
      Co(z, t);
    });
  }
  function mu(l, t, a) {
    return { instance: l, listener: t, currentTarget: a };
  }
  function Mn(l, t) {
    for (var a = t + "Capture", e = []; l !== null; ) {
      var u = l,
        n = u.stateNode;
      if (
        ((u = u.tag),
        (u !== 5 && u !== 26 && u !== 27) ||
          n === null ||
          ((u = Ce(l, a)),
          u != null && e.unshift(mu(l, u, n)),
          (u = Ce(l, t)),
          u != null && e.push(mu(l, u, n))),
        l.tag === 3)
      )
        return e;
      l = l.return;
    }
    return [];
  }
  function z1(l) {
    if (l === null) return null;
    do l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function Ro(l, t, a, e, u) {
    for (var n = t._reactName, c = []; a !== null && a !== e; ) {
      var i = a,
        f = i.alternate,
        v = i.stateNode;
      if (((i = i.tag), f !== null && f === e)) break;
      ((i !== 5 && i !== 26 && i !== 27) ||
        v === null ||
        ((f = v),
        u
          ? ((v = Ce(a, n)), v != null && c.unshift(mu(a, v, f)))
          : u || ((v = Ce(a, n)), v != null && c.push(mu(a, v, f)))),
        (a = a.return));
    }
    c.length !== 0 && l.push({ event: t, listeners: c });
  }
  var E1 = /\r\n?/g,
    T1 = /\u0000|\uFFFD/g;
  function qo(l) {
    return (typeof l == "string" ? l : "" + l)
      .replace(
        E1,
        `
`,
      )
      .replace(T1, "");
  }
  function Bo(l, t) {
    return ((t = qo(t)), qo(l) === t);
  }
  function fl(l, t, a, e, u, n) {
    switch (a) {
      case "children":
        typeof e == "string"
          ? t === "body" || (t === "textarea" && e === "") || $a(l, e)
          : (typeof e == "number" || typeof e == "bigint") &&
            t !== "body" &&
            $a(l, "" + e);
        break;
      case "className":
        Nu(l, "class", e);
        break;
      case "tabIndex":
        Nu(l, "tabindex", e);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Nu(l, a, e);
        break;
      case "style":
        qf(l, e, n);
        break;
      case "data":
        if (t !== "object") {
          Nu(l, "data", e);
          break;
        }
      case "src":
      case "href":
        if (e === "" && (t !== "a" || a !== "href")) {
          l.removeAttribute(a);
          break;
        }
        if (
          e == null ||
          typeof e == "function" ||
          typeof e == "symbol" ||
          typeof e == "boolean"
        ) {
          l.removeAttribute(a);
          break;
        }
        ((e = Uu("" + e)), l.setAttribute(a, e));
        break;
      case "action":
      case "formAction":
        if (typeof e == "function") {
          l.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof n == "function" &&
            (a === "formAction"
              ? (t !== "input" && fl(l, t, "name", u.name, u, null),
                fl(l, t, "formEncType", u.formEncType, u, null),
                fl(l, t, "formMethod", u.formMethod, u, null),
                fl(l, t, "formTarget", u.formTarget, u, null))
              : (fl(l, t, "encType", u.encType, u, null),
                fl(l, t, "method", u.method, u, null),
                fl(l, t, "target", u.target, u, null)));
        if (e == null || typeof e == "symbol" || typeof e == "boolean") {
          l.removeAttribute(a);
          break;
        }
        ((e = Uu("" + e)), l.setAttribute(a, e));
        break;
      case "onClick":
        e != null && (l.onclick = jt);
        break;
      case "onScroll":
        e != null && $("scroll", l);
        break;
      case "onScrollEnd":
        e != null && $("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (e != null) {
          if (typeof e != "object" || !("__html" in e)) throw Error(m(61));
          if (((a = e.__html), a != null)) {
            if (u.children != null) throw Error(m(60));
            l.innerHTML = a;
          }
        }
        break;
      case "multiple":
        l.multiple = e && typeof e != "function" && typeof e != "symbol";
        break;
      case "muted":
        l.muted = e && typeof e != "function" && typeof e != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          e == null ||
          typeof e == "function" ||
          typeof e == "boolean" ||
          typeof e == "symbol"
        ) {
          l.removeAttribute("xlink:href");
          break;
        }
        ((a = Uu("" + e)),
          l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        e != null && typeof e != "function" && typeof e != "symbol"
          ? l.setAttribute(a, "" + e)
          : l.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        e && typeof e != "function" && typeof e != "symbol"
          ? l.setAttribute(a, "")
          : l.removeAttribute(a);
        break;
      case "capture":
      case "download":
        e === !0
          ? l.setAttribute(a, "")
          : e !== !1 &&
              e != null &&
              typeof e != "function" &&
              typeof e != "symbol"
            ? l.setAttribute(a, e)
            : l.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        e != null &&
        typeof e != "function" &&
        typeof e != "symbol" &&
        !isNaN(e) &&
        1 <= e
          ? l.setAttribute(a, e)
          : l.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        e == null || typeof e == "function" || typeof e == "symbol" || isNaN(e)
          ? l.removeAttribute(a)
          : l.setAttribute(a, e);
        break;
      case "popover":
        ($("beforetoggle", l), $("toggle", l), Du(l, "popover", e));
        break;
      case "xlinkActuate":
        Ct(l, "http://www.w3.org/1999/xlink", "xlink:actuate", e);
        break;
      case "xlinkArcrole":
        Ct(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", e);
        break;
      case "xlinkRole":
        Ct(l, "http://www.w3.org/1999/xlink", "xlink:role", e);
        break;
      case "xlinkShow":
        Ct(l, "http://www.w3.org/1999/xlink", "xlink:show", e);
        break;
      case "xlinkTitle":
        Ct(l, "http://www.w3.org/1999/xlink", "xlink:title", e);
        break;
      case "xlinkType":
        Ct(l, "http://www.w3.org/1999/xlink", "xlink:type", e);
        break;
      case "xmlBase":
        Ct(l, "http://www.w3.org/XML/1998/namespace", "xml:base", e);
        break;
      case "xmlLang":
        Ct(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", e);
        break;
      case "xmlSpace":
        Ct(l, "http://www.w3.org/XML/1998/namespace", "xml:space", e);
        break;
      case "is":
        Du(l, "is", e);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) ||
          (a[0] !== "o" && a[0] !== "O") ||
          (a[1] !== "n" && a[1] !== "N")) &&
          ((a = kd.get(a) || a), Du(l, a, e));
    }
  }
  function Zi(l, t, a, e, u, n) {
    switch (a) {
      case "style":
        qf(l, e, n);
        break;
      case "dangerouslySetInnerHTML":
        if (e != null) {
          if (typeof e != "object" || !("__html" in e)) throw Error(m(61));
          if (((a = e.__html), a != null)) {
            if (u.children != null) throw Error(m(60));
            l.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof e == "string"
          ? $a(l, e)
          : (typeof e == "number" || typeof e == "bigint") && $a(l, "" + e);
        break;
      case "onScroll":
        e != null && $("scroll", l);
        break;
      case "onScrollEnd":
        e != null && $("scrollend", l);
        break;
      case "onClick":
        e != null && (l.onclick = jt);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Of.hasOwnProperty(a))
          l: {
            if (
              a[0] === "o" &&
              a[1] === "n" &&
              ((u = a.endsWith("Capture")),
              (t = a.slice(2, u ? a.length - 7 : void 0)),
              (n = l[Kl] || null),
              (n = n != null ? n[a] : null),
              typeof n == "function" && l.removeEventListener(t, n, u),
              typeof e == "function")
            ) {
              (typeof n != "function" &&
                n !== null &&
                (a in l
                  ? (l[a] = null)
                  : l.hasAttribute(a) && l.removeAttribute(a)),
                l.addEventListener(t, e, u));
              break l;
            }
            a in l
              ? (l[a] = e)
              : e === !0
                ? l.setAttribute(a, "")
                : Du(l, a, e);
          }
    }
  }
  function Bl(l, t, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        ($("error", l), $("load", l));
        var e = !1,
          u = !1,
          n;
        for (n in a)
          if (a.hasOwnProperty(n)) {
            var c = a[n];
            if (c != null)
              switch (n) {
                case "src":
                  e = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(m(137, t));
                default:
                  fl(l, t, n, c, a, null);
              }
          }
        (u && fl(l, t, "srcSet", a.srcSet, a, null),
          e && fl(l, t, "src", a.src, a, null));
        return;
      case "input":
        $("invalid", l);
        var i = (n = c = u = null),
          f = null,
          v = null;
        for (e in a)
          if (a.hasOwnProperty(e)) {
            var g = a[e];
            if (g != null)
              switch (e) {
                case "name":
                  u = g;
                  break;
                case "type":
                  c = g;
                  break;
                case "checked":
                  f = g;
                  break;
                case "defaultChecked":
                  v = g;
                  break;
                case "value":
                  n = g;
                  break;
                case "defaultValue":
                  i = g;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (g != null) throw Error(m(137, t));
                  break;
                default:
                  fl(l, t, e, g, a, null);
              }
          }
        Hf(l, n, i, f, v, c, u, !1);
        return;
      case "select":
        ($("invalid", l), (e = c = n = null));
        for (u in a)
          if (a.hasOwnProperty(u) && ((i = a[u]), i != null))
            switch (u) {
              case "value":
                n = i;
                break;
              case "defaultValue":
                c = i;
                break;
              case "multiple":
                e = i;
              default:
                fl(l, t, u, i, a, null);
            }
        ((t = n),
          (a = c),
          (l.multiple = !!e),
          t != null ? Wa(l, !!e, t, !1) : a != null && Wa(l, !!e, a, !0));
        return;
      case "textarea":
        ($("invalid", l), (n = u = e = null));
        for (c in a)
          if (a.hasOwnProperty(c) && ((i = a[c]), i != null))
            switch (c) {
              case "value":
                e = i;
                break;
              case "defaultValue":
                u = i;
                break;
              case "children":
                n = i;
                break;
              case "dangerouslySetInnerHTML":
                if (i != null) throw Error(m(91));
                break;
              default:
                fl(l, t, c, i, a, null);
            }
        jf(l, e, u, n);
        return;
      case "option":
        for (f in a)
          if (a.hasOwnProperty(f) && ((e = a[f]), e != null))
            switch (f) {
              case "selected":
                l.selected =
                  e && typeof e != "function" && typeof e != "symbol";
                break;
              default:
                fl(l, t, f, e, a, null);
            }
        return;
      case "dialog":
        ($("beforetoggle", l), $("toggle", l), $("cancel", l), $("close", l));
        break;
      case "iframe":
      case "object":
        $("load", l);
        break;
      case "video":
      case "audio":
        for (e = 0; e < du.length; e++) $(du[e], l);
        break;
      case "image":
        ($("error", l), $("load", l));
        break;
      case "details":
        $("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        ($("error", l), $("load", l));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (v in a)
          if (a.hasOwnProperty(v) && ((e = a[v]), e != null))
            switch (v) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(m(137, t));
              default:
                fl(l, t, v, e, a, null);
            }
        return;
      default:
        if (ac(t)) {
          for (g in a)
            a.hasOwnProperty(g) &&
              ((e = a[g]), e !== void 0 && Zi(l, t, g, e, a, void 0));
          return;
        }
    }
    for (i in a)
      a.hasOwnProperty(i) && ((e = a[i]), e != null && fl(l, t, i, e, a, null));
  }
  function A1(l, t, a, e) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var u = null,
          n = null,
          c = null,
          i = null,
          f = null,
          v = null,
          g = null;
        for (r in a) {
          var z = a[r];
          if (a.hasOwnProperty(r) && z != null)
            switch (r) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                f = z;
              default:
                e.hasOwnProperty(r) || fl(l, t, r, null, e, z);
            }
        }
        for (var h in e) {
          var r = e[h];
          if (((z = a[h]), e.hasOwnProperty(h) && (r != null || z != null)))
            switch (h) {
              case "type":
                n = r;
                break;
              case "name":
                u = r;
                break;
              case "checked":
                v = r;
                break;
              case "defaultChecked":
                g = r;
                break;
              case "value":
                c = r;
                break;
              case "defaultValue":
                i = r;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (r != null) throw Error(m(137, t));
                break;
              default:
                r !== z && fl(l, t, h, r, e, z);
            }
        }
        lc(l, c, i, f, v, g, n, u);
        return;
      case "select":
        r = c = i = h = null;
        for (n in a)
          if (((f = a[n]), a.hasOwnProperty(n) && f != null))
            switch (n) {
              case "value":
                break;
              case "multiple":
                r = f;
              default:
                e.hasOwnProperty(n) || fl(l, t, n, null, e, f);
            }
        for (u in e)
          if (
            ((n = e[u]),
            (f = a[u]),
            e.hasOwnProperty(u) && (n != null || f != null))
          )
            switch (u) {
              case "value":
                h = n;
                break;
              case "defaultValue":
                i = n;
                break;
              case "multiple":
                c = n;
              default:
                n !== f && fl(l, t, u, n, e, f);
            }
        ((t = i),
          (a = c),
          (e = r),
          h != null
            ? Wa(l, !!a, h, !1)
            : !!e != !!a &&
              (t != null ? Wa(l, !!a, t, !0) : Wa(l, !!a, a ? [] : "", !1)));
        return;
      case "textarea":
        r = h = null;
        for (i in a)
          if (
            ((u = a[i]),
            a.hasOwnProperty(i) && u != null && !e.hasOwnProperty(i))
          )
            switch (i) {
              case "value":
                break;
              case "children":
                break;
              default:
                fl(l, t, i, null, e, u);
            }
        for (c in e)
          if (
            ((u = e[c]),
            (n = a[c]),
            e.hasOwnProperty(c) && (u != null || n != null))
          )
            switch (c) {
              case "value":
                h = u;
                break;
              case "defaultValue":
                r = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(m(91));
                break;
              default:
                u !== n && fl(l, t, c, u, e, n);
            }
        Cf(l, h, r);
        return;
      case "option":
        for (var N in a)
          if (
            ((h = a[N]),
            a.hasOwnProperty(N) && h != null && !e.hasOwnProperty(N))
          )
            switch (N) {
              case "selected":
                l.selected = !1;
                break;
              default:
                fl(l, t, N, null, e, h);
            }
        for (f in e)
          if (
            ((h = e[f]),
            (r = a[f]),
            e.hasOwnProperty(f) && h !== r && (h != null || r != null))
          )
            switch (f) {
              case "selected":
                l.selected =
                  h && typeof h != "function" && typeof h != "symbol";
                break;
              default:
                fl(l, t, f, h, e, r);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var B in a)
          ((h = a[B]),
            a.hasOwnProperty(B) &&
              h != null &&
              !e.hasOwnProperty(B) &&
              fl(l, t, B, null, e, h));
        for (v in e)
          if (
            ((h = e[v]),
            (r = a[v]),
            e.hasOwnProperty(v) && h !== r && (h != null || r != null))
          )
            switch (v) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (h != null) throw Error(m(137, t));
                break;
              default:
                fl(l, t, v, h, e, r);
            }
        return;
      default:
        if (ac(t)) {
          for (var sl in a)
            ((h = a[sl]),
              a.hasOwnProperty(sl) &&
                h !== void 0 &&
                !e.hasOwnProperty(sl) &&
                Zi(l, t, sl, void 0, e, h));
          for (g in e)
            ((h = e[g]),
              (r = a[g]),
              !e.hasOwnProperty(g) ||
                h === r ||
                (h === void 0 && r === void 0) ||
                Zi(l, t, g, h, e, r));
          return;
        }
    }
    for (var d in a)
      ((h = a[d]),
        a.hasOwnProperty(d) &&
          h != null &&
          !e.hasOwnProperty(d) &&
          fl(l, t, d, null, e, h));
    for (z in e)
      ((h = e[z]),
        (r = a[z]),
        !e.hasOwnProperty(z) ||
          h === r ||
          (h == null && r == null) ||
          fl(l, t, z, h, e, r));
  }
  function Yo(l) {
    switch (l) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function p1() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var l = 0, t = 0, a = performance.getEntriesByType("resource"), e = 0;
        e < a.length;
        e++
      ) {
        var u = a[e],
          n = u.transferSize,
          c = u.initiatorType,
          i = u.duration;
        if (n && i && Yo(c)) {
          for (c = 0, i = u.responseEnd, e += 1; e < a.length; e++) {
            var f = a[e],
              v = f.startTime;
            if (v > i) break;
            var g = f.transferSize,
              z = f.initiatorType;
            g &&
              Yo(z) &&
              ((f = f.responseEnd), (c += g * (f < i ? 1 : (i - v) / (f - v))));
          }
          if ((--e, (t += (8 * (n + c)) / (u.duration / 1e3)), l++, 10 < l))
            break;
        }
      }
      if (0 < l) return t / l / 1e6;
    }
    return navigator.connection &&
      ((l = navigator.connection.downlink), typeof l == "number")
      ? l
      : 5;
  }
  var Li = null,
    Vi = null;
  function On(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function Go(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Xo(l, t) {
    if (l === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && t === "foreignObject" ? 0 : l;
  }
  function Ki(l, t) {
    return (
      l === "textarea" ||
      l === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Ji = null;
  function _1() {
    var l = window.event;
    return l && l.type === "popstate"
      ? l === Ji
        ? !1
        : ((Ji = l), !0)
      : ((Ji = null), !1);
  }
  var Qo = typeof setTimeout == "function" ? setTimeout : void 0,
    M1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Zo = typeof Promise == "function" ? Promise : void 0,
    O1 =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Zo < "u"
          ? function (l) {
              return Zo.resolve(null).then(l).catch(D1);
            }
          : Qo;
  function D1(l) {
    setTimeout(function () {
      throw l;
    });
  }
  function Sa(l) {
    return l === "head";
  }
  function Lo(l, t) {
    var a = t,
      e = 0;
    do {
      var u = a.nextSibling;
      if ((l.removeChild(a), u && u.nodeType === 8))
        if (((a = u.data), a === "/$" || a === "/&")) {
          if (e === 0) {
            (l.removeChild(u), Me(t));
            return;
          }
          e--;
        } else if (
          a === "$" ||
          a === "$?" ||
          a === "$~" ||
          a === "$!" ||
          a === "&"
        )
          e++;
        else if (a === "html") yu(l.ownerDocument.documentElement);
        else if (a === "head") {
          ((a = l.ownerDocument.head), yu(a));
          for (var n = a.firstChild; n; ) {
            var c = n.nextSibling,
              i = n.nodeName;
            (n[Ue] ||
              i === "SCRIPT" ||
              i === "STYLE" ||
              (i === "LINK" && n.rel.toLowerCase() === "stylesheet") ||
              a.removeChild(n),
              (n = c));
          }
        } else a === "body" && yu(l.ownerDocument.body);
      a = u;
    } while (a);
    Me(t);
  }
  function Vo(l, t) {
    var a = l;
    l = 0;
    do {
      var e = a.nextSibling;
      if (
        (a.nodeType === 1
          ? t
            ? ((a._stashedDisplay = a.style.display),
              (a.style.display = "none"))
            : ((a.style.display = a._stashedDisplay || ""),
              a.getAttribute("style") === "" && a.removeAttribute("style"))
          : a.nodeType === 3 &&
            (t
              ? ((a._stashedText = a.nodeValue), (a.nodeValue = ""))
              : (a.nodeValue = a._stashedText || "")),
        e && e.nodeType === 8)
      )
        if (((a = e.data), a === "/$")) {
          if (l === 0) break;
          l--;
        } else (a !== "$" && a !== "$?" && a !== "$~" && a !== "$!") || l++;
      a = e;
    } while (a);
  }
  function wi(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (((t = t.nextSibling), a.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (wi(a), In(a));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(a);
    }
  }
  function N1(l, t, a, e) {
    for (; l.nodeType === 1; ) {
      var u = a;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!e && (l.nodeName !== "INPUT" || l.type !== "hidden")) break;
      } else if (e) {
        if (!l[Ue])
          switch (t) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (
                ((n = l.getAttribute("rel")),
                n === "stylesheet" && l.hasAttribute("data-precedence"))
              )
                break;
              if (
                n !== u.rel ||
                l.getAttribute("href") !==
                  (u.href == null || u.href === "" ? null : u.href) ||
                l.getAttribute("crossorigin") !==
                  (u.crossOrigin == null ? null : u.crossOrigin) ||
                l.getAttribute("title") !== (u.title == null ? null : u.title)
              )
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (
                ((n = l.getAttribute("src")),
                (n !== (u.src == null ? null : u.src) ||
                  l.getAttribute("type") !== (u.type == null ? null : u.type) ||
                  l.getAttribute("crossorigin") !==
                    (u.crossOrigin == null ? null : u.crossOrigin)) &&
                  n &&
                  l.hasAttribute("async") &&
                  !l.hasAttribute("itemprop"))
              )
                break;
              return l;
            default:
              return l;
          }
      } else if (t === "input" && l.type === "hidden") {
        var n = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && l.getAttribute("name") === n) return l;
      } else return l;
      if (((l = Et(l.nextSibling)), l === null)) break;
    }
    return null;
  }
  function x1(l, t, a) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if (
        ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") &&
          !a) ||
        ((l = Et(l.nextSibling)), l === null)
      )
        return null;
    return l;
  }
  function Ko(l, t) {
    for (; l.nodeType !== 8; )
      if (
        ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") &&
          !t) ||
        ((l = Et(l.nextSibling)), l === null)
      )
        return null;
    return l;
  }
  function Wi(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function $i(l) {
    return (
      l.data === "$!" ||
      (l.data === "$?" && l.ownerDocument.readyState !== "loading")
    );
  }
  function U1(l, t) {
    var a = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = t;
    else if (l.data !== "$?" || a.readyState !== "loading") t();
    else {
      var e = function () {
        (t(), a.removeEventListener("DOMContentLoaded", e));
      };
      (a.addEventListener("DOMContentLoaded", e), (l._reactRetry = e));
    }
  }
  function Et(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = l.data),
          t === "$" ||
            t === "$!" ||
            t === "$?" ||
            t === "$~" ||
            t === "&" ||
            t === "F!" ||
            t === "F")
        )
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return l;
  }
  var ki = null;
  function Jo(l) {
    l = l.nextSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var a = l.data;
        if (a === "/$" || a === "/&") {
          if (t === 0) return Et(l.nextSibling);
          t--;
        } else
          (a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&") ||
            t++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function wo(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var a = l.data;
        if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
          if (t === 0) return l;
          t--;
        } else (a !== "/$" && a !== "/&") || t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function Wo(l, t, a) {
    switch (((t = On(a)), l)) {
      case "html":
        if (((l = t.documentElement), !l)) throw Error(m(452));
        return l;
      case "head":
        if (((l = t.head), !l)) throw Error(m(453));
        return l;
      case "body":
        if (((l = t.body), !l)) throw Error(m(454));
        return l;
      default:
        throw Error(m(451));
    }
  }
  function yu(l) {
    for (var t = l.attributes; t.length; ) l.removeAttributeNode(t[0]);
    In(l);
  }
  var Tt = new Map(),
    $o = new Set();
  function Dn(l) {
    return typeof l.getRootNode == "function"
      ? l.getRootNode()
      : l.nodeType === 9
        ? l
        : l.ownerDocument;
  }
  var kt = M.d;
  M.d = { f: H1, r: C1, D: j1, C: R1, L: q1, m: B1, X: G1, S: Y1, M: X1 };
  function H1() {
    var l = kt.f(),
      t = bn();
    return l || t;
  }
  function C1(l) {
    var t = Ka(l);
    t !== null && t.tag === 5 && t.type === "form" ? d0(t) : kt.r(l);
  }
  var Ae = typeof document > "u" ? null : document;
  function ko(l, t, a) {
    var e = Ae;
    if (e && typeof t == "string" && t) {
      var u = vt(t);
      ((u = 'link[rel="' + l + '"][href="' + u + '"]'),
        typeof a == "string" && (u += '[crossorigin="' + a + '"]'),
        $o.has(u) ||
          ($o.add(u),
          (l = { rel: l, crossOrigin: a, href: t }),
          e.querySelector(u) === null &&
            ((t = e.createElement("link")),
            Bl(t, "link", l),
            Dl(t),
            e.head.appendChild(t))));
    }
  }
  function j1(l) {
    (kt.D(l), ko("dns-prefetch", l, null));
  }
  function R1(l, t) {
    (kt.C(l, t), ko("preconnect", l, t));
  }
  function q1(l, t, a) {
    kt.L(l, t, a);
    var e = Ae;
    if (e && l && t) {
      var u = 'link[rel="preload"][as="' + vt(t) + '"]';
      t === "image" && a && a.imageSrcSet
        ? ((u += '[imagesrcset="' + vt(a.imageSrcSet) + '"]'),
          typeof a.imageSizes == "string" &&
            (u += '[imagesizes="' + vt(a.imageSizes) + '"]'))
        : (u += '[href="' + vt(l) + '"]');
      var n = u;
      switch (t) {
        case "style":
          n = pe(l);
          break;
        case "script":
          n = _e(l);
      }
      Tt.has(n) ||
        ((l = _(
          {
            rel: "preload",
            href: t === "image" && a && a.imageSrcSet ? void 0 : l,
            as: t,
          },
          a,
        )),
        Tt.set(n, l),
        e.querySelector(u) !== null ||
          (t === "style" && e.querySelector(vu(n))) ||
          (t === "script" && e.querySelector(hu(n))) ||
          ((t = e.createElement("link")),
          Bl(t, "link", l),
          Dl(t),
          e.head.appendChild(t)));
    }
  }
  function B1(l, t) {
    kt.m(l, t);
    var a = Ae;
    if (a && l) {
      var e = t && typeof t.as == "string" ? t.as : "script",
        u =
          'link[rel="modulepreload"][as="' + vt(e) + '"][href="' + vt(l) + '"]',
        n = u;
      switch (e) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = _e(l);
      }
      if (
        !Tt.has(n) &&
        ((l = _({ rel: "modulepreload", href: l }, t)),
        Tt.set(n, l),
        a.querySelector(u) === null)
      ) {
        switch (e) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(hu(n))) return;
        }
        ((e = a.createElement("link")),
          Bl(e, "link", l),
          Dl(e),
          a.head.appendChild(e));
      }
    }
  }
  function Y1(l, t, a) {
    kt.S(l, t, a);
    var e = Ae;
    if (e && l) {
      var u = Ja(e).hoistableStyles,
        n = pe(l);
      t = t || "default";
      var c = u.get(n);
      if (!c) {
        var i = { loading: 0, preload: null };
        if ((c = e.querySelector(vu(n)))) i.loading = 5;
        else {
          ((l = _({ rel: "stylesheet", href: l, "data-precedence": t }, a)),
            (a = Tt.get(n)) && Fi(l, a));
          var f = (c = e.createElement("link"));
          (Dl(f),
            Bl(f, "link", l),
            (f._p = new Promise(function (v, g) {
              ((f.onload = v), (f.onerror = g));
            })),
            f.addEventListener("load", function () {
              i.loading |= 1;
            }),
            f.addEventListener("error", function () {
              i.loading |= 2;
            }),
            (i.loading |= 4),
            Nn(c, t, e));
        }
        ((c = { type: "stylesheet", instance: c, count: 1, state: i }),
          u.set(n, c));
      }
    }
  }
  function G1(l, t) {
    kt.X(l, t);
    var a = Ae;
    if (a && l) {
      var e = Ja(a).hoistableScripts,
        u = _e(l),
        n = e.get(u);
      n ||
        ((n = a.querySelector(hu(u))),
        n ||
          ((l = _({ src: l, async: !0 }, t)),
          (t = Tt.get(u)) && Ii(l, t),
          (n = a.createElement("script")),
          Dl(n),
          Bl(n, "link", l),
          a.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        e.set(u, n));
    }
  }
  function X1(l, t) {
    kt.M(l, t);
    var a = Ae;
    if (a && l) {
      var e = Ja(a).hoistableScripts,
        u = _e(l),
        n = e.get(u);
      n ||
        ((n = a.querySelector(hu(u))),
        n ||
          ((l = _({ src: l, async: !0, type: "module" }, t)),
          (t = Tt.get(u)) && Ii(l, t),
          (n = a.createElement("script")),
          Dl(n),
          Bl(n, "link", l),
          a.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        e.set(u, n));
    }
  }
  function Fo(l, t, a, e) {
    var u = (u = w.current) ? Dn(u) : null;
    if (!u) throw Error(m(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string"
          ? ((t = pe(a.href)),
            (a = Ja(u).hoistableStyles),
            (e = a.get(t)),
            e ||
              ((e = { type: "style", instance: null, count: 0, state: null }),
              a.set(t, e)),
            e)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          a.rel === "stylesheet" &&
          typeof a.href == "string" &&
          typeof a.precedence == "string"
        ) {
          l = pe(a.href);
          var n = Ja(u).hoistableStyles,
            c = n.get(l);
          if (
            (c ||
              ((u = u.ownerDocument || u),
              (c = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              n.set(l, c),
              (n = u.querySelector(vu(l))) &&
                !n._p &&
                ((c.instance = n), (c.state.loading = 5)),
              Tt.has(l) ||
                ((a = {
                  rel: "preload",
                  as: "style",
                  href: a.href,
                  crossOrigin: a.crossOrigin,
                  integrity: a.integrity,
                  media: a.media,
                  hrefLang: a.hrefLang,
                  referrerPolicy: a.referrerPolicy,
                }),
                Tt.set(l, a),
                n || Q1(u, l, a, c.state))),
            t && e === null)
          )
            throw Error(m(528, ""));
          return c;
        }
        if (t && e !== null) throw Error(m(529, ""));
        return null;
      case "script":
        return (
          (t = a.async),
          (a = a.src),
          typeof a == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = _e(a)),
              (a = Ja(u).hoistableScripts),
              (e = a.get(t)),
              e ||
                ((e = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                a.set(t, e)),
              e)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(m(444, l));
    }
  }
  function pe(l) {
    return 'href="' + vt(l) + '"';
  }
  function vu(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function Io(l) {
    return _({}, l, { "data-precedence": l.precedence, precedence: null });
  }
  function Q1(l, t, a, e) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (e.loading = 1)
      : ((t = l.createElement("link")),
        (e.preload = t),
        t.addEventListener("load", function () {
          return (e.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (e.loading |= 2);
        }),
        Bl(t, "link", a),
        Dl(t),
        l.head.appendChild(t));
  }
  function _e(l) {
    return '[src="' + vt(l) + '"]';
  }
  function hu(l) {
    return "script[async]" + l;
  }
  function Po(l, t, a) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var e = l.querySelector('style[data-href~="' + vt(a.href) + '"]');
          if (e) return ((t.instance = e), Dl(e), e);
          var u = _({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null,
          });
          return (
            (e = (l.ownerDocument || l).createElement("style")),
            Dl(e),
            Bl(e, "style", u),
            Nn(e, a.precedence, l),
            (t.instance = e)
          );
        case "stylesheet":
          u = pe(a.href);
          var n = l.querySelector(vu(u));
          if (n) return ((t.state.loading |= 4), (t.instance = n), Dl(n), n);
          ((e = Io(a)),
            (u = Tt.get(u)) && Fi(e, u),
            (n = (l.ownerDocument || l).createElement("link")),
            Dl(n));
          var c = n;
          return (
            (c._p = new Promise(function (i, f) {
              ((c.onload = i), (c.onerror = f));
            })),
            Bl(n, "link", e),
            (t.state.loading |= 4),
            Nn(n, a.precedence, l),
            (t.instance = n)
          );
        case "script":
          return (
            (n = _e(a.src)),
            (u = l.querySelector(hu(n)))
              ? ((t.instance = u), Dl(u), u)
              : ((e = a),
                (u = Tt.get(n)) && ((e = _({}, a)), Ii(e, u)),
                (l = l.ownerDocument || l),
                (u = l.createElement("script")),
                Dl(u),
                Bl(u, "link", e),
                l.head.appendChild(u),
                (t.instance = u))
          );
        case "void":
          return null;
        default:
          throw Error(m(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((e = t.instance), (t.state.loading |= 4), Nn(e, a.precedence, l));
    return t.instance;
  }
  function Nn(l, t, a) {
    for (
      var e = a.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        u = e.length ? e[e.length - 1] : null,
        n = u,
        c = 0;
      c < e.length;
      c++
    ) {
      var i = e[c];
      if (i.dataset.precedence === t) n = i;
      else if (n !== u) break;
    }
    n
      ? n.parentNode.insertBefore(l, n.nextSibling)
      : ((t = a.nodeType === 9 ? a.head : a), t.insertBefore(l, t.firstChild));
  }
  function Fi(l, t) {
    (l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.title == null && (l.title = t.title));
  }
  function Ii(l, t) {
    (l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.integrity == null && (l.integrity = t.integrity));
  }
  var xn = null;
  function ld(l, t, a) {
    if (xn === null) {
      var e = new Map(),
        u = (xn = new Map());
      u.set(a, e);
    } else ((u = xn), (e = u.get(a)), e || ((e = new Map()), u.set(a, e)));
    if (e.has(l)) return e;
    for (
      e.set(l, null), a = a.getElementsByTagName(l), u = 0;
      u < a.length;
      u++
    ) {
      var n = a[u];
      if (
        !(
          n[Ue] ||
          n[Cl] ||
          (l === "link" && n.getAttribute("rel") === "stylesheet")
        ) &&
        n.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var c = n.getAttribute(t) || "";
        c = l + c;
        var i = e.get(c);
        i ? i.push(n) : e.set(c, [n]);
      }
    }
    return e;
  }
  function td(l, t, a) {
    ((l = l.ownerDocument || l),
      l.head.insertBefore(
        a,
        t === "title" ? l.querySelector("head > title") : null,
      ));
  }
  function Z1(l, t, a) {
    if (a === 1 || t.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        switch (t.rel) {
          case "stylesheet":
            return (
              (l = t.disabled),
              typeof t.precedence == "string" && l == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function ad(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function L1(l, t, a, e) {
    if (
      a.type === "stylesheet" &&
      (typeof e.media != "string" || matchMedia(e.media).matches !== !1) &&
      (a.state.loading & 4) === 0
    ) {
      if (a.instance === null) {
        var u = pe(e.href),
          n = t.querySelector(vu(u));
        if (n) {
          ((t = n._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (l.count++, (l = Un.bind(l)), t.then(l, l)),
            (a.state.loading |= 4),
            (a.instance = n),
            Dl(n));
          return;
        }
        ((n = t.ownerDocument || t),
          (e = Io(e)),
          (u = Tt.get(u)) && Fi(e, u),
          (n = n.createElement("link")),
          Dl(n));
        var c = n;
        ((c._p = new Promise(function (i, f) {
          ((c.onload = i), (c.onerror = f));
        })),
          Bl(n, "link", e),
          (a.instance = n));
      }
      (l.stylesheets === null && (l.stylesheets = new Map()),
        l.stylesheets.set(a, t),
        (t = a.state.preload) &&
          (a.state.loading & 3) === 0 &&
          (l.count++,
          (a = Un.bind(l)),
          t.addEventListener("load", a),
          t.addEventListener("error", a)));
    }
  }
  var Pi = 0;
  function V1(l, t) {
    return (
      l.stylesheets && l.count === 0 && Cn(l, l.stylesheets),
      0 < l.count || 0 < l.imgCount
        ? function (a) {
            var e = setTimeout(function () {
              if ((l.stylesheets && Cn(l, l.stylesheets), l.unsuspend)) {
                var n = l.unsuspend;
                ((l.unsuspend = null), n());
              }
            }, 6e4 + t);
            0 < l.imgBytes && Pi === 0 && (Pi = 62500 * p1());
            var u = setTimeout(
              function () {
                if (
                  ((l.waitingForImages = !1),
                  l.count === 0 &&
                    (l.stylesheets && Cn(l, l.stylesheets), l.unsuspend))
                ) {
                  var n = l.unsuspend;
                  ((l.unsuspend = null), n());
                }
              },
              (l.imgBytes > Pi ? 50 : 800) + t,
            );
            return (
              (l.unsuspend = a),
              function () {
                ((l.unsuspend = null), clearTimeout(e), clearTimeout(u));
              }
            );
          }
        : null
    );
  }
  function Un() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) Cn(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        ((this.unsuspend = null), l());
      }
    }
  }
  var Hn = null;
  function Cn(l, t) {
    ((l.stylesheets = null),
      l.unsuspend !== null &&
        (l.count++,
        (Hn = new Map()),
        t.forEach(K1, l),
        (Hn = null),
        Un.call(l)));
  }
  function K1(l, t) {
    if (!(t.state.loading & 4)) {
      var a = Hn.get(l);
      if (a) var e = a.get(null);
      else {
        ((a = new Map()), Hn.set(l, a));
        for (
          var u = l.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            n = 0;
          n < u.length;
          n++
        ) {
          var c = u[n];
          (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") &&
            (a.set(c.dataset.precedence, c), (e = c));
        }
        e && a.set(null, e);
      }
      ((u = t.instance),
        (c = u.getAttribute("data-precedence")),
        (n = a.get(c) || e),
        n === e && a.set(null, u),
        a.set(c, u),
        this.count++,
        (e = Un.bind(this)),
        u.addEventListener("load", e),
        u.addEventListener("error", e),
        n
          ? n.parentNode.insertBefore(u, n.nextSibling)
          : ((l = l.nodeType === 9 ? l.head : l),
            l.insertBefore(u, l.firstChild)),
        (t.state.loading |= 4));
    }
  }
  var ru = {
    $$typeof: gl,
    Provider: null,
    Consumer: null,
    _currentValue: Y,
    _currentValue2: Y,
    _threadCount: 0,
  };
  function J1(l, t, a, e, u, n, c, i, f) {
    ((this.tag = 1),
      (this.containerInfo = l),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Wn(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Wn(0)),
      (this.hiddenUpdates = Wn(null)),
      (this.identifierPrefix = e),
      (this.onUncaughtError = u),
      (this.onCaughtError = n),
      (this.onRecoverableError = c),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = f),
      (this.incompleteTransitions = new Map()));
  }
  function ed(l, t, a, e, u, n, c, i, f, v, g, z) {
    return (
      (l = new J1(l, t, a, c, f, v, g, z, i)),
      (t = 1),
      n === !0 && (t |= 24),
      (n = ct(3, null, null, t)),
      (l.current = n),
      (n.stateNode = l),
      (t = Hc()),
      t.refCount++,
      (l.pooledCache = t),
      t.refCount++,
      (n.memoizedState = { element: e, isDehydrated: a, cache: t }),
      qc(n),
      l
    );
  }
  function ud(l) {
    return l ? ((l = ae), l) : ae;
  }
  function nd(l, t, a, e, u, n) {
    ((u = ud(u)),
      e.context === null ? (e.context = u) : (e.pendingContext = u),
      (e = ia(t)),
      (e.payload = { element: a }),
      (n = n === void 0 ? null : n),
      n !== null && (e.callback = n),
      (a = fa(l, e, t)),
      a !== null && (Fl(a, l, t), We(a, l, t)));
  }
  function cd(l, t) {
    if (((l = l.memoizedState), l !== null && l.dehydrated !== null)) {
      var a = l.retryLane;
      l.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function lf(l, t) {
    (cd(l, t), (l = l.alternate) && cd(l, t));
  }
  function id(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = xa(l, 67108864);
      (t !== null && Fl(t, l, 67108864), lf(l, 67108864));
    }
  }
  function fd(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = dt();
      t = $n(t);
      var a = xa(l, t);
      (a !== null && Fl(a, l, t), lf(l, t));
    }
  }
  var jn = !0;
  function w1(l, t, a, e) {
    var u = S.T;
    S.T = null;
    var n = M.p;
    try {
      ((M.p = 2), tf(l, t, a, e));
    } finally {
      ((M.p = n), (S.T = u));
    }
  }
  function W1(l, t, a, e) {
    var u = S.T;
    S.T = null;
    var n = M.p;
    try {
      ((M.p = 8), tf(l, t, a, e));
    } finally {
      ((M.p = n), (S.T = u));
    }
  }
  function tf(l, t, a, e) {
    if (jn) {
      var u = af(e);
      if (u === null) (Qi(l, t, e, Rn, a), od(l, e));
      else if (k1(u, l, t, a, e)) e.stopPropagation();
      else if ((od(l, e), t & 4 && -1 < $1.indexOf(l))) {
        for (; u !== null; ) {
          var n = Ka(u);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (((n = n.stateNode), n.current.memoizedState.isDehydrated)) {
                  var c = _a(n.pendingLanes);
                  if (c !== 0) {
                    var i = n;
                    for (i.pendingLanes |= 2, i.entangledLanes |= 2; c; ) {
                      var f = 1 << (31 - ut(c));
                      ((i.entanglements[1] |= f), (c &= ~f));
                    }
                    (Ut(n), (tl & 6) === 0 && ((gn = at() + 500), ou(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((i = xa(n, 2)), i !== null && Fl(i, n, 2), bn(), lf(n, 2));
            }
          if (((n = af(e)), n === null && Qi(l, t, e, Rn, a), n === u)) break;
          u = n;
        }
        u !== null && e.stopPropagation();
      } else Qi(l, t, e, null, a);
    }
  }
  function af(l) {
    return ((l = uc(l)), ef(l));
  }
  var Rn = null;
  function ef(l) {
    if (((Rn = null), (l = Va(l)), l !== null)) {
      var t = R(l);
      if (t === null) l = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (((l = G(t)), l !== null)) return l;
          l = null;
        } else if (a === 31) {
          if (((l = K(t)), l !== null)) return l;
          l = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return ((Rn = l), null);
  }
  function sd(l) {
    switch (l) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (jd()) {
          case rf:
            return 2;
          case gf:
            return 8;
          case Au:
          case Rd:
            return 32;
          case Sf:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var uf = !1,
    ba = null,
    za = null,
    Ea = null,
    gu = new Map(),
    Su = new Map(),
    Ta = [],
    $1 =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function od(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        ba = null;
        break;
      case "dragenter":
      case "dragleave":
        za = null;
        break;
      case "mouseover":
      case "mouseout":
        Ea = null;
        break;
      case "pointerover":
      case "pointerout":
        gu.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Su.delete(t.pointerId);
    }
  }
  function bu(l, t, a, e, u, n) {
    return l === null || l.nativeEvent !== n
      ? ((l = {
          blockedOn: t,
          domEventName: a,
          eventSystemFlags: e,
          nativeEvent: n,
          targetContainers: [u],
        }),
        t !== null && ((t = Ka(t)), t !== null && id(t)),
        l)
      : ((l.eventSystemFlags |= e),
        (t = l.targetContainers),
        u !== null && t.indexOf(u) === -1 && t.push(u),
        l);
  }
  function k1(l, t, a, e, u) {
    switch (t) {
      case "focusin":
        return ((ba = bu(ba, l, t, a, e, u)), !0);
      case "dragenter":
        return ((za = bu(za, l, t, a, e, u)), !0);
      case "mouseover":
        return ((Ea = bu(Ea, l, t, a, e, u)), !0);
      case "pointerover":
        var n = u.pointerId;
        return (gu.set(n, bu(gu.get(n) || null, l, t, a, e, u)), !0);
      case "gotpointercapture":
        return (
          (n = u.pointerId),
          Su.set(n, bu(Su.get(n) || null, l, t, a, e, u)),
          !0
        );
    }
    return !1;
  }
  function dd(l) {
    var t = Va(l.target);
    if (t !== null) {
      var a = R(t);
      if (a !== null) {
        if (((t = a.tag), t === 13)) {
          if (((t = G(a)), t !== null)) {
            ((l.blockedOn = t),
              pf(l.priority, function () {
                fd(a);
              }));
            return;
          }
        } else if (t === 31) {
          if (((t = K(a)), t !== null)) {
            ((l.blockedOn = t),
              pf(l.priority, function () {
                fd(a);
              }));
            return;
          }
        } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function qn(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var a = af(l.nativeEvent);
      if (a === null) {
        a = l.nativeEvent;
        var e = new a.constructor(a.type, a);
        ((ec = e), a.target.dispatchEvent(e), (ec = null));
      } else return ((t = Ka(a)), t !== null && id(t), (l.blockedOn = a), !1);
      t.shift();
    }
    return !0;
  }
  function md(l, t, a) {
    qn(l) && a.delete(t);
  }
  function F1() {
    ((uf = !1),
      ba !== null && qn(ba) && (ba = null),
      za !== null && qn(za) && (za = null),
      Ea !== null && qn(Ea) && (Ea = null),
      gu.forEach(md),
      Su.forEach(md));
  }
  function Bn(l, t) {
    l.blockedOn === t &&
      ((l.blockedOn = null),
      uf ||
        ((uf = !0),
        A.unstable_scheduleCallback(A.unstable_NormalPriority, F1)));
  }
  var Yn = null;
  function yd(l) {
    Yn !== l &&
      ((Yn = l),
      A.unstable_scheduleCallback(A.unstable_NormalPriority, function () {
        Yn === l && (Yn = null);
        for (var t = 0; t < l.length; t += 3) {
          var a = l[t],
            e = l[t + 1],
            u = l[t + 2];
          if (typeof e != "function") {
            if (ef(e || a) === null) continue;
            break;
          }
          var n = Ka(a);
          n !== null &&
            (l.splice(t, 3),
            (t -= 3),
            ai(n, { pending: !0, data: u, method: a.method, action: e }, e, u));
        }
      }));
  }
  function Me(l) {
    function t(f) {
      return Bn(f, l);
    }
    (ba !== null && Bn(ba, l),
      za !== null && Bn(za, l),
      Ea !== null && Bn(Ea, l),
      gu.forEach(t),
      Su.forEach(t));
    for (var a = 0; a < Ta.length; a++) {
      var e = Ta[a];
      e.blockedOn === l && (e.blockedOn = null);
    }
    for (; 0 < Ta.length && ((a = Ta[0]), a.blockedOn === null); )
      (dd(a), a.blockedOn === null && Ta.shift());
    if (((a = (l.ownerDocument || l).$$reactFormReplay), a != null))
      for (e = 0; e < a.length; e += 3) {
        var u = a[e],
          n = a[e + 1],
          c = u[Kl] || null;
        if (typeof n == "function") c || yd(a);
        else if (c) {
          var i = null;
          if (n && n.hasAttribute("formAction")) {
            if (((u = n), (c = n[Kl] || null))) i = c.formAction;
            else if (ef(u) !== null) continue;
          } else i = c.action;
          (typeof i == "function" ? (a[e + 1] = i) : (a.splice(e, 3), (e -= 3)),
            yd(a));
        }
      }
  }
  function vd() {
    function l(n) {
      n.canIntercept &&
        n.info === "react-transition" &&
        n.intercept({
          handler: function () {
            return new Promise(function (c) {
              return (u = c);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function t() {
      (u !== null && (u(), (u = null)), e || setTimeout(a, 20));
    }
    function a() {
      if (!e && !navigation.transition) {
        var n = navigation.currentEntry;
        n &&
          n.url != null &&
          navigation.navigate(n.url, {
            state: n.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var e = !1,
        u = null;
      return (
        navigation.addEventListener("navigate", l),
        navigation.addEventListener("navigatesuccess", t),
        navigation.addEventListener("navigateerror", t),
        setTimeout(a, 100),
        function () {
          ((e = !0),
            navigation.removeEventListener("navigate", l),
            navigation.removeEventListener("navigatesuccess", t),
            navigation.removeEventListener("navigateerror", t),
            u !== null && (u(), (u = null)));
        }
      );
    }
  }
  function nf(l) {
    this._internalRoot = l;
  }
  ((Gn.prototype.render = nf.prototype.render =
    function (l) {
      var t = this._internalRoot;
      if (t === null) throw Error(m(409));
      var a = t.current,
        e = dt();
      nd(a, e, l, t, null, null);
    }),
    (Gn.prototype.unmount = nf.prototype.unmount =
      function () {
        var l = this._internalRoot;
        if (l !== null) {
          this._internalRoot = null;
          var t = l.containerInfo;
          (nd(l.current, 2, null, l, null, null), bn(), (t[La] = null));
        }
      }));
  function Gn(l) {
    this._internalRoot = l;
  }
  Gn.prototype.unstable_scheduleHydration = function (l) {
    if (l) {
      var t = Af();
      l = { blockedOn: null, target: l, priority: t };
      for (var a = 0; a < Ta.length && t !== 0 && t < Ta[a].priority; a++);
      (Ta.splice(a, 0, l), a === 0 && dd(l));
    }
  };
  var hd = x.version;
  if (hd !== "19.2.4") throw Error(m(527, hd, "19.2.4"));
  M.findDOMNode = function (l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function"
        ? Error(m(188))
        : ((l = Object.keys(l).join(",")), Error(m(268, l)));
    return (
      (l = T(t)),
      (l = l !== null ? Q(l) : null),
      (l = l === null ? null : l.stateNode),
      l
    );
  };
  var I1 = {
    bundleType: 0,
    version: "19.2.4",
    rendererPackageName: "react-dom",
    currentDispatcherRef: S,
    reconcilerVersion: "19.2.4",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Xn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Xn.isDisabled && Xn.supportsFiber)
      try {
        ((De = Xn.inject(I1)), (et = Xn));
      } catch {}
  }
  return (
    (Eu.createRoot = function (l, t) {
      if (!C(l)) throw Error(m(299));
      var a = !1,
        e = "",
        u = E0,
        n = T0,
        c = A0;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (a = !0),
          t.identifierPrefix !== void 0 && (e = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (u = t.onUncaughtError),
          t.onCaughtError !== void 0 && (n = t.onCaughtError),
          t.onRecoverableError !== void 0 && (c = t.onRecoverableError)),
        (t = ed(l, 1, !1, null, null, a, e, null, u, n, c, vd)),
        (l[La] = t.current),
        Xi(l),
        new nf(t)
      );
    }),
    (Eu.hydrateRoot = function (l, t, a) {
      if (!C(l)) throw Error(m(299));
      var e = !1,
        u = "",
        n = E0,
        c = T0,
        i = A0,
        f = null;
      return (
        a != null &&
          (a.unstable_strictMode === !0 && (e = !0),
          a.identifierPrefix !== void 0 && (u = a.identifierPrefix),
          a.onUncaughtError !== void 0 && (n = a.onUncaughtError),
          a.onCaughtError !== void 0 && (c = a.onCaughtError),
          a.onRecoverableError !== void 0 && (i = a.onRecoverableError),
          a.formState !== void 0 && (f = a.formState)),
        (t = ed(l, 1, !0, t, a ?? null, e, u, f, n, c, i, vd)),
        (t.context = ud(null)),
        (a = t.current),
        (e = dt()),
        (e = $n(e)),
        (u = ia(e)),
        (u.callback = null),
        fa(a, u, e),
        (a = e),
        (t.current.lanes = a),
        xe(t, a),
        Ut(t),
        (l[La] = t.current),
        Xi(l),
        new Gn(t)
      );
    }),
    (Eu.version = "19.2.4"),
    Eu
  );
}
var _d;
function sy() {
  if (_d) return sf.exports;
  _d = 1;
  function A() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A);
      } catch (x) {
        console.error(x);
      }
  }
  return (A(), (sf.exports = fy()), sf.exports);
}
var oy = sy();
const dy = Dd(oy);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Nd = (...A) =>
  A.filter((x, q, m) => !!x && x.trim() !== "" && m.indexOf(x) === q)
    .join(" ")
    .trim();
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const my = (A) => A.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yy = (A) =>
  A.replace(/^([A-Z])|[\s-_]+(\w)/g, (x, q, m) =>
    m ? m.toUpperCase() : q.toLowerCase(),
  );
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Md = (A) => {
  const x = yy(A);
  return x.charAt(0).toUpperCase() + x.slice(1);
};
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var vy = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hy = (A) => {
  for (const x in A)
    if (x.startsWith("aria-") || x === "role" || x === "title") return !0;
  return !1;
};
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ry = Il.forwardRef(
  (
    {
      color: A = "currentColor",
      size: x = 24,
      strokeWidth: q = 2,
      absoluteStrokeWidth: m,
      className: C = "",
      children: R,
      iconNode: G,
      ...K
    },
    O,
  ) =>
    Il.createElement(
      "svg",
      {
        ref: O,
        ...vy,
        width: x,
        height: x,
        stroke: A,
        strokeWidth: m ? (Number(q) * 24) / Number(x) : q,
        className: Nd("lucide", C),
        ...(!R && !hy(K) && { "aria-hidden": "true" }),
        ...K,
      },
      [
        ...G.map(([T, Q]) => Il.createElement(T, Q)),
        ...(Array.isArray(R) ? R : [R]),
      ],
    ),
);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ft = (A, x) => {
  const q = Il.forwardRef(({ className: m, ...C }, R) =>
    Il.createElement(ry, {
      ref: R,
      iconNode: x,
      className: Nd(`lucide-${my(Md(A))}`, `lucide-${A}`, m),
      ...C,
    }),
  );
  return ((q.displayName = Md(A)), q);
};
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gy = [
    [
      "path",
      {
        d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
        key: "169zse",
      },
    ],
  ],
  Sy = Ft("activity", gy);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const by = [
    [
      "path",
      {
        d: "M17 19a1 1 0 0 1-1-1v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a1 1 0 0 1-1 1z",
        key: "trhst0",
      },
    ],
    ["path", { d: "M17 21v-2", key: "ds4u3f" }],
    [
      "path",
      { d: "M19 14V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V10", key: "1mo9zo" },
    ],
    ["path", { d: "M21 21v-2", key: "eo0ou" }],
    ["path", { d: "M3 5V3", key: "1k5hjh" }],
    [
      "path",
      {
        d: "M4 10a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2z",
        key: "1dd30t",
      },
    ],
    ["path", { d: "M7 5V3", key: "1t1388" }],
  ],
  Od = Ft("cable", by);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zy = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
    ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
  ],
  Ey = Ft("circle-alert", zy);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ty = [
    ["path", { d: "M12 15V3", key: "m9g1x1" }],
    ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
    ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }],
  ],
  Ay = Ft("download", Ty);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const py = [
    [
      "path",
      {
        d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
        key: "1oefj6",
      },
    ],
    ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
    ["path", { d: "m9 15 2 2 4-4", key: "1grp1n" }],
  ],
  _y = Ft("file-check", py);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const My = [
    [
      "path",
      {
        d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
        key: "1r0f0z",
      },
    ],
    ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
  ],
  Oy = Ft("map-pin", My);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Dy = [
    [
      "path",
      {
        d: "M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",
        key: "169xi5",
      },
    ],
    ["path", { d: "M15 5.764v15", key: "1pn4in" }],
    ["path", { d: "M9 3.236v15", key: "1uimfh" }],
  ],
  Ny = Ft("map", Dy);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xy = [
    [
      "path",
      {
        d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
        key: "wmoenq",
      },
    ],
    ["path", { d: "M12 9v4", key: "juzpu7" }],
    ["path", { d: "M12 17h.01", key: "p32p05" }],
  ],
  Uy = Ft("triangle-alert", xy);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Hy = [
    ["path", { d: "M12 3v12", key: "1x0j5s" }],
    ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
    ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ],
  Cy = Ft("upload", Hy),
  jy = ({ onFileProcess: A, isProcessing: x, processingStatus: q }) => {
    const [m, C] = Il.useState(!1),
      [R, G] = Il.useState(null),
      K = Il.useCallback((_) => {
        (_.preventDefault(),
          _.stopPropagation(),
          _.type === "dragenter" || _.type === "dragover"
            ? C(!0)
            : _.type === "dragleave" && C(!1));
      }, []),
      O = (_) => {
        if ((G(null), !_.name.toLowerCase().endsWith(".kml"))) {
          G("Invalid file type. Please upload a file with the .kml extension.");
          return;
        }
        A(_);
      },
      T = Il.useCallback(
        (_) => {
          (_.preventDefault(),
            _.stopPropagation(),
            C(!1),
            _.dataTransfer.files &&
              _.dataTransfer.files[0] &&
              O(_.dataTransfer.files[0]));
        },
        [A],
      ),
      Q = (_) => {
        (_.preventDefault(),
          _.target.files && _.target.files[0] && O(_.target.files[0]));
      };
    return p.jsxs("div", {
      className: "w-full max-w-xl mx-auto mb-8",
      children: [
        p.jsxs("div", {
          className: `relative group border-2 border-dashed rounded-2xl p-8 transition-all duration-300 ease-in-out text-center ${m ? "border-indigo-500 bg-indigo-50/50 scale-[1.02]" : "border-slate-300 hover:border-indigo-400 hover:bg-slate-50"} ${x ? "opacity-50 pointer-events-none" : ""}`,
          onDragEnter: K,
          onDragLeave: K,
          onDragOver: K,
          onDrop: T,
          children: [
            p.jsx("input", {
              type: "file",
              className:
                "absolute inset-0 w-full h-full opacity-0 cursor-pointer",
              onChange: Q,
              accept: ".kml",
              disabled: x,
            }),
            p.jsxs("div", {
              className: "flex flex-col items-center justify-center space-y-4",
              children: [
                p.jsx("div", {
                  className: `p-4 rounded-full transition-colors duration-300 ${m ? "bg-indigo-100 text-indigo-600" : "bg-slate-100 text-slate-500 group-hover:bg-indigo-50 group-hover:text-indigo-500"}`,
                  children: x
                    ? p.jsx("div", {
                        className:
                          "animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600",
                      })
                    : p.jsx(Cy, { className: "w-8 h-8" }),
                }),
                p.jsxs("div", {
                  className: "space-y-1",
                  children: [
                    p.jsx("p", {
                      className: "text-lg font-semibold text-slate-700",
                      children: x
                        ? q || "Processing KML..."
                        : "Upload your KML file",
                    }),
                    p.jsx("p", {
                      className: "text-sm text-slate-500",
                      children: "Drag and drop or click to browse",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        R &&
          p.jsxs("div", {
            className:
              "flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 border border-red-200 fade-in",
            role: "alert",
            children: [
              p.jsx(Ey, { className: "flex-shrink-0 inline w-5 h-5 mr-3" }),
              p.jsx("span", { className: "font-medium", children: "Error:" }),
              " ",
              R,
            ],
          }),
      ],
    });
  },
  Ry = ({ stats: A, xmlContent: x, onReset: q }) => {
    const m = () => {
      const C = new Blob([x], { type: "application/vnd.google-earth.kml+xml" }),
        R = URL.createObjectURL(C),
        G = document.createElement("a"),
        K = A.fileName.split("."),
        O = K.pop(),
        T = `${K.join(".")}_updated.${O}`;
      ((G.href = R),
        (G.download = T),
        document.body.appendChild(G),
        G.click(),
        document.body.removeChild(G),
        URL.revokeObjectURL(R));
    };
    return p.jsxs("div", {
      className:
        "w-full max-w-xl mx-auto bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500",
      children: [
        p.jsx("div", {
          className: "bg-indigo-600 p-6 text-white",
          children: p.jsxs("div", {
            className: "flex items-center space-x-3",
            children: [
              p.jsx(_y, { className: "w-8 h-8 opacity-90" }),
              p.jsxs("div", {
                children: [
                  p.jsx("h3", {
                    className: "text-xl font-bold",
                    children: "Processing Complete",
                  }),
                  p.jsx("p", {
                    className: "text-indigo-100 text-sm opacity-90",
                    children: "Your file is ready for download",
                  }),
                ],
              }),
            ],
          }),
        }),
        p.jsxs("div", {
          className: "p-8 space-y-6",
          children: [
            p.jsxs("div", {
              className: "grid grid-cols-2 gap-4",
              children: [
                p.jsxs("div", {
                  className:
                    "bg-slate-50 p-4 rounded-xl border border-slate-100",
                  children: [
                    p.jsxs("div", {
                      className:
                        "flex items-center space-x-2 text-slate-500 mb-1",
                      children: [
                        p.jsx(Sy, { className: "w-4 h-4" }),
                        p.jsx("span", {
                          className:
                            "text-xs font-semibold uppercase tracking-wider",
                          children: "Cables Updated",
                        }),
                      ],
                    }),
                    p.jsx("p", {
                      className: "text-2xl font-bold text-slate-800",
                      children: A.cablesProcessed,
                    }),
                  ],
                }),
                p.jsxs("div", {
                  className:
                    "bg-slate-50 p-4 rounded-xl border border-slate-100",
                  children: [
                    p.jsxs("div", {
                      className:
                        "flex items-center space-x-2 text-slate-500 mb-1",
                      children: [
                        p.jsx(Ny, { className: "w-4 h-4" }),
                        p.jsx("span", {
                          className:
                            "text-xs font-semibold uppercase tracking-wider",
                          children: "Total Length",
                        }),
                      ],
                    }),
                    p.jsxs("p", {
                      className: "text-2xl font-bold text-slate-800",
                      children: [
                        (A.totalLength / 1e3).toFixed(2),
                        " ",
                        p.jsx("span", {
                          className: "text-sm font-normal text-slate-500",
                          children: "km",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            p.jsxs("div", {
              className: "space-y-3",
              children: [
                p.jsxs("button", {
                  onClick: m,
                  className:
                    "w-full flex items-center justify-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02] shadow-lg shadow-indigo-200",
                  children: [
                    p.jsx(Ay, { className: "w-5 h-5" }),
                    p.jsx("span", { children: "Download Modified KML" }),
                  ],
                }),
                p.jsx("button", {
                  onClick: q,
                  className:
                    "w-full text-slate-500 hover:text-slate-700 font-medium py-2 text-sm transition-colors",
                  children: "Process another file",
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  qy = (A, x, q, m) => {
    const R = Qn(q - A),
      G = Qn(m - x),
      K =
        Math.sin(R / 2) * Math.sin(R / 2) +
        Math.cos(Qn(A)) * Math.cos(Qn(q)) * Math.sin(G / 2) * Math.sin(G / 2);
    return 6371e3 * (2 * Math.atan2(Math.sqrt(K), Math.sqrt(1 - K)));
  },
  Qn = (A) => A * (Math.PI / 180),
  By = (A) => {
    const x = A.trim().split(/\s+/);
    let q = 0,
      m = null,
      C = null;
    for (const R of x) {
      const G = R.split(",");
      if (G.length >= 2) {
        const K = parseFloat(G[0]),
          O = parseFloat(G[1]);
        !isNaN(K) &&
          !isNaN(O) &&
          (m !== null && C !== null && (q += qy(m, C, O, K)), (m = O), (C = K));
      }
    }
    return q;
  },
  Yy = async (A, x) => (
    x && x("Reading file..."),
    new Promise((q, m) => {
      const C = new FileReader();
      ((C.onload = (R) => {
        var G, K;
        try {
          const O = (G = R.target) == null ? void 0 : G.result;
          if (!O || O.trim().length === 0)
            throw new Error("The uploaded file is empty.");
          x && x("Parsing KML structure...");
          const Q = new DOMParser().parseFromString(O, "text/xml"),
            _ = Q.getElementsByTagName("parsererror");
          if (_.length > 0) {
            const gl = (_[0].textContent || "Unknown XML parsing error")
              .split(
                `
`,
              )[0]
              .substring(0, 150);
            throw new Error(`Invalid KML structure: ${gl}`);
          }
          if (Q.documentElement.nodeName.toLowerCase() !== "kml")
            throw new Error(
              "Invalid file format: Root element must be <kml>. Please ensure you are uploading a valid KML file.",
            );
          x && x("Processing cables...");
          let el = 0,
            Yl = 0;
          const xl = Q.getElementsByTagName("Folder");
          for (let Ml = 0; Ml < xl.length; Ml++) {
            const mt = xl[Ml],
              gl = mt.getElementsByTagName("name");
            if (gl.length > 0) {
              const Ql =
                (K = gl[0].textContent) == null
                  ? void 0
                  : K.trim().toLowerCase();
              if (Ql === "cable" || Ql === "cables") {
                const Pl = mt.getElementsByTagName("Placemark");
                for (let Ol = 0; Ol < Pl.length; Ol++) {
                  const J = Pl[Ol],
                    Ul = J.getElementsByTagName("LineString");
                  if (Ul.length > 0) {
                    const lt = Ul[0].getElementsByTagName("coordinates");
                    if (lt.length > 0) {
                      const It = lt[0].textContent || "",
                        Vl = By(It),
                        Hl = J.getElementsByTagName("description");
                      let tt;
                      (Hl.length > 0
                        ? ((tt = Hl[0]),
                          (tt.textContent = `Length: ${Vl.toFixed(2)} Meters`))
                        : ((tt = Q.createElement("description")),
                          (tt.textContent = `Length: ${Vl.toFixed(2)} Meters`),
                          J.appendChild(tt)),
                        el++,
                        (Yl += Vl));
                    }
                  }
                }
              }
            }
          }
          x && x("Finalizing...");
          const At = new XMLSerializer().serializeToString(Q);
          q({
            xmlContent: At,
            stats: { cablesProcessed: el, totalLength: Yl, fileName: A.name },
          });
        } catch (O) {
          m(O);
        }
      }),
        (C.onerror = () => m(new Error("Failed to read file from storage."))),
        C.readAsText(A));
    })
  ),
  Gy = () => {
    const [A, x] = Il.useState(!1),
      [q, m] = Il.useState(""),
      [C, R] = Il.useState(null),
      [G, K] = Il.useState(null),
      O = async (Q) => {
        (x(!0),
          K(null),
          m("Starting..."),
          await new Promise((_) => setTimeout(_, 800)));
        try {
          const _ = await Yy(Q, (el) => {
            m(el);
          });
          R(_);
        } catch (_) {
          (console.error("Processing failed:", _),
            K(
              _ instanceof Error
                ? _.message
                : "An unexpected error occurred during processing.",
            ));
        } finally {
          (x(!1), m(""));
        }
      },
      T = () => {
        (R(null), K(null));
      };
    return p.jsxs("div", {
      className:
        "min-h-screen bg-slate-50 flex flex-col relative overflow-hidden",
      children: [
        p.jsx("div", {
          className:
            "absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-indigo-600 to-violet-700 -skew-y-3 origin-top-left transform -translate-y-24 z-0",
        }),
        p.jsxs("main", {
          className:
            "flex-grow container mx-auto px-4 py-12 relative z-10 flex flex-col items-center justify-center",
          children: [
            p.jsxs("div", {
              className: "text-center mb-12 space-y-4",
              children: [
                p.jsx("div", {
                  className:
                    "inline-flex items-center justify-center p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 mb-4 shadow-xl",
                  children: p.jsx(Od, { className: "w-8 h-8 text-white" }),
                }),
                p.jsx("h1", {
                  className:
                    "text-4xl md:text-5xl font-extrabold text-white tracking-tight",
                  children: "KML Cable Length Calculator",
                }),
                p.jsx("p", {
                  className:
                    "text-indigo-100 text-lg max-w-2xl mx-auto leading-relaxed",
                  children:
                    'Upload your KML file to automatically calculate and update the descriptions of all cables within your "cable" folder with their precise lengths.',
                }),
              ],
            }),
            p.jsxs("div", {
              className: "w-full max-w-4xl mx-auto",
              children: [
                G &&
                  p.jsxs("div", {
                    className:
                      "mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded-xl shadow-sm flex items-start animate-in fade-in slide-in-from-top-2",
                    children: [
                      p.jsx(Uy, {
                        className: "w-5 h-5 text-red-600 mt-0.5 flex-shrink-0",
                      }),
                      p.jsxs("div", {
                        className: "ml-3",
                        children: [
                          p.jsx("h3", {
                            className: "text-sm font-medium text-red-800",
                            children: "Processing Error",
                          }),
                          p.jsx("div", {
                            className: "mt-1 text-sm text-red-700",
                            children: G,
                          }),
                        ],
                      }),
                      p.jsxs("button", {
                        onClick: () => K(null),
                        className:
                          "ml-auto pl-3 text-red-500 hover:text-red-700",
                        children: [
                          p.jsx("span", {
                            className: "sr-only",
                            children: "Dismiss",
                          }),
                          p.jsx("svg", {
                            className: "h-5 w-5",
                            viewBox: "0 0 20 20",
                            fill: "currentColor",
                            children: p.jsx("path", {
                              fillRule: "evenodd",
                              d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                              clipRule: "evenodd",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                C
                  ? p.jsx(Ry, {
                      stats: C.stats,
                      xmlContent: C.xmlContent,
                      onReset: T,
                    })
                  : p.jsxs("div", {
                      className:
                        "bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-100",
                      children: [
                        p.jsx(jy, {
                          onFileProcess: O,
                          isProcessing: A,
                          processingStatus: q,
                        }),
                        p.jsxs("div", {
                          className:
                            "mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center",
                          children: [
                            p.jsxs("div", {
                              className: "p-4",
                              children: [
                                p.jsx("div", {
                                  className:
                                    "w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center mx-auto mb-3",
                                  children: p.jsx(Oy, {
                                    className: "w-5 h-5 text-indigo-600",
                                  }),
                                }),
                                p.jsx("h3", {
                                  className:
                                    "font-semibold text-slate-800 mb-1",
                                  children: "Preserves Structure",
                                }),
                                p.jsx("p", {
                                  className: "text-sm text-slate-500",
                                  children:
                                    "Your folder hierarchy stays exactly the same.",
                                }),
                              ],
                            }),
                            p.jsxs("div", {
                              className: "p-4",
                              children: [
                                p.jsx("div", {
                                  className:
                                    "w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center mx-auto mb-3",
                                  children: p.jsx(Od, {
                                    className: "w-5 h-5 text-indigo-600",
                                  }),
                                }),
                                p.jsx("h3", {
                                  className:
                                    "font-semibold text-slate-800 mb-1",
                                  children: "Targeted Updates",
                                }),
                                p.jsx("p", {
                                  className: "text-sm text-slate-500",
                                  children:
                                    'Only modifies descriptions inside the "cable" folder.',
                                }),
                              ],
                            }),
                            p.jsxs("div", {
                              className: "p-4",
                              children: [
                                p.jsx("div", {
                                  className:
                                    "w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center mx-auto mb-3",
                                  children: p.jsx(Xy, {
                                    className: "w-5 h-5 text-indigo-600",
                                  }),
                                }),
                                p.jsx("h3", {
                                  className:
                                    "font-semibold text-slate-800 mb-1",
                                  children: "Precise Calculation",
                                }),
                                p.jsx("p", {
                                  className: "text-sm text-slate-500",
                                  children:
                                    "Uses geospatial formulas for accurate measurements.",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
              ],
            }),
          ],
        }),
        p.jsx("footer", {
          className: "py-6 text-center text-slate-400 text-sm relative z-10",
          children: p.jsxs("p", {
            children: [
              "© ",
              new Date().getFullYear(),
              " KML Calculator. All calculations performed locally in your browser.",
            ],
          }),
        }),
      ],
    });
  };
function Xy({ className: A }) {
  return p.jsx("svg", {
    className: A,
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: p.jsx("path", { d: "M22 12h-4l-3 9L9 3l-3 9H2" }),
  });
}
const xd = document.getElementById("root");
if (!xd) throw new Error("Could not find root element to mount to");
const Qy = dy.createRoot(xd);
Qy.render(p.jsx(ey.StrictMode, { children: p.jsx(Gy, {}) }));
