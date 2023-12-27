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
import { useQueryClient } from "@tanstack/react-query";
import { FaPlus } from "react-icons/fa";
import { toast } from "react-toastify";
import { PartFormData } from "../../entities/FormData";
import { useForm } from "../../hooks/forms";
import { useAddPart } from "../../hooks/parts";
import { HttpError } from "../../services/api-client";
import { partSchema } from "../../validationSchema";
import { FormContainer, FormInput, FormSubmit } from "../forms";

const PartsCreateButton = ({ equipmentId }: { equipmentId: number }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { mutateAsync, isPending } = useAddPart();
  const queryClient = useQueryClient();

  const { register, errors, handleSubmit, onSubmit } = useForm<PartFormData>(
    async (data) => {
      try {
        await mutateAsync({ name: data.name, equipmentId });
        onClose();
        toast.success("The new equipment part was successfully added");
        queryClient.invalidateQueries();
      } catch (error) {
        const { response } = error as HttpError;
        toast.error(response?.data.message);
      }
    },
    partSchema
  );

  return (
    <>
      <Button variant="outline" mt={3} color="white" onClick={onOpen} w="100%">
        <FaPlus />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Equipments Part</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormContainer handleSubmit={handleSubmit} onSubmit={onSubmit}>
              <FormInput
                name="name"
                label="Part Name"
                error={errors.name?.message!}
                placeholder="Name"
                register={register}
              />

              <FormSubmit label="Create" isDisabled={isPending} />
            </FormContainer>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PartsCreateButton;
