gs.flick = function() {
    if($('.product-images')){
        gs.carousel = $('.product-images').flickity({
            cellSelector: '.product-image', 
            contain: true,
            adaptiveHeight: true
        });
        if($(window).width() <= 920) {
            gs.carousel.flickity();
            gs.flickEnabled = true;
        } else {
            gs.carousel.flickity('destroy');
            gs.flickEnabled = false;
        }
    }   
}
