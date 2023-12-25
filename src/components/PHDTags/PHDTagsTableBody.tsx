import { Button, Tbody, Td, Tr } from "@chakra-ui/react";
import moment from "moment";
import { Link } from "react-router-dom";
import timeFormat from "../../constants/timeFormat";
import { PHDTag } from "../../entities/PHDTags";
import usePHDTagStore from "../../store/phdTags";

const PHDTagsTableBody = ({ tags }: { tags: PHDTag[] }) => {
  const { page, pageSize } = usePHDTagStore((s) => s.PHDTagsQuery);

  return (
    <Tbody>
      {tags?.map((tag, index) => (
        <Tr key={tag.id}>
          <Td textAlign="center">{(page! - 1) * pageSize! + (index + 1)}</Td>
          <Td textAlign="center">{tag.tagname}</Td>
          <Td textAlign="center">{tag.description}</Td>
          <Td textAlign="center">
            {moment(tag.created_at).format(timeFormat)}
          </Td>
          <Td textAlign="center">
            {moment(tag.updated_at).format(timeFormat)}
          </Td>
          <Td textAlign="center">
            <Link to={`/config/assets/${tag.id}`}>
              <Button colorScheme="yellow">Modify</Button>
            </Link>
          </Td>
          <Td textAlign="center">
            {/* <AssetDeleteButton assetId={asset.id} /> */}
          </Td>
        </Tr>
      ))}
    </Tbody>
  );
};

export default PHDTagsTableBody;
