/* Scroll smothing */
$.fn.smoothScroll = function (options) {
    var settings = $.extend({
        // These are the defaults.
        margin: 0,
    }, options);
    var _self = $(this);

    $("html,body").animate({
        scrollTop: _self.offset().top - settings.margin
    }, "1000");
    return false
}

$('#toggle').on('click', function (e) {
    e.preventDefault();
    $('#menu').addClass('open');
});

$('.menu-close').on('click', function (e) {
    e.preventDefault();
    $('#menu').removeClass('open');
});

$('.btn-cta').on('click', function () {
    $('#zip-request').smoothScroll({
        margin: $('.component__nav').height()
    });
});

$('.navbar-nav a').on('click', function () {
    event.preventDefault();
    var $anchor = $(this).attr('href');
    $($anchor).smoothScroll({
        margin: $('.component__nav').height()
    });
    $('#menu').removeClass('open');
});