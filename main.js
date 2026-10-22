import { aleatorio, nome } from "./js/aleatorio.js";
import { perguntas } from "./js/perguntas.js";

const botaoIniciar = document.querySelector(".iniciar-btn");
const telaInicial = document.querySelector(".tela-inicial");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaoJogarNovamente = document.querySelector(".novamente-btn");

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

botaoIniciar.addEventListener('click', iniciaJogo);
botaoJogarNovamente.addEventListener("click", jogaNovamente);
substituiNome();

function iniciaJogo() {
    atual = 0;
    historiaFinal = "";
    textoResultado.textContent = "";
    telaInicial.style.display = "none";
    caixaResultado.classList.remove("mostrar");
    caixaPerguntas.classList.add("mostrar");
    caixaAlternativas.classList.add("mostrar");
    mostraPergunta();
}

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
    const afirmacao = aleatorio(opcaoSelecionada.afirmacao);
    historiaFinal += `${afirmacao} `;
    atual = opcaoSelecionada.proxima ?? atual + 1;
    mostraPergunta();
} 

function mostraResultado() {
    caixaPerguntas.classList.remove("mostrar");
    caixaAlternativas.classList.remove("mostrar");
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
    caixaPerguntas.classList.add("mostrar");
    caixaAlternativas.classList.add("mostrar");
    mostraPergunta();
}

function substituiNome() {
    for (const pergunta of perguntas) {
        pergunta.enunciado = pergunta.enunciado.replace(/você/gi, nome);
    }
}