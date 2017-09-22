Template.ikcestLogin.events({
  'click .login': function() {
    console.log('login')

    window.location.href = "http://uc.silkroadst.ikcest.org/login?returnUrl=http://localhost:3000/loginLanding?lang=en"

  }
})
