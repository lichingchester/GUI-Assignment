/**
 * Created by lichi on 29/11/2016.
 */

$("document").ready(function(){
    $("input").click(function () {
        this.setSelectionRange(0, this.value.length);
    });
    // if(getCookie("login") == ""){
    //     $(".navbar-main-input").html("");
    // }
    // deleteCookie("cart");
    // deleteCookie("login");
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

/****
 *  member ship function
 */

function openNav() {
    if(getCookie("login") != "") {
        document.getElementById("memberSlide").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    }
}

function closeNav() {
    document.getElementById("memberSlide").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
}


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
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length,c.length);
        }
    }
    return "";
}

function deleteCookie(name) {
    createCookie(name,"",-1);
}