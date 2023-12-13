import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { EquipmentFormData, SelectOption } from "../entities/FormData";
import useAssets from "../hooks/useAssets";
import useForm from "../hooks/useForm";
import { equipmentFormSchema } from "../validationSchema";
import ControlledSelect from "./ControlledSelect";
import EquipmentFormSkeleton from "./EquipmentFormSkeleton";
import useEquipment from "../hooks/useEquipment";
import { useNavigate, useParams } from "react-router-dom";
import useUpdateEquipment from "../hooks/useUpdateEquipment";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { HttpError } from "../services/api-client";

const UpdateEquipmentForm = () => {
  const { id } = useParams();
  const {
    data: assets,
    isLoading: isAssetsLoading,
    error: assetsError,
  } = useAssets({});
  const {
    data: equipment,
    isLoading: isEquipmentLoading,
    error: equipmentError,
  } = useEquipment(id!);

  const { mutateAsync, isPending } = useUpdateEquipment(id!);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { control, register, handleSubmit, onSubmit, errors } =
    useForm<EquipmentFormData>(async (data) => {
      try {
        await mutateAsync({
          name: data.name,
          assetId: data.asset?.value!,
        });
        queryClient.invalidateQueries();
        toast.success("The equipment was successfuly modified.");
        navigate("/config/equipments");
      } catch (error) {
        const { response } = error as HttpError;
        toast.error(response?.data.message);
      }
    }, equipmentFormSchema);

  if (assetsError || equipmentError) return null;

  if (isAssetsLoading || isEquipmentLoading) return <EquipmentFormSkeleton />;

  const options: SelectOption[] = assets!.results.map((asset) => ({
    label: asset.name,
    value: asset.id,
  }));

  const defaultOption: SelectOption = {
    label: equipment?.asset.name!,
    value: equipment?.asset.id!,
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl mb={3} isInvalid={!!errors.name}>
        <FormLabel>Equipment Name</FormLabel>
        <Input
          w={400}
          placeholder="Equipment Name"
          defaultValue={equipment?.name}
          {...register("name")}
        />
        <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
      </FormControl>

      <Box w={400} mb={5}>
        <ControlledSelect<EquipmentFormData, SelectOption, false>
          name="asset"
          control={control}
          label="Select Asset"
          defaultValue={defaultOption}
          placeholder="Asset"
          options={options}
        />
      </Box>

      <Button isDisabled={isPending} colorScheme="blue" type="submit">
        Update
      </Button>
    </form>
  );
};

export default UpdateEquipmentForm;
