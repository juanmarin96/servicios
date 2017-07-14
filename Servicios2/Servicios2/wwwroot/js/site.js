// Write your Javascript code.
var img = 2;
var imgest = 2;
var imgins = 1;
var imgomni = 1;

// Script home

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
})

// Script Estrategia

function changebgest() {
    $('.grayest').css('filter', 'grayscale(100%)');;
    if (imgest == 0) {
        $('#imagen-flor-7').css('filter', 'grayscale(0%)');
        $('#texto-variable').html("Aqui va texto de Branding");
        $('#titulo-variable').html("Branding");
    }
    if (imgest == 1) {
        $('#imagen-flor-6').css('filter', 'grayscale(0%)');
        $('#texto-variable').html("Aqui va texto de Crecimiento");
        $('#titulo-variable').html("Crecimiento");
    }
    if (imgest == 2) {
        $('#imagen-flor-5').css('filter', 'grayscale(0%)');
        $('#texto-variable').html("Aqui va texto de Insights");
        $('#titulo-variable').html("Insights");
    }
    if (imgest == 3) {
        $('#imagen-flor-3').css('filter', 'grayscale(0%)');
        $('#texto-variable').html("Aqui va texto de Omnichannel");
        $('#titulo-variable').html("Omnichannel");
    }
    if (imgest == 4) {
        $('#imagen-flor-4').css('filter', 'grayscale(0%)');
        $('#texto-variable').html("Aqui va texto de Marcas Blancas");
        $('#titulo-variable').html("Marcas Blancas");
    }
    if (imgest == 5) {
        $('#imagen-flor-2').css('filter', 'grayscale(0%)');
        $('#texto-variable').html("Aqui va texto de Pricing");
        $('#titulo-variable').html("Pricing");
    }
    imgest = (imgest + 1) % 6;
    setTimeout(changebgest, 10000);
}


$(function () {
    $('#imagen-flor-6').css('filter', 'grayscale(0%)');
    $('#texto-variable').html("Aqui va texto de Crecimiento");
    $('#titulo-variable').html("Crecimiento");
    setTimeout(changebgest, 10000);
})

//Script Estrategia Insights

function changebgins() {
    $('.grayins').css('filter', 'grayscale(100%)');;
    if (imgins == 0) {
        $('.insights2').css('filter', 'grayscale(0%)');
        $('#texto-insights').html("Cada consumidor y generación es único a su manera. Mientras que los Baby Boomers sólo seguían las reglas las generación X las rompió, la generación Y quiere co-crear las reglas mientras la generación Z crea sus propias reglas personales.");
        $('#titulo-insights').html("Insightful Planning");
    }
    if (imgins == 1) {
        $('.insights1').css('filter', 'grayscale(0%)');
        $('#texto-insights').html("Usando una mezcla híbrida de técnicas innovadoras. Somos capaces de encontrar y generar insights más frescos y poderosos, logrando potencializar el crecimiento de tu negocio.");
        $('#titulo-insights').html("Insightful Innovation");
    }

    imgins = (imgins + 1) % 2;
    setTimeout(changebgins, 10000);
}
$(function () {
    $('.insights1').css('filter', 'grayscale(0%)');
    $('#texto-insights').html("Usando una mezcla híbrida de técnicas innovadoras. Somos capaces de encontrar y generar insights más frescos y poderosos, logrando potencializar el crecimiento de tu negocio.");
    $('#titulo-insights').html("Insightful Innovation");
    setTimeout(changebgins, 10000);
})

//Script Estrategia Omnichannel

function changebgomni() {
    $('.grayomni').css('filter', 'grayscale(100%)');;
    if (imgomni == 0) {
        $('.offline').css('filter', 'grayscale(0%)');
        $('#texto-omnichannel').html("Usando una mezcla híbrida de técnicas innovadoras. Somos capaces de encontrar y generar insights más frescos y poderosos, logrando potencializar el crecimiento de tu negocio.");
        $('#titulo-omnichannel').html("Marketing Offline");
    }
    if (imgomni == 1) {
        $('.online').css('filter', 'grayscale(0%)');
        $('#texto-omnichannel').html("El marketing digital o e-marketing cubre toda la actividad de marketing a través de Internet. Puede ser un método extremadamente rentable para alcanzar a tu cliente objetivo “Target” cuando es manejado correctamente.");
        $('#titulo-omnichannel').html("Marketing Online");
    }
    if (imgomni == 2) {
        $('.tdl').css('filter', 'grayscale(0%)');
        $('#texto-omnichannel').html("Aqui va texto TDL");
        $('#titulo-omnichannel').html("TDL");
    }

    imgomni = (imgomni + 1) % 3;
    setTimeout(changebgomni, 10000);
}
$(function () {
    $('.offline').css('filter', 'grayscale(0%)');
    $('#texto-omnichannel').html("Usando una mezcla híbrida de técnicas innovadoras. Somos capaces de encontrar y generar insights más frescos y poderosos, logrando potencializar el crecimiento de tu negocio.");
    $('#titulo-omnichannel').html("Marketing Offline");
    setTimeout(changebgomni, 10000);
})