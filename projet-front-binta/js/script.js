/******************************************************************************  Le menu burger */
// Sélectionner le bouton hamburger
const menuBtn = document.querySelector('.burger-menu');

// Sélectionner le menu à afficher/cacher
const navMenu = document.querySelector('nav');

// Ajouter un écouteur d'événements sur le bouton hamburger
menuBtn.addEventListener('click', function() {
  // Basculer la classe "open" sur le bouton hamburger
  menuBtn.classList.toggle('open');

  // Afficher ou cacher le menu en fonction de la classe "open"
  navMenu.classList.toggle('open');
});

(function ($) {
  'use strict';
  // On Document Load
  $(document).ready(function () {
    if ($('.binta-map')[0]) {
      var address = '2, rue Riera et Christy 95240 Cormeilles-en-Parisis',
        address = encodeURIComponent(address),
        src =
          'https://maps.google.com/maps?q=' +
          address +
          '&amp;t=m&amp;z=16&amp;output=embed&amp;iwloc=near&output=embed';
      $('.binta-map iframe').attr('src', src);
    }
  });
})(jQuery);
