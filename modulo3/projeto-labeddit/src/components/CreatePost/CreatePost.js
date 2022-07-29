import React from "react"
import { TextField } from "@mui/material"
import { useForm } from "../../hooks/useForm"
import { LargeButton } from "../../constants/buttons"
import { neutralColor, primaryColor } from "../../constants/colors"
import { Form } from "../../constants/Form"

export default function CreatePost() {
  const [form, onChangeInput, cleanInput] = useForm({title: "", body: ""})

  const onSubmitForm = (event) => {
    event.preventDefault()
    // post(form, cleanInput, navigate)
}

  return <Form onSubmit={onSubmitForm}>
      <TextField
        id="outlined-textarea"
        placeholder="Título"
        name="title"
        multiline
        fullWidth
        sx={{
          backgroundColor: primaryColor,
          color: neutralColor,
        }}
      />
      <TextField
        id="outlined-textarea"
        placeholder="Escreva seu post..."
        name="body"
        multiline
        rows={5}
        fullWidth
        sx={{
          backgroundColor: primaryColor,
          color: neutralColor,
        }}
      />
      <LargeButton>Postar</LargeButton>
  </Form>
}