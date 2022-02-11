let listeNb = []
let reponse;
let motStop = "stop"
do {

    do {
       reponse = prompt("Donnes moi un nb !") 
    } while (reponse != motStop && isNaN(parseInt(reponse)));

    if(reponse != motStop){
        listeNb.push(parseInt(reponse));
    }
    
    //console.log(listeNb);
} while (reponse != motStop);

alert("Voici le tableau trié : "+listeNb.sort((a, b) => a - b))