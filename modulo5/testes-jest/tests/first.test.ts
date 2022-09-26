import {describe, expect, test} from '@jest/globals'
import { isEven } from './functions'

describe("Teste da função que retorna se um número é par ou ímpar", () => {
    test("Testando se 112 é par", () => {
        expect(isEven(112)).toBe(true)
    })
})

