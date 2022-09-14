import { BASE_URL } from './data/BASE_URL'
import axios from 'axios'

// Exercício 5
type User = {
    id: string;
    name: string;
    email: string;
}

async function enviarNotificacao(subscribers: User[], message: string): Promise<void> {
    try {
        for(const user of subscribers) {
            await axios.post(`${BASE_URL}/notifications`, {
                subscriberId: user.id,
                message: message
            })
        }
        console.log("Notificações enviadas!")
    } catch (error) {
        console.log("Erro ao enviar as notificações.")
    }
}