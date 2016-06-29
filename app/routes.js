var User = require('./models/user.js');

module.exports = function(app, passport) {
	// HOMEPAGE
    app.get('/', function(req, res) {
        res.render('index.ejs');
    });
    // PAGE LICHKHAM
    app.get('/lichkham', isLoggedIn, function(req, res) {
        res.render('lichkham.ejs', {
            user : req.user
        });
    });
    // LOGOUT ==============================
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });
    // LOGIN =======================
    app.get('/login', function(req, res) {
        res.render('login.ejs', { message: req.flash('loginMessage') });
    });
    app.post('/login', passport.authenticate('local-login', {
            successRedirect : '/lichkham', // redirect to the secure profile section
            failureRedirect : '/login', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
    }));
    // SIGNUP ========================
    app.get('/signup', function(req, res) {
        res.render('signup.ejs', { message: req.flash('signupMessage') });
    });
    app.post('/signup', passport.authenticate('local-signup', {
            successRedirect : '/lichkham', // redirect to the secure profile section
            failureRedirect : '/signup', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
        }));

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