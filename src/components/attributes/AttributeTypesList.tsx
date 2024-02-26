import { Box, HStack, Text } from "@chakra-ui/react";
import { Attribute } from "../../entities/attributes";
import useAttributeTypes from "../../hooks/useAttributeTypes";
import useModelStore from "../../store/model";
import AttributeCreateButton from "./AttributeCreateButton";
import AttributesList from "./AttributesList";
import useUserStore from "../../store/auth";

const AttributeTypesList = ({ attributes }: { attributes: Attribute[] }) => {
  const { equipmentId } = useModelStore((s) => s.modelQuery);
  const user = useUserStore((s) => s.user);

  const { data: types } = useAttributeTypes();
  return (
    <>
      {types?.map((type) => (
        <Box key={type.id} mb={5}>
          <HStack mb={3}>
            <Text fontSize={22}>Attribute type: </Text>
            <Text fontSize={22} fontWeight="bold">
              {type.name}
            </Text>
          </HStack>
          <Box mb={3}>
            {user && (
              <AttributeCreateButton
                attributeTypeId={type.id}
                equipmentId={equipmentId}
              />
            )}
          </Box>
          <Box mb={10}>
            <AttributesList attributes={attributes} typeId={type.id} />
          </Box>
        </Box>
      ))}
    </>
  );
};

export default AttributeTypesList;
