'use strict';

/* App Module */

var helloWorldApp = angular.module('helloWorldApp', [
    'ngRoute',     
    'helloWorldControllers',
    'todoServices'
]);


helloWorldApp.config(['$routeProvider', '$locationProvider',
function($routeProvider, $locationProvider) {
    $routeProvider.
            when('/', {
                templateUrl: 'partials/main.html',
                controller: 'MainCtrl'
            }).when('/show', {
                templateUrl: 'partials/show.html',
                controller: 'ShowCtrl'
            });

    $locationProvider.html5Mode(false).hashPrefix('!');
}]);