/**
 * Created by lichi on 29/11/2016.
 */


$("document").ready(function(){
    $("input").click(function () {
        this.setSelectionRange(0, this.value.length);
    });

})

$(window).scroll(function() {
    if($(this).scrollTop() <= 300){
        $(".navbar-main-input").removeClass("navbar-main-active");
        $(".navbar-main-input").addClass("navbar-main-active2");
    }else if($(this).scrollTop() > 300){
        $(".navbar-main-input").removeClass("navbar-main-active2");
        $(".navbar-main-input").addClass("navbar-main-active");
    }
});