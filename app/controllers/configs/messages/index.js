var App = require('app');

/**
 * Messages Index Controller
 *
 * @namespace App
 * @extends {Ember.ArrayController}
 */
App.MessagesIndexController = Em.ArrayController.extend({
	/**
     * Temporary object used to help load a test version of the
     * MessagesView View.
     *
     * @type {Ember.Object}
     */
    message: Em.Object.create({
        id: 1234
    })
});