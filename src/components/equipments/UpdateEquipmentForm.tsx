import { useParams } from "react-router-dom";
import { EquipmentFormData, SelectOption } from "../../entities/FormData";
import { AddEquipment } from "../../entities/equipments";
import { useAssets } from "../../hooks/assets";
import { useEquipment, useUpdateEquipment } from "../../hooks/equipments";
import { useFormSubmit } from "../../hooks/forms";
import { equipmentFormSchema } from "../../validationSchema";
import { FormContainer, FormInput, FormSelect, FormSubmit } from "../forms/";
import EquipmentFormSkeleton from "./EquipmentFormSkeleton";

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
    <FormContainer handleSubmit={handleSubmit} onSubmit={onSubmit}>
      <FormInput
        name="name"
        label="Equipment Name"
        error={errors.name?.message!}
        placeholder="Equipment Name"
        defaultValue={equipment?.name}
        register={register}
      />

      <FormSelect
        name="asset"
        control={control}
        label="Select Asset"
        defaultValue={defaultOption}
        options={options}
      />

      <FormSubmit label="Update" isDisabled={isPending} />
    </FormContainer>
  );
};

export default UpdateEquipmentForm;
