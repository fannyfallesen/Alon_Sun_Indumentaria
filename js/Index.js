
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
