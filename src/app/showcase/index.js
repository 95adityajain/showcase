'use strict';

require('angular')
    .module('bookbottles.showcase', [
        /* 3rd Party */
        require('angular-ui-router'),

        /* Custom */
        require('../signup'),
        require('../dashboard')
    ])
    .config(require('./config'))
    .config(require('./route'))
    .factory('UserService', require('./services/UserService'));
