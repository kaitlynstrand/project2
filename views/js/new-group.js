$(document).ready(function() {

	var groupName

	$("#submit-group").on("click", function() {
		//console.log("clicked")
		groupName = $("#group-name").val().trim()
		
		var newGroupObject = {
			group_name: groupName
		}
			$.post("/api/group", newGroupObject).then(function(results) {
				console.log(results)
			})
		})
})

			