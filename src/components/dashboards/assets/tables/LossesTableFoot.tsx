import { Tfoot, Tr } from "@chakra-ui/react";
import _ from "lodash";
import { Attribute } from "../../../../entities/attributes";
import useGetRecords from "../../../../hooks/useGetRecords";
import { getRatio, getSumOfRecords } from "../../../../utils/records";
import LossesTableFootSkeleton from "./LossesTableFootSkeleton";
import LossesTableHeadCell from "./LossesTableHeadCell";

interface Props {
  parentAssetAttributes: Attribute[];
  attributes: Attribute[];
  label?: string;
}

const LossesTableFoot = ({
  parentAssetAttributes,
  attributes,
  label = "Total",
}: Props) => {
  const paretAssetAssignments = _.flatten(
    parentAssetAttributes.map((attr) => attr.assignments)
  );
  const { records: parentRecords, isLoading: isParentLoading } = useGetRecords(
    paretAssetAssignments
  );

  const assignments = _.flatten(attributes.map((attr) => attr.assignments));
  const { records, isLoading } = useGetRecords(assignments);

  if (isParentLoading && isLoading)
    return <LossesTableFootSkeleton label={label} />;

  if (!records) return null;

  return (
    <Tfoot>
      <Tr>
        <LossesTableHeadCell w="50%" textAlign="initial">
          {label}
        </LossesTableHeadCell>
        <LossesTableHeadCell>
          {getSumOfRecords(records, "kWh")}
        </LossesTableHeadCell>
        <LossesTableHeadCell>kWh</LossesTableHeadCell>
        <LossesTableHeadCell>
          {getSumOfRecords(records, "ton CO2")}
        </LossesTableHeadCell>
        <LossesTableHeadCell whiteSpace="nowrap">Ton CO2</LossesTableHeadCell>
        <LossesTableHeadCell>
          {getRatio(records, parentRecords)}
        </LossesTableHeadCell>
      </Tr>
    </Tfoot>
  );
};

export default LossesTableFoot;
