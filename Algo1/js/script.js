function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var nb = rand(1,100);
var reponse;
do {
    reponse = prompt('Donnez moi un nombre');
    if(reponse > nb){
        alert("C'est moins");
    }
    if(reponse < nb){
        alert("C'est plus");
    }
} while (reponse != nb);
alert("Bravo");