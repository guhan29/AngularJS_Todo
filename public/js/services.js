'use strict';

var todoServices = angular.module('todoServices', ['ngResource']);

todoServices.factory('TodoService', ['$resource', 
function($resource) {
    return $resource('/api/todo', {}, {
        get: { method: 'GET', cache: false, isArray: true },
        save: { method: 'POST', cache: false, isArray: false },
        update: { method: 'PUT', cache: false, isArray: false }
    });
}]);
