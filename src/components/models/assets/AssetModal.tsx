import { useDisclosure } from "@chakra-ui/react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { AddAsset, Asset } from "../../../entities/assets";
import { AssetFormData } from "../../../entities/formDatas";
import { SelectOption } from "../../../entities/selectOption";
import { useAddAttribute } from "../../../hooks/attributes";
import { useFormSubmit } from "../../../hooks/forms";
import useAttributeTypes from "../../../hooks/useAttributeTypes";
import useUtilityTypes from "../../../hooks/useUtilityTypes";
import { HttpError } from "../../../services/api-client";
import { assetSchema } from "../../../validationSchema";
import { ModalContainer } from "../../common/";
import {
  FormContainer,
  FormInput,
  FormSelect,
  FormSubmit,
} from "../../common/forms";

interface Props {
  parentAssetId: number;
  header: string;
  submitLabel: string;
  onSuccessMessage: string;
  renderTriggerButton: (onOpen: () => void) => JSX.Element;
  isPending: boolean;
  defaultAsset?: Asset;
  mutateAsync: (data: AddAsset) => Promise<AddAsset>;
}

const excludedUtilities = ["area", "plant"];

const AssetModal = ({
  parentAssetId,
  header,
  submitLabel,
  onSuccessMessage,
  renderTriggerButton,
  isPending,
  defaultAsset,
  mutateAsync,
}: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data: utilityTypes, isLoading, error } = useUtilityTypes();
  const { mutateAsync: createAttribute, isPending: isCreating } =
    useAddAttribute();
  const { data: attributeTypes } = useAttributeTypes();

  const handleOnSuccess = async (data: AddAsset) => {
    const type = attributeTypes?.find(
      (type) => type.name.toLowerCase() === "duty"
    );

    try {
      await createAttribute({
        assetId: data.id!,
        attributeTypeId: type!.id,
        name: "Main Asset Duty",
      });
    } catch (error) {
      const { response } = error as HttpError;
      toast.error(response?.data.message);
    }
  };

  const assetTypes = utilityTypes?.filter(
    (type) => !excludedUtilities.includes(type.name.toLowerCase())
  );

  const { control, reset, register, handleSubmit, onSubmit, errors } =
    useFormSubmit<AssetFormData, AddAsset>({
      onSuccessMessage,
      mutateAsync,
      onDataMutate: (data) => ({
        name: data.name,
        utilityTypeId: data.utility.value,
        parentAssetId,
      }),
      schema: assetSchema,
      onSuccess: (data) => {
        handleOnSuccess(data);
        onClose();
      },
    });

  useEffect(() => {
    if (isOpen) {
      reset();
    }
  }, [isOpen, reset]);

  if (error) return null;

  if (isLoading) return null;

  const options: SelectOption[] = assetTypes!.map((type) => ({
    label: type.name,
    value: type.id,
  }));

  return (
    <>
      {renderTriggerButton(onOpen)}

      <ModalContainer header={header} isOpen={isOpen} onClose={onClose}>
        <FormContainer handleSubmit={handleSubmit} onSubmit={onSubmit}>
          <FormInput
            name="name"
            label="Name"
            error={errors.name?.message!}
            placeholder="Name"
            defaultValue={defaultAsset?.name}
            register={register}
          />

          <FormSelect
            control={control}
            label="Select asset type"
            name="utility"
            options={options}
            defaultValue={{
              label: defaultAsset?.name!,
              value: defaultAsset?.utilityTypeId!,
            }}
          />

          <FormSubmit
            label={submitLabel}
            isDisabled={isPending && isCreating}
          />
        </FormContainer>
      </ModalContainer>
    </>
  );
};

export default AssetModal;
