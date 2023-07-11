//Unidades de cada grandeza
const opcoesUnidades = {
    temperatura: ["Celsius", "Fahrenheit", "Kelvin"],
    comprimento: ["Metro", "Centímetro", "Pé", "Polegada"],
    massa: ["Quilograma", "Grama", "Libra", "Onça"]
};  

//Referências para elementos do DOM
const selectUnidadePrincipal = document.getElementById("unidadeOrigem");
const selectUnidadeConversao = document.getElementById("unidadeDestino");
const selectTipoConversao = document.getElementById("conversaoTipo");

//Adiciona um ouvinte de evento no seletor de tipo de conversão 
selectTipoConversao.addEventListener("change", preencherUnidades);

// Função para preencher as unidades de origem e destino baseada no tipo de conversão escolhido pelo usuário
function preencherUnidades() {
    const tipoSelecionado = selectTipoConversao.value;
    const unidades = opcoesUnidades[tipoSelecionado];

    // Limpa as opções anteriores 
    selectUnidadePrincipal.innerHTML = "";
    selectUnidadeConversao.innerHTML = "";

    // Preenche as opções de unidade 
    unidades.forEach(function (unidade) {
        const option = document.createElement("option");
        option.value = unidade.toLowerCase().replace(/ /g, "");
        option.textContent = unidade;

        // Adiciona as opções ao seletor
        selectUnidadePrincipal.appendChild(option.cloneNode(true));
        selectUnidadeConversao.appendChild(option);
    });
}

//Efetua conversão dependendo da unidade selecionada pelo usuário
function converter() {
    const valorDigitado = document.getElementById("valorEntrada").value;
    const unidadePrincipal = selectUnidadePrincipal.value;
    const unidadeConversao = selectUnidadeConversao.value;
    let resultado;

    switch (unidadePrincipal) {
        case "celsius":
            resultado = converterTemperatura(parseFloat(valorDigitado), unidadeConversao);
            break;
        case "fahrenheit":
            resultado = converterTemperatura(((parseFloat(valorDigitado) - 32) * 5) / 9, unidadeConversao);
            break;
        case "kelvin":
            resultado = converterTemperatura(parseFloat(valorDigitado) - 273.15, unidadeConversao);
            break;
        case "metro":
            resultado = converterComprimento(parseFloat(valorDigitado), unidadeConversao);
            break;
        case "centímetro":
            resultado = converterComprimento(parseFloat(valorDigitado) / 100, unidadeConversao);
            break;
        case "pé":
            resultado = converterComprimento(parseFloat(valorDigitado) / 3.28084, unidadeConversao);
            break;
        case "polegada":
            resultado = converterComprimento(parseFloat(valorDigitado) / 39.37, unidadeConversao);
            break;
        case "quilograma":
            resultado = converterMassa(parseFloat(valorDigitado), unidadeConversao);
            break;
        case "grama":
            resultado = converterMassa(parseFloat(valorDigitado) * 1000, unidadeConversao);
            break;
        case "libra":
            resultado = converterMassa(parseFloat(valorDigitado) * 2.2047, unidadeConversao);
            break;
        case "onça":
            resultado = converterMassa(parseFloat(valorDigitado) * 35.274, unidadeConversao);
            break;
        default:
            resultado = "Unidade de origem inválida";
        }
        
    // Exibe o resultado da conversão
    document.getElementById("resultado").textContent = resultado;

    if (valorDigitado === "") {
        alert("Insira um valor no campo!");
    }
}


//Funções para conversão das unidades

function converterTemperatura(valor, unidadeConversao) {
    switch (unidadeConversao) {
        case "celsius":
            return valor;
        case "fahrenheit":
            return (valor * 9)/ 5 + 32;
        case "kelvin":
            return valor + 273.15;
        default:
            return "Unidade de destino inválida"
    }
}

function converterComprimento(valor, unidadeConversao) {
    switch (unidadeConversao) {
        case "metro":
            return valor;
        case "centímetro":
            return valor * 100;
        case "pé":
            return valor * 3.2808;
        case "polegada":
            return valor * 39.37;
        default:
            return "Unidade de destino inválida"

    }
}

function converterMassa(valor, unidadeConversao) {
    switch (unidadeConversao) {
        case "quilograma":
            return valor;
        case "grama":
            return valor * 1000;
        case "libra":
            return valor * 2.2047;
        case "onça":
            return valor * 35.27 
        default:
            return "Unidade de destino inválida"

    }
}

preencherUnidades();