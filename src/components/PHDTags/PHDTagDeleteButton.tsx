import { useDeletePHDTag, usePHDTags } from "../../hooks/PHDTags";
import usePHDTagStore from "../../store/phdTags";
import DeleteButton from "../DeleteButton";

const PHDTagDeleteButton = ({ tagId }: { tagId: number }) => {
  const { mutateAsync, isPending } = useDeletePHDTag();

  const { page, pageSize } = usePHDTagStore((s) => s.PHDTagsQuery);
  const { data: tags } = usePHDTags({ page, pageSize });
  const setPage = usePHDTagStore((s) => s.setPage);

  const handlePagination = () => {
    if (tags?.results.length === 1 && page! > 1) setPage(page! - 1);
  };

  return (
    <DeleteButton
      itemId={tagId}
      itemName="PHD tag"
      routeAfterDelete="/config/phd-tags"
      isPending={isPending}
      mutateAsync={mutateAsync}
      onSuccess={handlePagination}
    />
  );
};

export default PHDTagDeleteButton;
