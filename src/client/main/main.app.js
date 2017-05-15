(function () {
    'use strict';

    angular.module('main', [
        /* Vendor modules */
        'ngRoute',
        'ngResource',
        'ngMaterial',
        'ngSanitize',
        'formly',
        'md.chips.select',
        'ngTable',
        'ui.bootstrap',
        'trNgGrid',

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