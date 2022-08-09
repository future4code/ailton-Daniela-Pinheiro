// EXERCÍCIO 2
switch(process.argv[2]) {
    case "add" :
        console.log('\x1b[36m', "Resultado: ", Number(process.argv[3]) + Number(process.argv[4]), '\x1b[0m')
        break
    case "sub" :
        console.log('\x1b[36m', "Resultado: ", Number(process.argv[3]) - Number(process.argv[4]), '\x1b[0m')
        break
    case "mult" :
        console.log('\x1b[36m', "Resultado: ", Number(process.argv[3]) * Number(process.argv[4]), '\x1b[0m')
        break
    case "div" :
        console.log('\x1b[36m', "Resultado: ", Number(process.argv[3]) / Number(process.argv[4]), '\x1b[0m')
        break
}