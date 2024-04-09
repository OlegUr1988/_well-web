import { Heading, HStack } from "@chakra-ui/react";
import TrendSelectInput from "./TrendSelectInput";

const TotalKPICardHeader = ({ label }: { label: string }) => {
  return (
    <HStack className="z-level-three" mb={3} justify="space-between">
      <Heading fontSize={{ base: "lg", xl: "xl" }}>{label}</Heading>
      <TrendSelectInput />
    </HStack>
  );
};

export default TotalKPICardHeader;
