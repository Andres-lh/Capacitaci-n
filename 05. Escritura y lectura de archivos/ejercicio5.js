const eventEmitter = require("events").EventEmitter;
const util = require("util");

var Automovil = function(){

}

util.inherits(Automovil, eventEmitter);

module.exports = Automovil;