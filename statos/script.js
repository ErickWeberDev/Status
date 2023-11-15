let nomeUsuario = window.prompt('Digite seu nome');
window.alert('O timo agora distribua seus pontos :)');

const statos = {
  nome: `<h4>${nomeUsuario}</h4>`,
  vitalidade: 0,
  forca: 0,
  stamina: 0,
  mana: 0,
  pontos: 60,
  id: 100000000000
};

const nome = document.querySelector('.nome');
const id = document.querySelector('.id');
const vitalidade = document.querySelector('.vitalidade');
const forca = document.querySelector('.forca');
const stamina = document.querySelector('.stamina');
const mana = document.querySelector('.mana');
const pontos = document.querySelector('.pontos');


nome.innerHTML = statos.nome;
id.innerHTML = statos.id;
vitalidade.innerHTML += statos.vitalidade;
forca.innerHTML += statos.forca
stamina.innerHTML += statos.stamina;
mana.innerHTML += statos.mana;
pontos.innerHTML = statos.pontos;

const botaoGastarPonto = document.querySelectorAll('.gastar-pontos-botao');

botaoGastarPonto.forEach(botao => {
  switch (botao.dataset.valor) {
    case '1':
      botao.addEventListener('click', () => {
        statos.vitalidade++;
        vitalidade.textContent = statos.vitalidade;
        MenosPontos()
      });
      break;
    case '2':
      botao.addEventListener('click', () => {
        statos.forca++;
        forca.textContent = statos.forca;
        MenosPontos()
      });
      break;
    case '3':
      botao.addEventListener('click', () => {
        statos.stamina++;
        stamina.textContent = statos.stamina;
        MenosPontos()
      });
      break;
    case '4':
      botao.addEventListener('click', () => {
        statos.mana++;
        mana.textContent = statos.mana;
        MenosPontos()
      });
      break;
  }
});

function MenosPontos() {
  statos.pontos--;
  pontos.textContent = statos.pontos;

  if (statos.pontos <= 0) {
    botaoGastarPonto.forEach(botao => {
      botao.style.display = 'none';
      window.alert('Infeliz mente e so isso :/');
    });
  }
}