import {isMobile as isPhone} from 'lv-util'
import {baseUrl} from '../config/index.js'

export function formatPhone (phone) {
  if (isPhone(phone)) {
    console.log(phone.slice(0, 3) + ' ' + phone.slice(3, 7) + ' ' + phone.slice(7, 11))
    return phone.slice(0, 3) + ' ' + phone.slice(3, 7) + ' ' + phone.slice(7, 11)
  } else {
    return phone
  }
}

export function ensureUrl (base, url) {
  base = base.replace(/\/$/, '')
  if (url.indexOf('/') !== 0) {
    url = '/' + url
  }
  return base + url
}

export function http (url, params = {}, method = 'get') {
  url = ensureUrl(baseUrl, url)
  return new Promise((resolve, reject) => {
    wx.request({
      url,
      method,
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'Cookie': 'JSESSIONID=' + wx.getStorageSync('sessionid')
      },
      data: params,
      success: res => {
        if (res.statusCode < 400) {
          if (res.data.code === 500) {
            reject(res)
          } else {
            resolve(res.data)
          }
        } else {
          reject(res)
        }
      },
      fail: reject
    })
  })
}
