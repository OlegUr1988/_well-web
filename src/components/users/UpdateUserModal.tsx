import { useDisclosure } from "@chakra-ui/react";
import { useEffect } from "react";
import { UpdateUserFormData } from "../../entities/formDatas";
import { UpdateUser } from "../../entities/users";
import { useFormSubmit } from "../../hooks/forms";
import { updateUserSchema } from "../../validationSchema";
import ModalContainer from "../ModalContainer";
import { FormChekbox, FormContainer, FormInput, FormSubmit } from "../forms";

interface Props {
  header: string;
  submitLabel: string;
  onSuccessMessage: string;
  renderTriggerButton: (onOpen: () => void) => JSX.Element;
  isPending: boolean;
  defaultUser?: UpdateUser;
  mutateAsync: (data: UpdateUser) => Promise<UpdateUser>;
  onSuccess?: () => void;
}

const UpdateUserModal = ({
  header,
  submitLabel,
  onSuccessMessage,
  renderTriggerButton,
  isPending,
  defaultUser,
  mutateAsync,
  onSuccess,
}: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { reset, register, handleSubmit, onSubmit, errors } =
    useFormSubmit<UpdateUserFormData>({
      onSuccessMessage,
      mutateAsync,
      schema: updateUserSchema,
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
            defaultValue={defaultUser?.username}
            register={register}
          />

          <FormChekbox
            name="isAdmin"
            label="Select users role"
            value="isAdmin"
            defaultChecked={defaultUser?.isAdmin}
            error={errors.isAdmin?.message!}
            register={register}
          />

          <FormSubmit label={submitLabel} isDisabled={isPending} />
        </FormContainer>
      </ModalContainer>
    </>
  );
};

export default UpdateUserModal;
