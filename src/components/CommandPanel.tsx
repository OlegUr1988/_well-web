import { Button, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface Props {
  createPath: string;
  createLabel: string;
  exportButton?: JSX.Element;
  importButton?: JSX.Element;
}

const CommandPanel = ({
  createPath,
  createLabel,
  exportButton,
  importButton,
}: Props) => {
  return (
    <HStack justify="space-between">
      <Link to={createPath}>
        <Button colorScheme="blue">{createLabel}</Button>
      </Link>

      <HStack gap={3}>
        {exportButton}
        {importButton}
      </HStack>
    </HStack>
  );
};

export default CommandPanel;
