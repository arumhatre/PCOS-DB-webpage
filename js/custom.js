$(document).ready(function() {
    // Popup initialization
    $('.popup-youtube, .popup-vimeo').magnificPopup({
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: true
    });

    // Accordion functionality
    const togglers = document.querySelectorAll('[data-toggle]');
    togglers.forEach((btn) => {
      const targetBlock = document.querySelector(btn.dataset.toggle);
      if (btn.classList.contains('active')) {
        targetBlock.style.maxHeight = targetBlock.scrollHeight + 'px';
        btn.closest('.accordion__item').classList.add('active');
      }

      btn.addEventListener('click', (e) => {
        const block = document.querySelector(e.currentTarget.dataset.toggle);
        if (e.currentTarget.classList.contains('active')) {
          block.style.maxHeight = '';
          e.currentTarget.closest('.accordion__item').classList.remove('active');
        } else {
          block.style.maxHeight = block.scrollHeight + 'px';
          e.currentTarget.closest('.accordion__item').classList.add('active');
        }
        e.currentTarget.classList.toggle('active');
        document.querySelectorAll('.accordion__header').forEach(header => {
          if (header !== e.currentTarget) {
            header.classList.remove('active');
            document.querySelector(header.dataset.toggle).style.maxHeight = '';
            header.closest('.accordion__item').classList.remove('active');
          }
        });
      });
    });

    // Hidden menu toggle
    $('#show-hidden-menu').click(function() {
      $('.hidden-menu').slideToggle("slow");
    });

    // Form focus styling
    $('input,textarea').val("");
    $('.form-group input, .form-group textarea, .form-group select').focusout(function() {
      var text_val = $(this).val();
      if (text_val === "") {
        $(this).removeClass('has-value');
      } else {
        $(this).addClass('has-value');
      }
    });

    // Carousel initialization
    $("#googlerating_slider, #Our_pcosreviews_slider").owlCarousel({
      loop: true,
      responsiveClass: true,
      nav: false,
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

    // Video item click handler
    $(".vid-item").each(function(index) {
      $(this).on("click", function() {
        $(".vid-item .thumb").removeClass("active");
        $(`.vid-item:nth-child(${index + 1}) .thumb`).addClass("active");
      });
    });
  });