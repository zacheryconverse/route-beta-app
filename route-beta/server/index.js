const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const items = require('./database/index.js');

const app = express();

app.use(express.static(__dirname + '/../react-client/dist'));

router.get('/items', (req, res) => {
  res.json([
    {id: 1, username: 'somebody'},
    {id: 2, username: 'somebody-else'}
  ]);
});

// app.get('/items', function (req, res) {
//   items.find(function(err, data) {
//     if(err) {
//       res.sendStatus(500);
//     } else {
//       res.json(data);
//     }
//   });
// });

app.listen(3002, function() {
  console.log('listening on port 3002');
});
