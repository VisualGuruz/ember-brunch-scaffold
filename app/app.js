// Application bootstrapper

module.exports = function() {
	var App = Em.Application.create();

	App.deferReadiness();
	return App;
}();