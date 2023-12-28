import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import { MdOutlineEdit } from "react-icons/md";
import { ListViewFormData } from "../entities/FormData";
import { useFormSubmit } from "../hooks/forms";
import { listViewFormSchema } from "../validationSchema";
import { FormContainer, FormInput, FormSubmit } from "./forms";

interface Props {
  header: string;
  label: string;
  submitLabel: string;
  onSuccessMessage: string;
  icon: "create" | "edit";
  isPending: boolean;
  defaultValue?: string;
  mutateAsync: (data: ListViewFormData) => Promise<ListViewFormData>;
}

const ListViewModal = ({
  header,
  label,
  submitLabel,
  onSuccessMessage,
  icon,
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
      {icon === "create" && (
        <Button
          variant="outline"
          mt={3}
          color="white"
          onClick={onOpen}
          w="100%"
        >
          <FaPlus />
        </Button>
      )}
      {icon === "edit" && (
        <Button size="xs" variant="outline" color="white" onClick={onOpen}>
          <MdOutlineEdit />
        </Button>
      )}

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

export default ListViewModal;
