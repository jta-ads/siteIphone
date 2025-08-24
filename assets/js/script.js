"use strict"
const btnVerdeAlpino = document.querySelector
(`#verde-alpino`);
const btnPrateado = document.querySelector
(`#prateado`);
const btnDourado = document.querySelector
(`#dourado`);
const btnGrafite = document.querySelector
(`#grafite`);
const btnAzulSierra = document.querySelector
(`#azul-sierra`);
const imgIphone = document.querySelector(`article img`)

window.addEventListener("DOMContentLoaded", ()=>{
    btnVerdeAlpino.focus();
    imgIphone.src = `assets/img/iphone_green.jpg`
})
btnVerdeAlpino.addEventListener("click", ()=>{
    imgIphone.src = `assets/img/iphone_green.jpg`
})
btnPrateado.addEventListener("click", ()=>{
    imgIphone.src = `assets/img/iphone_silver.jpg`
})
btnDourado.addEventListener("click", ()=>{
    imgIphone.src = `assets/img/iphone_golden.jpg`
})
btnGrafite.addEventListener("click", ()=>{
    imgIphone.src = `assets/img/iphone_grafite.jpg`
})
btnAzulSierra.addEventListener("click", ()=>{
    imgIphone.src = `assets/img/iphone_blue.jpg`
})