/**
 * Created by lichi on 4/12/2016.
 */

var type = getParameterByName("type", document.url);
var news_1;
var news_2;
var news_3;
var list = [];
var currentList = [];
var current_selection = "";

$(document).ready(function(){
    // $.ajax({
    //     url: "json/data.json",
    //     dataType: "json",
    //     async: false,
    //     success: function(data){
    //         var products = JSON.parse(data);
    //         list = products.products;
    //
    //         var output = "";
    //         for(var item in list){
    //             if(list[item].type == "apple"){
    //                 output += list[item].name + "\n";
    //             }
    //         }
    //
    //         // alert(output);
    //     },
    //     error: function(data){
    //         alert("ASdf"+data);
    //     }
    // });

    // var products = JSON.parse(JSON_products);
    list = JSON_products.products;
    // alert(list[0].name);

    if(type == "apple"){
        appleSetting();
    }else if(type == "desktop"){
        desktopSetting();
    }else if(type == "tablet"){
        tabletSetting();
    }

    $("#new_1").attr("src",news_1);
    $("#new_2").attr("src",news_2);
    $("#new_3").attr("src",news_3);

    $("#list-option-all").click(function(){
        listProducts(type, "", "");
    });
    $("#list-option-desktop").click(function(){
        listProducts(type, "desktop", "");
    });
    $("#list-option-laptop").click(function(){
        listProducts(type, "laptop", "");
    });
    $("#list-option-pad").click(function(){
        listProducts(type, "tablet", "");
    });
    $("#list-option-watch").click(function(){
        listProducts(type, "watch", "");
    });
    $("#list-option-phone").click(function(){
        listProducts(type, "phone", "");
    });
    $("#list-option-lenovo").click(function(){
        listProducts(type, "lenovo", "");
    });
    $("#list-option-samsung").click(function(){
        listProducts(type, "samsung", "");
    });
    $("#list-option-hp").click(function(){
        listProducts(type, "hp", "");
    });
    $("#search-btn").click(function(){
        listProducts(type, current_selection, document.getElementById("search-keyword").value);
    //     alert(document.getElementById("search-keyword").value);
    })

});

// function
function appleSetting() {
    // hp_2
    $("#new_1").attr("src", "img/product/mac/news/iphone7.jpg");
    // hp_6
    $("#new_2").attr("src", "img/product/mac/news/macpro.jpg");
    // hp_3
    $("#new_3").attr("src", "img/product/mac/news/iPadmini4.png");

    $("#header-title").text("Apple");

    // search-left-selection-type
    $("#search-type-list").append("" +
        "<li>" +
        "<input type='radio' id='list-option-all' name='list-option' checked>" +
        "<label for='list-option-all'>All Type</label>" +
        "<div class='check'></div>" +
        "</li>" +
        "<li>" +
        "<input type='radio' id='list-option-desktop' name='list-option'>" +
        "<label for='list-option-desktop'>Desktop</label>" +
        "<div class='check'></div>" +
        "</li>" +
        "<li>" +
        "<input type='radio' id='list-option-laptop' name='list-option'>" +
        "<label for='list-option-laptop'>Laptop</label>" +
        "<div class='check'></div>" +
        "</li>" +
        "<li>" +
        "<input type='radio' id='list-option-pad' name='list-option'>" +
        "<label for='list-option-pad'>Pad</label>" +
        "<div class='check'></div>" +
        "</li>" +
        "<li>" +
        "<input type='radio' id='list-option-watch' name='list-option'>" +
        "<label for='list-option-watch'>Watch</label>" +
        "<div class='check'></div>" +
        "</li>" +
        "<li>" +
        "<input type='radio' id='list-option-phone' name='list-option'>" +
        "<label for='list-option-phone'>Phone</label>" +
        "<div class='check'></div>" +
        "</li>" +
        "");

        listProducts("apple", "", "");
}

function desktopSetting(){
    // hp_2
    news_1 = "img/product/desktop/news/4.jpg";
    // hp_6
    news_2 = "img/product/desktop/news/5.jpg";
    // hp_3
    news_3 = "img/product/desktop/news/7.jpg";

    $("#header-title").text("Desktop");

    // search-left-selection-type
    $("#search-type-list").append("" +
        "<li>" +
            "<input type='radio' id='list-option-all' name='list-option' checked>" +
            "<label for='list-option-all'>All Type</label>" +
            "<div class='check'></div>" +
        "</li>" +
        "<li>" +
            "<input type='radio' id='list-option-hp' name='list-option'>" +
            "<label for='list-option-hp'>HP</label>" +
            "<div class='check'></div>" +
        "</li>" +
        "<li>" +
            "<input type='radio' id='list-option-lenovo' name='list-option'>" +
            "<label for='list-option-lenovo'>Lenovo</label>" +
            "<div class='check'></div>" +
        "</li>" +
        "");

    listProducts("desktop", "", "");
}

function tabletSetting(){
    // 4
    news_1 = "img/product/tablet/news/9.jpg";
    // 5
    news_2 = "img/product/tablet/news/2.jpg";
    // 7
    news_3 = "img/product/tablet/news/10.jpg";

    $("#header-title").text("Tablet");

    // search-left-selection-type
    $("#search-type-list").append("" +
        "<li>" +
        "<input type='radio' id='list-option-all' name='list-option' checked>" +
        "<label for='list-option-all'>All Type</label>" +
        "<div class='check'></div>" +
        "</li>" +
        "<li>" +
        "<input type='radio' id='list-option-hp' name='list-option'>" +
        "<label for='list-option-hp'>HP</label>" +
        "<div class='check'></div>" +
        "</li>" +
        "<li>" +
        "<input type='radio' id='list-option-lenovo' name='list-option'>" +
        "<label for='list-option-lenovo'>Lenovo</label>" +
        "<div class='check'></div>" +
        "</li>" +
        "<li>" +
        "<input type='radio' id='list-option-samsung' name='list-option'>" +
        "<label for='list-option-samsung'>Samsung</label>" +
        "<div class='check'></div>" +
        "</li>" +
        "");

    listProducts("tablet", "", "");
}

