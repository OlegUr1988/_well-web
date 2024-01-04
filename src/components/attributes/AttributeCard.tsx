import { Card, Collapse, HStack, Text, useDisclosure } from "@chakra-ui/react";
import { Attribute } from "../../entities/attributes";
import { AssignmentCreateButton, AssignmentsList } from "../assignments";
import { CollapsibleButton } from "../common/buttons";
import AttributeDeleteButton from "./AttributeDeleteButton";
import AttributeEditButton from "./AttributeEditButton";

const AttributeCard = ({ attribute }: { attribute: Attribute }) => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Card variant="outline">
      <HStack p={3} justify="space-between">
        <HStack>
          <Text>{attribute.name}</Text>
          <CollapsibleButton isOpen={isOpen} onClick={onToggle} />
        </HStack>
        <HStack>
          <AssignmentCreateButton attributeId={attribute.id} />
          <AttributeEditButton attribute={attribute} />
          <AttributeDeleteButton attributeId={attribute.id} />
        </HStack>
      </HStack>
      <Collapse in={isOpen} animateOpacity>
        <AssignmentsList attributeId={attribute.id} />
      </Collapse>
    </Card>
  );
};

export default AttributeCard;
