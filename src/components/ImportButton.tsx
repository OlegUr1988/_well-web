import { Box, Button, Input } from "@chakra-ui/react";
import { useQueryClient } from "@tanstack/react-query";
import { ChangeEvent, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { HttpError } from "../services/api-client";

interface Props {
  mutateAsync: (file: File) => Promise<void>;
  successMessage: string;
  routeAfterImport: string;
}

const ImportButton = ({
  mutateAsync,
  successMessage,
  routeAfterImport,
}: Props) => {
  const ref = useRef<HTMLInputElement>(null);
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
      toast.success(successMessage);
      navigate(routeAfterImport);
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
      <Button colorScheme="orange" onClick={handleClick}>
        Import
      </Button>
    </Box>
  );
};

export default ImportButton;
