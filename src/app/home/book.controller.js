(function() {
  'use strict';

  angular.module('app').controller('BookController', BookController);

  let favs = [];

  function BookController($scope, $http) {
   $http.get("http://localhost:3000/db").success(function(response) {
     $scope.books = response.books;
   }).error(function(data, status) {
  	  console.log(data);
   });
  }

  BookController.prototype.info = function() {
    alert('info');
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
})();
