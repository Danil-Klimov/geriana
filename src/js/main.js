'use strict';
$(document).ready(function () {
// scroll header transform
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            $("header").addClass("header__scroll");
        // } else if (scroll >= 50 && $(window).width() < 1199) {
        //     $("header").addClass("header__scroll_media");
        } else {
            $("header").removeClass(["header__scroll", "header__scroll_media"]);
        }
    });

// menu trigger
    $('.header__menu-link').click(function (e) {
        e.preventDefault();
        $('.menu-container').css('display', 'flex');
        $('html, body').css({
            overflow: 'hidden',
        });
    });
    $('.close').click(function () {
        $('.menu-container').css('display', 'none');
        $('html, body').css({
            overflow: 'auto',
        });
    });
    $(".menu__link").click(function(){
        var href = $(this).attr("href");
        var document = $('html, body');
        var header_height = $('.header').height();
        $('.menu-container').css('display', 'none');
        document.css({
            overflow: 'auto',
        });
        document.animate({scrollTop: $(href).offset().top - header_height});
        return false;
    });

// testimonials slider
    $('.testimonials__container').slick({
        responsive: [
            {
                breakpoint: 575,
                settings: {
                    arrows: false,
                    draggable: true,
                    speed: 1000,
                    autoplay: true,
                    autoplaySpeed: 1000,
                    infinite: true
                }
            },
            {
                breakpoint: 3000,
                settings: "unslick"
            }
        ]
    });

// svg support for IE 11
    svg4everybody();
});