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
import useAddEquipment from "../hooks/useAddEquipment";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

const NewEquipmentForm = () => {
  const { data: assets, isLoading, error } = useAssets({});

  const { mutateAsync, isPending } = useAddEquipment();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { control, register, handleSubmit, onSubmit, errors } =
    useForm<EquipmentFormData>(async (data) => {
      try {
        await mutateAsync({
          name: data.name,
          assetId: data.asset?.value!,
        });
        toast.success("A new equipment was created");
        queryClient.invalidateQueries();
        navigate("/config/equipments");
      } catch (error) {
        const { message } = error as Error;
        toast.error(message);
      }
    }, equipmentFormSchema);

  if (error) return null;

  if (isLoading) return <EquipmentFormSkeleton />;

  const options: SelectOption[] = assets!.results.map((asset) => ({
    label: asset.name,
    value: asset.id,
  }));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl mb={3} isInvalid={!!errors.name}>
        <FormLabel>Equipment Name</FormLabel>
        <Input w={400} placeholder="name" {...register("name")} />
        <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
      </FormControl>

      <Box w={400} mb={5}>
        <ControlledSelect<EquipmentFormData, SelectOption, false>
          name="asset"
          control={control}
          label="Select Asset"
          placeholder="Select Asset"
          options={options}
        />
      </Box>

      <Button isDisabled={isPending} colorScheme="blue" type="submit">
        Create
      </Button>
    </form>
  );
};

export default NewEquipmentForm;
