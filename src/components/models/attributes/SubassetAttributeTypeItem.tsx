import { Box, HStack, Text } from "@chakra-ui/react";
import { Attribute } from "../../../entities/attributes";
import useModelStore from "../../../store/model";
import useUserStore from "../../../store/user";
import AttributeCreateButton from "./AttributeCreateButton";
import SubassetAttributesList from "./SubassetAttributesList";

interface Props {
  attributes: Attribute[];
  attributeTypeId: number;
  label: string;
  showCreateButton?: boolean;
}

const SubassetAttributeTypeItem = ({
  attributes,
  attributeTypeId,
  label,
  showCreateButton = true,
}: Props) => {
  const { subassetId } = useModelStore((s) => s.modelQuery);
  const user = useUserStore((s) => s.user);

  return (
    <>
      <HStack mb={3}>
        <Text fontSize={22}>Attribute type: </Text>
        <Text fontSize={22} fontWeight="bold">
          {label}
        </Text>
      </HStack>
      {showCreateButton && user && (
        <Box mb={3}>
          <AttributeCreateButton
            attributeTypeId={attributeTypeId}
            assetId={subassetId}
          />
        </Box>
      )}
      <Box mb={10}>
        <SubassetAttributesList
          attributes={attributes}
          typeId={attributeTypeId}
        />
      </Box>
    </>
  );
};

export default SubassetAttributeTypeItem;
