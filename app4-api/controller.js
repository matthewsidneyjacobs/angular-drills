angular.module('cardApp').controller('cardCtrl', function($scope, cardService) {
  $scope.test = "test"


  // console.log(cardService.getCards())
  cardService.getCards()
    .then(function(response){
      console.log(response.data.cards);

      $scope.cards= response.data.cards;
  })
   .catch(function(err){
    console.log(err);
  })
})
