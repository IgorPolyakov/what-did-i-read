<template>
  <section class="login fill-viewport teal darken-2 valign-wrapper ng-scope">
    <div class="container">
      <div class="row">
        <div class="col s12">
          <div class="center-align">
            <img src="img/logo_white_small.png" class="login-logo" alt="">
            <form class="col s12 ng-valid ng-valid-email ng-dirty ng-valid-parse" ng-submit="vm.login()">
              <div class="row eml">
                <div class="input-field col s12 m4 offset-m4">
                  <input id="email" class="validate ng-valid ng-valid-email ng-touched ng-not-empty ng-dirty valid" ng-model="vm.email" type="email">
                  <label for="email" class="active">Email</label>
                  <span class="helper-text" data-error="wrong" data-success="right"></span>
                </div>
              </div>
              <div class="row pass">
                <div class="input-field col s12 m4 offset-m4">
                  <input id="password" class="validate ng-valid ng-touched ng-not-empty ng-dirty ng-valid-parse valid" ng-model="vm.password" type="password">
                  <label for="password" class="active">Password</label>
                </div>
              </div>
              <div class="row">
                <div class="col s12 m4 offset-m4">
                  <input class="waves-effect waves-light btn teal darken-3 sub" value="Login" type="submit">
                </div>
              </div>
            </form><br>
            <a href="#/signup" class="to-signup">Newbie?</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
