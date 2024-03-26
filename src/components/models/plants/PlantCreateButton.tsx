import { FaPlus } from "react-icons/fa";
import { toast } from "react-toastify";
import { AddAsset } from "../../../entities/assets";
import { ListViewFormData } from "../../../entities/formDatas";
import { useAddAsset } from "../../../hooks/assets";
import { useAddAttribute } from "../../../hooks/attributes";
import { useAddTarget } from "../../../hooks/targets";
import useAttributeTypes from "../../../hooks/useAttributeTypes";
import useUtilityTypes from "../../../hooks/useUtilityTypes";
import { HttpError } from "../../../services/api-client";
import { listViewFormSchema } from "../../../validationSchema";
import SimpleModal from "../../common/SimpleModal";
import { IconButton } from "../../common/buttons";

const PlantCreateButton = () => {
  const { mutateAsync, isPending } = useAddAsset();
  const { mutateAsync: createAttribute, isPending: creatingAttribute } =
    useAddAttribute();
  const { data: attributeTypes } = useAttributeTypes();
  const { data: assetTypes, isLoading, error } = useUtilityTypes();
  const { mutateAsync: createTargets, isPending: creatingTargets } =
    useAddTarget();

  if (isLoading) return null;

  if (error) return null;

  const areatype = assetTypes?.find(
    (type) => type.name.toLowerCase() === "area"
  );

  const handleOnSuccess = async (data: AddAsset) => {
    const type = attributeTypes?.find(
      (type) => type.name.toLowerCase() === "area attribute"
    );

    const template = {
      assetId: data.id!,
      attributeTypeId: type!.id,
    };

    try {
      await createAttribute({
        ...template,
        name: "Production",
      });
      await createAttribute({
        ...template,
        name: "Total energy consumption",
      });

      await createTargets({
        productionTarget: 0,
        specificEnergyConsupmtionTarget: 0,
        energyConsumptionTarget: 0,
        CO2EmissionTarget: 0,
        assetId: data.id!,
      });
    } catch (error) {
      const { response } = error as HttpError;
      toast.error(response?.data.message);
    }
  };

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
      isPending={isPending && creatingAttribute && creatingTargets}
      mutateAsync={(data) =>
        mutateAsync({
          name: data.name,
          utilityTypeId: areatype?.id!,
        })
      }
      onSuccess={handleOnSuccess}
    />
  );
};

export default PlantCreateButton;
