

var express = require("express");
var app = express();

app.set('view engine', 'ejs');
require('./app/routes.js')(app);
app.use( express.static( "img" ) );
app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});