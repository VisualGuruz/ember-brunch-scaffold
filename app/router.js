var App = require('app');

App.Router = Em.Router.extend({
    enableLogging: true
});

/**
 * Stores all routing maps to be loaded later
 * @type {Array}
 */
App.routerMaps = [];

/**
 * Allow for adding routes elsewhere.
 */
App.Router.map(function(match) {
    App.routerMaps.forEach(function(item) {
        item(match);
    });
});