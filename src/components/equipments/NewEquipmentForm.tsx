import { EquipmentFormData, SelectOption } from "../../entities/FormData";
import { AddEquipment } from "../../entities/equipments";
import { useAssets } from "../../hooks/assets";
import { useAddEquipment } from "../../hooks/equipments";
import { useFormSubmit } from "../../hooks/forms";
import { equipmentFormSchema } from "../../validationSchema";
import { FormContainer, FormInput, FormSelect, FormSubmit } from "../forms/";
import EquipmentFormSkeleton from "./EquipmentFormSkeleton";

const NewEquipmentForm = () => {
  const { data: assets, isLoading, error } = useAssets({});
  const { mutateAsync, isPending } = useAddEquipment();

  const { control, register, handleSubmit, onSubmit, errors } = useFormSubmit<
    EquipmentFormData,
    AddEquipment
  >({
    onSuccessMessage: "A new equipment was created",
    redirectPath: "/config/equipments",
    schema: equipmentFormSchema,
    mutateAsync,
    onDataMutate: (data) => ({ name: data.name, assetId: data.asset?.value! }),
  });

  if (error) return null;

  if (isLoading) return <EquipmentFormSkeleton />;

  const options: SelectOption[] = assets!.results.map((asset) => ({
    label: asset.name,
    value: asset.id,
  }));

  return (
    <FormContainer handleSubmit={handleSubmit} onSubmit={onSubmit}>
      <FormInput
        name="name"
        label="Equipment Name"
        error={errors.name?.message!}
        placeholder="Equipment Name"
        register={register}
      />

      <FormSelect
        name="asset"
        control={control}
        label="Select Asset"
        options={options}
      />

      <FormSubmit label="Create" isDisabled={isPending} />
    </FormContainer>
  );
};

export default NewEquipmentForm;
