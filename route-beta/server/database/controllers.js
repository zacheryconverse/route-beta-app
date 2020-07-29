// const { Item } = require('./index');

// const selectAll = (callback) => {
//   Item.find({}, (err, items) => {
//     if (err) {
//       callback(err, null);
//     } else {
//       callback(null, items);
//     }
//   });
// };

// const selectOne = (callback) => {
//   Item.findById({}, (err, items) => {
//     if (err) {
//       callback(err, null);
//     } else {
//       callback(null, items);
//     }
//   });
// };

// const addMove = (moveObject) => {
//   const newMove = new Item(moveObject);
//   return newMove
//     .save()
//     .then((data) => data)
//     .catch((e) => console.error(e));
// };

// module.exports = {
//   addMove,
//   selectAll,
//   selectOne,
// };
