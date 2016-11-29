/**
 * Created by lichi on 29/11/2016.
 */


$("document").ready(function(){
    $("input").click(function () {
        this.setSelectionRange(0, this.value.length);
    });

})

$(window).scroll(function() {
    if($(this).scrollTop() <= 50){
        $(".navbar-main").removeClass("navbar-main-active");
    }else if($(this).scrollTop() > 150){
        $(".navbar-main").addClass("navbar-main-active");
    }

    // if($(this).scrollTop() > 150){
    //     alert("asdf");
    // }

    // if ($(this).scrollTop()>0)
    // {
    //     // $(".for-hide").fadeOut();
    //     $(".navbar-main").css("opacity", 0);
    //     $(".navbar-main").css("animation", "pulse 5s infinite");
    // }
    // else
    // {
    //     // $(".for-hide").fadeIn();
    //     $(".navbar-main").css("opacity", 1);
    //     $(".navbar-main").css("animation", "pulse 5s infinite");
    // }
});