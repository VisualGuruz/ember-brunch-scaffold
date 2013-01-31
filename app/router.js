var App = require('app');

Em.Router.reopen({
    location: Modernizr.history ? 'history' : 'hash'
});

/**
 * Default route that the router transisitons to while data is
 * loading for a particular route.
 *
 * @namespace App
 * @extends {Ember.Route}
 */
App.LoadingRoute = Em.Route.extend({
});

/**
 * Maps all URLs to a valid route.
 * NOTE: All 'index' routes are created automagically.
 *
 * @namespace App.Router
 * @method map
 */
App.Router.map( function ( match ) {
    this.resource('users', function () {
        this.route('create');
        this.route('view', {path: 'view/:user_id'});
    });
    this.resource('configs', function () {
        this.resource('messages', function () {
            this.route('create');
            this.route('view', {path: 'view/:message_id'});
        });
    });
});