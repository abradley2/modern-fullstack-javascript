var app = require('./app.js');


// Routes
var site = require('./routes/site.js');


// Route Handlers
app.get('/', site.app);


// Start Server
var server = app.listen(3000);
