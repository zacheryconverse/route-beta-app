const express = require('express');
// const cors = require('cors');
const path = require('path');

const app = express();

// app.use(cors());
app.use(express.json());

// app.use(express.static('public'));

app.use('/api/moves', require('../routes/api/moves'));
app.use('/api/users', require('../routes/api/users'));
app.use('/api/auth', require('../routes/api/auth'));

// Serve static assets of in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('build'));
  // Serve index.html for any unknown paths
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  });
}
// Heroku - environmental variable
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

// const router = express.Router();
// const { Item } = require('./database/index');
// const { selectAll, addMove } = require('./database/controllers');

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
