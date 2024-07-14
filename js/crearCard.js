import { conectaAPI } from "./conectaAPI.js";

const formulario = document.querySelector("[data-formulario]");

//validaciones

async function crearCard(evento){
    evento.preventDefault();
    const imagen= document.querySelector("[data-imagen]").value;
    const nombre = document.querySelector("[data-nombre]").value;
    const precio =document.querySelector("[data-precio]").value;

    await conectaAPI.crearCard(imagen, nombre, precio)

}

formulario,addEventListener("submit",evento=>crearCard(evento));