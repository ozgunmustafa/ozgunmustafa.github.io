$(document).on("scroll",function(){
    if ($(document).scrollTop() > 55){
      $("header").addClass("shrink");
    }else {
      $("header").removeClass("shrink");
    }
});

