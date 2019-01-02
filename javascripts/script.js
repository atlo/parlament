var button

/* function nextPage (event) {
  event.preventDefault()

  const parent = $(this).closest('section')
  const parentImage = parent.find('img')
  const parentDetails = parent.find('.details')
  const nextPage = parent.next()
  const nextPageImage = nextPage.find('img')
  const nextPageDetails = nextPage.find('.details')

  parent.removeClass('active')
  nextPage.addClass('active')

  parent.fadeOut()
  nextPage.fadeIn()
}

function previousPage (event) {
  event.preventDefault()

  const parent = $(this).closest('section')
  const previousPage = parent.prev()

  parent.removeClass('active')
  previousPage.addClass('active')

  parent.fadeOut()
  previousPage.fadeIn()
}

$('.next-page').click(nextPage)
$('.previous-page').click(previousPage)
$('section').on('swipeleft', nextPage)
$('section').on('swiperight', previousPage) */
$('.slider-1').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-2',
  infinite: false,
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

