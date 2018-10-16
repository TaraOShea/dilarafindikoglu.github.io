gs.ScrollExecute = function() {
    $('.infin-products').infiniteScroll({
        // options
        path: '.next-btn',
        append: '.product',
        history: false,
        hideNav: '.pagination', 
        scrollThreshold: document.documentElement.offsetHeight/2, 
        status: '.page-load-status'
      });
}