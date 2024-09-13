function sortear(){
    let quantidadeDeNumeros = parseInt(document.getElementById('quantidade').value);
    let doNumero = parseInt(document.getElementById('de').value);
    let ateONumero = parseInt(document.getElementById('ate').value);
    
    let sorteados = [];
    let numero;
    // colocar os numeros dentro da lista 
    for (let i = 0; i < quantidadeDeNumeros; i ++) {
        numero = obterNumeroAleatorio(doNumero, ateONumero);
        
        // nao repetir os numeros sorteados Ex: (1,1,4,5)
        while (sorteados.includes(numero)){
            numero = obterNumeroAleatorio(doNumero,ateONumero)
        }
        
        sorteados.push(numero);
    }
    // mostrar os numeros sorteados na página
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados }</label>`
}

function obterNumeroAleatorio(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}