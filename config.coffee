fs   = require 'fs'
sysPath = require 'path'

startsWith = (string, substring) ->
  string.lastIndexOf(substring, 0) is 0

exports.config =

  files:
    javascripts:
      defaultExtension: 'js',
      joinTo:
        'js/app.js': /^app/
        'js/vendor.js': /^vendor/

      order:
        before: [
          'vendor/scripts/console-helper.js',
          'vendor/scripts/jquery.js',
          'vendor/scripts/modernizr.custom.js',
          'vendor/scripts/handlebars.js',
          'vendor/scripts/ember.js',
          'vendor/scripts/bootstrap.js'
        ]

    stylesheets:
      defaultExtension: 'less'
      joinTo:
        'css/app.css': /^app/
        'css/vendor.css': /^vendor/
      order:
        before: [
          'vendor/styles/bootstrap.css',
          'vendor/styles/bootstrap-responsive.css'
        ]

    templates:
      precompile: true
      root: 'templates/'
      defaultExtension: 'hbs'
      joinTo: 'js/app.js' : /^app/

  conventions:
    ignored: (path) ->
      # extend default ignored check to exclude files starting with '_' located within a 'templates' directory
      # adds support for using ember handlebars {{partial}} helper
      startsWith(sysPath.basename(path), '_') and sysPath.dirname(path).indexOf('templates') < 0


  plugins:
    uglify:
      mangle_options:
        mangle: true
    jshint:
      pattern: /^app\/.*\.js$/
      options:
        bitwise: true
        curly: true
        debug: true
      globals:
        jQuery: true

  server:
    port: 3333
    base: '/'
    run: no
