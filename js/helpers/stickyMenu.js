gs.logo = document.getElementById("logo");
gs.logoW = gs.logo.offsetWidth;
gs.stick = gs.logo.offsetHeight + gs.logo.offsetTop;
gs.maxScrollDistance = gs.stick / 2; 

gs.widthAtMax = 160;
gs.widthDiff = gs.logoW - gs.widthAtMax;
gs.pixelsPerScroll = (gs.widthDiff / gs.maxScrollDistance);

gs.stickyMenu = function() {
    var header = document.getElementById("header").offsetHeight;
    var content = document.getElementById("content");

    var scrollTopPos = Math.min(window.pageYOffset, gs.maxScrollDistance);
    var scrollChangePx =  Math.floor(scrollTopPos * gs.pixelsPerScroll);
    var zoomedWidth = gs.logoW - scrollChangePx;
    logo.style.width = zoomedWidth +"px";

    if (window.pageYOffset >= gs.stick) {
        console.log("above",window.pageYOffset);
    } else {
        content.style.marginTop = header - window.pageYOffset +"px";
  }
}