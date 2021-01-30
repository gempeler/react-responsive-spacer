!function(e,i){"object"==typeof exports&&"undefined"!=typeof module?i(exports,require("react"),require("styled-components"),require("react-responsive")):"function"==typeof define&&define.amd?define(["exports","react","styled-components","react-responsive"],i):i((e||self).reactResponsiveSpacerV2={},e.react,e.styledComponents,e.reactResponsive)}(this,function(e,i,r,n){function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var u=t(i),d=t(r);function o(e,i){return i||(i=e.slice(0)),e.raw=i,e}function a(){var e=o(["\n  width: ",";\n"]);return a=function(){return e},e}function s(){var e=o(["\n  height: ",";\n"]);return s=function(){return e},e}var y=d.default.div(s(),function(e){return e.y+"px"}),x=d.default.div(a(),function(e){return e.x+"px"}),l={mb:"0px",sm:"420px",md:"768px",lg:"1024px",xl:"1366px",xxl:"1440px"},c=u.default.createContext(l);e.SpacerProvider=function(e){var i=e.breakpoints;return h(c.Provider,{value:void 0===i?l:i},e.children)},e.SpacerStateContext=c,e.XSpacer=function(e){var r=e.mb,t=void 0===r?0:r,u=e.sm,d=void 0===u?t:u,o=e.md,a=void 0===o?d:o,s=e.lg,y=void 0===s?a:s,l=e.xl,m=void 0===l?y:l,v=e.xxl,f=void 0===v?m:v,p=i.useContext(c),q=n.useMediaQuery({query:"(min-width: "+p.mb+")"}),w=n.useMediaQuery({query:"(min-width: "+p.sm+")"}),M=n.useMediaQuery({query:"(min-width: "+p.md+")"}),Q=n.useMediaQuery({query:"(min-width: "+p.lg+")"}),b=n.useMediaQuery({query:"(min-width: "+p.xl+")"});return n.useMediaQuery({query:"(min-width: "+p.xxl+")"})?h(x,{x:f}):b?h(x,{x:m}):Q?h(x,{x:y}):M?h(x,{x:a}):w?h(x,{x:d}):q?h(x,{x:t}):h("div",null)},e.YSpacer=function(e){var r=e.mb,t=void 0===r?0:r,u=e.sm,d=void 0===u?t:u,o=e.md,a=void 0===o?d:o,s=e.lg,x=void 0===s?a:s,l=e.xl,m=void 0===l?x:l,v=e.xxl,f=void 0===v?m:v,p=i.useContext(c),q=n.useMediaQuery({query:"(min-width: "+p.mb+")"}),w=n.useMediaQuery({query:"(min-width: "+p.sm+")"}),M=n.useMediaQuery({query:"(min-width: "+p.md+")"}),Q=n.useMediaQuery({query:"(min-width: "+p.lg+")"}),b=n.useMediaQuery({query:"(min-width: "+p.xl+")"});return n.useMediaQuery({query:"(min-width: "+p.xxl+")"})?h(y,{y:f}):b?h(y,{y:m}):Q?h(y,{y:x}):M?h(y,{y:a}):w?h(y,{y:d}):q?h(y,{y:t}):h("div",null)}});
//# sourceMappingURL=react-responsive-spacer-v2.umd.js.map
