
var express = require('express');
var bodyParser = require('body-parser');
var expressSession = require('express-session');
var mongoStore = require('connect-mongo')({session: expressSession});
var router = require('./routes');

// var app = express();

// app.use('/', express.static('./static'));


// Connect to MongoDB
var dbConn = require('./mongodb');

dbConn.getDBConnection(function(db) {

	  var app = express();
    app.use('/', express.static('./static'));

	  app.use(expressSession({
    secret: 'SECRET',
    cookie: {maxAge: 60000 * 15},
    store: new mongoStore({
      db: db,
      collection: 'sessions'
    })
  }));

  //app.use(express.bodyParser());
  app.use(bodyParser.urlencoded({  extended: true  }));

  app.use(bodyParser.json());
  

  router.handle_all(app);
  //require('./routes')(app);
  console.log("server listening to 3333");
  app.listen(3333);


});


