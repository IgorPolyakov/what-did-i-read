(function() {
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
        vm.sendData = function() {
            var data = $.param({
                book: {
                    title: vm.title,
                    url_cover: vm.url_cover,
                    progress: vm.progress,
                    description: vm.description
                }
            });

            var config = {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept': 'application/json'
                }
            };

            $http.post('http://185.40.31.149:9999/books', data, config)
                .success(function(data, headers, config) {
                    console.log('Goood');
                    $window.location.reload();
                })
                .error(function() {
                    console.log('Error');
                });
        }

        //PUT request
        vm.changeData = function(id) {
            var data = $.param({
                book: {
                    title: vm.ttl,
                    url_cover: vm.url_c,
                    progress: vm.prog,
                    description: vm.desc
                }
            });

            var config = {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept': 'application/json'
                }
            };

            $http.put('http://185.40.31.149:9999/books/' + id, data, config)
                .success(function(data, headers, config) {
                    console.log('Goood');
                    $window.location.reload();
                })
                .error(function() {
                    console.log('Error');
                });
        }

        //DELETE request
        vm.deleteData = function(id) {

            var config = {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept': 'application/json'
                }
            };

            $http.delete('http://185.40.31.149:9999/books/' + id, config)
                .success(function(config) {
                    console.log('Goood');
                    $window.location.reload();
                })
                .error(function() {
                    console.log('Error');
                });
        }

    }

})();
