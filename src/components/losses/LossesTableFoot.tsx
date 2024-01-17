import { Tfoot, Th, Tr } from "@chakra-ui/react";
import _ from "lodash";
import { Attribute } from "../../entities/attributes";
import useGetRecords from "../../hooks/useGetRecords";
import { calculateRecordsSum } from "../../utils/records";

interface Props {
  attributes: Attribute[];
  label?: string;
}

const LossesTableFoot = ({ attributes, label = "Total" }: Props) => {
  const assignments = _.flatten(attributes.map((attr) => attr.assignment));
  const { records } = useGetRecords(assignments);

  if (!records) return null;

  return (
    <Tfoot>
      <Tr>
        <Th>{label}</Th>
        <Th textAlign="center">{calculateRecordsSum(records!, "kWh")}</Th>
        <Th textAlign="center">kWh</Th>
        <Th textAlign="center">{calculateRecordsSum(records!, "ton CO2")}</Th>
        <Th textAlign="center" whiteSpace="nowrap">
          Ton CO2
        </Th>
        <Th textAlign="center">{calculateRecordsSum(records!, "%") + "%"}</Th>
      </Tr>
    </Tfoot>
  );
};

export default LossesTableFoot;
