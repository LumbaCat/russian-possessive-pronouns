var sections = new Array(9);
for (var i = 0; i < 9; i++)
{
	sections[i] = new Array();
}



var ops = new Array(sections.length);
var opInner = ["Pronoms personnels", "section 2", "section 3",
				"section 4", "section 5", "section 6",
				"section 7", "section 8", "section 9"];            

for (var i=0; i<ops.length; i++){
	ops[i] = document.createElement("option");
    ops[i].value = i;
    ops[i].innerHTML  = opInner[i];
    document.getElementById("sections").appendChild(ops[i]);
}

var ops2 = new Array(2);
var op2Inner = ["Révision", "Test"];           

for (var i=0; i<ops2.length; i++){
    ops2[i] = document.createElement("option");
    ops2[i].value = i+1;
    ops2[i].innerHTML  = op2Inner[i];
    document.getElementById("mode").appendChild(ops2[i]);
}

function nbAlea(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min +1)) + min;
  }


var ligne = 7;
var colonne = 5;

  var tableauPronoms = new Array();
  function remplirTableau(tableauPronoms) {
	tableauPronoms.push("");
	tableauPronoms.push("Masculin");
	tableauPronoms.push("Féminin");
	tableauPronoms.push("Neutre");
	tableauPronoms.push("Pluriel");
	tableauPronoms.push("Nominatif");
	tableauPronoms.push("мой");
	tableauPronoms.push("моя");
	tableauPronoms.push("моё");
	tableauPronoms.push("мои");
	tableauPronoms.push("Accusatif");
	tableauPronoms.push("мой / моегo");
	tableauPronoms.push("мою");
	tableauPronoms.push("моё");
	tableauPronoms.push("мои / моих");
	tableauPronoms.push("Datif");
	tableauPronoms.push("моему");
	tableauPronoms.push("моей");
	tableauPronoms.push("моему");
	tableauPronoms.push("моим");
	tableauPronoms.push("Génitif");
	tableauPronoms.push("моегo");
	tableauPronoms.push("моей");
	tableauPronoms.push("моегo");
	tableauPronoms.push("моих");
	tableauPronoms.push("Instrumental");
	tableauPronoms.push("моим");
	tableauPronoms.push("моей");
	tableauPronoms.push("моим");
	tableauPronoms.push("моим·");
	tableauPronoms.push("Locatif");
	tableauPronoms.push("моём");
	tableauPronoms.push("моей");
	tableauPronoms.push("моём");
	tableauPronoms.push("моих");
	
  }
  
  
  function construireTableau(li,co,tableauPronoms,mode) {
	  var test = document.getElementById("test");
      var remove = document.getElementById("tableau");
	  test.removeChild(remove);

	  var remove2 = document.getElementById("arreter");
	  test.removeChild(remove2);
	  
	  var table = document.createElement("table");
	  table.setAttribute("id", "tableau");
  
	  var caption = document.createElement("caption");
	  caption.innerHTML = "мой, твой, свой";
	  table.appendChild(caption);
  
	  var lignes = new Array(li);
	  for(var i = 0; i<li; i++){
		  lignes[i] = document.createElement("tr");
	  }
  
	  var col = new Array(li);
	  for(var i = 0; i<li; i++){
		  col[i] = new Array(co);
		  if(i == 0){
			  for(var j = 0; j<co; j++){
				  col[i][j] = document.createElement("th");
			  }
		  }else{
			  col[i][0] = document.createElement("th");
			  for(var j = 1; j<co; j++){
				  col[i][j] = document.createElement("td");
				  col[i][j].setAttribute("name", "cases");
				  col[i][j].setAttribute("class", "click");
				  if (mode == 1){
					col[i][j].setAttribute("onclick", "choix(this.id)");
				  }else{
					col[i][j].setAttribute("onclick", "choixTest(this.id)");
				  }
				  
			  }
		  }
	  }
  
	  var compteurId = 0;
	  for(var i = 0; i<li; i++){
		  for(var j = 0; j<co; j++){
			  col[i][j].setAttribute("id", compteurId.toString());
			  compteurId++;
		  }
	  }
	  
	  col[0][0].setAttribute("class", "thtransp");
  
	  var a = 0;
	  for(var i = 0; i<li; i++){
		  for(var j = 0; j<co; j++){
			  col[i][j].innerHTML = tableauPronoms[a+j];
			  col[i][j].value = tableauPronoms[a+j];
		  }
		  a +=(co);
	  }
  
	  for(var i = 0; i<li; i++){
		  for(var j = 0; j<co; j++){
			  lignes[i].appendChild(col[i][j]);
		  }
  
		  table.appendChild(lignes[i]);
	  }
	  
	  test.appendChild(table);
  
	  var formu = document.getElementById("formu");
	  if(mode == 1){
		if(document.getElementById("boutonCacher") == null){
			var bouton1 = document.createElement("button");
			bouton1.setAttribute("id", "boutonCacher");
			bouton1.setAttribute("class", "btn_droite");
			bouton1.innerHTML = "Cacher";
			bouton1.setAttribute("onclick", "toutCacher()");

			var br = document.createElement("br");
			br.setAttribute("id", "br");

			var bouton2 = document.createElement("button");
			bouton2.setAttribute("id", "boutonRemettre");
			bouton2.setAttribute("class", "btn_droite_dessous");
			bouton2.innerHTML = "Montrer";
			bouton2.setAttribute("onclick", "toutRemettre()");
			
			formu.appendChild(bouton1);
			formu.appendChild(br);
			formu.appendChild(bouton2);
		}
	  }else{
		if(document.getElementById("boutonCacher") != null){
			var bouton1 = document.getElementById("boutonCacher");
			var br = document.getElementById("br");
			var bouton2 = document.getElementById("boutonRemettre");
			
			formu.removeChild(bouton1);
			formu.removeChild(br);
			formu.removeChild(bouton2);
		}
	  }
	  
	  // ajout <button> arrêter
		arreter= document.createElement("button");
		arreter.setAttribute("id", "arreter");
		arreter.setAttribute("onclick", "document.location.reload(false)");
		arreter.setAttribute("class", "styledArret");
		arreter.innerHTML  = "Arrêter";
		test.appendChild(arreter);
  }
  
  function choix(id) {
	  var cellule = document.getElementById(id);
	  if(cellule.innerHTML == tableauPronoms[id.toString()]){
		  cellule.innerHTML="";
	  }else{
		  cellule.innerHTML=tableauPronoms[id.toString()];
	  }
  }


