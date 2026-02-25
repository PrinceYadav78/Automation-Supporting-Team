(function () {
  const nt = document.createElement("link").relList;
  if (nt && nt.supports && nt.supports("modulepreload")) return;
  for (const G of document.querySelectorAll('link[rel="modulepreload"]')) b(G);
  new MutationObserver((G) => {
    for (const F of G)
      if (F.type === "childList")
        for (const J of F.addedNodes)
          J.tagName === "LINK" && J.rel === "modulepreload" && b(J);
  }).observe(document, { childList: !0, subtree: !0 });
  function T(G) {
    const F = {};
    return (
      G.integrity && (F.integrity = G.integrity),
      G.referrerPolicy && (F.referrerPolicy = G.referrerPolicy),
      G.crossOrigin === "use-credentials"
        ? (F.credentials = "include")
        : G.crossOrigin === "anonymous"
          ? (F.credentials = "omit")
          : (F.credentials = "same-origin"),
      F
    );
  }
  function b(G) {
    if (G.ep) return;
    G.ep = !0;
    const F = T(G);
    fetch(G.href, F);
  }
})();
function jd(R) {
  return R && R.__esModule && Object.prototype.hasOwnProperty.call(R, "default")
    ? R.default
    : R;
}
var Tc = { exports: {} },
  Ko = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ed;
function a_() {
  if (Ed) return Ko;
  Ed = 1;
  var R = Symbol.for("react.transitional.element"),
    nt = Symbol.for("react.fragment");
  function T(b, G, F) {
    var J = null;
    if (
      (F !== void 0 && (J = "" + F),
      G.key !== void 0 && (J = "" + G.key),
      "key" in G)
    ) {
      F = {};
      for (var Lt in G) Lt !== "key" && (F[Lt] = G[Lt]);
    } else F = G;
    return (
      (G = F.ref),
      { $$typeof: R, type: b, key: J, ref: G !== void 0 ? G : null, props: F }
    );
  }
  return ((Ko.Fragment = nt), (Ko.jsx = T), (Ko.jsxs = T), Ko);
}
var Md;
function l_() {
  return (Md || ((Md = 1), (Tc.exports = a_())), Tc.exports);
}
var Z = l_(),
  zc = { exports: {} },
  rt = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ld;
function o_() {
  if (Ld) return rt;
  Ld = 1;
  var R = Symbol.for("react.transitional.element"),
    nt = Symbol.for("react.portal"),
    T = Symbol.for("react.fragment"),
    b = Symbol.for("react.strict_mode"),
    G = Symbol.for("react.profiler"),
    F = Symbol.for("react.consumer"),
    J = Symbol.for("react.context"),
    Lt = Symbol.for("react.forward_ref"),
    U = Symbol.for("react.suspense"),
    C = Symbol.for("react.memo"),
    I = Symbol.for("react.lazy"),
    X = Symbol.for("react.activity"),
    st = Symbol.iterator;
  function wt(p) {
    return p === null || typeof p != "object"
      ? null
      : ((p = (st && p[st]) || p["@@iterator"]),
        typeof p == "function" ? p : null);
  }
  var gt = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    et = Object.assign,
    Ot = {};
  function vt(p, A, j) {
    ((this.props = p),
      (this.context = A),
      (this.refs = Ot),
      (this.updater = j || gt));
  }
  ((vt.prototype.isReactComponent = {}),
    (vt.prototype.setState = function (p, A) {
      if (typeof p != "object" && typeof p != "function" && p != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, p, A, "setState");
    }),
    (vt.prototype.forceUpdate = function (p) {
      this.updater.enqueueForceUpdate(this, p, "forceUpdate");
    }));
  function kt() {}
  kt.prototype = vt.prototype;
  function ct(p, A, j) {
    ((this.props = p),
      (this.context = A),
      (this.refs = Ot),
      (this.updater = j || gt));
  }
  var Pt = (ct.prototype = new kt());
  ((Pt.constructor = ct), et(Pt, vt.prototype), (Pt.isPureReactComponent = !0));
  var oe = Array.isArray;
  function Kt() {}
  var ft = { H: null, A: null, T: null, S: null },
    se = Object.prototype.hasOwnProperty;
  function xe(p, A, j) {
    var Y = j.ref;
    return {
      $$typeof: R,
      type: p,
      key: A,
      ref: Y !== void 0 ? Y : null,
      props: j,
    };
  }
  function oi(p, A) {
    return xe(p.type, A, p.props);
  }
  function ot(p) {
    return typeof p == "object" && p !== null && p.$$typeof === R;
  }
  function ht(p) {
    var A = { "=": "=0", ":": "=2" };
    return (
      "$" +
      p.replace(/[=:]/g, function (j) {
        return A[j];
      })
    );
  }
  var Ut = /\/+/g;
  function yt(p, A) {
    return typeof p == "object" && p !== null && p.key != null
      ? ht("" + p.key)
      : A.toString(36);
  }
  function fe(p) {
    switch (p.status) {
      case "fulfilled":
        return p.value;
      case "rejected":
        throw p.reason;
      default:
        switch (
          (typeof p.status == "string"
            ? p.then(Kt, Kt)
            : ((p.status = "pending"),
              p.then(
                function (A) {
                  p.status === "pending" &&
                    ((p.status = "fulfilled"), (p.value = A));
                },
                function (A) {
                  p.status === "pending" &&
                    ((p.status = "rejected"), (p.reason = A));
                },
              )),
          p.status)
        ) {
          case "fulfilled":
            return p.value;
          case "rejected":
            throw p.reason;
        }
    }
    throw p;
  }
  function M(p, A, j, Y, P) {
    var Q = typeof p;
    (Q === "undefined" || Q === "boolean") && (p = null);
    var pt = !1;
    if (p === null) pt = !0;
    else
      switch (Q) {
        case "bigint":
        case "string":
        case "number":
          pt = !0;
          break;
        case "object":
          switch (p.$$typeof) {
            case R:
            case nt:
              pt = !0;
              break;
            case I:
              return ((pt = p._init), M(pt(p._payload), A, j, Y, P));
          }
      }
    if (pt)
      return (
        (P = P(p)),
        (pt = Y === "" ? "." + yt(p, 0) : Y),
        oe(P)
          ? ((j = ""),
            pt != null && (j = pt.replace(Ut, "$&/") + "/"),
            M(P, A, j, "", function (Pi) {
              return Pi;
            }))
          : P != null &&
            (ot(P) &&
              (P = oi(
                P,
                j +
                  (P.key == null || (p && p.key === P.key)
                    ? ""
                    : ("" + P.key).replace(Ut, "$&/") + "/") +
                  pt,
              )),
            A.push(P)),
        1
      );
    pt = 0;
    var Ft = Y === "" ? "." : Y + ":";
    if (oe(p))
      for (var It = 0; It < p.length; It++)
        ((Y = p[It]), (Q = Ft + yt(Y, It)), (pt += M(Y, A, j, Q, P)));
    else if (((It = wt(p)), typeof It == "function"))
      for (p = It.call(p), It = 0; !(Y = p.next()).done; )
        ((Y = Y.value), (Q = Ft + yt(Y, It++)), (pt += M(Y, A, j, Q, P)));
    else if (Q === "object") {
      if (typeof p.then == "function") return M(fe(p), A, j, Y, P);
      throw (
        (A = String(p)),
        Error(
          "Objects are not valid as a React child (found: " +
            (A === "[object Object]"
              ? "object with keys {" + Object.keys(p).join(", ") + "}"
              : A) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return pt;
  }
  function q(p, A, j) {
    if (p == null) return p;
    var Y = [],
      P = 0;
    return (
      M(p, Y, "", "", function (Q) {
        return A.call(j, Q, P++);
      }),
      Y
    );
  }
  function H(p) {
    if (p._status === -1) {
      var A = p._result;
      ((A = A()),
        A.then(
          function (j) {
            (p._status === 0 || p._status === -1) &&
              ((p._status = 1), (p._result = j));
          },
          function (j) {
            (p._status === 0 || p._status === -1) &&
              ((p._status = 2), (p._result = j));
          },
        ),
        p._status === -1 && ((p._status = 0), (p._result = A)));
    }
    if (p._status === 1) return p._result.default;
    throw p._result;
  }
  var At =
      typeof reportError == "function"
        ? reportError
        : function (p) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var A = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof p == "object" &&
                  p !== null &&
                  typeof p.message == "string"
                    ? String(p.message)
                    : String(p),
                error: p,
              });
              if (!window.dispatchEvent(A)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", p);
              return;
            }
            console.error(p);
          },
    V = {
      map: q,
      forEach: function (p, A, j) {
        q(
          p,
          function () {
            A.apply(this, arguments);
          },
          j,
        );
      },
      count: function (p) {
        var A = 0;
        return (
          q(p, function () {
            A++;
          }),
          A
        );
      },
      toArray: function (p) {
        return (
          q(p, function (A) {
            return A;
          }) || []
        );
      },
      only: function (p) {
        if (!ot(p))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return p;
      },
    };
  return (
    (rt.Activity = X),
    (rt.Children = V),
    (rt.Component = vt),
    (rt.Fragment = T),
    (rt.Profiler = G),
    (rt.PureComponent = ct),
    (rt.StrictMode = b),
    (rt.Suspense = U),
    (rt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ft),
    (rt.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (p) {
        return ft.H.useMemoCache(p);
      },
    }),
    (rt.cache = function (p) {
      return function () {
        return p.apply(null, arguments);
      };
    }),
    (rt.cacheSignal = function () {
      return null;
    }),
    (rt.cloneElement = function (p, A, j) {
      if (p == null)
        throw Error(
          "The argument must be a React element, but you passed " + p + ".",
        );
      var Y = et({}, p.props),
        P = p.key;
      if (A != null)
        for (Q in (A.key !== void 0 && (P = "" + A.key), A))
          !se.call(A, Q) ||
            Q === "key" ||
            Q === "__self" ||
            Q === "__source" ||
            (Q === "ref" && A.ref === void 0) ||
            (Y[Q] = A[Q]);
      var Q = arguments.length - 2;
      if (Q === 1) Y.children = j;
      else if (1 < Q) {
        for (var pt = Array(Q), Ft = 0; Ft < Q; Ft++)
          pt[Ft] = arguments[Ft + 2];
        Y.children = pt;
      }
      return xe(p.type, P, Y);
    }),
    (rt.createContext = function (p) {
      return (
        (p = {
          $$typeof: J,
          _currentValue: p,
          _currentValue2: p,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (p.Provider = p),
        (p.Consumer = { $$typeof: F, _context: p }),
        p
      );
    }),
    (rt.createElement = function (p, A, j) {
      var Y,
        P = {},
        Q = null;
      if (A != null)
        for (Y in (A.key !== void 0 && (Q = "" + A.key), A))
          se.call(A, Y) &&
            Y !== "key" &&
            Y !== "__self" &&
            Y !== "__source" &&
            (P[Y] = A[Y]);
      var pt = arguments.length - 2;
      if (pt === 1) P.children = j;
      else if (1 < pt) {
        for (var Ft = Array(pt), It = 0; It < pt; It++)
          Ft[It] = arguments[It + 2];
        P.children = Ft;
      }
      if (p && p.defaultProps)
        for (Y in ((pt = p.defaultProps), pt))
          P[Y] === void 0 && (P[Y] = pt[Y]);
      return xe(p, Q, P);
    }),
    (rt.createRef = function () {
      return { current: null };
    }),
    (rt.forwardRef = function (p) {
      return { $$typeof: Lt, render: p };
    }),
    (rt.isValidElement = ot),
    (rt.lazy = function (p) {
      return { $$typeof: I, _payload: { _status: -1, _result: p }, _init: H };
    }),
    (rt.memo = function (p, A) {
      return { $$typeof: C, type: p, compare: A === void 0 ? null : A };
    }),
    (rt.startTransition = function (p) {
      var A = ft.T,
        j = {};
      ft.T = j;
      try {
        var Y = p(),
          P = ft.S;
        (P !== null && P(j, Y),
          typeof Y == "object" &&
            Y !== null &&
            typeof Y.then == "function" &&
            Y.then(Kt, At));
      } catch (Q) {
        At(Q);
      } finally {
        (A !== null && j.types !== null && (A.types = j.types), (ft.T = A));
      }
    }),
    (rt.unstable_useCacheRefresh = function () {
      return ft.H.useCacheRefresh();
    }),
    (rt.use = function (p) {
      return ft.H.use(p);
    }),
    (rt.useActionState = function (p, A, j) {
      return ft.H.useActionState(p, A, j);
    }),
    (rt.useCallback = function (p, A) {
      return ft.H.useCallback(p, A);
    }),
    (rt.useContext = function (p) {
      return ft.H.useContext(p);
    }),
    (rt.useDebugValue = function () {}),
    (rt.useDeferredValue = function (p, A) {
      return ft.H.useDeferredValue(p, A);
    }),
    (rt.useEffect = function (p, A) {
      return ft.H.useEffect(p, A);
    }),
    (rt.useEffectEvent = function (p) {
      return ft.H.useEffectEvent(p);
    }),
    (rt.useId = function () {
      return ft.H.useId();
    }),
    (rt.useImperativeHandle = function (p, A, j) {
      return ft.H.useImperativeHandle(p, A, j);
    }),
    (rt.useInsertionEffect = function (p, A) {
      return ft.H.useInsertionEffect(p, A);
    }),
    (rt.useLayoutEffect = function (p, A) {
      return ft.H.useLayoutEffect(p, A);
    }),
    (rt.useMemo = function (p, A) {
      return ft.H.useMemo(p, A);
    }),
    (rt.useOptimistic = function (p, A) {
      return ft.H.useOptimistic(p, A);
    }),
    (rt.useReducer = function (p, A, j) {
      return ft.H.useReducer(p, A, j);
    }),
    (rt.useRef = function (p) {
      return ft.H.useRef(p);
    }),
    (rt.useState = function (p) {
      return ft.H.useState(p);
    }),
    (rt.useSyncExternalStore = function (p, A, j) {
      return ft.H.useSyncExternalStore(p, A, j);
    }),
    (rt.useTransition = function () {
      return ft.H.useTransition();
    }),
    (rt.version = "19.2.4"),
    rt
  );
}
var wd;
function Ac() {
  return (wd || ((wd = 1), (zc.exports = o_())), zc.exports);
}
var ce = Ac();
const s_ = jd(ce);
var Ec = { exports: {} },
  Jo = {},
  Mc = { exports: {} },
  Lc = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ad;
function u_() {
  return (
    Ad ||
      ((Ad = 1),
      (function (R) {
        function nt(M, q) {
          var H = M.length;
          M.push(q);
          t: for (; 0 < H; ) {
            var At = (H - 1) >>> 1,
              V = M[At];
            if (0 < G(V, q)) ((M[At] = q), (M[H] = V), (H = At));
            else break t;
          }
        }
        function T(M) {
          return M.length === 0 ? null : M[0];
        }
        function b(M) {
          if (M.length === 0) return null;
          var q = M[0],
            H = M.pop();
          if (H !== q) {
            M[0] = H;
            t: for (var At = 0, V = M.length, p = V >>> 1; At < p; ) {
              var A = 2 * (At + 1) - 1,
                j = M[A],
                Y = A + 1,
                P = M[Y];
              if (0 > G(j, H))
                Y < V && 0 > G(P, j)
                  ? ((M[At] = P), (M[Y] = H), (At = Y))
                  : ((M[At] = j), (M[A] = H), (At = A));
              else if (Y < V && 0 > G(P, H))
                ((M[At] = P), (M[Y] = H), (At = Y));
              else break t;
            }
          }
          return q;
        }
        function G(M, q) {
          var H = M.sortIndex - q.sortIndex;
          return H !== 0 ? H : M.id - q.id;
        }
        if (
          ((R.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var F = performance;
          R.unstable_now = function () {
            return F.now();
          };
        } else {
          var J = Date,
            Lt = J.now();
          R.unstable_now = function () {
            return J.now() - Lt;
          };
        }
        var U = [],
          C = [],
          I = 1,
          X = null,
          st = 3,
          wt = !1,
          gt = !1,
          et = !1,
          Ot = !1,
          vt = typeof setTimeout == "function" ? setTimeout : null,
          kt = typeof clearTimeout == "function" ? clearTimeout : null,
          ct = typeof setImmediate < "u" ? setImmediate : null;
        function Pt(M) {
          for (var q = T(C); q !== null; ) {
            if (q.callback === null) b(C);
            else if (q.startTime <= M)
              (b(C), (q.sortIndex = q.expirationTime), nt(U, q));
            else break;
            q = T(C);
          }
        }
        function oe(M) {
          if (((et = !1), Pt(M), !gt))
            if (T(U) !== null) ((gt = !0), Kt || ((Kt = !0), ht()));
            else {
              var q = T(C);
              q !== null && fe(oe, q.startTime - M);
            }
        }
        var Kt = !1,
          ft = -1,
          se = 5,
          xe = -1;
        function oi() {
          return Ot ? !0 : !(R.unstable_now() - xe < se);
        }
        function ot() {
          if (((Ot = !1), Kt)) {
            var M = R.unstable_now();
            xe = M;
            var q = !0;
            try {
              t: {
                ((gt = !1), et && ((et = !1), kt(ft), (ft = -1)), (wt = !0));
                var H = st;
                try {
                  e: {
                    for (
                      Pt(M), X = T(U);
                      X !== null && !(X.expirationTime > M && oi());
                    ) {
                      var At = X.callback;
                      if (typeof At == "function") {
                        ((X.callback = null), (st = X.priorityLevel));
                        var V = At(X.expirationTime <= M);
                        if (((M = R.unstable_now()), typeof V == "function")) {
                          ((X.callback = V), Pt(M), (q = !0));
                          break e;
                        }
                        (X === T(U) && b(U), Pt(M));
                      } else b(U);
                      X = T(U);
                    }
                    if (X !== null) q = !0;
                    else {
                      var p = T(C);
                      (p !== null && fe(oe, p.startTime - M), (q = !1));
                    }
                  }
                  break t;
                } finally {
                  ((X = null), (st = H), (wt = !1));
                }
                q = void 0;
              }
            } finally {
              q ? ht() : (Kt = !1);
            }
          }
        }
        var ht;
        if (typeof ct == "function")
          ht = function () {
            ct(ot);
          };
        else if (typeof MessageChannel < "u") {
          var Ut = new MessageChannel(),
            yt = Ut.port2;
          ((Ut.port1.onmessage = ot),
            (ht = function () {
              yt.postMessage(null);
            }));
        } else
          ht = function () {
            vt(ot, 0);
          };
        function fe(M, q) {
          ft = vt(function () {
            M(R.unstable_now());
          }, q);
        }
        ((R.unstable_IdlePriority = 5),
          (R.unstable_ImmediatePriority = 1),
          (R.unstable_LowPriority = 4),
          (R.unstable_NormalPriority = 3),
          (R.unstable_Profiling = null),
          (R.unstable_UserBlockingPriority = 2),
          (R.unstable_cancelCallback = function (M) {
            M.callback = null;
          }),
          (R.unstable_forceFrameRate = function (M) {
            0 > M || 125 < M
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (se = 0 < M ? Math.floor(1e3 / M) : 5);
          }),
          (R.unstable_getCurrentPriorityLevel = function () {
            return st;
          }),
          (R.unstable_next = function (M) {
            switch (st) {
              case 1:
              case 2:
              case 3:
                var q = 3;
                break;
              default:
                q = st;
            }
            var H = st;
            st = q;
            try {
              return M();
            } finally {
              st = H;
            }
          }),
          (R.unstable_requestPaint = function () {
            Ot = !0;
          }),
          (R.unstable_runWithPriority = function (M, q) {
            switch (M) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                M = 3;
            }
            var H = st;
            st = M;
            try {
              return q();
            } finally {
              st = H;
            }
          }),
          (R.unstable_scheduleCallback = function (M, q, H) {
            var At = R.unstable_now();
            switch (
              (typeof H == "object" && H !== null
                ? ((H = H.delay),
                  (H = typeof H == "number" && 0 < H ? At + H : At))
                : (H = At),
              M)
            ) {
              case 1:
                var V = -1;
                break;
              case 2:
                V = 250;
                break;
              case 5:
                V = 1073741823;
                break;
              case 4:
                V = 1e4;
                break;
              default:
                V = 5e3;
            }
            return (
              (V = H + V),
              (M = {
                id: I++,
                callback: q,
                priorityLevel: M,
                startTime: H,
                expirationTime: V,
                sortIndex: -1,
              }),
              H > At
                ? ((M.sortIndex = H),
                  nt(C, M),
                  T(U) === null &&
                    M === T(C) &&
                    (et ? (kt(ft), (ft = -1)) : (et = !0), fe(oe, H - At)))
                : ((M.sortIndex = V),
                  nt(U, M),
                  gt || wt || ((gt = !0), Kt || ((Kt = !0), ht()))),
              M
            );
          }),
          (R.unstable_shouldYield = oi),
          (R.unstable_wrapCallback = function (M) {
            var q = st;
            return function () {
              var H = st;
              st = q;
              try {
                return M.apply(this, arguments);
              } finally {
                st = H;
              }
            };
          }));
      })(Lc)),
    Lc
  );
}
var Od;
function r_() {
  return (Od || ((Od = 1), (Mc.exports = u_())), Mc.exports);
}
var wc = { exports: {} },
  De = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Cd;
function c_() {
  if (Cd) return De;
  Cd = 1;
  var R = Ac();
  function nt(U) {
    var C = "https://react.dev/errors/" + U;
    if (1 < arguments.length) {
      C += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var I = 2; I < arguments.length; I++)
        C += "&args[]=" + encodeURIComponent(arguments[I]);
    }
    return (
      "Minified React error #" +
      U +
      "; visit " +
      C +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function T() {}
  var b = {
      d: {
        f: T,
        r: function () {
          throw Error(nt(522));
        },
        D: T,
        C: T,
        L: T,
        m: T,
        X: T,
        S: T,
        M: T,
      },
      p: 0,
      findDOMNode: null,
    },
    G = Symbol.for("react.portal");
  function F(U, C, I) {
    var X =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: G,
      key: X == null ? null : "" + X,
      children: U,
      containerInfo: C,
      implementation: I,
    };
  }
  var J = R.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function Lt(U, C) {
    if (U === "font") return "";
    if (typeof C == "string") return C === "use-credentials" ? C : "";
  }
  return (
    (De.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = b),
    (De.createPortal = function (U, C) {
      var I =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!C || (C.nodeType !== 1 && C.nodeType !== 9 && C.nodeType !== 11))
        throw Error(nt(299));
      return F(U, C, null, I);
    }),
    (De.flushSync = function (U) {
      var C = J.T,
        I = b.p;
      try {
        if (((J.T = null), (b.p = 2), U)) return U();
      } finally {
        ((J.T = C), (b.p = I), b.d.f());
      }
    }),
    (De.preconnect = function (U, C) {
      typeof U == "string" &&
        (C
          ? ((C = C.crossOrigin),
            (C =
              typeof C == "string"
                ? C === "use-credentials"
                  ? C
                  : ""
                : void 0))
          : (C = null),
        b.d.C(U, C));
    }),
    (De.prefetchDNS = function (U) {
      typeof U == "string" && b.d.D(U);
    }),
    (De.preinit = function (U, C) {
      if (typeof U == "string" && C && typeof C.as == "string") {
        var I = C.as,
          X = Lt(I, C.crossOrigin),
          st = typeof C.integrity == "string" ? C.integrity : void 0,
          wt = typeof C.fetchPriority == "string" ? C.fetchPriority : void 0;
        I === "style"
          ? b.d.S(U, typeof C.precedence == "string" ? C.precedence : void 0, {
              crossOrigin: X,
              integrity: st,
              fetchPriority: wt,
            })
          : I === "script" &&
            b.d.X(U, {
              crossOrigin: X,
              integrity: st,
              fetchPriority: wt,
              nonce: typeof C.nonce == "string" ? C.nonce : void 0,
            });
      }
    }),
    (De.preinitModule = function (U, C) {
      if (typeof U == "string")
        if (typeof C == "object" && C !== null) {
          if (C.as == null || C.as === "script") {
            var I = Lt(C.as, C.crossOrigin);
            b.d.M(U, {
              crossOrigin: I,
              integrity: typeof C.integrity == "string" ? C.integrity : void 0,
              nonce: typeof C.nonce == "string" ? C.nonce : void 0,
            });
          }
        } else C == null && b.d.M(U);
    }),
    (De.preload = function (U, C) {
      if (
        typeof U == "string" &&
        typeof C == "object" &&
        C !== null &&
        typeof C.as == "string"
      ) {
        var I = C.as,
          X = Lt(I, C.crossOrigin);
        b.d.L(U, I, {
          crossOrigin: X,
          integrity: typeof C.integrity == "string" ? C.integrity : void 0,
          nonce: typeof C.nonce == "string" ? C.nonce : void 0,
          type: typeof C.type == "string" ? C.type : void 0,
          fetchPriority:
            typeof C.fetchPriority == "string" ? C.fetchPriority : void 0,
          referrerPolicy:
            typeof C.referrerPolicy == "string" ? C.referrerPolicy : void 0,
          imageSrcSet:
            typeof C.imageSrcSet == "string" ? C.imageSrcSet : void 0,
          imageSizes: typeof C.imageSizes == "string" ? C.imageSizes : void 0,
          media: typeof C.media == "string" ? C.media : void 0,
        });
      }
    }),
    (De.preloadModule = function (U, C) {
      if (typeof U == "string")
        if (C) {
          var I = Lt(C.as, C.crossOrigin);
          b.d.m(U, {
            as: typeof C.as == "string" && C.as !== "script" ? C.as : void 0,
            crossOrigin: I,
            integrity: typeof C.integrity == "string" ? C.integrity : void 0,
          });
        } else b.d.m(U);
    }),
    (De.requestFormReset = function (U) {
      b.d.r(U);
    }),
    (De.unstable_batchedUpdates = function (U, C) {
      return U(C);
    }),
    (De.useFormState = function (U, C, I) {
      return J.H.useFormState(U, C, I);
    }),
    (De.useFormStatus = function () {
      return J.H.useHostTransitionStatus();
    }),
    (De.version = "19.2.4"),
    De
  );
}
var Nd;
function f_() {
  if (Nd) return wc.exports;
  Nd = 1;
  function R() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(R);
      } catch (nt) {
        console.error(nt);
      }
  }
  return (R(), (wc.exports = c_()), wc.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Dd;
function h_() {
  if (Dd) return Jo;
  Dd = 1;
  var R = r_(),
    nt = Ac(),
    T = f_();
  function b(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        e += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      e +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function G(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function F(t) {
    var e = t,
      n = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do ((e = t), (e.flags & 4098) !== 0 && (n = e.return), (t = e.return));
      while (t);
    }
    return e.tag === 3 ? n : null;
  }
  function J(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function Lt(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function U(t) {
    if (F(t) !== t) throw Error(b(188));
  }
  function C(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = F(t)), e === null)) throw Error(b(188));
      return e !== t ? null : t;
    }
    for (var n = t, l = e; ; ) {
      var s = n.return;
      if (s === null) break;
      var u = s.alternate;
      if (u === null) {
        if (((l = s.return), l !== null)) {
          n = l;
          continue;
        }
        break;
      }
      if (s.child === u.child) {
        for (u = s.child; u; ) {
          if (u === n) return (U(s), t);
          if (u === l) return (U(s), e);
          u = u.sibling;
        }
        throw Error(b(188));
      }
      if (n.return !== l.return) ((n = s), (l = u));
      else {
        for (var f = !1, d = s.child; d; ) {
          if (d === n) {
            ((f = !0), (n = s), (l = u));
            break;
          }
          if (d === l) {
            ((f = !0), (l = s), (n = u));
            break;
          }
          d = d.sibling;
        }
        if (!f) {
          for (d = u.child; d; ) {
            if (d === n) {
              ((f = !0), (n = u), (l = s));
              break;
            }
            if (d === l) {
              ((f = !0), (l = u), (n = s));
              break;
            }
            d = d.sibling;
          }
          if (!f) throw Error(b(189));
        }
      }
      if (n.alternate !== l) throw Error(b(190));
    }
    if (n.tag !== 3) throw Error(b(188));
    return n.stateNode.current === n ? t : e;
  }
  function I(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((e = I(t)), e !== null)) return e;
      t = t.sibling;
    }
    return null;
  }
  var X = Object.assign,
    st = Symbol.for("react.element"),
    wt = Symbol.for("react.transitional.element"),
    gt = Symbol.for("react.portal"),
    et = Symbol.for("react.fragment"),
    Ot = Symbol.for("react.strict_mode"),
    vt = Symbol.for("react.profiler"),
    kt = Symbol.for("react.consumer"),
    ct = Symbol.for("react.context"),
    Pt = Symbol.for("react.forward_ref"),
    oe = Symbol.for("react.suspense"),
    Kt = Symbol.for("react.suspense_list"),
    ft = Symbol.for("react.memo"),
    se = Symbol.for("react.lazy"),
    xe = Symbol.for("react.activity"),
    oi = Symbol.for("react.memo_cache_sentinel"),
    ot = Symbol.iterator;
  function ht(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (ot && t[ot]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var Ut = Symbol.for("react.client.reference");
  function yt(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === Ut ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case et:
        return "Fragment";
      case vt:
        return "Profiler";
      case Ot:
        return "StrictMode";
      case oe:
        return "Suspense";
      case Kt:
        return "SuspenseList";
      case xe:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case gt:
          return "Portal";
        case ct:
          return t.displayName || "Context";
        case kt:
          return (t._context.displayName || "Context") + ".Consumer";
        case Pt:
          var e = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = e.displayName || e.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case ft:
          return (
            (e = t.displayName || null),
            e !== null ? e : yt(t.type) || "Memo"
          );
        case se:
          ((e = t._payload), (t = t._init));
          try {
            return yt(t(e));
          } catch {}
      }
    return null;
  }
  var fe = Array.isArray,
    M = nt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    q = T.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    H = { pending: !1, data: null, method: null, action: null },
    At = [],
    V = -1;
  function p(t) {
    return { current: t };
  }
  function A(t) {
    0 > V || ((t.current = At[V]), (At[V] = null), V--);
  }
  function j(t, e) {
    (V++, (At[V] = t.current), (t.current = e));
  }
  var Y = p(null),
    P = p(null),
    Q = p(null),
    pt = p(null);
  function Ft(t, e) {
    switch ((j(Q, e), j(P, t), j(Y, null), e.nodeType)) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? Kh(t) : 0;
        break;
      default:
        if (((t = e.tagName), (e = e.namespaceURI)))
          ((e = Kh(e)), (t = Jh(e, t)));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    (A(Y), j(Y, t));
  }
  function It() {
    (A(Y), A(P), A(Q));
  }
  function Pi(t) {
    t.memoizedState !== null && j(pt, t);
    var e = Y.current,
      n = Jh(e, t.type);
    e !== n && (j(P, t), j(Y, n));
  }
  function xn(t) {
    (P.current === t && (A(Y), A(P)),
      pt.current === t && (A(pt), (ko._currentValue = H)));
  }
  var Ki, Ja;
  function Ji(t) {
    if (Ki === void 0)
      try {
        throw Error();
      } catch (n) {
        var e = n.stack.trim().match(/\n( *(at )?)/);
        ((Ki = (e && e[1]) || ""),
          (Ja =
            -1 <
            n.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < n.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      Ki +
      t +
      Ja
    );
  }
  var Wa = !1;
  function Fa(t, e) {
    if (!t || Wa) return "";
    Wa = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var B = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(B.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(B, []);
                } catch (w) {
                  var E = w;
                }
                Reflect.construct(t, [], B);
              } else {
                try {
                  B.call();
                } catch (w) {
                  E = w;
                }
                t.call(B.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (w) {
                E = w;
              }
              (B = t()) &&
                typeof B.catch == "function" &&
                B.catch(function () {});
            }
          } catch (w) {
            if (w && E && typeof w.stack == "string") return [w.stack, E.stack];
          }
          return [null, null];
        },
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var s = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name",
      );
      s &&
        s.configurable &&
        Object.defineProperty(l.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var u = l.DetermineComponentFrameRoot(),
        f = u[0],
        d = u[1];
      if (f && d) {
        var _ = f.split(`
`),
          S = d.split(`
`);
        for (
          s = l = 0;
          l < _.length && !_[l].includes("DetermineComponentFrameRoot");
        )
          l++;
        for (; s < S.length && !S[s].includes("DetermineComponentFrameRoot"); )
          s++;
        if (l === _.length || s === S.length)
          for (
            l = _.length - 1, s = S.length - 1;
            1 <= l && 0 <= s && _[l] !== S[s];
          )
            s--;
        for (; 1 <= l && 0 <= s; l--, s--)
          if (_[l] !== S[s]) {
            if (l !== 1 || s !== 1)
              do
                if ((l--, s--, 0 > s || _[l] !== S[s])) {
                  var O =
                    `
` + _[l].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      O.includes("<anonymous>") &&
                      (O = O.replace("<anonymous>", t.displayName)),
                    O
                  );
                }
              while (1 <= l && 0 <= s);
            break;
          }
      }
    } finally {
      ((Wa = !1), (Error.prepareStackTrace = n));
    }
    return (n = t ? t.displayName || t.name : "") ? Ji(n) : "";
  }
  function Gl(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Ji(t.type);
      case 16:
        return Ji("Lazy");
      case 13:
        return t.child !== e && e !== null
          ? Ji("Suspense Fallback")
          : Ji("Suspense");
      case 19:
        return Ji("SuspenseList");
      case 0:
      case 15:
        return Fa(t.type, !1);
      case 11:
        return Fa(t.type.render, !1);
      case 1:
        return Fa(t.type, !0);
      case 31:
        return Ji("Activity");
      default:
        return "";
    }
  }
  function oa(t) {
    try {
      var e = "",
        n = null;
      do ((e += Gl(t, n)), (n = t), (t = t.return));
      while (t);
      return e;
    } catch (l) {
      return (
        `
Error generating stack: ` +
        l.message +
        `
` +
        l.stack
      );
    }
  }
  var Yl = Object.prototype.hasOwnProperty,
    Ia = R.unstable_scheduleCallback,
    sa = R.unstable_cancelCallback,
    Fo = R.unstable_shouldYield,
    Io = R.unstable_requestPaint,
    Be = R.unstable_now,
    Eu = R.unstable_getCurrentPriorityLevel,
    $a = R.unstable_ImmediatePriority,
    Xl = R.unstable_UserBlockingPriority,
    ua = R.unstable_NormalPriority,
    Mu = R.unstable_LowPriority,
    kl = R.unstable_IdlePriority,
    $o = R.log,
    Lu = R.unstable_setDisableYieldValue,
    Sn = null,
    Me = null;
  function yi(t) {
    if (
      (typeof $o == "function" && Lu(t),
      Me && typeof Me.setStrictMode == "function")
    )
      try {
        Me.setStrictMode(Sn, t);
      } catch {}
  }
  var Ze = Math.clz32 ? Math.clz32 : Au,
    ra = Math.log,
    wu = Math.LN2;
  function Au(t) {
    return ((t >>>= 0), t === 0 ? 32 : (31 - ((ra(t) / wu) | 0)) | 0);
  }
  var ca = 256,
    fa = 262144,
    ha = 4194304;
  function Wi(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
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
        return t & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
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
        return t;
    }
  }
  function tl(t, e, n) {
    var l = t.pendingLanes;
    if (l === 0) return 0;
    var s = 0,
      u = t.suspendedLanes,
      f = t.pingedLanes;
    t = t.warmLanes;
    var d = l & 134217727;
    return (
      d !== 0
        ? ((l = d & ~u),
          l !== 0
            ? (s = Wi(l))
            : ((f &= d),
              f !== 0
                ? (s = Wi(f))
                : n || ((n = d & ~t), n !== 0 && (s = Wi(n)))))
        : ((d = l & ~u),
          d !== 0
            ? (s = Wi(d))
            : f !== 0
              ? (s = Wi(f))
              : n || ((n = l & ~t), n !== 0 && (s = Wi(n)))),
      s === 0
        ? 0
        : e !== 0 &&
            e !== s &&
            (e & u) === 0 &&
            ((u = s & -s),
            (n = e & -e),
            u >= n || (u === 32 && (n & 4194048) !== 0))
          ? e
          : s
    );
  }
  function da(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function Ou(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
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
        return e + 5e3;
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
  function ts() {
    var t = ha;
    return ((ha <<= 1), (ha & 62914560) === 0 && (ha = 4194304), t);
  }
  function Vl(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
  }
  function Fi(t, e) {
    ((t.pendingLanes |= e),
      e !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0)));
  }
  function Cu(t, e, n, l, s, u) {
    var f = t.pendingLanes;
    ((t.pendingLanes = n),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= n),
      (t.entangledLanes &= n),
      (t.errorRecoveryDisabledLanes &= n),
      (t.shellSuspendCounter = 0));
    var d = t.entanglements,
      _ = t.expirationTimes,
      S = t.hiddenUpdates;
    for (n = f & ~n; 0 < n; ) {
      var O = 31 - Ze(n),
        B = 1 << O;
      ((d[O] = 0), (_[O] = -1));
      var E = S[O];
      if (E !== null)
        for (S[O] = null, O = 0; O < E.length; O++) {
          var w = E[O];
          w !== null && (w.lane &= -536870913);
        }
      n &= ~B;
    }
    (l !== 0 && es(t, l, 0),
      u !== 0 && s === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(f & ~e)));
  }
  function es(t, e, n) {
    ((t.pendingLanes |= e), (t.suspendedLanes &= ~e));
    var l = 31 - Ze(e);
    ((t.entangledLanes |= e),
      (t.entanglements[l] = t.entanglements[l] | 1073741824 | (n & 261930)));
  }
  function is(t, e) {
    var n = (t.entangledLanes |= e);
    for (t = t.entanglements; n; ) {
      var l = 31 - Ze(n),
        s = 1 << l;
      ((s & e) | (t[l] & e) && (t[l] |= e), (n &= ~s));
    }
  }
  function ns(t, e) {
    var n = e & -e;
    return (
      (n = (n & 42) !== 0 ? 1 : je(n)),
      (n & (t.suspendedLanes | e)) !== 0 ? 0 : n
    );
  }
  function je(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
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
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function $(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Ql() {
    var t = q.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : gd(t.type));
  }
  function Pl(t, e) {
    var n = q.p;
    try {
      return ((q.p = t), e());
    } finally {
      q.p = n;
    }
  }
  var bi = Math.random().toString(36).slice(2),
    he = "__reactFiber$" + bi,
    Se = "__reactProps$" + bi,
    Ii = "__reactContainer$" + bi,
    Ci = "__reactEvents$" + bi,
    as = "__reactListeners$" + bi,
    Nu = "__reactHandles$" + bi,
    ls = "__reactResources$" + bi,
    ma = "__reactMarker$" + bi;
  function Kl(t) {
    (delete t[he], delete t[Se], delete t[Ci], delete t[as], delete t[Nu]);
  }
  function $i(t) {
    var e = t[he];
    if (e) return e;
    for (var n = t.parentNode; n; ) {
      if ((e = n[Ii] || n[he])) {
        if (
          ((n = e.alternate),
          e.child !== null || (n !== null && n.child !== null))
        )
          for (t = id(t); t !== null; ) {
            if ((n = t[he])) return n;
            t = id(t);
          }
        return e;
      }
      ((t = n), (n = t.parentNode));
    }
    return null;
  }
  function Tn(t) {
    if ((t = t[he] || t[Ii])) {
      var e = t.tag;
      if (
        e === 5 ||
        e === 6 ||
        e === 13 ||
        e === 31 ||
        e === 26 ||
        e === 27 ||
        e === 3
      )
        return t;
    }
    return null;
  }
  function Ni(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(b(33));
  }
  function zn(t) {
    var e = t[ls];
    return (
      e ||
        (e = t[ls] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      e
    );
  }
  function de(t) {
    t[ma] = !0;
  }
  var os = new Set(),
    ss = {};
  function tn(t, e) {
    (Di(t, e), Di(t + "Capture", e));
  }
  function Di(t, e) {
    for (ss[t] = e, t = 0; t < e.length; t++) os.add(e[t]);
  }
  var _a = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    Jl = {},
    Wl = {};
  function pa(t) {
    return Yl.call(Wl, t)
      ? !0
      : Yl.call(Jl, t)
        ? !1
        : _a.test(t)
          ? (Wl[t] = !0)
          : ((Jl[t] = !0), !1);
  }
  function bt(t, e, n) {
    if (pa(e))
      if (n === null) t.removeAttribute(e);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var l = e.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + n);
      }
  }
  function qt(t, e, n) {
    if (n === null) t.removeAttribute(e);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + n);
    }
  }
  function qe(t, e, n, l) {
    if (l === null) t.removeAttribute(n);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(n);
          return;
      }
      t.setAttributeNS(e, n, "" + l);
    }
  }
  function ge(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function en(t) {
    var e = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (e === "checkbox" || e === "radio")
    );
  }
  function Fl(t, e, n) {
    var l = Object.getOwnPropertyDescriptor(t.constructor.prototype, e);
    if (
      !t.hasOwnProperty(e) &&
      typeof l < "u" &&
      typeof l.get == "function" &&
      typeof l.set == "function"
    ) {
      var s = l.get,
        u = l.set;
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return s.call(this);
          },
          set: function (f) {
            ((n = "" + f), u.call(this, f));
          },
        }),
        Object.defineProperty(t, e, { enumerable: l.enumerable }),
        {
          getValue: function () {
            return n;
          },
          setValue: function (f) {
            n = "" + f;
          },
          stopTracking: function () {
            ((t._valueTracker = null), delete t[e]);
          },
        }
      );
    }
  }
  function ut(t) {
    if (!t._valueTracker) {
      var e = en(t) ? "checked" : "value";
      t._valueTracker = Fl(t, e, "" + t[e]);
    }
  }
  function $t(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(),
      l = "";
    return (
      t && (l = en(t) ? (t.checked ? "true" : "false") : t.value),
      (t = l),
      t !== n ? (e.setValue(t), !0) : !1
    );
  }
  function En(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var el = /[\n"\\]/g;
  function Jt(t) {
    return t.replace(el, function (e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function Il(t, e, n, l, s, u, f, d) {
    ((t.name = ""),
      f != null &&
      typeof f != "function" &&
      typeof f != "symbol" &&
      typeof f != "boolean"
        ? (t.type = f)
        : t.removeAttribute("type"),
      e != null
        ? f === "number"
          ? ((e === 0 && t.value === "") || t.value != e) &&
            (t.value = "" + ge(e))
          : t.value !== "" + ge(e) && (t.value = "" + ge(e))
        : (f !== "submit" && f !== "reset") || t.removeAttribute("value"),
      e != null
        ? xi(t, f, ge(e))
        : n != null
          ? xi(t, f, ge(n))
          : l != null && t.removeAttribute("value"),
      s == null && u != null && (t.defaultChecked = !!u),
      s != null &&
        (t.checked = s && typeof s != "function" && typeof s != "symbol"),
      d != null &&
      typeof d != "function" &&
      typeof d != "symbol" &&
      typeof d != "boolean"
        ? (t.name = "" + ge(d))
        : t.removeAttribute("name"));
  }
  function va(t, e, n, l, s, u, f, d) {
    if (
      (u != null &&
        typeof u != "function" &&
        typeof u != "symbol" &&
        typeof u != "boolean" &&
        (t.type = u),
      e != null || n != null)
    ) {
      if (!((u !== "submit" && u !== "reset") || e != null)) {
        ut(t);
        return;
      }
      ((n = n != null ? "" + ge(n) : ""),
        (e = e != null ? "" + ge(e) : n),
        d || e === t.value || (t.value = e),
        (t.defaultValue = e));
    }
    ((l = l ?? s),
      (l = typeof l != "function" && typeof l != "symbol" && !!l),
      (t.checked = d ? t.checked : !!l),
      (t.defaultChecked = !!l),
      f != null &&
        typeof f != "function" &&
        typeof f != "symbol" &&
        typeof f != "boolean" &&
        (t.name = f),
      ut(t));
  }
  function xi(t, e, n) {
    (e === "number" && En(t.ownerDocument) === t) ||
      t.defaultValue === "" + n ||
      (t.defaultValue = "" + n);
  }
  function Vt(t, e, n, l) {
    if (((t = t.options), e)) {
      e = {};
      for (var s = 0; s < n.length; s++) e["$" + n[s]] = !0;
      for (n = 0; n < t.length; n++)
        ((s = e.hasOwnProperty("$" + t[n].value)),
          t[n].selected !== s && (t[n].selected = s),
          s && l && (t[n].defaultSelected = !0));
    } else {
      for (n = "" + ge(n), e = null, s = 0; s < t.length; s++) {
        if (t[s].value === n) {
          ((t[s].selected = !0), l && (t[s].defaultSelected = !0));
          return;
        }
        e !== null || t[s].disabled || (e = t[s]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function Bi(t, e, n) {
    if (
      e != null &&
      ((e = "" + ge(e)), e !== t.value && (t.value = e), n == null)
    ) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = n != null ? "" + ge(n) : "";
  }
  function Mn(t, e, n, l) {
    if (e == null) {
      if (l != null) {
        if (n != null) throw Error(b(92));
        if (fe(l)) {
          if (1 < l.length) throw Error(b(93));
          l = l[0];
        }
        n = l;
      }
      (n == null && (n = ""), (e = n));
    }
    ((n = ge(e)),
      (t.defaultValue = n),
      (l = t.textContent),
      l === n && l !== "" && l !== null && (t.value = l),
      ut(t));
  }
  function si(t, e) {
    if (e) {
      var n = t.firstChild;
      if (n && n === t.lastChild && n.nodeType === 3) {
        n.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var $l = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function Ln(t, e, n) {
    var l = e.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === ""
      ? l
        ? t.setProperty(e, "")
        : e === "float"
          ? (t.cssFloat = "")
          : (t[e] = "")
      : l
        ? t.setProperty(e, n)
        : typeof n != "number" || n === 0 || $l.has(e)
          ? e === "float"
            ? (t.cssFloat = n)
            : (t[e] = ("" + n).trim())
          : (t[e] = n + "px");
  }
  function il(t, e, n) {
    if (e != null && typeof e != "object") throw Error(b(62));
    if (((t = t.style), n != null)) {
      for (var l in n)
        !n.hasOwnProperty(l) ||
          (e != null && e.hasOwnProperty(l)) ||
          (l.indexOf("--") === 0
            ? t.setProperty(l, "")
            : l === "float"
              ? (t.cssFloat = "")
              : (t[l] = ""));
      for (var s in e)
        ((l = e[s]), e.hasOwnProperty(s) && n[s] !== l && Ln(t, s, l));
    } else for (var u in e) e.hasOwnProperty(u) && Ln(t, u, e[u]);
  }
  function ga(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
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
  var nl = new Map([
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
    to =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function wn(t) {
    return to.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  function Ge() {}
  var al = null;
  function ya(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var An = null,
    lt = null;
  function Fe(t) {
    var e = Tn(t);
    if (e && (t = e.stateNode)) {
      var n = t[Se] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case "input":
          if (
            (Il(
              t,
              n.value,
              n.defaultValue,
              n.defaultValue,
              n.checked,
              n.defaultChecked,
              n.type,
              n.name,
            ),
            (e = n.name),
            n.type === "radio" && e != null)
          ) {
            for (n = t; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                'input[name="' + Jt("" + e) + '"][type="radio"]',
              ),
                e = 0;
              e < n.length;
              e++
            ) {
              var l = n[e];
              if (l !== t && l.form === t.form) {
                var s = l[Se] || null;
                if (!s) throw Error(b(90));
                Il(
                  l,
                  s.value,
                  s.defaultValue,
                  s.defaultValue,
                  s.checked,
                  s.defaultChecked,
                  s.type,
                  s.name,
                );
              }
            }
            for (e = 0; e < n.length; e++)
              ((l = n[e]), l.form === t.form && $t(l));
          }
          break t;
        case "textarea":
          Bi(t, n.value, n.defaultValue);
          break t;
        case "select":
          ((e = n.value), e != null && Vt(t, !!n.multiple, e, !1));
      }
    }
  }
  var Rt = !1;
  function eo(t, e, n) {
    if (Rt) return t(e, n);
    Rt = !0;
    try {
      var l = t(e);
      return l;
    } finally {
      if (
        ((Rt = !1),
        (An !== null || lt !== null) &&
          (nu(), An && ((e = An), (t = lt), (lt = An = null), Fe(e), t)))
      )
        for (e = 0; e < t.length; e++) Fe(t[e]);
    }
  }
  function nn(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var l = n[Se] || null;
    if (l === null) return null;
    n = l[e];
    t: switch (e) {
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
        ((l = !l.disabled) ||
          ((t = t.type),
          (l = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !l));
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (n && typeof n != "function") throw Error(b(231, e, typeof n));
    return n;
  }
  var Ie = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    ba = !1;
  if (Ie)
    try {
      var $e = {};
      (Object.defineProperty($e, "passive", {
        get: function () {
          ba = !0;
        },
      }),
        window.addEventListener("test", $e, $e),
        window.removeEventListener("test", $e, $e));
    } catch {
      ba = !1;
    }
  var ui = null,
    an = null,
    ie = null;
  function Zi() {
    if (ie) return ie;
    var t,
      e = an,
      n = e.length,
      l,
      s = "value" in ui ? ui.value : ui.textContent,
      u = s.length;
    for (t = 0; t < n && e[t] === s[t]; t++);
    var f = n - t;
    for (l = 1; l <= f && e[n - l] === s[u - l]; l++);
    return (ie = s.slice(t, 1 < l ? 1 - l : void 0));
  }
  function xa(t) {
    var e = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
        : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function Sa() {
    return !0;
  }
  function us() {
    return !1;
  }
  function Le(t) {
    function e(n, l, s, u, f) {
      ((this._reactName = n),
        (this._targetInst = s),
        (this.type = l),
        (this.nativeEvent = u),
        (this.target = f),
        (this.currentTarget = null));
      for (var d in t)
        t.hasOwnProperty(d) && ((n = t[d]), (this[d] = n ? n(u) : u[d]));
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? Sa
          : us),
        (this.isPropagationStopped = us),
        this
      );
    }
    return (
      X(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Sa));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Sa));
        },
        persist: function () {},
        isPersistent: Sa,
      }),
      e
    );
  }
  var Si = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    ll = Le(Si),
    On = X({}, Si, { view: 0, detail: 0 }),
    zt = Le(On),
    io,
    Re,
    Ti,
    Ta = X({}, On, {
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
      getModifierState: uo,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== Ti &&
              (Ti && t.type === "mousemove"
                ? ((io = t.screenX - Ti.screenX), (Re = t.screenY - Ti.screenY))
                : (Re = io = 0),
              (Ti = t)),
            io);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : Re;
      },
    }),
    rs = Le(Ta),
    no = X({}, Ta, { dataTransfer: 0 }),
    Du = Le(no),
    cs = X({}, On, { relatedTarget: 0 }),
    ao = Le(cs),
    Bu = X({}, Si, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    lo = Le(Bu),
    Zu = X({}, Si, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    ri = Le(Zu),
    Ru = X({}, Si, { data: 0 }),
    oo = Le(Ru),
    Ri = {
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
    fs = {
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
    hs = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function so(t) {
    var e = this.nativeEvent;
    return e.getModifierState
      ? e.getModifierState(t)
      : (t = hs[t])
        ? !!e[t]
        : !1;
  }
  function uo() {
    return so;
  }
  var ds = X({}, On, {
      key: function (t) {
        if (t.key) {
          var e = Ri[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress"
          ? ((t = xa(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
            ? fs[t.keyCode] || "Unidentified"
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
      getModifierState: uo,
      charCode: function (t) {
        return t.type === "keypress" ? xa(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? xa(t)
          : t.type === "keydown" || t.type === "keyup"
            ? t.keyCode
            : 0;
      },
    }),
    ms = Le(ds),
    Uu = X({}, Ta, {
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
    _s = Le(Uu),
    ro = X({}, On, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: uo,
    }),
    Hu = Le(ro),
    ps = X({}, Si, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    vs = Le(ps),
    ol = X({}, Ta, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
            ? -t.wheelDeltaX
            : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
            ? -t.wheelDeltaY
            : "wheelDelta" in t
              ? -t.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    ln = Le(ol),
    ju = X({}, Si, { newState: 0, oldState: 0 }),
    za = Le(ju),
    Ye = [9, 13, 27, 32],
    sl = Ie && "CompositionEvent" in window,
    Cn = null;
  Ie && "documentMode" in document && (Cn = document.documentMode);
  var qu = Ie && "TextEvent" in window && !Cn,
    ul = Ie && (!sl || (Cn && 8 < Cn && 11 >= Cn)),
    rl = " ",
    gs = !1;
  function ys(t, e) {
    switch (t) {
      case "keyup":
        return Ye.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function co(t) {
    return (
      (t = t.detail),
      typeof t == "object" && "data" in t ? t.data : null
    );
  }
  var Nn = !1;
  function ti(t, e) {
    switch (t) {
      case "compositionend":
        return co(e);
      case "keypress":
        return e.which !== 32 ? null : ((gs = !0), rl);
      case "textInput":
        return ((t = e.data), t === rl && gs ? null : t);
      default:
        return null;
    }
  }
  function Dn(t, e) {
    if (Nn)
      return t === "compositionend" || (!sl && ys(t, e))
        ? ((t = Zi()), (ie = an = ui = null), (Nn = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return ul && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var Gu = {
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
  function ci(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!Gu[t.type] : e === "textarea";
  }
  function bs(t, e, n, l) {
    (An ? (lt ? lt.push(l) : (lt = [l])) : (An = l),
      (e = cu(e, "onChange")),
      0 < e.length &&
        ((n = new ll("onChange", "change", null, n, l)),
        t.push({ event: n, listeners: e })));
  }
  var fi = null,
    Ea = null;
  function Ma(t) {
    Yh(t, 0);
  }
  function La(t) {
    var e = Ni(t);
    if ($t(e)) return t;
  }
  function wa(t, e) {
    if (t === "change") return e;
  }
  var xs = !1;
  if (Ie) {
    var hi;
    if (Ie) {
      var Bn = "oninput" in document;
      if (!Bn) {
        var Ss = document.createElement("div");
        (Ss.setAttribute("oninput", "return;"),
          (Bn = typeof Ss.oninput == "function"));
      }
      hi = Bn;
    } else hi = !1;
    xs = hi && (!document.documentMode || 9 < document.documentMode);
  }
  function cl() {
    fi && (fi.detachEvent("onpropertychange", Ts), (Ea = fi = null));
  }
  function Ts(t) {
    if (t.propertyName === "value" && La(Ea)) {
      var e = [];
      (bs(e, Ea, t, ya(t)), eo(Ma, e));
    }
  }
  function zi(t, e, n) {
    t === "focusin"
      ? (cl(), (fi = e), (Ea = n), fi.attachEvent("onpropertychange", Ts))
      : t === "focusout" && cl();
  }
  function Yu(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return La(Ea);
  }
  function Zn(t, e) {
    if (t === "click") return La(e);
  }
  function Xu(t, e) {
    if (t === "input" || t === "change") return La(e);
  }
  function Ei(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var Te = typeof Object.is == "function" ? Object.is : Ei;
  function Rn(t, e) {
    if (Te(t, e)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof e != "object" ||
      e === null
    )
      return !1;
    var n = Object.keys(t),
      l = Object.keys(e);
    if (n.length !== l.length) return !1;
    for (l = 0; l < n.length; l++) {
      var s = n[l];
      if (!Yl.call(e, s) || !Te(t[s], e[s])) return !1;
    }
    return !0;
  }
  function fl(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Aa(t, e) {
    var n = fl(t);
    t = 0;
    for (var l; n; ) {
      if (n.nodeType === 3) {
        if (((l = t + n.textContent.length), t <= e && l >= e))
          return { node: n, offset: e - t };
        t = l;
      }
      t: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break t;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = fl(n);
    }
  }
  function hl(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
          ? !1
          : e && e.nodeType === 3
            ? hl(t, e.parentNode)
            : "contains" in t
              ? t.contains(e)
              : t.compareDocumentPosition
                ? !!(t.compareDocumentPosition(e) & 16)
                : !1
      : !1;
  }
  function Oa(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var e = En(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var n = typeof e.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) t = e.contentWindow;
      else break;
      e = En(t.document);
    }
    return e;
  }
  function Ui(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      e &&
      ((e === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        e === "textarea" ||
        t.contentEditable === "true")
    );
  }
  var dl = Ie && "documentMode" in document && 11 >= document.documentMode,
    Hi = null,
    ml = null,
    Ca = null,
    Un = !1;
  function zs(t, e, n) {
    var l =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Un ||
      Hi == null ||
      Hi !== En(l) ||
      ((l = Hi),
      "selectionStart" in l && Ui(l)
        ? (l = { start: l.selectionStart, end: l.selectionEnd })
        : ((l = (
            (l.ownerDocument && l.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset,
          })),
      (Ca && Rn(Ca, l)) ||
        ((Ca = l),
        (l = cu(ml, "onSelect")),
        0 < l.length &&
          ((e = new ll("onSelect", "select", null, e, n)),
          t.push({ event: e, listeners: l }),
          (e.target = Hi))));
  }
  function ji(t, e) {
    var n = {};
    return (
      (n[t.toLowerCase()] = e.toLowerCase()),
      (n["Webkit" + t] = "webkit" + e),
      (n["Moz" + t] = "moz" + e),
      n
    );
  }
  var Hn = {
      animationend: ji("Animation", "AnimationEnd"),
      animationiteration: ji("Animation", "AnimationIteration"),
      animationstart: ji("Animation", "AnimationStart"),
      transitionrun: ji("Transition", "TransitionRun"),
      transitionstart: ji("Transition", "TransitionStart"),
      transitioncancel: ji("Transition", "TransitionCancel"),
      transitionend: ji("Transition", "TransitionEnd"),
    },
    _l = {},
    Es = {};
  Ie &&
    ((Es = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Hn.animationend.animation,
      delete Hn.animationiteration.animation,
      delete Hn.animationstart.animation),
    "TransitionEvent" in window || delete Hn.transitionend.transition);
  function ze(t) {
    if (_l[t]) return _l[t];
    if (!Hn[t]) return t;
    var e = Hn[t],
      n;
    for (n in e) if (e.hasOwnProperty(n) && n in Es) return (_l[t] = e[n]);
    return t;
  }
  var Na = ze("animationend"),
    Ms = ze("animationiteration"),
    Da = ze("animationstart"),
    ku = ze("transitionrun"),
    Ls = ze("transitionstart"),
    Vu = ze("transitioncancel"),
    jn = ze("transitionend"),
    ws = new Map(),
    qi =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  qi.push("scrollEnd");
  function Xe(t, e) {
    (ws.set(t, e), tn(e, [t]));
  }
  var Ba =
      typeof reportError == "function"
        ? reportError
        : function (t) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var e = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof t == "object" &&
                  t !== null &&
                  typeof t.message == "string"
                    ? String(t.message)
                    : String(t),
                error: t,
              });
              if (!window.dispatchEvent(e)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", t);
              return;
            }
            console.error(t);
          },
    ke = [],
    Ce = 0,
    pl = 0;
  function Za() {
    for (var t = Ce, e = (pl = Ce = 0); e < t; ) {
      var n = ke[e];
      ke[e++] = null;
      var l = ke[e];
      ke[e++] = null;
      var s = ke[e];
      ke[e++] = null;
      var u = ke[e];
      if (((ke[e++] = null), l !== null && s !== null)) {
        var f = l.pending;
        (f === null ? (s.next = s) : ((s.next = f.next), (f.next = s)),
          (l.pending = s));
      }
      u !== 0 && qn(n, s, u);
    }
  }
  function Gi(t, e, n, l) {
    ((ke[Ce++] = t),
      (ke[Ce++] = e),
      (ke[Ce++] = n),
      (ke[Ce++] = l),
      (pl |= l),
      (t.lanes |= l),
      (t = t.alternate),
      t !== null && (t.lanes |= l));
  }
  function fo(t, e, n, l) {
    return (Gi(t, e, n, l), Ra(t));
  }
  function di(t, e) {
    return (Gi(t, null, null, e), Ra(t));
  }
  function qn(t, e, n) {
    t.lanes |= n;
    var l = t.alternate;
    l !== null && (l.lanes |= n);
    for (var s = !1, u = t.return; u !== null; )
      ((u.childLanes |= n),
        (l = u.alternate),
        l !== null && (l.childLanes |= n),
        u.tag === 22 &&
          ((t = u.stateNode), t === null || t._visibility & 1 || (s = !0)),
        (t = u),
        (u = u.return));
    return t.tag === 3
      ? ((u = t.stateNode),
        s &&
          e !== null &&
          ((s = 31 - Ze(n)),
          (t = u.hiddenUpdates),
          (l = t[s]),
          l === null ? (t[s] = [e]) : l.push(e),
          (e.lane = n | 536870912)),
        u)
      : null;
  }
  function Ra(t) {
    if (50 < Uo) throw ((Uo = 0), (Pr = null), Error(b(185)));
    for (var e = t.return; e !== null; ) ((t = e), (e = t.return));
    return t.tag === 3 ? t.stateNode : null;
  }
  var on = {};
  function Qu(t, e, n, l) {
    ((this.tag = t),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = e),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = l),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function Ne(t, e, n, l) {
    return new Qu(t, e, n, l);
  }
  function vl(t) {
    return ((t = t.prototype), !(!t || !t.isReactComponent));
  }
  function mi(t, e) {
    var n = t.alternate;
    return (
      n === null
        ? ((n = Ne(t.tag, e, t.key, t.mode)),
          (n.elementType = t.elementType),
          (n.type = t.type),
          (n.stateNode = t.stateNode),
          (n.alternate = t),
          (t.alternate = n))
        : ((n.pendingProps = e),
          (n.type = t.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = t.flags & 65011712),
      (n.childLanes = t.childLanes),
      (n.lanes = t.lanes),
      (n.child = t.child),
      (n.memoizedProps = t.memoizedProps),
      (n.memoizedState = t.memoizedState),
      (n.updateQueue = t.updateQueue),
      (e = t.dependencies),
      (n.dependencies =
        e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
      (n.sibling = t.sibling),
      (n.index = t.index),
      (n.ref = t.ref),
      (n.refCleanup = t.refCleanup),
      n
    );
  }
  function ho(t, e) {
    t.flags &= 65011714;
    var n = t.alternate;
    return (
      n === null
        ? ((t.childLanes = 0),
          (t.lanes = e),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = n.childLanes),
          (t.lanes = n.lanes),
          (t.child = n.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = n.memoizedProps),
          (t.memoizedState = n.memoizedState),
          (t.updateQueue = n.updateQueue),
          (t.type = n.type),
          (e = n.dependencies),
          (t.dependencies =
            e === null
              ? null
              : { lanes: e.lanes, firstContext: e.firstContext })),
      t
    );
  }
  function Ua(t, e, n, l, s, u) {
    var f = 0;
    if (((l = t), typeof t == "function")) vl(t) && (f = 1);
    else if (typeof t == "string")
      f = Qm(t, n, Y.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
          ? 27
          : 5;
    else
      t: switch (t) {
        case xe:
          return (
            (t = Ne(31, n, e, s)),
            (t.elementType = xe),
            (t.lanes = u),
            t
          );
        case et:
          return sn(n.children, s, u, e);
        case Ot:
          ((f = 8), (s |= 24));
          break;
        case vt:
          return (
            (t = Ne(12, n, e, s | 2)),
            (t.elementType = vt),
            (t.lanes = u),
            t
          );
        case oe:
          return (
            (t = Ne(13, n, e, s)),
            (t.elementType = oe),
            (t.lanes = u),
            t
          );
        case Kt:
          return (
            (t = Ne(19, n, e, s)),
            (t.elementType = Kt),
            (t.lanes = u),
            t
          );
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case ct:
                f = 10;
                break t;
              case kt:
                f = 9;
                break t;
              case Pt:
                f = 11;
                break t;
              case ft:
                f = 14;
                break t;
              case se:
                ((f = 16), (l = null));
                break t;
            }
          ((f = 29),
            (n = Error(b(130, t === null ? "null" : typeof t, ""))),
            (l = null));
      }
    return (
      (e = Ne(f, n, e, s)),
      (e.elementType = t),
      (e.type = l),
      (e.lanes = u),
      e
    );
  }
  function sn(t, e, n, l) {
    return ((t = Ne(7, t, l, e)), (t.lanes = n), t);
  }
  function gl(t, e, n) {
    return ((t = Ne(6, t, null, e)), (t.lanes = n), t);
  }
  function mo(t) {
    var e = Ne(18, null, null, 0);
    return ((e.stateNode = t), e);
  }
  function _o(t, e, n) {
    return (
      (e = Ne(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = n),
      (e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      e
    );
  }
  var i = new WeakMap();
  function a(t, e) {
    if (typeof t == "object" && t !== null) {
      var n = i.get(t);
      return n !== void 0
        ? n
        : ((e = { value: t, source: e, stack: oa(e) }), i.set(t, e), e);
    }
    return { value: t, source: e, stack: oa(e) };
  }
  var o = [],
    r = 0,
    c = null,
    h = 0,
    m = [],
    y = 0,
    z = null,
    D = 1,
    k = "";
  function tt(t, e) {
    ((o[r++] = h), (o[r++] = c), (c = t), (h = e));
  }
  function mt(t, e, n) {
    ((m[y++] = D), (m[y++] = k), (m[y++] = z), (z = t));
    var l = D;
    t = k;
    var s = 32 - Ze(l) - 1;
    ((l &= ~(1 << s)), (n += 1));
    var u = 32 - Ze(e) + s;
    if (30 < u) {
      var f = s - (s % 5);
      ((u = (l & ((1 << f) - 1)).toString(32)),
        (l >>= f),
        (s -= f),
        (D = (1 << (32 - Ze(e) + s)) | (n << s) | l),
        (k = u + t));
    } else ((D = (1 << u) | (n << s) | l), (k = t));
  }
  function ye(t) {
    t.return !== null && (tt(t, 1), mt(t, 1, 0));
  }
  function ne(t) {
    for (; t === c; )
      ((c = o[--r]), (o[r] = null), (h = o[--r]), (o[r] = null));
    for (; t === z; )
      ((z = m[--y]),
        (m[y] = null),
        (k = m[--y]),
        (m[y] = null),
        (D = m[--y]),
        (m[y] = null));
  }
  function Ue(t, e) {
    ((m[y++] = D),
      (m[y++] = k),
      (m[y++] = z),
      (D = e.id),
      (k = e.overflow),
      (z = t));
  }
  var Ct = null,
    Nt = null,
    xt = !1,
    Yi = null,
    Ve = !1,
    yl = Error(b(519));
  function Xi(t) {
    var e = Error(
      b(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        "",
      ),
    );
    throw (Ha(a(e, t)), yl);
  }
  function po(t) {
    var e = t.stateNode,
      n = t.type,
      l = t.memoizedProps;
    switch (((e[he] = t), (e[Se] = l), n)) {
      case "dialog":
        (Tt("cancel", e), Tt("close", e));
        break;
      case "iframe":
      case "object":
      case "embed":
        Tt("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < jo.length; n++) Tt(jo[n], e);
        break;
      case "source":
        Tt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        (Tt("error", e), Tt("load", e));
        break;
      case "details":
        Tt("toggle", e);
        break;
      case "input":
        (Tt("invalid", e),
          va(
            e,
            l.value,
            l.defaultValue,
            l.checked,
            l.defaultChecked,
            l.type,
            l.name,
            !0,
          ));
        break;
      case "select":
        Tt("invalid", e);
        break;
      case "textarea":
        (Tt("invalid", e), Mn(e, l.value, l.defaultValue, l.children));
    }
    ((n = l.children),
      (typeof n != "string" && typeof n != "number" && typeof n != "bigint") ||
      e.textContent === "" + n ||
      l.suppressHydrationWarning === !0 ||
      Qh(e.textContent, n)
        ? (l.popover != null && (Tt("beforetoggle", e), Tt("toggle", e)),
          l.onScroll != null && Tt("scroll", e),
          l.onScrollEnd != null && Tt("scrollend", e),
          l.onClick != null && (e.onclick = Ge),
          (e = !0))
        : (e = !1),
      e || Xi(t, !0));
  }
  function ee(t) {
    for (Ct = t.return; Ct; )
      switch (Ct.tag) {
        case 5:
        case 31:
        case 13:
          Ve = !1;
          return;
        case 27:
        case 3:
          Ve = !0;
          return;
        default:
          Ct = Ct.return;
      }
  }
  function Mi(t) {
    if (t !== Ct) return !1;
    if (!xt) return (ee(t), (xt = !0), !1);
    var e = t.tag,
      n;
    if (
      ((n = e !== 3 && e !== 27) &&
        ((n = e === 5) &&
          ((n = t.type),
          (n =
            !(n !== "form" && n !== "button") || uc(t.type, t.memoizedProps))),
        (n = !n)),
      n && Nt && Xi(t),
      ee(t),
      e === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(b(317));
      Nt = ed(t);
    } else if (e === 31) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(b(317));
      Nt = ed(t);
    } else
      e === 27
        ? ((e = Nt), ta(t.type) ? ((t = dc), (dc = null), (Nt = t)) : (Nt = e))
        : (Nt = Ct ? pi(t.stateNode.nextSibling) : null);
    return !0;
  }
  function un() {
    ((Nt = Ct = null), (xt = !1));
  }
  function vo() {
    var t = Yi;
    return (
      t !== null &&
        (Je === null ? (Je = t) : Je.push.apply(Je, t), (Yi = null)),
      t
    );
  }
  function Ha(t) {
    Yi === null ? (Yi = [t]) : Yi.push(t);
  }
  var ja = p(null),
    ki = null,
    Li = null;
  function Gn(t, e, n) {
    (j(ja, e._currentValue), (e._currentValue = n));
  }
  function rn(t) {
    ((t._currentValue = ja.current), A(ja));
  }
  function Pu(t, e, n) {
    for (; t !== null; ) {
      var l = t.alternate;
      if (
        ((t.childLanes & e) !== e
          ? ((t.childLanes |= e), l !== null && (l.childLanes |= e))
          : l !== null && (l.childLanes & e) !== e && (l.childLanes |= e),
        t === n)
      )
        break;
      t = t.return;
    }
  }
  function Ku(t, e, n, l) {
    var s = t.child;
    for (s !== null && (s.return = t); s !== null; ) {
      var u = s.dependencies;
      if (u !== null) {
        var f = s.child;
        u = u.firstContext;
        t: for (; u !== null; ) {
          var d = u;
          u = s;
          for (var _ = 0; _ < e.length; _++)
            if (d.context === e[_]) {
              ((u.lanes |= n),
                (d = u.alternate),
                d !== null && (d.lanes |= n),
                Pu(u.return, n, t),
                l || (f = null));
              break t;
            }
          u = d.next;
        }
      } else if (s.tag === 18) {
        if (((f = s.return), f === null)) throw Error(b(341));
        ((f.lanes |= n),
          (u = f.alternate),
          u !== null && (u.lanes |= n),
          Pu(f, n, t),
          (f = null));
      } else f = s.child;
      if (f !== null) f.return = s;
      else
        for (f = s; f !== null; ) {
          if (f === t) {
            f = null;
            break;
          }
          if (((s = f.sibling), s !== null)) {
            ((s.return = f.return), (f = s));
            break;
          }
          f = f.return;
        }
      s = f;
    }
  }
  function bl(t, e, n, l) {
    t = null;
    for (var s = e, u = !1; s !== null; ) {
      if (!u) {
        if ((s.flags & 524288) !== 0) u = !0;
        else if ((s.flags & 262144) !== 0) break;
      }
      if (s.tag === 10) {
        var f = s.alternate;
        if (f === null) throw Error(b(387));
        if (((f = f.memoizedProps), f !== null)) {
          var d = s.type;
          Te(s.pendingProps.value, f.value) ||
            (t !== null ? t.push(d) : (t = [d]));
        }
      } else if (s === pt.current) {
        if (((f = s.alternate), f === null)) throw Error(b(387));
        f.memoizedState.memoizedState !== s.memoizedState.memoizedState &&
          (t !== null ? t.push(ko) : (t = [ko]));
      }
      s = s.return;
    }
    (t !== null && Ku(e, t, n, l), (e.flags |= 262144));
  }
  function As(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!Te(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function qa(t) {
    ((ki = t),
      (Li = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null));
  }
  function we(t) {
    return Oc(ki, t);
  }
  function Os(t, e) {
    return (ki === null && qa(t), Oc(t, e));
  }
  function Oc(t, e) {
    var n = e._currentValue;
    if (((e = { context: e, memoizedValue: n, next: null }), Li === null)) {
      if (t === null) throw Error(b(308));
      ((Li = e),
        (t.dependencies = { lanes: 0, firstContext: e }),
        (t.flags |= 524288));
    } else Li = Li.next = e;
    return n;
  }
  var Yd =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: function (n, l) {
                  t.push(l);
                },
              });
            this.abort = function () {
              ((e.aborted = !0),
                t.forEach(function (n) {
                  return n();
                }));
            };
          },
    Xd = R.unstable_scheduleCallback,
    kd = R.unstable_NormalPriority,
    me = {
      $$typeof: ct,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Ju() {
    return { controller: new Yd(), data: new Map(), refCount: 0 };
  }
  function go(t) {
    (t.refCount--,
      t.refCount === 0 &&
        Xd(kd, function () {
          t.controller.abort();
        }));
  }
  var yo = null,
    Wu = 0,
    xl = 0,
    Sl = null;
  function Vd(t, e) {
    if (yo === null) {
      var n = (yo = []);
      ((Wu = 0),
        (xl = $r()),
        (Sl = {
          status: "pending",
          value: void 0,
          then: function (l) {
            n.push(l);
          },
        }));
    }
    return (Wu++, e.then(Cc, Cc), e);
  }
  function Cc() {
    if (--Wu === 0 && yo !== null) {
      Sl !== null && (Sl.status = "fulfilled");
      var t = yo;
      ((yo = null), (xl = 0), (Sl = null));
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function Qd(t, e) {
    var n = [],
      l = {
        status: "pending",
        value: null,
        reason: null,
        then: function (s) {
          n.push(s);
        },
      };
    return (
      t.then(
        function () {
          ((l.status = "fulfilled"), (l.value = e));
          for (var s = 0; s < n.length; s++) (0, n[s])(e);
        },
        function (s) {
          for (l.status = "rejected", l.reason = s, s = 0; s < n.length; s++)
            (0, n[s])(void 0);
        },
      ),
      l
    );
  }
  var Nc = M.S;
  M.S = function (t, e) {
    ((ph = Be()),
      typeof e == "object" &&
        e !== null &&
        typeof e.then == "function" &&
        Vd(t, e),
      Nc !== null && Nc(t, e));
  };
  var Ga = p(null);
  function Fu() {
    var t = Ga.current;
    return t !== null ? t : Qt.pooledCache;
  }
  function Cs(t, e) {
    e === null ? j(Ga, Ga.current) : j(Ga, e.pool);
  }
  function Dc() {
    var t = Fu();
    return t === null ? null : { parent: me._currentValue, pool: t };
  }
  var Tl = Error(b(460)),
    Iu = Error(b(474)),
    Ns = Error(b(542)),
    Ds = { then: function () {} };
  function Bc(t) {
    return ((t = t.status), t === "fulfilled" || t === "rejected");
  }
  function Zc(t, e, n) {
    switch (
      ((n = t[n]),
      n === void 0 ? t.push(e) : n !== e && (e.then(Ge, Ge), (e = n)),
      e.status)
    ) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw ((t = e.reason), Uc(t), t);
      default:
        if (typeof e.status == "string") e.then(Ge, Ge);
        else {
          if (((t = Qt), t !== null && 100 < t.shellSuspendCounter))
            throw Error(b(482));
          ((t = e),
            (t.status = "pending"),
            t.then(
              function (l) {
                if (e.status === "pending") {
                  var s = e;
                  ((s.status = "fulfilled"), (s.value = l));
                }
              },
              function (l) {
                if (e.status === "pending") {
                  var s = e;
                  ((s.status = "rejected"), (s.reason = l));
                }
              },
            ));
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw ((t = e.reason), Uc(t), t);
        }
        throw ((Xa = e), Tl);
    }
  }
  function Ya(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function"
        ? ((Xa = n), Tl)
        : n;
    }
  }
  var Xa = null;
  function Rc() {
    if (Xa === null) throw Error(b(459));
    var t = Xa;
    return ((Xa = null), t);
  }
  function Uc(t) {
    if (t === Tl || t === Ns) throw Error(b(483));
  }
  var zl = null,
    bo = 0;
  function Bs(t) {
    var e = bo;
    return ((bo += 1), zl === null && (zl = []), Zc(zl, t, e));
  }
  function xo(t, e) {
    ((e = e.props.ref), (t.ref = e !== void 0 ? e : null));
  }
  function Zs(t, e) {
    throw e.$$typeof === st
      ? Error(b(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(
          b(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t,
          ),
        ));
  }
  function Hc(t) {
    function e(g, v) {
      if (t) {
        var x = g.deletions;
        x === null ? ((g.deletions = [v]), (g.flags |= 16)) : x.push(v);
      }
    }
    function n(g, v) {
      if (!t) return null;
      for (; v !== null; ) (e(g, v), (v = v.sibling));
      return null;
    }
    function l(g) {
      for (var v = new Map(); g !== null; )
        (g.key !== null ? v.set(g.key, g) : v.set(g.index, g), (g = g.sibling));
      return v;
    }
    function s(g, v) {
      return ((g = mi(g, v)), (g.index = 0), (g.sibling = null), g);
    }
    function u(g, v, x) {
      return (
        (g.index = x),
        t
          ? ((x = g.alternate),
            x !== null
              ? ((x = x.index), x < v ? ((g.flags |= 67108866), v) : x)
              : ((g.flags |= 67108866), v))
          : ((g.flags |= 1048576), v)
      );
    }
    function f(g) {
      return (t && g.alternate === null && (g.flags |= 67108866), g);
    }
    function d(g, v, x, N) {
      return v === null || v.tag !== 6
        ? ((v = gl(x, g.mode, N)), (v.return = g), v)
        : ((v = s(v, x)), (v.return = g), v);
    }
    function _(g, v, x, N) {
      var it = x.type;
      return it === et
        ? O(g, v, x.props.children, N, x.key)
        : v !== null &&
            (v.elementType === it ||
              (typeof it == "object" &&
                it !== null &&
                it.$$typeof === se &&
                Ya(it) === v.type))
          ? ((v = s(v, x.props)), xo(v, x), (v.return = g), v)
          : ((v = Ua(x.type, x.key, x.props, null, g.mode, N)),
            xo(v, x),
            (v.return = g),
            v);
    }
    function S(g, v, x, N) {
      return v === null ||
        v.tag !== 4 ||
        v.stateNode.containerInfo !== x.containerInfo ||
        v.stateNode.implementation !== x.implementation
        ? ((v = _o(x, g.mode, N)), (v.return = g), v)
        : ((v = s(v, x.children || [])), (v.return = g), v);
    }
    function O(g, v, x, N, it) {
      return v === null || v.tag !== 7
        ? ((v = sn(x, g.mode, N, it)), (v.return = g), v)
        : ((v = s(v, x)), (v.return = g), v);
    }
    function B(g, v, x) {
      if (
        (typeof v == "string" && v !== "") ||
        typeof v == "number" ||
        typeof v == "bigint"
      )
        return ((v = gl("" + v, g.mode, x)), (v.return = g), v);
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case wt:
            return (
              (x = Ua(v.type, v.key, v.props, null, g.mode, x)),
              xo(x, v),
              (x.return = g),
              x
            );
          case gt:
            return ((v = _o(v, g.mode, x)), (v.return = g), v);
          case se:
            return ((v = Ya(v)), B(g, v, x));
        }
        if (fe(v) || ht(v))
          return ((v = sn(v, g.mode, x, null)), (v.return = g), v);
        if (typeof v.then == "function") return B(g, Bs(v), x);
        if (v.$$typeof === ct) return B(g, Os(g, v), x);
        Zs(g, v);
      }
      return null;
    }
    function E(g, v, x, N) {
      var it = v !== null ? v.key : null;
      if (
        (typeof x == "string" && x !== "") ||
        typeof x == "number" ||
        typeof x == "bigint"
      )
        return it !== null ? null : d(g, v, "" + x, N);
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case wt:
            return x.key === it ? _(g, v, x, N) : null;
          case gt:
            return x.key === it ? S(g, v, x, N) : null;
          case se:
            return ((x = Ya(x)), E(g, v, x, N));
        }
        if (fe(x) || ht(x)) return it !== null ? null : O(g, v, x, N, null);
        if (typeof x.then == "function") return E(g, v, Bs(x), N);
        if (x.$$typeof === ct) return E(g, v, Os(g, x), N);
        Zs(g, x);
      }
      return null;
    }
    function w(g, v, x, N, it) {
      if (
        (typeof N == "string" && N !== "") ||
        typeof N == "number" ||
        typeof N == "bigint"
      )
        return ((g = g.get(x) || null), d(v, g, "" + N, it));
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case wt:
            return (
              (g = g.get(N.key === null ? x : N.key) || null),
              _(v, g, N, it)
            );
          case gt:
            return (
              (g = g.get(N.key === null ? x : N.key) || null),
              S(v, g, N, it)
            );
          case se:
            return ((N = Ya(N)), w(g, v, x, N, it));
        }
        if (fe(N) || ht(N))
          return ((g = g.get(x) || null), O(v, g, N, it, null));
        if (typeof N.then == "function") return w(g, v, x, Bs(N), it);
        if (N.$$typeof === ct) return w(g, v, x, Os(v, N), it);
        Zs(v, N);
      }
      return null;
    }
    function K(g, v, x, N) {
      for (
        var it = null, Dt = null, W = v, _t = (v = 0), Mt = null;
        W !== null && _t < x.length;
        _t++
      ) {
        W.index > _t ? ((Mt = W), (W = null)) : (Mt = W.sibling);
        var Bt = E(g, W, x[_t], N);
        if (Bt === null) {
          W === null && (W = Mt);
          break;
        }
        (t && W && Bt.alternate === null && e(g, W),
          (v = u(Bt, v, _t)),
          Dt === null ? (it = Bt) : (Dt.sibling = Bt),
          (Dt = Bt),
          (W = Mt));
      }
      if (_t === x.length) return (n(g, W), xt && tt(g, _t), it);
      if (W === null) {
        for (; _t < x.length; _t++)
          ((W = B(g, x[_t], N)),
            W !== null &&
              ((v = u(W, v, _t)),
              Dt === null ? (it = W) : (Dt.sibling = W),
              (Dt = W)));
        return (xt && tt(g, _t), it);
      }
      for (W = l(W); _t < x.length; _t++)
        ((Mt = w(W, g, _t, x[_t], N)),
          Mt !== null &&
            (t &&
              Mt.alternate !== null &&
              W.delete(Mt.key === null ? _t : Mt.key),
            (v = u(Mt, v, _t)),
            Dt === null ? (it = Mt) : (Dt.sibling = Mt),
            (Dt = Mt)));
      return (
        t &&
          W.forEach(function (la) {
            return e(g, la);
          }),
        xt && tt(g, _t),
        it
      );
    }
    function at(g, v, x, N) {
      if (x == null) throw Error(b(151));
      for (
        var it = null, Dt = null, W = v, _t = (v = 0), Mt = null, Bt = x.next();
        W !== null && !Bt.done;
        _t++, Bt = x.next()
      ) {
        W.index > _t ? ((Mt = W), (W = null)) : (Mt = W.sibling);
        var la = E(g, W, Bt.value, N);
        if (la === null) {
          W === null && (W = Mt);
          break;
        }
        (t && W && la.alternate === null && e(g, W),
          (v = u(la, v, _t)),
          Dt === null ? (it = la) : (Dt.sibling = la),
          (Dt = la),
          (W = Mt));
      }
      if (Bt.done) return (n(g, W), xt && tt(g, _t), it);
      if (W === null) {
        for (; !Bt.done; _t++, Bt = x.next())
          ((Bt = B(g, Bt.value, N)),
            Bt !== null &&
              ((v = u(Bt, v, _t)),
              Dt === null ? (it = Bt) : (Dt.sibling = Bt),
              (Dt = Bt)));
        return (xt && tt(g, _t), it);
      }
      for (W = l(W); !Bt.done; _t++, Bt = x.next())
        ((Bt = w(W, g, _t, Bt.value, N)),
          Bt !== null &&
            (t &&
              Bt.alternate !== null &&
              W.delete(Bt.key === null ? _t : Bt.key),
            (v = u(Bt, v, _t)),
            Dt === null ? (it = Bt) : (Dt.sibling = Bt),
            (Dt = Bt)));
      return (
        t &&
          W.forEach(function (n_) {
            return e(g, n_);
          }),
        xt && tt(g, _t),
        it
      );
    }
    function Xt(g, v, x, N) {
      if (
        (typeof x == "object" &&
          x !== null &&
          x.type === et &&
          x.key === null &&
          (x = x.props.children),
        typeof x == "object" && x !== null)
      ) {
        switch (x.$$typeof) {
          case wt:
            t: {
              for (var it = x.key; v !== null; ) {
                if (v.key === it) {
                  if (((it = x.type), it === et)) {
                    if (v.tag === 7) {
                      (n(g, v.sibling),
                        (N = s(v, x.props.children)),
                        (N.return = g),
                        (g = N));
                      break t;
                    }
                  } else if (
                    v.elementType === it ||
                    (typeof it == "object" &&
                      it !== null &&
                      it.$$typeof === se &&
                      Ya(it) === v.type)
                  ) {
                    (n(g, v.sibling),
                      (N = s(v, x.props)),
                      xo(N, x),
                      (N.return = g),
                      (g = N));
                    break t;
                  }
                  n(g, v);
                  break;
                } else e(g, v);
                v = v.sibling;
              }
              x.type === et
                ? ((N = sn(x.props.children, g.mode, N, x.key)),
                  (N.return = g),
                  (g = N))
                : ((N = Ua(x.type, x.key, x.props, null, g.mode, N)),
                  xo(N, x),
                  (N.return = g),
                  (g = N));
            }
            return f(g);
          case gt:
            t: {
              for (it = x.key; v !== null; ) {
                if (v.key === it)
                  if (
                    v.tag === 4 &&
                    v.stateNode.containerInfo === x.containerInfo &&
                    v.stateNode.implementation === x.implementation
                  ) {
                    (n(g, v.sibling),
                      (N = s(v, x.children || [])),
                      (N.return = g),
                      (g = N));
                    break t;
                  } else {
                    n(g, v);
                    break;
                  }
                else e(g, v);
                v = v.sibling;
              }
              ((N = _o(x, g.mode, N)), (N.return = g), (g = N));
            }
            return f(g);
          case se:
            return ((x = Ya(x)), Xt(g, v, x, N));
        }
        if (fe(x)) return K(g, v, x, N);
        if (ht(x)) {
          if (((it = ht(x)), typeof it != "function")) throw Error(b(150));
          return ((x = it.call(x)), at(g, v, x, N));
        }
        if (typeof x.then == "function") return Xt(g, v, Bs(x), N);
        if (x.$$typeof === ct) return Xt(g, v, Os(g, x), N);
        Zs(g, x);
      }
      return (typeof x == "string" && x !== "") ||
        typeof x == "number" ||
        typeof x == "bigint"
        ? ((x = "" + x),
          v !== null && v.tag === 6
            ? (n(g, v.sibling), (N = s(v, x)), (N.return = g), (g = N))
            : (n(g, v), (N = gl(x, g.mode, N)), (N.return = g), (g = N)),
          f(g))
        : n(g, v);
    }
    return function (g, v, x, N) {
      try {
        bo = 0;
        var it = Xt(g, v, x, N);
        return ((zl = null), it);
      } catch (W) {
        if (W === Tl || W === Ns) throw W;
        var Dt = Ne(29, W, null, g.mode);
        return ((Dt.lanes = N), (Dt.return = g), Dt);
      } finally {
      }
    };
  }
  var ka = Hc(!0),
    jc = Hc(!1),
    Yn = !1;
  function $u(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function tr(t, e) {
    ((t = t.updateQueue),
      e.updateQueue === t &&
        (e.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        }));
  }
  function Xn(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function kn(t, e, n) {
    var l = t.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), (Zt & 2) !== 0)) {
      var s = l.pending;
      return (
        s === null ? (e.next = e) : ((e.next = s.next), (s.next = e)),
        (l.pending = e),
        (e = Ra(t)),
        qn(t, null, n),
        e
      );
    }
    return (Gi(t, l, e, n), Ra(t));
  }
  function So(t, e, n) {
    if (
      ((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194048) !== 0))
    ) {
      var l = e.lanes;
      ((l &= t.pendingLanes), (n |= l), (e.lanes = n), is(t, n));
    }
  }
  function er(t, e) {
    var n = t.updateQueue,
      l = t.alternate;
    if (l !== null && ((l = l.updateQueue), n === l)) {
      var s = null,
        u = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var f = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null,
          };
          (u === null ? (s = u = f) : (u = u.next = f), (n = n.next));
        } while (n !== null);
        u === null ? (s = u = e) : (u = u.next = e);
      } else s = u = e;
      ((n = {
        baseState: l.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: u,
        shared: l.shared,
        callbacks: l.callbacks,
      }),
        (t.updateQueue = n));
      return;
    }
    ((t = n.lastBaseUpdate),
      t === null ? (n.firstBaseUpdate = e) : (t.next = e),
      (n.lastBaseUpdate = e));
  }
  var ir = !1;
  function To() {
    if (ir) {
      var t = Sl;
      if (t !== null) throw t;
    }
  }
  function zo(t, e, n, l) {
    ir = !1;
    var s = t.updateQueue;
    Yn = !1;
    var u = s.firstBaseUpdate,
      f = s.lastBaseUpdate,
      d = s.shared.pending;
    if (d !== null) {
      s.shared.pending = null;
      var _ = d,
        S = _.next;
      ((_.next = null), f === null ? (u = S) : (f.next = S), (f = _));
      var O = t.alternate;
      O !== null &&
        ((O = O.updateQueue),
        (d = O.lastBaseUpdate),
        d !== f &&
          (d === null ? (O.firstBaseUpdate = S) : (d.next = S),
          (O.lastBaseUpdate = _)));
    }
    if (u !== null) {
      var B = s.baseState;
      ((f = 0), (O = S = _ = null), (d = u));
      do {
        var E = d.lane & -536870913,
          w = E !== d.lane;
        if (w ? (Et & E) === E : (l & E) === E) {
          (E !== 0 && E === xl && (ir = !0),
            O !== null &&
              (O = O.next =
                {
                  lane: 0,
                  tag: d.tag,
                  payload: d.payload,
                  callback: null,
                  next: null,
                }));
          t: {
            var K = t,
              at = d;
            E = e;
            var Xt = n;
            switch (at.tag) {
              case 1:
                if (((K = at.payload), typeof K == "function")) {
                  B = K.call(Xt, B, E);
                  break t;
                }
                B = K;
                break t;
              case 3:
                K.flags = (K.flags & -65537) | 128;
              case 0:
                if (
                  ((K = at.payload),
                  (E = typeof K == "function" ? K.call(Xt, B, E) : K),
                  E == null)
                )
                  break t;
                B = X({}, B, E);
                break t;
              case 2:
                Yn = !0;
            }
          }
          ((E = d.callback),
            E !== null &&
              ((t.flags |= 64),
              w && (t.flags |= 8192),
              (w = s.callbacks),
              w === null ? (s.callbacks = [E]) : w.push(E)));
        } else
          ((w = {
            lane: E,
            tag: d.tag,
            payload: d.payload,
            callback: d.callback,
            next: null,
          }),
            O === null ? ((S = O = w), (_ = B)) : (O = O.next = w),
            (f |= E));
        if (((d = d.next), d === null)) {
          if (((d = s.shared.pending), d === null)) break;
          ((w = d),
            (d = w.next),
            (w.next = null),
            (s.lastBaseUpdate = w),
            (s.shared.pending = null));
        }
      } while (!0);
      (O === null && (_ = B),
        (s.baseState = _),
        (s.firstBaseUpdate = S),
        (s.lastBaseUpdate = O),
        u === null && (s.shared.lanes = 0),
        (Jn |= f),
        (t.lanes = f),
        (t.memoizedState = B));
    }
  }
  function qc(t, e) {
    if (typeof t != "function") throw Error(b(191, t));
    t.call(e);
  }
  function Gc(t, e) {
    var n = t.callbacks;
    if (n !== null)
      for (t.callbacks = null, t = 0; t < n.length; t++) qc(n[t], e);
  }
  var El = p(null),
    Rs = p(0);
  function Yc(t, e) {
    ((t = gn), j(Rs, t), j(El, e), (gn = t | e.baseLanes));
  }
  function nr() {
    (j(Rs, gn), j(El, El.current));
  }
  function ar() {
    ((gn = Rs.current), A(El), A(Rs));
  }
  var ei = p(null),
    _i = null;
  function Vn(t) {
    var e = t.alternate;
    (j(ue, ue.current & 1),
      j(ei, t),
      _i === null &&
        (e === null || El.current !== null || e.memoizedState !== null) &&
        (_i = t));
  }
  function lr(t) {
    (j(ue, ue.current), j(ei, t), _i === null && (_i = t));
  }
  function Xc(t) {
    t.tag === 22
      ? (j(ue, ue.current), j(ei, t), _i === null && (_i = t))
      : Qn();
  }
  function Qn() {
    (j(ue, ue.current), j(ei, ei.current));
  }
  function ii(t) {
    (A(ei), _i === t && (_i = null), A(ue));
  }
  var ue = p(0);
  function Us(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (n !== null && ((n = n.dehydrated), n === null || fc(n) || hc(n)))
          return e;
      } else if (
        e.tag === 19 &&
        (e.memoizedProps.revealOrder === "forwards" ||
          e.memoizedProps.revealOrder === "backwards" ||
          e.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          e.memoizedProps.revealOrder === "together")
      ) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        ((e.child.return = e), (e = e.child));
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      ((e.sibling.return = e.return), (e = e.sibling));
    }
    return null;
  }
  var cn = 0,
    dt = null,
    Gt = null,
    _e = null,
    Hs = !1,
    Ml = !1,
    Va = !1,
    js = 0,
    Eo = 0,
    Ll = null,
    Pd = 0;
  function ae() {
    throw Error(b(321));
  }
  function or(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
      if (!Te(t[n], e[n])) return !1;
    return !0;
  }
  function sr(t, e, n, l, s, u) {
    return (
      (cn = u),
      (dt = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (M.H = t === null || t.memoizedState === null ? Lf : Sr),
      (Va = !1),
      (u = n(l, s)),
      (Va = !1),
      Ml && (u = Vc(e, n, l, s)),
      kc(t),
      u
    );
  }
  function kc(t) {
    M.H = wo;
    var e = Gt !== null && Gt.next !== null;
    if (((cn = 0), (_e = Gt = dt = null), (Hs = !1), (Eo = 0), (Ll = null), e))
      throw Error(b(300));
    t === null ||
      pe ||
      ((t = t.dependencies), t !== null && As(t) && (pe = !0));
  }
  function Vc(t, e, n, l) {
    dt = t;
    var s = 0;
    do {
      if ((Ml && (Ll = null), (Eo = 0), (Ml = !1), 25 <= s))
        throw Error(b(301));
      if (((s += 1), (_e = Gt = null), t.updateQueue != null)) {
        var u = t.updateQueue;
        ((u.lastEffect = null),
          (u.events = null),
          (u.stores = null),
          u.memoCache != null && (u.memoCache.index = 0));
      }
      ((M.H = wf), (u = e(n, l)));
    } while (Ml);
    return u;
  }
  function Kd() {
    var t = M.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == "function" ? Mo(e) : e),
      (t = t.useState()[0]),
      (Gt !== null ? Gt.memoizedState : null) !== t && (dt.flags |= 1024),
      e
    );
  }
  function ur() {
    var t = js !== 0;
    return ((js = 0), t);
  }
  function rr(t, e, n) {
    ((e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~n));
  }
  function cr(t) {
    if (Hs) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        (e !== null && (e.pending = null), (t = t.next));
      }
      Hs = !1;
    }
    ((cn = 0), (_e = Gt = dt = null), (Ml = !1), (Eo = js = 0), (Ll = null));
  }
  function He() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (_e === null ? (dt.memoizedState = _e = t) : (_e = _e.next = t), _e);
  }
  function re() {
    if (Gt === null) {
      var t = dt.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Gt.next;
    var e = _e === null ? dt.memoizedState : _e.next;
    if (e !== null) ((_e = e), (Gt = t));
    else {
      if (t === null)
        throw dt.alternate === null ? Error(b(467)) : Error(b(310));
      ((Gt = t),
        (t = {
          memoizedState: Gt.memoizedState,
          baseState: Gt.baseState,
          baseQueue: Gt.baseQueue,
          queue: Gt.queue,
          next: null,
        }),
        _e === null ? (dt.memoizedState = _e = t) : (_e = _e.next = t));
    }
    return _e;
  }
  function qs() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Mo(t) {
    var e = Eo;
    return (
      (Eo += 1),
      Ll === null && (Ll = []),
      (t = Zc(Ll, t, e)),
      (e = dt),
      (_e === null ? e.memoizedState : _e.next) === null &&
        ((e = e.alternate),
        (M.H = e === null || e.memoizedState === null ? Lf : Sr)),
      t
    );
  }
  function Gs(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Mo(t);
      if (t.$$typeof === ct) return we(t);
    }
    throw Error(b(438, String(t)));
  }
  function fr(t) {
    var e = null,
      n = dt.updateQueue;
    if ((n !== null && (e = n.memoCache), e == null)) {
      var l = dt.alternate;
      l !== null &&
        ((l = l.updateQueue),
        l !== null &&
          ((l = l.memoCache),
          l != null &&
            (e = {
              data: l.data.map(function (s) {
                return s.slice();
              }),
              index: 0,
            })));
    }
    if (
      (e == null && (e = { data: [], index: 0 }),
      n === null && ((n = qs()), (dt.updateQueue = n)),
      (n.memoCache = e),
      (n = e.data[e.index]),
      n === void 0)
    )
      for (n = e.data[e.index] = Array(t), l = 0; l < t; l++) n[l] = oi;
    return (e.index++, n);
  }
  function fn(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function Ys(t) {
    var e = re();
    return hr(e, Gt, t);
  }
  function hr(t, e, n) {
    var l = t.queue;
    if (l === null) throw Error(b(311));
    l.lastRenderedReducer = n;
    var s = t.baseQueue,
      u = l.pending;
    if (u !== null) {
      if (s !== null) {
        var f = s.next;
        ((s.next = u.next), (u.next = f));
      }
      ((e.baseQueue = s = u), (l.pending = null));
    }
    if (((u = t.baseState), s === null)) t.memoizedState = u;
    else {
      e = s.next;
      var d = (f = null),
        _ = null,
        S = e,
        O = !1;
      do {
        var B = S.lane & -536870913;
        if (B !== S.lane ? (Et & B) === B : (cn & B) === B) {
          var E = S.revertLane;
          if (E === 0)
            (_ !== null &&
              (_ = _.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: S.action,
                  hasEagerState: S.hasEagerState,
                  eagerState: S.eagerState,
                  next: null,
                }),
              B === xl && (O = !0));
          else if ((cn & E) === E) {
            ((S = S.next), E === xl && (O = !0));
            continue;
          } else
            ((B = {
              lane: 0,
              revertLane: S.revertLane,
              gesture: null,
              action: S.action,
              hasEagerState: S.hasEagerState,
              eagerState: S.eagerState,
              next: null,
            }),
              _ === null ? ((d = _ = B), (f = u)) : (_ = _.next = B),
              (dt.lanes |= E),
              (Jn |= E));
          ((B = S.action),
            Va && n(u, B),
            (u = S.hasEagerState ? S.eagerState : n(u, B)));
        } else
          ((E = {
            lane: B,
            revertLane: S.revertLane,
            gesture: S.gesture,
            action: S.action,
            hasEagerState: S.hasEagerState,
            eagerState: S.eagerState,
            next: null,
          }),
            _ === null ? ((d = _ = E), (f = u)) : (_ = _.next = E),
            (dt.lanes |= B),
            (Jn |= B));
        S = S.next;
      } while (S !== null && S !== e);
      if (
        (_ === null ? (f = u) : (_.next = d),
        !Te(u, t.memoizedState) && ((pe = !0), O && ((n = Sl), n !== null)))
      )
        throw n;
      ((t.memoizedState = u),
        (t.baseState = f),
        (t.baseQueue = _),
        (l.lastRenderedState = u));
    }
    return (s === null && (l.lanes = 0), [t.memoizedState, l.dispatch]);
  }
  function dr(t) {
    var e = re(),
      n = e.queue;
    if (n === null) throw Error(b(311));
    n.lastRenderedReducer = t;
    var l = n.dispatch,
      s = n.pending,
      u = e.memoizedState;
    if (s !== null) {
      n.pending = null;
      var f = (s = s.next);
      do ((u = t(u, f.action)), (f = f.next));
      while (f !== s);
      (Te(u, e.memoizedState) || (pe = !0),
        (e.memoizedState = u),
        e.baseQueue === null && (e.baseState = u),
        (n.lastRenderedState = u));
    }
    return [u, l];
  }
  function Qc(t, e, n) {
    var l = dt,
      s = re(),
      u = xt;
    if (u) {
      if (n === void 0) throw Error(b(407));
      n = n();
    } else n = e();
    var f = !Te((Gt || s).memoizedState, n);
    if (
      (f && ((s.memoizedState = n), (pe = !0)),
      (s = s.queue),
      pr(Jc.bind(null, l, s, t), [t]),
      s.getSnapshot !== e || f || (_e !== null && _e.memoizedState.tag & 1))
    ) {
      if (
        ((l.flags |= 2048),
        wl(9, { destroy: void 0 }, Kc.bind(null, l, s, n, e), null),
        Qt === null)
      )
        throw Error(b(349));
      u || (cn & 127) !== 0 || Pc(l, e, n);
    }
    return n;
  }
  function Pc(t, e, n) {
    ((t.flags |= 16384),
      (t = { getSnapshot: e, value: n }),
      (e = dt.updateQueue),
      e === null
        ? ((e = qs()), (dt.updateQueue = e), (e.stores = [t]))
        : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t)));
  }
  function Kc(t, e, n, l) {
    ((e.value = n), (e.getSnapshot = l), Wc(e) && Fc(t));
  }
  function Jc(t, e, n) {
    return n(function () {
      Wc(e) && Fc(t);
    });
  }
  function Wc(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !Te(t, n);
    } catch {
      return !0;
    }
  }
  function Fc(t) {
    var e = di(t, 2);
    e !== null && We(e, t, 2);
  }
  function mr(t) {
    var e = He();
    if (typeof t == "function") {
      var n = t;
      if (((t = n()), Va)) {
        yi(!0);
        try {
          n();
        } finally {
          yi(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: fn,
        lastRenderedState: t,
      }),
      e
    );
  }
  function Ic(t, e, n, l) {
    return ((t.baseState = n), hr(t, Gt, typeof l == "function" ? l : fn));
  }
  function Jd(t, e, n, l, s) {
    if (Vs(t)) throw Error(b(485));
    if (((t = e.action), t !== null)) {
      var u = {
        payload: s,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (f) {
          u.listeners.push(f);
        },
      };
      (M.T !== null ? n(!0) : (u.isTransition = !1),
        l(u),
        (n = e.pending),
        n === null
          ? ((u.next = e.pending = u), $c(e, u))
          : ((u.next = n.next), (e.pending = n.next = u)));
    }
  }
  function $c(t, e) {
    var n = e.action,
      l = e.payload,
      s = t.state;
    if (e.isTransition) {
      var u = M.T,
        f = {};
      M.T = f;
      try {
        var d = n(s, l),
          _ = M.S;
        (_ !== null && _(f, d), tf(t, e, d));
      } catch (S) {
        _r(t, e, S);
      } finally {
        (u !== null && f.types !== null && (u.types = f.types), (M.T = u));
      }
    } else
      try {
        ((u = n(s, l)), tf(t, e, u));
      } catch (S) {
        _r(t, e, S);
      }
  }
  function tf(t, e, n) {
    n !== null && typeof n == "object" && typeof n.then == "function"
      ? n.then(
          function (l) {
            ef(t, e, l);
          },
          function (l) {
            return _r(t, e, l);
          },
        )
      : ef(t, e, n);
  }
  function ef(t, e, n) {
    ((e.status = "fulfilled"),
      (e.value = n),
      nf(e),
      (t.state = n),
      (e = t.pending),
      e !== null &&
        ((n = e.next),
        n === e ? (t.pending = null) : ((n = n.next), (e.next = n), $c(t, n))));
  }
  function _r(t, e, n) {
    var l = t.pending;
    if (((t.pending = null), l !== null)) {
      l = l.next;
      do ((e.status = "rejected"), (e.reason = n), nf(e), (e = e.next));
      while (e !== l);
    }
    t.action = null;
  }
  function nf(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function af(t, e) {
    return e;
  }
  function lf(t, e) {
    if (xt) {
      var n = Qt.formState;
      if (n !== null) {
        t: {
          var l = dt;
          if (xt) {
            if (Nt) {
              e: {
                for (var s = Nt, u = Ve; s.nodeType !== 8; ) {
                  if (!u) {
                    s = null;
                    break e;
                  }
                  if (((s = pi(s.nextSibling)), s === null)) {
                    s = null;
                    break e;
                  }
                }
                ((u = s.data), (s = u === "F!" || u === "F" ? s : null));
              }
              if (s) {
                ((Nt = pi(s.nextSibling)), (l = s.data === "F!"));
                break t;
              }
            }
            Xi(l);
          }
          l = !1;
        }
        l && (e = n[0]);
      }
    }
    return (
      (n = He()),
      (n.memoizedState = n.baseState = e),
      (l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: af,
        lastRenderedState: e,
      }),
      (n.queue = l),
      (n = zf.bind(null, dt, l)),
      (l.dispatch = n),
      (l = mr(!1)),
      (u = xr.bind(null, dt, !1, l.queue)),
      (l = He()),
      (s = { state: e, dispatch: null, action: t, pending: null }),
      (l.queue = s),
      (n = Jd.bind(null, dt, s, u, n)),
      (s.dispatch = n),
      (l.memoizedState = t),
      [e, n, !1]
    );
  }
  function of(t) {
    var e = re();
    return sf(e, Gt, t);
  }
  function sf(t, e, n) {
    if (
      ((e = hr(t, e, af)[0]),
      (t = Ys(fn)[0]),
      typeof e == "object" && e !== null && typeof e.then == "function")
    )
      try {
        var l = Mo(e);
      } catch (f) {
        throw f === Tl ? Ns : f;
      }
    else l = e;
    e = re();
    var s = e.queue,
      u = s.dispatch;
    return (
      n !== e.memoizedState &&
        ((dt.flags |= 2048),
        wl(9, { destroy: void 0 }, Wd.bind(null, s, n), null)),
      [l, u, t]
    );
  }
  function Wd(t, e) {
    t.action = e;
  }
  function uf(t) {
    var e = re(),
      n = Gt;
    if (n !== null) return sf(e, n, t);
    (re(), (e = e.memoizedState), (n = re()));
    var l = n.queue.dispatch;
    return ((n.memoizedState = t), [e, l, !1]);
  }
  function wl(t, e, n, l) {
    return (
      (t = { tag: t, create: n, deps: l, inst: e, next: null }),
      (e = dt.updateQueue),
      e === null && ((e = qs()), (dt.updateQueue = e)),
      (n = e.lastEffect),
      n === null
        ? (e.lastEffect = t.next = t)
        : ((l = n.next), (n.next = t), (t.next = l), (e.lastEffect = t)),
      t
    );
  }
  function rf() {
    return re().memoizedState;
  }
  function Xs(t, e, n, l) {
    var s = He();
    ((dt.flags |= t),
      (s.memoizedState = wl(
        1 | e,
        { destroy: void 0 },
        n,
        l === void 0 ? null : l,
      )));
  }
  function ks(t, e, n, l) {
    var s = re();
    l = l === void 0 ? null : l;
    var u = s.memoizedState.inst;
    Gt !== null && l !== null && or(l, Gt.memoizedState.deps)
      ? (s.memoizedState = wl(e, u, n, l))
      : ((dt.flags |= t), (s.memoizedState = wl(1 | e, u, n, l)));
  }
  function cf(t, e) {
    Xs(8390656, 8, t, e);
  }
  function pr(t, e) {
    ks(2048, 8, t, e);
  }
  function Fd(t) {
    dt.flags |= 4;
    var e = dt.updateQueue;
    if (e === null) ((e = qs()), (dt.updateQueue = e), (e.events = [t]));
    else {
      var n = e.events;
      n === null ? (e.events = [t]) : n.push(t);
    }
  }
  function ff(t) {
    var e = re().memoizedState;
    return (
      Fd({ ref: e, nextImpl: t }),
      function () {
        if ((Zt & 2) !== 0) throw Error(b(440));
        return e.impl.apply(void 0, arguments);
      }
    );
  }
  function hf(t, e) {
    return ks(4, 2, t, e);
  }
  function df(t, e) {
    return ks(4, 4, t, e);
  }
  function mf(t, e) {
    if (typeof e == "function") {
      t = t();
      var n = e(t);
      return function () {
        typeof n == "function" ? n() : e(null);
      };
    }
    if (e != null)
      return (
        (t = t()),
        (e.current = t),
        function () {
          e.current = null;
        }
      );
  }
  function _f(t, e, n) {
    ((n = n != null ? n.concat([t]) : null), ks(4, 4, mf.bind(null, e, t), n));
  }
  function vr() {}
  function pf(t, e) {
    var n = re();
    e = e === void 0 ? null : e;
    var l = n.memoizedState;
    return e !== null && or(e, l[1]) ? l[0] : ((n.memoizedState = [t, e]), t);
  }
  function vf(t, e) {
    var n = re();
    e = e === void 0 ? null : e;
    var l = n.memoizedState;
    if (e !== null && or(e, l[1])) return l[0];
    if (((l = t()), Va)) {
      yi(!0);
      try {
        t();
      } finally {
        yi(!1);
      }
    }
    return ((n.memoizedState = [l, e]), l);
  }
  function gr(t, e, n) {
    return n === void 0 || ((cn & 1073741824) !== 0 && (Et & 261930) === 0)
      ? (t.memoizedState = e)
      : ((t.memoizedState = n), (t = gh()), (dt.lanes |= t), (Jn |= t), n);
  }
  function gf(t, e, n, l) {
    return Te(n, e)
      ? n
      : El.current !== null
        ? ((t = gr(t, n, l)), Te(t, e) || (pe = !0), t)
        : (cn & 42) === 0 || ((cn & 1073741824) !== 0 && (Et & 261930) === 0)
          ? ((pe = !0), (t.memoizedState = n))
          : ((t = gh()), (dt.lanes |= t), (Jn |= t), e);
  }
  function yf(t, e, n, l, s) {
    var u = q.p;
    q.p = u !== 0 && 8 > u ? u : 8;
    var f = M.T,
      d = {};
    ((M.T = d), xr(t, !1, e, n));
    try {
      var _ = s(),
        S = M.S;
      if (
        (S !== null && S(d, _),
        _ !== null && typeof _ == "object" && typeof _.then == "function")
      ) {
        var O = Qd(_, l);
        Lo(t, e, O, li(t));
      } else Lo(t, e, l, li(t));
    } catch (B) {
      Lo(t, e, { then: function () {}, status: "rejected", reason: B }, li());
    } finally {
      ((q.p = u),
        f !== null && d.types !== null && (f.types = d.types),
        (M.T = f));
    }
  }
  function Id() {}
  function yr(t, e, n, l) {
    if (t.tag !== 5) throw Error(b(476));
    var s = bf(t).queue;
    yf(
      t,
      s,
      e,
      H,
      n === null
        ? Id
        : function () {
            return (xf(t), n(l));
          },
    );
  }
  function bf(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: H,
      baseState: H,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: fn,
        lastRenderedState: H,
      },
      next: null,
    };
    var n = {};
    return (
      (e.next = {
        memoizedState: n,
        baseState: n,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: fn,
          lastRenderedState: n,
        },
        next: null,
      }),
      (t.memoizedState = e),
      (t = t.alternate),
      t !== null && (t.memoizedState = e),
      e
    );
  }
  function xf(t) {
    var e = bf(t);
    (e.next === null && (e = t.alternate.memoizedState),
      Lo(t, e.next.queue, {}, li()));
  }
  function br() {
    return we(ko);
  }
  function Sf() {
    return re().memoizedState;
  }
  function Tf() {
    return re().memoizedState;
  }
  function $d(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var n = li();
          t = Xn(n);
          var l = kn(e, t, n);
          (l !== null && (We(l, e, n), So(l, e, n)),
            (e = { cache: Ju() }),
            (t.payload = e));
          return;
      }
      e = e.return;
    }
  }
  function tm(t, e, n) {
    var l = li();
    ((n = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Vs(t)
        ? Ef(e, n)
        : ((n = fo(t, e, n, l)), n !== null && (We(n, t, l), Mf(n, e, l))));
  }
  function zf(t, e, n) {
    var l = li();
    Lo(t, e, n, l);
  }
  function Lo(t, e, n, l) {
    var s = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Vs(t)) Ef(e, s);
    else {
      var u = t.alternate;
      if (
        t.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = e.lastRenderedReducer), u !== null)
      )
        try {
          var f = e.lastRenderedState,
            d = u(f, n);
          if (((s.hasEagerState = !0), (s.eagerState = d), Te(d, f)))
            return (Gi(t, e, s, 0), Qt === null && Za(), !1);
        } catch {
        } finally {
        }
      if (((n = fo(t, e, s, l)), n !== null))
        return (We(n, t, l), Mf(n, e, l), !0);
    }
    return !1;
  }
  function xr(t, e, n, l) {
    if (
      ((l = {
        lane: 2,
        revertLane: $r(),
        gesture: null,
        action: l,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Vs(t))
    ) {
      if (e) throw Error(b(479));
    } else ((e = fo(t, n, l, 2)), e !== null && We(e, t, 2));
  }
  function Vs(t) {
    var e = t.alternate;
    return t === dt || (e !== null && e === dt);
  }
  function Ef(t, e) {
    Ml = Hs = !0;
    var n = t.pending;
    (n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
      (t.pending = e));
  }
  function Mf(t, e, n) {
    if ((n & 4194048) !== 0) {
      var l = e.lanes;
      ((l &= t.pendingLanes), (n |= l), (e.lanes = n), is(t, n));
    }
  }
  var wo = {
    readContext: we,
    use: Gs,
    useCallback: ae,
    useContext: ae,
    useEffect: ae,
    useImperativeHandle: ae,
    useLayoutEffect: ae,
    useInsertionEffect: ae,
    useMemo: ae,
    useReducer: ae,
    useRef: ae,
    useState: ae,
    useDebugValue: ae,
    useDeferredValue: ae,
    useTransition: ae,
    useSyncExternalStore: ae,
    useId: ae,
    useHostTransitionStatus: ae,
    useFormState: ae,
    useActionState: ae,
    useOptimistic: ae,
    useMemoCache: ae,
    useCacheRefresh: ae,
  };
  wo.useEffectEvent = ae;
  var Lf = {
      readContext: we,
      use: Gs,
      useCallback: function (t, e) {
        return ((He().memoizedState = [t, e === void 0 ? null : e]), t);
      },
      useContext: we,
      useEffect: cf,
      useImperativeHandle: function (t, e, n) {
        ((n = n != null ? n.concat([t]) : null),
          Xs(4194308, 4, mf.bind(null, e, t), n));
      },
      useLayoutEffect: function (t, e) {
        return Xs(4194308, 4, t, e);
      },
      useInsertionEffect: function (t, e) {
        Xs(4, 2, t, e);
      },
      useMemo: function (t, e) {
        var n = He();
        e = e === void 0 ? null : e;
        var l = t();
        if (Va) {
          yi(!0);
          try {
            t();
          } finally {
            yi(!1);
          }
        }
        return ((n.memoizedState = [l, e]), l);
      },
      useReducer: function (t, e, n) {
        var l = He();
        if (n !== void 0) {
          var s = n(e);
          if (Va) {
            yi(!0);
            try {
              n(e);
            } finally {
              yi(!1);
            }
          }
        } else s = e;
        return (
          (l.memoizedState = l.baseState = s),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: s,
          }),
          (l.queue = t),
          (t = t.dispatch = tm.bind(null, dt, t)),
          [l.memoizedState, t]
        );
      },
      useRef: function (t) {
        var e = He();
        return ((t = { current: t }), (e.memoizedState = t));
      },
      useState: function (t) {
        t = mr(t);
        var e = t.queue,
          n = zf.bind(null, dt, e);
        return ((e.dispatch = n), [t.memoizedState, n]);
      },
      useDebugValue: vr,
      useDeferredValue: function (t, e) {
        var n = He();
        return gr(n, t, e);
      },
      useTransition: function () {
        var t = mr(!1);
        return (
          (t = yf.bind(null, dt, t.queue, !0, !1)),
          (He().memoizedState = t),
          [!1, t]
        );
      },
      useSyncExternalStore: function (t, e, n) {
        var l = dt,
          s = He();
        if (xt) {
          if (n === void 0) throw Error(b(407));
          n = n();
        } else {
          if (((n = e()), Qt === null)) throw Error(b(349));
          (Et & 127) !== 0 || Pc(l, e, n);
        }
        s.memoizedState = n;
        var u = { value: n, getSnapshot: e };
        return (
          (s.queue = u),
          cf(Jc.bind(null, l, u, t), [t]),
          (l.flags |= 2048),
          wl(9, { destroy: void 0 }, Kc.bind(null, l, u, n, e), null),
          n
        );
      },
      useId: function () {
        var t = He(),
          e = Qt.identifierPrefix;
        if (xt) {
          var n = k,
            l = D;
          ((n = (l & ~(1 << (32 - Ze(l) - 1))).toString(32) + n),
            (e = "_" + e + "R_" + n),
            (n = js++),
            0 < n && (e += "H" + n.toString(32)),
            (e += "_"));
        } else ((n = Pd++), (e = "_" + e + "r_" + n.toString(32) + "_"));
        return (t.memoizedState = e);
      },
      useHostTransitionStatus: br,
      useFormState: lf,
      useActionState: lf,
      useOptimistic: function (t) {
        var e = He();
        e.memoizedState = e.baseState = t;
        var n = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (e.queue = n),
          (e = xr.bind(null, dt, !0, n)),
          (n.dispatch = e),
          [t, e]
        );
      },
      useMemoCache: fr,
      useCacheRefresh: function () {
        return (He().memoizedState = $d.bind(null, dt));
      },
      useEffectEvent: function (t) {
        var e = He(),
          n = { impl: t };
        return (
          (e.memoizedState = n),
          function () {
            if ((Zt & 2) !== 0) throw Error(b(440));
            return n.impl.apply(void 0, arguments);
          }
        );
      },
    },
    Sr = {
      readContext: we,
      use: Gs,
      useCallback: pf,
      useContext: we,
      useEffect: pr,
      useImperativeHandle: _f,
      useInsertionEffect: hf,
      useLayoutEffect: df,
      useMemo: vf,
      useReducer: Ys,
      useRef: rf,
      useState: function () {
        return Ys(fn);
      },
      useDebugValue: vr,
      useDeferredValue: function (t, e) {
        var n = re();
        return gf(n, Gt.memoizedState, t, e);
      },
      useTransition: function () {
        var t = Ys(fn)[0],
          e = re().memoizedState;
        return [typeof t == "boolean" ? t : Mo(t), e];
      },
      useSyncExternalStore: Qc,
      useId: Sf,
      useHostTransitionStatus: br,
      useFormState: of,
      useActionState: of,
      useOptimistic: function (t, e) {
        var n = re();
        return Ic(n, Gt, t, e);
      },
      useMemoCache: fr,
      useCacheRefresh: Tf,
    };
  Sr.useEffectEvent = ff;
  var wf = {
    readContext: we,
    use: Gs,
    useCallback: pf,
    useContext: we,
    useEffect: pr,
    useImperativeHandle: _f,
    useInsertionEffect: hf,
    useLayoutEffect: df,
    useMemo: vf,
    useReducer: dr,
    useRef: rf,
    useState: function () {
      return dr(fn);
    },
    useDebugValue: vr,
    useDeferredValue: function (t, e) {
      var n = re();
      return Gt === null ? gr(n, t, e) : gf(n, Gt.memoizedState, t, e);
    },
    useTransition: function () {
      var t = dr(fn)[0],
        e = re().memoizedState;
      return [typeof t == "boolean" ? t : Mo(t), e];
    },
    useSyncExternalStore: Qc,
    useId: Sf,
    useHostTransitionStatus: br,
    useFormState: uf,
    useActionState: uf,
    useOptimistic: function (t, e) {
      var n = re();
      return Gt !== null
        ? Ic(n, Gt, t, e)
        : ((n.baseState = t), [t, n.queue.dispatch]);
    },
    useMemoCache: fr,
    useCacheRefresh: Tf,
  };
  wf.useEffectEvent = ff;
  function Tr(t, e, n, l) {
    ((e = t.memoizedState),
      (n = n(l, e)),
      (n = n == null ? e : X({}, e, n)),
      (t.memoizedState = n),
      t.lanes === 0 && (t.updateQueue.baseState = n));
  }
  var zr = {
    enqueueSetState: function (t, e, n) {
      t = t._reactInternals;
      var l = li(),
        s = Xn(l);
      ((s.payload = e),
        n != null && (s.callback = n),
        (e = kn(t, s, l)),
        e !== null && (We(e, t, l), So(e, t, l)));
    },
    enqueueReplaceState: function (t, e, n) {
      t = t._reactInternals;
      var l = li(),
        s = Xn(l);
      ((s.tag = 1),
        (s.payload = e),
        n != null && (s.callback = n),
        (e = kn(t, s, l)),
        e !== null && (We(e, t, l), So(e, t, l)));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var n = li(),
        l = Xn(n);
      ((l.tag = 2),
        e != null && (l.callback = e),
        (e = kn(t, l, n)),
        e !== null && (We(e, t, n), So(e, t, n)));
    },
  };
  function Af(t, e, n, l, s, u, f) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(l, u, f)
        : e.prototype && e.prototype.isPureReactComponent
          ? !Rn(n, l) || !Rn(s, u)
          : !0
    );
  }
  function Of(t, e, n, l) {
    ((t = e.state),
      typeof e.componentWillReceiveProps == "function" &&
        e.componentWillReceiveProps(n, l),
      typeof e.UNSAFE_componentWillReceiveProps == "function" &&
        e.UNSAFE_componentWillReceiveProps(n, l),
      e.state !== t && zr.enqueueReplaceState(e, e.state, null));
  }
  function Qa(t, e) {
    var n = e;
    if ("ref" in e) {
      n = {};
      for (var l in e) l !== "ref" && (n[l] = e[l]);
    }
    if ((t = t.defaultProps)) {
      n === e && (n = X({}, n));
      for (var s in t) n[s] === void 0 && (n[s] = t[s]);
    }
    return n;
  }
  function Cf(t) {
    Ba(t);
  }
  function Nf(t) {
    console.error(t);
  }
  function Df(t) {
    Ba(t);
  }
  function Qs(t, e) {
    try {
      var n = t.onUncaughtError;
      n(e.value, { componentStack: e.stack });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  function Bf(t, e, n) {
    try {
      var l = t.onCaughtError;
      l(n.value, {
        componentStack: n.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null,
      });
    } catch (s) {
      setTimeout(function () {
        throw s;
      });
    }
  }
  function Er(t, e, n) {
    return (
      (n = Xn(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        Qs(t, e);
      }),
      n
    );
  }
  function Zf(t) {
    return ((t = Xn(t)), (t.tag = 3), t);
  }
  function Rf(t, e, n, l) {
    var s = n.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var u = l.value;
      ((t.payload = function () {
        return s(u);
      }),
        (t.callback = function () {
          Bf(e, n, l);
        }));
    }
    var f = n.stateNode;
    f !== null &&
      typeof f.componentDidCatch == "function" &&
      (t.callback = function () {
        (Bf(e, n, l),
          typeof s != "function" &&
            (Wn === null ? (Wn = new Set([this])) : Wn.add(this)));
        var d = l.stack;
        this.componentDidCatch(l.value, {
          componentStack: d !== null ? d : "",
        });
      });
  }
  function em(t, e, n, l, s) {
    if (
      ((n.flags |= 32768),
      l !== null && typeof l == "object" && typeof l.then == "function")
    ) {
      if (
        ((e = n.alternate),
        e !== null && bl(e, n, s, !0),
        (n = ei.current),
        n !== null)
      ) {
        switch (n.tag) {
          case 31:
          case 13:
            return (
              _i === null ? au() : n.alternate === null && le === 0 && (le = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = s),
              l === Ds
                ? (n.flags |= 16384)
                : ((e = n.updateQueue),
                  e === null ? (n.updateQueue = new Set([l])) : e.add(l),
                  Wr(t, l, s)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              l === Ds
                ? (n.flags |= 16384)
                : ((e = n.updateQueue),
                  e === null
                    ? ((e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([l]),
                      }),
                      (n.updateQueue = e))
                    : ((n = e.retryQueue),
                      n === null ? (e.retryQueue = new Set([l])) : n.add(l)),
                  Wr(t, l, s)),
              !1
            );
        }
        throw Error(b(435, n.tag));
      }
      return (Wr(t, l, s), au(), !1);
    }
    if (xt)
      return (
        (e = ei.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = s),
            l !== yl && ((t = Error(b(422), { cause: l })), Ha(a(t, n))))
          : (l !== yl && ((e = Error(b(423), { cause: l })), Ha(a(e, n))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (s &= -s),
            (t.lanes |= s),
            (l = a(l, n)),
            (s = Er(t.stateNode, l, s)),
            er(t, s),
            le !== 4 && (le = 2)),
        !1
      );
    var u = Error(b(520), { cause: l });
    if (
      ((u = a(u, n)),
      Ro === null ? (Ro = [u]) : Ro.push(u),
      le !== 4 && (le = 2),
      e === null)
    )
      return !0;
    ((l = a(l, n)), (n = e));
    do {
      switch (n.tag) {
        case 3:
          return (
            (n.flags |= 65536),
            (t = s & -s),
            (n.lanes |= t),
            (t = Er(n.stateNode, l, t)),
            er(n, t),
            !1
          );
        case 1:
          if (
            ((e = n.type),
            (u = n.stateNode),
            (n.flags & 128) === 0 &&
              (typeof e.getDerivedStateFromError == "function" ||
                (u !== null &&
                  typeof u.componentDidCatch == "function" &&
                  (Wn === null || !Wn.has(u)))))
          )
            return (
              (n.flags |= 65536),
              (s &= -s),
              (n.lanes |= s),
              (s = Zf(s)),
              Rf(s, t, n, l),
              er(n, s),
              !1
            );
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Mr = Error(b(461)),
    pe = !1;
  function Ae(t, e, n, l) {
    e.child = t === null ? jc(e, null, n, l) : ka(e, t.child, n, l);
  }
  function Uf(t, e, n, l, s) {
    n = n.render;
    var u = e.ref;
    if ("ref" in l) {
      var f = {};
      for (var d in l) d !== "ref" && (f[d] = l[d]);
    } else f = l;
    return (
      qa(e),
      (l = sr(t, e, n, f, u, s)),
      (d = ur()),
      t !== null && !pe
        ? (rr(t, e, s), hn(t, e, s))
        : (xt && d && ye(e), (e.flags |= 1), Ae(t, e, l, s), e.child)
    );
  }
  function Hf(t, e, n, l, s) {
    if (t === null) {
      var u = n.type;
      return typeof u == "function" &&
        !vl(u) &&
        u.defaultProps === void 0 &&
        n.compare === null
        ? ((e.tag = 15), (e.type = u), jf(t, e, u, l, s))
        : ((t = Ua(n.type, null, l, e, e.mode, s)),
          (t.ref = e.ref),
          (t.return = e),
          (e.child = t));
    }
    if (((u = t.child), !Br(t, s))) {
      var f = u.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : Rn), n(f, l) && t.ref === e.ref)
      )
        return hn(t, e, s);
    }
    return (
      (e.flags |= 1),
      (t = mi(u, l)),
      (t.ref = e.ref),
      (t.return = e),
      (e.child = t)
    );
  }
  function jf(t, e, n, l, s) {
    if (t !== null) {
      var u = t.memoizedProps;
      if (Rn(u, l) && t.ref === e.ref)
        if (((pe = !1), (e.pendingProps = l = u), Br(t, s)))
          (t.flags & 131072) !== 0 && (pe = !0);
        else return ((e.lanes = t.lanes), hn(t, e, s));
    }
    return Lr(t, e, n, l, s);
  }
  function qf(t, e, n, l) {
    var s = l.children,
      u = t !== null ? t.memoizedState : null;
    if (
      (t === null &&
        e.stateNode === null &&
        (e.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      l.mode === "hidden")
    ) {
      if ((e.flags & 128) !== 0) {
        if (((u = u !== null ? u.baseLanes | n : n), t !== null)) {
          for (l = e.child = t.child, s = 0; l !== null; )
            ((s = s | l.lanes | l.childLanes), (l = l.sibling));
          l = s & ~u;
        } else ((l = 0), (e.child = null));
        return Gf(t, e, u, n, l);
      }
      if ((n & 536870912) !== 0)
        ((e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && Cs(e, u !== null ? u.cachePool : null),
          u !== null ? Yc(e, u) : nr(),
          Xc(e));
      else
        return (
          (l = e.lanes = 536870912),
          Gf(t, e, u !== null ? u.baseLanes | n : n, n, l)
        );
    } else
      u !== null
        ? (Cs(e, u.cachePool), Yc(e, u), Qn(), (e.memoizedState = null))
        : (t !== null && Cs(e, null), nr(), Qn());
    return (Ae(t, e, s, n), e.child);
  }
  function Ao(t, e) {
    return (
      (t !== null && t.tag === 22) ||
        e.stateNode !== null ||
        (e.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      e.sibling
    );
  }
  function Gf(t, e, n, l, s) {
    var u = Fu();
    return (
      (u = u === null ? null : { parent: me._currentValue, pool: u }),
      (e.memoizedState = { baseLanes: n, cachePool: u }),
      t !== null && Cs(e, null),
      nr(),
      Xc(e),
      t !== null && bl(t, e, l, !0),
      (e.childLanes = s),
      null
    );
  }
  function Ps(t, e) {
    return (
      (e = Js({ mode: e.mode, children: e.children }, t.mode)),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function Yf(t, e, n) {
    return (
      ka(e, t.child, null, n),
      (t = Ps(e, e.pendingProps)),
      (t.flags |= 2),
      ii(e),
      (e.memoizedState = null),
      t
    );
  }
  function im(t, e, n) {
    var l = e.pendingProps,
      s = (e.flags & 128) !== 0;
    if (((e.flags &= -129), t === null)) {
      if (xt) {
        if (l.mode === "hidden")
          return ((t = Ps(e, l)), (e.lanes = 536870912), Ao(null, t));
        if (
          (lr(e),
          (t = Nt)
            ? ((t = td(t, Ve)),
              (t = t !== null && t.data === "&" ? t : null),
              t !== null &&
                ((e.memoizedState = {
                  dehydrated: t,
                  treeContext: z !== null ? { id: D, overflow: k } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = mo(t)),
                (n.return = e),
                (e.child = n),
                (Ct = e),
                (Nt = null)))
            : (t = null),
          t === null)
        )
          throw Xi(e);
        return ((e.lanes = 536870912), null);
      }
      return Ps(e, l);
    }
    var u = t.memoizedState;
    if (u !== null) {
      var f = u.dehydrated;
      if ((lr(e), s))
        if (e.flags & 256) ((e.flags &= -257), (e = Yf(t, e, n)));
        else if (e.memoizedState !== null)
          ((e.child = t.child), (e.flags |= 128), (e = null));
        else throw Error(b(558));
      else if (
        (pe || bl(t, e, n, !1), (s = (n & t.childLanes) !== 0), pe || s)
      ) {
        if (
          ((l = Qt),
          l !== null && ((f = ns(l, n)), f !== 0 && f !== u.retryLane))
        )
          throw ((u.retryLane = f), di(t, f), We(l, t, f), Mr);
        (au(), (e = Yf(t, e, n)));
      } else
        ((t = u.treeContext),
          (Nt = pi(f.nextSibling)),
          (Ct = e),
          (xt = !0),
          (Yi = null),
          (Ve = !1),
          t !== null && Ue(e, t),
          (e = Ps(e, l)),
          (e.flags |= 4096));
      return e;
    }
    return (
      (t = mi(t.child, { mode: l.mode, children: l.children })),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function Ks(t, e) {
    var n = e.ref;
    if (n === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object") throw Error(b(284));
      (t === null || t.ref !== n) && (e.flags |= 4194816);
    }
  }
  function Lr(t, e, n, l, s) {
    return (
      qa(e),
      (n = sr(t, e, n, l, void 0, s)),
      (l = ur()),
      t !== null && !pe
        ? (rr(t, e, s), hn(t, e, s))
        : (xt && l && ye(e), (e.flags |= 1), Ae(t, e, n, s), e.child)
    );
  }
  function Xf(t, e, n, l, s, u) {
    return (
      qa(e),
      (e.updateQueue = null),
      (n = Vc(e, l, n, s)),
      kc(t),
      (l = ur()),
      t !== null && !pe
        ? (rr(t, e, u), hn(t, e, u))
        : (xt && l && ye(e), (e.flags |= 1), Ae(t, e, n, u), e.child)
    );
  }
  function kf(t, e, n, l, s) {
    if ((qa(e), e.stateNode === null)) {
      var u = on,
        f = n.contextType;
      (typeof f == "object" && f !== null && (u = we(f)),
        (u = new n(l, u)),
        (e.memoizedState =
          u.state !== null && u.state !== void 0 ? u.state : null),
        (u.updater = zr),
        (e.stateNode = u),
        (u._reactInternals = e),
        (u = e.stateNode),
        (u.props = l),
        (u.state = e.memoizedState),
        (u.refs = {}),
        $u(e),
        (f = n.contextType),
        (u.context = typeof f == "object" && f !== null ? we(f) : on),
        (u.state = e.memoizedState),
        (f = n.getDerivedStateFromProps),
        typeof f == "function" && (Tr(e, n, f, l), (u.state = e.memoizedState)),
        typeof n.getDerivedStateFromProps == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function" ||
          (typeof u.UNSAFE_componentWillMount != "function" &&
            typeof u.componentWillMount != "function") ||
          ((f = u.state),
          typeof u.componentWillMount == "function" && u.componentWillMount(),
          typeof u.UNSAFE_componentWillMount == "function" &&
            u.UNSAFE_componentWillMount(),
          f !== u.state && zr.enqueueReplaceState(u, u.state, null),
          zo(e, l, u, s),
          To(),
          (u.state = e.memoizedState)),
        typeof u.componentDidMount == "function" && (e.flags |= 4194308),
        (l = !0));
    } else if (t === null) {
      u = e.stateNode;
      var d = e.memoizedProps,
        _ = Qa(n, d);
      u.props = _;
      var S = u.context,
        O = n.contextType;
      ((f = on), typeof O == "object" && O !== null && (f = we(O)));
      var B = n.getDerivedStateFromProps;
      ((O =
        typeof B == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function"),
        (d = e.pendingProps !== d),
        O ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((d || S !== f) && Of(e, u, l, f)),
        (Yn = !1));
      var E = e.memoizedState;
      ((u.state = E),
        zo(e, l, u, s),
        To(),
        (S = e.memoizedState),
        d || E !== S || Yn
          ? (typeof B == "function" && (Tr(e, n, B, l), (S = e.memoizedState)),
            (_ = Yn || Af(e, n, _, l, E, S, f))
              ? (O ||
                  (typeof u.UNSAFE_componentWillMount != "function" &&
                    typeof u.componentWillMount != "function") ||
                  (typeof u.componentWillMount == "function" &&
                    u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == "function" &&
                    u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == "function" &&
                  (e.flags |= 4194308))
              : (typeof u.componentDidMount == "function" &&
                  (e.flags |= 4194308),
                (e.memoizedProps = l),
                (e.memoizedState = S)),
            (u.props = l),
            (u.state = S),
            (u.context = f),
            (l = _))
          : (typeof u.componentDidMount == "function" && (e.flags |= 4194308),
            (l = !1)));
    } else {
      ((u = e.stateNode),
        tr(t, e),
        (f = e.memoizedProps),
        (O = Qa(n, f)),
        (u.props = O),
        (B = e.pendingProps),
        (E = u.context),
        (S = n.contextType),
        (_ = on),
        typeof S == "object" && S !== null && (_ = we(S)),
        (d = n.getDerivedStateFromProps),
        (S =
          typeof d == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function") ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((f !== B || E !== _) && Of(e, u, l, _)),
        (Yn = !1),
        (E = e.memoizedState),
        (u.state = E),
        zo(e, l, u, s),
        To());
      var w = e.memoizedState;
      f !== B ||
      E !== w ||
      Yn ||
      (t !== null && t.dependencies !== null && As(t.dependencies))
        ? (typeof d == "function" && (Tr(e, n, d, l), (w = e.memoizedState)),
          (O =
            Yn ||
            Af(e, n, O, l, E, w, _) ||
            (t !== null && t.dependencies !== null && As(t.dependencies)))
            ? (S ||
                (typeof u.UNSAFE_componentWillUpdate != "function" &&
                  typeof u.componentWillUpdate != "function") ||
                (typeof u.componentWillUpdate == "function" &&
                  u.componentWillUpdate(l, w, _),
                typeof u.UNSAFE_componentWillUpdate == "function" &&
                  u.UNSAFE_componentWillUpdate(l, w, _)),
              typeof u.componentDidUpdate == "function" && (e.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == "function" &&
                (e.flags |= 1024))
            : (typeof u.componentDidUpdate != "function" ||
                (f === t.memoizedProps && E === t.memoizedState) ||
                (e.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != "function" ||
                (f === t.memoizedProps && E === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = l),
              (e.memoizedState = w)),
          (u.props = l),
          (u.state = w),
          (u.context = _),
          (l = O))
        : (typeof u.componentDidUpdate != "function" ||
            (f === t.memoizedProps && E === t.memoizedState) ||
            (e.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != "function" ||
            (f === t.memoizedProps && E === t.memoizedState) ||
            (e.flags |= 1024),
          (l = !1));
    }
    return (
      (u = l),
      Ks(t, e),
      (l = (e.flags & 128) !== 0),
      u || l
        ? ((u = e.stateNode),
          (n =
            l && typeof n.getDerivedStateFromError != "function"
              ? null
              : u.render()),
          (e.flags |= 1),
          t !== null && l
            ? ((e.child = ka(e, t.child, null, s)),
              (e.child = ka(e, null, n, s)))
            : Ae(t, e, n, s),
          (e.memoizedState = u.state),
          (t = e.child))
        : (t = hn(t, e, s)),
      t
    );
  }
  function Vf(t, e, n, l) {
    return (un(), (e.flags |= 256), Ae(t, e, n, l), e.child);
  }
  var wr = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Ar(t) {
    return { baseLanes: t, cachePool: Dc() };
  }
  function Or(t, e, n) {
    return ((t = t !== null ? t.childLanes & ~n : 0), e && (t |= ai), t);
  }
  function Qf(t, e, n) {
    var l = e.pendingProps,
      s = !1,
      u = (e.flags & 128) !== 0,
      f;
    if (
      ((f = u) ||
        (f =
          t !== null && t.memoizedState === null ? !1 : (ue.current & 2) !== 0),
      f && ((s = !0), (e.flags &= -129)),
      (f = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (xt) {
        if (
          (s ? Vn(e) : Qn(),
          (t = Nt)
            ? ((t = td(t, Ve)),
              (t = t !== null && t.data !== "&" ? t : null),
              t !== null &&
                ((e.memoizedState = {
                  dehydrated: t,
                  treeContext: z !== null ? { id: D, overflow: k } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = mo(t)),
                (n.return = e),
                (e.child = n),
                (Ct = e),
                (Nt = null)))
            : (t = null),
          t === null)
        )
          throw Xi(e);
        return (hc(t) ? (e.lanes = 32) : (e.lanes = 536870912), null);
      }
      var d = l.children;
      return (
        (l = l.fallback),
        s
          ? (Qn(),
            (s = e.mode),
            (d = Js({ mode: "hidden", children: d }, s)),
            (l = sn(l, s, n, null)),
            (d.return = e),
            (l.return = e),
            (d.sibling = l),
            (e.child = d),
            (l = e.child),
            (l.memoizedState = Ar(n)),
            (l.childLanes = Or(t, f, n)),
            (e.memoizedState = wr),
            Ao(null, l))
          : (Vn(e), Cr(e, d))
      );
    }
    var _ = t.memoizedState;
    if (_ !== null && ((d = _.dehydrated), d !== null)) {
      if (u)
        e.flags & 256
          ? (Vn(e), (e.flags &= -257), (e = Nr(t, e, n)))
          : e.memoizedState !== null
            ? (Qn(), (e.child = t.child), (e.flags |= 128), (e = null))
            : (Qn(),
              (d = l.fallback),
              (s = e.mode),
              (l = Js({ mode: "visible", children: l.children }, s)),
              (d = sn(d, s, n, null)),
              (d.flags |= 2),
              (l.return = e),
              (d.return = e),
              (l.sibling = d),
              (e.child = l),
              ka(e, t.child, null, n),
              (l = e.child),
              (l.memoizedState = Ar(n)),
              (l.childLanes = Or(t, f, n)),
              (e.memoizedState = wr),
              (e = Ao(null, l)));
      else if ((Vn(e), hc(d))) {
        if (((f = d.nextSibling && d.nextSibling.dataset), f)) var S = f.dgst;
        ((f = S),
          (l = Error(b(419))),
          (l.stack = ""),
          (l.digest = f),
          Ha({ value: l, source: null, stack: null }),
          (e = Nr(t, e, n)));
      } else if (
        (pe || bl(t, e, n, !1), (f = (n & t.childLanes) !== 0), pe || f)
      ) {
        if (
          ((f = Qt),
          f !== null && ((l = ns(f, n)), l !== 0 && l !== _.retryLane))
        )
          throw ((_.retryLane = l), di(t, l), We(f, t, l), Mr);
        (fc(d) || au(), (e = Nr(t, e, n)));
      } else
        fc(d)
          ? ((e.flags |= 192), (e.child = t.child), (e = null))
          : ((t = _.treeContext),
            (Nt = pi(d.nextSibling)),
            (Ct = e),
            (xt = !0),
            (Yi = null),
            (Ve = !1),
            t !== null && Ue(e, t),
            (e = Cr(e, l.children)),
            (e.flags |= 4096));
      return e;
    }
    return s
      ? (Qn(),
        (d = l.fallback),
        (s = e.mode),
        (_ = t.child),
        (S = _.sibling),
        (l = mi(_, { mode: "hidden", children: l.children })),
        (l.subtreeFlags = _.subtreeFlags & 65011712),
        S !== null ? (d = mi(S, d)) : ((d = sn(d, s, n, null)), (d.flags |= 2)),
        (d.return = e),
        (l.return = e),
        (l.sibling = d),
        (e.child = l),
        Ao(null, l),
        (l = e.child),
        (d = t.child.memoizedState),
        d === null
          ? (d = Ar(n))
          : ((s = d.cachePool),
            s !== null
              ? ((_ = me._currentValue),
                (s = s.parent !== _ ? { parent: _, pool: _ } : s))
              : (s = Dc()),
            (d = { baseLanes: d.baseLanes | n, cachePool: s })),
        (l.memoizedState = d),
        (l.childLanes = Or(t, f, n)),
        (e.memoizedState = wr),
        Ao(t.child, l))
      : (Vn(e),
        (n = t.child),
        (t = n.sibling),
        (n = mi(n, { mode: "visible", children: l.children })),
        (n.return = e),
        (n.sibling = null),
        t !== null &&
          ((f = e.deletions),
          f === null ? ((e.deletions = [t]), (e.flags |= 16)) : f.push(t)),
        (e.child = n),
        (e.memoizedState = null),
        n);
  }
  function Cr(t, e) {
    return (
      (e = Js({ mode: "visible", children: e }, t.mode)),
      (e.return = t),
      (t.child = e)
    );
  }
  function Js(t, e) {
    return ((t = Ne(22, t, null, e)), (t.lanes = 0), t);
  }
  function Nr(t, e, n) {
    return (
      ka(e, t.child, null, n),
      (t = Cr(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    );
  }
  function Pf(t, e, n) {
    t.lanes |= e;
    var l = t.alternate;
    (l !== null && (l.lanes |= e), Pu(t.return, e, n));
  }
  function Dr(t, e, n, l, s, u) {
    var f = t.memoizedState;
    f === null
      ? (t.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: l,
          tail: n,
          tailMode: s,
          treeForkCount: u,
        })
      : ((f.isBackwards = e),
        (f.rendering = null),
        (f.renderingStartTime = 0),
        (f.last = l),
        (f.tail = n),
        (f.tailMode = s),
        (f.treeForkCount = u));
  }
  function Kf(t, e, n) {
    var l = e.pendingProps,
      s = l.revealOrder,
      u = l.tail;
    l = l.children;
    var f = ue.current,
      d = (f & 2) !== 0;
    if (
      (d ? ((f = (f & 1) | 2), (e.flags |= 128)) : (f &= 1),
      j(ue, f),
      Ae(t, e, l, n),
      (l = xt ? h : 0),
      !d && t !== null && (t.flags & 128) !== 0)
    )
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && Pf(t, n, e);
        else if (t.tag === 19) Pf(t, n, e);
        else if (t.child !== null) {
          ((t.child.return = t), (t = t.child));
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) break t;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    switch (s) {
      case "forwards":
        for (n = e.child, s = null; n !== null; )
          ((t = n.alternate),
            t !== null && Us(t) === null && (s = n),
            (n = n.sibling));
        ((n = s),
          n === null
            ? ((s = e.child), (e.child = null))
            : ((s = n.sibling), (n.sibling = null)),
          Dr(e, !1, s, n, u, l));
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (n = null, s = e.child, e.child = null; s !== null; ) {
          if (((t = s.alternate), t !== null && Us(t) === null)) {
            e.child = s;
            break;
          }
          ((t = s.sibling), (s.sibling = n), (n = s), (s = t));
        }
        Dr(e, !0, n, null, u, l);
        break;
      case "together":
        Dr(e, !1, null, null, void 0, l);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function hn(t, e, n) {
    if (
      (t !== null && (e.dependencies = t.dependencies),
      (Jn |= e.lanes),
      (n & e.childLanes) === 0)
    )
      if (t !== null) {
        if ((bl(t, e, n, !1), (n & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(b(153));
    if (e.child !== null) {
      for (
        t = e.child, n = mi(t, t.pendingProps), e.child = n, n.return = e;
        t.sibling !== null;
      )
        ((t = t.sibling),
          (n = n.sibling = mi(t, t.pendingProps)),
          (n.return = e));
      n.sibling = null;
    }
    return e.child;
  }
  function Br(t, e) {
    return (t.lanes & e) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && As(t)));
  }
  function nm(t, e, n) {
    switch (e.tag) {
      case 3:
        (Ft(e, e.stateNode.containerInfo),
          Gn(e, me, t.memoizedState.cache),
          un());
        break;
      case 27:
      case 5:
        Pi(e);
        break;
      case 4:
        Ft(e, e.stateNode.containerInfo);
        break;
      case 10:
        Gn(e, e.type, e.memoizedProps.value);
        break;
      case 31:
        if (e.memoizedState !== null) return ((e.flags |= 128), lr(e), null);
        break;
      case 13:
        var l = e.memoizedState;
        if (l !== null)
          return l.dehydrated !== null
            ? (Vn(e), (e.flags |= 128), null)
            : (n & e.child.childLanes) !== 0
              ? Qf(t, e, n)
              : (Vn(e), (t = hn(t, e, n)), t !== null ? t.sibling : null);
        Vn(e);
        break;
      case 19:
        var s = (t.flags & 128) !== 0;
        if (
          ((l = (n & e.childLanes) !== 0),
          l || (bl(t, e, n, !1), (l = (n & e.childLanes) !== 0)),
          s)
        ) {
          if (l) return Kf(t, e, n);
          e.flags |= 128;
        }
        if (
          ((s = e.memoizedState),
          s !== null &&
            ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
          j(ue, ue.current),
          l)
        )
          break;
        return null;
      case 22:
        return ((e.lanes = 0), qf(t, e, n, e.pendingProps));
      case 24:
        Gn(e, me, t.memoizedState.cache);
    }
    return hn(t, e, n);
  }
  function Jf(t, e, n) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) pe = !0;
      else {
        if (!Br(t, n) && (e.flags & 128) === 0) return ((pe = !1), nm(t, e, n));
        pe = (t.flags & 131072) !== 0;
      }
    else ((pe = !1), xt && (e.flags & 1048576) !== 0 && mt(e, h, e.index));
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          var l = e.pendingProps;
          if (((t = Ya(e.elementType)), (e.type = t), typeof t == "function"))
            vl(t)
              ? ((l = Qa(t, l)), (e.tag = 1), (e = kf(null, e, t, l, n)))
              : ((e.tag = 0), (e = Lr(null, e, t, l, n)));
          else {
            if (t != null) {
              var s = t.$$typeof;
              if (s === Pt) {
                ((e.tag = 11), (e = Uf(null, e, t, l, n)));
                break t;
              } else if (s === ft) {
                ((e.tag = 14), (e = Hf(null, e, t, l, n)));
                break t;
              }
            }
            throw ((e = yt(t) || t), Error(b(306, e, "")));
          }
        }
        return e;
      case 0:
        return Lr(t, e, e.type, e.pendingProps, n);
      case 1:
        return ((l = e.type), (s = Qa(l, e.pendingProps)), kf(t, e, l, s, n));
      case 3:
        t: {
          if ((Ft(e, e.stateNode.containerInfo), t === null))
            throw Error(b(387));
          l = e.pendingProps;
          var u = e.memoizedState;
          ((s = u.element), tr(t, e), zo(e, l, null, n));
          var f = e.memoizedState;
          if (
            ((l = f.cache),
            Gn(e, me, l),
            l !== u.cache && Ku(e, [me], n, !0),
            To(),
            (l = f.element),
            u.isDehydrated)
          )
            if (
              ((u = { element: l, isDehydrated: !1, cache: f.cache }),
              (e.updateQueue.baseState = u),
              (e.memoizedState = u),
              e.flags & 256)
            ) {
              e = Vf(t, e, l, n);
              break t;
            } else if (l !== s) {
              ((s = a(Error(b(424)), e)), Ha(s), (e = Vf(t, e, l, n)));
              break t;
            } else {
              switch (((t = e.stateNode.containerInfo), t.nodeType)) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (
                Nt = pi(t.firstChild),
                  Ct = e,
                  xt = !0,
                  Yi = null,
                  Ve = !0,
                  n = jc(e, null, l, n),
                  e.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
            }
          else {
            if ((un(), l === s)) {
              e = hn(t, e, n);
              break t;
            }
            Ae(t, e, l, n);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          Ks(t, e),
          t === null
            ? (n = od(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = n)
              : xt ||
                ((n = e.type),
                (t = e.pendingProps),
                (l = fu(Q.current).createElement(n)),
                (l[he] = e),
                (l[Se] = t),
                Oe(l, n, t),
                de(l),
                (e.stateNode = l))
            : (e.memoizedState = od(
                e.type,
                t.memoizedProps,
                e.pendingProps,
                t.memoizedState,
              )),
          null
        );
      case 27:
        return (
          Pi(e),
          t === null &&
            xt &&
            ((l = e.stateNode = nd(e.type, e.pendingProps, Q.current)),
            (Ct = e),
            (Ve = !0),
            (s = Nt),
            ta(e.type) ? ((dc = s), (Nt = pi(l.firstChild))) : (Nt = s)),
          Ae(t, e, e.pendingProps.children, n),
          Ks(t, e),
          t === null && (e.flags |= 4194304),
          e.child
        );
      case 5:
        return (
          t === null &&
            xt &&
            ((s = l = Nt) &&
              ((l = Dm(l, e.type, e.pendingProps, Ve)),
              l !== null
                ? ((e.stateNode = l),
                  (Ct = e),
                  (Nt = pi(l.firstChild)),
                  (Ve = !1),
                  (s = !0))
                : (s = !1)),
            s || Xi(e)),
          Pi(e),
          (s = e.type),
          (u = e.pendingProps),
          (f = t !== null ? t.memoizedProps : null),
          (l = u.children),
          uc(s, u) ? (l = null) : f !== null && uc(s, f) && (e.flags |= 32),
          e.memoizedState !== null &&
            ((s = sr(t, e, Kd, null, null, n)), (ko._currentValue = s)),
          Ks(t, e),
          Ae(t, e, l, n),
          e.child
        );
      case 6:
        return (
          t === null &&
            xt &&
            ((t = n = Nt) &&
              ((n = Bm(n, e.pendingProps, Ve)),
              n !== null
                ? ((e.stateNode = n), (Ct = e), (Nt = null), (t = !0))
                : (t = !1)),
            t || Xi(e)),
          null
        );
      case 13:
        return Qf(t, e, n);
      case 4:
        return (
          Ft(e, e.stateNode.containerInfo),
          (l = e.pendingProps),
          t === null ? (e.child = ka(e, null, l, n)) : Ae(t, e, l, n),
          e.child
        );
      case 11:
        return Uf(t, e, e.type, e.pendingProps, n);
      case 7:
        return (Ae(t, e, e.pendingProps, n), e.child);
      case 8:
        return (Ae(t, e, e.pendingProps.children, n), e.child);
      case 12:
        return (Ae(t, e, e.pendingProps.children, n), e.child);
      case 10:
        return (
          (l = e.pendingProps),
          Gn(e, e.type, l.value),
          Ae(t, e, l.children, n),
          e.child
        );
      case 9:
        return (
          (s = e.type._context),
          (l = e.pendingProps.children),
          qa(e),
          (s = we(s)),
          (l = l(s)),
          (e.flags |= 1),
          Ae(t, e, l, n),
          e.child
        );
      case 14:
        return Hf(t, e, e.type, e.pendingProps, n);
      case 15:
        return jf(t, e, e.type, e.pendingProps, n);
      case 19:
        return Kf(t, e, n);
      case 31:
        return im(t, e, n);
      case 22:
        return qf(t, e, n, e.pendingProps);
      case 24:
        return (
          qa(e),
          (l = we(me)),
          t === null
            ? ((s = Fu()),
              s === null &&
                ((s = Qt),
                (u = Ju()),
                (s.pooledCache = u),
                u.refCount++,
                u !== null && (s.pooledCacheLanes |= n),
                (s = u)),
              (e.memoizedState = { parent: l, cache: s }),
              $u(e),
              Gn(e, me, s))
            : ((t.lanes & n) !== 0 && (tr(t, e), zo(e, null, null, n), To()),
              (s = t.memoizedState),
              (u = e.memoizedState),
              s.parent !== l
                ? ((s = { parent: l, cache: l }),
                  (e.memoizedState = s),
                  e.lanes === 0 &&
                    (e.memoizedState = e.updateQueue.baseState = s),
                  Gn(e, me, l))
                : ((l = u.cache),
                  Gn(e, me, l),
                  l !== s.cache && Ku(e, [me], n, !0))),
          Ae(t, e, e.pendingProps.children, n),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(b(156, e.tag));
  }
  function dn(t) {
    t.flags |= 4;
  }
  function Zr(t, e, n, l, s) {
    if (((e = (t.mode & 32) !== 0) && (e = !1), e)) {
      if (((t.flags |= 16777216), (s & 335544128) === s))
        if (t.stateNode.complete) t.flags |= 8192;
        else if (Sh()) t.flags |= 8192;
        else throw ((Xa = Ds), Iu);
    } else t.flags &= -16777217;
  }
  function Wf(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !fd(e)))
      if (Sh()) t.flags |= 8192;
      else throw ((Xa = Ds), Iu);
  }
  function Ws(t, e) {
    (e !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((e = t.tag !== 22 ? ts() : 536870912), (t.lanes |= e), (Nl |= e)));
  }
  function Oo(t, e) {
    if (!xt)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var n = null; e !== null; )
            (e.alternate !== null && (n = e), (e = e.sibling));
          n === null ? (t.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = t.tail;
          for (var l = null; n !== null; )
            (n.alternate !== null && (l = n), (n = n.sibling));
          l === null
            ? e || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (l.sibling = null);
      }
  }
  function Wt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      n = 0,
      l = 0;
    if (e)
      for (var s = t.child; s !== null; )
        ((n |= s.lanes | s.childLanes),
          (l |= s.subtreeFlags & 65011712),
          (l |= s.flags & 65011712),
          (s.return = t),
          (s = s.sibling));
    else
      for (s = t.child; s !== null; )
        ((n |= s.lanes | s.childLanes),
          (l |= s.subtreeFlags),
          (l |= s.flags),
          (s.return = t),
          (s = s.sibling));
    return ((t.subtreeFlags |= l), (t.childLanes = n), e);
  }
  function am(t, e, n) {
    var l = e.pendingProps;
    switch ((ne(e), e.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (Wt(e), null);
      case 1:
        return (Wt(e), null);
      case 3:
        return (
          (n = e.stateNode),
          (l = null),
          t !== null && (l = t.memoizedState.cache),
          e.memoizedState.cache !== l && (e.flags |= 2048),
          rn(me),
          It(),
          n.pendingContext &&
            ((n.context = n.pendingContext), (n.pendingContext = null)),
          (t === null || t.child === null) &&
            (Mi(e)
              ? dn(e)
              : t === null ||
                (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                ((e.flags |= 1024), vo())),
          Wt(e),
          null
        );
      case 26:
        var s = e.type,
          u = e.memoizedState;
        return (
          t === null
            ? (dn(e),
              u !== null ? (Wt(e), Wf(e, u)) : (Wt(e), Zr(e, s, null, l, n)))
            : u
              ? u !== t.memoizedState
                ? (dn(e), Wt(e), Wf(e, u))
                : (Wt(e), (e.flags &= -16777217))
              : ((t = t.memoizedProps),
                t !== l && dn(e),
                Wt(e),
                Zr(e, s, t, l, n)),
          null
        );
      case 27:
        if (
          (xn(e),
          (n = Q.current),
          (s = e.type),
          t !== null && e.stateNode != null)
        )
          t.memoizedProps !== l && dn(e);
        else {
          if (!l) {
            if (e.stateNode === null) throw Error(b(166));
            return (Wt(e), null);
          }
          ((t = Y.current),
            Mi(e) ? po(e) : ((t = nd(s, l, n)), (e.stateNode = t), dn(e)));
        }
        return (Wt(e), null);
      case 5:
        if ((xn(e), (s = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== l && dn(e);
        else {
          if (!l) {
            if (e.stateNode === null) throw Error(b(166));
            return (Wt(e), null);
          }
          if (((u = Y.current), Mi(e))) po(e);
          else {
            var f = fu(Q.current);
            switch (u) {
              case 1:
                u = f.createElementNS("http://www.w3.org/2000/svg", s);
                break;
              case 2:
                u = f.createElementNS("http://www.w3.org/1998/Math/MathML", s);
                break;
              default:
                switch (s) {
                  case "svg":
                    u = f.createElementNS("http://www.w3.org/2000/svg", s);
                    break;
                  case "math":
                    u = f.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      s,
                    );
                    break;
                  case "script":
                    ((u = f.createElement("div")),
                      (u.innerHTML = "<script><\/script>"),
                      (u = u.removeChild(u.firstChild)));
                    break;
                  case "select":
                    ((u =
                      typeof l.is == "string"
                        ? f.createElement("select", { is: l.is })
                        : f.createElement("select")),
                      l.multiple
                        ? (u.multiple = !0)
                        : l.size && (u.size = l.size));
                    break;
                  default:
                    u =
                      typeof l.is == "string"
                        ? f.createElement(s, { is: l.is })
                        : f.createElement(s);
                }
            }
            ((u[he] = e), (u[Se] = l));
            t: for (f = e.child; f !== null; ) {
              if (f.tag === 5 || f.tag === 6) u.appendChild(f.stateNode);
              else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                ((f.child.return = f), (f = f.child));
                continue;
              }
              if (f === e) break t;
              for (; f.sibling === null; ) {
                if (f.return === null || f.return === e) break t;
                f = f.return;
              }
              ((f.sibling.return = f.return), (f = f.sibling));
            }
            e.stateNode = u;
            t: switch ((Oe(u, s, l), s)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!l.autoFocus;
                break t;
              case "img":
                l = !0;
                break t;
              default:
                l = !1;
            }
            l && dn(e);
          }
        }
        return (
          Wt(e),
          Zr(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, n),
          null
        );
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== l && dn(e);
        else {
          if (typeof l != "string" && e.stateNode === null) throw Error(b(166));
          if (((t = Q.current), Mi(e))) {
            if (
              ((t = e.stateNode),
              (n = e.memoizedProps),
              (l = null),
              (s = Ct),
              s !== null)
            )
              switch (s.tag) {
                case 27:
                case 5:
                  l = s.memoizedProps;
              }
            ((t[he] = e),
              (t = !!(
                t.nodeValue === n ||
                (l !== null && l.suppressHydrationWarning === !0) ||
                Qh(t.nodeValue, n)
              )),
              t || Xi(e, !0));
          } else
            ((t = fu(t).createTextNode(l)), (t[he] = e), (e.stateNode = t));
        }
        return (Wt(e), null);
      case 31:
        if (((n = e.memoizedState), t === null || t.memoizedState !== null)) {
          if (((l = Mi(e)), n !== null)) {
            if (t === null) {
              if (!l) throw Error(b(318));
              if (
                ((t = e.memoizedState),
                (t = t !== null ? t.dehydrated : null),
                !t)
              )
                throw Error(b(557));
              t[he] = e;
            } else
              (un(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4));
            (Wt(e), (t = !1));
          } else
            ((n = vo()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = n),
              (t = !0));
          if (!t) return e.flags & 256 ? (ii(e), e) : (ii(e), null);
          if ((e.flags & 128) !== 0) throw Error(b(558));
        }
        return (Wt(e), null);
      case 13:
        if (
          ((l = e.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((s = Mi(e)), l !== null && l.dehydrated !== null)) {
            if (t === null) {
              if (!s) throw Error(b(318));
              if (
                ((s = e.memoizedState),
                (s = s !== null ? s.dehydrated : null),
                !s)
              )
                throw Error(b(317));
              s[he] = e;
            } else
              (un(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4));
            (Wt(e), (s = !1));
          } else
            ((s = vo()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = s),
              (s = !0));
          if (!s) return e.flags & 256 ? (ii(e), e) : (ii(e), null);
        }
        return (
          ii(e),
          (e.flags & 128) !== 0
            ? ((e.lanes = n), e)
            : ((n = l !== null),
              (t = t !== null && t.memoizedState !== null),
              n &&
                ((l = e.child),
                (s = null),
                l.alternate !== null &&
                  l.alternate.memoizedState !== null &&
                  l.alternate.memoizedState.cachePool !== null &&
                  (s = l.alternate.memoizedState.cachePool.pool),
                (u = null),
                l.memoizedState !== null &&
                  l.memoizedState.cachePool !== null &&
                  (u = l.memoizedState.cachePool.pool),
                u !== s && (l.flags |= 2048)),
              n !== t && n && (e.child.flags |= 8192),
              Ws(e, e.updateQueue),
              Wt(e),
              null)
        );
      case 4:
        return (It(), t === null && nc(e.stateNode.containerInfo), Wt(e), null);
      case 10:
        return (rn(e.type), Wt(e), null);
      case 19:
        if ((A(ue), (l = e.memoizedState), l === null)) return (Wt(e), null);
        if (((s = (e.flags & 128) !== 0), (u = l.rendering), u === null))
          if (s) Oo(l, !1);
          else {
            if (le !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null; ) {
                if (((u = Us(t)), u !== null)) {
                  for (
                    e.flags |= 128,
                      Oo(l, !1),
                      t = u.updateQueue,
                      e.updateQueue = t,
                      Ws(e, t),
                      e.subtreeFlags = 0,
                      t = n,
                      n = e.child;
                    n !== null;
                  )
                    (ho(n, t), (n = n.sibling));
                  return (
                    j(ue, (ue.current & 1) | 2),
                    xt && tt(e, l.treeForkCount),
                    e.child
                  );
                }
                t = t.sibling;
              }
            l.tail !== null &&
              Be() > eu &&
              ((e.flags |= 128), (s = !0), Oo(l, !1), (e.lanes = 4194304));
          }
        else {
          if (!s)
            if (((t = Us(u)), t !== null)) {
              if (
                ((e.flags |= 128),
                (s = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                Ws(e, t),
                Oo(l, !0),
                l.tail === null &&
                  l.tailMode === "hidden" &&
                  !u.alternate &&
                  !xt)
              )
                return (Wt(e), null);
            } else
              2 * Be() - l.renderingStartTime > eu &&
                n !== 536870912 &&
                ((e.flags |= 128), (s = !0), Oo(l, !1), (e.lanes = 4194304));
          l.isBackwards
            ? ((u.sibling = e.child), (e.child = u))
            : ((t = l.last),
              t !== null ? (t.sibling = u) : (e.child = u),
              (l.last = u));
        }
        return l.tail !== null
          ? ((t = l.tail),
            (l.rendering = t),
            (l.tail = t.sibling),
            (l.renderingStartTime = Be()),
            (t.sibling = null),
            (n = ue.current),
            j(ue, s ? (n & 1) | 2 : n & 1),
            xt && tt(e, l.treeForkCount),
            t)
          : (Wt(e), null);
      case 22:
      case 23:
        return (
          ii(e),
          ar(),
          (l = e.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== l && (e.flags |= 8192)
            : l && (e.flags |= 8192),
          l
            ? (n & 536870912) !== 0 &&
              (e.flags & 128) === 0 &&
              (Wt(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : Wt(e),
          (n = e.updateQueue),
          n !== null && Ws(e, n.retryQueue),
          (n = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (n = t.memoizedState.cachePool.pool),
          (l = null),
          e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (l = e.memoizedState.cachePool.pool),
          l !== n && (e.flags |= 2048),
          t !== null && A(Ga),
          null
        );
      case 24:
        return (
          (n = null),
          t !== null && (n = t.memoizedState.cache),
          e.memoizedState.cache !== n && (e.flags |= 2048),
          rn(me),
          Wt(e),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(b(156, e.tag));
  }
  function lm(t, e) {
    switch ((ne(e), e.tag)) {
      case 1:
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 3:
        return (
          rn(me),
          It(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((e.flags = (t & -65537) | 128), e)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (xn(e), null);
      case 31:
        if (e.memoizedState !== null) {
          if ((ii(e), e.alternate === null)) throw Error(b(340));
          un();
        }
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 13:
        if (
          (ii(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (e.alternate === null) throw Error(b(340));
          un();
        }
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 19:
        return (A(ue), null);
      case 4:
        return (It(), null);
      case 10:
        return (rn(e.type), null);
      case 22:
      case 23:
        return (
          ii(e),
          ar(),
          t !== null && A(Ga),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return (rn(me), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Ff(t, e) {
    switch ((ne(e), e.tag)) {
      case 3:
        (rn(me), It());
        break;
      case 26:
      case 27:
      case 5:
        xn(e);
        break;
      case 4:
        It();
        break;
      case 31:
        e.memoizedState !== null && ii(e);
        break;
      case 13:
        ii(e);
        break;
      case 19:
        A(ue);
        break;
      case 10:
        rn(e.type);
        break;
      case 22:
      case 23:
        (ii(e), ar(), t !== null && A(Ga));
        break;
      case 24:
        rn(me);
    }
  }
  function Co(t, e) {
    try {
      var n = e.updateQueue,
        l = n !== null ? n.lastEffect : null;
      if (l !== null) {
        var s = l.next;
        n = s;
        do {
          if ((n.tag & t) === t) {
            l = void 0;
            var u = n.create,
              f = n.inst;
            ((l = u()), (f.destroy = l));
          }
          n = n.next;
        } while (n !== s);
      }
    } catch (d) {
      jt(e, e.return, d);
    }
  }
  function Pn(t, e, n) {
    try {
      var l = e.updateQueue,
        s = l !== null ? l.lastEffect : null;
      if (s !== null) {
        var u = s.next;
        l = u;
        do {
          if ((l.tag & t) === t) {
            var f = l.inst,
              d = f.destroy;
            if (d !== void 0) {
              ((f.destroy = void 0), (s = e));
              var _ = n,
                S = d;
              try {
                S();
              } catch (O) {
                jt(s, _, O);
              }
            }
          }
          l = l.next;
        } while (l !== u);
      }
    } catch (O) {
      jt(e, e.return, O);
    }
  }
  function If(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var n = t.stateNode;
      try {
        Gc(e, n);
      } catch (l) {
        jt(t, t.return, l);
      }
    }
  }
  function $f(t, e, n) {
    ((n.props = Qa(t.type, t.memoizedProps)), (n.state = t.memoizedState));
    try {
      n.componentWillUnmount();
    } catch (l) {
      jt(t, e, l);
    }
  }
  function No(t, e) {
    try {
      var n = t.ref;
      if (n !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var l = t.stateNode;
            break;
          case 30:
            l = t.stateNode;
            break;
          default:
            l = t.stateNode;
        }
        typeof n == "function" ? (t.refCleanup = n(l)) : (n.current = l);
      }
    } catch (s) {
      jt(t, e, s);
    }
  }
  function Vi(t, e) {
    var n = t.ref,
      l = t.refCleanup;
    if (n !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (s) {
          jt(t, e, s);
        } finally {
          ((t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null));
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (s) {
          jt(t, e, s);
        }
      else n.current = null;
  }
  function th(t) {
    var e = t.type,
      n = t.memoizedProps,
      l = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && l.focus();
          break t;
        case "img":
          n.src ? (l.src = n.src) : n.srcSet && (l.srcset = n.srcSet);
      }
    } catch (s) {
      jt(t, t.return, s);
    }
  }
  function Rr(t, e, n) {
    try {
      var l = t.stateNode;
      (Lm(l, t.type, n, e), (l[Se] = e));
    } catch (s) {
      jt(t, t.return, s);
    }
  }
  function eh(t) {
    return (
      t.tag === 5 ||
      t.tag === 3 ||
      t.tag === 26 ||
      (t.tag === 27 && ta(t.type)) ||
      t.tag === 4
    );
  }
  function Ur(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || eh(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;
      ) {
        if (
          (t.tag === 27 && ta(t.type)) ||
          t.flags & 2 ||
          t.child === null ||
          t.tag === 4
        )
          continue t;
        ((t.child.return = t), (t = t.child));
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Hr(t, e, n) {
    var l = t.tag;
    if (l === 5 || l === 6)
      ((t = t.stateNode),
        e
          ? (n.nodeType === 9
              ? n.body
              : n.nodeName === "HTML"
                ? n.ownerDocument.body
                : n
            ).insertBefore(t, e)
          : ((e =
              n.nodeType === 9
                ? n.body
                : n.nodeName === "HTML"
                  ? n.ownerDocument.body
                  : n),
            e.appendChild(t),
            (n = n._reactRootContainer),
            n != null || e.onclick !== null || (e.onclick = Ge)));
    else if (
      l !== 4 &&
      (l === 27 && ta(t.type) && ((n = t.stateNode), (e = null)),
      (t = t.child),
      t !== null)
    )
      for (Hr(t, e, n), t = t.sibling; t !== null; )
        (Hr(t, e, n), (t = t.sibling));
  }
  function Fs(t, e, n) {
    var l = t.tag;
    if (l === 5 || l === 6)
      ((t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t));
    else if (
      l !== 4 &&
      (l === 27 && ta(t.type) && (n = t.stateNode), (t = t.child), t !== null)
    )
      for (Fs(t, e, n), t = t.sibling; t !== null; )
        (Fs(t, e, n), (t = t.sibling));
  }
  function ih(t) {
    var e = t.stateNode,
      n = t.memoizedProps;
    try {
      for (var l = t.type, s = e.attributes; s.length; )
        e.removeAttributeNode(s[0]);
      (Oe(e, l, n), (e[he] = t), (e[Se] = n));
    } catch (u) {
      jt(t, t.return, u);
    }
  }
  var mn = !1,
    ve = !1,
    jr = !1,
    nh = typeof WeakSet == "function" ? WeakSet : Set,
    Ee = null;
  function om(t, e) {
    if (((t = t.containerInfo), (oc = gu), (t = Oa(t)), Ui(t))) {
      if ("selectionStart" in t)
        var n = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          n = ((n = t.ownerDocument) && n.defaultView) || window;
          var l = n.getSelection && n.getSelection();
          if (l && l.rangeCount !== 0) {
            n = l.anchorNode;
            var s = l.anchorOffset,
              u = l.focusNode;
            l = l.focusOffset;
            try {
              (n.nodeType, u.nodeType);
            } catch {
              n = null;
              break t;
            }
            var f = 0,
              d = -1,
              _ = -1,
              S = 0,
              O = 0,
              B = t,
              E = null;
            e: for (;;) {
              for (
                var w;
                B !== n || (s !== 0 && B.nodeType !== 3) || (d = f + s),
                  B !== u || (l !== 0 && B.nodeType !== 3) || (_ = f + l),
                  B.nodeType === 3 && (f += B.nodeValue.length),
                  (w = B.firstChild) !== null;
              )
                ((E = B), (B = w));
              for (;;) {
                if (B === t) break e;
                if (
                  (E === n && ++S === s && (d = f),
                  E === u && ++O === l && (_ = f),
                  (w = B.nextSibling) !== null)
                )
                  break;
                ((B = E), (E = B.parentNode));
              }
              B = w;
            }
            n = d === -1 || _ === -1 ? null : { start: d, end: _ };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      sc = { focusedElem: t, selectionRange: n }, gu = !1, Ee = e;
      Ee !== null;
    )
      if (
        ((e = Ee), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null)
      )
        ((t.return = e), (Ee = t));
      else
        for (; Ee !== null; ) {
          switch (((e = Ee), (u = e.alternate), (t = e.flags), e.tag)) {
            case 0:
              if (
                (t & 4) !== 0 &&
                ((t = e.updateQueue),
                (t = t !== null ? t.events : null),
                t !== null)
              )
                for (n = 0; n < t.length; n++)
                  ((s = t[n]), (s.ref.impl = s.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && u !== null) {
                ((t = void 0),
                  (n = e),
                  (s = u.memoizedProps),
                  (u = u.memoizedState),
                  (l = n.stateNode));
                try {
                  var K = Qa(n.type, s);
                  ((t = l.getSnapshotBeforeUpdate(K, u)),
                    (l.__reactInternalSnapshotBeforeUpdate = t));
                } catch (at) {
                  jt(n, n.return, at);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = e.stateNode.containerInfo), (n = t.nodeType), n === 9)
                )
                  cc(t);
                else if (n === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      cc(t);
                      break;
                    default:
                      t.textContent = "";
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
              if ((t & 1024) !== 0) throw Error(b(163));
          }
          if (((t = e.sibling), t !== null)) {
            ((t.return = e.return), (Ee = t));
            break;
          }
          Ee = e.return;
        }
  }
  function ah(t, e, n) {
    var l = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        (pn(t, n), l & 4 && Co(5, n));
        break;
      case 1:
        if ((pn(t, n), l & 4))
          if (((t = n.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (f) {
              jt(n, n.return, f);
            }
          else {
            var s = Qa(n.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(s, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (f) {
              jt(n, n.return, f);
            }
          }
        (l & 64 && If(n), l & 512 && No(n, n.return));
        break;
      case 3:
        if ((pn(t, n), l & 64 && ((t = n.updateQueue), t !== null))) {
          if (((e = null), n.child !== null))
            switch (n.child.tag) {
              case 27:
              case 5:
                e = n.child.stateNode;
                break;
              case 1:
                e = n.child.stateNode;
            }
          try {
            Gc(t, e);
          } catch (f) {
            jt(n, n.return, f);
          }
        }
        break;
      case 27:
        e === null && l & 4 && ih(n);
      case 26:
      case 5:
        (pn(t, n), e === null && l & 4 && th(n), l & 512 && No(n, n.return));
        break;
      case 12:
        pn(t, n);
        break;
      case 31:
        (pn(t, n), l & 4 && sh(t, n));
        break;
      case 13:
        (pn(t, n),
          l & 4 && uh(t, n),
          l & 64 &&
            ((t = n.memoizedState),
            t !== null &&
              ((t = t.dehydrated),
              t !== null && ((n = _m.bind(null, n)), Zm(t, n)))));
        break;
      case 22:
        if (((l = n.memoizedState !== null || mn), !l)) {
          ((e = (e !== null && e.memoizedState !== null) || ve), (s = mn));
          var u = ve;
          ((mn = l),
            (ve = e) && !u ? vn(t, n, (n.subtreeFlags & 8772) !== 0) : pn(t, n),
            (mn = s),
            (ve = u));
        }
        break;
      case 30:
        break;
      default:
        pn(t, n);
    }
  }
  function lh(t) {
    var e = t.alternate;
    (e !== null && ((t.alternate = null), lh(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && Kl(e)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null));
  }
  var te = null,
    Qe = !1;
  function _n(t, e, n) {
    for (n = n.child; n !== null; ) (oh(t, e, n), (n = n.sibling));
  }
  function oh(t, e, n) {
    if (Me && typeof Me.onCommitFiberUnmount == "function")
      try {
        Me.onCommitFiberUnmount(Sn, n);
      } catch {}
    switch (n.tag) {
      case 26:
        (ve || Vi(n, e),
          _n(t, e, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n)));
        break;
      case 27:
        ve || Vi(n, e);
        var l = te,
          s = Qe;
        (ta(n.type) && ((te = n.stateNode), (Qe = !1)),
          _n(t, e, n),
          Go(n.stateNode),
          (te = l),
          (Qe = s));
        break;
      case 5:
        ve || Vi(n, e);
      case 6:
        if (
          ((l = te),
          (s = Qe),
          (te = null),
          _n(t, e, n),
          (te = l),
          (Qe = s),
          te !== null)
        )
          if (Qe)
            try {
              (te.nodeType === 9
                ? te.body
                : te.nodeName === "HTML"
                  ? te.ownerDocument.body
                  : te
              ).removeChild(n.stateNode);
            } catch (u) {
              jt(n, e, u);
            }
          else
            try {
              te.removeChild(n.stateNode);
            } catch (u) {
              jt(n, e, u);
            }
        break;
      case 18:
        te !== null &&
          (Qe
            ? ((t = te),
              Ih(
                t.nodeType === 9
                  ? t.body
                  : t.nodeName === "HTML"
                    ? t.ownerDocument.body
                    : t,
                n.stateNode,
              ),
              ql(t))
            : Ih(te, n.stateNode));
        break;
      case 4:
        ((l = te),
          (s = Qe),
          (te = n.stateNode.containerInfo),
          (Qe = !0),
          _n(t, e, n),
          (te = l),
          (Qe = s));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (Pn(2, n, e), ve || Pn(4, n, e), _n(t, e, n));
        break;
      case 1:
        (ve ||
          (Vi(n, e),
          (l = n.stateNode),
          typeof l.componentWillUnmount == "function" && $f(n, e, l)),
          _n(t, e, n));
        break;
      case 21:
        _n(t, e, n);
        break;
      case 22:
        ((ve = (l = ve) || n.memoizedState !== null), _n(t, e, n), (ve = l));
        break;
      default:
        _n(t, e, n);
    }
  }
  function sh(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate), t !== null && ((t = t.memoizedState), t !== null))
    ) {
      t = t.dehydrated;
      try {
        ql(t);
      } catch (n) {
        jt(e, e.return, n);
      }
    }
  }
  function uh(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        ql(t);
      } catch (n) {
        jt(e, e.return, n);
      }
  }
  function sm(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return (e === null && (e = t.stateNode = new nh()), e);
      case 22:
        return (
          (t = t.stateNode),
          (e = t._retryCache),
          e === null && (e = t._retryCache = new nh()),
          e
        );
      default:
        throw Error(b(435, t.tag));
    }
  }
  function Is(t, e) {
    var n = sm(t);
    e.forEach(function (l) {
      if (!n.has(l)) {
        n.add(l);
        var s = pm.bind(null, t, l);
        l.then(s, s);
      }
    });
  }
  function Pe(t, e) {
    var n = e.deletions;
    if (n !== null)
      for (var l = 0; l < n.length; l++) {
        var s = n[l],
          u = t,
          f = e,
          d = f;
        t: for (; d !== null; ) {
          switch (d.tag) {
            case 27:
              if (ta(d.type)) {
                ((te = d.stateNode), (Qe = !1));
                break t;
              }
              break;
            case 5:
              ((te = d.stateNode), (Qe = !1));
              break t;
            case 3:
            case 4:
              ((te = d.stateNode.containerInfo), (Qe = !0));
              break t;
          }
          d = d.return;
        }
        if (te === null) throw Error(b(160));
        (oh(u, f, s),
          (te = null),
          (Qe = !1),
          (u = s.alternate),
          u !== null && (u.return = null),
          (s.return = null));
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; ) (rh(e, t), (e = e.sibling));
  }
  var wi = null;
  function rh(t, e) {
    var n = t.alternate,
      l = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (Pe(e, t),
          Ke(t),
          l & 4 && (Pn(3, t, t.return), Co(3, t), Pn(5, t, t.return)));
        break;
      case 1:
        (Pe(e, t),
          Ke(t),
          l & 512 && (ve || n === null || Vi(n, n.return)),
          l & 64 &&
            mn &&
            ((t = t.updateQueue),
            t !== null &&
              ((l = t.callbacks),
              l !== null &&
                ((n = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = n === null ? l : n.concat(l))))));
        break;
      case 26:
        var s = wi;
        if (
          (Pe(e, t),
          Ke(t),
          l & 512 && (ve || n === null || Vi(n, n.return)),
          l & 4)
        ) {
          var u = n !== null ? n.memoizedState : null;
          if (((l = t.memoizedState), n === null))
            if (l === null)
              if (t.stateNode === null) {
                t: {
                  ((l = t.type),
                    (n = t.memoizedProps),
                    (s = s.ownerDocument || s));
                  e: switch (l) {
                    case "title":
                      ((u = s.getElementsByTagName("title")[0]),
                        (!u ||
                          u[ma] ||
                          u[he] ||
                          u.namespaceURI === "http://www.w3.org/2000/svg" ||
                          u.hasAttribute("itemprop")) &&
                          ((u = s.createElement(l)),
                          s.head.insertBefore(
                            u,
                            s.querySelector("head > title"),
                          )),
                        Oe(u, l, n),
                        (u[he] = t),
                        de(u),
                        (l = u));
                      break t;
                    case "link":
                      var f = rd("link", "href", s).get(l + (n.href || ""));
                      if (f) {
                        for (var d = 0; d < f.length; d++)
                          if (
                            ((u = f[d]),
                            u.getAttribute("href") ===
                              (n.href == null || n.href === ""
                                ? null
                                : n.href) &&
                              u.getAttribute("rel") ===
                                (n.rel == null ? null : n.rel) &&
                              u.getAttribute("title") ===
                                (n.title == null ? null : n.title) &&
                              u.getAttribute("crossorigin") ===
                                (n.crossOrigin == null ? null : n.crossOrigin))
                          ) {
                            f.splice(d, 1);
                            break e;
                          }
                      }
                      ((u = s.createElement(l)),
                        Oe(u, l, n),
                        s.head.appendChild(u));
                      break;
                    case "meta":
                      if (
                        (f = rd("meta", "content", s).get(
                          l + (n.content || ""),
                        ))
                      ) {
                        for (d = 0; d < f.length; d++)
                          if (
                            ((u = f[d]),
                            u.getAttribute("content") ===
                              (n.content == null ? null : "" + n.content) &&
                              u.getAttribute("name") ===
                                (n.name == null ? null : n.name) &&
                              u.getAttribute("property") ===
                                (n.property == null ? null : n.property) &&
                              u.getAttribute("http-equiv") ===
                                (n.httpEquiv == null ? null : n.httpEquiv) &&
                              u.getAttribute("charset") ===
                                (n.charSet == null ? null : n.charSet))
                          ) {
                            f.splice(d, 1);
                            break e;
                          }
                      }
                      ((u = s.createElement(l)),
                        Oe(u, l, n),
                        s.head.appendChild(u));
                      break;
                    default:
                      throw Error(b(468, l));
                  }
                  ((u[he] = t), de(u), (l = u));
                }
                t.stateNode = l;
              } else cd(s, t.type, t.stateNode);
            else t.stateNode = ud(s, l, t.memoizedProps);
          else
            u !== l
              ? (u === null
                  ? n.stateNode !== null &&
                    ((n = n.stateNode), n.parentNode.removeChild(n))
                  : u.count--,
                l === null
                  ? cd(s, t.type, t.stateNode)
                  : ud(s, l, t.memoizedProps))
              : l === null &&
                t.stateNode !== null &&
                Rr(t, t.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        (Pe(e, t),
          Ke(t),
          l & 512 && (ve || n === null || Vi(n, n.return)),
          n !== null && l & 4 && Rr(t, t.memoizedProps, n.memoizedProps));
        break;
      case 5:
        if (
          (Pe(e, t),
          Ke(t),
          l & 512 && (ve || n === null || Vi(n, n.return)),
          t.flags & 32)
        ) {
          s = t.stateNode;
          try {
            si(s, "");
          } catch (K) {
            jt(t, t.return, K);
          }
        }
        (l & 4 &&
          t.stateNode != null &&
          ((s = t.memoizedProps), Rr(t, s, n !== null ? n.memoizedProps : s)),
          l & 1024 && (jr = !0));
        break;
      case 6:
        if ((Pe(e, t), Ke(t), l & 4)) {
          if (t.stateNode === null) throw Error(b(162));
          ((l = t.memoizedProps), (n = t.stateNode));
          try {
            n.nodeValue = l;
          } catch (K) {
            jt(t, t.return, K);
          }
        }
        break;
      case 3:
        if (
          ((mu = null),
          (s = wi),
          (wi = hu(e.containerInfo)),
          Pe(e, t),
          (wi = s),
          Ke(t),
          l & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            ql(e.containerInfo);
          } catch (K) {
            jt(t, t.return, K);
          }
        jr && ((jr = !1), ch(t));
        break;
      case 4:
        ((l = wi),
          (wi = hu(t.stateNode.containerInfo)),
          Pe(e, t),
          Ke(t),
          (wi = l));
        break;
      case 12:
        (Pe(e, t), Ke(t));
        break;
      case 31:
        (Pe(e, t),
          Ke(t),
          l & 4 &&
            ((l = t.updateQueue),
            l !== null && ((t.updateQueue = null), Is(t, l))));
        break;
      case 13:
        (Pe(e, t),
          Ke(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (n !== null && n.memoizedState !== null) &&
            (tu = Be()),
          l & 4 &&
            ((l = t.updateQueue),
            l !== null && ((t.updateQueue = null), Is(t, l))));
        break;
      case 22:
        s = t.memoizedState !== null;
        var _ = n !== null && n.memoizedState !== null,
          S = mn,
          O = ve;
        if (
          ((mn = S || s),
          (ve = O || _),
          Pe(e, t),
          (ve = O),
          (mn = S),
          Ke(t),
          l & 8192)
        )
          t: for (
            e = t.stateNode,
              e._visibility = s ? e._visibility & -2 : e._visibility | 1,
              s && (n === null || _ || mn || ve || Pa(t)),
              n = null,
              e = t;
            ;
          ) {
            if (e.tag === 5 || e.tag === 26) {
              if (n === null) {
                _ = n = e;
                try {
                  if (((u = _.stateNode), s))
                    ((f = u.style),
                      typeof f.setProperty == "function"
                        ? f.setProperty("display", "none", "important")
                        : (f.display = "none"));
                  else {
                    d = _.stateNode;
                    var B = _.memoizedProps.style,
                      E =
                        B != null && B.hasOwnProperty("display")
                          ? B.display
                          : null;
                    d.style.display =
                      E == null || typeof E == "boolean" ? "" : ("" + E).trim();
                  }
                } catch (K) {
                  jt(_, _.return, K);
                }
              }
            } else if (e.tag === 6) {
              if (n === null) {
                _ = e;
                try {
                  _.stateNode.nodeValue = s ? "" : _.memoizedProps;
                } catch (K) {
                  jt(_, _.return, K);
                }
              }
            } else if (e.tag === 18) {
              if (n === null) {
                _ = e;
                try {
                  var w = _.stateNode;
                  s ? $h(w, !0) : $h(_.stateNode, !1);
                } catch (K) {
                  jt(_, _.return, K);
                }
              }
            } else if (
              ((e.tag !== 22 && e.tag !== 23) ||
                e.memoizedState === null ||
                e === t) &&
              e.child !== null
            ) {
              ((e.child.return = e), (e = e.child));
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              (n === e && (n = null), (e = e.return));
            }
            (n === e && (n = null),
              (e.sibling.return = e.return),
              (e = e.sibling));
          }
        l & 4 &&
          ((l = t.updateQueue),
          l !== null &&
            ((n = l.retryQueue),
            n !== null && ((l.retryQueue = null), Is(t, n))));
        break;
      case 19:
        (Pe(e, t),
          Ke(t),
          l & 4 &&
            ((l = t.updateQueue),
            l !== null && ((t.updateQueue = null), Is(t, l))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (Pe(e, t), Ke(t));
    }
  }
  function Ke(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var n, l = t.return; l !== null; ) {
          if (eh(l)) {
            n = l;
            break;
          }
          l = l.return;
        }
        if (n == null) throw Error(b(160));
        switch (n.tag) {
          case 27:
            var s = n.stateNode,
              u = Ur(t);
            Fs(t, u, s);
            break;
          case 5:
            var f = n.stateNode;
            n.flags & 32 && (si(f, ""), (n.flags &= -33));
            var d = Ur(t);
            Fs(t, d, f);
            break;
          case 3:
          case 4:
            var _ = n.stateNode.containerInfo,
              S = Ur(t);
            Hr(t, S, _);
            break;
          default:
            throw Error(b(161));
        }
      } catch (O) {
        jt(t, t.return, O);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function ch(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        (ch(e),
          e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
          (t = t.sibling));
      }
  }
  function pn(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; ) (ah(t, e.alternate, e), (e = e.sibling));
  }
  function Pa(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (Pn(4, e, e.return), Pa(e));
          break;
        case 1:
          Vi(e, e.return);
          var n = e.stateNode;
          (typeof n.componentWillUnmount == "function" && $f(e, e.return, n),
            Pa(e));
          break;
        case 27:
          Go(e.stateNode);
        case 26:
        case 5:
          (Vi(e, e.return), Pa(e));
          break;
        case 22:
          e.memoizedState === null && Pa(e);
          break;
        case 30:
          Pa(e);
          break;
        default:
          Pa(e);
      }
      t = t.sibling;
    }
  }
  function vn(t, e, n) {
    for (n = n && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var l = e.alternate,
        s = t,
        u = e,
        f = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          (vn(s, u, n), Co(4, u));
          break;
        case 1:
          if (
            (vn(s, u, n),
            (l = u),
            (s = l.stateNode),
            typeof s.componentDidMount == "function")
          )
            try {
              s.componentDidMount();
            } catch (S) {
              jt(l, l.return, S);
            }
          if (((l = u), (s = l.updateQueue), s !== null)) {
            var d = l.stateNode;
            try {
              var _ = s.shared.hiddenCallbacks;
              if (_ !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < _.length; s++)
                  qc(_[s], d);
            } catch (S) {
              jt(l, l.return, S);
            }
          }
          (n && f & 64 && If(u), No(u, u.return));
          break;
        case 27:
          ih(u);
        case 26:
        case 5:
          (vn(s, u, n), n && l === null && f & 4 && th(u), No(u, u.return));
          break;
        case 12:
          vn(s, u, n);
          break;
        case 31:
          (vn(s, u, n), n && f & 4 && sh(s, u));
          break;
        case 13:
          (vn(s, u, n), n && f & 4 && uh(s, u));
          break;
        case 22:
          (u.memoizedState === null && vn(s, u, n), No(u, u.return));
          break;
        case 30:
          break;
        default:
          vn(s, u, n);
      }
      e = e.sibling;
    }
  }
  function qr(t, e) {
    var n = null;
    (t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (n = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (t = e.memoizedState.cachePool.pool),
      t !== n && (t != null && t.refCount++, n != null && go(n)));
  }
  function Gr(t, e) {
    ((t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && go(t)));
  }
  function Ai(t, e, n, l) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) (fh(t, e, n, l), (e = e.sibling));
  }
  function fh(t, e, n, l) {
    var s = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (Ai(t, e, n, l), s & 2048 && Co(9, e));
        break;
      case 1:
        Ai(t, e, n, l);
        break;
      case 3:
        (Ai(t, e, n, l),
          s & 2048 &&
            ((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && go(t))));
        break;
      case 12:
        if (s & 2048) {
          (Ai(t, e, n, l), (t = e.stateNode));
          try {
            var u = e.memoizedProps,
              f = u.id,
              d = u.onPostCommit;
            typeof d == "function" &&
              d(
                f,
                e.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0,
              );
          } catch (_) {
            jt(e, e.return, _);
          }
        } else Ai(t, e, n, l);
        break;
      case 31:
        Ai(t, e, n, l);
        break;
      case 13:
        Ai(t, e, n, l);
        break;
      case 23:
        break;
      case 22:
        ((u = e.stateNode),
          (f = e.alternate),
          e.memoizedState !== null
            ? u._visibility & 2
              ? Ai(t, e, n, l)
              : Do(t, e)
            : u._visibility & 2
              ? Ai(t, e, n, l)
              : ((u._visibility |= 2),
                Al(t, e, n, l, (e.subtreeFlags & 10256) !== 0 || !1)),
          s & 2048 && qr(f, e));
        break;
      case 24:
        (Ai(t, e, n, l), s & 2048 && Gr(e.alternate, e));
        break;
      default:
        Ai(t, e, n, l);
    }
  }
  function Al(t, e, n, l, s) {
    for (
      s = s && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child;
      e !== null;
    ) {
      var u = t,
        f = e,
        d = n,
        _ = l,
        S = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          (Al(u, f, d, _, s), Co(8, f));
          break;
        case 23:
          break;
        case 22:
          var O = f.stateNode;
          (f.memoizedState !== null
            ? O._visibility & 2
              ? Al(u, f, d, _, s)
              : Do(u, f)
            : ((O._visibility |= 2), Al(u, f, d, _, s)),
            s && S & 2048 && qr(f.alternate, f));
          break;
        case 24:
          (Al(u, f, d, _, s), s && S & 2048 && Gr(f.alternate, f));
          break;
        default:
          Al(u, f, d, _, s);
      }
      e = e.sibling;
    }
  }
  function Do(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var n = t,
          l = e,
          s = l.flags;
        switch (l.tag) {
          case 22:
            (Do(n, l), s & 2048 && qr(l.alternate, l));
            break;
          case 24:
            (Do(n, l), s & 2048 && Gr(l.alternate, l));
            break;
          default:
            Do(n, l);
        }
        e = e.sibling;
      }
  }
  var Bo = 8192;
  function Ol(t, e, n) {
    if (t.subtreeFlags & Bo)
      for (t = t.child; t !== null; ) (hh(t, e, n), (t = t.sibling));
  }
  function hh(t, e, n) {
    switch (t.tag) {
      case 26:
        (Ol(t, e, n),
          t.flags & Bo &&
            t.memoizedState !== null &&
            Pm(n, wi, t.memoizedState, t.memoizedProps));
        break;
      case 5:
        Ol(t, e, n);
        break;
      case 3:
      case 4:
        var l = wi;
        ((wi = hu(t.stateNode.containerInfo)), Ol(t, e, n), (wi = l));
        break;
      case 22:
        t.memoizedState === null &&
          ((l = t.alternate),
          l !== null && l.memoizedState !== null
            ? ((l = Bo), (Bo = 16777216), Ol(t, e, n), (Bo = l))
            : Ol(t, e, n));
        break;
      default:
        Ol(t, e, n);
    }
  }
  function dh(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do ((e = t.sibling), (t.sibling = null), (t = e));
      while (t !== null);
    }
  }
  function Zo(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var l = e[n];
          ((Ee = l), _h(l, t));
        }
      dh(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) (mh(t), (t = t.sibling));
  }
  function mh(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (Zo(t), t.flags & 2048 && Pn(9, t, t.return));
        break;
      case 3:
        Zo(t);
        break;
      case 12:
        Zo(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null &&
        e._visibility & 2 &&
        (t.return === null || t.return.tag !== 13)
          ? ((e._visibility &= -3), $s(t))
          : Zo(t);
        break;
      default:
        Zo(t);
    }
  }
  function $s(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var l = e[n];
          ((Ee = l), _h(l, t));
        }
      dh(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          (Pn(8, e, e.return), $s(e));
          break;
        case 22:
          ((n = e.stateNode),
            n._visibility & 2 && ((n._visibility &= -3), $s(e)));
          break;
        default:
          $s(e);
      }
      t = t.sibling;
    }
  }
  function _h(t, e) {
    for (; Ee !== null; ) {
      var n = Ee;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Pn(8, n, e);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var l = n.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          go(n.memoizedState.cache);
      }
      if (((l = n.child), l !== null)) ((l.return = n), (Ee = l));
      else
        t: for (n = t; Ee !== null; ) {
          l = Ee;
          var s = l.sibling,
            u = l.return;
          if ((lh(l), l === n)) {
            Ee = null;
            break t;
          }
          if (s !== null) {
            ((s.return = u), (Ee = s));
            break t;
          }
          Ee = u;
        }
    }
  }
  var um = {
      getCacheForType: function (t) {
        var e = we(me),
          n = e.data.get(t);
        return (n === void 0 && ((n = t()), e.data.set(t, n)), n);
      },
      cacheSignal: function () {
        return we(me).controller.signal;
      },
    },
    rm = typeof WeakMap == "function" ? WeakMap : Map,
    Zt = 0,
    Qt = null,
    St = null,
    Et = 0,
    Ht = 0,
    ni = null,
    Kn = !1,
    Cl = !1,
    Yr = !1,
    gn = 0,
    le = 0,
    Jn = 0,
    Ka = 0,
    Xr = 0,
    ai = 0,
    Nl = 0,
    Ro = null,
    Je = null,
    kr = !1,
    tu = 0,
    ph = 0,
    eu = 1 / 0,
    iu = null,
    Wn = null,
    be = 0,
    Fn = null,
    Dl = null,
    yn = 0,
    Vr = 0,
    Qr = null,
    vh = null,
    Uo = 0,
    Pr = null;
  function li() {
    return (Zt & 2) !== 0 && Et !== 0 ? Et & -Et : M.T !== null ? $r() : Ql();
  }
  function gh() {
    if (ai === 0)
      if ((Et & 536870912) === 0 || xt) {
        var t = fa;
        ((fa <<= 1), (fa & 3932160) === 0 && (fa = 262144), (ai = t));
      } else ai = 536870912;
    return ((t = ei.current), t !== null && (t.flags |= 32), ai);
  }
  function We(t, e, n) {
    (((t === Qt && (Ht === 2 || Ht === 9)) || t.cancelPendingCommit !== null) &&
      (Bl(t, 0), In(t, Et, ai, !1)),
      Fi(t, n),
      ((Zt & 2) === 0 || t !== Qt) &&
        (t === Qt &&
          ((Zt & 2) === 0 && (Ka |= n), le === 4 && In(t, Et, ai, !1)),
        Qi(t)));
  }
  function yh(t, e, n) {
    if ((Zt & 6) !== 0) throw Error(b(327));
    var l = (!n && (e & 127) === 0 && (e & t.expiredLanes) === 0) || da(t, e),
      s = l ? hm(t, e) : Jr(t, e, !0),
      u = l;
    do {
      if (s === 0) {
        Cl && !l && In(t, e, 0, !1);
        break;
      } else {
        if (((n = t.current.alternate), u && !cm(n))) {
          ((s = Jr(t, e, !1)), (u = !1));
          continue;
        }
        if (s === 2) {
          if (((u = e), t.errorRecoveryDisabledLanes & u)) var f = 0;
          else
            ((f = t.pendingLanes & -536870913),
              (f = f !== 0 ? f : f & 536870912 ? 536870912 : 0));
          if (f !== 0) {
            e = f;
            t: {
              var d = t;
              s = Ro;
              var _ = d.current.memoizedState.isDehydrated;
              if ((_ && (Bl(d, f).flags |= 256), (f = Jr(d, f, !1)), f !== 2)) {
                if (Yr && !_) {
                  ((d.errorRecoveryDisabledLanes |= u), (Ka |= u), (s = 4));
                  break t;
                }
                ((u = Je),
                  (Je = s),
                  u !== null &&
                    (Je === null ? (Je = u) : Je.push.apply(Je, u)));
              }
              s = f;
            }
            if (((u = !1), s !== 2)) continue;
          }
        }
        if (s === 1) {
          (Bl(t, 0), In(t, e, 0, !0));
          break;
        }
        t: {
          switch (((l = t), (u = s), u)) {
            case 0:
            case 1:
              throw Error(b(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              In(l, e, ai, !Kn);
              break t;
            case 2:
              Je = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(b(329));
          }
          if ((e & 62914560) === e && ((s = tu + 300 - Be()), 10 < s)) {
            if ((In(l, e, ai, !Kn), tl(l, 0, !0) !== 0)) break t;
            ((yn = e),
              (l.timeoutHandle = Wh(
                bh.bind(
                  null,
                  l,
                  n,
                  Je,
                  iu,
                  kr,
                  e,
                  ai,
                  Ka,
                  Nl,
                  Kn,
                  u,
                  "Throttled",
                  -0,
                  0,
                ),
                s,
              )));
            break t;
          }
          bh(l, n, Je, iu, kr, e, ai, Ka, Nl, Kn, u, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Qi(t);
  }
  function bh(t, e, n, l, s, u, f, d, _, S, O, B, E, w) {
    if (
      ((t.timeoutHandle = -1),
      (B = e.subtreeFlags),
      B & 8192 || (B & 16785408) === 16785408)
    ) {
      ((B = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Ge,
      }),
        hh(e, u, B));
      var K =
        (u & 62914560) === u ? tu - Be() : (u & 4194048) === u ? ph - Be() : 0;
      if (((K = Km(B, K)), K !== null)) {
        ((yn = u),
          (t.cancelPendingCommit = K(
            wh.bind(null, t, e, u, n, l, s, f, d, _, O, B, null, E, w),
          )),
          In(t, u, f, !S));
        return;
      }
    }
    wh(t, e, u, n, l, s, f, d, _);
  }
  function cm(t) {
    for (var e = t; ; ) {
      var n = e.tag;
      if (
        (n === 0 || n === 11 || n === 15) &&
        e.flags & 16384 &&
        ((n = e.updateQueue), n !== null && ((n = n.stores), n !== null))
      )
        for (var l = 0; l < n.length; l++) {
          var s = n[l],
            u = s.getSnapshot;
          s = s.value;
          try {
            if (!Te(u(), s)) return !1;
          } catch {
            return !1;
          }
        }
      if (((n = e.child), e.subtreeFlags & 16384 && n !== null))
        ((n.return = e), (e = n));
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    }
    return !0;
  }
  function In(t, e, n, l) {
    ((e &= ~Xr),
      (e &= ~Ka),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      l && (t.warmLanes |= e),
      (l = t.expirationTimes));
    for (var s = e; 0 < s; ) {
      var u = 31 - Ze(s),
        f = 1 << u;
      ((l[u] = -1), (s &= ~f));
    }
    n !== 0 && es(t, n, e);
  }
  function nu() {
    return (Zt & 6) === 0 ? (Ho(0), !1) : !0;
  }
  function Kr() {
    if (St !== null) {
      if (Ht === 0) var t = St.return;
      else ((t = St), (Li = ki = null), cr(t), (zl = null), (bo = 0), (t = St));
      for (; t !== null; ) (Ff(t.alternate, t), (t = t.return));
      St = null;
    }
  }
  function Bl(t, e) {
    var n = t.timeoutHandle;
    (n !== -1 && ((t.timeoutHandle = -1), Om(n)),
      (n = t.cancelPendingCommit),
      n !== null && ((t.cancelPendingCommit = null), n()),
      (yn = 0),
      Kr(),
      (Qt = t),
      (St = n = mi(t.current, null)),
      (Et = e),
      (Ht = 0),
      (ni = null),
      (Kn = !1),
      (Cl = da(t, e)),
      (Yr = !1),
      (Nl = ai = Xr = Ka = Jn = le = 0),
      (Je = Ro = null),
      (kr = !1),
      (e & 8) !== 0 && (e |= e & 32));
    var l = t.entangledLanes;
    if (l !== 0)
      for (t = t.entanglements, l &= e; 0 < l; ) {
        var s = 31 - Ze(l),
          u = 1 << s;
        ((e |= t[s]), (l &= ~u));
      }
    return ((gn = e), Za(), n);
  }
  function xh(t, e) {
    ((dt = null),
      (M.H = wo),
      e === Tl || e === Ns
        ? ((e = Rc()), (Ht = 3))
        : e === Iu
          ? ((e = Rc()), (Ht = 4))
          : (Ht =
              e === Mr
                ? 8
                : e !== null &&
                    typeof e == "object" &&
                    typeof e.then == "function"
                  ? 6
                  : 1),
      (ni = e),
      St === null && ((le = 1), Qs(t, a(e, t.current))));
  }
  function Sh() {
    var t = ei.current;
    return t === null
      ? !0
      : (Et & 4194048) === Et
        ? _i === null
        : (Et & 62914560) === Et || (Et & 536870912) !== 0
          ? t === _i
          : !1;
  }
  function Th() {
    var t = M.H;
    return ((M.H = wo), t === null ? wo : t);
  }
  function zh() {
    var t = M.A;
    return ((M.A = um), t);
  }
  function au() {
    ((le = 4),
      Kn || ((Et & 4194048) !== Et && ei.current !== null) || (Cl = !0),
      ((Jn & 134217727) === 0 && (Ka & 134217727) === 0) ||
        Qt === null ||
        In(Qt, Et, ai, !1));
  }
  function Jr(t, e, n) {
    var l = Zt;
    Zt |= 2;
    var s = Th(),
      u = zh();
    ((Qt !== t || Et !== e) && ((iu = null), Bl(t, e)), (e = !1));
    var f = le;
    t: do
      try {
        if (Ht !== 0 && St !== null) {
          var d = St,
            _ = ni;
          switch (Ht) {
            case 8:
              (Kr(), (f = 6));
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              ei.current === null && (e = !0);
              var S = Ht;
              if (((Ht = 0), (ni = null), Zl(t, d, _, S), n && Cl)) {
                f = 0;
                break t;
              }
              break;
            default:
              ((S = Ht), (Ht = 0), (ni = null), Zl(t, d, _, S));
          }
        }
        (fm(), (f = le));
        break;
      } catch (O) {
        xh(t, O);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (Li = ki = null),
      (Zt = l),
      (M.H = s),
      (M.A = u),
      St === null && ((Qt = null), (Et = 0), Za()),
      f
    );
  }
  function fm() {
    for (; St !== null; ) Eh(St);
  }
  function hm(t, e) {
    var n = Zt;
    Zt |= 2;
    var l = Th(),
      s = zh();
    Qt !== t || Et !== e
      ? ((iu = null), (eu = Be() + 500), Bl(t, e))
      : (Cl = da(t, e));
    t: do
      try {
        if (Ht !== 0 && St !== null) {
          e = St;
          var u = ni;
          e: switch (Ht) {
            case 1:
              ((Ht = 0), (ni = null), Zl(t, e, u, 1));
              break;
            case 2:
            case 9:
              if (Bc(u)) {
                ((Ht = 0), (ni = null), Mh(e));
                break;
              }
              ((e = function () {
                ((Ht !== 2 && Ht !== 9) || Qt !== t || (Ht = 7), Qi(t));
              }),
                u.then(e, e));
              break t;
            case 3:
              Ht = 7;
              break t;
            case 4:
              Ht = 5;
              break t;
            case 7:
              Bc(u)
                ? ((Ht = 0), (ni = null), Mh(e))
                : ((Ht = 0), (ni = null), Zl(t, e, u, 7));
              break;
            case 5:
              var f = null;
              switch (St.tag) {
                case 26:
                  f = St.memoizedState;
                case 5:
                case 27:
                  var d = St;
                  if (f ? fd(f) : d.stateNode.complete) {
                    ((Ht = 0), (ni = null));
                    var _ = d.sibling;
                    if (_ !== null) St = _;
                    else {
                      var S = d.return;
                      S !== null ? ((St = S), lu(S)) : (St = null);
                    }
                    break e;
                  }
              }
              ((Ht = 0), (ni = null), Zl(t, e, u, 5));
              break;
            case 6:
              ((Ht = 0), (ni = null), Zl(t, e, u, 6));
              break;
            case 8:
              (Kr(), (le = 6));
              break t;
            default:
              throw Error(b(462));
          }
        }
        dm();
        break;
      } catch (O) {
        xh(t, O);
      }
    while (!0);
    return (
      (Li = ki = null),
      (M.H = l),
      (M.A = s),
      (Zt = n),
      St !== null ? 0 : ((Qt = null), (Et = 0), Za(), le)
    );
  }
  function dm() {
    for (; St !== null && !Fo(); ) Eh(St);
  }
  function Eh(t) {
    var e = Jf(t.alternate, t, gn);
    ((t.memoizedProps = t.pendingProps), e === null ? lu(t) : (St = e));
  }
  function Mh(t) {
    var e = t,
      n = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = Xf(n, e, e.pendingProps, e.type, void 0, Et);
        break;
      case 11:
        e = Xf(n, e, e.pendingProps, e.type.render, e.ref, Et);
        break;
      case 5:
        cr(e);
      default:
        (Ff(n, e), (e = St = ho(e, gn)), (e = Jf(n, e, gn)));
    }
    ((t.memoizedProps = t.pendingProps), e === null ? lu(t) : (St = e));
  }
  function Zl(t, e, n, l) {
    ((Li = ki = null), cr(e), (zl = null), (bo = 0));
    var s = e.return;
    try {
      if (em(t, s, e, n, Et)) {
        ((le = 1), Qs(t, a(n, t.current)), (St = null));
        return;
      }
    } catch (u) {
      if (s !== null) throw ((St = s), u);
      ((le = 1), Qs(t, a(n, t.current)), (St = null));
      return;
    }
    e.flags & 32768
      ? (xt || l === 1
          ? (t = !0)
          : Cl || (Et & 536870912) !== 0
            ? (t = !1)
            : ((Kn = t = !0),
              (l === 2 || l === 9 || l === 3 || l === 6) &&
                ((l = ei.current),
                l !== null && l.tag === 13 && (l.flags |= 16384))),
        Lh(e, t))
      : lu(e);
  }
  function lu(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        Lh(e, Kn);
        return;
      }
      t = e.return;
      var n = am(e.alternate, e, gn);
      if (n !== null) {
        St = n;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        St = e;
        return;
      }
      St = e = t;
    } while (e !== null);
    le === 0 && (le = 5);
  }
  function Lh(t, e) {
    do {
      var n = lm(t.alternate, t);
      if (n !== null) {
        ((n.flags &= 32767), (St = n));
        return;
      }
      if (
        ((n = t.return),
        n !== null &&
          ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        St = t;
        return;
      }
      St = t = n;
    } while (t !== null);
    ((le = 6), (St = null));
  }
  function wh(t, e, n, l, s, u, f, d, _) {
    t.cancelPendingCommit = null;
    do ou();
    while (be !== 0);
    if ((Zt & 6) !== 0) throw Error(b(327));
    if (e !== null) {
      if (e === t.current) throw Error(b(177));
      if (
        ((u = e.lanes | e.childLanes),
        (u |= pl),
        Cu(t, n, u, f, d, _),
        t === Qt && ((St = Qt = null), (Et = 0)),
        (Dl = e),
        (Fn = t),
        (yn = n),
        (Vr = u),
        (Qr = s),
        (vh = l),
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            vm(ua, function () {
              return (Dh(), null);
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (l = (e.flags & 13878) !== 0),
        (e.subtreeFlags & 13878) !== 0 || l)
      ) {
        ((l = M.T), (M.T = null), (s = q.p), (q.p = 2), (f = Zt), (Zt |= 4));
        try {
          om(t, e, n);
        } finally {
          ((Zt = f), (q.p = s), (M.T = l));
        }
      }
      ((be = 1), Ah(), Oh(), Ch());
    }
  }
  function Ah() {
    if (be === 1) {
      be = 0;
      var t = Fn,
        e = Dl,
        n = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || n) {
        ((n = M.T), (M.T = null));
        var l = q.p;
        q.p = 2;
        var s = Zt;
        Zt |= 4;
        try {
          rh(e, t);
          var u = sc,
            f = Oa(t.containerInfo),
            d = u.focusedElem,
            _ = u.selectionRange;
          if (
            f !== d &&
            d &&
            d.ownerDocument &&
            hl(d.ownerDocument.documentElement, d)
          ) {
            if (_ !== null && Ui(d)) {
              var S = _.start,
                O = _.end;
              if ((O === void 0 && (O = S), "selectionStart" in d))
                ((d.selectionStart = S),
                  (d.selectionEnd = Math.min(O, d.value.length)));
              else {
                var B = d.ownerDocument || document,
                  E = (B && B.defaultView) || window;
                if (E.getSelection) {
                  var w = E.getSelection(),
                    K = d.textContent.length,
                    at = Math.min(_.start, K),
                    Xt = _.end === void 0 ? at : Math.min(_.end, K);
                  !w.extend && at > Xt && ((f = Xt), (Xt = at), (at = f));
                  var g = Aa(d, at),
                    v = Aa(d, Xt);
                  if (
                    g &&
                    v &&
                    (w.rangeCount !== 1 ||
                      w.anchorNode !== g.node ||
                      w.anchorOffset !== g.offset ||
                      w.focusNode !== v.node ||
                      w.focusOffset !== v.offset)
                  ) {
                    var x = B.createRange();
                    (x.setStart(g.node, g.offset),
                      w.removeAllRanges(),
                      at > Xt
                        ? (w.addRange(x), w.extend(v.node, v.offset))
                        : (x.setEnd(v.node, v.offset), w.addRange(x)));
                  }
                }
              }
            }
            for (B = [], w = d; (w = w.parentNode); )
              w.nodeType === 1 &&
                B.push({ element: w, left: w.scrollLeft, top: w.scrollTop });
            for (
              typeof d.focus == "function" && d.focus(), d = 0;
              d < B.length;
              d++
            ) {
              var N = B[d];
              ((N.element.scrollLeft = N.left), (N.element.scrollTop = N.top));
            }
          }
          ((gu = !!oc), (sc = oc = null));
        } finally {
          ((Zt = s), (q.p = l), (M.T = n));
        }
      }
      ((t.current = e), (be = 2));
    }
  }
  function Oh() {
    if (be === 2) {
      be = 0;
      var t = Fn,
        e = Dl,
        n = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || n) {
        ((n = M.T), (M.T = null));
        var l = q.p;
        q.p = 2;
        var s = Zt;
        Zt |= 4;
        try {
          ah(t, e.alternate, e);
        } finally {
          ((Zt = s), (q.p = l), (M.T = n));
        }
      }
      be = 3;
    }
  }
  function Ch() {
    if (be === 4 || be === 3) {
      ((be = 0), Io());
      var t = Fn,
        e = Dl,
        n = yn,
        l = vh;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
        ? (be = 5)
        : ((be = 0), (Dl = Fn = null), Nh(t, t.pendingLanes));
      var s = t.pendingLanes;
      if (
        (s === 0 && (Wn = null),
        $(n),
        (e = e.stateNode),
        Me && typeof Me.onCommitFiberRoot == "function")
      )
        try {
          Me.onCommitFiberRoot(Sn, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
      if (l !== null) {
        ((e = M.T), (s = q.p), (q.p = 2), (M.T = null));
        try {
          for (var u = t.onRecoverableError, f = 0; f < l.length; f++) {
            var d = l[f];
            u(d.value, { componentStack: d.stack });
          }
        } finally {
          ((M.T = e), (q.p = s));
        }
      }
      ((yn & 3) !== 0 && ou(),
        Qi(t),
        (s = t.pendingLanes),
        (n & 261930) !== 0 && (s & 42) !== 0
          ? t === Pr
            ? Uo++
            : ((Uo = 0), (Pr = t))
          : (Uo = 0),
        Ho(0));
    }
  }
  function Nh(t, e) {
    (t.pooledCacheLanes &= e) === 0 &&
      ((e = t.pooledCache), e != null && ((t.pooledCache = null), go(e)));
  }
  function ou() {
    return (Ah(), Oh(), Ch(), Dh());
  }
  function Dh() {
    if (be !== 5) return !1;
    var t = Fn,
      e = Vr;
    Vr = 0;
    var n = $(yn),
      l = M.T,
      s = q.p;
    try {
      ((q.p = 32 > n ? 32 : n), (M.T = null), (n = Qr), (Qr = null));
      var u = Fn,
        f = yn;
      if (((be = 0), (Dl = Fn = null), (yn = 0), (Zt & 6) !== 0))
        throw Error(b(331));
      var d = Zt;
      if (
        ((Zt |= 4),
        mh(u.current),
        fh(u, u.current, f, n),
        (Zt = d),
        Ho(0, !1),
        Me && typeof Me.onPostCommitFiberRoot == "function")
      )
        try {
          Me.onPostCommitFiberRoot(Sn, u);
        } catch {}
      return !0;
    } finally {
      ((q.p = s), (M.T = l), Nh(t, e));
    }
  }
  function Bh(t, e, n) {
    ((e = a(n, e)),
      (e = Er(t.stateNode, e, 2)),
      (t = kn(t, e, 2)),
      t !== null && (Fi(t, 2), Qi(t)));
  }
  function jt(t, e, n) {
    if (t.tag === 3) Bh(t, t, n);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          Bh(e, t, n);
          break;
        } else if (e.tag === 1) {
          var l = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == "function" ||
            (typeof l.componentDidCatch == "function" &&
              (Wn === null || !Wn.has(l)))
          ) {
            ((t = a(n, t)),
              (n = Zf(2)),
              (l = kn(e, n, 2)),
              l !== null && (Rf(n, l, e, t), Fi(l, 2), Qi(l)));
            break;
          }
        }
        e = e.return;
      }
  }
  function Wr(t, e, n) {
    var l = t.pingCache;
    if (l === null) {
      l = t.pingCache = new rm();
      var s = new Set();
      l.set(e, s);
    } else ((s = l.get(e)), s === void 0 && ((s = new Set()), l.set(e, s)));
    s.has(n) ||
      ((Yr = !0), s.add(n), (t = mm.bind(null, t, e, n)), e.then(t, t));
  }
  function mm(t, e, n) {
    var l = t.pingCache;
    (l !== null && l.delete(e),
      (t.pingedLanes |= t.suspendedLanes & n),
      (t.warmLanes &= ~n),
      Qt === t &&
        (Et & n) === n &&
        (le === 4 || (le === 3 && (Et & 62914560) === Et && 300 > Be() - tu)
          ? (Zt & 2) === 0 && Bl(t, 0)
          : (Xr |= n),
        Nl === Et && (Nl = 0)),
      Qi(t));
  }
  function Zh(t, e) {
    (e === 0 && (e = ts()), (t = di(t, e)), t !== null && (Fi(t, e), Qi(t)));
  }
  function _m(t) {
    var e = t.memoizedState,
      n = 0;
    (e !== null && (n = e.retryLane), Zh(t, n));
  }
  function pm(t, e) {
    var n = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var l = t.stateNode,
          s = t.memoizedState;
        s !== null && (n = s.retryLane);
        break;
      case 19:
        l = t.stateNode;
        break;
      case 22:
        l = t.stateNode._retryCache;
        break;
      default:
        throw Error(b(314));
    }
    (l !== null && l.delete(e), Zh(t, n));
  }
  function vm(t, e) {
    return Ia(t, e);
  }
  var su = null,
    Rl = null,
    Fr = !1,
    uu = !1,
    Ir = !1,
    $n = 0;
  function Qi(t) {
    (t !== Rl &&
      t.next === null &&
      (Rl === null ? (su = Rl = t) : (Rl = Rl.next = t)),
      (uu = !0),
      Fr || ((Fr = !0), ym()));
  }
  function Ho(t, e) {
    if (!Ir && uu) {
      Ir = !0;
      do
        for (var n = !1, l = su; l !== null; ) {
          if (t !== 0) {
            var s = l.pendingLanes;
            if (s === 0) var u = 0;
            else {
              var f = l.suspendedLanes,
                d = l.pingedLanes;
              ((u = (1 << (31 - Ze(42 | t) + 1)) - 1),
                (u &= s & ~(f & ~d)),
                (u = u & 201326741 ? (u & 201326741) | 1 : u ? u | 2 : 0));
            }
            u !== 0 && ((n = !0), jh(l, u));
          } else
            ((u = Et),
              (u = tl(
                l,
                l === Qt ? u : 0,
                l.cancelPendingCommit !== null || l.timeoutHandle !== -1,
              )),
              (u & 3) === 0 || da(l, u) || ((n = !0), jh(l, u)));
          l = l.next;
        }
      while (n);
      Ir = !1;
    }
  }
  function gm() {
    Rh();
  }
  function Rh() {
    uu = Fr = !1;
    var t = 0;
    $n !== 0 && Am() && (t = $n);
    for (var e = Be(), n = null, l = su; l !== null; ) {
      var s = l.next,
        u = Uh(l, e);
      (u === 0
        ? ((l.next = null),
          n === null ? (su = s) : (n.next = s),
          s === null && (Rl = n))
        : ((n = l), (t !== 0 || (u & 3) !== 0) && (uu = !0)),
        (l = s));
    }
    ((be !== 0 && be !== 5) || Ho(t), $n !== 0 && ($n = 0));
  }
  function Uh(t, e) {
    for (
      var n = t.suspendedLanes,
        l = t.pingedLanes,
        s = t.expirationTimes,
        u = t.pendingLanes & -62914561;
      0 < u;
    ) {
      var f = 31 - Ze(u),
        d = 1 << f,
        _ = s[f];
      (_ === -1
        ? ((d & n) === 0 || (d & l) !== 0) && (s[f] = Ou(d, e))
        : _ <= e && (t.expiredLanes |= d),
        (u &= ~d));
    }
    if (
      ((e = Qt),
      (n = Et),
      (n = tl(
        t,
        t === e ? n : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
      )),
      (l = t.callbackNode),
      n === 0 ||
        (t === e && (Ht === 2 || Ht === 9)) ||
        t.cancelPendingCommit !== null)
    )
      return (
        l !== null && l !== null && sa(l),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((n & 3) === 0 || da(t, n)) {
      if (((e = n & -n), e === t.callbackPriority)) return e;
      switch ((l !== null && sa(l), $(n))) {
        case 2:
        case 8:
          n = Xl;
          break;
        case 32:
          n = ua;
          break;
        case 268435456:
          n = kl;
          break;
        default:
          n = ua;
      }
      return (
        (l = Hh.bind(null, t)),
        (n = Ia(n, l)),
        (t.callbackPriority = e),
        (t.callbackNode = n),
        e
      );
    }
    return (
      l !== null && l !== null && sa(l),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function Hh(t, e) {
    if (be !== 0 && be !== 5)
      return ((t.callbackNode = null), (t.callbackPriority = 0), null);
    var n = t.callbackNode;
    if (ou() && t.callbackNode !== n) return null;
    var l = Et;
    return (
      (l = tl(
        t,
        t === Qt ? l : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
      )),
      l === 0
        ? null
        : (yh(t, l, e),
          Uh(t, Be()),
          t.callbackNode != null && t.callbackNode === n
            ? Hh.bind(null, t)
            : null)
    );
  }
  function jh(t, e) {
    if (ou()) return null;
    yh(t, e, !0);
  }
  function ym() {
    Cm(function () {
      (Zt & 6) !== 0 ? Ia($a, gm) : Rh();
    });
  }
  function $r() {
    if ($n === 0) {
      var t = xl;
      (t === 0 && ((t = ca), (ca <<= 1), (ca & 261888) === 0 && (ca = 256)),
        ($n = t));
    }
    return $n;
  }
  function qh(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
        ? t
        : wn("" + t);
  }
  function Gh(t, e) {
    var n = e.ownerDocument.createElement("input");
    return (
      (n.name = e.name),
      (n.value = e.value),
      t.id && n.setAttribute("form", t.id),
      e.parentNode.insertBefore(n, e),
      (t = new FormData(t)),
      n.parentNode.removeChild(n),
      t
    );
  }
  function bm(t, e, n, l, s) {
    if (e === "submit" && n && n.stateNode === s) {
      var u = qh((s[Se] || null).action),
        f = l.submitter;
      f &&
        ((e = (e = f[Se] || null)
          ? qh(e.formAction)
          : f.getAttribute("formAction")),
        e !== null && ((u = e), (f = null)));
      var d = new ll("action", "action", null, l, s);
      t.push({
        event: d,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (l.defaultPrevented) {
                if ($n !== 0) {
                  var _ = f ? Gh(s, f) : new FormData(s);
                  yr(
                    n,
                    { pending: !0, data: _, method: s.method, action: u },
                    null,
                    _,
                  );
                }
              } else
                typeof u == "function" &&
                  (d.preventDefault(),
                  (_ = f ? Gh(s, f) : new FormData(s)),
                  yr(
                    n,
                    { pending: !0, data: _, method: s.method, action: u },
                    u,
                    _,
                  ));
            },
            currentTarget: s,
          },
        ],
      });
    }
  }
  for (var tc = 0; tc < qi.length; tc++) {
    var ec = qi[tc],
      xm = ec.toLowerCase(),
      Sm = ec[0].toUpperCase() + ec.slice(1);
    Xe(xm, "on" + Sm);
  }
  (Xe(Na, "onAnimationEnd"),
    Xe(Ms, "onAnimationIteration"),
    Xe(Da, "onAnimationStart"),
    Xe("dblclick", "onDoubleClick"),
    Xe("focusin", "onFocus"),
    Xe("focusout", "onBlur"),
    Xe(ku, "onTransitionRun"),
    Xe(Ls, "onTransitionStart"),
    Xe(Vu, "onTransitionCancel"),
    Xe(jn, "onTransitionEnd"),
    Di("onMouseEnter", ["mouseout", "mouseover"]),
    Di("onMouseLeave", ["mouseout", "mouseover"]),
    Di("onPointerEnter", ["pointerout", "pointerover"]),
    Di("onPointerLeave", ["pointerout", "pointerover"]),
    tn(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    tn(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    tn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    tn(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    tn(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    tn(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var jo =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    Tm = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(jo),
    );
  function Yh(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
      var l = t[n],
        s = l.event;
      l = l.listeners;
      t: {
        var u = void 0;
        if (e)
          for (var f = l.length - 1; 0 <= f; f--) {
            var d = l[f],
              _ = d.instance,
              S = d.currentTarget;
            if (((d = d.listener), _ !== u && s.isPropagationStopped()))
              break t;
            ((u = d), (s.currentTarget = S));
            try {
              u(s);
            } catch (O) {
              Ba(O);
            }
            ((s.currentTarget = null), (u = _));
          }
        else
          for (f = 0; f < l.length; f++) {
            if (
              ((d = l[f]),
              (_ = d.instance),
              (S = d.currentTarget),
              (d = d.listener),
              _ !== u && s.isPropagationStopped())
            )
              break t;
            ((u = d), (s.currentTarget = S));
            try {
              u(s);
            } catch (O) {
              Ba(O);
            }
            ((s.currentTarget = null), (u = _));
          }
      }
    }
  }
  function Tt(t, e) {
    var n = e[Ci];
    n === void 0 && (n = e[Ci] = new Set());
    var l = t + "__bubble";
    n.has(l) || (Xh(e, t, 2, !1), n.add(l));
  }
  function ic(t, e, n) {
    var l = 0;
    (e && (l |= 4), Xh(n, t, l, e));
  }
  var ru = "_reactListening" + Math.random().toString(36).slice(2);
  function nc(t) {
    if (!t[ru]) {
      ((t[ru] = !0),
        os.forEach(function (n) {
          n !== "selectionchange" && (Tm.has(n) || ic(n, !1, t), ic(n, !0, t));
        }));
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[ru] || ((e[ru] = !0), ic("selectionchange", !1, e));
    }
  }
  function Xh(t, e, n, l) {
    switch (gd(e)) {
      case 2:
        var s = Fm;
        break;
      case 8:
        s = Im;
        break;
      default:
        s = gc;
    }
    ((n = s.bind(null, e, n, t)),
      (s = void 0),
      !ba ||
        (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
        (s = !0),
      l
        ? s !== void 0
          ? t.addEventListener(e, n, { capture: !0, passive: s })
          : t.addEventListener(e, n, !0)
        : s !== void 0
          ? t.addEventListener(e, n, { passive: s })
          : t.addEventListener(e, n, !1));
  }
  function ac(t, e, n, l, s) {
    var u = l;
    if ((e & 1) === 0 && (e & 2) === 0 && l !== null)
      t: for (;;) {
        if (l === null) return;
        var f = l.tag;
        if (f === 3 || f === 4) {
          var d = l.stateNode.containerInfo;
          if (d === s) break;
          if (f === 4)
            for (f = l.return; f !== null; ) {
              var _ = f.tag;
              if ((_ === 3 || _ === 4) && f.stateNode.containerInfo === s)
                return;
              f = f.return;
            }
          for (; d !== null; ) {
            if (((f = $i(d)), f === null)) return;
            if (((_ = f.tag), _ === 5 || _ === 6 || _ === 26 || _ === 27)) {
              l = u = f;
              continue t;
            }
            d = d.parentNode;
          }
        }
        l = l.return;
      }
    eo(function () {
      var S = u,
        O = ya(n),
        B = [];
      t: {
        var E = ws.get(t);
        if (E !== void 0) {
          var w = ll,
            K = t;
          switch (t) {
            case "keypress":
              if (xa(n) === 0) break t;
            case "keydown":
            case "keyup":
              w = ms;
              break;
            case "focusin":
              ((K = "focus"), (w = ao));
              break;
            case "focusout":
              ((K = "blur"), (w = ao));
              break;
            case "beforeblur":
            case "afterblur":
              w = ao;
              break;
            case "click":
              if (n.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              w = rs;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              w = Du;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              w = Hu;
              break;
            case Na:
            case Ms:
            case Da:
              w = lo;
              break;
            case jn:
              w = vs;
              break;
            case "scroll":
            case "scrollend":
              w = zt;
              break;
            case "wheel":
              w = ln;
              break;
            case "copy":
            case "cut":
            case "paste":
              w = ri;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              w = _s;
              break;
            case "toggle":
            case "beforetoggle":
              w = za;
          }
          var at = (e & 4) !== 0,
            Xt = !at && (t === "scroll" || t === "scrollend"),
            g = at ? (E !== null ? E + "Capture" : null) : E;
          at = [];
          for (var v = S, x; v !== null; ) {
            var N = v;
            if (
              ((x = N.stateNode),
              (N = N.tag),
              (N !== 5 && N !== 26 && N !== 27) ||
                x === null ||
                g === null ||
                ((N = nn(v, g)), N != null && at.push(qo(v, N, x))),
              Xt)
            )
              break;
            v = v.return;
          }
          0 < at.length &&
            ((E = new w(E, K, null, n, O)),
            B.push({ event: E, listeners: at }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((E = t === "mouseover" || t === "pointerover"),
            (w = t === "mouseout" || t === "pointerout"),
            E &&
              n !== al &&
              (K = n.relatedTarget || n.fromElement) &&
              ($i(K) || K[Ii]))
          )
            break t;
          if (
            (w || E) &&
            ((E =
              O.window === O
                ? O
                : (E = O.ownerDocument)
                  ? E.defaultView || E.parentWindow
                  : window),
            w
              ? ((K = n.relatedTarget || n.toElement),
                (w = S),
                (K = K ? $i(K) : null),
                K !== null &&
                  ((Xt = F(K)),
                  (at = K.tag),
                  K !== Xt || (at !== 5 && at !== 27 && at !== 6)) &&
                  (K = null))
              : ((w = null), (K = S)),
            w !== K)
          ) {
            if (
              ((at = rs),
              (N = "onMouseLeave"),
              (g = "onMouseEnter"),
              (v = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((at = _s),
                (N = "onPointerLeave"),
                (g = "onPointerEnter"),
                (v = "pointer")),
              (Xt = w == null ? E : Ni(w)),
              (x = K == null ? E : Ni(K)),
              (E = new at(N, v + "leave", w, n, O)),
              (E.target = Xt),
              (E.relatedTarget = x),
              (N = null),
              $i(O) === S &&
                ((at = new at(g, v + "enter", K, n, O)),
                (at.target = x),
                (at.relatedTarget = Xt),
                (N = at)),
              (Xt = N),
              w && K)
            )
              e: {
                for (at = zm, g = w, v = K, x = 0, N = g; N; N = at(N)) x++;
                N = 0;
                for (var it = v; it; it = at(it)) N++;
                for (; 0 < x - N; ) ((g = at(g)), x--);
                for (; 0 < N - x; ) ((v = at(v)), N--);
                for (; x--; ) {
                  if (g === v || (v !== null && g === v.alternate)) {
                    at = g;
                    break e;
                  }
                  ((g = at(g)), (v = at(v)));
                }
                at = null;
              }
            else at = null;
            (w !== null && kh(B, E, w, at, !1),
              K !== null && Xt !== null && kh(B, Xt, K, at, !0));
          }
        }
        t: {
          if (
            ((E = S ? Ni(S) : window),
            (w = E.nodeName && E.nodeName.toLowerCase()),
            w === "select" || (w === "input" && E.type === "file"))
          )
            var Dt = wa;
          else if (ci(E))
            if (xs) Dt = Xu;
            else {
              Dt = Yu;
              var W = zi;
            }
          else
            ((w = E.nodeName),
              !w ||
              w.toLowerCase() !== "input" ||
              (E.type !== "checkbox" && E.type !== "radio")
                ? S && ga(S.elementType) && (Dt = wa)
                : (Dt = Zn));
          if (Dt && (Dt = Dt(t, S))) {
            bs(B, Dt, n, O);
            break t;
          }
          (W && W(t, E, S),
            t === "focusout" &&
              S &&
              E.type === "number" &&
              S.memoizedProps.value != null &&
              xi(E, "number", E.value));
        }
        switch (((W = S ? Ni(S) : window), t)) {
          case "focusin":
            (ci(W) || W.contentEditable === "true") &&
              ((Hi = W), (ml = S), (Ca = null));
            break;
          case "focusout":
            Ca = ml = Hi = null;
            break;
          case "mousedown":
            Un = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((Un = !1), zs(B, n, O));
            break;
          case "selectionchange":
            if (dl) break;
          case "keydown":
          case "keyup":
            zs(B, n, O);
        }
        var _t;
        if (sl)
          t: {
            switch (t) {
              case "compositionstart":
                var Mt = "onCompositionStart";
                break t;
              case "compositionend":
                Mt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                Mt = "onCompositionUpdate";
                break t;
            }
            Mt = void 0;
          }
        else
          Nn
            ? ys(t, n) && (Mt = "onCompositionEnd")
            : t === "keydown" &&
              n.keyCode === 229 &&
              (Mt = "onCompositionStart");
        (Mt &&
          (ul &&
            n.locale !== "ko" &&
            (Nn || Mt !== "onCompositionStart"
              ? Mt === "onCompositionEnd" && Nn && (_t = Zi())
              : ((ui = O),
                (an = "value" in ui ? ui.value : ui.textContent),
                (Nn = !0))),
          (W = cu(S, Mt)),
          0 < W.length &&
            ((Mt = new oo(Mt, t, null, n, O)),
            B.push({ event: Mt, listeners: W }),
            _t
              ? (Mt.data = _t)
              : ((_t = co(n)), _t !== null && (Mt.data = _t)))),
          (_t = qu ? ti(t, n) : Dn(t, n)) &&
            ((Mt = cu(S, "onBeforeInput")),
            0 < Mt.length &&
              ((W = new oo("onBeforeInput", "beforeinput", null, n, O)),
              B.push({ event: W, listeners: Mt }),
              (W.data = _t))),
          bm(B, t, S, n, O));
      }
      Yh(B, e);
    });
  }
  function qo(t, e, n) {
    return { instance: t, listener: e, currentTarget: n };
  }
  function cu(t, e) {
    for (var n = e + "Capture", l = []; t !== null; ) {
      var s = t,
        u = s.stateNode;
      if (
        ((s = s.tag),
        (s !== 5 && s !== 26 && s !== 27) ||
          u === null ||
          ((s = nn(t, n)),
          s != null && l.unshift(qo(t, s, u)),
          (s = nn(t, e)),
          s != null && l.push(qo(t, s, u))),
        t.tag === 3)
      )
        return l;
      t = t.return;
    }
    return [];
  }
  function zm(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function kh(t, e, n, l, s) {
    for (var u = e._reactName, f = []; n !== null && n !== l; ) {
      var d = n,
        _ = d.alternate,
        S = d.stateNode;
      if (((d = d.tag), _ !== null && _ === l)) break;
      ((d !== 5 && d !== 26 && d !== 27) ||
        S === null ||
        ((_ = S),
        s
          ? ((S = nn(n, u)), S != null && f.unshift(qo(n, S, _)))
          : s || ((S = nn(n, u)), S != null && f.push(qo(n, S, _)))),
        (n = n.return));
    }
    f.length !== 0 && t.push({ event: e, listeners: f });
  }
  var Em = /\r\n?/g,
    Mm = /\u0000|\uFFFD/g;
  function Vh(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        Em,
        `
`,
      )
      .replace(Mm, "");
  }
  function Qh(t, e) {
    return ((e = Vh(e)), Vh(t) === e);
  }
  function Yt(t, e, n, l, s, u) {
    switch (n) {
      case "children":
        typeof l == "string"
          ? e === "body" || (e === "textarea" && l === "") || si(t, l)
          : (typeof l == "number" || typeof l == "bigint") &&
            e !== "body" &&
            si(t, "" + l);
        break;
      case "className":
        qt(t, "class", l);
        break;
      case "tabIndex":
        qt(t, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        qt(t, n, l);
        break;
      case "style":
        il(t, l, u);
        break;
      case "data":
        if (e !== "object") {
          qt(t, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (e !== "a" || n !== "href")) {
          t.removeAttribute(n);
          break;
        }
        if (
          l == null ||
          typeof l == "function" ||
          typeof l == "symbol" ||
          typeof l == "boolean"
        ) {
          t.removeAttribute(n);
          break;
        }
        ((l = wn("" + l)), t.setAttribute(n, l));
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          t.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof u == "function" &&
            (n === "formAction"
              ? (e !== "input" && Yt(t, e, "name", s.name, s, null),
                Yt(t, e, "formEncType", s.formEncType, s, null),
                Yt(t, e, "formMethod", s.formMethod, s, null),
                Yt(t, e, "formTarget", s.formTarget, s, null))
              : (Yt(t, e, "encType", s.encType, s, null),
                Yt(t, e, "method", s.method, s, null),
                Yt(t, e, "target", s.target, s, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          t.removeAttribute(n);
          break;
        }
        ((l = wn("" + l)), t.setAttribute(n, l));
        break;
      case "onClick":
        l != null && (t.onclick = Ge);
        break;
      case "onScroll":
        l != null && Tt("scroll", t);
        break;
      case "onScrollEnd":
        l != null && Tt("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(b(61));
          if (((n = l.__html), n != null)) {
            if (s.children != null) throw Error(b(60));
            t.innerHTML = n;
          }
        }
        break;
      case "multiple":
        t.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        t.muted = l && typeof l != "function" && typeof l != "symbol";
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
          l == null ||
          typeof l == "function" ||
          typeof l == "boolean" ||
          typeof l == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        ((n = wn("" + l)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        l != null && typeof l != "function" && typeof l != "symbol"
          ? t.setAttribute(n, "" + l)
          : t.removeAttribute(n);
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
        l && typeof l != "function" && typeof l != "symbol"
          ? t.setAttribute(n, "")
          : t.removeAttribute(n);
        break;
      case "capture":
      case "download":
        l === !0
          ? t.setAttribute(n, "")
          : l !== !1 &&
              l != null &&
              typeof l != "function" &&
              typeof l != "symbol"
            ? t.setAttribute(n, l)
            : t.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null &&
        typeof l != "function" &&
        typeof l != "symbol" &&
        !isNaN(l) &&
        1 <= l
          ? t.setAttribute(n, l)
          : t.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l)
          ? t.removeAttribute(n)
          : t.setAttribute(n, l);
        break;
      case "popover":
        (Tt("beforetoggle", t), Tt("toggle", t), bt(t, "popover", l));
        break;
      case "xlinkActuate":
        qe(t, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
        break;
      case "xlinkArcrole":
        qe(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
        break;
      case "xlinkRole":
        qe(t, "http://www.w3.org/1999/xlink", "xlink:role", l);
        break;
      case "xlinkShow":
        qe(t, "http://www.w3.org/1999/xlink", "xlink:show", l);
        break;
      case "xlinkTitle":
        qe(t, "http://www.w3.org/1999/xlink", "xlink:title", l);
        break;
      case "xlinkType":
        qe(t, "http://www.w3.org/1999/xlink", "xlink:type", l);
        break;
      case "xmlBase":
        qe(t, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
        break;
      case "xmlLang":
        qe(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
        break;
      case "xmlSpace":
        qe(t, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
        break;
      case "is":
        bt(t, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) ||
          (n[0] !== "o" && n[0] !== "O") ||
          (n[1] !== "n" && n[1] !== "N")) &&
          ((n = nl.get(n) || n), bt(t, n, l));
    }
  }
  function lc(t, e, n, l, s, u) {
    switch (n) {
      case "style":
        il(t, l, u);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(b(61));
          if (((n = l.__html), n != null)) {
            if (s.children != null) throw Error(b(60));
            t.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof l == "string"
          ? si(t, l)
          : (typeof l == "number" || typeof l == "bigint") && si(t, "" + l);
        break;
      case "onScroll":
        l != null && Tt("scroll", t);
        break;
      case "onScrollEnd":
        l != null && Tt("scrollend", t);
        break;
      case "onClick":
        l != null && (t.onclick = Ge);
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
        if (!ss.hasOwnProperty(n))
          t: {
            if (
              n[0] === "o" &&
              n[1] === "n" &&
              ((s = n.endsWith("Capture")),
              (e = n.slice(2, s ? n.length - 7 : void 0)),
              (u = t[Se] || null),
              (u = u != null ? u[n] : null),
              typeof u == "function" && t.removeEventListener(e, u, s),
              typeof l == "function")
            ) {
              (typeof u != "function" &&
                u !== null &&
                (n in t
                  ? (t[n] = null)
                  : t.hasAttribute(n) && t.removeAttribute(n)),
                t.addEventListener(e, l, s));
              break t;
            }
            n in t
              ? (t[n] = l)
              : l === !0
                ? t.setAttribute(n, "")
                : bt(t, n, l);
          }
    }
  }
  function Oe(t, e, n) {
    switch (e) {
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
        (Tt("error", t), Tt("load", t));
        var l = !1,
          s = !1,
          u;
        for (u in n)
          if (n.hasOwnProperty(u)) {
            var f = n[u];
            if (f != null)
              switch (u) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  s = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(b(137, e));
                default:
                  Yt(t, e, u, f, n, null);
              }
          }
        (s && Yt(t, e, "srcSet", n.srcSet, n, null),
          l && Yt(t, e, "src", n.src, n, null));
        return;
      case "input":
        Tt("invalid", t);
        var d = (u = f = s = null),
          _ = null,
          S = null;
        for (l in n)
          if (n.hasOwnProperty(l)) {
            var O = n[l];
            if (O != null)
              switch (l) {
                case "name":
                  s = O;
                  break;
                case "type":
                  f = O;
                  break;
                case "checked":
                  _ = O;
                  break;
                case "defaultChecked":
                  S = O;
                  break;
                case "value":
                  u = O;
                  break;
                case "defaultValue":
                  d = O;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (O != null) throw Error(b(137, e));
                  break;
                default:
                  Yt(t, e, l, O, n, null);
              }
          }
        va(t, u, d, _, S, f, s, !1);
        return;
      case "select":
        (Tt("invalid", t), (l = f = u = null));
        for (s in n)
          if (n.hasOwnProperty(s) && ((d = n[s]), d != null))
            switch (s) {
              case "value":
                u = d;
                break;
              case "defaultValue":
                f = d;
                break;
              case "multiple":
                l = d;
              default:
                Yt(t, e, s, d, n, null);
            }
        ((e = u),
          (n = f),
          (t.multiple = !!l),
          e != null ? Vt(t, !!l, e, !1) : n != null && Vt(t, !!l, n, !0));
        return;
      case "textarea":
        (Tt("invalid", t), (u = s = l = null));
        for (f in n)
          if (n.hasOwnProperty(f) && ((d = n[f]), d != null))
            switch (f) {
              case "value":
                l = d;
                break;
              case "defaultValue":
                s = d;
                break;
              case "children":
                u = d;
                break;
              case "dangerouslySetInnerHTML":
                if (d != null) throw Error(b(91));
                break;
              default:
                Yt(t, e, f, d, n, null);
            }
        Mn(t, l, s, u);
        return;
      case "option":
        for (_ in n)
          if (n.hasOwnProperty(_) && ((l = n[_]), l != null))
            switch (_) {
              case "selected":
                t.selected =
                  l && typeof l != "function" && typeof l != "symbol";
                break;
              default:
                Yt(t, e, _, l, n, null);
            }
        return;
      case "dialog":
        (Tt("beforetoggle", t),
          Tt("toggle", t),
          Tt("cancel", t),
          Tt("close", t));
        break;
      case "iframe":
      case "object":
        Tt("load", t);
        break;
      case "video":
      case "audio":
        for (l = 0; l < jo.length; l++) Tt(jo[l], t);
        break;
      case "image":
        (Tt("error", t), Tt("load", t));
        break;
      case "details":
        Tt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        (Tt("error", t), Tt("load", t));
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
        for (S in n)
          if (n.hasOwnProperty(S) && ((l = n[S]), l != null))
            switch (S) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(b(137, e));
              default:
                Yt(t, e, S, l, n, null);
            }
        return;
      default:
        if (ga(e)) {
          for (O in n)
            n.hasOwnProperty(O) &&
              ((l = n[O]), l !== void 0 && lc(t, e, O, l, n, void 0));
          return;
        }
    }
    for (d in n)
      n.hasOwnProperty(d) && ((l = n[d]), l != null && Yt(t, e, d, l, n, null));
  }
  function Lm(t, e, n, l) {
    switch (e) {
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
        var s = null,
          u = null,
          f = null,
          d = null,
          _ = null,
          S = null,
          O = null;
        for (w in n) {
          var B = n[w];
          if (n.hasOwnProperty(w) && B != null)
            switch (w) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                _ = B;
              default:
                l.hasOwnProperty(w) || Yt(t, e, w, null, l, B);
            }
        }
        for (var E in l) {
          var w = l[E];
          if (((B = n[E]), l.hasOwnProperty(E) && (w != null || B != null)))
            switch (E) {
              case "type":
                u = w;
                break;
              case "name":
                s = w;
                break;
              case "checked":
                S = w;
                break;
              case "defaultChecked":
                O = w;
                break;
              case "value":
                f = w;
                break;
              case "defaultValue":
                d = w;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (w != null) throw Error(b(137, e));
                break;
              default:
                w !== B && Yt(t, e, E, w, l, B);
            }
        }
        Il(t, f, d, _, S, O, u, s);
        return;
      case "select":
        w = f = d = E = null;
        for (u in n)
          if (((_ = n[u]), n.hasOwnProperty(u) && _ != null))
            switch (u) {
              case "value":
                break;
              case "multiple":
                w = _;
              default:
                l.hasOwnProperty(u) || Yt(t, e, u, null, l, _);
            }
        for (s in l)
          if (
            ((u = l[s]),
            (_ = n[s]),
            l.hasOwnProperty(s) && (u != null || _ != null))
          )
            switch (s) {
              case "value":
                E = u;
                break;
              case "defaultValue":
                d = u;
                break;
              case "multiple":
                f = u;
              default:
                u !== _ && Yt(t, e, s, u, l, _);
            }
        ((e = d),
          (n = f),
          (l = w),
          E != null
            ? Vt(t, !!n, E, !1)
            : !!l != !!n &&
              (e != null ? Vt(t, !!n, e, !0) : Vt(t, !!n, n ? [] : "", !1)));
        return;
      case "textarea":
        w = E = null;
        for (d in n)
          if (
            ((s = n[d]),
            n.hasOwnProperty(d) && s != null && !l.hasOwnProperty(d))
          )
            switch (d) {
              case "value":
                break;
              case "children":
                break;
              default:
                Yt(t, e, d, null, l, s);
            }
        for (f in l)
          if (
            ((s = l[f]),
            (u = n[f]),
            l.hasOwnProperty(f) && (s != null || u != null))
          )
            switch (f) {
              case "value":
                E = s;
                break;
              case "defaultValue":
                w = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(b(91));
                break;
              default:
                s !== u && Yt(t, e, f, s, l, u);
            }
        Bi(t, E, w);
        return;
      case "option":
        for (var K in n)
          if (
            ((E = n[K]),
            n.hasOwnProperty(K) && E != null && !l.hasOwnProperty(K))
          )
            switch (K) {
              case "selected":
                t.selected = !1;
                break;
              default:
                Yt(t, e, K, null, l, E);
            }
        for (_ in l)
          if (
            ((E = l[_]),
            (w = n[_]),
            l.hasOwnProperty(_) && E !== w && (E != null || w != null))
          )
            switch (_) {
              case "selected":
                t.selected =
                  E && typeof E != "function" && typeof E != "symbol";
                break;
              default:
                Yt(t, e, _, E, l, w);
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
        for (var at in n)
          ((E = n[at]),
            n.hasOwnProperty(at) &&
              E != null &&
              !l.hasOwnProperty(at) &&
              Yt(t, e, at, null, l, E));
        for (S in l)
          if (
            ((E = l[S]),
            (w = n[S]),
            l.hasOwnProperty(S) && E !== w && (E != null || w != null))
          )
            switch (S) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (E != null) throw Error(b(137, e));
                break;
              default:
                Yt(t, e, S, E, l, w);
            }
        return;
      default:
        if (ga(e)) {
          for (var Xt in n)
            ((E = n[Xt]),
              n.hasOwnProperty(Xt) &&
                E !== void 0 &&
                !l.hasOwnProperty(Xt) &&
                lc(t, e, Xt, void 0, l, E));
          for (O in l)
            ((E = l[O]),
              (w = n[O]),
              !l.hasOwnProperty(O) ||
                E === w ||
                (E === void 0 && w === void 0) ||
                lc(t, e, O, E, l, w));
          return;
        }
    }
    for (var g in n)
      ((E = n[g]),
        n.hasOwnProperty(g) &&
          E != null &&
          !l.hasOwnProperty(g) &&
          Yt(t, e, g, null, l, E));
    for (B in l)
      ((E = l[B]),
        (w = n[B]),
        !l.hasOwnProperty(B) ||
          E === w ||
          (E == null && w == null) ||
          Yt(t, e, B, E, l, w));
  }
  function Ph(t) {
    switch (t) {
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
  function wm() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var t = 0, e = 0, n = performance.getEntriesByType("resource"), l = 0;
        l < n.length;
        l++
      ) {
        var s = n[l],
          u = s.transferSize,
          f = s.initiatorType,
          d = s.duration;
        if (u && d && Ph(f)) {
          for (f = 0, d = s.responseEnd, l += 1; l < n.length; l++) {
            var _ = n[l],
              S = _.startTime;
            if (S > d) break;
            var O = _.transferSize,
              B = _.initiatorType;
            O &&
              Ph(B) &&
              ((_ = _.responseEnd), (f += O * (_ < d ? 1 : (d - S) / (_ - S))));
          }
          if ((--l, (e += (8 * (u + f)) / (s.duration / 1e3)), t++, 10 < t))
            break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection &&
      ((t = navigator.connection.downlink), typeof t == "number")
      ? t
      : 5;
  }
  var oc = null,
    sc = null;
  function fu(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Kh(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Jh(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function uc(t, e) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof e.children == "string" ||
      typeof e.children == "number" ||
      typeof e.children == "bigint" ||
      (typeof e.dangerouslySetInnerHTML == "object" &&
        e.dangerouslySetInnerHTML !== null &&
        e.dangerouslySetInnerHTML.__html != null)
    );
  }
  var rc = null;
  function Am() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === rc
        ? !1
        : ((rc = t), !0)
      : ((rc = null), !1);
  }
  var Wh = typeof setTimeout == "function" ? setTimeout : void 0,
    Om = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Fh = typeof Promise == "function" ? Promise : void 0,
    Cm =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Fh < "u"
          ? function (t) {
              return Fh.resolve(null).then(t).catch(Nm);
            }
          : Wh;
  function Nm(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function ta(t) {
    return t === "head";
  }
  function Ih(t, e) {
    var n = e,
      l = 0;
    do {
      var s = n.nextSibling;
      if ((t.removeChild(n), s && s.nodeType === 8))
        if (((n = s.data), n === "/$" || n === "/&")) {
          if (l === 0) {
            (t.removeChild(s), ql(e));
            return;
          }
          l--;
        } else if (
          n === "$" ||
          n === "$?" ||
          n === "$~" ||
          n === "$!" ||
          n === "&"
        )
          l++;
        else if (n === "html") Go(t.ownerDocument.documentElement);
        else if (n === "head") {
          ((n = t.ownerDocument.head), Go(n));
          for (var u = n.firstChild; u; ) {
            var f = u.nextSibling,
              d = u.nodeName;
            (u[ma] ||
              d === "SCRIPT" ||
              d === "STYLE" ||
              (d === "LINK" && u.rel.toLowerCase() === "stylesheet") ||
              n.removeChild(u),
              (u = f));
          }
        } else n === "body" && Go(t.ownerDocument.body);
      n = s;
    } while (n);
    ql(e);
  }
  function $h(t, e) {
    var n = t;
    t = 0;
    do {
      var l = n.nextSibling;
      if (
        (n.nodeType === 1
          ? e
            ? ((n._stashedDisplay = n.style.display),
              (n.style.display = "none"))
            : ((n.style.display = n._stashedDisplay || ""),
              n.getAttribute("style") === "" && n.removeAttribute("style"))
          : n.nodeType === 3 &&
            (e
              ? ((n._stashedText = n.nodeValue), (n.nodeValue = ""))
              : (n.nodeValue = n._stashedText || "")),
        l && l.nodeType === 8)
      )
        if (((n = l.data), n === "/$")) {
          if (t === 0) break;
          t--;
        } else (n !== "$" && n !== "$?" && n !== "$~" && n !== "$!") || t++;
      n = l;
    } while (n);
  }
  function cc(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var n = e;
      switch (((e = e.nextSibling), n.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (cc(n), Kl(n));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(n);
    }
  }
  function Dm(t, e, n, l) {
    for (; t.nodeType === 1; ) {
      var s = n;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!l && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (l) {
        if (!t[ma])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((u = t.getAttribute("rel")),
                u === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                u !== s.rel ||
                t.getAttribute("href") !==
                  (s.href == null || s.href === "" ? null : s.href) ||
                t.getAttribute("crossorigin") !==
                  (s.crossOrigin == null ? null : s.crossOrigin) ||
                t.getAttribute("title") !== (s.title == null ? null : s.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((u = t.getAttribute("src")),
                (u !== (s.src == null ? null : s.src) ||
                  t.getAttribute("type") !== (s.type == null ? null : s.type) ||
                  t.getAttribute("crossorigin") !==
                    (s.crossOrigin == null ? null : s.crossOrigin)) &&
                  u &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var u = s.name == null ? null : "" + s.name;
        if (s.type === "hidden" && t.getAttribute("name") === u) return t;
      } else return t;
      if (((t = pi(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function Bm(t, e, n) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !n) ||
        ((t = pi(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function td(t, e) {
    for (; t.nodeType !== 8; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !e) ||
        ((t = pi(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function fc(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function hc(t) {
    return (
      t.data === "$!" ||
      (t.data === "$?" && t.ownerDocument.readyState !== "loading")
    );
  }
  function Zm(t, e) {
    var n = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = e;
    else if (t.data !== "$?" || n.readyState !== "loading") e();
    else {
      var l = function () {
        (e(), n.removeEventListener("DOMContentLoaded", l));
      };
      (n.addEventListener("DOMContentLoaded", l), (t._reactRetry = l));
    }
  }
  function pi(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (
          ((e = t.data),
          e === "$" ||
            e === "$!" ||
            e === "$?" ||
            e === "$~" ||
            e === "&" ||
            e === "F!" ||
            e === "F")
        )
          break;
        if (e === "/$" || e === "/&") return null;
      }
    }
    return t;
  }
  var dc = null;
  function ed(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "/$" || n === "/&") {
          if (e === 0) return pi(t.nextSibling);
          e--;
        } else
          (n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&") ||
            e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function id(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
          if (e === 0) return t;
          e--;
        } else (n !== "/$" && n !== "/&") || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function nd(t, e, n) {
    switch (((e = fu(n)), t)) {
      case "html":
        if (((t = e.documentElement), !t)) throw Error(b(452));
        return t;
      case "head":
        if (((t = e.head), !t)) throw Error(b(453));
        return t;
      case "body":
        if (((t = e.body), !t)) throw Error(b(454));
        return t;
      default:
        throw Error(b(451));
    }
  }
  function Go(t) {
    for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
    Kl(t);
  }
  var vi = new Map(),
    ad = new Set();
  function hu(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.nodeType === 9
        ? t
        : t.ownerDocument;
  }
  var bn = q.d;
  q.d = { f: Rm, r: Um, D: Hm, C: jm, L: qm, m: Gm, X: Xm, S: Ym, M: km };
  function Rm() {
    var t = bn.f(),
      e = nu();
    return t || e;
  }
  function Um(t) {
    var e = Tn(t);
    e !== null && e.tag === 5 && e.type === "form" ? xf(e) : bn.r(t);
  }
  var Ul = typeof document > "u" ? null : document;
  function ld(t, e, n) {
    var l = Ul;
    if (l && typeof e == "string" && e) {
      var s = Jt(e);
      ((s = 'link[rel="' + t + '"][href="' + s + '"]'),
        typeof n == "string" && (s += '[crossorigin="' + n + '"]'),
        ad.has(s) ||
          (ad.add(s),
          (t = { rel: t, crossOrigin: n, href: e }),
          l.querySelector(s) === null &&
            ((e = l.createElement("link")),
            Oe(e, "link", t),
            de(e),
            l.head.appendChild(e))));
    }
  }
  function Hm(t) {
    (bn.D(t), ld("dns-prefetch", t, null));
  }
  function jm(t, e) {
    (bn.C(t, e), ld("preconnect", t, e));
  }
  function qm(t, e, n) {
    bn.L(t, e, n);
    var l = Ul;
    if (l && t && e) {
      var s = 'link[rel="preload"][as="' + Jt(e) + '"]';
      e === "image" && n && n.imageSrcSet
        ? ((s += '[imagesrcset="' + Jt(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == "string" &&
            (s += '[imagesizes="' + Jt(n.imageSizes) + '"]'))
        : (s += '[href="' + Jt(t) + '"]');
      var u = s;
      switch (e) {
        case "style":
          u = Hl(t);
          break;
        case "script":
          u = jl(t);
      }
      vi.has(u) ||
        ((t = X(
          {
            rel: "preload",
            href: e === "image" && n && n.imageSrcSet ? void 0 : t,
            as: e,
          },
          n,
        )),
        vi.set(u, t),
        l.querySelector(s) !== null ||
          (e === "style" && l.querySelector(Yo(u))) ||
          (e === "script" && l.querySelector(Xo(u))) ||
          ((e = l.createElement("link")),
          Oe(e, "link", t),
          de(e),
          l.head.appendChild(e)));
    }
  }
  function Gm(t, e) {
    bn.m(t, e);
    var n = Ul;
    if (n && t) {
      var l = e && typeof e.as == "string" ? e.as : "script",
        s =
          'link[rel="modulepreload"][as="' + Jt(l) + '"][href="' + Jt(t) + '"]',
        u = s;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = jl(t);
      }
      if (
        !vi.has(u) &&
        ((t = X({ rel: "modulepreload", href: t }, e)),
        vi.set(u, t),
        n.querySelector(s) === null)
      ) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(Xo(u))) return;
        }
        ((l = n.createElement("link")),
          Oe(l, "link", t),
          de(l),
          n.head.appendChild(l));
      }
    }
  }
  function Ym(t, e, n) {
    bn.S(t, e, n);
    var l = Ul;
    if (l && t) {
      var s = zn(l).hoistableStyles,
        u = Hl(t);
      e = e || "default";
      var f = s.get(u);
      if (!f) {
        var d = { loading: 0, preload: null };
        if ((f = l.querySelector(Yo(u)))) d.loading = 5;
        else {
          ((t = X({ rel: "stylesheet", href: t, "data-precedence": e }, n)),
            (n = vi.get(u)) && mc(t, n));
          var _ = (f = l.createElement("link"));
          (de(_),
            Oe(_, "link", t),
            (_._p = new Promise(function (S, O) {
              ((_.onload = S), (_.onerror = O));
            })),
            _.addEventListener("load", function () {
              d.loading |= 1;
            }),
            _.addEventListener("error", function () {
              d.loading |= 2;
            }),
            (d.loading |= 4),
            du(f, e, l));
        }
        ((f = { type: "stylesheet", instance: f, count: 1, state: d }),
          s.set(u, f));
      }
    }
  }
  function Xm(t, e) {
    bn.X(t, e);
    var n = Ul;
    if (n && t) {
      var l = zn(n).hoistableScripts,
        s = jl(t),
        u = l.get(s);
      u ||
        ((u = n.querySelector(Xo(s))),
        u ||
          ((t = X({ src: t, async: !0 }, e)),
          (e = vi.get(s)) && _c(t, e),
          (u = n.createElement("script")),
          de(u),
          Oe(u, "link", t),
          n.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        l.set(s, u));
    }
  }
  function km(t, e) {
    bn.M(t, e);
    var n = Ul;
    if (n && t) {
      var l = zn(n).hoistableScripts,
        s = jl(t),
        u = l.get(s);
      u ||
        ((u = n.querySelector(Xo(s))),
        u ||
          ((t = X({ src: t, async: !0, type: "module" }, e)),
          (e = vi.get(s)) && _c(t, e),
          (u = n.createElement("script")),
          de(u),
          Oe(u, "link", t),
          n.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        l.set(s, u));
    }
  }
  function od(t, e, n, l) {
    var s = (s = Q.current) ? hu(s) : null;
    if (!s) throw Error(b(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string"
          ? ((e = Hl(n.href)),
            (n = zn(s).hoistableStyles),
            (l = n.get(e)),
            l ||
              ((l = { type: "style", instance: null, count: 0, state: null }),
              n.set(e, l)),
            l)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          n.rel === "stylesheet" &&
          typeof n.href == "string" &&
          typeof n.precedence == "string"
        ) {
          t = Hl(n.href);
          var u = zn(s).hoistableStyles,
            f = u.get(t);
          if (
            (f ||
              ((s = s.ownerDocument || s),
              (f = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              u.set(t, f),
              (u = s.querySelector(Yo(t))) &&
                !u._p &&
                ((f.instance = u), (f.state.loading = 5)),
              vi.has(t) ||
                ((n = {
                  rel: "preload",
                  as: "style",
                  href: n.href,
                  crossOrigin: n.crossOrigin,
                  integrity: n.integrity,
                  media: n.media,
                  hrefLang: n.hrefLang,
                  referrerPolicy: n.referrerPolicy,
                }),
                vi.set(t, n),
                u || Vm(s, t, n, f.state))),
            e && l === null)
          )
            throw Error(b(528, ""));
          return f;
        }
        if (e && l !== null) throw Error(b(529, ""));
        return null;
      case "script":
        return (
          (e = n.async),
          (n = n.src),
          typeof n == "string" &&
          e &&
          typeof e != "function" &&
          typeof e != "symbol"
            ? ((e = jl(n)),
              (n = zn(s).hoistableScripts),
              (l = n.get(e)),
              l ||
                ((l = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                n.set(e, l)),
              l)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(b(444, t));
    }
  }
  function Hl(t) {
    return 'href="' + Jt(t) + '"';
  }
  function Yo(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function sd(t) {
    return X({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function Vm(t, e, n, l) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]")
      ? (l.loading = 1)
      : ((e = t.createElement("link")),
        (l.preload = e),
        e.addEventListener("load", function () {
          return (l.loading |= 1);
        }),
        e.addEventListener("error", function () {
          return (l.loading |= 2);
        }),
        Oe(e, "link", n),
        de(e),
        t.head.appendChild(e));
  }
  function jl(t) {
    return '[src="' + Jt(t) + '"]';
  }
  function Xo(t) {
    return "script[async]" + t;
  }
  function ud(t, e, n) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case "style":
          var l = t.querySelector('style[data-href~="' + Jt(n.href) + '"]');
          if (l) return ((e.instance = l), de(l), l);
          var s = X({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null,
          });
          return (
            (l = (t.ownerDocument || t).createElement("style")),
            de(l),
            Oe(l, "style", s),
            du(l, n.precedence, t),
            (e.instance = l)
          );
        case "stylesheet":
          s = Hl(n.href);
          var u = t.querySelector(Yo(s));
          if (u) return ((e.state.loading |= 4), (e.instance = u), de(u), u);
          ((l = sd(n)),
            (s = vi.get(s)) && mc(l, s),
            (u = (t.ownerDocument || t).createElement("link")),
            de(u));
          var f = u;
          return (
            (f._p = new Promise(function (d, _) {
              ((f.onload = d), (f.onerror = _));
            })),
            Oe(u, "link", l),
            (e.state.loading |= 4),
            du(u, n.precedence, t),
            (e.instance = u)
          );
        case "script":
          return (
            (u = jl(n.src)),
            (s = t.querySelector(Xo(u)))
              ? ((e.instance = s), de(s), s)
              : ((l = n),
                (s = vi.get(u)) && ((l = X({}, n)), _c(l, s)),
                (t = t.ownerDocument || t),
                (s = t.createElement("script")),
                de(s),
                Oe(s, "link", l),
                t.head.appendChild(s),
                (e.instance = s))
          );
        case "void":
          return null;
        default:
          throw Error(b(443, e.type));
      }
    else
      e.type === "stylesheet" &&
        (e.state.loading & 4) === 0 &&
        ((l = e.instance), (e.state.loading |= 4), du(l, n.precedence, t));
    return e.instance;
  }
  function du(t, e, n) {
    for (
      var l = n.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        s = l.length ? l[l.length - 1] : null,
        u = s,
        f = 0;
      f < l.length;
      f++
    ) {
      var d = l[f];
      if (d.dataset.precedence === e) u = d;
      else if (u !== s) break;
    }
    u
      ? u.parentNode.insertBefore(t, u.nextSibling)
      : ((e = n.nodeType === 9 ? n.head : n), e.insertBefore(t, e.firstChild));
  }
  function mc(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title));
  }
  function _c(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity));
  }
  var mu = null;
  function rd(t, e, n) {
    if (mu === null) {
      var l = new Map(),
        s = (mu = new Map());
      s.set(n, l);
    } else ((s = mu), (l = s.get(n)), l || ((l = new Map()), s.set(n, l)));
    if (l.has(t)) return l;
    for (
      l.set(t, null), n = n.getElementsByTagName(t), s = 0;
      s < n.length;
      s++
    ) {
      var u = n[s];
      if (
        !(
          u[ma] ||
          u[he] ||
          (t === "link" && u.getAttribute("rel") === "stylesheet")
        ) &&
        u.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var f = u.getAttribute(e) || "";
        f = t + f;
        var d = l.get(f);
        d ? d.push(u) : l.set(f, [u]);
      }
    }
    return l;
  }
  function cd(t, e, n) {
    ((t = t.ownerDocument || t),
      t.head.insertBefore(
        n,
        e === "title" ? t.querySelector("head > title") : null,
      ));
  }
  function Qm(t, e, n) {
    if (n === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof e.precedence != "string" ||
          typeof e.href != "string" ||
          e.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof e.rel != "string" ||
          typeof e.href != "string" ||
          e.href === "" ||
          e.onLoad ||
          e.onError
        )
          break;
        switch (e.rel) {
          case "stylesheet":
            return (
              (t = e.disabled),
              typeof e.precedence == "string" && t == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          e.async &&
          typeof e.async != "function" &&
          typeof e.async != "symbol" &&
          !e.onLoad &&
          !e.onError &&
          e.src &&
          typeof e.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function fd(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function Pm(t, e, n, l) {
    if (
      n.type === "stylesheet" &&
      (typeof l.media != "string" || matchMedia(l.media).matches !== !1) &&
      (n.state.loading & 4) === 0
    ) {
      if (n.instance === null) {
        var s = Hl(l.href),
          u = e.querySelector(Yo(s));
        if (u) {
          ((e = u._p),
            e !== null &&
              typeof e == "object" &&
              typeof e.then == "function" &&
              (t.count++, (t = _u.bind(t)), e.then(t, t)),
            (n.state.loading |= 4),
            (n.instance = u),
            de(u));
          return;
        }
        ((u = e.ownerDocument || e),
          (l = sd(l)),
          (s = vi.get(s)) && mc(l, s),
          (u = u.createElement("link")),
          de(u));
        var f = u;
        ((f._p = new Promise(function (d, _) {
          ((f.onload = d), (f.onerror = _));
        })),
          Oe(u, "link", l),
          (n.instance = u));
      }
      (t.stylesheets === null && (t.stylesheets = new Map()),
        t.stylesheets.set(n, e),
        (e = n.state.preload) &&
          (n.state.loading & 3) === 0 &&
          (t.count++,
          (n = _u.bind(t)),
          e.addEventListener("load", n),
          e.addEventListener("error", n)));
    }
  }
  var pc = 0;
  function Km(t, e) {
    return (
      t.stylesheets && t.count === 0 && vu(t, t.stylesheets),
      0 < t.count || 0 < t.imgCount
        ? function (n) {
            var l = setTimeout(function () {
              if ((t.stylesheets && vu(t, t.stylesheets), t.unsuspend)) {
                var u = t.unsuspend;
                ((t.unsuspend = null), u());
              }
            }, 6e4 + e);
            0 < t.imgBytes && pc === 0 && (pc = 62500 * wm());
            var s = setTimeout(
              function () {
                if (
                  ((t.waitingForImages = !1),
                  t.count === 0 &&
                    (t.stylesheets && vu(t, t.stylesheets), t.unsuspend))
                ) {
                  var u = t.unsuspend;
                  ((t.unsuspend = null), u());
                }
              },
              (t.imgBytes > pc ? 50 : 800) + e,
            );
            return (
              (t.unsuspend = n),
              function () {
                ((t.unsuspend = null), clearTimeout(l), clearTimeout(s));
              }
            );
          }
        : null
    );
  }
  function _u() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) vu(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        ((this.unsuspend = null), t());
      }
    }
  }
  var pu = null;
  function vu(t, e) {
    ((t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (pu = new Map()),
        e.forEach(Jm, t),
        (pu = null),
        _u.call(t)));
  }
  function Jm(t, e) {
    if (!(e.state.loading & 4)) {
      var n = pu.get(t);
      if (n) var l = n.get(null);
      else {
        ((n = new Map()), pu.set(t, n));
        for (
          var s = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            u = 0;
          u < s.length;
          u++
        ) {
          var f = s[u];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") &&
            (n.set(f.dataset.precedence, f), (l = f));
        }
        l && n.set(null, l);
      }
      ((s = e.instance),
        (f = s.getAttribute("data-precedence")),
        (u = n.get(f) || l),
        u === l && n.set(null, s),
        n.set(f, s),
        this.count++,
        (l = _u.bind(this)),
        s.addEventListener("load", l),
        s.addEventListener("error", l),
        u
          ? u.parentNode.insertBefore(s, u.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(s, t.firstChild)),
        (e.state.loading |= 4));
    }
  }
  var ko = {
    $$typeof: ct,
    Provider: null,
    Consumer: null,
    _currentValue: H,
    _currentValue2: H,
    _threadCount: 0,
  };
  function Wm(t, e, n, l, s, u, f, d, _) {
    ((this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Vl(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Vl(0)),
      (this.hiddenUpdates = Vl(null)),
      (this.identifierPrefix = l),
      (this.onUncaughtError = s),
      (this.onCaughtError = u),
      (this.onRecoverableError = f),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = _),
      (this.incompleteTransitions = new Map()));
  }
  function hd(t, e, n, l, s, u, f, d, _, S, O, B) {
    return (
      (t = new Wm(t, e, n, f, _, S, O, B, d)),
      (e = 1),
      u === !0 && (e |= 24),
      (u = Ne(3, null, null, e)),
      (t.current = u),
      (u.stateNode = t),
      (e = Ju()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (u.memoizedState = { element: l, isDehydrated: n, cache: e }),
      $u(u),
      t
    );
  }
  function dd(t) {
    return t ? ((t = on), t) : on;
  }
  function md(t, e, n, l, s, u) {
    ((s = dd(s)),
      l.context === null ? (l.context = s) : (l.pendingContext = s),
      (l = Xn(e)),
      (l.payload = { element: n }),
      (u = u === void 0 ? null : u),
      u !== null && (l.callback = u),
      (n = kn(t, l, e)),
      n !== null && (We(n, t, e), So(n, t, e)));
  }
  function _d(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function vc(t, e) {
    (_d(t, e), (t = t.alternate) && _d(t, e));
  }
  function pd(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = di(t, 67108864);
      (e !== null && We(e, t, 67108864), vc(t, 67108864));
    }
  }
  function vd(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = li();
      e = je(e);
      var n = di(t, e);
      (n !== null && We(n, t, e), vc(t, e));
    }
  }
  var gu = !0;
  function Fm(t, e, n, l) {
    var s = M.T;
    M.T = null;
    var u = q.p;
    try {
      ((q.p = 2), gc(t, e, n, l));
    } finally {
      ((q.p = u), (M.T = s));
    }
  }
  function Im(t, e, n, l) {
    var s = M.T;
    M.T = null;
    var u = q.p;
    try {
      ((q.p = 8), gc(t, e, n, l));
    } finally {
      ((q.p = u), (M.T = s));
    }
  }
  function gc(t, e, n, l) {
    if (gu) {
      var s = yc(l);
      if (s === null) (ac(t, e, l, yu, n), yd(t, l));
      else if (t_(s, t, e, n, l)) l.stopPropagation();
      else if ((yd(t, l), e & 4 && -1 < $m.indexOf(t))) {
        for (; s !== null; ) {
          var u = Tn(s);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (((u = u.stateNode), u.current.memoizedState.isDehydrated)) {
                  var f = Wi(u.pendingLanes);
                  if (f !== 0) {
                    var d = u;
                    for (d.pendingLanes |= 2, d.entangledLanes |= 2; f; ) {
                      var _ = 1 << (31 - Ze(f));
                      ((d.entanglements[1] |= _), (f &= ~_));
                    }
                    (Qi(u), (Zt & 6) === 0 && ((eu = Be() + 500), Ho(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((d = di(u, 2)), d !== null && We(d, u, 2), nu(), vc(u, 2));
            }
          if (((u = yc(l)), u === null && ac(t, e, l, yu, n), u === s)) break;
          s = u;
        }
        s !== null && l.stopPropagation();
      } else ac(t, e, l, null, n);
    }
  }
  function yc(t) {
    return ((t = ya(t)), bc(t));
  }
  var yu = null;
  function bc(t) {
    if (((yu = null), (t = $i(t)), t !== null)) {
      var e = F(t);
      if (e === null) t = null;
      else {
        var n = e.tag;
        if (n === 13) {
          if (((t = J(e)), t !== null)) return t;
          t = null;
        } else if (n === 31) {
          if (((t = Lt(e)), t !== null)) return t;
          t = null;
        } else if (n === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return ((yu = t), null);
  }
  function gd(t) {
    switch (t) {
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
        switch (Eu()) {
          case $a:
            return 2;
          case Xl:
            return 8;
          case ua:
          case Mu:
            return 32;
          case kl:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var xc = !1,
    ea = null,
    ia = null,
    na = null,
    Vo = new Map(),
    Qo = new Map(),
    aa = [],
    $m =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function yd(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        ea = null;
        break;
      case "dragenter":
      case "dragleave":
        ia = null;
        break;
      case "mouseover":
      case "mouseout":
        na = null;
        break;
      case "pointerover":
      case "pointerout":
        Vo.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Qo.delete(e.pointerId);
    }
  }
  function Po(t, e, n, l, s, u) {
    return t === null || t.nativeEvent !== u
      ? ((t = {
          blockedOn: e,
          domEventName: n,
          eventSystemFlags: l,
          nativeEvent: u,
          targetContainers: [s],
        }),
        e !== null && ((e = Tn(e)), e !== null && pd(e)),
        t)
      : ((t.eventSystemFlags |= l),
        (e = t.targetContainers),
        s !== null && e.indexOf(s) === -1 && e.push(s),
        t);
  }
  function t_(t, e, n, l, s) {
    switch (e) {
      case "focusin":
        return ((ea = Po(ea, t, e, n, l, s)), !0);
      case "dragenter":
        return ((ia = Po(ia, t, e, n, l, s)), !0);
      case "mouseover":
        return ((na = Po(na, t, e, n, l, s)), !0);
      case "pointerover":
        var u = s.pointerId;
        return (Vo.set(u, Po(Vo.get(u) || null, t, e, n, l, s)), !0);
      case "gotpointercapture":
        return (
          (u = s.pointerId),
          Qo.set(u, Po(Qo.get(u) || null, t, e, n, l, s)),
          !0
        );
    }
    return !1;
  }
  function bd(t) {
    var e = $i(t.target);
    if (e !== null) {
      var n = F(e);
      if (n !== null) {
        if (((e = n.tag), e === 13)) {
          if (((e = J(n)), e !== null)) {
            ((t.blockedOn = e),
              Pl(t.priority, function () {
                vd(n);
              }));
            return;
          }
        } else if (e === 31) {
          if (((e = Lt(n)), e !== null)) {
            ((t.blockedOn = e),
              Pl(t.priority, function () {
                vd(n);
              }));
            return;
          }
        } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function bu(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var n = yc(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var l = new n.constructor(n.type, n);
        ((al = l), n.target.dispatchEvent(l), (al = null));
      } else return ((e = Tn(n)), e !== null && pd(e), (t.blockedOn = n), !1);
      e.shift();
    }
    return !0;
  }
  function xd(t, e, n) {
    bu(t) && n.delete(e);
  }
  function e_() {
    ((xc = !1),
      ea !== null && bu(ea) && (ea = null),
      ia !== null && bu(ia) && (ia = null),
      na !== null && bu(na) && (na = null),
      Vo.forEach(xd),
      Qo.forEach(xd));
  }
  function xu(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null),
      xc ||
        ((xc = !0),
        R.unstable_scheduleCallback(R.unstable_NormalPriority, e_)));
  }
  var Su = null;
  function Sd(t) {
    Su !== t &&
      ((Su = t),
      R.unstable_scheduleCallback(R.unstable_NormalPriority, function () {
        Su === t && (Su = null);
        for (var e = 0; e < t.length; e += 3) {
          var n = t[e],
            l = t[e + 1],
            s = t[e + 2];
          if (typeof l != "function") {
            if (bc(l || n) === null) continue;
            break;
          }
          var u = Tn(n);
          u !== null &&
            (t.splice(e, 3),
            (e -= 3),
            yr(u, { pending: !0, data: s, method: n.method, action: l }, l, s));
        }
      }));
  }
  function ql(t) {
    function e(_) {
      return xu(_, t);
    }
    (ea !== null && xu(ea, t),
      ia !== null && xu(ia, t),
      na !== null && xu(na, t),
      Vo.forEach(e),
      Qo.forEach(e));
    for (var n = 0; n < aa.length; n++) {
      var l = aa[n];
      l.blockedOn === t && (l.blockedOn = null);
    }
    for (; 0 < aa.length && ((n = aa[0]), n.blockedOn === null); )
      (bd(n), n.blockedOn === null && aa.shift());
    if (((n = (t.ownerDocument || t).$$reactFormReplay), n != null))
      for (l = 0; l < n.length; l += 3) {
        var s = n[l],
          u = n[l + 1],
          f = s[Se] || null;
        if (typeof u == "function") f || Sd(n);
        else if (f) {
          var d = null;
          if (u && u.hasAttribute("formAction")) {
            if (((s = u), (f = u[Se] || null))) d = f.formAction;
            else if (bc(s) !== null) continue;
          } else d = f.action;
          (typeof d == "function" ? (n[l + 1] = d) : (n.splice(l, 3), (l -= 3)),
            Sd(n));
        }
      }
  }
  function Td() {
    function t(u) {
      u.canIntercept &&
        u.info === "react-transition" &&
        u.intercept({
          handler: function () {
            return new Promise(function (f) {
              return (s = f);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function e() {
      (s !== null && (s(), (s = null)), l || setTimeout(n, 20));
    }
    function n() {
      if (!l && !navigation.transition) {
        var u = navigation.currentEntry;
        u &&
          u.url != null &&
          navigation.navigate(u.url, {
            state: u.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var l = !1,
        s = null;
      return (
        navigation.addEventListener("navigate", t),
        navigation.addEventListener("navigatesuccess", e),
        navigation.addEventListener("navigateerror", e),
        setTimeout(n, 100),
        function () {
          ((l = !0),
            navigation.removeEventListener("navigate", t),
            navigation.removeEventListener("navigatesuccess", e),
            navigation.removeEventListener("navigateerror", e),
            s !== null && (s(), (s = null)));
        }
      );
    }
  }
  function Sc(t) {
    this._internalRoot = t;
  }
  ((Tu.prototype.render = Sc.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(b(409));
      var n = e.current,
        l = li();
      md(n, l, t, e, null, null);
    }),
    (Tu.prototype.unmount = Sc.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          (md(t.current, 2, null, t, null, null), nu(), (e[Ii] = null));
        }
      }));
  function Tu(t) {
    this._internalRoot = t;
  }
  Tu.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = Ql();
      t = { blockedOn: null, target: t, priority: e };
      for (var n = 0; n < aa.length && e !== 0 && e < aa[n].priority; n++);
      (aa.splice(n, 0, t), n === 0 && bd(t));
    }
  };
  var zd = nt.version;
  if (zd !== "19.2.4") throw Error(b(527, zd, "19.2.4"));
  q.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function"
        ? Error(b(188))
        : ((t = Object.keys(t).join(",")), Error(b(268, t)));
    return (
      (t = C(e)),
      (t = t !== null ? I(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var i_ = {
    bundleType: 0,
    version: "19.2.4",
    rendererPackageName: "react-dom",
    currentDispatcherRef: M,
    reconcilerVersion: "19.2.4",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var zu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!zu.isDisabled && zu.supportsFiber)
      try {
        ((Sn = zu.inject(i_)), (Me = zu));
      } catch {}
  }
  return (
    (Jo.createRoot = function (t, e) {
      if (!G(t)) throw Error(b(299));
      var n = !1,
        l = "",
        s = Cf,
        u = Nf,
        f = Df;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (n = !0),
          e.identifierPrefix !== void 0 && (l = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (s = e.onUncaughtError),
          e.onCaughtError !== void 0 && (u = e.onCaughtError),
          e.onRecoverableError !== void 0 && (f = e.onRecoverableError)),
        (e = hd(t, 1, !1, null, null, n, l, null, s, u, f, Td)),
        (t[Ii] = e.current),
        nc(t),
        new Sc(e)
      );
    }),
    (Jo.hydrateRoot = function (t, e, n) {
      if (!G(t)) throw Error(b(299));
      var l = !1,
        s = "",
        u = Cf,
        f = Nf,
        d = Df,
        _ = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (u = n.onUncaughtError),
          n.onCaughtError !== void 0 && (f = n.onCaughtError),
          n.onRecoverableError !== void 0 && (d = n.onRecoverableError),
          n.formState !== void 0 && (_ = n.formState)),
        (e = hd(t, 1, !0, e, n ?? null, l, s, _, u, f, d, Td)),
        (e.context = dd(null)),
        (n = e.current),
        (l = li()),
        (l = je(l)),
        (s = Xn(l)),
        (s.callback = null),
        kn(n, s, l),
        (n = l),
        (e.current.lanes = n),
        Fi(e, n),
        Qi(e),
        (t[Ii] = e.current),
        nc(t),
        new Tu(e)
      );
    }),
    (Jo.version = "19.2.4"),
    Jo
  );
}
var Bd;
function d_() {
  if (Bd) return Ec.exports;
  Bd = 1;
  function R() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(R);
      } catch (nt) {
        console.error(nt);
      }
  }
  return (R(), (Ec.exports = h_()), Ec.exports);
}
var m_ = d_();
const __ = jd(m_);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qd = (...R) =>
  R.filter((nt, T, b) => !!nt && nt.trim() !== "" && b.indexOf(nt) === T)
    .join(" ")
    .trim();
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const p_ = (R) => R.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const v_ = (R) =>
  R.replace(/^([A-Z])|[\s-_]+(\w)/g, (nt, T, b) =>
    b ? b.toUpperCase() : T.toLowerCase(),
  );
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Zd = (R) => {
  const nt = v_(R);
  return nt.charAt(0).toUpperCase() + nt.slice(1);
};
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var g_ = {
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
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const y_ = (R) => {
  for (const nt in R)
    if (nt.startsWith("aria-") || nt === "role" || nt === "title") return !0;
  return !1;
};
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const b_ = ce.forwardRef(
  (
    {
      color: R = "currentColor",
      size: nt = 24,
      strokeWidth: T = 2,
      absoluteStrokeWidth: b,
      className: G = "",
      children: F,
      iconNode: J,
      ...Lt
    },
    U,
  ) =>
    ce.createElement(
      "svg",
      {
        ref: U,
        ...g_,
        width: nt,
        height: nt,
        stroke: R,
        strokeWidth: b ? (Number(T) * 24) / Number(nt) : T,
        className: qd("lucide", G),
        ...(!F && !y_(Lt) && { "aria-hidden": "true" }),
        ...Lt,
      },
      [
        ...J.map(([C, I]) => ce.createElement(C, I)),
        ...(Array.isArray(F) ? F : [F]),
      ],
    ),
);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gi = (R, nt) => {
  const T = ce.forwardRef(({ className: b, ...G }, F) =>
    ce.createElement(b_, {
      ref: F,
      iconNode: nt,
      className: qd(`lucide-${p_(Zd(R))}`, `lucide-${R}`, b),
      ...G,
    }),
  );
  return ((T.displayName = Zd(R)), T);
};
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const x_ = [
    [
      "path",
      {
        d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
        key: "169zse",
      },
    ],
  ],
  S_ = gi("activity", x_);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const T_ = [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
  ],
  z_ = gi("arrow-right", T_);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const E_ = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]],
  M_ = gi("chevron-right", E_);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const L_ = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["line", { x1: "22", x2: "18", y1: "12", y2: "12", key: "l9bcsi" }],
    ["line", { x1: "6", x2: "2", y1: "12", y2: "12", key: "13hhkx" }],
    ["line", { x1: "12", x2: "12", y1: "6", y2: "2", key: "10w3f3" }],
    ["line", { x1: "12", x2: "12", y1: "22", y2: "18", key: "15g9kq" }],
  ],
  w_ = gi("crosshair", L_);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const A_ = [
    ["path", { d: "M12 15V3", key: "m9g1x1" }],
    ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
    ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }],
  ],
  O_ = gi("download", A_);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const C_ = [
    [
      "path",
      {
        d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
        key: "ct8e1f",
      },
    ],
    ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242", key: "151rxh" }],
    [
      "path",
      {
        d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
        key: "13bj9a",
      },
    ],
    ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ],
  N_ = gi("eye-off", C_);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const D_ = [
    [
      "path",
      {
        d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
        key: "1nclc0",
      },
    ],
    ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
  ],
  B_ = gi("eye", D_);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Z_ = [
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
  R_ = gi("map", Z_);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const U_ = [
    [
      "path",
      {
        d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
        key: "v9h5vc",
      },
    ],
    ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
    [
      "path",
      {
        d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
        key: "3uifl3",
      },
    ],
    ["path", { d: "M8 16H3v5", key: "1cv678" }],
  ],
  Rd = gi("refresh-cw", U_);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const H_ = [
    [
      "path",
      {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y",
      },
    ],
    ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
  ],
  j_ = gi("shield-check", H_);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const q_ = [
    ["path", { d: "M12 3v12", key: "1x0j5s" }],
    ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
    ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ],
  G_ = gi("upload", q_);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Y_ = [
    [
      "path",
      {
        d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
        key: "1xq2db",
      },
    ],
  ],
  X_ = gi("zap", Y_),
  Ud = (R, nt) => {
    var b, G;
    const T = R.getElementsByTagName("Folder");
    for (let F = 0; F < T.length; F++)
      if (
        ((G =
          (b = T[F].getElementsByTagName("name")[0]) == null
            ? void 0
            : b.textContent) == null
          ? void 0
          : G.trim()) === nt
      )
        return T[F];
    return null;
  },
  k_ = (R) => {
    var Lt, U, C, I, X, st;
    const T = new DOMParser().parseFromString(R, "text/xml"),
      b = [],
      G = [],
      F = T.getElementsByTagName("Placemark");
    for (let wt = 0; wt < F.length; wt++) {
      const gt = F[wt],
        et = gt.getElementsByTagName("Point")[0];
      if (et) {
        const Ot =
            ((Lt = gt.getElementsByTagName("name")[0]) == null
              ? void 0
              : Lt.textContent) || `Node ${wt}`,
          vt =
            (C =
              (U = et.getElementsByTagName("coordinates")[0]) == null
                ? void 0
                : U.textContent) == null
              ? void 0
              : C.trim();
        if (vt) {
          const kt = vt.split(","),
            ct = parseFloat(kt[0]),
            Pt = parseFloat(kt[1]);
          !isNaN(Pt) &&
            !isNaN(ct) &&
            b.push({ id: `p-${wt}`, name: Ot, coordinates: [Pt, ct] });
        }
      }
    }
    const J = Ud(T, "Cables");
    if (J) {
      const et = (Ud(J, "Cable") || J).getElementsByTagName("Placemark");
      for (let Ot = 0; Ot < et.length; Ot++) {
        const vt = et[Ot],
          kt = vt.getElementsByTagName("LineString")[0];
        if (kt) {
          const ct =
              ((I = vt.getElementsByTagName("name")[0]) == null
                ? void 0
                : I.textContent) || `Cable ${Ot}`,
            Pt =
              (st =
                (X = kt.getElementsByTagName("coordinates")[0]) == null
                  ? void 0
                  : X.textContent) == null
                ? void 0
                : st.trim();
          if (Pt) {
            const oe = Pt.split(/\s+/)
              .filter(Boolean)
              .map((Kt) => {
                const ft = Kt.split(","),
                  se = parseFloat(ft[0]);
                return [parseFloat(ft[1]), se];
              })
              .filter((Kt) => !isNaN(Kt[0]) && !isNaN(Kt[1]));
            oe.length > 0 &&
              G.push({
                id: `c-${Ot}`,
                name: ct,
                coordinates: oe,
                originalCoordinates: JSON.parse(JSON.stringify(oe)),
                nodeReference: vt,
              });
          }
        }
      }
    }
    return { points: b, cables: G, rawDoc: T };
  },
  V_ = (R, nt, T, b) => {
    const F = (R * Math.PI) / 180,
      J = (T * Math.PI) / 180,
      Lt = ((T - R) * Math.PI) / 180,
      U = ((b - nt) * Math.PI) / 180,
      C =
        Math.sin(Lt / 2) * Math.sin(Lt / 2) +
        Math.cos(F) * Math.cos(J) * Math.sin(U / 2) * Math.sin(U / 2);
    return 6371e3 * (2 * Math.atan2(Math.sqrt(C), Math.sqrt(1 - C)));
  },
  Q_ = (R, nt = 10) => {
    const { points: T, cables: b, rawDoc: G } = R;
    if (!G)
      return {
        snappedData: R,
        stats: {
          totalCables: 0,
          snappedEndpoints: 0,
          averageCorrectionMeters: 0,
          maxCorrectionMeters: 0,
          totalExtensionLength: 0,
        },
      };
    const F = [],
      J = [];
    let Lt = 0,
      U = 0,
      C = 0;
    return (
      b.forEach((I) => {
        const X = [...I.coordinates.map((wt) => [...wt])];
        if (
          ([0, X.length - 1].forEach((wt) => {
            const [gt, et] = X[wt];
            let Ot = 1 / 0,
              vt = null;
            if (
              (T.forEach((kt) => {
                const ct = V_(gt, et, kt.coordinates[0], kt.coordinates[1]);
                ct < Ot && ((Ot = ct), (vt = kt));
              }),
              vt && Ot <= nt && Ot > 1e-6)
            ) {
              const kt = [gt, et],
                ct = [...vt.coordinates];
              ((X[wt] = ct),
                J.push({
                  cableId: I.id,
                  cableName: I.name,
                  from: kt,
                  to: ct,
                  distance: Ot,
                }),
                Lt++,
                (U += Ot),
                (C = Math.max(C, Ot)));
            }
          }),
          I.nodeReference)
        ) {
          const wt = I.nodeReference.getElementsByTagName("coordinates")[0];
          if (wt) {
            const gt = X.map((et) => `${et[1]},${et[0]},0`).join(" ");
            wt.textContent = gt;
          }
        }
        F.push({ ...I, coordinates: X });
      }),
      {
        snappedData: { points: T, cables: F, snappedSegments: J, rawDoc: G },
        stats: {
          totalCables: b.length,
          snappedEndpoints: Lt,
          averageCorrectionMeters: Lt > 0 ? U / Lt : 0,
          maxCorrectionMeters: C,
          totalExtensionLength: U,
        },
      }
    );
  },
  P_ = (R) => (R.rawDoc ? new XMLSerializer().serializeToString(R.rawDoc) : "");
var Wo = { exports: {} };
/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */ var K_ = Wo.exports,
  Hd;
function J_() {
  return (
    Hd ||
      ((Hd = 1),
      (function (R, nt) {
        (function (T, b) {
          b(nt);
        })(K_, function (T) {
          var b = "1.9.4";
          function G(i) {
            var a, o, r, c;
            for (o = 1, r = arguments.length; o < r; o++) {
              c = arguments[o];
              for (a in c) i[a] = c[a];
            }
            return i;
          }
          var F =
            Object.create ||
            (function () {
              function i() {}
              return function (a) {
                return ((i.prototype = a), new i());
              };
            })();
          function J(i, a) {
            var o = Array.prototype.slice;
            if (i.bind) return i.bind.apply(i, o.call(arguments, 1));
            var r = o.call(arguments, 2);
            return function () {
              return i.apply(
                a,
                r.length ? r.concat(o.call(arguments)) : arguments,
              );
            };
          }
          var Lt = 0;
          function U(i) {
            return (
              "_leaflet_id" in i || (i._leaflet_id = ++Lt),
              i._leaflet_id
            );
          }
          function C(i, a, o) {
            var r, c, h, m;
            return (
              (m = function () {
                ((r = !1), c && (h.apply(o, c), (c = !1)));
              }),
              (h = function () {
                r
                  ? (c = arguments)
                  : (i.apply(o, arguments), setTimeout(m, a), (r = !0));
              }),
              h
            );
          }
          function I(i, a, o) {
            var r = a[1],
              c = a[0],
              h = r - c;
            return i === r && o ? i : ((((i - c) % h) + h) % h) + c;
          }
          function X() {
            return !1;
          }
          function st(i, a) {
            if (a === !1) return i;
            var o = Math.pow(10, a === void 0 ? 6 : a);
            return Math.round(i * o) / o;
          }
          function wt(i) {
            return i.trim ? i.trim() : i.replace(/^\s+|\s+$/g, "");
          }
          function gt(i) {
            return wt(i).split(/\s+/);
          }
          function et(i, a) {
            Object.prototype.hasOwnProperty.call(i, "options") ||
              (i.options = i.options ? F(i.options) : {});
            for (var o in a) i.options[o] = a[o];
            return i.options;
          }
          function Ot(i, a, o) {
            var r = [];
            for (var c in i)
              r.push(
                encodeURIComponent(o ? c.toUpperCase() : c) +
                  "=" +
                  encodeURIComponent(i[c]),
              );
            return (!a || a.indexOf("?") === -1 ? "?" : "&") + r.join("&");
          }
          var vt = /\{ *([\w_ -]+) *\}/g;
          function kt(i, a) {
            return i.replace(vt, function (o, r) {
              var c = a[r];
              if (c === void 0)
                throw new Error("No value provided for variable " + o);
              return (typeof c == "function" && (c = c(a)), c);
            });
          }
          var ct =
            Array.isArray ||
            function (i) {
              return Object.prototype.toString.call(i) === "[object Array]";
            };
          function Pt(i, a) {
            for (var o = 0; o < i.length; o++) if (i[o] === a) return o;
            return -1;
          }
          var oe = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
          function Kt(i) {
            return (
              window["webkit" + i] || window["moz" + i] || window["ms" + i]
            );
          }
          var ft = 0;
          function se(i) {
            var a = +new Date(),
              o = Math.max(0, 16 - (a - ft));
            return ((ft = a + o), window.setTimeout(i, o));
          }
          var xe =
              window.requestAnimationFrame || Kt("RequestAnimationFrame") || se,
            oi =
              window.cancelAnimationFrame ||
              Kt("CancelAnimationFrame") ||
              Kt("CancelRequestAnimationFrame") ||
              function (i) {
                window.clearTimeout(i);
              };
          function ot(i, a, o) {
            if (o && xe === se) i.call(a);
            else return xe.call(window, J(i, a));
          }
          function ht(i) {
            i && oi.call(window, i);
          }
          var Ut = {
            __proto__: null,
            extend: G,
            create: F,
            bind: J,
            get lastId() {
              return Lt;
            },
            stamp: U,
            throttle: C,
            wrapNum: I,
            falseFn: X,
            formatNum: st,
            trim: wt,
            splitWords: gt,
            setOptions: et,
            getParamString: Ot,
            template: kt,
            isArray: ct,
            indexOf: Pt,
            emptyImageUrl: oe,
            requestFn: xe,
            cancelFn: oi,
            requestAnimFrame: ot,
            cancelAnimFrame: ht,
          };
          function yt() {}
          ((yt.extend = function (i) {
            var a = function () {
                (et(this),
                  this.initialize && this.initialize.apply(this, arguments),
                  this.callInitHooks());
              },
              o = (a.__super__ = this.prototype),
              r = F(o);
            ((r.constructor = a), (a.prototype = r));
            for (var c in this)
              Object.prototype.hasOwnProperty.call(this, c) &&
                c !== "prototype" &&
                c !== "__super__" &&
                (a[c] = this[c]);
            return (
              i.statics && G(a, i.statics),
              i.includes &&
                (fe(i.includes), G.apply(null, [r].concat(i.includes))),
              G(r, i),
              delete r.statics,
              delete r.includes,
              r.options &&
                ((r.options = o.options ? F(o.options) : {}),
                G(r.options, i.options)),
              (r._initHooks = []),
              (r.callInitHooks = function () {
                if (!this._initHooksCalled) {
                  (o.callInitHooks && o.callInitHooks.call(this),
                    (this._initHooksCalled = !0));
                  for (var h = 0, m = r._initHooks.length; h < m; h++)
                    r._initHooks[h].call(this);
                }
              }),
              a
            );
          }),
            (yt.include = function (i) {
              var a = this.prototype.options;
              return (
                G(this.prototype, i),
                i.options &&
                  ((this.prototype.options = a), this.mergeOptions(i.options)),
                this
              );
            }),
            (yt.mergeOptions = function (i) {
              return (G(this.prototype.options, i), this);
            }),
            (yt.addInitHook = function (i) {
              var a = Array.prototype.slice.call(arguments, 1),
                o =
                  typeof i == "function"
                    ? i
                    : function () {
                        this[i].apply(this, a);
                      };
              return (
                (this.prototype._initHooks = this.prototype._initHooks || []),
                this.prototype._initHooks.push(o),
                this
              );
            }));
          function fe(i) {
            if (!(typeof L > "u" || !L || !L.Mixin)) {
              i = ct(i) ? i : [i];
              for (var a = 0; a < i.length; a++)
                i[a] === L.Mixin.Events &&
                  console.warn(
                    "Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",
                    new Error().stack,
                  );
            }
          }
          var M = {
            on: function (i, a, o) {
              if (typeof i == "object") for (var r in i) this._on(r, i[r], a);
              else {
                i = gt(i);
                for (var c = 0, h = i.length; c < h; c++) this._on(i[c], a, o);
              }
              return this;
            },
            off: function (i, a, o) {
              if (!arguments.length) delete this._events;
              else if (typeof i == "object")
                for (var r in i) this._off(r, i[r], a);
              else {
                i = gt(i);
                for (
                  var c = arguments.length === 1, h = 0, m = i.length;
                  h < m;
                  h++
                )
                  c ? this._off(i[h]) : this._off(i[h], a, o);
              }
              return this;
            },
            _on: function (i, a, o, r) {
              if (typeof a != "function") {
                console.warn("wrong listener type: " + typeof a);
                return;
              }
              if (this._listens(i, a, o) === !1) {
                o === this && (o = void 0);
                var c = { fn: a, ctx: o };
                (r && (c.once = !0),
                  (this._events = this._events || {}),
                  (this._events[i] = this._events[i] || []),
                  this._events[i].push(c));
              }
            },
            _off: function (i, a, o) {
              var r, c, h;
              if (this._events && ((r = this._events[i]), !!r)) {
                if (arguments.length === 1) {
                  if (this._firingCount)
                    for (c = 0, h = r.length; c < h; c++) r[c].fn = X;
                  delete this._events[i];
                  return;
                }
                if (typeof a != "function") {
                  console.warn("wrong listener type: " + typeof a);
                  return;
                }
                var m = this._listens(i, a, o);
                if (m !== !1) {
                  var y = r[m];
                  (this._firingCount &&
                    ((y.fn = X), (this._events[i] = r = r.slice())),
                    r.splice(m, 1));
                }
              }
            },
            fire: function (i, a, o) {
              if (!this.listens(i, o)) return this;
              var r = G({}, a, {
                type: i,
                target: this,
                sourceTarget: (a && a.sourceTarget) || this,
              });
              if (this._events) {
                var c = this._events[i];
                if (c) {
                  this._firingCount = this._firingCount + 1 || 1;
                  for (var h = 0, m = c.length; h < m; h++) {
                    var y = c[h],
                      z = y.fn;
                    (y.once && this.off(i, z, y.ctx), z.call(y.ctx || this, r));
                  }
                  this._firingCount--;
                }
              }
              return (o && this._propagateEvent(r), this);
            },
            listens: function (i, a, o, r) {
              typeof i != "string" &&
                console.warn('"string" type argument expected');
              var c = a;
              typeof a != "function" && ((r = !!a), (c = void 0), (o = void 0));
              var h = this._events && this._events[i];
              if (h && h.length && this._listens(i, c, o) !== !1) return !0;
              if (r) {
                for (var m in this._eventParents)
                  if (this._eventParents[m].listens(i, a, o, r)) return !0;
              }
              return !1;
            },
            _listens: function (i, a, o) {
              if (!this._events) return !1;
              var r = this._events[i] || [];
              if (!a) return !!r.length;
              o === this && (o = void 0);
              for (var c = 0, h = r.length; c < h; c++)
                if (r[c].fn === a && r[c].ctx === o) return c;
              return !1;
            },
            once: function (i, a, o) {
              if (typeof i == "object")
                for (var r in i) this._on(r, i[r], a, !0);
              else {
                i = gt(i);
                for (var c = 0, h = i.length; c < h; c++)
                  this._on(i[c], a, o, !0);
              }
              return this;
            },
            addEventParent: function (i) {
              return (
                (this._eventParents = this._eventParents || {}),
                (this._eventParents[U(i)] = i),
                this
              );
            },
            removeEventParent: function (i) {
              return (
                this._eventParents && delete this._eventParents[U(i)],
                this
              );
            },
            _propagateEvent: function (i) {
              for (var a in this._eventParents)
                this._eventParents[a].fire(
                  i.type,
                  G({ layer: i.target, propagatedFrom: i.target }, i),
                  !0,
                );
            },
          };
          ((M.addEventListener = M.on),
            (M.removeEventListener = M.clearAllEventListeners = M.off),
            (M.addOneTimeEventListener = M.once),
            (M.fireEvent = M.fire),
            (M.hasEventListeners = M.listens));
          var q = yt.extend(M);
          function H(i, a, o) {
            ((this.x = o ? Math.round(i) : i),
              (this.y = o ? Math.round(a) : a));
          }
          var At =
            Math.trunc ||
            function (i) {
              return i > 0 ? Math.floor(i) : Math.ceil(i);
            };
          H.prototype = {
            clone: function () {
              return new H(this.x, this.y);
            },
            add: function (i) {
              return this.clone()._add(V(i));
            },
            _add: function (i) {
              return ((this.x += i.x), (this.y += i.y), this);
            },
            subtract: function (i) {
              return this.clone()._subtract(V(i));
            },
            _subtract: function (i) {
              return ((this.x -= i.x), (this.y -= i.y), this);
            },
            divideBy: function (i) {
              return this.clone()._divideBy(i);
            },
            _divideBy: function (i) {
              return ((this.x /= i), (this.y /= i), this);
            },
            multiplyBy: function (i) {
              return this.clone()._multiplyBy(i);
            },
            _multiplyBy: function (i) {
              return ((this.x *= i), (this.y *= i), this);
            },
            scaleBy: function (i) {
              return new H(this.x * i.x, this.y * i.y);
            },
            unscaleBy: function (i) {
              return new H(this.x / i.x, this.y / i.y);
            },
            round: function () {
              return this.clone()._round();
            },
            _round: function () {
              return (
                (this.x = Math.round(this.x)),
                (this.y = Math.round(this.y)),
                this
              );
            },
            floor: function () {
              return this.clone()._floor();
            },
            _floor: function () {
              return (
                (this.x = Math.floor(this.x)),
                (this.y = Math.floor(this.y)),
                this
              );
            },
            ceil: function () {
              return this.clone()._ceil();
            },
            _ceil: function () {
              return (
                (this.x = Math.ceil(this.x)),
                (this.y = Math.ceil(this.y)),
                this
              );
            },
            trunc: function () {
              return this.clone()._trunc();
            },
            _trunc: function () {
              return ((this.x = At(this.x)), (this.y = At(this.y)), this);
            },
            distanceTo: function (i) {
              i = V(i);
              var a = i.x - this.x,
                o = i.y - this.y;
              return Math.sqrt(a * a + o * o);
            },
            equals: function (i) {
              return ((i = V(i)), i.x === this.x && i.y === this.y);
            },
            contains: function (i) {
              return (
                (i = V(i)),
                Math.abs(i.x) <= Math.abs(this.x) &&
                  Math.abs(i.y) <= Math.abs(this.y)
              );
            },
            toString: function () {
              return "Point(" + st(this.x) + ", " + st(this.y) + ")";
            },
          };
          function V(i, a, o) {
            return i instanceof H
              ? i
              : ct(i)
                ? new H(i[0], i[1])
                : i == null
                  ? i
                  : typeof i == "object" && "x" in i && "y" in i
                    ? new H(i.x, i.y)
                    : new H(i, a, o);
          }
          function p(i, a) {
            if (i)
              for (var o = a ? [i, a] : i, r = 0, c = o.length; r < c; r++)
                this.extend(o[r]);
          }
          p.prototype = {
            extend: function (i) {
              var a, o;
              if (!i) return this;
              if (i instanceof H || typeof i[0] == "number" || "x" in i)
                a = o = V(i);
              else if (((i = A(i)), (a = i.min), (o = i.max), !a || !o))
                return this;
              return (
                !this.min && !this.max
                  ? ((this.min = a.clone()), (this.max = o.clone()))
                  : ((this.min.x = Math.min(a.x, this.min.x)),
                    (this.max.x = Math.max(o.x, this.max.x)),
                    (this.min.y = Math.min(a.y, this.min.y)),
                    (this.max.y = Math.max(o.y, this.max.y))),
                this
              );
            },
            getCenter: function (i) {
              return V(
                (this.min.x + this.max.x) / 2,
                (this.min.y + this.max.y) / 2,
                i,
              );
            },
            getBottomLeft: function () {
              return V(this.min.x, this.max.y);
            },
            getTopRight: function () {
              return V(this.max.x, this.min.y);
            },
            getTopLeft: function () {
              return this.min;
            },
            getBottomRight: function () {
              return this.max;
            },
            getSize: function () {
              return this.max.subtract(this.min);
            },
            contains: function (i) {
              var a, o;
              return (
                typeof i[0] == "number" || i instanceof H
                  ? (i = V(i))
                  : (i = A(i)),
                i instanceof p ? ((a = i.min), (o = i.max)) : (a = o = i),
                a.x >= this.min.x &&
                  o.x <= this.max.x &&
                  a.y >= this.min.y &&
                  o.y <= this.max.y
              );
            },
            intersects: function (i) {
              i = A(i);
              var a = this.min,
                o = this.max,
                r = i.min,
                c = i.max,
                h = c.x >= a.x && r.x <= o.x,
                m = c.y >= a.y && r.y <= o.y;
              return h && m;
            },
            overlaps: function (i) {
              i = A(i);
              var a = this.min,
                o = this.max,
                r = i.min,
                c = i.max,
                h = c.x > a.x && r.x < o.x,
                m = c.y > a.y && r.y < o.y;
              return h && m;
            },
            isValid: function () {
              return !!(this.min && this.max);
            },
            pad: function (i) {
              var a = this.min,
                o = this.max,
                r = Math.abs(a.x - o.x) * i,
                c = Math.abs(a.y - o.y) * i;
              return A(V(a.x - r, a.y - c), V(o.x + r, o.y + c));
            },
            equals: function (i) {
              return i
                ? ((i = A(i)),
                  this.min.equals(i.getTopLeft()) &&
                    this.max.equals(i.getBottomRight()))
                : !1;
            },
          };
          function A(i, a) {
            return !i || i instanceof p ? i : new p(i, a);
          }
          function j(i, a) {
            if (i)
              for (var o = a ? [i, a] : i, r = 0, c = o.length; r < c; r++)
                this.extend(o[r]);
          }
          j.prototype = {
            extend: function (i) {
              var a = this._southWest,
                o = this._northEast,
                r,
                c;
              if (i instanceof P) ((r = i), (c = i));
              else if (i instanceof j) {
                if (((r = i._southWest), (c = i._northEast), !r || !c))
                  return this;
              } else return i ? this.extend(Q(i) || Y(i)) : this;
              return (
                !a && !o
                  ? ((this._southWest = new P(r.lat, r.lng)),
                    (this._northEast = new P(c.lat, c.lng)))
                  : ((a.lat = Math.min(r.lat, a.lat)),
                    (a.lng = Math.min(r.lng, a.lng)),
                    (o.lat = Math.max(c.lat, o.lat)),
                    (o.lng = Math.max(c.lng, o.lng))),
                this
              );
            },
            pad: function (i) {
              var a = this._southWest,
                o = this._northEast,
                r = Math.abs(a.lat - o.lat) * i,
                c = Math.abs(a.lng - o.lng) * i;
              return new j(
                new P(a.lat - r, a.lng - c),
                new P(o.lat + r, o.lng + c),
              );
            },
            getCenter: function () {
              return new P(
                (this._southWest.lat + this._northEast.lat) / 2,
                (this._southWest.lng + this._northEast.lng) / 2,
              );
            },
            getSouthWest: function () {
              return this._southWest;
            },
            getNorthEast: function () {
              return this._northEast;
            },
            getNorthWest: function () {
              return new P(this.getNorth(), this.getWest());
            },
            getSouthEast: function () {
              return new P(this.getSouth(), this.getEast());
            },
            getWest: function () {
              return this._southWest.lng;
            },
            getSouth: function () {
              return this._southWest.lat;
            },
            getEast: function () {
              return this._northEast.lng;
            },
            getNorth: function () {
              return this._northEast.lat;
            },
            contains: function (i) {
              typeof i[0] == "number" || i instanceof P || "lat" in i
                ? (i = Q(i))
                : (i = Y(i));
              var a = this._southWest,
                o = this._northEast,
                r,
                c;
              return (
                i instanceof j
                  ? ((r = i.getSouthWest()), (c = i.getNorthEast()))
                  : (r = c = i),
                r.lat >= a.lat &&
                  c.lat <= o.lat &&
                  r.lng >= a.lng &&
                  c.lng <= o.lng
              );
            },
            intersects: function (i) {
              i = Y(i);
              var a = this._southWest,
                o = this._northEast,
                r = i.getSouthWest(),
                c = i.getNorthEast(),
                h = c.lat >= a.lat && r.lat <= o.lat,
                m = c.lng >= a.lng && r.lng <= o.lng;
              return h && m;
            },
            overlaps: function (i) {
              i = Y(i);
              var a = this._southWest,
                o = this._northEast,
                r = i.getSouthWest(),
                c = i.getNorthEast(),
                h = c.lat > a.lat && r.lat < o.lat,
                m = c.lng > a.lng && r.lng < o.lng;
              return h && m;
            },
            toBBoxString: function () {
              return [
                this.getWest(),
                this.getSouth(),
                this.getEast(),
                this.getNorth(),
              ].join(",");
            },
            equals: function (i, a) {
              return i
                ? ((i = Y(i)),
                  this._southWest.equals(i.getSouthWest(), a) &&
                    this._northEast.equals(i.getNorthEast(), a))
                : !1;
            },
            isValid: function () {
              return !!(this._southWest && this._northEast);
            },
          };
          function Y(i, a) {
            return i instanceof j ? i : new j(i, a);
          }
          function P(i, a, o) {
            if (isNaN(i) || isNaN(a))
              throw new Error("Invalid LatLng object: (" + i + ", " + a + ")");
            ((this.lat = +i), (this.lng = +a), o !== void 0 && (this.alt = +o));
          }
          P.prototype = {
            equals: function (i, a) {
              if (!i) return !1;
              i = Q(i);
              var o = Math.max(
                Math.abs(this.lat - i.lat),
                Math.abs(this.lng - i.lng),
              );
              return o <= (a === void 0 ? 1e-9 : a);
            },
            toString: function (i) {
              return "LatLng(" + st(this.lat, i) + ", " + st(this.lng, i) + ")";
            },
            distanceTo: function (i) {
              return Ft.distance(this, Q(i));
            },
            wrap: function () {
              return Ft.wrapLatLng(this);
            },
            toBounds: function (i) {
              var a = (180 * i) / 40075017,
                o = a / Math.cos((Math.PI / 180) * this.lat);
              return Y(
                [this.lat - a, this.lng - o],
                [this.lat + a, this.lng + o],
              );
            },
            clone: function () {
              return new P(this.lat, this.lng, this.alt);
            },
          };
          function Q(i, a, o) {
            return i instanceof P
              ? i
              : ct(i) && typeof i[0] != "object"
                ? i.length === 3
                  ? new P(i[0], i[1], i[2])
                  : i.length === 2
                    ? new P(i[0], i[1])
                    : null
                : i == null
                  ? i
                  : typeof i == "object" && "lat" in i
                    ? new P(i.lat, "lng" in i ? i.lng : i.lon, i.alt)
                    : a === void 0
                      ? null
                      : new P(i, a, o);
          }
          var pt = {
              latLngToPoint: function (i, a) {
                var o = this.projection.project(i),
                  r = this.scale(a);
                return this.transformation._transform(o, r);
              },
              pointToLatLng: function (i, a) {
                var o = this.scale(a),
                  r = this.transformation.untransform(i, o);
                return this.projection.unproject(r);
              },
              project: function (i) {
                return this.projection.project(i);
              },
              unproject: function (i) {
                return this.projection.unproject(i);
              },
              scale: function (i) {
                return 256 * Math.pow(2, i);
              },
              zoom: function (i) {
                return Math.log(i / 256) / Math.LN2;
              },
              getProjectedBounds: function (i) {
                if (this.infinite) return null;
                var a = this.projection.bounds,
                  o = this.scale(i),
                  r = this.transformation.transform(a.min, o),
                  c = this.transformation.transform(a.max, o);
                return new p(r, c);
              },
              infinite: !1,
              wrapLatLng: function (i) {
                var a = this.wrapLng ? I(i.lng, this.wrapLng, !0) : i.lng,
                  o = this.wrapLat ? I(i.lat, this.wrapLat, !0) : i.lat,
                  r = i.alt;
                return new P(o, a, r);
              },
              wrapLatLngBounds: function (i) {
                var a = i.getCenter(),
                  o = this.wrapLatLng(a),
                  r = a.lat - o.lat,
                  c = a.lng - o.lng;
                if (r === 0 && c === 0) return i;
                var h = i.getSouthWest(),
                  m = i.getNorthEast(),
                  y = new P(h.lat - r, h.lng - c),
                  z = new P(m.lat - r, m.lng - c);
                return new j(y, z);
              },
            },
            Ft = G({}, pt, {
              wrapLng: [-180, 180],
              R: 6371e3,
              distance: function (i, a) {
                var o = Math.PI / 180,
                  r = i.lat * o,
                  c = a.lat * o,
                  h = Math.sin(((a.lat - i.lat) * o) / 2),
                  m = Math.sin(((a.lng - i.lng) * o) / 2),
                  y = h * h + Math.cos(r) * Math.cos(c) * m * m,
                  z = 2 * Math.atan2(Math.sqrt(y), Math.sqrt(1 - y));
                return this.R * z;
              },
            }),
            It = 6378137,
            Pi = {
              R: It,
              MAX_LATITUDE: 85.0511287798,
              project: function (i) {
                var a = Math.PI / 180,
                  o = this.MAX_LATITUDE,
                  r = Math.max(Math.min(o, i.lat), -o),
                  c = Math.sin(r * a);
                return new H(
                  this.R * i.lng * a,
                  (this.R * Math.log((1 + c) / (1 - c))) / 2,
                );
              },
              unproject: function (i) {
                var a = 180 / Math.PI;
                return new P(
                  (2 * Math.atan(Math.exp(i.y / this.R)) - Math.PI / 2) * a,
                  (i.x * a) / this.R,
                );
              },
              bounds: (function () {
                var i = It * Math.PI;
                return new p([-i, -i], [i, i]);
              })(),
            };
          function xn(i, a, o, r) {
            if (ct(i)) {
              ((this._a = i[0]),
                (this._b = i[1]),
                (this._c = i[2]),
                (this._d = i[3]));
              return;
            }
            ((this._a = i), (this._b = a), (this._c = o), (this._d = r));
          }
          xn.prototype = {
            transform: function (i, a) {
              return this._transform(i.clone(), a);
            },
            _transform: function (i, a) {
              return (
                (a = a || 1),
                (i.x = a * (this._a * i.x + this._b)),
                (i.y = a * (this._c * i.y + this._d)),
                i
              );
            },
            untransform: function (i, a) {
              return (
                (a = a || 1),
                new H(
                  (i.x / a - this._b) / this._a,
                  (i.y / a - this._d) / this._c,
                )
              );
            },
          };
          function Ki(i, a, o, r) {
            return new xn(i, a, o, r);
          }
          var Ja = G({}, Ft, {
              code: "EPSG:3857",
              projection: Pi,
              transformation: (function () {
                var i = 0.5 / (Math.PI * Pi.R);
                return Ki(i, 0.5, -i, 0.5);
              })(),
            }),
            Ji = G({}, Ja, { code: "EPSG:900913" });
          function Wa(i) {
            return document.createElementNS("http://www.w3.org/2000/svg", i);
          }
          function Fa(i, a) {
            var o = "",
              r,
              c,
              h,
              m,
              y,
              z;
            for (r = 0, h = i.length; r < h; r++) {
              for (y = i[r], c = 0, m = y.length; c < m; c++)
                ((z = y[c]), (o += (c ? "L" : "M") + z.x + " " + z.y));
              o += a ? ($.svg ? "z" : "x") : "";
            }
            return o || "M0 0";
          }
          var Gl = document.documentElement.style,
            oa = "ActiveXObject" in window,
            Yl = oa && !document.addEventListener,
            Ia = "msLaunchUri" in navigator && !("documentMode" in document),
            sa = je("webkit"),
            Fo = je("android"),
            Io = je("android 2") || je("android 3"),
            Be = parseInt(
              /WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],
              10,
            ),
            Eu = Fo && je("Google") && Be < 537 && !("AudioNode" in window),
            $a = !!window.opera,
            Xl = !Ia && je("chrome"),
            ua = je("gecko") && !sa && !$a && !oa,
            Mu = !Xl && je("safari"),
            kl = je("phantom"),
            $o = "OTransition" in Gl,
            Lu = navigator.platform.indexOf("Win") === 0,
            Sn = oa && "transition" in Gl,
            Me =
              "WebKitCSSMatrix" in window &&
              "m11" in new window.WebKitCSSMatrix() &&
              !Io,
            yi = "MozPerspective" in Gl,
            Ze = !window.L_DISABLE_3D && (Sn || Me || yi) && !$o && !kl,
            ra = typeof orientation < "u" || je("mobile"),
            wu = ra && sa,
            Au = ra && Me,
            ca = !window.PointerEvent && window.MSPointerEvent,
            fa = !!(window.PointerEvent || ca),
            ha = "ontouchstart" in window || !!window.TouchEvent,
            Wi = !window.L_NO_TOUCH && (ha || fa),
            tl = ra && $a,
            da = ra && ua,
            Ou =
              (window.devicePixelRatio ||
                window.screen.deviceXDPI / window.screen.logicalXDPI) > 1,
            ts = (function () {
              var i = !1;
              try {
                var a = Object.defineProperty({}, "passive", {
                  get: function () {
                    i = !0;
                  },
                });
                (window.addEventListener("testPassiveEventSupport", X, a),
                  window.removeEventListener("testPassiveEventSupport", X, a));
              } catch {}
              return i;
            })(),
            Vl = (function () {
              return !!document.createElement("canvas").getContext;
            })(),
            Fi = !!(document.createElementNS && Wa("svg").createSVGRect),
            Cu =
              !!Fi &&
              (function () {
                var i = document.createElement("div");
                return (
                  (i.innerHTML = "<svg/>"),
                  (i.firstChild && i.firstChild.namespaceURI) ===
                    "http://www.w3.org/2000/svg"
                );
              })(),
            es =
              !Fi &&
              (function () {
                try {
                  var i = document.createElement("div");
                  i.innerHTML = '<v:shape adj="1"/>';
                  var a = i.firstChild;
                  return (
                    (a.style.behavior = "url(#default#VML)"),
                    a && typeof a.adj == "object"
                  );
                } catch {
                  return !1;
                }
              })(),
            is = navigator.platform.indexOf("Mac") === 0,
            ns = navigator.platform.indexOf("Linux") === 0;
          function je(i) {
            return navigator.userAgent.toLowerCase().indexOf(i) >= 0;
          }
          var $ = {
              ie: oa,
              ielt9: Yl,
              edge: Ia,
              webkit: sa,
              android: Fo,
              android23: Io,
              androidStock: Eu,
              opera: $a,
              chrome: Xl,
              gecko: ua,
              safari: Mu,
              phantom: kl,
              opera12: $o,
              win: Lu,
              ie3d: Sn,
              webkit3d: Me,
              gecko3d: yi,
              any3d: Ze,
              mobile: ra,
              mobileWebkit: wu,
              mobileWebkit3d: Au,
              msPointer: ca,
              pointer: fa,
              touch: Wi,
              touchNative: ha,
              mobileOpera: tl,
              mobileGecko: da,
              retina: Ou,
              passiveEvents: ts,
              canvas: Vl,
              svg: Fi,
              vml: es,
              inlineSvg: Cu,
              mac: is,
              linux: ns,
            },
            Ql = $.msPointer ? "MSPointerDown" : "pointerdown",
            Pl = $.msPointer ? "MSPointerMove" : "pointermove",
            bi = $.msPointer ? "MSPointerUp" : "pointerup",
            he = $.msPointer ? "MSPointerCancel" : "pointercancel",
            Se = {
              touchstart: Ql,
              touchmove: Pl,
              touchend: bi,
              touchcancel: he,
            },
            Ii = {
              touchstart: zn,
              touchmove: Ni,
              touchend: Ni,
              touchcancel: Ni,
            },
            Ci = {},
            as = !1;
          function Nu(i, a, o) {
            return (
              a === "touchstart" && Tn(),
              Ii[a]
                ? ((o = Ii[a].bind(this, o)),
                  i.addEventListener(Se[a], o, !1),
                  o)
                : (console.warn("wrong event specified:", a), X)
            );
          }
          function ls(i, a, o) {
            if (!Se[a]) {
              console.warn("wrong event specified:", a);
              return;
            }
            i.removeEventListener(Se[a], o, !1);
          }
          function ma(i) {
            Ci[i.pointerId] = i;
          }
          function Kl(i) {
            Ci[i.pointerId] && (Ci[i.pointerId] = i);
          }
          function $i(i) {
            delete Ci[i.pointerId];
          }
          function Tn() {
            as ||
              (document.addEventListener(Ql, ma, !0),
              document.addEventListener(Pl, Kl, !0),
              document.addEventListener(bi, $i, !0),
              document.addEventListener(he, $i, !0),
              (as = !0));
          }
          function Ni(i, a) {
            if (a.pointerType !== (a.MSPOINTER_TYPE_MOUSE || "mouse")) {
              a.touches = [];
              for (var o in Ci) a.touches.push(Ci[o]);
              ((a.changedTouches = [a]), i(a));
            }
          }
          function zn(i, a) {
            (a.MSPOINTER_TYPE_TOUCH &&
              a.pointerType === a.MSPOINTER_TYPE_TOUCH &&
              ie(a),
              Ni(i, a));
          }
          function de(i) {
            var a = {},
              o,
              r;
            for (r in i) ((o = i[r]), (a[r] = o && o.bind ? o.bind(i) : o));
            return (
              (i = a),
              (a.type = "dblclick"),
              (a.detail = 2),
              (a.isTrusted = !1),
              (a._simulated = !0),
              a
            );
          }
          var os = 200;
          function ss(i, a) {
            i.addEventListener("dblclick", a);
            var o = 0,
              r;
            function c(h) {
              if (h.detail !== 1) {
                r = h.detail;
                return;
              }
              if (
                !(
                  h.pointerType === "mouse" ||
                  (h.sourceCapabilities &&
                    !h.sourceCapabilities.firesTouchEvents)
                )
              ) {
                var m = xa(h);
                if (
                  !(
                    m.some(function (z) {
                      return z instanceof HTMLLabelElement && z.attributes.for;
                    }) &&
                    !m.some(function (z) {
                      return (
                        z instanceof HTMLInputElement ||
                        z instanceof HTMLSelectElement
                      );
                    })
                  )
                ) {
                  var y = Date.now();
                  (y - o <= os ? (r++, r === 2 && a(de(h))) : (r = 1), (o = y));
                }
              }
            }
            return (
              i.addEventListener("click", c),
              { dblclick: a, simDblclick: c }
            );
          }
          function tn(i, a) {
            (i.removeEventListener("dblclick", a.dblclick),
              i.removeEventListener("click", a.simDblclick));
          }
          var Di = va([
              "transform",
              "webkitTransform",
              "OTransform",
              "MozTransform",
              "msTransform",
            ]),
            _a = va([
              "webkitTransition",
              "transition",
              "OTransition",
              "MozTransition",
              "msTransition",
            ]),
            Jl =
              _a === "webkitTransition" || _a === "OTransition"
                ? _a + "End"
                : "transitionend";
          function Wl(i) {
            return typeof i == "string" ? document.getElementById(i) : i;
          }
          function pa(i, a) {
            var o = i.style[a] || (i.currentStyle && i.currentStyle[a]);
            if ((!o || o === "auto") && document.defaultView) {
              var r = document.defaultView.getComputedStyle(i, null);
              o = r ? r[a] : null;
            }
            return o === "auto" ? null : o;
          }
          function bt(i, a, o) {
            var r = document.createElement(i);
            return ((r.className = a || ""), o && o.appendChild(r), r);
          }
          function qt(i) {
            var a = i.parentNode;
            a && a.removeChild(i);
          }
          function qe(i) {
            for (; i.firstChild; ) i.removeChild(i.firstChild);
          }
          function ge(i) {
            var a = i.parentNode;
            a && a.lastChild !== i && a.appendChild(i);
          }
          function en(i) {
            var a = i.parentNode;
            a && a.firstChild !== i && a.insertBefore(i, a.firstChild);
          }
          function Fl(i, a) {
            if (i.classList !== void 0) return i.classList.contains(a);
            var o = el(i);
            return (
              o.length > 0 && new RegExp("(^|\\s)" + a + "(\\s|$)").test(o)
            );
          }
          function ut(i, a) {
            if (i.classList !== void 0)
              for (var o = gt(a), r = 0, c = o.length; r < c; r++)
                i.classList.add(o[r]);
            else if (!Fl(i, a)) {
              var h = el(i);
              En(i, (h ? h + " " : "") + a);
            }
          }
          function $t(i, a) {
            i.classList !== void 0
              ? i.classList.remove(a)
              : En(i, wt((" " + el(i) + " ").replace(" " + a + " ", " ")));
          }
          function En(i, a) {
            i.className.baseVal === void 0
              ? (i.className = a)
              : (i.className.baseVal = a);
          }
          function el(i) {
            return (
              i.correspondingElement && (i = i.correspondingElement),
              i.className.baseVal === void 0 ? i.className : i.className.baseVal
            );
          }
          function Jt(i, a) {
            "opacity" in i.style
              ? (i.style.opacity = a)
              : "filter" in i.style && Il(i, a);
          }
          function Il(i, a) {
            var o = !1,
              r = "DXImageTransform.Microsoft.Alpha";
            try {
              o = i.filters.item(r);
            } catch {
              if (a === 1) return;
            }
            ((a = Math.round(a * 100)),
              o
                ? ((o.Enabled = a !== 100), (o.Opacity = a))
                : (i.style.filter += " progid:" + r + "(opacity=" + a + ")"));
          }
          function va(i) {
            for (
              var a = document.documentElement.style, o = 0;
              o < i.length;
              o++
            )
              if (i[o] in a) return i[o];
            return !1;
          }
          function xi(i, a, o) {
            var r = a || new H(0, 0);
            i.style[Di] =
              ($.ie3d
                ? "translate(" + r.x + "px," + r.y + "px)"
                : "translate3d(" + r.x + "px," + r.y + "px,0)") +
              (o ? " scale(" + o + ")" : "");
          }
          function Vt(i, a) {
            ((i._leaflet_pos = a),
              $.any3d
                ? xi(i, a)
                : ((i.style.left = a.x + "px"), (i.style.top = a.y + "px")));
          }
          function Bi(i) {
            return i._leaflet_pos || new H(0, 0);
          }
          var Mn, si, $l;
          if ("onselectstart" in document)
            ((Mn = function () {
              lt(window, "selectstart", ie);
            }),
              (si = function () {
                Rt(window, "selectstart", ie);
              }));
          else {
            var Ln = va([
              "userSelect",
              "WebkitUserSelect",
              "OUserSelect",
              "MozUserSelect",
              "msUserSelect",
            ]);
            ((Mn = function () {
              if (Ln) {
                var i = document.documentElement.style;
                (($l = i[Ln]), (i[Ln] = "none"));
              }
            }),
              (si = function () {
                Ln &&
                  ((document.documentElement.style[Ln] = $l), ($l = void 0));
              }));
          }
          function il() {
            lt(window, "dragstart", ie);
          }
          function ga() {
            Rt(window, "dragstart", ie);
          }
          var nl, to;
          function wn(i) {
            for (; i.tabIndex === -1; ) i = i.parentNode;
            i.style &&
              (Ge(),
              (nl = i),
              (to = i.style.outlineStyle),
              (i.style.outlineStyle = "none"),
              lt(window, "keydown", Ge));
          }
          function Ge() {
            nl &&
              ((nl.style.outlineStyle = to),
              (nl = void 0),
              (to = void 0),
              Rt(window, "keydown", Ge));
          }
          function al(i) {
            do i = i.parentNode;
            while ((!i.offsetWidth || !i.offsetHeight) && i !== document.body);
            return i;
          }
          function ya(i) {
            var a = i.getBoundingClientRect();
            return {
              x: a.width / i.offsetWidth || 1,
              y: a.height / i.offsetHeight || 1,
              boundingClientRect: a,
            };
          }
          var An = {
            __proto__: null,
            TRANSFORM: Di,
            TRANSITION: _a,
            TRANSITION_END: Jl,
            get: Wl,
            getStyle: pa,
            create: bt,
            remove: qt,
            empty: qe,
            toFront: ge,
            toBack: en,
            hasClass: Fl,
            addClass: ut,
            removeClass: $t,
            setClass: En,
            getClass: el,
            setOpacity: Jt,
            testProp: va,
            setTransform: xi,
            setPosition: Vt,
            getPosition: Bi,
            get disableTextSelection() {
              return Mn;
            },
            get enableTextSelection() {
              return si;
            },
            disableImageDrag: il,
            enableImageDrag: ga,
            preventOutline: wn,
            restoreOutline: Ge,
            getSizedParentNode: al,
            getScale: ya,
          };
          function lt(i, a, o, r) {
            if (a && typeof a == "object") for (var c in a) Ie(i, c, a[c], o);
            else {
              a = gt(a);
              for (var h = 0, m = a.length; h < m; h++) Ie(i, a[h], o, r);
            }
            return this;
          }
          var Fe = "_leaflet_events";
          function Rt(i, a, o, r) {
            if (arguments.length === 1) (eo(i), delete i[Fe]);
            else if (a && typeof a == "object")
              for (var c in a) ba(i, c, a[c], o);
            else if (((a = gt(a)), arguments.length === 2))
              eo(i, function (y) {
                return Pt(a, y) !== -1;
              });
            else for (var h = 0, m = a.length; h < m; h++) ba(i, a[h], o, r);
            return this;
          }
          function eo(i, a) {
            for (var o in i[Fe]) {
              var r = o.split(/\d/)[0];
              (!a || a(r)) && ba(i, r, null, null, o);
            }
          }
          var nn = {
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            wheel: !("onwheel" in window) && "mousewheel",
          };
          function Ie(i, a, o, r) {
            var c = a + U(o) + (r ? "_" + U(r) : "");
            if (i[Fe] && i[Fe][c]) return this;
            var h = function (y) {
                return o.call(r || i, y || window.event);
              },
              m = h;
            (!$.touchNative && $.pointer && a.indexOf("touch") === 0
              ? (h = Nu(i, a, h))
              : $.touch && a === "dblclick"
                ? (h = ss(i, h))
                : "addEventListener" in i
                  ? a === "touchstart" ||
                    a === "touchmove" ||
                    a === "wheel" ||
                    a === "mousewheel"
                    ? i.addEventListener(
                        nn[a] || a,
                        h,
                        $.passiveEvents ? { passive: !1 } : !1,
                      )
                    : a === "mouseenter" || a === "mouseleave"
                      ? ((h = function (y) {
                          ((y = y || window.event), Si(i, y) && m(y));
                        }),
                        i.addEventListener(nn[a], h, !1))
                      : i.addEventListener(a, m, !1)
                  : i.attachEvent("on" + a, h),
              (i[Fe] = i[Fe] || {}),
              (i[Fe][c] = h));
          }
          function ba(i, a, o, r, c) {
            c = c || a + U(o) + (r ? "_" + U(r) : "");
            var h = i[Fe] && i[Fe][c];
            if (!h) return this;
            (!$.touchNative && $.pointer && a.indexOf("touch") === 0
              ? ls(i, a, h)
              : $.touch && a === "dblclick"
                ? tn(i, h)
                : "removeEventListener" in i
                  ? i.removeEventListener(nn[a] || a, h, !1)
                  : i.detachEvent("on" + a, h),
              (i[Fe][c] = null));
          }
          function $e(i) {
            return (
              i.stopPropagation
                ? i.stopPropagation()
                : i.originalEvent
                  ? (i.originalEvent._stopped = !0)
                  : (i.cancelBubble = !0),
              this
            );
          }
          function ui(i) {
            return (Ie(i, "wheel", $e), this);
          }
          function an(i) {
            return (
              lt(i, "mousedown touchstart dblclick contextmenu", $e),
              (i._leaflet_disable_click = !0),
              this
            );
          }
          function ie(i) {
            return (
              i.preventDefault ? i.preventDefault() : (i.returnValue = !1),
              this
            );
          }
          function Zi(i) {
            return (ie(i), $e(i), this);
          }
          function xa(i) {
            if (i.composedPath) return i.composedPath();
            for (var a = [], o = i.target; o; ) (a.push(o), (o = o.parentNode));
            return a;
          }
          function Sa(i, a) {
            if (!a) return new H(i.clientX, i.clientY);
            var o = ya(a),
              r = o.boundingClientRect;
            return new H(
              (i.clientX - r.left) / o.x - a.clientLeft,
              (i.clientY - r.top) / o.y - a.clientTop,
            );
          }
          var us =
            $.linux && $.chrome
              ? window.devicePixelRatio
              : $.mac
                ? window.devicePixelRatio * 3
                : window.devicePixelRatio > 0
                  ? 2 * window.devicePixelRatio
                  : 1;
          function Le(i) {
            return $.edge
              ? i.wheelDeltaY / 2
              : i.deltaY && i.deltaMode === 0
                ? -i.deltaY / us
                : i.deltaY && i.deltaMode === 1
                  ? -i.deltaY * 20
                  : i.deltaY && i.deltaMode === 2
                    ? -i.deltaY * 60
                    : i.deltaX || i.deltaZ
                      ? 0
                      : i.wheelDelta
                        ? (i.wheelDeltaY || i.wheelDelta) / 2
                        : i.detail && Math.abs(i.detail) < 32765
                          ? -i.detail * 20
                          : i.detail
                            ? (i.detail / -32765) * 60
                            : 0;
          }
          function Si(i, a) {
            var o = a.relatedTarget;
            if (!o) return !0;
            try {
              for (; o && o !== i; ) o = o.parentNode;
            } catch {
              return !1;
            }
            return o !== i;
          }
          var ll = {
              __proto__: null,
              on: lt,
              off: Rt,
              stopPropagation: $e,
              disableScrollPropagation: ui,
              disableClickPropagation: an,
              preventDefault: ie,
              stop: Zi,
              getPropagationPath: xa,
              getMousePosition: Sa,
              getWheelDelta: Le,
              isExternalTarget: Si,
              addListener: lt,
              removeListener: Rt,
            },
            On = q.extend({
              run: function (i, a, o, r) {
                (this.stop(),
                  (this._el = i),
                  (this._inProgress = !0),
                  (this._duration = o || 0.25),
                  (this._easeOutPower = 1 / Math.max(r || 0.5, 0.2)),
                  (this._startPos = Bi(i)),
                  (this._offset = a.subtract(this._startPos)),
                  (this._startTime = +new Date()),
                  this.fire("start"),
                  this._animate());
              },
              stop: function () {
                this._inProgress && (this._step(!0), this._complete());
              },
              _animate: function () {
                ((this._animId = ot(this._animate, this)), this._step());
              },
              _step: function (i) {
                var a = +new Date() - this._startTime,
                  o = this._duration * 1e3;
                a < o
                  ? this._runFrame(this._easeOut(a / o), i)
                  : (this._runFrame(1), this._complete());
              },
              _runFrame: function (i, a) {
                var o = this._startPos.add(this._offset.multiplyBy(i));
                (a && o._round(), Vt(this._el, o), this.fire("step"));
              },
              _complete: function () {
                (ht(this._animId), (this._inProgress = !1), this.fire("end"));
              },
              _easeOut: function (i) {
                return 1 - Math.pow(1 - i, this._easeOutPower);
              },
            }),
            zt = q.extend({
              options: {
                crs: Ja,
                center: void 0,
                zoom: void 0,
                minZoom: void 0,
                maxZoom: void 0,
                layers: [],
                maxBounds: void 0,
                renderer: void 0,
                zoomAnimation: !0,
                zoomAnimationThreshold: 4,
                fadeAnimation: !0,
                markerZoomAnimation: !0,
                transform3DLimit: 8388608,
                zoomSnap: 1,
                zoomDelta: 1,
                trackResize: !0,
              },
              initialize: function (i, a) {
                ((a = et(this, a)),
                  (this._handlers = []),
                  (this._layers = {}),
                  (this._zoomBoundLayers = {}),
                  (this._sizeChanged = !0),
                  this._initContainer(i),
                  this._initLayout(),
                  (this._onResize = J(this._onResize, this)),
                  this._initEvents(),
                  a.maxBounds && this.setMaxBounds(a.maxBounds),
                  a.zoom !== void 0 && (this._zoom = this._limitZoom(a.zoom)),
                  a.center &&
                    a.zoom !== void 0 &&
                    this.setView(Q(a.center), a.zoom, { reset: !0 }),
                  this.callInitHooks(),
                  (this._zoomAnimated =
                    _a &&
                    $.any3d &&
                    !$.mobileOpera &&
                    this.options.zoomAnimation),
                  this._zoomAnimated &&
                    (this._createAnimProxy(),
                    lt(this._proxy, Jl, this._catchTransitionEnd, this)),
                  this._addLayers(this.options.layers));
              },
              setView: function (i, a, o) {
                if (
                  ((a = a === void 0 ? this._zoom : this._limitZoom(a)),
                  (i = this._limitCenter(Q(i), a, this.options.maxBounds)),
                  (o = o || {}),
                  this._stop(),
                  this._loaded && !o.reset && o !== !0)
                ) {
                  o.animate !== void 0 &&
                    ((o.zoom = G({ animate: o.animate }, o.zoom)),
                    (o.pan = G(
                      { animate: o.animate, duration: o.duration },
                      o.pan,
                    )));
                  var r =
                    this._zoom !== a
                      ? this._tryAnimatedZoom &&
                        this._tryAnimatedZoom(i, a, o.zoom)
                      : this._tryAnimatedPan(i, o.pan);
                  if (r) return (clearTimeout(this._sizeTimer), this);
                }
                return (
                  this._resetView(i, a, o.pan && o.pan.noMoveStart),
                  this
                );
              },
              setZoom: function (i, a) {
                return this._loaded
                  ? this.setView(this.getCenter(), i, { zoom: a })
                  : ((this._zoom = i), this);
              },
              zoomIn: function (i, a) {
                return (
                  (i = i || ($.any3d ? this.options.zoomDelta : 1)),
                  this.setZoom(this._zoom + i, a)
                );
              },
              zoomOut: function (i, a) {
                return (
                  (i = i || ($.any3d ? this.options.zoomDelta : 1)),
                  this.setZoom(this._zoom - i, a)
                );
              },
              setZoomAround: function (i, a, o) {
                var r = this.getZoomScale(a),
                  c = this.getSize().divideBy(2),
                  h = i instanceof H ? i : this.latLngToContainerPoint(i),
                  m = h.subtract(c).multiplyBy(1 - 1 / r),
                  y = this.containerPointToLatLng(c.add(m));
                return this.setView(y, a, { zoom: o });
              },
              _getBoundsCenterZoom: function (i, a) {
                ((a = a || {}), (i = i.getBounds ? i.getBounds() : Y(i)));
                var o = V(a.paddingTopLeft || a.padding || [0, 0]),
                  r = V(a.paddingBottomRight || a.padding || [0, 0]),
                  c = this.getBoundsZoom(i, !1, o.add(r));
                if (
                  ((c =
                    typeof a.maxZoom == "number" ? Math.min(a.maxZoom, c) : c),
                  c === 1 / 0)
                )
                  return { center: i.getCenter(), zoom: c };
                var h = r.subtract(o).divideBy(2),
                  m = this.project(i.getSouthWest(), c),
                  y = this.project(i.getNorthEast(), c),
                  z = this.unproject(m.add(y).divideBy(2).add(h), c);
                return { center: z, zoom: c };
              },
              fitBounds: function (i, a) {
                if (((i = Y(i)), !i.isValid()))
                  throw new Error("Bounds are not valid.");
                var o = this._getBoundsCenterZoom(i, a);
                return this.setView(o.center, o.zoom, a);
              },
              fitWorld: function (i) {
                return this.fitBounds(
                  [
                    [-90, -180],
                    [90, 180],
                  ],
                  i,
                );
              },
              panTo: function (i, a) {
                return this.setView(i, this._zoom, { pan: a });
              },
              panBy: function (i, a) {
                if (((i = V(i).round()), (a = a || {}), !i.x && !i.y))
                  return this.fire("moveend");
                if (a.animate !== !0 && !this.getSize().contains(i))
                  return (
                    this._resetView(
                      this.unproject(this.project(this.getCenter()).add(i)),
                      this.getZoom(),
                    ),
                    this
                  );
                if (
                  (this._panAnim ||
                    ((this._panAnim = new On()),
                    this._panAnim.on(
                      {
                        step: this._onPanTransitionStep,
                        end: this._onPanTransitionEnd,
                      },
                      this,
                    )),
                  a.noMoveStart || this.fire("movestart"),
                  a.animate !== !1)
                ) {
                  ut(this._mapPane, "leaflet-pan-anim");
                  var o = this._getMapPanePos().subtract(i).round();
                  this._panAnim.run(
                    this._mapPane,
                    o,
                    a.duration || 0.25,
                    a.easeLinearity,
                  );
                } else (this._rawPanBy(i), this.fire("move").fire("moveend"));
                return this;
              },
              flyTo: function (i, a, o) {
                if (((o = o || {}), o.animate === !1 || !$.any3d))
                  return this.setView(i, a, o);
                this._stop();
                var r = this.project(this.getCenter()),
                  c = this.project(i),
                  h = this.getSize(),
                  m = this._zoom;
                ((i = Q(i)), (a = a === void 0 ? m : a));
                var y = Math.max(h.x, h.y),
                  z = y * this.getZoomScale(m, a),
                  D = c.distanceTo(r) || 1,
                  k = 1.42,
                  tt = k * k;
                function mt(ee) {
                  var Mi = ee ? -1 : 1,
                    un = ee ? z : y,
                    vo = z * z - y * y + Mi * tt * tt * D * D,
                    Ha = 2 * un * tt * D,
                    ja = vo / Ha,
                    ki = Math.sqrt(ja * ja + 1) - ja,
                    Li = ki < 1e-9 ? -18 : Math.log(ki);
                  return Li;
                }
                function ye(ee) {
                  return (Math.exp(ee) - Math.exp(-ee)) / 2;
                }
                function ne(ee) {
                  return (Math.exp(ee) + Math.exp(-ee)) / 2;
                }
                function Ue(ee) {
                  return ye(ee) / ne(ee);
                }
                var Ct = mt(0);
                function Nt(ee) {
                  return y * (ne(Ct) / ne(Ct + k * ee));
                }
                function xt(ee) {
                  return (y * (ne(Ct) * Ue(Ct + k * ee) - ye(Ct))) / tt;
                }
                function Yi(ee) {
                  return 1 - Math.pow(1 - ee, 1.5);
                }
                var Ve = Date.now(),
                  yl = (mt(1) - Ct) / k,
                  Xi = o.duration ? 1e3 * o.duration : 1e3 * yl * 0.8;
                function po() {
                  var ee = (Date.now() - Ve) / Xi,
                    Mi = Yi(ee) * yl;
                  ee <= 1
                    ? ((this._flyToFrame = ot(po, this)),
                      this._move(
                        this.unproject(
                          r.add(c.subtract(r).multiplyBy(xt(Mi) / D)),
                          m,
                        ),
                        this.getScaleZoom(y / Nt(Mi), m),
                        { flyTo: !0 },
                      ))
                    : this._move(i, a)._moveEnd(!0);
                }
                return (
                  this._moveStart(!0, o.noMoveStart),
                  po.call(this),
                  this
                );
              },
              flyToBounds: function (i, a) {
                var o = this._getBoundsCenterZoom(i, a);
                return this.flyTo(o.center, o.zoom, a);
              },
              setMaxBounds: function (i) {
                return (
                  (i = Y(i)),
                  this.listens("moveend", this._panInsideMaxBounds) &&
                    this.off("moveend", this._panInsideMaxBounds),
                  i.isValid()
                    ? ((this.options.maxBounds = i),
                      this._loaded && this._panInsideMaxBounds(),
                      this.on("moveend", this._panInsideMaxBounds))
                    : ((this.options.maxBounds = null), this)
                );
              },
              setMinZoom: function (i) {
                var a = this.options.minZoom;
                return (
                  (this.options.minZoom = i),
                  this._loaded &&
                  a !== i &&
                  (this.fire("zoomlevelschange"),
                  this.getZoom() < this.options.minZoom)
                    ? this.setZoom(i)
                    : this
                );
              },
              setMaxZoom: function (i) {
                var a = this.options.maxZoom;
                return (
                  (this.options.maxZoom = i),
                  this._loaded &&
                  a !== i &&
                  (this.fire("zoomlevelschange"),
                  this.getZoom() > this.options.maxZoom)
                    ? this.setZoom(i)
                    : this
                );
              },
              panInsideBounds: function (i, a) {
                this._enforcingBounds = !0;
                var o = this.getCenter(),
                  r = this._limitCenter(o, this._zoom, Y(i));
                return (
                  o.equals(r) || this.panTo(r, a),
                  (this._enforcingBounds = !1),
                  this
                );
              },
              panInside: function (i, a) {
                a = a || {};
                var o = V(a.paddingTopLeft || a.padding || [0, 0]),
                  r = V(a.paddingBottomRight || a.padding || [0, 0]),
                  c = this.project(this.getCenter()),
                  h = this.project(i),
                  m = this.getPixelBounds(),
                  y = A([m.min.add(o), m.max.subtract(r)]),
                  z = y.getSize();
                if (!y.contains(h)) {
                  this._enforcingBounds = !0;
                  var D = h.subtract(y.getCenter()),
                    k = y.extend(h).getSize().subtract(z);
                  ((c.x += D.x < 0 ? -k.x : k.x),
                    (c.y += D.y < 0 ? -k.y : k.y),
                    this.panTo(this.unproject(c), a),
                    (this._enforcingBounds = !1));
                }
                return this;
              },
              invalidateSize: function (i) {
                if (!this._loaded) return this;
                i = G({ animate: !1, pan: !0 }, i === !0 ? { animate: !0 } : i);
                var a = this.getSize();
                ((this._sizeChanged = !0), (this._lastCenter = null));
                var o = this.getSize(),
                  r = a.divideBy(2).round(),
                  c = o.divideBy(2).round(),
                  h = r.subtract(c);
                return !h.x && !h.y
                  ? this
                  : (i.animate && i.pan
                      ? this.panBy(h)
                      : (i.pan && this._rawPanBy(h),
                        this.fire("move"),
                        i.debounceMoveend
                          ? (clearTimeout(this._sizeTimer),
                            (this._sizeTimer = setTimeout(
                              J(this.fire, this, "moveend"),
                              200,
                            )))
                          : this.fire("moveend")),
                    this.fire("resize", { oldSize: a, newSize: o }));
              },
              stop: function () {
                return (
                  this.setZoom(this._limitZoom(this._zoom)),
                  this.options.zoomSnap || this.fire("viewreset"),
                  this._stop()
                );
              },
              locate: function (i) {
                if (
                  ((i = this._locateOptions =
                    G({ timeout: 1e4, watch: !1 }, i)),
                  !("geolocation" in navigator))
                )
                  return (
                    this._handleGeolocationError({
                      code: 0,
                      message: "Geolocation not supported.",
                    }),
                    this
                  );
                var a = J(this._handleGeolocationResponse, this),
                  o = J(this._handleGeolocationError, this);
                return (
                  i.watch
                    ? (this._locationWatchId =
                        navigator.geolocation.watchPosition(a, o, i))
                    : navigator.geolocation.getCurrentPosition(a, o, i),
                  this
                );
              },
              stopLocate: function () {
                return (
                  navigator.geolocation &&
                    navigator.geolocation.clearWatch &&
                    navigator.geolocation.clearWatch(this._locationWatchId),
                  this._locateOptions && (this._locateOptions.setView = !1),
                  this
                );
              },
              _handleGeolocationError: function (i) {
                if (this._container._leaflet_id) {
                  var a = i.code,
                    o =
                      i.message ||
                      (a === 1
                        ? "permission denied"
                        : a === 2
                          ? "position unavailable"
                          : "timeout");
                  (this._locateOptions.setView &&
                    !this._loaded &&
                    this.fitWorld(),
                    this.fire("locationerror", {
                      code: a,
                      message: "Geolocation error: " + o + ".",
                    }));
                }
              },
              _handleGeolocationResponse: function (i) {
                if (this._container._leaflet_id) {
                  var a = i.coords.latitude,
                    o = i.coords.longitude,
                    r = new P(a, o),
                    c = r.toBounds(i.coords.accuracy * 2),
                    h = this._locateOptions;
                  if (h.setView) {
                    var m = this.getBoundsZoom(c);
                    this.setView(r, h.maxZoom ? Math.min(m, h.maxZoom) : m);
                  }
                  var y = { latlng: r, bounds: c, timestamp: i.timestamp };
                  for (var z in i.coords)
                    typeof i.coords[z] == "number" && (y[z] = i.coords[z]);
                  this.fire("locationfound", y);
                }
              },
              addHandler: function (i, a) {
                if (!a) return this;
                var o = (this[i] = new a(this));
                return (
                  this._handlers.push(o),
                  this.options[i] && o.enable(),
                  this
                );
              },
              remove: function () {
                if (
                  (this._initEvents(!0),
                  this.options.maxBounds &&
                    this.off("moveend", this._panInsideMaxBounds),
                  this._containerId !== this._container._leaflet_id)
                )
                  throw new Error(
                    "Map container is being reused by another instance",
                  );
                try {
                  (delete this._container._leaflet_id,
                    delete this._containerId);
                } catch {
                  ((this._container._leaflet_id = void 0),
                    (this._containerId = void 0));
                }
                (this._locationWatchId !== void 0 && this.stopLocate(),
                  this._stop(),
                  qt(this._mapPane),
                  this._clearControlPos && this._clearControlPos(),
                  this._resizeRequest &&
                    (ht(this._resizeRequest), (this._resizeRequest = null)),
                  this._clearHandlers(),
                  this._loaded && this.fire("unload"));
                var i;
                for (i in this._layers) this._layers[i].remove();
                for (i in this._panes) qt(this._panes[i]);
                return (
                  (this._layers = []),
                  (this._panes = []),
                  delete this._mapPane,
                  delete this._renderer,
                  this
                );
              },
              createPane: function (i, a) {
                var o =
                    "leaflet-pane" +
                    (i ? " leaflet-" + i.replace("Pane", "") + "-pane" : ""),
                  r = bt("div", o, a || this._mapPane);
                return (i && (this._panes[i] = r), r);
              },
              getCenter: function () {
                return (
                  this._checkIfLoaded(),
                  this._lastCenter && !this._moved()
                    ? this._lastCenter.clone()
                    : this.layerPointToLatLng(this._getCenterLayerPoint())
                );
              },
              getZoom: function () {
                return this._zoom;
              },
              getBounds: function () {
                var i = this.getPixelBounds(),
                  a = this.unproject(i.getBottomLeft()),
                  o = this.unproject(i.getTopRight());
                return new j(a, o);
              },
              getMinZoom: function () {
                return this.options.minZoom === void 0
                  ? this._layersMinZoom || 0
                  : this.options.minZoom;
              },
              getMaxZoom: function () {
                return this.options.maxZoom === void 0
                  ? this._layersMaxZoom === void 0
                    ? 1 / 0
                    : this._layersMaxZoom
                  : this.options.maxZoom;
              },
              getBoundsZoom: function (i, a, o) {
                ((i = Y(i)), (o = V(o || [0, 0])));
                var r = this.getZoom() || 0,
                  c = this.getMinZoom(),
                  h = this.getMaxZoom(),
                  m = i.getNorthWest(),
                  y = i.getSouthEast(),
                  z = this.getSize().subtract(o),
                  D = A(this.project(y, r), this.project(m, r)).getSize(),
                  k = $.any3d ? this.options.zoomSnap : 1,
                  tt = z.x / D.x,
                  mt = z.y / D.y,
                  ye = a ? Math.max(tt, mt) : Math.min(tt, mt);
                return (
                  (r = this.getScaleZoom(ye, r)),
                  k &&
                    ((r = Math.round(r / (k / 100)) * (k / 100)),
                    (r = a ? Math.ceil(r / k) * k : Math.floor(r / k) * k)),
                  Math.max(c, Math.min(h, r))
                );
              },
              getSize: function () {
                return (
                  (!this._size || this._sizeChanged) &&
                    ((this._size = new H(
                      this._container.clientWidth || 0,
                      this._container.clientHeight || 0,
                    )),
                    (this._sizeChanged = !1)),
                  this._size.clone()
                );
              },
              getPixelBounds: function (i, a) {
                var o = this._getTopLeftPoint(i, a);
                return new p(o, o.add(this.getSize()));
              },
              getPixelOrigin: function () {
                return (this._checkIfLoaded(), this._pixelOrigin);
              },
              getPixelWorldBounds: function (i) {
                return this.options.crs.getProjectedBounds(
                  i === void 0 ? this.getZoom() : i,
                );
              },
              getPane: function (i) {
                return typeof i == "string" ? this._panes[i] : i;
              },
              getPanes: function () {
                return this._panes;
              },
              getContainer: function () {
                return this._container;
              },
              getZoomScale: function (i, a) {
                var o = this.options.crs;
                return (
                  (a = a === void 0 ? this._zoom : a),
                  o.scale(i) / o.scale(a)
                );
              },
              getScaleZoom: function (i, a) {
                var o = this.options.crs;
                a = a === void 0 ? this._zoom : a;
                var r = o.zoom(i * o.scale(a));
                return isNaN(r) ? 1 / 0 : r;
              },
              project: function (i, a) {
                return (
                  (a = a === void 0 ? this._zoom : a),
                  this.options.crs.latLngToPoint(Q(i), a)
                );
              },
              unproject: function (i, a) {
                return (
                  (a = a === void 0 ? this._zoom : a),
                  this.options.crs.pointToLatLng(V(i), a)
                );
              },
              layerPointToLatLng: function (i) {
                var a = V(i).add(this.getPixelOrigin());
                return this.unproject(a);
              },
              latLngToLayerPoint: function (i) {
                var a = this.project(Q(i))._round();
                return a._subtract(this.getPixelOrigin());
              },
              wrapLatLng: function (i) {
                return this.options.crs.wrapLatLng(Q(i));
              },
              wrapLatLngBounds: function (i) {
                return this.options.crs.wrapLatLngBounds(Y(i));
              },
              distance: function (i, a) {
                return this.options.crs.distance(Q(i), Q(a));
              },
              containerPointToLayerPoint: function (i) {
                return V(i).subtract(this._getMapPanePos());
              },
              layerPointToContainerPoint: function (i) {
                return V(i).add(this._getMapPanePos());
              },
              containerPointToLatLng: function (i) {
                var a = this.containerPointToLayerPoint(V(i));
                return this.layerPointToLatLng(a);
              },
              latLngToContainerPoint: function (i) {
                return this.layerPointToContainerPoint(
                  this.latLngToLayerPoint(Q(i)),
                );
              },
              mouseEventToContainerPoint: function (i) {
                return Sa(i, this._container);
              },
              mouseEventToLayerPoint: function (i) {
                return this.containerPointToLayerPoint(
                  this.mouseEventToContainerPoint(i),
                );
              },
              mouseEventToLatLng: function (i) {
                return this.layerPointToLatLng(this.mouseEventToLayerPoint(i));
              },
              _initContainer: function (i) {
                var a = (this._container = Wl(i));
                if (a) {
                  if (a._leaflet_id)
                    throw new Error("Map container is already initialized.");
                } else throw new Error("Map container not found.");
                (lt(a, "scroll", this._onScroll, this),
                  (this._containerId = U(a)));
              },
              _initLayout: function () {
                var i = this._container;
                ((this._fadeAnimated = this.options.fadeAnimation && $.any3d),
                  ut(
                    i,
                    "leaflet-container" +
                      ($.touch ? " leaflet-touch" : "") +
                      ($.retina ? " leaflet-retina" : "") +
                      ($.ielt9 ? " leaflet-oldie" : "") +
                      ($.safari ? " leaflet-safari" : "") +
                      (this._fadeAnimated ? " leaflet-fade-anim" : ""),
                  ));
                var a = pa(i, "position");
                (a !== "absolute" &&
                  a !== "relative" &&
                  a !== "fixed" &&
                  a !== "sticky" &&
                  (i.style.position = "relative"),
                  this._initPanes(),
                  this._initControlPos && this._initControlPos());
              },
              _initPanes: function () {
                var i = (this._panes = {});
                ((this._paneRenderers = {}),
                  (this._mapPane = this.createPane("mapPane", this._container)),
                  Vt(this._mapPane, new H(0, 0)),
                  this.createPane("tilePane"),
                  this.createPane("overlayPane"),
                  this.createPane("shadowPane"),
                  this.createPane("markerPane"),
                  this.createPane("tooltipPane"),
                  this.createPane("popupPane"),
                  this.options.markerZoomAnimation ||
                    (ut(i.markerPane, "leaflet-zoom-hide"),
                    ut(i.shadowPane, "leaflet-zoom-hide")));
              },
              _resetView: function (i, a, o) {
                Vt(this._mapPane, new H(0, 0));
                var r = !this._loaded;
                ((this._loaded = !0),
                  (a = this._limitZoom(a)),
                  this.fire("viewprereset"));
                var c = this._zoom !== a;
                (this._moveStart(c, o)._move(i, a)._moveEnd(c),
                  this.fire("viewreset"),
                  r && this.fire("load"));
              },
              _moveStart: function (i, a) {
                return (
                  i && this.fire("zoomstart"),
                  a || this.fire("movestart"),
                  this
                );
              },
              _move: function (i, a, o, r) {
                a === void 0 && (a = this._zoom);
                var c = this._zoom !== a;
                return (
                  (this._zoom = a),
                  (this._lastCenter = i),
                  (this._pixelOrigin = this._getNewPixelOrigin(i)),
                  r
                    ? o && o.pinch && this.fire("zoom", o)
                    : ((c || (o && o.pinch)) && this.fire("zoom", o),
                      this.fire("move", o)),
                  this
                );
              },
              _moveEnd: function (i) {
                return (i && this.fire("zoomend"), this.fire("moveend"));
              },
              _stop: function () {
                return (
                  ht(this._flyToFrame),
                  this._panAnim && this._panAnim.stop(),
                  this
                );
              },
              _rawPanBy: function (i) {
                Vt(this._mapPane, this._getMapPanePos().subtract(i));
              },
              _getZoomSpan: function () {
                return this.getMaxZoom() - this.getMinZoom();
              },
              _panInsideMaxBounds: function () {
                this._enforcingBounds ||
                  this.panInsideBounds(this.options.maxBounds);
              },
              _checkIfLoaded: function () {
                if (!this._loaded)
                  throw new Error("Set map center and zoom first.");
              },
              _initEvents: function (i) {
                ((this._targets = {}),
                  (this._targets[U(this._container)] = this));
                var a = i ? Rt : lt;
                (a(
                  this._container,
                  "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",
                  this._handleDOMEvent,
                  this,
                ),
                  this.options.trackResize &&
                    a(window, "resize", this._onResize, this),
                  $.any3d &&
                    this.options.transform3DLimit &&
                    (i ? this.off : this.on).call(
                      this,
                      "moveend",
                      this._onMoveEnd,
                    ));
              },
              _onResize: function () {
                (ht(this._resizeRequest),
                  (this._resizeRequest = ot(function () {
                    this.invalidateSize({ debounceMoveend: !0 });
                  }, this)));
              },
              _onScroll: function () {
                ((this._container.scrollTop = 0),
                  (this._container.scrollLeft = 0));
              },
              _onMoveEnd: function () {
                var i = this._getMapPanePos();
                Math.max(Math.abs(i.x), Math.abs(i.y)) >=
                  this.options.transform3DLimit &&
                  this._resetView(this.getCenter(), this.getZoom());
              },
              _findEventTargets: function (i, a) {
                for (
                  var o = [],
                    r,
                    c = a === "mouseout" || a === "mouseover",
                    h = i.target || i.srcElement,
                    m = !1;
                  h;
                ) {
                  if (
                    ((r = this._targets[U(h)]),
                    r &&
                      (a === "click" || a === "preclick") &&
                      this._draggableMoved(r))
                  ) {
                    m = !0;
                    break;
                  }
                  if (
                    (r &&
                      r.listens(a, !0) &&
                      ((c && !Si(h, i)) || (o.push(r), c))) ||
                    h === this._container
                  )
                    break;
                  h = h.parentNode;
                }
                return (
                  !o.length && !m && !c && this.listens(a, !0) && (o = [this]),
                  o
                );
              },
              _isClickDisabled: function (i) {
                for (; i && i !== this._container; ) {
                  if (i._leaflet_disable_click) return !0;
                  i = i.parentNode;
                }
              },
              _handleDOMEvent: function (i) {
                var a = i.target || i.srcElement;
                if (
                  !(
                    !this._loaded ||
                    a._leaflet_disable_events ||
                    (i.type === "click" && this._isClickDisabled(a))
                  )
                ) {
                  var o = i.type;
                  (o === "mousedown" && wn(a), this._fireDOMEvent(i, o));
                }
              },
              _mouseEvents: [
                "click",
                "dblclick",
                "mouseover",
                "mouseout",
                "contextmenu",
              ],
              _fireDOMEvent: function (i, a, o) {
                if (i.type === "click") {
                  var r = G({}, i);
                  ((r.type = "preclick"), this._fireDOMEvent(r, r.type, o));
                }
                var c = this._findEventTargets(i, a);
                if (o) {
                  for (var h = [], m = 0; m < o.length; m++)
                    o[m].listens(a, !0) && h.push(o[m]);
                  c = h.concat(c);
                }
                if (c.length) {
                  a === "contextmenu" && ie(i);
                  var y = c[0],
                    z = { originalEvent: i };
                  if (
                    i.type !== "keypress" &&
                    i.type !== "keydown" &&
                    i.type !== "keyup"
                  ) {
                    var D = y.getLatLng && (!y._radius || y._radius <= 10);
                    ((z.containerPoint = D
                      ? this.latLngToContainerPoint(y.getLatLng())
                      : this.mouseEventToContainerPoint(i)),
                      (z.layerPoint = this.containerPointToLayerPoint(
                        z.containerPoint,
                      )),
                      (z.latlng = D
                        ? y.getLatLng()
                        : this.layerPointToLatLng(z.layerPoint)));
                  }
                  for (m = 0; m < c.length; m++)
                    if (
                      (c[m].fire(a, z, !0),
                      z.originalEvent._stopped ||
                        (c[m].options.bubblingMouseEvents === !1 &&
                          Pt(this._mouseEvents, a) !== -1))
                    )
                      return;
                }
              },
              _draggableMoved: function (i) {
                return (
                  (i = i.dragging && i.dragging.enabled() ? i : this),
                  (i.dragging && i.dragging.moved()) ||
                    (this.boxZoom && this.boxZoom.moved())
                );
              },
              _clearHandlers: function () {
                for (var i = 0, a = this._handlers.length; i < a; i++)
                  this._handlers[i].disable();
              },
              whenReady: function (i, a) {
                return (
                  this._loaded
                    ? i.call(a || this, { target: this })
                    : this.on("load", i, a),
                  this
                );
              },
              _getMapPanePos: function () {
                return Bi(this._mapPane) || new H(0, 0);
              },
              _moved: function () {
                var i = this._getMapPanePos();
                return i && !i.equals([0, 0]);
              },
              _getTopLeftPoint: function (i, a) {
                var o =
                  i && a !== void 0
                    ? this._getNewPixelOrigin(i, a)
                    : this.getPixelOrigin();
                return o.subtract(this._getMapPanePos());
              },
              _getNewPixelOrigin: function (i, a) {
                var o = this.getSize()._divideBy(2);
                return this.project(i, a)
                  ._subtract(o)
                  ._add(this._getMapPanePos())
                  ._round();
              },
              _latLngToNewLayerPoint: function (i, a, o) {
                var r = this._getNewPixelOrigin(o, a);
                return this.project(i, a)._subtract(r);
              },
              _latLngBoundsToNewLayerBounds: function (i, a, o) {
                var r = this._getNewPixelOrigin(o, a);
                return A([
                  this.project(i.getSouthWest(), a)._subtract(r),
                  this.project(i.getNorthWest(), a)._subtract(r),
                  this.project(i.getSouthEast(), a)._subtract(r),
                  this.project(i.getNorthEast(), a)._subtract(r),
                ]);
              },
              _getCenterLayerPoint: function () {
                return this.containerPointToLayerPoint(
                  this.getSize()._divideBy(2),
                );
              },
              _getCenterOffset: function (i) {
                return this.latLngToLayerPoint(i).subtract(
                  this._getCenterLayerPoint(),
                );
              },
              _limitCenter: function (i, a, o) {
                if (!o) return i;
                var r = this.project(i, a),
                  c = this.getSize().divideBy(2),
                  h = new p(r.subtract(c), r.add(c)),
                  m = this._getBoundsOffset(h, o, a);
                return Math.abs(m.x) <= 1 && Math.abs(m.y) <= 1
                  ? i
                  : this.unproject(r.add(m), a);
              },
              _limitOffset: function (i, a) {
                if (!a) return i;
                var o = this.getPixelBounds(),
                  r = new p(o.min.add(i), o.max.add(i));
                return i.add(this._getBoundsOffset(r, a));
              },
              _getBoundsOffset: function (i, a, o) {
                var r = A(
                    this.project(a.getNorthEast(), o),
                    this.project(a.getSouthWest(), o),
                  ),
                  c = r.min.subtract(i.min),
                  h = r.max.subtract(i.max),
                  m = this._rebound(c.x, -h.x),
                  y = this._rebound(c.y, -h.y);
                return new H(m, y);
              },
              _rebound: function (i, a) {
                return i + a > 0
                  ? Math.round(i - a) / 2
                  : Math.max(0, Math.ceil(i)) - Math.max(0, Math.floor(a));
              },
              _limitZoom: function (i) {
                var a = this.getMinZoom(),
                  o = this.getMaxZoom(),
                  r = $.any3d ? this.options.zoomSnap : 1;
                return (
                  r && (i = Math.round(i / r) * r),
                  Math.max(a, Math.min(o, i))
                );
              },
              _onPanTransitionStep: function () {
                this.fire("move");
              },
              _onPanTransitionEnd: function () {
                ($t(this._mapPane, "leaflet-pan-anim"), this.fire("moveend"));
              },
              _tryAnimatedPan: function (i, a) {
                var o = this._getCenterOffset(i)._trunc();
                return (a && a.animate) !== !0 && !this.getSize().contains(o)
                  ? !1
                  : (this.panBy(o, a), !0);
              },
              _createAnimProxy: function () {
                var i = (this._proxy = bt(
                  "div",
                  "leaflet-proxy leaflet-zoom-animated",
                ));
                (this._panes.mapPane.appendChild(i),
                  this.on(
                    "zoomanim",
                    function (a) {
                      var o = Di,
                        r = this._proxy.style[o];
                      (xi(
                        this._proxy,
                        this.project(a.center, a.zoom),
                        this.getZoomScale(a.zoom, 1),
                      ),
                        r === this._proxy.style[o] &&
                          this._animatingZoom &&
                          this._onZoomTransitionEnd());
                    },
                    this,
                  ),
                  this.on("load moveend", this._animMoveEnd, this),
                  this._on("unload", this._destroyAnimProxy, this));
              },
              _destroyAnimProxy: function () {
                (qt(this._proxy),
                  this.off("load moveend", this._animMoveEnd, this),
                  delete this._proxy);
              },
              _animMoveEnd: function () {
                var i = this.getCenter(),
                  a = this.getZoom();
                xi(this._proxy, this.project(i, a), this.getZoomScale(a, 1));
              },
              _catchTransitionEnd: function (i) {
                this._animatingZoom &&
                  i.propertyName.indexOf("transform") >= 0 &&
                  this._onZoomTransitionEnd();
              },
              _nothingToAnimate: function () {
                return !this._container.getElementsByClassName(
                  "leaflet-zoom-animated",
                ).length;
              },
              _tryAnimatedZoom: function (i, a, o) {
                if (this._animatingZoom) return !0;
                if (
                  ((o = o || {}),
                  !this._zoomAnimated ||
                    o.animate === !1 ||
                    this._nothingToAnimate() ||
                    Math.abs(a - this._zoom) >
                      this.options.zoomAnimationThreshold)
                )
                  return !1;
                var r = this.getZoomScale(a),
                  c = this._getCenterOffset(i)._divideBy(1 - 1 / r);
                return o.animate !== !0 && !this.getSize().contains(c)
                  ? !1
                  : (ot(function () {
                      this._moveStart(!0, o.noMoveStart || !1)._animateZoom(
                        i,
                        a,
                        !0,
                      );
                    }, this),
                    !0);
              },
              _animateZoom: function (i, a, o, r) {
                this._mapPane &&
                  (o &&
                    ((this._animatingZoom = !0),
                    (this._animateToCenter = i),
                    (this._animateToZoom = a),
                    ut(this._mapPane, "leaflet-zoom-anim")),
                  this.fire("zoomanim", { center: i, zoom: a, noUpdate: r }),
                  this._tempFireZoomEvent ||
                    (this._tempFireZoomEvent =
                      this._zoom !== this._animateToZoom),
                  this._move(
                    this._animateToCenter,
                    this._animateToZoom,
                    void 0,
                    !0,
                  ),
                  setTimeout(J(this._onZoomTransitionEnd, this), 250));
              },
              _onZoomTransitionEnd: function () {
                this._animatingZoom &&
                  (this._mapPane && $t(this._mapPane, "leaflet-zoom-anim"),
                  (this._animatingZoom = !1),
                  this._move(
                    this._animateToCenter,
                    this._animateToZoom,
                    void 0,
                    !0,
                  ),
                  this._tempFireZoomEvent && this.fire("zoom"),
                  delete this._tempFireZoomEvent,
                  this.fire("move"),
                  this._moveEnd(!0));
              },
            });
          function io(i, a) {
            return new zt(i, a);
          }
          var Re = yt.extend({
              options: { position: "topright" },
              initialize: function (i) {
                et(this, i);
              },
              getPosition: function () {
                return this.options.position;
              },
              setPosition: function (i) {
                var a = this._map;
                return (
                  a && a.removeControl(this),
                  (this.options.position = i),
                  a && a.addControl(this),
                  this
                );
              },
              getContainer: function () {
                return this._container;
              },
              addTo: function (i) {
                (this.remove(), (this._map = i));
                var a = (this._container = this.onAdd(i)),
                  o = this.getPosition(),
                  r = i._controlCorners[o];
                return (
                  ut(a, "leaflet-control"),
                  o.indexOf("bottom") !== -1
                    ? r.insertBefore(a, r.firstChild)
                    : r.appendChild(a),
                  this._map.on("unload", this.remove, this),
                  this
                );
              },
              remove: function () {
                return this._map
                  ? (qt(this._container),
                    this.onRemove && this.onRemove(this._map),
                    this._map.off("unload", this.remove, this),
                    (this._map = null),
                    this)
                  : this;
              },
              _refocusOnMap: function (i) {
                this._map &&
                  i &&
                  i.screenX > 0 &&
                  i.screenY > 0 &&
                  this._map.getContainer().focus();
              },
            }),
            Ti = function (i) {
              return new Re(i);
            };
          zt.include({
            addControl: function (i) {
              return (i.addTo(this), this);
            },
            removeControl: function (i) {
              return (i.remove(), this);
            },
            _initControlPos: function () {
              var i = (this._controlCorners = {}),
                a = "leaflet-",
                o = (this._controlContainer = bt(
                  "div",
                  a + "control-container",
                  this._container,
                ));
              function r(c, h) {
                var m = a + c + " " + a + h;
                i[c + h] = bt("div", m, o);
              }
              (r("top", "left"),
                r("top", "right"),
                r("bottom", "left"),
                r("bottom", "right"));
            },
            _clearControlPos: function () {
              for (var i in this._controlCorners) qt(this._controlCorners[i]);
              (qt(this._controlContainer),
                delete this._controlCorners,
                delete this._controlContainer);
            },
          });
          var Ta = Re.extend({
              options: {
                collapsed: !0,
                position: "topright",
                autoZIndex: !0,
                hideSingleBase: !1,
                sortLayers: !1,
                sortFunction: function (i, a, o, r) {
                  return o < r ? -1 : r < o ? 1 : 0;
                },
              },
              initialize: function (i, a, o) {
                (et(this, o),
                  (this._layerControlInputs = []),
                  (this._layers = []),
                  (this._lastZIndex = 0),
                  (this._handlingClick = !1),
                  (this._preventClick = !1));
                for (var r in i) this._addLayer(i[r], r);
                for (r in a) this._addLayer(a[r], r, !0);
              },
              onAdd: function (i) {
                (this._initLayout(),
                  this._update(),
                  (this._map = i),
                  i.on("zoomend", this._checkDisabledLayers, this));
                for (var a = 0; a < this._layers.length; a++)
                  this._layers[a].layer.on(
                    "add remove",
                    this._onLayerChange,
                    this,
                  );
                return this._container;
              },
              addTo: function (i) {
                return (
                  Re.prototype.addTo.call(this, i),
                  this._expandIfNotCollapsed()
                );
              },
              onRemove: function () {
                this._map.off("zoomend", this._checkDisabledLayers, this);
                for (var i = 0; i < this._layers.length; i++)
                  this._layers[i].layer.off(
                    "add remove",
                    this._onLayerChange,
                    this,
                  );
              },
              addBaseLayer: function (i, a) {
                return (
                  this._addLayer(i, a),
                  this._map ? this._update() : this
                );
              },
              addOverlay: function (i, a) {
                return (
                  this._addLayer(i, a, !0),
                  this._map ? this._update() : this
                );
              },
              removeLayer: function (i) {
                i.off("add remove", this._onLayerChange, this);
                var a = this._getLayer(U(i));
                return (
                  a && this._layers.splice(this._layers.indexOf(a), 1),
                  this._map ? this._update() : this
                );
              },
              expand: function () {
                (ut(this._container, "leaflet-control-layers-expanded"),
                  (this._section.style.height = null));
                var i =
                  this._map.getSize().y - (this._container.offsetTop + 50);
                return (
                  i < this._section.clientHeight
                    ? (ut(this._section, "leaflet-control-layers-scrollbar"),
                      (this._section.style.height = i + "px"))
                    : $t(this._section, "leaflet-control-layers-scrollbar"),
                  this._checkDisabledLayers(),
                  this
                );
              },
              collapse: function () {
                return (
                  $t(this._container, "leaflet-control-layers-expanded"),
                  this
                );
              },
              _initLayout: function () {
                var i = "leaflet-control-layers",
                  a = (this._container = bt("div", i)),
                  o = this.options.collapsed;
                (a.setAttribute("aria-haspopup", !0), an(a), ui(a));
                var r = (this._section = bt("section", i + "-list"));
                o &&
                  (this._map.on("click", this.collapse, this),
                  lt(
                    a,
                    {
                      mouseenter: this._expandSafely,
                      mouseleave: this.collapse,
                    },
                    this,
                  ));
                var c = (this._layersLink = bt("a", i + "-toggle", a));
                ((c.href = "#"),
                  (c.title = "Layers"),
                  c.setAttribute("role", "button"),
                  lt(
                    c,
                    {
                      keydown: function (h) {
                        h.keyCode === 13 && this._expandSafely();
                      },
                      click: function (h) {
                        (ie(h), this._expandSafely());
                      },
                    },
                    this,
                  ),
                  o || this.expand(),
                  (this._baseLayersList = bt("div", i + "-base", r)),
                  (this._separator = bt("div", i + "-separator", r)),
                  (this._overlaysList = bt("div", i + "-overlays", r)),
                  a.appendChild(r));
              },
              _getLayer: function (i) {
                for (var a = 0; a < this._layers.length; a++)
                  if (this._layers[a] && U(this._layers[a].layer) === i)
                    return this._layers[a];
              },
              _addLayer: function (i, a, o) {
                (this._map && i.on("add remove", this._onLayerChange, this),
                  this._layers.push({ layer: i, name: a, overlay: o }),
                  this.options.sortLayers &&
                    this._layers.sort(
                      J(function (r, c) {
                        return this.options.sortFunction(
                          r.layer,
                          c.layer,
                          r.name,
                          c.name,
                        );
                      }, this),
                    ),
                  this.options.autoZIndex &&
                    i.setZIndex &&
                    (this._lastZIndex++, i.setZIndex(this._lastZIndex)),
                  this._expandIfNotCollapsed());
              },
              _update: function () {
                if (!this._container) return this;
                (qe(this._baseLayersList),
                  qe(this._overlaysList),
                  (this._layerControlInputs = []));
                var i,
                  a,
                  o,
                  r,
                  c = 0;
                for (o = 0; o < this._layers.length; o++)
                  ((r = this._layers[o]),
                    this._addItem(r),
                    (a = a || r.overlay),
                    (i = i || !r.overlay),
                    (c += r.overlay ? 0 : 1));
                return (
                  this.options.hideSingleBase &&
                    ((i = i && c > 1),
                    (this._baseLayersList.style.display = i ? "" : "none")),
                  (this._separator.style.display = a && i ? "" : "none"),
                  this
                );
              },
              _onLayerChange: function (i) {
                this._handlingClick || this._update();
                var a = this._getLayer(U(i.target)),
                  o = a.overlay
                    ? i.type === "add"
                      ? "overlayadd"
                      : "overlayremove"
                    : i.type === "add"
                      ? "baselayerchange"
                      : null;
                o && this._map.fire(o, a);
              },
              _createRadioElement: function (i, a) {
                var o =
                    '<input type="radio" class="leaflet-control-layers-selector" name="' +
                    i +
                    '"' +
                    (a ? ' checked="checked"' : "") +
                    "/>",
                  r = document.createElement("div");
                return ((r.innerHTML = o), r.firstChild);
              },
              _addItem: function (i) {
                var a = document.createElement("label"),
                  o = this._map.hasLayer(i.layer),
                  r;
                (i.overlay
                  ? ((r = document.createElement("input")),
                    (r.type = "checkbox"),
                    (r.className = "leaflet-control-layers-selector"),
                    (r.defaultChecked = o))
                  : (r = this._createRadioElement(
                      "leaflet-base-layers_" + U(this),
                      o,
                    )),
                  this._layerControlInputs.push(r),
                  (r.layerId = U(i.layer)),
                  lt(r, "click", this._onInputClick, this));
                var c = document.createElement("span");
                c.innerHTML = " " + i.name;
                var h = document.createElement("span");
                (a.appendChild(h), h.appendChild(r), h.appendChild(c));
                var m = i.overlay ? this._overlaysList : this._baseLayersList;
                return (m.appendChild(a), this._checkDisabledLayers(), a);
              },
              _onInputClick: function () {
                if (!this._preventClick) {
                  var i = this._layerControlInputs,
                    a,
                    o,
                    r = [],
                    c = [];
                  this._handlingClick = !0;
                  for (var h = i.length - 1; h >= 0; h--)
                    ((a = i[h]),
                      (o = this._getLayer(a.layerId).layer),
                      a.checked ? r.push(o) : a.checked || c.push(o));
                  for (h = 0; h < c.length; h++)
                    this._map.hasLayer(c[h]) && this._map.removeLayer(c[h]);
                  for (h = 0; h < r.length; h++)
                    this._map.hasLayer(r[h]) || this._map.addLayer(r[h]);
                  ((this._handlingClick = !1), this._refocusOnMap());
                }
              },
              _checkDisabledLayers: function () {
                for (
                  var i = this._layerControlInputs,
                    a,
                    o,
                    r = this._map.getZoom(),
                    c = i.length - 1;
                  c >= 0;
                  c--
                )
                  ((a = i[c]),
                    (o = this._getLayer(a.layerId).layer),
                    (a.disabled =
                      (o.options.minZoom !== void 0 && r < o.options.minZoom) ||
                      (o.options.maxZoom !== void 0 && r > o.options.maxZoom)));
              },
              _expandIfNotCollapsed: function () {
                return (
                  this._map && !this.options.collapsed && this.expand(),
                  this
                );
              },
              _expandSafely: function () {
                var i = this._section;
                ((this._preventClick = !0), lt(i, "click", ie), this.expand());
                var a = this;
                setTimeout(function () {
                  (Rt(i, "click", ie), (a._preventClick = !1));
                });
              },
            }),
            rs = function (i, a, o) {
              return new Ta(i, a, o);
            },
            no = Re.extend({
              options: {
                position: "topleft",
                zoomInText: '<span aria-hidden="true">+</span>',
                zoomInTitle: "Zoom in",
                zoomOutText: '<span aria-hidden="true">&#x2212;</span>',
                zoomOutTitle: "Zoom out",
              },
              onAdd: function (i) {
                var a = "leaflet-control-zoom",
                  o = bt("div", a + " leaflet-bar"),
                  r = this.options;
                return (
                  (this._zoomInButton = this._createButton(
                    r.zoomInText,
                    r.zoomInTitle,
                    a + "-in",
                    o,
                    this._zoomIn,
                  )),
                  (this._zoomOutButton = this._createButton(
                    r.zoomOutText,
                    r.zoomOutTitle,
                    a + "-out",
                    o,
                    this._zoomOut,
                  )),
                  this._updateDisabled(),
                  i.on("zoomend zoomlevelschange", this._updateDisabled, this),
                  o
                );
              },
              onRemove: function (i) {
                i.off("zoomend zoomlevelschange", this._updateDisabled, this);
              },
              disable: function () {
                return ((this._disabled = !0), this._updateDisabled(), this);
              },
              enable: function () {
                return ((this._disabled = !1), this._updateDisabled(), this);
              },
              _zoomIn: function (i) {
                !this._disabled &&
                  this._map._zoom < this._map.getMaxZoom() &&
                  this._map.zoomIn(
                    this._map.options.zoomDelta * (i.shiftKey ? 3 : 1),
                  );
              },
              _zoomOut: function (i) {
                !this._disabled &&
                  this._map._zoom > this._map.getMinZoom() &&
                  this._map.zoomOut(
                    this._map.options.zoomDelta * (i.shiftKey ? 3 : 1),
                  );
              },
              _createButton: function (i, a, o, r, c) {
                var h = bt("a", o, r);
                return (
                  (h.innerHTML = i),
                  (h.href = "#"),
                  (h.title = a),
                  h.setAttribute("role", "button"),
                  h.setAttribute("aria-label", a),
                  an(h),
                  lt(h, "click", Zi),
                  lt(h, "click", c, this),
                  lt(h, "click", this._refocusOnMap, this),
                  h
                );
              },
              _updateDisabled: function () {
                var i = this._map,
                  a = "leaflet-disabled";
                ($t(this._zoomInButton, a),
                  $t(this._zoomOutButton, a),
                  this._zoomInButton.setAttribute("aria-disabled", "false"),
                  this._zoomOutButton.setAttribute("aria-disabled", "false"),
                  (this._disabled || i._zoom === i.getMinZoom()) &&
                    (ut(this._zoomOutButton, a),
                    this._zoomOutButton.setAttribute("aria-disabled", "true")),
                  (this._disabled || i._zoom === i.getMaxZoom()) &&
                    (ut(this._zoomInButton, a),
                    this._zoomInButton.setAttribute("aria-disabled", "true")));
              },
            });
          (zt.mergeOptions({ zoomControl: !0 }),
            zt.addInitHook(function () {
              this.options.zoomControl &&
                ((this.zoomControl = new no()),
                this.addControl(this.zoomControl));
            }));
          var Du = function (i) {
              return new no(i);
            },
            cs = Re.extend({
              options: {
                position: "bottomleft",
                maxWidth: 100,
                metric: !0,
                imperial: !0,
              },
              onAdd: function (i) {
                var a = "leaflet-control-scale",
                  o = bt("div", a),
                  r = this.options;
                return (
                  this._addScales(r, a + "-line", o),
                  i.on(
                    r.updateWhenIdle ? "moveend" : "move",
                    this._update,
                    this,
                  ),
                  i.whenReady(this._update, this),
                  o
                );
              },
              onRemove: function (i) {
                i.off(
                  this.options.updateWhenIdle ? "moveend" : "move",
                  this._update,
                  this,
                );
              },
              _addScales: function (i, a, o) {
                (i.metric && (this._mScale = bt("div", a, o)),
                  i.imperial && (this._iScale = bt("div", a, o)));
              },
              _update: function () {
                var i = this._map,
                  a = i.getSize().y / 2,
                  o = i.distance(
                    i.containerPointToLatLng([0, a]),
                    i.containerPointToLatLng([this.options.maxWidth, a]),
                  );
                this._updateScales(o);
              },
              _updateScales: function (i) {
                (this.options.metric && i && this._updateMetric(i),
                  this.options.imperial && i && this._updateImperial(i));
              },
              _updateMetric: function (i) {
                var a = this._getRoundNum(i),
                  o = a < 1e3 ? a + " m" : a / 1e3 + " km";
                this._updateScale(this._mScale, o, a / i);
              },
              _updateImperial: function (i) {
                var a = i * 3.2808399,
                  o,
                  r,
                  c;
                a > 5280
                  ? ((o = a / 5280),
                    (r = this._getRoundNum(o)),
                    this._updateScale(this._iScale, r + " mi", r / o))
                  : ((c = this._getRoundNum(a)),
                    this._updateScale(this._iScale, c + " ft", c / a));
              },
              _updateScale: function (i, a, o) {
                ((i.style.width = Math.round(this.options.maxWidth * o) + "px"),
                  (i.innerHTML = a));
              },
              _getRoundNum: function (i) {
                var a = Math.pow(10, (Math.floor(i) + "").length - 1),
                  o = i / a;
                return (
                  (o = o >= 10 ? 10 : o >= 5 ? 5 : o >= 3 ? 3 : o >= 2 ? 2 : 1),
                  a * o
                );
              },
            }),
            ao = function (i) {
              return new cs(i);
            },
            Bu =
              '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',
            lo = Re.extend({
              options: {
                position: "bottomright",
                prefix:
                  '<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">' +
                  ($.inlineSvg ? Bu + " " : "") +
                  "Leaflet</a>",
              },
              initialize: function (i) {
                (et(this, i), (this._attributions = {}));
              },
              onAdd: function (i) {
                ((i.attributionControl = this),
                  (this._container = bt("div", "leaflet-control-attribution")),
                  an(this._container));
                for (var a in i._layers)
                  i._layers[a].getAttribution &&
                    this.addAttribution(i._layers[a].getAttribution());
                return (
                  this._update(),
                  i.on("layeradd", this._addAttribution, this),
                  this._container
                );
              },
              onRemove: function (i) {
                i.off("layeradd", this._addAttribution, this);
              },
              _addAttribution: function (i) {
                i.layer.getAttribution &&
                  (this.addAttribution(i.layer.getAttribution()),
                  i.layer.once(
                    "remove",
                    function () {
                      this.removeAttribution(i.layer.getAttribution());
                    },
                    this,
                  ));
              },
              setPrefix: function (i) {
                return ((this.options.prefix = i), this._update(), this);
              },
              addAttribution: function (i) {
                return i
                  ? (this._attributions[i] || (this._attributions[i] = 0),
                    this._attributions[i]++,
                    this._update(),
                    this)
                  : this;
              },
              removeAttribution: function (i) {
                return i
                  ? (this._attributions[i] &&
                      (this._attributions[i]--, this._update()),
                    this)
                  : this;
              },
              _update: function () {
                if (this._map) {
                  var i = [];
                  for (var a in this._attributions)
                    this._attributions[a] && i.push(a);
                  var o = [];
                  (this.options.prefix && o.push(this.options.prefix),
                    i.length && o.push(i.join(", ")),
                    (this._container.innerHTML = o.join(
                      ' <span aria-hidden="true">|</span> ',
                    )));
                }
              },
            });
          (zt.mergeOptions({ attributionControl: !0 }),
            zt.addInitHook(function () {
              this.options.attributionControl && new lo().addTo(this);
            }));
          var Zu = function (i) {
            return new lo(i);
          };
          ((Re.Layers = Ta),
            (Re.Zoom = no),
            (Re.Scale = cs),
            (Re.Attribution = lo),
            (Ti.layers = rs),
            (Ti.zoom = Du),
            (Ti.scale = ao),
            (Ti.attribution = Zu));
          var ri = yt.extend({
            initialize: function (i) {
              this._map = i;
            },
            enable: function () {
              return this._enabled
                ? this
                : ((this._enabled = !0), this.addHooks(), this);
            },
            disable: function () {
              return this._enabled
                ? ((this._enabled = !1), this.removeHooks(), this)
                : this;
            },
            enabled: function () {
              return !!this._enabled;
            },
          });
          ri.addTo = function (i, a) {
            return (i.addHandler(a, this), this);
          };
          var Ru = { Events: M },
            oo = $.touch ? "touchstart mousedown" : "mousedown",
            Ri = q.extend({
              options: { clickTolerance: 3 },
              initialize: function (i, a, o, r) {
                (et(this, r),
                  (this._element = i),
                  (this._dragStartTarget = a || i),
                  (this._preventOutline = o));
              },
              enable: function () {
                this._enabled ||
                  (lt(this._dragStartTarget, oo, this._onDown, this),
                  (this._enabled = !0));
              },
              disable: function () {
                this._enabled &&
                  (Ri._dragging === this && this.finishDrag(!0),
                  Rt(this._dragStartTarget, oo, this._onDown, this),
                  (this._enabled = !1),
                  (this._moved = !1));
              },
              _onDown: function (i) {
                if (
                  this._enabled &&
                  ((this._moved = !1), !Fl(this._element, "leaflet-zoom-anim"))
                ) {
                  if (i.touches && i.touches.length !== 1) {
                    Ri._dragging === this && this.finishDrag();
                    return;
                  }
                  if (
                    !(
                      Ri._dragging ||
                      i.shiftKey ||
                      (i.which !== 1 && i.button !== 1 && !i.touches)
                    ) &&
                    ((Ri._dragging = this),
                    this._preventOutline && wn(this._element),
                    il(),
                    Mn(),
                    !this._moving)
                  ) {
                    this.fire("down");
                    var a = i.touches ? i.touches[0] : i,
                      o = al(this._element);
                    ((this._startPoint = new H(a.clientX, a.clientY)),
                      (this._startPos = Bi(this._element)),
                      (this._parentScale = ya(o)));
                    var r = i.type === "mousedown";
                    (lt(
                      document,
                      r ? "mousemove" : "touchmove",
                      this._onMove,
                      this,
                    ),
                      lt(
                        document,
                        r ? "mouseup" : "touchend touchcancel",
                        this._onUp,
                        this,
                      ));
                  }
                }
              },
              _onMove: function (i) {
                if (this._enabled) {
                  if (i.touches && i.touches.length > 1) {
                    this._moved = !0;
                    return;
                  }
                  var a =
                      i.touches && i.touches.length === 1 ? i.touches[0] : i,
                    o = new H(a.clientX, a.clientY)._subtract(this._startPoint);
                  (!o.x && !o.y) ||
                    Math.abs(o.x) + Math.abs(o.y) <
                      this.options.clickTolerance ||
                    ((o.x /= this._parentScale.x),
                    (o.y /= this._parentScale.y),
                    ie(i),
                    this._moved ||
                      (this.fire("dragstart"),
                      (this._moved = !0),
                      ut(document.body, "leaflet-dragging"),
                      (this._lastTarget = i.target || i.srcElement),
                      window.SVGElementInstance &&
                        this._lastTarget instanceof window.SVGElementInstance &&
                        (this._lastTarget =
                          this._lastTarget.correspondingUseElement),
                      ut(this._lastTarget, "leaflet-drag-target")),
                    (this._newPos = this._startPos.add(o)),
                    (this._moving = !0),
                    (this._lastEvent = i),
                    this._updatePosition());
                }
              },
              _updatePosition: function () {
                var i = { originalEvent: this._lastEvent };
                (this.fire("predrag", i),
                  Vt(this._element, this._newPos),
                  this.fire("drag", i));
              },
              _onUp: function () {
                this._enabled && this.finishDrag();
              },
              finishDrag: function (i) {
                ($t(document.body, "leaflet-dragging"),
                  this._lastTarget &&
                    ($t(this._lastTarget, "leaflet-drag-target"),
                    (this._lastTarget = null)),
                  Rt(document, "mousemove touchmove", this._onMove, this),
                  Rt(
                    document,
                    "mouseup touchend touchcancel",
                    this._onUp,
                    this,
                  ),
                  ga(),
                  si());
                var a = this._moved && this._moving;
                ((this._moving = !1),
                  (Ri._dragging = !1),
                  a &&
                    this.fire("dragend", {
                      noInertia: i,
                      distance: this._newPos.distanceTo(this._startPos),
                    }));
              },
            });
          function fs(i, a, o) {
            var r,
              c = [1, 4, 2, 8],
              h,
              m,
              y,
              z,
              D,
              k,
              tt,
              mt;
            for (h = 0, k = i.length; h < k; h++) i[h]._code = ln(i[h], a);
            for (y = 0; y < 4; y++) {
              for (
                tt = c[y], r = [], h = 0, k = i.length, m = k - 1;
                h < k;
                m = h++
              )
                ((z = i[h]),
                  (D = i[m]),
                  z._code & tt
                    ? D._code & tt ||
                      ((mt = ol(D, z, tt, a, o)),
                      (mt._code = ln(mt, a)),
                      r.push(mt))
                    : (D._code & tt &&
                        ((mt = ol(D, z, tt, a, o)),
                        (mt._code = ln(mt, a)),
                        r.push(mt)),
                      r.push(z)));
              i = r;
            }
            return i;
          }
          function hs(i, a) {
            var o, r, c, h, m, y, z, D, k;
            if (!i || i.length === 0) throw new Error("latlngs not passed");
            Ye(i) ||
              (console.warn(
                "latlngs are not flat! Only the first ring will be used",
              ),
              (i = i[0]));
            var tt = Q([0, 0]),
              mt = Y(i),
              ye =
                mt.getNorthWest().distanceTo(mt.getSouthWest()) *
                mt.getNorthEast().distanceTo(mt.getNorthWest());
            ye < 1700 && (tt = so(i));
            var ne = i.length,
              Ue = [];
            for (o = 0; o < ne; o++) {
              var Ct = Q(i[o]);
              Ue.push(a.project(Q([Ct.lat - tt.lat, Ct.lng - tt.lng])));
            }
            for (y = z = D = 0, o = 0, r = ne - 1; o < ne; r = o++)
              ((c = Ue[o]),
                (h = Ue[r]),
                (m = c.y * h.x - h.y * c.x),
                (z += (c.x + h.x) * m),
                (D += (c.y + h.y) * m),
                (y += m * 3));
            y === 0 ? (k = Ue[0]) : (k = [z / y, D / y]);
            var Nt = a.unproject(V(k));
            return Q([Nt.lat + tt.lat, Nt.lng + tt.lng]);
          }
          function so(i) {
            for (var a = 0, o = 0, r = 0, c = 0; c < i.length; c++) {
              var h = Q(i[c]);
              ((a += h.lat), (o += h.lng), r++);
            }
            return Q([a / r, o / r]);
          }
          var uo = {
            __proto__: null,
            clipPolygon: fs,
            polygonCenter: hs,
            centroid: so,
          };
          function ds(i, a) {
            if (!a || !i.length) return i.slice();
            var o = a * a;
            return ((i = Hu(i, o)), (i = _s(i, o)), i);
          }
          function ms(i, a, o) {
            return Math.sqrt(za(i, a, o, !0));
          }
          function Uu(i, a, o) {
            return za(i, a, o);
          }
          function _s(i, a) {
            var o = i.length,
              r = typeof Uint8Array < "u" ? Uint8Array : Array,
              c = new r(o);
            ((c[0] = c[o - 1] = 1), ro(i, c, a, 0, o - 1));
            var h,
              m = [];
            for (h = 0; h < o; h++) c[h] && m.push(i[h]);
            return m;
          }
          function ro(i, a, o, r, c) {
            var h = 0,
              m,
              y,
              z;
            for (y = r + 1; y <= c - 1; y++)
              ((z = za(i[y], i[r], i[c], !0)), z > h && ((m = y), (h = z)));
            h > o && ((a[m] = 1), ro(i, a, o, r, m), ro(i, a, o, m, c));
          }
          function Hu(i, a) {
            for (var o = [i[0]], r = 1, c = 0, h = i.length; r < h; r++)
              ju(i[r], i[c]) > a && (o.push(i[r]), (c = r));
            return (c < h - 1 && o.push(i[h - 1]), o);
          }
          var ps;
          function vs(i, a, o, r, c) {
            var h = r ? ps : ln(i, o),
              m = ln(a, o),
              y,
              z,
              D;
            for (ps = m; ; ) {
              if (!(h | m)) return [i, a];
              if (h & m) return !1;
              ((y = h || m),
                (z = ol(i, a, y, o, c)),
                (D = ln(z, o)),
                y === h ? ((i = z), (h = D)) : ((a = z), (m = D)));
            }
          }
          function ol(i, a, o, r, c) {
            var h = a.x - i.x,
              m = a.y - i.y,
              y = r.min,
              z = r.max,
              D,
              k;
            return (
              o & 8
                ? ((D = i.x + (h * (z.y - i.y)) / m), (k = z.y))
                : o & 4
                  ? ((D = i.x + (h * (y.y - i.y)) / m), (k = y.y))
                  : o & 2
                    ? ((D = z.x), (k = i.y + (m * (z.x - i.x)) / h))
                    : o & 1 && ((D = y.x), (k = i.y + (m * (y.x - i.x)) / h)),
              new H(D, k, c)
            );
          }
          function ln(i, a) {
            var o = 0;
            return (
              i.x < a.min.x ? (o |= 1) : i.x > a.max.x && (o |= 2),
              i.y < a.min.y ? (o |= 4) : i.y > a.max.y && (o |= 8),
              o
            );
          }
          function ju(i, a) {
            var o = a.x - i.x,
              r = a.y - i.y;
            return o * o + r * r;
          }
          function za(i, a, o, r) {
            var c = a.x,
              h = a.y,
              m = o.x - c,
              y = o.y - h,
              z = m * m + y * y,
              D;
            return (
              z > 0 &&
                ((D = ((i.x - c) * m + (i.y - h) * y) / z),
                D > 1
                  ? ((c = o.x), (h = o.y))
                  : D > 0 && ((c += m * D), (h += y * D))),
              (m = i.x - c),
              (y = i.y - h),
              r ? m * m + y * y : new H(c, h)
            );
          }
          function Ye(i) {
            return (
              !ct(i[0]) || (typeof i[0][0] != "object" && typeof i[0][0] < "u")
            );
          }
          function sl(i) {
            return (
              console.warn(
                "Deprecated use of _flat, please use L.LineUtil.isFlat instead.",
              ),
              Ye(i)
            );
          }
          function Cn(i, a) {
            var o, r, c, h, m, y, z, D;
            if (!i || i.length === 0) throw new Error("latlngs not passed");
            Ye(i) ||
              (console.warn(
                "latlngs are not flat! Only the first ring will be used",
              ),
              (i = i[0]));
            var k = Q([0, 0]),
              tt = Y(i),
              mt =
                tt.getNorthWest().distanceTo(tt.getSouthWest()) *
                tt.getNorthEast().distanceTo(tt.getNorthWest());
            mt < 1700 && (k = so(i));
            var ye = i.length,
              ne = [];
            for (o = 0; o < ye; o++) {
              var Ue = Q(i[o]);
              ne.push(a.project(Q([Ue.lat - k.lat, Ue.lng - k.lng])));
            }
            for (o = 0, r = 0; o < ye - 1; o++)
              r += ne[o].distanceTo(ne[o + 1]) / 2;
            if (r === 0) D = ne[0];
            else
              for (o = 0, h = 0; o < ye - 1; o++)
                if (
                  ((m = ne[o]),
                  (y = ne[o + 1]),
                  (c = m.distanceTo(y)),
                  (h += c),
                  h > r)
                ) {
                  ((z = (h - r) / c),
                    (D = [y.x - z * (y.x - m.x), y.y - z * (y.y - m.y)]));
                  break;
                }
            var Ct = a.unproject(V(D));
            return Q([Ct.lat + k.lat, Ct.lng + k.lng]);
          }
          var qu = {
              __proto__: null,
              simplify: ds,
              pointToSegmentDistance: ms,
              closestPointOnSegment: Uu,
              clipSegment: vs,
              _getEdgeIntersection: ol,
              _getBitCode: ln,
              _sqClosestPointOnSegment: za,
              isFlat: Ye,
              _flat: sl,
              polylineCenter: Cn,
            },
            ul = {
              project: function (i) {
                return new H(i.lng, i.lat);
              },
              unproject: function (i) {
                return new P(i.y, i.x);
              },
              bounds: new p([-180, -90], [180, 90]),
            },
            rl = {
              R: 6378137,
              R_MINOR: 6356752314245179e-9,
              bounds: new p(
                [-2003750834279e-5, -1549657073972e-5],
                [2003750834279e-5, 1876465623138e-5],
              ),
              project: function (i) {
                var a = Math.PI / 180,
                  o = this.R,
                  r = i.lat * a,
                  c = this.R_MINOR / o,
                  h = Math.sqrt(1 - c * c),
                  m = h * Math.sin(r),
                  y =
                    Math.tan(Math.PI / 4 - r / 2) /
                    Math.pow((1 - m) / (1 + m), h / 2);
                return (
                  (r = -o * Math.log(Math.max(y, 1e-10))),
                  new H(i.lng * a * o, r)
                );
              },
              unproject: function (i) {
                for (
                  var a = 180 / Math.PI,
                    o = this.R,
                    r = this.R_MINOR / o,
                    c = Math.sqrt(1 - r * r),
                    h = Math.exp(-i.y / o),
                    m = Math.PI / 2 - 2 * Math.atan(h),
                    y = 0,
                    z = 0.1,
                    D;
                  y < 15 && Math.abs(z) > 1e-7;
                  y++
                )
                  ((D = c * Math.sin(m)),
                    (D = Math.pow((1 - D) / (1 + D), c / 2)),
                    (z = Math.PI / 2 - 2 * Math.atan(h * D) - m),
                    (m += z));
                return new P(m * a, (i.x * a) / o);
              },
            },
            gs = {
              __proto__: null,
              LonLat: ul,
              Mercator: rl,
              SphericalMercator: Pi,
            },
            ys = G({}, Ft, {
              code: "EPSG:3395",
              projection: rl,
              transformation: (function () {
                var i = 0.5 / (Math.PI * rl.R);
                return Ki(i, 0.5, -i, 0.5);
              })(),
            }),
            co = G({}, Ft, {
              code: "EPSG:4326",
              projection: ul,
              transformation: Ki(1 / 180, 1, -1 / 180, 0.5),
            }),
            Nn = G({}, pt, {
              projection: ul,
              transformation: Ki(1, 0, -1, 0),
              scale: function (i) {
                return Math.pow(2, i);
              },
              zoom: function (i) {
                return Math.log(i) / Math.LN2;
              },
              distance: function (i, a) {
                var o = a.lng - i.lng,
                  r = a.lat - i.lat;
                return Math.sqrt(o * o + r * r);
              },
              infinite: !0,
            });
          ((pt.Earth = Ft),
            (pt.EPSG3395 = ys),
            (pt.EPSG3857 = Ja),
            (pt.EPSG900913 = Ji),
            (pt.EPSG4326 = co),
            (pt.Simple = Nn));
          var ti = q.extend({
            options: {
              pane: "overlayPane",
              attribution: null,
              bubblingMouseEvents: !0,
            },
            addTo: function (i) {
              return (i.addLayer(this), this);
            },
            remove: function () {
              return this.removeFrom(this._map || this._mapToAdd);
            },
            removeFrom: function (i) {
              return (i && i.removeLayer(this), this);
            },
            getPane: function (i) {
              return this._map.getPane(
                i ? this.options[i] || i : this.options.pane,
              );
            },
            addInteractiveTarget: function (i) {
              return ((this._map._targets[U(i)] = this), this);
            },
            removeInteractiveTarget: function (i) {
              return (delete this._map._targets[U(i)], this);
            },
            getAttribution: function () {
              return this.options.attribution;
            },
            _layerAdd: function (i) {
              var a = i.target;
              if (a.hasLayer(this)) {
                if (
                  ((this._map = a),
                  (this._zoomAnimated = a._zoomAnimated),
                  this.getEvents)
                ) {
                  var o = this.getEvents();
                  (a.on(o, this),
                    this.once(
                      "remove",
                      function () {
                        a.off(o, this);
                      },
                      this,
                    ));
                }
                (this.onAdd(a),
                  this.fire("add"),
                  a.fire("layeradd", { layer: this }));
              }
            },
          });
          zt.include({
            addLayer: function (i) {
              if (!i._layerAdd)
                throw new Error("The provided object is not a Layer.");
              var a = U(i);
              return this._layers[a]
                ? this
                : ((this._layers[a] = i),
                  (i._mapToAdd = this),
                  i.beforeAdd && i.beforeAdd(this),
                  this.whenReady(i._layerAdd, i),
                  this);
            },
            removeLayer: function (i) {
              var a = U(i);
              return this._layers[a]
                ? (this._loaded && i.onRemove(this),
                  delete this._layers[a],
                  this._loaded &&
                    (this.fire("layerremove", { layer: i }), i.fire("remove")),
                  (i._map = i._mapToAdd = null),
                  this)
                : this;
            },
            hasLayer: function (i) {
              return U(i) in this._layers;
            },
            eachLayer: function (i, a) {
              for (var o in this._layers) i.call(a, this._layers[o]);
              return this;
            },
            _addLayers: function (i) {
              i = i ? (ct(i) ? i : [i]) : [];
              for (var a = 0, o = i.length; a < o; a++) this.addLayer(i[a]);
            },
            _addZoomLimit: function (i) {
              (!isNaN(i.options.maxZoom) || !isNaN(i.options.minZoom)) &&
                ((this._zoomBoundLayers[U(i)] = i), this._updateZoomLevels());
            },
            _removeZoomLimit: function (i) {
              var a = U(i);
              this._zoomBoundLayers[a] &&
                (delete this._zoomBoundLayers[a], this._updateZoomLevels());
            },
            _updateZoomLevels: function () {
              var i = 1 / 0,
                a = -1 / 0,
                o = this._getZoomSpan();
              for (var r in this._zoomBoundLayers) {
                var c = this._zoomBoundLayers[r].options;
                ((i = c.minZoom === void 0 ? i : Math.min(i, c.minZoom)),
                  (a = c.maxZoom === void 0 ? a : Math.max(a, c.maxZoom)));
              }
              ((this._layersMaxZoom = a === -1 / 0 ? void 0 : a),
                (this._layersMinZoom = i === 1 / 0 ? void 0 : i),
                o !== this._getZoomSpan() && this.fire("zoomlevelschange"),
                this.options.maxZoom === void 0 &&
                  this._layersMaxZoom &&
                  this.getZoom() > this._layersMaxZoom &&
                  this.setZoom(this._layersMaxZoom),
                this.options.minZoom === void 0 &&
                  this._layersMinZoom &&
                  this.getZoom() < this._layersMinZoom &&
                  this.setZoom(this._layersMinZoom));
            },
          });
          var Dn = ti.extend({
              initialize: function (i, a) {
                (et(this, a), (this._layers = {}));
                var o, r;
                if (i)
                  for (o = 0, r = i.length; o < r; o++) this.addLayer(i[o]);
              },
              addLayer: function (i) {
                var a = this.getLayerId(i);
                return (
                  (this._layers[a] = i),
                  this._map && this._map.addLayer(i),
                  this
                );
              },
              removeLayer: function (i) {
                var a = i in this._layers ? i : this.getLayerId(i);
                return (
                  this._map &&
                    this._layers[a] &&
                    this._map.removeLayer(this._layers[a]),
                  delete this._layers[a],
                  this
                );
              },
              hasLayer: function (i) {
                var a = typeof i == "number" ? i : this.getLayerId(i);
                return a in this._layers;
              },
              clearLayers: function () {
                return this.eachLayer(this.removeLayer, this);
              },
              invoke: function (i) {
                var a = Array.prototype.slice.call(arguments, 1),
                  o,
                  r;
                for (o in this._layers)
                  ((r = this._layers[o]), r[i] && r[i].apply(r, a));
                return this;
              },
              onAdd: function (i) {
                this.eachLayer(i.addLayer, i);
              },
              onRemove: function (i) {
                this.eachLayer(i.removeLayer, i);
              },
              eachLayer: function (i, a) {
                for (var o in this._layers) i.call(a, this._layers[o]);
                return this;
              },
              getLayer: function (i) {
                return this._layers[i];
              },
              getLayers: function () {
                var i = [];
                return (this.eachLayer(i.push, i), i);
              },
              setZIndex: function (i) {
                return this.invoke("setZIndex", i);
              },
              getLayerId: function (i) {
                return U(i);
              },
            }),
            Gu = function (i, a) {
              return new Dn(i, a);
            },
            ci = Dn.extend({
              addLayer: function (i) {
                return this.hasLayer(i)
                  ? this
                  : (i.addEventParent(this),
                    Dn.prototype.addLayer.call(this, i),
                    this.fire("layeradd", { layer: i }));
              },
              removeLayer: function (i) {
                return this.hasLayer(i)
                  ? (i in this._layers && (i = this._layers[i]),
                    i.removeEventParent(this),
                    Dn.prototype.removeLayer.call(this, i),
                    this.fire("layerremove", { layer: i }))
                  : this;
              },
              setStyle: function (i) {
                return this.invoke("setStyle", i);
              },
              bringToFront: function () {
                return this.invoke("bringToFront");
              },
              bringToBack: function () {
                return this.invoke("bringToBack");
              },
              getBounds: function () {
                var i = new j();
                for (var a in this._layers) {
                  var o = this._layers[a];
                  i.extend(o.getBounds ? o.getBounds() : o.getLatLng());
                }
                return i;
              },
            }),
            bs = function (i, a) {
              return new ci(i, a);
            },
            fi = yt.extend({
              options: {
                popupAnchor: [0, 0],
                tooltipAnchor: [0, 0],
                crossOrigin: !1,
              },
              initialize: function (i) {
                et(this, i);
              },
              createIcon: function (i) {
                return this._createIcon("icon", i);
              },
              createShadow: function (i) {
                return this._createIcon("shadow", i);
              },
              _createIcon: function (i, a) {
                var o = this._getIconUrl(i);
                if (!o) {
                  if (i === "icon")
                    throw new Error(
                      "iconUrl not set in Icon options (see the docs).",
                    );
                  return null;
                }
                var r = this._createImg(o, a && a.tagName === "IMG" ? a : null);
                return (
                  this._setIconStyles(r, i),
                  (this.options.crossOrigin ||
                    this.options.crossOrigin === "") &&
                    (r.crossOrigin =
                      this.options.crossOrigin === !0
                        ? ""
                        : this.options.crossOrigin),
                  r
                );
              },
              _setIconStyles: function (i, a) {
                var o = this.options,
                  r = o[a + "Size"];
                typeof r == "number" && (r = [r, r]);
                var c = V(r),
                  h = V(
                    (a === "shadow" && o.shadowAnchor) ||
                      o.iconAnchor ||
                      (c && c.divideBy(2, !0)),
                  );
                ((i.className =
                  "leaflet-marker-" + a + " " + (o.className || "")),
                  h &&
                    ((i.style.marginLeft = -h.x + "px"),
                    (i.style.marginTop = -h.y + "px")),
                  c &&
                    ((i.style.width = c.x + "px"),
                    (i.style.height = c.y + "px")));
              },
              _createImg: function (i, a) {
                return (
                  (a = a || document.createElement("img")),
                  (a.src = i),
                  a
                );
              },
              _getIconUrl: function (i) {
                return (
                  ($.retina && this.options[i + "RetinaUrl"]) ||
                  this.options[i + "Url"]
                );
              },
            });
          function Ea(i) {
            return new fi(i);
          }
          var Ma = fi.extend({
              options: {
                iconUrl: "marker-icon.png",
                iconRetinaUrl: "marker-icon-2x.png",
                shadowUrl: "marker-shadow.png",
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                tooltipAnchor: [16, -28],
                shadowSize: [41, 41],
              },
              _getIconUrl: function (i) {
                return (
                  typeof Ma.imagePath != "string" &&
                    (Ma.imagePath = this._detectIconPath()),
                  (this.options.imagePath || Ma.imagePath) +
                    fi.prototype._getIconUrl.call(this, i)
                );
              },
              _stripUrl: function (i) {
                var a = function (o, r, c) {
                  var h = r.exec(o);
                  return h && h[c];
                };
                return (
                  (i = a(i, /^url\((['"])?(.+)\1\)$/, 2)),
                  i && a(i, /^(.*)marker-icon\.png$/, 1)
                );
              },
              _detectIconPath: function () {
                var i = bt("div", "leaflet-default-icon-path", document.body),
                  a = pa(i, "background-image") || pa(i, "backgroundImage");
                if ((document.body.removeChild(i), (a = this._stripUrl(a)), a))
                  return a;
                var o = document.querySelector('link[href$="leaflet.css"]');
                return o ? o.href.substring(0, o.href.length - 11 - 1) : "";
              },
            }),
            La = ri.extend({
              initialize: function (i) {
                this._marker = i;
              },
              addHooks: function () {
                var i = this._marker._icon;
                (this._draggable || (this._draggable = new Ri(i, i, !0)),
                  this._draggable
                    .on(
                      {
                        dragstart: this._onDragStart,
                        predrag: this._onPreDrag,
                        drag: this._onDrag,
                        dragend: this._onDragEnd,
                      },
                      this,
                    )
                    .enable(),
                  ut(i, "leaflet-marker-draggable"));
              },
              removeHooks: function () {
                (this._draggable
                  .off(
                    {
                      dragstart: this._onDragStart,
                      predrag: this._onPreDrag,
                      drag: this._onDrag,
                      dragend: this._onDragEnd,
                    },
                    this,
                  )
                  .disable(),
                  this._marker._icon &&
                    $t(this._marker._icon, "leaflet-marker-draggable"));
              },
              moved: function () {
                return this._draggable && this._draggable._moved;
              },
              _adjustPan: function (i) {
                var a = this._marker,
                  o = a._map,
                  r = this._marker.options.autoPanSpeed,
                  c = this._marker.options.autoPanPadding,
                  h = Bi(a._icon),
                  m = o.getPixelBounds(),
                  y = o.getPixelOrigin(),
                  z = A(
                    m.min._subtract(y).add(c),
                    m.max._subtract(y).subtract(c),
                  );
                if (!z.contains(h)) {
                  var D = V(
                    (Math.max(z.max.x, h.x) - z.max.x) / (m.max.x - z.max.x) -
                      (Math.min(z.min.x, h.x) - z.min.x) / (m.min.x - z.min.x),
                    (Math.max(z.max.y, h.y) - z.max.y) / (m.max.y - z.max.y) -
                      (Math.min(z.min.y, h.y) - z.min.y) / (m.min.y - z.min.y),
                  ).multiplyBy(r);
                  (o.panBy(D, { animate: !1 }),
                    this._draggable._newPos._add(D),
                    this._draggable._startPos._add(D),
                    Vt(a._icon, this._draggable._newPos),
                    this._onDrag(i),
                    (this._panRequest = ot(this._adjustPan.bind(this, i))));
                }
              },
              _onDragStart: function () {
                ((this._oldLatLng = this._marker.getLatLng()),
                  this._marker.closePopup && this._marker.closePopup(),
                  this._marker.fire("movestart").fire("dragstart"));
              },
              _onPreDrag: function (i) {
                this._marker.options.autoPan &&
                  (ht(this._panRequest),
                  (this._panRequest = ot(this._adjustPan.bind(this, i))));
              },
              _onDrag: function (i) {
                var a = this._marker,
                  o = a._shadow,
                  r = Bi(a._icon),
                  c = a._map.layerPointToLatLng(r);
                (o && Vt(o, r),
                  (a._latlng = c),
                  (i.latlng = c),
                  (i.oldLatLng = this._oldLatLng),
                  a.fire("move", i).fire("drag", i));
              },
              _onDragEnd: function (i) {
                (ht(this._panRequest),
                  delete this._oldLatLng,
                  this._marker.fire("moveend").fire("dragend", i));
              },
            }),
            wa = ti.extend({
              options: {
                icon: new Ma(),
                interactive: !0,
                keyboard: !0,
                title: "",
                alt: "Marker",
                zIndexOffset: 0,
                opacity: 1,
                riseOnHover: !1,
                riseOffset: 250,
                pane: "markerPane",
                shadowPane: "shadowPane",
                bubblingMouseEvents: !1,
                autoPanOnFocus: !0,
                draggable: !1,
                autoPan: !1,
                autoPanPadding: [50, 50],
                autoPanSpeed: 10,
              },
              initialize: function (i, a) {
                (et(this, a), (this._latlng = Q(i)));
              },
              onAdd: function (i) {
                ((this._zoomAnimated =
                  this._zoomAnimated && i.options.markerZoomAnimation),
                  this._zoomAnimated &&
                    i.on("zoomanim", this._animateZoom, this),
                  this._initIcon(),
                  this.update());
              },
              onRemove: function (i) {
                (this.dragging &&
                  this.dragging.enabled() &&
                  ((this.options.draggable = !0), this.dragging.removeHooks()),
                  delete this.dragging,
                  this._zoomAnimated &&
                    i.off("zoomanim", this._animateZoom, this),
                  this._removeIcon(),
                  this._removeShadow());
              },
              getEvents: function () {
                return { zoom: this.update, viewreset: this.update };
              },
              getLatLng: function () {
                return this._latlng;
              },
              setLatLng: function (i) {
                var a = this._latlng;
                return (
                  (this._latlng = Q(i)),
                  this.update(),
                  this.fire("move", { oldLatLng: a, latlng: this._latlng })
                );
              },
              setZIndexOffset: function (i) {
                return ((this.options.zIndexOffset = i), this.update());
              },
              getIcon: function () {
                return this.options.icon;
              },
              setIcon: function (i) {
                return (
                  (this.options.icon = i),
                  this._map && (this._initIcon(), this.update()),
                  this._popup &&
                    this.bindPopup(this._popup, this._popup.options),
                  this
                );
              },
              getElement: function () {
                return this._icon;
              },
              update: function () {
                if (this._icon && this._map) {
                  var i = this._map.latLngToLayerPoint(this._latlng).round();
                  this._setPos(i);
                }
                return this;
              },
              _initIcon: function () {
                var i = this.options,
                  a =
                    "leaflet-zoom-" +
                    (this._zoomAnimated ? "animated" : "hide"),
                  o = i.icon.createIcon(this._icon),
                  r = !1;
                (o !== this._icon &&
                  (this._icon && this._removeIcon(),
                  (r = !0),
                  i.title && (o.title = i.title),
                  o.tagName === "IMG" && (o.alt = i.alt || "")),
                  ut(o, a),
                  i.keyboard &&
                    ((o.tabIndex = "0"), o.setAttribute("role", "button")),
                  (this._icon = o),
                  i.riseOnHover &&
                    this.on({
                      mouseover: this._bringToFront,
                      mouseout: this._resetZIndex,
                    }),
                  this.options.autoPanOnFocus &&
                    lt(o, "focus", this._panOnFocus, this));
                var c = i.icon.createShadow(this._shadow),
                  h = !1;
                (c !== this._shadow && (this._removeShadow(), (h = !0)),
                  c && (ut(c, a), (c.alt = "")),
                  (this._shadow = c),
                  i.opacity < 1 && this._updateOpacity(),
                  r && this.getPane().appendChild(this._icon),
                  this._initInteraction(),
                  c &&
                    h &&
                    this.getPane(i.shadowPane).appendChild(this._shadow));
              },
              _removeIcon: function () {
                (this.options.riseOnHover &&
                  this.off({
                    mouseover: this._bringToFront,
                    mouseout: this._resetZIndex,
                  }),
                  this.options.autoPanOnFocus &&
                    Rt(this._icon, "focus", this._panOnFocus, this),
                  qt(this._icon),
                  this.removeInteractiveTarget(this._icon),
                  (this._icon = null));
              },
              _removeShadow: function () {
                (this._shadow && qt(this._shadow), (this._shadow = null));
              },
              _setPos: function (i) {
                (this._icon && Vt(this._icon, i),
                  this._shadow && Vt(this._shadow, i),
                  (this._zIndex = i.y + this.options.zIndexOffset),
                  this._resetZIndex());
              },
              _updateZIndex: function (i) {
                this._icon && (this._icon.style.zIndex = this._zIndex + i);
              },
              _animateZoom: function (i) {
                var a = this._map
                  ._latLngToNewLayerPoint(this._latlng, i.zoom, i.center)
                  .round();
                this._setPos(a);
              },
              _initInteraction: function () {
                if (
                  this.options.interactive &&
                  (ut(this._icon, "leaflet-interactive"),
                  this.addInteractiveTarget(this._icon),
                  La)
                ) {
                  var i = this.options.draggable;
                  (this.dragging &&
                    ((i = this.dragging.enabled()), this.dragging.disable()),
                    (this.dragging = new La(this)),
                    i && this.dragging.enable());
                }
              },
              setOpacity: function (i) {
                return (
                  (this.options.opacity = i),
                  this._map && this._updateOpacity(),
                  this
                );
              },
              _updateOpacity: function () {
                var i = this.options.opacity;
                (this._icon && Jt(this._icon, i),
                  this._shadow && Jt(this._shadow, i));
              },
              _bringToFront: function () {
                this._updateZIndex(this.options.riseOffset);
              },
              _resetZIndex: function () {
                this._updateZIndex(0);
              },
              _panOnFocus: function () {
                var i = this._map;
                if (i) {
                  var a = this.options.icon.options,
                    o = a.iconSize ? V(a.iconSize) : V(0, 0),
                    r = a.iconAnchor ? V(a.iconAnchor) : V(0, 0);
                  i.panInside(this._latlng, {
                    paddingTopLeft: r,
                    paddingBottomRight: o.subtract(r),
                  });
                }
              },
              _getPopupAnchor: function () {
                return this.options.icon.options.popupAnchor;
              },
              _getTooltipAnchor: function () {
                return this.options.icon.options.tooltipAnchor;
              },
            });
          function xs(i, a) {
            return new wa(i, a);
          }
          var hi = ti.extend({
              options: {
                stroke: !0,
                color: "#3388ff",
                weight: 3,
                opacity: 1,
                lineCap: "round",
                lineJoin: "round",
                dashArray: null,
                dashOffset: null,
                fill: !1,
                fillColor: null,
                fillOpacity: 0.2,
                fillRule: "evenodd",
                interactive: !0,
                bubblingMouseEvents: !0,
              },
              beforeAdd: function (i) {
                this._renderer = i.getRenderer(this);
              },
              onAdd: function () {
                (this._renderer._initPath(this),
                  this._reset(),
                  this._renderer._addPath(this));
              },
              onRemove: function () {
                this._renderer._removePath(this);
              },
              redraw: function () {
                return (this._map && this._renderer._updatePath(this), this);
              },
              setStyle: function (i) {
                return (
                  et(this, i),
                  this._renderer &&
                    (this._renderer._updateStyle(this),
                    this.options.stroke &&
                      i &&
                      Object.prototype.hasOwnProperty.call(i, "weight") &&
                      this._updateBounds()),
                  this
                );
              },
              bringToFront: function () {
                return (
                  this._renderer && this._renderer._bringToFront(this),
                  this
                );
              },
              bringToBack: function () {
                return (
                  this._renderer && this._renderer._bringToBack(this),
                  this
                );
              },
              getElement: function () {
                return this._path;
              },
              _reset: function () {
                (this._project(), this._update());
              },
              _clickTolerance: function () {
                return (
                  (this.options.stroke ? this.options.weight / 2 : 0) +
                  (this._renderer.options.tolerance || 0)
                );
              },
            }),
            Bn = hi.extend({
              options: { fill: !0, radius: 10 },
              initialize: function (i, a) {
                (et(this, a),
                  (this._latlng = Q(i)),
                  (this._radius = this.options.radius));
              },
              setLatLng: function (i) {
                var a = this._latlng;
                return (
                  (this._latlng = Q(i)),
                  this.redraw(),
                  this.fire("move", { oldLatLng: a, latlng: this._latlng })
                );
              },
              getLatLng: function () {
                return this._latlng;
              },
              setRadius: function (i) {
                return (
                  (this.options.radius = this._radius = i),
                  this.redraw()
                );
              },
              getRadius: function () {
                return this._radius;
              },
              setStyle: function (i) {
                var a = (i && i.radius) || this._radius;
                return (
                  hi.prototype.setStyle.call(this, i),
                  this.setRadius(a),
                  this
                );
              },
              _project: function () {
                ((this._point = this._map.latLngToLayerPoint(this._latlng)),
                  this._updateBounds());
              },
              _updateBounds: function () {
                var i = this._radius,
                  a = this._radiusY || i,
                  o = this._clickTolerance(),
                  r = [i + o, a + o];
                this._pxBounds = new p(
                  this._point.subtract(r),
                  this._point.add(r),
                );
              },
              _update: function () {
                this._map && this._updatePath();
              },
              _updatePath: function () {
                this._renderer._updateCircle(this);
              },
              _empty: function () {
                return (
                  this._radius &&
                  !this._renderer._bounds.intersects(this._pxBounds)
                );
              },
              _containsPoint: function (i) {
                return (
                  i.distanceTo(this._point) <=
                  this._radius + this._clickTolerance()
                );
              },
            });
          function Ss(i, a) {
            return new Bn(i, a);
          }
          var cl = Bn.extend({
            initialize: function (i, a, o) {
              if (
                (typeof a == "number" && (a = G({}, o, { radius: a })),
                et(this, a),
                (this._latlng = Q(i)),
                isNaN(this.options.radius))
              )
                throw new Error("Circle radius cannot be NaN");
              this._mRadius = this.options.radius;
            },
            setRadius: function (i) {
              return ((this._mRadius = i), this.redraw());
            },
            getRadius: function () {
              return this._mRadius;
            },
            getBounds: function () {
              var i = [this._radius, this._radiusY || this._radius];
              return new j(
                this._map.layerPointToLatLng(this._point.subtract(i)),
                this._map.layerPointToLatLng(this._point.add(i)),
              );
            },
            setStyle: hi.prototype.setStyle,
            _project: function () {
              var i = this._latlng.lng,
                a = this._latlng.lat,
                o = this._map,
                r = o.options.crs;
              if (r.distance === Ft.distance) {
                var c = Math.PI / 180,
                  h = this._mRadius / Ft.R / c,
                  m = o.project([a + h, i]),
                  y = o.project([a - h, i]),
                  z = m.add(y).divideBy(2),
                  D = o.unproject(z).lat,
                  k =
                    Math.acos(
                      (Math.cos(h * c) - Math.sin(a * c) * Math.sin(D * c)) /
                        (Math.cos(a * c) * Math.cos(D * c)),
                    ) / c;
                ((isNaN(k) || k === 0) &&
                  (k = h / Math.cos((Math.PI / 180) * a)),
                  (this._point = z.subtract(o.getPixelOrigin())),
                  (this._radius = isNaN(k) ? 0 : z.x - o.project([D, i - k]).x),
                  (this._radiusY = z.y - m.y));
              } else {
                var tt = r.unproject(
                  r.project(this._latlng).subtract([this._mRadius, 0]),
                );
                ((this._point = o.latLngToLayerPoint(this._latlng)),
                  (this._radius = this._point.x - o.latLngToLayerPoint(tt).x));
              }
              this._updateBounds();
            },
          });
          function Ts(i, a, o) {
            return new cl(i, a, o);
          }
          var zi = hi.extend({
            options: { smoothFactor: 1, noClip: !1 },
            initialize: function (i, a) {
              (et(this, a), this._setLatLngs(i));
            },
            getLatLngs: function () {
              return this._latlngs;
            },
            setLatLngs: function (i) {
              return (this._setLatLngs(i), this.redraw());
            },
            isEmpty: function () {
              return !this._latlngs.length;
            },
            closestLayerPoint: function (i) {
              for (
                var a = 1 / 0,
                  o = null,
                  r = za,
                  c,
                  h,
                  m = 0,
                  y = this._parts.length;
                m < y;
                m++
              )
                for (var z = this._parts[m], D = 1, k = z.length; D < k; D++) {
                  ((c = z[D - 1]), (h = z[D]));
                  var tt = r(i, c, h, !0);
                  tt < a && ((a = tt), (o = r(i, c, h)));
                }
              return (o && (o.distance = Math.sqrt(a)), o);
            },
            getCenter: function () {
              if (!this._map)
                throw new Error(
                  "Must add layer to map before using getCenter()",
                );
              return Cn(this._defaultShape(), this._map.options.crs);
            },
            getBounds: function () {
              return this._bounds;
            },
            addLatLng: function (i, a) {
              return (
                (a = a || this._defaultShape()),
                (i = Q(i)),
                a.push(i),
                this._bounds.extend(i),
                this.redraw()
              );
            },
            _setLatLngs: function (i) {
              ((this._bounds = new j()),
                (this._latlngs = this._convertLatLngs(i)));
            },
            _defaultShape: function () {
              return Ye(this._latlngs) ? this._latlngs : this._latlngs[0];
            },
            _convertLatLngs: function (i) {
              for (var a = [], o = Ye(i), r = 0, c = i.length; r < c; r++)
                o
                  ? ((a[r] = Q(i[r])), this._bounds.extend(a[r]))
                  : (a[r] = this._convertLatLngs(i[r]));
              return a;
            },
            _project: function () {
              var i = new p();
              ((this._rings = []),
                this._projectLatlngs(this._latlngs, this._rings, i),
                this._bounds.isValid() &&
                  i.isValid() &&
                  ((this._rawPxBounds = i), this._updateBounds()));
            },
            _updateBounds: function () {
              var i = this._clickTolerance(),
                a = new H(i, i);
              this._rawPxBounds &&
                (this._pxBounds = new p([
                  this._rawPxBounds.min.subtract(a),
                  this._rawPxBounds.max.add(a),
                ]));
            },
            _projectLatlngs: function (i, a, o) {
              var r = i[0] instanceof P,
                c = i.length,
                h,
                m;
              if (r) {
                for (m = [], h = 0; h < c; h++)
                  ((m[h] = this._map.latLngToLayerPoint(i[h])), o.extend(m[h]));
                a.push(m);
              } else for (h = 0; h < c; h++) this._projectLatlngs(i[h], a, o);
            },
            _clipPoints: function () {
              var i = this._renderer._bounds;
              if (
                ((this._parts = []),
                !(!this._pxBounds || !this._pxBounds.intersects(i)))
              ) {
                if (this.options.noClip) {
                  this._parts = this._rings;
                  return;
                }
                var a = this._parts,
                  o,
                  r,
                  c,
                  h,
                  m,
                  y,
                  z;
                for (o = 0, c = 0, h = this._rings.length; o < h; o++)
                  for (z = this._rings[o], r = 0, m = z.length; r < m - 1; r++)
                    ((y = vs(z[r], z[r + 1], i, r, !0)),
                      y &&
                        ((a[c] = a[c] || []),
                        a[c].push(y[0]),
                        (y[1] !== z[r + 1] || r === m - 2) &&
                          (a[c].push(y[1]), c++)));
              }
            },
            _simplifyPoints: function () {
              for (
                var i = this._parts,
                  a = this.options.smoothFactor,
                  o = 0,
                  r = i.length;
                o < r;
                o++
              )
                i[o] = ds(i[o], a);
            },
            _update: function () {
              this._map &&
                (this._clipPoints(),
                this._simplifyPoints(),
                this._updatePath());
            },
            _updatePath: function () {
              this._renderer._updatePoly(this);
            },
            _containsPoint: function (i, a) {
              var o,
                r,
                c,
                h,
                m,
                y,
                z = this._clickTolerance();
              if (!this._pxBounds || !this._pxBounds.contains(i)) return !1;
              for (o = 0, h = this._parts.length; o < h; o++)
                for (
                  y = this._parts[o], r = 0, m = y.length, c = m - 1;
                  r < m;
                  c = r++
                )
                  if (!(!a && r === 0) && ms(i, y[c], y[r]) <= z) return !0;
              return !1;
            },
          });
          function Yu(i, a) {
            return new zi(i, a);
          }
          zi._flat = sl;
          var Zn = zi.extend({
            options: { fill: !0 },
            isEmpty: function () {
              return !this._latlngs.length || !this._latlngs[0].length;
            },
            getCenter: function () {
              if (!this._map)
                throw new Error(
                  "Must add layer to map before using getCenter()",
                );
              return hs(this._defaultShape(), this._map.options.crs);
            },
            _convertLatLngs: function (i) {
              var a = zi.prototype._convertLatLngs.call(this, i),
                o = a.length;
              return (
                o >= 2 && a[0] instanceof P && a[0].equals(a[o - 1]) && a.pop(),
                a
              );
            },
            _setLatLngs: function (i) {
              (zi.prototype._setLatLngs.call(this, i),
                Ye(this._latlngs) && (this._latlngs = [this._latlngs]));
            },
            _defaultShape: function () {
              return Ye(this._latlngs[0])
                ? this._latlngs[0]
                : this._latlngs[0][0];
            },
            _clipPoints: function () {
              var i = this._renderer._bounds,
                a = this.options.weight,
                o = new H(a, a);
              if (
                ((i = new p(i.min.subtract(o), i.max.add(o))),
                (this._parts = []),
                !(!this._pxBounds || !this._pxBounds.intersects(i)))
              ) {
                if (this.options.noClip) {
                  this._parts = this._rings;
                  return;
                }
                for (var r = 0, c = this._rings.length, h; r < c; r++)
                  ((h = fs(this._rings[r], i, !0)),
                    h.length && this._parts.push(h));
              }
            },
            _updatePath: function () {
              this._renderer._updatePoly(this, !0);
            },
            _containsPoint: function (i) {
              var a = !1,
                o,
                r,
                c,
                h,
                m,
                y,
                z,
                D;
              if (!this._pxBounds || !this._pxBounds.contains(i)) return !1;
              for (h = 0, z = this._parts.length; h < z; h++)
                for (
                  o = this._parts[h], m = 0, D = o.length, y = D - 1;
                  m < D;
                  y = m++
                )
                  ((r = o[m]),
                    (c = o[y]),
                    r.y > i.y != c.y > i.y &&
                      i.x < ((c.x - r.x) * (i.y - r.y)) / (c.y - r.y) + r.x &&
                      (a = !a));
              return a || zi.prototype._containsPoint.call(this, i, !0);
            },
          });
          function Xu(i, a) {
            return new Zn(i, a);
          }
          var Ei = ci.extend({
            initialize: function (i, a) {
              (et(this, a), (this._layers = {}), i && this.addData(i));
            },
            addData: function (i) {
              var a = ct(i) ? i : i.features,
                o,
                r,
                c;
              if (a) {
                for (o = 0, r = a.length; o < r; o++)
                  ((c = a[o]),
                    (c.geometries ||
                      c.geometry ||
                      c.features ||
                      c.coordinates) &&
                      this.addData(c));
                return this;
              }
              var h = this.options;
              if (h.filter && !h.filter(i)) return this;
              var m = Te(i, h);
              return m
                ? ((m.feature = dl(i)),
                  (m.defaultOptions = m.options),
                  this.resetStyle(m),
                  h.onEachFeature && h.onEachFeature(i, m),
                  this.addLayer(m))
                : this;
            },
            resetStyle: function (i) {
              return i === void 0
                ? this.eachLayer(this.resetStyle, this)
                : ((i.options = G({}, i.defaultOptions)),
                  this._setLayerStyle(i, this.options.style),
                  this);
            },
            setStyle: function (i) {
              return this.eachLayer(function (a) {
                this._setLayerStyle(a, i);
              }, this);
            },
            _setLayerStyle: function (i, a) {
              i.setStyle &&
                (typeof a == "function" && (a = a(i.feature)), i.setStyle(a));
            },
          });
          function Te(i, a) {
            var o = i.type === "Feature" ? i.geometry : i,
              r = o ? o.coordinates : null,
              c = [],
              h = a && a.pointToLayer,
              m = (a && a.coordsToLatLng) || fl,
              y,
              z,
              D,
              k;
            if (!r && !o) return null;
            switch (o.type) {
              case "Point":
                return ((y = m(r)), Rn(h, i, y, a));
              case "MultiPoint":
                for (D = 0, k = r.length; D < k; D++)
                  ((y = m(r[D])), c.push(Rn(h, i, y, a)));
                return new ci(c);
              case "LineString":
              case "MultiLineString":
                return (
                  (z = Aa(r, o.type === "LineString" ? 0 : 1, m)),
                  new zi(z, a)
                );
              case "Polygon":
              case "MultiPolygon":
                return (
                  (z = Aa(r, o.type === "Polygon" ? 1 : 2, m)),
                  new Zn(z, a)
                );
              case "GeometryCollection":
                for (D = 0, k = o.geometries.length; D < k; D++) {
                  var tt = Te(
                    {
                      geometry: o.geometries[D],
                      type: "Feature",
                      properties: i.properties,
                    },
                    a,
                  );
                  tt && c.push(tt);
                }
                return new ci(c);
              case "FeatureCollection":
                for (D = 0, k = o.features.length; D < k; D++) {
                  var mt = Te(o.features[D], a);
                  mt && c.push(mt);
                }
                return new ci(c);
              default:
                throw new Error("Invalid GeoJSON object.");
            }
          }
          function Rn(i, a, o, r) {
            return i ? i(a, o) : new wa(o, r && r.markersInheritOptions && r);
          }
          function fl(i) {
            return new P(i[1], i[0], i[2]);
          }
          function Aa(i, a, o) {
            for (var r = [], c = 0, h = i.length, m; c < h; c++)
              ((m = a ? Aa(i[c], a - 1, o) : (o || fl)(i[c])), r.push(m));
            return r;
          }
          function hl(i, a) {
            return (
              (i = Q(i)),
              i.alt !== void 0
                ? [st(i.lng, a), st(i.lat, a), st(i.alt, a)]
                : [st(i.lng, a), st(i.lat, a)]
            );
          }
          function Oa(i, a, o, r) {
            for (var c = [], h = 0, m = i.length; h < m; h++)
              c.push(a ? Oa(i[h], Ye(i[h]) ? 0 : a - 1, o, r) : hl(i[h], r));
            return (!a && o && c.length > 0 && c.push(c[0].slice()), c);
          }
          function Ui(i, a) {
            return i.feature ? G({}, i.feature, { geometry: a }) : dl(a);
          }
          function dl(i) {
            return i.type === "Feature" || i.type === "FeatureCollection"
              ? i
              : { type: "Feature", properties: {}, geometry: i };
          }
          var Hi = {
            toGeoJSON: function (i) {
              return Ui(this, {
                type: "Point",
                coordinates: hl(this.getLatLng(), i),
              });
            },
          };
          (wa.include(Hi),
            cl.include(Hi),
            Bn.include(Hi),
            zi.include({
              toGeoJSON: function (i) {
                var a = !Ye(this._latlngs),
                  o = Oa(this._latlngs, a ? 1 : 0, !1, i);
                return Ui(this, {
                  type: (a ? "Multi" : "") + "LineString",
                  coordinates: o,
                });
              },
            }),
            Zn.include({
              toGeoJSON: function (i) {
                var a = !Ye(this._latlngs),
                  o = a && !Ye(this._latlngs[0]),
                  r = Oa(this._latlngs, o ? 2 : a ? 1 : 0, !0, i);
                return (
                  a || (r = [r]),
                  Ui(this, {
                    type: (o ? "Multi" : "") + "Polygon",
                    coordinates: r,
                  })
                );
              },
            }),
            Dn.include({
              toMultiPoint: function (i) {
                var a = [];
                return (
                  this.eachLayer(function (o) {
                    a.push(o.toGeoJSON(i).geometry.coordinates);
                  }),
                  Ui(this, { type: "MultiPoint", coordinates: a })
                );
              },
              toGeoJSON: function (i) {
                var a =
                  this.feature &&
                  this.feature.geometry &&
                  this.feature.geometry.type;
                if (a === "MultiPoint") return this.toMultiPoint(i);
                var o = a === "GeometryCollection",
                  r = [];
                return (
                  this.eachLayer(function (c) {
                    if (c.toGeoJSON) {
                      var h = c.toGeoJSON(i);
                      if (o) r.push(h.geometry);
                      else {
                        var m = dl(h);
                        m.type === "FeatureCollection"
                          ? r.push.apply(r, m.features)
                          : r.push(m);
                      }
                    }
                  }),
                  o
                    ? Ui(this, { geometries: r, type: "GeometryCollection" })
                    : { type: "FeatureCollection", features: r }
                );
              },
            }));
          function ml(i, a) {
            return new Ei(i, a);
          }
          var Ca = ml,
            Un = ti.extend({
              options: {
                opacity: 1,
                alt: "",
                interactive: !1,
                crossOrigin: !1,
                errorOverlayUrl: "",
                zIndex: 1,
                className: "",
              },
              initialize: function (i, a, o) {
                ((this._url = i), (this._bounds = Y(a)), et(this, o));
              },
              onAdd: function () {
                (this._image ||
                  (this._initImage(),
                  this.options.opacity < 1 && this._updateOpacity()),
                  this.options.interactive &&
                    (ut(this._image, "leaflet-interactive"),
                    this.addInteractiveTarget(this._image)),
                  this.getPane().appendChild(this._image),
                  this._reset());
              },
              onRemove: function () {
                (qt(this._image),
                  this.options.interactive &&
                    this.removeInteractiveTarget(this._image));
              },
              setOpacity: function (i) {
                return (
                  (this.options.opacity = i),
                  this._image && this._updateOpacity(),
                  this
                );
              },
              setStyle: function (i) {
                return (i.opacity && this.setOpacity(i.opacity), this);
              },
              bringToFront: function () {
                return (this._map && ge(this._image), this);
              },
              bringToBack: function () {
                return (this._map && en(this._image), this);
              },
              setUrl: function (i) {
                return (
                  (this._url = i),
                  this._image && (this._image.src = i),
                  this
                );
              },
              setBounds: function (i) {
                return (
                  (this._bounds = Y(i)),
                  this._map && this._reset(),
                  this
                );
              },
              getEvents: function () {
                var i = { zoom: this._reset, viewreset: this._reset };
                return (
                  this._zoomAnimated && (i.zoomanim = this._animateZoom),
                  i
                );
              },
              setZIndex: function (i) {
                return ((this.options.zIndex = i), this._updateZIndex(), this);
              },
              getBounds: function () {
                return this._bounds;
              },
              getElement: function () {
                return this._image;
              },
              _initImage: function () {
                var i = this._url.tagName === "IMG",
                  a = (this._image = i ? this._url : bt("img"));
                if (
                  (ut(a, "leaflet-image-layer"),
                  this._zoomAnimated && ut(a, "leaflet-zoom-animated"),
                  this.options.className && ut(a, this.options.className),
                  (a.onselectstart = X),
                  (a.onmousemove = X),
                  (a.onload = J(this.fire, this, "load")),
                  (a.onerror = J(this._overlayOnError, this, "error")),
                  (this.options.crossOrigin ||
                    this.options.crossOrigin === "") &&
                    (a.crossOrigin =
                      this.options.crossOrigin === !0
                        ? ""
                        : this.options.crossOrigin),
                  this.options.zIndex && this._updateZIndex(),
                  i)
                ) {
                  this._url = a.src;
                  return;
                }
                ((a.src = this._url), (a.alt = this.options.alt));
              },
              _animateZoom: function (i) {
                var a = this._map.getZoomScale(i.zoom),
                  o = this._map._latLngBoundsToNewLayerBounds(
                    this._bounds,
                    i.zoom,
                    i.center,
                  ).min;
                xi(this._image, o, a);
              },
              _reset: function () {
                var i = this._image,
                  a = new p(
                    this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
                    this._map.latLngToLayerPoint(this._bounds.getSouthEast()),
                  ),
                  o = a.getSize();
                (Vt(i, a.min),
                  (i.style.width = o.x + "px"),
                  (i.style.height = o.y + "px"));
              },
              _updateOpacity: function () {
                Jt(this._image, this.options.opacity);
              },
              _updateZIndex: function () {
                this._image &&
                  this.options.zIndex !== void 0 &&
                  this.options.zIndex !== null &&
                  (this._image.style.zIndex = this.options.zIndex);
              },
              _overlayOnError: function () {
                this.fire("error");
                var i = this.options.errorOverlayUrl;
                i &&
                  this._url !== i &&
                  ((this._url = i), (this._image.src = i));
              },
              getCenter: function () {
                return this._bounds.getCenter();
              },
            }),
            zs = function (i, a, o) {
              return new Un(i, a, o);
            },
            ji = Un.extend({
              options: {
                autoplay: !0,
                loop: !0,
                keepAspectRatio: !0,
                muted: !1,
                playsInline: !0,
              },
              _initImage: function () {
                var i = this._url.tagName === "VIDEO",
                  a = (this._image = i ? this._url : bt("video"));
                if (
                  (ut(a, "leaflet-image-layer"),
                  this._zoomAnimated && ut(a, "leaflet-zoom-animated"),
                  this.options.className && ut(a, this.options.className),
                  (a.onselectstart = X),
                  (a.onmousemove = X),
                  (a.onloadeddata = J(this.fire, this, "load")),
                  i)
                ) {
                  for (
                    var o = a.getElementsByTagName("source"), r = [], c = 0;
                    c < o.length;
                    c++
                  )
                    r.push(o[c].src);
                  this._url = o.length > 0 ? r : [a.src];
                  return;
                }
                (ct(this._url) || (this._url = [this._url]),
                  !this.options.keepAspectRatio &&
                    Object.prototype.hasOwnProperty.call(
                      a.style,
                      "objectFit",
                    ) &&
                    (a.style.objectFit = "fill"),
                  (a.autoplay = !!this.options.autoplay),
                  (a.loop = !!this.options.loop),
                  (a.muted = !!this.options.muted),
                  (a.playsInline = !!this.options.playsInline));
                for (var h = 0; h < this._url.length; h++) {
                  var m = bt("source");
                  ((m.src = this._url[h]), a.appendChild(m));
                }
              },
            });
          function Hn(i, a, o) {
            return new ji(i, a, o);
          }
          var _l = Un.extend({
            _initImage: function () {
              var i = (this._image = this._url);
              (ut(i, "leaflet-image-layer"),
                this._zoomAnimated && ut(i, "leaflet-zoom-animated"),
                this.options.className && ut(i, this.options.className),
                (i.onselectstart = X),
                (i.onmousemove = X));
            },
          });
          function Es(i, a, o) {
            return new _l(i, a, o);
          }
          var ze = ti.extend({
            options: {
              interactive: !1,
              offset: [0, 0],
              className: "",
              pane: void 0,
              content: "",
            },
            initialize: function (i, a) {
              (i && (i instanceof P || ct(i))
                ? ((this._latlng = Q(i)), et(this, a))
                : (et(this, i), (this._source = a)),
                this.options.content && (this._content = this.options.content));
            },
            openOn: function (i) {
              return (
                (i = arguments.length ? i : this._source._map),
                i.hasLayer(this) || i.addLayer(this),
                this
              );
            },
            close: function () {
              return (this._map && this._map.removeLayer(this), this);
            },
            toggle: function (i) {
              return (
                this._map
                  ? this.close()
                  : (arguments.length ? (this._source = i) : (i = this._source),
                    this._prepareOpen(),
                    this.openOn(i._map)),
                this
              );
            },
            onAdd: function (i) {
              ((this._zoomAnimated = i._zoomAnimated),
                this._container || this._initLayout(),
                i._fadeAnimated && Jt(this._container, 0),
                clearTimeout(this._removeTimeout),
                this.getPane().appendChild(this._container),
                this.update(),
                i._fadeAnimated && Jt(this._container, 1),
                this.bringToFront(),
                this.options.interactive &&
                  (ut(this._container, "leaflet-interactive"),
                  this.addInteractiveTarget(this._container)));
            },
            onRemove: function (i) {
              (i._fadeAnimated
                ? (Jt(this._container, 0),
                  (this._removeTimeout = setTimeout(
                    J(qt, void 0, this._container),
                    200,
                  )))
                : qt(this._container),
                this.options.interactive &&
                  ($t(this._container, "leaflet-interactive"),
                  this.removeInteractiveTarget(this._container)));
            },
            getLatLng: function () {
              return this._latlng;
            },
            setLatLng: function (i) {
              return (
                (this._latlng = Q(i)),
                this._map && (this._updatePosition(), this._adjustPan()),
                this
              );
            },
            getContent: function () {
              return this._content;
            },
            setContent: function (i) {
              return ((this._content = i), this.update(), this);
            },
            getElement: function () {
              return this._container;
            },
            update: function () {
              this._map &&
                ((this._container.style.visibility = "hidden"),
                this._updateContent(),
                this._updateLayout(),
                this._updatePosition(),
                (this._container.style.visibility = ""),
                this._adjustPan());
            },
            getEvents: function () {
              var i = {
                zoom: this._updatePosition,
                viewreset: this._updatePosition,
              };
              return (
                this._zoomAnimated && (i.zoomanim = this._animateZoom),
                i
              );
            },
            isOpen: function () {
              return !!this._map && this._map.hasLayer(this);
            },
            bringToFront: function () {
              return (this._map && ge(this._container), this);
            },
            bringToBack: function () {
              return (this._map && en(this._container), this);
            },
            _prepareOpen: function (i) {
              var a = this._source;
              if (!a._map) return !1;
              if (a instanceof ci) {
                a = null;
                var o = this._source._layers;
                for (var r in o)
                  if (o[r]._map) {
                    a = o[r];
                    break;
                  }
                if (!a) return !1;
                this._source = a;
              }
              if (!i)
                if (a.getCenter) i = a.getCenter();
                else if (a.getLatLng) i = a.getLatLng();
                else if (a.getBounds) i = a.getBounds().getCenter();
                else throw new Error("Unable to get source layer LatLng.");
              return (this.setLatLng(i), this._map && this.update(), !0);
            },
            _updateContent: function () {
              if (this._content) {
                var i = this._contentNode,
                  a =
                    typeof this._content == "function"
                      ? this._content(this._source || this)
                      : this._content;
                if (typeof a == "string") i.innerHTML = a;
                else {
                  for (; i.hasChildNodes(); ) i.removeChild(i.firstChild);
                  i.appendChild(a);
                }
                this.fire("contentupdate");
              }
            },
            _updatePosition: function () {
              if (this._map) {
                var i = this._map.latLngToLayerPoint(this._latlng),
                  a = V(this.options.offset),
                  o = this._getAnchor();
                this._zoomAnimated
                  ? Vt(this._container, i.add(o))
                  : (a = a.add(i).add(o));
                var r = (this._containerBottom = -a.y),
                  c = (this._containerLeft =
                    -Math.round(this._containerWidth / 2) + a.x);
                ((this._container.style.bottom = r + "px"),
                  (this._container.style.left = c + "px"));
              }
            },
            _getAnchor: function () {
              return [0, 0];
            },
          });
          (zt.include({
            _initOverlay: function (i, a, o, r) {
              var c = a;
              return (
                c instanceof i || (c = new i(r).setContent(a)),
                o && c.setLatLng(o),
                c
              );
            },
          }),
            ti.include({
              _initOverlay: function (i, a, o, r) {
                var c = o;
                return (
                  c instanceof i
                    ? (et(c, r), (c._source = this))
                    : ((c = a && !r ? a : new i(r, this)), c.setContent(o)),
                  c
                );
              },
            }));
          var Na = ze.extend({
              options: {
                pane: "popupPane",
                offset: [0, 7],
                maxWidth: 300,
                minWidth: 50,
                maxHeight: null,
                autoPan: !0,
                autoPanPaddingTopLeft: null,
                autoPanPaddingBottomRight: null,
                autoPanPadding: [5, 5],
                keepInView: !1,
                closeButton: !0,
                autoClose: !0,
                closeOnEscapeKey: !0,
                className: "",
              },
              openOn: function (i) {
                return (
                  (i = arguments.length ? i : this._source._map),
                  !i.hasLayer(this) &&
                    i._popup &&
                    i._popup.options.autoClose &&
                    i.removeLayer(i._popup),
                  (i._popup = this),
                  ze.prototype.openOn.call(this, i)
                );
              },
              onAdd: function (i) {
                (ze.prototype.onAdd.call(this, i),
                  i.fire("popupopen", { popup: this }),
                  this._source &&
                    (this._source.fire("popupopen", { popup: this }, !0),
                    this._source instanceof hi ||
                      this._source.on("preclick", $e)));
              },
              onRemove: function (i) {
                (ze.prototype.onRemove.call(this, i),
                  i.fire("popupclose", { popup: this }),
                  this._source &&
                    (this._source.fire("popupclose", { popup: this }, !0),
                    this._source instanceof hi ||
                      this._source.off("preclick", $e)));
              },
              getEvents: function () {
                var i = ze.prototype.getEvents.call(this);
                return (
                  (this.options.closeOnClick !== void 0
                    ? this.options.closeOnClick
                    : this._map.options.closePopupOnClick) &&
                    (i.preclick = this.close),
                  this.options.keepInView && (i.moveend = this._adjustPan),
                  i
                );
              },
              _initLayout: function () {
                var i = "leaflet-popup",
                  a = (this._container = bt(
                    "div",
                    i +
                      " " +
                      (this.options.className || "") +
                      " leaflet-zoom-animated",
                  )),
                  o = (this._wrapper = bt("div", i + "-content-wrapper", a));
                if (
                  ((this._contentNode = bt("div", i + "-content", o)),
                  an(a),
                  ui(this._contentNode),
                  lt(a, "contextmenu", $e),
                  (this._tipContainer = bt("div", i + "-tip-container", a)),
                  (this._tip = bt("div", i + "-tip", this._tipContainer)),
                  this.options.closeButton)
                ) {
                  var r = (this._closeButton = bt("a", i + "-close-button", a));
                  (r.setAttribute("role", "button"),
                    r.setAttribute("aria-label", "Close popup"),
                    (r.href = "#close"),
                    (r.innerHTML = '<span aria-hidden="true">&#215;</span>'),
                    lt(
                      r,
                      "click",
                      function (c) {
                        (ie(c), this.close());
                      },
                      this,
                    ));
                }
              },
              _updateLayout: function () {
                var i = this._contentNode,
                  a = i.style;
                ((a.width = ""), (a.whiteSpace = "nowrap"));
                var o = i.offsetWidth;
                ((o = Math.min(o, this.options.maxWidth)),
                  (o = Math.max(o, this.options.minWidth)),
                  (a.width = o + 1 + "px"),
                  (a.whiteSpace = ""),
                  (a.height = ""));
                var r = i.offsetHeight,
                  c = this.options.maxHeight,
                  h = "leaflet-popup-scrolled";
                (c && r > c ? ((a.height = c + "px"), ut(i, h)) : $t(i, h),
                  (this._containerWidth = this._container.offsetWidth));
              },
              _animateZoom: function (i) {
                var a = this._map._latLngToNewLayerPoint(
                    this._latlng,
                    i.zoom,
                    i.center,
                  ),
                  o = this._getAnchor();
                Vt(this._container, a.add(o));
              },
              _adjustPan: function () {
                if (this.options.autoPan) {
                  if (
                    (this._map._panAnim && this._map._panAnim.stop(),
                    this._autopanning)
                  ) {
                    this._autopanning = !1;
                    return;
                  }
                  var i = this._map,
                    a = parseInt(pa(this._container, "marginBottom"), 10) || 0,
                    o = this._container.offsetHeight + a,
                    r = this._containerWidth,
                    c = new H(this._containerLeft, -o - this._containerBottom);
                  c._add(Bi(this._container));
                  var h = i.layerPointToContainerPoint(c),
                    m = V(this.options.autoPanPadding),
                    y = V(this.options.autoPanPaddingTopLeft || m),
                    z = V(this.options.autoPanPaddingBottomRight || m),
                    D = i.getSize(),
                    k = 0,
                    tt = 0;
                  (h.x + r + z.x > D.x && (k = h.x + r - D.x + z.x),
                    h.x - k - y.x < 0 && (k = h.x - y.x),
                    h.y + o + z.y > D.y && (tt = h.y + o - D.y + z.y),
                    h.y - tt - y.y < 0 && (tt = h.y - y.y),
                    (k || tt) &&
                      (this.options.keepInView && (this._autopanning = !0),
                      i.fire("autopanstart").panBy([k, tt])));
                }
              },
              _getAnchor: function () {
                return V(
                  this._source && this._source._getPopupAnchor
                    ? this._source._getPopupAnchor()
                    : [0, 0],
                );
              },
            }),
            Ms = function (i, a) {
              return new Na(i, a);
            };
          (zt.mergeOptions({ closePopupOnClick: !0 }),
            zt.include({
              openPopup: function (i, a, o) {
                return (this._initOverlay(Na, i, a, o).openOn(this), this);
              },
              closePopup: function (i) {
                return (
                  (i = arguments.length ? i : this._popup),
                  i && i.close(),
                  this
                );
              },
            }),
            ti.include({
              bindPopup: function (i, a) {
                return (
                  (this._popup = this._initOverlay(Na, this._popup, i, a)),
                  this._popupHandlersAdded ||
                    (this.on({
                      click: this._openPopup,
                      keypress: this._onKeyPress,
                      remove: this.closePopup,
                      move: this._movePopup,
                    }),
                    (this._popupHandlersAdded = !0)),
                  this
                );
              },
              unbindPopup: function () {
                return (
                  this._popup &&
                    (this.off({
                      click: this._openPopup,
                      keypress: this._onKeyPress,
                      remove: this.closePopup,
                      move: this._movePopup,
                    }),
                    (this._popupHandlersAdded = !1),
                    (this._popup = null)),
                  this
                );
              },
              openPopup: function (i) {
                return (
                  this._popup &&
                    (this instanceof ci || (this._popup._source = this),
                    this._popup._prepareOpen(i || this._latlng) &&
                      this._popup.openOn(this._map)),
                  this
                );
              },
              closePopup: function () {
                return (this._popup && this._popup.close(), this);
              },
              togglePopup: function () {
                return (this._popup && this._popup.toggle(this), this);
              },
              isPopupOpen: function () {
                return this._popup ? this._popup.isOpen() : !1;
              },
              setPopupContent: function (i) {
                return (this._popup && this._popup.setContent(i), this);
              },
              getPopup: function () {
                return this._popup;
              },
              _openPopup: function (i) {
                if (!(!this._popup || !this._map)) {
                  Zi(i);
                  var a = i.layer || i.target;
                  if (this._popup._source === a && !(a instanceof hi)) {
                    this._map.hasLayer(this._popup)
                      ? this.closePopup()
                      : this.openPopup(i.latlng);
                    return;
                  }
                  ((this._popup._source = a), this.openPopup(i.latlng));
                }
              },
              _movePopup: function (i) {
                this._popup.setLatLng(i.latlng);
              },
              _onKeyPress: function (i) {
                i.originalEvent.keyCode === 13 && this._openPopup(i);
              },
            }));
          var Da = ze.extend({
              options: {
                pane: "tooltipPane",
                offset: [0, 0],
                direction: "auto",
                permanent: !1,
                sticky: !1,
                opacity: 0.9,
              },
              onAdd: function (i) {
                (ze.prototype.onAdd.call(this, i),
                  this.setOpacity(this.options.opacity),
                  i.fire("tooltipopen", { tooltip: this }),
                  this._source &&
                    (this.addEventParent(this._source),
                    this._source.fire("tooltipopen", { tooltip: this }, !0)));
              },
              onRemove: function (i) {
                (ze.prototype.onRemove.call(this, i),
                  i.fire("tooltipclose", { tooltip: this }),
                  this._source &&
                    (this.removeEventParent(this._source),
                    this._source.fire("tooltipclose", { tooltip: this }, !0)));
              },
              getEvents: function () {
                var i = ze.prototype.getEvents.call(this);
                return (this.options.permanent || (i.preclick = this.close), i);
              },
              _initLayout: function () {
                var i = "leaflet-tooltip",
                  a =
                    i +
                    " " +
                    (this.options.className || "") +
                    " leaflet-zoom-" +
                    (this._zoomAnimated ? "animated" : "hide");
                ((this._contentNode = this._container = bt("div", a)),
                  this._container.setAttribute("role", "tooltip"),
                  this._container.setAttribute(
                    "id",
                    "leaflet-tooltip-" + U(this),
                  ));
              },
              _updateLayout: function () {},
              _adjustPan: function () {},
              _setPosition: function (i) {
                var a,
                  o,
                  r = this._map,
                  c = this._container,
                  h = r.latLngToContainerPoint(r.getCenter()),
                  m = r.layerPointToContainerPoint(i),
                  y = this.options.direction,
                  z = c.offsetWidth,
                  D = c.offsetHeight,
                  k = V(this.options.offset),
                  tt = this._getAnchor();
                (y === "top"
                  ? ((a = z / 2), (o = D))
                  : y === "bottom"
                    ? ((a = z / 2), (o = 0))
                    : y === "center"
                      ? ((a = z / 2), (o = D / 2))
                      : y === "right"
                        ? ((a = 0), (o = D / 2))
                        : y === "left"
                          ? ((a = z), (o = D / 2))
                          : m.x < h.x
                            ? ((y = "right"), (a = 0), (o = D / 2))
                            : ((y = "left"),
                              (a = z + (k.x + tt.x) * 2),
                              (o = D / 2)),
                  (i = i
                    .subtract(V(a, o, !0))
                    .add(k)
                    .add(tt)),
                  $t(c, "leaflet-tooltip-right"),
                  $t(c, "leaflet-tooltip-left"),
                  $t(c, "leaflet-tooltip-top"),
                  $t(c, "leaflet-tooltip-bottom"),
                  ut(c, "leaflet-tooltip-" + y),
                  Vt(c, i));
              },
              _updatePosition: function () {
                var i = this._map.latLngToLayerPoint(this._latlng);
                this._setPosition(i);
              },
              setOpacity: function (i) {
                ((this.options.opacity = i),
                  this._container && Jt(this._container, i));
              },
              _animateZoom: function (i) {
                var a = this._map._latLngToNewLayerPoint(
                  this._latlng,
                  i.zoom,
                  i.center,
                );
                this._setPosition(a);
              },
              _getAnchor: function () {
                return V(
                  this._source &&
                    this._source._getTooltipAnchor &&
                    !this.options.sticky
                    ? this._source._getTooltipAnchor()
                    : [0, 0],
                );
              },
            }),
            ku = function (i, a) {
              return new Da(i, a);
            };
          (zt.include({
            openTooltip: function (i, a, o) {
              return (this._initOverlay(Da, i, a, o).openOn(this), this);
            },
            closeTooltip: function (i) {
              return (i.close(), this);
            },
          }),
            ti.include({
              bindTooltip: function (i, a) {
                return (
                  this._tooltip && this.isTooltipOpen() && this.unbindTooltip(),
                  (this._tooltip = this._initOverlay(Da, this._tooltip, i, a)),
                  this._initTooltipInteractions(),
                  this._tooltip.options.permanent &&
                    this._map &&
                    this._map.hasLayer(this) &&
                    this.openTooltip(),
                  this
                );
              },
              unbindTooltip: function () {
                return (
                  this._tooltip &&
                    (this._initTooltipInteractions(!0),
                    this.closeTooltip(),
                    (this._tooltip = null)),
                  this
                );
              },
              _initTooltipInteractions: function (i) {
                if (!(!i && this._tooltipHandlersAdded)) {
                  var a = i ? "off" : "on",
                    o = { remove: this.closeTooltip, move: this._moveTooltip };
                  (this._tooltip.options.permanent
                    ? (o.add = this._openTooltip)
                    : ((o.mouseover = this._openTooltip),
                      (o.mouseout = this.closeTooltip),
                      (o.click = this._openTooltip),
                      this._map
                        ? this._addFocusListeners()
                        : (o.add = this._addFocusListeners)),
                    this._tooltip.options.sticky &&
                      (o.mousemove = this._moveTooltip),
                    this[a](o),
                    (this._tooltipHandlersAdded = !i));
                }
              },
              openTooltip: function (i) {
                return (
                  this._tooltip &&
                    (this instanceof ci || (this._tooltip._source = this),
                    this._tooltip._prepareOpen(i) &&
                      (this._tooltip.openOn(this._map),
                      this.getElement
                        ? this._setAriaDescribedByOnLayer(this)
                        : this.eachLayer &&
                          this.eachLayer(
                            this._setAriaDescribedByOnLayer,
                            this,
                          ))),
                  this
                );
              },
              closeTooltip: function () {
                if (this._tooltip) return this._tooltip.close();
              },
              toggleTooltip: function () {
                return (this._tooltip && this._tooltip.toggle(this), this);
              },
              isTooltipOpen: function () {
                return this._tooltip.isOpen();
              },
              setTooltipContent: function (i) {
                return (this._tooltip && this._tooltip.setContent(i), this);
              },
              getTooltip: function () {
                return this._tooltip;
              },
              _addFocusListeners: function () {
                this.getElement
                  ? this._addFocusListenersOnLayer(this)
                  : this.eachLayer &&
                    this.eachLayer(this._addFocusListenersOnLayer, this);
              },
              _addFocusListenersOnLayer: function (i) {
                var a = typeof i.getElement == "function" && i.getElement();
                a &&
                  (lt(
                    a,
                    "focus",
                    function () {
                      ((this._tooltip._source = i), this.openTooltip());
                    },
                    this,
                  ),
                  lt(a, "blur", this.closeTooltip, this));
              },
              _setAriaDescribedByOnLayer: function (i) {
                var a = typeof i.getElement == "function" && i.getElement();
                a &&
                  a.setAttribute(
                    "aria-describedby",
                    this._tooltip._container.id,
                  );
              },
              _openTooltip: function (i) {
                if (!(!this._tooltip || !this._map)) {
                  if (
                    this._map.dragging &&
                    this._map.dragging.moving() &&
                    !this._openOnceFlag
                  ) {
                    this._openOnceFlag = !0;
                    var a = this;
                    this._map.once("moveend", function () {
                      ((a._openOnceFlag = !1), a._openTooltip(i));
                    });
                    return;
                  }
                  ((this._tooltip._source = i.layer || i.target),
                    this.openTooltip(
                      this._tooltip.options.sticky ? i.latlng : void 0,
                    ));
                }
              },
              _moveTooltip: function (i) {
                var a = i.latlng,
                  o,
                  r;
                (this._tooltip.options.sticky &&
                  i.originalEvent &&
                  ((o = this._map.mouseEventToContainerPoint(i.originalEvent)),
                  (r = this._map.containerPointToLayerPoint(o)),
                  (a = this._map.layerPointToLatLng(r))),
                  this._tooltip.setLatLng(a));
              },
            }));
          var Ls = fi.extend({
            options: {
              iconSize: [12, 12],
              html: !1,
              bgPos: null,
              className: "leaflet-div-icon",
            },
            createIcon: function (i) {
              var a =
                  i && i.tagName === "DIV" ? i : document.createElement("div"),
                o = this.options;
              if (
                (o.html instanceof Element
                  ? (qe(a), a.appendChild(o.html))
                  : (a.innerHTML = o.html !== !1 ? o.html : ""),
                o.bgPos)
              ) {
                var r = V(o.bgPos);
                a.style.backgroundPosition = -r.x + "px " + -r.y + "px";
              }
              return (this._setIconStyles(a, "icon"), a);
            },
            createShadow: function () {
              return null;
            },
          });
          function Vu(i) {
            return new Ls(i);
          }
          fi.Default = Ma;
          var jn = ti.extend({
            options: {
              tileSize: 256,
              opacity: 1,
              updateWhenIdle: $.mobile,
              updateWhenZooming: !0,
              updateInterval: 200,
              zIndex: 1,
              bounds: null,
              minZoom: 0,
              maxZoom: void 0,
              maxNativeZoom: void 0,
              minNativeZoom: void 0,
              noWrap: !1,
              pane: "tilePane",
              className: "",
              keepBuffer: 2,
            },
            initialize: function (i) {
              et(this, i);
            },
            onAdd: function () {
              (this._initContainer(),
                (this._levels = {}),
                (this._tiles = {}),
                this._resetView());
            },
            beforeAdd: function (i) {
              i._addZoomLimit(this);
            },
            onRemove: function (i) {
              (this._removeAllTiles(),
                qt(this._container),
                i._removeZoomLimit(this),
                (this._container = null),
                (this._tileZoom = void 0));
            },
            bringToFront: function () {
              return (
                this._map &&
                  (ge(this._container), this._setAutoZIndex(Math.max)),
                this
              );
            },
            bringToBack: function () {
              return (
                this._map &&
                  (en(this._container), this._setAutoZIndex(Math.min)),
                this
              );
            },
            getContainer: function () {
              return this._container;
            },
            setOpacity: function (i) {
              return ((this.options.opacity = i), this._updateOpacity(), this);
            },
            setZIndex: function (i) {
              return ((this.options.zIndex = i), this._updateZIndex(), this);
            },
            isLoading: function () {
              return this._loading;
            },
            redraw: function () {
              if (this._map) {
                this._removeAllTiles();
                var i = this._clampZoom(this._map.getZoom());
                (i !== this._tileZoom &&
                  ((this._tileZoom = i), this._updateLevels()),
                  this._update());
              }
              return this;
            },
            getEvents: function () {
              var i = {
                viewprereset: this._invalidateAll,
                viewreset: this._resetView,
                zoom: this._resetView,
                moveend: this._onMoveEnd,
              };
              return (
                this.options.updateWhenIdle ||
                  (this._onMove ||
                    (this._onMove = C(
                      this._onMoveEnd,
                      this.options.updateInterval,
                      this,
                    )),
                  (i.move = this._onMove)),
                this._zoomAnimated && (i.zoomanim = this._animateZoom),
                i
              );
            },
            createTile: function () {
              return document.createElement("div");
            },
            getTileSize: function () {
              var i = this.options.tileSize;
              return i instanceof H ? i : new H(i, i);
            },
            _updateZIndex: function () {
              this._container &&
                this.options.zIndex !== void 0 &&
                this.options.zIndex !== null &&
                (this._container.style.zIndex = this.options.zIndex);
            },
            _setAutoZIndex: function (i) {
              for (
                var a = this.getPane().children,
                  o = -i(-1 / 0, 1 / 0),
                  r = 0,
                  c = a.length,
                  h;
                r < c;
                r++
              )
                ((h = a[r].style.zIndex),
                  a[r] !== this._container && h && (o = i(o, +h)));
              isFinite(o) &&
                ((this.options.zIndex = o + i(-1, 1)), this._updateZIndex());
            },
            _updateOpacity: function () {
              if (this._map && !$.ielt9) {
                Jt(this._container, this.options.opacity);
                var i = +new Date(),
                  a = !1,
                  o = !1;
                for (var r in this._tiles) {
                  var c = this._tiles[r];
                  if (!(!c.current || !c.loaded)) {
                    var h = Math.min(1, (i - c.loaded) / 200);
                    (Jt(c.el, h),
                      h < 1
                        ? (a = !0)
                        : (c.active ? (o = !0) : this._onOpaqueTile(c),
                          (c.active = !0)));
                  }
                }
                (o && !this._noPrune && this._pruneTiles(),
                  a &&
                    (ht(this._fadeFrame),
                    (this._fadeFrame = ot(this._updateOpacity, this))));
              }
            },
            _onOpaqueTile: X,
            _initContainer: function () {
              this._container ||
                ((this._container = bt(
                  "div",
                  "leaflet-layer " + (this.options.className || ""),
                )),
                this._updateZIndex(),
                this.options.opacity < 1 && this._updateOpacity(),
                this.getPane().appendChild(this._container));
            },
            _updateLevels: function () {
              var i = this._tileZoom,
                a = this.options.maxZoom;
              if (i !== void 0) {
                for (var o in this._levels)
                  ((o = Number(o)),
                    this._levels[o].el.children.length || o === i
                      ? ((this._levels[o].el.style.zIndex =
                          a - Math.abs(i - o)),
                        this._onUpdateLevel(o))
                      : (qt(this._levels[o].el),
                        this._removeTilesAtZoom(o),
                        this._onRemoveLevel(o),
                        delete this._levels[o]));
                var r = this._levels[i],
                  c = this._map;
                return (
                  r ||
                    ((r = this._levels[i] = {}),
                    (r.el = bt(
                      "div",
                      "leaflet-tile-container leaflet-zoom-animated",
                      this._container,
                    )),
                    (r.el.style.zIndex = a),
                    (r.origin = c
                      .project(c.unproject(c.getPixelOrigin()), i)
                      .round()),
                    (r.zoom = i),
                    this._setZoomTransform(r, c.getCenter(), c.getZoom()),
                    X(r.el.offsetWidth),
                    this._onCreateLevel(r)),
                  (this._level = r),
                  r
                );
              }
            },
            _onUpdateLevel: X,
            _onRemoveLevel: X,
            _onCreateLevel: X,
            _pruneTiles: function () {
              if (this._map) {
                var i,
                  a,
                  o = this._map.getZoom();
                if (o > this.options.maxZoom || o < this.options.minZoom) {
                  this._removeAllTiles();
                  return;
                }
                for (i in this._tiles)
                  ((a = this._tiles[i]), (a.retain = a.current));
                for (i in this._tiles)
                  if (((a = this._tiles[i]), a.current && !a.active)) {
                    var r = a.coords;
                    this._retainParent(r.x, r.y, r.z, r.z - 5) ||
                      this._retainChildren(r.x, r.y, r.z, r.z + 2);
                  }
                for (i in this._tiles)
                  this._tiles[i].retain || this._removeTile(i);
              }
            },
            _removeTilesAtZoom: function (i) {
              for (var a in this._tiles)
                this._tiles[a].coords.z === i && this._removeTile(a);
            },
            _removeAllTiles: function () {
              for (var i in this._tiles) this._removeTile(i);
            },
            _invalidateAll: function () {
              for (var i in this._levels)
                (qt(this._levels[i].el),
                  this._onRemoveLevel(Number(i)),
                  delete this._levels[i]);
              (this._removeAllTiles(), (this._tileZoom = void 0));
            },
            _retainParent: function (i, a, o, r) {
              var c = Math.floor(i / 2),
                h = Math.floor(a / 2),
                m = o - 1,
                y = new H(+c, +h);
              y.z = +m;
              var z = this._tileCoordsToKey(y),
                D = this._tiles[z];
              return D && D.active
                ? ((D.retain = !0), !0)
                : (D && D.loaded && (D.retain = !0),
                  m > r ? this._retainParent(c, h, m, r) : !1);
            },
            _retainChildren: function (i, a, o, r) {
              for (var c = 2 * i; c < 2 * i + 2; c++)
                for (var h = 2 * a; h < 2 * a + 2; h++) {
                  var m = new H(c, h);
                  m.z = o + 1;
                  var y = this._tileCoordsToKey(m),
                    z = this._tiles[y];
                  if (z && z.active) {
                    z.retain = !0;
                    continue;
                  } else z && z.loaded && (z.retain = !0);
                  o + 1 < r && this._retainChildren(c, h, o + 1, r);
                }
            },
            _resetView: function (i) {
              var a = i && (i.pinch || i.flyTo);
              this._setView(this._map.getCenter(), this._map.getZoom(), a, a);
            },
            _animateZoom: function (i) {
              this._setView(i.center, i.zoom, !0, i.noUpdate);
            },
            _clampZoom: function (i) {
              var a = this.options;
              return a.minNativeZoom !== void 0 && i < a.minNativeZoom
                ? a.minNativeZoom
                : a.maxNativeZoom !== void 0 && a.maxNativeZoom < i
                  ? a.maxNativeZoom
                  : i;
            },
            _setView: function (i, a, o, r) {
              var c = Math.round(a);
              (this.options.maxZoom !== void 0 && c > this.options.maxZoom) ||
              (this.options.minZoom !== void 0 && c < this.options.minZoom)
                ? (c = void 0)
                : (c = this._clampZoom(c));
              var h = this.options.updateWhenZooming && c !== this._tileZoom;
              ((!r || h) &&
                ((this._tileZoom = c),
                this._abortLoading && this._abortLoading(),
                this._updateLevels(),
                this._resetGrid(),
                c !== void 0 && this._update(i),
                o || this._pruneTiles(),
                (this._noPrune = !!o)),
                this._setZoomTransforms(i, a));
            },
            _setZoomTransforms: function (i, a) {
              for (var o in this._levels)
                this._setZoomTransform(this._levels[o], i, a);
            },
            _setZoomTransform: function (i, a, o) {
              var r = this._map.getZoomScale(o, i.zoom),
                c = i.origin
                  .multiplyBy(r)
                  .subtract(this._map._getNewPixelOrigin(a, o))
                  .round();
              $.any3d ? xi(i.el, c, r) : Vt(i.el, c);
            },
            _resetGrid: function () {
              var i = this._map,
                a = i.options.crs,
                o = (this._tileSize = this.getTileSize()),
                r = this._tileZoom,
                c = this._map.getPixelWorldBounds(this._tileZoom);
              (c && (this._globalTileRange = this._pxBoundsToTileRange(c)),
                (this._wrapX = a.wrapLng &&
                  !this.options.noWrap && [
                    Math.floor(i.project([0, a.wrapLng[0]], r).x / o.x),
                    Math.ceil(i.project([0, a.wrapLng[1]], r).x / o.y),
                  ]),
                (this._wrapY = a.wrapLat &&
                  !this.options.noWrap && [
                    Math.floor(i.project([a.wrapLat[0], 0], r).y / o.x),
                    Math.ceil(i.project([a.wrapLat[1], 0], r).y / o.y),
                  ]));
            },
            _onMoveEnd: function () {
              !this._map || this._map._animatingZoom || this._update();
            },
            _getTiledPixelBounds: function (i) {
              var a = this._map,
                o = a._animatingZoom
                  ? Math.max(a._animateToZoom, a.getZoom())
                  : a.getZoom(),
                r = a.getZoomScale(o, this._tileZoom),
                c = a.project(i, this._tileZoom).floor(),
                h = a.getSize().divideBy(r * 2);
              return new p(c.subtract(h), c.add(h));
            },
            _update: function (i) {
              var a = this._map;
              if (a) {
                var o = this._clampZoom(a.getZoom());
                if (
                  (i === void 0 && (i = a.getCenter()),
                  this._tileZoom !== void 0)
                ) {
                  var r = this._getTiledPixelBounds(i),
                    c = this._pxBoundsToTileRange(r),
                    h = c.getCenter(),
                    m = [],
                    y = this.options.keepBuffer,
                    z = new p(
                      c.getBottomLeft().subtract([y, -y]),
                      c.getTopRight().add([y, -y]),
                    );
                  if (
                    !(
                      isFinite(c.min.x) &&
                      isFinite(c.min.y) &&
                      isFinite(c.max.x) &&
                      isFinite(c.max.y)
                    )
                  )
                    throw new Error(
                      "Attempted to load an infinite number of tiles",
                    );
                  for (var D in this._tiles) {
                    var k = this._tiles[D].coords;
                    (k.z !== this._tileZoom || !z.contains(new H(k.x, k.y))) &&
                      (this._tiles[D].current = !1);
                  }
                  if (Math.abs(o - this._tileZoom) > 1) {
                    this._setView(i, o);
                    return;
                  }
                  for (var tt = c.min.y; tt <= c.max.y; tt++)
                    for (var mt = c.min.x; mt <= c.max.x; mt++) {
                      var ye = new H(mt, tt);
                      if (((ye.z = this._tileZoom), !!this._isValidTile(ye))) {
                        var ne = this._tiles[this._tileCoordsToKey(ye)];
                        ne ? (ne.current = !0) : m.push(ye);
                      }
                    }
                  if (
                    (m.sort(function (Ct, Nt) {
                      return Ct.distanceTo(h) - Nt.distanceTo(h);
                    }),
                    m.length !== 0)
                  ) {
                    this._loading ||
                      ((this._loading = !0), this.fire("loading"));
                    var Ue = document.createDocumentFragment();
                    for (mt = 0; mt < m.length; mt++) this._addTile(m[mt], Ue);
                    this._level.el.appendChild(Ue);
                  }
                }
              }
            },
            _isValidTile: function (i) {
              var a = this._map.options.crs;
              if (!a.infinite) {
                var o = this._globalTileRange;
                if (
                  (!a.wrapLng && (i.x < o.min.x || i.x > o.max.x)) ||
                  (!a.wrapLat && (i.y < o.min.y || i.y > o.max.y))
                )
                  return !1;
              }
              if (!this.options.bounds) return !0;
              var r = this._tileCoordsToBounds(i);
              return Y(this.options.bounds).overlaps(r);
            },
            _keyToBounds: function (i) {
              return this._tileCoordsToBounds(this._keyToTileCoords(i));
            },
            _tileCoordsToNwSe: function (i) {
              var a = this._map,
                o = this.getTileSize(),
                r = i.scaleBy(o),
                c = r.add(o),
                h = a.unproject(r, i.z),
                m = a.unproject(c, i.z);
              return [h, m];
            },
            _tileCoordsToBounds: function (i) {
              var a = this._tileCoordsToNwSe(i),
                o = new j(a[0], a[1]);
              return (
                this.options.noWrap || (o = this._map.wrapLatLngBounds(o)),
                o
              );
            },
            _tileCoordsToKey: function (i) {
              return i.x + ":" + i.y + ":" + i.z;
            },
            _keyToTileCoords: function (i) {
              var a = i.split(":"),
                o = new H(+a[0], +a[1]);
              return ((o.z = +a[2]), o);
            },
            _removeTile: function (i) {
              var a = this._tiles[i];
              a &&
                (qt(a.el),
                delete this._tiles[i],
                this.fire("tileunload", {
                  tile: a.el,
                  coords: this._keyToTileCoords(i),
                }));
            },
            _initTile: function (i) {
              ut(i, "leaflet-tile");
              var a = this.getTileSize();
              ((i.style.width = a.x + "px"),
                (i.style.height = a.y + "px"),
                (i.onselectstart = X),
                (i.onmousemove = X),
                $.ielt9 &&
                  this.options.opacity < 1 &&
                  Jt(i, this.options.opacity));
            },
            _addTile: function (i, a) {
              var o = this._getTilePos(i),
                r = this._tileCoordsToKey(i),
                c = this.createTile(
                  this._wrapCoords(i),
                  J(this._tileReady, this, i),
                );
              (this._initTile(c),
                this.createTile.length < 2 &&
                  ot(J(this._tileReady, this, i, null, c)),
                Vt(c, o),
                (this._tiles[r] = { el: c, coords: i, current: !0 }),
                a.appendChild(c),
                this.fire("tileloadstart", { tile: c, coords: i }));
            },
            _tileReady: function (i, a, o) {
              a && this.fire("tileerror", { error: a, tile: o, coords: i });
              var r = this._tileCoordsToKey(i);
              ((o = this._tiles[r]),
                o &&
                  ((o.loaded = +new Date()),
                  this._map._fadeAnimated
                    ? (Jt(o.el, 0),
                      ht(this._fadeFrame),
                      (this._fadeFrame = ot(this._updateOpacity, this)))
                    : ((o.active = !0), this._pruneTiles()),
                  a ||
                    (ut(o.el, "leaflet-tile-loaded"),
                    this.fire("tileload", { tile: o.el, coords: i })),
                  this._noTilesToLoad() &&
                    ((this._loading = !1),
                    this.fire("load"),
                    $.ielt9 || !this._map._fadeAnimated
                      ? ot(this._pruneTiles, this)
                      : setTimeout(J(this._pruneTiles, this), 250))));
            },
            _getTilePos: function (i) {
              return i.scaleBy(this.getTileSize()).subtract(this._level.origin);
            },
            _wrapCoords: function (i) {
              var a = new H(
                this._wrapX ? I(i.x, this._wrapX) : i.x,
                this._wrapY ? I(i.y, this._wrapY) : i.y,
              );
              return ((a.z = i.z), a);
            },
            _pxBoundsToTileRange: function (i) {
              var a = this.getTileSize();
              return new p(
                i.min.unscaleBy(a).floor(),
                i.max.unscaleBy(a).ceil().subtract([1, 1]),
              );
            },
            _noTilesToLoad: function () {
              for (var i in this._tiles) if (!this._tiles[i].loaded) return !1;
              return !0;
            },
          });
          function ws(i) {
            return new jn(i);
          }
          var qi = jn.extend({
            options: {
              minZoom: 0,
              maxZoom: 18,
              subdomains: "abc",
              errorTileUrl: "",
              zoomOffset: 0,
              tms: !1,
              zoomReverse: !1,
              detectRetina: !1,
              crossOrigin: !1,
              referrerPolicy: !1,
            },
            initialize: function (i, a) {
              ((this._url = i),
                (a = et(this, a)),
                a.detectRetina && $.retina && a.maxZoom > 0
                  ? ((a.tileSize = Math.floor(a.tileSize / 2)),
                    a.zoomReverse
                      ? (a.zoomOffset--,
                        (a.minZoom = Math.min(a.maxZoom, a.minZoom + 1)))
                      : (a.zoomOffset++,
                        (a.maxZoom = Math.max(a.minZoom, a.maxZoom - 1))),
                    (a.minZoom = Math.max(0, a.minZoom)))
                  : a.zoomReverse
                    ? (a.minZoom = Math.min(a.maxZoom, a.minZoom))
                    : (a.maxZoom = Math.max(a.minZoom, a.maxZoom)),
                typeof a.subdomains == "string" &&
                  (a.subdomains = a.subdomains.split("")),
                this.on("tileunload", this._onTileRemove));
            },
            setUrl: function (i, a) {
              return (
                this._url === i && a === void 0 && (a = !0),
                (this._url = i),
                a || this.redraw(),
                this
              );
            },
            createTile: function (i, a) {
              var o = document.createElement("img");
              return (
                lt(o, "load", J(this._tileOnLoad, this, a, o)),
                lt(o, "error", J(this._tileOnError, this, a, o)),
                (this.options.crossOrigin || this.options.crossOrigin === "") &&
                  (o.crossOrigin =
                    this.options.crossOrigin === !0
                      ? ""
                      : this.options.crossOrigin),
                typeof this.options.referrerPolicy == "string" &&
                  (o.referrerPolicy = this.options.referrerPolicy),
                (o.alt = ""),
                (o.src = this.getTileUrl(i)),
                o
              );
            },
            getTileUrl: function (i) {
              var a = {
                r: $.retina ? "@2x" : "",
                s: this._getSubdomain(i),
                x: i.x,
                y: i.y,
                z: this._getZoomForUrl(),
              };
              if (this._map && !this._map.options.crs.infinite) {
                var o = this._globalTileRange.max.y - i.y;
                (this.options.tms && (a.y = o), (a["-y"] = o));
              }
              return kt(this._url, G(a, this.options));
            },
            _tileOnLoad: function (i, a) {
              $.ielt9 ? setTimeout(J(i, this, null, a), 0) : i(null, a);
            },
            _tileOnError: function (i, a, o) {
              var r = this.options.errorTileUrl;
              (r && a.getAttribute("src") !== r && (a.src = r), i(o, a));
            },
            _onTileRemove: function (i) {
              i.tile.onload = null;
            },
            _getZoomForUrl: function () {
              var i = this._tileZoom,
                a = this.options.maxZoom,
                o = this.options.zoomReverse,
                r = this.options.zoomOffset;
              return (o && (i = a - i), i + r);
            },
            _getSubdomain: function (i) {
              var a = Math.abs(i.x + i.y) % this.options.subdomains.length;
              return this.options.subdomains[a];
            },
            _abortLoading: function () {
              var i, a;
              for (i in this._tiles)
                if (
                  this._tiles[i].coords.z !== this._tileZoom &&
                  ((a = this._tiles[i].el),
                  (a.onload = X),
                  (a.onerror = X),
                  !a.complete)
                ) {
                  a.src = oe;
                  var o = this._tiles[i].coords;
                  (qt(a),
                    delete this._tiles[i],
                    this.fire("tileabort", { tile: a, coords: o }));
                }
            },
            _removeTile: function (i) {
              var a = this._tiles[i];
              if (a)
                return (
                  a.el.setAttribute("src", oe),
                  jn.prototype._removeTile.call(this, i)
                );
            },
            _tileReady: function (i, a, o) {
              if (!(!this._map || (o && o.getAttribute("src") === oe)))
                return jn.prototype._tileReady.call(this, i, a, o);
            },
          });
          function Xe(i, a) {
            return new qi(i, a);
          }
          var Ba = qi.extend({
            defaultWmsParams: {
              service: "WMS",
              request: "GetMap",
              layers: "",
              styles: "",
              format: "image/jpeg",
              transparent: !1,
              version: "1.1.1",
            },
            options: { crs: null, uppercase: !1 },
            initialize: function (i, a) {
              this._url = i;
              var o = G({}, this.defaultWmsParams);
              for (var r in a) r in this.options || (o[r] = a[r]);
              a = et(this, a);
              var c = a.detectRetina && $.retina ? 2 : 1,
                h = this.getTileSize();
              ((o.width = h.x * c), (o.height = h.y * c), (this.wmsParams = o));
            },
            onAdd: function (i) {
              ((this._crs = this.options.crs || i.options.crs),
                (this._wmsVersion = parseFloat(this.wmsParams.version)));
              var a = this._wmsVersion >= 1.3 ? "crs" : "srs";
              ((this.wmsParams[a] = this._crs.code),
                qi.prototype.onAdd.call(this, i));
            },
            getTileUrl: function (i) {
              var a = this._tileCoordsToNwSe(i),
                o = this._crs,
                r = A(o.project(a[0]), o.project(a[1])),
                c = r.min,
                h = r.max,
                m = (
                  this._wmsVersion >= 1.3 && this._crs === co
                    ? [c.y, c.x, h.y, h.x]
                    : [c.x, c.y, h.x, h.y]
                ).join(","),
                y = qi.prototype.getTileUrl.call(this, i);
              return (
                y +
                Ot(this.wmsParams, y, this.options.uppercase) +
                (this.options.uppercase ? "&BBOX=" : "&bbox=") +
                m
              );
            },
            setParams: function (i, a) {
              return (G(this.wmsParams, i), a || this.redraw(), this);
            },
          });
          function ke(i, a) {
            return new Ba(i, a);
          }
          ((qi.WMS = Ba), (Xe.wms = ke));
          var Ce = ti.extend({
              options: { padding: 0.1 },
              initialize: function (i) {
                (et(this, i), U(this), (this._layers = this._layers || {}));
              },
              onAdd: function () {
                (this._container ||
                  (this._initContainer(),
                  ut(this._container, "leaflet-zoom-animated")),
                  this.getPane().appendChild(this._container),
                  this._update(),
                  this.on("update", this._updatePaths, this));
              },
              onRemove: function () {
                (this.off("update", this._updatePaths, this),
                  this._destroyContainer());
              },
              getEvents: function () {
                var i = {
                  viewreset: this._reset,
                  zoom: this._onZoom,
                  moveend: this._update,
                  zoomend: this._onZoomEnd,
                };
                return (
                  this._zoomAnimated && (i.zoomanim = this._onAnimZoom),
                  i
                );
              },
              _onAnimZoom: function (i) {
                this._updateTransform(i.center, i.zoom);
              },
              _onZoom: function () {
                this._updateTransform(
                  this._map.getCenter(),
                  this._map.getZoom(),
                );
              },
              _updateTransform: function (i, a) {
                var o = this._map.getZoomScale(a, this._zoom),
                  r = this._map
                    .getSize()
                    .multiplyBy(0.5 + this.options.padding),
                  c = this._map.project(this._center, a),
                  h = r
                    .multiplyBy(-o)
                    .add(c)
                    .subtract(this._map._getNewPixelOrigin(i, a));
                $.any3d ? xi(this._container, h, o) : Vt(this._container, h);
              },
              _reset: function () {
                (this._update(),
                  this._updateTransform(this._center, this._zoom));
                for (var i in this._layers) this._layers[i]._reset();
              },
              _onZoomEnd: function () {
                for (var i in this._layers) this._layers[i]._project();
              },
              _updatePaths: function () {
                for (var i in this._layers) this._layers[i]._update();
              },
              _update: function () {
                var i = this.options.padding,
                  a = this._map.getSize(),
                  o = this._map
                    .containerPointToLayerPoint(a.multiplyBy(-i))
                    .round();
                ((this._bounds = new p(
                  o,
                  o.add(a.multiplyBy(1 + i * 2)).round(),
                )),
                  (this._center = this._map.getCenter()),
                  (this._zoom = this._map.getZoom()));
              },
            }),
            pl = Ce.extend({
              options: { tolerance: 0 },
              getEvents: function () {
                var i = Ce.prototype.getEvents.call(this);
                return ((i.viewprereset = this._onViewPreReset), i);
              },
              _onViewPreReset: function () {
                this._postponeUpdatePaths = !0;
              },
              onAdd: function () {
                (Ce.prototype.onAdd.call(this), this._draw());
              },
              _initContainer: function () {
                var i = (this._container = document.createElement("canvas"));
                (lt(i, "mousemove", this._onMouseMove, this),
                  lt(
                    i,
                    "click dblclick mousedown mouseup contextmenu",
                    this._onClick,
                    this,
                  ),
                  lt(i, "mouseout", this._handleMouseOut, this),
                  (i._leaflet_disable_events = !0),
                  (this._ctx = i.getContext("2d")));
              },
              _destroyContainer: function () {
                (ht(this._redrawRequest),
                  delete this._ctx,
                  qt(this._container),
                  Rt(this._container),
                  delete this._container);
              },
              _updatePaths: function () {
                if (!this._postponeUpdatePaths) {
                  var i;
                  this._redrawBounds = null;
                  for (var a in this._layers)
                    ((i = this._layers[a]), i._update());
                  this._redraw();
                }
              },
              _update: function () {
                if (!(this._map._animatingZoom && this._bounds)) {
                  Ce.prototype._update.call(this);
                  var i = this._bounds,
                    a = this._container,
                    o = i.getSize(),
                    r = $.retina ? 2 : 1;
                  (Vt(a, i.min),
                    (a.width = r * o.x),
                    (a.height = r * o.y),
                    (a.style.width = o.x + "px"),
                    (a.style.height = o.y + "px"),
                    $.retina && this._ctx.scale(2, 2),
                    this._ctx.translate(-i.min.x, -i.min.y),
                    this.fire("update"));
                }
              },
              _reset: function () {
                (Ce.prototype._reset.call(this),
                  this._postponeUpdatePaths &&
                    ((this._postponeUpdatePaths = !1), this._updatePaths()));
              },
              _initPath: function (i) {
                (this._updateDashArray(i), (this._layers[U(i)] = i));
                var a = (i._order = {
                  layer: i,
                  prev: this._drawLast,
                  next: null,
                });
                (this._drawLast && (this._drawLast.next = a),
                  (this._drawLast = a),
                  (this._drawFirst = this._drawFirst || this._drawLast));
              },
              _addPath: function (i) {
                this._requestRedraw(i);
              },
              _removePath: function (i) {
                var a = i._order,
                  o = a.next,
                  r = a.prev;
                (o ? (o.prev = r) : (this._drawLast = r),
                  r ? (r.next = o) : (this._drawFirst = o),
                  delete i._order,
                  delete this._layers[U(i)],
                  this._requestRedraw(i));
              },
              _updatePath: function (i) {
                (this._extendRedrawBounds(i),
                  i._project(),
                  i._update(),
                  this._requestRedraw(i));
              },
              _updateStyle: function (i) {
                (this._updateDashArray(i), this._requestRedraw(i));
              },
              _updateDashArray: function (i) {
                if (typeof i.options.dashArray == "string") {
                  var a = i.options.dashArray.split(/[, ]+/),
                    o = [],
                    r,
                    c;
                  for (c = 0; c < a.length; c++) {
                    if (((r = Number(a[c])), isNaN(r))) return;
                    o.push(r);
                  }
                  i.options._dashArray = o;
                } else i.options._dashArray = i.options.dashArray;
              },
              _requestRedraw: function (i) {
                this._map &&
                  (this._extendRedrawBounds(i),
                  (this._redrawRequest =
                    this._redrawRequest || ot(this._redraw, this)));
              },
              _extendRedrawBounds: function (i) {
                if (i._pxBounds) {
                  var a = (i.options.weight || 0) + 1;
                  ((this._redrawBounds = this._redrawBounds || new p()),
                    this._redrawBounds.extend(i._pxBounds.min.subtract([a, a])),
                    this._redrawBounds.extend(i._pxBounds.max.add([a, a])));
                }
              },
              _redraw: function () {
                ((this._redrawRequest = null),
                  this._redrawBounds &&
                    (this._redrawBounds.min._floor(),
                    this._redrawBounds.max._ceil()),
                  this._clear(),
                  this._draw(),
                  (this._redrawBounds = null));
              },
              _clear: function () {
                var i = this._redrawBounds;
                if (i) {
                  var a = i.getSize();
                  this._ctx.clearRect(i.min.x, i.min.y, a.x, a.y);
                } else
                  (this._ctx.save(),
                    this._ctx.setTransform(1, 0, 0, 1, 0, 0),
                    this._ctx.clearRect(
                      0,
                      0,
                      this._container.width,
                      this._container.height,
                    ),
                    this._ctx.restore());
              },
              _draw: function () {
                var i,
                  a = this._redrawBounds;
                if ((this._ctx.save(), a)) {
                  var o = a.getSize();
                  (this._ctx.beginPath(),
                    this._ctx.rect(a.min.x, a.min.y, o.x, o.y),
                    this._ctx.clip());
                }
                this._drawing = !0;
                for (var r = this._drawFirst; r; r = r.next)
                  ((i = r.layer),
                    (!a || (i._pxBounds && i._pxBounds.intersects(a))) &&
                      i._updatePath());
                ((this._drawing = !1), this._ctx.restore());
              },
              _updatePoly: function (i, a) {
                if (this._drawing) {
                  var o,
                    r,
                    c,
                    h,
                    m = i._parts,
                    y = m.length,
                    z = this._ctx;
                  if (y) {
                    for (z.beginPath(), o = 0; o < y; o++) {
                      for (r = 0, c = m[o].length; r < c; r++)
                        ((h = m[o][r]), z[r ? "lineTo" : "moveTo"](h.x, h.y));
                      a && z.closePath();
                    }
                    this._fillStroke(z, i);
                  }
                }
              },
              _updateCircle: function (i) {
                if (!(!this._drawing || i._empty())) {
                  var a = i._point,
                    o = this._ctx,
                    r = Math.max(Math.round(i._radius), 1),
                    c = (Math.max(Math.round(i._radiusY), 1) || r) / r;
                  (c !== 1 && (o.save(), o.scale(1, c)),
                    o.beginPath(),
                    o.arc(a.x, a.y / c, r, 0, Math.PI * 2, !1),
                    c !== 1 && o.restore(),
                    this._fillStroke(o, i));
                }
              },
              _fillStroke: function (i, a) {
                var o = a.options;
                (o.fill &&
                  ((i.globalAlpha = o.fillOpacity),
                  (i.fillStyle = o.fillColor || o.color),
                  i.fill(o.fillRule || "evenodd")),
                  o.stroke &&
                    o.weight !== 0 &&
                    (i.setLineDash &&
                      i.setLineDash((a.options && a.options._dashArray) || []),
                    (i.globalAlpha = o.opacity),
                    (i.lineWidth = o.weight),
                    (i.strokeStyle = o.color),
                    (i.lineCap = o.lineCap),
                    (i.lineJoin = o.lineJoin),
                    i.stroke()));
              },
              _onClick: function (i) {
                for (
                  var a = this._map.mouseEventToLayerPoint(i),
                    o,
                    r,
                    c = this._drawFirst;
                  c;
                  c = c.next
                )
                  ((o = c.layer),
                    o.options.interactive &&
                      o._containsPoint(a) &&
                      (!(i.type === "click" || i.type === "preclick") ||
                        !this._map._draggableMoved(o)) &&
                      (r = o));
                this._fireEvent(r ? [r] : !1, i);
              },
              _onMouseMove: function (i) {
                if (
                  !(
                    !this._map ||
                    this._map.dragging.moving() ||
                    this._map._animatingZoom
                  )
                ) {
                  var a = this._map.mouseEventToLayerPoint(i);
                  this._handleMouseHover(i, a);
                }
              },
              _handleMouseOut: function (i) {
                var a = this._hoveredLayer;
                a &&
                  ($t(this._container, "leaflet-interactive"),
                  this._fireEvent([a], i, "mouseout"),
                  (this._hoveredLayer = null),
                  (this._mouseHoverThrottled = !1));
              },
              _handleMouseHover: function (i, a) {
                if (!this._mouseHoverThrottled) {
                  for (var o, r, c = this._drawFirst; c; c = c.next)
                    ((o = c.layer),
                      o.options.interactive && o._containsPoint(a) && (r = o));
                  (r !== this._hoveredLayer &&
                    (this._handleMouseOut(i),
                    r &&
                      (ut(this._container, "leaflet-interactive"),
                      this._fireEvent([r], i, "mouseover"),
                      (this._hoveredLayer = r))),
                    this._fireEvent(
                      this._hoveredLayer ? [this._hoveredLayer] : !1,
                      i,
                    ),
                    (this._mouseHoverThrottled = !0),
                    setTimeout(
                      J(function () {
                        this._mouseHoverThrottled = !1;
                      }, this),
                      32,
                    ));
                }
              },
              _fireEvent: function (i, a, o) {
                this._map._fireDOMEvent(a, o || a.type, i);
              },
              _bringToFront: function (i) {
                var a = i._order;
                if (a) {
                  var o = a.next,
                    r = a.prev;
                  if (o) o.prev = r;
                  else return;
                  (r ? (r.next = o) : o && (this._drawFirst = o),
                    (a.prev = this._drawLast),
                    (this._drawLast.next = a),
                    (a.next = null),
                    (this._drawLast = a),
                    this._requestRedraw(i));
                }
              },
              _bringToBack: function (i) {
                var a = i._order;
                if (a) {
                  var o = a.next,
                    r = a.prev;
                  if (r) r.next = o;
                  else return;
                  (o ? (o.prev = r) : r && (this._drawLast = r),
                    (a.prev = null),
                    (a.next = this._drawFirst),
                    (this._drawFirst.prev = a),
                    (this._drawFirst = a),
                    this._requestRedraw(i));
                }
              },
            });
          function Za(i) {
            return $.canvas ? new pl(i) : null;
          }
          var Gi = (function () {
              try {
                return (
                  document.namespaces.add(
                    "lvml",
                    "urn:schemas-microsoft-com:vml",
                  ),
                  function (i) {
                    return document.createElement(
                      "<lvml:" + i + ' class="lvml">',
                    );
                  }
                );
              } catch {}
              return function (i) {
                return document.createElement(
                  "<" +
                    i +
                    ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">',
                );
              };
            })(),
            fo = {
              _initContainer: function () {
                this._container = bt("div", "leaflet-vml-container");
              },
              _update: function () {
                this._map._animatingZoom ||
                  (Ce.prototype._update.call(this), this.fire("update"));
              },
              _initPath: function (i) {
                var a = (i._container = Gi("shape"));
                (ut(a, "leaflet-vml-shape " + (this.options.className || "")),
                  (a.coordsize = "1 1"),
                  (i._path = Gi("path")),
                  a.appendChild(i._path),
                  this._updateStyle(i),
                  (this._layers[U(i)] = i));
              },
              _addPath: function (i) {
                var a = i._container;
                (this._container.appendChild(a),
                  i.options.interactive && i.addInteractiveTarget(a));
              },
              _removePath: function (i) {
                var a = i._container;
                (qt(a),
                  i.removeInteractiveTarget(a),
                  delete this._layers[U(i)]);
              },
              _updateStyle: function (i) {
                var a = i._stroke,
                  o = i._fill,
                  r = i.options,
                  c = i._container;
                ((c.stroked = !!r.stroke),
                  (c.filled = !!r.fill),
                  r.stroke
                    ? (a || (a = i._stroke = Gi("stroke")),
                      c.appendChild(a),
                      (a.weight = r.weight + "px"),
                      (a.color = r.color),
                      (a.opacity = r.opacity),
                      r.dashArray
                        ? (a.dashStyle = ct(r.dashArray)
                            ? r.dashArray.join(" ")
                            : r.dashArray.replace(/( *, *)/g, " "))
                        : (a.dashStyle = ""),
                      (a.endcap = r.lineCap.replace("butt", "flat")),
                      (a.joinstyle = r.lineJoin))
                    : a && (c.removeChild(a), (i._stroke = null)),
                  r.fill
                    ? (o || (o = i._fill = Gi("fill")),
                      c.appendChild(o),
                      (o.color = r.fillColor || r.color),
                      (o.opacity = r.fillOpacity))
                    : o && (c.removeChild(o), (i._fill = null)));
              },
              _updateCircle: function (i) {
                var a = i._point.round(),
                  o = Math.round(i._radius),
                  r = Math.round(i._radiusY || o);
                this._setPath(
                  i,
                  i._empty()
                    ? "M0 0"
                    : "AL " +
                        a.x +
                        "," +
                        a.y +
                        " " +
                        o +
                        "," +
                        r +
                        " 0," +
                        65535 * 360,
                );
              },
              _setPath: function (i, a) {
                i._path.v = a;
              },
              _bringToFront: function (i) {
                ge(i._container);
              },
              _bringToBack: function (i) {
                en(i._container);
              },
            },
            di = $.vml ? Gi : Wa,
            qn = Ce.extend({
              _initContainer: function () {
                ((this._container = di("svg")),
                  this._container.setAttribute("pointer-events", "none"),
                  (this._rootGroup = di("g")),
                  this._container.appendChild(this._rootGroup));
              },
              _destroyContainer: function () {
                (qt(this._container),
                  Rt(this._container),
                  delete this._container,
                  delete this._rootGroup,
                  delete this._svgSize);
              },
              _update: function () {
                if (!(this._map._animatingZoom && this._bounds)) {
                  Ce.prototype._update.call(this);
                  var i = this._bounds,
                    a = i.getSize(),
                    o = this._container;
                  ((!this._svgSize || !this._svgSize.equals(a)) &&
                    ((this._svgSize = a),
                    o.setAttribute("width", a.x),
                    o.setAttribute("height", a.y)),
                    Vt(o, i.min),
                    o.setAttribute(
                      "viewBox",
                      [i.min.x, i.min.y, a.x, a.y].join(" "),
                    ),
                    this.fire("update"));
                }
              },
              _initPath: function (i) {
                var a = (i._path = di("path"));
                (i.options.className && ut(a, i.options.className),
                  i.options.interactive && ut(a, "leaflet-interactive"),
                  this._updateStyle(i),
                  (this._layers[U(i)] = i));
              },
              _addPath: function (i) {
                (this._rootGroup || this._initContainer(),
                  this._rootGroup.appendChild(i._path),
                  i.addInteractiveTarget(i._path));
              },
              _removePath: function (i) {
                (qt(i._path),
                  i.removeInteractiveTarget(i._path),
                  delete this._layers[U(i)]);
              },
              _updatePath: function (i) {
                (i._project(), i._update());
              },
              _updateStyle: function (i) {
                var a = i._path,
                  o = i.options;
                a &&
                  (o.stroke
                    ? (a.setAttribute("stroke", o.color),
                      a.setAttribute("stroke-opacity", o.opacity),
                      a.setAttribute("stroke-width", o.weight),
                      a.setAttribute("stroke-linecap", o.lineCap),
                      a.setAttribute("stroke-linejoin", o.lineJoin),
                      o.dashArray
                        ? a.setAttribute("stroke-dasharray", o.dashArray)
                        : a.removeAttribute("stroke-dasharray"),
                      o.dashOffset
                        ? a.setAttribute("stroke-dashoffset", o.dashOffset)
                        : a.removeAttribute("stroke-dashoffset"))
                    : a.setAttribute("stroke", "none"),
                  o.fill
                    ? (a.setAttribute("fill", o.fillColor || o.color),
                      a.setAttribute("fill-opacity", o.fillOpacity),
                      a.setAttribute("fill-rule", o.fillRule || "evenodd"))
                    : a.setAttribute("fill", "none"));
              },
              _updatePoly: function (i, a) {
                this._setPath(i, Fa(i._parts, a));
              },
              _updateCircle: function (i) {
                var a = i._point,
                  o = Math.max(Math.round(i._radius), 1),
                  r = Math.max(Math.round(i._radiusY), 1) || o,
                  c = "a" + o + "," + r + " 0 1,0 ",
                  h = i._empty()
                    ? "M0 0"
                    : "M" +
                      (a.x - o) +
                      "," +
                      a.y +
                      c +
                      o * 2 +
                      ",0 " +
                      c +
                      -o * 2 +
                      ",0 ";
                this._setPath(i, h);
              },
              _setPath: function (i, a) {
                i._path.setAttribute("d", a);
              },
              _bringToFront: function (i) {
                ge(i._path);
              },
              _bringToBack: function (i) {
                en(i._path);
              },
            });
          $.vml && qn.include(fo);
          function Ra(i) {
            return $.svg || $.vml ? new qn(i) : null;
          }
          zt.include({
            getRenderer: function (i) {
              var a =
                i.options.renderer ||
                this._getPaneRenderer(i.options.pane) ||
                this.options.renderer ||
                this._renderer;
              return (
                a || (a = this._renderer = this._createRenderer()),
                this.hasLayer(a) || this.addLayer(a),
                a
              );
            },
            _getPaneRenderer: function (i) {
              if (i === "overlayPane" || i === void 0) return !1;
              var a = this._paneRenderers[i];
              return (
                a === void 0 &&
                  ((a = this._createRenderer({ pane: i })),
                  (this._paneRenderers[i] = a)),
                a
              );
            },
            _createRenderer: function (i) {
              return (this.options.preferCanvas && Za(i)) || Ra(i);
            },
          });
          var on = Zn.extend({
            initialize: function (i, a) {
              Zn.prototype.initialize.call(this, this._boundsToLatLngs(i), a);
            },
            setBounds: function (i) {
              return this.setLatLngs(this._boundsToLatLngs(i));
            },
            _boundsToLatLngs: function (i) {
              return (
                (i = Y(i)),
                [
                  i.getSouthWest(),
                  i.getNorthWest(),
                  i.getNorthEast(),
                  i.getSouthEast(),
                ]
              );
            },
          });
          function Qu(i, a) {
            return new on(i, a);
          }
          ((qn.create = di),
            (qn.pointsToPath = Fa),
            (Ei.geometryToLayer = Te),
            (Ei.coordsToLatLng = fl),
            (Ei.coordsToLatLngs = Aa),
            (Ei.latLngToCoords = hl),
            (Ei.latLngsToCoords = Oa),
            (Ei.getFeature = Ui),
            (Ei.asFeature = dl),
            zt.mergeOptions({ boxZoom: !0 }));
          var Ne = ri.extend({
            initialize: function (i) {
              ((this._map = i),
                (this._container = i._container),
                (this._pane = i._panes.overlayPane),
                (this._resetStateTimeout = 0),
                i.on("unload", this._destroy, this));
            },
            addHooks: function () {
              lt(this._container, "mousedown", this._onMouseDown, this);
            },
            removeHooks: function () {
              Rt(this._container, "mousedown", this._onMouseDown, this);
            },
            moved: function () {
              return this._moved;
            },
            _destroy: function () {
              (qt(this._pane), delete this._pane);
            },
            _resetState: function () {
              ((this._resetStateTimeout = 0), (this._moved = !1));
            },
            _clearDeferredResetState: function () {
              this._resetStateTimeout !== 0 &&
                (clearTimeout(this._resetStateTimeout),
                (this._resetStateTimeout = 0));
            },
            _onMouseDown: function (i) {
              if (!i.shiftKey || (i.which !== 1 && i.button !== 1)) return !1;
              (this._clearDeferredResetState(),
                this._resetState(),
                Mn(),
                il(),
                (this._startPoint = this._map.mouseEventToContainerPoint(i)),
                lt(
                  document,
                  {
                    contextmenu: Zi,
                    mousemove: this._onMouseMove,
                    mouseup: this._onMouseUp,
                    keydown: this._onKeyDown,
                  },
                  this,
                ));
            },
            _onMouseMove: function (i) {
              (this._moved ||
                ((this._moved = !0),
                (this._box = bt("div", "leaflet-zoom-box", this._container)),
                ut(this._container, "leaflet-crosshair"),
                this._map.fire("boxzoomstart")),
                (this._point = this._map.mouseEventToContainerPoint(i)));
              var a = new p(this._point, this._startPoint),
                o = a.getSize();
              (Vt(this._box, a.min),
                (this._box.style.width = o.x + "px"),
                (this._box.style.height = o.y + "px"));
            },
            _finish: function () {
              (this._moved &&
                (qt(this._box), $t(this._container, "leaflet-crosshair")),
                si(),
                ga(),
                Rt(
                  document,
                  {
                    contextmenu: Zi,
                    mousemove: this._onMouseMove,
                    mouseup: this._onMouseUp,
                    keydown: this._onKeyDown,
                  },
                  this,
                ));
            },
            _onMouseUp: function (i) {
              if (
                !(i.which !== 1 && i.button !== 1) &&
                (this._finish(), !!this._moved)
              ) {
                (this._clearDeferredResetState(),
                  (this._resetStateTimeout = setTimeout(
                    J(this._resetState, this),
                    0,
                  )));
                var a = new j(
                  this._map.containerPointToLatLng(this._startPoint),
                  this._map.containerPointToLatLng(this._point),
                );
                this._map.fitBounds(a).fire("boxzoomend", { boxZoomBounds: a });
              }
            },
            _onKeyDown: function (i) {
              i.keyCode === 27 &&
                (this._finish(),
                this._clearDeferredResetState(),
                this._resetState());
            },
          });
          (zt.addInitHook("addHandler", "boxZoom", Ne),
            zt.mergeOptions({ doubleClickZoom: !0 }));
          var vl = ri.extend({
            addHooks: function () {
              this._map.on("dblclick", this._onDoubleClick, this);
            },
            removeHooks: function () {
              this._map.off("dblclick", this._onDoubleClick, this);
            },
            _onDoubleClick: function (i) {
              var a = this._map,
                o = a.getZoom(),
                r = a.options.zoomDelta,
                c = i.originalEvent.shiftKey ? o - r : o + r;
              a.options.doubleClickZoom === "center"
                ? a.setZoom(c)
                : a.setZoomAround(i.containerPoint, c);
            },
          });
          (zt.addInitHook("addHandler", "doubleClickZoom", vl),
            zt.mergeOptions({
              dragging: !0,
              inertia: !0,
              inertiaDeceleration: 3400,
              inertiaMaxSpeed: 1 / 0,
              easeLinearity: 0.2,
              worldCopyJump: !1,
              maxBoundsViscosity: 0,
            }));
          var mi = ri.extend({
            addHooks: function () {
              if (!this._draggable) {
                var i = this._map;
                ((this._draggable = new Ri(i._mapPane, i._container)),
                  this._draggable.on(
                    {
                      dragstart: this._onDragStart,
                      drag: this._onDrag,
                      dragend: this._onDragEnd,
                    },
                    this,
                  ),
                  this._draggable.on("predrag", this._onPreDragLimit, this),
                  i.options.worldCopyJump &&
                    (this._draggable.on("predrag", this._onPreDragWrap, this),
                    i.on("zoomend", this._onZoomEnd, this),
                    i.whenReady(this._onZoomEnd, this)));
              }
              (ut(this._map._container, "leaflet-grab leaflet-touch-drag"),
                this._draggable.enable(),
                (this._positions = []),
                (this._times = []));
            },
            removeHooks: function () {
              ($t(this._map._container, "leaflet-grab"),
                $t(this._map._container, "leaflet-touch-drag"),
                this._draggable.disable());
            },
            moved: function () {
              return this._draggable && this._draggable._moved;
            },
            moving: function () {
              return this._draggable && this._draggable._moving;
            },
            _onDragStart: function () {
              var i = this._map;
              if (
                (i._stop(),
                this._map.options.maxBounds &&
                  this._map.options.maxBoundsViscosity)
              ) {
                var a = Y(this._map.options.maxBounds);
                ((this._offsetLimit = A(
                  this._map
                    .latLngToContainerPoint(a.getNorthWest())
                    .multiplyBy(-1),
                  this._map
                    .latLngToContainerPoint(a.getSouthEast())
                    .multiplyBy(-1)
                    .add(this._map.getSize()),
                )),
                  (this._viscosity = Math.min(
                    1,
                    Math.max(0, this._map.options.maxBoundsViscosity),
                  )));
              } else this._offsetLimit = null;
              (i.fire("movestart").fire("dragstart"),
                i.options.inertia &&
                  ((this._positions = []), (this._times = [])));
            },
            _onDrag: function (i) {
              if (this._map.options.inertia) {
                var a = (this._lastTime = +new Date()),
                  o = (this._lastPos =
                    this._draggable._absPos || this._draggable._newPos);
                (this._positions.push(o),
                  this._times.push(a),
                  this._prunePositions(a));
              }
              this._map.fire("move", i).fire("drag", i);
            },
            _prunePositions: function (i) {
              for (; this._positions.length > 1 && i - this._times[0] > 50; )
                (this._positions.shift(), this._times.shift());
            },
            _onZoomEnd: function () {
              var i = this._map.getSize().divideBy(2),
                a = this._map.latLngToLayerPoint([0, 0]);
              ((this._initialWorldOffset = a.subtract(i).x),
                (this._worldWidth = this._map
                  .getPixelWorldBounds()
                  .getSize().x));
            },
            _viscousLimit: function (i, a) {
              return i - (i - a) * this._viscosity;
            },
            _onPreDragLimit: function () {
              if (!(!this._viscosity || !this._offsetLimit)) {
                var i = this._draggable._newPos.subtract(
                    this._draggable._startPos,
                  ),
                  a = this._offsetLimit;
                (i.x < a.min.x && (i.x = this._viscousLimit(i.x, a.min.x)),
                  i.y < a.min.y && (i.y = this._viscousLimit(i.y, a.min.y)),
                  i.x > a.max.x && (i.x = this._viscousLimit(i.x, a.max.x)),
                  i.y > a.max.y && (i.y = this._viscousLimit(i.y, a.max.y)),
                  (this._draggable._newPos = this._draggable._startPos.add(i)));
              }
            },
            _onPreDragWrap: function () {
              var i = this._worldWidth,
                a = Math.round(i / 2),
                o = this._initialWorldOffset,
                r = this._draggable._newPos.x,
                c = ((r - a + o) % i) + a - o,
                h = ((r + a + o) % i) - a - o,
                m = Math.abs(c + o) < Math.abs(h + o) ? c : h;
              ((this._draggable._absPos = this._draggable._newPos.clone()),
                (this._draggable._newPos.x = m));
            },
            _onDragEnd: function (i) {
              var a = this._map,
                o = a.options,
                r = !o.inertia || i.noInertia || this._times.length < 2;
              if ((a.fire("dragend", i), r)) a.fire("moveend");
              else {
                this._prunePositions(+new Date());
                var c = this._lastPos.subtract(this._positions[0]),
                  h = (this._lastTime - this._times[0]) / 1e3,
                  m = o.easeLinearity,
                  y = c.multiplyBy(m / h),
                  z = y.distanceTo([0, 0]),
                  D = Math.min(o.inertiaMaxSpeed, z),
                  k = y.multiplyBy(D / z),
                  tt = D / (o.inertiaDeceleration * m),
                  mt = k.multiplyBy(-tt / 2).round();
                !mt.x && !mt.y
                  ? a.fire("moveend")
                  : ((mt = a._limitOffset(mt, a.options.maxBounds)),
                    ot(function () {
                      a.panBy(mt, {
                        duration: tt,
                        easeLinearity: m,
                        noMoveStart: !0,
                        animate: !0,
                      });
                    }));
              }
            },
          });
          (zt.addInitHook("addHandler", "dragging", mi),
            zt.mergeOptions({ keyboard: !0, keyboardPanDelta: 80 }));
          var ho = ri.extend({
            keyCodes: {
              left: [37],
              right: [39],
              down: [40],
              up: [38],
              zoomIn: [187, 107, 61, 171],
              zoomOut: [189, 109, 54, 173],
            },
            initialize: function (i) {
              ((this._map = i),
                this._setPanDelta(i.options.keyboardPanDelta),
                this._setZoomDelta(i.options.zoomDelta));
            },
            addHooks: function () {
              var i = this._map._container;
              (i.tabIndex <= 0 && (i.tabIndex = "0"),
                lt(
                  i,
                  {
                    focus: this._onFocus,
                    blur: this._onBlur,
                    mousedown: this._onMouseDown,
                  },
                  this,
                ),
                this._map.on(
                  { focus: this._addHooks, blur: this._removeHooks },
                  this,
                ));
            },
            removeHooks: function () {
              (this._removeHooks(),
                Rt(
                  this._map._container,
                  {
                    focus: this._onFocus,
                    blur: this._onBlur,
                    mousedown: this._onMouseDown,
                  },
                  this,
                ),
                this._map.off(
                  { focus: this._addHooks, blur: this._removeHooks },
                  this,
                ));
            },
            _onMouseDown: function () {
              if (!this._focused) {
                var i = document.body,
                  a = document.documentElement,
                  o = i.scrollTop || a.scrollTop,
                  r = i.scrollLeft || a.scrollLeft;
                (this._map._container.focus(), window.scrollTo(r, o));
              }
            },
            _onFocus: function () {
              ((this._focused = !0), this._map.fire("focus"));
            },
            _onBlur: function () {
              ((this._focused = !1), this._map.fire("blur"));
            },
            _setPanDelta: function (i) {
              var a = (this._panKeys = {}),
                o = this.keyCodes,
                r,
                c;
              for (r = 0, c = o.left.length; r < c; r++)
                a[o.left[r]] = [-1 * i, 0];
              for (r = 0, c = o.right.length; r < c; r++)
                a[o.right[r]] = [i, 0];
              for (r = 0, c = o.down.length; r < c; r++) a[o.down[r]] = [0, i];
              for (r = 0, c = o.up.length; r < c; r++) a[o.up[r]] = [0, -1 * i];
            },
            _setZoomDelta: function (i) {
              var a = (this._zoomKeys = {}),
                o = this.keyCodes,
                r,
                c;
              for (r = 0, c = o.zoomIn.length; r < c; r++) a[o.zoomIn[r]] = i;
              for (r = 0, c = o.zoomOut.length; r < c; r++)
                a[o.zoomOut[r]] = -i;
            },
            _addHooks: function () {
              lt(document, "keydown", this._onKeyDown, this);
            },
            _removeHooks: function () {
              Rt(document, "keydown", this._onKeyDown, this);
            },
            _onKeyDown: function (i) {
              if (!(i.altKey || i.ctrlKey || i.metaKey)) {
                var a = i.keyCode,
                  o = this._map,
                  r;
                if (a in this._panKeys) {
                  if (!o._panAnim || !o._panAnim._inProgress)
                    if (
                      ((r = this._panKeys[a]),
                      i.shiftKey && (r = V(r).multiplyBy(3)),
                      o.options.maxBounds &&
                        (r = o._limitOffset(V(r), o.options.maxBounds)),
                      o.options.worldCopyJump)
                    ) {
                      var c = o.wrapLatLng(
                        o.unproject(o.project(o.getCenter()).add(r)),
                      );
                      o.panTo(c);
                    } else o.panBy(r);
                } else if (a in this._zoomKeys)
                  o.setZoom(
                    o.getZoom() + (i.shiftKey ? 3 : 1) * this._zoomKeys[a],
                  );
                else if (
                  a === 27 &&
                  o._popup &&
                  o._popup.options.closeOnEscapeKey
                )
                  o.closePopup();
                else return;
                Zi(i);
              }
            },
          });
          (zt.addInitHook("addHandler", "keyboard", ho),
            zt.mergeOptions({
              scrollWheelZoom: !0,
              wheelDebounceTime: 40,
              wheelPxPerZoomLevel: 60,
            }));
          var Ua = ri.extend({
            addHooks: function () {
              (lt(this._map._container, "wheel", this._onWheelScroll, this),
                (this._delta = 0));
            },
            removeHooks: function () {
              Rt(this._map._container, "wheel", this._onWheelScroll, this);
            },
            _onWheelScroll: function (i) {
              var a = Le(i),
                o = this._map.options.wheelDebounceTime;
              ((this._delta += a),
                (this._lastMousePos = this._map.mouseEventToContainerPoint(i)),
                this._startTime || (this._startTime = +new Date()));
              var r = Math.max(o - (+new Date() - this._startTime), 0);
              (clearTimeout(this._timer),
                (this._timer = setTimeout(J(this._performZoom, this), r)),
                Zi(i));
            },
            _performZoom: function () {
              var i = this._map,
                a = i.getZoom(),
                o = this._map.options.zoomSnap || 0;
              i._stop();
              var r = this._delta / (this._map.options.wheelPxPerZoomLevel * 4),
                c = (4 * Math.log(2 / (1 + Math.exp(-Math.abs(r))))) / Math.LN2,
                h = o ? Math.ceil(c / o) * o : c,
                m = i._limitZoom(a + (this._delta > 0 ? h : -h)) - a;
              ((this._delta = 0),
                (this._startTime = null),
                m &&
                  (i.options.scrollWheelZoom === "center"
                    ? i.setZoom(a + m)
                    : i.setZoomAround(this._lastMousePos, a + m)));
            },
          });
          zt.addInitHook("addHandler", "scrollWheelZoom", Ua);
          var sn = 600;
          zt.mergeOptions({
            tapHold: $.touchNative && $.safari && $.mobile,
            tapTolerance: 15,
          });
          var gl = ri.extend({
            addHooks: function () {
              lt(this._map._container, "touchstart", this._onDown, this);
            },
            removeHooks: function () {
              Rt(this._map._container, "touchstart", this._onDown, this);
            },
            _onDown: function (i) {
              if ((clearTimeout(this._holdTimeout), i.touches.length === 1)) {
                var a = i.touches[0];
                ((this._startPos = this._newPos = new H(a.clientX, a.clientY)),
                  (this._holdTimeout = setTimeout(
                    J(function () {
                      (this._cancel(),
                        this._isTapValid() &&
                          (lt(document, "touchend", ie),
                          lt(
                            document,
                            "touchend touchcancel",
                            this._cancelClickPrevent,
                          ),
                          this._simulateEvent("contextmenu", a)));
                    }, this),
                    sn,
                  )),
                  lt(
                    document,
                    "touchend touchcancel contextmenu",
                    this._cancel,
                    this,
                  ),
                  lt(document, "touchmove", this._onMove, this));
              }
            },
            _cancelClickPrevent: function i() {
              (Rt(document, "touchend", ie),
                Rt(document, "touchend touchcancel", i));
            },
            _cancel: function () {
              (clearTimeout(this._holdTimeout),
                Rt(
                  document,
                  "touchend touchcancel contextmenu",
                  this._cancel,
                  this,
                ),
                Rt(document, "touchmove", this._onMove, this));
            },
            _onMove: function (i) {
              var a = i.touches[0];
              this._newPos = new H(a.clientX, a.clientY);
            },
            _isTapValid: function () {
              return (
                this._newPos.distanceTo(this._startPos) <=
                this._map.options.tapTolerance
              );
            },
            _simulateEvent: function (i, a) {
              var o = new MouseEvent(i, {
                bubbles: !0,
                cancelable: !0,
                view: window,
                screenX: a.screenX,
                screenY: a.screenY,
                clientX: a.clientX,
                clientY: a.clientY,
              });
              ((o._simulated = !0), a.target.dispatchEvent(o));
            },
          });
          (zt.addInitHook("addHandler", "tapHold", gl),
            zt.mergeOptions({ touchZoom: $.touch, bounceAtZoomLimits: !0 }));
          var mo = ri.extend({
            addHooks: function () {
              (ut(this._map._container, "leaflet-touch-zoom"),
                lt(
                  this._map._container,
                  "touchstart",
                  this._onTouchStart,
                  this,
                ));
            },
            removeHooks: function () {
              ($t(this._map._container, "leaflet-touch-zoom"),
                Rt(
                  this._map._container,
                  "touchstart",
                  this._onTouchStart,
                  this,
                ));
            },
            _onTouchStart: function (i) {
              var a = this._map;
              if (
                !(
                  !i.touches ||
                  i.touches.length !== 2 ||
                  a._animatingZoom ||
                  this._zooming
                )
              ) {
                var o = a.mouseEventToContainerPoint(i.touches[0]),
                  r = a.mouseEventToContainerPoint(i.touches[1]);
                ((this._centerPoint = a.getSize()._divideBy(2)),
                  (this._startLatLng = a.containerPointToLatLng(
                    this._centerPoint,
                  )),
                  a.options.touchZoom !== "center" &&
                    (this._pinchStartLatLng = a.containerPointToLatLng(
                      o.add(r)._divideBy(2),
                    )),
                  (this._startDist = o.distanceTo(r)),
                  (this._startZoom = a.getZoom()),
                  (this._moved = !1),
                  (this._zooming = !0),
                  a._stop(),
                  lt(document, "touchmove", this._onTouchMove, this),
                  lt(document, "touchend touchcancel", this._onTouchEnd, this),
                  ie(i));
              }
            },
            _onTouchMove: function (i) {
              if (!(!i.touches || i.touches.length !== 2 || !this._zooming)) {
                var a = this._map,
                  o = a.mouseEventToContainerPoint(i.touches[0]),
                  r = a.mouseEventToContainerPoint(i.touches[1]),
                  c = o.distanceTo(r) / this._startDist;
                if (
                  ((this._zoom = a.getScaleZoom(c, this._startZoom)),
                  !a.options.bounceAtZoomLimits &&
                    ((this._zoom < a.getMinZoom() && c < 1) ||
                      (this._zoom > a.getMaxZoom() && c > 1)) &&
                    (this._zoom = a._limitZoom(this._zoom)),
                  a.options.touchZoom === "center")
                ) {
                  if (((this._center = this._startLatLng), c === 1)) return;
                } else {
                  var h = o._add(r)._divideBy(2)._subtract(this._centerPoint);
                  if (c === 1 && h.x === 0 && h.y === 0) return;
                  this._center = a.unproject(
                    a.project(this._pinchStartLatLng, this._zoom).subtract(h),
                    this._zoom,
                  );
                }
                (this._moved || (a._moveStart(!0, !1), (this._moved = !0)),
                  ht(this._animRequest));
                var m = J(
                  a._move,
                  a,
                  this._center,
                  this._zoom,
                  { pinch: !0, round: !1 },
                  void 0,
                );
                ((this._animRequest = ot(m, this, !0)), ie(i));
              }
            },
            _onTouchEnd: function () {
              if (!this._moved || !this._zooming) {
                this._zooming = !1;
                return;
              }
              ((this._zooming = !1),
                ht(this._animRequest),
                Rt(document, "touchmove", this._onTouchMove, this),
                Rt(document, "touchend touchcancel", this._onTouchEnd, this),
                this._map.options.zoomAnimation
                  ? this._map._animateZoom(
                      this._center,
                      this._map._limitZoom(this._zoom),
                      !0,
                      this._map.options.zoomSnap,
                    )
                  : this._map._resetView(
                      this._center,
                      this._map._limitZoom(this._zoom),
                    ));
            },
          });
          (zt.addInitHook("addHandler", "touchZoom", mo),
            (zt.BoxZoom = Ne),
            (zt.DoubleClickZoom = vl),
            (zt.Drag = mi),
            (zt.Keyboard = ho),
            (zt.ScrollWheelZoom = Ua),
            (zt.TapHold = gl),
            (zt.TouchZoom = mo),
            (T.Bounds = p),
            (T.Browser = $),
            (T.CRS = pt),
            (T.Canvas = pl),
            (T.Circle = cl),
            (T.CircleMarker = Bn),
            (T.Class = yt),
            (T.Control = Re),
            (T.DivIcon = Ls),
            (T.DivOverlay = ze),
            (T.DomEvent = ll),
            (T.DomUtil = An),
            (T.Draggable = Ri),
            (T.Evented = q),
            (T.FeatureGroup = ci),
            (T.GeoJSON = Ei),
            (T.GridLayer = jn),
            (T.Handler = ri),
            (T.Icon = fi),
            (T.ImageOverlay = Un),
            (T.LatLng = P),
            (T.LatLngBounds = j),
            (T.Layer = ti),
            (T.LayerGroup = Dn),
            (T.LineUtil = qu),
            (T.Map = zt),
            (T.Marker = wa),
            (T.Mixin = Ru),
            (T.Path = hi),
            (T.Point = H),
            (T.PolyUtil = uo),
            (T.Polygon = Zn),
            (T.Polyline = zi),
            (T.Popup = Na),
            (T.PosAnimation = On),
            (T.Projection = gs),
            (T.Rectangle = on),
            (T.Renderer = Ce),
            (T.SVG = qn),
            (T.SVGOverlay = _l),
            (T.TileLayer = qi),
            (T.Tooltip = Da),
            (T.Transformation = xn),
            (T.Util = Ut),
            (T.VideoOverlay = ji),
            (T.bind = J),
            (T.bounds = A),
            (T.canvas = Za),
            (T.circle = Ts),
            (T.circleMarker = Ss),
            (T.control = Ti),
            (T.divIcon = Vu),
            (T.extend = G),
            (T.featureGroup = bs),
            (T.geoJSON = ml),
            (T.geoJson = Ca),
            (T.gridLayer = ws),
            (T.icon = Ea),
            (T.imageOverlay = zs),
            (T.latLng = Q),
            (T.latLngBounds = Y),
            (T.layerGroup = Gu),
            (T.map = io),
            (T.marker = xs),
            (T.point = V),
            (T.polygon = Xu),
            (T.polyline = Yu),
            (T.popup = Ms),
            (T.rectangle = Qu),
            (T.setOptions = et),
            (T.stamp = U),
            (T.svg = Ra),
            (T.svgOverlay = Es),
            (T.tileLayer = Xe),
            (T.tooltip = ku),
            (T.transformation = Ki),
            (T.version = b),
            (T.videoOverlay = Hn));
          var _o = window.L;
          ((T.noConflict = function () {
            return ((window.L = _o), this);
          }),
            (window.L = T));
        });
      })(Wo, Wo.exports)),
    Wo.exports
  );
}
var Oi = J_();
const W_ = () => {
    var xe, oi;
    const [R, nt] = ce.useState(null),
      [T, b] = ce.useState(null),
      [G, F] = ce.useState(null),
      [J, Lt] = ce.useState(10),
      [U, C] = ce.useState(!1),
      [I, X] = ce.useState(!1),
      [st, wt] = ce.useState(!0),
      [gt, et] = ce.useState(null),
      Ot = ce.useRef(null),
      vt = ce.useRef(null),
      kt = ce.useRef(null),
      ct = ce.useRef(null),
      Pt = ce.useRef(null);
    (ce.useEffect(() => {
      !vt.current &&
        Ot.current &&
        ((vt.current = Oi.map(Ot.current, {
          zoomControl: !1,
          attributionControl: !1,
        }).setView([0, 0], 2)),
        Oi.tileLayer(
          "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
          { maxZoom: 20 },
        ).addTo(vt.current),
        Oi.control.zoom({ position: "bottomright" }).addTo(vt.current),
        (kt.current = Oi.layerGroup().addTo(vt.current)),
        (ct.current = Oi.layerGroup().addTo(vt.current)),
        (Pt.current = Oi.layerGroup().addTo(vt.current)));
    }, []),
      ce.useEffect(() => {
        var Ut, yt, fe;
        if (!vt.current) return;
        ((Ut = kt.current) == null || Ut.clearLayers(),
          (yt = ct.current) == null || yt.clearLayers(),
          (fe = Pt.current) == null || fe.clearLayers());
        const ot = I ? R : T || R;
        if (!ot) return;
        const ht = [];
        (ot.points.forEach((M) => {
          (Oi.circleMarker(M.coordinates, {
            radius: 6,
            fillColor: "#3b82f6",
            color: "#fff",
            weight: 2,
            opacity: 1,
            fillOpacity: 0.9,
          })
            .bindPopup(`<strong>Network Node:</strong> ${M.name}`)
            .addTo(ct.current),
            ht.push(M.coordinates));
        }),
          ot.cables.forEach((M) => {
            const q = I ? "#94a3b8" : "#10b981",
              H = I ? 2 : 3;
            (Oi.polyline(M.coordinates, {
              color: q,
              weight: H,
              opacity: I ? 0.6 : 0.9,
              dashArray: I ? "5, 5" : void 0,
            })
              .bindPopup(`<strong>Cable Track:</strong> ${M.name}`)
              .addTo(kt.current),
              M.coordinates.forEach((At) => ht.push(At)));
          }),
          st &&
            T != null &&
            T.snappedSegments &&
            T.snappedSegments.forEach((M, q) => {
              const H = gt === `${M.cableId}-${q}`;
              Oi.polyline([M.from, M.to], {
                color: H ? "#ef4444" : "#f59e0b",
                weight: H ? 6 : 4,
                opacity: 1,
                lineCap: "round",
              })
                .bindPopup(
                  `
          <div class="text-xs">
            <p class="font-bold text-slate-800">Bridge Extension</p>
            <p class="text-slate-500">Cable: ${M.cableName}</p>
            <p class="text-amber-600 font-bold mt-1">Length: ${M.distance.toFixed(4)}m</p>
          </div>
        `,
                )
                .addTo(Pt.current);
            }),
          ht.length > 0 &&
            !T &&
            !I &&
            vt.current.fitBounds(Oi.latLngBounds(ht), { padding: [50, 50] }));
      }, [R, T, I, st, gt]));
    const oe = async (ot) => {
        var Ut;
        const ht = (Ut = ot.target.files) == null ? void 0 : Ut[0];
        if (ht) {
          C(!0);
          try {
            const yt = await ht.text(),
              fe = k_(yt);
            (nt(fe), b(null), F(null), X(!1));
          } catch (yt) {
            (console.error("KML Parse error", yt),
              alert(
                "Invalid KML format or missing 'Cables' folder. Please check your file.",
              ));
          } finally {
            C(!1);
          }
        }
      },
      Kt = async () => {
        var Ut;
        if (!R) return;
        (C(!0), await new Promise((yt) => setTimeout(yt, 800)));
        const { snappedData: ot, stats: ht } = Q_(R, J);
        if ((b(ot), F(ht), C(!1), ot.cables.length > 0)) {
          const yt = ot.cables.flatMap((fe) => fe.coordinates);
          yt.length > 0 &&
            ((Ut = vt.current) == null ||
              Ut.fitBounds(Oi.latLngBounds(yt), { padding: [40, 40] }));
        }
      },
      ft = (ot, ht) => {
        var Ut;
        (et(ht),
          (Ut = vt.current) == null || Ut.setView(ot.to, 19, { animate: !0 }));
      },
      se = () => {
        if (!T) return;
        const ot = P_(T),
          ht = new Blob([ot], { type: "application/vnd.google-earth.kml+xml" }),
          Ut = URL.createObjectURL(ht),
          yt = document.createElement("a");
        ((yt.href = Ut),
          (yt.download = "network_optimized.kml"),
          document.body.appendChild(yt),
          yt.click(),
          document.body.removeChild(yt),
          URL.revokeObjectURL(Ut));
      };
    return Z.jsxs("div", {
      className:
        "flex flex-col h-screen overflow-hidden bg-slate-50 font-sans selection:bg-emerald-100",
      children: [
        Z.jsxs("nav", {
          className:
            "bg-white/80 backdrop-blur-md border-b border-slate-200 px-6 py-3 flex items-center justify-between z-30 shadow-sm sticky top-0",
          children: [
            Z.jsxs("div", {
              className: "flex items-center gap-4",
              children: [
                Z.jsx("div", {
                  className:
                    "bg-gradient-to-br from-emerald-500 to-emerald-700 p-2.5 rounded-2xl shadow-lg shadow-emerald-200",
                  children: Z.jsx(j_, { className: "text-white w-5 h-5" }),
                }),
                Z.jsxs("div", {
                  children: [
                    Z.jsx("h1", {
                      className:
                        "text-lg font-black text-slate-800 leading-tight tracking-tight",
                      children: "GeoSnap Pro",
                    }),
                    Z.jsxs("div", {
                      className:
                        "flex items-center gap-2 text-[10px] text-slate-400 font-bold uppercase tracking-[0.15em]",
                      children: [
                        Z.jsxs("span", {
                          className: "flex items-center gap-1",
                          children: [
                            Z.jsx(S_, {
                              className: "w-3 h-3 text-emerald-500",
                            }),
                            " Structure Preserved",
                          ],
                        }),
                        Z.jsx("span", {
                          className: "w-1 h-1 bg-slate-300 rounded-full",
                        }),
                        Z.jsx("span", { children: "Target: Cables/Cable" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            Z.jsxs("div", {
              className: "flex items-center gap-6",
              children: [
                Z.jsxs("div", {
                  className: "hidden md:flex flex-col items-end mr-4",
                  children: [
                    Z.jsxs("div", {
                      className: "flex items-center gap-3",
                      children: [
                        Z.jsx("span", {
                          className:
                            "text-[10px] font-black text-slate-400 uppercase tracking-widest",
                          children: "Snap Radius",
                        }),
                        Z.jsxs("span", {
                          className:
                            "text-sm font-black text-emerald-600 tabular-nums",
                          children: [J, "m"],
                        }),
                      ],
                    }),
                    Z.jsx("input", {
                      type: "range",
                      min: "0.1",
                      max: "50",
                      step: "0.1",
                      value: J,
                      onChange: (ot) => Lt(Number(ot.target.value)),
                      className:
                        "w-48 h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600 mt-1",
                    }),
                  ],
                }),
                Z.jsxs("button", {
                  onClick: se,
                  disabled: !T,
                  className: `flex items-center gap-2 px-6 py-2.5 rounded-2xl font-bold text-sm transition-all shadow-md active:scale-95 ${T ? "bg-slate-900 text-white hover:bg-black hover:shadow-xl" : "bg-slate-200 text-slate-400 cursor-not-allowed"}`,
                  children: [Z.jsx(O_, { className: "w-4 h-4" }), "Export KML"],
                }),
              ],
            }),
          ],
        }),
        Z.jsxs("div", {
          className: "flex flex-1 overflow-hidden",
          children: [
            Z.jsx("aside", {
              className:
                "w-[420px] bg-white border-r border-slate-200 overflow-hidden flex flex-col z-20 shadow-2xl",
              children: Z.jsxs("div", {
                className:
                  "flex-1 overflow-y-auto custom-scrollbar p-6 space-y-8",
                children: [
                  Z.jsxs("section", {
                    className: "space-y-4",
                    children: [
                      Z.jsxs("div", {
                        className: "flex items-center justify-between",
                        children: [
                          Z.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [
                              Z.jsx("span", {
                                className:
                                  "bg-emerald-100 text-emerald-700 text-[10px] font-black px-2 py-0.5 rounded-md",
                                children: "STEP 1",
                              }),
                              Z.jsx("h2", {
                                className:
                                  "text-xs font-black text-slate-500 uppercase tracking-[0.2em]",
                                children: "Data Ingest",
                              }),
                            ],
                          }),
                          R &&
                            Z.jsx("button", {
                              onClick: () => {
                                (nt(null), b(null), F(null));
                              },
                              className:
                                "text-[10px] font-bold text-red-500 hover:underline",
                              children: "Reset",
                            }),
                        ],
                      }),
                      R
                        ? Z.jsxs("div", {
                            className:
                              "bg-emerald-50/50 border border-emerald-100 rounded-[1.5rem] p-5 flex items-center gap-4",
                            children: [
                              Z.jsx("div", {
                                className:
                                  "w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-emerald-200",
                                children: Z.jsx(R_, {
                                  className: "w-6 h-6 text-emerald-600",
                                }),
                              }),
                              Z.jsxs("div", {
                                className: "flex-1",
                                children: [
                                  Z.jsx("p", {
                                    className:
                                      "text-sm font-black text-emerald-900",
                                    children: "Topology Layer Loaded",
                                  }),
                                  Z.jsxs("div", {
                                    className: "flex items-center gap-3 mt-1",
                                    children: [
                                      Z.jsxs("span", {
                                        className:
                                          "text-[10px] font-bold text-emerald-600 bg-white px-2 py-0.5 rounded border border-emerald-100",
                                        children: [
                                          R.cables.length,
                                          " Target Cables",
                                        ],
                                      }),
                                      Z.jsxs("span", {
                                        className:
                                          "text-[10px] font-bold text-blue-600 bg-white px-2 py-0.5 rounded border border-blue-100",
                                        children: [R.points.length, " Nodes"],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          })
                        : Z.jsx("label", {
                            className: "group block cursor-pointer",
                            children: Z.jsxs("div", {
                              className:
                                "border-2 border-dashed border-slate-200 rounded-[2rem] p-10 text-center transition-all group-hover:border-emerald-500 group-hover:bg-emerald-50/30",
                              children: [
                                Z.jsx("div", {
                                  className:
                                    "bg-slate-50 w-16 h-16 rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-100 transition-colors",
                                  children: Z.jsx(G_, {
                                    className:
                                      "h-8 w-8 text-slate-400 group-hover:text-emerald-600 transition-colors",
                                  }),
                                }),
                                Z.jsx("p", {
                                  className:
                                    "text-sm font-black text-slate-700 group-hover:text-emerald-900",
                                  children: "Upload Infrastructure KML",
                                }),
                                Z.jsx("p", {
                                  className:
                                    "text-xs text-slate-400 mt-2 font-medium leading-relaxed",
                                  children:
                                    "System targets Cables/Cable folder specifically while keeping original XML structure intact.",
                                }),
                                Z.jsx("input", {
                                  type: "file",
                                  className: "sr-only",
                                  accept: ".kml",
                                  onChange: oe,
                                }),
                              ],
                            }),
                          }),
                    ],
                  }),
                  R &&
                    Z.jsxs("section", {
                      className:
                        "space-y-5 animate-in slide-in-from-left duration-300",
                      children: [
                        Z.jsxs("div", {
                          className: "flex items-center gap-2",
                          children: [
                            Z.jsx("span", {
                              className:
                                "bg-emerald-100 text-emerald-700 text-[10px] font-black px-2 py-0.5 rounded-md",
                              children: "STEP 2",
                            }),
                            Z.jsx("h2", {
                              className:
                                "text-xs font-black text-slate-500 uppercase tracking-[0.2em]",
                              children: "Bridge Engine",
                            }),
                          ],
                        }),
                        Z.jsxs("div", {
                          className: "grid grid-cols-1 gap-3",
                          children: [
                            Z.jsxs("button", {
                              onClick: Kt,
                              disabled: U,
                              className:
                                "group w-full bg-emerald-600 text-white py-4 rounded-[1.5rem] font-black text-sm hover:bg-emerald-700 transition-all flex items-center justify-center gap-3 shadow-lg shadow-emerald-200 disabled:opacity-50 active:scale-[0.98]",
                              children: [
                                U
                                  ? Z.jsx(Rd, {
                                      className: "w-5 h-5 animate-spin",
                                    })
                                  : Z.jsx(X_, {
                                      className: "w-5 h-5 fill-white",
                                    }),
                                T
                                  ? "Recalculate Bridges"
                                  : "Initiate Connection Bridge",
                                Z.jsx(z_, {
                                  className:
                                    "w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0",
                                }),
                              ],
                            }),
                            Z.jsxs("div", {
                              className: "grid grid-cols-2 gap-2 mt-1",
                              children: [
                                Z.jsxs("button", {
                                  onClick: () => X(!I),
                                  className: `flex items-center justify-center gap-2 py-3 px-4 rounded-2xl border text-[10px] font-black tracking-widest uppercase transition-all ${I ? "bg-slate-800 border-slate-800 text-white shadow-lg" : "bg-white border-slate-200 text-slate-500 hover:border-slate-300"}`,
                                  children: [
                                    I
                                      ? Z.jsx(B_, { className: "w-4 h-4" })
                                      : Z.jsx(N_, { className: "w-4 h-4" }),
                                    "Original",
                                  ],
                                }),
                                Z.jsx("button", {
                                  onClick: () => wt(!st),
                                  className: `flex items-center justify-center gap-2 py-3 px-4 rounded-2xl border text-[10px] font-black tracking-widest uppercase transition-all ${st ? "bg-amber-500 border-amber-500 text-white shadow-lg shadow-amber-100" : "bg-white border-slate-200 text-slate-500 hover:border-slate-300"}`,
                                  children: "Extensions",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  G &&
                    Z.jsxs("section", {
                      className:
                        "space-y-6 pt-2 animate-in fade-in duration-700",
                      children: [
                        Z.jsxs("div", {
                          className: "flex items-center gap-2",
                          children: [
                            Z.jsx("span", {
                              className:
                                "bg-emerald-100 text-emerald-700 text-[10px] font-black px-2 py-0.5 rounded-md",
                              children: "STEP 3",
                            }),
                            Z.jsx("h2", {
                              className:
                                "text-xs font-black text-slate-500 uppercase tracking-[0.2em]",
                              children: "Optimization Audit",
                            }),
                          ],
                        }),
                        Z.jsxs("div", {
                          className: "grid grid-cols-2 gap-4",
                          children: [
                            Z.jsxs("div", {
                              className:
                                "bg-slate-50 border border-slate-100 p-5 rounded-[1.5rem] relative overflow-hidden group",
                              children: [
                                Z.jsx("p", {
                                  className:
                                    "text-[10px] font-bold text-slate-400 uppercase mb-2",
                                  children: "Snaps Performed",
                                }),
                                Z.jsxs("div", {
                                  className: "flex items-baseline gap-1",
                                  children: [
                                    Z.jsx("p", {
                                      className:
                                        "text-3xl font-black text-slate-900 tabular-nums",
                                      children: G.snappedEndpoints,
                                    }),
                                    Z.jsx("span", {
                                      className:
                                        "text-xs font-bold text-slate-400",
                                      children: "ends",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            Z.jsxs("div", {
                              className:
                                "bg-slate-50 border border-slate-100 p-5 rounded-[1.5rem]",
                              children: [
                                Z.jsx("p", {
                                  className:
                                    "text-[10px] font-bold text-slate-400 uppercase mb-2",
                                  children: "Avg Extension",
                                }),
                                Z.jsxs("div", {
                                  className: "flex items-baseline gap-1",
                                  children: [
                                    Z.jsx("p", {
                                      className:
                                        "text-3xl font-black text-slate-900 tabular-nums",
                                      children:
                                        G.averageCorrectionMeters.toFixed(2),
                                    }),
                                    Z.jsx("span", {
                                      className:
                                        "text-xs font-bold text-slate-400",
                                      children: "m",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        Z.jsxs("div", {
                          className:
                            "bg-white border border-slate-200 rounded-[1.5rem] overflow-hidden shadow-sm",
                          children: [
                            Z.jsxs("div", {
                              className:
                                "bg-slate-50/50 px-5 py-3 border-b border-slate-200 flex items-center justify-between",
                              children: [
                                Z.jsx("h4", {
                                  className:
                                    "text-[10px] font-black text-slate-500 uppercase tracking-widest",
                                  children: "Connectivity Log",
                                }),
                                Z.jsxs("span", {
                                  className:
                                    "text-[10px] font-bold text-slate-400",
                                  children: [
                                    ((xe =
                                      T == null ? void 0 : T.snappedSegments) ==
                                    null
                                      ? void 0
                                      : xe.length) || 0,
                                    " Snaps",
                                  ],
                                }),
                              ],
                            }),
                            Z.jsx("div", {
                              className:
                                "max-h-60 overflow-y-auto divide-y divide-slate-100 custom-scrollbar",
                              children:
                                (oi = T == null ? void 0 : T.snappedSegments) ==
                                null
                                  ? void 0
                                  : oi.map((ot, ht) => {
                                      const Ut = `${ot.cableId}-${ht}`;
                                      return Z.jsxs(
                                        "button",
                                        {
                                          onClick: () => ft(ot, Ut),
                                          className: `w-full text-left px-5 py-3 transition-colors flex items-center justify-between hover:bg-slate-50 group ${gt === Ut ? "bg-emerald-50 border-l-4 border-l-emerald-500" : ""}`,
                                          children: [
                                            Z.jsxs("div", {
                                              children: [
                                                Z.jsx("p", {
                                                  className:
                                                    "text-xs font-black text-slate-800 truncate max-w-[180px]",
                                                  children: ot.cableName,
                                                }),
                                                Z.jsxs("p", {
                                                  className:
                                                    "text-[10px] font-bold text-amber-600 mt-0.5",
                                                  children: [
                                                    "Snapped ",
                                                    ot.distance.toFixed(4),
                                                    "m",
                                                  ],
                                                }),
                                              ],
                                            }),
                                            Z.jsx(M_, {
                                              className: `w-4 h-4 text-slate-300 group-hover:translate-x-1 transition-transform ${gt === Ut ? "text-emerald-500" : ""}`,
                                            }),
                                          ],
                                        },
                                        Ut,
                                      );
                                    }),
                            }),
                          ],
                        }),
                      ],
                    }),
                ],
              }),
            }),
            Z.jsxs("main", {
              className: "flex-1 relative",
              children: [
                Z.jsx("div", { ref: Ot, className: "h-full w-full z-10" }),
                Z.jsxs("div", {
                  className: "absolute top-8 right-8 z-20 flex flex-col gap-4",
                  children: [
                    Z.jsxs("div", {
                      className:
                        "bg-white/80 backdrop-blur-xl p-5 rounded-[2rem] shadow-2xl border border-white/50 space-y-4 min-w-[200px]",
                      children: [
                        Z.jsxs("div", {
                          className: "flex items-center gap-3",
                          children: [
                            Z.jsx("div", {
                              className:
                                "w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-sm",
                            }),
                            Z.jsx("div", {
                              children: Z.jsx("p", {
                                className:
                                  "text-[11px] font-black text-slate-700 leading-none",
                                children: "Logical Node",
                              }),
                            }),
                          ],
                        }),
                        Z.jsxs("div", {
                          className: "flex items-center gap-3",
                          children: [
                            Z.jsx("div", {
                              className:
                                "w-4 h-1.5 bg-emerald-500 rounded-full",
                            }),
                            Z.jsx("div", {
                              children: Z.jsx("p", {
                                className:
                                  "text-[11px] font-black text-slate-700 leading-none",
                                children: "Target Cable",
                              }),
                            }),
                          ],
                        }),
                        Z.jsxs("div", {
                          className: "flex items-center gap-3",
                          children: [
                            Z.jsx("div", {
                              className:
                                "w-4 h-1.5 bg-amber-500 rounded-full ring-4 ring-amber-100 ring-offset-1",
                            }),
                            Z.jsx("div", {
                              children: Z.jsx("p", {
                                className:
                                  "text-[11px] font-black text-slate-700 leading-none",
                                children: "Snap Extension",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    gt &&
                      Z.jsxs("div", {
                        className:
                          "bg-slate-900 text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3",
                        children: [
                          Z.jsx(w_, { className: "w-4 h-4 text-emerald-400" }),
                          Z.jsx("span", {
                            className: "text-xs font-bold",
                            children: "Viewing Correction Point",
                          }),
                          Z.jsx("button", {
                            onClick: () => et(null),
                            className: "ml-2 p-1 hover:bg-white/10 rounded-lg",
                            children: Z.jsx(Rd, {
                              className: "w-3 h-3 text-slate-400",
                            }),
                          }),
                        ],
                      }),
                  ],
                }),
                U &&
                  Z.jsx("div", {
                    className:
                      "absolute inset-0 bg-slate-900/60 backdrop-blur-md z-50 flex items-center justify-center transition-all",
                    children: Z.jsxs("div", {
                      className:
                        "bg-white p-12 rounded-[3.5rem] shadow-2xl flex flex-col items-center gap-8 max-w-sm text-center",
                      children: [
                        Z.jsx("div", {
                          className:
                            "w-24 h-24 border-[8px] border-emerald-50 border-t-emerald-600 rounded-full animate-spin",
                        }),
                        Z.jsxs("div", {
                          children: [
                            Z.jsx("h3", {
                              className:
                                "text-2xl font-black text-slate-900 tracking-tight",
                              children: "Updating Structure",
                            }),
                            Z.jsx("p", {
                              className:
                                "text-sm text-slate-500 mt-3 font-medium leading-relaxed",
                              children:
                                "Precisely extending 'Cables/Cable' endpoints to nearest infrastructure nodes within target folders.",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
              ],
            }),
          ],
        }),
        Z.jsx("style", {
          dangerouslySetInnerHTML: {
            __html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e2e8f0;
          border-radius: 10px;
        }
        .leaflet-popup-content-wrapper {
          border-radius: 1rem;
          padding: 4px;
        }
      `,
          },
        }),
      ],
    });
  },
  Gd = document.getElementById("root");
if (!Gd) throw new Error("Could not find root element to mount to");
const F_ = __.createRoot(Gd);
F_.render(Z.jsx(s_.StrictMode, { children: Z.jsx(W_, {}) }));
