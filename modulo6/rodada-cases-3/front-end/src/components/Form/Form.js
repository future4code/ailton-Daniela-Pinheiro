import axios from "axios"
import React from "react"
import { BASE_URL } from "../../constants/url"
import { useForms } from "../../hooks/useForms"
import { Button, FormContainer, Input } from "./Form-styled"

export default function Form() {
    const [ form, onChange, clear ] = useForms({
        name: "",
        surname: "",
        participation: ""
    })

    const sendForm = () => {
        axios.post(BASE_URL,
            form
        ).then(response => {
            alert(response.data.message)
        }).catch(error => {
            alert(error.response.data.message)
        })
    }

    const onSubmitForm = (event) => {
        event.preventDefault()

        sendForm()

        clear()
    }

    return <FormContainer onSubmit={onSubmitForm}>
        <Input
            name={"name"}
            value={form.name}
            onChange={onChange}
            placeholder={"First name"}
            type={"text"}
            required
        />
        <Input
            name={"surname"}
            value={form.surname}
            onChange={onChange}
            placeholder={"Last name"}
            type={"text"}
            required
        />
        <Input
            name={"participation"}
            value={form.participation}
            onChange={onChange}
            placeholder={"Participation"}
            type={"number"}
            required
        />

        <Button
            type={"submit"}
        >
            SEND
        </Button>
    </FormContainer>
}