import { jwtDecode } from "jwt-decode";
import { LoginFormData } from "../../entities/formDatas";
import { User } from "../../entities/users";
import { useLogin } from "../../hooks/auth";
import { useFormSubmit } from "../../hooks/forms";
import { JWT } from "../../services/api-client";
import useUserStore from "../../store/user";
import { getToken, setToken } from "../../utils/auth";
import { loginSchema } from "../../validationSchema";
import { FormContainer, FormInput, FormSubmit } from "../common/forms";

const LoginForm = () => {
  const { mutateAsync, isPending } = useLogin();
  const setUser = useUserStore((s) => s.setUser);

  const handleOnsuccess = (data: JWT) => {
    setToken(data);
    const token = getToken();
    const user = jwtDecode(token!);
    setUser(user as User);
  };

  const { register, handleSubmit, onSubmit, errors } = useFormSubmit<
    LoginFormData,
    LoginFormData,
    JWT
  >({
    onSuccessMessage: "Successfull login",
    mutateAsync: (data) => mutateAsync(data),
    schema: loginSchema,
    onSuccess: handleOnsuccess,
    redirectPath: "/",
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
