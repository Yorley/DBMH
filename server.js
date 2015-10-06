var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

app.set('json spaces', 2);

var router = express.Router();
var ctrl = require('./controller.js');

/* Llamadas al API */
router.route('/')
    .get(ctrl.test);

router.route('/getByDate/min/:min/max/:max')
    //.(ctrl.getRecordsByDate)

/* inicio de url */
app.use('/', router);

/* inicio del server */
app.listen(3000, function() {
  console.log('Listening on port 3000...');
});