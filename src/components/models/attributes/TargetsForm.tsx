import { useEffect } from "react";
import { UpdateTargetFormData } from "../../../entities/formDatas";
import { Target } from "../../../entities/targets";
import { useFormSubmit } from "../../../hooks/forms";
import { useUpdateTarget } from "../../../hooks/targets";
import useUserStore from "../../../store/user";
import { updateTargetSchema } from "../../../validationSchema";
import { FormContainer, FormInput, FormSubmit } from "../../common/forms";

const TargetsForm = ({ targets }: { targets: Target }) => {
  const { mutateAsync, isPending } = useUpdateTarget(targets.id);
  const user = useUserStore((s) => s.user);

  const { reset, register, handleSubmit, onSubmit, errors } =
    useFormSubmit<UpdateTargetFormData>({
      onSuccessMessage: "Targets was successfuly updated",
      mutateAsync,
      schema: updateTargetSchema,
    });

  useEffect(() => {
    reset();
  }, [reset]);

  return (
    <FormContainer handleSubmit={handleSubmit} onSubmit={onSubmit}>
      <FormInput
        type="number"
        w={150}
        name="productionTarget"
        label="Target for total production"
        error={errors.productionTarget?.message!}
        defaultValue={targets.productionTarget}
        register={register}
      />
      <FormInput
        type="number"
        w={150}
        name="energyConsumptionTarget"
        label="Target for total energy consumption"
        error={errors.energyConsumptionTarget?.message!}
        defaultValue={targets.energyConsumptionTarget}
        register={register}
      />
      <FormInput
        type="number"
        w={150}
        name="specificEnergyConsupmtionTarget"
        label="Target for total specific energy consumption"
        error={errors.specificEnergyConsupmtionTarget?.message!}
        defaultValue={targets.specificEnergyConsupmtionTarget}
        register={register}
      />
      <FormInput
        type="number"
        w={150}
        name="CO2EmissionTarget"
        label="Target for total CO2 emission"
        error={errors.CO2EmissionTarget?.message!}
        defaultValue={targets.CO2EmissionTarget}
        register={register}
      />
      {user && <FormSubmit label={"Update"} isDisabled={isPending} />}
    </FormContainer>
  );
};

export default TargetsForm;
