$(document).ready(function() {

	$(document).on("click", ".claim-button", function(){
		
		var buttonClicked = $(this).attr("id")
		console.log(buttonClicked)
		$.put("api/task/:claim").then(function(results) {
			console.log(results)
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
