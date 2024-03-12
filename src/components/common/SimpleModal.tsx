import { useDisclosure } from "@chakra-ui/react";
import { useEffect } from "react";
import { FieldValues, Path } from "react-hook-form";
import { ZodSchema } from "zod";
import { useFormSubmit } from "../../hooks/forms";
import ModalContainer from "./ModalContainer";
import { FormContainer, FormInput, FormSubmit } from "../config/forms";

interface Props<T, K, V = K> {
  header: string;
  label: string;
  submitLabel: string;
  onSuccessMessage: string;
  renderTriggerButton: (onOpen: () => void) => JSX.Element;
  isPending: boolean;
  defaultValue?: string;
  mutateAsync: (data: K) => Promise<V>;
  onSuccess?: (result: V) => void;
  schema: ZodSchema<T>;
  name?: keyof T;
  type?: "text" | "number" | "password";
}

const SimpleModal = <T extends FieldValues, K = T, V = K>({
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
  type = "text",
}: Props<T, K, V>) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { reset, register, handleSubmit, onSubmit, errors } = useFormSubmit<
    T,
    K,
    V
  >({
    onSuccessMessage,
    mutateAsync,
    schema,
    onSuccess: (data) => {
      onClose();
      if (onSuccess) onSuccess(data);
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
            type={type}
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
