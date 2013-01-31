window.App = require('app');

require('router');
require('routes');

/**
 * Application Bootstrap and Initialization
 *
 * If we need to add any custom application setup, let's do that here
 */

require('templates');
require('controllers');
require('views');
require('models');

App.advanceReadiness();