$(function () {

// menu btn 
$(".menubtn").on("click",function () {
    $(".menushow").addClass("activeMenu")
});

// remove class active menu 
$(".close-menu").on("click",function () {
    $(".menushow").removeClass("activeMenu")
});


});