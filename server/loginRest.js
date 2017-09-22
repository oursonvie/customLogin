JsonRoutes.add('get', '/login', function(req, res, next) {
    console.log('GET /login');

    console.log(req.query)

    let token = req.query.token

    httpGetAsync('http://uc.silkroadst.ikcest.org/info',{params:{token:token}}).then(res => console.log(res.data))


});


httpGetAsync = (url, options) =>
    new Promise((resolve, reject) => {
        HTTP.get(url, options, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
