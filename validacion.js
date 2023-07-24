
const inputs = document.querySelectorAll("input");

inputs.forEach(input => {
    input.onfocus = () => {
        input.previousElementSibling.classList.add("top");
        input.previousElementSibling.classList.add("focus");
        input.parentNode.classList.add("focus");
    };
    input.onblur = () => {
        input.value = input.value.trim();
        if (input.value.trim().length == 0) {
            input.previousElementSibling.classList.remove("top");
        }
        input.previousElementSibling.classList.remove("focus");
        input.parentNode.classList.remove("focus");
    };
});

const textAreas = document.querySelectorAll("textarea");

textAreas.forEach(text_area => {
    text_area.onfocus = () => {
        text_area.previousElementSibling.classList.add("top");
        text_area.previousElementSibling.classList.add("focus");
        text_area.parentNode.classList.add("focus");
    };
    text_area.onblur = () => {
        text_area.value = text_area.value.trim();
        if (text_area.value.trim().length == 0) {
            text_area.previousElementSibling.classList.remove("top");
        }
        text_area.previousElementSibling.classList.remove("focus");
        text_area.parentNode.classList.remove("focus");
    };
});

function botonEnviar() {

    const valor_nombre = document.querySelector("[data-nombre]").value.trim();
    const valor_email = document.querySelector("[data-email]").value.trim();
    const valor_asunto = document.querySelector("[data-asunto]").value.trim();
    const valor_mensaje = document.querySelector("[data-mensaje]").value.trim();

    const estado_btn = document.querySelector("[data-btn]");
    console.log(valor_nombre);
    console.log(valor_email);
    console.log(valor_asunto);
    console.log(valor_mensaje);
    console.log(estado_btn);

    if (valor_nombre&&valor_email&&valor_asunto&&valor_mensaje) {        
        console.log("sin vacios")
        estado_btn.classList.remove("not-active");
    }else{
        console.log("con vacios")
        estado_btn.classList.add("not-active")
    }
}