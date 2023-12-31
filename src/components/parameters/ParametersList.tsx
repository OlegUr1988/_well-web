import { HStack, List, ListItem, Text } from "@chakra-ui/react";
import { Parameter } from "../../entities/parameters";
import ParameterDeleteButton from "./ParameterDeleteButton";
import ParameterEditButton from "./ParameterEditButton";

const ParametersList = ({
  parameters,
  typeId,
}: {
  parameters: Parameter[];
  typeId: number;
}) => {
  return (
    <>
      {parameters
        ?.filter((parameter) => parameter.parameterTypeId === typeId)
        .map((parameter) => (
          <List key={parameter.id}>
            <ListItem mb={2}>
              <HStack>
                <Text>{parameter.name}</Text>
                <ParameterEditButton parameter={parameter} />
                <ParameterDeleteButton parameterId={parameter.id} />
              </HStack>
            </ListItem>
          </List>
        ))}
    </>
  );
};

export default ParametersList;
