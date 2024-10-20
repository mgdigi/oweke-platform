/*  ---------------------------------------------------
  Template Name: Gym
  Description:  Gym Fitness HTML Template
  Author: Colorlib
  Author URI: https://colorlib.com
  Version: 1.0
  Created: Colorlib
---------------------------------------------------------  */

'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    //Canvas Menu
    $(document).ready(function() {
        $('.canvas-open').on('click', function() {
            $('.offcanvas-menu-wrapper').addClass('show-offcanvas-menu-wrapper');
            $('.offcanvas-menu-overlay').addClass('active');
            $('.mobile-menu').css('display', 'block');
        });
    
        $('.canvas-close, .offcanvas-menu-overlay').on('click', function() {
            $('.offcanvas-menu-wrapper').removeClass('show-offcanvas-menu-wrapper');
            $('.offcanvas-menu-overlay').removeClass('active');
            $('.mobile-menu').css('display', 'none');
        });
    });
    
    
    

    // Search model
    $('.search-switch').on('click', function () {
        $('.search-model').fadeIn(400);
    });

    $('.search-close-switch').on('click', function () {
        $('.search-model').fadeOut(400, function () {
            $('#search-input').val('');
        });
    });

    //Masonary
    $('.gallery').masonry({
        itemSelector: '.gs-item',
        columnWidth: '.grid-sizer',
        gutter: 10
    });

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /*------------------
        Carousel Slider
    --------------------*/

    $(document).ready(function () {
        // Vérifiez si jQuery et Owl Carousel sont bien chargés
        if (typeof jQuery !== 'undefined' && typeof $.fn.owlCarousel !== 'undefined') {

            // Remplacez l'attribut data-setbg par l'image de fond
            $(".set-bg").each(function () {
                var bg = $(this).attr("data-setbg");
                $(this).css("background-image", "url(" + bg + ")");
            });
    
            // Initialisez Owl Carousel de façon simplifiée
            $(".hs-slider").owlCarousel({
                items: 1,
                loop: true,
                nav: true,
                dots: true,
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                smartSpeed: 1200,
                autoHeight: false,
                autoplay: false
            });
    
        } else {
            console.log("jQuery ou Owl Carousel ne sont pas chargés correctement");
        }
    });
    
    


    /*------------------
        Team Slider
    --------------------*/

    $(document).ready(function () {
        // Vérifiez si jQuery et Owl Carousel sont bien chargés
        if (typeof jQuery !== 'undefined' && typeof $.fn.owlCarousel !== 'undefined') {

            // Remplacez l'attribut data-setbg par l'image de fond
            $(".set-bg").each(function () {
                var bg = $(this).attr("data-setbg");
                $(this).css("background-image", "url(" + bg + ")");
            });
    
            // Initialisez Owl Carousel de façon simplifiée
            $(".ts-slider").owlCarousel({
                loop: true,
                margin: 0,
                items: 3,
                dots: true,
                dotsEach: 2,
                smartSpeed: 1200,
                autoHeight: false,
                autoplay: true,
                responsive: {
                    320: {
                        items: 1,
                    },
                    768: {
                        items: 2,
                    },
                    992: {
                        items: 3,
                    }
                }
            });
          console.log("les images se sont charges correctement ")
        } else {
            console.log("jQuery ou Owl Carousel ne sont pas chargés correctement");
        }
    });



    /*------------------
        Testimonial Slider
    --------------------*/

    $(document).ready(function () {
        // Vérifiez si jQuery et Owl Carousel sont bien chargés
        if (typeof jQuery !== 'undefined' && typeof $.fn.owlCarousel !== 'undefined') {

            // Remplacez l'attribut data-setbg par l'image de fond
            $(".set-bg").each(function () {
                var bg = $(this).attr("data-setbg");
                $(this).css("background-image", "url(" + bg + ")");
            });
    
            // Initialisez Owl Carousel de façon simplifiée
            $(".ts_slider").owlCarousel({
                loop: true,
                margin: 0,
                items: 1,
                dots: false,
                nav: true,
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                smartSpeed: 1200,
                autoHeight: false,
                autoplay: true
            });
          console.log("les images se sont charges correctement ")
        } else {
            console.log("jQuery ou Owl Carousel ne sont pas chargés correctement");
        }
    });



    

   

    /*------------------
        Image Popup
    --------------------*/
    $('.image-popup').magnificPopup({
        type: 'image'
    });

    /*------------------
        Video Popup
    --------------------*/
    $('.video-popup').magnificPopup({
        type: 'iframe'
    });

    /*------------------
        Barfiller
    --------------------*/
    $('#bar1').barfiller({
        barColor: '#ffffff',
        duration: 2000
    });
    $('#bar2').barfiller({
        barColor: '#ffffff',
        duration: 2000
    });
    $('#bar3').barfiller({
        barColor: '#ffffff',
        duration: 2000
    });

    $('.table-controls ul li').on('click', function () {
        var tsfilter = $(this).data('tsfilter');
        $('.table-controls ul li').removeClass('active');
        $(this).addClass('active');

        if (tsfilter == 'all') {
            $('.class-timetable').removeClass('filtering');
            $('.ts-meta').removeClass('show');
        } else {
            $('.class-timetable').addClass('filtering');
        }
        $('.ts-meta').each(function () {
            $(this).removeClass('show');
            if ($(this).data('tsmeta') == tsfilter) {
                $(this).addClass('show');
            }
        });
    });

})(jQuery);