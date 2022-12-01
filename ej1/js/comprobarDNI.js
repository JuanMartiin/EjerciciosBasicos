
class DNI{
    btn = document.getElementById("btn");
    letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K',
        'E', 'T'];
    final = document.getElementById("resultado");

    init(){
        
        this.btn.addEventListener('click', e =>{
        var valorNum = document.getElementById("numero").value;
        var valorLetra = document.getElementById("letra").value;
        //console.log(valorNum);
        //console.log(valorLetra);
            if(valorNum.length == 8){
                let result = valorNum%23;
                var resultLetra = this.letras[result];
                //console.log(resultLetra);
            }
            if(resultLetra == valorLetra){
                this.final.innerHTML = "Su dni es correcto";
            }else{
                this.final.innerHTML = "Su dni es incorrecto";
            }
        });
        
    } 
};

export {DNI};