var value;
var mauvaisesRep = 0;
var bonRep = 0;

var sel;

var c;
var l;

function choixTest(id) {
	// liste des mots
	var cellules = document.getElementsByName("cases");
	var long = cellules.length;

	if(sel == document.getElementById(id)){
		enleverRadioBoxes();


		sel.style = "background-color: #3b3b3b";

		var bon = document.getElementById("bon");
		bon.setAttribute("class", "vert");
		var reste = l-bonRep;
		bon.innerHTML = "Reste: "+reste;

		if(mauvaisesRep > 0){
			var mal = document.getElementById("mal");
			mal.setAttribute("class", "rouge");
			mal.innerHTML = "Erreurs: "+mauvaisesRep;
		}

		sel = null;
	}else{
		
	for(var i=0; i<long; i++){
		if (cellules[i].style != null){
			cellules[i].style = "background-color: #3b3b3b";
		}else{
			cellules[i].setAttribute("style", "background-color: #3b3b3b");
		}
	}
	// récupération mot
	sel = document.getElementById(id);
	sel.setAttribute("style", "background-color: #264588");

	document.getElementById('sol').innerHTML = "";
	document.getElementById('bon').innerHTML = "";
	document.getElementById('mal').innerHTML = "";
	enleverRadioBoxes();

		//affectation value;
		value = sel.value;

		// 5 nb aleatoires entre 1 et 5
		var radioValue = new Array(5);
	
		// tableau des cellules
		var memoire = new Array();
		memoire.push(sel.value);
		//defini la place de la trad correcte
		var bonneRep = nbAlea(0, 4);
		radioValue[bonneRep] = sel.value;
		
		for(var i=0; i<radioValue.length; i++){
			if(i != bonneRep){
				do{
					var indice = nbAlea(0, long-1);
				}while (isIn(cellules[indice].value, memoire));
				memoire.push(cellules[indice].value);
				radioValue[i] = cellules[indice].value;
			}
		}
		
			// ajout <radio>
			var radios = new Array(5);
			var radioLabel = new Array(5); 
	
			for(var i=0; i<radioLabel.length; i++){
				radioLabel[i] = radioValue[i];
			}
	
			var divs = new Array(5);
	
			la = document.getElementById("la");

			for (var i=0; i<radios.length; i++){
				radios[i] = document.createElement("button");
				radios[i].setAttribute("class", "styled");
				radios[i].setAttribute("value", radioValue[i]);
				radios[i].setAttribute("name", "selection");
				radios[i].setAttribute("onclick", "verifier(this)");
				radios[i].innerHTML  = radioLabel[i];
	
				divs[i] = document.createElement("div");
				divs[i].setAttribute("class", "formu");
				divs[i].appendChild(radios[i]);
				
				la.appendChild(divs[i]);
			}
	}
	
}


