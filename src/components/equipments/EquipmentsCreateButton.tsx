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
import { EquipmentFormData } from "../../entities/FormData";
import { useAddEquipment } from "../../hooks/equipments";
import { useForm } from "../../hooks/forms";
import { HttpError } from "../../services/api-client";
import { equipmentSchema } from "../../validationSchema";
import { FormContainer, FormInput, FormSubmit } from "../forms";

const EquipmentsCreateButton = ({ assetId }: { assetId: number }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { mutateAsync, isPending } = useAddEquipment();
  const queryClient = useQueryClient();

  const { register, errors, handleSubmit, onSubmit } =
    useForm<EquipmentFormData>(async (data) => {
      try {
        await mutateAsync({ name: data.name, assetId });
        onClose();
        toast.success("The new equipment was successfully added");
        queryClient.invalidateQueries();
      } catch (error) {
        const { response } = error as HttpError;
        toast.error(response?.data.message);
      }
    }, equipmentSchema);

  return (
    <>
      <Button variant="outline" mt={3} color="white" onClick={onOpen} w="100%">
        <FaPlus />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Equipment</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormContainer handleSubmit={handleSubmit} onSubmit={onSubmit}>
              <FormInput
                name="name"
                label="Equipment Name"
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

export default EquipmentsCreateButton;
