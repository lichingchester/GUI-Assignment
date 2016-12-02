/**
 * Created by lichi on 29/11/2016.
 */


$("document").ready(function(){
    $("input").click(function () {
        this.setSelectionRange(0, this.value.length);
    });

    // $(".icon").click(function (){
    //     alert($(".icon").height());
    // });
    //
    // $(".navbar-main").click(function (){
    //     alert($(window).scrollTop());
    // });

})

$(window).scroll(function() {
    if($(this).scrollTop() <= $(".icon").height()+150){
        $(".navbar-main-input").removeClass("navbar-main-active");
        $(".navbar-main-input").addClass("navbar-main-active2");
    }else if($(this).scrollTop() > $(".icon").height()+150){
        $(".navbar-main-input").removeClass("navbar-main-active2");
        $(".navbar-main-input").addClass("navbar-main-active");
    }
});

/**
 * register
 */

window.onclick = function(event) {
    // alert("asdf");
    if (event.target == register) {
        document.getElementById('register-dialog').style.display="none";
    }
}

/********************************** end ******************************/