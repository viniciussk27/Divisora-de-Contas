function calcular() {
    // Obtém os valores dos inputs
    const salario1 = parseFloat(document.getElementById('salario1').value);
    const salario2 = parseFloat(document.getElementById('salario2').value);
    const totalContas = parseFloat(document.getElementById('totalContas').value);

    // Calcula a renda total
    const rendaTotal = salario1 + salario2;

    // Calcula a porcentagem de cada pessoa
    const porcentagem1 = (salario1 / rendaTotal) * 100;
    const porcentagem2 = (salario2 / rendaTotal) * 100;

    // Calcula o valor a ser pago por cada pessoa
    const valorAPagar1 = (porcentagem1 / 100) * totalContas;
    const valorAPagar2 = (porcentagem2 / 100) * totalContas;

    // Exibe o resultado
    const resultado = document.getElementById('resultado');
    resultado.textContent = `A Pessoa 1 deve pagar R$ ${valorAPagar1.toFixed(2)} e a Pessoa 2 deve pagar R$ ${valorAPagar2.toFixed(2)}`;
}