$(window).scroll(function() {
   if ($(document).scrollTop() > 50) {
       $('nav').addClass('header');
   }
   else {
       $('nav').removeClass('header');
   }
});