import { DataSourceFormData } from "../../entities/formDatas";
import { useDataSource, useUpdateDataSource } from "../../hooks/dataSources";
import { useFormSubmit } from "../../hooks/forms";
import { DataSourceSchema } from "../../validationSchema";
import { FormContainer, FormInput, FormSubmit } from "../forms";

const DataSourceForm = () => {
  const { data: dataSource, isLoading, error } = useDataSource(1);
  const { mutateAsync, isPending } = useUpdateDataSource(1);

  const { register, handleSubmit, onSubmit, errors } = useFormSubmit<
    DataSourceFormData,
    DataSourceFormData
  >({
    onSuccessMessage: "Data source was successfuly updated",
    mutateAsync,
    schema: DataSourceSchema,
    onDataMutate: (data) => data,
  });

  if (isLoading) return null;

  if (error) return null;

  return (
    <FormContainer handleSubmit={handleSubmit} onSubmit={onSubmit}>
      <FormInput
        name="host"
        label={"PHD hostname or IP adress"}
        error={errors.host?.message!}
        placeholder="Host"
        defaultValue={dataSource?.host}
        register={register}
      />

      <FormInput
        type="number"
        name="port"
        label={"Port"}
        error={errors.port?.message!}
        placeholder="Port"
        defaultValue={dataSource?.port}
        register={register}
      />

      <FormSubmit label={"Update"} isDisabled={isPending} />
    </FormContainer>
  );
};

export default DataSourceForm;
