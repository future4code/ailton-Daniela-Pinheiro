// EXERCÍCIO 3
const tarefas = []
tarefas.push(process.argv[2])
console.log("Tarefa adicionada com sucesso!", tarefas)

// Desafio
const fs = require('fs')
const tarefa = `${process.argv[2]}\n`
// Salva a tarefa passada no arquivo txt
fs.writeFile("tarefas.txt", tarefa, { flag: 'a+' }, (err) => {
    if (err) console.log(err)
    console.log("Tarefa adicionada com sucesso!")
  })
// Lê e imprime o arquivo txt
fs.readFile("tarefas.txt", 'utf8', (err, data) => {
    if (err) console.log(err)
    console.log(data)
})