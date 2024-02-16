var myFirstApp = angular.module("myFirstApp", ["ngRoute"]);

myFirstApp.config([
  "$routeProvider",
  function ($routeProvider) {
    $routeProvider
      .when("/home", {
        templateUrl: "../views/home.html",
      })
      .when("/directory", {
        templateUrl: "../views/directory.html",
        controller: "NamesController",
      })
      .otherwise({
        redirectTo: "/home",
      });
  },
]);

myFirstApp.controller("NamesController", [
  "$scope",
  function ($scope) {
    $scope.message = "Hey all, from controller";

    // $scope.names = ["Amr", "Mido", "Ahmed"];

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

    $scope.names = [
      {
        name: "Amr",
        money: 20,
        available: false,
        belt: "red",
        thumb: `content/img/amr.jpg`,
      },
      {
        name: "Mido",
        money: 17,
        available: true,
        belt: "green",
        thumb: `content/img/mido.jpg`,
      },
      {
        name: "Body",
        money: 22,
        available: true,
        belt: "black",
        thumb: `content/img/body.jpg`,
      },
      {
        name: "Boda",
        money: 21,
        available: true,
        belt: "yellow",
        thumb: `content/img/body.jpg`,
      },
    ];
  },
]);
