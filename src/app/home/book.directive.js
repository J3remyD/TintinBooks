(function() {
  'use strict';

  angular.module('app').directive('book', book);

  function book() {
    return {
      restrict: 'E',
      templateUrl: 'app/home/book.html',
      controller: 'BookController',
      controllerAs: 'booky'
    };
  }
})();
