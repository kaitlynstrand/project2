var myTasks = $("#my-tasks")

myTasks.click(function(){
	console.log("clicked")
	window.location = '/mytasks/'+localStorage.getItem('userId')
})