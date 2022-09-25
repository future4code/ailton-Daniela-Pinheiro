import { Router } from "express"
import { PostBusiness } from "../business/PostBusiness"
import { PostController } from "../controller/PostController"
import { PostDatabase } from "../data/PostDatabase"
import { Authenticator } from "../services/Authenticator"
import { IdGenerator } from "../services/IdGenerator"

export const postRouter: Router = Router()

const postController = new PostController(
    new PostBusiness(
        new PostDatabase,
        new IdGenerator,
        new Authenticator
    )
)

postRouter.post("/create", postController.createPost)
postRouter.get("/", postController.getPosts)
postRouter.delete("/:id", postController.deletePost)