(function () {
    'use strict';

    angular
        .module('app')
        .controller('Signup.IndexController', Controller);

    function Controller($http, $location, AuthenticationService) {
        var vm = this;

        vm.signup = signup;
        initController();

        function initController() {
            // reset login status
            AuthenticationService.Logout();
        };

        function signup(){
          var data = $.param({
              user: {
                  email: vm.email,
                  password: vm.password
              }
          });
          var config = {
              headers: {
                  'Content-Type': 'application/x-www-form-urlencoded',
                  'Accept': 'application/json'
              }
          };
          $http.post('http://159.65.115.107:9999/users', data, config)
              .success(function(data, headers, config) {
                  login();
              })
              .error(function() {
                  alert('SignUp Error');
              });


        }

        function login() {
          var email = vm.email;
          var password = vm.password;
            AuthenticationService.Login(email, password, function (result) {
                if (result === true) {
                    $location.path('/');
                    alert('Welcome!');
                } else {
                    alert('Login Error!');
                }
            });
        };
    }

})();
