//* Variáveis
var valores = [];

async function getMoedas() {
    let url = "https://economia.awesomeapi.com.br/json/all";

    let resultado = await fetch(url);
    let dados = await resultado.json();

    let option;

    for(let item in dados) { //* Preencher o select de moeda 1
        option = document.createElement("option");
        option.setAttribute('value', item);
        option.innerHTML = `${dados[item].code} - ${dados[item].name.split('/')[0]}`;
        document.querySelector("#selecionar-1").add(option);
        valores[item] = dados[item].high;
    }

    for(let item in dados) { //* Preencher o select de moeda 2
        option = document.createElement("option");
        option.setAttribute('value', item);
        option.innerHTML = `${dados[item].code} - ${dados[item].name.split('/')[0]}`;
        document.querySelector("#selecionar-2").add(option);
    }
}

function trocarMoeda() {
    let moeda_1 = document.querySelector('#selecionar-1').value;
    let moeda_2 = document.querySelector('#selecionar-2').value;

    if(moeda_1 != '' && moeda_2 != '') {
        document.querySelector('#selecionar-1').value = moeda_2;
        document.querySelector('#selecionar-2').value = moeda_1;
    }
}

function converter() {
    let valor_1 = document.querySelector('#moeda-1').value;
    let moeda_2 = document.querySelector('#selecionar-2').value;

    document.querySelector('#mostrar-valor').value = (parseFloat(valor_1) * parseFloat(valores[moeda_2])).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});;
}

getMoedas();