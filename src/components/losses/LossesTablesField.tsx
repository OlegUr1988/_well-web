import { Box, Heading } from "@chakra-ui/react";
import { Equipment } from "../../entities/equipments";
import LossesTable from "./LossesTable";

const LossesTablesField = ({ equipments }: { equipments: Equipment[] }) => {
  return (
    <>
      {equipments?.map((equipment) => (
        <Box key={equipment.id}>
          <Heading size="sm">{equipment.name}</Heading>
          <Box overflowX="auto" mb={3}>
            <LossesTable equipment={equipment} />
          </Box>
        </Box>
      ))}
    </>
  );
};

export default LossesTablesField;
