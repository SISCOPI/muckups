//funcionesCargaAsignaturas


function altaAsignatura(){
	validaHorario();
	
}
function validaHorario(){
	
}
function anteriorSiguiente(valor){
	event.preventDefault(); 
	console.log("anteriorsiguiente:"+valor);
	
	
	if(parseInt(valor)==0){
		$("#altaAsignaturaAplica").hide();
		$("#altaAsignatura").show();
	}
	if(parseInt(valor)==1){
		console.log("aplica");
		copiarValores();
		$("#altaAsignatura").hide();
		$("#altaAsignaturaAplica").show();
	}
	
	if(parseInt(valor)==3){
		$(".section" ).hide();
		$("#dinamico").load("cargaAsignaturas.html")
		$("#dinamico").show();
	}
	if(parseInt(valor)==4){
		$(".section" ).hide();
		$("#dinamico").load("cargaAsignaturas.html")
		$("#dinamico").show();
		$("#confirma").dialog( "open" );
	}
	
}

function copiarValores(){
	$("#lclavea").text($("#clave").val());
	$("#lasignatura").text($("#asignaturan").val());
	$("#lgrupoa").text($("#grupo").val());
	
	$("#lnombrep").text($("#nombrep").val());
	$("#lapp").text($("#ap").val());
	$("#lamp").text($("#am").val());
}



