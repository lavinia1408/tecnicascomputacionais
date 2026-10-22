@import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
:root{
    --cor-fundo: #ede5ff;
    --cor-principal: #ffffff;
    --cor-secundaria: #d8c5ff;
    --cor-destaque: #a56bff;
    --cor-texto: #38245c;

}

body {
background: linear-gradient(135deg, #f3edff 0%, #dfccff 50%, #c7a8ff 100%);
color: var(--cor-texto);
font-family: 'Inter', sans-serif;
display: flex;
justify-content: center;
align-items: center;
min-height: 100vh;
margin: 0;
}

.caixa-principal{
    background: linear-gradient(145deg, #ffffff 0%, #f5efff 100%);
    width: 90%;
    max-width: 600px;
    text-align: center;
    padding: 20px;
    border: 1px solid #ffffff;
    border-radius: 20px;
    box-shadow: 0 16px 40px rgb(76 44 130 / 18%);
}

h1, .caixa-perguntas, .caixa-resultado{
    font-family: 'Chakra Petch', sans-serif;
}
.caixa-alternativas{
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.caixa-perguntas,
.caixa-alternativas {
    display: none;
}

.caixa-perguntas.mostrar {
    display: block;
}

.caixa-alternativas.mostrar {
    display: flex;
}

.caixa-resultado {
    display: none;
}

.caixa-resultado.mostrar {
    display: block;
}

button {
    background: linear-gradient(135deg, #d9c5ff 0%, #c5a4ff 100%);
    color: #38245c;
    border: none;
    border-radius: 15px;
    padding: 15px;
    cursor: pointer;
    transition: background 0.3s, transform 0.3s;
}

button:hover{
    background: linear-gradient(135deg, #b987ff 0%, #9454ed 100%);
    color: #ffffff;
    transform: translateY(-2px);
}