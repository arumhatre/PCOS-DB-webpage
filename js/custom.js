
// ***************** Form Script ****************** //

$(document).ready(function() {
    // Initialize carousel for screenshots and Google rating
    $("#googlerating_slider, #Our_pcosreviews_slider").owlCarousel({
      loop: true,
      responsiveClass: true,
      nav: true,
      margin: 20,
      autoplay: true,
      autoplayTimeout: 4000,
      smartSpeed: 400,
      navText: [
        "<img src='images/previmage.webp' alt='001 prev' width='50' height='50' />", 
        "<img src='images/nextimage.webp' alt='001 next' width='50' height='50' />"
      ],
      responsive: {
        0: { items: 1 },
        600: { items: 1 },
        768: { items: 2 },
        1024: { items: 2 },
        1200: { items: 3 }
      }
    });
    $(".owl-nav .owl-prev").attr("role", "button");
    $(".owl-nav .owl-next").attr("role", "button");

    // Initialize carousel for testimonials
    $("#testimonilas_slider").owlCarousel({
      loop: false,
      responsiveClass: true,
      nav: true,
      margin: 20,
      autoplay: false,
      autoplayTimeout: 4000,
      smartSpeed: 400,
      navText: [
        "<img src='images/previmage.webp' alt='001 prev' width='50' height='50' />", 
        "<img src='images/nextimage.webp' alt='001 next' width='50' height='50' />"
      ],
      responsive: {
        0: { items: 1 },
        600: { items: 1 },
        768: { items: 2 },
        1024: { items: 3 },
        1200: { items: 4 }
      }
    });

     // Initialize carousel for testimonials
    $("#pcostreatment_slider").owlCarousel({
      loop: false,
      responsiveClass: true,
      nav: true,
      margin: 20,
      autoplay: false,
      autoplayTimeout: 4000,
      smartSpeed: 400,
      autoHeight: true, 
      navText: [
        "<img src='images/previmage.webp' alt='001 prev' width='50' height='50' />", 
        "<img src='images/nextimage.webp' alt='001 next' width='50' height='50' />"
      ],
      responsive: {
        0: { items: 1 },
        600: { items: 1 },
        768: { items: 1 },
        1024: { items: 1 },
        1200: { items: 3 }
      }
    });


      // Initialize carousel for testimonials
    $("#symtoms_slider").owlCarousel({
      loop: false,
      responsiveClass: true,
      nav: true,
      margin: 20,
      autoplay: false,
      autoplayTimeout: 4000,
      smartSpeed: 400,
      autoHeight: true, 
      navText: [
        "<img src='images/previmage.webp' alt='001 prev' width='50' height='50' />", 
        "<img src='images/nextimage.webp' alt='001 next' width='50' height='50' />"
      ],
      responsive: {
        0: { items: 1 },
        600: { items: 1 },
        768: { items: 2 },
        1024: { items: 3 },
        1200: { items: 3 }
      }
    });
    

    // Video item click handler
    $(".vid-item").each(function(e) {
      $(this).on("click", function() {
        var t = e + 1;
        $(".vid-item .thumb").removeClass("active");
        $(".vid-item:nth-child(" + t + ") .thumb").addClass("active");
      });
    });

    e();
  });

