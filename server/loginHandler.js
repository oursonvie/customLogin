Accounts.registerLoginHandler("pincode", function(loginRequest) {

	console.log(loginRequest)

	if (!loginRequest.pincode) {
		return undefined;
	}

	//FETCH USERID from collection 'Pincodes'
	var user = Pincodes.findOne({
			pincode: loginRequest.pincode
		});;

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

});
