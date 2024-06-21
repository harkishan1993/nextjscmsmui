'use client'
import React, { FormEvent, useState } from "react";
import * as Yup from "yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, Stack, Alert, IconButton, InputAdornment, Button } from "@mui/material";
import FormProvider from "../hook-form/FormProvider";
import RHFTextField from "../hook-form/RHFTextField";
import Iconify from "../Iconify";
import RHFSelectBox from "../hook-form/RHFSelectBox";

// Assuming you're using react-router

// ----------------------------------------------------------------------

export interface LoginFormData {
  email: string;
  password: string;
  se: string;
  afterSubmit?: object; // Adding the custom error field
}

const defaultValues: LoginFormData = {
  email: "demo@tawk.com",
  password: "demo1234",
  se: ""
};

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Email must be a valid email address"),
  password: Yup.string().required("Password is required"),
  se: Yup.string().required("Se is required"),
});

const AuthLoginForm: React.FC = () => {

  const [showPassword, setShowPassword] = useState(false);
  // const isLoading = useSelector((state: RootState) => state.auth.isLoading);

  const methods = useForm<LoginFormData>({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    try {
      console.log(data);

    } catch (error: any) {
      console.error(error);
      reset();
      setError("afterSubmit", {
        type: "manual",
        message: error.message,
      });
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        {!!errors.afterSubmit && (
          <Alert severity="error">{errors.afterSubmit.message}</Alert>
        )}

        <RHFTextField name="email" label="Email address" />

        <RHFTextField
          name="password"
          label="Password"
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? <Iconify icon={"uil:eye"} /> : <Iconify icon={"uil:eye-slash"} />}
                </IconButton>
              </InputAdornment>
            ),
          }}

        />
        <RHFSelectBox name="se" label="Select Number" />
      </Stack>

      <Stack alignItems="flex-end" sx={{ my: 2 }}>
        Forgot password?
      </Stack>
      <Button
        fullWidth
        color="inherit"
        size="large"
        type="submit"
        variant="contained"
        // loading={isLoading}
        sx={{
          bgcolor: "text.primary",
          color: (theme) =>
            theme.palette.mode === "light" ? "common.white" : "grey.800",
          "&:hover": {
            bgcolor: "text.primary",
            color: (theme) =>
              theme.palette.mode === "light" ? "common.white" : "grey.800",
          },
        }}
      >
        Login
      </Button>
    </FormProvider>
  );
};

export default AuthLoginForm;
