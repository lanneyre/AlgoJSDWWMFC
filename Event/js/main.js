function alertPerso(){
    alert("test");
}
function consolePerso(){
    console.log("test console");
}

// quand ma page est finie de chargée j'exécute les actions suivantes
// window.onload = ()=>{
//     console.log("tout le dom est chargé j'execute mon js");
//     alertPerso();
//     consolePerso();
// };

function clickDiv(){
    const div = document.querySelector("div");
    div.addEventListener("click", ()=>{
        console.log("j'ai reçu un click");
    });
}

// function changeBG(){
//     const btn = document.getElementById("changeBG");
//     //const btn = document.querySelectorAll("button");
//     btn.addEventListener("click", () => {
//         //console.log("click");
//         //const div = document.querySelector("div");
//         // div.classList.add("survole");
//         // if(div.classList.contains("survole")){
//         //     div.classList.remove("survole");
//         // } else {
//         //     div.classList.add("survole");
//         // }
//         document.querySelector("#survol").classList.toggle("survole");
//     });
// }

function changeBG(){
    const btn = document.querySelectorAll("button");
    btn.forEach((btnEnCours) => {
        btnEnCours.addEventListener("click", (event) => {
            console.log(event.target);
            document.querySelector("#survol").classList.toggle("survole");
        });
    });
}

function clickLink(){
    const l = document.querySelector("a");
    l.addEventListener("click", (event) => {
        event.preventDefault(); 
        console.log(event.target);
        document.querySelector("body").style.backgroundImage = "url('img/wallpaper.jpg')";
    });
}


window.addEventListener("load", () => {
    console.log("tout le dom est chargé j'execute mon js");
    // alertPerso();
    // consolePerso(); 

    // clickDiv();
    // changeBG();
    // clickLink();

    document.querySelector("#textBtn").addEventListener("click", ()=> {
        alert(document.querySelector("#text").value);
    });
});