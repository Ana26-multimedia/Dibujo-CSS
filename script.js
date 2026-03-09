console.log("EYYYYY Helloo");

const donpepito = document.getElementById("donpepito");
const dialogo = document.getElementById("texto");

const listatextos = [ "Hola Don pepito", "Hellooo Don jose", "Paso usted por mi casa" ,"por su casa yo pase" ,"vio usted a mi abuela" ,"a su abuela yo la vi","adios Don pepito", "adios Don jose"];


let estadoinicial = true;
let indice = 0;

donpepito.addEventListener("click", ()=> {
    if(estadoinicial === true){ 
          donpepito.innerText = "Entusiasmo";
    donpepito.style.backgroundColor= "yellow"; 

        
     } else {
    donpepito.innerText = "Don pepito";
    donpepito.style.backgroundColor= "pink";
     }
estadoinicial = !estadoinicial;

})


dialogo.addEventListener("click", () => { 
    if (indice < listatextos.length) { 
        dialogo.innerText = listatextos[indice];
        dialogo.style.color = "black";
        indice = indice +1; 
        }
        else { 
            indice = 0;
        }
})

