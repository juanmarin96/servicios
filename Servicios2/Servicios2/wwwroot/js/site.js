// Write your Javascript code.
var img = 2;
var imgest = 2;
var imgshop = 3;
var imgmix = 1;
var imgcmr = 1;
var imgins = 1;
var imgomni = 1;

// Script home
/*
function changebg() {
    $('.gray').css('filter', 'grayscale(100%)');;
    if (img == 0) {
        $('.img-estrategia').css('filter', 'grayscale(0%)');
        $('#texto-encabezado').html("Aqui va texto de Estrategia");
        $('#titulo-encabezado').html("Estrategia  ");
        $('.titulo-encab').css('color', '#ff6d40');
        $('.flecha-servicios').css('background', '#ff6d40');
        $('.flecha-servicios-2').css('background', '#ff6d40');
    }        
    if (img == 1) {
        $('.img-innovacion').css('filter', 'grayscale(0%)');
        $('#texto-encabezado').html("Aqui va texto de Innovacion");
        $('#titulo-encabezado').html("Innovacion  ");
        $('.titulo-encab').css('color', '#ffab40');
        $('.flecha-servicios').css('background', '#ffab40');
        $('.flecha-servicios-2').css('background', '#ffab40');
    }   
    if (img == 2) {
        $('.img-neuromarketing').css('filter', 'grayscale(0%)');
        $('#texto-encabezado').html("Aqui va texto de Neuromarketing");
        $('#titulo-encabezado').html("Neuromarketing  ");
        $('.titulo-encab').css('color', '#ffea00');
        $('.flecha-servicios').css('background', '#ffea00');
        $('.flecha-servicios-2').css('background', '#ffea00');
    }
    if (img == 3) {
        $('.img-cmr').css('filter', 'grayscale(0%)');
        $('#texto-encabezado').html("Aqui va texto de Cmr");
        $('#titulo-encabezado').html("Cmr  ");
        $('.titulo-encab').css('color', '#b1ff58');
        $('.flecha-servicios').css('background', '#b1ff58');
        $('.flecha-servicios-2').css('background', '#b1ff58');
    }
    if (img == 4) {
        $('.img-shopper').css('filter', 'grayscale(0%)');
        $('#texto-encabezado').html("Aqui va texto de Shopper");
        $('#titulo-encabezado').html("Shopper  ");
        $('.titulo-encab').css('color', '#40c4ff');
        $('.flecha-servicios').css('background', '#40c4ff');
        $('.flecha-servicios-2').css('background', '#40c4ff');
    }
    if (img == 5) {
        $('.img-marketing-mix').css('filter', 'grayscale(0%)');
        $('#texto-encabezado').html("Aqui va texto de Marketing-mix");
        $('#titulo-encabezado').html("Marketing-mix  ");
        $('.titulo-encab').css('color', '#7b4dff');
        $('.flecha-servicios').css('background', '#7b4dff');
        $('.flecha-servicios-2').css('background', '#7b4dff');
    }     
    img = (img + 1) % 6;
    setTimeout(changebg, 10000);
}

$(function () {
    $('.img-innovacion').css('filter', 'grayscale(0%)');
    $('#texto-encabezado').html("Aqui va texto de Innovacion");
    $('#titulo-encabezado').html("Innovacion  ");
    $('.titulo-encab').css('color', '#ffab40');
    $('.flecha-servicios').css('background', '#ffab40');
    $('.flecha-servicios-2').css('background', '#ffab40');
    setTimeout(changebg, 10000);
})*/

// Script Estrategia

function changebgest() {
    $('.grayest').css('filter', 'grayscale(100%)');;
    if (imgest == 0) {
        $('#imagen-flor-7').css('filter', 'grayscale(0%)');
        $('#texto-variable').html("Aqui va texto de Branding");
        $('#titulo-variable').html("Branding");
        $("#Est").attr("href", "#branding-j");
    }
    if (imgest == 1) {
        $('#imagen-flor-6').css('filter', 'grayscale(0%)');
        $('#texto-variable').html("Aqui va texto de Crecimiento");
        $('#titulo-variable').html("Crecimiento");
        $("#Est").attr("href", "#ver-mas");
    }
    if (imgest == 2) {
        $('#imagen-flor-5').css('filter', 'grayscale(0%)');
        $('#texto-variable').html("Aqui va texto de Insights");
        $('#titulo-variable').html("Insights");
        $("#Est").attr("href", "#insight-j");
    }
    if (imgest == 3) {
        $('#imagen-flor-3').css('filter', 'grayscale(0%)');
        $('#texto-variable').html("Aqui va texto de Omnichannel");
        $('#titulo-variable').html("Omnichannel");
        $("#Est").attr("href", "#Omnichannel-j");
    }
    if (imgest == 4) {
        $('#imagen-flor-4').css('filter', 'grayscale(0%)');
        $('#texto-variable').html("Aqui va texto de Marcas Blancas");
        $('#titulo-variable').html("Marcas Blancas");
        $("#Est").attr("href", "#marcas-blancas-j");
    }
    if (imgest == 5) {
        $('#imagen-flor-2').css('filter', 'grayscale(0%)');
        $('#texto-variable').html("Aqui va texto de Pricing");
        $('#titulo-variable').html("Pricing");
        $("#Est").attr("href", "#pricing-j");
    }
    imgest = (imgest + 1) % 6;
    setTimeout(changebgest, 10000);
}


