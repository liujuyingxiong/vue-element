webpackJsonp([15],{143:function(t,e,n){var a,s;a=n(160);var i=n(209);s=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(s=a=a.default),"function"==typeof s&&(s=s.options),s.render=i.render,s.staticRenderFns=i.staticRenderFns,t.exports=a},160:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{list:[{name:"我的客户",path:"myCustomerMiddle"},{name:"客户池",path:"poolCustomerList"}]}}}},209:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex"},[n("nav",{staticClass:"panel admin-second-nav"},[n("p",{staticClass:"panel-heading flex v-center"},[t._v("\n      客户\n    ")]),t._v(" "),t._l(t.list,function(e){return n("router-link",{staticClass:"panel-block",attrs:{to:{name:e.path}}},[n("span",{staticClass:"panel-icon"},[n("i",{staticClass:"fa fa-book"})]),t._v(" "),n("span",[t._v(" "+t._s(e.name))])])})],2),t._v(" "),n("router-view",{staticClass:"flex-1"})],1)},staticRenderFns:[]}}});