$(document).ready(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 200){
            $(".navbar-default").css("background-color","#1F1F1F");
        } else {
            $(".navbar-default").css("background-color","transparent");
        }
    });
    $(".featured .feat-content").mouseenter(function() {
        $(this).find(".cont").fadeIn();
    });
    $(".featured .feat-content").mouseleave(function() {
        $(this).find(".cont").fadeOut();
    });
}); 
