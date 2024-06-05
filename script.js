document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formulario');
    const tabela = document.getElementById('tabela').getElementsByTagName('tbody')[0];
    const limparTabelaBtn = document.getElementById('limparTabela');

    formulario.addEventListener('submit', registrarAluno);
    limparTabelaBtn.addEventListener('click', limparTabela);

    function registrarAluno(e) {
        e.preventDefault();
        const nome = formulario.nome.value;
        const matricula = formulario.matricula.value;
        const nota1 = parseFloat(formulario.nota1.value);
        const nota2 = parseFloat(formulario.nota2.value);
        const media = (nota1 + nota2) / 2;
        const situacao = media >= 5 ? "Aprovado" : "Reprovado";
        adicionarLinhaTabela(nome, matricula, nota1, nota2, media.toFixed(2), situacao);
        formulario.reset();
    }

    function adicionarLinhaTabela(nome, matricula, nota1, nota2, media, situacao) {
        const linha = tabela.insertRow();
        linha.innerHTML = `
            <td>${nome}</td>
            <td>${matricula}</td>
            <td>${nota1}</td>
            <td>${nota2}</td>
            <td>${media}</td>
            <td>${situacao}</td>
        `;
    }

    function limparTabela() {
        tabela.innerHTML = '';
    }
});
