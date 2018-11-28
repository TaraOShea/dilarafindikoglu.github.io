gs.caroselflick = function() {
    if($('.carosel-images').length > 0){
        gs.carouselFlty = $('.carosel-images').flickity({
            cellSelector: '.carosel-image', 
            contain: true,
            resize: true,
            pageDots: true, 
            prevNextButtons: false,
            dragThreshold: 20,
            setGallerySize: false,
            autoPlay: 5000 
        });
        gs.carouselFlty.flickity();
    }   
}
