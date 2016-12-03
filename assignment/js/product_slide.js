/**
 * Created by lichi on 4/12/2016.
 */


var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("set-white", "");
    }
    x[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += "set-white";
}

function changeImgTimer() {
    // setInterval(plusDivs(1), 1000);
    // setTimeout(alert("Asdf"),1000);
    setTimeout(function(){
        // showDivs(slideIndex++);
        plusDivs(1);
        changeImgTimer();
    }, 10000);
}
