import {
  Spinner,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { Assignment } from "../../entities/Assignments";
import { useAssignments } from "../../hooks/assignments";
import { useUnits } from "../../hooks/units";
import AssignmentEditButton from "./AssignmentEditButton";

const AssignmentsList = ({ parameterId }: { parameterId: number }) => {
  const { data: assigns, isLoading, error } = useAssignments(parameterId);
  const { data: units } = useUnits({});

  if (error) return null;

  if (isLoading) return <Spinner />;

  const getUnits = (assign: Assignment) => {
    return units?.results.filter((unit) => unit.id === assign.PHDTag.unitId)[0]
      .name;
  };

  return (
    <TableContainer>
      <Table>
        <Thead>
          <Tr>
            <Th>Tagname</Th>
            <Th textAlign="center">Units</Th>
            <Th></Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {assigns?.map((assign, index) => (
            <Tr key={index}>
              <Td>{assign.PHDTag.tagname}</Td>
              <Td textAlign="center">{getUnits(assign)}</Td>
              <Td textAlign="center">
                <AssignmentEditButton assignment={assign} />
              </Td>
              <Td textAlign="center">delete</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default AssignmentsList;
