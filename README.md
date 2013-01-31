# Ember Brunch Scaffold Project

This is an all-inclusive baseline scaffolding setup to get up and running very quickly with an Ember application.  It runs off of [Brunch](http://brunch.io/) to help maintain separation of code and prevent you from having one long ass `app.js` file.  Hope you find it useful!

NOTE: this is currently a work-in-progress.  All the basics of routing work.  We plan on adding more features relatively soon that will demonstrate how to handle advanced features such as:
- Authentication Management
- Reusing a global modal throughout the application to present messages to the user

## Dependencies
In case you completely overlooked the title (classic Phil), this application is built with [Brunch](http://brunch.io/).  It is the only dependency needed (assuming you have node.js & npm installed), and therefore must be installed to build this application.
  
    npm install -g brunch

## Setup Process
After Brunch is installed, run these commands in your terminal to get started...

1. `npm install`
2. `brunch watch --server`

Navigate to http://localhost:3333.  Happy Embering!

## License
This project is released under the MIT License (see LICENSE for details).
