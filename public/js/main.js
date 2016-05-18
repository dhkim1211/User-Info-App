$(function(){
	$('#search').on('keyup', function(e){

	    var parameters = { name: $(this).val(), ajax: true };

	    if (parameters.name) {

	    	setTimeout(function(){
				$.post('/search',parameters, function(data) {
			   		//$('#results').html(data);

			   		var $this = $('#results').empty();

			   		for (x in data) {
			   			$($this).append("<option> " + data[x].firstname + " " + data[x].lastname + "</option>" + "<option>" + data[x].lastname + ", " + data[x].firstname + "</option><br><br>");
			   		}
	
			 	});
		 	}, 300);
		}
		else {
			$('#results').empty();
		}

	});
});