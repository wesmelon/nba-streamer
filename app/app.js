angular.module('app', [
  'ngMaterial',
  'post',
]).
controller('testCtrl', ['$scope', '$http', function($scope, $http) {
  $http({
    method: 'GET',
    url: 'https://www.reddit.com/r/nba/hot.json?limit=100'
  }).then(function success(response) {
    $scope.results = response.data.data.children;
    console.log($scope.results);
  }, function error(response) {
    console.log(response);
  });

  $scope.name = 'Wes';
}]);
