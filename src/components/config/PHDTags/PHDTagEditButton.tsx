import { PHDTag } from "../../../entities/PHDTags";
import { useUpdatePHDTag } from "../../../hooks/PHDTags";
import { EditButton } from "../../common/buttons";
import PHDTagModal from "./PHDTagModal";

const PHDTagEditButton = ({ tag }: { tag: PHDTag }) => {
  const { mutateAsync, isPending } = useUpdatePHDTag(tag.id);

  return (
    <PHDTagModal
      header="Edit PHD Tag"
      onSuccessMessage="The PHD tag was successfuly modified"
      submitLabel="Edit"
      defaultPHDTag={tag}
      isPending={isPending}
      mutateAsync={mutateAsync}
      renderTriggerButton={(onOpen) => <EditButton onClick={onOpen} />}
    />
  );
};

export default PHDTagEditButton;
