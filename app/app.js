module.exports = function () {
    var App = Em.Application.create({
        Mixins: Em.Object.create(),

        // use only in dev
        LOG_TRANSITIONS: false
    });

    App.deferReadiness();
    return App;
}();