$(document).ready(function(){
    $(".menu-toggle").click(function(){
        $(".menu-open").toggle(200);
        $(this).toggleClass("close-menu");
    })

    $(".play").click(function(){
        $(".play").css("display","none");
        $(".pause").css("display", "block");
    })
    $(".pause").click(function(){
        $(".pause").css("display","none");
        $(".play").css("display", "block");
    })
});