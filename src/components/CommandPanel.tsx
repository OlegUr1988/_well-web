import { HStack } from "@chakra-ui/react";
import useUserStore from "../store/auth";

interface Props {
  createButton?: JSX.Element;
  exportButton?: JSX.Element;
  importButton?: JSX.Element;
}

const CommandPanel = ({ createButton, exportButton, importButton }: Props) => {
  const user = useUserStore((s) => s.user);

  return (
    <HStack justify="space-between">
      {user && createButton}

      <HStack gap={3}>
        {exportButton}
        {user && importButton}
      </HStack>
    </HStack>
  );
};

export default CommandPanel;
