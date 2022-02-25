// window.onload = () => {

//     document.getElementById('btn').addEventListener("click", () => {
//         let nom = document.getElementById("nom").value;
//         let prenom = document.getElementById("prenom").value;
//         let email = document.getElementById("email").value;
//         let dob = document.getElementById("dob").value;
//         let colors = document.getElementById("colors").value;
//         let colorspol = document.getElementById("colorspol").value;

//         console.log("click détecté");

//         let errors = [];

//         if(nom.length == 0){
//             errors.push("renseigner votre nom");
//         }
//         if(prenom.length == 0){
//             errors.push("renseigner votre prénom");
//         }
//         if(email.length == 0){
//             errors.push("renseigner votre email");
//         }
//         if(dob.length == 0){
//             errors.push("renseigner votre date de naissance");
//         }
//         const regexNP = /^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ\-\s]*$/;
//         //if(/.*[0-9].*/.exec(nom)){
//         if(regexNP.exec(nom) === null){
//             errors.push("enlever les caractères spéciaux du nom");
//         }
//         if(regexNP.exec(prenom) === null){
//             errors.push("enlever les caractères spéciaux du prénom");
//         }

//         const regexDate = /^\d{4}\-\d{2}\-\d{2}$/;
//         console.log(dob);
//         if(regexDate.exec(dob) === null){
//             errors.push("corriger votre date de naissance");
//         }

//         if(errors.length > 0){
//             alert("Merci de : \n# "+errors.join("\n# "));
//         } else {
//             document.querySelector("textarea").style.backgroundColor = colors;
//             document.querySelector("textarea").style.color = colorspol;
//         }
//     });
    

// }


window.onload = () => {

    document.getElementById('btn').addEventListener("click", () => {
        let nom = document.getElementById("nom");
        let prenom = document.getElementById("prenom");
        let email = document.getElementById("email");
        let dob = document.getElementById("dob");
        let colors = document.getElementById("colors");
        let colorspol = document.getElementById("colorspol");

        console.log("click détecté");

        let errors = [];
        document.querySelectorAll("input").forEach((element) => {
            element.classList.remove("danger");
        })

        if(nom.value.length == 0){
            nom.classList.add("danger");
            errors.push("renseigner votre nom");
        }
        if(prenom.value.length == 0){
            prenom.classList.add("danger");
            errors.push("renseigner votre prénom");
        }
        if(email.value.length == 0){
            email.classList.add("danger");
            errors.push("renseigner votre email");
        }
        if(dob.value.length == 0){
            dob.classList.add("danger");
            errors.push("renseigner votre date de naissance");
        }
        const regexNP = /^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ\s-]+$/;
        // //if(/.*[0-9].*/.exec(nom)){
        if(regexNP.exec(nom.value) === null){
            nom.classList.add("danger");
            errors.push("enlever les caractères spéciaux du nom");
        }
        if(regexNP.exec(prenom.value) === null){
            prenom.classList.add("danger");
            errors.push("enlever les caractères spéciaux du prénom");
        }

        const regexDate = /^\d{4}\-\d{2}\-\d{2}$/;
        console.log(dob);
        if(regexDate.exec(dob.value) === null){
            dob.classList.add("danger");
            errors.push("corriger votre date de naissance");
        }

        if(errors.length > 0){
            alert("Merci de : \n# "+errors.join("\n# "));
        } else {

        }
    });
    

}