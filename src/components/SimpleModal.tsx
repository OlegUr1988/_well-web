import { useDisclosure } from "@chakra-ui/react";
import { useEffect } from "react";
import { ListViewFormData } from "../entities/formDatas";
import { useFormSubmit } from "../hooks/forms";
import { listViewFormSchema } from "../validationSchema";
import ModalContainer from "./ModalContainer";
import { FormContainer, FormInput, FormSubmit } from "./forms";

interface Props {
  header: string;
  label: string;
  submitLabel: string;
  onSuccessMessage: string;
  renderTriggerButton: (onOpen: () => void) => JSX.Element;
  isPending: boolean;
  defaultValue?: string;
  mutateAsync: (data: ListViewFormData) => Promise<ListViewFormData>;
}

const SimpleModal = ({
  header,
  label,
  submitLabel,
  onSuccessMessage,
  renderTriggerButton,
  isPending,
  defaultValue = "",
  mutateAsync,
}: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { reset, register, handleSubmit, onSubmit, errors } = useFormSubmit<
    ListViewFormData,
    ListViewFormData
  >({
    onSuccessMessage,
    mutateAsync,
    onDataMutate: (data) => data,
    schema: listViewFormSchema,
    onSuccess: () => onClose(),
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
            name="name"
            label={label}
            error={errors.name?.message!}
            placeholder="Name"
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
