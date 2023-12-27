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
import { useDeletePart } from "../../hooks/parts";
import { HttpError } from "../../services/api-client";

const PartDeleteButton = ({ partId }: { partId: number }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const queryClient = useQueryClient();

  const cancelRef = useRef(null);

  const { mutateAsync, isPending } = useDeletePart();

  const handleDelete = async () => {
    try {
      await mutateAsync(partId);
      toast.success(`The equipments part was successfully deleted.`);
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
          <AlertDialogHeader>Delete the Equipments Part?</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            Are you sure you want to delete this Part?
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

export default PartDeleteButton;
