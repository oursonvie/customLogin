const denodeify = require('es6-denodeify')(Promise)
PromiseMeteorCall = denodeify(Meteor.call)

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
