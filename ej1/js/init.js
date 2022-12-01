import {DNI} from "./comprobarDNI.js";

let btn = document.getElementById("btn");
let final = document.getElementById("resultado");

btn.addEventListener('click', e =>{
    var valorNum = document.getElementById("numero").value;
    var valorLetra = document.getElementById("letra").value;
    let dni = new DNI();
    if(dni.check(valorNum, valorLetra)){
        final.innerHTML = "Su dni es correcto";
    }else{
        final.innerHTML = "Su dni es incorrecto";
    }
});
