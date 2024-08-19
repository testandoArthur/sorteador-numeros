function sortear(){
    let quantidadeDeNumeros = parseInt(document.getElementById('quantidade').value);
    let doNumero = parseInt(document.getElementById('de').value);
    let ateONumero = parseInt(document.getElementById('ate').value);
    
    let numero = obterNumeroAleatorio(doNumero,ateONumero);
    alert(numero);
}

function obterNumeroAleatorio(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}