angular.module('threeQuestions')
.controller('commentCtrl', function ($scope, $http) {
	$scope.comments = [];
	$scope.addComment = function(cmt){
    $http({
      method: "POST",
      url: "/comment",
      data: cmt
    }).then(function(res){
      $scope.getComments();
    })
	};
  $scope.getComments = function(){
    $http({
      method: "GET",
      url: "/comment"
    }).then(function(res){
      console.log(res.data)
      $scope.comments = res.data;
    })
  };
  $scope.getComments();
});
