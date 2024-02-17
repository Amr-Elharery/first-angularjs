var myFirstApp = angular.module("myFirstApp", ["ngRoute", "ngAnimate"]);

myFirstApp.config([
  "$routeProvider",
  function ($routeProvider) {
    $routeProvider
      .when("/home", {
        templateUrl: "../views/home.html",
        controller: "NamesController",
      })
      .when("/directory", {
        templateUrl: "../views/directory.html",
        controller: "NamesController",
      })
      .when("/directory/:id", {
        templateUrl: "../views/name.html",
        controller: "NameController",
      })
      .when("/contact", {
        templateUrl: "../views/contact.html",
      })
      .otherwise({
        redirectTo: "/home",
      });
  },
]);

myFirstApp.directive("randomName", [
  function () {
    return {
      restrict: "E",
      scope: {
        names: "=",
        title: "=",
      },
      templateUrl: "../views/random.html",
      transclude: true, // to take children wrapped in custom directive
      replace: true, // to replace tag to parent tag in template
      controller: function ($scope) {
        $scope.random = Math.floor(Math.random() * 4);
      },
    };
  },
]);

myFirstApp.controller("NamesController", [
  "$scope",
  "$http",
  function ($scope, $http) {
    $scope.message = "Hey all, from controller";

    $scope.removeName = function (name) {
      let removedNameI = $scope.names.indexOf(name);

      $scope.names.splice(removedNameI, 1);
    };

    $scope.addName = function () {
      console.log($scope.newName);

      $scope.names.push({
        name: $scope.newName.name,
        money: parseInt($scope.newName.money),
        belt: $scope.newName.belt,
        available: $scope.newName.available,
      });

      $scope.newName.name = "";
      $scope.newName.money = "";
      $scope.newName.belt = "";

      console.log($scope.newName.available);
    };

    $scope.isLoading = true;
    $http.get("../data/names.json").then(function ({ data }) {
      $scope.names = data;
      $scope.isLoading = false;
    });

    $scope.removeAll = function () {
      $scope.names = [];
    };
  },
]);

myFirstApp.controller("NameController", [
  "$scope",
  "$routeParams",
  "$http",
  function ($scope, $routeParams, $http) {
    $scope.params = $routeParams;

    $scope.isLoading = true;
    $http.get("../data/names.json").then(function ({ data }) {
      $scope.name = data.find((e) => e.id == $scope.params.id);

      $scope.isLoading = false;
    });
  },
]);
