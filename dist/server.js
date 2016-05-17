'use strict';

var _board = require('./board');

var _board2 = _interopRequireDefault(_board);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var board = new _board2.default();
board.setup();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router = express.Router();

router.route('/message').post(function (req, res) {
    console.log('post: ', req.body);
    board.setMessage(req.body.message);
});

app.use('/api', router);
app.use('/', express.static('.'));

app.listen(port);
console.log('listening: ' + port);
