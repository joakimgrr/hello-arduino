const express = require('express');
const app = express();
const bodyParser = require('body-parser');

import Board from './board';

let board = new Board();
board.setup();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

const port = process.env.PORT || 8080;

const router = express.Router();

router.route('/message').post((req, res) => {
    console.log('post: ', req.body);
    board.setMessage(req.body.message);
})

app.use('/api', router);
app.use('/', express.static('.'));

app.listen(port);
console.log('listening: ' + port);