$(function () {
    $('#imagen-flor-6').css('filter', 'grayscale(0%)');
    $('#texto-variable').html("Aqui va texto de Crecimiento");
    $('#titulo-variable').html("Crecimiento");
    $("#Est").attr("href", "#ver-mas");
    setTimeout(changebgest, 10000);
})

//Script Estrategia Insights

function changebgins() {
    $('.grayins').css('filter', 'grayscale(100%)');;
    if (imgins == 0) {
        $('.insights2').css('filter', 'grayscale(0%)');
        $('#texto-insights').html("Cada consumidor y generación es único a su manera. Mientras que los Baby Boomers sólo seguían las reglas las generación X las rompió, la generación Y quiere co-crear las reglas mientras la generación Z crea sus propias reglas personales.");
        $('#titulo-insights').html("Insightful Planning");
        $("#insight-bj").attr("href", "#Planning-j");
    }
    if (imgins == 1) {
        $('.insights1').css('filter', 'grayscale(0%)');
        $('#texto-insights').html("Usando una mezcla híbrida de técnicas innovadoras. Somos capaces de encontrar y generar insights más frescos y poderosos, logrando potencializar el crecimiento de tu negocio.");
        $('#titulo-insights').html("Insightful Innovation");
        $("#insight-bj").attr("href", "#Innovation-j");
    }

    imgins = (imgins + 1) % 2;
    setTimeout(changebgins, 10000);
}
$(function () {
    $('.insights1').css('filter', 'grayscale(0%)');
    $('#texto-insights').html("Usando una mezcla híbrida de técnicas innovadoras. Somos capaces de encontrar y generar insights más frescos y poderosos, logrando potencializar el crecimiento de tu negocio.");
    $('#titulo-insights').html("Insightful Innovation");
    $("#insight-bj").attr("href", "#Innovation-j");
    setTimeout(changebgins, 10000);
})

//Script Estrategia Omnichannel

function changebgomni() {
    $('.grayomni').css('filter', 'grayscale(100%)');;
    if (imgomni == 0) {
        $('.offline').css('filter', 'grayscale(0%)');
        $('#texto-omnichannel').html("Usando una mezcla híbrida de técnicas innovadoras. Somos capaces de encontrar y generar insights más frescos y poderosos, logrando potencializar el crecimiento de tu negocio.");
        $('#titulo-omnichannel').html("Marketing Offline");
        $("#icon-om").attr("href", "#Offline-j");
    }
    if (imgomni == 1) {
        $('.online').css('filter', 'grayscale(0%)');
        $('#texto-omnichannel').html("El marketing digital o e-marketing cubre toda la actividad de marketing a través de Internet. Puede ser un método extremadamente rentable para alcanzar a tu cliente objetivo “Target” cuando es manejado correctamente.");
        $('#titulo-omnichannel').html("Marketing Online");
        $("#icon-om").attr("href", "#Online-j");
    }
    if (imgomni == 2) {
        $('.tdl').css('filter', 'grayscale(0%)');
        $('#texto-omnichannel').html("Aqui va texto TDL");
        $('#titulo-omnichannel').html("TDL");
        $("#icon-om").attr("href", "#tdl-j");

    }

    imgomni = (imgomni + 1) % 3;
    setTimeout(changebgomni, 10000);
}
$(function () {
    $('.offline').css('filter', 'grayscale(0%)');
    $('#texto-omnichannel').html("Usando una mezcla híbrida de técnicas innovadoras. Somos capaces de encontrar y generar insights más frescos y poderosos, logrando potencializar el crecimiento de tu negocio.");
    $('#titulo-omnichannel').html("Marketing Offline");
    setTimeout(changebgomni, 10000);
    $("#icon-om").attr("href", "#Offline-j");
})

//Script Shopper

function changebgshop() {
    $('.gray-shop').css('filter', 'grayscale(100%)');;
    if (imgshop == 0) {
        $('#imag-shopper-2').css('filter', 'grayscale(0%)');
        $('#texto-variable-shop').html("Aqui va texto de img 2");
        $('#titulo-variable-shop').html("Aqui va titulo img 2");
    }
    if (imgshop == 1) {
        $('#imag-shopper-7').css('filter', 'grayscale(0%)');
        $('#texto-variable-shop').html("Aqui va texto de img 7");
        $('#titulo-variable-shop').html("Aqui va titulo img 7");
    }
    if (imgshop == 2) {
        $('#imag-shopper-6').css('filter', 'grayscale(0%)');
        $('#texto-variable-shop').html("Aqui va texto de img 6");
        $('#titulo-variable-shop').html("Aqui va titulo img 6");
        $("#Ico-Shopper").attr("href", "#Sho");
    }
    if (imgshop == 3) {
        $('#imag-shopper-5').css('filter', 'grayscale(0%)');
        $('#texto-variable-shop').html("Aqui va texto de img 5");
        $('#titulo-variable-shop').html("Aqui va titulo img 5");
    }
    if (imgshop == 4) {
        $('#imag-shopper-3').css('filter', 'grayscale(0%)');
        $('#texto-variable-shop').html("Aqui va texto de img 3");
        $('#titulo-variable-shop').html("Aqui va titulo img 3");
        $("#Ico-Shopper").attr("href", "#shopper-j");
    }
    if (imgshop == 5) {
        $('#imag-shopper-4').css('filter', 'grayscale(0%)');
        $('#texto-variable-shop').html("Aqui va texto de img 4");
        $('#titulo-variable-shop').html("Aqui va titulo img 4");
    }
    imgshop = (imgshop + 1) % 6;
    setTimeout(changebgshop, 10000);
}

