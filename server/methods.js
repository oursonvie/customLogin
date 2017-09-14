Meteor.methods({

  addUser:function(username) {
    console.log(username)

    Accounts.createUser({
      username: username
    })

  },
  createNoPassUser: function(username) {
    console.log(username)
    return Accounts.createUser({
			username: username,
      profile: {
        service: 'ikcest'
      }
		});
  }
});
