function calcularImc () {
    let altura = document.getElementById("altura").value;
    let peso = document.getElementById("peso").value;
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    
    if (
    verificaCampoVazio(nome) ||
    verificaCampoVazio(idade) ||
    verificaCampoVazio(peso) ||
    verificaCampoVazio(altura)
    ) {
        return;
    }

    let imc = peso / (altura * altura);
    imc = parseFloat(imc.toFixed(1));
    console.log(imc);


    let msg;
    if (imc < 18.5) {
        msg = `Olá, senhor(a): ${nome}. Seu IMC é de ${imc}KG/M², classificação: Magreza.`;
        exibirMensagem("p", msg);

        document.getElementById("magreza").classList.add("destacado-vermelho");
    } else if (imc >= 18.5 && imc < 25) {
        msg = `Olá, senhor(a): ${nome}. Seu IMC é de ${imc}KG/M², classificação: Normal.`;
        exibirMensagem("p", msg);

        document.getElementById("normal").classList.add("destacado-verde");
    } else if (imc >= 25 && imc < 30) {
        msg = `Olá, senhor(a): ${nome}. Seu IMC é de ${imc}KG/M², classificação: Sobrepeso.`;
        exibirMensagem("p", msg);

        document.getElementById("sobrepeso").classList.add("destacado-vermelho");
    } else if (imc >= 30 && imc < 35) {
        msg = `Olá, senhor(a): ${nome}. Seu IMC é de ${imc}KG/M², classificação: Obesidade I.`;
        exibirMensagem("p", msg);

        document.getElementById("obesidade1").classList.add("destacado-vermelho");
    } else if (imc >= 35 && imc < 40) {
        msg = `Olá, senhor(a): ${nome}. Seu IMC é de ${imc}KG/M², classificação: Obesidade II.`;
        exibirMensagem("p", msg);

        document.getElementById("obesidade2").classList.add("destacado-vermelho");
    } else {
        msg = `Olá, senhor(a): ${nome}. Seu IMC é de ${imc}KG/M², classificação: Obesidade III.`;
        exibirMensagem("p", msg);

        document.getElementById("obesidade3").classList.add("destacado-vermelho");
    }


}

function exibirMensagem (tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto
}

function verificaCampoVazio (campo) {
    if (campo == ""){
        alert(`Preencha todos os campos em vazio`);
        return true;
    }
    return false;
}

function zerar() {
    document.getElementById("altura").value = "";
    document.getElementById("peso").value = "";
    document.getElementById("nome").value = "";
    document.getElementById("idade").value = "";   

    document.getElementById("sexo-m").checked = false;
    document.getElementById("sexo-f").checked = false;

    document.getElementById("resultado").innerHTML = "";    
    
    
    // Remove destaque das classificações
    const ids = ["magreza", "normal", "sobrepeso", "obesidade1", "obesidade2", "obesidade3"];
    ids.forEach(id => {
        document.getElementById(id).classList.remove("destacado-vermelho", "destacado-verde");
    });
}

