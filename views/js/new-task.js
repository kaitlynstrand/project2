$(document).ready(function() {

	var taskDescription
	var dueDate
	var points

	$("#submit-task").on("click", function() {
		//console.log("clicked")
		taskDescription = $("#task-description").val().trim()
		dueDate = $("#date").val().trim()
		points = $("#points").val().trim()
		
		var newTaskObject = {
			description: taskDescription,
			date_due: dueDate,
			points: points
		}
			$.post("/api/task", newTaskObject).then(function(results) {
				console.log(results)
			})
		})
})

			