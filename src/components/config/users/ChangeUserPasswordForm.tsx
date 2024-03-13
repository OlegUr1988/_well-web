import { useNavigate } from "react-router-dom";
import { ChangeUserPasswordFormData } from "../../../entities/formDatas";
import { useFormSubmit } from "../../../hooks/forms";
import { useChangeUserPassword } from "../../../hooks/users";
import { clearToken } from "../../../utils/auth";
import { changeUserPasswordSchema } from "../../../validationSchema";
import { FormContainer, FormInput, FormSubmit } from "../../common/forms";

const ChangeUserPasswordForm = () => {
  const { mutateAsync, isPending } = useChangeUserPassword();
  const navigate = useNavigate();

  const handleOnSuccess = () => {
    clearToken();
    navigate("/login");
  };

  const { register, handleSubmit, onSubmit, errors } = useFormSubmit<
    ChangeUserPasswordFormData,
    ChangeUserPasswordFormData
  >({
    onSuccessMessage: "Password was successfuly updated",
    mutateAsync,
    schema: changeUserPasswordSchema,
    onSuccess: handleOnSuccess,
  });

  return (
    <FormContainer handleSubmit={handleSubmit} onSubmit={onSubmit}>
      <FormInput
        type="password"
        name="password"
        label="New Password"
        error={errors.password?.message!}
        placeholder="Password"
        register={register}
      />
      <FormSubmit label="Change" isDisabled={isPending} />
    </FormContainer>
  );
};

export default ChangeUserPasswordForm;
