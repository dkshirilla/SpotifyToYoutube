

function authenticate() {
    return gapi.auth2.getAuthInstance()
        .signIn({ scope: "https://www.googleapis.com/auth/youtube.readonly" })
        .then(function () { console.log("Sign-in successful"); },
            function (err) { console.error("Error signing in", err); });
}

function loadClient() {
    gapi.client.setApiKey("AIzaSyAHEkFUwLnWUX-Vb3hrwtb0QCvEuORopME");
    gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(function () {
            console.log("GAPI client loaded for API");
        },
            function (err) {
                console.error("Error loading GAPI client for API", err);
            });
}
// Make sure the client is loaded and sign-in is complete before calling this method.
function execute() {
    gapi.client.youtube.playlistItems.list({})
        .then(function (response) {
            // Handle the results here (response.result has the parsed body).
            console.log("Response", response);
        },
            function (err) { console.error("Execute error", err); });
}


gapi.load("client:auth2", function () {
    gapi.auth2
        .init({
            client_id: "56438989380-tiam24gl0mdhdpnqhvihh7spmqiuulml.apps.googleusercontent.com",
            redirect_uri: 'https://localhost:44320/Default.aspx'
        }).then(console.log("signed in"));
    
});


function isScriptLoaded(src) {
    return document.querySelector('script[src="' + src + '"]') ? true : false;
}

$(document).ready(function () {
    console.log(isScriptLoaded("https://apis.google.com/js/api.js"));
    console.log(isScriptLoaded("https://apis.google.com/js/platform.js"));
    console.log(isScriptLoaded("https://apis.google.com/js/client.js?onload=init"));
});