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
            numero = obterNumeroAleatorio(doNumero,ateONumero);
        }
        
        sorteados.push(numero);
    }
    // mostrar os numeros sorteados na página
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados }</label>`;

    // chamar a função depois de clicar no botão sortear.
    alterarStatusBotao();
}

function obterNumeroAleatorio(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// alterar o status / deixar funcional o botao reiniciar.
function alterarStatusBotao() {
    let botaoReiniciar = document.getElementById('btn-reiniciar');
    
    if (botaoReiniciar.classList.contains('container__botao-desabilitado')) {
       botaoReiniciar.classList.remove('container__botao-desabilitado');
       botaoReiniciar.classList.add('container__botao');
    } else {
        botaoReiniciar.classList.remove('container__botao');
        botaoReiniciar.classList.add('container__botao-desabilitado');
    }
}

// funcionalidade do botão reiniciar 
function reiniciar() {
    let reiniciar = document.getElementById('btn-sortear');

    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').value.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados }</label>`;
    alterarStatusBotao();
}