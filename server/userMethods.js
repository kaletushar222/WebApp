Meteor.methods({
	registerUser : function(name, email, mobileNo, password){
			console.log("inside register user")
		    var user = {
                username: mobileNo,
                email: email,
                password: password
            }
            //Meteor accounts-base and accounts-password provides user registration
            //Accounts.createUser inserts user in users database
            var userId = Accounts.createUser(user);
            return userId
	}
})