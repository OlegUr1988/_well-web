import { Button } from "@chakra-ui/button";
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/table";
import { Link } from "react-router-dom";
import Asset from "../entities/Asset";

const AssetsTable = ({ assets }: { assets: Asset[] }) => {
  return (
    <TableContainer border="1px" borderRadius={10} borderColor="gray.200">
      <Table variant="striped" size="sm">
        <Thead>
          <Tr height={12}>
            <Th>#</Th>
            <Th>Asset</Th>
            <Th></Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {assets?.map((asset, index) => (
            <Tr key={index + 1}>
              <Td>{asset.id}</Td>
              <Td>{asset.name}</Td>
              <Td textAlign="right">
                <Link to={`/config/assets/:${asset.id}`}>
                  <Button colorScheme="yellow">Modify</Button>
                </Link>
              </Td>
              <Td textAlign="right">
                <Button colorScheme="red">Delete</Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default AssetsTable;
