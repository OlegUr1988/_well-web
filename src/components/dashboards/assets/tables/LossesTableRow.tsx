import { Tr } from "@chakra-ui/react";
import _ from "lodash";
import { Attribute } from "../../../../entities/attributes";
import useGetRecords from "../../../../hooks/useGetRecords";
import { getRatio, getSumOfRecords } from "../../../../utils/records";
import LossesTableBodyCell from "./LossesTableBodyCell";
import LossesTableRowSkeleton from "./LossesTableRowSkeleton";

interface Props {
  parentAssetAttributes: Attribute[];
  attribute: Attribute;
}

const LossesTableRow = ({ parentAssetAttributes, attribute }: Props) => {
  const paretAssetAssignments = _.flatten(
    parentAssetAttributes.map((attr) => attr.assignments)
  );
  const { records: parentRecords, isLoading: isParentLoading } = useGetRecords(
    paretAssetAssignments
  );

  const { records, isLoading } = useGetRecords(attribute.assignments);

  if (isParentLoading && isLoading)
    return <LossesTableRowSkeleton label={attribute.name} />;

  if (!records) return null;

  return (
    <Tr>
      <LossesTableBodyCell textAlign="initial">
        {attribute.name}
      </LossesTableBodyCell>
      <LossesTableBodyCell>
        {getSumOfRecords(records!, "kWh")}
      </LossesTableBodyCell>
      <LossesTableBodyCell>kWh</LossesTableBodyCell>
      <LossesTableBodyCell>
        {getSumOfRecords(records!, "ton CO2")}
      </LossesTableBodyCell>
      <LossesTableBodyCell>Ton CO2</LossesTableBodyCell>
      <LossesTableBodyCell>
        {getRatio(records, parentRecords)}
      </LossesTableBodyCell>
    </Tr>
  );
};

export default LossesTableRow;
