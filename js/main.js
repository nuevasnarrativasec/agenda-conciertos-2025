// slider
$(document).ready(function(){
    $('.slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        initialSlide: 7
    });

    /* var $slider = $('.slider-fechas').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        autoplay: false,
        autoplaySpeed: 1000,
        infinite: false,
        adaptiveHeight: true
    });*/

    /*$slider.on('afterChange', function(event, slick, currentSlide) {
        var vid = $(slick.$slides[currentSlide]).find('#ultimo');
            if ($(this).hasClass('slick-disabled"')) {
                window.location = "/especiales-multimedia/agenda-conciertos-peru-2023-multimedia-nndd/marzo/";   
            } else {
        
            }
        
    });*/

    $('.slider-fechas').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        console.log(nextSlide);
    });

    /*$("#ultimo").on('click', function(){
        window.location = "/especiales-multimedia/agenda-conciertos-peru-2023-multimedia-nndd/marzo/";   
        alert('alerta')
    });*/
    
    $(".btn-cerrar").click(function(){
        $(".box-main-buscador").fadeOut( "slow" );
    }); 

});




// barra de buscar
document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector('#search');
  
    const results = document.querySelectorAll(".results");
  
    const parent = document.querySelector('.results-container');
  
    parent.style.display = 'none';
  
    const options = {
      parent : parent,
      displayontype : 3,
      displayparent: 'flex',
      hideparent: 'none',
      noresultsmsg : true,
      noresultsmsg : 3,
      msgtag : 'div',
      msgtext : 'No hay resultados =['
    }
  
    lightSearch(input, results, options);
});
  

// botón de menú
var buttonArtista = document.getElementById('btn-artista');
var buttonFecha = document.getElementById('btn-fecha');

buttonArtista.onclick = function() {
    var div = document.getElementById('box-main-buscador-artista');
    if (div.style.display !== 'none') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
};

buttonFecha.onclick = function() {
    var div = document.getElementById('box-main-buscador-fechas');
    if (div.style.display !== 'none') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
};
