import { Box, HStack, Text } from "@chakra-ui/react";
import { Attribute } from "../../../entities/attributes";
import useAttributeTypes from "../../../hooks/useAttributeTypes";
import useModelStore from "../../../store/model";
import useUserStore from "../../../store/user";
import AttributeCreateButton from "./AttributeCreateButton";
import AttributesList from "./AttributesList";

const SubassetAttributeTypesList = ({
  attributes,
}: {
  attributes: Attribute[];
}) => {
  const { subassetId } = useModelStore((s) => s.modelQuery);
  const user = useUserStore((s) => s.user);

  const { data: types } = useAttributeTypes();
  const subassetTypes = ["duty", "design loss", "operating loss"];

  const filteredTypes = types?.filter((type) =>
    subassetTypes.includes(type.name.toLowerCase())
  );

  return (
    <>
      {filteredTypes?.map((type) => (
        <Box key={type.id} mb={5}>
          <HStack mb={3}>
            <Text fontSize={22}>Attribute type: </Text>
            <Text fontSize={22} fontWeight="bold">
              {type.name}
            </Text>
          </HStack>
          <Box mb={3}>
            {user && type.name.toLowerCase() !== "duty" && (
              <AttributeCreateButton
                attributeTypeId={type.id}
                assetId={subassetId}
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

export default SubassetAttributeTypesList;
