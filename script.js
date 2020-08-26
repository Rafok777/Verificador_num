var num = document.getElementById('txtn');
var lista = document.getElementById('lista');
var result = document.getElementById('res');
var valores = [];

function isNumero(n) {
    if (Number(n) <= 100 && Number(n) >= 1) {
        return true
    } 
    return false
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) == - 1) {
        return true
    } 
    return false
}

function adicionar() {
    if (isNumero(num.value) && inLista(num.value, valores)) {
        valores.push(Number(num.value))
    } else {
        window.alert("Número inválido")
    }
};