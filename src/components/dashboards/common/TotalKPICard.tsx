import { HStack, Heading, Text, VStack } from "@chakra-ui/react";
import numeral from "numeral";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { DashboardCard } from ".";

interface Props {
  header: string;
  value: number | string;
  units: string;
  difference: number;
  isLimit?: boolean;
}

const TotalKPICard = ({
  header,
  value,
  units,
  difference,
  isLimit = false,
}: Props) => {
  return (
    <DashboardCard h="100%">
      <VStack justify="space-between" h="100%" align="flex-start">
        <Heading size={{ base: "sm", xl: "md" }} mb={1}>
          {header}
        </Heading>
        <HStack mb={1} align="center">
          <Text
            fontSize={{ base: "xl", xl: "3xl" }}
            fontWeight={800}
            mr={3}
            color="blue.700"
          >
            {numeral(value).format("0.0a").toUpperCase()}
          </Text>
          <Text fontSize={{ base: "sm", xl: "md" }}>{units}</Text>
        </HStack>
        <HStack>
          {difference > 0 ? (
            <FaArrowUp color={isLimit ? "red" : "green"} />
          ) : (
            <FaArrowDown color={isLimit ? "green" : "red"} />
          )}
          <Text>{Math.abs(difference)}% from target</Text>
        </HStack>
      </VStack>
    </DashboardCard>
  );
};

export default TotalKPICard;
