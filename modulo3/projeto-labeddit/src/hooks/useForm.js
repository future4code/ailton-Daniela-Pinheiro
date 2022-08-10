import { useState } from "react"

export const useForm = (initialState) => {
    const [form, setForm] = useState(initialState)

    const onChangeInput = (event) => {
        const {value, name} = event.target
        setForm({...form, [name]: value})
    }

    const cleanInput = () => {
        setForm(initialState)
    }

    return [form, onChangeInput, cleanInput]
}