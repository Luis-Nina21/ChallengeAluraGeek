import { conectaAPI } from "./conectaAPI.js";

const lista = document.querySelector("[data-lista]");

//validaciones

export default function construyeCard(imagen, nombre, precio) {
    const card = document.createElement("li");
    card.className = "cards__item";

    card.innerHTML = `<div class="descripcion-card">
                         <img src="${imagen}" alt="logo canal alura">
                         <h3>${nombre}</h3>
                         <p>${precio}</p>
                      </div>`
    return card;
}


async function listaCards() {
    const listaAPI = await conectaAPI.listaCards();
    listaAPI.forEach(element => lista.appendChild(construyeCard(element.imagen, element.nombre, element.precio)));
}

listaCards();