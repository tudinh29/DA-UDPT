// config/auth.js

module.exports = {

    'facebookAuth' : {
        'clientID'        : '163017377427263', 
        'clientSecret'    : 'f33431192c2a72d753df25d2bcf0d659', 
        'callbackURL'     : 'https://chat-bt2.herokuapp.com/auth/facebook/callback'
    },

    'googleAuth' : {
        'clientID'         : 'your-secret-clientID-here',
        'clientSecret'     : 'your-client-secret-here',
        'callbackURL'      : 'http://localhost:8080/auth/google/callback'
    }

};