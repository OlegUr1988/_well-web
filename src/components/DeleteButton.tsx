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
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { HttpError } from "../services/api-client";

interface Props<T> {
  itemId: number;
  itemName: string;
  routeAfterDelete: string;
  isPending?: boolean;
  mutateAsync: (id: number) => Promise<T>;
  onSuccess: () => void;
}

const DeleteButton = <T extends unknown>({
  itemId,
  itemName,
  routeAfterDelete,
  isPending = false,
  mutateAsync,
  onSuccess,
}: Props<T>) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const queryClient = useQueryClient();
  const cancelRef = useRef(null);
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await mutateAsync(itemId);
      toast.success(`The ${itemName} was successfully deleted.`);
      navigate(routeAfterDelete);
      queryClient.invalidateQueries();
      if (onSuccess) onSuccess();
      onClose();
    } catch (error) {
      const { response } = error as HttpError;
      toast.error(response?.data.message);
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
          <AlertDialogHeader>Delete the {itemName}?</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            Are you sure you want to delete this {itemName}?
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

export default DeleteButton;
