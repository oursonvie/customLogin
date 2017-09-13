Meteor.methods({

  addUser:function(username) {
    console.log(username)

    Accounts.createUser({
      username: username
    })

  }
});
