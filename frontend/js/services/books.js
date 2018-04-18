app.factory('books', ['$http', function($http) { 
  return $http.get('http://185.40.31.149:9999/books.json') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);
