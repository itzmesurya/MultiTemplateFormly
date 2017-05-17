(function() {
    'use strict';

    angular
        .module('ep.formly.themes.directives')
        .directive('epText', epText);

    epText.$inject = [];
    function epText() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            controller: EpTextController,
            controllerAs: 'vm',
            link: link,
            restrict: 'A',
            scope: {
            }
        };
        return directive;
        
        function link(scope, element, attrs) {
        }
    }
    /* @ngInject */
    function EpTextController () {
        
    }
})();