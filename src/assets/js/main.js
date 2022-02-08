$(document).ready(function() {
    // Swiper
    let swiper;

    swiper = new Swiper('.swiper-menu', {
        direction: 'horizontal',
        freeMode: true,
        breakpoints: {
          0: {
             slidesPerView: 2.4,
             spaceBetween: 10
          },
          425: {
            slidesPerView: 3,
            spaceBetween: 10
          }
        },
    });

    $(window).on('resize', function() {
      if ($(window).width() > 767 && $('.swiper-menu').length) {
        swiper.destroy();
      }
    });

    if ($(window).width() > 767 && $('.swiper-menu').length) {
      swiper.destroy();
    }

    let footer_menu;

    footer_menu = new Swiper('.footer__nav', {
        direction: 'horizontal',
        freeMode: true,
        slidesPerView: 'auto'
    });

    if ($(window).width() > 767) {
      footer_menu.destroy();
    }

    //////////////////
    /// MOBILE MENU
    /////////////////

    $('.header-mobile__burger').on('click', function() {
      $('body').addClass('opened-mobile-menu');
      $('.header-mobile__inner').addClass('opened');
    });

    $('.mobile-menu_btn-close').on('click', function() {
      $('body').removeClass('opened-mobile-menu');
      $('.header-mobile__inner').removeClass('opened');
    });

    $('.mobile__nav-link').on('click', function(e) {
      e.preventDefault();
      $(this).next().addClass('active');
    });

    $('.nav-menu-back > span').on('click', function() {
      $(this).closest('.nav-submenu').removeClass('active');
    });

    //////////////////
    /// PRODUCT PAGE
    //////////////////

    let item_cart_pagination;

    item_cart_pagination = new Swiper('.swiper-item-pagination', {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
        breakpoints: {
          470: {
            spaceBetween: 40
          }
        }
    });

    let item_cart;

    item_cart = new Swiper('.swiper-item', {
        slidesPerView: "auto",
        centeredSlides: true,
        slidesPerView: 1,
        thumbs: {
          swiper: item_cart_pagination,
        },
    });

});