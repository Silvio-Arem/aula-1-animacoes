let tituloQuePula = document.querySelector("h3");
let tituloQueAumenta = document.querySelector("h3")

// tituloQuePula.onmouseover = ()=>{
//     tituloQuePula.classList.add("animate__animated", "animate__bounce");
// }

tituloQueAumenta.onmouseover = ()=>{
    tituloQueAumenta.classList.add("animate__animated", "animate__zoomIn")
} 

new Pageable("#container");
