import { Pet } from "./Pet"

export enum STATUS {
    NOT_STARTED = "not_started",
    STARTED = "started",
    FINISHED = "finished"
}

export class DogWalking {
    constructor(
        private id: string,
        private status: STATUS = STATUS.NOT_STARTED,
        private date: Date,
        private price: number,
        private duration: number,
        private latitude: number,
        private longitude: number,
        private pets: Pet[],
        private startTime: string,
        private finishTime: string
    ) { }

    public getId = (): string => {
        return this.id
    }

    public getStatus = (): STATUS => {
        return this.status
    }

    public getDate = (): Date => {
        return this.date
    }

    public getPrice = (): number => {
        return this.price
    }

    public getDuration = (): number => {
        return this.duration
    }

    public getLatitude = (): number => {
        return this.latitude
    }

    public getLongitude = (): number => {
        return this.longitude
    }

    public getPets = (): Pet[] => {
        return this.pets
    }

    public getStartTime = (): string => {
        return this.startTime
    }

    public getFinishTime = (): string => {
        return this.finishTime
    }
}

export interface IDogWalkingDB {
    id: string,
    status: STATUS | string,
    date: Date,
    price: number,
    duration: number,
    latitude: number,
    longitude: number,
    startTime: string,
    finishTime: string
}

export interface IDogWalkingInput {
    date: string,
    latitude: number,
    longitude: number,
    startTime: string,
    finishTime: string,
    pets: string[]
}

export interface IPetWalkRelationInput {
    id: string,
    petId: string,
    walkId: string
}