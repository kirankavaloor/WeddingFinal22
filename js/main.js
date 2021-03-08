

$(window).on("load",function(){

    
    $(".loading").fadeOut(300, function() {
        $('body').removeClass('loadingbody');
    });
    
    let slideIndex = $(".slide.active").index();

    const slideLen = $(".slide").length;
    

    function slideShow(){
        console.log(slideIndex)
        $(".slide").removeClass("active").eq(slideIndex).addClass("active");

        if(slideIndex == slideLen-1){
            slideIndex = 0;
        }else {
            slideIndex++;
        }
        setTimeout(slideShow,5000);
    }
    slideShow();
})



$.scrollIt({
    topOffset: -50
});