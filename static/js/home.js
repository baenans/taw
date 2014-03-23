

$(document).ready(function() {
	
	$(".footable").footable(); 
	$(".pagination").children("ul").addClass("pagination");
	$("#filtrostatus").change(filtrostatus);

});

function filtrostatus(e){
	e.preventDefault();

	var valueFilter = $(this).val();
	var footableFilter = $(".adminr-table").data('footable-filter');
	footableFilter.filter(valueFilter);
}