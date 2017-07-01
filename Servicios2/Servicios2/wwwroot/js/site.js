// Write your Javascript code.
var img = 2;

function changebg() {
    $('.gray').css('filter', 'grayscale(100%)');;
    if (img == 0) {
        $('.img-estrategia').css('filter', 'grayscale(0%)');
        $('#texto-encabezado').html("Aqui va texto de Estrategia");
        $('#titulo-encabezado').html("Estrategia");
        $('.titulo-encab').css('color', '#ff6d40');
    }        
    if (img == 1) {
        $('.img-innovacion').css('filter', 'grayscale(0%)');
        $('#texto-encabezado').html("Aqui va texto de Innovacion");
        $('#titulo-encabezado').html("Innovacion");
        $('.titulo-encab').css('color', '#ffab40');
    }   
    if (img == 2) {
        $('.img-neuromarketing').css('filter', 'grayscale(0%)');
        $('#texto-encabezado').html("Aqui va texto de Neuromarketing");
        $('#titulo-encabezado').html("Neuromarketing");
        $('.titulo-encab').css('color', '#ffea00');
    }
    if (img == 3) {
        $('.img-cmr').css('filter', 'grayscale(0%)');
        $('#texto-encabezado').html("Aqui va texto de Cmr");
        $('#titulo-encabezado').html("Cmr");
        $('.titulo-encab').css('color', '#b1ff58');
    }
    if (img == 4) {
        $('.img-shopper').css('filter', 'grayscale(0%)');
        $('#texto-encabezado').html("Aqui va texto de Shopper");
        $('#titulo-encabezado').html("Shopper");
        $('.titulo-encab').css('color', '#40c4ff');
    }
    if (img == 5) {
        $('.img-marketing-mix').css('filter', 'grayscale(0%)');
        $('#texto-encabezado').html("Aqui va texto de Marketing-mix");
        $('#titulo-encabezado').html("Marketing-mix");
        $('.titulo-encab').css('color', '#7b4dff');
    }     
    img = (img + 1) % 6;
    setTimeout(changebg, 10000);
}

$(function () {
    $('.img-innovacion').css('filter', 'grayscale(0%)');
    $('#texto-encabezado').html("Aqui va texto de Innovacion");
    $('#titulo-encabezado').html("Innovacion");
    $('.titulo-encab').css('color', '#ffab40');
    setTimeout(changebg, 10000);
})


