const numeroSenha= document.querySelector('.parametro-senha-texto');
let tamanhoSenha= 18;
numeroSenha.textContent= tamanhoSenha;
const botoes= document.querySelector('.parametro-senha-botoes');
botoes[0].onclic= diminuirTamanho;