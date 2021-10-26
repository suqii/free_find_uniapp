(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-ui/uni-collapse/uni-collapse"],{2464:function(n,t,e){"use strict";var u;e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return r})),e.d(t,"a",(function(){return u}));var a=function(){var n=this,t=n.$createElement;n._self._c},r=[]},"2db2":function(n,t,e){"use strict";var u=e("d748"),a=e.n(u);a.a},"4af6":function(n,t,e){"use strict";e.r(t);var u=e("f964"),a=e.n(u);for(var r in u)"default"!==r&&function(n){e.d(t,n,(function(){return u[n]}))}(r);t["default"]=a.a},d748:function(n,t,e){},de64:function(n,t,e){"use strict";e.r(t);var u=e("2464"),a=e("4af6");for(var r in a)"default"!==r&&function(n){e.d(t,n,(function(){return a[n]}))}(r);e("2db2");var c,i=e("f0c5"),o=Object(i["a"])(a["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],c);t["default"]=o.exports},f964:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={name:"UniCollapse",props:{accordion:{type:[Boolean,String],default:!1}},data:function(){return{}},provide:function(){return{collapse:this}},created:function(){this.childrens=[]},methods:{onChange:function(){var n=[];this.childrens.forEach((function(t,e){t.isOpen&&n.push(t.nameSync)})),this.$emit("change",n)}}};t.default=u}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-ui/uni-collapse/uni-collapse-create-component',
    {
        'components/uni-ui/uni-collapse/uni-collapse-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("de64"))
        })
    },
    [['components/uni-ui/uni-collapse/uni-collapse-create-component']]
]);
