import { List, ListItem, Text } from "@chakra-ui/react";
import { Parameter } from "../../entities/parameters";

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
              <Text>{parameter.name}</Text>
            </ListItem>
          </List>
        ))}
    </>
  );
};

export default ParametersList;
