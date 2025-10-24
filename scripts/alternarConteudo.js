const duvida01 = document.getElementById("duvida-01");
const duvida02 = document.getElementById("duvida-02");
const duvida03 = document.getElementById("duvida-03");
const botoes = document.querySelectorAll(".lista-item-botao");
const imcImagem = document.querySelector(".imc-img");
const imcTitulo = document.querySelector(".imc-titulo");
const imcConteudo = document.querySelector(".imc-conteudo");


duvida01.addEventListener("click", () => {
    alterarConteudo("duvida-01");
    duvida01.classList.add("active");
});

duvida02.addEventListener("click", () => {
    alterarConteudo("duvida-02");
    duvida02.classList.add("active");
});

duvida03.addEventListener("click", () => {
    alterarConteudo("duvida-03");
    duvida03.classList.add("active");
});



function alterarConteudo (conteudo) {
    botoes.forEach(function(btn) {
        btn.classList.remove('active');
    })
    imcImagem.setAttribute('src', `imagens/${conteudo}.png`);
    switch(conteudo) {
        case "duvida-01":
            imcConteudo.innerHTML= `<h2>O que é IMC?</h2>
           <p class="imc-paragrafo">O IMC, ou Índice de Massa Corporal, é uma ferramenta usada por profissionais da saúde para estimar a quantidade de gordura corporal a partir da avaliação da relação entre peso e altura. O IMC serve como uma avaliação inicial para verificar se a pessoa está no peso adequado ou se está acima ou abaixo do peso ideal.</p>

          <p class="imc-paragrafo">Apesar de ser uma ferramenta prática e muito comum, o IMC não é considerado a forma mais exata de avaliar o peso, já que não leva em consideração a proporção entre músculo e gordura, a distribuição de gordura no corpo e o condicionamento físico da pessoa.</p>

          <p class="imc-paragrafo">Por isso, os resultados do IMC devem ser interpretados com precaução e sempre com o acompanhamento de um profissional. No caso de pessoas com muita massa muscular, como os atletas, outras técnicas podem ser mais adequadas.</p>
            `
            break;
            
        case "duvida-02":
            imcConteudo.innerHTML= `
            <h2>Como Fazer o Calculo?</h2>
            <p class="imc-paragrafo">O cálculo do IMC é feito usando a seguinte fórmula: peso (kg) ÷ (altura x altura) (m).</p>
            <p class="imc-paragrafo">Para calcular o IMC, deve-se:</p>
            <ul>
                <li class="item-lista"><strong>Pesar a pessoa</strong> e anotar o peso em Kg;</li>
                <li class="item-lista"><strong>Medir a altura</strong> em metros;</li>
                <li class="item-lista"><strong>Elevar a altura ao quadrado</strong>, ou seja, multiplicar por ela mesma;</li>
                <li class="item-lista"><strong>Dividir o peso pela altura ao quadrado;</strong></li>
                <li class="item-lista"><strong>Classificar o resultado do IMC</strong> a partir do valor obtido.</li>
            </ul>
            `
            
            break;

        case "duvida-03": 
            imcConteudo.innerHTML= `
            <h2>Como melhorar o IMC?</h2>
            <p class="imc-paragrafo">Para melhorar o IMC, é importante verificar se está acima ou abaixo do peso considerado normal. Quando o IMC está na faixa de magreza, é importante consultar um nutricionista que fará uma avaliação completa, indicando um plano alimentar personalizado que priorize o ganho de peso de forma saudável. </p>
            <p class="imc-paragrafo">Por outro lado, quando o IMC está na faixa do sobrepeso ou da obesidade, o nutricionista pode recomendar uma alimentação com redução de calorias. Além da dieta, normalmente também se recomenda a prática de atividade física regular, que ajudará a acelerar o metabolismo e facilitar a perda de peso, o que influencia diretamente no IMC.</p> 
            `
            break;

        default:
            break;
    }
}