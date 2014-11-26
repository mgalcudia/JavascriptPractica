function Pinta(valor) {
	
	valor = (esEntero(valor) || isNaN(valor))? valor : valor.toFixed(5);

	var operaciones = ['+', '-', '*', '/','.'];
	
	var pantalla = document.getElementById("pantalla").value;//valor de la pantalla
	var ultimoValor= pantalla.substr(pantalla.length-1,1);//ultimo valor que esta escrito en la pantalla
	var operacion= operaciones.lastIndexOf(pantalla.substr(pantalla.length-1,1));//cuando tiene una operacion introducida es > -1
	var valorEnOperacion= operaciones.lastIndexOf(valor);
	


	if (pantalla == 0 && valorEnOperacion == -1 && ultimoValor!= "." || pantalla==="Error" || pantalla==="NaN") { 


		Borrapantalla();
	} 

	if (valor == ".") {
		var coma = document.getElementById("pantalla").value.lastIndexOf(".");
		//alert("com"+coma);

		if (coma != -1 && operacion != -1) {
			valor = "";
			document.getElementById("pantalla").value += valor;
		}
	}

	if (operacion== -1 || operaciones.lastIndexOf(valor) == -1){
		document.getElementById("pantalla").value += valor;
	}
	if (operacion > -1) 
	{
		BorraUltimo();
		document.getElementById("pantalla").value += valor;
	}
	

	if (valor =="Infinity"){

		Borrapantalla();
		document.getElementById("pantalla").value+="Error";

	}
	
}

function coma() {

	var pantalla = document.getElementById("pantalla").value;//valor de la pantalla
	var ultimoValor= pantalla.substr(pantalla.length-1,1);//ultimo valor que esta escrito en la pantalla
	var pantalla = document.getElementById("pantalla").value;
	var suma = pantalla.lastIndexOf("+");
	var resta = pantalla.lastIndexOf("-");
	var division = pantalla.lastIndexOf("/");
	var multiplicacion = pantalla.lastIndexOf("*");
	var multiplicacion = pantalla.lastIndexOf(")");
	var maximo = Math.max(suma, resta, division, multiplicacion);
	var ultimoOperando = pantalla.substring(maximo, pantalla.length);	
	var coma = ultimoOperando.indexOf(".");
	
	
	
	if (ultimoValor=="+" || ultimoValor=="-" || ultimoValor=="/" || ultimoValor=="*" || ultimoValor=="."|| ultimoValor==")") 
	{
		//isNaN(ultimoValor) && ultimoValor !== "."
		
		document.getElementById("pantalla").value +="";
	}

	else if (coma == -1)
	{

		document.getElementById("pantalla").value +=".";

	}
}


function esEntero(valor)
{
	return valor%1 === 0;
}

// borra la pantalla
function Borrapantalla() {

	document.getElementById("pantalla").value = "";
	
}

function ValorCero() {

	document.getElementById("pantalla").value = 0;

}

// Funcion para el igual
function Lee() {
	

	var operacion = document.getElementById("pantalla").value;

	var valor = eval(operacion);

	
	Borrapantalla();
	
	Pinta(valor);
	

}

function RaizCuadrada(valor) {

	var operacion = document.getElementById("pantalla").value;
	primerOperando= PrimerOperando(operacion);
	
	ultimoOperando= operacion.substring(primerOperando.length,operacion.length);
	

	var valor = Math.sqrt(ultimoOperando);
	valor= primerOperando+valor;
	Borrapantalla();
	Pinta(valor);
	
}

// borrar ultimo caracter
function BorraUltimo() {

	
	var pantalla = document.getElementById("pantalla");
	
	


	if(pantalla.value[pantalla.value.length - 1] ===")")
	{
		pantalla.value = pantalla.value.replace(pantalla.value, pantalla.value.substring(0, pantalla.value.lastIndexOf("(")));		
	}
	else{
		pantalla.value = pantalla.value.replace(pantalla.value, pantalla.value.substr(0, pantalla.value.length - 1));
	}


	if(!pantalla.value)
	{
		ValorCero();
	}
	
	
}

function BorraOperando() {

	var valor = document.getElementById("pantalla").value;
	var pantalla = document.getElementById("pantalla");

	if (valor.lastIndexOf("+") != -1) {
		alert("suma");
		document.getElementById("pantalla").value = valor.substring(valor.lastIndexOf("+") + 1, length-1);

	}else if (valor.lastIndexOf(")") != -1) {
		
		document.getElementById("pantalla").value = valor.substring(valor.lastIndexOf("("), length - 1);

	} 
	 else if (valor.lastIndexOf("-") != -1) {
		alert("resta");
		document.getElementById("pantalla").value = valor.substring(valor.lastIndexOf("-") + 1, length - 1);

	} else if (valor.lastIndexOf("*") != -1) {
		alert("multi");
		document.getElementById("pantalla").value = valor.substring(valor.lastIndexOf("*") + 1, length - 1);

	} else if (valor.lastIndexOf("/") != -1) {
		alert("div");
		document.getElementById("pantalla").value = valor.substring(valor.lastIndexOf("/") + 1, length - 1);

	}
	else{
		
		document.getElementById("pantalla").value = "0";
	}
	
	if(!document.getElementById("pantalla").value)
	{
		ValorCero();
	}

	
}


