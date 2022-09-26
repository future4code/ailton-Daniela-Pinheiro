export const isEven = (n: number): boolean => {
    if(n%2 === 0) {
        return true
    } else {
        return false
    }
}

export const toUpperCase = (text: string): string => {
    return text.toUpperCase()
}

export const returnArrayOfLetters = (text: string): string[] => {
    return text.split("")
}

export const toNumber = (number: string): number => {
    return Number(number)
}

export const returnStringLength = (text: string): number => {
    return text.length
}

export const returnRandomNumber = (): number => {
    return Math.floor(Math.random() * 10) + 1
}