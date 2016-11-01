(function() {
  'use strict';

  angular.module('app').controller('BookController', BookController);

  function BookController($scope, $http) {
    $http.get("http://localhost:3000/db")
   .success(function(response) {
     $scope.books = response.books;
   })
   .error(function(data, status) {
  	  console.log(data);
    });
  }

  BookController.prototype.info = function() {
    alert('info');
  };

  BookController.prototype.favorite = function() {
    alert('favorite');
  };

  BookController.prototype.settings = function() {
    alert('settings');
  };
})();
