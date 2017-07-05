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


//ver más de estrategia1
$(document).ready(function () {
    $("#mostrar").on("click", function () {
        $('.estrategia-blanca').show();
    });
});


//barra de navegacion fija
posicionarBarra();

$(window).scroll(function () {
    posicionarBarra();
});

function posicionarBarra() {
    var altura_iconos = $('.iconos').position().top;
    var altura_nav = $('.iconos-nav').outerHeight(true);

    if ($(window).scrollTop() >= altura_iconos) {
        console.log($(window).scrollTop(), altura_iconos)
        $('.iconos-nav').addClass('barra-fixed');
    } else {
        $('.iconos-nav').removeClass('barra-fixed');
    }
}