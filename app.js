//para somar
function somar(a, b) {
    return a + b;
}
//para subtrair
function subtrair(a, b) {
    return a - b;
}
//para multiplicar
function multiplicar(a, b) {
    return a * b;
}
//para dividir
function dividir(a, b) {
    if (b === 0) {
        return "Erro: divisão por zero!";
    }
    return a / b;
}
//para calcular
function calcular(operacao) {//conversão de string para número
    let numero1 = parseFloat(prompt("Digite o primeiro número usando . (ponto) caso seja fracionado : "));
    let numero2 = parseFloat(prompt("Digite o segundo númerousando . (ponto) caso seja fracionado : "));
    
    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Erro: Digite apenas números válidos.");
        return;
    }

    let resultado;
    switch (operacao) {
        case "somar":
            resultado = somar(numero1, numero2);
            break;
        case "subtrair":
            resultado = subtrair(numero1, numero2);
            break;
        case "multiplicar":
            resultado = multiplicar(numero1, numero2);
            break;
        case "dividir":
            resultado = dividir(numero1, numero2);
            break;
    }//para exibir o resultado no h2 com a id "mensagem"
    document.getElementById("mensagem").innerText = `Resultado: ${resultado}`;
}

//para exibir o alert ate logo e fechar a janela
function fecharJanela() {
    alert("Até a próxima!");
    window.close();
}