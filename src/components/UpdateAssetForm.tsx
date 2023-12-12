import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Skeleton,
} from "@chakra-ui/react";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { AssetFormData } from "../entities/FormData";
import useAsset from "../hooks/useAsset";
import useForm from "../hooks/useForm";
import useUpdateAsset from "../hooks/useUpdateAsset";
import { assetSchema } from "../validationSchema";
import AssetFormSkeleton from "./AssetFormSkeleton";

const UpdateAssetForm = () => {
  const { id } = useParams();
  const { data: asset, isLoading, error } = useAsset(id!);

  const { mutateAsync, isPending } = useUpdateAsset(id!);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { register, handleSubmit, onSubmit, errors } = useForm<AssetFormData>(
    async (data) => {
      try {
        await mutateAsync(data);
        queryClient.invalidateQueries();
        toast.success("The asset was successfuly modified.");
        navigate("/config/assets");
      } catch (error) {
        const { message } = error as Error;
        toast.error(message);
      }
    },
    assetSchema
  );

  if (error) return null;

  if (isLoading) return <AssetFormSkeleton />;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl mb={5} isInvalid={!!errors.name}>
        <FormLabel>Asset Name</FormLabel>
        <Input
          w={400}
          placeholder="name"
          defaultValue={asset?.name}
          {...register("name")}
        />
        <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
      </FormControl>

      <Button isDisabled={isPending} colorScheme="blue" type="submit">
        Modify
      </Button>
    </form>
  );
};

export default UpdateAssetForm;
