import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAddAsset from "../hooks/useAddAsset";
import useAssetForm from "../hooks/useAssetForm";
import { useQueryClient } from "@tanstack/react-query";

const NewAssetForm = () => {
  const { mutateAsync, isPending } = useAddAsset();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { register, handleSubmit, onSubmit, errors } = useAssetForm(
    async (data) => {
      try {
        await mutateAsync(data);
        toast.success("A new asset was created");
        queryClient.invalidateQueries();
        navigate("/config/assets");
      } catch (error) {
        const { message } = error as Error;
        toast.error(message);
      }
    }
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl mb={5} isRequired isInvalid={!!errors.name}>
        <FormLabel>Asset Name</FormLabel>
        <Input w={400} placeholder="name" {...register("name")} />
        <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
      </FormControl>

      <Button isDisabled={isPending} colorScheme="blue" type="submit">
        Create
      </Button>
    </form>
  );
};

export default NewAssetForm;
