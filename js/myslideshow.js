var slideArr =[
  '../ext_content/slideshow/83357.jpg',
  '../ext_content/slideshow/275372.jpg',
  '../ext_content/slideshow/679714.jpg',
  '../ext_content/slideshow/787153.jpg',
  '../ext_content/slideshow/hotslogo.jpg'
]
var arrIndex = 0;
var duration = 3000;

function slideShow() {
  document.getElementById('slideshow').src = slideArr[arrIndex];
  arrIndex++;
  if(arrIndex == slideArr.length)
    arrIndex=0;
}
setInterval(slideShow, duration);