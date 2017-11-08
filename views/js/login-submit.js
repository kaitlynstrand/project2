$(document).ready(function() {

	var name
	var email
	var group
	// var mobile;

	$("#quickstart-sign-up").on("click", function() {
		name = $("#name").val().trim()
		email = $("#email").val().trim()
		if ($("#group").val().trim() === "Group A") {
			group = 1
		}
		else {
			group = 2
		}
		$.get("/api/users")
		// mobile = $("#mobile").val().trim()

		var newUser = {
			first_name: name,
			last_name: email,
			GroupId: group
		}

		$.post("/api/users", newUser).then(function(results) {
			console.log(results)

		})
	})
})