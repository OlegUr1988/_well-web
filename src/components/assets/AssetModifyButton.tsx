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
import { Asset } from "../../entities/assets";
import { useUpdateAsset } from "../../hooks/assets";
import { useForm } from "../../hooks/forms";
import { HttpError } from "../../services/api-client";
import { assetSchema } from "../../validationSchema";
import { FormContainer, FormInput, FormSubmit } from "../forms";

const AssetModifyButton = ({ asset }: { asset: Asset }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const queryClient = useQueryClient();
  const { mutateAsync, isPending } = useUpdateAsset(asset.id);

  const { register, errors, handleSubmit, onSubmit } = useForm<Asset>(
    async (data) => {
      try {
        await mutateAsync(data);
        onClose();
        toast.success("The asset was successfully modified");
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
      <Button size="xs" variant="outline" color="white" onClick={onOpen}>
        <MdOutlineEdit />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Asset</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormContainer handleSubmit={handleSubmit} onSubmit={onSubmit}>
              <FormInput
                name="name"
                label="Asset Name"
                error={errors.name?.message!}
                defaultValue={asset.name}
                placeholder="Name"
                register={register}
              />

              <FormSubmit label="Edit" isDisabled={isPending} />
            </FormContainer>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AssetModifyButton;
