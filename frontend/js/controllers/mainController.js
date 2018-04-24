app.controller('MainController', ['$scope', 'getBooks', '$http', function($scope, getBooks, $http){
	getBooks.success(function(data){
		$scope.listBooks = data;
	});

	//GET requst
	$scope.getData = function(){
		getBooks.success(function(data){
			$scope.listBooks = data;
		});
	};
	//Description modal
	$scope.descMore = false;
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
				$scope.getData();
			})
			.error(function(){
				console.log('Error');
			});
	};

	//PUT request
	$scope.changeData = function(id){
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
		$http.put('http://185.40.31.149:9999/books/'+ id, data, config)
			.success(function(data, header, config){
				console.log('Goood');
				$scope.getData();
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
				$scope.getData();
			})
			.error(function(){
				console.log('Error');
			});
	};
}]);