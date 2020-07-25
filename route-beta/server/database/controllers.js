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

const selectOne = (callback) => {
  Item.findById({}, (err, items) => {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

const addMove = (callback) => {
  let move = new Item(req.body);
  move.save()
    .then((move) => {
      res.status(201).json({'move': 'move added successfully'});
    })
    .catch((err) => {
      res.status(400).send('adding new move failed');
    });
};

module.exports = {
  addMove,
  selectAll,
  selectOne,
};