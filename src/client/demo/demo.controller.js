
(function () {
    'use strict';

    angular
        .module('demo')
        .controller('demoController', demoController);

    demoController.$inject = ['$scope', '$log', '$q', '$timeout', '$sce', '$compile', '$mdDialog'];
    function demoController($scope, $log, $q, $timeout, $sce, $compile, $mdDialog) {
        $scope.name = 'demoController';
        //alert('Demo controller has been loaded!');
        var dc = this;
    }
})();