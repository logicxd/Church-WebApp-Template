$(function () {
    $('.button-collapse').sideNav();
    $('.slider').slider();
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy();
    $('.collapsible').collapsible();

    var newsletterScrollFire = {
        selector: '#newsletter-scrollfire', offset: 200, callback: function (el) {
            Materialize.showStaggeredList($(el));
        }
    };
    if (typeof scrollFireOptions == 'undefined') {
        Materialize.scrollFire([newsletterScrollFire]);
    } else {
        scrollFireOptions.push(newsletterScrollFire);
        Materialize.scrollFire(scrollFireOptions);
    }

    $('#newsletter-form').on('submit', function (e) {
        e.preventDefault();
        $('#newsletter-form .input-field').addClass('hide');
        $('#newsletter-button').addClass('hide');
        $('#newsletter-confirmation').removeClass('hide');
        Materialize.showStaggeredList('#newsletter-confirmation');

        var name = $('#newsletter-name');
        var email = $('#newsletter-email');
    });
});
//# sourceURL=footer.js
