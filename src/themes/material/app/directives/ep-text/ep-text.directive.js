(function () {
    'use strict';

    angular
        .module('ep.formly.themes.directives')
        .directive('epText', epText);

    function epText() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            templateUrl: 'material/app/directives/ep-text/ep-text.html',
            bindToController: true,
            controller: EpTextController,
            controllerAs: 'vm',
            link: link,
            restrict: 'EA',
            scope: {
                options:'=',
                modelVal:'='
            }
        };
        return directive;

        function link(scope, element, attrs) {}
    }
    /* @ngInject */
    EpTextController.$inject = ['$scope'];

    function EpTextController($scope) {

    }
})();