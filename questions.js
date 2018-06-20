/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
var tailleString = function (texte) {
	console.log(texte.length);
	return texte.length;
}
var remplaceECar = function (texte) {
	if (texte.indexOf('e') !== -1) {
		console.log(texte.replace('e', ' '));
		return texte.replace('e', ' ');
	}	
}
	
var concatString = function (texte1, texte2) {
	console.log(texte1 + texte2);
	return texte1 + texte2;
}
var afficherCar5 = function (texte) {
	console.log(texte[4]);
	return texte[4];
}
var afficher9Car = function (texte) {
	console.log(texte.slice(0,9));	
	return texte.slice(0,9);
	}

var majusculeString = function (texte) {
	console.log(texte.toUpperCase());
	return texte.toUpperCase();
}
var minusculeString = function (texte) {
	console.log(texte.toLowerCase());
	return texte.toLowerCase();
}
var SupprEspaceString = function (texte) {
	console.log(texte.trim());
	return texte.trim();

}
var IsString = function (texte) {
	console.log(typeof texte);
 	if (typeof texte === "string")
 	{
 		console.log(true);
 		return true;
 	}
 	else {
 		console.log(false);
 		return false;
 	}
}

var AfficherExtensionString = function (texte) {
	for (let i = texte.length-1; i >= 0; i--) {
		if (texte.indexOf('.') !== -1) {
			console.log(texte.slice(texte.indexOf('.')+1, texte.length));
			return texte.slice(texte.indexOf('.')+1, texte.length);
		};
	};

}
var NombreEspaceString = function (texte) {
	let nomb = 0;
	for (let i = 0, c = texte.length; i < c; i++) {
		if (texte[i] === " ") {
			nomb += 1;		
		}
		else {
			nomb += 0;
		};
	};
	console.log(nomb);
	return nomb;

}
var InverseString = function (texte) {
	let texteM = "";
	for (let i = texte.length-1 ; i >= 0 ; i--) {
		texteM += texte[i];		
	}
	console.log(texteM);
	return texteM;
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
var calculPuissance = function (x, y) {
	console.log(Math.pow(x,y));
	return Math.pow(x,y);

}
var valeurAbsolue = function (nombre) {
	if (nombre < 0) {
		console.log(-nombre);
		return -nombre;
	}
	else {
		console.log(nombre);
		return nombre;
	}

}
var valeurAbsolueArray = function (array) {
	let arrayM = [];
	for (let i=0, c=array.length; i<c; i++) {
		if (array[i] < 0) {
			arrayM[i] = -array[i];
		}
		else {
			arrayḾ[i] = array[i];
		};
	};
	console.log(arrayM);
	return arrayM;	
}
var sufaceCercle = function (rayon) {
	console.log(Math.round(Math.pow(rayon,2)*Math.PI));
	return Math.round(Math.pow(rayon,2)*Math.PI);

}
var hypothenuse = function (ab, ac) {
	console.log(Math.sqrt(Math.pow(ab,2)+ Math.pow(ac,2)));
	return Math.sqrt(Math.pow(ab,2)+ Math.pow(ac,2));

}
var calculIMC = function (poids, taille) {
	let imc = 0;
	imc = poids / Math.pow(taille,2);
	console.log(parseFloat(imc.toFixed(2)));
	return parseFloat(imc.toFixed(2));

}