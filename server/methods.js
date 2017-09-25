Meteor.methods({

  addUser:function(username) {
    console.log(username)

    Accounts.createUser({
      username: username
    })

  },
  createNoPassUser: function(username) {
    var userId = Accounts.createUser({
			username: username,
      profile: {
        service: 'ikcest'
      }
		});
    return userId
  },
  checkUser: function(username) {
    if (Meteor.users.findOne({username:username})) {
      console.log('true')
      return true
    } else {
      console.log('false')
      return false
    }
  }
});
