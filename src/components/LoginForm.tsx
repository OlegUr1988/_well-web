import { LoginFormData } from "../entities/formDatas";
import { useLogin } from "../hooks/auth/";
import { useFormSubmit } from "../hooks/forms";
import { JWT } from "../services/api-client";
import { setToken } from "../utils/auth";
import { loginSchema } from "../validationSchema";
import { FormContainer, FormInput, FormSubmit } from "./forms";

const LoginForm = () => {
  const { mutateAsync, isPending } = useLogin();
  const { register, handleSubmit, onSubmit, errors } = useFormSubmit<
    LoginFormData,
    LoginFormData,
    JWT
  >({
    onSuccessMessage: "Successfull login",
    mutateAsync: (data) => mutateAsync(data),
    schema: loginSchema,
    onSuccess: (data) => {
      setToken(data);
      window.location.href = "/";
    },
  });

  return (
    <FormContainer handleSubmit={handleSubmit} onSubmit={onSubmit}>
      <FormInput
        name="username"
        label="Username"
        error={errors.username?.message!}
        placeholder="Username"
        register={register}
      />
      <FormInput
        name="password"
        label="Password"
        type="password"
        error={errors.password?.message!}
        placeholder="Password"
        register={register}
      />
      <FormSubmit label="Login" isDisabled={isPending} />
    </FormContainer>
  );
};

export default LoginForm;
