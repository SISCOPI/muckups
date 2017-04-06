
function masInfUser(){
	$("#dialog-borrar" ).dialog( "open" );
}

$(function () {
	$("#fechahoy").text(fechaActual());
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
	
	//acciones tabla resultados búsqueda de usuarios
	$('a[href="#buscarU"]').click(function(){
		event.preventDefault();
		$( "#buscaUD" ).dialog( "open" );
				
			
			//$("#altaUser" ).show();
			//$("#iniciodiv" ).hide();
	}); 
	
	//dialogo mas información búsqueda de usuarios
	$( "#buscaUD" ).dialog({
		autoOpen: false,
		width: 'auto', // overcomes width:'auto' and maxWidth bug
		maxWidth: 600,
		height: 'auto',
		modal: true,
		fluid: true, //new option
		resizable: false,
		buttons: [
					{
						text: "Aceptar",
						click: function() {
								$( this ).dialog( "close" );
							}
					}
				]
		});

	
});

function salir(){
	$(".section" ).hide();
	$("#fechasG" ).hide();
	$("#iniciodiv" ).show();
	
}
