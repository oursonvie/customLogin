Meteor.methods({
  createNoPassUser: function(username, baseInfo) {
    var userId = Accounts.createUser({
			username: username,
      email: baseInfo.email,
      profile: {
        service: 'ikcest',
        baseInfo:baseInfo
      }
		});
    return userId
  },
  checkUser: function(username) {
    if (Meteor.users.findOne({username:username})) {
      return true
    } else {
      return false
    }
  },
  validateIkcest: async function(username, token) {

    let result = await httpGetAsync('http://uc.silkroadst.ikcest.org/info',{params:{token:token}})

    return result.data

  }
});
