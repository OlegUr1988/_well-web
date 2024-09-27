import { List, ListItem } from "@chakra-ui/react";
import { Attribute } from "../../../entities/attributes";
import useAttributeTypes from "../../../hooks/useAttributeTypes";
import AttributeCard from "./AttributeCard";

const editableAttributes = ["design loss", "operating loss"];

const SubassetAttributesList = ({
  attributes,
  typeId,
}: {
  attributes: Attribute[];
  typeId: number;
}) => {
  const { data: types } = useAttributeTypes();
  const filtered = types?.filter((type) =>
    editableAttributes.includes(type.name.toLowerCase())
  );
  const typeIds = filtered?.map((type) => type.id);

  const isEditable = (attribute: Attribute) =>
    typeIds?.includes(attribute.attributeTypeId);

  return (
    <>
      {attributes
        ?.filter((attribute) => attribute.attributeTypeId === typeId)
        .map((attribute) => (
          <List key={attribute.id}>
            <ListItem mb={2}>
              <AttributeCard
                attribute={attribute}
                showEdit={isEditable(attribute)}
                showDelete={isEditable(attribute)}
              />
            </ListItem>
          </List>
        ))}
    </>
  );
};

export default SubassetAttributesList;
