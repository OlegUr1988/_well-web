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
import { Asset } from "../../entities/assets";
import { useAddAsset } from "../../hooks/assets";
import { useForm } from "../../hooks/forms";
import { HttpError } from "../../services/api-client";
import { assetSchema } from "../../validationSchema";
import { FormContainer, FormInput, FormSubmit } from "../forms";

const AssetCreateButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { mutateAsync, isPending } = useAddAsset();
  const queryClient = useQueryClient();

  const { register, errors, handleSubmit, onSubmit } = useForm<Asset>(
    async (data) => {
      try {
        await mutateAsync(data);
        onClose();
        toast.success("The new asset was successfully added");
        queryClient.invalidateQueries();
      } catch (error) {
        const { response } = error as HttpError;
        toast.error(response?.data.message);
      }
    },
    assetSchema
  );

  return (
    <>
      <Button variant="outline" mt={3} color="white" onClick={onOpen} w="100%">
        <FaPlus />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Asset</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormContainer handleSubmit={handleSubmit} onSubmit={onSubmit}>
              <FormInput
                name="name"
                label="Asset Name"
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

export default AssetCreateButton;
