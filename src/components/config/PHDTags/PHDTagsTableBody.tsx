import { Tbody, Td, Tr } from "@chakra-ui/react";
import { PHDTag } from "../../../entities/PHDTags";
import usePHDTagStore from "../../../store/phdTags";
import useUserStore from "../../../store/user";
import PHDTagDeleteButton from "./PHDTagDeleteButton";
import PHDTagEditButton from "./PHDTagEditButton";

const PHDTagsTableBody = ({ tags }: { tags: PHDTag[] }) => {
  const { page, pageSize } = usePHDTagStore((s) => s.PHDTagsQuery);
  const user = useUserStore((s) => s.user);

  return (
    <Tbody>
      {tags?.map((tag, index) => (
        <Tr key={tag.id}>
          <Td textAlign="center">{(page! - 1) * pageSize! + (index + 1)}</Td>
          <Td textAlign="center">{tag.tagname}</Td>
          <Td textAlign="center">{tag.unit.name}</Td>
          {user && (
            <Td textAlign="center">
              <PHDTagEditButton tag={tag} />
            </Td>
          )}
          {user && (
            <Td textAlign="center">
              <PHDTagDeleteButton tagId={tag.id} />
            </Td>
          )}
        </Tr>
      ))}
    </Tbody>
  );
};

export default PHDTagsTableBody;
