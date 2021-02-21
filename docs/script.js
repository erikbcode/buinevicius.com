$(document).ready(function(){
   $(window).scroll(function(){
        addScrollBar();
    })
    // toggle menu/navbar script
    $('.menu-button').click(function(){
        $('.navbar .menu').toggleClass("active")
        $('.menu-button span').toggleClass("active")
    })
    $('.menu li a').click(function(){
        $('.navbar .menu').toggleClass("active")
        $('.menu-button span').toggleClass("active")
    })

    function addScrollBar() {
        if(this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        }
        else{
            $('.navbar').removeClass("sticky");
        }
    }
})