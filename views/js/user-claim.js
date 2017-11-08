$(document).ready(function() {

	$(document).on("click", ".claim_button", function(){
		
		var buttonClicked = $(this).attr("id")
		console.log(buttonClicked)
		$.ajax({
			type: "PUT",
			url: "/api/task/" + buttonClicked,
		}).then(function(results) {
			console.log(results)
			document.location = "/home"
		})
	})
})


// app.put("/api/task/:claim", function(req, res) {
// 		db.Task.update({
// 			claim: true
// 		},
// 		{
// 			where: {
// 				id: req.params.claim

// 		}).then(function(results) {
// 			res.json(results);
// 		});
// 	});
