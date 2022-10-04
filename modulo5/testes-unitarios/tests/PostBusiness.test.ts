import {describe, expect, test} from '@jest/globals'
import { PostBusiness } from "../src/business/PostBusiness"
import { PostDatabaseMock } from "./mocks/PostDatabaseMock"
import { AuthenticatorMock } from './mocks/AuthenticatorMock'
import { IdGeneratorMock } from "./mocks/IdGeneratorMock"
import { ICreatePostInputDTO, IGetPostsInputDTO, Post } from '../src/models/Post'

describe("Testando a PostBusiness", () => {
    const postBusiness = new PostBusiness(
        new PostDatabaseMock(),
        new IdGeneratorMock(),
        new AuthenticatorMock()
    )

    test("Testando a criação de post: recebe uma mensagem quando o post é criado", async () => {
        const input: ICreatePostInputDTO = {
            token: "token-mock-normal",
            content: "AAA"
        }

        const response = await postBusiness.createPost(input)

        expect(response.message).toBe("Post criado com sucesso")
    })

    test("Testando get posts: recebe um array de posts", async () => {
        const input: IGetPostsInputDTO = {
            token: "token-mock-normal"
        }

        const response = await postBusiness.getPosts(input)
        
        expect(response.posts[0]).toBeInstanceOf(Post)
    })
})