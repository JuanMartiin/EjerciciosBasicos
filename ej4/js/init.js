class Calculadora{
    
    resultado = document.getElementById('resultado');
    restart = document.getElementById('restart');
    
    init(){
        let numero = document.querySelectorAll('.numero');
        let numeross = [];
        let i = 0;
        for (let numeros of numero) {
            numeros.addEventListener('click', e =>{
                resultado.value = numeros.innerHTML;
                numeross[i] = numeros.innerHTML;
                i++;
            });
        };

        let operacion = document.querySelectorAll('.operacion');
        let operando;
        for (let operaciones of operacion) {
            operaciones.addEventListener('click', e =>{
                resultado.value = operaciones.innerHTML;
                operando = operaciones.innerHTML;
            });
        }

        let igual = document.querySelector('.igual');
            igual.addEventListener('click', () => {
                let result;
                switch (operando) {
                    case '+':
                    result = parseInt(numeross[0]) + parseInt(numeross[1]);
                    break;
                    case '-':
                    result = parseInt(numeross[0]) - parseInt(numeross[1]);
                    break;
                }
                resultado.value = result;
            });

        restart.addEventListener('click', () => {
            resultado.value = 0;
            i = 0;
        })
    }
}
export {Calculadora};