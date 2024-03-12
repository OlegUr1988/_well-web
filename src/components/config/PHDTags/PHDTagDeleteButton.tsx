import { useDeletePHDTag, usePHDTags } from "../../../hooks/PHDTags";
import usePHDTagStore from "../../../store/phdTags";
import { DeleteButton } from "../../common/buttons";
import SimpleAlert from "../../common/SimpleAlert";

const PHDTagDeleteButton = ({ tagId }: { tagId: number }) => {
  const { mutateAsync, isPending } = useDeletePHDTag();

  const { page, pageSize } = usePHDTagStore((s) => s.PHDTagsQuery);
  const { data: tags } = usePHDTags({ page, pageSize });
  const setPage = usePHDTagStore((s) => s.setPage);

  const handlePagination = () => {
    if (tags?.results.length === 1 && page! > 1) setPage(page! - 1);
  };

  return (
    <SimpleAlert
      header="Delete the tag?"
      content="Are you sure to delete this tag and all related records for this tag?"
      onSuccessMessage="The tag was successfully deleted with all records"
      isPending={isPending}
      mutateAsync={() => mutateAsync(tagId)}
      onSuccess={handlePagination}
      renderTriggerButton={(onOpen) => <DeleteButton onClick={onOpen} />}
    />
  );
};

export default PHDTagDeleteButton;
