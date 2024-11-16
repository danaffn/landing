$(function () {



  const mixer = mixitup('.blog__sort');

  $('.review__slider').slick({
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    dots: true,
    slidesToScroll: 1,
    appendDots: $('.review__dots'),
  });

  $('.review__prev').on('click', function (e) {
    e.preventDefault()
    $('.review__slider').slick('slickPrev');
  })

  $('.review__next').on('click', function (e) {
    e.preventDefault()
    $('.review__slider').slick('slickNext');
  })

  $('.faq__link').on('click', function (e) {
    e.preventDefault()
    $(this).toggleClass('faq__link--active')
    $(this).children('.faq__answer').slideToggle()
  })

  setInterval(() => {
    if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') === false) {
      $('.burger').addClass('burger--follow')
    } else {
      $('.burger').removeClass('burger--follow')
    }
  }, 0)

  $('.burger, .overlay').on('click', function (e) {
    e.preventDefault()
    $('.header__top').toggleClass('header__top--open')
    $('.overlay').toggleClass('overlay--show')
    $('.burger').toggleClass('burger--close')
  })
  setInterval(() => {
    if ($('.header__top').hasClass('header__top--open')) {
      $('.header__nav-link, .header__logo').on('click', function (e) {
        $('.header__top').removeClass('header__top--open')
        $('.overlay').removeClass('overlay--show')
        $('.burger').removeClass('burger--close')
      })
    }
  }, 0);



});
