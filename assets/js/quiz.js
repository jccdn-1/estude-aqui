let tituto = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso = document.querySelector('#aviso')
let respostaEsta = document.querySelector('#respostaEsta')
let pontos = 0 //pontos para o placar
let placar = 0 //placar

//pergunta
let numQuestao = document.querySelector('#numQuestao')
let pergunta = document.querySelector('#pergunta')

//alternativas
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')

//article com a class questoes
let articleQuestoes = document.querySelector('.questoes')
//ol li com as alternativas
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao    :0,
    pergunta      :"Pergunta",
    alternativaA  :"Alternativa A",
    alternativaB  :"Alternativa B",
    alternativaC  :"Alternativa C",
    correta       :"0", 
}