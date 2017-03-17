
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


