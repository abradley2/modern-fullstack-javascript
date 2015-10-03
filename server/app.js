var express         = require('express'),
    bodyParser      = require('body-parser'),
    clientSession   = require('client-sessions');

var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/../public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(clientSessions({
  cookieName: 'MySession',
  secret: 'MySecret',
  duration: 24 * 60 * 60 * 1000
}))
