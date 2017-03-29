'use strict';

const
    bodyParser = require('body-parser'),
    config = require('config'),
    crypto = require('crypto'),
    express = require('express'),
    https = require('https'),
    request = require('request');

var app = express();
app.set('port', process.env.PORT || 5000);
app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get('/webhook', function (req, res) {
if (req.query['hub.verify_token'] === 'a_la_grande_le_puse_cuca') {
  res.send(req.query['hub.challenge']);
} else {
 res.send('Error, wrong validation token');
}
});



// Start server
// Webhooks must be available via SSL with a certificate signed by a valid
// certificate authority.
app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});

module.exports = app;