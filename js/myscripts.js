function initMap() {
  // The location of the Greed
  var keeper = {lat: 33.774786, lng: -117.866527};
  // The map, centered at the Greed
  var map = new google.maps.Map(document.getElementById('map'), {zoom: 4, center: keeper});
  var greed = {
    url: "../ext_content/greedmarker.jpg",
    scaledSize: new google.maps.Size(64,64)
  }
  // The marker, positioned at the Greed
  var marker = new google.maps.Marker({
    position: keeper,
    map: map,
    icon: greed
  });
}