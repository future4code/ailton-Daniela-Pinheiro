// EXERCÍCIO 2
if(process.argv[2] && process.argv[3] && process.argv[4]) {
    if((process.argv[2].includes("add" || "sub" || "mult" || "div")) && !isNaN(process.argv[3]) && !isNaN(process.argv[4])) {
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
    } else {
        console.log('\x1b[31m', "É necessário que o primeiro parâmetro seja uma operação('add', 'sub', 'mult' ou 'div') e os dois últimos parâmetros sejam números!", '\x1b[0m')
    }
} else {
    console.log('\x1b[31m', "É necessário passar 3 parâmetros!", '\x1b[0m')
}