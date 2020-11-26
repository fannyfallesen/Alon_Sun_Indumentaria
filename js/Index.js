
/*CAROUSEL*/

	$('.carousel').carousel({
	  interval: 4000
	});


/*DESPLEGAR MENU CATEGORIAS*/

	function desplegar(id){

		var div = document.getElementById("categoriasResponsive");

		if(!div) {

		return true;
		}

		if (div.style.display == "none") {

			div.style.display = "inline-block";

		} else {

			div.style.display = "none";
		};

		return true;
	};



/*MOSTRAR DIV OCULTO*/

	function mostrarDivTarjeta () {

		var tarjeta = document.getElementById("tarjetaOculto");
		var rapi = document.getElementById("rapiOculto");
		var conv = document.getElementById("convenirOculto");

		tarjeta.style.display = 'inline-block';

		if (rapi.style.display == 'inline-block' || conv.style.display == 'inline-block') {
			rapi.style.display = 'none';
			conv.style.display = 'none';
		};
	};

	function mostrarDivRapi () {

		var tarjeta = document.getElementById("tarjetaOculto");
		var rapi = document.getElementById("rapiOculto");
		var conv = document.getElementById("convenirOculto");

		rapi.style.display = 'inline-block';

		if (tarjeta.style.display == 'inline-block' || conv.style.display == 'inline-block') {
			tarjeta.style.display = 'none';
			conv.style.display = 'none';
		};
	};


	function mostrarDivConv() {

		var tarjeta = document.getElementById("tarjetaOculto");
		var rapi = document.getElementById("rapiOculto");
		var conv = document.getElementById("convenirOculto");

		conv.style.display = 'inline-block';

		if (rapi.style.display == 'inline-block' || tarjeta.style.display == 'inline-block') {
			rapi.style.display = 'none';
			tarjeta.style.display = 'none';
		};
	};

/*MOSTRAR DIV OCULTO*/

	function finalizaCompra () {

		var tarjeta = document.getElementById("tarjetaOculto");
		var rapi = document.getElementById("rapiOculto");
		var conv = document.getElementById("convenirOculto");


		if ( rapi.style.display == 'inline-block' || tarjeta.style.display == 'inline-block' || conv.style.display == 'inline-block' ) {
			alert ("Gracias por tu compra! te enviaremos un e-mail con los datos de tu orden");
			window.location = 'potreroDigital_proyecto_grupo4_Index.html';
		} else {
			alert ("Seleccione un medio de pago");
		};

	};
