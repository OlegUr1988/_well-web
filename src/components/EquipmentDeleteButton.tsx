import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogCloseButton,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogOverlay,
} from "@chakra-ui/modal";
import { useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useDeleteEquipment from "../hooks/useDeleteEquipment";

const EquipmentDeleteButton = ({ equipmentId }: { equipmentId: number }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const queryClient = useQueryClient();
  const cancelRef = useRef(null);
  const { mutateAsync, isPending } = useDeleteEquipment();
  const navigate = useNavigate();

  const handleDelete = async (equipmentId: number) => {
    try {
      await mutateAsync(equipmentId);
      toast.success("The equipment was successfully deleted.");
      navigate("/config/equipments");
      queryClient.invalidateQueries();
      onClose();
    } catch (error) {
      const { message } = error as Error;
      toast.error(message);
      onClose();
    }
  };

  return (
    <>
      <Button onClick={onOpen} colorScheme="red">
        Delete
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
          <AlertDialogHeader>Delete the equipment?</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            Are you sure you want to delete this equipment?
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              No
            </Button>
            <Button
              colorScheme="red"
              isDisabled={isPending}
              ml={3}
              onClick={() => handleDelete(equipmentId)}
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
