// EXERCÍCIO 2
const fs = require('fs')

if(process.argv[2] && process.argv[3] && process.argv[4]) {
    const operacao = process.argv[2].includes("add") || process.argv[2].includes("sub") || process.argv[2].includes("mult") || process.argv[2].includes("div")
    
    if(operacao && !isNaN(process.argv[3]) && !isNaN(process.argv[4])) {
        switch(process.argv[2]) {
            case 'add':
                console.log('\x1b[36m', "Resultado: ", Number(process.argv[3]) + Number(process.argv[4]), '\x1b[0m')
                // Desafio
                fs.writeFile("operacao.txt", `${Number(process.argv[3])} mais ${Number(process.argv[4])} é igual a ${Number(process.argv[3]) + Number(process.argv[4])}\n`, { flag: 'a+' }, (err) => {
                    if (err) console.log(err)
                })
                break
            case 'sub':
                console.log('\x1b[36m', "Resultado: ", Number(process.argv[3]) - Number(process.argv[4]), '\x1b[0m')
                // Desafio
                fs.writeFile("operacao.txt", `${Number(process.argv[3])} menos ${Number(process.argv[4])} é igual a ${Number(process.argv[3]) - Number(process.argv[4])}\n`, { flag: 'a+' }, (err) => {
                    if (err) console.log(err)
                })
                break
            case 'mult':
                console.log('\x1b[36m', "Resultado: ", Number(process.argv[3]) * Number(process.argv[4]), '\x1b[0m')
                // Desafio
                fs.writeFile("operacao.txt", `${Number(process.argv[3])} multiplicado por ${Number(process.argv[4])} é igual a ${Number(process.argv[3]) * Number(process.argv[4])}\n`, { flag: 'a+' }, (err) => {
                    if (err) console.log(err)
                })
                break
            case 'div':
                console.log('\x1b[36m', "Resultado: ", Number(process.argv[3]) / Number(process.argv[4]), '\x1b[0m')
                // Desafio
                fs.writeFile("operacao.txt", `${Number(process.argv[3])} dividido por ${Number(process.argv[4])} é igual a ${Number(process.argv[3]) / Number(process.argv[4])}\n`, { flag: 'a+' }, (err) => {
                    if (err) console.log(err)
                })
                break
        }
    } else {
        console.log('\x1b[31m', "É necessário que o primeiro parâmetro seja uma operação('add', 'sub', 'mult' ou 'div') e os dois últimos parâmetros sejam números!", '\x1b[0m')
    }
} else {
    console.log('\x1b[31m', "É necessário passar 3 parâmetros!", '\x1b[0m')
}