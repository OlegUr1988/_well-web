import { FaPlus } from "react-icons/fa";
import { toast } from "react-toastify";
import { AddAsset } from "../../../entities/assets";
import { ListViewFormData } from "../../../entities/formDatas";
import { useAddAsset } from "../../../hooks/assets";
import { useAddAttribute } from "../../../hooks/attributes";
import useAttributeTypes from "../../../hooks/useAttributeTypes";
import useUtilityTypes from "../../../hooks/useUtilityTypes";
import { HttpError } from "../../../services/api-client";
import { listViewFormSchema } from "../../../validationSchema";
import SimpleModal from "../../common/SimpleModal";
import { IconButton } from "../../common/buttons";

const SubassetCreateButton = ({ parentAssetId }: { parentAssetId: number }) => {
  const { mutateAsync, isPending } = useAddAsset();
  const { mutateAsync: createAttribute, isPending: creatingAttribute } =
    useAddAttribute();
  const { data: attributeTypes } = useAttributeTypes();
  const { data: assetTypes, isLoading, error } = useUtilityTypes();

  if (isLoading) return null;

  if (error) return null;

  const subassetType = assetTypes?.find(
    (type) => type.name.toLowerCase() === "subasset"
  );

  const handleOnSuccess = async (data: AddAsset) => {
    const type = attributeTypes?.find(
      (type) => type.name.toLowerCase() === "duty"
    );

    const template = {
      assetId: data.id!,
      attributeTypeId: type!.id,
    };

    try {
      await createAttribute({
        ...template,
        name: "Duty",
      });
      await createAttribute({
        ...template,
        name: "Useful work",
      });
    } catch (error) {
      const { response } = error as HttpError;
      toast.error(response?.data.message);
    }
  };

  return (
    <SimpleModal<ListViewFormData, AddAsset>
      header="Create Subasset"
      label="Subasset Name"
      submitLabel="Create"
      onSuccessMessage="The new subasset was successfully added"
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
      isPending={isPending && creatingAttribute}
      mutateAsync={(data) =>
        mutateAsync({
          name: data.name,
          parentAssetId,
          utilityTypeId: subassetType?.id!,
        })
      }
      onSuccess={handleOnSuccess}
    />
  );
};

export default SubassetCreateButton;
