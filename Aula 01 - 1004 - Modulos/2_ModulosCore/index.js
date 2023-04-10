
// Modulo para sistema operacional (os)
const os = require("os");

console.log(os.arch());
console.log(os.platform());
console.log(os.type());
console.log(os.version());
console.log(os.uptime());
console.log(os.freemem());
console.log(os.totalmem());
console.log(os.cpus().length);
console.log(os.homedir());
console.log(os.hostname());

// Modulo File System (FS)

const fs = require('fs');

fs.writeFileSync("./texto.txt", "A-M-O-E-B-A AMOEBA A MASSINHA DE BRINCAR, É MASSA!!!");

const arquivo = fs.readFileSync("./texto.txt");
console.log(arquivo.toString());

/** EXERCÍCIO IV: Escreva um arquivo txt com as informações do seu sistema:
 * Explore as funções do módulo os e gere um arquivo txt com informações
 * da máquina.
 */

const platform = os.platform();
const type = os.type();
const version = os.version();

fs.writeFileSync("./exercicio.txt", `${platform}, ${version}, ${type}`);

const novoArquivo = fs.readFileSync("./exercicio.txt");
console.log(novoArquivo.toString());