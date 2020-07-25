const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/beta', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

const itemSchema = mongoose.Schema({
  move_number: Number,
  move_description: String
});

const Item = mongoose.model('Item', itemSchema);

module.exports.selectAll = {
  Item,
};