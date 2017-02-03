'use strict'

const request = require('./request')
const paths = require('./paths')
const common = require('./common')

var SDK = function (opt) {
  this.request = new request(opt.key)
}

SDK.prototype.channelList = function (data, callback) {
  var path = paths.broadcast.channel.list
  data = common.rarefy(data, ['ch_id', 'ch_nm', 'odrg_no', 'ch_use_yn', 'ch_div'])

  this.request.get(path, data, callback)
}

SDK.prototype.channelSearch = function (data, callback) {
  var path = paths.broadcast.channel.search
  data = common.rarefy(data, ['ch_id', 'ch_nm', 'ch_use_yn', 'ch_div'])

  this.request.get(path, data, callback)
}

SDK.prototype.channelRead = function (data, callback) {
  var path = paths.broadcast.channel.read
  data = common.rarefy(data, ['ch_id'])

  this.request.get(path, data, callback)
}

SDK.prototype.programList = function (data, callback) {
  var path = paths.broadcast.program.list
  data = common.rarefy(data, ['ch_id', 'brad_st_date', 'bred_fns_date'])

  this.request.get(path, data, callback)
}

SDK.prototype.programSearch = function (data, callback) {
  var path = paths.broadcast.program.search
  data = common.rarefy(data, ['pgm_title'])

  this.request.get(path, data, callback)
}

SDK.prototype.programRead = function (data, callback) {
  var path = paths.broadcast.program.read
  data = common.rarefy(data, ['pgm_id'])

  this.request.get(path, data, callback)
}

SDK.prototype.episodeList = function (data, callback) {
  var path = paths.broadcast.episode.list
  data = common.rarefy(data, ['pgm_id'])

  this.request.get(path, data, callback)
}

SDK.prototype.episodeSearch = function (data, callback) {
  var path = paths.broadcast.episode.search
  data = common.rarefy(data, ['search_keyword', 'brad_st_day', 'brad_fns_day'])

  this.request.get(path, data, callback)
}

SDK.prototype.episodeRead = function (data, callback) {
  var path = paths.broadcast.episode.read
  data = common.rarefy(data, ['pgm_tms_id'])

  this.request.get(path, data, callback)
}

SDK.prototype.curationList = function (data, callback) {
  var path = paths.curation.curation.list
  data = common.rarefy(data, ['pgm_tms_id'])

  this.request.get(path, data, callback)
}

SDK.prototype.curationSearch = function (data, callback) {
  var path = paths.curation.curation.search
  data = common.rarefy(data, ['cura_title', 'cura_sbst', 'pgm_title', 'ch_id', 'stgry_seq'])

  this.request.get(path, data, callback)
}

SDK.prototype.curationRead = function (data, callback) {
  var path = paths.curation.curation.read
  data = common.rarefy(data, ['cura_seq'])

  this.request.get(path, data, callback)
}

SDK.prototype.playlistList = function (data, callback) {
  var path = paths.curation.playlist.list
  data = common.rarefy(data, [])

  this.request.get(path, data, callback)
}

SDK.prototype.playlistSearch = function (data, callback) {
  var path = paths.curation.playlist.search
  data = common.rarefy(data, ['playlist_title', 'ctgry_seq'])

  this.request.get(path, data, callback)
}

SDK.prototype.playlistRead = function (data, callback) {
  var path = paths.curation.playlist.read
  data = common.rarefy(data, ['playlist_seq'])

  this.request.get(path, data, callback)
}

SDK.prototype.onlineMngList = function (data, callback) {
  var path = paths.contents.online_mng.list
  data = common.rarefy(data, ['conts_id', 'title', 'svc_wdstr_yn', 'image_file_path', 'online_desc', 'ch_id'])

  this.request.get(path, data, callback)
}

module.exports = SDK
