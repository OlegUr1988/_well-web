import { PHDTagFormData } from "../../entities/FormData";
import useAddPHDTag from "../../hooks/PHDTags/useAddPHDTag";
import { useFormSubmit } from "../../hooks/forms";
import { PHDTagSchema } from "../../validationSchema";
import { FormContainer, FormInput, FormSubmit } from "../forms";

const NewPHDTagForm = () => {
  const { mutateAsync, isPending } = useAddPHDTag();

  const { register, handleSubmit, onSubmit, errors } = useFormSubmit<
    PHDTagFormData,
    PHDTagFormData
  >({
    onSuccessMessage: "The new PHD tag was successfuly created.",
    redirectPath: "/config/phd-tags",
    schema: PHDTagSchema,
    mutateAsync,
    onDataMutate: (data) => data,
  });

  return (
    <FormContainer handleSubmit={handleSubmit} onSubmit={onSubmit}>
      <FormInput
        name="tagname"
        label="PHD tagname"
        error={errors.tagname?.message!}
        placeholder="Tagname"
        isRequired={true}
        register={register}
      />

      <FormInput
        name="description"
        label="Descrtiption"
        error={errors.description?.message!}
        placeholder="Description"
        register={register}
      />
      <FormSubmit label="Create" isDisabled={isPending} />
    </FormContainer>
  );
};

export default NewPHDTagForm;
