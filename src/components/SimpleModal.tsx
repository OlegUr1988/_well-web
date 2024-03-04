import { useDisclosure } from "@chakra-ui/react";
import { useEffect } from "react";
import { FieldValues, Path } from "react-hook-form";
import { ZodSchema } from "zod";
import { useFormSubmit } from "../hooks/forms";
import ModalContainer from "./ModalContainer";
import { FormContainer, FormInput, FormSubmit } from "./forms";

interface Props<T> {
  header: string;
  label: string;
  submitLabel: string;
  onSuccessMessage: string;
  renderTriggerButton: (onOpen: () => void) => JSX.Element;
  isPending: boolean;
  defaultValue?: string;
  mutateAsync: (data: T) => Promise<T>;
  onSuccess?: () => void;
  schema: ZodSchema<T>;
  name?: keyof T;
}

const SimpleModal = <T extends FieldValues>({
  header,
  label,
  submitLabel,
  onSuccessMessage,
  renderTriggerButton,
  isPending,
  defaultValue = "",
  mutateAsync,
  onSuccess,
  schema,
  name = "name",
}: Props<T>) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { reset, register, handleSubmit, onSubmit, errors } = useFormSubmit<T>({
    onSuccessMessage,
    mutateAsync,
    schema,
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
            name={name as Path<T>}
            label={label}
            error={errors[name]?.message as string}
            placeholder={name as string}
            defaultValue={defaultValue}
            register={register}
          />

          <FormSubmit label={submitLabel} isDisabled={isPending} />
        </FormContainer>
      </ModalContainer>
    </>
  );
};

export default SimpleModal;
