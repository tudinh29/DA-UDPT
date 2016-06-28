

var express = require("express");
var app = express();

app.use(express.static(__dirname + 'public')); //setup static public directory

app.set('views', __dirname + '/app/views');
app.set('view engine', 'ejs');
require('./app/controllers/routes.js')(app);
app.use( express.static( "img" ) );
app.use( express.static( "public" ) );


app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});