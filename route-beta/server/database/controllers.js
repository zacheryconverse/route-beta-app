const { Item } = require('./index');

const selectAll = (callback) => {
  Item.find({}, (err, items) => {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

const addMove = (callback) => {
  Item.save({}, (err, items) => {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

module.exports = {
  addMove,
  selectAll,
};