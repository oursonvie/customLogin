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
