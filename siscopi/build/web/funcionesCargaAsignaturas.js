//funcionesCargaAsignaturas


function altaAsignatura(){
	validaHorario();
	
}
function validaHorario(){
	
}
function anteriorSiguiente(valor){
	console.log("anteriorsiguiente:"+valor);
	$(".section").hide();
	if(parseInt(valor)==0){
		$("#altaAsignatura").show();
	}
	if(parseInt(valor)==1){
		$("#altaAsignaturaAplica").show();
	}
	
}

