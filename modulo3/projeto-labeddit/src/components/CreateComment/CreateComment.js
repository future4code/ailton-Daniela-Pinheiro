import React, { useState } from "react"
import { CircularProgress, TextField } from "@mui/material"
import { useForm } from "../../hooks/useForm"
import { LargePostButton } from "../../constants/buttons"
import { neutralColor, primaryColor } from "../../constants/colors"
import { comment } from "../../services/posts"
import { FormCreateComment } from "./styled"


export default function CreateComment(props) {
  const [form, onChangeInput, cleanInput] = useForm({body: ""})

  const [isLoading, setIsLoading] = useState(false)

  const onSubmitForm = (event) => {
    event.preventDefault()
    comment(props.id, form, cleanInput, setIsLoading)
}

  return <FormCreateComment onSubmit={onSubmitForm}>
      <TextField
        id="outlined-textarea"
        placeholder="Adicionar comentário"
        name="body"
        value={form.body}
        multiline
        rows={4}
        fullWidth
        onChange={onChangeInput}
        sx={{
          backgroundColor: primaryColor,
          color: neutralColor,
        }}
        required
      />
      <LargePostButton type="submit">
        {isLoading ? <CircularProgress color={'inherit'} size={24} /> : <>Responder</>}
      </LargePostButton>
  </FormCreateComment>
}