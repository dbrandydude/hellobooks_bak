(function(routeConfig) {

    'use strict';

    routeConfig.init = function(app) {

        // *** routes *** //
        const routes = require('../routes/index');
        const api = require('../routes/api');

        // *** register routes *** //
        app.use('/', routes);
        app.use('/api', api);

    };

})(module.exports);
