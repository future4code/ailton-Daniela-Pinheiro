import { Router } from "express"
import { UserBusiness } from "../business/UserBusiness"
import { UserController } from "../controller/UserController"
import { UserDatabase } from "../data/UserDatabase"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export const userRouter: Router = Router()

const userController = new UserController(
    new UserBusiness(
        new UserDatabase,
        new IdGenerator,
        new HashManager,
        new Authenticator
    )
)

userRouter.post("/signup", userController.signUp)
userRouter.post("/login", userController.login)