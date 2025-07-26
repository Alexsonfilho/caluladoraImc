function calcularImc () {
    let altura = document.getElementById("altura").value;
    let peso = document.getElementById("peso").value;
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    

    let imc = peso / (altura * altura);
    imc = parseFloat(imc.toFixed(1));
    console.log(imc);


    let msg;
    if (imc < 18.5) {
        msg = `Olá, senhor(a): ${nome}. Seu IMC é de ${imc}KG/M², classificação: Magreza.`;
        exibirMensagem("p", msg);
    } else if (imc >= 18.5 && imc < 25) {
        msg = `Olá, senhor(a): ${nome}. Seu IMC é de ${imc}KG/M², classificação: Normal.`;
        exibirMensagem("p", msg);
    } else if (imc >= 25 && imc < 30) {
        msg = `Olá, senhor(a): ${nome}. Seu IMC é de ${imc}KG/M², classificação: Sobrepeso.`;
        exibirMensagem("p", msg);
    } else if (imc >= 30 && imc < 35) {
        msg = `Olá, senhor(a): ${nome}. Seu IMC é de ${imc}KG/M², classificação: Obesidade I.`;
        exibirMensagem("p", msg);
    } else if (imc >= 35 && imc < 40) {
        msg = `Olá, senhor(a): ${nome}. Seu IMC é de ${imc}KG/M², classificação: Obesidade II.`;
        exibirMensagem("p", msg);
    } else {
        msg = `Olá, senhor(a): ${nome}. Seu IMC é de ${imc}KG/M², classificação: Obesidade III.`;
        exibirMensagem("p", msg);
    }


}

function exibirMensagem (tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto
}

