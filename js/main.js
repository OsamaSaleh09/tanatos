/*global $,document, window*/
$(window).ready(function () {
    "use strict";
    $(".header").height($(window).height());
    $(window).resize(function () {
        $(".header").height($(window).height());
    });
    
    $(".hire").click(function () {
        $("html , body").animate({
            scrollTop: $(".our-team").offset().top
        }, 1000); 
    });
    $(".works").click(function () {
        $("html , body").animate({
            scrollTop: $(".our-work").offset().top
        }, 1000); 
    });
    $(".header .arrow i").click(function () {
        $("html , body").animate({
            scrollTop: $(".features").offset().top
        }, 1000); 
    });
    
    $(".show").click(function () {
        
        $(".show-togg").toggleClass("hidden")
        if ($(".show-togg").is(":visible") == true){
            $(this).text("Show less");
        } else {
            $(this).text("Show more");
        }
    })

    $(".testimonials .fa-chevron-right").click(function () {
        $(".active-icon").each(function () {
            if (!$(".active-icon").is(":last-child")) {
                $(this).removeClass("active-icon").next().addClass("active-icon");
            } else {
                $(this).removeClass("active-icon");
                $(".point ul li").eq(0).addClass("active-icon");
            }
        })
            
        $(".active").each(function () {
            if (!$(".active").is(":last-child")) {
                $(this).fadeOut(300,function() {
                    $(this).removeClass("active").next().addClass("active").fadeIn(300);
                })
            } else {
                $(this).fadeOut(300, function () {
                    $(this).removeClass("active");
                    $(".box-client .client").eq(0).addClass("active").fadeIn(300);
                })
            }
        })
        
    })
    
    $(".testimonials .fa-chevron-left").click(function () {
        
        $(".active-icon").each(function () {
            if (!$(".active-icon").is(":first-child")) {
                $(this).removeClass("active-icon").prev().addClass("active-icon");
            } else {
                $(this).removeClass("active-icon");
                $(".point ul li:last-child").addClass("active-icon");
            }
        })
        
        $(".active").each(function () {
            if (!$(".active").is(":first-child")) {
                $(this).fadeOut(300,function() {
                    $(this).removeClass("active").prev().addClass("active").fadeIn(300);
                })
            } else {
                $(this).fadeOut(300, function () {
                    $(this).removeClass("active");
                    $(".box-client .client:last-child").addClass("active").fadeIn(300);
                })
            }
        })
        
    })  
});