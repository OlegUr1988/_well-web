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
import useAssets from "../hooks/useAssets";
import useDeleteAsset from "../hooks/useDeleteAsset";
import useAssetStore from "../store/assets";
import { HttpError } from "../services/api-client";

const AssetDeleteButton = ({ assetId }: { assetId: number }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const queryClient = useQueryClient();
  const cancelRef = useRef(null);
  const { mutateAsync, isPending } = useDeleteAsset();
  const navigate = useNavigate();

  const { page, pageSize } = useAssetStore((s) => s.assetQuery);
  const { data: assets } = useAssets({ page, pageSize });
  const setPage = useAssetStore((s) => s.setPage);

  const handlePagination = () => {
    if (assets?.results.length === 1 && page! > 1) setPage(page! - 1);
  };

  const handleDelete = async (assetId: number) => {
    try {
      await mutateAsync(assetId);
      toast.success("The asset was successfully deleted.");
      navigate("/config/assets");
      queryClient.invalidateQueries();
      handlePagination();
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
          <AlertDialogHeader>Delete the asset?</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            Are you sure you want to delete this asset?
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              No
            </Button>
            <Button
              colorScheme="red"
              isDisabled={isPending}
              ml={3}
              onClick={() => handleDelete(assetId)}
            >
              Yes
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default AssetDeleteButton;
