$(document).ready(function(){

  var index = 0;
  var colors = ["pink", "green", "red", "blue", "yellow", "grey"];
  var pictures = ["images/1.gif", "images/2.gif", "images/3.gif", "images/4.gif", "images/5.gif", "images/6.gif"];
  var texts = ["Hacker", "Smile", "Really?", "Sold!", "Workout", "BEER!"];

  $('.container').css('background-color', colors[index]);
  $('.picture').attr('src', pictures[index]);
  $('.text').html(texts[index]);

  $('#left').on('click', function(event){
    index--;
    if (index < 0) {
      index = colors.length - 1;
    }
    $('.container').css('background-color', colors[index]);
    $('.picture').attr('src', pictures[index]);
    $('.text').html(texts[index]);
  });

  $('#right').on('click', function(event){
    index++;
    if(index > colors.length - 1) {
      index = 0;
    }
    $('.container').css('background-color', colors[index]);
    $('.picture').attr('src', pictures[index]);
    $('.text').html(texts[index]);
  });
















});
