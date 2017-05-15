(function () {
    'use strict';

    angular.module('main', [
        /* Vendor modules */
        'ngRoute',
        'ngMaterial',
        'formly',

        /*Custom modules */
        'demo',
        'directives'
    ]);

    var mainApp = angular.module('main');

    mainApp.config(function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'demo/demo.html',
            controller: 'demoController as dc'
        });
        $routeProvider.when('/demo', {
            templateUrl: 'demo/demo.html',
            controller: 'demoController as dc'
        });
    });

    mainApp.config(function (formlyConfigProvider) {

    });

})();