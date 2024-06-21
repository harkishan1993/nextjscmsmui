import { FormControl, Stack, TextField } from '@mui/material'
import React from 'react'
import AuthLoginForm from '../_components/page/LoginForm'

function page() {
  return (
    <Stack sx={{ width: "100%", height: "100vh" }} justifyContent={"center"} alignItems={"center"}>
      <Stack>
      <AuthLoginForm />
      </Stack>
    </Stack>
  )
}

export default page