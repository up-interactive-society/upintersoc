'use strict';

const internals = {};

internals.serveStatic = {
  auth: false,
  handler: {
    directory: {
      path: CLIROOT+'/build',
      listing: false,
      index: true
    }
  }
};

exports.register = (plugin, options, next) => {

  plugin.route([
    { method: 'GET', path: '/{path*}', config: internals.serveStatic },
  ]);

  next();
};

exports.register.attributes = {
  name: 'static'
};
