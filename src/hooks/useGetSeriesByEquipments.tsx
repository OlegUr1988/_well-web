import _ from "lodash";
import { Equipment } from "../entities/equipments";
import useGetAttributesByType from "./useGetLossesByType";
import useGetRecords from "./useGetRecords";

const useGetSeriesByEquipments = (equipments: Equipment[]) => {
  const allAttributes = _.flatten(equipments?.map((eq) => eq.attribute));
  const attributes = useGetAttributesByType(allAttributes, "loss");

  // getting assignments
  const assignments = _.flatten(attributes.map((attr) => attr.assignment));

  // getting records
  const { records } = useGetRecords(assignments);
  const filteredRecords = records?.filter(
    (record) => record.PHDTag.unit.name === "kWh"
  );
  const groupedRecords = _.groupBy(filteredRecords, "PHDTagId");
  const uniqueRecords = _.mapValues(groupedRecords, (value) =>
    _.uniqBy(value, "timestamp")
  );

  // filtering assignments
  const ids = _.flatten(filteredRecords?.map((r) => r.PHDTagId));
  const filteredAssignments = assignments.filter((ass) =>
    ids.includes(ass.PHDTagId)
  );

  // setting series
  return filteredAssignments.map((a) => ({
    name: a.attribute.name,
    data: uniqueRecords[a.PHDTagId].map((r) => ({
      x: r.timestamp,
      y: r.value,
    })),
  }));
};

export default useGetSeriesByEquipments;
