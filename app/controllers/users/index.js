var App = require('app');

/**
 * Users Index Controller
 *
 * @namespace App
 * @extends {Ember.ArrayController}
 */
App.UsersIndexController = Em.ArrayController.extend({
    /**
     * Temporary object used to help load a test version of the
     * UsersView View.
     *
     * @type {Ember.Object}
     */
    user: Em.Object.create({
        id: 1234
    })
});