import { useParams } from "react-router-dom";
import { PHDTagFormData } from "../../entities/FormData";
import { usePHDTag, useUpdatePHDTag } from "../../hooks/PHDTags";
import { useFormSubmit } from "../../hooks/forms";
import { PHDTagSchema } from "../../validationSchema";
import { FormContainer, FormInput, FormSubmit } from "../forms";
import PHDTagFormSkeleton from "./PHDTagFormSkeleton";

const UpdatePHDTagForm = () => {
  const { id } = useParams();
  const { data: tag, isLoading, error } = usePHDTag(id!);

  const { mutateAsync, isPending } = useUpdatePHDTag(id!);

  const { register, handleSubmit, onSubmit, errors } = useFormSubmit<
    PHDTagFormData,
    PHDTagFormData
  >({
    onSuccessMessage: "The PHd tag was successfuly modified",
    redirectPath: "/config/phd-tags",
    schema: PHDTagSchema,
    mutateAsync,
    onDataMutate: (data) => data,
  });

  if (error) return null;

  if (isLoading) return <PHDTagFormSkeleton />;

  return (
    <FormContainer handleSubmit={handleSubmit} onSubmit={onSubmit}>
      <FormInput
        name="tagname"
        label="PHD tagname"
        error={errors.tagname?.message!}
        defaultValue={tag?.tagname}
        placeholder="Tagname"
        isRequired={true}
        register={register}
      />

      <FormInput
        name="description"
        label="Descrtiption"
        error={errors.description?.message!}
        defaultValue={tag?.description}
        placeholder="Description"
        register={register}
      />
      <FormSubmit label="Update" isDisabled={isPending} />
    </FormContainer>
  );
};

export default UpdatePHDTagForm;
