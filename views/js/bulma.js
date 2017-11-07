// The following code is based off a toggle menu by @Bradcomp
// source: https://gist.github.com/Bradcomp/a9ef2ef322a8e8017443b626208999c1
(function() {

    console.log('locked and loaded');
    //responsive navbar
    var burger = $('.navbar-burger');
    var menu = $('#navMenu');
    burger.click(function() {
        // $('nav').toggleClass('is-white', true);
        burger.toggleClass('is-active');
        menu.toggleClass('is-active');
    });

    //login & signup effects
    var box = $('.box');
    var title = $('.title');
    var subtitle = $('.subtitle');
    var loginOptions = $('has-text-grey')
    box.hide().slideDown('slow');
    title.hide().fadeIn(2500);
    subtitle.hide().fadeIn(2500);
    loginOptions.hide().fadeIn(2500)

    //main visuals
    



})();
