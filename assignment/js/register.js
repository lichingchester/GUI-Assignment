/**
 * Created by chingli on 2/12/2016.
 */

// function readTextFile(file, callback) {
//     var rawFile = new XMLHttpRequest();
//     rawFile.overrideMimeType("application/json");
//     rawFile.open("GET", file, true);
//     rawFile.onreadystatechange = function(){
//         if(rawFile.readyState === 4 && rawFile.status == "200"){
//             callback(rawFile.responseText);
//         }
//     }
//     rawFile.send(null);
// }
//
// $(document).ready(function () {
//
//     readTextFile("../lib/data.json", function (text){
//         var data = JSON.parse(text);
//         alert(data);
//         alert(text);
//     });
//
// })
//

    $(document).ready(function(){

        AJAX_JSON_Req( '../lib/data.json' );
    })


function AJAX_JSON_Req( url )
{
    var AJAX_req = new XMLHttpRequest();
    AJAX_req.open( "GET", url, true );
    AJAX_req.setRequestHeader("Content-type", "application/json");

    AJAX_req.onreadystatechange = function()
    {
        if( AJAX_req.readyState == 4 && AJAX_req.status == 200 )
        {
            var response = JSON.parse( AJAX_req.responseText );
            alert(response);
        }
    }
    AJAX_req.send();
}
