import { DataSourceFormData } from "../../../entities/formDatas";
import { useDataSource, useUpdateDataSource } from "../../../hooks/dataSources";
import { useFormSubmit } from "../../../hooks/forms";
import useUserStore from "../../../store/user";
import { dataSourceSchema } from "../../../validationSchema";
import { FormContainer, FormInput, FormSubmit } from "../../common/forms";

const DataSourceForm = () => {
  const { data: dataSource, isLoading, error } = useDataSource(1);
  const { mutateAsync, isPending } = useUpdateDataSource(1);
  const user = useUserStore((s) => s.user);

  const { register, handleSubmit, onSubmit, errors } =
    useFormSubmit<DataSourceFormData>({
      onSuccessMessage: "Data source was successfuly updated",
      mutateAsync,
      schema: dataSourceSchema,
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

      {user && <FormSubmit label={"Update"} isDisabled={isPending} />}
    </FormContainer>
  );
};

export default DataSourceForm;
