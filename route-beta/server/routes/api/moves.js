const express = require('express');

const router = express.Router();

const { Item } = require('../../database/index');

router.get('/', (req, res) => {
  Item.find()
    .then((moves) => res.json(moves));
});

router.post('/', (req, res) => {
  const newMove = new Item({
    moveId: req.body.moveId,
    move: req.body.move,
  });

  newMove
    .save()
    .then((move) => res.json(move));
});

router.delete('/:id', (req, res) => {
  Item.findById(req.params.id)
    .then((move) => move.remove().then(() => res.json({
      success: true,
    })))
    .catch(() => res.status(404).json({
      success: false,
    }));
});

// app.get('/', (req, res) => {
//   selectAll((err, data) => {
//     if (err) {
//       res.sendStatus(500);
//     } else {
//       res.json(data);
//     }
//   });
// });

// router.route('/:id').get((req, res) => {
//   const { id } = req.params;
//   Item.findById(id, (err, move) => {
//     res.json(move);
//   });
// });

// app.get('/items', (req, res) => {
//   selectAll((err, data) => {
//     if (err) {
//       res.sendStatus(500);
//     } else {
//       res.json(data);
//     }
//   });
// });

// app.post('/moves', async (req, res) => {
//   const { move_id, move_description } = req.body;
//   const move = { move_id, move_description };
//   const saveMove = await addMove(move);
//   try {
//     res.status(201).json({ saveMove });
//   } catch (e) {
//     res.status(400).send('adding new move failed');
//   }
// });

module.exports = router;
