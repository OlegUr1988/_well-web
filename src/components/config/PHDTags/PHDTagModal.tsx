import { useDisclosure } from "@chakra-ui/react";
import { useEffect } from "react";
import { AddPHDTag, PHDTag } from "../../../entities/PHDTags";
import { PHDTagFormData } from "../../../entities/formDatas";
import { SelectOption } from "../../../entities/selectOption";
import { useFormSubmit } from "../../../hooks/forms";
import { useUnits } from "../../../hooks/units";
import { PHDTagSchema } from "../../../validationSchema";
import ModalContainer from "../ModalContainer";
import { FormContainer, FormInput, FormSelect, FormSubmit } from "../forms";

interface Props {
  header: string;
  submitLabel: string;
  onSuccessMessage: string;
  renderTriggerButton: (onOpen: () => void) => JSX.Element;
  isPending: boolean;
  defaultPHDTag?: PHDTag;
  mutateAsync: (data: AddPHDTag) => Promise<AddPHDTag>;
}

const PHDTagModal = ({
  header,
  submitLabel,
  onSuccessMessage,
  renderTriggerButton,
  isPending,
  defaultPHDTag,
  mutateAsync,
}: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data: units, isLoading, error } = useUnits({});

  const { control, reset, register, handleSubmit, onSubmit, errors } =
    useFormSubmit<PHDTagFormData, AddPHDTag>({
      onSuccessMessage,
      mutateAsync,
      onDataMutate: (data) => ({
        tagname: data.tagname,
        unitId: data.unit.value,
      }),
      schema: PHDTagSchema,
      onSuccess: () => onClose(),
    });

  useEffect(() => {
    if (isOpen) {
      reset();
    }
  }, [isOpen, reset]);

  if (error) return null;

  if (isLoading) return null;

  const options: SelectOption[] = units!.results.map((unit) => ({
    label: unit.name,
    value: unit.id,
  }));

  return (
    <>
      {renderTriggerButton(onOpen)}

      <ModalContainer header={header} isOpen={isOpen} onClose={onClose}>
        <FormContainer handleSubmit={handleSubmit} onSubmit={onSubmit}>
          <FormInput
            name="tagname"
            label="Tagname"
            error={errors.tagname?.message!}
            placeholder="Name"
            defaultValue={defaultPHDTag?.tagname}
            register={register}
          />

          <FormSelect
            control={control}
            label="Select units"
            name="unit"
            options={options}
            defaultValue={{
              label: defaultPHDTag?.unit.name!,
              value: defaultPHDTag?.unit.id!,
            }}
          />

          <FormSubmit label={submitLabel} isDisabled={isPending} />
        </FormContainer>
      </ModalContainer>
    </>
  );
};

export default PHDTagModal;
