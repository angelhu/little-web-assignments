function readyToGo() {
  console.log("CUTE PUPPIES!");
}

var imageArray = new Array();
  imageArray = ["images/1.gif", "images/2.gif", "images/3.gif", "images/4.gif", "images/5.gif", "images/6.gif"]


var index = 0;

function back() {
  var picture = document.getElementById("main");
  if(index > 0)
  {
    picture.src = imageArray[index-1];
    index = index - 1;
  }
}

function forward() {
  var picture=document.getElementById("main");
  if(index < (imageArray.length - 1))
  {
    picture.src = imageArray[index+1];
    index = index + 1;
  }
}

$(document).ready(readyToGo);
