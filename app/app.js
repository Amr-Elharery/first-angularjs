var myFirstApp = angular.module("myFirstApp", []);

// myFirstApp.config(function () {});

// myFirstApp.run(function () {});

// myFirstApp.controller(function () {});

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
      },
      {
        name: "Mido",
        money: 17,
        available: true,
        belt: "green",
      },
      {
        name: "Ziad",
        money: 22,
        available: true,
        belt: "black",
      },
      {
        name: "Ahmed",
        money: 21,
        available: true,
        belt: "yellow",
      },
    ];
  },
]);
