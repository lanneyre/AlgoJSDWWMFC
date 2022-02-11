let reponse;
let resultat = 0;

do {
    reponse = parseInt(prompt("donne moi un nb entre 1 et 100"));
} while (isNaN(reponse) || reponse < 1 || reponse > 100);

for (let i = 1; i <= reponse; i++) {
    resultat += i;
}

alert("la somme des nombres inférieurs à " + reponse + " vaut " + resultat);