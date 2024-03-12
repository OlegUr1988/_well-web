import { List, ListItem } from "@chakra-ui/react";
import { Attribute } from "../../../entities/attributes";
import AttributeCard from "./AttributeCard";

const AttributesList = ({
  attributes,
  typeId,
}: {
  attributes: Attribute[];
  typeId: number;
}) => {
  return (
    <>
      {attributes
        ?.filter((attribute) => attribute.attributeTypeId === typeId)
        .map((parameter) => (
          <List key={parameter.id}>
            <ListItem mb={2}>
              <AttributeCard attribute={parameter} />
            </ListItem>
          </List>
        ))}
    </>
  );
};

export default AttributesList;
