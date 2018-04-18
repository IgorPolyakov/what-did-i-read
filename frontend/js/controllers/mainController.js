app.controller('MainController', ['$scope', 'books', 'newBook' , function($scope, books, newBook){
	$scope.title = 'Hello'
	books.success(function(data){
		$scope.listBooks = data;
	});
	$scope.descMore = false;

	$scope.addBook = function(){
		newBook.addBookToDB($scope.book);
	}

}]);