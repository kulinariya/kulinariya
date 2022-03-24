
$(document).ready(function(){
    $("#scroll,#scroll-1,#main_nav").on("click","a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
    });
  });
