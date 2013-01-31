var App = require('app');

/**
 * Application Route
 *
 * @namespace App
 * @extends {Ember.Route}
 */
App.ApplicationRoute = Em.Route.extend({

    /**
     * Renders the application template
     *
     * @method renderTemplate
     * @param  {Ember.Controller} controller Application Controller
     * @param  {Ember.Object} model Application Model (if it exists)
     */
    renderTemplate: function (controller, model) {
        this.render();
    }
});