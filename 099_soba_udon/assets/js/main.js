jQuery(function ($) {

  // ======================================================
  // body fixed
  // ======================================================
  var bodyElm = $('body');
  var scrollPosi;

  function bodyFix() {
    scrollPosi = $(window).scrollTop();
    bodyElm.css({
      'position': 'fixed',
      'width': '100%',
      'z-index': '1',
      'top': -scrollPosi
    });
  }

  function bodyFixReset() {
    bodyElm.css({
      'position': 'relative',
      'width': 'auto',
      'top': 'auto'
    });

    $('html, body').scrollTop(scrollPosi);
  }

  // ======================================================
  // Page Loader
  // ======================================================
  $(window).load(function () {
    loaded();
  });

  $(function () {
    setTimeout(function () {
      loaded();
    }, 5000);
  });

  function loaded() {
    bodyFix();
    $('.pageLoader').fadeOut(800);

    setTimeout(function () {
      $('.pageMain').addClass('active');
      bodyFixReset();
    }, 600);

  }


  // ======================================================
  // fadeIn cont
  // ======================================================
  {
    $(window).scroll(function () {
      var sectionFadeIn = $('.main__section.fadeIn--btt');

      sectionFadeIn.each(function () {
        var boxOffset = $(this).offset().top;
        var scrollPos = $(window).scrollTop();
        var wh = $(window).height();

        if (scrollPos > boxOffset - wh + 250) {
          $(this).addClass('active');
        }
      });
    });
  }


  // ======================================================
  // mv__slider
  // ======================================================
  {
    var speed = 2000;
    var times = 6000;
    var className = '.mv__slider';

    // スライダーで使う画像
    var bgArray = [
      // "assets/images/img/ma_01.jpg",
      // "assets/images/img/ma_02.jpg",
      // "assets/images/img/ma_03.jpg",
      // "assets/images/img/ma_04.jpg"
      "assets/images/img/mv_01.jpg",
      "assets/images/img/mv_02.jpg",
      "assets/images/img/mv_03.jpg",
      "assets/images/img/mv_04.jpg"
    ];
    // ここまで

    $.each(bgArray.reverse(), function (i, value) {
      $(className).prepend('<div class="mv__slides" style="background-image:url(' + value + ');"></div>');
    });
    var bgNo = 1;
    var bgLength = bgArray.length;
    setInterval(function () {
      $(className + ' .mv__slides:nth-child(' + bgNo + ')').fadeOut(speed);
      $(className + ' .mv__slides:nth-child(' + (bgNo === bgLength ? 1 : bgNo + 1) + ')').fadeIn(speed);
      if (bgNo >= bgLength) {
        bgNo = 1;
      } else {
        bgNo += 1;
      }
    }, times);
  }

  // ======================================================
  // spMenu
  // ======================================================

    var header = $('header');
    var menuBar = $('.spMenu');
    var menuTrigger = $('.spMenu__trigger');
    var hamburger = $('.spMenu__hamburger');

    menuTrigger.click(function () {

      if (hamburger.hasClass('active')) {
        hamburger.removeClass('active');
        menuTrigger.removeClass('active');
        menuBar.removeClass('active');
        header.removeClass('active');
        bodyFixReset();
      } else {
        bodyFix();
        hamburger.addClass('active');
        menuTrigger.addClass('active');
        menuBar.addClass('active');
        header.addClass('active');
      }
    });

    $('.header__right nav ul li a').click(function () {
      hamburger.removeClass('active');
      menuTrigger.removeClass('active');
      menuBar.removeClass('active');
      header.removeClass('active');
      bodyFixReset();
    });


  // // ======================================================
  // // footer__top__btn
  // // ======================================================
  {
    $('.footer__top__btn').click(function() {
        $('html, body').animate({
            'scrollTop': 0
        }, 1000);
    });
  }

  // // ======================================================
  // // original
  // // ======================================================
  {
    var ua = navigator.userAgent.toLowerCase();
    var isMobile = /iphone/.test(ua)||/android(.+)?mobile/.test(ua);

    if (!isMobile) {
      $('a[href^="tel:"]').on('click', function(e) {
          e.preventDefault();
      });
    }
  }
});
