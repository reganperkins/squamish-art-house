'use strict';

/**
 * @ngdoc function
 * @name squawsomeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the squawsomeApp
 */
angular.module('squawsomeApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
