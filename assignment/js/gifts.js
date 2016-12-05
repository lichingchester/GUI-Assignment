/**
 * Created by lichi on 5/12/2016.
 */
var list = [];

$(document).ready(function() {
    var users = JSON.parse(users_JSON);
    list = users.users;

    $(".point").html("");
    var user = getCookie("login");

    // alert("ASDf");
    for (var temp in list) {
        if(list[temp].username == user) {
            $(".point").append("Your bonus point is : " + list[temp].point + "<br>");
        }
    }
});

function gift_submit(){
    alert("You have not enough point!");
}