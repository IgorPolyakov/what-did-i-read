(function () {
    'use strict';

    angular
        .module('app')
        .controller('Home.IndexController', Controller);

    function Controller($http, $window) {
        var vm = this;

        initController();

        function initController() {
            $http.get('http://185.40.31.149:9999/books.json') 
            .success(function(data) { 
              vm.listBooks = data;
            }) 
            .error(function(err) { 
              return err; 
            });
        }

        //POST request
        function sendData(){
            var data = $.param(
            {
                books: {
            title: vm.title,
            url_cover: vm.url_cover,
            progress: vm.progress,
            description: vm.description}
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

        }
    }

})();