'use strict';

module.exports = FixtureDisplayDirective;

/**
 * @ngInject
 * Directive for display football fixtures as table
 */
function FixtureDisplayDirective() {
    return {
        restrict: 'E',
        template: require('../templates/fixturedisplay.tpl.jade'),
        bindToController: true,
        controller: 'DashboardCtrl as vm'
    };
}

