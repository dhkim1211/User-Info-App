$(function(){
	var flag = true;
	$('#search').on('keyup', function(e){

	    var parameters = { name: $(this).val(), ajax: true };

    	if (flag) {
			flag = false;

	    if (parameters.name) {

	    		$.post('/search',parameters, function(data) {
			   		//$('#results').html(data);

			   		var $this = $('#results').empty();

			   		for (x in data) {
			   			$($this).append("<option> " + data[x].firstname + " " + data[x].lastname + "</option>" + "<option>" + data[x].lastname + ", " + data[x].firstname + "</option><br><br>");
			   		}
	
			 	});
	    	}

	    	setTimeout(function(){
				flag = true;
		 	}, 3000);
		}
		
		else {
			$('#results').empty();
		}

	});
});