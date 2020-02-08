// owl

$('.owl-header').owlCarousel({
  loop: true,
  margin: 0,
  rtl: true,
  dots: false,
  nav: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    768: {
      items: 2
    },
    992: {
      items: 1
    },
    1200: {
      items: 2
    }
  }
});
$('.owl-header2').owlCarousel({
  loop: true,
  margin: 0,
  rtl: true,
  dots: false,
  nav: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    768: {
      items: 2
    },
    992: {
      items:3
    },
    1200: {
      items: 4
    }
  }
});
$('.owl-answer').owlCarousel({
  center: true,
  loop: true,
  nav: true,
  rtl: true,
  dots: false,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    768: {
      items: 1
    },
    1200: {
      items: 2
    }
  }
});
$('.owl-teachers').owlCarousel({
  center: true,
  loop: true,
  nav: true,
  rtl: true,
  dots: false,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    768: {
      items: 3
    },
    1200: {
      items: 5
    }
  }
});
$('.owl-brans').owlCarousel({
  loop: true,
  nav: false,
  rtl: true,
  dots: false,
  responsive: {
    0: {
      items: 1
    },
    480: {
      items: 2
    },
    600: {
      items: 3
    },
    768: {
      items: 4
    },
    1200: {
      items: 6
    }
  }
});
// owl
// fix-menu
$(function () {
  // toggle class open on button
  $('#exCollapsingNavbar').on('hide.bs.collapse', function () {
    $('.navbar-toggler').removeClass('open')
  })
  $('#exCollapsingNavbar').on('show.bs.collapse', function () {
    $('.navbar-toggler').addClass('open')
    $('.md-open').fadeOut('fast')
  })
})

if ($('#fix_menu').length) {
  var scrollTrigger = 100
  // px

  var backToTop = function () {
    var scrollTop = $(window).scrollTop()
    if (scrollTop > scrollTrigger) {
      $('#fix_menu').addClass('show')
    } else {
      $('#fix_menu').removeClass('show')
    }
  }
  backToTop()
  $(window).on('scroll', function () {
    backToTop()
  })
}
// fix-menu

// open-search

var time = null
$('.open-srch').click(function () {
  clearTimeout(time)
  time = setTimeout(function () {
    $('.md-open1').addClass('md-open')
    $('.md-open').fadeToggle('slow')
    $('#exCollapsingNavbar').fadeOut('slow')
    $('.openCollapsingNavbar').removeClass('open')
    $('.open-pro').fadeOut('slow')
  }, 200)
})
$('.openCollapsingNavbar').click(function () {
  clearTimeout(time)
  time = setTimeout(function () {
    $('#exCollapsingNavbar').fadeToggle('slow')
    $('.openCollapsingNavbar').toggleClass('open')
    $('.md-open').fadeOut('slow')
    $('.open-pro').fadeOut('slow')
  }, 200)
})
$('.profile-dropdown').click(function () {
  clearTimeout(time)
  time = setTimeout(function () {
    $('.open-pro').fadeToggle('slow')
    $('.openCollapsingNavbar').toggleClass('open')
    $('.md-open').fadeOut('slow')
    $('#exCollapsingNavbar').fadeOut('slow')
    $('.openCollapsingNavbar').removeClass('open')
  }, 200)
})

//   .profile-dropdown ul
// open-search

