/**
 * Created by chingli on 2/12/2016.
 */

var username = getParameterByName("uname", document.url);
var password = getParameterByName("pwd", document.url);
var address = getParameterByName("address", document.url);
var tel = getParameterByName("tel", document.url);

    $(document).ready(function(){

        var list = [];
        var users = JSON.parse(users_JSON);
        list = users.users;

        var newUser = {};
        newUser["username"] = username;
        newUser["password"] = password;
        newUser["address"] = address;
        newUser["tel"] = tel;
        newUser["point"] = 0;

        list.push(newUser);
        users_JSON = JSON.stringify(eval("(" + list + ")"));

        var list2 = [];
        var users2 = JSON.parse(users_JSON);
        list2 = users2.users;
        var output = "";
        for(var user in list2){
            output += list2[user].username + "\n";
        }
        alert(output);

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



// show product list used
// $.ajax({
//     url: "json/user.json",
//     dataType: "text",
//     success: function(data){
//         var list = [];
//         var users = JSON.parse(data);
//         list = users.users;
//
//         var output = "";
//         for(var user in list){
//             output += list[user].username + "\n";
//         }
//
//         var newUser = {};
//         newUser["username"] = username;
//         newUser["password"] = password;
//         newUser["address"] = address;
//         newUser["tel"] = tel;
//         newUser["point"] = 0;
//
//         list.push(newUser);
//
//         data.upload
//
//         // alert(output);
//
//     },
//     error: function(data){
//         alert("ASdf"+data);
//     }
// })