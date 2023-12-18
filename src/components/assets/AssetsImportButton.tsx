import { Box, Button, Input } from "@chakra-ui/react";
import { useQueryClient } from "@tanstack/react-query";
import { ChangeEvent, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useImportAssetsFromExcel } from "../../hooks/assets";
import { HttpError } from "../../services/api-client";

const AssetsImportButton = () => {
  const ref = useRef<HTMLInputElement>(null);
  const { mutateAsync, isPending } = useImportAssetsFromExcel();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const handleClick = () => {
    ref.current?.click();
  };

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) {
      console.error("No file selected");
      return;
    }

    try {
      await mutateAsync(file);
      toast.success("Assets were updated.");
      navigate("/config/assets");
      queryClient.invalidateQueries();
    } catch (error) {
      console.log(error);
      const { response } = error as HttpError;
      toast.error(response?.data.message);
    }
  };

  return (
    <Box>
      <Input ref={ref} type="file" display="none" onChange={handleChange} />
      <Button isDisabled={isPending} colorScheme="orange" onClick={handleClick}>
        Import
      </Button>
    </Box>
  );
};

export default AssetsImportButton;
