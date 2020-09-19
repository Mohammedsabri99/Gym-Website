// Navigation
// ===========================================================
$(document).ready(function(){
    $('.toggle a').click(function(){
        $('.menu').toggleClass('active');
    })
})

// Wow JS
// ===========================================================
$(function(){
    new WOW().init();
});

// Typed JS
// ===========================================================
$(function(){
    var typed = new Typed(".type", {
        strings: [
            "Legends Gym is the factories of the champions",
            "founded in 1995 by a group of bodybuilding experts",
            "who contributed to make a huge number of bodybuilding legends",
            "welcome to join us anytime"
        ],
        typeSpeed: 80,
        backSpeed: 80,
        loop: true
    });
});

// Swiper
// ===========================================================
$(function(){
    var swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true,
        },
        pagination: {
            el: '.swiper-pagination',
        },
    });
});

// Preloader
// ===========================================================
$(window).on('load', function(){
    $('#preloader').fadeOut("slow");
});
