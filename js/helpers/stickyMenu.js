//http://jsfiddle.net/woun56vk/203/

gs.content = document.getElementById("content");
gs.logo = document.getElementById("logo");
gs.logotxt = document.getElementById("logo-text");
gs.logosvg = document.getElementById("logo-svg");
gs.header = document.getElementById("header");
gs.nav = document.getElementById("main-nav");
gs.carousel = document.getElementById("carousel");

gs.logoScrollResize = function(){
    gs.logoW = Math.floor(gs.logo.offsetWidth);

    if(gs.carousel && window.innerWidth > 740 ){ 
        gs.logoH = document.documentElement.clientHeight - 75;
    } else {
        gs.logoH = ((document.documentElement.clientHeight/100)*85) - 75;
  
    }

    gs.heightAtMax = 150;
    gs.widthAtMax = 150;

    if(gs.carousel){
        gs.maxScrollDistance = gs.carousel.offsetHeight - gs.widthAtMax;
    } else {
        gs.maxScrollDistance = gs.header.offsetHeight/2;
    }



    gs.widthDiff = gs.logoW - gs.widthAtMax;
    gs.pixelsPerScroll = (gs.widthDiff / gs.maxScrollDistance);
    
    if(gs.carousel){
        gs.heightDiff = gs.logoH - gs.heightAtMax;
        gs.heightPixelsPerScroll = (gs.heightDiff / gs.maxScrollDistance);
    }

    if(!gs.carouse && document.body.scrollHeight < document.documentElement.clientHeight && document.getElementsByClassName("home").length > 0){
        gs.content.style.paddingTop = gs.header.offsetHeight +"px";  
    } else {
        gs.content.style.paddingTop = "70px";  
    }
}


gs.stickyMenu = function() {
    if(document.getElementsByClassName("home").length > 0){
        gs.scrollTopPos = Math.min(window.pageYOffset, gs.maxScrollDistance);
        gs.scrollChangePx =  Math.floor(gs.scrollTopPos * gs.pixelsPerScroll);
        gs.zoomedWidth = gs.logoW - gs.scrollChangePx;  
        gs.logo.style.maxWidth = gs.zoomedWidth +"px";

        gs.heightscrollTopPos = Math.min(window.pageYOffset, gs.maxScrollDistance);
        gs.heightScrollChangePx =  Math.floor(gs.heightscrollTopPos * gs.heightPixelsPerScroll);
        gs.zoomedHeight = gs.logoH - gs.heightScrollChangePx;
        gs.logo.style.height = gs.zoomedHeight +"px";
        if(document.getElementsByClassName('flickity-page-dots').length > 0) {
            document.getElementsByClassName('flickity-page-dots')[0].style.display = "block";
        }
    
        if(gs.carousel && window.pageYOffset >= gs.carousel.offsetHeight - gs.heightAtMax) {
            gs.logo.style.maxWidth = gs.zoomedWidth +"px";
            gs.logo.style.height = gs.zoomedHeight/2+"px";
            document.getElementsByClassName('flickity-page-dots')[0].style.display = "none";
        } else if (!gs.carousel && window.pageYOffset <= gs.maxScrollDistance && (document.documentElement.clientHeight + window.scrollY) <= (document.body.offsetHeight) - document.getElementById("footer").offsetHeight) {
            gs.content.style.paddingTop = (gs.maxScrollDistance*2) - window.pageYOffset +"px";
        } 

        if(gs.logo.offsetWidth <= gs.widthAtMax + 10) {
            gs.header.style.paddingTop = "0";
            gs.header.style.backgroundColor = "#FFFFFF";
            if(gs.carousel){
                gs.logosvg.style.marginTop = "-22px";
            }else{
                gs.logosvg.style.marginTop = "-60px";
            }
            gs.logotxt.style.display = "none";
            gs.nav.style.paddingTop = "8px";
            gs.nav.style.paddingBottom = "3px";
        } else {
            gs.header.style.paddingTop = "60px";
            gs.header.style.backgroundColor = "transparent";
            if(gs.carousel){
                // document.getElementsByClassName('flickity-page-dots')[0].style.display = "block";
            }
            gs.logosvg.style.marginTop = "0px";
            gs.logotxt.style.display = "block"; 
            gs.nav.style.paddingTop = "30px";
            gs.nav.style.paddingBottom = "20px";
        }
    } else {
        console.log("here");
        // gs.logo.style.maxWidth = gs.widthAtMax +"px"; 
        // gs.content.style.paddingTop = gs.header.offsetHeight +"px"; 
    }
}