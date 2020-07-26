const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const moves = require('./routes/api/moves');

const router = express.Router();
const { Item } = require('./database/index');
const { selectAll, addMove } = require('./database/controllers');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(express.static('public'));

const port = process.env.PORT || 3001;

// router.get('/items', (req, res) => {
//   res.json([
//     {id: 1, username: 'somebody'},
//     {id: 2, username: 'somebody-else'}
//   ]);
// });

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

app.use('/api/moves', moves);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});