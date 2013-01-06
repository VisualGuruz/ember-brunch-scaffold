var App = require('app');

App.UserModel = Em.Object.extend({

    firstName : null,
    lastName  : null,
    lyrics    : null,

    fullName: function(){
        return this.get('firstName') + ' ' + this.get('lastName');
    }.property('firstName', 'lastName')

});