function Calculadora() {
	myWindow = window.open("Calculadora.html", "myWindow", "width=328px, height=480px,directories=no, location=no, status=no, left = 700 ,top= 95, menubar=no, scrollbars=no,status=no,toolbar=no, statusbar=no, tittlebar=no,resizable=no");

	if(window.myWindow2){

		myWindow2.close();

	}
	
}

function Agenda() {
	myWindow2 = window.open("Agenda.html", "myWindow2", "width=1034px, height=550px,directories=no, location=no, status=no, left = 300 ,top= 90, menubar=no, scrollbars=no,status=no,toolbar=no, statusbar=no, tittlebar=no,resizable=no");

	if(window.myWindow){

		myWindow.close();
	}
}
