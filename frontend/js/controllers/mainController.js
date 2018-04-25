app.controller('MainController', ['$scope', 'getBooks', '$http', '$window', function($scope, getBooks, $http, $window){
	
	//GET requst
	getBooks.success(function(data){
		$scope.listBooks = data;
	});

	//Modal forms
	$scope.delMode = false;
	$scope.changeMod = false;

	//POST request
	$scope.sendData = function(){
		var data = $.param(
			{
				books: {
			title: $scope.title,
			url_cover: $scope.url_cover,
			progress: $scope.progress,
			description: $scope.description}
		}
		);

		var config = {
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				'Accept': 'application/json'
			}
		};
		$http.post('http://185.40.31.149:9999/books', data, config)
			.success(function(data, headers, config){
				console.log('Goood');
				$window.location.reload();
			})
			.error(function(){
				console.log('Error');
			});
	};

	//PUT request
	$scope.changeData = function(id, ttl, cvr, prg, desc){
		var data = $.param(
			{
				books: {
			title: ttl,
			url_cover: cvr,
			progress: prg,
			description: desc}
		}
		);

		var config = {
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				'Accept': 'application/json'
			}
		};
		$http.put('http://185.40.31.149:9999/books/'+ id, data, config)
			.success(function(data, header, config){
				console.log('Goood');
				$window.location.reload();
			})
			.error(function(){
				console.log('Error');
			});
	};

	//DELETE request
	$scope.deleteData = function(id){
		var config = {
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				'Accept': 'application/json'
			}
		};
		$http.delete('http://185.40.31.149:9999/books/'+id, config)
			.success(function(header, config){
				console.log('Goood');
				$window.location.reload();
			})
			.error(function(){
				console.log('Error');
			});
	};
}]);