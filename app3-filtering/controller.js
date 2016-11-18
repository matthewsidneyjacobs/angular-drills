angular.module('filterApp').controller('filterCtrl', function($scope, filterService) {
  
  $scope.data = filterService.getData();
})
