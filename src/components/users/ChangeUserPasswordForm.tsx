import { ChangeUserPasswordFormData } from "../../entities/formDatas";
import { useFormSubmit } from "../../hooks/forms";
import useChangeUserPassword from "../../hooks/users/useChangeUserPassword";
import { changeUserPasswordSchema } from "../../validationSchema";
import { FormContainer, FormInput, FormSubmit } from "../forms";

const ChangeUserPasswordForm = () => {
  const { mutateAsync, isPending } = useChangeUserPassword();
  const { register, handleSubmit, onSubmit, errors } = useFormSubmit<
    ChangeUserPasswordFormData,
    ChangeUserPasswordFormData
  >({
    onSuccessMessage: "Password was successfuly updated",
    mutateAsync,
    schema: changeUserPasswordSchema,
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
