import { isMobile as isPhone } from 'lv-util'
import { baseUrl } from '../config/index.js'

export function formatPhone(phone) {
  if (isPhone(phone)) {
    console.log(
      phone.slice(0, 3) + ' ' + phone.slice(3, 7) + ' ' + phone.slice(7, 11)
    )
    return (
      phone.slice(0, 3) + ' ' + phone.slice(3, 7) + ' ' + phone.slice(7, 11)
    )
  } else {
    return phone
  }
}

export function ensureUrl(base, url) {
  base = base.replace(/\/$/, '')
  if (url.indexOf('/') !== 0) {
    url = '/' + url
  }
  return base + url
}

export function http(url, params = {}, method = 'get', toast = false) {
  params = JSON.parse(JSON.stringify(params))
  url = ensureUrl(baseUrl, url)
  Object.keys(params).forEach(key => {
    if (params[key] === null) {
      params[key] = ''
    } else if (typeof params[key] === 'object') {
      params[key] = JSON.stringify(params[key])
    }
  })
  return new Promise((resolve, reject) => {
    wx.request({
      url,
      method,
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        Cookie: 'JSESSIONID=' + wx.getStorageSync('sessionid')
      },
      data: params,
      success: res => {
        const data = res.data
        if (toast && data.msg) {
          if (data.code === 0) {
            // success
            wx.showToast({
              icon: 'success',
              title: data.msg
            })
          } else {
            wx.showToast({
              icon: 'none',
              // image: '../assets/error.png',
              title: data.msg
            })
          }
        }
        resolve(data)
      },
      fail: res => {
        wx.showToast({
          image: '../assets/error.png',
          title: '未知错误'
        })
        reject(res)
      }
    })
  })
}
