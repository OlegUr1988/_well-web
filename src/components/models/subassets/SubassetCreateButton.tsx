import { FaPlus } from "react-icons/fa";
import { toast } from "react-toastify";
import { AddAsset } from "../../../entities/assets";
import { ListViewFormData } from "../../../entities/formDatas";
import { useAddAsset, useAsset } from "../../../hooks/assets";
import { useAddAttribute } from "../../../hooks/attributes";
import useGetAttributeTypes from "../../../hooks/useGetAttributeTypes";
import { HttpError } from "../../../services/api-client";
import { listViewFormSchema } from "../../../validationSchema";
import SimpleModal from "../../common/SimpleModal";
import { IconButton } from "../../common/buttons";

const SubassetCreateButton = ({ parentAssetId }: { parentAssetId: number }) => {
  const { mutateAsync, isPending } = useAddAsset();
  const { mutateAsync: createAttribute, isPending: creatingAttribute } =
    useAddAttribute();
  const attrTypes = useGetAttributeTypes();
  const { data: asset } = useAsset(parentAssetId);

  const handleOnSuccess = async (data: AddAsset) => {
    const template = {
      assetId: data.id!,
      attributeTypeId: attrTypes["duty"]!.id,
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
          utilityTypeId: asset?.utilityTypeId!,
        })
      }
      onSuccess={handleOnSuccess}
    />
  );
};

export default SubassetCreateButton;
