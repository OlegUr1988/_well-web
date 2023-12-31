import { List, ListItem } from "@chakra-ui/react";
import { Parameter } from "../../entities/parameters";
import ParameterCard from "./ParameterCard";

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
              <ParameterCard parameter={parameter} />
            </ListItem>
          </List>
        ))}
    </>
  );
};

export default ParametersList;
