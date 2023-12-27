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
import { EquipmentFormData } from "../../entities/FormData";
import { Equipment } from "../../entities/equipments";
import { useUpdateEquipment } from "../../hooks/equipments";
import { useForm } from "../../hooks/forms";
import { HttpError } from "../../services/api-client";
import { equipmentSchema } from "../../validationSchema";
import { FormContainer, FormInput, FormSubmit } from "../forms";

const EquipmentEditButton = ({ equipment }: { equipment: Equipment }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { mutateAsync, isPending } = useUpdateEquipment(equipment.id);
  const queryClient = useQueryClient();

  const { register, errors, handleSubmit, onSubmit } =
    useForm<EquipmentFormData>(async (data) => {
      try {
        await mutateAsync({ name: data.name, assetId: equipment.assetId });
        onClose();
        toast.success("The new equipment was successfully modified");
        queryClient.invalidateQueries();
      } catch (error) {
        const { response } = error as HttpError;
        toast.error(response?.data.message);
      }
    }, equipmentSchema);

  return (
    <>
      <Button size="xs" variant="outline" color="white" onClick={onOpen}>
        <MdOutlineEdit />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Equipment</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormContainer handleSubmit={handleSubmit} onSubmit={onSubmit}>
              <FormInput
                name="name"
                label="Equipment Name"
                error={errors.name?.message!}
                placeholder="Name"
                defaultValue={equipment.name}
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

export default EquipmentEditButton;
