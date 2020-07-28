const mongoose = require('mongoose');

const { Schema } = mongoose;

const URI = require('../../config/keys').mongoURI;

// mongoose.connect('mongodb://localhost/beta', {
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
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
  date: {
    type: Date,
    default: Date.now,
  },
});

const Item = mongoose.model('Item', ItemSchema);

module.exports = {
  Item,
};