function isIn(indice, t){
    var retour = false;
    for (var i=0; i<t.length; i++){
        if(t[i] == indice){
            retour = true;
        }
    }
    return retour;
}

function verifier(obj){
	sel.style = "background-color: #3b3b3b";
	if(obj.value == value){
		bonRep++;
		enleverRadioBoxes();
		sel.innerHTML = value;
		sel.removeAttribute("onclick");

		var sol = document.getElementById("sol");
		sol.setAttribute("class", "vert");
		sol.innerHTML = "Bravo!";

		var bon = document.getElementById("bon");
		bon.setAttribute("class", "vert");
		var reste = l-bonRep;
		bon.innerHTML = "Reste: "+reste;

		if(mauvaisesRep > 0){
			var mal = document.getElementById("mal");
			mal.setAttribute("class", "rouge");
			mal.innerHTML = "Erreurs: "+mauvaisesRep;
		}
		

	}else{
		mauvaisesRep++;
		enleverRadioBoxes();
		var sol = document.getElementById("sol");
		sol.setAttribute("class", "rouge");
		sol.innerHTML = "Dommage!";

		var bon = document.getElementById("bon");
		bon.setAttribute("class", "vert");
		var reste = l-bonRep;
		bon.innerHTML = "Reste: "+reste;

		var mal = document.getElementById("mal");
		mal.setAttribute("class", "rouge");
		mal.innerHTML = "Erreurs: "+mauvaisesRep;

		sel = null;
	}

	var cellules = document.getElementsByName("cases");
	var long = cellules.length;
	var compteur = 0;
	for (var i=0; i<long; i++){
        if(cellules[i].innerHTML != ""){
            compteur++;
		}
	}
	if(compteur == long){
		var sol = document.getElementById("sol");
		sol.setAttribute("class", "vert");
		sol.innerHTML = "Terminé!";

		var bon = document.getElementById("bon");
		bon.innerHTML = "";

		if(mauvaisesRep > 0){
			var mal = document.getElementById("mal");
			mal.setAttribute("class", "rouge");
			mal.innerHTML = "Erreurs: "+mauvaisesRep;
		}
	}
}

  
  var toutesLesCellules = new Array();
  function remplir() {
	var cellules = document.getElementsByName("cases");
	cellules.forEach(element => {
		toutesLesCellules.push(element.innerHTML);
	});
  }
  
  function toutCacher() {
	var cellules = document.getElementsByName("cases");
	var long = cellules.length;
		for(var i=0; i<long; i++){
		if(cellules[i].innerHTML == toutesLesCellules[i]){
			cellules[i].innerHTML="";
		}
	}
  }
  
  function toutRemettre() {
	var cellules = document.getElementsByName("cases");
	var long = cellules.length;
	  for(var i=0; i<long; i++){
		  if(cellules[i].innerHTML != toutesLesCellules[i]){
			  cellules[i].innerHTML=toutesLesCellules[i];
		  }
	  }
  }

function commencer(section, mode){

	mauvaisesRep = 0;
	bonRep = 0;
	
	// faire un switch sur section
	if(section == 0){
		remplirTableau(tableauPronoms);
		construireTableau(ligne,colonne,tableauPronoms,mode);
		remplir();
		if(mode == 2){
			// cacher les mots
			toutCacher();
		}
	}

	c = document.getElementsByName("cases");
	l = c.length;
}


function rootCommencer(){
	// ajout <p>
	var p = document.getElementById('consignes')
	p.innerHTML  = "<i> Tableau des déclinaisons des pronoms possessifs.</i>";

	document.getElementById("sol").innerHTML = "";
	document.getElementById("bon").innerHTML = "";
	document.getElementById("mal").innerHTML = "";

	enleverRadioBoxes();

	// récupère données
	var section = document.getElementById('sections').value;
	var mode = document.getElementById('mode').value;

	commencer(section, mode);
}


function enleverRadioBoxes(){
	var coeur2 = document.getElementById("coeur2");
	var remove = document.getElementById("la");
	coeur2.removeChild(remove);

	nouveauLa = document.createElement("div");
	nouveauLa.setAttribute("id", "la");

	p = document.createElement("p");
	p.setAttribute("class", "transp");
	p.innerHTML = ".";

	nouveauLa.appendChild(p);

	coeur2.appendChild(nouveauLa);
}

