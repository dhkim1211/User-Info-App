$(function(){
	$('#search').on('keyup', function(e){

	    var parameters = { name: $(this).val(), ajax: true };
	    if (parameters.name) {
			$.post('/search',parameters, function(data) {
		   		//$('#results').html(data);

		   		var $this = $('#results').empty();

		   		for (x in data) {
		   			$($this).append("<li> " + data[x].firstname + " " + data[x].lastname + " " + data[x].email + "</li>");
		   		}
		   		
		 	});
		}
		else {
			$('#results').empty();
		}

	});
});