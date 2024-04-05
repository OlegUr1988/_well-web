import { Tfoot, Tr } from "@chakra-ui/react";
import _ from "lodash";
import { Attribute } from "../../../../entities/attributes";
import useGetRecords from "../../../../hooks/useGetRecords";
import {
  calculateRecordsSum,
  getAverageOfRecords,
} from "../../../../utils/records";
import LossesTableFootSkeleton from "./LossesTableFootSkeleton";
import LossesTableHeadCell from "./LossesTableHeadCell";

interface Props {
  attributes: Attribute[];
  label?: string;
}

const LossesTableFoot = ({ attributes, label = "Total" }: Props) => {
  const assignments = _.flatten(attributes.map((attr) => attr.assignments));
  const { records, isLoading } = useGetRecords(assignments);

  if (isLoading) return <LossesTableFootSkeleton label={label} />;

  if (!records) return null;

  return (
    <Tfoot>
      <Tr>
        <LossesTableHeadCell w="50%" textAlign="initial">
          {label}
        </LossesTableHeadCell>
        <LossesTableHeadCell>
          {calculateRecordsSum(records!, "kWh")}
        </LossesTableHeadCell>
        <LossesTableHeadCell>kWh</LossesTableHeadCell>
        <LossesTableHeadCell>
          {calculateRecordsSum(records!, "ton CO2")}
        </LossesTableHeadCell>
        <LossesTableHeadCell whiteSpace="nowrap">Ton CO2</LossesTableHeadCell>
        <LossesTableHeadCell>
          {getAverageOfRecords(assignments, records) + "%"}
        </LossesTableHeadCell>
      </Tr>
    </Tfoot>
  );
};

export default LossesTableFoot;
