
        //Go to top
 $CW(document).ready(function(){ 
     $CW(window).scroll(function(){ 
        if ( $CW(this).scrollTop() > 100) { 
             $CW('#goto_top').fadeIn(); 
        } else { 
             $CW('#goto_top').fadeOut(); 
        } 
    }); 
     $CW('#goto_top').click(function(){ 
         $CW("html, body").animate({ scrollTop: 0 }, 600);
        return false; 
    }); 
});


//Product slider
 $CW('#exampleSlider1').multislider({
    //slideAll: true,
    //interval: false,
    //continuous: false
});
 $CW('#exampleSlider2').multislider({
    //slideAll: true,
    //interval: false,
    //continuous: false
});
 $CW('#exampleSlider3').multislider({
    //slideAll: true,
    //interval: false,
    //continuous: false
});


(function ($) {
    "use strict";
    $.fn.sliderResponsive = function (settings) {
        var set = $.extend(
            {
                slidePause: 5000,
                fadeSpeed: 800,
                autoPlay: "on",
                showArrows: "off",
                hideDots: "off",
                hoverZoom: "on",
                titleBarTop: "off"
            },
            settings
        );

        var $slider = $(this);
        var size = $slider.find("> div").length; //number of slides
        var position = 0; // current position of carousal
        var sliderIntervalID; // used to clear autoplay

        // Add a Dot for each slide
        $slider.append("<ul></ul>");
        $slider.find("> div").each(function () {
            $slider.find("> ul").append("<li></li>");
        });

        // Put .show on the first Slide
        $slider.find("div:first-of-type").addClass("show");

        // Put .showLi on the first dot
        $slider.find("li:first-of-type").addClass("showli");

        //fadeout all items except .show
        $slider.find("> div").not(".show").fadeOut();

        // If Autoplay is set to 'on' than start it
        if (set.autoPlay === "on") {
            startSlider();
        }

        // If showarrows is set to 'on' then don't hide them
        if (set.showArrows === "on") {
            $slider.addClass("showArrows");
        }

        // If hideDots is set to 'on' then hide them
        if (set.hideDots === "on") {
            $slider.addClass("hideDots");
        }

        // If hoverZoom is set to 'off' then stop it
        if (set.hoverZoom === "off") {
            $slider.addClass("hoverZoomOff");
        }

        // If titleBarTop is set to 'on' then move it up
        if (set.titleBarTop === "on") {
            $slider.addClass("titleBarTop");
        }

        // function to start auto play
        function startSlider() {
            sliderIntervalID = setInterval(function () {
                nextSlide();
            }, set.slidePause);
        }

        // on mouseover stop the autoplay
        $slider.mouseover(function () {
            if (set.autoPlay === "on") {
                clearInterval(sliderIntervalID);
            }
        });

        // on mouseout starts the autoplay
        $slider.mouseout(function () {
            if (set.autoPlay === "on") {
                startSlider();
            }
        });

        //on right arrow click
        $slider.find("> .right").click(nextSlide);

        //on left arrow click
        $slider.find("> .left").click(prevSlide);

        // Go to next slide
        function nextSlide() {
            position = $slider.find(".show").index() + 1;
            if (position > size - 1) position = 0;
            changeCarousel(position);
        }

        // Go to previous slide
        function prevSlide() {
            position = $slider.find(".show").index() - 1;
            if (position < 0) position = size - 1;
            changeCarousel(position);
        }

        //when user clicks slider button
        $slider.find(" > ul > li").click(function () {
            position = $(this).index();
            changeCarousel($(this).index());
        });

        //this changes the image and button selection
        function changeCarousel() {
            $slider.find(".show").removeClass("show").fadeOut();
            $slider
                .find("> div")
                .eq(position)
                .fadeIn(set.fadeSpeed)
                .addClass("show");
            // The Dots
            $slider.find("> ul").find(".showli").removeClass("showli");
            $slider.find("> ul > li").eq(position).addClass("showli");
        }

        return $slider;
    };
})($CW);

//////////////////////////////////////////////
// Activate each slider - change options
//////////////////////////////////////////////
$CW(document).ready(function () {
    $CW("#slider1").sliderResponsive({
        // Using default everything
        // slidePause: 5000,
        // fadeSpeed: 800,
        // autoPlay: "on",
        // showArrows: "off",
        // hideDots: "off",
        // hoverZoom: "on",
        // titleBarTop: "off"
    });

    $CW("#slider2").sliderResponsive({
        fadeSpeed: 300,
        autoPlay: "off",
        showArrows: "on",
        hideDots: "on"
    });

    $CW("#slider3").sliderResponsive({
        hoverZoom: "off",
        hideDots: "on"
    });
    $CW("#slider5").sliderResponsive({
        hoverZoom: "off",
        hideDots: "on"
    });
    $CW("#slider4").sliderResponsive({
        autoPlay: "off",
        hoverZoom: "off",
        hideDots: "on"
    });
});