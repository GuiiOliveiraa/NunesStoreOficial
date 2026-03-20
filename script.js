const botoes = document.querySelectorAll('nav button');
const cards = document.querySelectorAll('.card');

botoes.forEach(botao => {
  botao.addEventListener('click', () => {
    const categoria = botao.dataset.categoria;

    // botão ativo
    botoes.forEach(btn => btn.classList.remove('active'));
    botao.classList.add('active');

    // filtro
    cards.forEach(card => {
      if (categoria === 'todos') {
        card.classList.remove('hidden');
      } else {
        card.classList.toggle('hidden', !card.classList.contains(categoria));
      }
    });
  });
});