// EXERCÍCIO 1
// a)
// Para acessar os parâmetros passados na linha de comando para o Node, utiliza-se o "process.argv[index]",
// onde o "index" corresponde à posição do parâmetro passado. Os dois primeiros parâmetros (0 e 1) correspondem
// a "node" e "index.js", e os demais (a partir da posição 2) são passados livremente.

// b)
// console.log(`Olá, ${process.argv[2]}! Você tem ${process.argv[3]} anos.`)

// c)
if(process.argv[2] && process.argv[3]) {
    if(!isNaN(process.argv[3])) {
        const novaIdade = Number(process.argv[3]) + 7
        const mensagem = `Olá, ${process.argv[2]}! Você tem ${process.argv[3]} anos. Em sete anos você terá ${novaIdade} anos.`
        
        console.log('\x1b[36m', mensagem, '\x1b[0m')

        // Desafio
        const fs = require('fs')
        // Salva a mensagem no arquivo txt, pulando linha
        fs.writeFile("mensagem.txt", `${mensagem}\n`, { flag: 'a+' }, (err) => {
            if (err) console.log(err)
        })
    } else {
        console.log('\x1b[31m', "É necessário que o último parâmetro seja um número!", '\x1b[0m')
    }
} else {
    console.log('\x1b[31m', "É necessário passar 2 parâmetros!", '\x1b[0m')
}