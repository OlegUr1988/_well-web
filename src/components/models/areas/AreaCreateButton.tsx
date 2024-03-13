import { FaPlus } from "react-icons/fa";
import { ListViewFormData } from "../../../entities/formDatas";
import { useAddAsset } from "../../../hooks/assets";
import { listViewFormSchema } from "../../../validationSchema";
import SimpleModal from "../../common/SimpleModal";
import { IconButton } from "../../common/buttons";
import { AddAsset } from "../../../entities/assets";
import useUtilityTypes from "../../../hooks/useUtilityTypes";

const AreaCreateButton = () => {
  const { mutateAsync, isPending } = useAddAsset();
  const { data: types, isLoading, error } = useUtilityTypes();

  if (isLoading) return null;

  if (error) return null;

  const areatype = types?.find((type) => type.name.toLowerCase() === "area");

  return (
    <SimpleModal<ListViewFormData, AddAsset>
      header="Create Area"
      label="Area Name"
      submitLabel="Create"
      onSuccessMessage="The new area was successfully added"
      schema={listViewFormSchema}
      renderTriggerButton={(onOpen) => (
        <IconButton
          variant="outline"
          color="white"
          btnColorScheme=""
          onClick={onOpen}
          w="100%"
          icon={<FaPlus />}
        />
      )}
      isPending={isPending}
      mutateAsync={(data) =>
        mutateAsync({
          name: data.name,
          utilityTypeId: areatype?.id!,
        })
      }
    />
  );
};

export default AreaCreateButton;
