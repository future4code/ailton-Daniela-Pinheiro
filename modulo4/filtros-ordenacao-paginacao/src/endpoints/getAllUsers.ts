import { Request, Response } from 'express'
import selectAllUsers, { selectAllUsersA, selectAllUsersB, selectAllUsersC, selectAllUsersD } from '../data/selectAllUsers'


export const getAllUsers = async(req: Request, res: Response): Promise<void> =>{
   try {
      let name: string = req.query.name as string
      let type: string = req.query.type as string
      let order: string = req.query.order as string
      let page: number = Number(req.query.page)

      // Verificações
      if(!name) {
         name = ""
      }
      if(!type) {
         type = ""
      }
      if(!order) {
         order = "name"
      }
      if(!page) {
         page = 1
      }
      if(type !== "" && type.toLowerCase() !== 'operations' && type.toLowerCase() !== 'teacher' && type.toLowerCase() !== 'cx') {
         res.statusCode = 422
         throw new Error("Nonexistent type.")
      }
      if(order !== "email" && order !== "type" && order !== "name") {
         res.statusCode = 422
         throw new Error("Invalid parameter for ordination.")
      }
      if(isNaN(page)) {
         res.statusCode = 422
         throw new Error("Invalid page number.")
      }

      const offset: number = 5 * (page - 1)
      
      const users = await selectAllUsers(name, type, order, offset)
      
      if(!users.length){
         res.statusCode = 404
         throw new Error("No users found.")
      }
 
      res.status(200).send(users)
   } catch (error: any) {
      console.log(error)
      res.status(res.statusCode || 500).send(error.message || error.sqlMessage)
   }
}

export const getAllUsersA = async(req: Request, res: Response): Promise<void> =>{
   try {
      let name: string = req.query.name as string

      if(!name) {
         name = ""
      }

      const users = await selectAllUsersA(name)
 
      if(!users.length){
         res.statusCode = 404
         throw new Error("No users found.")
      }
 
      res.status(200).send(users)
   } catch (error: any) {
      console.log(error)
      res.status(res.statusCode || 500).send(error.message || error.sqlMessage)
   }
}

export const getAllUsersB = async(req: Request, res: Response): Promise<void> =>{
   try {
      const type: string = req.params.type

      if(type.toLowerCase() !== 'operations' && type.toLowerCase() !== 'teacher' && type.toLowerCase() !== 'cx') {
         res.statusCode = 422
         throw new Error("Nonexistent type.")
      }

      const users = await selectAllUsersB(type)
 
      if(!users.length){
         res.statusCode = 404
         throw new Error("No users found.")
      }
 
      res.status(200).send(users)
   } catch (error: any) {
      console.log(error)
      res.status(res.statusCode || 500).send(error.message || error.sqlMessage)
   }
}

export const getAllUsersC = async(req: Request, res: Response): Promise<void> =>{
   try {
      let order: string = req.query.order as string

      if(!order) {
         order = "email"
      }
      if(order !== "email" && order !== "type" && order !== "name") {
         res.statusCode = 422
         throw new Error("Invalid parameter for ordination.")
      }

      const users = await selectAllUsersC(order)
 
      if(!users.length){
         res.statusCode = 404
         throw new Error("No users found.")
      }
 
      res.status(200).send(users)
   } catch (error: any) {
      console.log(error)
      res.status(res.statusCode || 500).send(error.message || error.sqlMessage)
   }
}

export const getAllUsersD = async(req: Request, res: Response): Promise<void> =>{
   try {
      let page: number = Number(req.query.page)

      if(!page) {
         page = 1
      }
      if(isNaN(page)) {
         res.statusCode = 422
         throw new Error("Invalid page number.")
      }

      const offset: number = 5 * (page - 1)

      const users = await selectAllUsersD(offset)
 
      if(!users.length){
         res.statusCode = 404
         throw new Error("No users found.")
      }
 
      res.status(200).send(users)
   } catch (error: any) {
      console.log(error)
      res.status(res.statusCode || 500).send(error.message || error.sqlMessage)
   }
}