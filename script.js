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
        let opt = document.createElement('option')
        opt.innerHTML = `Número ${num.value} adicionado.`
        lista.appendChild(opt)
        
    } else {
        window.alert("Número inválido ou já existente na lista.")
    }
    num.value = ''
    num.focus()
    result.innerHTML = ''
};

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar')
        return
    } else {
        var maior = valores[0]
        var menor = valores[0]
        var media = 0
        var soma = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            } else if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
    }
    result.innerHTML = `<p>Temos um total de ${valores.length} números cadastrados.</p>`
    result.innerHTML += `<p>A soma dos números registrados é ${soma}.</p>`
    result.innerHTML += `<p>O maior número cadastrado é ${maior}.</p>`
    result.innerHTML += `<p>O menor número cadastrado é ${menor}.</p>`
    result.innerHTML += `<p>A média dos números castrados é ${soma/valores.length}.</p>`
}

function reset() {
    valores = []
    lista.innerHTML = ''
}