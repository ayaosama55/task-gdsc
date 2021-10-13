$(document).ready(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 200){
            $(".navbar-default").css("background-color","#000");
        } else {
            $(".navbar-default").css("background-color","transparent");
        }
    });
}); 