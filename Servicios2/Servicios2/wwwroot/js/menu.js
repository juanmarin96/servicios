/*$(document).ready(function () {
    var altura = $('.menu').offset().top;

    $(window).on('scroll', function () {
        if ($(window).scrollTop() > altura) {
            
            $('.menu').addClass('navbar-fixed-top');
        } else {
            $('.menu').removeClass('navbar-fixed-top');
        }
    });

});*/

posicionarMenu();

$(window).scroll(function () {
    posicionarMenu();
});

function posicionarMenu() {
    var altura_del_header = $('.Cimagen').outerHeight(true);
    var altura_del_menu = $('.menu').outerHeight(true);

    if ($(window).scrollTop() >= altura_del_header) {
        $('.menu').addClass('menu-fixed');
    } else {
        $('.menu').removeClass('menu-fixed');
    }
}