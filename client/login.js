Template.login.events({
  'click .btn-sm' () {
    console.log('logged out')
    Meteor.logout()
  },
  "submit .noPass" (event, template) {
    event.preventDefault();
    let username = document.getElementById('noPass').value.trim()

    console.log(username);


    // Meteor.call('createNoPassUser', username)

    Meteor.callPromise('createNoPassUser', username).then(res => {
      console.log(res)

      let loginRequest = {username: username}

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

  }
});
