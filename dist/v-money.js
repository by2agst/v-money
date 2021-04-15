(function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.VMoney=n():e.VMoney=n()})(this,function(){return function(e){function n(r){if(t[r])return t[r].exports;var u=t[r]={i:r,l:!1,exports:{}};return e[r].call(u.exports,u,u.exports,n),u.l=!0,u.exports}var t={};return n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p=".",n(n.s=9)}([function(e,n,t){"use strict";n.a={prefix:"",suffix:"",thousands:",",decimal:".",precision:2,allowBlank:!0}},function(e,n,t){"use strict";var r=t(2),u=t(5),i=t(0);n.a=function(e,n){if(n.value){var o=t.i(u.a)(i.a,n.value);if("INPUT"!==e.tagName.toLocaleUpperCase()){var a=e.getElementsByTagName("input");1!==a.length||(e=a[0])}e.onkeydown=function(n){var u=8===n.which||46===n.which,i=e.value.length-e.selectionEnd==0;o.allowBlank&&u&&i&&0===t.i(r.a)(e.value,0)&&(e.value="",e.dispatchEvent(t.i(r.b)("change")))},e.oninput=function(){var n=e.value.length-e.selectionEnd;e.value=t.i(r.c)(e.value,o),n=Math.max(n,o.suffix.length),n=e.value.length-n,n=Math.max(n,o.prefix.length),t.i(r.d)(e,n),e.dispatchEvent(t.i(r.b)("change"))},e.onfocus=function(){t.i(r.d)(e,e.value.length-o.suffix.length)},e.onblur=function(){var n=t.i(r.e)(e.value);0!==n&&(e.value=t.i(r.c)(parseFloat(n),o)),e.dispatchEvent(t.i(r.b)("change"))},e.oninput(),e.dispatchEvent(t.i(r.b)("input"))}}},function(e,n,t){"use strict";function r(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:v.a;if(n.allowBlank&&""==e)return"";var t=i(e),r=c(t,n.precision),u=l(r).split("."),o=u[0],a=u[1];return o=f(o,n.thousands),n.prefix+""+s(o,a,n.decimal)+n.suffix}function u(e,n){var t=i(e),r=c(t,n);return parseFloat(r)}function i(e){return l(e).replace(/\D+/g,"")||"0"}function o(e){return a(0,e,20)}function a(e,n,t){return Math.max(e,Math.min(n,t))}function c(e,n){var t=Math.pow(10,n),r=parseFloat(e)/t;return 0===parseInt(e.substring(0,1))?e:r.toFixed(o(n))}function f(e,n){return e.replace(/(\d)(?=(?:\d{3})+\b)/gm,"$1"+n)}function s(e,n,t){return n?e+t+n:e}function l(e){return e?e.toString():""}function d(e,n){var t=function(){e.setSelectionRange(n,n)};e===document.activeElement&&setTimeout(t,1)}function p(e){var n=document.createEvent("Event");return n.initEvent(e,!0,!0),n}t.d(n,"b",function(){return p}),t.d(n,"c",function(){return r}),t.d(n,"e",function(){return i}),t.d(n,"d",function(){return d}),t.d(n,"a",function(){return u});var v=t(0)},function(e,n,t){"use strict";function r(e,n){n&&Object.keys(n).map(function(e){a.a[e]=n[e]}),e.directive("money",o.a),e.component("money",i.a)}Object.defineProperty(n,"__esModule",{value:!0}),t.d(n,"VERSION",function(){return c});var u=t(6),i=t.n(u),o=t(1),a=t(0);t.d(n,"Money",function(){return i.a}),t.d(n,"VMoney",function(){return o.a}),t.d(n,"options",function(){return a.a});var c="0.8.4";n.default=r,"undefined"!=typeof window&&window.Vue&&window.Vue.use(r)},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(1),u=t(0),i=t(2);n.default={name:"Money",props:{value:{required:!0,type:[Number,String],default:0},masked:{type:Boolean,default:!1},precision:{type:Number,default:function(){return u.a.precision}},decimal:{type:String,default:function(){return u.a.decimal}},thousands:{type:String,default:function(){return u.a.thousands}},prefix:{type:String,default:function(){return u.a.prefix}},suffix:{type:String,default:function(){return u.a.suffix}},allowBlank:{type:Boolean,default:function(){return u.a.allowBlank}}},directives:{money:r.a},data:function(){return{formattedValue:""}},watch:{value:{immediate:!0,handler:function(e,n){}}},methods:{change:function(e){this.$emit("input",this.masked?e.target.value:t.i(i.a)(e.target.value,this.precision))},focus:function(e){0===e.target.value&&e.target.setSelectionRange(0,1)}}}},function(e,n,t){"use strict";n.a=function(e,n){return e=e||{},n=n||{},Object.keys(e).concat(Object.keys(n)).reduce(function(t,r){return t[r]=void 0===n[r]?e[r]:n[r],t},{})}},function(e,n,t){var r=t(7)(t(4),t(8),null,null);e.exports=r.exports},function(e,n){e.exports=function(e,n,t,r){var u,i=e=e||{},o=typeof e.default;"object"!==o&&"function"!==o||(u=e,i=e.default);var a="function"==typeof i?i.options:i;if(n&&(a.render=n.render,a.staticRenderFns=n.staticRenderFns),t&&(a._scopeId=t),r){var c=a.computed||(a.computed={});Object.keys(r).forEach(function(e){var n=r[e];c[e]=function(){return n}})}return{esModule:u,exports:i,options:a}}},function(e,n){e.exports={render:function(){var e=this,n=e.$createElement;return(e._self._c||n)("input",{directives:[{name:"money",rawName:"v-money",value:{precision:e.precision,decimal:e.decimal,thousands:e.thousands,prefix:e.prefix,suffix:e.suffix,allowBlank:e.allowBlank},expression:"{precision, decimal, thousands, prefix, suffix, allowBlank}"}],staticClass:"v-money",attrs:{type:"tel"},domProps:{value:e.formattedValue},on:{change:e.change,focus:e.focus}})},staticRenderFns:[]}},function(e,n,t){e.exports=t(3)}])});