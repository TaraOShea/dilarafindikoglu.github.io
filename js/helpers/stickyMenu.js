//http://jsfiddle.net/woun56vk/203/
gs.logoScrollResize = function(){
    gs.content = document.getElementById("content");
    gs.logo = document.getElementById("logo");
    gs.logotxt = document.getElementById("logo-text");
    gs.logosvg = document.getElementById("logo-svg");
    gs.header = document.getElementById("header");
    gs.logoW = Math.floor(gs.logo.offsetWidth);
    gs.stick = gs.logo.offsetHeight + gs.logo.offsetTop;
    gs.maxScrollDistance = gs.header.offsetHeight/2;
    
    gs.widthAtMax = 250;
    gs.widthDiff = gs.logoW - gs.widthAtMax;
    gs.pixelsPerScroll = (gs.widthDiff / gs.maxScrollDistance);

    if(document.body.scrollHeight < window.innerHeight && document.getElementsByClassName("home").length > 0){
        gs.content.style.paddingTop = gs.header.offsetHeight +"px";  
    }
}


gs.stickyMenu = function() {
    if(document.getElementsByClassName("home").length > 0){
        var scrollTopPos = Math.min(window.pageYOffset, gs.maxScrollDistance);
        var scrollChangePx =  Math.floor(scrollTopPos * gs.pixelsPerScroll);
        var zoomedWidth = gs.logoW - scrollChangePx;
        // var zoomedWidth = gs.logoW - (scrollChangePx*2);
        // if(zoomedWidth >= gs.widthAtMax) {
            gs.logo.style.maxWidth = zoomedWidth +"px";
        // }
        if (window.pageYOffset <= gs.maxScrollDistance && (window.innerHeight + window.scrollY) <= (document.body.offsetHeight) - document.getElementById("footer").offsetHeight) {
            gs.content.style.paddingTop = (gs.maxScrollDistance*2)  - window.pageYOffset +"px";
        } 

        if(gs.logo.offsetWidth <= gs.widthAtMax + 10) {
            gs.logosvg.style.marginTop = "-130px";
            gs.logotxt.style.display = "none";
        } else {
            gs.logosvg.style.marginTop = "0px";
            gs.logotxt.style.display = "block"; 
        }
    } else {
        console.log("here");
        // gs.logo.style.maxWidth = gs.widthAtMax +"px"; 
        // gs.content.style.paddingTop = gs.header.offsetHeight +"px"; 
    }
}