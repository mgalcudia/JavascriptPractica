function Calculadora() {
	myWindow = window.open("Calculadora.html", "myWindow", "width=328px, height=480px,directories=no, location=no, status=no, left = 600 ,top= 200, menubar=no, scrollbars=no,status=no,toolbar=no, statusbar=no, tittlebar=no,resizable=no");

	if(window.myWindow2){

		myWindow2.close();

	}
	
}

function Agenda() {
	myWindow2 = window.open("Agenda.html", "myWindow2", "width=600px, height=550px,directories=no, location=no, status=no, left = 450 ,top= 200, menubar=no, scrollbars=no,status=no,toolbar=no, statusbar=no, tittlebar=no,resizable=no");

	if(window.myWindow){

		myWindow.close();
	}
}
