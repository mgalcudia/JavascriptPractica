var MAX = 100;
var SALTO_LINEA = "\n";


function Inicio(){

	var fecha= new Date();
	
	var nombre = document.getElementById("nombre");
	var apellidos = document.getElementById("apellidos");
	var telefono = document.getElementById("telefono");
	var fNacimiento = document.getElementById("fNacimiento");
	var posicionActual= document.getElementById("posicionActual");
	var posicionFinal= document.getElementById("posicionFinal");
	var numEntrada= document.getElementById("numEntrada");
	var Borrar= document.getElementById("botonBorrar");
	var BotGuardar = document.getElementById("botonGuardar");
	var IrPrimero= document.getElementById("primero");
	var IrAnterior= document.getElementById("anterior");
	var IrPosterior= document.getElementById("posterior");
	var IrUltimo= document.getElementById("ultimo");
	var ver= document.getElementById("ver");
	fNacimiento.value = fecha.getFullYear() + "-" + (fecha.getMonth() +1) + "-" + fecha.getDate();
	BotGuardar.disabled= true;
	nombre.disabled= true;
	apellidos.disabled=true;
	telefono.disabled=true;
	fNacimiento.disabled=true;
	resumen.disabled=true;
	numEntrada.disabled= true;
	Borrar.disabled=true;
	IrPrimero.disabled= true;
	IrAnterior.disabled= true;
	IrPosterior.disabled= true;
	IrUltimo.disabled= true;
	ver.disabled= true;


	

}
var agenda = new Array();

var persona = function(nombre,apellidos,telefono,fNacimiento){

	this.nombre= nombre;
	this.apellidos=apellidos;
	this.telefono=telefono;
	this.fNacimiento= fNacimiento;
}

function Agregar(){

	if(agenda.length < MAX){

		var p = new persona(
			nombre.value,
			apellidos.value,
			telefono.value,
			fNacimiento.value
			);
		
		console.log("fecha "+fNacimiento.value.length);

		if( nombre.value.length > 0 && apellidos.value.length > 0 && telefono.value.length > 0 && fNacimiento.value.length > 0  ){


			agenda.push(p);	
			BorraEdicion();
			document.getElementById("numEntrada").disabled= false;
			document.getElementById("botonBorrar").disabled=false;		
		}

		else {
			alert("No ha introducido algún campo");
			EditionTenxto(true);			
			document.getElementById("numEntrada").disabled= true;
			document.getElementById("botonGuardar").disabled= true;
			document.getElementById("botonNuevo").disabled= false;
		} 

	}

	else{
		alert("Se ha alcanzado el número máximo de personas en la agenda.")
	}
	
	
}

function InicializarAgenda(){
	EditionTenxto(true);
	ver.disabled= false;
	document.getElementById("primero").disabled= false;
	document.getElementById("anterior").disabled= false;
	document.getElementById("posterior").disabled= false;
	document.getElementById("ultimo").disabled= false;	
	numEntrada.disabled=false;	

	i=0;
	agenda.push(new persona("Primero", "García", "659503467", "1983-12-31"));
	agenda.push(new persona("Segundo", "Gómez", "688776425", "1978-01-23"));
	agenda.push(new persona("Tercero", "Sanchez", "668506489", "1983-04-14"));
	EscribePersona(i);
	Primero();
	Resumen();
	DesabilitarIniciarlizar();

	document.getElementById("botonBorrar").disabled= false;

}
function DesabilitarIniciarlizar(){

	
	document.getElementById("botonInicializar").disabled = true;

}


function BorraEdicion(){

	nombre.value="";
	apellidos.value="";
	telefono.value="";
	fNacimiento.value="";
}
 

function Primero(){

	i = 0;

	posicionActual.innerHTML = 1; 
	posicionFinal.innerHTML = (agenda.length);
	EscribePersona(i);

}


function Anterior(){
	
	i--;

	if (i > 0){

		BorraEdicion();
		posicionActual.innerHTML= i+1;
		posicionFinal.innerHTML= (agenda.length);
		EscribePersona(i);

	}else
	{
		Primero();

	}
}


function Posterior(){

	i++;	

	if(i< agenda.length){

		BorraEdicion();
		posicionActual.innerHTML= i+1;
		posicionFinal.innerHTML= (agenda.length);
		EscribePersona(i);


	}
	else{

		Ultimo();
	}
}


