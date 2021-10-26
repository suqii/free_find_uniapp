(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/news/topic-list2"],{"01b0":function(t,e,n){"use strict";var i=n("8dfe"),c=n.n(i);c.a},"0c97":function(t,e,n){"use strict";n.r(e);var i=n("c2e7"),c=n("2072");for(var o in c)"default"!==o&&function(t){n.d(e,t,(function(){return c[t]}))}(o);n("01b0");var u,a=n("f0c5"),r=Object(a["a"])(c["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],u);e["default"]=r.exports},2072:function(t,e,n){"use strict";n.r(e);var i=n("2249"),c=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=c.a},2249:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{item:Object,index:Number,choose:{type:Boolean,default:!1}},methods:{open:function(){if(this.choose)return t.$emit("chooseTopic",{id:this.item.id,title:this.item.title}),t.navigateBack({delta:1});t.navigateTo({url:"../../pages/topic-detail/topic-detail?detail="+JSON.stringify(this.item)})}}};e.default=n}).call(this,n("543d")["default"])},"8dfe":function(t,e,n){},c2e7:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var c=function(){var t=this,e=t.$createElement;t._self._c},o=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/news/topic-list2-create-component',
    {
        'components/news/topic-list2-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("0c97"))
        })
    },
    [['components/news/topic-list2-create-component']]
]);
