var num = document.getElementById('#txtn');
var lista = document.getElementById('#lista');
var result = document.getElementById('#res');
var valores = [];

function adicionar {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        
    }
};