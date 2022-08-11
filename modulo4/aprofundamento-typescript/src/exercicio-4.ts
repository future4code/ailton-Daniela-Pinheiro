// EXERCICIO 4
type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

console.table(pokemon1)
console.table(pokemon2)

// b e c)
// Para transpilar esse arquivo, é necessário adicionar um script start no package.json
// informando o caminho do arquivo, uma vez que ele encontra-se numa pasta diferente do
// package.json. Se os dois estivessem na mesma pasta, bastaria colocar o nome do
// arquivo typescript.
// Por exemplo:
// "start": "tsc ./src/exercicio-4.ts && node ./build/exercicio-4.js"

// d)
// Sim, basta utilizar o comando tsc sem parâmetros, ou ainda, seguido dos nomes dos 
// arquivos, separados por espaço.
// Por exemplo:
// tsc
// tsc exercicio-1.ts exercicio-2.ts exercicio-3.ts exercicio-4.ts