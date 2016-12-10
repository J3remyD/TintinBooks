(function() {
  'use strict';

  angular.module('app').controller('BookController', BookController);
  angular.module('app').controller('DialogController', DialogController);

  let favs = [];
  let dialog;

  function BookController($scope, $http, $mdDialog) {
   $http.get("http://localhost:3000/db").success(function(response) {
     $scope.books = response.books;
   }).error(function(data, status) {
  	  console.log(data);
   });

   $scope.status = '  ';
   dialog = $mdDialog;
  }

  BookController.prototype.info = function(id, ev) {
    dialog.id = id;
    dialog.show({
      controller: DialogController,
      templateUrl: 'popup.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: true
    }).then(function(answer) {
      console.log(answer);
    });
  };

  BookController.prototype.favorite = function(id) {
    const favoriteBtn = toggleFavoriteAnimation(id);
    favoriteBtn.addEventListener("transitionend", removeScale(id));
    handleFavs(favoriteBtn, id);
  };

  function removeScale(id) {
    setTimeout(() => {
      toggleFavoriteAnimation(id);
    }, 700);
  }

  function toggleFavoriteAnimation(id) {
    const favoriteBtn = document.getElementById("favBtn_"+id);
    const element = angular.element(favoriteBtn);
    element.toggleClass('animated');
    return favoriteBtn;
  }

  function handleFavs(favoriteBtn, id) {
    if(favs.includes(id)) {
      favs.splice(favs.indexOf(id), 1);
      favoriteBtn.children[0].style.color = '#03A9F4'; //retrieve material icon child and restore initial color
    } else {
      favs.push(id);
      favoriteBtn.children[0].style.color = 'red';
    }

    const scope = angular.element(favoriteBtn).scope();
    scope.$emit('favoriteUpdate', favs);
  }

  function DialogController($scope, $http, $mdDialog) {
    const spawnId = $mdDialog.id;
    $http.get("http://localhost:3000/popups/" + spawnId).success(function(response) {
      $http.get("http://localhost:3000/books/" + spawnId).success(function(response) {
        $scope.title = response.title;
      }).error(function(data, status) {
         console.log(data);
      });
      $scope.desc = response.desc;
      $scope.subtitle = response.subtitle;
      $scope.desc2 = response.desc2;
    }).error(function(data, status) {
       console.log(data);
    });

    $scope.hide = function() {
     $mdDialog.hide();
    };
    $scope.cancel = function() {
     $mdDialog.cancel();
    };

    $scope.close = function() {
     $mdDialog.hide();
    };
  }
})();
