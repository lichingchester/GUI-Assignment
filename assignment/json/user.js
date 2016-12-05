/**
 * Created by lichi on 3/12/2016.
 */
var str_user = "{'users': [{'username': 'user001','password': 'user001','address': '1234 Tsing Wun Road','tel': '12345678','point': 0},{'username':'user002','password':'password','address':'1111TsingWunRoad','tel':'11111111','point':1000},{'username':'user003','password':'password','address':'4444TsingWunRoad','tel':'99999999','point':99999}]}";

var users_JSON;
users_JSON = JSON.stringify(eval("(" + str_user + ")"));
