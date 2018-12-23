var button

function nextPage () {
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

function previousPage () {
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
$('section').on('swipeleft', previousPage)
