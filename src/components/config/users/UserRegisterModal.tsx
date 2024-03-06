import { useDisclosure } from "@chakra-ui/react";
import { useEffect } from "react";
import { RegisterUserFormData } from "../../../entities/formDatas";
import { RegisterUser } from "../../../entities/users";
import { useFormSubmit } from "../../../hooks/forms";
import { registerUserSchema } from "../../../validationSchema";
import ModalContainer from "../ModalContainer";
import { FormChekbox, FormContainer, FormInput, FormSubmit } from "../forms";

interface Props {
  header: string;
  submitLabel: string;
  onSuccessMessage: string;
  renderTriggerButton: (onOpen: () => void) => JSX.Element;
  isPending: boolean;
  mutateAsync: (data: RegisterUser) => Promise<RegisterUser>;
  onSuccess?: () => void;
}

const UserRegisterModal = ({
  header,
  submitLabel,
  onSuccessMessage,
  renderTriggerButton,
  isPending,
  mutateAsync,
  onSuccess,
}: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { reset, register, handleSubmit, onSubmit, errors } =
    useFormSubmit<RegisterUserFormData>({
      onSuccessMessage,
      mutateAsync,
      schema: registerUserSchema,
      onSuccess: () => {
        onClose();
        if (onSuccess) onSuccess();
      },
    });

  useEffect(() => {
    if (isOpen) {
      reset();
    }
  }, [isOpen, reset]);

  return (
    <>
      {renderTriggerButton(onOpen)}

      <ModalContainer header={header} isOpen={isOpen} onClose={onClose}>
        <FormContainer handleSubmit={handleSubmit} onSubmit={onSubmit}>
          <FormInput
            name="username"
            label="Tagname"
            error={errors.username?.message!}
            placeholder="Username"
            register={register}
          />

          <FormChekbox
            name="isAdmin"
            label="Select users role"
            value="isAdmin"
            error={errors.isAdmin?.message!}
            register={register}
          />

          <FormInput
            name="password"
            type="password"
            label="Password"
            error={errors.password?.message!}
            placeholder="Password"
            register={register}
          />

          <FormSubmit label={submitLabel} isDisabled={isPending} />
        </FormContainer>
      </ModalContainer>
    </>
  );
};

export default UserRegisterModal;
