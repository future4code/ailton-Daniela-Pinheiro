import {describe, expect, test} from '@jest/globals'
import { isEven, returnArrayOfLetters, returnRandomNumber, returnStringLength, toNumber, toUpperCase } from './functions'

describe("Testes dos exercícios 0 a 9", () => {
    test("0: Testando a função que verifica se um número é par.", () => {
        expect(isEven(112)).toBe(true)
    }),
    test("1: Testando a função que retorna string em caixa alta.", () => {
        expect(toUpperCase("bananinha")).toBe("BANANINHA")
    }),
    test("2: Testando a função que transforma uma string num array com suas letras.", () => {
        expect(returnArrayOfLetters("abc")).toEqual(["a", "b", "c"])
    }),
    test("3: Testando a função que transforma um número em formato string em number.", () => {
        expect(toNumber("1")).toBe(1)
    }),
    test("4: Testando a função que retorna o número de caracteres de uma string.", () => {
        expect(returnStringLength("jest")).toBe(4)
    }),
    test("5: Testando a função que gera um número aleatório entre 1 e 10.", () => {
        expect(returnRandomNumber()).toBeGreaterThanOrEqual(1)
        expect(returnRandomNumber()).toBeLessThanOrEqual(10)
    })
    // test("6: Testando", () => {}),
    // test("7: Testando", () => {}),
    // test("8: Testando", () => {}),
})

