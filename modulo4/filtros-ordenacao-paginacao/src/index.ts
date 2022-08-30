import { app } from './data/app'
import { AddressInfo } from 'net'
import { getAllUsersA, getAllUsersB } from './endpoints/getAllUsers'

// Endpoints
// Exercício 1
// a.
app.get("/user", getAllUsersA)

// b.
app.get("/user/:type", getAllUsersB)

// Exercício 2


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo
       console.log(`Server is running in http://localhost:${address.port}`)
    } else {
       console.error(`Failure upon starting server.`)
    }
})