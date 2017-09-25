Accounts.registerLoginHandler("pincode", function(loginRequest) {

	console.log(loginRequest)

	if (!loginRequest.username) {
		return undefined;
	}

	//FETCH USERID from collection 'Pincodes'
	var user = Meteor.users.findOne({
			username: loginRequest.username
		});;

	if (!user) {
		return {
			userId: null,
			error: "no user found"
		}
	} else {
		var userId = user._id;


		// Create hashed token so user stays logged in
		var stampedToken = Accounts._generateStampedLoginToken();
		var hashStampedToken = Accounts._hashStampedToken(stampedToken);
		// Update the user's token in mongo

		meteorAcconut = Meteor.users.findOne({_id: userId})



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

			console.log(meteorAcconut)

			return {
				userId: userId,
				token: stampedToken.token
			};
		}
	}

});
