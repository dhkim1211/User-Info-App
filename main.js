$(function(){
 $('#search').on('keyup', function(e){
   //if(e.keyCode === 13) {
     var parameters = { name: $(this).val(), ajax: true };
       $.post('/search',parameters, function(data) {
       	$('#results').html(data);
     });
    //};
 });
});