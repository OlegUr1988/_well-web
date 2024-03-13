import _ from "lodash";
import losses from "../constants/losses";
import useGetLossesByTypes from "./useGetLossesByTypes";
import useGetRecords from "./useGetRecords";
import { Asset } from "../entities/assets";

const useGetSeriesByAsset = (assets: Asset[]) => {
  const allAttributes = _.flatten(assets?.map((eq) => eq.attributes));
  const attributes = useGetLossesByTypes(allAttributes, losses);

  // getting assignments
  const assignments = _.flatten(attributes.map((attr) => attr.assignments));

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

export default useGetSeriesByAsset;
