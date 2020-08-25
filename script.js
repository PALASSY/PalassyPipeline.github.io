let grammes = document.getElementById('grammes');
let kilos = document.getElementById('kilos');
let livres = document.getElementById('livres');

// Pour savoir quel champ input a été rempli alors on prend son id et la valeur sasie.
grammes.addEventListener("input", function(){convertisseurPoids(this.id, this.value);});
kilos.addEventListener("input", function(){convertisseurPoids(this.id, this.value);});
livres.addEventListener("input", function(){convertisseurPoids(this.id, this.value);});

//création la fonction de conversion
function convertisseurPoids(id, valeur){
	if(id =="grammes"){
		kilos.value = valeur / 1000;  // valeur grammes / 1000 pour avoir la valeur en kilos
		livres.value = valeur * 0.0022046; // valeur en grammes * 0.0022046 pour avoir la valeur en livres
	}else if(id == "kilos"){
		grammes.value = valeur * 1000;	// valeur kilo * 1000 pour avoir la valeur en grammes
		livres.value = valeur * 2.2046; //  valeur kilo * 2.2046 pour avoir la valeur en livres
	}else if(id == "livres"){
		kilos.value = valeur / 2.2046; // valeur livres / 2.2046 pour avoir la valeur en kilos
		grammes.value = valeur / 0.0022046;  // valeur livres / 0.0022046 pour avoir la valeur en grammes 

	}
};

