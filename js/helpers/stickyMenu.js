//http://jsfiddle.net/woun56vk/203/
gs.logoScrollResize = function(){
    gs.logo = document.getElementById("logo");
    gs.header = document.getElementById("header")
    gs.logoW = gs.logo.offsetWidth;
    gs.stick = gs.logo.offsetHeight + gs.logo.offsetTop;
    gs.maxScrollDistance = gs.header.offsetHeight;
    
    gs.widthAtMax = 120;
    gs.widthDiff = gs.logoW - gs.widthAtMax;
    gs.pixelsPerScroll = (gs.widthDiff / gs.maxScrollDistance);

}


gs.stickyMenu = function() {
    var content = document.getElementById("content");
    if(document.getElementsByClassName("home").length > 0){
        var scrollTopPos = Math.min(window.pageYOffset, gs.maxScrollDistance);
        var scrollChangePx =  Math.floor(scrollTopPos * gs.pixelsPerScroll);
        var zoomedWidth = gs.logoW - scrollChangePx;
        logo.style.maxWidth = zoomedWidth +"px";

        if (window.pageYOffset <= gs.maxScrollDistance && (window.innerHeight + window.scrollY) <= (document.body.offsetHeight) - document.getElementById("footer").offsetHeight) {
            content.style.paddingTop = gs.maxScrollDistance  - window.pageYOffset +"px";
        } 
    } else {
        console.log("hi");
        logo.style.maxWidth = gs.widthAtMax +"px"; 
        content.style.paddingTop = gs.header.offsetHeight +"px"; 
    }
}