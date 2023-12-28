import { Button, Tbody, Td, Tr } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Unit } from "../../entities/units";
import useUnitsStore from "../../store/unitsStore";

const UnitsTableBody = ({ units }: { units: Unit[] }) => {
  const { page, pageSize } = useUnitsStore((s) => s.unitsQuery);

  return (
    <Tbody>
      {units?.map((tag, index) => (
        <Tr key={tag.id}>
          <Td textAlign="center">{(page! - 1) * pageSize! + (index + 1)}</Td>
          <Td textAlign="center">
            <Link to={`/config/phd-tags/${tag.id}`}>
              <Button colorScheme="yellow">Modify</Button>
            </Link>
          </Td>
          <Td textAlign="center">
            {/* <PHDTagDeleteButton tagId={tag.id} /> */}
          </Td>
        </Tr>
      ))}
    </Tbody>
  );
};

export default UnitsTableBody;
