let inputadultos = document.getElementById("adultos")
let inputcriancas = document.getElementById("criancas")
let inputduracao = document.getElementById("duracao")

let resultado = document.getElementById("resultado")

function calcular(){

let adultos = inputadultos.value
let criancas = inputcriancas.value
let duracao = inputduracao.value

let qdtTotalCarne = carnepp(duracao) * adultos + (carnepp(duracao) / 2 * criancas)

let qdtTotalCerveja = cervejapp(duracao) * adultos

let qdtTotalBebidas = bebidaspp(duracao) * adultos + (bebidaspp(duracao) / 2 * criancas)

resultado.innerHTML=`<p>${qdtTotalCarne/1000} Kg de Carne &#x1F969 </p> `
resultado.innerHTML+=`<p>${Math.ceil(qdtTotalCerveja/355)} Latas de Cerveja &#x1F37A </p> `
resultado.innerHTML+=`<p>${Math.ceil(qdtTotalBebidas/2000)} Garrafas de Refrigerantes &#x1F379</p> `
}

function carnepp(duracao){

    if(duracao>=6){return 650}
    else {return 400}
}

function cervejapp(duracao){

    if(duracao>=6){return 2000}
    else {return 1200}
}

function bebidaspp(duracao){

    if(duracao>=6){return 1500}
    else {return 1000}
}