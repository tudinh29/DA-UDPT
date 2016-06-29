var User = require('./models/user.js');
var dateformat = require ('dateformat');

var multer  =   require('multer');
var storage =   multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './app/uploads/');
  },
  filename: function (req, file, callback) {
    callback(null, req.user.account.email);
  }
});
var upload = multer({ storage : storage}).single('userPhoto');

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

    app.get('/phongkham', isLoggedIn, function(req, res) {
        res.render('phongkham.ejs',{
        user : req.user
        });
    });
    app.get('/suckhoe', isLoggedIn, function(req, res) {
        res.render('cssk.ejs',{
        user : req.user
        });
    });
    app.get('/suckhoe/food-new', isLoggedIn, function(req, res) {
        res.render('food-new.ejs',{
        user : req.user
        });
    });
    app.get('/suckhoe/food-most', isLoggedIn, function(req, res) {
        res.render('food-most.ejs',{
        user : req.user
        });
    });
    app.get('/suckhoe/health-new', isLoggedIn, function(req, res) {
        res.render('health-new.ejs',{
        user : req.user
        });
    });
    app.get('/suckhoe/health-most', isLoggedIn, function(req, res) {
        res.render('health-most.ejs',{
        user : req.user
        });
    });
    app.get('/suckhoe/cddd-new', isLoggedIn, function(req, res) {
        res.render('cddd-new.ejs',{
        user : req.user
        });
    });
    app.get('/suckhoe/cddd-most', isLoggedIn, function(req, res) {
        res.render('cddd-most',{
        user : req.user
        });
    });
    app.get('/lichkham/lichsukham', isLoggedIn, function(req, res) {
        res.render('lichsukham.ejs',{
        user : req.user
        });
    });
    app.get('/profile', isLoggedIn, function(req, res) {
        res.render('profile.ejs',{
        user : req.user
        });
    });
    app.get('/profile/capnhat', isLoggedIn, function(req, res) {
        res.render('capnhat.ejs',{
        user : req.user
        });
    });
    app.get('/lichkham/themlichmoi', isLoggedIn, function(req, res) {
        res.render('themlichmoi.ejs',{
        user : req.user
        });
    });
    app.get('/phongkham/goiyphong', isLoggedIn, function(req, res) {
        res.render('goiyphong.ejs',{
        user : req.user
        });
    });
    app.get('/phongkham/lichsuphong', isLoggedIn, function(req, res) {
        res.render('lichsuphong.ejs',{
        user : req.user
        });
    });

     app.get('/lichsukham', function(req, res){
            res.json(req.user.history_visit);
        });

     app.post('/lichkham/themlichmoi',function(req, res){
         var isodate = new Date(req.param('ngaykham'));
         isodate = dateformat(isodate, "isoDateTime");

        User.update({'account.email' : req.user.account.email}, {$push:{"history_visit":{"place":req.param('noikham'),"date" :isodate, "info": req.param('textmess') }}}, function(err, result){
         if(err) {
            return res.end("Error");
        }
        res.redirect('lichsukham');
        });
    });
     app.post('/profile/capnhat',function(req, res){
        var temp =  new Date(req.param('dop'));
        var date = new Date(temp.setMonth(temp.getMonth() + 9));
        User.update({'account.email' : req.user.account.email},{$set:{"infomation.name":req.param('fullname'),"infomation.dob":req.param('dob'),"infomation.address":req.param('address'),"infomation.phonenumber":req.param('phone'),"infomation.dop":req.param('dop'), "infomation.predict":date}},function(err, result){
            if(err){
                console.log(err);
                return res.end("error");
            }
        });
         res.redirect('/profile');
    });

     app.post('/api/photo',function(req,res){
        
    upload(req,res,function(err) {
        if(err) {
            console.log(err);
            return res.end("Error uploading file.");
        }
        var temp =  './/uploads//' + req.user.account.email;
        User.update({'account.email' : req.user.account.email}, {$set:{"infomation.avatar":temp}},function(err, result){
            if(err){
                res.end("error");
                }
            });
            res.end("File is uploaded");
        });
    });
// facebook -------------------------------

        // send to facebook to do the authentication
        app.get('/auth/facebook', passport.authenticate('facebook', { scope : 'email' }));

        // handle the callback after facebook has authenticated the user
        app.get('/auth/facebook/callback',
            passport.authenticate('facebook', {
                successRedirect : '/lichkham',
                failureRedirect : '/'
            }));
        // send to facebook to do the authentication
        app.get('/connect/facebook', passport.authorize('facebook', { scope : 'email' }));

        // handle the callback after facebook has authorized the user
        app.get('/connect/facebook/callback',
            passport.authorize('facebook', {
                successRedirect : '/lichkham',
                failureRedirect : '/'
            }));
        app.get('/unlink/facebook', isLoggedIn, function(req, res) {
        var user            = req.user;
        user.facebook.token = undefined;
        user.save(function(err) {
            res.redirect('/lichkham');
        });
    });


}

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/');
}