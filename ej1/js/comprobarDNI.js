class DNI{
    letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K','E', 'T'];
    
    check(valorNum, valorLetra){
        
        let comprobar = false;    
        
        if(valorNum.length == 8){
                let result = valorNum%23;
                var resultLetra = this.letras[result];
                //console.log(resultLetra);
                if(resultLetra == valorLetra){
                    comprobar = true;
                }
            }
            return comprobar;
        };
    } 
    
export {DNI};