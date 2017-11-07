// The following code is based off a toggle menu by @Bradcomp
// source: https://gist.github.com/Bradcomp/a9ef2ef322a8e8017443b626208999c1
(function() {

  console.log('locked and loaded');

    var burger = $('.navbar-burger');
    var menu = $('#navMenu');

    burger.click(function() {
        // $('nav').toggleClass('is-white', true);
        burger.toggleClass('is-active');
        menu.toggleClass('is-active');
    });
})();
