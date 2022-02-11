let diviseurs = [];
let nbToTest;
let phrase = "Donnes moi un nb positif, je te dirai s'il est premier ou non !";

do {
    nbToTest = parseInt(prompt(phrase));
    if(nbToTest < 0){
        phrase = "J'ai dit un nombre > 0 !!\n Toi comprendre le français ?";
    }
    if(isNaN(nbToTest)){
        phrase = "J'ai dit un nombre et pas n'importe quoi !!\n Toi comprendre le français ?";
    }
} while (isNaN(nbToTest) || nbToTest<0);

switch (nbToTest) {
    case 0:
        alert("0 n'est pas premier car il ne s'accepte pas lui même comme diviseur");
        break;
    case 1:
        alert("1 n'est pas premier car il n'a qu'un seul diviseur : lui même")
        break;
    default:
        for(let i = 1; i <= Math.sqrt(nbToTest); i++){
            if(nbToTest%i==0){
                diviseurs.push(i);
                if(i!=(nbToTest/i)){
                    diviseurs.push(nbToTest/i);
                }
            }
        }
        if(diviseurs.length == 2){
            alert(nbToTest+" est premier");
        } else {
            alert(nbToTest+" n'est pas premier et voici ces diviseurs : \n"+diviseurs.sort((a, b) => a - b).join(", "));
        }
        break;
}