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
});