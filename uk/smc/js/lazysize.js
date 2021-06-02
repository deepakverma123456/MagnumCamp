!(function (e, t) {
  t = t(e, e.document);
  (e.lazySizes = t), "object" == typeof module && module.exports && (module.exports = t);
})(window, function (a, c) {
  "use strict";
  if (c.getElementsByClassName) {
      var d,
          n,
          i,
          t,
          s,
          o,
          u,
          f,
          m,
          z,
          g,
          r,
          h,
          y,
          v,
          p,
          C,
          b,
          A,
          E,
          N,
          e,
          l,
          w,
          M,
          _,
          W,
          x,
          B,
          F,
          S,
          L,
          R,
          k,
          O,
          P,
          T,
          $,
          D,
          H,
          I,
          q,
          j = c.documentElement,
          G = a.Date,
          J = a.HTMLPictureElement,
          K = "addEventListener",
          Q = "getAttribute",
          U = a[K],
          V = a.setTimeout,
          X = a.requestAnimationFrame || V,
          Y = a.requestIdleCallback,
          Z = /^picture$/i,
          ee = ["load", "error", "lazyincluded", "_lazyloaded"],
          te = {},
          ne = Array.prototype.forEach,
          ae = function (e, t) {
              return te[t] || (te[t] = new RegExp("(\\s|^)" + t + "(\\s|$)")), te[t].test(e[Q]("class") || "") && te[t];
          },
          ie = function (e, t) {
              ae(e, t) || e.setAttribute("class", (e[Q]("class") || "").trim() + " " + t);
          },
          se = function (e, t) {
              (t = ae(e, t)) && e.setAttribute("class", (e[Q]("class") || "").replace(t, " "));
          },
          oe = function (t, n, e) {
              var a = e ? K : "removeEventListener";
              e && oe(t, n),
                  ee.forEach(function (e) {
                      t[a](e, n);
                  });
          },
          re = function (e, t, n, a, i) {
              var s = c.createEvent("CustomEvent");
              return s.initCustomEvent(t, !a, !i, n || {}), e.dispatchEvent(s), s;
          },
          le = function (e, t) {
              var n;
              !J && (n = a.picturefill || d.pf) ? n({ reevaluate: !0, elements: [e] }) : t && t.src && (e.src = t.src);
          },
          ce = function (e, t) {
              return (getComputedStyle(e, null) || {})[t];
          },
          de = function (e, t, n) {
              for (n = n || e.offsetWidth; n < d.minSize && t && !e._lazysizesWidth; ) (n = t.offsetWidth), (t = t.parentNode);
              return n;
          },
          ue = ((s = []), (o = t = []), (ve._lsFlush = ye), ve),
          fe = function (n, e) {
              return e
                  ? function () {
                        ue(n);
                    }
                  : function () {
                        var e = this,
                            t = arguments;
                        ue(function () {
                            n.apply(e, t);
                        });
                    };
          },
          me = function (e) {
              var t,
                  n,
                  a = function () {
                      (t = null), e();
                  },
                  i = function () {
                      var e = G.now() - n;
                      e < 99 ? V(i, 99 - e) : (Y || a)(a);
                  };
              return function () {
                  (n = G.now()), (t = t || V(i, 99));
              };
          },
          ze =
              ((W = /^img$/i),
              (x = /^iframe$/i),
              (B = "onscroll" in a && !/glebot/.test(navigator.userAgent)),
              (L = -1),
              (R = function (e) {
                  S--, e && e.target && oe(e.target, R), (e && !(S < 0) && e.target) || (S = 0);
              }),
              (e = pe),
              (w = S = F = 0),
              (M = 666),
              (_ = Y
                  ? function () {
                        Y(Ce, { timeout: M }), 666 !== M && (M = 666);
                    }
                  : fe(function () {
                        V(Ce);
                    }, !0)),
              (O = fe(be)),
              (P = function (e) {
                  O({ target: e.target });
              }),
              (T = fe(function (e, t, n, a, i) {
                  var s, o, r, l;
                  (r = re(e, "lazybeforeunveil", t)).defaultPrevented ||
                      (a && (n ? ie(e, d.autosizesClass) : e.setAttribute("sizes", a)),
                      (n = e[Q](d.srcsetAttr)),
                      (a = e[Q](d.srcAttr)),
                      i && (o = (s = e.parentNode) && Z.test(s.nodeName || "")),
                      (l = t.firesLoad || ("src" in e && (n || a || o))),
                      (r = { target: e }),
                      l && (oe(e, R, !0), clearTimeout(z), (z = V(R, 2500)), ie(e, d.loadingClass), oe(e, P, !0)),
                      o && ne.call(s.getElementsByTagName("source"), Ae),
                      n
                          ? e.setAttribute("srcset", n)
                          : a &&
                            !o &&
                            (x.test(e.nodeName)
                                ? (function (t, n) {
                                      try {
                                          t.contentWindow.location.replace(n);
                                      } catch (e) {
                                          t.src = n;
                                      }
                                  })(e, a)
                                : (e.src = a)),
                      (n || o) && le(e, { src: a })),
                      e._lazyRace && delete e._lazyRace,
                      se(e, d.lazyClass),
                      ue(function () {
                          (!l || (e.complete && 1 < e.naturalWidth)) && (l ? R(r) : S--, be(r));
                      }, !0);
              })),
              (D = function () {
                  var e;
                  m ||
                      (G.now() - r < 999
                          ? V(D, 999)
                          : ((e = me(function () {
                                (d.loadMode = 3), k();
                            })),
                            (m = !0),
                            (d.loadMode = 3),
                            k(),
                            U(
                                "scroll",
                                function () {
                                    3 == d.loadMode && (d.loadMode = 2), e();
                                },
                                !0
                            )));
              }),
              {
                  _: function () {
                      (r = G.now()),
                          (u = c.getElementsByClassName(d.lazyClass)),
                          (f = c.getElementsByClassName(d.lazyClass + " " + d.preloadClass)),
                          (N = d.hFac),
                          U("scroll", k, !0),
                          U("resize", k, !0),
                          a.MutationObserver ? new MutationObserver(k).observe(j, { childList: !0, subtree: !0, attributes: !0 }) : (j[K]("DOMNodeInserted", k, !0), j[K]("DOMAttrModified", k, !0), setInterval(k, 999)),
                          U("hashchange", k, !0),
                          ["focus", "mouseover", "click", "load", "transitionend", "animationend", "webkitAnimationEnd"].forEach(function (e) {
                              c[K](e, k, !0);
                          }),
                          /d$|^c/.test(c.readyState) ? D() : (U("load", D), c[K]("DOMContentLoaded", k), V(D, 2e4)),
                          u.length ? (pe(), ue._lsFlush()) : k();
                  },
                  checkElems: (k = function (e) {
                      var t;
                      (e = !0 === e) && (M = 44), l || ((l = !0), (t = 125 - (G.now() - w)) < 0 && (t = 0), e || (t < 9 && Y) ? _() : V(_, t));
                  }),
                  unveil: ($ = function (e) {
                      var t,
                          n = W.test(e.nodeName),
                          a = n && (e[Q](d.sizesAttr) || e[Q]("sizes")),
                          i = "auto" == a;
                      ((!i && m) || !n || (!e.src && !e.srcset) || e.complete || ae(e, d.errorClass)) && ((t = re(e, "lazyunveilread").detail), i && ge.updateElem(e, !0, e.offsetWidth), (e._lazyRace = !0), S++, T(e, t, i, a, n));
                  }),
              }),
          ge =
              ((I = fe(function (e, t, n, a) {
                  var i, s, o;
                  if (((e._lazysizesWidth = a), e.setAttribute("sizes", (a += "px")), Z.test(t.nodeName || ""))) for (s = 0, o = (i = t.getElementsByTagName("source")).length; s < o; s++) i[s].setAttribute("sizes", a);
                  n.detail.dataAttr || le(e, n.detail);
              })),
              {
                  _: function () {
                      (H = c.getElementsByClassName(d.autosizesClass)), U("resize", q);
                  },
                  checkElems: (q = me(function () {
                      var e,
                          t = H.length;
                      if (t) for (e = 0; e < t; e++) Ee(H[e]);
                  })),
                  updateElem: Ee,
              }),
          he = function () {
              he.i || ((he.i = !0), ge._(), ze._());
          };
      return (
          (function () {
              var e,
                  t = {
                      lazyClass: "lazyload",
                      loadedClass: "lazyloaded",
                      loadingClass: "lazyloading",
                      preloadClass: "lazypreload",
                      errorClass: "lazyerror",
                      autosizesClass: "lazyautosizes",
                      srcAttr: "data-src",
                      srcsetAttr: "data-srcset",
                      sizesAttr: "data-sizes",
                      minSize: 40,
                      customMedia: {},
                      init: !0,
                      expFactor: 1.5,
                      hFac: 0.8,
                      loadMode: 2,
                  };
              for (e in ((d = a.lazySizesConfig || a.lazysizesConfig || {}), t)) e in d || (d[e] = t[e]);
              (a.lazySizesConfig = d),
                  V(function () {
                      d.init && he();
                  });
          })(),
          { cfg: d, autoSizer: ge, loader: ze, init: he, uP: le, aC: ie, rC: se, hC: ae, fire: re, gW: de, rAF: ue }
      );
  }
  function ye() {
      var e = o;
      for (o = t.length ? s : t, i = !(n = !0); e.length; ) e.shift()();
      n = !1;
  }
  function ve(e, t) {
      n && !t ? e.apply(this, arguments) : (o.push(e), i || ((i = !0), (c.hidden ? V : X)(ye)));
  }
  function pe() {
      var e, t, n, a, i, s, o, r, l;
      if ((g = d.loadMode) && S < 8 && (e = u.length)) {
          (t = 0),
              L++,
              null == E && ("expand" in d || (d.expand = 500 < j.clientHeight && 500 < j.clientWidth ? 500 : 370), (A = d.expand), (E = A * d.expFactor)),
              F < E && S < 1 && 2 < L && 2 < g && !c.hidden ? ((F = E), (L = 0)) : (F = 1 < g && 1 < L && S < 6 ? A : 0);
          for (; t < e; t++)
              if (u[t] && !u[t]._lazyRace)
                  if (B)
                      if (
                          (l !== (s = !(r = u[t][Q]("data-expand")) || !(s = +r) ? F : s) && ((h = innerWidth + s * N), (y = innerHeight + s), (o = -1 * s), (l = s)),
                          (n = u[t].getBoundingClientRect()),
                          (b = n.bottom) >= o &&
                              (v = n.top) <= y &&
                              (C = n.right) >= o * N &&
                              (p = n.left) <= h &&
                              (b || C || p || v) &&
                              ((m && S < 3 && !r && (g < 3 || L < 4)) ||
                                  (function (e, t) {
                                      var n,
                                          a = e,
                                          i = "hidden" == ce(c.body, "visibility") || "hidden" != ce(e, "visibility");
                                      for (v -= t, b += t, p -= t, C += t; i && (a = a.offsetParent) && a != c.body && a != j; )
                                          (i = 0 < (ce(a, "opacity") || 1)) && "visible" != ce(a, "overflow") && ((n = a.getBoundingClientRect()), (i = C > n.left && p < n.right && b > n.top - 1 && v < n.bottom + 1));
                                      return i;
                                  })(u[t], s)))
                      ) {
                          if (($(u[t]), (i = !0), 9 < S)) break;
                      } else !i && m && !a && S < 4 && L < 4 && 2 < g && (f[0] || d.preloadAfterLoad) && (f[0] || (!r && (b || C || p || v || "auto" != u[t][Q](d.sizesAttr)))) && (a = f[0] || u[t]);
                  else $(u[t]);
          a && !i && $(a);
      }
  }
  function Ce() {
      (l = !1), (w = G.now()), e();
  }
  function be(e) {
      ie(e.target, d.loadedClass), se(e.target, d.loadingClass), oe(e.target, P);
  }
  function Ae(e) {
      var t,
          n = e[Q](d.srcsetAttr);
      (t = d.customMedia[e[Q]("data-media") || e[Q]("media")]) && e.setAttribute("media", t), n && e.setAttribute("srcset", n), t && ((t = e.parentNode).insertBefore(e.cloneNode(), e), t.removeChild(e));
  }
  function Ee(e, t, n) {
      var a = e.parentNode;
      a && ((n = de(e, a, n)), (t = re(e, "lazybeforesizes", { width: n, dataAttr: !!t })).defaultPrevented || ((n = t.detail.width) && n !== e._lazysizesWidth && I(e, a, t, n)));
  }
});
