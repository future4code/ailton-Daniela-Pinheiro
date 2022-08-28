export const generateId = (string: string) => {
    const id: string = string.split("").map(character => {
        return character.charCodeAt(0)
    }).join("")

    return id
}