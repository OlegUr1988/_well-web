import { Tbody, Td, Tr } from "@chakra-ui/react";
import { Unit } from "../../entities/units";
import useUnitsStore from "../../store/unitsStore";
import UnitEditButton from "./UnitEditButton";

const UnitsTableBody = ({ units }: { units: Unit[] }) => {
  const { page, pageSize } = useUnitsStore((s) => s.unitsQuery);

  return (
    <Tbody>
      {units?.map((unit, index) => (
        <Tr key={unit.id}>
          <Td textAlign="center">{(page! - 1) * pageSize! + (index + 1)}</Td>
          <Td textAlign="center">{unit.name}</Td>
          <Td textAlign="center">
            <UnitEditButton unit={unit} />
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
