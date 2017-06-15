'use strict';

module.exports = DashboardCtrl;

/**
 * @ngInject
 */
function DashboardCtrl(FixtureService, UserService, $state) {
    var vm = this;

    vm.fixtures = [];
    if(!UserService.isUserLoggedIn()) {
      $state.go('login');
    }

    vm.logout = function() {
      UserService.logout();
      $state.go('login');
    };

    FixtureService.get(function(data) {
      vm.fixtures = data;
    });
}

