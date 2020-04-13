var fs = require('fs')
var Transform = require('stream').Transform
var inherits = require('util').inherits

var read = fs.createReadStream('Lista.txt')
var write = fs.createWriteStream('NuevaLista.txt')

function nuevaLista () {
  Transform.call(this)
}
inherits(nuevaLista, Transform)

nuevaLista.prototype._transform = function (chunk, enc, done) {
  chunk = chunk.toString().split('\n').filter(function (lista) {
    return (lista != 'Pollo')
  }).join('\n')
  this.push(chunk)
  done()
}

read.pipe(new nuevaLista()).pipe(write)
