(function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VMoney=t():e.VMoney=t()})(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p=".",t(t.s=9)}([function(e,t,n){"use strict";t.a={prefix:"",suffix:"",thousands:",",decimal:".",precision:2,allowBlank:!0}},function(e,t,n){"use strict";var r=n(2),i=n(5),o=n(0);t.a=function(e,t){if(t.value){var u=n.i(i.a)(o.a,t.value);if("INPUT"!==e.tagName.toLocaleUpperCase()){var a=e.getElementsByTagName("input");1!==a.length||(e=a[0])}e.onkeydown=function(t){var i=8===t.which||46===t.which,o=e.value.length-e.selectionEnd==0;u.allowBlank&&i&&o&&0===n.i(r.a)(e.value,0)&&(e.value="",e.dispatchEvent(n.i(r.b)("change")))},e.oninput=function(){var t=e.value.length-e.selectionEnd;e.value=n.i(r.c)(e.value,u),t=Math.max(t,u.suffix.length),t=e.value.length-t,t=Math.max(t,u.prefix.length),n.i(r.d)(e,t),e.dispatchEvent(n.i(r.b)("change"))},e.onfocus=function(){n.i(r.d)(e,e.value.length-u.suffix.length)},e.onblur=function(){var t=n.i(r.e)(e.value);0!==t&&(e.value=n.i(r.c)(parseFloat(t),u)),e.dispatchEvent(n.i(r.b)("change"))},e.oninput(),e.dispatchEvent(n.i(r.b)("input"))}}},function(e,t,n){"use strict";function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:v.a;if(t.allowBlank&&""==e)return"";var n=o(e),r=c(n,t.precision),i=l(r).split("."),u=i[0],a=i[1];return u=f(u,t.thousands),t.prefix+""+s(u,a,t.decimal)+t.suffix}function i(e,t){var n=o(e),r=c(n,t);return parseFloat(r)}function o(e){return l(e).replace(/\D+/g,"")||"0"}function u(e){return a(0,e,20)}function a(e,t,n){return Math.max(e,Math.min(t,n))}function c(e,t){var n=Math.pow(10,t),r=parseFloat(e)/n;return 0===parseInt(e.substring(0,1))?e:r.toFixed(u(t))}function f(e,t){return e.replace(/(\d)(?=(?:\d{3})+\b)/gm,"$1"+t)}function s(e,t,n){return t?e+n+t:e}function l(e){return e?e.toString():""}function d(e,t){var n=function(){e.setSelectionRange(t,t)};e===document.activeElement&&setTimeout(n,1)}function p(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!0),t}n.d(t,"b",function(){return p}),n.d(t,"c",function(){return r}),n.d(t,"e",function(){return o}),n.d(t,"d",function(){return d}),n.d(t,"a",function(){return i});var v=n(0)},function(e,t,n){"use strict";function r(e,t){t&&Object.keys(t).map(function(e){a.a[e]=t[e]}),e.directive("money",u.a),e.component("money",o.a)}Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"VERSION",function(){return c});var i=n(6),o=n.n(i),u=n(1),a=n(0);n.d(t,"Money",function(){return o.a}),n.d(t,"VMoney",function(){return u.a}),n.d(t,"options",function(){return a.a});var c="0.8.4";t.default=r,"undefined"!=typeof window&&window.Vue&&window.Vue.use(r)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n(0),o=n(2);t.default={name:"Money",props:{value:{required:!0,type:[Number,String],default:0},masked:{type:Boolean,default:!1},precision:{type:Number,default:function(){return i.a.precision}},decimal:{type:String,default:function(){return i.a.decimal}},thousands:{type:String,default:function(){return i.a.thousands}},prefix:{type:String,default:function(){return i.a.prefix}},suffix:{type:String,default:function(){return i.a.suffix}},allowBlank:{type:Boolean,default:function(){return i.a.allowBlank}}},directives:{money:r.a},data:function(){return{formattedValue:"",firstLoad:!0}},watch:{value:{immediate:!0,handler:function(e,t){var r=n.i(o.c)(e,this.$props);this.firstLoad&&(this.formattedValue=r,this.firstLoad=!1)}}},methods:{change:function(e){this.$emit("input",this.masked?e.target.value:n.i(o.a)(e.target.value,this.precision))},focus:function(e){0===e.target.value&&e.target.setSelectionRange(0,1)}}}},function(e,t,n){"use strict";t.a=function(e,t){return e=e||{},t=t||{},Object.keys(e).concat(Object.keys(t)).reduce(function(n,r){return n[r]=void 0===t[r]?e[r]:t[r],n},{})}},function(e,t,n){var r=n(7)(n(4),n(8),null,null);e.exports=r.exports},function(e,t){e.exports=function(e,t,n,r){var i,o=e=e||{},u=typeof e.default;"object"!==u&&"function"!==u||(i=e,o=e.default);var a="function"==typeof o?o.options:o;if(t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),n&&(a._scopeId=n),r){var c=a.computed||(a.computed={});Object.keys(r).forEach(function(e){var t=r[e];c[e]=function(){return t}})}return{esModule:i,exports:o,options:a}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("input",{directives:[{name:"money",rawName:"v-money",value:{precision:e.precision,decimal:e.decimal,thousands:e.thousands,prefix:e.prefix,suffix:e.suffix,allowBlank:e.allowBlank},expression:"{precision, decimal, thousands, prefix, suffix, allowBlank}"}],staticClass:"v-money",attrs:{type:"tel"},domProps:{value:e.formattedValue},on:{change:e.change,focus:e.focus}})},staticRenderFns:[]}},function(e,t,n){e.exports=n(3)}])});