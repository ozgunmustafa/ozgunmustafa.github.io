$(".menu-toggle").click(function () {
  $(".site-nav").toggleClass("site-nav--open", 500);
  $(this).toggleClass("open");
});

$("#openSearchForm").click(function () {
  $(".searchForm").toggle();
  $("#searchIcon").toggleClass("fas fa-search fas fa-times");
});
