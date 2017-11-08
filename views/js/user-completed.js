$(document).ready(function() {
	
	$(document).on("click", "#incomplete-button", function(){
		var buttonClicked = $(this).val()
		console.log(buttonClicked)
		console.log(this.complete)
	})

})
	