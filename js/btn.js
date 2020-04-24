var btntop  = $('#btntop');

$(window).scrollTop(function(){
  if ($(window).scrollTop() > 300) {
    btntop.addClass('show');
  }
  else {
    btntop.removeClass('show');
  }
});

btntop.on('click' , function (e) {
  e.preventDefault();
  $('html , body').animate({scrollTop:0}, '300');

});
