(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/msg/msg-list"],{"696d":function(e,t,n){"use strict";var u;n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return u}));var a=function(){var e=this,t=e.$createElement,n=(e._self._c,e._f("formatTime")(e.item.update_time));e.$mp.data=Object.assign({},{$root:{f0:n}})},i=[]},"8ada":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=a(n("9918"));function a(e){return e&&e.__esModule?e:{default:e}}var i=function(){n.e("components/uni-ui/uni-badge/uni-badge").then(function(){return resolve(n("7c22"))}.bind(null,n)).catch(n.oe)},r={components:{uniBadge:i},props:{item:Object,index:Number},filters:{formatTime:function(e){return u.default.gettime(e)}},created:function(){console.log(this.item)},methods:{openSpace:function(t){e.navigateTo({url:"/pages/user-space/user-space?user_id="+t})},open:function(){var t=this,n={user_id:this.item.user_id,username:this.item.username,userpic:this.item.avatar};e.navigateTo({url:"../../pages/user-chat/user-chat?user="+JSON.stringify(n),success:function(){t.$store.dispatch("readChatMessage",t.item)}})}}};t.default=r}).call(this,n("543d")["default"])},"8c2d":function(e,t,n){"use strict";n.r(t);var u=n("696d"),a=n("a059");for(var i in a)"default"!==i&&function(e){n.d(t,e,(function(){return a[e]}))}(i);var r,s=n("f0c5"),c=Object(s["a"])(a["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],r);t["default"]=c.exports},a059:function(e,t,n){"use strict";n.r(t);var u=n("8ada"),a=n.n(u);for(var i in u)"default"!==i&&function(e){n.d(t,e,(function(){return u[e]}))}(i);t["default"]=a.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/msg/msg-list-create-component',
    {
        'components/msg/msg-list-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("8c2d"))
        })
    },
    [['components/msg/msg-list-create-component']]
]);
