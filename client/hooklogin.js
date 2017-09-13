Template.hooklogin.events({
  "submit .hooklogin" (event, template) {
    event.preventDefault();
    let username = document.getElementById('hooklogin').value.trim()
    console.log(username);

    var loginRequest = { pincode:username };

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
  }
});
