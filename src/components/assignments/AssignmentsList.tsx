import {
  Skeleton,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { Assignment } from "../../entities/assignments";
import { useAssignments } from "../../hooks/assignments";
import { useUnits } from "../../hooks/units";
import AssignmentDeleteButton from "./AssignmentDeleteButton";
import AssignmentEditButton from "./AssignmentEditButton";
import useUserStore from "../../store/auth";

const AssignmentsList = ({ attributeId }: { attributeId: number }) => {
  const { data: assigns, isLoading, error } = useAssignments(attributeId);
  const { data: units } = useUnits({});
  const user = useUserStore((s) => s.user);

  if (error) return null;

  if (isLoading) return <Skeleton h={75} m={3} borderRadius={10} />;

  const getUnits = (assign: Assignment) => {
    return units?.results.filter((unit) => unit.id === assign.PHDTag.unitId)[0]
      .name;
  };

  if (!assigns?.length) return null;

  return (
    <TableContainer m={5}>
      <Table>
        <Thead>
          <Tr>
            <Th>Tagname</Th>
            <Th textAlign="center">Units</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {assigns?.map((assign, index) => (
            <Tr key={index}>
              <Td>{assign.PHDTag.tagname}</Td>
              <Td textAlign="center">{getUnits(assign)}</Td>
              <Td textAlign="right">
                {user && <AssignmentEditButton assignment={assign} />}
                {user && <AssignmentDeleteButton assignment={assign} />}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default AssignmentsList;
