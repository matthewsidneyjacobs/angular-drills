angular.module('arrayApp').controller('arrayController', function($scope, arrayService) {
  //arrayService.something() using a factory instead of a service
    console.log(arrayService.getData());

    $scope.data = arrayService.getData();

    $scope.submitData = function(name, email, date, phone) {
      arrayService.addData($scope.newData);
    }


})
