app.factory('newBook', ['$http', function($http) { 
	var fac = {};
   	fac.addBookToDB = function(book){
		$http.post('http://185.40.31.149:9999/books', book)
		.success(function(result){
			console.log('Success! yopt')
		})
		.error(function(result){
			console.log('Error blya')
		});
	}
	return fac;
}]);
