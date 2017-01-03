var app = angular.module('myApp',[]);

app.controller("firstController", function ($scope) {
    $scope.number = 10;
    $scope.input = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    $scope.output = "";
    $scope.toLowerCase = function () {
        $scope.output = $scope.input.toLowerCase();
    };
    $scope.toUpperCase = function () {
        $scope.output = $scope.input.toUpperCase();
    };
    $scope.reverse = function () {
        $scope.output = $scope.input.split("").reverse().join("");
    };
    $scope.toNewLine = function () {
        $scope.output = $scope.input.replace(/\s+/g, "\n")
    };
    $scope.getSubstring = function () {
        $scope.output = $scope.input.substr(0,$scope.number);
    };

})