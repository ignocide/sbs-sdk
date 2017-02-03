
var common = {}

common.rarefy = function (data, keys) {
  var neat = {}
  for (var i in keys) {
    var key = keys[i]
    if (data[key] != undefined) {
      neat[key] = data[key]
    }
  }

  neat.page = !isNaN(data.page) ? data.page : 1
  neat.page_size = !isNaN(data.page_size) ? data.page_size : 10

  return neat
}

common.require = function (data, keys, callback) {
  for (var i in keys) {
    var key = keys[i]
    if (data[key] == undefined) {
      return key
    }
  }

  return null
}

module.exports = common
