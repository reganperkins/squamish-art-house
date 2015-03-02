'use strict';

/**
 * @ngdoc function
 * @name squawsomeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the squawsomeApp
 */
angular.module('squawsomeApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
