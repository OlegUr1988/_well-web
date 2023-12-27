import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import { useDeleteEquipment } from "../../hooks/equipments";
import { HttpError } from "../../services/api-client";

const EquipmentDeleteButton = ({ equipmentId }: { equipmentId: number }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const queryClient = useQueryClient();

  const cancelRef = useRef(null);

  const { mutateAsync, isPending } = useDeleteEquipment();

  const handleDelete = async () => {
    try {
      await mutateAsync(equipmentId);
      toast.success(`The equipment was successfully deleted.`);
      queryClient.invalidateQueries();
      onClose();
    } catch (error) {
      const { response } = error as HttpError;
      toast.error(response?.data.message);
      onClose();
    }
  };

  return (
    <>
      <Button size="xs" variant="outline" color="white" onClick={onOpen}>
        <FaRegTrashAlt />
      </Button>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>Delete the Equipment?</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            Are you sure you want to delete this Equipment?
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              No
            </Button>
            <Button
              colorScheme="red"
              isDisabled={isPending}
              ml={3}
              onClick={handleDelete}
            >
              Yes
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default EquipmentDeleteButton;
