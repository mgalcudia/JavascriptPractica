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
		if (ultimoValor==')'&& valorEnOperacion == -1){

			valor="";
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

		}else if (valor=="(-"){

			document.getElementById("pantalla").value = "0";
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

		}else if (valor.lastIndexOf(")") != -1) {
			tamano = valor.substring(valor.lastIndexOf("(-") + 1, length);
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


			var ultimoOperando = valor.substring(tamano.length, valor.length);
		//alert("ultimoOperando"+ultimoOperando);
		var porciento = ultimoOperando / 100;
		
		valor = tamano.concat(porciento);
		
		Borrapantalla();
		Pinta(valor);
		
	}
	}

	/**
	 * [CambiaSigno description]
	 */
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
		var operandoPrimero= pantalla.substring(0,maximo+1);
		//alert("maximo:  "+ maximo+"  ultimoOperando:  "+ultimoOperando+"  valorNegativo:  "+valorNegativo+"operandoPrimero"+operandoPrimero);
		

		if (ultimoOperando.lastIndexOf(")") != -1){

			primerOperando= PrimerOperando(pantalla);

			primerOperando= primerOperando.substring(0,(primerOperando.length-2));
			ultimoOperando= ultimoOperando.replace(/[\(\)]/g,'');
			Borrapantalla();
			document.getElementById("pantalla").value = primerOperando+ultimoOperando;
		}
		else{

			primerOperando= PrimerOperando(pantalla);
			var valorNegativo = eval(ultimoOperando * -1);
			valorNegativo = String(valorNegativo);
			var valorPositivo= eval(valorNegativo*-1);

			if (primerOperando=="-"){

				valorNegativo=primerOperando+ultimoOperando;	
				primerOperando="";

			}
			if (valorNegativo.lastIndexOf("-") != -1) {
				valorNegativo = "(" + valorNegativo + ")";

			}	

			document.getElementById("pantalla").value = operandoPrimero+valorNegativo;	
		}


	}



	function Inversa(){

		var valor= document.getElementById("pantalla").value;

		var tamano= PrimerOperando(valor);

		alert("PrimerOperando: "+tamano);
		var ultimoValor= valor.substr(valor.length-1,1);
		alert("ultimoValor"+ ultimoValor);
		var ultimoOperando= valor.substring(tamano.length,valor.length-1);
		alert("ultimoOperando: "+ultimoOperando);
		if (ultimoValor==')'){

			var resultado=(1/ultimoOperando);
			resultado= tamano+resultado+")";

			
		}
		if (ultimoOperando =="")
			{
				var resultado= (1/ultimoValor);
				resultado=tamano+resultado;

			}
				document.getElementById("pantalla").value =resultado;	

	}