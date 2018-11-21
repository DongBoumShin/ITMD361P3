var marker;
function initMap() {
  // The location of the Greed
  var keeper = {lat: 33.774786, lng: -117.866527};
  // The map, centered at the Greed
  var map = new google.maps.Map(document.getElementById('map'), {zoom: 4, center: keeper});
  var greed = '../ext_content/greedmarker.jpg'
  // The marker, positioned at the Greed
  marker = new google.maps.Marker({
    position: keeper,
    map: map,
    //icon: greed,
    animation: google.maps.Animation.BOUNCE,
    title: "Afterbirth!"
  });
  marker.addEventListener("click", toggleBounce);
}
function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}

var degrees = 0;
var speed = 100;
function rotate() {
  var pic = document.getElementById('sigong');
  pic.style.transform = "rotate("+degrees+"deg)";
  degrees--;
  if(degrees<-359){
    degrees=0;
  }
}
window.onload=setInterval(rotate, 1000/speed);