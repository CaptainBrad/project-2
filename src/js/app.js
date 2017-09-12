/* global google */
const $burger = $('.navbar-burger');
const $menu = $('.navbar-menu');
const $countryForm = $('#country-form');
const $form = $('form');
const $favoriteForm = $('form.favorite');
const storedScrollTop = window.localStorage.getItem('scrollTop');
// const location = require('../models/location');
// const toilet = require('../models/toilet');

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

const $mapDiv = $('#map');
if($mapDiv.length > 0) {
  const toiletData = $mapDiv.data('toilet');

  toiletData.latLng;
  const map = new google.maps.Map($mapDiv[0], {
    center: toiletData.latLng,
    zoom: 14

  });
  new google.maps.Marker({
    position: toiletData.latLng,
    map: map,
    animation: google.maps.Animation.DROP,
    icon: {
      url: 'https://cdn.shopify.com/s/files/1/1061/1924/files/Poop_Emoji.png?9898922749706957214',
      scaledSize: new google.maps.Size(35,35)
    }
  });
}
// =========================================================

// $('#toiletFilter').on('click', () => {
//   if(location.area === toilet.location) {
//     toilet.show();
//   }
// });
