$(document).ready(function() {
	
	$(document).on("click", ".complete-btn", function(){
		var buttonClicked = $(this).attr("id")
		console.log(buttonClicked)
		$.ajax({
			type:"PUT",
			url: "/api/task/completed/" + buttonClicked,
		}).then(function(results) {
			console.log(results)
			document.location = "/home"
		})
	})
})
	