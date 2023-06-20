const menorValor = 0
const maiorValor = 100
const numeroScreto = gararNumeroAleatorio()

function gararNumeroAleatorio() {
    return parseInt(Math.random() * 100)
        
}

console.log("Número Secreto", numeroScreto)

const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = menorValor
const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = maiorValor
