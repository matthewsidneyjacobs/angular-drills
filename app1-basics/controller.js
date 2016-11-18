angular.module('appOne').controller('mainCtrl', function($scope) {


  $scope.test = 'name'
  // $scope.message = 'change me for 2 way binding'
  //this is just to show 2 way binding- if you put something on the scope here, it is going to show up on the view. or, if you update the view it will update the scope (you wont see changes here but the scope is changing)



  $scope.alert = function(text) {
    console.log(text);
  }
})
