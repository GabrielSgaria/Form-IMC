const form = document.querySelector('#formulario');

//Neste form.add é para adicionar um evento no form, através do submit 
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso'); //informar o elemento que esta recebendo a ação 
    const inputAltura = e.target.querySelector('#altura');
    const peso = Number(inputPeso.value); //tratando dados para numero, pois entrou como string
    const altura = Number(inputAltura.value);

    //Operador "!" = diferente de NaN "se peso nao for verdadeiro"
    if (!peso) {
        setResultado('Peso inválido', false);
        return;
    }

    //Se altura for diferente de NaN
    if (!altura) {
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc}).`;

    setResultado(msg, true);
});

function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
        'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) {
        return nivel[5];
    }

    if (imc >= 34.9) {
        return nivel[4];
    }

    if (imc >= 29.9) {
        return nivel[3];
    }

    if (imc >= 24.9) {
        return nivel[2];
    }

    if (imc >= 18.5) {
        return nivel[1];
    }

    if (imc < 18.5) {
        return nivel[0];
    }
}

function getImc(peso, altura) {
    const imc = peso / (altura * altura); // TAMBÉM >> peso / altura ** 2;
    return imc.toFixed(2); //retornando com 2 casas decimais
}


function criaP() {
    const p = document.createElement('p'); //cria um elemento "p" de paragrafo
    return p;
}

//Função de exibir mensagem de resultado
function setResultado(msg, isValid) {
    const resultado = document.querySelector('#res');
    resultado.innerHTML = ' ';

    const p = criaP();

    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}