/**
 * Created by lichi on 5/12/2016.
 */
var list = [];
var cartList = [];
var totalPrice = 0;

$(document).ready(function(){
    var name = getParameterByName("name", document.url);

    // if(name != "") {
        cartList = JSON.parse(getCookie("cart"));
        cartList.push(name);
        setCookie("cart", JSON.stringify(cartList), 120);
    // }

    $.ajax({
        url: "json/product.json",
        dataType: "text",
        async: false,
        success: function(data){
            var products = JSON.parse(data);
            list = products.products;
        },
        error: function(data){
            alert("ASdf"+data);
        }
    });

    var result = JSON.parse(getCookie("cart"));
    for(var temp in result){
        // alert(result[temp]);
        for(var item in list) {
            if(list[item].name == result[temp]) {
                // alert(temp +"\n"+ list[item].price);
                $(".cart-table").append("" +
                    "<tr>" +
                        "<td>" +
                            result[temp] +
                        "</td>" +
                        "<td>" +
                            list[item].price +
                        "</td>" +
                    "</tr>");
                totalPrice += list[item].price;
            }
        }
    }
    $(".cart-table").append("" +
        "<tr>" +
        "<td>" +
        "Total Price:   " +
        "</td>" +
        "<td>" +
        totalPrice +
        "</td>" +
        "</tr>");

});

function test(){
    var userList = [];
    var users = JSON.parse(users_JSON);
    userList = users.users;
    var curUser = getCookie("login");

    for(var temp in userList){
        if(userList[temp].username == curUser){
            userList[temp].point = totalPrice;
        }
    }

    users_JSON = JSON.stringify(eval("(" + userList + ")"));
    alert("ASdf");
}

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
