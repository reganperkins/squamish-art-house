angular.module('squawsomeApp')
  .controller('BookingCtrl', function(){
    this.booking = {
      // checkin,
      // checkout,
      // guests,
      // nights,
      cost: function(){
        if (this.nights < 7) {
          cost = 145;
        } else if (this.nights >= 7 && this.nights <= 29){
          cost = 135;
        } else if (this.nights >= 29){
          cost = 120;
        }
      },
      pretotal: this.nights * this.cost,
      tax: 0,
      total: this.pretotal + this.tax

    };
  });
