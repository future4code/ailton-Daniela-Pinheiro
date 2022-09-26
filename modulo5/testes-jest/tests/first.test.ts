import {describe, expect, test} from '@jest/globals'
import { isEven, returnArrayOfLetters, toUpperCase } from './functions'

describe("Testes dos exercícios 0 a 9", () => {
    test("0: Testando a função que verifica se um número é par.", () => {
        expect(isEven(112)).toBe(true)
    }),
    test("1: Testando a função que retorna string em caixa alta.", () => {
        expect(toUpperCase("bananinha")).toBe("BANANINHA")
    }),
    test("2: Testando a função que transforma uma string num array com suas letras.", () => {
        expect(returnArrayOfLetters("abc")).toEqual(["a", "b", "c"])
    })
    // test("", () => {}),
    // test("", () => {}),
    // test("", () => {}),
    // test("", () => {}),
    // test("", () => {}),
    // test("", () => {}),
})

