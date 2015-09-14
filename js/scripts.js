$(document).ready(function() {
	
	$("form#new-task").submit(function(event) {
		event.preventDefault();
		
		var inputtedTask = $("input#new-task-name").val();
		var inputtedDescription = $("input#new-description").val();
		var inputtedDate = $("input#new-due-date").val();
		
		var newTask = {taskName: inputtedTask, description: inputtedDescription, date: inputtedDate};
		
		$("ul#tasks").append("<li class='task-complete'><span class='task'>" + newTask.taskName + "</span></li>" );
		
		$("li .task").last().click(function() {
			$("#show-task").show();
			
			$("#show-task h2").text(newTask.taskName);
			$("p .task").text(newTask.taskName);
			$("p .description").text(newTask.description);
			$("p .due-date").text(newTask.date);
		
			// Still need to figure out how to use appendTo/parent functions to move entire task-complete field to completed		
			// $("li .task-complete btn").click(function() {
			// 	$(this).appendTo("ul#completed-tasks");
			// 	$("ul#completed-tasks").append("<li><span class='complete-task'>" + newTask.taskName + "</span></li>");
			// });		
				
		});
		
		
		
		$("input#new-task-name").val("");
		$("input#new-description").val("");
		$("input#new-due-date").val("");
	});
});