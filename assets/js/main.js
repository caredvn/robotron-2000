const controle = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica]");
const pecas = {
  "bracos": {
      "forca": 29,
      "poder": 35,
      "energia": -21,
      "velocidade": -5
  },

  "blindagem": {
      "forca": 41,
      "poder": 20,
      "energia": 0,
      "velocidade": -20
  },
  "nucleos":{
      "forca": 0,
      "poder": 7,
      "energia": 48,
      "velocidade": -24
  },
  "pernas":{
      "forca": 27,
      "poder": 21,
      "energia": -32,
      "velocidade": 42
  },
  "foguetes":{
      "forca": 0,
      "poder": 28,
      "energia": 0,
      "velocidade": -2
  }
};

controle.forEach( (elemento) => {  
  elemento.addEventListener("click", (evento) => {
    manipulaDados(evento.target.dataset.controle, evento.target.parentNode) //(...operacao, ...controle[seletor pai])

    atualizaEstatisticas(evento.target.dataset.peca, evento.target.dataset.controle);
  })
});

function manipulaDados(operacao, controle) {
  const peca = controle.querySelector("[data-contador]");
  const controleMenos = controle.querySelector("[data-controle='-']");

  if (operacao === "-") {
    if (parseInt(peca.value) <= 1) {
      peca.value = parseInt(peca.value) - 1;
      controleMenos.classList.add("desativado")
    } else
    peca.value = parseInt(peca.value) - 1;
  } else {
    peca.value = parseInt(peca.value) + 1;
    controleMenos.classList.remove("desativado");
  };
};

function atualizaEstatisticas(peca, operacao) {
  const contador = document.querySelector('[data-contador]');
  estatisticas.forEach( (elemento) => {
    if (operacao === '-') {
        if(contador.value >= '0') {
          elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica] // pecas[peca][elemento.dataset.estatistica] ==> fazer isso é entrar na array "pecas" e buscar dentro dela os elementos com o data-estatistica.
    };
    } else {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    }
})
}

const btnProducao = document.querySelector("[data-botao='iniciar']");
const btnFechar = document.querySelector("[data-botao='fechar']");
const caixaProducao = document.querySelector("[data-producao]");

function mostraCaixa() {
  let caixa = caixaProducao;

  caixa.classList.remove("hidden")
};

function escondeCaixa() {
  let caixa = caixaProducao;

  caixa.classList.add("hidden")
};

btnProducao.addEventListener("click", () => {
  mostraCaixa();
});

btnFechar.addEventListener("click", () => {
  escondeCaixa();
})
