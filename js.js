$(window).on('scroll', function() {
   scrollPosition = $(this).scrollTop();
   if (scrollPosition >= 10 && scrollPosition <= 300) {
      $(".navbar-custom").removeClass('nav-no-scoll');
      $(".navbar-custom").addClass('nav-scrolled');
   }
   if (scrollPosition <= 10) {
      $(".navbar-custom").removeClass('nav-scrolled');
      $(".navbar-custom").addClass('nav-no-scoll');
   }
});

$(function() {
   $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
         var target = $(this.hash);
         target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
         if (target.length) {
            $('html,body').animate({
               scrollTop: target.offset().top
            }, 1000);
            return false;
         }
      }
   });
});

$(document).ready(function(){
    $(this).scrollTop(0);
});