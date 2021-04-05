//Typed Header
var typed1 = new Typed('.search-input', {
    strings: ['Doktor Bul', 'Randevu Al', 'Soru Sor'],
    typeSpeed: 100,
    backSpeed: 50,
    attr: 'placeholder',
    bindInputFocusEvents: true,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});
//Typed Banner
var typed2 = new Typed('.type', {
    strings: ['doktor bul.', 'soru sor.', 'randevu al.'],
    showCursor: false,
    typeSpeed: 100,
    startDelay: 1200,
    backSpeed: 50,
    loop: false,
    autoplay: {
        delay: 5000,
    },

});


//Tab Menu
$(document).ready(function () {
    $(".tab-menu a").click(function (event) {
        event.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        var tab = $(this).attr("href");
        $(".tab-content").not(tab).css("display", "none");
        $(tab).fadeIn();
    });
});


//Slider
$('.multiple').slick({
    dots: true,
    infinite: false,

    arrows: false,

    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: false,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
