import { AssetFormData } from "../../entities/FormData";
import { useAddAsset } from "../../hooks/assets";
import { useFormSubmit } from "../../hooks/forms";
import { assetSchema } from "../../validationSchema";
import { FormContainer, FormInput, FormSubmit } from "../forms/";

const NewAssetForm = () => {
  const { mutateAsync, isPending } = useAddAsset();

  const { register, handleSubmit, onSubmit, errors } = useFormSubmit<
    AssetFormData,
    AssetFormData
  >({
    onSuccessMessage: "The new asset was successfuly created.",
    redirectPath: "/config/assets",
    schema: assetSchema,
    mutateAsync,
    onDataMutate: (data) => data,
  });

  return (
    <FormContainer handleSubmit={handleSubmit} onSubmit={onSubmit}>
      <FormInput
        name="name"
        label="Asset Name"
        error={errors.name?.message!}
        placeholder="Name"
        register={register}
      />

      <FormSubmit label="Create" isDisabled={isPending} />
    </FormContainer>
  );
};

export default NewAssetForm;
