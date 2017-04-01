
function salir(opcion){
	if(opcion==1){
	window.location = "index.html";
	}
	if(opcion==2){
	window.location = "indexjpi.html";
	}
	if(opcion==3){
	window.location = "indexProfesor.html";
	}
}

function fechaActual(){
	var f = new Date();
	var fh= f.getDate()+"/"+(f.getMonth() +1)+"/"+f.getFullYear();
	return fh;
}

function siguiente(opcion){
	
	event.preventDefault(); 
	if(parseInt(opcion)==6){
	$("#altaProyecto" ).load("altaProyectoP.html");	
	}
	if(parseInt(opcion)==0){
	$("#altaProyecto").load("altaProyecto.html");
	}
	if(parseInt(opcion)==1){
	$("#altaProyecto").load("altaProyecto2.html");
	}
	if(parseInt(opcion)==2){
	$("#altaProyecto" ).load("altaProyecto3.html");	
	}
	if(parseInt(opcion)==3){
	$("#altaProyecto" ).load("altaProyecto4.html");	
	}
	if(parseInt(opcion)==4){
	$("#altaProyecto" ).load("altaProyecto5.html");	
	}
	if(parseInt(opcion)==5){
	$("#altaProyecto" ).load("altaProyecto5.html");	
	}
	
}

function siguiente2(opcion, titulo){
	if(parseInt(opcion)==0){
	$("#altaProyecto").load("altaProyecto.html");
	$("#titulo").val(titulo);
	}
}

function cargaHoras(){
	var horas= new Array("00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00","24:00");
	var hora="";
	for(i=0;i< horas.length;i++) {
		hora = horas[i];

		$('#thorario tbody').append('<tr><td class="text-center">'+hora+'</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>')
	}
}


