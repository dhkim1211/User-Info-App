$(function(){
	$('#search').on('keyup', function(e){

	    var parameters = { name: $(this).val(), ajax: true };
	    console.log(parameters);
	    if (parameters.name) {
			$.post('/search',parameters, function(data) {
		   		$('#results').html(data);
		   		/*for (x in data) {
		   			$('#results').html((data[x]['firstname'] + " " + data[x]['lastname'] + " "))
		   		}*/
		 	});
		}
		else {
			$('#results').html("");
			console.log(parameters);
			console.log("hello");
		}

	});
});