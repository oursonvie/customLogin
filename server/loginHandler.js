Accounts.registerLoginHandler("pincode", function(loginRequest) {

	console.log(loginRequest)

	if (!loginRequest.username) {
		return undefined;
	}

	httpGetAsync('http://uc.silkroadst.ikcest.org/info',{params:{token:loginRequest.token}}).then(response => {
		let res = response.data
		console.log(res)

		if (res.code == 200) {
			let user = Meteor.users.findOne({username: loginRequest.username})
			if (!user) {
				return Accounts.createUser({
					username: loginRequest.username,
		      profile: {
		        service: 'ikcest'
		      },
		      userBaseInfo: loginRequest.userBaseInfo
				});
			} else {
				var userId = user._id;

				console.log(userId)

				var stampedToken = Accounts._generateStampedLoginToken();
				var hashStampedToken = Accounts._hashStampedToken(stampedToken);

				meteorAcconut = Meteor.users.findOne({_id: userId})

				console.log(meteorAcconut)

				if (!meteorAcconut) {
					return {
						userId: null,
						error: "no user found"
					}
				} else {
					Meteor.users.update(userId, {
						$push: {
							'services.resume.loginTokens': hashStampedToken
						}
				})
			}

			console.log('return login infor')

			return {
				userId: userId,
				token: stampedToken.token
			}

			}
		}

	}).catch(err => {
		console.log(err)
	})

/*

	var user = Meteor.users.findOne({
			username: loginRequest.username
		});

		console.log(user)

	if (!user) {
		return {
			userId: null,
			error: "no user found"
		}
	} else {
		var userId = user._id;

		console.log('userId: ' + userId)

		// Create hashed token so user stays logged in
		var stampedToken = Accounts._generateStampedLoginToken();
		var hashStampedToken = Accounts._hashStampedToken(stampedToken);
		// Update the user's token in mongo

		meteorAcconut = Meteor.users.findOne({_id: userId})

		console.log(meteorAcconut)

		if (!meteorAcconut) {
			return {
				userId: null,
				error: "no user found"
			}
		} else {
			Meteor.users.update(userId, {
				$push: {
					'services.resume.loginTokens': hashStampedToken
				}
			});


			return {
				userId: userId,
				token: stampedToken.token
			};
		}
	}

*/

});
