$(document).ready(function() {
    // nav button click event
    // throtly.... delay any other clicks on the button-menu
    var clicked = false,
        $header = $('header')

    $('header .bars').click(function() {
        var $this = $(this);
        /* Act on the event */
        if (!clicked) {
            // fixing multi-click ! 
            clicked = true; // turning clicked into true
            $this.parent().toggleClass('active');
            setTimeout(function() {
                clicked = false;
            }, 1450);
        }
    });

    // handling the scroll of the nav
    var $mainSection = $('.main-section')
    $(window).scroll(function() {
        /* Act on the event */
        if ($(this).scrollTop() >= $mainSection.height() - 100) {
            $header.addClass('sticky');
        } else {
            $header.removeClass('sticky');
        }
    });

    // closing the min-menu on click outside of the menu.
    $(document).on('click', function(event) {
        /* Act on the event */
        var clickOver = $(event.target);
        console.log(clickOver);
        if (!clickOver.closest('header').length && $('nav').hasClass('active')) {
            $('nav').removeClass('active');
        }
    });


    // slider function 

    function mnueSlider() {
        var $sliderContainer = $('.slider-menu');
        var $slider = $sliderContainer.find('.slider');
        var $sliderBanner = $sliderContainer.find('.slider-banner');
        var $sliderItems = $sliderBanner.find('.slider-item');
        var itemsLength = $sliderItems.length;
        var $nextBtn = $sliderContainer.find('.arrow.next');
        var $prevtBtn = $sliderContainer.find('.arrow.prev');
        var slidesToShow = 3;
        var activeSlides = slidesToShow;

        function responsevSlider() {
            activeSlides -= slidesToShow;
            if ($(window).width() <= 991 && $(window).width() > 550) {
                slidesToShow = 2;
            } else if ($(window).width() <= 550) {
                slidesToShow = 1;
            } else {
                slidesToShow = 3;
            }
            activeSlides += slidesToShow;
        }
        responsevSlider();

        // var activeSlides = slidesToShow;
        $sliderItems.outerWidth(parseInt($slider.width() / slidesToShow));
        var itemWidth;
        var itemsWidth;

        function fixWidth() {
            itemWidth = $('.slider-menu .slider-item').outerWidth();
            itemsWidth = itemWidth * itemsLength;
            $sliderBanner.width(itemsWidth);
        }
        fixWidth();

        function leftCalc() {
            return itemWidth * itemMOve;
        }


        $(window).resize(function() {
            responsevSlider();
            $sliderItems.outerWidth(parseInt($slider.width() / slidesToShow));
            fixWidth();
            $sliderBanner.css('left', -leftCalc());
        });

        var left = 0;
        var itemMOve = 0;
        var clicked = false;

        function checkStatus() {
            if (activeSlides == itemsLength) {
                $nextBtn.addClass('disabled');
            } else {
                $nextBtn.removeClass('disabled');
            }

            if (activeSlides == slidesToShow) {
                $prevtBtn.addClass('disabled');
            } else {
                $prevtBtn.removeClass('disabled');
            }
        }
        checkStatus();

        $nextBtn.click(function() {
            if (!clicked) {
                if (activeSlides != itemsLength) {
                    clicked = true;
                    itemMOve++;
                    left = -leftCalc();
                    $sliderBanner.css('left', left);
                    activeSlides++;
                    setTimeout(function() {
                        clicked = false;
                    }, 400);
                    checkStatus();
                }
            }
        });

        $prevtBtn.click(function() {
            if (!clicked) {
                if (activeSlides > slidesToShow) {
                    itemMOve--;
                    left = -leftCalc();
                    $sliderBanner.css('left', left);
                    activeSlides--;
                    setTimeout(function() {
                        clicked = false;
                    }, 400);
                    checkStatus();
                }
            }
        });

    }
    mnueSlider();



    // testimonials Slider


    function chifSlider() {
        var $sliderContainer = $('.slider-chif');
        var $slider = $sliderContainer.find('.slider');
        var $sliderBanner = $sliderContainer.find('.slider-banner');
        var $sliderItems = $sliderBanner.find('.slider-item');
        var itemsLength = $sliderItems.length;
        var $nextBtn = $sliderContainer.find('.arrow.next');
        var $prevtBtn = $sliderContainer.find('.arrow.prev');
        var slidesToShow = 1;
        var activeSlides = slidesToShow;

      
        $sliderItems.outerWidth(parseInt($slider.width() / slidesToShow));
        var itemWidth;
        var itemsWidth;

        function fixWidth() {
            itemWidth = $('.slider-chif .slider-item').outerWidth();
            itemsWidth = itemWidth * itemsLength;
            $sliderBanner.width(itemsWidth);
        }
        fixWidth();

        function leftCalc() {
            return itemWidth * itemMOve;
        }


        $(window).resize(function() {

            $sliderItems.outerWidth(parseInt($slider.width() / slidesToShow));
            fixWidth();
            $sliderBanner.css('left', -leftCalc());
        });

        var left = 0;
        var itemMOve = 0;
        var clicked = false;

        function checkStatus() {
            if (activeSlides == itemsLength) {
                $nextBtn.addClass('disabled');
            } else {
                $nextBtn.removeClass('disabled');
            }

            if (activeSlides == slidesToShow) {
                $prevtBtn.addClass('disabled');
            } else {
                $prevtBtn.removeClass('disabled');
            }
        }
        checkStatus();

        $nextBtn.click(function() {
            if (!clicked) {
                if (activeSlides != itemsLength) {
                    clicked = true;
                    itemMOve++;
                    left = -leftCalc();
                    $sliderBanner.css('left', left);
                    activeSlides++;
                    setTimeout(function() {
                        clicked = false;
                    }, 400);
                    checkStatus();
                }
            }
        });

        $prevtBtn.click(function() {
            if (!clicked) {
                if (activeSlides > slidesToShow) {
                    itemMOve--;
                    left = -leftCalc();
                    $sliderBanner.css('left', left);
                    activeSlides--;
                    setTimeout(function() {
                        clicked = false;
                    }, 400);
                    checkStatus();
                }
            }
        });

    }
    chifSlider();
 

    // mape dufusing pointer !
    $('.maps').click(function() {
        $('.maps iframe').css("pointer-events", "auto");
    });

    $(".maps").mouseleave(function() {
        $('.maps iframe').css("pointer-events", "none");
    });

});




