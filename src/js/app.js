const $burger = $('.navbar-burger');
const $menu = $('.navbar-menu');
const $countryForm = $('#country-form');
const $form = $('form');
const $favoriteForm = $('form.favorite');
const storedScrollTop = window.localStorage.getItem('scrollTop');

if(storedScrollTop) {
  $(window).scrollTop(storedScrollTop);
  window.localStorage.removeItem('scrollTop');
}

$burger.on('click', () => {
  $burger.toggleClass('is-active');
  $menu.toggleClass('is-active');
});

if($countryForm.length > 0) $countryForm.find('select').on('change', () => $countryForm.trigger('submit'));

if($form.length > 0) $form.validate();

if($favoriteForm.length > 0) {
  $favoriteForm.on('submit', (e) => {
    e.preventDefault();
    // get window position
    window.localStorage.setItem('scrollTop', $(window).scrollTop());
    e.target.submit();
  });
}




console.log('wassssssuupppppppppppppppppppp');
