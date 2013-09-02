module.exports = function () {
    var App = Em.Application.create({
        // use only in dev
        LOG_TRANSITIONS: false
    });

    App.deferReadiness();
    return App;
}();