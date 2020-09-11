var publicAccessToken;
var clientId;
var clientSecret;
var clientResponse;


$(document).ready(function () {
    if (window.location.hash) {
        const clientResponse = new URLSearchParams(window.location.hash.substring(1));
        if (clientResponse.has('access_token')) {
            clientAccessToken = clientResponse.get('access_token');
            DisplayUserId(clientAccessToken);
        }
        else {
            alert('access denied');
        }

    } 
        
});

function DisplayUserId(clientAccessToken) {
    $.ajax({
        url: "https://api.spotify.com/v1/me",
        type: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + clientAccessToken
        },
        success: function (result) {
            const userId = result.id;
            PopulatePlaylistDropdown(userId);

        },
        error: function (error) {
            console.log(error);
        }
    })
    return false;
}

function PopulatePlaylistDropdown(userId) {
    $.ajax({
        url: "https://api.spotify.com/v1/me/playlists",
        type: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + clientAccessToken
        },
        success: function (result) {
            for (i = 0; i < result.total; i++) {
                $("#playlistDropdown").append($("<option></option>").val(result.items[i].id).html(result.items[i].name));
            }
        },
        error: function (error) {
            console.log(error);
        }
    })
    return false;
}

function Spotify() {
    clientId = clientIdHidden;
    clientSecret = clientSecretHidden;
    GetClientAccessTokenSpotify();
    return false;
}


function GetAccessTokenSpotify() {

    $.ajax({
        url: "https://accounts.spotify.com/api/token",
        type: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
        },
        data: { grant_type: 'client_credentials' },
        success: function (result) {
            publicAccessToken = result.access_token;
            console.log(accessToken);

        },
        error: function (error) {
            console.log(error);
        }
    })
    return false;
}

function GetClientAccessTokenSpotify() {
    window.location.href = "https://accounts.spotify.com/authorize?client_id=" + clientId + "&redirect_uri=https://localhost:44320/index.html&response_type=token"

}

