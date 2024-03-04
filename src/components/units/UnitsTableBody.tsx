import { Tbody, Td, Tr } from "@chakra-ui/react";
import { Unit } from "../../entities/units";
import useUnitsStore from "../../store/unitsStore";
import UnitEditButton from "./UnitEditButton";
import UnitDeleteButton from "./UnitDeleteButton";
import useUserStore from "../../store/user";

const UnitsTableBody = ({ units }: { units: Unit[] }) => {
  const { page, pageSize } = useUnitsStore((s) => s.unitsQuery);
  const user = useUserStore((s) => s.user);

  return (
    <Tbody>
      {units?.map((unit, index) => (
        <Tr key={unit.id}>
          <Td textAlign="center">{(page! - 1) * pageSize! + (index + 1)}</Td>
          <Td textAlign="center">{unit.name}</Td>
          {user && (
            <Td textAlign="center">
              <UnitEditButton unit={unit} />
            </Td>
          )}
          {user && (
            <Td textAlign="center">
              <UnitDeleteButton unitId={unit.id} />
            </Td>
          )}
        </Tr>
      ))}
    </Tbody>
  );
};

export default UnitsTableBody;
