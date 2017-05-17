(function () {
    'use strict';

    var app = angular.module('ep.formly.themes.templates', []);

    app.run(['formlyConfig', function (formlyConfig) {
        formlyConfig.setWrapper([{
            name: 'errorValidator',
            template: [
                '<formly-transclude></formly-transclude>',
                '<div ng-messages="fc.$error">',
                '<p ng-message="minlength">Your {{to.label}} is too short.</p>',
                '<p ng-message="maxlength">Your {{to.label}} is too long.</p>',
                '<p ng-message="required">Your {{to.label}} is required.</p>',
                '</div>'
            ].join(' ')
        }]);
        formlyConfig.setType({
            name: 'ep-text',
            templateUrl: 'material/app/templates/ep-text/ep-text-template.html',
            controller: ['$scope', function ($scope) {
                var control = $scope.fc;
            }],
            defaultOptions: {
                templateOptions: {
                    labelType: 'inline'
                }
            },
            wrapper: ['errorValidator']
        });
    }]);
})();