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