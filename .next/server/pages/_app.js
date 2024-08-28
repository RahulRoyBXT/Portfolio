"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5010:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-scroll"
const external_react_scroll_namespaceObject = require("react-scroll");
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: external "@gsap/react"
const react_namespaceObject = require("@gsap/react");
// EXTERNAL MODULE: external "gsap"
var external_gsap_ = __webpack_require__(4287);
var external_gsap_default = /*#__PURE__*/__webpack_require__.n(external_gsap_);
;// CONCATENATED MODULE: ./components/Navbar.js






const Navbar = ()=>{
    const { 0: hasScroll , 1: setHasScroll  } = (0,external_react_.useState)(false);
    const { 0: mobileNavOpen , 1: setMobileNavOpen  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        setHasScroll(document.documentElement.scrollTop > 100);
    }, []);
    (0,external_react_.useEffect)(()=>{
        window.addEventListener('scroll', ()=>setHasScroll(document.documentElement.scrollTop > 100)
        );
        return (_)=>{
            window.removeEventListener('scroll', ()=>setHasScroll(document.documentElement.scrollTop > 100)
            );
        };
    }, [
        setHasScroll
    ]);
    const handleHamburgerClick = ()=>{
        mobileNavOpen ? document.body.classList.remove('blur') : document.body.classList.add('blur');
        setMobileNavOpen(!mobileNavOpen);
    };
    (0,external_react_.useEffect)(()=>{
        const tl = external_gsap_default().timeline();
        // Use `current` to access the DOM node
        tl.from('.nav-title', {
            duration: 1,
            opacity: 0,
            delay: 3.1,
            y: -50,
            ease: "slow(0.7,0.7,false)"
        });
        tl.from('.right-side', {
            duration: 1,
            opacity: 0,
            y: -50,
            ease: "slow(0.7,0.7,false)"
        }, "-=0.5");
    }, []); // Add dependencies if needed
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                className: `header ${hasScroll ? 'scrolled' : ''}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "left-side",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: `/`,
                            passHref: true,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "nav-title",
                                children: "Rahul Roy"
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "right-side",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_namespaceObject.Link, {
                                activeClass: "active",
                                to: "main",
                                spy: true,
                                smooth: true,
                                offset: -125,
                                children: "Main"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_namespaceObject.Link, {
                                to: "about",
                                spy: true,
                                smooth: true,
                                offset: -125,
                                children: "About"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_namespaceObject.Link, {
                                to: "projects",
                                spy: true,
                                smooth: true,
                                offset: -125,
                                children: "Projects"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "./Rahul_Roy_Resume.pdf",
                                className: "resume-link",
                                children: "Resume"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mobile-header",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            "aria-label": "Menu",
                            className: `${mobileNavOpen ? 'close-button' : 'hamburger-button'}`,
                            onClick: ()=>handleHamburgerClick()
                            ,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "ham-box",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "ham-box-inner"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("aside", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            className: `${mobileNavOpen ? 'side-bar-open' : 'side-bar'}`,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ol", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_namespaceObject.Link, {
                                                    activeClass: "active",
                                                    to: "main",
                                                    spy: true,
                                                    smooth: true,
                                                    offset: -125,
                                                    onClick: ()=>handleHamburgerClick()
                                                    ,
                                                    children: "Main"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_namespaceObject.Link, {
                                                    to: "about",
                                                    spy: true,
                                                    smooth: true,
                                                    offset: -125,
                                                    onClick: ()=>handleHamburgerClick()
                                                    ,
                                                    children: "About"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_namespaceObject.Link, {
                                                    to: "projects",
                                                    spy: true,
                                                    smooth: true,
                                                    offset: -125,
                                                    onClick: ()=>handleHamburgerClick()
                                                    ,
                                                    children: "Projects"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "./Rahul_Roy_Resume.pdf",
                                        className: "resume-link",
                                        children: "Resume"
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    }));
};
/* harmony default export */ const components_Navbar = (Navbar);

// EXTERNAL MODULE: external "react-scroll-parallax"
var external_react_scroll_parallax_ = __webpack_require__(7446);
;// CONCATENATED MODULE: ./components/BlackLoader.js



const BlackLoader = ()=>{
    (0,external_react_.useEffect)(()=>{
        external_gsap_default().to(".loader", {
            duration: 1,
            y: "-100%",
            ease: "power4.easeInOut",
            delay: 2,
            display: "none"
        });
    });
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "loader"
    }));
};
/* harmony default export */ const components_BlackLoader = (BlackLoader);

;// CONCATENATED MODULE: ./pages/_app.js







function MyApp({ Component , pageProps  }) {
    const mainPage = (0,external_react_.useRef)(null);
    (0,external_react_.useEffect)(()=>{
        external_gsap_default().to(mainPage.current, {
            delay: 2.8,
            duration: 1,
            opacity: 1,
            bottom: "100%",
            display: "block",
            ease: "power4.easeInOut"
        });
    });
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_BlackLoader, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                ref: mainPage,
                className: "mainPage",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(components_Navbar, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_parallax_.ParallaxProvider, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                            ...pageProps
                        })
                    })
                ]
            })
        ]
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 4287:
/***/ ((module) => {

module.exports = require("gsap");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 7446:
/***/ ((module) => {

module.exports = require("react-scroll-parallax");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664], () => (__webpack_exec__(5010)));
module.exports = __webpack_exports__;

})();