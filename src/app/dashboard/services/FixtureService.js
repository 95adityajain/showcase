'use strict';

module.exports = FixutureService;

/**
 * @ngInject
 * Gets Football fixtures data from api.football-data.org
 */
function FixutureService($http) {
    /**
     * HTTP request config object
     * @type {Object}
     */
    var options = {
      method: 'get',
      headers: {
        'X-AUTH-TOKEN': '55913a83abd5464582135f522a501cde',
        'X-Response-Control': 'minified'
      },
      url: 'http://api.football-data.org/v1/competitions/398/fixtures?matchday=8'
    };

    /**
     * maintains cache of service data
     * @type {Object}
     */
    var state = {
      data: null
    };
    
    var FixtureService = {
      get: get
    };

    return FixtureService;

    /**
     * return fixtures data either from network or from cache
     * @param  {function} successCallback
     */
    function get(successCallback) {
      if(!state.data) {
        getDataFromNetwork(successCallback);
      } else {
        successCallback(state.data);
      }
    }

    function getDataFromNetwork(cb) {
      $http(options)
      .then(function(response){
        state.data = response.data.fixtures;
        cb(state.data);
      }, function(error) {
        console.log(error);
      });
    }
}

