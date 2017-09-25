JsonRoutes.add('get', '/login', function(req, res, next) {
    console.log('GET /login');

    console.log(req.query)

    let token = req.query.token

    httpGetAsync('http://uc.silkroadst.ikcest.org/info',{params:{token:token}}).then(res => console.log(res.data))

});
