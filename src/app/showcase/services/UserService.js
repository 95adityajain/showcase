'use strict';

module.exports = UserService;

/**
 * @ngInject
 */
function UserService() {
    /**
     * maintains data about user loggedIn/signUp status
     * @type {Object}
     */
    var state = {
      isUserLoggedIn: false,
      isUserSignedUp: false,
      users: {}
    };

    var UserService = {
        create: create,
        login: login,
        logout: logout,
        isUserLoggedIn: isUserLoggedIn,
        isUsernameValid: isUsernameValid
    };

    return UserService;

    /**
     * creates user by saving username in map, so, that username is not available for another signup
     * also sets flag
     * @param  {string} username
     * @param  {string} password
     */
    function create(username, password) {
      state.users[username] = password;
      state.isUserSignedUp = true;
    }

    /**
     * log in user by comparing with harcoded username and password
     * also sets flag
     * @param  {string} username
     * @param  {string} password
     */
    function login(username, password) {
      if(username === 'bookbottles' && password === 'showcase'){
        state.isUserLoggedIn = true;
        return true;
      }
      return false;
    }

    /**
     * logout user by clearing flags.
     */
    function logout() {
      state.isUserLoggedIn = false;
      state.isUserSignedUp = false;
    }

    function isUserLoggedIn() {
      return state.isUserLoggedIn || state.isUserSignedUp;
    }

    /**
     * checks whether, the specified username is already used in previous signup
     * @param  {string} username
     */
    function isUsernameValid(username) {
      if(!username || (username && state.users[username])) {
        return false;
      }
      return true;
    }
}

