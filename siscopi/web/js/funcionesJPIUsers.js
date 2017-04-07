
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

	}); 
	$('a[href="#borrarU"]').click(function(){
		event.preventDefault();
		$( "#dialog-borrar" ).dialog( "open" );
	});
	$('a[href="#modificarU"]').click(function(){
		event.preventDefault();
		$( "#modifU" ).dialog( "open" );
	});
	
	//dialogo mas información búsqueda de usuarios
	$( "#buscaUD" ).dialog({
		autoOpen: false,
		width: 'auto', // overcomes width:'auto' and maxWidth bug
		maxWidth: 1200,
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
//dialogo modificar búsqueda de usuarios
$( "#modifU" ).dialog({
		autoOpen: false,
		width: 'auto', // overcomes width:'auto' and maxWidth bug
		maxWidth: 1200,
		height: 'auto',
		modal: true,
		fluid: true, //new option
		resizable: false,
		  buttons : [
			{
				text  : 'Cancelar', 
                click : function() {
                             $(this).dialog('close')
                         }, 
                class: 'button-acepta'
            },
			{
				text  : 'Aceptar', 
                click : function() {
                             $(this).dialog('close')
                         }, 
                class: 'button-acepta'
            }
			]
		});

function salir(){
	$(".section" ).hide();
	$("#fechasG" ).hide();
	$("#iniciodiv" ).show();
	
}
