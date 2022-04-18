/**
 * Escrever uma função chamada ePaisagem que recebe dois argumentos,
 * largura e altura de uma iamgem (number). Retorne true se a imagem
 * estiver no modo paisagem 
 */

const ePaisagem = (altura, largura) => altura < largura;

console.log(ePaisagem(1080, 1920));