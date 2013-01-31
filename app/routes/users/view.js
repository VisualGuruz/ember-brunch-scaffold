var App = require('app');

/**
 * Users View Route
 *
 * @namespace App
 * @extends {Ember.Route}
 */
App.UsersViewRoute = Em.Route.extend({
	/**
     * Overrides Ember's default model function.
     *
     * Temporarily doing this so we can successfully load
     * the view user page.  Not needed once you have real data.
     *
     * @param {Array} params An array of parameters provided in the URL
     * @override Ember.Route.model
     */
    model: function (params) {
        return Em.Object.create({
            id: params.user_id
        });
    }
});