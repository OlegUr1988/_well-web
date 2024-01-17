import { Skeleton, Tr } from "@chakra-ui/react";
import LossesTableBodyCell from "./LossesTableBodyCell";

const LossesTableRowSkeleton = ({ label }: { label?: string }) => {
  return (
    <Tr>
      <LossesTableBodyCell textAlign="initial">{label}</LossesTableBodyCell>
      <LossesTableBodyCell>
        <Skeleton h={4} />
      </LossesTableBodyCell>
      <LossesTableBodyCell>
        <Skeleton h={4} />
      </LossesTableBodyCell>
      <LossesTableBodyCell>
        <Skeleton h={4} />
      </LossesTableBodyCell>
      <LossesTableBodyCell>
        <Skeleton h={4} />
      </LossesTableBodyCell>
      <LossesTableBodyCell>
        <Skeleton h={4} />
      </LossesTableBodyCell>
    </Tr>
  );
};

export default LossesTableRowSkeleton;
