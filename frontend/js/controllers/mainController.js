app.controller('MainController', ['$scope', 'books', function($scope, books){
	$scope.title = 'Hello'
	books.success(function(data){
		$scope.listBooks = data;
	});
}]);