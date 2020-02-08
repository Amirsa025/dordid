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
$('.owl-student-in').owlCarousel({
  loop: true,
  nav: false,
  rtl: true,
  dots: false,
  responsive: {
    0: {
      items: 3
    },
    480: {
      items: 3
    },
    600: {
      items: 6
    },
    768: {
      items: 4
    },
    1200: {
      items: 7
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
// fix-menu-in

if ($('#header-in').length) {
  var scrollTrigger = 100
  // px

  var backToTop = function () {
    var scrollTop = $(window).scrollTop()
    if (scrollTop > scrollTrigger) {
      $('#header-in').addClass('fix-me')
    } else {
      $('#header-in').removeClass('fix-me')
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

// ACCORDION
function toggleIcon(e) {
  $(e.target)
      .prev('.panel-heading')
      .find(".more-less")
      .toggleClass('fa-plus fa-minus');
}
$('.panel-group').on('hidden.bs.collapse', toggleIcon);
$('.panel-group').on('shown.bs.collapse', toggleIcon);

// ACCORDION

// lightGallery
$(document).ready(function () {
  $('#lightgallery').lightGallery({
      zoom: false,
      share:false,
      autoplay:false,
     // autoplayControls:true,

  }); 
}); 
// lightGallery

// sticky 


    $(document).ready(function () {
        $(function () {
            if ($('.sticky').length) {
                var el = $('.sticky');
                var stickyTop = $('.sticky').offset().top;
                var stickyHeight = $('.sticky').height();

                $(window).scroll(function () {
                    var limit = $('.footer_list__am').offset().top - stickyHeight - 20;

                    var windowTop = $(window).scrollTop();

                    if (stickyTop < windowTop) {
                        el.css({
                            position: 'sticky',
                            top:80,
                            left: '0',
                           

                        });
                    } else {
                        el.css({
                            'position': 'static',
                        });
                    }

                    if (limit < windowTop) {
                        var diff = limit - windowTop;
                        el.css({
                            top: diff
                        });
                    }
                });
            }
        });
        $(window).resize(function () {
            var viewportWidth = $(window).width();
            if (viewportWidth < 767) {
                $(".item-in-buy").removeClass("sticky");
            }
        })
            .resize();

    });


// <!-- sticky -->
