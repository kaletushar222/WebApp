Template.registerUser.events({
	"click #registerButton" : function(event,template){
		//values are accessed using jquery
		//jquery imported in main.html
		var name = $("#name").val()
		var email = $("#email").val()
		var mobileNo = $("#mobile").val()
		var password = $("#password").val()
		var confirmPassword = $("#confirmPassword").val()

		//console.log(name, email, mobileNo, password, confirmPassword)

		//toastr package added to display toast messages

		//name validation
		if(!name){
			toastr.error("Please enter name","Enter Name");
	    	return 
		}
		//email validation
		if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test($("#email").val()))){
			toastr.error("You have entered an invalid email address!", "Invalid EmailId");
	    	return 
	  	}

	  	//mobile no validation
		if(!($("#mobile").val().length == 10 )){
			toastr.error("You have entered an invalid Mobile Number!", "Invalid MobileNumber");
			return 
		}

		//password validation
		if(password && password !== confirmPassword){
			toastr.error("Password and confirm password does not match", "password does not match");
			return 
		}

		//server call to create new user
		//method path server/userMethods.js
		Meteor.call("registerUser", name, email, mobileNo, password, function(error,result){
			if(error){
				console.log(error)
				toastr.error(error.message,"Error");
			}
			else{
				//accounts-base api to login user type Meteor.user() in browser console to see currenly logged in user
				//accounts package itself handles session of logged in user
				Meteor.loginWithPassword(email, password, function(error, result) {
					if(error){
						console.log(error)
						toastr.error(error.message,"Error");
					}
					else{
						//iron router 
						//route written in routes/index.js
						Router.go("/home")
					}
				})
			}
		})

	},
})