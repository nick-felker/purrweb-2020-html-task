$(document).ready(function () {
    var offset = $('#fixed').offset();
  var topPadding = 0;
  $(window).scroll(function() {
      if ($(window).scrollTop() > offset.top) {
          $('#fixed').stop().animate({marginTop: $(window).scrollTop() - offset.top + topPadding});
      }
      else {
          $('#fixed').stop().animate({marginTop: 0});
      }
  });
});