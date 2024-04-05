import { Constant } from "../../../entities/constants";
import { ConstantFormData } from "../../../entities/formDatas";
import { useUpdateConstant } from "../../../hooks/constants";
import { constantShcema } from "../../../validationSchema";
import { SimpleModal } from "../../common";
import { EditButton } from "../../common/buttons";

const ConstantEditButton = ({ constant }: { constant: Constant }) => {
  const { mutateAsync, isPending } = useUpdateConstant(constant.id);

  return (
    <SimpleModal<ConstantFormData>
      type="number"
      header="Set value"
      name="value"
      label={constant.name}
      submitLabel="Set"
      defaultValue={String(constant.value)}
      onSuccessMessage="The constant value was successfully modified"
      schema={constantShcema}
      renderTriggerButton={(onOpen) => <EditButton onClick={onOpen} />}
      isPending={isPending}
      mutateAsync={mutateAsync}
    />
  );
};

export default ConstantEditButton;
