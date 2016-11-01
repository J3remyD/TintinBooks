(function() {
  'use strict';

  angular.module('app').controller('HomeController', HomeController);

  function HomeController($mdToast) {
    var vm = this;
    vm.toast = $mdToast;

    $mdToast.show(
      $mdToast.simple()
        .textContent('Welcome to Tintin Library !'));

    this._init();
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

    HomeController.prototype.publish = function() {
      alert('test !!');
    }

    vm.selectedIndex += 1;
  };

  HomeController.$inject = ['$mdToast'];
})();
