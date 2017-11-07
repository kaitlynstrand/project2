$(document).ready(function() {

	var name
	var email
	// var mobile;

	$("#quickstart-sign-up").on("click", function() {
		name = $("#name").val().trim()
		email = $("#email").val().trim()
		// mobile = $("#mobile").val().trim()

		var newUser = {
			first_name: name,
			last_name: email
		}

		$.post("/api/users", newUser).then(function(results) {
			console.log(results)
		})
	})
})