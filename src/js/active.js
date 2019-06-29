(function ($){
  "use strict";
  jQuery(document).ready(function($){
    $(".carousel-item").carousel({
      items: 1,
      nav: true,
      dost: false,
      autoplay: false,
      loop: true,
      mouseDrag: false,
      touchDrag: false,
    });

    $(".carousel-item").on("translate.carousel", function(){
      $(".carousel-caption h2, .carousel-item p").removeClass("animated fadeInUp").css("opacity","0");
      $(".carousel-caption .slide-btn").removeClass("animated fadeInLeft").css("opacity","0");
    });

    $(".carousel-inner").on("translate.carousel", function(){
      $(".carousel-caption h2, .carousel-item p").addClass("animated fadeInUp").css("opacity","1");
      $(".carousel-caption .slide-btn").addClass("animated fadeInLeft").css("opacity","1");
    });

  });

  jQuery(window).load(function(){
    jQuery(".factorian-slide-preloader-wrap").fadeOut(500);
  });

}(jQuery));
