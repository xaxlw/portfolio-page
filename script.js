function escrevendoLetra(){
    function ativaLetra(elemento) {
            const arrayTexto = elemento.innerHTML.split('');
            elemento.innerHTML = '';
            arrayTexto.forEach((letra, i)=>{
                setTimeout(()=>{
                    elemento.innerHTML += letra;
                }, 75 * i)
            })
        }

    const titulo = document.querySelector('.digitando');
    ativaLetra(titulo);
}

escrevendoLetra()

const copiarEmail = document.getElementById("email"); 
copiarEmail.addEventListener("click", function(event){
    event.preventDefault();

    const meuEmail = "kaicaquinoc@gmail.com"

    const inputTemporario = document.createElement("input");
    inputTemporario.setAttribute("value", meuEmail);
    document.body.appendChild(inputTemporario);

     inputTemporario.select();
    inputTemporario.setSelectionRange(0, 99999);

    document.execCommand("copy")

    document.body.removeChild(inputTemporario);

    alert("Email copiado!")
})



