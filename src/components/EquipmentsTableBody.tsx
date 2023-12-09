import { Button, Tbody, Td, Tr } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Equipment from "../entities/Equipment";
import moment from "moment";
import timeFormat from "../constants/timeFormat";

const EquipmentsTableBody = ({ equipments }: { equipments: Equipment[] }) => {
  return (
    <Tbody>
      {equipments.map((equipment, index) => (
        <Tr key={equipment.id}>
          <Td textAlign="center">{index + 1}</Td>
          <Td textAlign="center">{equipment.name}</Td>
          <Td textAlign="center">{equipment.asset.name}</Td>
          <Td textAlign="center">
            {moment(equipment.created_at).format(timeFormat)}
          </Td>
          <Td textAlign="center">
            {moment(equipment.updated_at).format(timeFormat)}
          </Td>
          <Td textAlign="center">
            <Link to={`/config/eqipments/${equipment.id}`}>
              <Button colorScheme="yellow">Modify</Button>
            </Link>
          </Td>
          <Td textAlign="center">
            <Button colorScheme="red">Delete</Button>
          </Td>
        </Tr>
      ))}
    </Tbody>
  );
};

export default EquipmentsTableBody;
