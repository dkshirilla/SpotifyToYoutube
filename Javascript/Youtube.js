function isScriptLoaded(src) {
    return document.querySelector('script[src="' + src + '"]') ? true : false;
}

$(document).ready(function () {
    console.log(isScriptLoaded("https://apis.google.com/js/api.js"));
    console.log(isScriptLoaded("https://apis.google.com/js/platform.js"));
    console.log(isScriptLoaded("https://apis.google.com/js/client.js?onload=init"));
});