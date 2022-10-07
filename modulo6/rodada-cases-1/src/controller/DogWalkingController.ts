import { Request, Response } from "express"
import { DogWalkingBusiness } from "../business/DogWalkingBusiness"
import { BaseError } from "../errors/BaseError"
import { IDogWalkingInput } from "../model/DogWalking"

export class DogWalkingController {
    constructor(
        public dogWalkingBusiness: DogWalkingBusiness
    ) {}

    public index = async(req: Request, res: Response) => {
        try {
            // filtragem e paginação
            // Apenas os próximos passeios a partir de hoje ou todos
            
            const walks = await this.dogWalkingBusiness.index()
            
            res.status(200).send({ walks })
        } catch (error) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro inesperado" })
        }
    }

    public create = async(req: Request, res: Response) => {
        try {
            const input: IDogWalkingInput = {
                date: req.body.date,
                latitude: req.body.latitude,
                longitude: req.body.longitude,
                startTime: req.body.startTime,
                finishTime: req.body.finishTime,
                pets: req.body.pets
            }

            const message = await this.dogWalkingBusiness.createWalk(input)
            
            res.status(201).send({ message })
        } catch (error) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro inesperado ao criar passeio" })
        }
    }

    public startWalk = async(req: Request, res: Response) => {
        try {
            const id: string = req.params.id

            const message = await this.dogWalkingBusiness.startWalk(id)
            
            res.status(200).send({ message })
        } catch (error) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro inesperado ao iniciar passeio" })
        }
    }

    public finishWalk = async(req: Request, res: Response) => {
        try {
            const id: string = req.params.id

            const message = await this.dogWalkingBusiness.finishWalk(id)
            
            res.status(200).send({ message })
        } catch (error) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro inesperado ao encerrar passeio" })
        }
    }
}