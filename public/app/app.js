(function () {
    var app = angular.module('conectan2', ['ngResource',
        'ngRoute',
        'conectan2.controllers'
    ]);

    app.config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {templateUrl: '/partials/main', controller: 'mainCtrl'});

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

    });
})();
