Template.ikcestLogin.onCreated(function() {
  console.log(window.location.href)

  var token = getParameterByName('token')
  var userName = getParameterByName('userName')
  console.log(userName, token)

  var loginRequest = {username:userName, token:token};

  console.log(loginRequest)

 Accounts.callLoginMethod({
   methodArguments: [loginRequest],
   userCallback: function (err) {
       if (err) {
         console.log(err)
       } else {
         console.log('logged in')
       }
   }});


});

Template.ikcestLogin.events({
  'click .login': function() {
    console.log('login')

    window.location.href = "http://uc.silkroadst.ikcest.org/login?returnUrl=http://localhost:3000/?lang=en"

  }
})

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
