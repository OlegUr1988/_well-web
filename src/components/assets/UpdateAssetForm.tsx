import { useParams } from "react-router-dom";
import { AssetFormData } from "../../entities/FormData";
import { useAsset, useUpdateAsset } from "../../hooks/assets";
import { useFormSubmit } from "../../hooks/forms";
import { assetSchema } from "../../validationSchema";
import { FormContainer, FormInput, FormSubmit } from "../forms/";
import AssetFormSkeleton from "./AssetFormSkeleton";

const UpdateAssetForm = () => {
  const { id } = useParams();
  const { data: asset, isLoading, error } = useAsset(id!);
  const { mutateAsync, isPending } = useUpdateAsset(id!);

  const { register, handleSubmit, onSubmit, errors } = useFormSubmit<
    AssetFormData,
    AssetFormData
  >({
    onSuccessMessage: "The asset was successfuly modified.",
    redirectPath: "/config/assets",
    schema: assetSchema,
    mutateAsync,
    onDataMutate: (data) => data,
  });

  if (error) return null;

  if (isLoading) return <AssetFormSkeleton />;

  return (
    <FormContainer handleSubmit={handleSubmit} onSubmit={onSubmit}>
      <FormInput
        name="name"
        label="Asset Name"
        error={errors.name?.message!}
        placeholder="Name"
        defaultValue={asset?.name}
        register={register}
      />

      <FormSubmit label="Update" isDisabled={isPending} />
    </FormContainer>
  );
};

export default UpdateAssetForm;
