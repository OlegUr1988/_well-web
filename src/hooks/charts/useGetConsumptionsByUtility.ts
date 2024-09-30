import _ from "lodash";
import donutChartOptions from "../../constants/donutChartOtions";
import {
  electricityType,
  gasType,
  steamType,
} from "../../constants/utilityTypes";
import { Asset } from "../../entities/assets";
import { calculateSum } from "../../utils/records";
import useGetRecords from "../useGetRecords";
import useGetUtilityTypes from "../useGetUtilityTypes";

const useGetConsumptionsByUtility = (assets: Asset[]) => {
  const types = useGetUtilityTypes();

  // Get Gas assignments
  const gasAssets = types[gasType]
    ? assets.filter((asset) => asset.utilityTypeId === types[gasType].id)
    : [];
  const gasAttributes = _.flatten(gasAssets.map((asset) => asset.attributes));
  const gasAssignments = _.flatten(
    gasAttributes.map((attr) => attr.assignments)
  );

  // Get Steam assignments
  const steamAssets = types[steamType]
    ? assets.filter((asset) => asset.utilityTypeId === types[steamType].id)
    : [];
  const steamAttributes = _.flatten(
    steamAssets.map((asset) => asset.attributes)
  );
  const steamAssignments = _.flatten(
    steamAttributes.map((attr) => attr.assignments)
  );

  // Get Electricity assignments
  const electricityAssets = types[electricityType]
    ? assets.filter(
        (asset) => asset.utilityTypeId === types[electricityType].id
      )
    : [];
  const electricityAttributes = _.flatten(
    electricityAssets.map((asset) => asset.attributes)
  );
  const electricityAssignments = _.flatten(
    electricityAttributes.map((attr) => attr.assignments)
  );

  const { records: gasRecords, isLoading: isGasRecordsLoading } =
    useGetRecords(gasAssignments);
  const { records: steamRecords, isLoading: isSteamRecordsLoading } =
    useGetRecords(steamAssignments);
  const {
    records: electricityRecords,
    isLoading: isElectricityRecordsLoading,
  } = useGetRecords(electricityAssignments);

  const isLoading =
    isGasRecordsLoading || isSteamRecordsLoading || isElectricityRecordsLoading;

  if (isLoading) return null;

  const gas = calculateSum(gasRecords);
  const steam = calculateSum(steamRecords);
  const electricity = calculateSum(electricityRecords);

  const series = [gas, steam, electricity];

  const labels = ["Gas", "Steam", "Electricity"];

  const options = { ...donutChartOptions, labels };

  return { series, options };
};

export default useGetConsumptionsByUtility;
