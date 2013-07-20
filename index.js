var commondir =  require('commondir')
var path = require('path')
var flat = require('flat')
var fs = require('fs')

module.exports = tree

function tree(filenames) {
  filenames = filenames.map(resolve)

  var top = commondir(filenames)
  var dirs = {}

  var object = filenames.reduce(function(memo, name) {
    var key = path.relative(top, name)
    memo[key] = fs.statSync(name).size
    return memo
  }, {})

  object = flat.unflatten(object, { delimiter: '/' })
  object = reformat(object)

  return object
}

function reformat(object) {
  if (typeof object !== 'object') return object

  var entries = []
  var result
  var entry
  for (var key in object) {
    entry = reformat(object[key])
    if (typeof entry === 'number') {
      entries.push({ name: key, size: entry })
    } else {
      entries.push({ name: key, children: entry })
    }
  }

  return entries
}

function resolve(file) {
  return path.resolve(file)
}
