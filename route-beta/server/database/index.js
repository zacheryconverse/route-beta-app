const mongoose = require('mongoose');

const { Schema } = mongoose;

mongoose.connect('mongodb://localhost/beta', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', () => {
  console.log('mongoose connection error');
});

db.once('open', () => {
  console.log('mongoose connected successfully');
});

const ItemSchema = new Schema({
  moveId: Number,
  id: Number,
  name: String,
});

const Item = mongoose.model('Item', ItemSchema);

module.exports = {
  Item,
};
