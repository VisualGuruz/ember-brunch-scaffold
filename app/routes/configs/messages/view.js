var App = require('app');

/**
 * Messages View Route
 *
 * @namespace App
 * @extends {Ember.Route}
 */
App.MessagesViewRoute = Em.Route.extend({
	/**
     * Overrides Ember's default model function.
     *
     * Temporarily doing this so we can successfully load
     * the view message page.  Not needed once you have real data.
     *
     * @param {Array} params An array of parameters provided in the URL
     * @override Ember.Route.model
     */
    model: function (params) {
        return Em.Object.create({
            id: params.message_id
        });
    }
});