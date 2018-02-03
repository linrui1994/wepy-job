"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var o=0;o<t.length;o++){var a=t[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,o,a){return o&&e(t.prototype,o),a&&e(t,a),t}}(),_wepy=require("./../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_jobDetailCom=require("./../components/job-detail-com.js"),_jobDetailCom2=_interopRequireDefault(_jobDetailCom),_api=require("./../api/index.js"),_wepyComToast=require("./../npm/wepy-com-toast/toast.js"),_wepyComToast2=_interopRequireDefault(_wepyComToast),JobDetail=function(e){function t(){var e,o,a,r;_classCallCheck(this,t);for(var n=arguments.length,i=Array(n),s=0;s<n;s++)i[s]=arguments[s];return o=a=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),a.config={navigationBarTitleText:"申请详情"},a.$repeat={},a.$props={jobDetailCom:{"xmlns:v-bind":"","v-bind:detail.sync":"detail","v-bind:showstatus.sync":"showstatus"}},a.$events={},a.components={jobDetailCom:_jobDetailCom2.default,toast:_wepyComToast2.default},a.data={detail:{},showstatus:!0},r=o,_possibleConstructorReturn(a,r)}return _inherits(t,e),_createClass(t,[{key:"onLoad",value:function(e){var t=this,o=e.id,a=e.showstatus;this.showstatus=Boolean(a),this.$apply(),console.log("order-detail.wpy","showstatus",a),(0,_api.getOrder)(o).then(function(e){500===e.code&&t.$invoke("toast","show",{title:e.msg,img:0===e.code?"../assets/profile/check.png":"../assets/error.png"}),e.data.date=(e.data.updatetime||e.data.updateat||e.data.createat||e.data.creationtime).substr(5,5),e.data.avatar=e.data.img,t.detail=e.data,t.$apply()})}}]),t}(_wepy2.default.page);Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(JobDetail,"pages/order-detail"));