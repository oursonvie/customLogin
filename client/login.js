Template.login.onCreated(function() {
  var token = getParameterByName('token')
  var username = getParameterByName('userName')
  var lang = getParameterByName('lang')
  Session.set('LoginInfo', {token:token, username:username, lang:lang})
});

Template.login.events({
  'click .btn-sm' () {
    console.log('logged out')
    Meteor.logout()
  },
  "submit .noPass" (event, template) {
    event.preventDefault();
    let username = document.getElementById('noPass').value.trim()

    let loginRequest = {username: username}

    PromiseMeteorCall('checkUser', username).then(res => {
      if(!res) {

        PromiseMeteorCall('createNoPassUser', username).then(res => {
          console.log(res)



          // login user after creation
          Accounts.callLoginMethod({
            methodArguments: [loginRequest],
            userCallback: function (err) {
                if (err) {
                  console.log(err)
                } else {
                  console.log('logged in')
                }
            }});

        })

      } else {
        Accounts.callLoginMethod({
          methodArguments: [loginRequest],
          userCallback: function (err) {
              if (err) {
                console.log(err)
              } else {
                console.log('logged in')
              }
          }});
      }

    })



  }
});

Template.login.helpers({
  username: function() {
    return Meteor.user().username
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
