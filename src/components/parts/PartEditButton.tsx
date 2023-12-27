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
import { MdOutlineEdit } from "react-icons/md";
import { toast } from "react-toastify";
import { PartFormData } from "../../entities/FormData";
import { Part } from "../../entities/parts";
import { useForm } from "../../hooks/forms";
import { useUpdatePart } from "../../hooks/parts";
import { HttpError } from "../../services/api-client";
import { partSchema } from "../../validationSchema";
import { FormContainer, FormInput, FormSubmit } from "../forms";

const PartEditButton = ({ part }: { part: Part }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { mutateAsync, isPending } = useUpdatePart(part.id);
  const queryClient = useQueryClient();

  const { register, errors, handleSubmit, onSubmit } = useForm<PartFormData>(
    async (data) => {
      try {
        await mutateAsync({ name: data.name, equipmentId: part.equipmentId });
        onClose();
        toast.success("The new equipment part was successfully modified");
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
      <Button size="xs" variant="outline" color="white" onClick={onOpen}>
        <MdOutlineEdit />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Equipments Part</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormContainer handleSubmit={handleSubmit} onSubmit={onSubmit}>
              <FormInput
                name="name"
                label="Part Name"
                error={errors.name?.message!}
                placeholder="Name"
                defaultValue={part.name}
                register={register}
              />

              <FormSubmit label="Save" isDisabled={isPending} />
            </FormContainer>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PartEditButton;
