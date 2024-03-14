import { Card, Collapse, HStack, Text, useDisclosure } from "@chakra-ui/react";
import { Attribute } from "../../../entities/attributes";
import useUserStore from "../../../store/user";
import { CollapsibleButton } from "../../common/buttons";
import { AssignmentCreateButton, AssignmentsList } from "../assignments";
import AttributeDeleteButton from "./AttributeDeleteButton";
import AttributeEditButton from "./AttributeEditButton";

interface Props {
  attribute: Attribute;
  showEdit?: boolean;
  showDelete?: boolean;
}

const AttributeCard = ({
  attribute,
  showEdit = false,
  showDelete = false,
}: Props) => {
  const { isOpen, onToggle } = useDisclosure();
  const user = useUserStore((s) => s.user);

  if (!attribute) return null;

  return (
    <Card variant="outline">
      <HStack p={3} justify="space-between">
        <HStack>
          <Text>{attribute.name}</Text>
          <CollapsibleButton isOpen={isOpen} onClick={onToggle} />
        </HStack>
        <HStack>
          {user && <AssignmentCreateButton attributeId={attribute.id} />}
          {user && showEdit && <AttributeEditButton attribute={attribute} />}
          {user && showDelete && (
            <AttributeDeleteButton attributeId={attribute.id} />
          )}
        </HStack>
      </HStack>
      <Collapse in={isOpen} animateOpacity>
        <AssignmentsList attributeId={attribute.id} />
      </Collapse>
    </Card>
  );
};

export default AttributeCard;
