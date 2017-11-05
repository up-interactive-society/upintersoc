
const manifest = {
  connections: [
    {
      port: process.env.PORT || 1337,
      routes: {
        cors: true
      },
      router: {
        stripTrailingSlash: true
      }
    }
  ],
  registrations: [
    {
      plugin: 'hapi-auth-jwt2'
    },
    {
      plugin: 'inert'
    },
    {
      plugin: './static'
    },
    {
      plugin: './auth'
    },
    {
      plugin: './api',
      options: { routes: { prefix: '/api' } }
    },
  ]
};

module.exports = manifest;
