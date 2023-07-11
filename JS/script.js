//Aqui, uma constante é declarada, e um array contendo as informações de cada grandeza é escrito.
const opcoesUnidades = {
    temperatura: ["Celsius", "Fahrenheit", "Kelvin"],
    comprimento: ["Metro", "Centímetro", "Pé", "Polegada"],
    massa: ["Quilograma", "Grama", "Libra", "Onça"]
};  

//Aqui, novas constantes são declaradas, desta vez para obter os IDs dos elementos no HTML a partir do DOM 
const selectUnidadePrincipal = document.getElementById("unidadeOrigem");
const selectUnidadeConversao = document.getElementById("unidadeDestino");
const selectTipoConversao = document.getElementById("conversaoTipo");

//Adiciona um ouvinte de evento no seletor de tipo de conversão 
selectTipoConversao.addEventListener("change", preencherUnidades);


//Aqui, a função preencherUnidades é declarada, para preencher as unidades de origem e destino com base no tipo de conversão selecionado pelo usuário
function preencherUnidades() {
    const tipoSelecionado = selectTipoConversao.value;
    const unidades = opcoesUnidades[tipoSelecionado];

 
    //Essa pequena parte utilizando innerHTML limpa as opções previamente selecionadas
    selectUnidadePrincipal.innerHTML = "";
    selectUnidadeConversao.innerHTML = "";

  
    //Aqui, é utilizado o forEach para preencher as opções de unidade. A const option cria um elemento para cada unidade, em letras minúsculas e sem espaços.
    unidades.forEach(function (unidade) {
        const option = document.createElement("option");
        option.value = unidade.toLowerCase().replace(/ /g, "");
        option.textContent = unidade;

        //Aqui, a opção é adicionada aos selects de unidade principal e conversão. o clodenode(true) é utilizado para criar uma cópia da opção antes de adicioná-la ao segundo select, uma vez que cada elemento <option> só pdoe pertencer a um único pai.
        selectUnidadePrincipal.appendChild(option.cloneNode(true));
        selectUnidadeConversao.appendChild(option);
    });
}

//Aqui é onde a conversão propriamente ocorre. É criada uma função para converter, e constantes para obter os valores do select. 
function converter() {
    const valorDigitado = document.getElementById("valorEntrada").value;
    const unidadePrincipal = selectUnidadePrincipal.value;
    const unidadeConversao = selectUnidadeConversao.value;
    let resultado;
    //Foi optado pelo switch case, uma vez que neste caso ele seria nais eficiente em termos de desempenho da máquina comparado à uma série de if/else aninhados, além de possuir uma legibilidade mais fácil. Também permite que seja verificada a igualdade da variável com os diferentes casos, e executado o bloco correspondente com o caso correspondente. 
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
        
    //Aqui, é obtido o ID do elemento HTML para exibir o resultado da operação 
    document.getElementById("resultado").textContent = resultado;

    //Aqui é criada uma condicional para que o campo não possa ser deixado em branco 
    if (valorDigitado === "") {
        alert("Insira um valor no campo!");
    }
}


//Aqui, são criadas as funções para conversão dos elementos contendo os cálculos matemáticos das grandezas. 
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
//Finalmente, é chamada a função 
preencherUnidades();