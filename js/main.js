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



});
