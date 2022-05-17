// O método readdir() é usado para ler os nomes dos arquivos e pastas.
// O método fs. promise. readdir() retorna uma promessa resolvida ou
// rejeitada e, portanto, evita o aninhamento de callback ou problemas
// de callback hell que podem ocorrer no método fs.

// resolve() resolve uma sequência de caminhos ou segmentos de caminho
// em um caminho absoluto

// O fs. stat() é usado para retornar informações sobre o arquivo ou
// diretório fornecido . Ele retorna um fs. Objeto Stat que possui
// várias propriedades e métodos para obter detalhes sobre o arquivo ou
// diretório. Sintaxe: fs.stat( caminho, opções, retorno de chamada)

const fs = require("fs").promises; // Trabalha os caminhos. É um módulo do próprio node
const path = require("path");

// função listar o diretório
async function readdir(rootDir) {
  rootDir = rootDir || path.resolve(__dirname);
  const files = await fs.readdir(rootDir);
  walk(files, rootDir);
}

// Verificando se é diretório e listar os arquivos de cada diretório
async function walk(files, rootDir) {
  for (let file of files) {
    const fileFullPath = path.resolve(rootDir, file); // Compõe o caminho do arquivo 
    const stats = await fs.stat(fileFullPath);    

    // Expressões regurales para não listar git e node_modules

    //if(/\.git/g.test(fileFullPath)) continue;
    if(/node_modules/g.test(fileFullPath)) continue;

    if(stats.isDirectory()){
        readdir(fileFullPath);
        continue; // continua a interação do laço for 
    }
    if(!/\.css$/g.test(fileFullPath) && !/\.html$/g.test(fileFullPath)
    ) continue;
    
    console.log(fileFullPath); 
  }
}

readdir(
  "D:\\Meus Documentos\\Documentos\\DavidCavalcanti.github.io\\Linguagens de programação\\JavaScript"
);
