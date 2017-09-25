Template.ikcestLogin.events({
  'click .login': function() {
    console.log('login')

    window.location.href = "http://uc.silkroadst.ikcest.org/login?returnUrl=http://localhost:9000/loginLanding?lang=en"

  },
  'click .btn-sm' () {
    console.log('logged out')
    Meteor.logout()
  }
})

Template.ikcestLogin.helpers({
  username: function() {
    return Meteor.user().username
  }
})
