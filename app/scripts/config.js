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
        controller: 'DetailsCtrl'
      })
      //each booking will need an id for payment
      .state('booking', {
        // url:'/booking/{id}',
        url:'squamish-house/booking',
        templateUrl: 'Booking/booking.html',
        controller: 'BookingCtrl'
      })
      //will payment need its own id? maybe for confirmation?
      .state('squamish-house.payment', {
        url:'/payment/{id}',
        templateUrl: 'Payment/payment.html',
        controller: 'PaymentCtrl'
      });

      $urlRouterProvider.otherwise('squamish-house');

    }
  ]);
