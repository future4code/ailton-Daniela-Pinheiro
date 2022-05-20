// Exercícios de interpretação de código
/* 1.
    Serão impressos no console: cada objeto contido no array usuarios, seguido de seus índices
    e do array completo.
*/
/* 2.
    Será impresso no console um array contendo apenas os nomes dentro de cada objeto de usuarios. 
*/ 
/* 3.
    Será impresso no console um array contendo todos os itens onde o apelido é diferente de 'Chijo',
    que são 'Mandi' e 'Laura'.
*/ 

// Exercícios de escrita de código

// 1.
    // const pets = [
    //     { nome: "Lupin", raca: "Salsicha"},
    //     { nome: "Polly", raca: "Lhasa Apso"},
    //     { nome: "Madame", raca: "Poodle"},
    //     { nome: "Quentinho", raca: "Salsicha"},
    //     { nome: "Fluffy", raca: "Poodle"},
    //     { nome: "Caramelo", raca: "Vira-lata"},
    // ]

    // // a.
    // const nomesPets = pets.map((pets) => {
    //     return pets.nome
    // })
    // console.log(nomesPets)

    // // b.
    // const cachorrosSalsicha = pets.filter((pets) => {
    //     if(pets.raca === "Salsicha") {
    //         return pets
    //     }
    // })
    // console.log(cachorrosSalsicha)

    // // c.
    // const cupomDesconto = pets.filter((pets) => {
    //     if(pets.raca === "Poodle") {
    //         return pets
    //     }
    // }).map((pets) => {
    //     return `Você ganhou um cupom de desconto de 10% para tosar o/a ${pets.nome}!`
    // })
    // console.log(cupomDesconto)

// 2.
    // const produtos = [
    //     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    //     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    //     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    //     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    //     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    //     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    //     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    //     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    //     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    //     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
    // ]

    // // a.
    // const nomeProduto = produtos.map((produtos) => {
    //     return produtos.nome
    // })
    // console.log(nomeProduto)

    // // b.
    // const produtosDesconto = produtos.map((produtos) => {
    //     let produtosComDesconto = {nome: produtos.nome, preco: produtos.preco * 0.95}
    //     return produtosComDesconto
    // })
    // console.log(produtosDesconto)

    // // c.
    // const bebidas = produtos.filter((produtos) => {
    //     if(produtos.categoria === "Bebidas") {
    //         return produtos
    //     }
    // })
    // console.log(bebidas)

    // // d.
    // const produtosYpe = produtos.filter((produtos) => {
    //     if(produtos.nome.includes("Ypê")) {
    //         return produtos
    //     }
    // })
    // console.log(produtosYpe)

    // // e.
    // const compreProdutosYpe = produtos.filter((produtos) => {
    //     if(produtos.nome.includes("Ypê")) {
    //         return produtos
    //     }
    // }).map((produtos) => {
    //     return `Compre ${produtos.nome} por R$ ${produtos.preco}.`
    // })
    // console.log(compreProdutosYpe)

// Desafio
// 1.
    const pokemons = [
        { nome: "Bulbasaur", tipo: "grama" },
        { nome: "Bellsprout", tipo: "grama" },
        { nome: "Charmander", tipo: "fogo" },
        { nome: "Vulpix", tipo: "fogo" },
        { nome: "Squirtle", tipo: "água" },
        { nome: "Psyduck", tipo: "água" },
    ]

    // a.
    const nomesOrdemAlfabetica = pokemons.map((pokemons) => {
        return pokemons.nome
    }).sort()
    console.log(nomesOrdemAlfabetica)

    // b.
    const tiposPokemons = pokemons.map((pokemons) => {
        return pokemons.tipo
        // Após o map: ['grama', 'grama', 'fogo', 'fogo', 'água', 'água']
    }).filter((tipo, index, pokemons) => {
        return pokemons.indexOf(tipo) === index
        //indexOf retorna apenas a primeira ocorrência 
    })
    console.log(tiposPokemons)


