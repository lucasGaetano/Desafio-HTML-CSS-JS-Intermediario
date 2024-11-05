const formularios = document.querySelectorAll("label");
const btnEnviar = document.querySelector("button");

btnEnviar.addEventListener("click", function () {
    verificaSeOsCamposEstaoPreenchidos();
});

function verificaSeOsCamposEstaoPreenchidos() {
    formularios.forEach(element => {
        if (element.childNodes[1].value !== "") {
            element.childNodes[1].classList.add("valido");
            element.children[1].classList.add("mostrar");
            element.childNodes[1].classList.remove("invalido");
        } else {
            element.children[1].classList.remove("mostrar");
            element.childNodes[1].classList.add("invalido");
        }
        
    })
}