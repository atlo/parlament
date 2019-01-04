$('.slider-1').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  asNavFor: '.slider-2',
  infinite: false,
  nextArrow: '<button type="button" class="slick-next">tovább</button>',
  prevArrow: '<button type="button" class="slick-prev">vissza</button>',
  adaptiveHeight: true
})

$('.slider-2').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.slider-1',
  infinite: false,
  nextArrow: '<button type="button" class="slick-next">tovább</button>',
  prevArrow: '<button type="button" class="slick-prev">vissza</button>',
  adaptiveHeight: true
})
