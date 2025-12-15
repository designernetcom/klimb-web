/*-----------------------------------------------------------------------------------
    Template Name: Indochine - Architecture and Interiors HTML Template
    Template URI: https://indochinehtml.lohatheme.com
    Author: Lohatheme
    Author URI:  https://lohatheme.com
    Version: 1.0

    Note: This is Main JS File.
-----------------------------------------------------------------------------------
    CSS INDEX
    ===================
    ## Header Style
    ## Dropdown menu
    ## Submenu
    ## Video Popup
    ## Hero Search
    ## Project Filtering
    ## Timeline Images
    ## Timeline Content
    ## Service area slider
    ## Interior Area Slider
    ## Team slider
    ## Testimonials Slider
    ## Achievements Counter
    ## Before and After
    ## Scroll to Top
    ## Nice Select
    ## WOW Animation
    ## Preloader
    
-----------------------------------------------------------------------------------*/

(function ($) {

    "use strict";

    $(document).ready(function () {
        
        // ## Header Style and Scroll to Top
        function headerStyle() {
            if ($('.main-header').length) {
                var windowpos = $(window).scrollTop();
                var siteHeader = $('.main-header');
                var scrollLink = $('.scroll-top');
                if (windowpos >= 250) {
                    siteHeader.addClass('fixed-header');
                    scrollLink.fadeIn(300);
                } else {
                    siteHeader.removeClass('fixed-header');
                    scrollLink.fadeOut(300);
                }
            }
        }
        headerStyle();

        // ## Dropdown menu
        var mobileWidth = 992;
        var navcollapse = $('.navigation li.dropdown');

        navcollapse.hover(function () {
            if ($(window).innerWidth() >= mobileWidth) {
                $(this).children('ul').stop(true, false, true).slideToggle(300);
                $(this).children('.megamenu').stop(true, false, true).slideToggle(300);
            }
        });

        // ## Submenu Dropdown Toggle
        if ($('.main-header .navigation li.dropdown ul').length) {
            $('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fas fa-chevron-down"></span></div>');

            //Dropdown Button
            $('.main-header .navigation li.dropdown .dropdown-btn').on('click', function () {
                $(this).prev('ul').slideToggle(500);
                $(this).prev('.megamenu').slideToggle(800);
            });

            //Disable dropdown parent link
            $('.navigation li.dropdown > a').on('click', function (e) {
                e.preventDefault();
            });
        }

        //Submenu Dropdown Toggle
        if ($('.main-header .main-menu').length) {
            $('.main-header .main-menu .navbar-toggle').click(function () {
                $(this).prev().prev().next().next().children('li.dropdown').hide();
            });
        }


        // ## Video Popup
        if ($('.video-play').length) {
            $('.video-play').magnificPopup({
              type: 'iframe',
              mainClass: 'mfp-fade',
              removalDelay: 160,
              preloader: false,
              iframe:{
                patterns:{
                  youtube:{
                  index: 'youtube.com',
                  id: 'v=',
                  src: 'https://www.youtube.com/embed/%id%'
                },
              },
              srcAction:'iframe_src',
            },
              fixedContentPos: false
            });
        }


        // ## Hero Search
        $(".header-inner .search-btns").on('click', function () {  
            if (document.getElementById("project-search").classList.contains("current")) {
                $(".search-project.search-form").removeClass("current");
            } else{
                $(".search-project.search-form").addClass("current");
            }
        });


        $(document).ready(function () {
            // Select the first filter by default
            const firstFilter = $(".project-filter li").first();
            firstFilter.addClass("current");
        
            const defaultSelector = firstFilter.attr('data-filter');
            $(".project-active").imagesLoaded(function () {
                $(".project-active").isotope({
                    itemSelector: '.item',
                    filter: defaultSelector, // Apply the default filter
                });
            });
        
            // Filtering logic
            $(".project-filter li").on("click", function () {
                $(".project-filter li").removeClass("current");
                $(this).addClass("current");
        
                var selector = $(this).attr("data-filter");
                $(".project-active").isotope({
                    filter: selector,
                });
            });
        });
        $(document).ready(function () {
            // Select the first filter by default
            const firstFilter = $(".project-filter1 li").first();
            firstFilter.addClass("current");
        
            const defaultSelector = firstFilter.attr('data-filter');
            $(".project-active1").imagesLoaded(function () {
                $(".project-active1").isotope({
                    itemSelector: '.item',
                    filter: defaultSelector, // Apply the default filter
                });
            });
        
            // Filtering logic
            $(".project-filter1 li").on("click", function () {
                $(".project-filter1 li").removeClass("current");
                $(this).addClass("current");
        
                var selector = $(this).attr("data-filter");
                $(".project-active1").isotope({
                    filter: selector,
                });
            });
        });




        

        // ## Timeline Images
        // Timeline Content (Static Numbers, Clickable)
if ($('.timeline-content').length) {
    $('.timeline-content').slick({
        dots: false,
        infinite: false,       // Disable infinite scrolling
        autoplay: false,       // No autoplay
        arrows: false,         // No navigation arrows
        vertical: true,        // Vertical orientation
        slidesToShow: 4,       // Display all 4 slides at once
        slidesToScroll: 1,     // Match scrolling with the image slider
        draggable: false,      // Disable drag interaction
        swipe: false,          // Disable swipe interaction
        focusOnSelect: true,   // Allow clicking on slides to focus
        asNavFor: '.timeline-images' // Sync with the image slider
    });
}

// Timeline Images (Sliding Images)
if ($('.timeline-images').length) {
    $('.timeline-images').slick({
        dots: false,
        infinite: true,        // Enable infinite looping
        autoplay: true,        // Autoplay images
        autoplaySpeed: 3000,   // Set autoplay speed
        arrows: false,         // No navigation arrows
        vertical: false,       // Horizontal orientation
        speed: 1000,           // Set transition speed
        fade: true,            // Smooth fade effect
        slidesToShow: 1,       // Show one slide at a time
        slidesToScroll: 1,     // Scroll one image at a time
        asNavFor: '.timeline-content' // Sync with the content slider
    });
}


        // ## Service area slider
        if ($('#servicerecipeCarousel .carousel-item').length) {
            let serviceitems = document.querySelectorAll('#servicerecipeCarousel .carousel-item')
            serviceitems.forEach((el) => {
                const minPerSlide = 3
                let next = el.nextElementSibling            
                for (var i=1; i<minPerSlide; i++) {
                    if (!next) {
                        next = serviceitems[0]
                    }   
                    let cloneChild = next.cloneNode(true)
                    el.appendChild(cloneChild.children[0])
                    next = next.nextElementSibling
                }
            })
        }
        // ## Service area slider
        if ($('#servicerecipeCarousel1 .carousel-item').length) {
            let serviceitems = document.querySelectorAll('#servicerecipeCarousel1 .carousel-item')
            serviceitems.forEach((el) => {
                const minPerSlide = 6
                let next = el.nextElementSibling            
                for (var i=1; i<minPerSlide; i++) {
                    if (!next) {
                        next = serviceitems[0]
                    }   
                    let cloneChild = next.cloneNode(true)
                    el.appendChild(cloneChild.children[0])
                    next = next.nextElementSibling
                }
            })
        }

        // ## Interior Area Slider
        if ($('.interior-area .carousel-item').length) {
            let numbernavs = document.getElementsByClassName("interior-nav").length;            
            for(var d=1;d<=numbernavs;d++){
                let interitems = document.querySelectorAll('#interiorrecipeCarousel'+d+' .carousel-item')
                interitems.forEach((el) => {
                    const minPerSlide = 3
                    let next = el.nextElementSibling            
                    for (var i=1; i<minPerSlide; i++) {
                        if (!next) {
                            next = interitems[0]
                        }   
                        let cloneChild = next.cloneNode(true)
                        el.appendChild(cloneChild.children[0])
                        next = next.nextElementSibling
                    }
                })
            }
        }


        // ## Team slider
        if ($('#teamCarousel .carousel-item').length) {
            let items = document.querySelectorAll('#teamCarousel .carousel-item')
            items.forEach((el) => {
                const minPerSlide = 3
                let next = el.nextElementSibling            
                for (var i=1; i<minPerSlide; i++) {
                    if (!next) {
                        next = items[0]
                    }   
                    let cloneChild = next.cloneNode(true)
                    el.appendChild(cloneChild.children[0])
                    next = next.nextElementSibling
                }
            })
        }
        if ($('#teamCarousel1 .carousel-item').length) {
            let items = document.querySelectorAll('#teamCarousel1 .carousel-item')
            items.forEach((el) => {
                const minPerSlide = 4
                let next = el.nextElementSibling            
                for (var i=1; i<minPerSlide; i++) {
                    if (!next) {
                        next = items[0]
                    }   
                    let cloneChild = next.cloneNode(true)
                    el.appendChild(cloneChild.children[0])
                    next = next.nextElementSibling
                }
            })
        }


        // ## Testimonials Slider
        if ($('.testimonials-slider').length) {
            $('.testimonials-slider').slick({
                infinite: true,
                arrows: true,
                dots: true,
                fade: true,
                autoplay: true,
                prevArrow: false,
                nextArrow: false,
                autoplaySpeed: 5000,
                pauseOnHover: false,
                slidesToScroll: 1,
                slidesToShow: 1,
            });
        }



        /* ## Achievements Counter */
        if ($('.counter-text-wrap').length) {
            $('.counter-text-wrap').appear(function () {

                var $t = $(this),
                    n = $t.find(".count-text").attr("data-stop"),
                    r = parseInt($t.find(".count-text").attr("data-speed"), 10);

                if (!$t.hasClass("counted")) {
                    $t.addClass("counted");
                    $({
                        countNum: $t.find(".count-text").text()
                    }).animate({
                        countNum: n
                    }, {
                        duration: r,
                        easing: "linear",
                        step: function () {
                            $t.find(".count-text").text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $t.find(".count-text").text(this.countNum);
                        }
                    });
                }

            }, {
                accY: 0
            });
        }


        // ## Before and After 
        if ($('.projects-02 .tab-content  .pro-02-images').length) {
            let pro02items = $('.projects-02 .tab-content  .pro-02-images').length;    
            for(var cout=1;cout<=pro02items;cout++){
                let imgcontainer = document.querySelector('.pro-02-images-'+cout);
                document.querySelector('.buttonslider'+cout).addEventListener('input', (e) => {
                  imgcontainer.style.setProperty('--position', `${e.target.value}%`);
                })
            }
        }
    
        // ## Scroll to Top
        if ($('.scroll-to-target').length) {
            $(".scroll-to-target").on('click', function () {
                var target = $(this).attr('data-target');
                // animate
                $('html, body').animate({
                    scrollTop: $(target).offset().top
                }, 1000);

            });
        }


        // ## Nice Select
        $('select').niceSelect();


        // ## WOW Animation
        if ($('.wow').length) {
            var wow = new WOW({
                boxClass: 'wow', // animated element css class (default is wow)
                animateClass: 'animated', // animation css class (default is animated)
                offset: 0, // distance to the element when triggering the animation (default is 0)
                mobile: false, // trigger animations on mobile devices (default is true)
                live: true // act on asynchronously loaded content (default is true)
            });
            wow.init();
        }



    });


    /* ==========================================================================
       When document is resize, do
       ========================================================================== */

    $(window).on('resize', function () {
        var mobileWidth = 992;
        var navcollapse = $('.navigation li.dropdown');
        navcollapse.children('ul').hide();
        navcollapse.children('.megamenu').hide();

    });


    /* ==========================================================================
       When document is scroll, do
       ========================================================================== */

    $(window).on('scroll', function () {

        // Header Style and Scroll to Top
        function headerStyle() {
            if ($('.main-header').length) {
                var windowpos = $(window).scrollTop();
                var siteHeader = $('.main-header');
                var scrollLink = $('.scroll-top');
                if (windowpos >= 100) {
                    siteHeader.addClass('fixed-header');
                    scrollLink.fadeIn(300);
                } else {
                    siteHeader.removeClass('fixed-header');
                    scrollLink.fadeOut(300);
                }
            }
        }

        headerStyle();

    });

    /* ==========================================================================
       When document is loaded, do
       ========================================================================== */

    $(window).on('load', function () {

        // ## Preloader
        function handlePreloader() {
            if ($('.preloader').length) {
                $('.preloader').delay(200).fadeOut(500);
            }
        }
        handlePreloader();

    });



})(window.jQuery);

// $(document).ready(function(){
//     $('.client-slider1').slick({
//       slidesToShow: 6,
//       slidesToScroll: 1,
//       autoplay: true,
//       autoplaySpeed: 900,
//       arrows: false,
//       dots: false,
//       pauseOnHover: false,
//       responsive: [{
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 4
//         }
//       }, {
//         breakpoint: 520,
//         settings: {
//           slidesToShow: 3
//         }
//       }]
//     });
//   });

    
$('.contact-btn1').bind('click', function () {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $('.contact-form1').animate({
        right: '-450px'
      });
    } else {
      $('.contact-form1').animate({
        right: '0'
      });
      $(this).addClass('active');
    }
  });
  $('.close-btn').bind('click', function () {
    $('.contact-form1').animate({
      right: '-450px'
    });
  });


