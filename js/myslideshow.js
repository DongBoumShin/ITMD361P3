var arrIndex = 0;
var duration = 3000;

function slideShow() {
  var slideImg = document.querySelectorAll('#slideshow_imgs li img');
  document.getElementById('slideshow').src = slideImg[arrIndex].getAttribute("src");
  arrIndex++;
  if(arrIndex == slideImg.length)
    arrIndex=0;
}
window.onload=setInterval(slideShow, duration);