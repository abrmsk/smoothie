jQuery(document).ready(function(){
    "use strict";
    // testimonials slider
    $('.home_testimonials_slider').slick({
        arrows: false,
        dots: true,
    });
    // home slider
    $('.home_slider').slick({
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
    });
    // mobile menu
    $('.mobile_nav .open_menu').on('click', function(){

        if($(this).text() == 'Open menu') {
            $('.mobile_nav ul.mobile').show();
            $(this).text('Close menu');
        } else {
            $('.mobile_nav ul.mobile').hide();
            $(this).text('Open menu');
        }
        
    
    });
});