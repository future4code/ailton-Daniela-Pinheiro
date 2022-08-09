// EXERCÍCIO 1
// a)
// Para acessar os parâmetros passados na linha de comando para o Node, utiliza-se o "process.argv[index]",
// onde o "index" corresponde à posição do parâmetro passado. Os dois primeiros parâmetros (0 e 1) correspondem
// a "node" e "index.js", e os demais (a partir da posição 2) são passados livremente.

// b)
// console.log(`Olá, ${process.argv[2]}! Você tem ${process.argv[3]} anos.`)

// c)
const novaIdade = Number(process.argv[3]) + 7
console.log('\x1b[31m', `Olá, ${process.argv[2]}! Você tem ${process.argv[3]} anos. Em sete anos você terá ${novaIdade} anos.`, '\x1b[0m')
