app.controller('MainController', ['$scope', 'books', '$http', function($scope, books, $http){
	$scope.title = 'Hello'
	books.success(function(data){
		$scope.listBooks = data;
	});
	$scope.descMore = false;

	$scope.addBook = function(book){
		$http.post('http://185.40.31.149/', book)
		.success(function(result){
			console.log('Success! yopt')
		})
		.error(function(result){
			console.log('Error blya')
		});
	}

}]);