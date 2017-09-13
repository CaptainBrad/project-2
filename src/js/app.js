/* global google */
const $burger = $('.navbar-burger');
const $menu = $('.navbar-menu');
const $countryForm = $('#country-form');

$burger.on('click', () => {
  $burger.toggleClass('is-active');
  $menu.toggleClass('is-active');
});

if($countryForm.length > 0) $countryForm.find('select').on('change', () => $countryForm.trigger('submit'));

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

$('form#register').validate({
  rules: {
    email: { required: true, email: true, remote: '/checkemail'}
  },
  messages: {
    email: { required: 'Please enter a valid email address', email: 'Please enter a valid email address', remote: 'That email address is already registered' }
  }
});

console.log($('form#register').find('[type=email]').rules());

// $('form').not('#register').validate();
// =========================================================

// $('#toiletFilter').on('click', () => {
//   if(location.area === toilet.location) {
//     toilet.show();
//   }
// });
