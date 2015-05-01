(function() {

    angular.module('conectan2.controllers', [])
        .controller('mainCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {
            $scope.myVar = "Hello Angular";
        }]);

})();