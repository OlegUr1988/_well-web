import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import useAsset from "../hooks/useAsset";
import useAssetForm from "../hooks/useAssetForm";
import useUpdateAsset from "../hooks/useUpdateAsset";

const UpdateAssetForm = () => {
  const { id } = useParams();
  const { data: asset, isLoading, error } = useAsset(id!);

  const updateAsset = useUpdateAsset(id!);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { register, handleSubmit, onSubmit, errors } = useAssetForm(
    async (data) => {
      try {
        await updateAsset.mutateAsync(data);
        queryClient.invalidateQueries();
        toast.success("The asset was successfuly modified.");
        navigate("/config/assets");
      } catch (error) {
        const { message } = error as Error;
        toast.error(message);
      }
    }
  );

  if (error) return null;

  if (isLoading) return <Text>Loading</Text>;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl mb={5} isRequired isInvalid={!!errors.name}>
        <FormLabel>Asset Name</FormLabel>
        <Input
          w={400}
          placeholder="name"
          defaultValue={asset?.name}
          {...register("name")}
        />
        <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
      </FormControl>

      <Button colorScheme="blue" type="submit">
        Modify
      </Button>
    </form>
  );
};

export default UpdateAssetForm;
