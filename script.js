//Unidades de cada grandeza
const opcoesUnidades = {
    temperatura: ["Celsius", "Fahrenheit", "Kelvin"],
    comprimento: ["Metro", "Centímetro", "Pé", "Polegada"],
    massa: ["Quilograma", "Grama", "Libra", "Onça"]
}

//Referências para elementos do DOM
const selectUnidadePincipal = document.getElementById("unidadePrincipal");
const selectUnidadeConversao = document.getElementById("unidadeConversao");
const selectConversao = document.getElementById("conversao");

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
        


    }
}