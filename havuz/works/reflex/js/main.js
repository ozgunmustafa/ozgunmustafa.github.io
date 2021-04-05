$(function () {
  $("#main-menu").smartmenus({
    subMenusSubOffsetX: 1,
    subMenusSubOffsetY: -8,
  });
});
$(function () {
  $("#sec-menu").smartmenus({
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

  (function($) {
    $('.btn-filter , .overlay').on('click', function() {
      $('.filter-card').toggleClass('show');
    });
    $('html').on('click', function(e) {
      if(!$(e.target).closest('.filter-card , .btn-filter').length && $('.filter-card').hasClass('show')){
          $('.filter-card').removeClass('show');

      }
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
  


$(function(){
  var menuHeight=$('.fixed-menu').height();
  $( ".secondary-menu" ).css('margin-top',menuHeight);
  $( "main" ).addClass('main-margin');
})



//Wow Animate
$( document ).ready(function() {
    new WOW().init();
});

//carousel
$(function(){
    $('.releated-products-slider').owlCarousel({
        loop:true,
        dots:true,
        
        responsive:{
            0:{
                items:1
            },
          
            1000:{
                items:3
            }
        }
    })
})

$(function(){
  $('#refleksPlusCarousel').owlCarousel({
    items:1,
    nav: false,
    dots: true,
    dotsData: true,
    loop:true,
    autoplay:true
  
  })
})








$( '.owl-dot' ).on( 'click', function() {
  owl.trigger('to.owl.carousel', [$(this).index(), 300]);
  $( '.owl-dot' ).removeClass( 'active' );
  $(this).addClass( 'active' );
})





