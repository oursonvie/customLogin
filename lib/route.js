FlowRouter.route('/', {
   name: 'Home',
    action() {
        BlazeLayout.render('mainLayout', {main: 'main'});
    }
});

FlowRouter.route('/loginLanding', {
   name: 'loginLanding',
    action() {
        BlazeLayout.render('mainLayout', {main: 'loginLanding'});
    }
});
