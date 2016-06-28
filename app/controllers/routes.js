
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
    app.get('/suckhoe/food-new', function(req, res) {
        res.render('food-new.ejs');
    });
    app.get('/suckhoe/food-most', function(req, res) {
        res.render('food-most.ejs');
    });
    app.get('/suckhoe/health-new', function(req, res) {
        res.render('health-new.ejs');
    });
    app.get('/suckhoe/health-most', function(req, res) {
        res.render('health-most.ejs');
    });
    app.get('/suckhoe/cddd-new', function(req, res) {
        res.render('cddd-new.ejs');
    });
    app.get('/suckhoe/cddd-most', function(req, res) {
        res.render('cddd-most.ejs');
    });
    app.get('/lichkham/lichsukham', function(req, res) {
        res.render('lichsukham.ejs');
    });
    app.get('/lichkham/themlichmoi', function(req, res) {
        res.render('themlichmoi.ejs');
    });
    app.get('/phongkham/goiyphong', function(req, res) {
        res.render('goiyphong.ejs');
    });
    app.get('/phongkham/lichsuphong', function(req, res) {
        res.render('lichsuphong.ejs');
    });

}