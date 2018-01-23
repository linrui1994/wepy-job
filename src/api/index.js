import {http} from '../utils/index.js'
import {AppId, AppSecret} from '../config/index.js'

export function getAllOrder (offset = 0, limit = 10) {
  return http('/lh/introrder/list', {
    limit,
    offset
  })
}

export function getOrder (id) {
  return http(`/lh/order/selOrderById/${id}`)
}

export function getOpenid (code) {
  return http('/weixinpay/GetOpenId', {
    code,
    appID: AppId,
    secret: AppSecret
  }, 'post')
}

export function getResume () {
  return http('/lh/resume/selResumeByUser')
}

export function applyOrder (oid) {
  return http('/lh/order/applyOrder', { oid })
}

export function getAllOrderPersonaly () {
  return http('/lh/introrder/userByOrder')
}

export function getAllRecruit () {
  return http('/lh/userbyuser/selMyRecruit')
}

export function wxGetUserInfo () {
  return new Promise((resolve, reject) => {
    wx.getUserInfo({
      success: resolve,
      fail: reject
    })
  })
}

export function checkSession () {
  return new Promise((resolve, reject) => {
    wx.checkSession({
      success: resolve,
      fail: reject
    })
  })
}

export function wxLogin () {
  return new Promise((resolve, reject) => {
    wx.login({
      success: resolve,
      fail: reject
    })
  })
}
