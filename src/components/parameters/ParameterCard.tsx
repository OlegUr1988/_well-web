import { Card, CardBody, HStack, Text } from "@chakra-ui/react";
import { Parameter } from "../../entities/parameters";
import { AssignmentCreateButton, AssignmentsList } from "../assignments";
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
      <CardBody>
        <AssignmentsList parameterId={parameter.id} />
      </CardBody>
    </Card>
  );
};

export default ParameterCard;
