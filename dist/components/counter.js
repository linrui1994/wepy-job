"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _wepy=require("./../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),Counter=function(e){function t(){var e,n,o,r;_classCallCheck(this,t);for(var i=arguments.length,s=Array(i),u=0;u<i;u++)s[u]=arguments[u];return n=o=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),_initialiseProps.call(o),r=n,_possibleConstructorReturn(o,r)}return _inherits(t,e),t}(_wepy2.default.component),_initialiseProps=function(){var e=this;this.props={num:{type:[Number,String],coerce:function(e){return+e},default:50}},this.data={},this.events={"index-broadcast":function(){var t,n=(t=arguments.length-1,arguments.length<=t?void 0:arguments[t]);console.log(e.$name+" receive "+n.name+" from "+n.source.$name)}},this.watch={num:function(e,t){console.log("旧值："+t+"，新值："+e)}},this.methods={plus:function(){this.num=this.num+1,console.log(this.$name+" plus tap"),this.$emit("index-emit",1,2,3)},minus:function(){this.num=this.num-1,console.log(this.$name+" minus tap")}}};exports.default=Counter;