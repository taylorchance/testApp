var app = angular.module("shomiMovieList", []); 
app.controller("myCtrl", function($scope, $http) {

  // making the service call to get the json.. need to be running local server
  $http.get("feed[1][1].json").then(function (response) {
    console.log(response.data.Data)
    $scope.movies = response.data.Data;

    // make pagination vars once you have the json loaded
    $scope.currentPage = 0;
    $scope.pageSize = 10;
    $scope.numberOfPages = Math.ceil($scope.movies.length / $scope.pageSize);
  });

  // mouse over function to show meta data for each movie
  $scope.hover = function(x) {
    return x.showMeta = ! x.showMeta;
  }

  // making array for pagination buttons
  $scope.paginationArray = function(num) {
    return new Array(num); 
  }

});


// Custom Directives //
app.filter('startFrom', function() {
  return function(input, start) {
    if (input && start != NaN) {
      start = +start; //parse to int
      return input.slice(start);
    }
  }
});

app.filter('secondsToDateTime', function() {
  return function(seconds) {
    return new Date(1970, 0, 1).setSeconds(seconds);
  };
});



