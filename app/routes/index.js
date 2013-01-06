var App = require('app');

App.routerMaps.pushObject(function(match) {
	match('').to('index');
	match('/').to('index');
});

App.IndexRoute = Em.Route.extend({
	renderTemplates: function () {
		this.render();
	}
});