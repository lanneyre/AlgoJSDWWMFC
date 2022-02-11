// alert("Salut les Cocos") 
// console.log("Salut toi")

var reponse = prompt("Donnez moi une phrase");
console.log(reponse);

if (reponse.length < 10) { /*longueur de reponse < 10 */
    alert("longueur < 10")
} else {
    if (reponse.length > 50) { /* longueur de reponse > 50 */
        alert("longueur > 50")
    } else { /* longueur de reponse entre 10 et 50 */
        alert("longueur >= 10 et <= 50")
    }
}