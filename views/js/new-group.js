$(document).ready(function() {

	var groupName

	$("#submit-group").on("click", function() {
		//console.log("clicked")
		groupName = $("#group-name").val().trim()
		
		var newGroupObject = {
			group_name: groupName
		}
		console.log(newGroupObject)
		$.post("/api/group", newGroupObject, function(data) {
			document.location = "/signup"
		})
	})
})

