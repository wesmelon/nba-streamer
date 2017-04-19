angular.module('post', [
  'ngMaterial',
]).
directive('postCard', ['$http', '$sce', function($http, $sce) {
  return {
    restrict: 'E',
    scope: {
      post: '=',
    },
    link: function(scope, element, attrs) {
      if (scope.post.domain === 'streamable.com') {
        $http({
          method: 'GET',
          url: 'https://api.streamable.com/oembed.json?url=' + scope.post.url,
        }).then(function success(response) {
          console.log(response);
          scope.embed = $sce.trustAsHtml(response.data.html);
        }, function error(response) {
          console.log(response);
        });
      }

      scope.show = true;
    },
    templateUrl: 'post.html',
  };
}]);
