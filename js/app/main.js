var gs = gs || {};

function onReady() {
 gs.logoScrollResize();
 gs.stickyMenu();
 gs.flick();
}

function onResize() {
    // gs.logoScrollResize();
    gs.stickyMenu();
    gs.flick();
}

function onScroll() {
    gs.stickyMenu();
}

$(document).ready(onReady);
$(window).resize(onResize);
$(window).scroll(onScroll);