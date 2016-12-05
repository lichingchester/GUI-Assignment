/**
 * Created by lichi on 5/12/2016.
 */

var username = getParameterByName("username", document.url);
var password = getParameterByName("pwd", document.url);
var list = [];

$(document).ready(function(){
    // var users = JSON.parse(users_JSON);
    list = JSON_users.users;
    // alert(JSON_users.users[1].username);
    // alert("asdf");
    var chk = false;

    for(var user in list){
        if(list[user].username == username){
            if(list[user].password == password){
                setCookie("login", list[user].username, 120);
                break;
            }else{
                chk = true;
            }
        }else{
            chk = true;
        }

    }
    if(chk){
        $(".login-main").html("");
        alert("Invalid username or password!");
    }
})



function getParameterByName(name, url) {
    if (!url) {
        url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}