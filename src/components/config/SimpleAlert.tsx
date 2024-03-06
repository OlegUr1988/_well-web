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
import { toast } from "react-toastify";
import { HttpError } from "../../services/api-client";

interface Props<T> {
  header: string;
  content: string;
  onSuccessMessage: string;
  isPending: boolean;
  mutateAsync: () => Promise<T>;
  onSuccess?: () => void;
  renderTriggerButton: (onOpen: () => void) => JSX.Element;
}

const SimpleAlert = <T,>({
  header,
  content,
  onSuccessMessage,
  isPending,
  mutateAsync,
  onSuccess,
  renderTriggerButton,
}: Props<T>) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const queryClient = useQueryClient();

  const cancelRef = useRef(null);

  const handleDelete = async () => {
    try {
      await mutateAsync();
      toast.success(onSuccessMessage);
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
      {renderTriggerButton(onOpen)}

      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>{header}</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>{content}</AlertDialogBody>
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

export default SimpleAlert;
