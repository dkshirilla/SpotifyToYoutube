//var request = require("request");
//var user_id = "matt";
//var token = "Bearer";
//var playlists_url = "https://api.spotify.com/v1/users/" + user_id + "/playlists";

//import { data } from "jquery";

//request({ url: playlists_url, headers: { "Authorization": token } }, function (err, res) {
//    if (res) {
//        debugger;
//    }
//})



function Spotify() {
    debugger;
    var clientId = clientIdHidden;
    var clientSecret = clientSecretHidden;
    var accessToken;
    debugger;
    var body = {
        grant_type: 'client_credentials'
    };
    //let request = new XMLHttpRequest();
    //request.open("GET", "https://accounts.spotify.com/api/token");
    //request.setRequestHeader("Authorization","Bearer BQDD00nQelSNSUsu0lYJtofDGtqQf4ofMLYtiUbsLOIS_y0Mliv_bYRTuDuanyIL9lo0euq-56Fla5ZIuGFkxWSSW7JNR1itKZ8Zwptw8wExAKktb8SOqSbAZBpS9wQsI8_WcbZmbXeTboRZsfNAp8qYqps");
    //request.send();
    //request.onload = () => {
    //    console.log(request);
    //    if (request.status == 200) {
    //        console.log(JSON.parse(request.response));
    //    }
    //    else {
    //        console.log(`error ${request.status} ${request.statusText}`)
    //    }

    //    debugger;
    //}
    $.ajax({
        url: "https://accounts.spotify.com/api/token",
        type: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
        },
        data: { grant_type:'client_credentials'},
        success: function (result) {
            debugger;
            accessToken = result.access_token;
            console.log(result);

        },
        error: function (error) {
            debugger;
            console.log(error);
        }
    })
}