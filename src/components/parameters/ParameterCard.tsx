import { Card, HStack, Text } from "@chakra-ui/react";
import { Parameter } from "../../entities/parameters";
import { AssignmentCreateButton } from "../assignments";
import ParameterDeleteButton from "./ParameterDeleteButton";
import ParameterEditButton from "./ParameterEditButton";

const ParameterCard = ({ parameter }: { parameter: Parameter }) => {
  return (
    <Card variant="outline">
      <HStack p={3} justify="space-between">
        <Text>{parameter.name}</Text>
        <HStack>
          <AssignmentCreateButton parameterId={parameter.id} />
          <ParameterEditButton parameter={parameter} />
          <ParameterDeleteButton parameterId={parameter.id} />
        </HStack>
      </HStack>
    </Card>
  );
};

export default ParameterCard;
