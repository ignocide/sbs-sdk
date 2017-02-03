'use strict'

const qs = require('querystring')
const request = require('request')

var REQUEST = function (apiKey) {
  this.baseUrl = 'http://openapi.sbs.co.kr/api'
  this.apikey = apiKey
}

REQUEST.prototype.get = function (url, data, callback) {
  var self = this
  data.apikey = this.apikey
  var opt = {
    url: self.baseUrl + url,
    qs: data
  }
  request.get(opt, function (err, res, body) {
    try {
      if (res.statusCode == 404) {
        err = 'Not Found'
        body = null
      }
      else if (!err) body = JSON.parse(body)
    }
    catch (e) {
      err = err ? err : e
      body = null
    }
    callback(err, body)
  })
}

REQUEST.prototype.post = function (url, data, callback) {
  var self = this
  data.apikey = this.apikey
  var opt = {
    url: self.baseUrl + url,
    headers: {
      'Content-type': 'application/json'
    },
    json: data
  }
  request.post(opt, function (err, res, body) {
    try {
      if (res.statusCode == 404) {
        err = 'Not Found'
        body = null
      }
      else if (!err) body = JSON.parse(body)
    }
    catch (e) {
      err = err ? err : e
      body = null
    }
    callback(err, body)
  })
}

module.exports = REQUEST
