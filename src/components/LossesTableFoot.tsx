import { Tfoot, Th, Tr } from "@chakra-ui/react";
import _ from "lodash";
import { Attribute } from "../entities/attributes";
import useRecords from "../hooks/useRecords";
import { getRecordsByUnits, getSumOfRecords } from "../utils/records";

const LossesTableFoot = ({
  attributes,
  label = "Total",
}: {
  attributes: Attribute[];
  label?: string;
}) => {
  const assignments = _.flatten(attributes.map((attr) => attr.assignment));
  const ids = assignments.map((assignment) => assignment.PHDTagId);
  const PHDTagIds = ids.length ? ids : [0];

  const { data: records } = useRecords({ PHDTagIds });

  if (!records) return null;

  return (
    <Tfoot>
      <Tr>
        <Th>{label}</Th>
        <Th textAlign="center">
          {getSumOfRecords(getRecordsByUnits(records!, "kWh"))}
        </Th>
        <Th textAlign="center">kWh</Th>
        <Th textAlign="center">
          {getSumOfRecords(getRecordsByUnits(records!, "ton CO2"))}
        </Th>
        <Th textAlign="center" whiteSpace="nowrap">
          Ton CO2
        </Th>
        <Th textAlign="center">
          {getSumOfRecords(getRecordsByUnits(records!, "%")) + "%"}
        </Th>
      </Tr>
    </Tfoot>
  );
};

export default LossesTableFoot;
