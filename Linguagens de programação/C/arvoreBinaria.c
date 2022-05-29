// Diretivas de pré-processamento
#include <stdio.h>
#include <stdlib.h>

//Estrutura para armazenar as informações
typedef struct no {
    int conteudo;
    struct no *esquerda, *direita;
}No;

