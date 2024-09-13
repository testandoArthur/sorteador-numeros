function sortear(){
    let quantidadeDeNumeros = parseInt(document.getElementById('quantidade').value);
    let doNumero = parseInt(document.getElementById('de').value);
    let ateONumero = parseInt(document.getElementById('ate').value);
    
    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidadeDeNumeros; i ++) {
        numero = obterNumeroAleatorio(doNumero, ateONumero);
        sorteados.push(numero);
        
    }
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados }</label>`
}

function obterNumeroAleatorio(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}