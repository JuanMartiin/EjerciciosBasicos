class Ej2{
    
    init(){
        
        /*for(var i=0; i<b.length; i++){
            b[i].appendChild(div);
        }
        */

        let btn = document.getElementById("edit1");
        let btn2 = document.getElementById("edit2");
        btn.addEventListener('click', () => {
            let b = document.getElementById("parrafo1");
            let div = document.createElement("textarea");
            b.appendChild(div);
        });

        btn2.addEventListener('click', () => {
            let b = document.getElementById("parrafo2");
            let div = document.createElement("textarea");
            b.appendChild(div);
        });
    }
}

export {Ej2};