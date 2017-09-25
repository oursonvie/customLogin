Template.loginLanding.onCreated(function() {
  console.log(window.location.href)
  var token = getParameterByName('token')
  var username = getParameterByName('userName')
  var lang = getParameterByName('lang')
  console.log(lang, username, token)

});

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
