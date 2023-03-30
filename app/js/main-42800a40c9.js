/*! For license information please see main.js.LICENSE.txt */
(() => {
  var e = {
      595: () => {
        document.querySelectorAll(".accordion-start-js").forEach((e) => {
          e.addEventListener("click", () => {
            e.classList.toggle("open");
            let t = e.nextElementSibling;
            t.classList.contains("open")
              ? (console.log("test"),
                document
                  .querySelectorAll(".accordion-content-js")
                  .forEach((e) => (e.style.maxHeight = null)),
                document
                  .querySelectorAll(".accordion-content-js")
                  .forEach((e) => t.classList.remove("open")))
              : (document
                  .querySelectorAll(".accordion-content-js")
                  .forEach((e) => (e.style.maxHeight = null)),
                document
                  .querySelectorAll(".accordion-content-js")
                  .forEach((e) => t.classList.add("open")));
          });
        });
      },
      429: () => {
        ({
          el: document.querySelector(".btn-up"),
          show() {
            this.el.classList.remove("btn-up_hide");
          },
          hide() {
            this.el.classList.add("btn-up_hide");
          },
          addEventListener() {
            window.addEventListener("scroll", () => {
              (window.scrollY || document.documentElement.scrollTop) > 400
                ? this.show()
                : this.hide();
            }),
              (document.querySelector(".btn-up").onclick = () => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              });
          },
        }.addEventListener(),
          console.log("qq"));
      },
      339: () => {
        document.querySelectorAll(".dropdown").forEach(function (e) {
          const t = e.querySelectorAll(".dropdown__list-item"),
            s = e.querySelector(".dropdown__input-hidden"),
            n = e.querySelector(".dropdown__button span"),
            i = e.querySelector(".dropdown__list");
          n.addEventListener("click", function () {
            i.classList.toggle("visible"), this.classList.toggle("active");
          }),
            t.forEach(function (e) {
              e.addEventListener("click", function (e) {
                e.stopPropagation(),
                  (n.innerText = this.innerText),
                  n.focus(),
                  (s.value = this.dataset.value),
                  i.classList.remove("visible"),
                  n.classList.remove("active"),
                  n.classList.add("icon");
              });
            }),
            document.addEventListener("click", function (e) {
              e.target !== n &&
                (i.classList.remove("visible"), n.classList.remove("active"));
            }),
            document.addEventListener("keydown", function (e) {
              ("Tab" !== e.key && "Escape" !== e.key) ||
                (i.classList.remove("visible"), n.classList.remove("active"));
            });
        });
      },
      638: () => {
        (() => {
          const e = document.querySelector(".follow-cursor");
          window.addEventListener("mousemove", (t) => {
            const s = t.target;
            s &&
              (s.closest(
                ".content-text__inner, .sidebar-cart__items,.cards-main__item, .cards-main__show-more, .main__slider_inside, .main-menu__inner,.commission__inner,.payment__inner, .main__slider,.about,.cart-about__item, h1,.payment__consultation, .important__header, button,.list__item, .header-politics, a, button, picture, h1, h2, h3, p, ul, li, input,.btn-up,tr,th, span,.testing__inner,.apply-testing__inner,.skate-insurance__inner,.calendar__show,.calendar__body,.testing__inner,.contact__map,.contact__item,.contact__description,.searching-results__content,.description-search,.magazine__block,.magazine__content-text,.school-search__map,.school-search__container,.main-error__text "
              )
                ? (e.classList.remove("follow-cursor"),
                  e.classList.add("hidden-mouse"))
                : (e.classList.add("follow-cursor"),
                  e.classList.remove("hidden-mouse")),
              (e.style.left = t.clientX + 20 + "px"),
              (e.style.top = t.clientY + 20 + "px"));
          });
        })();
      },
      494: () => {
        window.addEventListener("scroll", function () {
          const e = document.querySelector(".header-block");
          window.scrollY > 0
            ? e.classList.add("active-scroll")
            : e.classList.remove("active-scroll");
        }),
          window.addEventListener("scroll", function () {
            const { scrollY: e } = window,
              t = document.querySelector(".header-block").offsetHeight,
              s = document.querySelector(".main-layout__inner"),
              n = s.parentElement,
              i = n.getBoundingClientRect().top + e,
              r = document.querySelector(".main-layout__sidebar");
            Math.floor(i + n.clientHeight - t),
              (s.style.top = e + t > i ? t + 4 + "px" : 0),
              (r.style.top = e + t > i ? t + 4 + "px" : 0);
          });
      },
      218: () => {
        const e = document.querySelectorAll(".js-map"),
          t = document.querySelector(".mobile-search__arrow");
        if (e.length) {
          const s = document.querySelector(".mobile-search__description"),
            n = document.querySelector(".school-search__wrap"),
            i = document.querySelector(".school-search__map");
          e.forEach((e) => {
            e.addEventListener("click", () => {
              n.classList.add("black-active"),
                i.classList.add("active"),
                s.classList.add("active-black");
            });
          }),
            t.addEventListener("click", () => {
              n.classList.remove("black-active"),
                i.classList.remove("active"),
                s.classList.remove("active-black");
            });
        }
        const s = document.querySelectorAll(".js-list");
        if (s.length) {
          const e = document.querySelector(".mobile-search__description"),
            n = document.querySelector(".school-search__wrap"),
            i = document.querySelector(".js-container");
          s.forEach((t) => {
            t.addEventListener("click", () => {
              n.classList.add("white-active"),
                e.classList.add("active-white"),
                i.classList.add("active");
            });
          }),
            t.addEventListener("click", () => {
              n.classList.remove("white-active"),
                e.classList.remove("active-white"),
                i.classList.remove("active");
            });
        }
      },
      851: () => {
        const e = document.querySelector(".show-more"),
          t = document.querySelectorAll(".cards-main__item").length;
        let s = 6;
        t &&
          e.addEventListener("click", () => {
            s += 6;
            const n = Array.from(
              document.querySelector(".cards-main__items").children
            ).slice(0, s);
            n.forEach((e) => e.classList.add("is-visible")),
              n.length === t && (e.style.display = "none");
          });
      },
      598: () => {
        function e(e) {
          var t = !0,
            s = !1,
            n = null,
            i = {
              text: !0,
              search: !0,
              url: !0,
              tel: !0,
              email: !0,
              password: !0,
              number: !0,
              date: !0,
              month: !0,
              week: !0,
              time: !0,
              datetime: !0,
              "datetime-local": !0,
            };
          function r(e) {
            return !!(
              e &&
              e !== document &&
              "HTML" !== e.nodeName &&
              "BODY" !== e.nodeName &&
              "classList" in e &&
              "contains" in e.classList
            );
          }
          function o(e) {
            e.classList.contains("focus-visible") ||
              (e.classList.add("focus-visible"),
              e.setAttribute("data-focus-visible-added", ""));
          }
          function a(e) {
            t = !1;
          }
          function l() {
            document.addEventListener("mousemove", c),
              document.addEventListener("mousedown", c),
              document.addEventListener("mouseup", c),
              document.addEventListener("pointermove", c),
              document.addEventListener("pointerdown", c),
              document.addEventListener("pointerup", c),
              document.addEventListener("touchmove", c),
              document.addEventListener("touchstart", c),
              document.addEventListener("touchend", c);
          }
          function c(e) {
            (e.target.nodeName && "html" === e.target.nodeName.toLowerCase()) ||
              ((t = !1),
              document.removeEventListener("mousemove", c),
              document.removeEventListener("mousedown", c),
              document.removeEventListener("mouseup", c),
              document.removeEventListener("pointermove", c),
              document.removeEventListener("pointerdown", c),
              document.removeEventListener("pointerup", c),
              document.removeEventListener("touchmove", c),
              document.removeEventListener("touchstart", c),
              document.removeEventListener("touchend", c));
          }
          document.addEventListener(
            "keydown",
            function (s) {
              s.metaKey ||
                s.altKey ||
                s.ctrlKey ||
                (r(e.activeElement) && o(e.activeElement), (t = !0));
            },
            !0
          ),
            document.addEventListener("mousedown", a, !0),
            document.addEventListener("pointerdown", a, !0),
            document.addEventListener("touchstart", a, !0),
            document.addEventListener(
              "visibilitychange",
              function (e) {
                "hidden" === document.visibilityState && (s && (t = !0), l());
              },
              !0
            ),
            l(),
            e.addEventListener(
              "focus",
              function (e) {
                var s, n, a;
                r(e.target) &&
                  (t ||
                    ((n = (s = e.target).type),
                    ("INPUT" === (a = s.tagName) && i[n] && !s.readOnly) ||
                      ("TEXTAREA" === a && !s.readOnly) ||
                      s.isContentEditable)) &&
                  o(e.target);
              },
              !0
            ),
            e.addEventListener(
              "blur",
              function (e) {
                var t;
                r(e.target) &&
                  (e.target.classList.contains("focus-visible") ||
                    e.target.hasAttribute("data-focus-visible-added")) &&
                  ((s = !0),
                  window.clearTimeout(n),
                  (n = window.setTimeout(function () {
                    s = !1;
                  }, 100)),
                  (t = e.target).hasAttribute("data-focus-visible-added") &&
                    (t.classList.remove("focus-visible"),
                    t.removeAttribute("data-focus-visible-added")));
              },
              !0
            ),
            e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && e.host
              ? e.host.setAttribute("data-js-focus-visible", "")
              : e.nodeType === Node.DOCUMENT_NODE &&
                (document.documentElement.classList.add("js-focus-visible"),
                document.documentElement.setAttribute(
                  "data-js-focus-visible",
                  ""
                ));
        }
        if ("undefined" != typeof window && "undefined" != typeof document) {
          var t;
          window.applyFocusVisiblePolyfill = e;
          try {
            t = new CustomEvent("focus-visible-polyfill-ready");
          } catch (e) {
            (t = document.createEvent("CustomEvent")).initCustomEvent(
              "focus-visible-polyfill-ready",
              !1,
              !1,
              {}
            );
          }
          window.dispatchEvent(t);
        }
        "undefined" != typeof document && e(document);
      },
      949: (e) => {
        window,
          (e.exports = (function (e) {
            var t = {};
            function s(n) {
              if (t[n]) return t[n].exports;
              var i = (t[n] = { i: n, l: !1, exports: {} });
              return (
                e[n].call(i.exports, i, i.exports, s), (i.l = !0), i.exports
              );
            }
            return (
              (s.m = e),
              (s.c = t),
              (s.d = function (e, t, n) {
                s.o(e, t) ||
                  Object.defineProperty(e, t, { enumerable: !0, get: n });
              }),
              (s.r = function (e) {
                "undefined" != typeof Symbol &&
                  Symbol.toStringTag &&
                  Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module",
                  }),
                  Object.defineProperty(e, "__esModule", { value: !0 });
              }),
              (s.t = function (e, t) {
                if ((1 & t && (e = s(e)), 8 & t)) return e;
                if (4 & t && "object" == typeof e && e && e.__esModule)
                  return e;
                var n = Object.create(null);
                if (
                  (s.r(n),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: e,
                  }),
                  2 & t && "string" != typeof e)
                )
                  for (var i in e)
                    s.d(
                      n,
                      i,
                      function (t) {
                        return e[t];
                      }.bind(null, i)
                    );
                return n;
              }),
              (s.n = function (e) {
                var t =
                  e && e.__esModule
                    ? function () {
                        return e.default;
                      }
                    : function () {
                        return e;
                      };
                return s.d(t, "a", t), t;
              }),
              (s.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
              }),
              (s.p = ""),
              s((s.s = 0))
            );
          })([
            function (e, t, s) {
              "use strict";
              s.r(t);
              var n,
                i = "fslightbox-",
                r = "".concat(i, "styles"),
                o = "".concat(i, "cursor-grabbing"),
                a = "".concat(i, "full-dimension"),
                l = "".concat(i, "flex-centered"),
                c = "".concat(i, "open"),
                d = "".concat(i, "transform-transition"),
                u = "".concat(i, "absoluted"),
                p = "".concat(i, "slide-btn"),
                h = "".concat(p, "-container"),
                m = "".concat(i, "fade-in"),
                f = "".concat(i, "fade-out"),
                g = m + "-strong",
                v = f + "-strong",
                b = "".concat(i, "opacity-"),
                w = "".concat(b, "1"),
                x = "".concat(i, "source");
              function y(e) {
                return (y =
                  "function" == typeof Symbol &&
                  "symbol" == typeof Symbol.iterator
                    ? function (e) {
                        return typeof e;
                      }
                    : function (e) {
                        return e &&
                          "function" == typeof Symbol &&
                          e.constructor === Symbol &&
                          e !== Symbol.prototype
                          ? "symbol"
                          : typeof e;
                      })(e);
              }
              function S(e) {
                var t,
                  s = e.props,
                  n = 0,
                  i = {};
                (this.getSourceTypeFromLocalStorageByUrl = function (e) {
                  return t[e] ? t[e] : r(e);
                }),
                  (this.handleReceivedSourceTypeForUrl = function (e, s) {
                    !1 === i[s] &&
                      (n--,
                      "invalid" !== e ? (i[s] = e) : delete i[s],
                      0 === n &&
                        ((function (e, t) {
                          for (var s in t) e[s] = t[s];
                        })(t, i),
                        localStorage.setItem(
                          "fslightbox-types",
                          JSON.stringify(t)
                        )));
                  });
                var r = function (e) {
                  n++, (i[e] = !1);
                };
                s.disableLocalStorage
                  ? ((this.getSourceTypeFromLocalStorageByUrl = function () {}),
                    (this.handleReceivedSourceTypeForUrl = function () {}))
                  : (t = JSON.parse(
                      localStorage.getItem("fslightbox-types")
                    )) ||
                    ((t = {}), (this.getSourceTypeFromLocalStorageByUrl = r));
              }
              function C(e, t, s, n) {
                var i = e.data,
                  r = e.elements.sources,
                  o = s / n,
                  a = 0;
                this.adjustSize = function () {
                  if ((a = i.maxSourceWidth / o) < i.maxSourceHeight)
                    return s < i.maxSourceWidth && (a = n), l();
                  (a = n > i.maxSourceHeight ? i.maxSourceHeight : n), l();
                };
                var l = function () {
                  (r[t].style.width = a * o + "px"),
                    (r[t].style.height = a + "px");
                };
              }
              function E(e, t) {
                var s = this,
                  n = e.collections.sourceSizers,
                  i = e.elements,
                  r = i.sourceAnimationWrappers,
                  o = i.sourceMainWrappers,
                  a = i.sources,
                  l = e.resolve;
                function c(e, s) {
                  (n[t] = l(C, [t, e, s])), n[t].adjustSize();
                }
                this.runActions = function (e, n) {
                  a[t].classList.add(w),
                    r[t].classList.add(g),
                    o[t].removeChild(o[t].firstChild),
                    c(e, n),
                    (s.runActions = c);
                };
              }
              function T(e, t) {
                var s,
                  n = this,
                  i = e.elements.sources,
                  r = e.props,
                  o = (0, e.resolve)(E, [t]);
                (this.handleImageLoad = function (e) {
                  var t = e.target,
                    s = t.naturalWidth,
                    n = t.naturalHeight;
                  o.runActions(s, n);
                }),
                  (this.handleVideoLoad = function (e) {
                    var t = e.target,
                      n = t.videoWidth,
                      i = t.videoHeight;
                    (s = !0), o.runActions(n, i);
                  }),
                  (this.handleNotMetaDatedVideoLoad = function () {
                    s || n.handleYoutubeLoad();
                  }),
                  (this.handleYoutubeLoad = function () {
                    var e = 1920,
                      t = 1080;
                    r.maxYoutubeDimensions &&
                      ((e = r.maxYoutubeDimensions.width),
                      (t = r.maxYoutubeDimensions.height)),
                      o.runActions(e, t);
                  }),
                  (this.handleCustomLoad = function () {
                    setTimeout(function () {
                      var e = i[t];
                      o.runActions(e.offsetWidth, e.offsetHeight);
                    });
                  });
              }
              function L(e, t, s) {
                var n = e.elements.sources,
                  i = e.props.customClasses,
                  r = i[t] ? i[t] : "";
                n[t].className = s + " " + r;
              }
              function k(e, t) {
                var s = e.elements.sources,
                  n = e.props.customAttributes;
                for (var i in n[t]) s[t].setAttribute(i, n[t][i]);
              }
              function M(e, t) {
                var s = e.collections.sourceLoadHandlers,
                  n = e.elements,
                  i = n.sources,
                  r = n.sourceAnimationWrappers,
                  o = e.props.sources;
                (i[t] = document.createElement("img")),
                  L(e, t, x),
                  (i[t].src = o[t]),
                  (i[t].onload = s[t].handleImageLoad),
                  k(e, t),
                  r[t].appendChild(i[t]);
              }
              function A(e, t) {
                var s = e.collections.sourceLoadHandlers,
                  n = e.elements,
                  i = n.sources,
                  r = n.sourceAnimationWrappers,
                  o = e.props,
                  a = o.sources,
                  l = o.videosPosters;
                (i[t] = document.createElement("video")),
                  L(e, t, x),
                  (i[t].src = a[t]),
                  (i[t].onloadedmetadata = function (e) {
                    s[t].handleVideoLoad(e);
                  }),
                  (i[t].controls = !0),
                  k(e, t),
                  l[t] && (i[t].poster = l[t]);
                var c = document.createElement("source");
                (c.src = a[t]),
                  i[t].appendChild(c),
                  setTimeout(s[t].handleNotMetaDatedVideoLoad, 3e3),
                  r[t].appendChild(i[t]);
              }
              function P(e, t) {
                var s = e.collections.sourceLoadHandlers,
                  n = e.elements,
                  r = n.sources,
                  o = n.sourceAnimationWrappers,
                  a = e.props.sources;
                (r[t] = document.createElement("iframe")),
                  L(e, t, "".concat(x, " ").concat(i, "youtube-iframe")),
                  (r[t].src = "https://www.youtube.com/embed/".concat(
                    a[t].match(
                      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
                    )[2],
                    "?enablejsapi=1"
                  )),
                  (r[t].allowFullscreen = !0),
                  k(e, t),
                  o[t].appendChild(r[t]),
                  s[t].handleYoutubeLoad();
              }
              function $(e, t) {
                var s = e.collections.sourceLoadHandlers,
                  n = e.elements,
                  i = n.sources,
                  r = n.sourceAnimationWrappers,
                  o = e.props.sources;
                (i[t] = o[t]),
                  L(e, t, "".concat(i[t].className, " ").concat(x)),
                  r[t].appendChild(i[t]),
                  s[t].handleCustomLoad();
              }
              function O(e, t) {
                var s = e.elements,
                  n = s.sources,
                  r = s.sourceAnimationWrappers,
                  o = s.sourceMainWrappers;
                e.props.sources,
                  (n[t] = document.createElement("div")),
                  (n[t].className = ""
                    .concat(i, "invalid-file-wrapper ")
                    .concat(l)),
                  (n[t].innerHTML = "Invalid source"),
                  r[t].classList.add(g),
                  r[t].appendChild(n[t]),
                  o[t].removeChild(o[t].firstChild);
              }
              function _(e) {
                var t = e.collections,
                  s = t.sourceLoadHandlers,
                  n = t.sourcesRenderFunctions,
                  i = e.core.sourceDisplayFacade,
                  r = e.resolve;
                this.runActionsForSourceTypeAndIndex = function (t, o) {
                  var a;
                  switch (("invalid" !== t && (s[o] = r(T, [o])), t)) {
                    case "image":
                      a = M;
                      break;
                    case "video":
                      a = A;
                      break;
                    case "youtube":
                      a = P;
                      break;
                    case "custom":
                      a = $;
                      break;
                    default:
                      a = O;
                  }
                  (n[o] = function () {
                    return a(e, o);
                  }),
                    i.displaySourcesWhichShouldBeDisplayed();
                };
              }
              function I() {
                var e,
                  t,
                  s,
                  n = function (e) {
                    var t = document.createElement("a");
                    return (t.href = e), "www.youtube.com" === t.hostname;
                  },
                  i = function (e) {
                    return e.slice(0, e.indexOf("/"));
                  };
                function r() {
                  if (4 !== s.readyState) {
                    if (2 === s.readyState) {
                      var e;
                      switch (i(s.getResponseHeader("content-type"))) {
                        case "image":
                          e = "image";
                          break;
                        case "video":
                          e = "video";
                          break;
                        default:
                          e = "invalid";
                      }
                      (s.onreadystatechange = null), s.abort(), t(e);
                    }
                  } else t("invalid");
                }
                (this.setUrlToCheck = function (t) {
                  e = t;
                }),
                  (this.getSourceType = function (i) {
                    if (n(e)) return i("youtube");
                    (t = i),
                      ((s = new XMLHttpRequest()).onreadystatechange = r),
                      s.open("GET", e, !0),
                      s.send();
                  });
              }
              function z(e, t, s) {
                var n = e.props,
                  i = n.types,
                  r = n.type,
                  o = n.sources,
                  a = e.resolve;
                (this.getTypeSetByClientForIndex = function (e) {
                  var t;
                  return i && i[e] ? (t = i[e]) : r && (t = r), t;
                }),
                  (this.retrieveTypeWithXhrForIndex = function (e) {
                    var n = a(I);
                    n.setUrlToCheck(o[e]),
                      n.getSourceType(function (n) {
                        t.handleReceivedSourceTypeForUrl(n, o[e]),
                          s.runActionsForSourceTypeAndIndex(n, e);
                      });
                  });
              }
              function N(e, t) {
                var s = e.componentsServices.hideSourceLoaderIfNotYetCollection,
                  n = e.elements,
                  i = n.sourceWrappersContainer,
                  r = n.sourceMainWrappers;
                (r[t] = document.createElement("div")),
                  (r[t].className = "".concat(u, " ").concat(a, " ").concat(l)),
                  (r[t].innerHTML =
                    '<div class="fslightbox-loader"><div></div><div></div><div></div><div></div></div>');
                var o = r[t].firstChild;
                (s[t] = function () {
                  r[t].contains(o) && r[t].removeChild(o);
                }),
                  i.appendChild(r[t]),
                  (function (e, t) {
                    var s = e.elements,
                      n = s.sourceMainWrappers,
                      i = s.sourceAnimationWrappers;
                    (i[t] = document.createElement("div")),
                      n[t].appendChild(i[t]);
                  })(e, t);
              }
              function F(e, t, s, n) {
                var r = document.createElementNS(
                  "http://www.w3.org/2000/svg",
                  "svg"
                );
                r.setAttributeNS(null, "width", t),
                  r.setAttributeNS(null, "height", t),
                  r.setAttributeNS(null, "viewBox", s);
                var o = document.createElementNS(
                  "http://www.w3.org/2000/svg",
                  "path"
                );
                return (
                  o.setAttributeNS(null, "class", "".concat(i, "svg-path")),
                  o.setAttributeNS(null, "d", n),
                  r.appendChild(o),
                  e.appendChild(r),
                  r
                );
              }
              function D(e, t) {
                var s = document.createElement("div");
                return (
                  (s.className = "".concat(i, "toolbar-button ").concat(l)),
                  (s.title = t),
                  e.appendChild(s),
                  s
                );
              }
              function B(e) {
                var t = e.props.sources,
                  s = e.elements.container,
                  n = document.createElement("div");
                (n.className = "".concat(i, "nav")),
                  s.appendChild(n),
                  (function (e, t) {
                    var s = document.createElement("div");
                    (s.className = "".concat(i, "toolbar")),
                      t.appendChild(s),
                      (function (e, t) {
                        var s = e.componentsServices,
                          n = e.core.fullscreenToggler,
                          i = e.data,
                          r =
                            "M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z",
                          o = D(t);
                        o.title = "Enter fullscreen";
                        var a = F(o, "20px", "0 0 18 18", r);
                        (s.enterFullscreen = function () {
                          (i.isFullscreenOpen = !0),
                            (o.title = "Exit fullscreen"),
                            a.setAttributeNS(null, "width", "24px"),
                            a.setAttributeNS(null, "height", "24px"),
                            a.setAttributeNS(null, "viewBox", "0 0 950 1024"),
                            a.firstChild.setAttributeNS(
                              null,
                              "d",
                              "M682 342h128v84h-212v-212h84v128zM598 810v-212h212v84h-128v128h-84zM342 342v-128h84v212h-212v-84h128zM214 682v-84h212v212h-84v-128h-128z"
                            );
                        }),
                          (s.exitFullscreen = function () {
                            (i.isFullscreenOpen = !1),
                              (o.title = "Enter fullscreen"),
                              a.setAttributeNS(null, "width", "20px"),
                              a.setAttributeNS(null, "height", "20px"),
                              a.setAttributeNS(null, "viewBox", "0 0 18 18"),
                              a.firstChild.setAttributeNS(null, "d", r);
                          }),
                          (o.onclick = function () {
                            i.isFullscreenOpen
                              ? n.exitFullscreen()
                              : n.enterFullscreen();
                          });
                      })(e, s),
                      (function (e, t) {
                        var s = D(t, "Close");
                        (s.onclick = e.core.lightboxCloser.closeLightbox),
                          F(
                            s,
                            "20px",
                            "0 0 24 24",
                            "M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"
                          );
                      })(e, s);
                  })(e, n),
                  t.length > 1 &&
                    (function (e, t) {
                      var s = e.componentsServices,
                        n = e.props.sources,
                        r = (e.stageIndexes, document.createElement("div"));
                      r.className = "".concat(i, "slide-number-container");
                      var o = document.createElement("div");
                      o.className = l;
                      var a = document.createElement("span");
                      s.setSlideNumber = function (e) {
                        return (a.innerHTML = e);
                      };
                      var c = document.createElement("span");
                      c.className = "".concat(i, "slash");
                      var d = document.createElement("div");
                      (d.innerHTML = n.length),
                        r.appendChild(o),
                        o.appendChild(a),
                        o.appendChild(c),
                        o.appendChild(d),
                        t.appendChild(r),
                        setTimeout(function () {
                          o.offsetWidth > 55 &&
                            (r.style.justifyContent = "flex-start");
                        });
                    })(e, n);
              }
              function H(e, t) {
                var s = this,
                  n = e.elements.sourceMainWrappers,
                  i = e.props,
                  r = 0;
                (this.byValue = function (e) {
                  return (r = e), s;
                }),
                  (this.negative = function () {
                    o(-a());
                  }),
                  (this.zero = function () {
                    o(0);
                  }),
                  (this.positive = function () {
                    o(a());
                  });
                var o = function (e) {
                    (n[t].style.transform = "translateX(".concat(e + r, "px)")),
                      (r = 0);
                  },
                  a = function () {
                    return (1 + i.slideDistance) * innerWidth;
                  };
              }
              function W(e, t, s, n) {
                var i = e.elements.container,
                  r = s.charAt(0).toUpperCase() + s.slice(1),
                  o = document.createElement("div");
                (o.className = "".concat(h, " ").concat(h, "-").concat(s)),
                  (o.title = "".concat(r, " slide")),
                  (o.onclick = t),
                  (function (e, t) {
                    var s = document.createElement("div");
                    (s.className = "".concat(p, " ").concat(l)),
                      F(s, "20px", "0 0 20 20", t),
                      e.appendChild(s);
                  })(o, n),
                  i.appendChild(o);
              }
              function q(e, t) {
                var s = e.classList;
                s.contains(t) && s.remove(t);
              }
              function G(e) {
                var t = this,
                  s = e.core,
                  n = s.eventsDispatcher,
                  i = s.fullscreenToggler,
                  r = s.globalEventsController,
                  o = s.scrollbarRecompensor,
                  a = e.data,
                  l = e.elements,
                  d = e.props,
                  u = e.sourcePointerProps;
                (this.isLightboxFadingOut = !1),
                  (this.runActions = function () {
                    (t.isLightboxFadingOut = !0),
                      l.container.classList.add(v),
                      r.removeListeners(),
                      d.exitFullscreenOnClose &&
                        a.isFullscreenOpen &&
                        i.exitFullscreen(),
                      setTimeout(function () {
                        (t.isLightboxFadingOut = !1),
                          (u.isPointering = !1),
                          l.container.classList.remove(v),
                          document.documentElement.classList.remove(c),
                          o.removeRecompense(),
                          document.body.removeChild(l.container),
                          n.dispatch("onClose");
                      }, 270);
                  });
              }
              function j(e) {
                var t = e.core,
                  s = t.lightboxCloser,
                  n = t.fullscreenToggler,
                  i = t.slideChangeFacade;
                this.listener = function (e) {
                  switch (e.key) {
                    case "Escape":
                      s.closeLightbox();
                      break;
                    case "ArrowLeft":
                      i.changeToPrevious();
                      break;
                    case "ArrowRight":
                      i.changeToNext();
                      break;
                    case "F11":
                      e.preventDefault(), n.enterFullscreen();
                  }
                };
              }
              function R(e) {
                var t = e.collections.sourceMainWrappersTransformers,
                  s = e.elements,
                  n = e.sourcePointerProps,
                  i = e.stageIndexes;
                function r(e, s) {
                  t[e].byValue(n.swipedX)[s]();
                }
                this.runActionsForEvent = function (e) {
                  var t, a, l;
                  s.container.contains(s.slideSwipingHoverer) ||
                    s.container.appendChild(s.slideSwipingHoverer),
                    (t = s.container),
                    (a = o),
                    (l = t.classList).contains(a) || l.add(a),
                    (n.swipedX = e.screenX - n.downScreenX),
                    r(i.current, "zero"),
                    void 0 !== i.previous && n.swipedX > 0
                      ? r(i.previous, "negative")
                      : void 0 !== i.next &&
                        n.swipedX < 0 &&
                        r(i.next, "positive");
                };
              }
              function V(e) {
                var t = e.props.sources,
                  s = e.resolve,
                  n = e.sourcePointerProps,
                  i = s(R);
                1 === t.length
                  ? (this.listener = function () {
                      n.swipedX = 1;
                    })
                  : (this.listener = function (e) {
                      n.isPointering && i.runActionsForEvent(e);
                    });
              }
              function X(e) {
                var t = e.collections.sourceMainWrappersTransformers,
                  s = e.core.slideIndexChanger,
                  n = e.elements.sourceMainWrappers,
                  i = e.stageIndexes;
                (this.runPositiveSwipedXActions = function () {
                  void 0 === i.previous ||
                    (r("positive"), s.changeTo(i.previous)),
                    r("zero");
                }),
                  (this.runNegativeSwipedXActions = function () {
                    void 0 === i.next || (r("negative"), s.changeTo(i.next)),
                      r("zero");
                  });
                var r = function (e) {
                  n[i.current].classList.add(d), t[i.current][e]();
                };
              }
              function Y(e, t) {
                e.contains(t) && e.removeChild(t);
              }
              function U(e) {
                var t = e.core.lightboxCloser,
                  s = e.elements,
                  n = e.resolve,
                  i = e.sourcePointerProps,
                  r = n(X);
                (this.runNoSwipeActions = function () {
                  Y(s.container, s.slideSwipingHoverer),
                    i.isSourceDownEventTarget || t.closeLightbox(),
                    (i.isPointering = !1);
                }),
                  (this.runActions = function () {
                    i.swipedX > 0
                      ? r.runPositiveSwipedXActions()
                      : r.runNegativeSwipedXActions(),
                      Y(s.container, s.slideSwipingHoverer),
                      s.container.classList.remove(o),
                      (i.isPointering = !1);
                  });
              }
              function K(e) {
                var t = e.resolve,
                  s = e.sourcePointerProps,
                  n = t(U);
                this.listener = function () {
                  s.isPointering &&
                    (s.swipedX ? n.runActions() : n.runNoSwipeActions());
                };
              }
              function J(e) {
                var t, s, n;
                (s = (t = e).core.classFacade),
                  (n = t.elements),
                  (s.removeFromEachElementClassIfContains = function (e, t) {
                    for (var s = 0; s < n[e].length; s++) q(n[e][s], t);
                  }),
                  (function (e) {
                    var t = e.core.eventsDispatcher,
                      s = e.props;
                    t.dispatch = function (e) {
                      s[e] && s[e]();
                    };
                  })(e),
                  (function (e) {
                    var t = e.componentsServices,
                      s = e.core.fullscreenToggler;
                    (s.enterFullscreen = function () {
                      t.enterFullscreen();
                      var e = document.documentElement;
                      e.requestFullscreen
                        ? e.requestFullscreen()
                        : e.mozRequestFullScreen
                        ? e.mozRequestFullScreen()
                        : e.webkitRequestFullscreen
                        ? e.webkitRequestFullscreen()
                        : e.msRequestFullscreen && e.msRequestFullscreen();
                    }),
                      (s.exitFullscreen = function () {
                        t.exitFullscreen(),
                          document.exitFullscreen
                            ? document.exitFullscreen()
                            : document.mozCancelFullScreen
                            ? document.mozCancelFullScreen()
                            : document.webkitExitFullscreen
                            ? document.webkitExitFullscreen()
                            : document.msExitFullscreen &&
                              document.msExitFullscreen();
                      });
                  })(e),
                  (function (e) {
                    var t = e.core,
                      s = t.globalEventsController,
                      n = t.windowResizeActioner,
                      i = e.resolve,
                      r = i(j),
                      o = i(V),
                      a = i(K);
                    (s.attachListeners = function () {
                      document.addEventListener("pointermove", o.listener),
                        document.addEventListener("pointerup", a.listener),
                        addEventListener("resize", n.runActions),
                        document.addEventListener("keydown", r.listener);
                    }),
                      (s.removeListeners = function () {
                        document.removeEventListener("pointermove", o.listener),
                          document.removeEventListener("pointerup", a.listener),
                          removeEventListener("resize", n.runActions),
                          document.removeEventListener("keydown", r.listener);
                      });
                  })(e),
                  (function (e) {
                    var t = e.core.lightboxCloser,
                      s = (0, e.resolve)(G);
                    t.closeLightbox = function () {
                      s.isLightboxFadingOut || s.runActions();
                    };
                  })(e),
                  Z(e),
                  (function (e) {
                    var t = e.data,
                      s = e.core.scrollbarRecompensor;
                    function n() {
                      document.body.offsetHeight > innerHeight &&
                        (document.body.style.marginRight =
                          t.scrollbarWidth + "px");
                    }
                    (s.addRecompense = function () {
                      "complete" === document.readyState
                        ? n()
                        : addEventListener("load", function () {
                            n(), (s.addRecompense = n);
                          });
                    }),
                      (s.removeRecompense = function () {
                        document.body.style.removeProperty("margin-right");
                      });
                  })(e),
                  (function (e) {
                    var t = e.core,
                      s = t.slideChangeFacade,
                      n = t.slideIndexChanger,
                      i = t.stageManager;
                    e.props.sources.length > 1
                      ? ((s.changeToPrevious = function () {
                          n.jumpTo(i.getPreviousSlideIndex());
                        }),
                        (s.changeToNext = function () {
                          n.jumpTo(i.getNextSlideIndex());
                        }))
                      : ((s.changeToPrevious = function () {}),
                        (s.changeToNext = function () {}));
                  })(e),
                  (function (e) {
                    var t,
                      s,
                      n = e.collections.sourceMainWrappersTransformers,
                      i = e.componentsServices,
                      r = e.core,
                      o = r.classFacade,
                      a = r.slideIndexChanger,
                      l = r.sourceDisplayFacade,
                      c = r.stageManager,
                      u = e.elements.sourceAnimationWrappers,
                      p = e.stageIndexes,
                      h =
                        ((t = function () {
                          o.removeFromEachElementClassIfContains(
                            "sourceAnimationWrappers",
                            f
                          );
                        }),
                        (s = []),
                        function () {
                          s.push(!0),
                            setTimeout(function () {
                              s.pop(), s.length || t();
                            }, 300);
                        });
                    (a.changeTo = function (e) {
                      (p.current = e),
                        c.updateStageIndexes(),
                        i.setSlideNumber(e + 1),
                        l.displaySourcesWhichShouldBeDisplayed();
                    }),
                      (a.jumpTo = function (e) {
                        var t = p.current;
                        a.changeTo(e),
                          o.removeFromEachElementClassIfContains(
                            "sourceMainWrappers",
                            d
                          ),
                          q(u[t], g),
                          q(u[t], m),
                          u[t].classList.add(f),
                          q(u[e], g),
                          q(u[e], f),
                          u[e].classList.add(m),
                          h(),
                          n[e].zero(),
                          setTimeout(function () {
                            t !== p.current && n[t].negative();
                          }, 270);
                      });
                  })(e),
                  (function (e) {
                    var t = e.core,
                      s = t.classFacade,
                      n = t.sourcesPointerDown,
                      i = e.elements.sources,
                      r = e.sourcePointerProps,
                      o = e.stageIndexes;
                    n.listener = function (e) {
                      "VIDEO" !== e.target.tagName && e.preventDefault(),
                        (r.isPointering = !0),
                        (r.downScreenX = e.screenX),
                        (r.swipedX = 0);
                      var t = i[o.current];
                      t && t.contains(e.target)
                        ? (r.isSourceDownEventTarget = !0)
                        : (r.isSourceDownEventTarget = !1),
                        s.removeFromEachElementClassIfContains(
                          "sourceMainWrappers",
                          d
                        );
                    };
                  })(e),
                  (function (e) {
                    var t = e.collections.sourcesRenderFunctions,
                      s = e.core.sourceDisplayFacade,
                      n = e.props,
                      i = e.stageIndexes;
                    function r(e) {
                      t[e] && (t[e](), delete t[e]);
                    }
                    s.displaySourcesWhichShouldBeDisplayed = function () {
                      if (n.loadOnlyCurrentSource) r(i.current);
                      else for (var e in i) r(i[e]);
                    };
                  })(e),
                  (function (e) {
                    var t = e.stageIndexes,
                      s = e.core.stageManager,
                      n = e.props.sources.length - 1;
                    (s.getPreviousSlideIndex = function () {
                      return 0 === t.current ? n : t.current - 1;
                    }),
                      (s.getNextSlideIndex = function () {
                        return t.current === n ? 0 : t.current + 1;
                      }),
                      (s.updateStageIndexes =
                        0 === n
                          ? function () {}
                          : 1 === n
                          ? function () {
                              0 === t.current
                                ? ((t.next = 1), delete t.previous)
                                : ((t.previous = 0), delete t.next);
                            }
                          : function () {
                              (t.previous = s.getPreviousSlideIndex()),
                                (t.next = s.getNextSlideIndex());
                            }),
                      (s.isSourceInStage =
                        n <= 2
                          ? function () {
                              return !0;
                            }
                          : function (e) {
                              var s = t.current;
                              if ((0 === s && e === n) || (s === n && 0 === e))
                                return !0;
                              var i = s - e;
                              return -1 === i || 0 === i || 1 === i;
                            });
                  })(e),
                  (function (e) {
                    var t = e.collections,
                      s = t.sourceMainWrappersTransformers,
                      n = t.sourceSizers,
                      i = e.core.windowResizeActioner,
                      r = e.data,
                      o = e.elements.sourceMainWrappers,
                      a = e.props,
                      l = e.stageIndexes;
                    i.runActions = function () {
                      innerWidth < 992
                        ? (r.maxSourceWidth = innerWidth)
                        : (r.maxSourceWidth = 0.9 * innerWidth),
                        (r.maxSourceHeight = 0.9 * innerHeight);
                      for (var e = 0; e < a.sources.length; e++)
                        q(o[e], d),
                          e !== l.current && s[e].negative(),
                          n[e] && n[e].adjustSize();
                    };
                  })(e);
              }
              function Q(e) {
                var t = e.core.eventsDispatcher,
                  s = e.data,
                  n = e.elements,
                  r = e.props.sources;
                (s.isInitialized = !0),
                  (s.scrollbarWidth = (function (e) {
                    var t = e.props.disableLocalStorage;
                    if (!t) {
                      var s = localStorage.getItem(
                        "fslightbox-scrollbar-width"
                      );
                      if (s) return s;
                    }
                    var n = (function () {
                        var e = document.createElement("div"),
                          t = e.style;
                        return (
                          (t.visibility = "hidden"),
                          (t.width = "100px"),
                          (t.msOverflowStyle = "scrollbar"),
                          (t.overflow = "scroll"),
                          e
                        );
                      })(),
                      i = (function () {
                        var e = document.createElement("div");
                        return (e.style.width = "100%"), e;
                      })();
                    document.body.appendChild(n);
                    var r = n.offsetWidth;
                    n.appendChild(i);
                    var o = i.offsetWidth;
                    document.body.removeChild(n);
                    var a = r - o;
                    return (
                      t ||
                        localStorage.setItem(
                          "fslightbox-scrollbar-width",
                          a.toString()
                        ),
                      a
                    );
                  })(e)),
                  (function (e) {
                    for (
                      var t = e.collections.sourceMainWrappersTransformers,
                        s = e.props.sources,
                        n = e.resolve,
                        i = 0;
                      i < s.length;
                      i++
                    )
                      t[i] = n(H, [i]);
                  })(e),
                  J(e),
                  (n.container = document.createElement("div")),
                  (n.container.className = ""
                    .concat(i, "container ")
                    .concat(a, " ")
                    .concat(g)),
                  (function (e) {
                    var t = e.elements;
                    (t.slideSwipingHoverer = document.createElement("div")),
                      (t.slideSwipingHoverer.className = ""
                        .concat(i, "slide-swiping-hoverer ")
                        .concat(a, " ")
                        .concat(u));
                  })(e),
                  B(e),
                  (function (e) {
                    var t = e.core.sourcesPointerDown,
                      s = e.elements,
                      n = e.props.sources,
                      i = document.createElement("div");
                    (i.className = "".concat(u, " ").concat(a)),
                      s.container.appendChild(i),
                      i.addEventListener("pointerdown", t.listener),
                      (s.sourceWrappersContainer = i);
                    for (var r = 0; r < n.length; r++) N(e, r);
                  })(e),
                  r.length > 1 &&
                    (function (e) {
                      var t = e.core.slideChangeFacade;
                      W(
                        e,
                        t.changeToPrevious,
                        "previous",
                        "M18.271,9.212H3.615l4.184-4.184c0.306-0.306,0.306-0.801,0-1.107c-0.306-0.306-0.801-0.306-1.107,0L1.21,9.403C1.194,9.417,1.174,9.421,1.158,9.437c-0.181,0.181-0.242,0.425-0.209,0.66c0.005,0.038,0.012,0.071,0.022,0.109c0.028,0.098,0.075,0.188,0.142,0.271c0.021,0.026,0.021,0.061,0.045,0.085c0.015,0.016,0.034,0.02,0.05,0.033l5.484,5.483c0.306,0.307,0.801,0.307,1.107,0c0.306-0.305,0.306-0.801,0-1.105l-4.184-4.185h14.656c0.436,0,0.788-0.353,0.788-0.788S18.707,9.212,18.271,9.212z"
                      ),
                        W(
                          e,
                          t.changeToNext,
                          "next",
                          "M1.729,9.212h14.656l-4.184-4.184c-0.307-0.306-0.307-0.801,0-1.107c0.305-0.306,0.801-0.306,1.106,0l5.481,5.482c0.018,0.014,0.037,0.019,0.053,0.034c0.181,0.181,0.242,0.425,0.209,0.66c-0.004,0.038-0.012,0.071-0.021,0.109c-0.028,0.098-0.075,0.188-0.143,0.271c-0.021,0.026-0.021,0.061-0.045,0.085c-0.015,0.016-0.034,0.02-0.051,0.033l-5.483,5.483c-0.306,0.307-0.802,0.307-1.106,0c-0.307-0.305-0.307-0.801,0-1.105l4.184-4.185H1.729c-0.436,0-0.788-0.353-0.788-0.788S1.293,9.212,1.729,9.212z"
                        );
                    })(e),
                  (function (e) {
                    for (
                      var t = e.props.sources,
                        s = e.resolve,
                        n = s(S),
                        i = s(_),
                        r = s(z, [n, i]),
                        o = 0;
                      o < t.length;
                      o++
                    )
                      if ("string" == typeof t[o]) {
                        var a = r.getTypeSetByClientForIndex(o);
                        if (a) i.runActionsForSourceTypeAndIndex(a, o);
                        else {
                          var l = n.getSourceTypeFromLocalStorageByUrl(t[o]);
                          l
                            ? i.runActionsForSourceTypeAndIndex(l, o)
                            : r.retrieveTypeWithXhrForIndex(o);
                        }
                      } else i.runActionsForSourceTypeAndIndex("custom", o);
                  })(e),
                  t.dispatch("onInit");
              }
              function Z(e) {
                var t = e.collections.sourceMainWrappersTransformers,
                  s = e.componentsServices,
                  n = e.core,
                  i = n.eventsDispatcher,
                  r = n.lightboxOpener,
                  o = n.globalEventsController,
                  a = n.scrollbarRecompensor,
                  l = n.sourceDisplayFacade,
                  d = n.stageManager,
                  u = n.windowResizeActioner,
                  p = e.data,
                  h = e.elements,
                  m = e.stageIndexes;
                r.open = function () {
                  var n =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0;
                  (m.current = n),
                    p.isInitialized ? i.dispatch("onShow") : Q(e),
                    d.updateStageIndexes(),
                    l.displaySourcesWhichShouldBeDisplayed(),
                    s.setSlideNumber(n + 1),
                    document.body.appendChild(h.container),
                    document.documentElement.classList.add(c),
                    a.addRecompense(),
                    o.attachListeners(),
                    u.runActions(),
                    t[m.current].zero(),
                    i.dispatch("onOpen");
                };
              }
              function ee(e, t, s) {
                return (ee = te()
                  ? Reflect.construct
                  : function (e, t, s) {
                      var n = [null];
                      n.push.apply(n, t);
                      var i = new (Function.bind.apply(e, n))();
                      return s && se(i, s.prototype), i;
                    }).apply(null, arguments);
              }
              function te() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                  return (
                    Date.prototype.toString.call(
                      Reflect.construct(Date, [], function () {})
                    ),
                    !0
                  );
                } catch (e) {
                  return !1;
                }
              }
              function se(e, t) {
                return (se =
                  Object.setPrototypeOf ||
                  function (e, t) {
                    return (e.__proto__ = t), e;
                  })(e, t);
              }
              function ne(e) {
                return (
                  (function (e) {
                    if (Array.isArray(e)) return ie(e);
                  })(e) ||
                  (function (e) {
                    if (
                      "undefined" != typeof Symbol &&
                      Symbol.iterator in Object(e)
                    )
                      return Array.from(e);
                  })(e) ||
                  (function (e, t) {
                    if (e) {
                      if ("string" == typeof e) return ie(e, t);
                      var s = Object.prototype.toString.call(e).slice(8, -1);
                      return (
                        "Object" === s &&
                          e.constructor &&
                          (s = e.constructor.name),
                        "Map" === s || "Set" === s
                          ? Array.from(e)
                          : "Arguments" === s ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)
                          ? ie(e, t)
                          : void 0
                      );
                    }
                  })(e) ||
                  (function () {
                    throw new TypeError(
                      "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  })()
                );
              }
              function ie(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var s = 0, n = new Array(t); s < t; s++) n[s] = e[s];
                return n;
              }
              function re() {
                for (
                  var e = document.getElementsByTagName("a"),
                    t = function (t) {
                      if (!e[t].hasAttribute("data-fslightbox"))
                        return "continue";
                      var s = e[t].getAttribute("data-fslightbox"),
                        n = e[t].getAttribute("href");
                      fsLightboxInstances[s] ||
                        (fsLightboxInstances[s] = new FsLightbox());
                      var i = null;
                      "#" === n.charAt(0)
                        ? (i = document
                            .getElementById(n.substring(1))
                            .cloneNode(!0)).removeAttribute("id")
                        : (i = n),
                        fsLightboxInstances[s].props.sources.push(i),
                        fsLightboxInstances[s].elements.a.push(e[t]);
                      var r = fsLightboxInstances[s].props.sources.length - 1;
                      (e[t].onclick = function (e) {
                        e.preventDefault(), fsLightboxInstances[s].open(r);
                      }),
                        u("types", "data-type"),
                        u("videosPosters", "data-video-poster"),
                        u("customClasses", "data-class"),
                        u("customClasses", "data-custom-class");
                      for (
                        var o = [
                            "href",
                            "data-fslightbox",
                            "data-type",
                            "data-video-poster",
                            "data-class",
                            "data-custom-class",
                          ],
                          a = e[t].attributes,
                          l = fsLightboxInstances[s].props.customAttributes,
                          c = 0;
                        c < a.length;
                        c++
                      )
                        if (
                          -1 === o.indexOf(a[c].name) &&
                          "data-" === a[c].name.substr(0, 5)
                        ) {
                          l[r] || (l[r] = {});
                          var d = a[c].name.substr(5);
                          l[r][d] = a[c].value;
                        }
                      function u(n, i) {
                        e[t].hasAttribute(i) &&
                          (fsLightboxInstances[s].props[n][r] =
                            e[t].getAttribute(i));
                      }
                    },
                    s = 0;
                  s < e.length;
                  s++
                )
                  t(s);
                var n = Object.keys(fsLightboxInstances);
                window.fsLightbox = fsLightboxInstances[n[n.length - 1]];
              }
              "object" ===
                ("undefined" == typeof document ? "undefined" : y(document)) &&
                (((n = document.createElement("style")).className = r),
                n.appendChild(
                  document.createTextNode(
                    ".fslightbox-absoluted{position:absolute;top:0;left:0}.fslightbox-fade-in{animation:fslightbox-fade-in .3s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out{animation:fslightbox-fade-out .3s ease}.fslightbox-fade-in-strong{animation:fslightbox-fade-in-strong .3s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out-strong{animation:fslightbox-fade-out-strong .3s ease}@keyframes fslightbox-fade-in{from{opacity:.65}to{opacity:1}}@keyframes fslightbox-fade-out{from{opacity:.35}to{opacity:0}}@keyframes fslightbox-fade-in-strong{from{opacity:.3}to{opacity:1}}@keyframes fslightbox-fade-out-strong{from{opacity:1}to{opacity:0}}.fslightbox-cursor-grabbing{cursor:grabbing}.fslightbox-full-dimension{width:100%;height:100%}.fslightbox-open{overflow:hidden;height:100%}.fslightbox-flex-centered{display:flex;justify-content:center;align-items:center}.fslightbox-opacity-0{opacity:0!important}.fslightbox-opacity-1{opacity:1!important}.fslightbox-scrollbarfix{padding-right:17px}.fslightbox-transform-transition{transition:transform .3s}.fslightbox-container{font-family:Arial,sans-serif;position:fixed;top:0;left:0;background:linear-gradient(rgba(30,30,30,.9),#000 1810%);touch-action:pinch-zoom;z-index:1000000000;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.fslightbox-container *{box-sizing:border-box}.fslightbox-svg-path{transition:fill .15s ease;fill:#ddd}.fslightbox-nav{height:45px;width:100%;position:absolute;top:0;left:0}.fslightbox-slide-number-container{display:flex;justify-content:center;align-items:center;position:relative;height:100%;font-size:15px;color:#d7d7d7;z-index:0;max-width:55px;text-align:left}.fslightbox-slide-number-container .fslightbox-flex-centered{height:100%}.fslightbox-slash{display:block;margin:0 5px;width:1px;height:12px;transform:rotate(15deg);background:#fff}.fslightbox-toolbar{position:absolute;z-index:3;right:0;top:0;height:100%;display:flex;background:rgba(35,35,35,.65)}.fslightbox-toolbar-button{height:100%;width:45px;cursor:pointer}.fslightbox-toolbar-button:hover .fslightbox-svg-path{fill:#fff}.fslightbox-slide-btn-container{display:flex;align-items:center;padding:12px 12px 12px 6px;position:absolute;top:50%;cursor:pointer;z-index:3;transform:translateY(-50%)}@media (min-width:476px){.fslightbox-slide-btn-container{padding:22px 22px 22px 6px}}@media (min-width:768px){.fslightbox-slide-btn-container{padding:30px 30px 30px 6px}}.fslightbox-slide-btn-container:hover .fslightbox-svg-path{fill:#f1f1f1}.fslightbox-slide-btn{padding:9px;font-size:26px;background:rgba(35,35,35,.65)}@media (min-width:768px){.fslightbox-slide-btn{padding:10px}}@media (min-width:1600px){.fslightbox-slide-btn{padding:11px}}.fslightbox-slide-btn-container-previous{left:0}@media (max-width:475.99px){.fslightbox-slide-btn-container-previous{padding-left:3px}}.fslightbox-slide-btn-container-next{right:0;padding-left:12px;padding-right:3px}@media (min-width:476px){.fslightbox-slide-btn-container-next{padding-left:22px}}@media (min-width:768px){.fslightbox-slide-btn-container-next{padding-left:30px}}@media (min-width:476px){.fslightbox-slide-btn-container-next{padding-right:6px}}.fslightbox-down-event-detector{position:absolute;z-index:1}.fslightbox-slide-swiping-hoverer{z-index:4}.fslightbox-invalid-file-wrapper{font-size:22px;color:#eaebeb;margin:auto}.fslightbox-video{object-fit:cover}.fslightbox-youtube-iframe{border:0}.fslightbox-loader{display:block;margin:auto;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:67px;height:67px}.fslightbox-loader div{box-sizing:border-box;display:block;position:absolute;width:54px;height:54px;margin:6px;border:5px solid;border-color:#999 transparent transparent transparent;border-radius:50%;animation:fslightbox-loader 1.2s cubic-bezier(.5,0,.5,1) infinite}.fslightbox-loader div:nth-child(1){animation-delay:-.45s}.fslightbox-loader div:nth-child(2){animation-delay:-.3s}.fslightbox-loader div:nth-child(3){animation-delay:-.15s}@keyframes fslightbox-loader{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.fslightbox-source{position:relative;z-index:2;opacity:0}"
                  )
                ),
                document.head.appendChild(n)),
                (window.FsLightbox = function () {
                  var e = this;
                  (this.props = {
                    sources: [],
                    customAttributes: [],
                    customClasses: [],
                    types: [],
                    videosPosters: [],
                    slideDistance: 0.3,
                  }),
                    (this.data = {
                      isInitialized: !1,
                      isFullscreenOpen: !1,
                      maxSourceWidth: 0,
                      maxSourceHeight: 0,
                      scrollbarWidth: 0,
                    }),
                    (this.sourcePointerProps = {
                      downScreenX: null,
                      isPointering: !1,
                      isSourceDownEventTarget: !1,
                      swipedX: 0,
                    }),
                    (this.stageIndexes = {}),
                    (this.elements = {
                      a: [],
                      container: null,
                      slideSwipingHoverer: null,
                      sourceWrappersContainer: null,
                      sources: [],
                      sourceMainWrappers: [],
                      sourceAnimationWrappers: [],
                    }),
                    (this.componentsServices = {
                      enterFullscreen: null,
                      exitFullscreen: null,
                      hideSourceLoaderIfNotYetCollection: [],
                      setSlideNumber: function () {},
                    }),
                    (this.resolve = function (t) {
                      var s =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : [];
                      return s.unshift(e), ee(t, ne(s));
                    }),
                    (this.collections = {
                      sourceMainWrappersTransformers: [],
                      sourceLoadHandlers: [],
                      sourcesRenderFunctions: [],
                      sourceSizers: [],
                    }),
                    (this.core = {
                      classFacade: {},
                      eventsDispatcher: {},
                      fullscreenToggler: {},
                      globalEventsController: {},
                      lightboxCloser: {},
                      lightboxOpener: {},
                      lightboxUpdater: {},
                      scrollbarRecompensor: {},
                      slideChangeFacade: {},
                      slideIndexChanger: {},
                      sourcesPointerDown: {},
                      sourceDisplayFacade: {},
                      stageManager: {},
                      windowResizeActioner: {},
                    }),
                    Z(this),
                    (this.open = function (t) {
                      return e.core.lightboxOpener.open(t);
                    }),
                    (this.close = function () {
                      return e.core.lightboxCloser.closeLightbox();
                    });
                }),
                (window.fsLightboxInstances = {}),
                re(),
                (window.refreshFsLightbox = function () {
                  for (var e in fsLightboxInstances) {
                    var t = fsLightboxInstances[e].props;
                    (fsLightboxInstances[e] = new FsLightbox()),
                      (fsLightboxInstances[e].props = t),
                      (fsLightboxInstances[e].props.sources = []),
                      (fsLightboxInstances[e].elements.a = []);
                  }
                  re();
                });
            },
          ]));
      },
    },
    t = {};
  function s(n) {
    var i = t[n];
    if (void 0 !== i) return i.exports;
    var r = (t[n] = { exports: {} });
    return e[n](r, r.exports, s), r.exports;
  }
  (() => {
    "use strict";
    s(598), s(949);
    const e = {
      windowEl: window,
      documentEl: document,
      htmlEl: document.documentElement,
      bodyEl: document.body,
    };
    console.log(
      (() => {
        const t = navigator.userAgent || navigator.vendor || window.opera;
        return /android/i.test(t)
          ? (e.htmlEl.classList.add("page--android"), "Android")
          : /iPad|iPhone|iPod/.test(t) && !window.MSStream
          ? (e.htmlEl.classList.add("page--ios"), "iOS")
          : "unknown";
      })()
    );
    const t = () => {
      const t = document?.querySelectorAll(".fixed-block"),
        s = (document.body, parseInt(e.bodyEl.dataset.position, 10));
      t.forEach((e) => {
        e.style.paddingRight = "0px";
      }),
        (e.bodyEl.style.paddingRight = "0px"),
        (e.bodyEl.style.top = "auto"),
        e.bodyEl.classList.remove("dis-scroll"),
        window.scroll({ top: s, left: 0 }),
        e.bodyEl.removeAttribute("data-position"),
        (e.htmlEl.style.scrollBehavior = "smooth");
    };
    !(function () {
      const s = document?.querySelector("[data-burger]"),
        n = document?.querySelector("[data-menu]"),
        i = document?.querySelectorAll("[data-menu-item]"),
        r = document?.querySelector("[data-menu-overlay]");
      s?.addEventListener("click", (i) => {
        s?.classList.toggle("burger--active"),
          n?.classList.toggle("menu--active"),
          n?.classList.contains("menu--active")
            ? (s?.setAttribute("aria-expanded", "true"),
              s?.setAttribute("aria-label", "Закрыть меню"),
              searchMobile.classList.add("active"),
              (() => {
                const t = document?.querySelectorAll(".fixed-block"),
                  s = window.scrollY,
                  n = window.innerWidth - e.bodyEl.offsetWidth + "px";
                (e.htmlEl.style.scrollBehavior = "none"),
                  t.forEach((e) => {
                    e.style.paddingRight = n;
                  }),
                  (e.bodyEl.style.paddingRight = n),
                  e.bodyEl.classList.add("dis-scroll"),
                  (e.bodyEl.dataset.position = s),
                  (e.bodyEl.style.top = `-${s}px`);
              })())
            : (s?.setAttribute("aria-expanded", "false"),
              s?.setAttribute("aria-label", "Открыть меню"),
              searchMobile.classList.remove("active"),
              t());
      }),
        r?.addEventListener("click", () => {
          s?.setAttribute("aria-expanded", "false"),
            s?.setAttribute("aria-label", "Открыть меню"),
            s.classList.remove("burger--active"),
            n.classList.remove("menu--active"),
            t();
        }),
        i?.forEach((e) => {
          e.addEventListener("click", () => {
            s?.setAttribute("aria-expanded", "false"),
              s?.setAttribute("aria-label", "Открыть меню"),
              s.classList.remove("burger--active"),
              n.classList.remove("menu--active"),
              t();
          });
        });
    })();
    const n = document.querySelector(".button-mobile");
    if (n) {
      const te = document.querySelector(".search-mobile ");
      n.addEventListener("click", () => {
        te.classList.toggle("active");
      });
    }
    function i(e) {
      return (
        null !== e &&
        "object" == typeof e &&
        "constructor" in e &&
        e.constructor === Object
      );
    }
    function r(e = {}, t = {}) {
      Object.keys(t).forEach((s) => {
        void 0 === e[s]
          ? (e[s] = t[s])
          : i(t[s]) && i(e[s]) && Object.keys(t[s]).length > 0 && r(e[s], t[s]);
      });
    }
    s(595);
    const o = {
      body: {},
      addEventListener() {},
      removeEventListener() {},
      activeElement: { blur() {}, nodeName: "" },
      querySelector: () => null,
      querySelectorAll: () => [],
      getElementById: () => null,
      createEvent: () => ({ initEvent() {} }),
      createElement: () => ({
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {},
        getElementsByTagName: () => [],
      }),
      createElementNS: () => ({}),
      importNode: () => null,
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
    };
    function a() {
      const e = "undefined" != typeof document ? document : {};
      return r(e, o), e;
    }
    const l = {
      document: o,
      navigator: { userAgent: "" },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
      history: { replaceState() {}, pushState() {}, go() {}, back() {} },
      CustomEvent: function () {
        return this;
      },
      addEventListener() {},
      removeEventListener() {},
      getComputedStyle: () => ({ getPropertyValue: () => "" }),
      Image() {},
      Date() {},
      screen: {},
      setTimeout() {},
      clearTimeout() {},
      matchMedia: () => ({}),
      requestAnimationFrame: (e) =>
        "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
      cancelAnimationFrame(e) {
        "undefined" != typeof setTimeout && clearTimeout(e);
      },
    };
    function c() {
      const e = "undefined" != typeof window ? window : {};
      return r(e, l), e;
    }
    class d extends Array {
      constructor(e) {
        "number" == typeof e
          ? super(e)
          : (super(...(e || [])),
            (function (e) {
              const t = e.__proto__;
              Object.defineProperty(e, "__proto__", {
                get: () => t,
                set(e) {
                  t.__proto__ = e;
                },
              });
            })(this));
      }
    }
    function u(e = []) {
      const t = [];
      return (
        e.forEach((e) => {
          Array.isArray(e) ? t.push(...u(e)) : t.push(e);
        }),
        t
      );
    }
    function p(e, t) {
      return Array.prototype.filter.call(e, t);
    }
    function h(e, t) {
      const s = c(),
        n = a();
      let i = [];
      if (!t && e instanceof d) return e;
      if (!e) return new d(i);
      if ("string" == typeof e) {
        const s = e.trim();
        if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
          let e = "div";
          0 === s.indexOf("<li") && (e = "ul"),
            0 === s.indexOf("<tr") && (e = "tbody"),
            (0 !== s.indexOf("<td") && 0 !== s.indexOf("<th")) || (e = "tr"),
            0 === s.indexOf("<tbody") && (e = "table"),
            0 === s.indexOf("<option") && (e = "select");
          const t = n.createElement(e);
          t.innerHTML = s;
          for (let e = 0; e < t.childNodes.length; e += 1)
            i.push(t.childNodes[e]);
        } else
          i = (function (e, t) {
            if ("string" != typeof e) return [e];
            const s = [],
              n = t.querySelectorAll(e);
            for (let e = 0; e < n.length; e += 1) s.push(n[e]);
            return s;
          })(e.trim(), t || n);
      } else if (e.nodeType || e === s || e === n) i.push(e);
      else if (Array.isArray(e)) {
        if (e instanceof d) return e;
        i = e;
      }
      return new d(
        (function (e) {
          const t = [];
          for (let s = 0; s < e.length; s += 1)
            -1 === t.indexOf(e[s]) && t.push(e[s]);
          return t;
        })(i)
      );
    }
    h.fn = d.prototype;
    const m = "resize scroll".split(" ");
    function f(e) {
      return function (...t) {
        if (void 0 === t[0]) {
          for (let t = 0; t < this.length; t += 1)
            m.indexOf(e) < 0 &&
              (e in this[t] ? this[t][e]() : h(this[t]).trigger(e));
          return this;
        }
        return this.on(e, ...t);
      };
    }
    f("click"),
      f("blur"),
      f("focus"),
      f("focusin"),
      f("focusout"),
      f("keyup"),
      f("keydown"),
      f("keypress"),
      f("submit"),
      f("change"),
      f("mousedown"),
      f("mousemove"),
      f("mouseup"),
      f("mouseenter"),
      f("mouseleave"),
      f("mouseout"),
      f("mouseover"),
      f("touchstart"),
      f("touchend"),
      f("touchmove"),
      f("resize"),
      f("scroll");
    const g = {
      addClass: function (...e) {
        const t = u(e.map((e) => e.split(" ")));
        return (
          this.forEach((e) => {
            e.classList.add(...t);
          }),
          this
        );
      },
      removeClass: function (...e) {
        const t = u(e.map((e) => e.split(" ")));
        return (
          this.forEach((e) => {
            e.classList.remove(...t);
          }),
          this
        );
      },
      hasClass: function (...e) {
        const t = u(e.map((e) => e.split(" ")));
        return (
          p(this, (e) => t.filter((t) => e.classList.contains(t)).length > 0)
            .length > 0
        );
      },
      toggleClass: function (...e) {
        const t = u(e.map((e) => e.split(" ")));
        this.forEach((e) => {
          t.forEach((t) => {
            e.classList.toggle(t);
          });
        });
      },
      attr: function (e, t) {
        if (1 === arguments.length && "string" == typeof e)
          return this[0] ? this[0].getAttribute(e) : void 0;
        for (let s = 0; s < this.length; s += 1)
          if (2 === arguments.length) this[s].setAttribute(e, t);
          else
            for (const t in e)
              (this[s][t] = e[t]), this[s].setAttribute(t, e[t]);
        return this;
      },
      removeAttr: function (e) {
        for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
        return this;
      },
      transform: function (e) {
        for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
        return this;
      },
      transition: function (e) {
        for (let t = 0; t < this.length; t += 1)
          this[t].style.transitionDuration =
            "string" != typeof e ? `${e}ms` : e;
        return this;
      },
      on: function (...e) {
        let [t, s, n, i] = e;
        function r(e) {
          const t = e.target;
          if (!t) return;
          const i = e.target.dom7EventData || [];
          if ((i.indexOf(e) < 0 && i.unshift(e), h(t).is(s))) n.apply(t, i);
          else {
            const e = h(t).parents();
            for (let t = 0; t < e.length; t += 1)
              h(e[t]).is(s) && n.apply(e[t], i);
          }
        }
        function o(e) {
          const t = (e && e.target && e.target.dom7EventData) || [];
          t.indexOf(e) < 0 && t.unshift(e), n.apply(this, t);
        }
        "function" == typeof e[1] && (([t, n, i] = e), (s = void 0)),
          i || (i = !1);
        const a = t.split(" ");
        let l;
        for (let e = 0; e < this.length; e += 1) {
          const t = this[e];
          if (s)
            for (l = 0; l < a.length; l += 1) {
              const e = a[l];
              t.dom7LiveListeners || (t.dom7LiveListeners = {}),
                t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
                t.dom7LiveListeners[e].push({ listener: n, proxyListener: r }),
                t.addEventListener(e, r, i);
            }
          else
            for (l = 0; l < a.length; l += 1) {
              const e = a[l];
              t.dom7Listeners || (t.dom7Listeners = {}),
                t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
                t.dom7Listeners[e].push({ listener: n, proxyListener: o }),
                t.addEventListener(e, o, i);
            }
        }
        return this;
      },
      off: function (...e) {
        let [t, s, n, i] = e;
        "function" == typeof e[1] && (([t, n, i] = e), (s = void 0)),
          i || (i = !1);
        const r = t.split(" ");
        for (let e = 0; e < r.length; e += 1) {
          const t = r[e];
          for (let e = 0; e < this.length; e += 1) {
            const r = this[e];
            let o;
            if (
              (!s && r.dom7Listeners
                ? (o = r.dom7Listeners[t])
                : s && r.dom7LiveListeners && (o = r.dom7LiveListeners[t]),
              o && o.length)
            )
              for (let e = o.length - 1; e >= 0; e -= 1) {
                const s = o[e];
                (n && s.listener === n) ||
                (n &&
                  s.listener &&
                  s.listener.dom7proxy &&
                  s.listener.dom7proxy === n)
                  ? (r.removeEventListener(t, s.proxyListener, i),
                    o.splice(e, 1))
                  : n ||
                    (r.removeEventListener(t, s.proxyListener, i),
                    o.splice(e, 1));
              }
          }
        }
        return this;
      },
      trigger: function (...e) {
        const t = c(),
          s = e[0].split(" "),
          n = e[1];
        for (let i = 0; i < s.length; i += 1) {
          const r = s[i];
          for (let s = 0; s < this.length; s += 1) {
            const i = this[s];
            if (t.CustomEvent) {
              const s = new t.CustomEvent(r, {
                detail: n,
                bubbles: !0,
                cancelable: !0,
              });
              (i.dom7EventData = e.filter((e, t) => t > 0)),
                i.dispatchEvent(s),
                (i.dom7EventData = []),
                delete i.dom7EventData;
            }
          }
        }
        return this;
      },
      transitionEnd: function (e) {
        const t = this;
        return (
          e &&
            t.on("transitionend", function s(n) {
              n.target === this && (e.call(this, n), t.off("transitionend", s));
            }),
          this
        );
      },
      outerWidth: function (e) {
        if (this.length > 0) {
          if (e) {
            const e = this.styles();
            return (
              this[0].offsetWidth +
              parseFloat(e.getPropertyValue("margin-right")) +
              parseFloat(e.getPropertyValue("margin-left"))
            );
          }
          return this[0].offsetWidth;
        }
        return null;
      },
      outerHeight: function (e) {
        if (this.length > 0) {
          if (e) {
            const e = this.styles();
            return (
              this[0].offsetHeight +
              parseFloat(e.getPropertyValue("margin-top")) +
              parseFloat(e.getPropertyValue("margin-bottom"))
            );
          }
          return this[0].offsetHeight;
        }
        return null;
      },
      styles: function () {
        const e = c();
        return this[0] ? e.getComputedStyle(this[0], null) : {};
      },
      offset: function () {
        if (this.length > 0) {
          const e = c(),
            t = a(),
            s = this[0],
            n = s.getBoundingClientRect(),
            i = t.body,
            r = s.clientTop || i.clientTop || 0,
            o = s.clientLeft || i.clientLeft || 0,
            l = s === e ? e.scrollY : s.scrollTop,
            d = s === e ? e.scrollX : s.scrollLeft;
          return { top: n.top + l - r, left: n.left + d - o };
        }
        return null;
      },
      css: function (e, t) {
        const s = c();
        let n;
        if (1 === arguments.length) {
          if ("string" != typeof e) {
            for (n = 0; n < this.length; n += 1)
              for (const t in e) this[n].style[t] = e[t];
            return this;
          }
          if (this[0])
            return s.getComputedStyle(this[0], null).getPropertyValue(e);
        }
        if (2 === arguments.length && "string" == typeof e) {
          for (n = 0; n < this.length; n += 1) this[n].style[e] = t;
          return this;
        }
        return this;
      },
      each: function (e) {
        return e
          ? (this.forEach((t, s) => {
              e.apply(t, [t, s]);
            }),
            this)
          : this;
      },
      html: function (e) {
        if (void 0 === e) return this[0] ? this[0].innerHTML : null;
        for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
        return this;
      },
      text: function (e) {
        if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
        for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
        return this;
      },
      is: function (e) {
        const t = c(),
          s = a(),
          n = this[0];
        let i, r;
        if (!n || void 0 === e) return !1;
        if ("string" == typeof e) {
          if (n.matches) return n.matches(e);
          if (n.webkitMatchesSelector) return n.webkitMatchesSelector(e);
          if (n.msMatchesSelector) return n.msMatchesSelector(e);
          for (i = h(e), r = 0; r < i.length; r += 1) if (i[r] === n) return !0;
          return !1;
        }
        if (e === s) return n === s;
        if (e === t) return n === t;
        if (e.nodeType || e instanceof d) {
          for (i = e.nodeType ? [e] : e, r = 0; r < i.length; r += 1)
            if (i[r] === n) return !0;
          return !1;
        }
        return !1;
      },
      index: function () {
        let e,
          t = this[0];
        if (t) {
          for (e = 0; null !== (t = t.previousSibling); )
            1 === t.nodeType && (e += 1);
          return e;
        }
      },
      eq: function (e) {
        if (void 0 === e) return this;
        const t = this.length;
        if (e > t - 1) return h([]);
        if (e < 0) {
          const s = t + e;
          return h(s < 0 ? [] : [this[s]]);
        }
        return h([this[e]]);
      },
      append: function (...e) {
        let t;
        const s = a();
        for (let n = 0; n < e.length; n += 1) {
          t = e[n];
          for (let e = 0; e < this.length; e += 1)
            if ("string" == typeof t) {
              const n = s.createElement("div");
              for (n.innerHTML = t; n.firstChild; )
                this[e].appendChild(n.firstChild);
            } else if (t instanceof d)
              for (let s = 0; s < t.length; s += 1) this[e].appendChild(t[s]);
            else this[e].appendChild(t);
        }
        return this;
      },
      prepend: function (e) {
        const t = a();
        let s, n;
        for (s = 0; s < this.length; s += 1)
          if ("string" == typeof e) {
            const i = t.createElement("div");
            for (i.innerHTML = e, n = i.childNodes.length - 1; n >= 0; n -= 1)
              this[s].insertBefore(i.childNodes[n], this[s].childNodes[0]);
          } else if (e instanceof d)
            for (n = 0; n < e.length; n += 1)
              this[s].insertBefore(e[n], this[s].childNodes[0]);
          else this[s].insertBefore(e, this[s].childNodes[0]);
        return this;
      },
      next: function (e) {
        return this.length > 0
          ? e
            ? this[0].nextElementSibling && h(this[0].nextElementSibling).is(e)
              ? h([this[0].nextElementSibling])
              : h([])
            : this[0].nextElementSibling
            ? h([this[0].nextElementSibling])
            : h([])
          : h([]);
      },
      nextAll: function (e) {
        const t = [];
        let s = this[0];
        if (!s) return h([]);
        for (; s.nextElementSibling; ) {
          const n = s.nextElementSibling;
          e ? h(n).is(e) && t.push(n) : t.push(n), (s = n);
        }
        return h(t);
      },
      prev: function (e) {
        if (this.length > 0) {
          const t = this[0];
          return e
            ? t.previousElementSibling && h(t.previousElementSibling).is(e)
              ? h([t.previousElementSibling])
              : h([])
            : t.previousElementSibling
            ? h([t.previousElementSibling])
            : h([]);
        }
        return h([]);
      },
      prevAll: function (e) {
        const t = [];
        let s = this[0];
        if (!s) return h([]);
        for (; s.previousElementSibling; ) {
          const n = s.previousElementSibling;
          e ? h(n).is(e) && t.push(n) : t.push(n), (s = n);
        }
        return h(t);
      },
      parent: function (e) {
        const t = [];
        for (let s = 0; s < this.length; s += 1)
          null !== this[s].parentNode &&
            (e
              ? h(this[s].parentNode).is(e) && t.push(this[s].parentNode)
              : t.push(this[s].parentNode));
        return h(t);
      },
      parents: function (e) {
        const t = [];
        for (let s = 0; s < this.length; s += 1) {
          let n = this[s].parentNode;
          for (; n; )
            e ? h(n).is(e) && t.push(n) : t.push(n), (n = n.parentNode);
        }
        return h(t);
      },
      closest: function (e) {
        let t = this;
        return void 0 === e ? h([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
      },
      find: function (e) {
        const t = [];
        for (let s = 0; s < this.length; s += 1) {
          const n = this[s].querySelectorAll(e);
          for (let e = 0; e < n.length; e += 1) t.push(n[e]);
        }
        return h(t);
      },
      children: function (e) {
        const t = [];
        for (let s = 0; s < this.length; s += 1) {
          const n = this[s].children;
          for (let s = 0; s < n.length; s += 1)
            (e && !h(n[s]).is(e)) || t.push(n[s]);
        }
        return h(t);
      },
      filter: function (e) {
        return h(p(this, e));
      },
      remove: function () {
        for (let e = 0; e < this.length; e += 1)
          this[e].parentNode && this[e].parentNode.removeChild(this[e]);
        return this;
      },
    };
    Object.keys(g).forEach((e) => {
      Object.defineProperty(h.fn, e, { value: g[e], writable: !0 });
    });
    const v = h;
    function b(e, t = 0) {
      return setTimeout(e, t);
    }
    function w() {
      return Date.now();
    }
    function x(e) {
      return (
        "object" == typeof e &&
        null !== e &&
        e.constructor &&
        "Object" === Object.prototype.toString.call(e).slice(8, -1)
      );
    }
    function y(...e) {
      const t = Object(e[0]),
        s = ["__proto__", "constructor", "prototype"];
      for (let i = 1; i < e.length; i += 1) {
        const r = e[i];
        if (
          null != r &&
          ((n = r),
          !("undefined" != typeof window && void 0 !== window.HTMLElement
            ? n instanceof HTMLElement
            : n && (1 === n.nodeType || 11 === n.nodeType)))
        ) {
          const e = Object.keys(Object(r)).filter((e) => s.indexOf(e) < 0);
          for (let s = 0, n = e.length; s < n; s += 1) {
            const n = e[s],
              i = Object.getOwnPropertyDescriptor(r, n);
            void 0 !== i &&
              i.enumerable &&
              (x(t[n]) && x(r[n])
                ? r[n].__swiper__
                  ? (t[n] = r[n])
                  : y(t[n], r[n])
                : !x(t[n]) && x(r[n])
                ? ((t[n] = {}), r[n].__swiper__ ? (t[n] = r[n]) : y(t[n], r[n]))
                : (t[n] = r[n]));
          }
        }
      }
      var n;
      return t;
    }
    function S(e, t, s) {
      e.style.setProperty(t, s);
    }
    function C({ swiper: e, targetPosition: t, side: s }) {
      const n = c(),
        i = -e.translate;
      let r,
        o = null;
      const a = e.params.speed;
      (e.wrapperEl.style.scrollSnapType = "none"),
        n.cancelAnimationFrame(e.cssModeFrameID);
      const l = t > i ? "next" : "prev",
        d = (e, t) => ("next" === l && e >= t) || ("prev" === l && e <= t),
        u = () => {
          (r = new Date().getTime()), null === o && (o = r);
          const l = Math.max(Math.min((r - o) / a, 1), 0),
            c = 0.5 - Math.cos(l * Math.PI) / 2;
          let p = i + c * (t - i);
          if ((d(p, t) && (p = t), e.wrapperEl.scrollTo({ [s]: p }), d(p, t)))
            return (
              (e.wrapperEl.style.overflow = "hidden"),
              (e.wrapperEl.style.scrollSnapType = ""),
              setTimeout(() => {
                (e.wrapperEl.style.overflow = ""),
                  e.wrapperEl.scrollTo({ [s]: p });
              }),
              void n.cancelAnimationFrame(e.cssModeFrameID)
            );
          e.cssModeFrameID = n.requestAnimationFrame(u);
        };
      u();
    }
    let E, T, L;
    function k() {
      return (
        E ||
          (E = (function () {
            const e = c(),
              t = a();
            return {
              smoothScroll:
                t.documentElement &&
                "scrollBehavior" in t.documentElement.style,
              touch: !!(
                "ontouchstart" in e ||
                (e.DocumentTouch && t instanceof e.DocumentTouch)
              ),
              passiveListener: (function () {
                let t = !1;
                try {
                  const s = Object.defineProperty({}, "passive", {
                    get() {
                      t = !0;
                    },
                  });
                  e.addEventListener("testPassiveListener", null, s);
                } catch (e) {}
                return t;
              })(),
              gestures: "ongesturestart" in e,
            };
          })()),
        E
      );
    }
    const M = {
        on(e, t, s) {
          const n = this;
          if ("function" != typeof t) return n;
          const i = s ? "unshift" : "push";
          return (
            e.split(" ").forEach((e) => {
              n.eventsListeners[e] || (n.eventsListeners[e] = []),
                n.eventsListeners[e][i](t);
            }),
            n
          );
        },
        once(e, t, s) {
          const n = this;
          if ("function" != typeof t) return n;
          function i(...s) {
            n.off(e, i),
              i.__emitterProxy && delete i.__emitterProxy,
              t.apply(n, s);
          }
          return (i.__emitterProxy = t), n.on(e, i, s);
        },
        onAny(e, t) {
          const s = this;
          if ("function" != typeof e) return s;
          const n = t ? "unshift" : "push";
          return (
            s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[n](e), s
          );
        },
        offAny(e) {
          const t = this;
          if (!t.eventsAnyListeners) return t;
          const s = t.eventsAnyListeners.indexOf(e);
          return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
        },
        off(e, t) {
          const s = this;
          return s.eventsListeners
            ? (e.split(" ").forEach((e) => {
                void 0 === t
                  ? (s.eventsListeners[e] = [])
                  : s.eventsListeners[e] &&
                    s.eventsListeners[e].forEach((n, i) => {
                      (n === t ||
                        (n.__emitterProxy && n.__emitterProxy === t)) &&
                        s.eventsListeners[e].splice(i, 1);
                    });
              }),
              s)
            : s;
        },
        emit(...e) {
          const t = this;
          if (!t.eventsListeners) return t;
          let s, n, i;
          return (
            "string" == typeof e[0] || Array.isArray(e[0])
              ? ((s = e[0]), (n = e.slice(1, e.length)), (i = t))
              : ((s = e[0].events), (n = e[0].data), (i = e[0].context || t)),
            n.unshift(i),
            (Array.isArray(s) ? s : s.split(" ")).forEach((e) => {
              t.eventsAnyListeners &&
                t.eventsAnyListeners.length &&
                t.eventsAnyListeners.forEach((t) => {
                  t.apply(i, [e, ...n]);
                }),
                t.eventsListeners &&
                  t.eventsListeners[e] &&
                  t.eventsListeners[e].forEach((e) => {
                    e.apply(i, n);
                  });
            }),
            t
          );
        },
      },
      A = {
        updateSize: function () {
          const e = this;
          let t, s;
          const n = e.$el;
          (t =
            void 0 !== e.params.width && null !== e.params.width
              ? e.params.width
              : n[0].clientWidth),
            (s =
              void 0 !== e.params.height && null !== e.params.height
                ? e.params.height
                : n[0].clientHeight),
            (0 === t && e.isHorizontal()) ||
              (0 === s && e.isVertical()) ||
              ((t =
                t -
                parseInt(n.css("padding-left") || 0, 10) -
                parseInt(n.css("padding-right") || 0, 10)),
              (s =
                s -
                parseInt(n.css("padding-top") || 0, 10) -
                parseInt(n.css("padding-bottom") || 0, 10)),
              Number.isNaN(t) && (t = 0),
              Number.isNaN(s) && (s = 0),
              Object.assign(e, {
                width: t,
                height: s,
                size: e.isHorizontal() ? t : s,
              }));
        },
        updateSlides: function () {
          const e = this;
          function t(t) {
            return e.isHorizontal()
              ? t
              : {
                  width: "height",
                  "margin-top": "margin-left",
                  "margin-bottom ": "margin-right",
                  "margin-left": "margin-top",
                  "margin-right": "margin-bottom",
                  "padding-left": "padding-top",
                  "padding-right": "padding-bottom",
                  marginRight: "marginBottom",
                }[t];
          }
          function s(e, s) {
            return parseFloat(e.getPropertyValue(t(s)) || 0);
          }
          const n = e.params,
            { $wrapperEl: i, size: r, rtlTranslate: o, wrongRTL: a } = e,
            l = e.virtual && n.virtual.enabled,
            c = l ? e.virtual.slides.length : e.slides.length,
            d = i.children(`.${e.params.slideClass}`),
            u = l ? e.virtual.slides.length : d.length;
          let p = [];
          const h = [],
            m = [];
          let f = n.slidesOffsetBefore;
          "function" == typeof f && (f = n.slidesOffsetBefore.call(e));
          let g = n.slidesOffsetAfter;
          "function" == typeof g && (g = n.slidesOffsetAfter.call(e));
          const v = e.snapGrid.length,
            b = e.slidesGrid.length;
          let w = n.spaceBetween,
            x = -f,
            y = 0,
            C = 0;
          if (void 0 === r) return;
          "string" == typeof w &&
            w.indexOf("%") >= 0 &&
            (w = (parseFloat(w.replace("%", "")) / 100) * r),
            (e.virtualSize = -w),
            o
              ? d.css({ marginLeft: "", marginBottom: "", marginTop: "" })
              : d.css({ marginRight: "", marginBottom: "", marginTop: "" }),
            n.centeredSlides &&
              n.cssMode &&
              (S(e.wrapperEl, "--swiper-centered-offset-before", ""),
              S(e.wrapperEl, "--swiper-centered-offset-after", ""));
          const E = n.grid && n.grid.rows > 1 && e.grid;
          let T;
          E && e.grid.initSlides(u);
          const L =
            "auto" === n.slidesPerView &&
            n.breakpoints &&
            Object.keys(n.breakpoints).filter(
              (e) => void 0 !== n.breakpoints[e].slidesPerView
            ).length > 0;
          for (let i = 0; i < u; i += 1) {
            T = 0;
            const o = d.eq(i);
            if (
              (E && e.grid.updateSlide(i, o, u, t), "none" !== o.css("display"))
            ) {
              if ("auto" === n.slidesPerView) {
                L && (d[i].style[t("width")] = "");
                const r = getComputedStyle(o[0]),
                  a = o[0].style.transform,
                  l = o[0].style.webkitTransform;
                if (
                  (a && (o[0].style.transform = "none"),
                  l && (o[0].style.webkitTransform = "none"),
                  n.roundLengths)
                )
                  T = e.isHorizontal() ? o.outerWidth(!0) : o.outerHeight(!0);
                else {
                  const e = s(r, "width"),
                    t = s(r, "padding-left"),
                    n = s(r, "padding-right"),
                    i = s(r, "margin-left"),
                    a = s(r, "margin-right"),
                    l = r.getPropertyValue("box-sizing");
                  if (l && "border-box" === l) T = e + i + a;
                  else {
                    const { clientWidth: s, offsetWidth: r } = o[0];
                    T = e + t + n + i + a + (r - s);
                  }
                }
                a && (o[0].style.transform = a),
                  l && (o[0].style.webkitTransform = l),
                  n.roundLengths && (T = Math.floor(T));
              } else
                (T = (r - (n.slidesPerView - 1) * w) / n.slidesPerView),
                  n.roundLengths && (T = Math.floor(T)),
                  d[i] && (d[i].style[t("width")] = `${T}px`);
              d[i] && (d[i].swiperSlideSize = T),
                m.push(T),
                n.centeredSlides
                  ? ((x = x + T / 2 + y / 2 + w),
                    0 === y && 0 !== i && (x = x - r / 2 - w),
                    0 === i && (x = x - r / 2 - w),
                    Math.abs(x) < 0.001 && (x = 0),
                    n.roundLengths && (x = Math.floor(x)),
                    C % n.slidesPerGroup == 0 && p.push(x),
                    h.push(x))
                  : (n.roundLengths && (x = Math.floor(x)),
                    (C - Math.min(e.params.slidesPerGroupSkip, C)) %
                      e.params.slidesPerGroup ==
                      0 && p.push(x),
                    h.push(x),
                    (x = x + T + w)),
                (e.virtualSize += T + w),
                (y = T),
                (C += 1);
            }
          }
          if (
            ((e.virtualSize = Math.max(e.virtualSize, r) + g),
            o &&
              a &&
              ("slide" === n.effect || "coverflow" === n.effect) &&
              i.css({ width: `${e.virtualSize + n.spaceBetween}px` }),
            n.setWrapperSize &&
              i.css({ [t("width")]: `${e.virtualSize + n.spaceBetween}px` }),
            E && e.grid.updateWrapperSize(T, p, t),
            !n.centeredSlides)
          ) {
            const t = [];
            for (let s = 0; s < p.length; s += 1) {
              let i = p[s];
              n.roundLengths && (i = Math.floor(i)),
                p[s] <= e.virtualSize - r && t.push(i);
            }
            (p = t),
              Math.floor(e.virtualSize - r) - Math.floor(p[p.length - 1]) > 1 &&
                p.push(e.virtualSize - r);
          }
          if ((0 === p.length && (p = [0]), 0 !== n.spaceBetween)) {
            const s = e.isHorizontal() && o ? "marginLeft" : t("marginRight");
            d.filter((e, t) => !n.cssMode || t !== d.length - 1).css({
              [s]: `${w}px`,
            });
          }
          if (n.centeredSlides && n.centeredSlidesBounds) {
            let e = 0;
            m.forEach((t) => {
              e += t + (n.spaceBetween ? n.spaceBetween : 0);
            }),
              (e -= n.spaceBetween);
            const t = e - r;
            p = p.map((e) => (e < 0 ? -f : e > t ? t + g : e));
          }
          if (n.centerInsufficientSlides) {
            let e = 0;
            if (
              (m.forEach((t) => {
                e += t + (n.spaceBetween ? n.spaceBetween : 0);
              }),
              (e -= n.spaceBetween),
              e < r)
            ) {
              const t = (r - e) / 2;
              p.forEach((e, s) => {
                p[s] = e - t;
              }),
                h.forEach((e, s) => {
                  h[s] = e + t;
                });
            }
          }
          if (
            (Object.assign(e, {
              slides: d,
              snapGrid: p,
              slidesGrid: h,
              slidesSizesGrid: m,
            }),
            n.centeredSlides && n.cssMode && !n.centeredSlidesBounds)
          ) {
            S(e.wrapperEl, "--swiper-centered-offset-before", -p[0] + "px"),
              S(
                e.wrapperEl,
                "--swiper-centered-offset-after",
                e.size / 2 - m[m.length - 1] / 2 + "px"
              );
            const t = -e.snapGrid[0],
              s = -e.slidesGrid[0];
            (e.snapGrid = e.snapGrid.map((e) => e + t)),
              (e.slidesGrid = e.slidesGrid.map((e) => e + s));
          }
          u !== c && e.emit("slidesLengthChange"),
            p.length !== v &&
              (e.params.watchOverflow && e.checkOverflow(),
              e.emit("snapGridLengthChange")),
            h.length !== b && e.emit("slidesGridLengthChange"),
            n.watchSlidesProgress && e.updateSlidesOffset();
        },
        updateAutoHeight: function (e) {
          const t = this,
            s = [],
            n = t.virtual && t.params.virtual.enabled;
          let i,
            r = 0;
          "number" == typeof e
            ? t.setTransition(e)
            : !0 === e && t.setTransition(t.params.speed);
          const o = (e) =>
            n
              ? t.slides.filter(
                  (t) =>
                    parseInt(t.getAttribute("data-swiper-slide-index"), 10) ===
                    e
                )[0]
              : t.slides.eq(e)[0];
          if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
            if (t.params.centeredSlides)
              t.visibleSlides.each((e) => {
                s.push(e);
              });
            else
              for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
                const e = t.activeIndex + i;
                if (e > t.slides.length && !n) break;
                s.push(o(e));
              }
          else s.push(o(t.activeIndex));
          for (i = 0; i < s.length; i += 1)
            if (void 0 !== s[i]) {
              const e = s[i].offsetHeight;
              r = e > r ? e : r;
            }
          (r || 0 === r) && t.$wrapperEl.css("height", `${r}px`);
        },
        updateSlidesOffset: function () {
          const e = this,
            t = e.slides;
          for (let s = 0; s < t.length; s += 1)
            t[s].swiperSlideOffset = e.isHorizontal()
              ? t[s].offsetLeft
              : t[s].offsetTop;
        },
        updateSlidesProgress: function (e = (this && this.translate) || 0) {
          const t = this,
            s = t.params,
            { slides: n, rtlTranslate: i, snapGrid: r } = t;
          if (0 === n.length) return;
          void 0 === n[0].swiperSlideOffset && t.updateSlidesOffset();
          let o = -e;
          i && (o = e),
            n.removeClass(s.slideVisibleClass),
            (t.visibleSlidesIndexes = []),
            (t.visibleSlides = []);
          for (let e = 0; e < n.length; e += 1) {
            const a = n[e];
            let l = a.swiperSlideOffset;
            s.cssMode && s.centeredSlides && (l -= n[0].swiperSlideOffset);
            const c =
                (o + (s.centeredSlides ? t.minTranslate() : 0) - l) /
                (a.swiperSlideSize + s.spaceBetween),
              d =
                (o - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - l) /
                (a.swiperSlideSize + s.spaceBetween),
              u = -(o - l),
              p = u + t.slidesSizesGrid[e];
            ((u >= 0 && u < t.size - 1) ||
              (p > 1 && p <= t.size) ||
              (u <= 0 && p >= t.size)) &&
              (t.visibleSlides.push(a),
              t.visibleSlidesIndexes.push(e),
              n.eq(e).addClass(s.slideVisibleClass)),
              (a.progress = i ? -c : c),
              (a.originalProgress = i ? -d : d);
          }
          t.visibleSlides = v(t.visibleSlides);
        },
        updateProgress: function (e) {
          const t = this;
          if (void 0 === e) {
            const s = t.rtlTranslate ? -1 : 1;
            e = (t && t.translate && t.translate * s) || 0;
          }
          const s = t.params,
            n = t.maxTranslate() - t.minTranslate();
          let { progress: i, isBeginning: r, isEnd: o } = t;
          const a = r,
            l = o;
          0 === n
            ? ((i = 0), (r = !0), (o = !0))
            : ((i = (e - t.minTranslate()) / n), (r = i <= 0), (o = i >= 1)),
            Object.assign(t, { progress: i, isBeginning: r, isEnd: o }),
            (s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) &&
              t.updateSlidesProgress(e),
            r && !a && t.emit("reachBeginning toEdge"),
            o && !l && t.emit("reachEnd toEdge"),
            ((a && !r) || (l && !o)) && t.emit("fromEdge"),
            t.emit("progress", i);
        },
        updateSlidesClasses: function () {
          const e = this,
            {
              slides: t,
              params: s,
              $wrapperEl: n,
              activeIndex: i,
              realIndex: r,
            } = e,
            o = e.virtual && s.virtual.enabled;
          let a;
          t.removeClass(
            `${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`
          ),
            (a = o
              ? e.$wrapperEl.find(
                  `.${s.slideClass}[data-swiper-slide-index="${i}"]`
                )
              : t.eq(i)),
            a.addClass(s.slideActiveClass),
            s.loop &&
              (a.hasClass(s.slideDuplicateClass)
                ? n
                    .children(
                      `.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${r}"]`
                    )
                    .addClass(s.slideDuplicateActiveClass)
                : n
                    .children(
                      `.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${r}"]`
                    )
                    .addClass(s.slideDuplicateActiveClass));
          let l = a
            .nextAll(`.${s.slideClass}`)
            .eq(0)
            .addClass(s.slideNextClass);
          s.loop &&
            0 === l.length &&
            ((l = t.eq(0)), l.addClass(s.slideNextClass));
          let c = a
            .prevAll(`.${s.slideClass}`)
            .eq(0)
            .addClass(s.slidePrevClass);
          s.loop &&
            0 === c.length &&
            ((c = t.eq(-1)), c.addClass(s.slidePrevClass)),
            s.loop &&
              (l.hasClass(s.slideDuplicateClass)
                ? n
                    .children(
                      `.${s.slideClass}:not(.${
                        s.slideDuplicateClass
                      })[data-swiper-slide-index="${l.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(s.slideDuplicateNextClass)
                : n
                    .children(
                      `.${s.slideClass}.${
                        s.slideDuplicateClass
                      }[data-swiper-slide-index="${l.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(s.slideDuplicateNextClass),
              c.hasClass(s.slideDuplicateClass)
                ? n
                    .children(
                      `.${s.slideClass}:not(.${
                        s.slideDuplicateClass
                      })[data-swiper-slide-index="${c.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(s.slideDuplicatePrevClass)
                : n
                    .children(
                      `.${s.slideClass}.${
                        s.slideDuplicateClass
                      }[data-swiper-slide-index="${c.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(s.slideDuplicatePrevClass)),
            e.emitSlidesClasses();
        },
        updateActiveIndex: function (e) {
          const t = this,
            s = t.rtlTranslate ? t.translate : -t.translate,
            {
              slidesGrid: n,
              snapGrid: i,
              params: r,
              activeIndex: o,
              realIndex: a,
              snapIndex: l,
            } = t;
          let c,
            d = e;
          if (void 0 === d) {
            for (let e = 0; e < n.length; e += 1)
              void 0 !== n[e + 1]
                ? s >= n[e] && s < n[e + 1] - (n[e + 1] - n[e]) / 2
                  ? (d = e)
                  : s >= n[e] && s < n[e + 1] && (d = e + 1)
                : s >= n[e] && (d = e);
            r.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0);
          }
          if (i.indexOf(s) >= 0) c = i.indexOf(s);
          else {
            const e = Math.min(r.slidesPerGroupSkip, d);
            c = e + Math.floor((d - e) / r.slidesPerGroup);
          }
          if ((c >= i.length && (c = i.length - 1), d === o))
            return void (
              c !== l && ((t.snapIndex = c), t.emit("snapIndexChange"))
            );
          const u = parseInt(
            t.slides.eq(d).attr("data-swiper-slide-index") || d,
            10
          );
          Object.assign(t, {
            snapIndex: c,
            realIndex: u,
            previousIndex: o,
            activeIndex: d,
          }),
            t.emit("activeIndexChange"),
            t.emit("snapIndexChange"),
            a !== u && t.emit("realIndexChange"),
            (t.initialized || t.params.runCallbacksOnInit) &&
              t.emit("slideChange");
        },
        updateClickedSlide: function (e) {
          const t = this,
            s = t.params,
            n = v(e).closest(`.${s.slideClass}`)[0];
          let i,
            r = !1;
          if (n)
            for (let e = 0; e < t.slides.length; e += 1)
              if (t.slides[e] === n) {
                (r = !0), (i = e);
                break;
              }
          if (!n || !r)
            return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
          (t.clickedSlide = n),
            t.virtual && t.params.virtual.enabled
              ? (t.clickedIndex = parseInt(
                  v(n).attr("data-swiper-slide-index"),
                  10
                ))
              : (t.clickedIndex = i),
            s.slideToClickedSlide &&
              void 0 !== t.clickedIndex &&
              t.clickedIndex !== t.activeIndex &&
              t.slideToClickedSlide();
        },
      };
    function P({ swiper: e, runCallbacks: t, direction: s, step: n }) {
      const { activeIndex: i, previousIndex: r } = e;
      let o = s;
      if (
        (o || (o = i > r ? "next" : i < r ? "prev" : "reset"),
        e.emit(`transition${n}`),
        t && i !== r)
      ) {
        if ("reset" === o) return void e.emit(`slideResetTransition${n}`);
        e.emit(`slideChangeTransition${n}`),
          "next" === o
            ? e.emit(`slideNextTransition${n}`)
            : e.emit(`slidePrevTransition${n}`);
      }
    }
    const $ = {
        slideTo: function (e = 0, t = this.params.speed, s = !0, n, i) {
          if ("number" != typeof e && "string" != typeof e)
            throw new Error(
              `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
            );
          if ("string" == typeof e) {
            const t = parseInt(e, 10);
            if (!isFinite(t))
              throw new Error(
                `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
              );
            e = t;
          }
          const r = this;
          let o = e;
          o < 0 && (o = 0);
          const {
            params: a,
            snapGrid: l,
            slidesGrid: c,
            previousIndex: d,
            activeIndex: u,
            rtlTranslate: p,
            wrapperEl: h,
            enabled: m,
          } = r;
          if (
            (r.animating && a.preventInteractionOnTransition) ||
            (!m && !n && !i)
          )
            return !1;
          const f = Math.min(r.params.slidesPerGroupSkip, o);
          let g = f + Math.floor((o - f) / r.params.slidesPerGroup);
          g >= l.length && (g = l.length - 1),
            (u || a.initialSlide || 0) === (d || 0) &&
              s &&
              r.emit("beforeSlideChangeStart");
          const v = -l[g];
          if ((r.updateProgress(v), a.normalizeSlideIndex))
            for (let e = 0; e < c.length; e += 1) {
              const t = -Math.floor(100 * v),
                s = Math.floor(100 * c[e]),
                n = Math.floor(100 * c[e + 1]);
              void 0 !== c[e + 1]
                ? t >= s && t < n - (n - s) / 2
                  ? (o = e)
                  : t >= s && t < n && (o = e + 1)
                : t >= s && (o = e);
            }
          if (r.initialized && o !== u) {
            if (!r.allowSlideNext && v < r.translate && v < r.minTranslate())
              return !1;
            if (
              !r.allowSlidePrev &&
              v > r.translate &&
              v > r.maxTranslate() &&
              (u || 0) !== o
            )
              return !1;
          }
          let b;
          if (
            ((b = o > u ? "next" : o < u ? "prev" : "reset"),
            (p && -v === r.translate) || (!p && v === r.translate))
          )
            return (
              r.updateActiveIndex(o),
              a.autoHeight && r.updateAutoHeight(),
              r.updateSlidesClasses(),
              "slide" !== a.effect && r.setTranslate(v),
              "reset" !== b && (r.transitionStart(s, b), r.transitionEnd(s, b)),
              !1
            );
          if (a.cssMode) {
            const e = r.isHorizontal(),
              s = p ? v : -v;
            if (0 === t) {
              const t = r.virtual && r.params.virtual.enabled;
              t &&
                ((r.wrapperEl.style.scrollSnapType = "none"),
                (r._immediateVirtual = !0)),
                (h[e ? "scrollLeft" : "scrollTop"] = s),
                t &&
                  requestAnimationFrame(() => {
                    (r.wrapperEl.style.scrollSnapType = ""),
                      (r._swiperImmediateVirtual = !1);
                  });
            } else {
              if (!r.support.smoothScroll)
                return (
                  C({ swiper: r, targetPosition: s, side: e ? "left" : "top" }),
                  !0
                );
              h.scrollTo({ [e ? "left" : "top"]: s, behavior: "smooth" });
            }
            return !0;
          }
          return (
            r.setTransition(t),
            r.setTranslate(v),
            r.updateActiveIndex(o),
            r.updateSlidesClasses(),
            r.emit("beforeTransitionStart", t, n),
            r.transitionStart(s, b),
            0 === t
              ? r.transitionEnd(s, b)
              : r.animating ||
                ((r.animating = !0),
                r.onSlideToWrapperTransitionEnd ||
                  (r.onSlideToWrapperTransitionEnd = function (e) {
                    r &&
                      !r.destroyed &&
                      e.target === this &&
                      (r.$wrapperEl[0].removeEventListener(
                        "transitionend",
                        r.onSlideToWrapperTransitionEnd
                      ),
                      r.$wrapperEl[0].removeEventListener(
                        "webkitTransitionEnd",
                        r.onSlideToWrapperTransitionEnd
                      ),
                      (r.onSlideToWrapperTransitionEnd = null),
                      delete r.onSlideToWrapperTransitionEnd,
                      r.transitionEnd(s, b));
                  }),
                r.$wrapperEl[0].addEventListener(
                  "transitionend",
                  r.onSlideToWrapperTransitionEnd
                ),
                r.$wrapperEl[0].addEventListener(
                  "webkitTransitionEnd",
                  r.onSlideToWrapperTransitionEnd
                )),
            !0
          );
        },
        slideToLoop: function (e = 0, t = this.params.speed, s = !0, n) {
          const i = this;
          let r = e;
          return i.params.loop && (r += i.loopedSlides), i.slideTo(r, t, s, n);
        },
        slideNext: function (e = this.params.speed, t = !0, s) {
          const n = this,
            { animating: i, enabled: r, params: o } = n;
          if (!r) return n;
          let a = o.slidesPerGroup;
          "auto" === o.slidesPerView &&
            1 === o.slidesPerGroup &&
            o.slidesPerGroupAuto &&
            (a = Math.max(n.slidesPerViewDynamic("current", !0), 1));
          const l = n.activeIndex < o.slidesPerGroupSkip ? 1 : a;
          if (o.loop) {
            if (i && o.loopPreventsSlide) return !1;
            n.loopFix(), (n._clientLeft = n.$wrapperEl[0].clientLeft);
          }
          return o.rewind && n.isEnd
            ? n.slideTo(0, e, t, s)
            : n.slideTo(n.activeIndex + l, e, t, s);
        },
        slidePrev: function (e = this.params.speed, t = !0, s) {
          const n = this,
            {
              params: i,
              animating: r,
              snapGrid: o,
              slidesGrid: a,
              rtlTranslate: l,
              enabled: c,
            } = n;
          if (!c) return n;
          if (i.loop) {
            if (r && i.loopPreventsSlide) return !1;
            n.loopFix(), (n._clientLeft = n.$wrapperEl[0].clientLeft);
          }
          function d(e) {
            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
          }
          const u = d(l ? n.translate : -n.translate),
            p = o.map((e) => d(e));
          let h = o[p.indexOf(u) - 1];
          if (void 0 === h && i.cssMode) {
            let e;
            o.forEach((t, s) => {
              u >= t && (e = s);
            }),
              void 0 !== e && (h = o[e > 0 ? e - 1 : e]);
          }
          let m = 0;
          return (
            void 0 !== h &&
              ((m = a.indexOf(h)),
              m < 0 && (m = n.activeIndex - 1),
              "auto" === i.slidesPerView &&
                1 === i.slidesPerGroup &&
                i.slidesPerGroupAuto &&
                ((m = m - n.slidesPerViewDynamic("previous", !0) + 1),
                (m = Math.max(m, 0)))),
            i.rewind && n.isBeginning
              ? n.slideTo(n.slides.length - 1, e, t, s)
              : n.slideTo(m, e, t, s)
          );
        },
        slideReset: function (e = this.params.speed, t = !0, s) {
          return this.slideTo(this.activeIndex, e, t, s);
        },
        slideToClosest: function (e = this.params.speed, t = !0, s, n = 0.5) {
          const i = this;
          let r = i.activeIndex;
          const o = Math.min(i.params.slidesPerGroupSkip, r),
            a = o + Math.floor((r - o) / i.params.slidesPerGroup),
            l = i.rtlTranslate ? i.translate : -i.translate;
          if (l >= i.snapGrid[a]) {
            const e = i.snapGrid[a];
            l - e > (i.snapGrid[a + 1] - e) * n &&
              (r += i.params.slidesPerGroup);
          } else {
            const e = i.snapGrid[a - 1];
            l - e <= (i.snapGrid[a] - e) * n && (r -= i.params.slidesPerGroup);
          }
          return (
            (r = Math.max(r, 0)),
            (r = Math.min(r, i.slidesGrid.length - 1)),
            i.slideTo(r, e, t, s)
          );
        },
        slideToClickedSlide: function () {
          const e = this,
            { params: t, $wrapperEl: s } = e,
            n =
              "auto" === t.slidesPerView
                ? e.slidesPerViewDynamic()
                : t.slidesPerView;
          let i,
            r = e.clickedIndex;
          if (t.loop) {
            if (e.animating) return;
            (i = parseInt(
              v(e.clickedSlide).attr("data-swiper-slide-index"),
              10
            )),
              t.centeredSlides
                ? r < e.loopedSlides - n / 2 ||
                  r > e.slides.length - e.loopedSlides + n / 2
                  ? (e.loopFix(),
                    (r = s
                      .children(
                        `.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`
                      )
                      .eq(0)
                      .index()),
                    b(() => {
                      e.slideTo(r);
                    }))
                  : e.slideTo(r)
                : r > e.slides.length - n
                ? (e.loopFix(),
                  (r = s
                    .children(
                      `.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`
                    )
                    .eq(0)
                    .index()),
                  b(() => {
                    e.slideTo(r);
                  }))
                : e.slideTo(r);
          } else e.slideTo(r);
        },
      },
      O = {
        loopCreate: function () {
          const e = this,
            t = a(),
            { params: s, $wrapperEl: n } = e,
            i = n.children().length > 0 ? v(n.children()[0].parentNode) : n;
          i.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();
          let r = i.children(`.${s.slideClass}`);
          if (s.loopFillGroupWithBlank) {
            const e = s.slidesPerGroup - (r.length % s.slidesPerGroup);
            if (e !== s.slidesPerGroup) {
              for (let n = 0; n < e; n += 1) {
                const e = v(t.createElement("div")).addClass(
                  `${s.slideClass} ${s.slideBlankClass}`
                );
                i.append(e);
              }
              r = i.children(`.${s.slideClass}`);
            }
          }
          "auto" !== s.slidesPerView ||
            s.loopedSlides ||
            (s.loopedSlides = r.length),
            (e.loopedSlides = Math.ceil(
              parseFloat(s.loopedSlides || s.slidesPerView, 10)
            )),
            (e.loopedSlides += s.loopAdditionalSlides),
            e.loopedSlides > r.length && (e.loopedSlides = r.length);
          const o = [],
            l = [];
          r.each((t, s) => {
            const n = v(t);
            s < e.loopedSlides && l.push(t),
              s < r.length && s >= r.length - e.loopedSlides && o.push(t),
              n.attr("data-swiper-slide-index", s);
          });
          for (let e = 0; e < l.length; e += 1)
            i.append(v(l[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
          for (let e = o.length - 1; e >= 0; e -= 1)
            i.prepend(v(o[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
        },
        loopFix: function () {
          const e = this;
          e.emit("beforeLoopFix");
          const {
            activeIndex: t,
            slides: s,
            loopedSlides: n,
            allowSlidePrev: i,
            allowSlideNext: r,
            snapGrid: o,
            rtlTranslate: a,
          } = e;
          let l;
          (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
          const c = -o[t] - e.getTranslate();
          t < n
            ? ((l = s.length - 3 * n + t),
              (l += n),
              e.slideTo(l, 0, !1, !0) &&
                0 !== c &&
                e.setTranslate((a ? -e.translate : e.translate) - c))
            : t >= s.length - n &&
              ((l = -s.length + t + n),
              (l += n),
              e.slideTo(l, 0, !1, !0) &&
                0 !== c &&
                e.setTranslate((a ? -e.translate : e.translate) - c)),
            (e.allowSlidePrev = i),
            (e.allowSlideNext = r),
            e.emit("loopFix");
        },
        loopDestroy: function () {
          const { $wrapperEl: e, params: t, slides: s } = this;
          e
            .children(
              `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
            )
            .remove(),
            s.removeAttr("data-swiper-slide-index");
        },
      };
    function _(e) {
      const t = this,
        s = a(),
        n = c(),
        i = t.touchEventsData,
        { params: r, touches: o, enabled: l } = t;
      if (!l) return;
      if (t.animating && r.preventInteractionOnTransition) return;
      !t.animating && r.cssMode && r.loop && t.loopFix();
      let d = e;
      d.originalEvent && (d = d.originalEvent);
      let u = v(d.target);
      if ("wrapper" === r.touchEventsTarget && !u.closest(t.wrapperEl).length)
        return;
      if (
        ((i.isTouchEvent = "touchstart" === d.type),
        !i.isTouchEvent && "which" in d && 3 === d.which)
      )
        return;
      if (!i.isTouchEvent && "button" in d && d.button > 0) return;
      if (i.isTouched && i.isMoved) return;
      r.noSwipingClass &&
        "" !== r.noSwipingClass &&
        d.target &&
        d.target.shadowRoot &&
        e.path &&
        e.path[0] &&
        (u = v(e.path[0]));
      const p = r.noSwipingSelector
          ? r.noSwipingSelector
          : `.${r.noSwipingClass}`,
        h = !(!d.target || !d.target.shadowRoot);
      if (
        r.noSwiping &&
        (h
          ? (function (e, t = this) {
              return (function t(s) {
                return s && s !== a() && s !== c()
                  ? (s.assignedSlot && (s = s.assignedSlot),
                    s.closest(e) || t(s.getRootNode().host))
                  : null;
              })(t);
            })(p, d.target)
          : u.closest(p)[0])
      )
        return void (t.allowClick = !0);
      if (r.swipeHandler && !u.closest(r.swipeHandler)[0]) return;
      (o.currentX =
        "touchstart" === d.type ? d.targetTouches[0].pageX : d.pageX),
        (o.currentY =
          "touchstart" === d.type ? d.targetTouches[0].pageY : d.pageY);
      const m = o.currentX,
        f = o.currentY,
        g = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
        b = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
      if (g && (m <= b || m >= n.innerWidth - b)) {
        if ("prevent" !== g) return;
        e.preventDefault();
      }
      if (
        (Object.assign(i, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0,
        }),
        (o.startX = m),
        (o.startY = f),
        (i.touchStartTime = w()),
        (t.allowClick = !0),
        t.updateSize(),
        (t.swipeDirection = void 0),
        r.threshold > 0 && (i.allowThresholdMove = !1),
        "touchstart" !== d.type)
      ) {
        let e = !0;
        u.is(i.focusableElements) && (e = !1),
          s.activeElement &&
            v(s.activeElement).is(i.focusableElements) &&
            s.activeElement !== u[0] &&
            s.activeElement.blur();
        const n = e && t.allowTouchMove && r.touchStartPreventDefault;
        (!r.touchStartForcePreventDefault && !n) ||
          u[0].isContentEditable ||
          d.preventDefault();
      }
      t.emit("touchStart", d);
    }
    function I(e) {
      const t = a(),
        s = this,
        n = s.touchEventsData,
        { params: i, touches: r, rtlTranslate: o, enabled: l } = s;
      if (!l) return;
      let c = e;
      if ((c.originalEvent && (c = c.originalEvent), !n.isTouched))
        return void (
          n.startMoving &&
          n.isScrolling &&
          s.emit("touchMoveOpposite", c)
        );
      if (n.isTouchEvent && "touchmove" !== c.type) return;
      const d =
          "touchmove" === c.type &&
          c.targetTouches &&
          (c.targetTouches[0] || c.changedTouches[0]),
        u = "touchmove" === c.type ? d.pageX : c.pageX,
        p = "touchmove" === c.type ? d.pageY : c.pageY;
      if (c.preventedByNestedSwiper) return (r.startX = u), void (r.startY = p);
      if (!s.allowTouchMove)
        return (
          (s.allowClick = !1),
          void (
            n.isTouched &&
            (Object.assign(r, {
              startX: u,
              startY: p,
              currentX: u,
              currentY: p,
            }),
            (n.touchStartTime = w()))
          )
        );
      if (n.isTouchEvent && i.touchReleaseOnEdges && !i.loop)
        if (s.isVertical()) {
          if (
            (p < r.startY && s.translate <= s.maxTranslate()) ||
            (p > r.startY && s.translate >= s.minTranslate())
          )
            return (n.isTouched = !1), void (n.isMoved = !1);
        } else if (
          (u < r.startX && s.translate <= s.maxTranslate()) ||
          (u > r.startX && s.translate >= s.minTranslate())
        )
          return;
      if (
        n.isTouchEvent &&
        t.activeElement &&
        c.target === t.activeElement &&
        v(c.target).is(n.focusableElements)
      )
        return (n.isMoved = !0), void (s.allowClick = !1);
      if (
        (n.allowTouchCallbacks && s.emit("touchMove", c),
        c.targetTouches && c.targetTouches.length > 1)
      )
        return;
      (r.currentX = u), (r.currentY = p);
      const h = r.currentX - r.startX,
        m = r.currentY - r.startY;
      if (s.params.threshold && Math.sqrt(h ** 2 + m ** 2) < s.params.threshold)
        return;
      if (void 0 === n.isScrolling) {
        let e;
        (s.isHorizontal() && r.currentY === r.startY) ||
        (s.isVertical() && r.currentX === r.startX)
          ? (n.isScrolling = !1)
          : h * h + m * m >= 25 &&
            ((e = (180 * Math.atan2(Math.abs(m), Math.abs(h))) / Math.PI),
            (n.isScrolling = s.isHorizontal()
              ? e > i.touchAngle
              : 90 - e > i.touchAngle));
      }
      if (
        (n.isScrolling && s.emit("touchMoveOpposite", c),
        void 0 === n.startMoving &&
          ((r.currentX === r.startX && r.currentY === r.startY) ||
            (n.startMoving = !0)),
        n.isScrolling)
      )
        return void (n.isTouched = !1);
      if (!n.startMoving) return;
      (s.allowClick = !1),
        !i.cssMode && c.cancelable && c.preventDefault(),
        i.touchMoveStopPropagation && !i.nested && c.stopPropagation(),
        n.isMoved ||
          (i.loop && !i.cssMode && s.loopFix(),
          (n.startTranslate = s.getTranslate()),
          s.setTransition(0),
          s.animating &&
            s.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
          (n.allowMomentumBounce = !1),
          !i.grabCursor ||
            (!0 !== s.allowSlideNext && !0 !== s.allowSlidePrev) ||
            s.setGrabCursor(!0),
          s.emit("sliderFirstMove", c)),
        s.emit("sliderMove", c),
        (n.isMoved = !0);
      let f = s.isHorizontal() ? h : m;
      (r.diff = f),
        (f *= i.touchRatio),
        o && (f = -f),
        (s.swipeDirection = f > 0 ? "prev" : "next"),
        (n.currentTranslate = f + n.startTranslate);
      let g = !0,
        b = i.resistanceRatio;
      if (
        (i.touchReleaseOnEdges && (b = 0),
        f > 0 && n.currentTranslate > s.minTranslate()
          ? ((g = !1),
            i.resistance &&
              (n.currentTranslate =
                s.minTranslate() -
                1 +
                (-s.minTranslate() + n.startTranslate + f) ** b))
          : f < 0 &&
            n.currentTranslate < s.maxTranslate() &&
            ((g = !1),
            i.resistance &&
              (n.currentTranslate =
                s.maxTranslate() +
                1 -
                (s.maxTranslate() - n.startTranslate - f) ** b)),
        g && (c.preventedByNestedSwiper = !0),
        !s.allowSlideNext &&
          "next" === s.swipeDirection &&
          n.currentTranslate < n.startTranslate &&
          (n.currentTranslate = n.startTranslate),
        !s.allowSlidePrev &&
          "prev" === s.swipeDirection &&
          n.currentTranslate > n.startTranslate &&
          (n.currentTranslate = n.startTranslate),
        s.allowSlidePrev ||
          s.allowSlideNext ||
          (n.currentTranslate = n.startTranslate),
        i.threshold > 0)
      ) {
        if (!(Math.abs(f) > i.threshold || n.allowThresholdMove))
          return void (n.currentTranslate = n.startTranslate);
        if (!n.allowThresholdMove)
          return (
            (n.allowThresholdMove = !0),
            (r.startX = r.currentX),
            (r.startY = r.currentY),
            (n.currentTranslate = n.startTranslate),
            void (r.diff = s.isHorizontal()
              ? r.currentX - r.startX
              : r.currentY - r.startY)
          );
      }
      i.followFinger &&
        !i.cssMode &&
        (((i.freeMode && i.freeMode.enabled && s.freeMode) ||
          i.watchSlidesProgress) &&
          (s.updateActiveIndex(), s.updateSlidesClasses()),
        s.params.freeMode &&
          i.freeMode.enabled &&
          s.freeMode &&
          s.freeMode.onTouchMove(),
        s.updateProgress(n.currentTranslate),
        s.setTranslate(n.currentTranslate));
    }
    function z(e) {
      const t = this,
        s = t.touchEventsData,
        {
          params: n,
          touches: i,
          rtlTranslate: r,
          slidesGrid: o,
          enabled: a,
        } = t;
      if (!a) return;
      let l = e;
      if (
        (l.originalEvent && (l = l.originalEvent),
        s.allowTouchCallbacks && t.emit("touchEnd", l),
        (s.allowTouchCallbacks = !1),
        !s.isTouched)
      )
        return (
          s.isMoved && n.grabCursor && t.setGrabCursor(!1),
          (s.isMoved = !1),
          void (s.startMoving = !1)
        );
      n.grabCursor &&
        s.isMoved &&
        s.isTouched &&
        (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
        t.setGrabCursor(!1);
      const c = w(),
        d = c - s.touchStartTime;
      if (t.allowClick) {
        const e = l.path || (l.composedPath && l.composedPath());
        t.updateClickedSlide((e && e[0]) || l.target),
          t.emit("tap click", l),
          d < 300 &&
            c - s.lastClickTime < 300 &&
            t.emit("doubleTap doubleClick", l);
      }
      if (
        ((s.lastClickTime = w()),
        b(() => {
          t.destroyed || (t.allowClick = !0);
        }),
        !s.isTouched ||
          !s.isMoved ||
          !t.swipeDirection ||
          0 === i.diff ||
          s.currentTranslate === s.startTranslate)
      )
        return (s.isTouched = !1), (s.isMoved = !1), void (s.startMoving = !1);
      let u;
      if (
        ((s.isTouched = !1),
        (s.isMoved = !1),
        (s.startMoving = !1),
        (u = n.followFinger
          ? r
            ? t.translate
            : -t.translate
          : -s.currentTranslate),
        n.cssMode)
      )
        return;
      if (t.params.freeMode && n.freeMode.enabled)
        return void t.freeMode.onTouchEnd({ currentPos: u });
      let p = 0,
        h = t.slidesSizesGrid[0];
      for (
        let e = 0;
        e < o.length;
        e += e < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup
      ) {
        const t = e < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
        void 0 !== o[e + t]
          ? u >= o[e] && u < o[e + t] && ((p = e), (h = o[e + t] - o[e]))
          : u >= o[e] && ((p = e), (h = o[o.length - 1] - o[o.length - 2]));
      }
      const m = (u - o[p]) / h,
        f = p < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
      if (d > n.longSwipesMs) {
        if (!n.longSwipes) return void t.slideTo(t.activeIndex);
        "next" === t.swipeDirection &&
          (m >= n.longSwipesRatio ? t.slideTo(p + f) : t.slideTo(p)),
          "prev" === t.swipeDirection &&
            (m > 1 - n.longSwipesRatio ? t.slideTo(p + f) : t.slideTo(p));
      } else {
        if (!n.shortSwipes) return void t.slideTo(t.activeIndex);
        !t.navigation ||
        (l.target !== t.navigation.nextEl && l.target !== t.navigation.prevEl)
          ? ("next" === t.swipeDirection && t.slideTo(p + f),
            "prev" === t.swipeDirection && t.slideTo(p))
          : l.target === t.navigation.nextEl
          ? t.slideTo(p + f)
          : t.slideTo(p);
      }
    }
    function N() {
      const e = this,
        { params: t, el: s } = e;
      if (s && 0 === s.offsetWidth) return;
      t.breakpoints && e.setBreakpoint();
      const { allowSlideNext: n, allowSlidePrev: i, snapGrid: r } = e;
      (e.allowSlideNext = !0),
        (e.allowSlidePrev = !0),
        e.updateSize(),
        e.updateSlides(),
        e.updateSlidesClasses(),
        ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
        e.isEnd &&
        !e.isBeginning &&
        !e.params.centeredSlides
          ? e.slideTo(e.slides.length - 1, 0, !1, !0)
          : e.slideTo(e.activeIndex, 0, !1, !0),
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          e.autoplay.run(),
        (e.allowSlidePrev = i),
        (e.allowSlideNext = n),
        e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
    }
    function F(e) {
      const t = this;
      t.enabled &&
        (t.allowClick ||
          (t.params.preventClicks && e.preventDefault(),
          t.params.preventClicksPropagation &&
            t.animating &&
            (e.stopPropagation(), e.stopImmediatePropagation())));
    }
    function D() {
      const e = this,
        { wrapperEl: t, rtlTranslate: s, enabled: n } = e;
      if (!n) return;
      let i;
      (e.previousTranslate = e.translate),
        e.isHorizontal()
          ? (e.translate = -t.scrollLeft)
          : (e.translate = -t.scrollTop),
        -0 === e.translate && (e.translate = 0),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
      const r = e.maxTranslate() - e.minTranslate();
      (i = 0 === r ? 0 : (e.translate - e.minTranslate()) / r),
        i !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
        e.emit("setTranslate", e.translate, !1);
    }
    let B = !1;
    function H() {}
    const W = (e, t) => {
        const s = a(),
          {
            params: n,
            touchEvents: i,
            el: r,
            wrapperEl: o,
            device: l,
            support: c,
          } = e,
          d = !!n.nested,
          u = "on" === t ? "addEventListener" : "removeEventListener",
          p = t;
        if (c.touch) {
          const t = !(
            "touchstart" !== i.start ||
            !c.passiveListener ||
            !n.passiveListeners
          ) && { passive: !0, capture: !1 };
          r[u](i.start, e.onTouchStart, t),
            r[u](
              i.move,
              e.onTouchMove,
              c.passiveListener ? { passive: !1, capture: d } : d
            ),
            r[u](i.end, e.onTouchEnd, t),
            i.cancel && r[u](i.cancel, e.onTouchEnd, t);
        } else
          r[u](i.start, e.onTouchStart, !1),
            s[u](i.move, e.onTouchMove, d),
            s[u](i.end, e.onTouchEnd, !1);
        (n.preventClicks || n.preventClicksPropagation) &&
          r[u]("click", e.onClick, !0),
          n.cssMode && o[u]("scroll", e.onScroll),
          n.updateOnWindowResize
            ? e[p](
                l.ios || l.android
                  ? "resize orientationchange observerUpdate"
                  : "resize observerUpdate",
                N,
                !0
              )
            : e[p]("observerUpdate", N, !0);
      },
      q = {
        attachEvents: function () {
          const e = this,
            t = a(),
            { params: s, support: n } = e;
          (e.onTouchStart = _.bind(e)),
            (e.onTouchMove = I.bind(e)),
            (e.onTouchEnd = z.bind(e)),
            s.cssMode && (e.onScroll = D.bind(e)),
            (e.onClick = F.bind(e)),
            n.touch && !B && (t.addEventListener("touchstart", H), (B = !0)),
            W(e, "on");
        },
        detachEvents: function () {
          W(this, "off");
        },
      },
      G = (e, t) => e.grid && t.grid && t.grid.rows > 1,
      j = {
        addClasses: function () {
          const e = this,
            {
              classNames: t,
              params: s,
              rtl: n,
              $el: i,
              device: r,
              support: o,
            } = e,
            a = (function (e, t) {
              const s = [];
              return (
                e.forEach((e) => {
                  "object" == typeof e
                    ? Object.keys(e).forEach((n) => {
                        e[n] && s.push(t + n);
                      })
                    : "string" == typeof e && s.push(t + e);
                }),
                s
              );
            })(
              [
                "initialized",
                s.direction,
                { "pointer-events": !o.touch },
                { "free-mode": e.params.freeMode && s.freeMode.enabled },
                { autoheight: s.autoHeight },
                { rtl: n },
                { grid: s.grid && s.grid.rows > 1 },
                {
                  "grid-column":
                    s.grid && s.grid.rows > 1 && "column" === s.grid.fill,
                },
                { android: r.android },
                { ios: r.ios },
                { "css-mode": s.cssMode },
                { centered: s.cssMode && s.centeredSlides },
              ],
              s.containerModifierClass
            );
          t.push(...a), i.addClass([...t].join(" ")), e.emitContainerClasses();
        },
        removeClasses: function () {
          const { $el: e, classNames: t } = this;
          e.removeClass(t.join(" ")), this.emitContainerClasses();
        },
      },
      R = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements:
          "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        loopPreventsSlide: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0,
        _emitClasses: !1,
      };
    function V(e, t) {
      return function (s = {}) {
        const n = Object.keys(s)[0],
          i = s[n];
        "object" == typeof i && null !== i
          ? (["navigation", "pagination", "scrollbar"].indexOf(n) >= 0 &&
              !0 === e[n] &&
              (e[n] = { auto: !0 }),
            n in e && "enabled" in i
              ? (!0 === e[n] && (e[n] = { enabled: !0 }),
                "object" != typeof e[n] ||
                  "enabled" in e[n] ||
                  (e[n].enabled = !0),
                e[n] || (e[n] = { enabled: !1 }),
                y(t, s))
              : y(t, s))
          : y(t, s);
      };
    }
    const X = {
        eventsEmitter: M,
        update: A,
        translate: {
          getTranslate: function (e = this.isHorizontal() ? "x" : "y") {
            const {
              params: t,
              rtlTranslate: s,
              translate: n,
              $wrapperEl: i,
            } = this;
            if (t.virtualTranslate) return s ? -n : n;
            if (t.cssMode) return n;
            let r = (function (e, t = "x") {
              const s = c();
              let n, i, r;
              const o = (function (e) {
                const t = c();
                let s;
                return (
                  t.getComputedStyle && (s = t.getComputedStyle(e, null)),
                  !s && e.currentStyle && (s = e.currentStyle),
                  s || (s = e.style),
                  s
                );
              })(e);
              return (
                s.WebKitCSSMatrix
                  ? ((i = o.transform || o.webkitTransform),
                    i.split(",").length > 6 &&
                      (i = i
                        .split(", ")
                        .map((e) => e.replace(",", "."))
                        .join(", ")),
                    (r = new s.WebKitCSSMatrix("none" === i ? "" : i)))
                  : ((r =
                      o.MozTransform ||
                      o.OTransform ||
                      o.MsTransform ||
                      o.msTransform ||
                      o.transform ||
                      o
                        .getPropertyValue("transform")
                        .replace("translate(", "matrix(1, 0, 0, 1,")),
                    (n = r.toString().split(","))),
                "x" === t &&
                  (i = s.WebKitCSSMatrix
                    ? r.m41
                    : 16 === n.length
                    ? parseFloat(n[12])
                    : parseFloat(n[4])),
                "y" === t &&
                  (i = s.WebKitCSSMatrix
                    ? r.m42
                    : 16 === n.length
                    ? parseFloat(n[13])
                    : parseFloat(n[5])),
                i || 0
              );
            })(i[0], e);
            return s && (r = -r), r || 0;
          },
          setTranslate: function (e, t) {
            const s = this,
              {
                rtlTranslate: n,
                params: i,
                $wrapperEl: r,
                wrapperEl: o,
                progress: a,
              } = s;
            let l,
              c = 0,
              d = 0;
            s.isHorizontal() ? (c = n ? -e : e) : (d = e),
              i.roundLengths && ((c = Math.floor(c)), (d = Math.floor(d))),
              i.cssMode
                ? (o[s.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                    s.isHorizontal() ? -c : -d)
                : i.virtualTranslate ||
                  r.transform(`translate3d(${c}px, ${d}px, 0px)`),
              (s.previousTranslate = s.translate),
              (s.translate = s.isHorizontal() ? c : d);
            const u = s.maxTranslate() - s.minTranslate();
            (l = 0 === u ? 0 : (e - s.minTranslate()) / u),
              l !== a && s.updateProgress(e),
              s.emit("setTranslate", s.translate, t);
          },
          minTranslate: function () {
            return -this.snapGrid[0];
          },
          maxTranslate: function () {
            return -this.snapGrid[this.snapGrid.length - 1];
          },
          translateTo: function (
            e = 0,
            t = this.params.speed,
            s = !0,
            n = !0,
            i
          ) {
            const r = this,
              { params: o, wrapperEl: a } = r;
            if (r.animating && o.preventInteractionOnTransition) return !1;
            const l = r.minTranslate(),
              c = r.maxTranslate();
            let d;
            if (
              ((d = n && e > l ? l : n && e < c ? c : e),
              r.updateProgress(d),
              o.cssMode)
            ) {
              const e = r.isHorizontal();
              if (0 === t) a[e ? "scrollLeft" : "scrollTop"] = -d;
              else {
                if (!r.support.smoothScroll)
                  return (
                    C({
                      swiper: r,
                      targetPosition: -d,
                      side: e ? "left" : "top",
                    }),
                    !0
                  );
                a.scrollTo({ [e ? "left" : "top"]: -d, behavior: "smooth" });
              }
              return !0;
            }
            return (
              0 === t
                ? (r.setTransition(0),
                  r.setTranslate(d),
                  s &&
                    (r.emit("beforeTransitionStart", t, i),
                    r.emit("transitionEnd")))
                : (r.setTransition(t),
                  r.setTranslate(d),
                  s &&
                    (r.emit("beforeTransitionStart", t, i),
                    r.emit("transitionStart")),
                  r.animating ||
                    ((r.animating = !0),
                    r.onTranslateToWrapperTransitionEnd ||
                      (r.onTranslateToWrapperTransitionEnd = function (e) {
                        r &&
                          !r.destroyed &&
                          e.target === this &&
                          (r.$wrapperEl[0].removeEventListener(
                            "transitionend",
                            r.onTranslateToWrapperTransitionEnd
                          ),
                          r.$wrapperEl[0].removeEventListener(
                            "webkitTransitionEnd",
                            r.onTranslateToWrapperTransitionEnd
                          ),
                          (r.onTranslateToWrapperTransitionEnd = null),
                          delete r.onTranslateToWrapperTransitionEnd,
                          s && r.emit("transitionEnd"));
                      }),
                    r.$wrapperEl[0].addEventListener(
                      "transitionend",
                      r.onTranslateToWrapperTransitionEnd
                    ),
                    r.$wrapperEl[0].addEventListener(
                      "webkitTransitionEnd",
                      r.onTranslateToWrapperTransitionEnd
                    ))),
              !0
            );
          },
        },
        transition: {
          setTransition: function (e, t) {
            const s = this;
            s.params.cssMode || s.$wrapperEl.transition(e),
              s.emit("setTransition", e, t);
          },
          transitionStart: function (e = !0, t) {
            const s = this,
              { params: n } = s;
            n.cssMode ||
              (n.autoHeight && s.updateAutoHeight(),
              P({ swiper: s, runCallbacks: e, direction: t, step: "Start" }));
          },
          transitionEnd: function (e = !0, t) {
            const s = this,
              { params: n } = s;
            (s.animating = !1),
              n.cssMode ||
                (s.setTransition(0),
                P({ swiper: s, runCallbacks: e, direction: t, step: "End" }));
          },
        },
        slide: $,
        loop: O,
        grabCursor: {
          setGrabCursor: function (e) {
            const t = this;
            if (
              t.support.touch ||
              !t.params.simulateTouch ||
              (t.params.watchOverflow && t.isLocked) ||
              t.params.cssMode
            )
              return;
            const s =
              "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
            (s.style.cursor = "move"),
              (s.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"),
              (s.style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
              (s.style.cursor = e ? "grabbing" : "grab");
          },
          unsetGrabCursor: function () {
            const e = this;
            e.support.touch ||
              (e.params.watchOverflow && e.isLocked) ||
              e.params.cssMode ||
              (e[
                "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
              ].style.cursor = "");
          },
        },
        events: q,
        breakpoints: {
          setBreakpoint: function () {
            const e = this,
              {
                activeIndex: t,
                initialized: s,
                loopedSlides: n = 0,
                params: i,
                $el: r,
              } = e,
              o = i.breakpoints;
            if (!o || (o && 0 === Object.keys(o).length)) return;
            const a = e.getBreakpoint(o, e.params.breakpointsBase, e.el);
            if (!a || e.currentBreakpoint === a) return;
            const l = (a in o ? o[a] : void 0) || e.originalParams,
              c = G(e, i),
              d = G(e, l),
              u = i.enabled;
            c && !d
              ? (r.removeClass(
                  `${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`
                ),
                e.emitContainerClasses())
              : !c &&
                d &&
                (r.addClass(`${i.containerModifierClass}grid`),
                ((l.grid.fill && "column" === l.grid.fill) ||
                  (!l.grid.fill && "column" === i.grid.fill)) &&
                  r.addClass(`${i.containerModifierClass}grid-column`),
                e.emitContainerClasses());
            const p = l.direction && l.direction !== i.direction,
              h = i.loop && (l.slidesPerView !== i.slidesPerView || p);
            p && s && e.changeDirection(), y(e.params, l);
            const m = e.params.enabled;
            Object.assign(e, {
              allowTouchMove: e.params.allowTouchMove,
              allowSlideNext: e.params.allowSlideNext,
              allowSlidePrev: e.params.allowSlidePrev,
            }),
              u && !m ? e.disable() : !u && m && e.enable(),
              (e.currentBreakpoint = a),
              e.emit("_beforeBreakpoint", l),
              h &&
                s &&
                (e.loopDestroy(),
                e.loopCreate(),
                e.updateSlides(),
                e.slideTo(t - n + e.loopedSlides, 0, !1)),
              e.emit("breakpoint", l);
          },
          getBreakpoint: function (e, t = "window", s) {
            if (!e || ("container" === t && !s)) return;
            let n = !1;
            const i = c(),
              r = "window" === t ? i.innerHeight : s.clientHeight,
              o = Object.keys(e).map((e) => {
                if ("string" == typeof e && 0 === e.indexOf("@")) {
                  const t = parseFloat(e.substr(1));
                  return { value: r * t, point: e };
                }
                return { value: e, point: e };
              });
            o.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
            for (let e = 0; e < o.length; e += 1) {
              const { point: r, value: a } = o[e];
              "window" === t
                ? i.matchMedia(`(min-width: ${a}px)`).matches && (n = r)
                : a <= s.clientWidth && (n = r);
            }
            return n || "max";
          },
        },
        checkOverflow: {
          checkOverflow: function () {
            const e = this,
              { isLocked: t, params: s } = e,
              { slidesOffsetBefore: n } = s;
            if (n) {
              const t = e.slides.length - 1,
                s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * n;
              e.isLocked = e.size > s;
            } else e.isLocked = 1 === e.snapGrid.length;
            !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
              !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
              t && t !== e.isLocked && (e.isEnd = !1),
              t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
          },
        },
        classes: j,
        images: {
          loadImage: function (e, t, s, n, i, r) {
            const o = c();
            let a;
            function l() {
              r && r();
            }
            v(e).parent("picture")[0] || (e.complete && i)
              ? l()
              : t
              ? ((a = new o.Image()),
                (a.onload = l),
                (a.onerror = l),
                n && (a.sizes = n),
                s && (a.srcset = s),
                t && (a.src = t))
              : l();
          },
          preloadImages: function () {
            const e = this;
            function t() {
              null != e &&
                e &&
                !e.destroyed &&
                (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                e.imagesLoaded === e.imagesToLoad.length &&
                  (e.params.updateOnImagesReady && e.update(),
                  e.emit("imagesReady")));
            }
            e.imagesToLoad = e.$el.find("img");
            for (let s = 0; s < e.imagesToLoad.length; s += 1) {
              const n = e.imagesToLoad[s];
              e.loadImage(
                n,
                n.currentSrc || n.getAttribute("src"),
                n.srcset || n.getAttribute("srcset"),
                n.sizes || n.getAttribute("sizes"),
                !0,
                t
              );
            }
          },
        },
      },
      Y = {};
    class U {
      constructor(...e) {
        let t, s;
        if (
          (1 === e.length &&
          e[0].constructor &&
          "Object" === Object.prototype.toString.call(e[0]).slice(8, -1)
            ? (s = e[0])
            : ([t, s] = e),
          s || (s = {}),
          (s = y({}, s)),
          t && !s.el && (s.el = t),
          s.el && v(s.el).length > 1)
        ) {
          const e = [];
          return (
            v(s.el).each((t) => {
              const n = y({}, s, { el: t });
              e.push(new U(n));
            }),
            e
          );
        }
        const n = this;
        (n.__swiper__ = !0),
          (n.support = k()),
          (n.device = (function (e = {}) {
            return (
              T ||
                (T = (function ({ userAgent: e } = {}) {
                  const t = k(),
                    s = c(),
                    n = s.navigator.platform,
                    i = e || s.navigator.userAgent,
                    r = { ios: !1, android: !1 },
                    o = s.screen.width,
                    a = s.screen.height,
                    l = i.match(/(Android);?[\s\/]+([\d.]+)?/);
                  let d = i.match(/(iPad).*OS\s([\d_]+)/);
                  const u = i.match(/(iPod)(.*OS\s([\d_]+))?/),
                    p = !d && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                    h = "Win32" === n;
                  let m = "MacIntel" === n;
                  return (
                    !d &&
                      m &&
                      t.touch &&
                      [
                        "1024x1366",
                        "1366x1024",
                        "834x1194",
                        "1194x834",
                        "834x1112",
                        "1112x834",
                        "768x1024",
                        "1024x768",
                        "820x1180",
                        "1180x820",
                        "810x1080",
                        "1080x810",
                      ].indexOf(`${o}x${a}`) >= 0 &&
                      ((d = i.match(/(Version)\/([\d.]+)/)),
                      d || (d = [0, 1, "13_0_0"]),
                      (m = !1)),
                    l && !h && ((r.os = "android"), (r.android = !0)),
                    (d || p || u) && ((r.os = "ios"), (r.ios = !0)),
                    r
                  );
                })(e)),
              T
            );
          })({ userAgent: s.userAgent })),
          (n.browser =
            (L ||
              (L = (function () {
                const e = c();
                return {
                  isSafari: (function () {
                    const t = e.navigator.userAgent.toLowerCase();
                    return (
                      t.indexOf("safari") >= 0 &&
                      t.indexOf("chrome") < 0 &&
                      t.indexOf("android") < 0
                    );
                  })(),
                  isWebView:
                    /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                      e.navigator.userAgent
                    ),
                };
              })()),
            L)),
          (n.eventsListeners = {}),
          (n.eventsAnyListeners = []),
          (n.modules = [...n.__modules__]),
          s.modules && Array.isArray(s.modules) && n.modules.push(...s.modules);
        const i = {};
        n.modules.forEach((e) => {
          e({
            swiper: n,
            extendParams: V(s, i),
            on: n.on.bind(n),
            once: n.once.bind(n),
            off: n.off.bind(n),
            emit: n.emit.bind(n),
          });
        });
        const r = y({}, R, i);
        return (
          (n.params = y({}, r, Y, s)),
          (n.originalParams = y({}, n.params)),
          (n.passedParams = y({}, s)),
          n.params &&
            n.params.on &&
            Object.keys(n.params.on).forEach((e) => {
              n.on(e, n.params.on[e]);
            }),
          n.params && n.params.onAny && n.onAny(n.params.onAny),
          (n.$ = v),
          Object.assign(n, {
            enabled: n.params.enabled,
            el: t,
            classNames: [],
            slides: v(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: () => "horizontal" === n.params.direction,
            isVertical: () => "vertical" === n.params.direction,
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            allowSlideNext: n.params.allowSlideNext,
            allowSlidePrev: n.params.allowSlidePrev,
            touchEvents: (function () {
              const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
                t = ["pointerdown", "pointermove", "pointerup"];
              return (
                (n.touchEventsTouch = {
                  start: e[0],
                  move: e[1],
                  end: e[2],
                  cancel: e[3],
                }),
                (n.touchEventsDesktop = { start: t[0], move: t[1], end: t[2] }),
                n.support.touch || !n.params.simulateTouch
                  ? n.touchEventsTouch
                  : n.touchEventsDesktop
              );
            })(),
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              focusableElements: n.params.focusableElements,
              lastClickTime: w(),
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              isTouchEvent: void 0,
              startMoving: void 0,
            },
            allowClick: !0,
            allowTouchMove: n.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0,
            },
            imagesToLoad: [],
            imagesLoaded: 0,
          }),
          n.emit("_swiper"),
          n.params.init && n.init(),
          n
        );
      }
      enable() {
        const e = this;
        e.enabled ||
          ((e.enabled = !0),
          e.params.grabCursor && e.setGrabCursor(),
          e.emit("enable"));
      }
      disable() {
        const e = this;
        e.enabled &&
          ((e.enabled = !1),
          e.params.grabCursor && e.unsetGrabCursor(),
          e.emit("disable"));
      }
      setProgress(e, t) {
        const s = this;
        e = Math.min(Math.max(e, 0), 1);
        const n = s.minTranslate(),
          i = (s.maxTranslate() - n) * e + n;
        s.translateTo(i, void 0 === t ? 0 : t),
          s.updateActiveIndex(),
          s.updateSlidesClasses();
      }
      emitContainerClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = e.el.className
          .split(" ")
          .filter(
            (t) =>
              0 === t.indexOf("swiper") ||
              0 === t.indexOf(e.params.containerModifierClass)
          );
        e.emit("_containerClasses", t.join(" "));
      }
      getSlideClasses(e) {
        const t = this;
        return e.className
          .split(" ")
          .filter(
            (e) =>
              0 === e.indexOf("swiper-slide") ||
              0 === e.indexOf(t.params.slideClass)
          )
          .join(" ");
      }
      emitSlidesClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = [];
        e.slides.each((s) => {
          const n = e.getSlideClasses(s);
          t.push({ slideEl: s, classNames: n }), e.emit("_slideClass", s, n);
        }),
          e.emit("_slideClasses", t);
      }
      slidesPerViewDynamic(e = "current", t = !1) {
        const {
          params: s,
          slides: n,
          slidesGrid: i,
          slidesSizesGrid: r,
          size: o,
          activeIndex: a,
        } = this;
        let l = 1;
        if (s.centeredSlides) {
          let e,
            t = n[a].swiperSlideSize;
          for (let s = a + 1; s < n.length; s += 1)
            n[s] &&
              !e &&
              ((t += n[s].swiperSlideSize), (l += 1), t > o && (e = !0));
          for (let s = a - 1; s >= 0; s -= 1)
            n[s] &&
              !e &&
              ((t += n[s].swiperSlideSize), (l += 1), t > o && (e = !0));
        } else if ("current" === e)
          for (let e = a + 1; e < n.length; e += 1)
            (t ? i[e] + r[e] - i[a] < o : i[e] - i[a] < o) && (l += 1);
        else for (let e = a - 1; e >= 0; e -= 1) i[a] - i[e] < o && (l += 1);
        return l;
      }
      update() {
        const e = this;
        if (!e || e.destroyed) return;
        const { snapGrid: t, params: s } = e;
        function n() {
          const t = e.rtlTranslate ? -1 * e.translate : e.translate,
            s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
          e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
        }
        let i;
        s.breakpoints && e.setBreakpoint(),
          e.updateSize(),
          e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          e.params.freeMode && e.params.freeMode.enabled
            ? (n(), e.params.autoHeight && e.updateAutoHeight())
            : ((i =
                ("auto" === e.params.slidesPerView ||
                  e.params.slidesPerView > 1) &&
                e.isEnd &&
                !e.params.centeredSlides
                  ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                  : e.slideTo(e.activeIndex, 0, !1, !0)),
              i || n()),
          s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
          e.emit("update");
      }
      changeDirection(e, t = !0) {
        const s = this,
          n = s.params.direction;
        return (
          e || (e = "horizontal" === n ? "vertical" : "horizontal"),
          e === n ||
            ("horizontal" !== e && "vertical" !== e) ||
            (s.$el
              .removeClass(`${s.params.containerModifierClass}${n}`)
              .addClass(`${s.params.containerModifierClass}${e}`),
            s.emitContainerClasses(),
            (s.params.direction = e),
            s.slides.each((t) => {
              "vertical" === e ? (t.style.width = "") : (t.style.height = "");
            }),
            s.emit("changeDirection"),
            t && s.update()),
          s
        );
      }
      mount(e) {
        const t = this;
        if (t.mounted) return !0;
        const s = v(e || t.params.el);
        if (!(e = s[0])) return !1;
        e.swiper = t;
        const n = () =>
          `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let i = (() => {
          if (e && e.shadowRoot && e.shadowRoot.querySelector) {
            const t = v(e.shadowRoot.querySelector(n()));
            return (t.children = (e) => s.children(e)), t;
          }
          return s.children(n());
        })();
        if (0 === i.length && t.params.createElements) {
          const e = a().createElement("div");
          (i = v(e)),
            (e.className = t.params.wrapperClass),
            s.append(e),
            s.children(`.${t.params.slideClass}`).each((e) => {
              i.append(e);
            });
        }
        return (
          Object.assign(t, {
            $el: s,
            el: e,
            $wrapperEl: i,
            wrapperEl: i[0],
            mounted: !0,
            rtl: "rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction"),
            rtlTranslate:
              "horizontal" === t.params.direction &&
              ("rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction")),
            wrongRTL: "-webkit-box" === i.css("display"),
          }),
          !0
        );
      }
      init(e) {
        const t = this;
        return (
          t.initialized ||
            !1 === t.mount(e) ||
            (t.emit("beforeInit"),
            t.params.breakpoints && t.setBreakpoint(),
            t.addClasses(),
            t.params.loop && t.loopCreate(),
            t.updateSize(),
            t.updateSlides(),
            t.params.watchOverflow && t.checkOverflow(),
            t.params.grabCursor && t.enabled && t.setGrabCursor(),
            t.params.preloadImages && t.preloadImages(),
            t.params.loop
              ? t.slideTo(
                  t.params.initialSlide + t.loopedSlides,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                )
              : t.slideTo(
                  t.params.initialSlide,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                ),
            t.attachEvents(),
            (t.initialized = !0),
            t.emit("init"),
            t.emit("afterInit")),
          t
        );
      }
      destroy(e = !0, t = !0) {
        const s = this,
          { params: n, $el: i, $wrapperEl: r, slides: o } = s;
        return (
          void 0 === s.params ||
            s.destroyed ||
            (s.emit("beforeDestroy"),
            (s.initialized = !1),
            s.detachEvents(),
            n.loop && s.loopDestroy(),
            t &&
              (s.removeClasses(),
              i.removeAttr("style"),
              r.removeAttr("style"),
              o &&
                o.length &&
                o
                  .removeClass(
                    [
                      n.slideVisibleClass,
                      n.slideActiveClass,
                      n.slideNextClass,
                      n.slidePrevClass,
                    ].join(" ")
                  )
                  .removeAttr("style")
                  .removeAttr("data-swiper-slide-index")),
            s.emit("destroy"),
            Object.keys(s.eventsListeners).forEach((e) => {
              s.off(e);
            }),
            !1 !== e &&
              ((s.$el[0].swiper = null),
              (function (e) {
                const t = e;
                Object.keys(t).forEach((e) => {
                  try {
                    t[e] = null;
                  } catch (e) {}
                  try {
                    delete t[e];
                  } catch (e) {}
                });
              })(s)),
            (s.destroyed = !0)),
          null
        );
      }
      static extendDefaults(e) {
        y(Y, e);
      }
      static get extendedDefaults() {
        return Y;
      }
      static get defaults() {
        return R;
      }
      static installModule(e) {
        U.prototype.__modules__ || (U.prototype.__modules__ = []);
        const t = U.prototype.__modules__;
        "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
      }
      static use(e) {
        return Array.isArray(e)
          ? (e.forEach((e) => U.installModule(e)), U)
          : (U.installModule(e), U);
      }
    }
    Object.keys(X).forEach((e) => {
      Object.keys(X[e]).forEach((t) => {
        U.prototype[t] = X[e][t];
      });
    }),
      U.use([
        function ({ swiper: e, on: t, emit: s }) {
          const n = c();
          let i = null;
          const r = () => {
              e &&
                !e.destroyed &&
                e.initialized &&
                (s("beforeResize"), s("resize"));
            },
            o = () => {
              e && !e.destroyed && e.initialized && s("orientationchange");
            };
          t("init", () => {
            e.params.resizeObserver && void 0 !== n.ResizeObserver
              ? e &&
                !e.destroyed &&
                e.initialized &&
                ((i = new ResizeObserver((t) => {
                  const { width: s, height: n } = e;
                  let i = s,
                    o = n;
                  t.forEach(
                    ({ contentBoxSize: t, contentRect: s, target: n }) => {
                      (n && n !== e.el) ||
                        ((i = s ? s.width : (t[0] || t).inlineSize),
                        (o = s ? s.height : (t[0] || t).blockSize));
                    }
                  ),
                    (i === s && o === n) || r();
                })),
                i.observe(e.el))
              : (n.addEventListener("resize", r),
                n.addEventListener("orientationchange", o));
          }),
            t("destroy", () => {
              i && i.unobserve && e.el && (i.unobserve(e.el), (i = null)),
                n.removeEventListener("resize", r),
                n.removeEventListener("orientationchange", o);
            });
        },
        function ({ swiper: e, extendParams: t, on: s, emit: n }) {
          const i = [],
            r = c(),
            o = (e, t = {}) => {
              const s = new (r.MutationObserver || r.WebkitMutationObserver)(
                (e) => {
                  if (1 === e.length) return void n("observerUpdate", e[0]);
                  const t = function () {
                    n("observerUpdate", e[0]);
                  };
                  r.requestAnimationFrame
                    ? r.requestAnimationFrame(t)
                    : r.setTimeout(t, 0);
                }
              );
              s.observe(e, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData,
              }),
                i.push(s);
            };
          t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
            s("init", () => {
              if (e.params.observer) {
                if (e.params.observeParents) {
                  const t = e.$el.parents();
                  for (let e = 0; e < t.length; e += 1) o(t[e]);
                }
                o(e.$el[0], { childList: e.params.observeSlideChildren }),
                  o(e.$wrapperEl[0], { attributes: !1 });
              }
            }),
            s("destroy", () => {
              i.forEach((e) => {
                e.disconnect();
              }),
                i.splice(0, i.length);
            });
        },
      ]);
    const K = U;
    function J(e, t, s, n) {
      const i = a();
      return (
        e.params.createElements &&
          Object.keys(n).forEach((r) => {
            if (!s[r] && !0 === s.auto) {
              let o = e.$el.children(`.${n[r]}`)[0];
              o ||
                ((o = i.createElement("div")),
                (o.className = n[r]),
                e.$el.append(o)),
                (s[r] = o),
                (t[r] = o);
            }
          }),
        s
      );
    }
    function Q(e = "") {
      return `.${e
        .trim()
        .replace(/([\.:!\/])/g, "\\$1")
        .replace(/ /g, ".")}`;
    }
    K.use([
      function ({ swiper: e, extendParams: t, on: s, emit: n }) {
        function i(t) {
          let s;
          return (
            t &&
              ((s = v(t)),
              e.params.uniqueNavElements &&
                "string" == typeof t &&
                s.length > 1 &&
                1 === e.$el.find(t).length &&
                (s = e.$el.find(t))),
            s
          );
        }
        function r(t, s) {
          const n = e.params.navigation;
          t &&
            t.length > 0 &&
            (t[s ? "addClass" : "removeClass"](n.disabledClass),
            t[0] && "BUTTON" === t[0].tagName && (t[0].disabled = s),
            e.params.watchOverflow &&
              e.enabled &&
              t[e.isLocked ? "addClass" : "removeClass"](n.lockClass));
        }
        function o() {
          if (e.params.loop) return;
          const { $nextEl: t, $prevEl: s } = e.navigation;
          r(s, e.isBeginning && !e.params.rewind),
            r(t, e.isEnd && !e.params.rewind);
        }
        function a(t) {
          t.preventDefault(),
            (!e.isBeginning || e.params.loop || e.params.rewind) &&
              e.slidePrev();
        }
        function l(t) {
          t.preventDefault(),
            (!e.isEnd || e.params.loop || e.params.rewind) && e.slideNext();
        }
        function c() {
          const t = e.params.navigation;
          if (
            ((e.params.navigation = J(
              e,
              e.originalParams.navigation,
              e.params.navigation,
              { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
            )),
            !t.nextEl && !t.prevEl)
          )
            return;
          const s = i(t.nextEl),
            n = i(t.prevEl);
          s && s.length > 0 && s.on("click", l),
            n && n.length > 0 && n.on("click", a),
            Object.assign(e.navigation, {
              $nextEl: s,
              nextEl: s && s[0],
              $prevEl: n,
              prevEl: n && n[0],
            }),
            e.enabled ||
              (s && s.addClass(t.lockClass), n && n.addClass(t.lockClass));
        }
        function d() {
          const { $nextEl: t, $prevEl: s } = e.navigation;
          t &&
            t.length &&
            (t.off("click", l),
            t.removeClass(e.params.navigation.disabledClass)),
            s &&
              s.length &&
              (s.off("click", a),
              s.removeClass(e.params.navigation.disabledClass));
        }
        t({
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
          },
        }),
          (e.navigation = {
            nextEl: null,
            $nextEl: null,
            prevEl: null,
            $prevEl: null,
          }),
          s("init", () => {
            c(), o();
          }),
          s("toEdge fromEdge lock unlock", () => {
            o();
          }),
          s("destroy", () => {
            d();
          }),
          s("enable disable", () => {
            const { $nextEl: t, $prevEl: s } = e.navigation;
            t &&
              t[e.enabled ? "removeClass" : "addClass"](
                e.params.navigation.lockClass
              ),
              s &&
                s[e.enabled ? "removeClass" : "addClass"](
                  e.params.navigation.lockClass
                );
          }),
          s("click", (t, s) => {
            const { $nextEl: i, $prevEl: r } = e.navigation,
              o = s.target;
            if (e.params.navigation.hideOnClick && !v(o).is(r) && !v(o).is(i)) {
              if (
                e.pagination &&
                e.params.pagination &&
                e.params.pagination.clickable &&
                (e.pagination.el === o || e.pagination.el.contains(o))
              )
                return;
              let t;
              i
                ? (t = i.hasClass(e.params.navigation.hiddenClass))
                : r && (t = r.hasClass(e.params.navigation.hiddenClass)),
                n(!0 === t ? "navigationShow" : "navigationHide"),
                i && i.toggleClass(e.params.navigation.hiddenClass),
                r && r.toggleClass(e.params.navigation.hiddenClass);
            }
          }),
          Object.assign(e.navigation, { update: o, init: c, destroy: d });
      },
      function ({ swiper: e, extendParams: t, on: s, emit: n }) {
        const i = "swiper-pagination";
        let r;
        t({
          pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: (e) => e,
            formatFractionTotal: (e) => e,
            bulletClass: `${i}-bullet`,
            bulletActiveClass: `${i}-bullet-active`,
            modifierClass: `${i}-`,
            currentClass: `${i}-current`,
            totalClass: `${i}-total`,
            hiddenClass: `${i}-hidden`,
            progressbarFillClass: `${i}-progressbar-fill`,
            progressbarOppositeClass: `${i}-progressbar-opposite`,
            clickableClass: `${i}-clickable`,
            lockClass: `${i}-lock`,
            horizontalClass: `${i}-horizontal`,
            verticalClass: `${i}-vertical`,
          },
        }),
          (e.pagination = { el: null, $el: null, bullets: [] });
        let o = 0;
        function a() {
          return (
            !e.params.pagination.el ||
            !e.pagination.el ||
            !e.pagination.$el ||
            0 === e.pagination.$el.length
          );
        }
        function l(t, s) {
          const { bulletActiveClass: n } = e.params.pagination;
          t[s]().addClass(`${n}-${s}`)[s]().addClass(`${n}-${s}-${s}`);
        }
        function c() {
          const t = e.rtl,
            s = e.params.pagination;
          if (a()) return;
          const i =
              e.virtual && e.params.virtual.enabled
                ? e.virtual.slides.length
                : e.slides.length,
            c = e.pagination.$el;
          let d;
          const u = e.params.loop
            ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup)
            : e.snapGrid.length;
          if (
            (e.params.loop
              ? ((d = Math.ceil(
                  (e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup
                )),
                d > i - 1 - 2 * e.loopedSlides && (d -= i - 2 * e.loopedSlides),
                d > u - 1 && (d -= u),
                d < 0 && "bullets" !== e.params.paginationType && (d = u + d))
              : (d = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0),
            "bullets" === s.type &&
              e.pagination.bullets &&
              e.pagination.bullets.length > 0)
          ) {
            const n = e.pagination.bullets;
            let i, a, u;
            if (
              (s.dynamicBullets &&
                ((r = n
                  .eq(0)
                  [e.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                c.css(
                  e.isHorizontal() ? "width" : "height",
                  r * (s.dynamicMainBullets + 4) + "px"
                ),
                s.dynamicMainBullets > 1 &&
                  void 0 !== e.previousIndex &&
                  ((o += d - (e.previousIndex - e.loopedSlides || 0)),
                  o > s.dynamicMainBullets - 1
                    ? (o = s.dynamicMainBullets - 1)
                    : o < 0 && (o = 0)),
                (i = Math.max(d - o, 0)),
                (a = i + (Math.min(n.length, s.dynamicMainBullets) - 1)),
                (u = (a + i) / 2)),
              n.removeClass(
                ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
                  .map((e) => `${s.bulletActiveClass}${e}`)
                  .join(" ")
              ),
              c.length > 1)
            )
              n.each((e) => {
                const t = v(e),
                  n = t.index();
                n === d && t.addClass(s.bulletActiveClass),
                  s.dynamicBullets &&
                    (n >= i &&
                      n <= a &&
                      t.addClass(`${s.bulletActiveClass}-main`),
                    n === i && l(t, "prev"),
                    n === a && l(t, "next"));
              });
            else {
              const t = n.eq(d),
                r = t.index();
              if ((t.addClass(s.bulletActiveClass), s.dynamicBullets)) {
                const t = n.eq(i),
                  o = n.eq(a);
                for (let e = i; e <= a; e += 1)
                  n.eq(e).addClass(`${s.bulletActiveClass}-main`);
                if (e.params.loop)
                  if (r >= n.length) {
                    for (let e = s.dynamicMainBullets; e >= 0; e -= 1)
                      n.eq(n.length - e).addClass(
                        `${s.bulletActiveClass}-main`
                      );
                    n.eq(n.length - s.dynamicMainBullets - 1).addClass(
                      `${s.bulletActiveClass}-prev`
                    );
                  } else l(t, "prev"), l(o, "next");
                else l(t, "prev"), l(o, "next");
              }
            }
            if (s.dynamicBullets) {
              const i = Math.min(n.length, s.dynamicMainBullets + 4),
                o = (r * i - r) / 2 - u * r,
                a = t ? "right" : "left";
              n.css(e.isHorizontal() ? a : "top", `${o}px`);
            }
          }
          if (
            ("fraction" === s.type &&
              (c.find(Q(s.currentClass)).text(s.formatFractionCurrent(d + 1)),
              c.find(Q(s.totalClass)).text(s.formatFractionTotal(u))),
            "progressbar" === s.type)
          ) {
            let t;
            t = s.progressbarOpposite
              ? e.isHorizontal()
                ? "vertical"
                : "horizontal"
              : e.isHorizontal()
              ? "horizontal"
              : "vertical";
            const n = (d + 1) / u;
            let i = 1,
              r = 1;
            "horizontal" === t ? (i = n) : (r = n),
              c
                .find(Q(s.progressbarFillClass))
                .transform(`translate3d(0,0,0) scaleX(${i}) scaleY(${r})`)
                .transition(e.params.speed);
          }
          "custom" === s.type && s.renderCustom
            ? (c.html(s.renderCustom(e, d + 1, u)), n("paginationRender", c[0]))
            : n("paginationUpdate", c[0]),
            e.params.watchOverflow &&
              e.enabled &&
              c[e.isLocked ? "addClass" : "removeClass"](s.lockClass);
        }
        function d() {
          const t = e.params.pagination;
          if (a()) return;
          const s =
              e.virtual && e.params.virtual.enabled
                ? e.virtual.slides.length
                : e.slides.length,
            i = e.pagination.$el;
          let r = "";
          if ("bullets" === t.type) {
            let n = e.params.loop
              ? Math.ceil((s - 2 * e.loopedSlides) / e.params.slidesPerGroup)
              : e.snapGrid.length;
            e.params.freeMode &&
              e.params.freeMode.enabled &&
              !e.params.loop &&
              n > s &&
              (n = s);
            for (let s = 0; s < n; s += 1)
              t.renderBullet
                ? (r += t.renderBullet.call(e, s, t.bulletClass))
                : (r += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`);
            i.html(r), (e.pagination.bullets = i.find(Q(t.bulletClass)));
          }
          "fraction" === t.type &&
            ((r = t.renderFraction
              ? t.renderFraction.call(e, t.currentClass, t.totalClass)
              : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),
            i.html(r)),
            "progressbar" === t.type &&
              ((r = t.renderProgressbar
                ? t.renderProgressbar.call(e, t.progressbarFillClass)
                : `<span class="${t.progressbarFillClass}"></span>`),
              i.html(r)),
            "custom" !== t.type && n("paginationRender", e.pagination.$el[0]);
        }
        function u() {
          e.params.pagination = J(
            e,
            e.originalParams.pagination,
            e.params.pagination,
            { el: "swiper-pagination" }
          );
          const t = e.params.pagination;
          if (!t.el) return;
          let s = v(t.el);
          0 !== s.length &&
            (e.params.uniqueNavElements &&
              "string" == typeof t.el &&
              s.length > 1 &&
              ((s = e.$el.find(t.el)),
              s.length > 1 &&
                (s = s.filter((t) => v(t).parents(".swiper")[0] === e.el))),
            "bullets" === t.type && t.clickable && s.addClass(t.clickableClass),
            s.addClass(t.modifierClass + t.type),
            s.addClass(t.modifierClass + e.params.direction),
            "bullets" === t.type &&
              t.dynamicBullets &&
              (s.addClass(`${t.modifierClass}${t.type}-dynamic`),
              (o = 0),
              t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
            "progressbar" === t.type &&
              t.progressbarOpposite &&
              s.addClass(t.progressbarOppositeClass),
            t.clickable &&
              s.on("click", Q(t.bulletClass), function (t) {
                t.preventDefault();
                let s = v(this).index() * e.params.slidesPerGroup;
                e.params.loop && (s += e.loopedSlides), e.slideTo(s);
              }),
            Object.assign(e.pagination, { $el: s, el: s[0] }),
            e.enabled || s.addClass(t.lockClass));
        }
        function p() {
          const t = e.params.pagination;
          if (a()) return;
          const s = e.pagination.$el;
          s.removeClass(t.hiddenClass),
            s.removeClass(t.modifierClass + t.type),
            s.removeClass(t.modifierClass + e.params.direction),
            e.pagination.bullets &&
              e.pagination.bullets.removeClass &&
              e.pagination.bullets.removeClass(t.bulletActiveClass),
            t.clickable && s.off("click", Q(t.bulletClass));
        }
        s("init", () => {
          u(), d(), c();
        }),
          s("activeIndexChange", () => {
            (e.params.loop || void 0 === e.snapIndex) && c();
          }),
          s("snapIndexChange", () => {
            e.params.loop || c();
          }),
          s("slidesLengthChange", () => {
            e.params.loop && (d(), c());
          }),
          s("snapGridLengthChange", () => {
            e.params.loop || (d(), c());
          }),
          s("destroy", () => {
            p();
          }),
          s("enable disable", () => {
            const { $el: t } = e.pagination;
            t &&
              t[e.enabled ? "removeClass" : "addClass"](
                e.params.pagination.lockClass
              );
          }),
          s("lock unlock", () => {
            c();
          }),
          s("click", (t, s) => {
            const i = s.target,
              { $el: r } = e.pagination;
            if (
              e.params.pagination.el &&
              e.params.pagination.hideOnClick &&
              r.length > 0 &&
              !v(i).hasClass(e.params.pagination.bulletClass)
            ) {
              if (
                e.navigation &&
                ((e.navigation.nextEl && i === e.navigation.nextEl) ||
                  (e.navigation.prevEl && i === e.navigation.prevEl))
              )
                return;
              const t = r.hasClass(e.params.pagination.hiddenClass);
              n(!0 === t ? "paginationShow" : "paginationHide"),
                r.toggleClass(e.params.pagination.hiddenClass);
            }
          }),
          Object.assign(e.pagination, {
            render: d,
            update: c,
            init: u,
            destroy: p,
          });
      },
      function ({ swiper: e, extendParams: t, on: s, emit: n }) {
        const i = a();
        let r,
          o,
          l,
          c,
          d = !1,
          u = null,
          p = null;
        function h() {
          if (!e.params.scrollbar.el || !e.scrollbar.el) return;
          const { scrollbar: t, rtlTranslate: s, progress: n } = e,
            { $dragEl: i, $el: r } = t,
            a = e.params.scrollbar;
          let c = o,
            d = (l - o) * n;
          s
            ? ((d = -d),
              d > 0 ? ((c = o - d), (d = 0)) : -d + o > l && (c = l + d))
            : d < 0
            ? ((c = o + d), (d = 0))
            : d + o > l && (c = l - d),
            e.isHorizontal()
              ? (i.transform(`translate3d(${d}px, 0, 0)`),
                (i[0].style.width = `${c}px`))
              : (i.transform(`translate3d(0px, ${d}px, 0)`),
                (i[0].style.height = `${c}px`)),
            a.hide &&
              (clearTimeout(u),
              (r[0].style.opacity = 1),
              (u = setTimeout(() => {
                (r[0].style.opacity = 0), r.transition(400);
              }, 1e3)));
        }
        function m() {
          if (!e.params.scrollbar.el || !e.scrollbar.el) return;
          const { scrollbar: t } = e,
            { $dragEl: s, $el: n } = t;
          (s[0].style.width = ""),
            (s[0].style.height = ""),
            (l = e.isHorizontal() ? n[0].offsetWidth : n[0].offsetHeight),
            (c =
              e.size /
              (e.virtualSize +
                e.params.slidesOffsetBefore -
                (e.params.centeredSlides ? e.snapGrid[0] : 0))),
            (o =
              "auto" === e.params.scrollbar.dragSize
                ? l * c
                : parseInt(e.params.scrollbar.dragSize, 10)),
            e.isHorizontal()
              ? (s[0].style.width = `${o}px`)
              : (s[0].style.height = `${o}px`),
            (n[0].style.display = c >= 1 ? "none" : ""),
            e.params.scrollbar.hide && (n[0].style.opacity = 0),
            e.params.watchOverflow &&
              e.enabled &&
              t.$el[e.isLocked ? "addClass" : "removeClass"](
                e.params.scrollbar.lockClass
              );
        }
        function f(t) {
          return e.isHorizontal()
            ? "touchstart" === t.type || "touchmove" === t.type
              ? t.targetTouches[0].clientX
              : t.clientX
            : "touchstart" === t.type || "touchmove" === t.type
            ? t.targetTouches[0].clientY
            : t.clientY;
        }
        function g(t) {
          const { scrollbar: s, rtlTranslate: n } = e,
            { $el: i } = s;
          let a;
          (a =
            (f(t) -
              i.offset()[e.isHorizontal() ? "left" : "top"] -
              (null !== r ? r : o / 2)) /
            (l - o)),
            (a = Math.max(Math.min(a, 1), 0)),
            n && (a = 1 - a);
          const c =
            e.minTranslate() + (e.maxTranslate() - e.minTranslate()) * a;
          e.updateProgress(c),
            e.setTranslate(c),
            e.updateActiveIndex(),
            e.updateSlidesClasses();
        }
        function w(t) {
          const s = e.params.scrollbar,
            { scrollbar: i, $wrapperEl: o } = e,
            { $el: a, $dragEl: l } = i;
          (d = !0),
            (r =
              t.target === l[0] || t.target === l
                ? f(t) -
                  t.target.getBoundingClientRect()[
                    e.isHorizontal() ? "left" : "top"
                  ]
                : null),
            t.preventDefault(),
            t.stopPropagation(),
            o.transition(100),
            l.transition(100),
            g(t),
            clearTimeout(p),
            a.transition(0),
            s.hide && a.css("opacity", 1),
            e.params.cssMode && e.$wrapperEl.css("scroll-snap-type", "none"),
            n("scrollbarDragStart", t);
        }
        function x(t) {
          const { scrollbar: s, $wrapperEl: i } = e,
            { $el: r, $dragEl: o } = s;
          d &&
            (t.preventDefault ? t.preventDefault() : (t.returnValue = !1),
            g(t),
            i.transition(0),
            r.transition(0),
            o.transition(0),
            n("scrollbarDragMove", t));
        }
        function y(t) {
          const s = e.params.scrollbar,
            { scrollbar: i, $wrapperEl: r } = e,
            { $el: o } = i;
          d &&
            ((d = !1),
            e.params.cssMode &&
              (e.$wrapperEl.css("scroll-snap-type", ""), r.transition("")),
            s.hide &&
              (clearTimeout(p),
              (p = b(() => {
                o.css("opacity", 0), o.transition(400);
              }, 1e3))),
            n("scrollbarDragEnd", t),
            s.snapOnRelease && e.slideToClosest());
        }
        function S(t) {
          const {
              scrollbar: s,
              touchEventsTouch: n,
              touchEventsDesktop: r,
              params: o,
              support: a,
            } = e,
            l = s.$el[0],
            c = !(!a.passiveListener || !o.passiveListeners) && {
              passive: !1,
              capture: !1,
            },
            d = !(!a.passiveListener || !o.passiveListeners) && {
              passive: !0,
              capture: !1,
            };
          if (!l) return;
          const u = "on" === t ? "addEventListener" : "removeEventListener";
          a.touch
            ? (l[u](n.start, w, c), l[u](n.move, x, c), l[u](n.end, y, d))
            : (l[u](r.start, w, c), i[u](r.move, x, c), i[u](r.end, y, d));
        }
        function C() {
          const { scrollbar: t, $el: s } = e;
          e.params.scrollbar = J(
            e,
            e.originalParams.scrollbar,
            e.params.scrollbar,
            { el: "swiper-scrollbar" }
          );
          const n = e.params.scrollbar;
          if (!n.el) return;
          let i = v(n.el);
          e.params.uniqueNavElements &&
            "string" == typeof n.el &&
            i.length > 1 &&
            1 === s.find(n.el).length &&
            (i = s.find(n.el));
          let r = i.find(`.${e.params.scrollbar.dragClass}`);
          0 === r.length &&
            ((r = v(`<div class="${e.params.scrollbar.dragClass}"></div>`)),
            i.append(r)),
            Object.assign(t, { $el: i, el: i[0], $dragEl: r, dragEl: r[0] }),
            n.draggable && e.params.scrollbar.el && S("on"),
            i &&
              i[e.enabled ? "removeClass" : "addClass"](
                e.params.scrollbar.lockClass
              );
        }
        function E() {
          e.params.scrollbar.el && S("off");
        }
        t({
          scrollbar: {
            el: null,
            dragSize: "auto",
            hide: !1,
            draggable: !1,
            snapOnRelease: !0,
            lockClass: "swiper-scrollbar-lock",
            dragClass: "swiper-scrollbar-drag",
          },
        }),
          (e.scrollbar = { el: null, dragEl: null, $el: null, $dragEl: null }),
          s("init", () => {
            C(), m(), h();
          }),
          s("update resize observerUpdate lock unlock", () => {
            m();
          }),
          s("setTranslate", () => {
            h();
          }),
          s("setTransition", (t, s) => {
            !(function (t) {
              e.params.scrollbar.el &&
                e.scrollbar.el &&
                e.scrollbar.$dragEl.transition(t);
            })(s);
          }),
          s("enable disable", () => {
            const { $el: t } = e.scrollbar;
            t &&
              t[e.enabled ? "removeClass" : "addClass"](
                e.params.scrollbar.lockClass
              );
          }),
          s("destroy", () => {
            E();
          }),
          Object.assign(e.scrollbar, {
            updateSize: m,
            setTranslate: h,
            init: C,
            destroy: E,
          });
      },
    ]);
    const Z = document.querySelector(".progress"),
      ee = document.querySelector(".main-slider");
    if (ee) {
      const se = new K(ee, {
        loop: !0,
        grabCursor: !0,
        slidesPerView: 1.1,
        spaceBetween: 10,
        centeredSlides: !0,
        navigation: {
          nextEl: ".main-slider__next.swiper-button-next",
          prevEl: ".main-slider__prev.swiper-button-prev",
        },
        pagination: {
          el: ".main-slider__pagination.swiper-pagination",
          clickable: !0,
        },
        breakpoints: { 767: { slidesPerView: "auto" } },
      });
      function ne() {
        se.slideNext(),
          (Z.style.animation = "none"),
          Z.offsetWidth,
          (Z.style.animation = null);
      }
      Z.addEventListener("animationend", ne),
        se.on("slideChange", function () {
          (Z.style.animation = "none"),
            Z.offsetWidth,
            (Z.style.animation = null),
            (Z.style.animationPlayState = "paused");
        }),
        document
          .querySelectorAll(".main-slider, .carousel-progress")
          .forEach((e) => {
            e.addEventListener("mouseenter", function () {
              Z.style.animationPlayState = "paused";
            });
          }),
        document
          .querySelectorAll(".main-slider,.carousel-progress")
          .forEach((e) => {
            e.addEventListener("mouseleave", function () {
              Z.style.animationPlayState = "running";
            });
          });
    }
    new K(".main-slider_bottom", {
      slidesPerView: 1.1,
      spaceBetween: 10,
      centeredSlides: !0,
      loop: !0,
      navigation: {
        nextEl: ".main-slider__next_bottom.swiper-button-next",
        prevEl: ".main-slider__prev_bottom.swiper-button-prev",
      },
      breakpoints: { 767: { slidesPerView: "auto" } },
    }),
      new K(".nav-calendar", {
        slidesPerView: "auto",
        spaceBetween: 10,
        resizeObserver: !1,
        navigation: {
          nextEl: ".nav-calendar__next.swiper-button-next",
          prevEl: ".nav-calendar__prev.swiper-button-prev",
        },
      }),
      new (class {
        constructor(e) {
          (this.options = Object.assign(
            { isOpen: () => {}, isClose: () => {} },
            e
          )),
            (this.modal = document.querySelector(".graph-modal")),
            (this.speed = 300),
            (this.animation = "fade"),
            (this._reOpen = !1),
            (this._nextContainer = !1),
            (this.modalContainer = !1),
            (this.isOpen = !1),
            (this.previousActiveElement = !1),
            (this._focusElements = [
              "a[href]",
              "input",
              "select",
              "textarea",
              "button",
              "iframe",
              "[contenteditable]",
              '[tabindex]:not([tabindex^="-"])',
            ]),
            (this._fixBlocks = document.querySelectorAll(".fix-block")),
            this.events();
        }
        events() {
          this.modal &&
            (document.addEventListener(
              "click",
              function (e) {
                const t = e.target.closest("[data-graph-path]");
                if (t) {
                  let e = t.dataset.graphPath,
                    s = t.dataset.graphAnimation,
                    n = t.dataset.graphSpeed;
                  return (
                    (this.animation = s || "fade"),
                    (this.speed = n ? parseInt(n) : 300),
                    (this._nextContainer = document.querySelector(
                      `[data-graph-target="${e}"]`
                    )),
                    void this.open()
                  );
                }
                e.target.closest(".js-modal-close") && this.close();
              }.bind(this)
            ),
            window.addEventListener(
              "keydown",
              function (e) {
                27 == e.keyCode && this.isOpen && this.close(),
                  9 == e.which && this.isOpen && this.focusCatch(e);
              }.bind(this)
            ),
            document.addEventListener(
              "click",
              function (e) {
                e.target.classList.contains("graph-modal") &&
                  e.target.classList.contains("is-open") &&
                  this.close();
              }.bind(this)
            ));
        }
        open(e) {
          if (
            ((this.previousActiveElement = document.activeElement), this.isOpen)
          )
            return (this.reOpen = !0), void this.close();
          (this.modalContainer = this._nextContainer),
            e &&
              (this.modalContainer = document.querySelector(
                `[data-graph-target="${e}"]`
              )),
            this.modalContainer.scrollTo(0, 0),
            this.modal.style.setProperty(
              "--transition-time",
              this.speed / 1e3 + "s"
            ),
            this.modal.classList.add("is-open"),
            (document.body.style.scrollBehavior = "auto"),
            (document.documentElement.style.scrollBehavior = "auto"),
            this.disableScroll(),
            this.modalContainer.classList.add("graph-modal-open"),
            this.modalContainer.classList.add(this.animation),
            setTimeout(() => {
              this.options.isOpen(this),
                this.modalContainer.classList.add("animate-open"),
                (this.isOpen = !0),
                this.focusTrap();
            }, this.speed);
        }
        close() {
          this.modalContainer &&
            (this.modalContainer.classList.remove("animate-open"),
            this.modalContainer.classList.remove(this.animation),
            this.modal.classList.remove("is-open"),
            this.modalContainer.classList.remove("graph-modal-open"),
            this.enableScroll(),
            (document.body.style.scrollBehavior = "auto"),
            (document.documentElement.style.scrollBehavior = "auto"),
            this.options.isClose(this),
            (this.isOpen = !1),
            this.focusTrap(),
            this.reOpen && ((this.reOpen = !1), this.open()));
        }
        focusCatch(e) {
          const t = this.modalContainer.querySelectorAll(this._focusElements),
            s = Array.prototype.slice.call(t),
            n = s.indexOf(document.activeElement);
          e.shiftKey &&
            0 === n &&
            (s[s.length - 1].focus(), e.preventDefault()),
            e.shiftKey ||
              n !== s.length - 1 ||
              (s[0].focus(), e.preventDefault());
        }
        focusTrap() {
          const e = this.modalContainer.querySelectorAll(this._focusElements);
          this.isOpen
            ? e.length && e[0].focus()
            : this.previousActiveElement.focus();
        }
        disableScroll() {
          let e = window.scrollY;
          this.lockPadding(),
            document.body.classList.add("disable-scroll"),
            (document.body.dataset.position = e),
            (document.body.style.top = -e + "px");
        }
        enableScroll() {
          let e = parseInt(document.body.dataset.position, 10);
          this.unlockPadding(),
            (document.body.style.top = "auto"),
            document.body.classList.remove("disable-scroll"),
            window.scrollTo({ top: e, left: 0 }),
            document.body.removeAttribute("data-position");
        }
        lockPadding() {
          let e = window.innerWidth - document.body.offsetWidth + "px";
          this._fixBlocks.forEach((t) => {
            t.style.paddingRight = e;
          }),
            (document.body.style.paddingRight = e);
        }
        unlockPadding() {
          this._fixBlocks.forEach((e) => {
            e.style.paddingRight = "0px";
          }),
            (document.body.style.paddingRight = "0px");
        }
      })(),
      s(638),
      s(429),
      s(339),
      s(851),
      s(494),
      s(218);
  })();
})();
