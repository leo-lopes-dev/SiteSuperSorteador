function sortearNum(){
    var minimo = Number(document.getElementById('minimo').value)
    var maximo = Number(document.getElementById('maximo').value)

    var aleatorio = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;

    document.getElementById('result').innerHTML = `<p>O número sorteador é: <p><b>${aleatorio}</b></p></p>`;
}

function sortearNome(){
    var area = document.getElementById('nomes').value;
    var nomes = area.split('\n');
    var nomesorteio = nomes[Math.floor(Math.random() * nomes.length)]

    resultado = document.getElementById('result')
    resultado.innerHTML = `<p>O nome sorteado foi: <p><b>${nomesorteio}</b></p></p>`
}