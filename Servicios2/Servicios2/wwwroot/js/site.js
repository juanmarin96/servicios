﻿$('#body-div').on('mouseover', '.anim', function () {
    var parent = $(this).parent().get(0);
    $(parent).data('anim', 'off');
    var targetH3 = $(this).data('h3target');
    var targetP = $(this).data('ptarget');
    var colorH3 = $(this).data('h3color');
    var flecha1 = $(this).data('flecha1');
    var flecha2 = $(this).data('flecha2');
    var targetHref = $(this).data('hreftarget');
    $(targetHref).removeAttr('href');
    $(targetH3).html($(this).data('h3'));
    $(targetP).html($(this).data('p'));
    $(colorH3).css('color', $(this).data('color'));
    $(flecha1).css('background-color', $(this).data('color'));
    $(flecha2).css('background-color', $(this).data('color'));
    $(targetHref).attr("data-click", $(this).data('click'));
    $('.anim').each(function () {
        $(this).addClass('gray');
    });
});

$('#body-div').on('mouseleave', '.anim', function () {
    var parent = $(this).parent().get(0);
    $(parent).data('anim', 'on');
    $(this).children('.anim').each(function () {
        $(this).addClass('gray');
    });
});

$('#body-div').on('click', '.ver-mas button', function () {
    var parent = $(this).parent().get(0);
    $(parent).children('div').toggle();
});

var firstHistory = true;
function loadView(view, targetTop) {
    var urldata = view.split('/');
    if (!firstHistory)  window.history.pushState({ js: true }, "", document.URL.split('?')[0] + '?url=Home%2F' + urldata[urldata.length - 1]);

    $('#body-div').removeClass('fadeInRight');
    $('#body-div').addClass('fadeOutLeft');    
    
    setTimeout(function () {  
        $('#body-div').addClass('hidden');
        $('#loader').addClass('flipInY');
        $.ajax({
            url: view
        }).done(function (d) {
            $('#body-div').html(d);
            setTimeout(function () {
                $('#loader').removeClass('flipInY');
                $('#body-div').removeClass('hidden');                
                $('#body-div').removeClass('fadeOutLeft');
                $('#body-div').addClass('fadeInRight');

                if (!firstHistory) {                    
                    $('html, body').animate({
                        scrollTop: $(targetTop).offset().top
                    }, 1000);
                }
                firstHistory = false;
            }, 2000);
        });
    }, 1000);    
}

$('body').on('click', '[data-click]', function () { 
    
    var dataClick = $(this).data('click');

    // Load new
    if (dataClick.indexOf("#") == -1) {
        var top = $('.top-imagen').outerHeight(true);
        $('html, body').animate({
            scrollTop: top
        }, 1000);
        loadView(dataClick, '#empty-fixedbar');   
        return;
    }      

    // Scroll
    if ($(this).data('home')) {
        if ($(dataClick).offset() === undefined) {
            loadView('Home/Home', dataClick);            
            return;
        } 
    } 
    var top = $(dataClick).offset().top;
    $('html, body').animate({
        scrollTop: top - 64
    }, 1000);
         
});

function animar() {
    $('.anim-flor').each(function () {
        if ($(this).data('anim') == 'on') {
            var n = parseInt($(this).data('n'));
            var current = parseInt($(this).data('i'));
            $(this).children('.anim').each(function () {
                if (parseInt($(this).data('i')) == current) {
                    $(this).removeClass('gray');
                    var targetH3 = $(this).data('h3target');
                    var targetP = $(this).data('ptarget');
                    var colorH3 = $(this).data('h3color');
                    var flecha1 = $(this).data('flecha1');
                    var flecha2 = $(this).data('flecha2');
                    var targetHref = $(this).data('hreftarget')
                    var targetHref1 = $(this).data('hreftarget1')
                    $(targetH3).html($(this).data('h3'));
                    $(targetP).html($(this).data('p'));
                    $(colorH3).css('color', $(this).data('color'));
                    $(flecha1).css('background-color', $(this).data('color'));
                    $(flecha2).css('background-color', $(this).data('color'));
                    $(targetHref).data("click", $(this).data('click'));
                    $(targetHref1).data("click", $(this).data('click'));
                    console.log("asd");
                } else {
                    $(this).addClass('gray');
                }
            });
            current = (current + 1) % n;
            $(this).data('i', current);
        }
    });
    setTimeout(animar, 3000);
}

$(function () {
    window.onpopstate = function (e) {
        if (firstHistory) return;

        // Trigger url load
        document.location = document.location;
    };

    loadView($("#body-div").data('call-url'), '');
    animar();    
});

