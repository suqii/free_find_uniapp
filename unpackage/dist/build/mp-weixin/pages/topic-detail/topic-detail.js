(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/topic-detail/topic-detail"],{"0b59":function(t,n,o){"use strict";var e;o.d(n,"b",(function(){return i})),o.d(n,"c",(function(){return r})),o.d(n,"a",(function(){return e}));var i=function(){var t=this,n=t.$createElement;t._self._c},r=[]},4944:function(t,n,o){"use strict";(function(t){o("9e51");e(o("66fd"));var n=e(o("943d"));function e(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,o("543d")["createPage"])},"8eb9":function(t,n,o){},"943d":function(t,n,o){"use strict";o.r(n);var e=o("0b59"),i=o("b243");for(var r in i)"default"!==r&&function(t){o.d(n,t,(function(){return i[t]}))}(r);o("db32");var a,u=o("f0c5"),c=Object(u["a"])(i["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],a);n["default"]=c.exports},b243:function(t,n,o){"use strict";o.r(n);var e=o("d1fc"),i=o.n(e);for(var r in e)"default"!==r&&function(t){o.d(n,t,(function(){return e[t]}))}(r);n["default"]=i.a},d1fc:function(t,n,o){"use strict";(function(t){function e(t){return u(t)||a(t)||r(t)||i()}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(t,n){if(t){if("string"===typeof t)return c(t,n);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?c(t,n):void 0}}function a(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function u(t){if(Array.isArray(t))return c(t)}function c(t,n){(null==n||n>t.length)&&(n=t.length);for(var o=0,e=new Array(n);o<n;o++)e[o]=t[o];return e}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var s=function(){o.e("components/topic-detail/topic-info").then(function(){return resolve(o("21c4"))}.bind(null,o)).catch(o.oe)},l=function(){Promise.all([o.e("common/vendor"),o.e("components/common/common-list2")]).then(function(){return resolve(o("9b75"))}.bind(null,o)).catch(o.oe)},f=function(){o.e("components/common/no-thing").then(function(){return resolve(o("7ac6"))}.bind(null,o)).catch(o.oe)},p=function(){o.e("components/common/load-more").then(function(){return resolve(o("2c4b"))}.bind(null,o)).catch(o.oe)},d={components:{topicInfo:s,commonList:l,noThing:f,loadMore:p},data:function(){return{info:{cover:"/static/demo/topicpic/1.jpeg",title:"话题名称",desc:"话题描述",today_count:0,news_count:10},hotList:[{title:"【趣寻】搜寻乐趣"},{title:"【新人必读】趣寻使用"}],tabIndex:0,tabBars:[{name:"默认"},{name:"最新"}],list1:[],loadtext1:"上拉加载更多",page1:1,firstLoad1:!1,list2:[],loadtext2:"上拉加载更多",page2:1,firstLoad2:!1}},computed:{listData:function(){return 0===this.tabIndex?this.list1:this.list2},loadtext:function(){return 0===this.tabIndex?this.loadtext1:this.loadtext2}},onLoad:function(n){var o=this;n.detail&&(this.info=JSON.parse(n.detail),t.setNavigationBarTitle({title:this.info.title})),this.getData(),t.$on("updateFollowOrSupport",(function(t){switch(t.type){case"follow":o.follow(t.data.user_id);break;default:break}}))},onReachBottom:function(){this.loadmore()},onUnload:function(){t.$off("updateFollowOrSupport",(function(t){}))},methods:{changeTab:function(t){this.tabIndex=t,this["firstLoad"+(t+1)]||this.getData()},getData:function(){var t=this,n=this.tabIndex+1,o=this["page"+n],i=1===o;this.$H.get("/topic/"+this.info.id+"/post/"+o).then((function(o){var r=o.list.map((function(n){return t.$U.formatCommonList(n)}));t["list"+n]=i?e(r):[].concat(e(t["list"+n]),e(r)),t["loadtext"+n]=r.length<10?"没有更多了":"上拉加载更多",i&&(t["firstLoad"+n]=!0)})).catch((function(o){i||t["page"+n]--}))},loadmore:function(){var t=this.tabIndex;if("上拉加载更多"===this.loadtext){var n=t+1;this["loadtext"+n]="加载中...",this["page"+n]++,this.getData()}},follow:function(n){this.list1.forEach((function(t){t.user_id===n&&(t.isFollow=!0)})),this.list2.forEach((function(t){t.user_id===n&&(t.isFollow=!0)})),t.showToast({title:"关注成功"})},doSupport:function(n){var o=this.tabIndex+1;this["list"+o].forEach((function(t){t.id===n.id&&(""===t.support.type?t.support[n.type+"_count"]++:"support"===t.support.type&&"unsupport"===n.type?(t.support.support_count--,t.support.unsupport_count++):"unsupport"===t.support.type&&"support"===n.type&&(t.support.support_count++,t.support.unsupport_count--),t.support.type=n.type)}));var e="support"===n.type?"顶":"踩";t.showToast({title:e+"成功"})}}};n.default=d}).call(this,o("543d")["default"])},db32:function(t,n,o){"use strict";var e=o("8eb9"),i=o.n(e);i.a}},[["4944","common/runtime","common/vendor"]]]);