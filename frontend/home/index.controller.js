(function() {
    'use strict';

    angular
        .module('app')
        .controller('Home.IndexController', Controller);

    function Controller($http) {
        var vm = this;
        initController();

        function initController() {
          getBooks();
        }

        function getBooks() {
            $http.get('https://inread.online/api/books')
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

            $http.post('https://inread.online/api/books', data, config)
                .success(function(data, headers, config) {
                    console.log('Goood');
                    clearInputs()
                    getBooks();
                    $('#exampleModalCenter').modal('hide')
                })
                .error(function() {
                    console.log('Error');
                });
        }

        //Clear inputs in the Creating form
        function clearInputs(){
          vm.title = '';
          vm.url_cover = '';
          vm.progress = '';
          vm.description = '';
        }

        //assign vars to update
        vm.prepareInputs = function(id){
          for(var i in vm.listBooks){
            if (vm.listBooks[i]._id.$oid == id) {
              vm.currentBook= {
                title: vm.listBooks[i].title,
                url_cover: vm.listBooks[i].url_cover,
                progress: vm.listBooks[i].progress,
                description: vm.listBooks[i].description
              }
              console.log(vm.currentBook);
            };
          };
        };

        //PUT request
        vm.changeData = function(id) {
            var book = vm.currentBook;
            var data = $.param({
              book
            });
            var config = {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept': 'application/json'
                }
            };

            $http.put('https://inread.online/api/books/' + id, data, config)
                .success(function(data, headers, config) {
                    console.log('Goood');
                    getBooks();
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

            $http.delete('https://inread.online/api/books/' + id, config)
                .success(function(config) {
                    console.log('Goood');
                    getBooks();
                })
                .error(function() {
                    console.log('Error');
                });
        }

    }

})();
