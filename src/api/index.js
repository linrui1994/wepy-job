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

export function getJobList(params) {
  params.limit = params.limit || 10
  return http('/lh/introrder/list', params)
}

export function getJob(id) {
  return http(`/lh/order/selOrderById/${id}`)
}

export function getOrder(id) {
  return http(`/lh/order/selOrderByUser/${id}`)
}

export function getOpenid(code) {
  return http(
    '/weixinpay/GetOpenId',
    {
      code,
      appID: AppId,
      secret: AppSecret
    },
    'post'
  )
}

export function getResume() {
  return http('/lh/resume/selResumeByUser')
}

export function applyOrder(oid) {
  return http('/lh/order/applyOrder', { oid }, 'post')
}

export function getAllOrderPersonaly() {
  return http('/lh/introrder/userByOrder')
}

export function getAllRecruit() {
  return http('/lh/userbyuser/selMyRecruit')
}

export function starJob(id) {
  return http('/lh/order/start', { id })
}

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

export function starOrder(oid) {
  return http('/lh/order/collectOrder', { oid })
}

export function getJobListPersonally() {
  return http('/lh/introrder/web/list')
}

export function publishJob(data) {
  return http('/lh/introrder/web/save', data, 'post')
}

export function updateResume(data) {
  return http('/lh/resume/web/save', data, 'post')
}

export function getStarList() {
  return http('/lh/introrder/userByCollectOrder')
}
