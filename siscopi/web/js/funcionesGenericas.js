
function salir(){
	window.location = "index.html";
	
}

function fechaActual(){
	var f = new Date();
	var fh= f.getDate()+"/"+(f.getMonth() +1)+"/"+f.getFullYear();
	return fh;
}

function siguiente(opcion){
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
	$("#altaProyecto" ).load("altaProyecto4.html");	
	}
}


