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

const NewAssetForm = () => {
  const createAsset = useAddAsset();
  const navigate = useNavigate();

  const { register, handleSubmit, onSubmit, errors } = useAssetForm(
    async (data) => {
      try {
        await createAsset.mutateAsync(data);
        toast.success("A new asset was created");
        navigate("/config/assets", { replace: true });
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

      <Button colorScheme="blue" type="submit">
        Create
      </Button>
    </form>
  );
};

export default NewAssetForm;
