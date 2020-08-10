
function Spotify() {
    debugger;
    var clientId = clientIdHidden;
    var clientSecret = clientSecretHidden;
    var accessToken;
    debugger;


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