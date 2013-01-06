fs   = require 'fs'
path = require 'path'

exports.config = 

  paths:
    public: '.'

  conventions:
    ignored: /^node_modules/

  files: 
    javascripts: 
      defaultExtension: 'js',
      joinTo: 
        'js/app.js': /^app/
        'js/vendor.js': /^vendor/

      order: 
        before: [
          'vendor/scripts/console-helper.js',
          'vendor/scripts/jquery-1.8.3.js',
          'vendor/scripts/modernizr.custom.js',
          'vendor/scripts/handlebars-1.0.rc.1.js',
          'vendor/scripts/ember.js',
          'vendor/scripts/bootstrap.js'
        ]

    stylesheets:
      defaultExtension: 'less'
      joinTo:
        'css/app.css': /^app/,
        'css/vendor.css': /^vendor/
      order:
        before: [
          'vendor/styles/bootstrap.less',
          'vendor/styles/bootstrap-responsive.less'
        ]

    templates:
      precompile: true
      defaultExtension: 'hbs'
      joinTo: 'js/app.js' : /^app/

  plugins:
    uglify:
      mangle_options:
        mangle: true

  jshint:
    pattern: /^app\/.*\.js$/
    options:
      bitwise: true
      curly: true
    globals:
      jQuery: true

  server:
    port: 3333
    base: '/'
    run: no

