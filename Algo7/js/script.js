let nbEssai = 8;
let borneMin = 1;
let borneMax = 100;
let proposition;
let reponseUser;
let question;
let trouve = false;
let reponseAutorise = ["+", "Plus", "plus", "-" , "Moins", "moins", "=", "OK", "ok", "Egal", "egal", "égal"];

alert("Penses à un nb entre 0 et 100, je vais essayé de le deviner en moins de "+nbEssai+" fois");

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

do{
    proposition = rand(borneMin, borneMax);
    question = "Je pense à "+proposition+" ! Est-ce +, - ou = ?";
    do {
        reponseUser = prompt(question);
        if(!reponseAutorise.includes(reponseUser)){
            question = "Je pense à "+proposition+" ! Est-ce +, - ou = ?\nSeul les caractères +, - ou = sont autorisés !";
        }
    } while (!reponseAutorise.includes(reponseUser));

    switch(reponseUser){
        case "plus":
        case "Plus":
        case "+":
            borneMin = proposition+1;
            break;
        case "moins":
        case "Moins":
        case "-":
            borneMax = proposition-1;
            break;
        default:
            trouve = true;
            break;
    }
    nbEssai--; // nbEssai -= 1;
} while(nbEssai>0 && !trouve);

if(trouve){
    alert("j'ai trouvé le nb ("+proposition+")");
} else {
    alert("j'ai perdu ! :(");
}