
module.exports = function(app, passport) {
	app.get('/', function(req, res) {
        res.render('index.ejs');
    });
    app.get('/dangnhap', function(req, res) {
        res.render('login.ejs');
    });
    app.get('/dangki', function(req, res) {
        res.render('signup.ejs');
    });
    app.get('/lichkham', function(req, res) {
        res.render('lichkham.ejs');
    });
    app.get('/phongkham', function(req, res) {
        res.render('phongkham.ejs');
    });
    app.get('/suckhoe', function(req, res) {
        res.render('cssk.ejs');
    });
}