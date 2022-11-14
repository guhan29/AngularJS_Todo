'use strict';

/* Controllers */

var helloWorldControllers = angular.module('helloWorldControllers', []);

helloWorldControllers.controller('MainCtrl', ['$scope', '$location', 'TodoService',
    function MainCtrl($scope, $location, TodoService) {
        $scope.message = "Hello World";
        $scope.todos = [];
        $scope.currTodo = '';

        TodoService.get({}, 
            function success(res) {
                $scope.todos = res;
                console.log("Success: " + JSON.stringify(res));
            }, function error(err) {
                console.log("Error: " +  JSON.stringify(err));
            });

        $scope.updateTodo = function(key) {
            var updateData = $scope.todos[key];
            updateData.isCompleted = !updateData.isCompleted;

            TodoService.update({}, 
                updateData,
                function success(res) {
                    $scope.todos[key] = res;
                }, function error(err) {
                    console.log(err);
                });
        }

        $scope.addTodo = function() {
            let postData = { todo: $scope.currTodo };
            if ($scope.currTodo !== '') {
                TodoService.save({}, 
                    postData,
                    function success(res) {
                        $scope.todos.push(res);
                        $scope.currTodo = '';
                    }, function error(err) {
                        console.log(error);
                    });
            }
        }
    }]);

helloWorldControllers.controller('ShowCtrl', ['$scope', '$location', '$http',
    function ShowCtrl($scope, $location, $http) {
        $scope.message = "Show The World";
    }]);