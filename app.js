$( document ).ready(function() {

	

	// la fonction crere point prend en parametre n le nombre de point voulue
	function createPoint(n){
		// je recupere le width et height dans le css de #jeu
		var width = $('#jeu').css("width");
		var height = $('#jeu').css("height");
		console.log(width);
		console.log(height);
		//je transforme la string '500px' en nombre 500
		width = parseInt(width);
		height = parseInt(height);

		
		//je fais une boucle jusquau nombre de point voulu n
		for(var i = 0; i < n ; i++){
			//avec un chiffre aleatoir entre 0 et 1 en multipliant par width
			//j'obtient une valeur aleatoire entre 0 et width (500)
			var xpos = Math.round(Math.random()*width);
			var ypos = Math.round(Math.random()*height);

			console.log(xpos);
			console.log(ypos);

			//je creer a la volé une span de classs debris
			//j'insere les valeur trouver plus haut dans les propriete css
			var deb = $('<span class="debris"></span>').css({ "top": ypos , "left": xpos });
			$('#jeu').append(deb);
			//$('<span class="debris"></span>').append()
		}
	}


	createPoint(100);

});