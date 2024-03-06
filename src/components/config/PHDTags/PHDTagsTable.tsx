import { Table, TableContainer } from "@chakra-ui/react";
import { PHDTag } from "../../../entities/PHDTags";
import PHDTagsTableBody from "./PHDTagsTableBody";
import PHDTagsTableHead from "./PHDTagsTableHead";

const PHDTagsTable = ({ tags }: { tags: PHDTag[] }) => {
  return (
    <TableContainer border="1px" borderRadius={10} borderColor="gray.200">
      <Table variant="striped" size="sm">
        <PHDTagsTableHead />
        <PHDTagsTableBody tags={tags} />
      </Table>
    </TableContainer>
  );
};

export default PHDTagsTable;
