var gs = gs || {};

function onReady() {
 gs.stickyMenu();
}

function onResize() {

}

function onScroll() {
    gs.stickyMenu();
}

$(document).ready(onReady);
$(window).resize(onResize);
$(window).scroll(onScroll);