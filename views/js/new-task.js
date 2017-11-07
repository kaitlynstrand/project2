$(document).ready(function() {

	var taskDescription
	var dueDate
	var points

	$("#submit-task").on("click", function() {
		//console.log("clicked")
		taskDescription = $("#task-description").val().trim()
		dueDate = $("#date").val().trim()
		points = $("#points").val().trim()
		//console.log(Task.description)

		
		var newTaskObject = {
			description: taskDescription,
			date_due: dueDate,
			points: points
		}
			console.log(newTaskObject)
			$.post("/api/task", newTaskObject, function(data){
				console.log("finished")
				document.location = '/'
			});
		})
})

			