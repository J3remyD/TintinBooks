(function() {
  'use strict';

  angular.module('app').controller('HomeController', HomeController).constant('_', window._);

  function HomeController($scope, $mdToast) {
    var vm = this;
    vm.toast = $mdToast;

    $mdToast.show(
      $mdToast.simple()
        .textContent('Welcome to Tintin Library !'));

    this._init();

    $scope.$on('favoriteUpdate', function(event, favs) {
      let books = event.currentScope.books;
      event.currentScope.books = _.filter(books, function(book) {
        return favs.includes(book.id);
      });
  //    $scope.books =
     });
  }

  HomeController.prototype._init = function() {
    this.pageReady = true;
  };

  HomeController.prototype.next = function(isValid) {
    var vm = this;
    if (!isValid) {
      vm.toast.show(
        vm.toast.simple()
          .textContent('You must fill all the required information first.')
          .hideDelay(0));

      return;
    }

    HomeController.prototype.checkResult = function() {
      alert('checkQuizzResult !!');
    }
    vm.selectedIndex += 1;
  };

  HomeController.$inject = ['$scope', '$mdToast'];
})();
