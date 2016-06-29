// config/auth.js

module.exports = {

    'facebookAuth' : {
        'clientID'        : '1059150390801575', 
        'clientSecret'    : '04d1c40a33e1dea2a7dfa889d9969224', 
        'callbackURL'     : 'https://pregnant-udpt-doan.herokuapp.com/auth/facebook/callback'
    },

    'googleAuth' : {
        'clientID'         : 'your-secret-clientID-here',
        'clientSecret'     : 'your-client-secret-here',
        'callbackURL'      : 'http://localhost:8080/auth/google/callback'
    }

};