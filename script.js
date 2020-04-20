$(window).scroll(function(event){
    if($(window).scrollTop() / ($(document).height() - $(window).height()) > 0.25){
        $(".scroll-top").css({
            display: "block"
        })
    }
    else{
        $(".scroll-top").css({
            display: "none"
        })
    }
})

function scrollToTop(){
    document.scrollingElement.scrollTop = 0;
}