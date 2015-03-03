'use strict';

angular.module('squawsomeApp')
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider){
      $stateProvider
      .state('squamish-house', {
        url: '/squamish-house',
        templateUrl: 'MainPage/squamishHouse.html',
        controller: 'MainCtrl',
      })
      //each booking will need an id for payment
      .state('squamish-house.booking', {
        // url:'/booking/{id}',
        url:'/booking',
        templateUrl: 'Booking/booking.html',
        controller: 'BookingCtrl'
      })
      //will payment need its own id? maybe for confirmation?
      .state('squamish-house.payment', {
        url:'/payment/{id}',
        templateUrl: 'Payment/payment.html',
        controller: 'PaymentCtrl'
      })

      $urlRouterProvider.otherwise('squamish-house');

    }
  ]);
