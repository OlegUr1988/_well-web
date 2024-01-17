import { Skeleton, Tfoot, Tr } from "@chakra-ui/react";
import LossesTableHeadCell from "./LossesTableHeadCell";

const LossesTableFootSkeleton = ({ label }: { label?: string }) => {
  return (
    <Tfoot>
      <Tr>
        <LossesTableHeadCell w="50%" textAlign="initial">
          {label}
        </LossesTableHeadCell>
        <LossesTableHeadCell>
          <Skeleton h={4} />
        </LossesTableHeadCell>
        <LossesTableHeadCell>
          <Skeleton h={4} />
        </LossesTableHeadCell>
        <LossesTableHeadCell>
          <Skeleton h={4} />
        </LossesTableHeadCell>
        <LossesTableHeadCell>
          <Skeleton h={4} />
        </LossesTableHeadCell>
        <LossesTableHeadCell>
          <Skeleton h={4} />
        </LossesTableHeadCell>
      </Tr>
    </Tfoot>
  );
};

export default LossesTableFootSkeleton;
