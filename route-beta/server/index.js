const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = express.Router();
const { Item } =require('./index');
const { selectAll, addMove } = require('./database/controllers');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/moves', router);

// app.use(express.static(__dirname + '/../react-client/dist'));
app.use(express.static('public'));

// router.get('/items', (req, res) => {
//   res.json([
//     {id: 1, username: 'somebody'},
//     {id: 2, username: 'somebody-else'}
//   ]);
// });

app.get('/', (req, res) => {
  selectAll((err, data) => {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

router.route('/:id').get((req, res) => {
  let id = req.params.id;
  Item.findById(id, (err, move) => {
    res.json(move);
  });
});

app.get('/items', (req, res) => {
  selectAll((err, data) => {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.post('/moves', (req, res) => {
  addMove((err, data) => {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.listen(3001, function() {
  console.log('listening on port 3001');
});
