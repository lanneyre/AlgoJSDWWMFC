
window.addEventListener("load", () => {

    document.querySelectorAll("#openModal, .modal").forEach((modal) => {
        modal.addEventListener("click", (e) => {
            // document.querySelector(".modal").classList.add("active"); 
            console.log(e.target.id)
            if(e.target.id == "openmodal2"){
                document.querySelector("#modal1").classList.add("desactivate")
                setTimeout(() => {
                    document.querySelector("#modal1").classList.remove("desactivate")
                    document.querySelector("#modal1").classList.remove("active"); 
                    document.querySelector("#modal2").classList.add("active"); 
                }, 1000);
                
            } else if(e.target.id == "openmodal1"){
                // document.querySelector("#modal2").classList.remove("active"); 
                // document.querySelector("#modal1").classList.add("active"); 

                document.querySelector("#modal2").classList.add("desactivate")
                setTimeout(() => {
                    document.querySelector("#modal2").classList.remove("desactivate")
                    document.querySelector("#modal2").classList.remove("active"); 
                    document.querySelector("#modal1").classList.add("active"); 
                }, 1000)
            } else {
                document.querySelector(".modal").classList.toggle("active"); 
                if(document.querySelector(".modal").classList.contains("active")){
                    document.querySelector("#modal2").classList.remove("active"); 
                    document.querySelector("#modal1").classList.add("active");  
                }
            }

            document.querySelectorAll(".modal-content .openmodal").forEach((modal)=>{
                modal.addEventListener("click", (e) => {
                    e.preventDefault();
                });
            });
        });
    });
});