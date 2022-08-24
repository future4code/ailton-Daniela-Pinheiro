### Exercício 1
**a)** Quando usamos o `raw`, o que recebemos de resposta vai além das tabelas criadas no banco de dados, e inclui informações do próprio banco, dentro de um grande *array*. Por isso, retorno da função *getActorById* encontra-se dentro de um *array* que está contido nesse grande *array* de dados diversos.

**b)**
```
const getActorByName = async (name: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT * FROM Actor WHERE name = '${name}'
    `)
    return result[0][0]
}
```

**c)**
```
const countActorsByGender = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT COUNT(*) as count FROM Actor WHERE gender = '${gender}'
    `)
    return result[0][0].count
}
```

### Exercício 2
**a)**
```
const changeSalary = async (id: string, salary: number): Promise<any> => {
    await connection('Actor')
        .where({ id: id })
        .update({ salary: salary })
}
```

**b)**
```
const deleteActor = async (id: string): Promise<any> => {
    await connection('Actor')
        .where({ id: id })
        .del()
}
```

**c)**
```
const averageSalary = async (gender: string): Promise<any> => {
    const result = await connection('Actor')
        .where({ gender: gender })
        .avg('salary as average')
    return result[0].average
}
```

### Exercício 3
**a)**
```
app.get("/actor/:id", async (req, res) => {
    try {
      const id = req.params.id
      const actor = await getActorById(id)
  
      res.status(200).send(actor)
    } catch (err: any) {
      res.status(400).send({ message: err.message, })
    }
})
```

**b)**
```
app.get("/actor", async (req, res) => {
    try {
        const gender: string = req.query.gender as string
        const actors = await countActorsByGender(gender)

        res.status(200).send({ quantity: actors })
    } catch (err: any) {
        res.status(400).send({ message: err.message })    
    }
})
```

### Exercício 4
**a)**
```

```

**b)**
```

```