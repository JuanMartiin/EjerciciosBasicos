class Ej2{
    
    init(){
        
        let a = document.querySelectorAll(".parrafoEditable");

        for (let objeto of a) {
            let btn = document.createElement("button");
            btn.innerHTML = "EDITAR";
            objeto.after(btn);
            btn.addEventListener('click', () =>{
                btn.remove(objeto);
                let div = document.createElement("div");
                objeto.after(div);
                let textArea = document.createElement("textarea");
                div.appendChild(textArea);
                let content = objeto.innerHTML;
                textArea.value = content;
                let accept = document.createElement("button");
                accept.innerHTML = "ACEPTAR";
                let cancel = document.createElement("button");
                cancel.innerHTML = "CANCELAR";
                textArea.after(accept);
                textArea.after(cancel);
                
                accept.addEventListener('click', () =>{
                    objeto.innerHTML = textArea.value;
                    div.remove(textArea);
                    objeto.after(btn);
                })

                cancel.addEventListener('click', () =>{
                    div.remove(textArea);
                    objeto.after(btn);
                })
            });
        }
        
    }
}

export {Ej2};