// Seleciona elementos
const form = document.getElementById('form-reclamacao');
const lista = document.getElementById('lista-reclamacoes');

// Função para criar e adicionar um card visualmente
function adicionarReclamacao(nome, empresa, descricao) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `
    <h3>${empresa}</h3>
    <p><strong>${nome}:</strong> ${descricao}</p>
  `;
  lista.appendChild(card);
}

// Função para salvar reclamação no localStorage
function salvarReclamacao(nome, empresa, descricao) {
  const reclamacoes = JSON.parse(localStorage.getItem('reclamacoes')) || [];
  reclamacoes.push({ nome, empresa, descricao });
  localStorage.setItem('reclamacoes', JSON.stringify(reclamacoes));
}

// Função para carregar todas as reclamações ao iniciar
function carregarReclamacoes() {
  const reclamacoes = JSON.parse(localStorage.getItem('reclamacoes')) || [];
  reclamacoes.forEach(({ nome, empresa, descricao }) => {
    adicionarReclamacao(nome, empresa, descricao);
  });
}

// Evento ao enviar o formulário
form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Captura os valores
  const nome = document.getElementById('nome').value.trim();
  const empresa = document.getElementById('empresa').value.trim();
  const descricao = document.getElementById('descricao').value.trim();

  // Validação simples
  if (nome && empresa && descricao) {
    adicionarReclamacao(nome, empresa, descricao);
    salvarReclamacao(nome, empresa, descricao);
    form.reset();
  }
});

// Carrega as reclamações ao abrir a página
carregarReclamacoes();