function PrimerOperando(valor){
	var tamano = "";

	if (valor.lastIndexOf("+") != -1) {
		tamano = valor.substring(valor.lastIndexOf("+") + 1, length - 1);

	} else if (valor.lastIndexOf("-") != -1) {
		tamano = valor.substring(valor.lastIndexOf("-") + 1, length - 1);

	} else if (valor.lastIndexOf("*") != -1) {
		tamano = valor.substring(valor.lastIndexOf("*") + 1, length - 1);

	} else if (valor.lastIndexOf("/") != -1) {
		tamano = valor.substring(valor.lastIndexOf("/") + 1, length - 1);

	}



	return tamano;

}



function Porcentaje() {

	var valor = document.getElementById("pantalla").value;

	var tamano = PrimerOperando(valor);
	

	 if (tamano=== undefined || isNaN(tamano)) {
		document.getElementById("pantalla").value = "0";
	}


	else{

	//alert("tamano"+tamano);
	//alert(tamano.length);
	var ultimoOperando = valor.substring(tamano.length, valor.length);
	//alert("ultimoOperando"+ultimoOperando);
	var porciento = ultimoOperando / 100;
	//alert("porciento"+porciento);
	valor = tamano.concat(porciento);
	//alert("valor"+valor);
	Borrapantalla();
	Pinta(valor);
	//alert("Final");
	//Lee();
	
	/*var valor= tamano.concat(document.getElementById("pantalla").value);
	alert(valor);
	document.getElementById("pantalla").value= valor;*/
}
}

function CambiaSigno(){

	

	var pantalla = document.getElementById("pantalla").value;//valor de la pantalla
	var ultimoValor= pantalla.substr(pantalla.length-1,1);//ultimo valor que esta escrito en la pantalla
	var pantalla = document.getElementById("pantalla").value;
	var suma = pantalla.lastIndexOf("+");
	var resta = pantalla.lastIndexOf("-");
	var division = pantalla.lastIndexOf("/");
	var multiplicacion = pantalla.lastIndexOf("*");
	var maximo = Math.max(suma, resta, division, multiplicacion);
	var ultimoOperando = pantalla.substring(maximo+1, pantalla.length);	
	//alert("maximo:  "+ maximo+"  ultimoOperando:  "+ultimoOperando+"  valorNegativo:  "+valorNegativo)
	

if (ultimoOperando.indexOf(")") != -1){
	
	primerOperando= PrimerOperando(pantalla);
	
	primerOperando= primerOperando.substring(0,(primerOperando.length-2));
	ultimoOperando= ultimoOperando.replace(/[\(\)]/g,'');	
/*
		APORTACION BE JUAKI
	pantalla.value = pantalla.value.substring(0, pantalla.value.length - ultimoOperando.length) + ultimoOperando.replace(/[\(\)]/g,'');
	
	*/
	Borrapantalla();
	document.getElementById("pantalla").value = primerOperando+ultimoOperando;
}
else{
	//alert(ultimoOperando);
	primerOperando= PrimerOperando(pantalla);
	var valorNegativo = eval(ultimoOperando * -1);
	valorNegativo = String(valorNegativo);
	var valorPositivo= eval(valorNegativo*-1);
	
	if (primerOperando=="-"){
	
	 valorNegativo=primerOperando+ultimoOperando;	
	 primerOperando="";

	}
	 if (valorNegativo.indexOf("-") != -1) {
		valorNegativo = "(" + valorNegativo + ")";
		//alert(valorNegativo);
	}
	
	
	document.getElementById("pantalla").value = primerOperando+valorNegativo;

	//document.getElementById("pantalla").value = pantalla.replace(ultimoOperando, valorNegativo);
}


}

function Inversa(){

	

	var valor= document.getElementById("pantalla").value;
	
	primerOperando= PrimerOperando(valor);

	ultimoOperando =  valor.substring(primerOperando.length, valor.length);
	
	alert(ultimoOperando);
	alert(primerOperando);

	
	var resultado= (1/ultimoOperando);
	
	document.getElementById("pantalla").value =primerOperando+resultado;
     
	
	

}