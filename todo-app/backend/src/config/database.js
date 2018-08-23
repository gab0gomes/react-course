const mongoose = require('mongoose');

mongoose.Promise = global.Promise; //Faz o mongoose utilizar as promises do node

module.exports = mongoose.connect('mongodb://localhost/todo');