import { useDisclosure } from "@chakra-ui/react";
import { useEffect } from "react";
import { AddAssignment, Assignment } from "../../entities/assignments";
import { AssignmentFormData } from "../../entities/formDatas";
import { SelectOption } from "../../entities/selectOption";
import { usePHDTags } from "../../hooks/PHDTags";
import { useFormSubmit } from "../../hooks/forms";
import { AssignmentSchema } from "../../validationSchema";
import ModalContainer from "../ModalContainer";
import { FormContainer, FormSelect, FormSubmit } from "../forms";

interface Props {
  attributeId: number;
  header: string;
  submitLabel: string;
  onSuccessMessage: string;
  renderTriggerButton: (onOpen: () => void) => JSX.Element;
  isPending: boolean;
  defaultPHDTag?: Assignment;
  mutateAsync: (data: AddAssignment) => Promise<AddAssignment>;
}

const AssignmentModal = ({
  attributeId,
  header,
  submitLabel,
  onSuccessMessage,
  renderTriggerButton,
  isPending,
  defaultPHDTag,
  mutateAsync,
}: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data: tags, isLoading, error } = usePHDTags({});

  const { control, reset, handleSubmit, onSubmit } = useFormSubmit<
    AssignmentFormData,
    AddAssignment
  >({
    onSuccessMessage,
    mutateAsync,
    onDataMutate: (data) => ({
      attributeId,
      PHDTagId: data.tag.value,
    }),
    schema: AssignmentSchema,
    onSuccess: () => onClose(),
  });

  useEffect(() => {
    if (isOpen) {
      reset();
    }
  }, [isOpen, reset]);

  if (error) return null;

  if (isLoading) return null;

  const options: SelectOption[] = tags!.results.map((tag) => ({
    label: tag.tagname,
    value: tag.id,
  }));
  return (
    <>
      {renderTriggerButton(onOpen)}

      <ModalContainer header={header} isOpen={isOpen} onClose={onClose}>
        <FormContainer handleSubmit={handleSubmit} onSubmit={onSubmit}>
          <FormSelect
            control={control}
            label="Select PHD tag"
            name="tag"
            options={options}
            defaultValue={{
              label: defaultPHDTag?.PHDTag.tagname!,
              value: defaultPHDTag?.PHDTagId!,
            }}
          />

          <FormSubmit label={submitLabel} isDisabled={isPending} />
        </FormContainer>
      </ModalContainer>
    </>
  );
};

export default AssignmentModal;
