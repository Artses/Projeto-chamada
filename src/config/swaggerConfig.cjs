const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'BFP',
        description: 'API do sistema de controle de chamada'
    },
    host: 'localhost:3000'
};

const outputFile = './swagger_autogen.json'
const routes = ['../server.js'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc);