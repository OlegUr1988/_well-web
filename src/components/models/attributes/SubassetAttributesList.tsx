import { List, ListItem } from "@chakra-ui/react";
import { Attribute } from "../../../entities/attributes";
import AttributeCard from "./AttributeCard";
import useAttributeTypes from "../../../hooks/useAttributeTypes";

const SubassetAttributesList = ({
  attributes,
  typeId,
}: {
  attributes: Attribute[];
  typeId: number;
}) => {
  const { data: types } = useAttributeTypes();
  const dutyType = types?.find((type) => type.name.toLowerCase() === "duty");

  const isDutyType = (attribute: Attribute) =>
    attribute.attributeTypeId !== dutyType?.id;

  return (
    <>
      {attributes
        ?.filter((attribute) => attribute.attributeTypeId === typeId)
        .map((attribute) => (
          <List key={attribute.id}>
            <ListItem mb={2}>
              <AttributeCard
                attribute={attribute}
                showEdit={isDutyType(attribute)}
                showDelete={isDutyType(attribute)}
              />
            </ListItem>
          </List>
        ))}
    </>
  );
};

export default SubassetAttributesList;