function Ultimo(){

	i= agenda.length-1;
	BorraEdicion();
	posicionActual.innerHTML= agenda.length;
	posicionFinal.innerHTML= agenda.length;
	EscribePersona(i);
}


function EscribePersona(i){		
	
	//if (nombre.value.length > 0 && apellidos.value.length > 0 && telefono.value.length > 0 && fNacimiento.value.length > 0 ){
		nombre.value= agenda[i].nombre;
		apellidos.value=agenda[i].apellidos;
		telefono.value= agenda[i].telefono;	
		fNacimiento.value=agenda[i].fNacimiento;
		
	//}


}

function Nuevo(){

	BorraEdicion();
	document.getElementById("botonGuardar").disabled= false;
	document.getElementById("botonNuevo").disabled= true;
	nombre.disabled= false;
	apellidos.disabled=false;
	telefono.disabled=false;
	fNacimiento.disabled=false;

}

function Guardar(){

	Agregar();	
	Ultimo();
	Resumen();
	EscribePersona(i);
	document.getElementById("botonNuevo").disabled= false;
	document.getElementById("botonGuardar").disabled= true;
	EditionTenxto(true);
	if (agenda.length > 0){

		document.getElementById("primero").disabled= false;
		document.getElementById("anterior").disabled= false;
		document.getElementById("posterior").disabled= false;
		document.getElementById("ultimo").disabled= false;
		ver.disabled= false;

	}
	
	
}

function Resumen(){

	
	resumen.value= "Resumen Agenda" + SALTO_LINEA;
	resumen.value+= "================"+SALTO_LINEA;

	if (agenda.length >=1 ){

		for (var j = 0; j <agenda.length; j++) {

			var fecha= new Date(agenda[j].fNacimiento);
			
			resumen.value+= j+1+". "+agenda[j].nombre+" "+agenda[j].apellidos+" "+agenda[j].telefono+" ";
			resumen.value+=fecha.getDate()+"-"+(fecha.getMonth()+1)+"-"+fecha.getFullYear();
			resumen.value+= SALTO_LINEA;
			resumen.value+= SALTO_LINEA;
			

		}
		resumen.value+= "Total de entradas almacenadas: "+ agenda.length;
		resumen.value+= SALTO_LINEA;
		resumen.value+= "Número de entradas libres: " + parseInt(MAX -agenda.length);

	}


	
}

function EditionTenxto(variable){

	nombre.disabled= variable;
	apellidos.disabled=variable;
	telefono.disabled=variable;
	fNacimiento.disabled=variable;


}

function Ver () {
	
	i= numEntrada.value-1;
	if(numEntrada.value <= agenda.length && numEntrada.value > 0 )
	{	
		
		posicionActual.innerHTML= numEntrada.value;
		posicionFinal.innerHTML= agenda.length;
		EscribePersona(i);

	}
	else {

		alert("Esa posición no existe en la agenda");
		numEntrada.value="";
	}
	
}
function Borrar () {
	
	if (agenda.length >1){		
		var i= posicionActual.innerHTML-1;
		agenda.splice(i,1);	
		Ultimo();
		Resumen();	
	

}else if (agenda.length==1) {

agenda.length=0;

	document.getElementById("botonInicializar").disabled = false;
	document.getElementById("botonBorrar").disabled=true;
	document.getElementById("primero").disabled= true;
	document.getElementById("anterior").disabled= true;
	document.getElementById("posterior").disabled= true;
	document.getElementById("ultimo").disabled= true;
	
	ver.disabled=true;
	EditionTenxto(true);
	numEntrada.disabled= true;
	numEntrada.value="";	
	resumen.value= "Resumen Agenda" + SALTO_LINEA;
	resumen.value+= "================"+SALTO_LINEA;
	resumen.value+="La agenda está vacia"+SALTO_LINEA;
	
	resumen.value+= "Total de entradas almacenadas: "+ agenda.length;
	resumen.value+= SALTO_LINEA;
	resumen.value+= "Número de entradas libres: " + parseInt(MAX -agenda.length);

		
		var i= posicionActual.innerHTML-1;
		agenda.splice(i,1);			
		Ultimo();
		
	}

	function DeshabibilitarRegistro(variable){

		IrPrimero.disabled= variable;
		IrAnterior.disabled= variable;
		IrPosterior.disabled= variable;
		IrUltimo.disabled= variable;
	}
}