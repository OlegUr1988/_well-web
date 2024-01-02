import { HStack } from "@chakra-ui/react";

interface Props {
  createButton?: JSX.Element;
  exportButton?: JSX.Element;
  importButton?: JSX.Element;
}

const CommandPanel = ({ createButton, exportButton, importButton }: Props) => {
  return (
    <HStack justify="space-between">
      {createButton}

      <HStack gap={3}>
        {exportButton}
        {importButton}
      </HStack>
    </HStack>
  );
};

export default CommandPanel;
