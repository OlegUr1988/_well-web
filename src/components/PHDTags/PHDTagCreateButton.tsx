import { useAddPHDTag } from "../../hooks/PHDTags";
import CreateButton from "../CreateButton";
import PHDTagModal from "./PHDTagModal";

const PHDTagCreateButton = () => {
  const { mutateAsync, isPending } = useAddPHDTag();

  return (
    <PHDTagModal
      header="Add PHD Tag"
      onSuccessMessage="The new PHD tag was added"
      submitLabel="Create"
      isPending={isPending}
      mutateAsync={mutateAsync}
      renderTriggerButton={(onOpen) => <CreateButton onClick={onOpen} />}
    />
  );
};

export default PHDTagCreateButton;
