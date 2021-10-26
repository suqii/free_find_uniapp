(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/news/topic-list"],{"0998":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement;t._self._c},o=[]},"82f4":function(t,e,n){"use strict";n.r(e);var i=n("0998"),a=n("c277");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);var u,c=n("f0c5"),r=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],u);e["default"]=r.exports},aa28:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{item:Object,index:Number,choose:{type:Boolean,default:!1}},methods:{open:function(){if(this.choose)return t.$emit("chooseTopic",{id:this.item.id,title:this.item.title}),t.navigateBack({delta:1});t.navigateTo({url:"../../pages/topic-detail/topic-detail?detail="+JSON.stringify(this.item)})}}};e.default=n}).call(this,n("543d")["default"])},c277:function(t,e,n){"use strict";n.r(e);var i=n("aa28"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/news/topic-list-create-component',
    {
        'components/news/topic-list-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("82f4"))
        })
    },
    [['components/news/topic-list-create-component']]
]);
