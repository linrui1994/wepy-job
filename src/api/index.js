import { http } from '../utils/index.js'
import { AppId, AppSecret, baseUrl } from '../config/index.js'

export function wxGetUserInfo() {
  return new Promise((resolve, reject) => {
    wx.getUserInfo({
      success: resolve,
      fail: reject
    })
  })
}

export function checkSession() {
  return new Promise((resolve, reject) => {
    wx.checkSession({
      success: resolve,
      fail: reject
    })
  })
}

export function wxLogin() {
  return new Promise((resolve, reject) => {
    wx.login({
      success: resolve,
      fail: reject
    })
  })
}

// 获取职位列表
export function getJobList(params) {
  params.limit = params.limit || 10
  return http('/lh/introrder/list', params, 'get', false, true)
}

// 根据id获取职位详情
export function getJob(id) {
  return http(`/lh/order/selOrderById/${id}`)
}

// 获取申请职位的详情
export function getOrder(id) {
  return http(`/lh/order/selOrderByUser/${id}`)
}

// 获取openid
export function getOpenid(code) {
  return http(
    '/weixinpay/GetOpenId',
    {
      code,
      appID: AppId,
      secret: AppSecret
    },
    'post',
    false,
    true
  )
}

// 获取简历
export function getResume(uid) {
  if (uid) {
    return http('/lh/resume/selResumeByUser', { uid })
  } else {
    return http('/lh/resume/selResumeByUser')
  }
}

// 申请职位
export function applyOrder(oid) {
  return http('/lh/order/applyOrder', { oid }, 'post', true)
}

// 获取申请列表
export function getAllOrderPersonaly() {
  return http('/lh/introrder/userByOrder')
}

// 获取招募的用户列表，可根据人名搜索
export function getAllRecruit(params = {}) {
  return http('/lh/userbyuser/selMyRecruit', params)
}

// 根据职位id获取投递简历列表
export function getOrderToUserList (oid) {
  return http('/lh/resume/web/getOrderToUserList', {oid}, 'get', true)
}

// 收藏职位
export function starJob(oid) {
  return http('/lh/order/collectOrder', { oid }, 'post', true)
}

// 上传文件
export function upload(filePath) {
  return new Promise((resolve, reject) => {
    wx.uploadFile({
      url: `${baseUrl}/common/sysFile/upload`, // 仅为示例，非真实的接口地址
      filePath,
      header: {
        Cookie: 'JSESSIONID=' + wx.getStorageSync('sessionid')
      },
      name: 'file',
      success: resolve,
      fail: reject
    })
  })
}

// 获取发布列表
export function getJobListPersonally() {
  return http('/lh/introrder/web/list')
}

// 发布职位
export function publishJob(data) {
  return http('/lh/introrder/web/save', data, 'post', true)
}

// 更新简历
export function updateResume(data) {
  return http('/lh/resume/web/update', data, 'post', true)
}

// 获取收藏列表
export function getStarList() {
  return http('/lh/introrder/userByCollectOrder')
}

// 认证身份
export function authentication(data) {
  return http('/user/authentication', data, 'get', true)
}

// 搜索简历 获取简历列表
export function getResumeList(params) {
  params.limit = params.limit || 10
  return http('/lh/resume/list', params)
}

// 评价
export function estimate(data) {
  return http('/system/estimate/addEstimate', data, 'post', true)
}

// 获取我的记录
export function getPubList() {
  return http('/user/myPublist')
}

// 接受短信通知
export function updateSms(data) {
  return http('/user/isSms', data, 'get', true)
}

// 是否接受短信通知
export function getSms() {
  return http('/user/getUserToSms')
}

export function addRecruit(uid) {
  return http('/lh/userbyuser/addRecruit', { uid }, true)
}

// 下架
export function pulled(id) {
  return http('/lh/introrder/pulled', { id }, 'post', true)
}

// 获取验证码
export function getCode(phone) {
  return http('/user/getCode', { tel: phone })
}

// 个人用户获取邀请列表
export function getInvitionList() {
  return http('/lh/introrder/userByOrderToStatus')
}

// 招募
export function hire(params) {
  return http('/system/toOrder/updOrderToStatus', params, 'post', true)
}

// 获取prepay_id
export function getPrepayId (code) {
  return http('/weixinpay/Xiadan', { code }, 'post', true)
}

// 获取支付参数
export function getSign (id) {
  return http('/weixinpay/Sign', {repay_id: id}, 'post', true)
}
