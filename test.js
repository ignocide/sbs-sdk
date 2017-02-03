var sdk = require('./')

var sbs = new sdk({
  key: 'your-api-key'
})

var callback = function (err, result) {
  console.log(err, result)
}

// test your cases

sbs.playlistList({}, callback)

sbs.playlistRead({}, callback)

sbs.channelList({}, callback)

sbs.channelSearch({}, callback)

sbs.channelRead({}, callback)

sbs.programList({}, callback)

sbs.programList({}, callback)

sbs.programSearch({}, callback)

sbs.programRead({}, callback)

sbs.programRead({}, callback)

sbs.episodeList({}, callback)

sbs.episodeSearch({}, callback)

sbs.episodeRead({}, callback)

sbs.curationList({}, callback)

sbs.curationSearch({}, callback)

sbs.curationRead({}, callback)

sbs.playlistList({}, callback)

sbs.playlistSearch({}, callback)

sbs.playlistRead({}, callback)

sbs.onlineMngList({}, callback)
