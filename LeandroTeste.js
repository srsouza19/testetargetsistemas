
// ------------------    Questão 1 ----------------------------
function IndiceK() {
    var k = 0;
    var indice = 13;
    var soma = 0;
    while (k < indice) {
        k++
        soma += k
    };
    console.log(soma)
}

IndiceK();




// ------------------    Questão 2 -----------------------------
function pertenceFibonacci(num) {
    let a = 0;
    let b = 1;

    if (num === 0 || num === 1) {
        return `${num} pertence à sequência de Fibonacci.`;
    }

    while (b < num) {
        let temp = b;
        b = a + b;
        a = temp;
    }

    if (b === num) {
        return `${num} pertence à sequência de Fibonacci.`;
    } else {
        return `${num} não pertence à sequência de Fibonacci.`;
    }
}

const numero = 10; // Altere este valor para testar
const resultado = pertenceFibonacci(numero);
console.log(resultado);





// ------------------   Questao 3  ----------------------------

// Dados do faturamento
const faturamento = [
    { dia: 1, valor: 22174.1664 },
    { dia: 2, valor: 24537.6698 },
    { dia: 3, valor: 26139.6134 },
    { dia: 4, valor: 0.0 },
    { dia: 5, valor: 0.0 },
    { dia: 6, valor: 26742.6612 },
    { dia: 7, valor: 0.0 },
    { dia: 8, valor: 42889.2258 },
    { dia: 9, valor: 46251.174 },
    { dia: 10, valor: 11191.4722 },
    { dia: 11, valor: 0.0 },
    { dia: 12, valor: 0.0 },
    { dia: 13, valor: 3847.4823 },
    { dia: 14, valor: 373.7838 },
    { dia: 15, valor: 2659.7563 },
    { dia: 16, valor: 48924.2448 },
    { dia: 17, valor: 18419.2614 },
    { dia: 18, valor: 0.0 },
    { dia: 19, valor: 0.0 },
    { dia: 20, valor: 35240.1826 },
    { dia: 21, valor: 43829.1667 },
    { dia: 22, valor: 18235.6852 },
    { dia: 23, valor: 4355.0662 },
    { dia: 24, valor: 13327.1025 },
    { dia: 25, valor: 0.0 },
    { dia: 26, valor: 0.0 },
    { dia: 27, valor: 25681.8318 },
    { dia: 28, valor: 1718.1221 },
    { dia: 29, valor: 13220.495 },
    { dia: 30, valor: 8414.61 }
];

// Função para calcular o menor, maior e dias acima da média
function calcularFaturamento(faturamento) {
    let menorValor = null;  // Inicializa como null
    let maiorValor = null;  // Inicializa como null
    let totalFaturamento = 0;
    let diasValidos = 0;

    // Cálculo do menor, maior e total de faturamento
    for (const dia of faturamento) {
        const valor = dia.valor;

        if (valor > 0) {
            // Atualiza menor e maior valor
            if (menorValor === null || valor < menorValor) {
                menorValor = valor;
            }
            if (maiorValor === null || valor > maiorValor) {
                maiorValor = valor;
            }
            // Acumula o total de faturamento e conta os dias válidos
            totalFaturamento += valor;
            diasValidos++;
        }
    }

    // Cálculo da média mensal
    const mediaMensal = totalFaturamento / diasValidos;

    // Contagem de dias acima da média
    let diasAcimaMedia = 0;
    for (const dia of faturamento) {
        if (dia.valor > mediaMensal) {
            diasAcimaMedia++;
        }
    }

    return {
        menorValor: menorValor,
        maiorValor: maiorValor,
        diasAcimaMedia: diasAcimaMedia
    };
}

// Executa a função e exibe os resultados
const resultados = calcularFaturamento(faturamento);
console.log(`Menor valor: ${resultados.menorValor}`);
console.log(`Maior valor: ${resultados.maiorValor}`);
console.log(`Dias acima da média: ${resultados.diasAcimaMedia}`);




// ------------------    Questão 4 ----------------------------

function calcularPercentuais(faturamentos) {
    // Calcula o total de faturamento
    const totalFaturamento = Object.values(faturamentos).reduce((acc, valor) => acc + valor, 0);

    // Calcula o percentual de cada estado
    const percentuais = {};
    for (const estado in faturamentos) {
        percentuais[estado] = ((faturamentos[estado] / totalFaturamento) * 100).toFixed(2) + '%';
    }

    return percentuais;
}

// Faturamento mensal por estado
const faturamentos = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

// Calcula e exibe os percentuais
const percentuais = calcularPercentuais(faturamentos);
console.log(percentuais);





// ------------------    Questao 5 ----------------------------

function inverterString(str) {
    return str.split('').reverse().join('');
}

// Exemplo de uso
const stringOriginal = "Olá, mundo!";
const stringInvertida = inverterString(stringOriginal);
console.log(stringInvertida);
