$( document ).ready(function() {
  new WOW().init();
});



(function($) {
  $('.burger').on('click', function() {
    $('.burger').toggleClass('clicked');
    $('.main-nav').toggleClass('show');
  });
  
})(jQuery);


//nav-shrink
$(document).on("scroll",function(){
    if ($(document).scrollTop() > 100){
      $(".logoSearchBar").addClass("shrink");
    }else {
      $(".logoSearchBar").removeClass("shrink");
    }
});
  

//carousel
$(function(){
    $('.call-center-slider').owlCarousel({
        loop:true,
        dots:true,
        margin:30,
        
        responsive:{
            0:{
                items:3,
            },
            600:{
                items:3,
            },
            1000:{
                items:3
            }
        }
    })
})