$(function () {
    $('#imag-shopper-6').css('filter', 'grayscale(0%)');
    $('#texto-variable-shop').html("Aqui va texto de img 6");
    $('#titulo-variable-shop').html("Aqui va titulo img 6");
    setTimeout(changebgshop, 10000);
})

//Script Mix

function changebgmix() {
    $('.gray-mix').css('filter', 'grayscale(100%)');;
    if (imgmix == 0) {
        $('#mix-flor-7').css('filter', 'grayscale(0%)');
        $('#texto-variable-mix').html("Aqui va texto de img 7");
        $('#titulo-variable-mix').html("Aqui va titulo img 7");
       
    }
    if (imgmix == 1) {
        $('#mix-flor-6').css('filter', 'grayscale(0%)');
        $('#texto-variable-mix').html("Aqui va texto de img 6");
        $('#titulo-variable-mix').html("Aqui va titulo img 6");
    }
    if (imgmix == 2) {
        $('#mix-flor-5').css('filter', 'grayscale(0%)');
        $('#texto-variable-mix').html("Aqui va texto de img 5");
        $('#titulo-variable-mix').html("Aqui va titulo img 5");
        $("#Ico-Mix").attr("href", "#promo");
    }
    if (imgmix == 3) {
        $('#mix-flor-3').css('filter', 'grayscale(0%)');
        $('#texto-variable-mix').html("Aqui va texto de img 3");
        $('#titulo-variable-mix').html("Aqui va titulo img 3");
    }

    imgmix = (imgmix + 1) % 4;
    setTimeout(changebgmix, 10000);
}

$(function () {
    $('#mix-flor-7').css('filter', 'grayscale(0%)');
    $('#texto-variable-mix').html("Aqui va texto de img 7");
    $('#titulo-variable-mix').html("Aqui va titulo img 7");
    setTimeout(changebgmix, 10000);
})

//Script Cmr

function changebgcmr() {
    $('.gray-cmr').css('filter', 'grayscale(100%)');;
    if (imgcmr == 0) {
        $('#cmr2').css('filter', 'grayscale(0%)');
        $('#texto-variable-cmr').html("Aqui va texto de img 2");
        $('#titulo-variable-cmr').html("Aqui va titulo img 2");
    }
    if (imgcmr == 1) {
        $('#cmr1').css('filter', 'grayscale(0%)');
        $('#texto-variable-cmr').html("Aqui va texto de img 1");
        $('#titulo-variable-cmr').html("Aqui va titulo img 1");
        $("#ico-cmr").attr("href", "#ver-mas");
    }
    if (imgcmr == 2) {
        $('#cmr3').css('filter', 'grayscale(0%)');
        $('#texto-variable-cmr').html("Aqui va texto de img 3");
        $('#titulo-variable-cmr').html("Aqui va titulo img 3");
        $("#ico-cmr").attr("href", "#internal-brand");
    }

    imgcmr = (imgcmr + 1) % 3;
    setTimeout(changebgcmr, 10000);
}

$(function () {
    $('#cmr2').css('filter', 'grayscale(0%)');
    $('#texto-variable-cmr').html("Aqui va texto de img 2");
    $('#titulo-variable-cmr').html("Aqui va titulo img 2");
    setTimeout(changebgcmr, 10000);
})

$('.anim-flor').hover(function () {
    $(this).data('anim', 'off');
    
    $(this).children('.anim').each(function () {
        $(this).addClass('gray');
    });
});

/*$('.anim-flor').mouseout(function () {
    $(this).data('anim', 'on');
});*/

function animar() {
    $('.anim-flor').each(function () {
        if ($(this).data('anim') == 'on') {
            var n = parseInt($(this).data('n'));
            var current = parseInt($(this).data('i'));
            var targetH3 = $(this).data('h3target');
            $(this).children('.anim').each(function () {
                if (parseInt($(this).data('i')) == current) {
                    $(this).removeClass('gray');
                    $(targetH3).html($(this).data('h3'));
                } else {
                    $(this).addClass('gray');
                }                
            });
            current = (current + 1) % n;
            $(this).data('i', current);            
        }        
    });
    setTimeout(animar, 500);
}

$(function () {
    animar();
});