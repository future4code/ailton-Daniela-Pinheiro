import React, { useState } from "react"
import { CircularProgress, TextField } from "@mui/material"
import { useForm } from "../../hooks/useForm"
import { LargePostButton } from "../../constants/buttons"
import { neutralColor, primaryColor } from "../../constants/colors"
import { post } from "../../services/posts"
import { FormCreatePost } from "./styled"

export default function CreatePost() {
  const [form, onChangeInput, cleanInput] = useForm({title: "", body: ""})

  const [isLoading, setIsLoading] = useState(false)

  const onSubmitForm = (event) => {
    event.preventDefault()
    post(form, cleanInput, setIsLoading)
}

  return <FormCreatePost onSubmit={onSubmitForm}>
      <TextField
        id="outlined-textarea"
        placeholder="Título"
        name="title"
        value={form.title}
        multiline
        fullWidth
        onChange={onChangeInput}
        sx={{
          backgroundColor: primaryColor,
          color: neutralColor,
        }}
        required
      />
      <TextField
        id="outlined-textarea"
        placeholder="Escreva seu post..."
        name="body"
        value={form.body}
        multiline
        rows={5}
        fullWidth
        onChange={onChangeInput}
        sx={{
          backgroundColor: primaryColor,
          color: neutralColor,
        }}
        required
      />
      <LargePostButton type="submit">
        {isLoading ? <CircularProgress color={'inherit'} size={24} /> : <>Postar</>}
      </LargePostButton>
  </FormCreatePost>
}