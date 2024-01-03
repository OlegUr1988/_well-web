import { Card, Collapse, HStack, Text, useDisclosure } from "@chakra-ui/react";
import { Parameter } from "../../entities/parameters";
import { AssignmentCreateButton, AssignmentsList } from "../assignments";
import { CollapsibleButton } from "../common/buttons";
import ParameterDeleteButton from "./ParameterDeleteButton";
import ParameterEditButton from "./ParameterEditButton";

const ParameterCard = ({ parameter }: { parameter: Parameter }) => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Card variant="outline">
      <HStack p={3} justify="space-between">
        <HStack>
          <Text>{parameter.name}</Text>
          <CollapsibleButton isOpen={isOpen} onClick={onToggle} />
        </HStack>
        <HStack>
          <AssignmentCreateButton parameterId={parameter.id} />
          <ParameterEditButton parameter={parameter} />
          <ParameterDeleteButton parameterId={parameter.id} />
        </HStack>
      </HStack>
      <Collapse in={isOpen} animateOpacity>
        <AssignmentsList parameterId={parameter.id} />
      </Collapse>
    </Card>
  );
};

export default ParameterCard;
