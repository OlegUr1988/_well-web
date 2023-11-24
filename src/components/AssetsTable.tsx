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
import useAssets from "../hooks/useAssets";

const AssetsTable = () => {
  const { data: assets } = useAssets();

  return (
    <TableContainer border="1px" borderRadius={10} borderColor="gray.200">
      <Table variant="striped">
        <Thead>
          <Tr>
            <Th>#</Th>
            <Th>Asset</Th>
            <Th></Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {assets?.map((asset) => (
            <Tr key={asset.id}>
              <Td>{asset.id}</Td>
              <Td>{asset.name}</Td>
              <Td textAlign="right">
                <Link to={`/config/assets/:${asset.id}`}>
                  <Button bg="lightblue">Modify</Button>
                </Link>
              </Td>
              <Td textAlign="right">
                <Button bg="red">Delete</Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default AssetsTable;
