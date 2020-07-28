const express = require('express');

const router = express.Router();

const { Item } = require('../../models/Item');

router.get('/', (req, res) => {
  Item.find()
    // .sort({ moveId: -1 })
    .then((moves) => res.json(moves));
});

router.post('/', (req, res) => {
  const newMove = new Item({
    moveId: req.body.moveId,
    id: req.body.id,
    name: req.body.name,
  });

  newMove.save().then((move) => res.json(move));
});

router.delete('/:id', (req, res) => {
  Item.findById(req.params.id)
    .then((move) =>
      move.remove().then(() =>
        res.json({
          success: true,
        })
      )
    )
    .catch(() =>
      res.status(404).json({
        success: false,
      })
    );
});

module.exports = router;

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
