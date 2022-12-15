class Ej3{
    
    init(){
        
        let a = document.querySelectorAll(".parrafoEditable");

        for (let objeto of a) {
            let add = document.createElement("button");
            add.innerHTML = "AÑADIR CONTENIDO";
            objeto.after(add);
            let btn = document.createElement("button");
            btn.innerHTML = "EDITAR";
            objeto.after(btn);

            btn.addEventListener('click', () =>{
                add.remove(objeto);
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
                    objeto.after(add);
                })

                cancel.addEventListener('click', () =>{
                    div.remove(textArea);
                    objeto.after(btn);
                    objeto.after(add);
                })
            });

            add.addEventListener('click', () =>{
                add.remove(objeto);
                btn.remove(objeto);
                let p = document.createElement("p");
                objeto.after(p);
                let textAreaAdd = document.createElement("textarea");
                p.appendChild(textAreaAdd);
                let acceptAdd = document.createElement("button");
                acceptAdd.innerHTML = "ACEPTAR";
                let cancelAdd = document.createElement("button");
                cancelAdd.innerHTML = "CANCELAR";
                textAreaAdd.after(acceptAdd);
                textAreaAdd.after(cancelAdd);
                
                acceptAdd.addEventListener('click', () =>{
                    p.innerHTML = textAreaAdd.value;
                    objeto.after(add);
                    objeto.after(btn);
                })
                cancelAdd.addEventListener('click', () =>{
                    p.remove(textAreaAdd);
                    objeto.after(add);
                    objeto.after(btn);
                })
            });
        }
        
    }
}

export {Ej3};