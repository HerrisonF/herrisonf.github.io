$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();
});

$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('.nav').addClass('affix');
    } else {
        $('.nav').removeClass('affix');
    }
});

//Fade da imagem principal
$(document).ready(function(){
    $(window).scroll(function(){
        $(".imagem-principal").css("opacity", 1 - $(window).scrollTop() / (($('.imagem-principal').height() + 300 ) / 1.5));
    });
});