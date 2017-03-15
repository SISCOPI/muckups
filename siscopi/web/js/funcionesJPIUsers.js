
function masInfUser(){
	$("#dialog-borrar" ).dialog( "open" );
}

$(function () {
	$.datepicker.setDefaults($.datepicker.regional['es-MX']);
	$("#isemestre").datepicker();
	$("#fsemestre").datepicker();
	$("#ieva1").datepicker();
	$("#ieva2").datepicker();
	$("#ieva3").datepicker();
	$("#ievaf").datepicker();
	
	$("#feva1").datepicker();
	$("#feva2").datepicker();
	$("#feva3").datepicker();
	$("#fevaf").datepicker();
	
	
	
	
});

function salir(){
	$(".section" ).hide();
	$("#fechasG" ).hide();
	$("#iniciodiv" ).show();
	
}
