(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"21ff":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={onLaunch:function(){console.log("App Launch"),this.$U.onNetWork(),this.$store.dispatch("initUser")},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};t.default=o},"31c6":function(e,t,n){"use strict";(function(e,t){n("9e51");var o=l(n("66fd")),r=l(n("6927")),u=l(n("e048")),a=l(n("0362")),c=l(n("445d")),i=l(n("5b73"));function l(e){return e&&e.__esModule?e:{default:e}}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}o.default.prototype.$store=u.default,o.default.config.productionTip=!1;var d=function(){n.e("components/common/divider").then(function(){return resolve(n("bc86"))}.bind(null,n)).catch(n.oe)};o.default.component("divider",d);var v=function(){n.e("components/common/no-thing").then(function(){return resolve(n("7ac6"))}.bind(null,n)).catch(n.oe)};o.default.component("no-thing",v),o.default.prototype.$C=a.default,o.default.prototype.$U=c.default,o.default.prototype.$H=i.default,o.default.prototype.checkAuth=function(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return u.default.state.loginStatus?n&&!u.default.state.user.phone?(e.showToast({title:"请先登录",icon:"none"}),e.navigateTo({url:"/pages/user-phone/user-phone"})):void t():(e.showToast({title:"请先登录",icon:"none"}),e.navigateTo({url:"/pages/login/login"}))},o.default.prototype.navigateTo=function(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return u.default.state.loginStatus?n&&!u.default.state.user.phone?(e.showToast({title:"请先登录",icon:"none"}),e.navigateTo({url:"/pages/user-phone/user-phone"})):void e.navigateTo(t):(e.showToast({title:"请先登录",icon:"none"}),e.navigateTo({url:"/pages/login/login"}))},r.default.mpType="app";var b=new o.default(s({store:u.default},r.default));t(b).$mount()}).call(this,n("543d")["default"],n("543d")["createApp"])},"5bc1":function(e,t,n){},6927:function(e,t,n){"use strict";n.r(t);var o=n("d1fb");for(var r in o)"default"!==r&&function(e){n.d(t,e,(function(){return o[e]}))}(r);n("c6bc");var u,a,c,i,l=n("f0c5"),f=Object(l["a"])(o["default"],u,a,!1,null,null,null,!1,c,i);t["default"]=f.exports},c6bc:function(e,t,n){"use strict";var o=n("5bc1"),r=n.n(o);r.a},d1fb:function(e,t,n){"use strict";n.r(t);var o=n("21ff"),r=n.n(o);for(var u in o)"default"!==u&&function(e){n.d(t,e,(function(){return o[e]}))}(u);t["default"]=r.a}},[["31c6","common/runtime","common/vendor"]]]);