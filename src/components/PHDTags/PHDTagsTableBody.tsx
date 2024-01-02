import { Button, Tbody, Td, Tr } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { PHDTag } from "../../entities/PHDTags";
import usePHDTagStore from "../../store/phdTags";
import PHDTagDeleteButton from "./PHDTagDeleteButton";

const PHDTagsTableBody = ({ tags }: { tags: PHDTag[] }) => {
  const { page, pageSize } = usePHDTagStore((s) => s.PHDTagsQuery);

  return (
    <Tbody>
      {tags?.map((tag, index) => (
        <Tr key={tag.id}>
          <Td textAlign="center">{(page! - 1) * pageSize! + (index + 1)}</Td>
          <Td textAlign="center">{tag.tagname}</Td>
          <Td textAlign="center">{tag.unit.name}</Td>
          <Td textAlign="center">
            <Link to={`/config/phd-tags/${tag.id}`}>
              <Button colorScheme="yellow">Modify</Button>
            </Link>
          </Td>
          <Td textAlign="center">
            <PHDTagDeleteButton tagId={tag.id} />
          </Td>
        </Tr>
      ))}
    </Tbody>
  );
};

export default PHDTagsTableBody;
