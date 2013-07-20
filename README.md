# file-size-tree [![unstable](https://rawgithub.com/hughsk/stability-badges/master/dist/unstable.svg)](http://github.com/hughsk/stability-badges) #

Take a list of file paths in Node, and get back an object matching d3's
[hierarchy layout](https://github.com/mbostock/d3/wiki/Hierarchy-Layout)
format. Great for making easy
[treemaps](http://bl.ocks.org/mbostock/4063582) and the like.

## Installation ##

``` bash
npm install file-size-tree
```

## Usage ##

### `require('file-size-tree')(files)` ###

Takes an array of filenames and returns an object in d3's hierarchy layout
format. For example, this:

``` javascript
var fileTree = require('file-size-tree')

fileTree([
    __dirname + '/project/src/index.js'
  , __dirname + '/project/src/README.md'
  , __dirname + '/project/src/package.json'
  , __dirname + '/LICENSE'
])
```

Should result in this:

``` json
[{
 "name": "project",
 "children": [
  {
   "name": "src",
   "children": [
    {"name": "index.js", "size": 3938},
    {"name": "README.md", "size": 3812},
    {"name": "package.json", "size": 743}
   ]
  }
 ]
}, {
 "name": "LICENSE",
 "size": 526
}]
```
