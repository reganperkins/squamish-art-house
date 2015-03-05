function initialize() {
  var myLatlng = new google.maps.LatLng(49.697344, -123.135071);
  var mapCanvas = document.getElementById('map-canvas');
  var mapOptions = {
    center: new google.maps.LatLng(49.7017, -123.1588),
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(mapCanvas, mapOptions)

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Art House'
  });
}

google.maps.event.addDomListener(window, 'load', initialize);