function listProducts(type, selection, keyword){
    current_selection = selection;

    if(selection == "" && keyword == ""){
        // alert("dddd");
        $("#list-product").html("");

        for(var item in list){
            if(list[item].type == type){
                currentList.push(list[item]);

                var star_str = "";
                for(var i = 0; i < list[item].star; i++){
                    star_str += "<span><img src='img/icon/star.png'></span>"
                }

                $("#list-product").append("" +
                    "<div class='product-card'>" +
                        "<a href='productDetail.html?name="+list[item].name+"'>" +
                            "<div class='product-image'> " +
                                "<img src=" + list[item].img[0] + "> " +
                            "</div> " +
                            "<div class='product-info'> " +
                                "<h5>" + list[item].name + "</h5> " +
                                "<h6>$" + list[item].price + "</h6> " +
                                "<div class='rating'>" +
                                    star_str +
                                "</div>" +
                            "</div>" +
                        "</a>" +
                    "</div>" +
                "");
            }
        }
    }else if(keyword == "" && selection != ""){
        // alert("ASdf");
        $("#list-product").html("");
        // var output = "";
        for(var item in list) {
            if (list[item].type == type && list[item].brand == selection) {
                currentList.push(list[item]);

                // output += list[item].brand + "\n";

                var star_str = "";
                for (var i = 0; i < list[item].star; i++) {
                    star_str += "<span><img src='img/icon/star.png'></span>"
                }

                $("#list-product").append("" +
                    "<div class='product-card'>" +
                        "<a href='productDetail.html?"+list[item].name+"'>" +
                            "<div class='product-image'> " +
                                "<img src=" + list[item].img[0] + "> " +
                            "</div> " +
                            "<div class='product-info'> " +
                                "<h5>" + list[item].name + "</h5> " +
                                "<h6>$" + list[item].price + "</h6> " +
                                "<div class='rating'>" +
                                    star_str +
                                "</div>" +
                            "</div> " +
                        "</a>" +
                    "</div>");
            }
        }
    }else if(selection == "" && keyword != ""){
        // alert("ASdf");
        $("#list-product").html("");
        // var output = "";
        for(var item in list) {
            if (list[item].type == type && list[item].name.toLowerCase().indexOf(keyword) !== -1) {
                currentList.push(list[item]);

                // output += list[item].brand + "\n";

                var star_str = "";
                for (var i = 0; i < list[item].star; i++) {
                    star_str += "<span><img src='img/icon/star.png'></span>"
                }

                $("#list-product").append("" +
                    "<div class='product-card'>" +
                        "<a href='productDetail.html?"+list[item].name+"'>" +
                            "<div class='product-image'> " +
                                "<img src=" + list[item].img[0] + "> " +
                            "</div> " +
                            "<div class='product-info'> " +
                                "<h5>" + list[item].name + "</h5> " +
                                "<h6>$" + list[item].price + "</h6> " +
                                "<div class='rating'>" +
                                    star_str +
                                "</div>" +
                            "</div> " +
                        "</a>" +
                    "</div>");
            }
        }
    }else if(selection != "" && keyword != ""){
        // alert("ASdf");
        $("#list-product").html("");
        // var output = "";
        for(var item in list) {
            if (list[item].type == type && list[item].name.toLowerCase().indexOf(keyword) !== -1 && list[item].brand == selection) {
                currentList.push(list[item]);

                // output += list[item].brand + "\n";

                var star_str = "";
                for (var i = 0; i < list[item].star; i++) {
                    star_str += "<span><img src='img/icon/star.png'></span>"
                }

                $("#list-product").append("" +
                    "<div class='product-card'>" +
                        "<a href='productDetail.html?"+list[item].name+"'>" +
                            "<div class='product-image'> " +
                                "<img src=" + list[item].img[0] + "> " +
                            "</div> " +
                            "<div class='product-info'> " +
                                "<h5>" + list[item].name + "</h5> " +
                                "<h6>$" + list[item].price + "</h6> " +
                                "<div class='rating'>" +
                                    star_str +
                                "</div>" +
                            "</div> " +
                        "</a>" +
                    "</div>");
            }
        }
    }
        // alert(output);



    // for(var item in showList){

    // }

}

function loadDetail(){
    var name = getParameterByName("name", document.url);

    for(var item in list){
        if(list[item].name == name){
            for(var i = 0; i < list[item].img.length; i++){
                $(".detail-body-left").append("" +
                    "<img src='"+list[item].img[i]+"' class='detail-img'>");
            }

            $("#detail-img1").attr("src", list[item].img[0]);
            $("#detail-img2").attr("src", list[item].img[1]);
            $("#detail-img3").attr("src", list[item].img[2]);

            var star_str = "";
            for(var i = 0; i < list[item].star; i++){
                star_str += "<span><img src='img/icon/star.png'></span>"
            }

            // $("#detail-title").text(list[item].name);
            $(".detail-body-right").append("" +
                "<div id='detail-title'>"+list[item].name+"</div><br>" +
                star_str + "<br>"+
                "<div id='detail-price'>Price: "+list[item].price+"</div><br>" +
                "<div id='detail-desc'>"+list[item].desc+"</div><br>" +
                "<form action='shoppingCart.html'>" +
                    "<input type='hidden' name='name' value='"+list[item].name+"'>" +
                    "<input type='submit' value='Buy'>" +
                "</form>");


        }
    }
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