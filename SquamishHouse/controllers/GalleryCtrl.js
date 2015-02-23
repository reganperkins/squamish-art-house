angular.module('squamishApp')
  .controller('GalleryCtrl', function($scope){

    $scope.bricks = [
      {src: 'images/living-fireplace.jpg'},
      {src: 'images/kitchen.jpg'},
      {src: 'images/living-room.jpg'},
      {src: 'images/livingroom.jpg'},
      {src: 'images/mstr-bathroom.jpg'},
      {src: 'images/mstr-bed.jpg'},
      {src: 'images/mstr-bedroom.jpg'},
      {src: 'images/mstr-shower.jpg'},
      {src: 'images/mstr-tub.jpg'},
      {src: 'images/sauna.jpg'}
    ];
    
  });

