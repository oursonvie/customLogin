Template.login.events({
  "submit .userName" (event, template) {
    event.preventDefault();
    let username = document.getElementById('exampleInputUser').value.trim()
    console.log(username);

    Accounts.createUser({
            email: username,
            password: 'dfsgsefhse5rtawrgagfgad',
            function(err) {
              console.log(err)
            }
        });

  },
  'click .btn-sm' () {
    console.log(123)
    Meteor.logout()
  },
  "submit .noPass" (event, template) {
    event.preventDefault();
    let username = document.getElementById('noPass').value.trim()
    let password = '123'

    console.log(username);


    Meteor.loginWithPassword({email: username}, password, function(error) {
      console.log(error)
    });

  }
});
