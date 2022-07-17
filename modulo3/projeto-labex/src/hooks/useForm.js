import { useState } from "react"

export const useForm = (initialState) => {
    // Estados
    const [form, setForm] = useState(initialState)
    // Função onChange para todos os inputs
    const onChangeForm = (event) => {
        const { name, value } = event.target
        setForm({...form, [name]: value})
    }
    // Função limpar inputs
    const cleanInputs = () => {
        setForm(initialState)
    }

    return [form, onChangeForm, cleanInputs]
}