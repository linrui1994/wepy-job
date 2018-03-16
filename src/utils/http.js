let pending = 0

class Http {
  constructor () {
    this._config = {
      count: 5,
      baseUrl: '/',
    }
    this.beforeHooks = []
    this.afterHooks = []
  }
  config (c) {
    this._config = Object.assign(this._config, c)
  }
  get (url, data) {

  }
  post (url, data) {

  }
  
}

function ensureUrl(base, url) {
  if (url.indexOf(base) > -1) {
    return
  }
  base = base.replace(/\/$/, '')
  if (url.indexOf('/') !== 0) {
    url = '/' + url
  }
  return base + url
}

function baseRequest (url) {
  return new Promise((resolve, reject) => {
    wx.request({

    })
  })
}

export default new Http()