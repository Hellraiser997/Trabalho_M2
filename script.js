//Unidades de cada grandeza
const opcoesUnidades = {
    temperatura: ["Celsius", "Fahrenheit", "Kelvin"],
    comprimento: ["Metro", "Centímetro", "Pé", "Polegada"],
    massa: ["Quilograma", "Grama", "Libra", "Onça"]
}

//Referências para elementos do DOM
const selectUnidadePrincipal = document.getElementById("unidadePrincipal");
const selectUnidadeConversao = document.getElementById("unidadeConversao");
const selectConversao = document.getElementById("conversao");

//Adiciona um ouvinte de evento no seletor de tipo de conversão 
selectConversao.addEventListener("change", preencherUnidades);

// Função para preencher as unidades de origem e destino baseada no tipo de conversão escolhido pelo usuário
function preencherUnidades() {
    const tipoSelecionado = selectConversao.value;
    const unidades = opcoesUnidades[tipoSelecionado];

    // Limpa as opções anteriores 
    selectUnidadePrincipal.innerHTML = '';
    selectUnidadeConversao.innerHTML = '';

    // Preenche as opções de unidade 
    unidades.forEach(function (unidade)) {
        const option = document.createElement("option");
        option.value = unidade.toLowerCase().replace(/ /g, "");
        option.textContent = unidade;

        // Adiciona as opções ao seletor
        selectUnidadePrincipal.appendChild(option.clodeNode(true));
        selectUnidadeConversao.appendChild(option);
    }
}

//Efetua conversão dependendo da unidade selecionada pelo usuário
function converter() {
    const valorDigitado = document.getElementById("inputValue").value;
    const unidadePrincipal = selectUnidadePrincipal.value;
    const unidadeConversao = selectUnidadeConversao.value;
    let resultado;

    switch (unidadePrincipal) {
        case "Celsius":
            resultado = converterTemperatura(parseFloat(valorDigitado), unidadeConversao);
            break
        case "Fahrenheit":
            resultado = converterTemperatura(((parseFloat(valorDigitado) - 32) * 5) / 9, unidadeConversao);
            break;
        case "Kelvin":
            resultado = converterTemperatura(parseFloat(valorDigitado) - 273.15, unidadeConversao);
            break;
        case "Metro":
            resultado = converterComprimento(parseFloat(valorDigitado), unidadeConversao);
        case "Centímetro":
            resultado = converterComprimento(parseFloat(valorDigitado) / 100, unidadeConversao);
            break;
        case "Pé":
            resultado = converterComprimento(parseFloat(valorDigitado) / 3.28084, unidadeConversao);
            break;
        case "Polegada":
            resultado = converterComprimento(parseFloat(valorDigitado) / 39.37, unidadeConversao);
            break;
        case "Quilograma":
            resultado = converterMassa(parseFloat(valorDigitado), unidadeConversao);
            break;
        case "Grama":
            resultado = converterMassa(parseFloat(valorDigitado) * 1000, unidadeConversao);
            break;
        case "Libra":
            resultado = converterMassa(parseFloat(valorDigitado) * 2.2047, unidadeConversao);
            break;
        case "Onça":
            resultado = converterMassa(parseFloat(valorDigitado) * 35.274, unidadeConversao);
            break;
    }
}

// Exibe o resultado da conversão
document.getElementById("resultado").textContent = resultado;

//Funções para conversão das unidades

function converterTemperatura(valor, unidadeConversao) {
    switch (unidadeConversao) {
        case "Celsius":
            return valor;
        case "Fahrenheit":
            return (valor * 9)/ 5 + 32;
        case "Kelvin":
            return valor + 273.15;
    }
}

function converterComprimento(valor, unidadeConversao) {
    switch (unidadeConversao) {
        case "Metro":
            return valor;
        case "Centímetro":
            return valor * 100;
        case "Pé":
            return valor * 3.2808;
        case "Polegada":
            return valor * 39.37;
    }
}

function converterComprimento(valor, unidadeConversao) {
    switch (unidadeConversao) {
        case "Quilograma":
            return valor;
        case "Grama":
            return valor * 1000;
        case "Libra":
            return valor * 2.2047;
        case "Onça":
            return valor * 35.27 
    }
}