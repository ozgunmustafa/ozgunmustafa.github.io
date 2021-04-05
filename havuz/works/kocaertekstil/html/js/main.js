//Wow Animate
$(document).ready(function () {
  new WOW().init();
});


$(function () {
  $("#main-menu").smartmenus({
    subMenusSubOffsetX: 1,
    subMenusSubOffsetY: -8,
  });
});

(function($) {
  $('.burger').on('click', function() {
    $('.burger').toggleClass('clicked');
    $('.main-nav').toggleClass('show');
  });
  
})(jQuery);

$(document).on("scroll",function(){
  if ($(document).scrollTop() > 55){
    $("header").addClass("shrink");
  }else {
    $("header").removeClass("shrink");
  }
});

$('#homeCarousel').owlCarousel({
      items:1,
      nav: false,
      dots: true,
      dotsData: true,
      autoplay:true,
      autoplayTimeout:7000,
      smartSpeed: 1000,
  
})

$('#customerCarousel').owlCarousel({
  items:6,
  nav: false,
  dots: true,
  autoplay:3000,
  smartSpeed: 2200,

})







