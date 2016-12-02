/**
 * Created by chingli on 2/12/2016.
 */

var username = getParameterByName("uname", document.url);
var password = getParameterByName("pwd", document.url);
var address = getParameterByName("address", document.url);
var tel = getParameterByName("tel", document.url);

    $(document).ready(function(){

        $.ajax({
            url: "json/user.json",
            dataType: "text",
            success: function(data){
                var users = JSON.parse(data);
                users.users.push(
                    {
                        "username": username,
                        "password" : password,
                        "address": address,
                        "tel" : tel,
                        "point": 0
                    }
                );
                alert(users.users[0].username+"\nsuccess!");
            },
            error: function(data){
                alert("ASdf"+data);
            }
        })

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
