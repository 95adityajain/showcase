'use strict';

module.exports = SignUpCtrl;

/**
 * @ngInject
 */
function SignUpCtrl(UserService, $state) {
    var vm = this;

    if(UserService.isUserLoggedIn()) {
      $state.go('dashboard');
    }

    vm.loginState = {
      username: '',
      password: '',
      error: false
    };

    vm.signupState = {
      username: '',
      password: '',
      passwordAgain: ''
    };

    vm.signUp = function() {
      UserService.create(vm.signupState.username, vm.signupState.password);
      $state.go('dashboard');
    };

    vm.doesPasswordMatch = function() {
      if(vm.signupState.password === vm.signupState.passwordAgain) {
        return true;
      }
      return false;
    };

    vm.isValidUsername = function() {
      return UserService.isUsernameValid(vm.signupState.username);
    };

    vm.login = function() {
      var isValid = UserService.login(vm.loginState.username, vm.loginState.password);

      if(!isValid) {
        vm.loginState.error = true;
      } else {
        $state.go('dashboard');
      }
    };
}

