var app = require('./app');


// Routes
var site = require('./site');


// Route Handlers
app.get('/', site.home);


// Start Server
var server = app.listen(3000);
