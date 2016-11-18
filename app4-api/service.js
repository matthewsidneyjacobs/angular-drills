angular.module('cardApp').factory('cardService', function($http, $q){


    var getCards = function() {
      var dfd = $q.defer();
      $http.get('https://deckofcardsapi.com/api/deck/new/draw/?count=52').then(function(data) {
        dfd.resolve(data);
      })
      return dfd.promise;
    }
//if you are using angualr, $q is not something you will end up using a lot. since $http uses $q you can probably get by with just $http
      return {
        getCards: getCards
        // function() {
        //   return $http.get('https://deckofcardsapi.com/api/deck/new/draw/?count=52');
        // }


      }


})
