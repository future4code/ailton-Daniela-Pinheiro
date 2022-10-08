import {
    DogWalking,
    IChangeStatusInput,
    IDogWalkingDB,
    IPetWalkRelationInput,
    STATUS
} from "../../src/model/DogWalking"
import { IPetDB } from "../../src/model/Pet"
import { BaseDatabase } from "../../src/database/BaseDatabase"

export class DogWalkingDatabaseMock extends BaseDatabase {
    public static TABLE_DOG_WALKING = 'Dog_Walking'
    public static TABLE_PETS = 'Pets'
    public static TABLE_WALKS = 'Walks'
    
    public getAllWalks = async(filter?: string): Promise<IDogWalkingDB[]> => {
        if(filter && filter === "date") {
            const result: IDogWalkingDB[] = [
                {
                    id: "02",
                    status: STATUS.STARTED,
                    date: new Date("10/20/2022"),
                    price: 35,
                    duration: 60,
                    latitude: 84,
                    longitude: 40,
                    startTime: "17:30",
                    finishTime: "18:30"
                },
                {
                    id: "03",
                    status: STATUS.NOT_STARTED,
                    date: new Date("10/31/2022"),
                    price: 55,
                    duration: 30,
                    latitude: 20,
                    longitude: -100,
                    startTime: "09:30",
                    finishTime: "10:00"
                }
            ]
            
            return result
        } else {
            const result: IDogWalkingDB[] = [
                {
                    id: "01",
                    status: STATUS.FINISHED,
                    date: new Date("10/04/2022"),
                    price: 25,
                    duration: 30,
                    latitude: 20,
                    longitude: -100,
                    startTime: "12:30",
                    finishTime: "13:00"
                },
                {
                    id: "02",
                    status: STATUS.STARTED,
                    date: new Date("10/20/2022"),
                    price: 35,
                    duration: 60,
                    latitude: 84,
                    longitude: 40,
                    startTime: "17:30",
                    finishTime: "18:30"
                },
                {
                    id: "03",
                    status: STATUS.NOT_STARTED,
                    date: new Date("10/31/2022"),
                    price: 55,
                    duration: 30,
                    latitude: 20,
                    longitude: -100,
                    startTime: "09:30",
                    finishTime: "10:00"
                }
            ]
            
            return result
        }
    }
    
    public getPetsForWalk = async(walkId: string): Promise<IPetDB[]> => {
        switch (walkId) {
            case "01":
                const pets1: IPetDB[] = [
                    {
                        id: "02",
                        name: "Dog Mock 2",
                        breed: "Breed Mock",
                        age: 2
                    }
                ]
                return pets1
            case "02":
                const pets2: IPetDB[] = [
                    {
                        id: "01",
                        name: "Dog Mock 1",
                        breed: "Breed Mock",
                        age: 1
                    }
                ]
                return pets2
            case "03":
                const pets3: IPetDB[] = [
                    {
                        id: "02",
                        name: "Dog Mock 2",
                        breed: "Breed Mock",
                        age: 2
                    },
                    {
                        id: "03",
                        name: "Dog Mock 3",
                        breed: "Breed Mock",
                        age: 1
                    }
                ]
                return pets3
            default:
                return []
        }
    }
    
    public getWalkById = async(id: string): Promise<IDogWalkingDB | undefined> => {
        switch (id) {
            case "01":
                const walk1: IDogWalkingDB = {
                    id: "01",
                    status: STATUS.FINISHED,
                    date: new Date("10/04/2022"),
                    price: 25,
                    duration: 30,
                    latitude: 20,
                    longitude: -100,
                    startTime: "12:30",
                    finishTime: "13:00"
                }
        
                return walk1
            case "02":
                const walk2: IDogWalkingDB = {
                    id: "02",
                    status: STATUS.STARTED,
                    date: new Date("10/20/2022"),
                    price: 35,
                    duration: 60,
                    latitude: 84,
                    longitude: 40,
                    startTime: "17:30",
                    finishTime: "18:30"
                }

                return walk2
            case "03":
                const walk3: IDogWalkingDB = {
                    id: "03",
                    status: STATUS.NOT_STARTED,
                    date: new Date("10/31/2022"),
                    price: 55,
                    duration: 30,
                    latitude: 20,
                    longitude: -100,
                    startTime: "09:30",
                    finishTime: "10:00"
                }

                return walk3
            default:
                return undefined
        }
    }

    public getPetById = async(id: string): Promise<IPetDB | undefined> => {
        switch (id) {
            case "01":
                const pet1: IPetDB = {
                    id: "01",
                    name: "Dog Mock 1",
                    breed: "Breed Mock",
                    age: 1
                }
                
                return pet1
            case "02":
                const pet2 = {
                    id: "02",
                    name: "Dog Mock 2",
                    breed: "Breed Mock",
                    age: 2
                }

                return pet2
            default:
                return undefined
        }
    }
    
    public getDuration = async(startTime: string, finishTime: string): Promise<number | undefined> => {
        if(startTime === "12:00" && finishTime === "13:00") {
            return 60
        } else {
            return undefined
        }
    }

    public createWalk = async(input: DogWalking) => {}

    public createPetWalkRelation = async(input: IPetWalkRelationInput) => {}

    public changeStatus = async(input: IChangeStatusInput) => {}
}