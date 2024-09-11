// script.js
const salarioMinimoAPI = 'https://api.salario-minimo.com.br/v1/salario-minimo'; // Atualize com a URL correta

async function obterSalarioMinimo() {
    try {
        const response = await fetch(salarioMinimoAPI);
        const data = await response.json();
        return data.valor;
    } catch (error) {
        console.error('Erro ao obter o salário mínimo:', error);
        return 1412; // Valor padrão se a API falhar
    }
}

function calcularINSS(salario) {
    if (salario <= 1412) return salario * 0.075;
    if (salario <= 2666.68) return salario * 0.09;
    if (salario <= 4000.03) return salario * 0.12;
    return salario * 0.14;
}

function calcularIRPF(salario) {
    const tabelaIRPF = [
        { faixa: 2112.00, aliquota: 0, parcela: 0 },
        { faixa: 2826.65, aliquota: 0.075, parcela: 158.40 },
        { faixa: 3751.05, aliquota: 0.15, parcela: 370.40 },
        { faixa: 4664.68, aliquota: 0.225, parcela: 636.13 },
        { faixa: Infinity, aliquota: 0.275, parcela: 869.36 }
    ];

    let imposto = 0;
    for (let i = 0; i < tabelaIRPF.length; i++) {
        if (salario <= tabelaIRPF[i].faixa) {
            imposto = salario * tabelaIRPF[i].aliquota - tabelaIRPF[i].parcela;
            break;
        }
    }

    return imposto;
}

async function calcular() {
    try {
        const salarioMinimo = await obterSalarioMinimo();
        const salarioBase = parseFloat(document.getElementById('salarioBase').value);
        const insalubridade = parseFloat(document.getElementById('insalubridade').value) || 0;
        const periculosidade = parseFloat(document.getElementById('periculosidade').value) || 0;
        const valeRefeicao = parseFloat(document.getElementById('valeRefeicao').value) || 0;
        const diasTrabalhados = parseInt(document.getElementById('diasTrabalhados').value) || 0;
        const percentualDescontoVale = parseFloat(document.getElementById('percentualDescontoVale').value) || 0;
        const percentualDescontoPassagem = parseFloat(document.getElementById('percentualDescontoPassagem').value) || 0;

        // Calcular adicionais
        const valorInsalubridade = (salarioMinimo * (insalubridade / 100)) || 0;
        const valorPericulosidade = (salarioBase * (periculosidade / 100)) || 0;

        // Salário total
        const salarioTotal = salarioBase + valorInsalubridade + valorPericulosidade;

        // Calcular descontos
        const descontoVale = (valeRefeicao * diasTrabalhados) * (percentualDescontoVale / 100);
        const descontoPassagem = salarioBase * (percentualDescontoPassagem / 100);

        // Salário após descontos
        const salarioFinal = salarioTotal - descontoVale - descontoPassagem;

        // Calcular INSS e IRPF
        const descontoINSS = calcularINSS(salarioTotal);
        const descontoIRPF = calcularIRPF(salarioFinal);

        // Exibir resultados
        document.getElementById('resultado').innerHTML = `
            <h2>Resultado</h2>
            <p><strong>Salário Base:</strong> R$ ${salarioBase.toFixed(2)}</p>
            <p><strong>Insalubridade:</strong> R$ ${valorInsalubridade.toFixed(2)}</p>
            <p><strong>Periculosidade:</strong> R$ ${valorPericulosidade.toFixed(2)}</p>
            <p><strong>Salário Total:</strong> R$ ${salarioTotal.toFixed(2)}</p>
            <p><strong>Desconto Vale Refeição:</strong> R$ ${descontoVale.toFixed(2)}</p>
            <p><strong>Desconto Passagem:</strong> R$ ${descontoPassagem.toFixed(2)}</p>
            <p><strong>Desconto INSS:</strong> R$ ${descontoINSS.toFixed(2)}</p>
            <p><strong>Desconto IRPF:</strong> R$ ${descontoIRPF.toFixed(2)}</p>
            <p><strong>Salário Líquido:</strong> R$ ${(salarioFinal - descontoINSS - descontoIRPF).toFixed(2)}</p>
        `;
    } catch (error) {
        console.error('Erro ao calcular o salário:', error);
        document.getElementById('resultado').innerHTML = `
            <p>Ocorreu um erro ao calcular. Verifique os dados inseridos e tente novamente.</p>
        `;
    }
}
