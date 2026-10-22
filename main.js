import { aleatorio, nome } from "./js/aleatorio.js";
import { perguntas } from "./js/perguntas.js";

const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaoJogarNovamente = document.querySelector(".novamente-btn");

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

botaoJogarNovamente.addEventListener("click", jogaNovamente);
substituiNome();
mostraPergunta();

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }

    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}



function respostaSelecionada(opcaoSelecionada) { 
  const afirmacoes = aleatorio(opcaoSelecionada.afirmacao); 
  historiaFinal += afirmacoes + " "; 
  if (opcaoSelecionada.proxima !== undefined) { 
    atual = opcaoSelecionada.proxima; 
  } else { 
    mostraResultado(); 
    return; 
  } 
  mostraPergunta(); 
} 

function mostraResultado() {
    caixaPerguntas.textContent = `Em 2049, ${nome}`;
    textoResultado.textContent = historiaFinal.trim();
    caixaAlternativas.textContent = "";
    caixaResultado.classList.add("mostrar");
}

function jogaNovamente() {
    atual = 0;
    historiaFinal = "";
    textoResultado.textContent = "";
    caixaResultado.classList.remove("mostrar");
    mostraPergunta();
}

function substituiNome() {
    for (const pergunta of perguntas) {
        pergunta.enunciado = pergunta.enunciado.replace(/você/gi, nome);
    }
}