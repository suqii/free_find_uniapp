(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/user-chat/user-chat-list"],{"168e":function(e,t,n){"use strict";n.r(t);var u=n("4269"),r=n.n(u);for(var i in u)"default"!==i&&function(e){n.d(t,e,(function(){return u[e]}))}(i);t["default"]=r.a},4269:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=r(n("9918"));function r(e){return e&&e.__esModule?e:{default:e}}var i={props:{item:Object,index:Number,pretime:[Number,String]},methods:{openSpace:function(t){e.navigateTo({url:"/pages/user-space/user-space?user_id="+t})}},computed:{isSelf:function(){var e=this.$store.state.user.id;return e===this.item.user_id},shortTime:function(){return u.default.getChatTime(this.item.create_time,this.pretime)}}};t.default=i}).call(this,n("543d")["default"])},"4e55":function(e,t,n){"use strict";var u;n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return u}));var r=function(){var e=this,t=e.$createElement;e._self._c},i=[]},dfc2:function(e,t,n){"use strict";n.r(t);var u=n("4e55"),r=n("168e");for(var i in r)"default"!==i&&function(e){n.d(t,e,(function(){return r[e]}))}(i);var a,c=n("f0c5"),s=Object(c["a"])(r["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],a);t["default"]=s.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/user-chat/user-chat-list-create-component',
    {
        'components/user-chat/user-chat-list-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("dfc2"))
        })
    },
    [['components/user-chat/user-chat-list-create-component']]
]);
