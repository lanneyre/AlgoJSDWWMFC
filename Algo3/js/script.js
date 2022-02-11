// let reponse;
// let plusGrand;

// for (let i = 0; i < 5; i++) {
    
//     do {
//         reponse = parseInt(prompt("Donne moi un nb"));
//     } while (isNaN(reponse));

//     if (i == 0 || reponse > plusGrand) {
//         plusGrand = reponse;
//     }
// }

// alert("Le plus grand est : " + plusGrand);



















/* ************** OU ************** */

let liste = [];
let rep;
for (let i = 0; i < 5; i++) {
    
    do {
        rep = parseInt(prompt("Donne moi un nb"));
    } while (isNaN(rep));
    
    liste.push(rep)
    
}

alert("Le plus grand est : " + Math.max(...liste));
//alert("Le plus grand est : " + Math.max.apply(null, liste));
