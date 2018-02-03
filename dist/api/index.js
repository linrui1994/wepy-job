"use strict";function wxGetUserInfo(){return new Promise(function(e,t){wx.getUserInfo({success:e,fail:t})})}function checkSession(){return new Promise(function(e,t){wx.checkSession({success:e,fail:t})})}function wxLogin(){return new Promise(function(e,t){wx.login({success:e,fail:t})})}function getJobList(e){return e.limit=e.limit||10,(0,_index.http)("/lh/introrder/list",e)}function getJob(e){return(0,_index.http)("/lh/order/selOrderById/"+e)}function getOrder(e){return(0,_index.http)("/lh/order/selOrderByUser/"+e)}function getOpenid(e){return(0,_index.http)("/weixinpay/GetOpenId",{code:e,appID:_index2.AppId,secret:_index2.AppSecret},"post")}function getResume(){return(0,_index.http)("/lh/resume/selResumeByUser")}function applyOrder(e){return(0,_index.http)("/lh/order/applyOrder",{oid:e},"post")}function getAllOrderPersonaly(){return(0,_index.http)("/lh/introrder/userByOrder")}function getAllRecruit(){return(0,_index.http)("/lh/userbyuser/selMyRecruit")}function starJob(e){return(0,_index.http)("/lh/order/collectOrder",{oid:e},"post")}function upload(e){return new Promise(function(t,r){wx.uploadFile({url:_index2.baseUrl+"/common/sysFile/upload",filePath:e,header:{Cookie:"JSESSIONID="+wx.getStorageSync("sessionid")},name:"file",success:t,fail:r})})}function getJobListPersonally(){return(0,_index.http)("/lh/introrder/web/list")}function publishJob(e){return(0,_index.http)("/lh/introrder/web/save",e,"post")}function updateResume(e){return(0,_index.http)("/lh/resume/web/update",e,"post")}function getStarList(){return(0,_index.http)("/lh/introrder/userByCollectOrder")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.wxGetUserInfo=wxGetUserInfo,exports.checkSession=checkSession,exports.wxLogin=wxLogin,exports.getJobList=getJobList,exports.getJob=getJob,exports.getOrder=getOrder,exports.getOpenid=getOpenid,exports.getResume=getResume,exports.applyOrder=applyOrder,exports.getAllOrderPersonaly=getAllOrderPersonaly,exports.getAllRecruit=getAllRecruit,exports.starJob=starJob,exports.upload=upload,exports.getJobListPersonally=getJobListPersonally,exports.publishJob=publishJob,exports.updateResume=updateResume,exports.getStarList=getStarList;var _index=require("./../utils/index.js"),_index2=require("./../config/index.js");