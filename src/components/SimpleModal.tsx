import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { ListViewFormData } from "../entities/FormData";
import { useFormSubmit } from "../hooks/forms";
import { listViewFormSchema } from "../validationSchema";
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

  const { register, handleSubmit, onSubmit, errors } = useFormSubmit<
    ListViewFormData,
    ListViewFormData
  >({
    onSuccessMessage,
    mutateAsync,
    onDataMutate: (data) => data,
    schema: listViewFormSchema,
    onSuccess: () => onClose(),
  });
  return (
    <>
      {renderTriggerButton(onOpen)}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{header}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
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
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SimpleModal;
