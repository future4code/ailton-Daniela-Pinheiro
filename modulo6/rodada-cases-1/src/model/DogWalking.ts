import { Pet } from "./Pet"

// status, data de agendamento, preço, duração (30 ou 60 min), latitude, longitude, pets, horário de início e término
export enum STATUS {
    NOT_STARTED = "not_started",
    STARTED = "started",
    FINISHED = "finished"
}

export class DogWalking {
    constructor(
        private id: string,
        private status: STATUS,
        private date: Date,
        private price: number,
        private duration: number,
        private latitude: number,
        private longitude: number,
        private pets: Pet[],
        private startTime: number,
        private finishTime: number
        ) {}
        
        public setPrice = () => {
            switch(this.duration) {
                case 30:
                    if(this.pets.length > 1) {
                        const firstPet: number = 1
                        const additionalPet: number = this.pets.length - firstPet

                        const price: number = firstPet*25 + additionalPet*15

                        this.price = price
                    } else {
                        const price: number = 25

                        this.price = price
                    }
                case 60:
                    if(this.pets.length > 1) {
                        const firstPet: number = 1
                        const additionalPet: number = this.pets.length - firstPet

                        const price: number = firstPet*35 + additionalPet*20

                        this.price = price
                    } else {
                        const price: number = 35

                        this.price = price
                    }
            }
        }
    }